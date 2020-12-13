;
(function (f) {
    if (typeof window !== 'undefined') {
        return P.execute('siege-cse', function () {
            try {
                var lib = f();
                window.SiegeCrypto = lib;
                P.declare('siege-cse', lib);
            } catch (e) {
                try {
                    if (window.callPhantom && (!Function.prototype.bind || Function.prototype.bind.toString().replace(/bind/g, 'Error') != Error.toString())) {
                        console.log('siege-cse does not support PhantomJS 1.x, skipping error reporting');
                        return;
                    }
                } catch (e) {}
                P.logError(e, 'siege-cse init error: ', 'WARN', 'siege-cse');
                return;
            }
        });
    } else if (typeof importScripts !== 'undefined') {
        return f();
    } else {
        throw new Error('Cannot initialize SiegeCrypto outside window or worker');
    }
})(function () {
    var SiegeCrypto = function (e) {
        var t = {};
        function r(n) {
            if (t[n]) return t[n].exports;
            var i = t[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports
        }
        return r.m = e, r.c = t, r.d = function (e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }, r.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, r.t = function (e, t) {
            if (1 & t && (e = r(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (r.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var i in e) r.d(n, i, function (t) {
                    return e[t]
                }.bind(null, i));
            return n
        }, r.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e["default"]
            } : function () {
                return e
            };
            return r.d(t, "a", t), t
        }, r.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, r.p = "", r(r.s = 185)
    }([function (e, t, r) {
        var n = r(2),
            i = r(29).f,
            o = r(13),
            a = r(18),
            u = r(103),
            s = r(133),
            c = r(108);
        e.exports = function (e, t) {
            var r, f, l, h, p, d = e.target,
                y = e.global,
                v = e.stat;
            if (r = y ? n : v ? n[d] || u(d, {}) : (n[d] || {}).prototype)
                for (f in t) {
                    if (h = t[f], l = e.noTargetGet ? (p = i(r, f)) && p.value : r[f], !c(y ? f : d + (v ? "." : "#") + f, e.forced) && l !== undefined) {
                        if (typeof h == typeof l) continue;
                        s(h, l)
                    }(e.sham || l && l.sham) && o(h, "sham", !0), a(r, f, h, e)
                }
        }
    }, function (e, t) {
        e.exports = function (e) {
            try {
                return !!e()
            } catch (t) {
                return !0
            }
        }
    }, function (e, t, r) {
        (function (t) {
            var r = function (e) {
                return e && e.Math == Math && e
            };
            e.exports = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof t && t) || Function("return this")()
        }).call(this, r(101))
    }, function (e, t, r) {
        "use strict";
        var n, i = r(165),
            o = r(7),
            a = r(2),
            u = r(5),
            s = r(8),
            c = r(66),
            f = r(13),
            l = r(18),
            h = r(9).f,
            p = r(57),
            d = r(39),
            y = r(4),
            v = r(45),
            g = a.Int8Array,
            m = g && g.prototype,
            b = a.Uint8ClampedArray,
            w = b && b.prototype,
            x = g && p(g),
            M = m && p(m),
            k = Object.prototype,
            _ = k.isPrototypeOf,
            E = y("toStringTag"),
            A = v("TYPED_ARRAY_TAG"),
            S = i && !!d && "Opera" !== c(a.opera),
            O = !1,
            F = {
                Int8Array: 1,
                Uint8Array: 1,
                Uint8ClampedArray: 1,
                Int16Array: 2,
                Uint16Array: 2,
                Int32Array: 4,
                Uint32Array: 4,
                Float32Array: 4,
                Float64Array: 8
            },
            j = function (e) {
                return u(e) && s(F, c(e))
            };
        for (n in F) a[n] || (S = !1);
        if ((!S || "function" != typeof x || x === Function.prototype) && (x = function () {
                throw TypeError("Incorrect invocation")
            }, S))
            for (n in F) a[n] && d(a[n], x);
        if ((!S || !M || M === k) && (M = x.prototype, S))
            for (n in F) a[n] && d(a[n].prototype, M);
        if (S && p(w) !== M && d(w, M), o && !s(M, E))
            for (n in O = !0, h(M, E, {
                    get: function () {
                        return u(this) ? this[A] : undefined
                    }
                }), F) a[n] && f(a[n], A, n);
        e.exports = {
            NATIVE_ARRAY_BUFFER_VIEWS: S,
            TYPED_ARRAY_TAG: O && A,
            aTypedArray: function (e) {
                if (j(e)) return e;
                throw TypeError("Target is not a typed array")
            },
            aTypedArrayConstructor: function (e) {
                if (d) {
                    if (_.call(x, e)) return e
                } else
                    for (var t in F)
                        if (s(F, n)) {
                            var r = a[t];
                            if (r && (e === r || _.call(r, e))) return e
                        } throw TypeError("Target is not a typed array constructor")
            },
            exportTypedArrayMethod: function (e, t, r) {
                if (o) {
                    if (r)
                        for (var n in F) {
                            var i = a[n];
                            i && s(i.prototype, e) && delete i.prototype[e]
                        }
                    M[e] && !r || l(M, e, r ? t : S && m[e] || t)
                }
            },
            exportTypedArrayStaticMethod: function (e, t, r) {
                var n, i;
                if (o) {
                    if (d) {
                        if (r)
                            for (n in F)(i = a[n]) && s(i, e) && delete i[e];
                        if (x[e] && !r) return;
                        try {
                            return l(x, e, r ? t : S && g[e] || t)
                        } catch (u) {}
                    }
                    for (n in F) !(i = a[n]) || i[e] && !r || l(i, e, t)
                }
            },
            isView: function (e) {
                var t = c(e);
                return "DataView" === t || s(F, t)
            },
            isTypedArray: j,
            TypedArray: x,
            TypedArrayPrototype: M
        }
    }, function (e, t, r) {
        var n = r(2),
            i = r(105),
            o = r(8),
            a = r(45),
            u = r(110),
            s = r(137),
            c = i("wks"),
            f = n.Symbol,
            l = s ? f : f && f.withoutSetter || a;
        e.exports = function (e) {
            return o(c, e) || (u && o(f, e) ? c[e] = f[e] : c[e] = l("Symbol." + e)), c[e]
        }
    }, function (e, t) {
        e.exports = function (e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    }, function (e, t, r) {
        var n = r(20),
            i = Math.min;
        e.exports = function (e) {
            return e > 0 ? i(n(e), 9007199254740991) : 0
        }
    }, function (e, t, r) {
        var n = r(1);
        e.exports = !n((function () {
            return 7 != Object.defineProperty({}, 1, {
                get: function () {
                    return 7
                }
            })[1]
        }))
    }, function (e, t) {
        var r = {}.hasOwnProperty;
        e.exports = function (e, t) {
            return r.call(e, t)
        }
    }, function (e, t, r) {
        var n = r(7),
            i = r(131),
            o = r(10),
            a = r(43),
            u = Object.defineProperty;
        t.f = n ? u : function (e, t, r) {
            if (o(e), t = a(t, !0), o(r), i) try {
                return u(e, t, r)
            } catch (n) {}
            if ("get" in r || "set" in r) throw TypeError("Accessors not supported");
            return "value" in r && (e[t] = r.value), e
        }
    }, function (e, t, r) {
        var n = r(5);
        e.exports = function (e) {
            if (!n(e)) throw TypeError(String(e) + " is not an object");
            return e
        }
    }, function (e, t, r) {
        var n = r(22);
        e.exports = function (e) {
            return Object(n(e))
        }
    }, function (e, t, r) {
        var n = r(31),
            i = r(42),
            o = r(11),
            a = r(6),
            u = r(112),
            s = [].push,
            c = function (e) {
                var t = 1 == e,
                    r = 2 == e,
                    c = 3 == e,
                    f = 4 == e,
                    l = 6 == e,
                    h = 5 == e || l;
                return function (p, d, y, v) {
                    for (var g, m, b = o(p), w = i(b), x = n(d, y, 3), M = a(w.length), k = 0, _ = v || u, E = t ? _(p, M) : r ? _(p, 0) : undefined; M > k; k++)
                        if ((h || k in w) && (m = x(g = w[k], k, b), e))
                            if (t) E[k] = m;
                            else if (m) switch (e) {
                    case 3:
                        return !0;
                    case 5:
                        return g;
                    case 6:
                        return k;
                    case 2:
                        s.call(E, g)
                    } else if (f) return !1;
                    return l ? -1 : c || f ? f : E
                }
            };
        e.exports = {
            forEach: c(0),
            map: c(1),
            filter: c(2),
            some: c(3),
            every: c(4),
            find: c(5),
            findIndex: c(6)
        }
    }, function (e, t, r) {
        var n = r(7),
            i = r(9),
            o = r(34);
        e.exports = n ? function (e, t, r) {
            return i.f(e, t, o(1, r))
        } : function (e, t, r) {
            return e[t] = r, e
        }
    }, function (e, t, r) {
        var n = r(116),
            i = r(18),
            o = r(194);
        n || i(Object.prototype, "toString", o, {
            unsafe: !0
        })
    }, function (e, t, r) {
        var n = r(42),
            i = r(22);
        e.exports = function (e) {
            return n(i(e))
        }
    }, function (e, t, r) {
        var n = r(189),
            i = r(24);
        e.exports = function (e) {
            return !!i(e) && n.apply(this, arguments)
        }
    }, function (e, t, r) {
        "use strict";
        var n, i, o, a, u = r(0),
            s = r(44),
            c = r(2),
            f = r(35),
            l = r(195),
            h = r(18),
            p = r(117),
            d = r(26),
            y = r(67),
            v = r(5),
            g = r(52),
            m = r(55),
            b = r(21),
            w = r(104),
            x = r(118),
            M = r(68),
            k = r(32),
            _ = r(148).set,
            E = r(196),
            A = r(197),
            S = r(198),
            O = r(150),
            F = r(199),
            j = r(23),
            P = r(108),
            T = r(4),
            D = r(114),
            I = T("species"),
            C = "Promise",
            R = j.get,
            L = j.set,
            K = j.getterFor(C),
            B = l,
            U = c.TypeError,
            z = c.document,
            H = c.process,
            N = f("fetch"),
            W = O.f,
            V = W,
            q = "process" == b(H),
            G = !!(z && z.createEvent && c.dispatchEvent),
            Z = P(C, (function () {
                if (!(w(B) !== String(B))) {
                    if (66 === D) return !0;
                    if (!q && "function" != typeof PromiseRejectionEvent) return !0
                }
                if (s && !B.prototype["finally"]) return !0;
                if (D >= 51 && /native code/.test(B)) return !1;
                var e = B.resolve(1),
                    t = function (e) {
                        e((function () {}), (function () {}))
                    };
                return (e.constructor = {})[I] = t, !(e.then((function () {})) instanceof t)
            })),
            Y = Z || !M((function (e) {
                B.all(e)["catch"]((function () {}))
            })),
            Q = function (e) {
                var t;
                return !(!v(e) || "function" != typeof (t = e.then)) && t
            },
            J = function (e, t, r) {
                if (!t.notified) {
                    t.notified = !0;
                    var n = t.reactions;
                    E((function () {
                        for (var i = t.value, o = 1 == t.state, a = 0; n.length > a;) {
                            var u, s, c, f = n[a++],
                                l = o ? f.ok : f.fail,
                                h = f.resolve,
                                p = f.reject,
                                d = f.domain;
                            try {
                                l ? (o || (2 === t.rejection && te(e, t), t.rejection = 1), !0 === l ? u = i : (d && d.enter(), u = l(i), d && (d.exit(), c = !0)), u === f.promise ? p(U("Promise-chain cycle")) : (s = Q(u)) ? s.call(u, h, p) : h(u)) : p(i)
                            } catch (y) {
                                d && !c && d.exit(), p(y)
                            }
                        }
                        t.reactions = [], t.notified = !1, r && !t.rejection && $(e, t)
                    }))
                }
            },
            X = function (e, t, r) {
                var n, i;
                G ? ((n = z.createEvent("Event")).promise = t, n.reason = r, n.initEvent(e, !1, !0), c.dispatchEvent(n)) : n = {
                    promise: t,
                    reason: r
                }, (i = c["on" + e]) ? i(n) : "unhandledrejection" === e && S("Unhandled promise rejection", r)
            },
            $ = function (e, t) {
                _.call(c, (function () {
                    var r, n = t.value;
                    if (ee(t) && (r = F((function () {
                            q ? H.emit("unhandledRejection", n, e) : X("unhandledrejection", e, n)
                        })), t.rejection = q || ee(t) ? 2 : 1, r.error)) throw r.value
                }))
            },
            ee = function (e) {
                return 1 !== e.rejection && !e.parent
            },
            te = function (e, t) {
                _.call(c, (function () {
                    q ? H.emit("rejectionHandled", e) : X("rejectionhandled", e, t.value)
                }))
            },
            re = function (e, t, r, n) {
                return function (i) {
                    e(t, r, i, n)
                }
            },
            ne = function (e, t, r, n) {
                t.done || (t.done = !0, n && (t = n), t.value = r, t.state = 2, J(e, t, !0))
            },
            ie = function (e, t, r, n) {
                if (!t.done) {
                    t.done = !0, n && (t = n);
                    try {
                        if (e === r) throw U("Promise can't be resolved itself");
                        var i = Q(r);
                        i ? E((function () {
                            var n = {
                                done: !1
                            };
                            try {
                                i.call(r, re(ie, e, n, t), re(ne, e, n, t))
                            } catch (o) {
                                ne(e, n, o, t)
                            }
                        })) : (t.value = r, t.state = 1, J(e, t, !1))
                    } catch (o) {
                        ne(e, {
                            done: !1
                        }, o, t)
                    }
                }
            };
        Z && (B = function (e) {
            m(this, B, C), g(e), n.call(this);
            var t = R(this);
            try {
                e(re(ie, this, t), re(ne, this, t))
            } catch (r) {
                ne(this, t, r)
            }
        }, (n = function (e) {
            L(this, {
                type: C,
                done: !1,
                notified: !1,
                parent: !1,
                reactions: [],
                rejection: !1,
                state: 0,
                value: undefined
            })
        }).prototype = p(B.prototype, {
            then: function (e, t) {
                var r = K(this),
                    n = W(k(this, B));
                return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = q ? H.domain : undefined, r.parent = !0, r.reactions.push(n), 0 != r.state && J(this, r, !1), n.promise
            },
            "catch": function (e) {
                return this.then(undefined, e)
            }
        }), i = function () {
            var e = new n,
                t = R(e);
            this.promise = e, this.resolve = re(ie, e, t), this.reject = re(ne, e, t)
        }, O.f = W = function (e) {
            return e === B || e === o ? new i(e) : V(e)
        }, s || "function" != typeof l || (a = l.prototype.then, h(l.prototype, "then", (function (e, t) {
            var r = this;
            return new B((function (e, t) {
                a.call(r, e, t)
            })).then(e, t)
        }), {
            unsafe: !0
        }), "function" == typeof N && u({
            global: !0,
            enumerable: !0,
            forced: !0
        }, {
            fetch: function (e) {
                return A(B, N.apply(c, arguments))
            }
        }))), u({
            global: !0,
            wrap: !0,
            forced: Z
        }, {
            Promise: B
        }), d(B, C, !1, !0), y(C), o = f(C), u({
            target: C,
            stat: !0,
            forced: Z
        }, {
            reject: function (e) {
                var t = W(this);
                return t.reject.call(undefined, e), t.promise
            }
        }), u({
            target: C,
            stat: !0,
            forced: s || Z
        }, {
            resolve: function (e) {
                return A(s && this === o ? B : this, e)
            }
        }), u({
            target: C,
            stat: !0,
            forced: Y
        }, {
            all: function (e) {
                var t = this,
                    r = W(t),
                    n = r.resolve,
                    i = r.reject,
                    o = F((function () {
                        var r = g(t.resolve),
                            o = [],
                            a = 0,
                            u = 1;
                        x(e, (function (e) {
                            var s = a++,
                                c = !1;
                            o.push(undefined), u++, r.call(t, e).then((function (e) {
                                c || (c = !0, o[s] = e, --u || n(o))
                            }), i)
                        })), --u || n(o)
                    }));
                return o.error && i(o.value), r.promise
            },
            race: function (e) {
                var t = this,
                    r = W(t),
                    n = r.reject,
                    i = F((function () {
                        var i = g(t.resolve);
                        x(e, (function (e) {
                            i.call(t, e).then(r.resolve, n)
                        }))
                    }));
                return i.error && n(i.value), r.promise
            }
        })
    }, function (e, t, r) {
        var n = r(2),
            i = r(13),
            o = r(8),
            a = r(103),
            u = r(104),
            s = r(23),
            c = s.get,
            f = s.enforce,
            l = String(String).split("String");
        (e.exports = function (e, t, r, u) {
            var s = !!u && !!u.unsafe,
                c = !!u && !!u.enumerable,
                h = !!u && !!u.noTargetGet;
            "function" == typeof r && ("string" != typeof t || o(r, "name") || i(r, "name", t), f(r).source = l.join("string" == typeof t ? t : "")), e !== n ? (s ? !h && e[t] && (c = !0) : delete e[t], c ? e[t] = r : i(e, t, r)) : c ? e[t] = r : a(t, r)
        })(Function.prototype, "toString", (function () {
            return "function" == typeof this && c(this).source || u(this)
        }))
    }, function (e, t, r) {
        "use strict";
        var n = r(15),
            i = r(109),
            o = r(56),
            a = r(23),
            u = r(122),
            s = a.set,
            c = a.getterFor("Array Iterator");
        e.exports = u(Array, "Array", (function (e, t) {
            s(this, {
                type: "Array Iterator",
                target: n(e),
                index: 0,
                kind: t
            })
        }), (function () {
            var e = c(this),
                t = e.target,
                r = e.kind,
                n = e.index++;
            return !t || n >= t.length ? (e.target = undefined, {
                value: undefined,
                done: !0
            }) : "keys" == r ? {
                value: n,
                done: !1
            } : "values" == r ? {
                value: t[n],
                done: !1
            } : {
                value: [n, t[n]],
                done: !1
            }
        }), "values"), o.Arguments = o.Array, i("keys"), i("values"), i("entries")
    }, function (e, t) {
        var r = Math.ceil,
            n = Math.floor;
        e.exports = function (e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? n : r)(e)
        }
    }, function (e, t) {
        var r = {}.toString;
        e.exports = function (e) {
            return r.call(e).slice(8, -1)
        }
    }, function (e, t) {
        e.exports = function (e) {
            if (e == undefined) throw TypeError("Can't call method on " + e);
            return e
        }
    }, function (e, t, r) {
        var n, i, o, a = r(187),
            u = r(2),
            s = r(5),
            c = r(13),
            f = r(8),
            l = r(61),
            h = r(46),
            p = u.WeakMap;
        if (a) {
            var d = new p,
                y = d.get,
                v = d.has,
                g = d.set;
            n = function (e, t) {
                return g.call(d, e, t), t
            }, i = function (e) {
                return y.call(d, e) || {}
            }, o = function (e) {
                return v.call(d, e)
            }
        } else {
            var m = l("state");
            h[m] = !0, n = function (e, t) {
                return c(e, m, t), t
            }, i = function (e) {
                return f(e, m) ? e[m] : {}
            }, o = function (e) {
                return f(e, m)
            }
        }
        e.exports = {
            set: n,
            get: i,
            has: o,
            enforce: function (e) {
                return o(e) ? i(e) : n(e, {})
            },
            getterFor: function (e) {
                return function (t) {
                    var r;
                    if (!s(t) || (r = i(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                    return r
                }
            }
        }
    }, function (e, t, r) {
        "use strict";
        var n = r(1);
        e.exports = function (e, t) {
            var r = [][e];
            return !!r && n((function () {
                r.call(null, t || function () {
                    throw 1
                }, 1)
            }))
        }
    }, function (e, t, r) {
        "use strict";
        r(141), Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.frozen = function (e) {
            Object.freeze(e), Object.freeze(e.prototype)
        }
    }, function (e, t, r) {
        var n = r(9).f,
            i = r(8),
            o = r(4)("toStringTag");
        e.exports = function (e, t, r) {
            e && !i(e = r ? e : e.prototype, o) && n(e, o, {
                configurable: !0,
                value: t
            })
        }
    }, function (e, t, r) {
        "use strict";
        (function (e) {
            function t(e) {
                return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            r(36), r(69), r(152), r(70), r(121), r(37), r(19), r(58), r(40), r(28), r(123), r(124), r(155), r(125), r(14), r(17), r(71), r(33), r(38), r(41);
            var n = function (e) {
                var r = Object.prototype,
                    n = r.hasOwnProperty,
                    i = "function" == typeof Symbol ? Symbol : {},
                    o = i.iterator || "@@iterator",
                    a = i.asyncIterator || "@@asyncIterator",
                    u = i.toStringTag || "@@toStringTag";
                function s(e, t, r, n) {
                    var i = t && t.prototype instanceof l ? t : l,
                        o = Object.create(i.prototype),
                        a = new k(n || []);
                    return o._invoke = function (e, t, r) {
                        var n = "suspendedStart";
                        return function (i, o) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === i) throw o;
                                return E()
                            }
                            for (r.method = i, r.arg = o;;) {
                                var a = r.delegate;
                                if (a) {
                                    var u = w(a, r);
                                    if (u) {
                                        if (u === f) continue;
                                        return u
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var s = c(e, t, r);
                                if ("normal" === s.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", s.arg === f) continue;
                                    return {
                                        value: s.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === s.type && (n = "completed", r.method = "throw", r.arg = s.arg)
                            }
                        }
                    }(e, r, a), o
                }
                function c(e, t, r) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, r)
                        }
                    } catch (n) {
                        return {
                            type: "throw",
                            arg: n
                        }
                    }
                }
                e.wrap = s;
                var f = {};
                function l() {}
                function h() {}
                function p() {}
                var d = {};
                d[o] = function () {
                    return this
                };
                var y = Object.getPrototypeOf,
                    v = y && y(y(_([])));
                v && v !== r && n.call(v, o) && (d = v);
                var g = p.prototype = l.prototype = Object.create(d);
                function m(e) {
                    ["next", "throw", "return"].forEach((function (t) {
                        e[t] = function (e) {
                            return this._invoke(t, e)
                        }
                    }))
                }
                function b(e) {
                    var r;
                    this._invoke = function (i, o) {
                        function a() {
                            return new Promise((function (r, a) {
                                ! function u(r, i, o, a) {
                                    var s = c(e[r], e, i);
                                    if ("throw" !== s.type) {
                                        var f = s.arg,
                                            l = f.value;
                                        return l && "object" === t(l) && n.call(l, "__await") ? Promise.resolve(l.__await).then((function (e) {
                                            u("next", e, o, a)
                                        }), (function (e) {
                                            u("throw", e, o, a)
                                        })) : Promise.resolve(l).then((function (e) {
                                            f.value = e, o(f)
                                        }), (function (e) {
                                            return u("throw", e, o, a)
                                        }))
                                    }
                                    a(s.arg)
                                }(i, o, r, a)
                            }))
                        }
                        return r = r ? r.then(a, a) : a()
                    }
                }
                function w(e, t) {
                    var r = e.iterator[t.method];
                    if (void 0 === r) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator["return"] && (t.method = "return", t.arg = void 0, w(e, t), "throw" === t.method)) return f;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return f
                    }
                    var n = c(r, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, f;
                    var i = n.arg;
                    return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, f) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, f)
                }
                function x(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }
                function M(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }
                function k(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(x, this), this.reset(!0)
                }
                function _(e) {
                    if (e) {
                        var t = e[o];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var r = -1,
                                i = function t() {
                                    for (; ++r < e.length;)
                                        if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return i.next = i
                        }
                    }
                    return {
                        next: E
                    }
                }
                function E() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return h.prototype = g.constructor = p, p.constructor = h, p[u] = h.displayName = "GeneratorFunction", e.isGeneratorFunction = function (e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function (e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, u in e || (e[u] = "GeneratorFunction")), e.prototype = Object.create(g), e
                }, e.awrap = function (e) {
                    return {
                        __await: e
                    }
                }, m(b.prototype), b.prototype[a] = function () {
                    return this
                }, e.AsyncIterator = b, e.async = function (t, r, n, i) {
                    var o = new b(s(t, r, n, i));
                    return e.isGeneratorFunction(r) ? o : o.next().then((function (e) {
                        return e.done ? e.value : o.next()
                    }))
                }, m(g), g[u] = "Generator", g[o] = function () {
                    return this
                }, g.toString = function () {
                    return "[object Generator]"
                }, e.keys = function (e) {
                    var t = [];
                    for (var r in e) t.push(r);
                    return t.reverse(),
                        function n() {
                            for (; t.length;) {
                                var r = t.pop();
                                if (r in e) return n.value = r, n.done = !1, n
                            }
                            return n.done = !0, n
                        }
                }, e.values = _, k.prototype = {
                    constructor: k,
                    reset: function (e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(M), !e)
                            for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                    },
                    stop: function () {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function (e) {
                        if (this.done) throw e;
                        var t = this;
                        function r(r, n) {
                            return a.type = "throw", a.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var o = this.tryEntries[i],
                                a = o.completion;
                            if ("root" === o.tryLoc) return r("end");
                            if (o.tryLoc <= this.prev) {
                                var u = n.call(o, "catchLoc"),
                                    s = n.call(o, "finallyLoc");
                                if (u && s) {
                                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                                } else if (u) {
                                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0)
                                } else {
                                    if (!s) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function (e, t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var i = this.tryEntries[r];
                            if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                var o = i;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var a = o ? o.completion : {};
                        return a.type = e, a.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, f) : this.complete(a)
                    },
                    complete: function (e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), f
                    },
                    finish: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), M(r), f
                        }
                    },
                    "catch": function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var i = n.arg;
                                    M(r)
                                }
                                return i
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function (e, t, r) {
                        return this.delegate = {
                            iterator: _(e),
                            resultName: t,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), f
                    }
                }, e
            }("object" === t(e) ? e.exports : {});
            try {
                regeneratorRuntime = n
            } catch (i) {
                Function("r", "regeneratorRuntime = r")(n)
            }
        }).call(this, r(200)(e))
    }, function (e, t, r) {
        var n = r(7),
            i = r(9).f,
            o = Function.prototype,
            a = o.toString,
            u = /^\s*function ([^ (]*)/;
        !n || "name" in o || i(o, "name", {
            configurable: !0,
            get: function () {
                try {
                    return a.call(this).match(u)[1]
                } catch (e) {
                    return ""
                }
            }
        })
    }, function (e, t, r) {
        var n = r(7),
            i = r(60),
            o = r(34),
            a = r(15),
            u = r(43),
            s = r(8),
            c = r(131),
            f = Object.getOwnPropertyDescriptor;
        t.f = n ? f : function (e, t) {
            if (e = a(e), t = u(t, !0), c) try {
                return f(e, t)
            } catch (r) {}
            if (s(e, t)) return o(!i.f.call(e, t), e[t])
        }
    }, function (e, t, r) {
        var n = r(20),
            i = Math.max,
            o = Math.min;
        e.exports = function (e, t) {
            var r = n(e);
            return r < 0 ? i(r + t, 0) : o(r, t)
        }
    }, function (e, t, r) {
        var n = r(52);
        e.exports = function (e, t, r) {
            if (n(e), t === undefined) return e;
            switch (r) {
            case 0:
                return function () {
                    return e.call(t)
                };
            case 1:
                return function (r) {
                    return e.call(t, r)
                };
            case 2:
                return function (r, n) {
                    return e.call(t, r, n)
                };
            case 3:
                return function (r, n, i) {
                    return e.call(t, r, n, i)
                }
            }
            return function () {
                return e.apply(t, arguments)
            }
        }
    }, function (e, t, r) {
        var n = r(10),
            i = r(52),
            o = r(4)("species");
        e.exports = function (e, t) {
            var r, a = n(e).constructor;
            return a === undefined || (r = n(a)[o]) == undefined ? t : i(r)
        }
    }, function (e, t, r) {
        "use strict";
        var n = r(157).charAt,
            i = r(23),
            o = r(122),
            a = i.set,
            u = i.getterFor("String Iterator");
        o(String, "String", (function (e) {
            a(this, {
                type: "String Iterator",
                string: String(e),
                index: 0
            })
        }), (function () {
            var e, t = u(this),
                r = t.string,
                i = t.index;
            return i >= r.length ? {
                value: undefined,
                done: !0
            } : (e = n(r, i), t.index += e.length, {
                value: e,
                done: !1
            })
        }))
    }, function (e, t) {
        e.exports = function (e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    }, function (e, t, r) {
        var n = r(135),
            i = r(2),
            o = function (e) {
                return "function" == typeof e ? e : undefined
            };
        e.exports = function (e, t) {
            return arguments.length < 2 ? o(n[e]) || o(i[e]) : n[e] && n[e][t] || i[e] && i[e][t]
        }
    }, function (e, t, r) {
        "use strict";
        var n = r(0),
            i = r(2),
            o = r(35),
            a = r(44),
            u = r(7),
            s = r(110),
            c = r(137),
            f = r(1),
            l = r(8),
            h = r(51),
            p = r(5),
            d = r(10),
            y = r(11),
            v = r(15),
            g = r(43),
            m = r(34),
            b = r(49),
            w = r(50),
            x = r(47),
            M = r(143),
            k = r(107),
            _ = r(29),
            E = r(9),
            A = r(60),
            S = r(13),
            O = r(18),
            F = r(105),
            j = r(61),
            P = r(46),
            T = r(45),
            D = r(4),
            I = r(144),
            C = r(63),
            R = r(26),
            L = r(23),
            K = r(12).forEach,
            B = j("hidden"),
            U = D("toPrimitive"),
            z = L.set,
            H = L.getterFor("Symbol"),
            N = Object.prototype,
            W = i.Symbol,
            V = o("JSON", "stringify"),
            q = _.f,
            G = E.f,
            Z = M.f,
            Y = A.f,
            Q = F("symbols"),
            J = F("op-symbols"),
            X = F("string-to-symbol-registry"),
            $ = F("symbol-to-string-registry"),
            ee = F("wks"),
            te = i.QObject,
            re = !te || !te.prototype || !te.prototype.findChild,
            ne = u && f((function () {
                return 7 != b(G({}, "a", {
                    get: function () {
                        return G(this, "a", {
                            value: 7
                        }).a
                    }
                })).a
            })) ? function (e, t, r) {
                var n = q(N, t);
                n && delete N[t], G(e, t, r), n && e !== N && G(N, t, n)
            } : G,
            ie = function (e, t) {
                var r = Q[e] = b(W.prototype);
                return z(r, {
                    type: "Symbol",
                    tag: e,
                    description: t
                }), u || (r.description = t), r
            },
            oe = c ? function (e) {
                return "symbol" == typeof e
            } : function (e) {
                return Object(e) instanceof W
            },
            ae = function (e, t, r) {
                e === N && ae(J, t, r), d(e);
                var n = g(t, !0);
                return d(r), l(Q, n) ? (r.enumerable ? (l(e, B) && e[B][n] && (e[B][n] = !1), r = b(r, {
                    enumerable: m(0, !1)
                })) : (l(e, B) || G(e, B, m(1, {})), e[B][n] = !0), ne(e, n, r)) : G(e, n, r)
            },
            ue = function (e, t) {
                d(e);
                var r = v(t),
                    n = w(r).concat(le(r));
                return K(n, (function (t) {
                    u && !se.call(r, t) || ae(e, t, r[t])
                })), e
            },
            se = function (e) {
                var t = g(e, !0),
                    r = Y.call(this, t);
                return !(this === N && l(Q, t) && !l(J, t)) && (!(r || !l(this, t) || !l(Q, t) || l(this, B) && this[B][t]) || r)
            },
            ce = function (e, t) {
                var r = v(e),
                    n = g(t, !0);
                if (r !== N || !l(Q, n) || l(J, n)) {
                    var i = q(r, n);
                    return !i || !l(Q, n) || l(r, B) && r[B][n] || (i.enumerable = !0), i
                }
            },
            fe = function (e) {
                var t = Z(v(e)),
                    r = [];
                return K(t, (function (e) {
                    l(Q, e) || l(P, e) || r.push(e)
                })), r
            },
            le = function (e) {
                var t = e === N,
                    r = Z(t ? J : v(e)),
                    n = [];
                return K(r, (function (e) {
                    !l(Q, e) || t && !l(N, e) || n.push(Q[e])
                })), n
            };
        (s || (O((W = function () {
            if (this instanceof W) throw TypeError("Symbol is not a constructor");
            var e = arguments.length && arguments[0] !== undefined ? String(arguments[0]) : undefined,
                t = T(e),
                r = function (e) {
                    this === N && r.call(J, e), l(this, B) && l(this[B], t) && (this[B][t] = !1), ne(this, t, m(1, e))
                };
            return u && re && ne(N, t, {
                configurable: !0,
                set: r
            }), ie(t, e)
        }).prototype, "toString", (function () {
            return H(this).tag
        })), O(W, "withoutSetter", (function (e) {
            return ie(T(e), e)
        })), A.f = se, E.f = ae, _.f = ce, x.f = M.f = fe, k.f = le, I.f = function (e) {
            return ie(D(e), e)
        }, u && (G(W.prototype, "description", {
            configurable: !0,
            get: function () {
                return H(this).description
            }
        }), a || O(N, "propertyIsEnumerable", se, {
            unsafe: !0
        }))), n({
            global: !0,
            wrap: !0,
            forced: !s,
            sham: !s
        }, {
            Symbol: W
        }), K(w(ee), (function (e) {
            C(e)
        })), n({
            target: "Symbol",
            stat: !0,
            forced: !s
        }, {
            "for": function (e) {
                var t = String(e);
                if (l(X, t)) return X[t];
                var r = W(t);
                return X[t] = r, $[r] = t, r
            },
            keyFor: function (e) {
                if (!oe(e)) throw TypeError(e + " is not a symbol");
                if (l($, e)) return $[e]
            },
            useSetter: function () {
                re = !0
            },
            useSimple: function () {
                re = !1
            }
        }), n({
            target: "Object",
            stat: !0,
            forced: !s,
            sham: !u
        }, {
            create: function (e, t) {
                return t === undefined ? b(e) : ue(b(e), t)
            },
            defineProperty: ae,
            defineProperties: ue,
            getOwnPropertyDescriptor: ce
        }), n({
            target: "Object",
            stat: !0,
            forced: !s
        }, {
            getOwnPropertyNames: fe,
            getOwnPropertySymbols: le
        }), n({
            target: "Object",
            stat: !0,
            forced: f((function () {
                k.f(1)
            }))
        }, {
            getOwnPropertySymbols: function (e) {
                return k.f(y(e))
            }
        }), V) && n({
            target: "JSON",
            stat: !0,
            forced: !s || f((function () {
                var e = W();
                return "[null]" != V([e]) || "{}" != V({
                    a: e
                }) || "{}" != V(Object(e))
            }))
        }, {
            stringify: function (e, t, r) {
                for (var n, i = [e], o = 1; arguments.length > o;) i.push(arguments[o++]);
                if (n = t, (p(t) || e !== undefined) && !oe(e)) return h(t) || (t = function (e, t) {
                    if ("function" == typeof n && (t = n.call(this, e, t)), !oe(t)) return t
                }), i[1] = t, V.apply(null, i)
            }
        });
        W.prototype[U] || S(W.prototype, U, W.prototype.valueOf), R(W, "Symbol"), P[B] = !0
    }, function (e, t, r) {
        "use strict";
        var n = r(0),
            i = r(146);
        n({
            target: "Array",
            proto: !0,
            forced: [].forEach != i
        }, {
            forEach: i
        })
    }, function (e, t, r) {
        var n = r(2),
            i = r(151),
            o = r(146),
            a = r(13);
        for (var u in i) {
            var s = n[u],
                c = s && s.prototype;
            if (c && c.forEach !== o) try {
                a(c, "forEach", o)
            } catch (f) {
                c.forEach = o
            }
        }
    }, function (e, t, r) {
        var n = r(10),
            i = r(202);
        e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
            var e, t = !1,
                r = {};
            try {
                (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(r, []), t = r instanceof Array
            } catch (o) {}
            return function (r, o) {
                return n(r), i(o), t ? e.call(r, o) : r.__proto__ = o, r
            }
        }() : undefined)
    }, function (e, t, r) {
        "use strict";
        var n = r(0),
            i = r(5),
            o = r(51),
            a = r(30),
            u = r(6),
            s = r(15),
            c = r(54),
            f = r(4),
            l = r(53),
            h = r(16),
            p = l("slice"),
            d = h("slice", {
                ACCESSORS: !0,
                0: 0,
                1: 2
            }),
            y = f("species"),
            v = [].slice,
            g = Math.max;
        n({
            target: "Array",
            proto: !0,
            forced: !p || !d
        }, {
            slice: function (e, t) {
                var r, n, f, l = s(this),
                    h = u(l.length),
                    p = a(e, h),
                    d = a(t === undefined ? h : t, h);
                if (o(l) && ("function" != typeof (r = l.constructor) || r !== Array && !o(r.prototype) ? i(r) && null === (r = r[y]) && (r = undefined) : r = undefined, r === Array || r === undefined)) return v.call(l, p, d);
                for (n = new(r === undefined ? Array : r)(g(d - p, 0)), f = 0; p < d; p++, f++) p in l && c(n, f, l[p]);
                return n.length = f, n
            }
        })
    }, function (e, t, r) {
        var n = r(2),
            i = r(151),
            o = r(19),
            a = r(13),
            u = r(4),
            s = u("iterator"),
            c = u("toStringTag"),
            f = o.values;
        for (var l in i) {
            var h = n[l],
                p = h && h.prototype;
            if (p) {
                if (p[s] !== f) try {
                    a(p, s, f)
                } catch (y) {
                    p[s] = f
                }
                if (p[c] || a(p, c, l), i[l])
                    for (var d in o)
                        if (p[d] !== o[d]) try {
                            a(p, d, o[d])
                        } catch (y) {
                            p[d] = o[d]
                        }
            }
        }
    }, function (e, t, r) {
        var n = r(1),
            i = r(21),
            o = "".split;
        e.exports = n((function () {
            return !Object("z").propertyIsEnumerable(0)
        })) ? function (e) {
            return "String" == i(e) ? o.call(e, "") : Object(e)
        } : Object
    }, function (e, t, r) {
        var n = r(5);
        e.exports = function (e, t) {
            if (!n(e)) return e;
            var r, i;
            if (t && "function" == typeof (r = e.toString) && !n(i = r.call(e))) return i;
            if ("function" == typeof (r = e.valueOf) && !n(i = r.call(e))) return i;
            if (!t && "function" == typeof (r = e.toString) && !n(i = r.call(e))) return i;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function (e, t) {
        e.exports = !1
    }, function (e, t) {
        var r = 0,
            n = Math.random();
        e.exports = function (e) {
            return "Symbol(" + String(e === undefined ? "" : e) + ")_" + (++r + n).toString(36)
        }
    }, function (e, t) {
        e.exports = {}
    }, function (e, t, r) {
        var n = r(136),
            i = r(106).concat("length", "prototype");
        t.f = Object.getOwnPropertyNames || function (e) {
            return n(e, i)
        }
    }, function (e, t, r) {
        var n = r(15),
            i = r(6),
            o = r(30),
            a = function (e) {
                return function (t, r, a) {
                    var u, s = n(t),
                        c = i(s.length),
                        f = o(a, c);
                    if (e && r != r) {
                        for (; c > f;)
                            if ((u = s[f++]) != u) return !0
                    } else
                        for (; c > f; f++)
                            if ((e || f in s) && s[f] === r) return e || f || 0;
                    return !e && -1
                }
            };
        e.exports = {
            includes: a(!0),
            indexOf: a(!1)
        }
    }, function (e, t, r) {
        var n, i = r(10),
            o = r(188),
            a = r(106),
            u = r(46),
            s = r(138),
            c = r(102),
            f = r(61),
            l = f("IE_PROTO"),
            h = function () {},
            p = function (e) {
                return "<script>" + e + "<\/script>"
            },
            d = function () {
                try {
                    n = document.domain && new ActiveXObject("htmlfile")
                } catch (i) {}
                var e, t;
                d = n ? function (e) {
                    e.write(p("")), e.close();
                    var t = e.parentWindow.Object;
                    return e = null, t
                }(n) : ((t = c("iframe")).style.display = "none", s.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(p("document.F=Object")), e.close(), e.F);
                for (var r = a.length; r--;) delete d.prototype[a[r]];
                return d()
            };
        u[l] = !0, e.exports = Object.create || function (e, t) {
            var r;
            return null !== e ? (h.prototype = i(e), r = new h, h.prototype = null, r[l] = e) : r = d(), t === undefined ? r : o(r, t)
        }
    }, function (e, t, r) {
        var n = r(136),
            i = r(106);
        e.exports = Object.keys || function (e) {
            return n(e, i)
        }
    }, function (e, t, r) {
        var n = r(21);
        e.exports = Array.isArray || function (e) {
            return "Array" == n(e)
        }
    }, function (e, t) {
        e.exports = function (e) {
            if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
            return e
        }
    }, function (e, t, r) {
        var n = r(1),
            i = r(4),
            o = r(114),
            a = i("species");
        e.exports = function (e) {
            return o >= 51 || !n((function () {
                var t = [];
                return (t.constructor = {})[a] = function () {
                    return {
                        foo: 1
                    }
                }, 1 !== t[e](Boolean).foo
            }))
        }
    }, function (e, t, r) {
        "use strict";
        var n = r(43),
            i = r(9),
            o = r(34);
        e.exports = function (e, t, r) {
            var a = n(t);
            a in e ? i.f(e, a, o(0, r)) : e[a] = r
        }
    }, function (e, t) {
        e.exports = function (e, t, r) {
            if (!(e instanceof t)) throw TypeError("Incorrect " + (r ? r + " " : "") + "invocation");
            return e
        }
    }, function (e, t) {
        e.exports = {}
    }, function (e, t, r) {
        var n = r(8),
            i = r(11),
            o = r(61),
            a = r(154),
            u = o("IE_PROTO"),
            s = Object.prototype;
        e.exports = a ? Object.getPrototypeOf : function (e) {
            return e = i(e), n(e, u) ? e[u] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null
        }
    }, function (e, t, r) {
        "use strict";
        var n = r(0),
            i = r(51),
            o = [].reverse,
            a = [1, 2];
        n({
            target: "Array",
            proto: !0,
            forced: String(a) === String(a.reverse())
        }, {
            reverse: function () {
                return i(this) && (this.length = this.length), o.call(this)
            }
        })
    }, function (e, t, r) {
        "use strict";
        var n = r(0),
            i = r(73);
        n({
            target: "RegExp",
            proto: !0,
            forced: /./.exec !== i
        }, {
            exec: i
        })
    }, function (e, t, r) {
        "use strict";
        var n = {}.propertyIsEnumerable,
            i = Object.getOwnPropertyDescriptor,
            o = i && !n.call({
                1: 2
            }, 1);
        t.f = o ? function (e) {
            var t = i(this, e);
            return !!t && t.enumerable
        } : n
    }, function (e, t, r) {
        var n = r(105),
            i = r(45),
            o = n("keys");
        e.exports = function (e) {
            return o[e] || (o[e] = i(e))
        }
    }, function (e, t, r) {
        var n = r(46),
            i = r(5),
            o = r(8),
            a = r(9).f,
            u = r(45),
            s = r(111),
            c = u("meta"),
            f = 0,
            l = Object.isExtensible || function () {
                return !0
            },
            h = function (e) {
                a(e, c, {
                    value: {
                        objectID: "O" + ++f,
                        weakData: {}
                    }
                })
            },
            p = e.exports = {
                REQUIRED: !1,
                fastKey: function (e, t) {
                    if (!i(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                    if (!o(e, c)) {
                        if (!l(e)) return "F";
                        if (!t) return "E";
                        h(e)
                    }
                    return e[c].objectID
                },
                getWeakData: function (e, t) {
                    if (!o(e, c)) {
                        if (!l(e)) return !0;
                        if (!t) return !1;
                        h(e)
                    }
                    return e[c].weakData
                },
                onFreeze: function (e) {
                    return s && p.REQUIRED && l(e) && !o(e, c) && h(e), e
                }
            };
        n[c] = !0
    }, function (e, t, r) {
        var n = r(135),
            i = r(8),
            o = r(144),
            a = r(9).f;
        e.exports = function (e) {
            var t = n.Symbol || (n.Symbol = {});
            i(t, e) || a(t, e, {
                value: o.f(e)
            })
        }
    }, function (e, t, r) {
        var n = r(0),
            i = r(1),
            o = r(15),
            a = r(29).f,
            u = r(7),
            s = i((function () {
                a(1)
            }));
        n({
            target: "Object",
            stat: !0,
            forced: !u || s,
            sham: !u
        }, {
            getOwnPropertyDescriptor: function (e, t) {
                return a(o(e), t)
            }
        })
    }, function (e, t, r) {
        var n = r(0),
            i = r(11),
            o = r(50);
        n({
            target: "Object",
            stat: !0,
            forced: r(1)((function () {
                o(1)
            }))
        }, {
            keys: function (e) {
                return o(i(e))
            }
        })
    }, function (e, t, r) {
        var n = r(116),
            i = r(21),
            o = r(4)("toStringTag"),
            a = "Arguments" == i(function () {
                return arguments
            }());
        e.exports = n ? i : function (e) {
            var t, r, n;
            return e === undefined ? "Undefined" : null === e ? "Null" : "string" == typeof (r = function (e, t) {
                try {
                    return e[t]
                } catch (r) {}
            }(t = Object(e), o)) ? r : a ? i(t) : "Object" == (n = i(t)) && "function" == typeof t.callee ? "Arguments" : n
        }
    }, function (e, t, r) {
        "use strict";
        var n = r(35),
            i = r(9),
            o = r(4),
            a = r(7),
            u = o("species");
        e.exports = function (e) {
            var t = n(e),
                r = i.f;
            a && t && !t[u] && r(t, u, {
                configurable: !0,
                get: function () {
                    return this
                }
            })
        }
    }, function (e, t, r) {
        var n = r(4)("iterator"),
            i = !1;
        try {
            var o = 0,
                a = {
                    next: function () {
                        return {
                            done: !!o++
                        }
                    },
                    "return": function () {
                        i = !0
                    }
                };
            a[n] = function () {
                return this
            }, Array.from(a, (function () {
                throw 2
            }))
        } catch (u) {}
        e.exports = function (e, t) {
            if (!t && !i) return !1;
            var r = !1;
            try {
                var o = {};
                o[n] = function () {
                    return {
                        next: function () {
                            return {
                                done: r = !0
                            }
                        }
                    }
                }, e(o)
            } catch (u) {}
            return r
        }
    }, function (e, t, r) {
        "use strict";
        var n = r(0),
            i = r(7),
            o = r(2),
            a = r(8),
            u = r(5),
            s = r(9).f,
            c = r(133),
            f = o.Symbol;
        if (i && "function" == typeof f && (!("description" in f.prototype) || f().description !== undefined)) {
            var l = {},
                h = function () {
                    var e = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]),
                        t = this instanceof h ? new f(e) : e === undefined ? f() : f(e);
                    return "" === e && (l[t] = !0), t
                };
            c(h, f);
            var p = h.prototype = f.prototype;
            p.constructor = h;
            var d = p.toString,
                y = "Symbol(test)" == String(f("test")),
                v = /^Symbol\((.*)\)[^)]+$/;
            s(p, "description", {
                configurable: !0,
                get: function () {
                    var e = u(this) ? this.valueOf() : this,
                        t = d.call(e);
                    if (a(l, e)) return "";
                    var r = y ? t.slice(7, -1) : t.replace(v, "$1");
                    return "" === r ? undefined : r
                }
            }), n({
                global: !0,
                forced: !0
            }, {
                Symbol: h
            })
        }
    }, function (e, t, r) {
        r(63)("iterator")
    }, function (e, t, r) {
        "use strict";
        var n = r(18),
            i = r(10),
            o = r(1),
            a = r(156),
            u = RegExp.prototype,
            s = u.toString,
            c = o((function () {
                return "/a/b" != s.call({
                    source: "a",
                    flags: "b"
                })
            })),
            f = "toString" != s.name;
        (c || f) && n(RegExp.prototype, "toString", (function () {
            var e = i(this),
                t = String(e.source),
                r = e.flags;
            return "/" + t + "/" + String(r === undefined && e instanceof RegExp && !("flags" in u) ? a.call(e) : r)
        }), {
            unsafe: !0
        })
    }, function (e, t, r) {
        "use strict";
        var n = r(0),
            i = r(127).left,
            o = r(24),
            a = r(16),
            u = o("reduce"),
            s = a("reduce", {
                1: 0
            });
        n({
            target: "Array",
            proto: !0,
            forced: !u || !s
        }, {
            reduce: function (e) {
                return i(this, e, arguments.length, arguments.length > 1 ? arguments[1] : undefined)
            }
        })
    }, function (e, t, r) {
        "use strict";
        var n, i, o = r(156),
            a = r(205),
            u = RegExp.prototype.exec,
            s = String.prototype.replace,
            c = u,
            f = (n = /a/, i = /b*/g, u.call(n, "a"), u.call(i, "a"), 0 !== n.lastIndex || 0 !== i.lastIndex),
            l = a.UNSUPPORTED_Y || a.BROKEN_CARET,
            h = /()??/.exec("")[1] !== undefined;
        (f || h || l) && (c = function (e) {
            var t, r, n, i, a = this,
                c = l && a.sticky,
                p = o.call(a),
                d = a.source,
                y = 0,
                v = e;
            return c && (-1 === (p = p.replace("y", "")).indexOf("g") && (p += "g"), v = String(e).slice(a.lastIndex), a.lastIndex > 0 && (!a.multiline || a.multiline && "\n" !== e[a.lastIndex - 1]) && (d = "(?: " + d + ")", v = " " + v, y++), r = new RegExp("^(?:" + d + ")", p)), h && (r = new RegExp("^" + d + "$(?!\\s)", p)), f && (t = a.lastIndex), n = u.call(c ? r : a, v), c ? n ? (n.input = n.input.slice(y), n[0] = n[0].slice(y), n.index = a.lastIndex, a.lastIndex += n[0].length) : a.lastIndex = 0 : f && n && (a.lastIndex = a.global ? n.index + n[0].length : t), h && n && n.length > 1 && s.call(n[0], r, (function () {
                for (i = 1; i < arguments.length - 2; i++) arguments[i] === undefined && (n[i] = undefined)
            })), n
        }), e.exports = c
    }, function (e, t, r) {
        "use strict";
        var n = r(160),
            i = r(10),
            o = r(11),
            a = r(6),
            u = r(20),
            s = r(22),
            c = r(161),
            f = r(162),
            l = Math.max,
            h = Math.min,
            p = Math.floor,
            d = /\$([$&'`]|\d\d?|<[^>]*>)/g,
            y = /\$([$&'`]|\d\d?)/g;
        n("replace", 2, (function (e, t, r, n) {
            var v = n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
                g = n.REPLACE_KEEPS_$0,
                m = v ? "$" : "$0";
            return [function (r, n) {
                var i = s(this),
                    o = r == undefined ? undefined : r[e];
                return o !== undefined ? o.call(r, i, n) : t.call(String(i), r, n)
            }, function (e, n) {
                if (!v && g || "string" == typeof n && -1 === n.indexOf(m)) {
                    var o = r(t, e, this, n);
                    if (o.done) return o.value
                }
                var s = i(e),
                    p = String(this),
                    d = "function" == typeof n;
                d || (n = String(n));
                var y = s.global;
                if (y) {
                    var w = s.unicode;
                    s.lastIndex = 0
                }
                for (var x = [];;) {
                    var M = f(s, p);
                    if (null === M) break;
                    if (x.push(M), !y) break;
                    "" === String(M[0]) && (s.lastIndex = c(p, a(s.lastIndex), w))
                }
                for (var k, _ = "", E = 0, A = 0; A < x.length; A++) {
                    M = x[A];
                    for (var S = String(M[0]), O = l(h(u(M.index), p.length), 0), F = [], j = 1; j < M.length; j++) F.push((k = M[j]) === undefined ? k : String(k));
                    var P = M.groups;
                    if (d) {
                        var T = [S].concat(F, O, p);
                        P !== undefined && T.push(P);
                        var D = String(n.apply(undefined, T))
                    } else D = b(S, p, O, F, P, n);
                    O >= E && (_ += p.slice(E, O) + D, E = O + S.length)
                }
                return _ + p.slice(E)
            }];
            function b(e, r, n, i, a, u) {
                var s = n + e.length,
                    c = i.length,
                    f = y;
                return a !== undefined && (a = o(a), f = d), t.call(u, f, (function (t, o) {
                    var u;
                    switch (o.charAt(0)) {
                    case "$":
                        return "$";
                    case "&":
                        return e;
                    case "`":
                        return r.slice(0, n);
                    case "'":
                        return r.slice(s);
                    case "<":
                        u = a[o.slice(1, -1)];
                        break;
                    default:
                        var f = +o;
                        if (0 === f) return t;
                        if (f > c) {
                            var l = p(f / 10);
                            return 0 === l ? t : l <= c ? i[l - 1] === undefined ? o.charAt(1) : i[l - 1] + o.charAt(1) : t
                        }
                        u = i[f - 1]
                    }
                    return u === undefined ? "" : u
                }))
            }
        }))
    }, function (e, t, r) {
        "use strict";
        var n = r(0),
            i = r(1),
            o = r(128),
            a = r(10),
            u = r(30),
            s = r(6),
            c = r(32),
            f = o.ArrayBuffer,
            l = o.DataView,
            h = f.prototype.slice;
        n({
            target: "ArrayBuffer",
            proto: !0,
            unsafe: !0,
            forced: i((function () {
                return !new f(2).slice(1, undefined).byteLength
            }))
        }, {
            slice: function (e, t) {
                if (h !== undefined && t === undefined) return h.call(a(this), e);
                for (var r = a(this).byteLength, n = u(e, r), i = u(t === undefined ? r : t, r), o = new(c(this, f))(s(i - n)), p = new l(this), d = new l(o), y = 0; n < i;) d.setUint8(y++, p.getUint8(n++));
                return o
            }
        })
    }, function (e, t, r) {
        r(208)("Uint8", (function (e) {
            return function (t, r, n) {
                return e(this, t, r, n)
            }
        }))
    }, function (e, t, r) {
        "use strict";
        var n = r(3),
            i = r(210),
            o = n.aTypedArray;
        (0, n.exportTypedArrayMethod)("copyWithin", (function (e, t) {
            return i.call(o(this), e, t, arguments.length > 2 ? arguments[2] : undefined)
        }))
    }, function (e, t, r) {
        "use strict";
        var n = r(3),
            i = r(12).every,
            o = n.aTypedArray;
        (0, n.exportTypedArrayMethod)("every", (function (e) {
            return i(o(this), e, arguments.length > 1 ? arguments[1] : undefined)
        }))
    }, function (e, t, r) {
        "use strict";
        var n = r(3),
            i = r(167),
            o = n.aTypedArray;
        (0, n.exportTypedArrayMethod)("fill", (function (e) {
            return i.apply(o(this), arguments)
        }))
    }, function (e, t, r) {
        "use strict";
        var n = r(3),
            i = r(12).filter,
            o = r(32),
            a = n.aTypedArray,
            u = n.aTypedArrayConstructor;
        (0, n.exportTypedArrayMethod)("filter", (function (e) {
            for (var t = i(a(this), e, arguments.length > 1 ? arguments[1] : undefined), r = o(this, this.constructor), n = 0, s = t.length, c = new(u(r))(s); s > n;) c[n] = t[n++];
            return c
        }))
    }, function (e, t, r) {
        "use strict";
        var n = r(3),
            i = r(12).find,
            o = n.aTypedArray;
        (0, n.exportTypedArrayMethod)("find", (function (e) {
            return i(o(this), e, arguments.length > 1 ? arguments[1] : undefined)
        }))
    }, function (e, t, r) {
        "use strict";
        var n = r(3),
            i = r(12).findIndex,
            o = n.aTypedArray;
        (0, n.exportTypedArrayMethod)("findIndex", (function (e) {
            return i(o(this), e, arguments.length > 1 ? arguments[1] : undefined)
        }))
    }, function (e, t, r) {
        "use strict";
        var n = r(3),
            i = r(12).forEach,
            o = n.aTypedArray;
        (0, n.exportTypedArrayMethod)("forEach", (function (e) {
            i(o(this), e, arguments.length > 1 ? arguments[1] : undefined)
        }))
    }, function (e, t, r) {
        "use strict";
        var n = r(3),
            i = r(48).includes,
            o = n.aTypedArray;
        (0, n.exportTypedArrayMethod)("includes", (function (e) {
            return i(o(this), e, arguments.length > 1 ? arguments[1] : undefined)
        }))
    }, function (e, t, r) {
        "use strict";
        var n = r(3),
            i = r(48).indexOf,
            o = n.aTypedArray;
        (0, n.exportTypedArrayMethod)("indexOf", (function (e) {
            return i(o(this), e, arguments.length > 1 ? arguments[1] : undefined)
        }))
    }, function (e, t, r) {
        "use strict";
        var n = r(2),
            i = r(3),
            o = r(19),
            a = r(4)("iterator"),
            u = n.Uint8Array,
            s = o.values,
            c = o.keys,
            f = o.entries,
            l = i.aTypedArray,
            h = i.exportTypedArrayMethod,
            p = u && u.prototype[a],
            d = !!p && ("values" == p.name || p.name == undefined),
            y = function () {
                return s.call(l(this))
            };
        h("entries", (function () {
            return f.call(l(this))
        })), h("keys", (function () {
            return c.call(l(this))
        })), h("values", y, !d), h(a, y, !d)
    }, function (e, t, r) {
        "use strict";
        var n = r(3),
            i = n.aTypedArray,
            o = n.exportTypedArrayMethod,
            a = [].join;
        o("join", (function (e) {
            return a.apply(i(this), arguments)
        }))
    }, function (e, t, r) {
        "use strict";
        var n = r(3),
            i = r(211),
            o = n.aTypedArray;
        (0, n.exportTypedArrayMethod)("lastIndexOf", (function (e) {
            return i.apply(o(this), arguments)
        }))
    }, function (e, t, r) {
        "use strict";
        var n = r(3),
            i = r(12).map,
            o = r(32),
            a = n.aTypedArray,
            u = n.aTypedArrayConstructor;
        (0, n.exportTypedArrayMethod)("map", (function (e) {
            return i(a(this), e, arguments.length > 1 ? arguments[1] : undefined, (function (e, t) {
                return new(u(o(e, e.constructor)))(t)
            }))
        }))
    }, function (e, t, r) {
        "use strict";
        var n = r(3),
            i = r(127).left,
            o = n.aTypedArray;
        (0, n.exportTypedArrayMethod)("reduce", (function (e) {
            return i(o(this), e, arguments.length, arguments.length > 1 ? arguments[1] : undefined)
        }))
    }, function (e, t, r) {
        "use strict";
        var n = r(3),
            i = r(127).right,
            o = n.aTypedArray;
        (0, n.exportTypedArrayMethod)("reduceRight", (function (e) {
            return i(o(this), e, arguments.length, arguments.length > 1 ? arguments[1] : undefined)
        }))
    }, function (e, t, r) {
        "use strict";
        var n = r(3),
            i = n.aTypedArray,
            o = n.exportTypedArrayMethod,
            a = Math.floor;
        o("reverse", (function () {
            for (var e, t = i(this).length, r = a(t / 2), n = 0; n < r;) e = this[n], this[n++] = this[--t], this[t] = e;
            return this
        }))
    }, function (e, t, r) {
        "use strict";
        var n = r(3),
            i = r(6),
            o = r(169),
            a = r(11),
            u = r(1),
            s = n.aTypedArray;
        (0, n.exportTypedArrayMethod)("set", (function (e) {
            s(this);
            var t = o(arguments.length > 1 ? arguments[1] : undefined, 1),
                r = this.length,
                n = a(e),
                u = i(n.length),
                c = 0;
            if (u + t > r) throw RangeError("Wrong length");
            for (; c < u;) this[t + c] = n[c++]
        }), u((function () {
            new Int8Array(1).set({})
        })))
    }, function (e, t, r) {
        "use strict";
        var n = r(3),
            i = r(32),
            o = r(1),
            a = n.aTypedArray,
            u = n.aTypedArrayConstructor,
            s = n.exportTypedArrayMethod,
            c = [].slice;
        s("slice", (function (e, t) {
            for (var r = c.call(a(this), e, t), n = i(this, this.constructor), o = 0, s = r.length, f = new(u(n))(s); s > o;) f[o] = r[o++];
            return f
        }), o((function () {
            new Int8Array(1).slice()
        })))
    }, function (e, t, r) {
        "use strict";
        var n = r(3),
            i = r(12).some,
            o = n.aTypedArray;
        (0, n.exportTypedArrayMethod)("some", (function (e) {
            return i(o(this), e, arguments.length > 1 ? arguments[1] : undefined)
        }))
    }, function (e, t, r) {
        "use strict";
        var n = r(3),
            i = n.aTypedArray,
            o = n.exportTypedArrayMethod,
            a = [].sort;
        o("sort", (function (e) {
            return a.call(i(this), e)
        }))
    }, function (e, t, r) {
        "use strict";
        var n = r(3),
            i = r(6),
            o = r(30),
            a = r(32),
            u = n.aTypedArray;
        (0, n.exportTypedArrayMethod)("subarray", (function (e, t) {
            var r = u(this),
                n = r.length,
                s = o(e, n);
            return new(a(r, r.constructor))(r.buffer, r.byteOffset + s * r.BYTES_PER_ELEMENT, i((t === undefined ? n : o(t, n)) - s))
        }))
    }, function (e, t, r) {
        "use strict";
        var n = r(2),
            i = r(3),
            o = r(1),
            a = n.Int8Array,
            u = i.aTypedArray,
            s = i.exportTypedArrayMethod,
            c = [].toLocaleString,
            f = [].slice,
            l = !!a && o((function () {
                c.call(new a(1))
            }));
        s("toLocaleString", (function () {
            return c.apply(l ? f.call(u(this)) : u(this), arguments)
        }), o((function () {
            return [1, 2].toLocaleString() != new a([1, 2]).toLocaleString()
        })) || !o((function () {
            a.prototype.toLocaleString.call([1, 2])
        })))
    }, function (e, t, r) {
        "use strict";
        var n = r(3).exportTypedArrayMethod,
            i = r(1),
            o = r(2).Uint8Array,
            a = o && o.prototype || {},
            u = [].toString,
            s = [].join;
        i((function () {
            u.call({})
        })) && (u = function () {
            return s.call(this)
        });
        var c = a.toString != u;
        n("toString", u, c)
    }, function (e, t, r) {
        "use strict";
        var n = r(0),
            i = r(48).includes,
            o = r(109);
        n({
            target: "Array",
            proto: !0,
            forced: !r(16)("indexOf", {
                ACCESSORS: !0,
                1: 0
            })
        }, {
            includes: function (e) {
                return i(this, e, arguments.length > 1 ? arguments[1] : undefined)
            }
        }), o("includes")
    }, function (e, t) {
        var r;
        r = function () {
            return this
        }();
        try {
            r = r || new Function("return this")()
        } catch (n) {
            "object" == typeof window && (r = window)
        }
        e.exports = r
    }, function (e, t, r) {
        var n = r(2),
            i = r(5),
            o = n.document,
            a = i(o) && i(o.createElement);
        e.exports = function (e) {
            return a ? o.createElement(e) : {}
        }
    }, function (e, t, r) {
        var n = r(2),
            i = r(13);
        e.exports = function (e, t) {
            try {
                i(n, e, t)
            } catch (r) {
                n[e] = t
            }
            return t
        }
    }, function (e, t, r) {
        var n = r(132),
            i = Function.toString;
        "function" != typeof n.inspectSource && (n.inspectSource = function (e) {
            return i.call(e)
        }), e.exports = n.inspectSource
    }, function (e, t, r) {
        var n = r(44),
            i = r(132);
        (e.exports = function (e, t) {
            return i[e] || (i[e] = t !== undefined ? t : {})
        })("versions", []).push({
            version: "3.6.4",
            mode: n ? "pure" : "global",
            copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
        })
    }, function (e, t) {
        e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    }, function (e, t) {
        t.f = Object.getOwnPropertySymbols
    }, function (e, t, r) {
        var n = r(1),
            i = /#|\.prototype\./,
            o = function (e, t) {
                var r = u[a(e)];
                return r == c || r != s && ("function" == typeof t ? n(t) : !!t)
            },
            a = o.normalize = function (e) {
                return String(e).replace(i, ".").toLowerCase()
            },
            u = o.data = {},
            s = o.NATIVE = "N",
            c = o.POLYFILL = "P";
        e.exports = o
    }, function (e, t, r) {
        var n = r(4),
            i = r(49),
            o = r(9),
            a = n("unscopables"),
            u = Array.prototype;
        u[a] == undefined && o.f(u, a, {
            configurable: !0,
            value: i(null)
        }), e.exports = function (e) {
            u[a][e] = !0
        }
    }, function (e, t, r) {
        var n = r(1);
        e.exports = !!Object.getOwnPropertySymbols && !n((function () {
            return !String(Symbol())
        }))
    }, function (e, t, r) {
        var n = r(1);
        e.exports = !n((function () {
            return Object.isExtensible(Object.preventExtensions({}))
        }))
    }, function (e, t, r) {
        var n = r(5),
            i = r(51),
            o = r(4)("species");
        e.exports = function (e, t) {
            var r;
            return i(e) && ("function" != typeof (r = e.constructor) || r !== Array && !i(r.prototype) ? n(r) && null === (r = r[o]) && (r = undefined) : r = undefined), new(r === undefined ? Array : r)(0 === t ? 0 : t)
        }
    }, function (e, t, r) {
        "use strict";
        var n = r(0),
            i = r(12).filter,
            o = r(53),
            a = r(16),
            u = o("filter"),
            s = a("filter");
        n({
            target: "Array",
            proto: !0,
            forced: !u || !s
        }, {
            filter: function (e) {
                return i(this, e, arguments.length > 1 ? arguments[1] : undefined)
            }
        })
    }, function (e, t, r) {
        var n, i, o = r(2),
            a = r(145),
            u = o.process,
            s = u && u.versions,
            c = s && s.v8;
        c ? i = (n = c.split("."))[0] + n[1] : a && (!(n = a.match(/Edge\/(\d+)/)) || n[1] >= 74) && (n = a.match(/Chrome\/(\d+)/)) && (i = n[1]), e.exports = i && +i
    }, function (e, t, r) {
        var n = r(0),
            i = r(7),
            o = r(134),
            a = r(15),
            u = r(29),
            s = r(54);
        n({
            target: "Object",
            stat: !0,
            sham: !i
        }, {
            getOwnPropertyDescriptors: function (e) {
                for (var t, r, n = a(e), i = u.f, c = o(n), f = {}, l = 0; c.length > l;)(r = i(n, t = c[l++])) !== undefined && s(f, t, r);
                return f
            }
        })
    }, function (e, t, r) {
        var n = {};
        n[r(4)("toStringTag")] = "z", e.exports = "[object z]" === String(n)
    }, function (e, t, r) {
        var n = r(18);
        e.exports = function (e, t, r) {
            for (var i in t) n(e, i, t[i], r);
            return e
        }
    }, function (e, t, r) {
        var n = r(10),
            i = r(119),
            o = r(6),
            a = r(31),
            u = r(120),
            s = r(147),
            c = function (e, t) {
                this.stopped = e, this.result = t
            };
        (e.exports = function (e, t, r, f, l) {
            var h, p, d, y, v, g, m, b = a(t, r, f ? 2 : 1);
            if (l) h = e;
            else {
                if ("function" != typeof (p = u(e))) throw TypeError("Target is not iterable");
                if (i(p)) {
                    for (d = 0, y = o(e.length); y > d; d++)
                        if ((v = f ? b(n(m = e[d])[0], m[1]) : b(e[d])) && v instanceof c) return v;
                    return new c(!1)
                }
                h = p.call(e)
            }
            for (g = h.next; !(m = g.call(h)).done;)
                if ("object" == typeof (v = s(h, b, m.value, f)) && v && v instanceof c) return v;
            return new c(!1)
        }).stop = function (e) {
            return new c(!0, e)
        }
    }, function (e, t, r) {
        var n = r(4),
            i = r(56),
            o = n("iterator"),
            a = Array.prototype;
        e.exports = function (e) {
            return e !== undefined && (i.Array === e || a[o] === e)
        }
    }, function (e, t, r) {
        var n = r(66),
            i = r(56),
            o = r(4)("iterator");
        e.exports = function (e) {
            if (e != undefined) return e[o] || e["@@iterator"] || i[n(e)]
        }
    }, function (e, t, r) {
        r(63)("toStringTag")
    }, function (e, t, r) {
        "use strict";
        var n = r(0),
            i = r(201),
            o = r(57),
            a = r(39),
            u = r(26),
            s = r(13),
            c = r(18),
            f = r(4),
            l = r(44),
            h = r(56),
            p = r(153),
            d = p.IteratorPrototype,
            y = p.BUGGY_SAFARI_ITERATORS,
            v = f("iterator"),
            g = function () {
                return this
            };
        e.exports = function (e, t, r, f, p, m, b) {
            i(r, t, f);
            var w, x, M, k = function (e) {
                    if (e === p && O) return O;
                    if (!y && e in A) return A[e];
                    switch (e) {
                    case "keys":
                    case "values":
                    case "entries":
                        return function () {
                            return new r(this, e)
                        }
                    }
                    return function () {
                        return new r(this)
                    }
                },
                _ = t + " Iterator",
                E = !1,
                A = e.prototype,
                S = A[v] || A["@@iterator"] || p && A[p],
                O = !y && S || k(p),
                F = "Array" == t && A.entries || S;
            if (F && (w = o(F.call(new e)), d !== Object.prototype && w.next && (l || o(w) === d || (a ? a(w, d) : "function" != typeof w[v] && s(w, v, g)), u(w, _, !0, !0), l && (h[_] = g))), "values" == p && S && "values" !== S.name && (E = !0, O = function () {
                    return S.call(this)
                }), l && !b || A[v] === O || s(A, v, O), h[t] = O, p)
                if (x = {
                        values: k("values"),
                        keys: m ? O : k("keys"),
                        entries: k("entries")
                    }, b)
                    for (M in x) !y && !E && M in A || c(A, M, x[M]);
                else n({
                    target: t,
                    proto: !0,
                    forced: y || E
                }, x);
            return x
        }
    }, function (e, t, r) {
        var n = r(2);
        r(26)(n.JSON, "JSON", !0)
    }, function (e, t, r) {
        r(26)(Math, "Math", !0)
    }, function (e, t, r) {
        r(0)({
            target: "Object",
            stat: !0
        }, {
            setPrototypeOf: r(39)
        })
    }, function (e, t, r) {
        "use strict";
        var n = r(0),
            i = r(1),
            o = r(51),
            a = r(5),
            u = r(11),
            s = r(6),
            c = r(54),
            f = r(112),
            l = r(53),
            h = r(4),
            p = r(114),
            d = h("isConcatSpreadable"),
            y = p >= 51 || !i((function () {
                var e = [];
                return e[d] = !1, e.concat()[0] !== e
            })),
            v = l("concat"),
            g = function (e) {
                if (!a(e)) return !1;
                var t = e[d];
                return t !== undefined ? !!t : o(e)
            };
        n({
            target: "Array",
            proto: !0,
            forced: !y || !v
        }, {
            concat: function (e) {
                var t, r, n, i, o, a = u(this),
                    l = f(a, 0),
                    h = 0;
                for (t = -1, n = arguments.length; t < n; t++)
                    if (o = -1 === t ? a : arguments[t], g(o)) {
                        if (h + (i = s(o.length)) > 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                        for (r = 0; r < i; r++, h++) r in o && c(l, h, o[r])
                    } else {
                        if (h >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                        c(l, h++, o)
                    } return l.length = h, l
            }
        })
    }, function (e, t, r) {
        var n = r(52),
            i = r(11),
            o = r(42),
            a = r(6),
            u = function (e) {
                return function (t, r, u, s) {
                    n(r);
                    var c = i(t),
                        f = o(c),
                        l = a(c.length),
                        h = e ? l - 1 : 0,
                        p = e ? -1 : 1;
                    if (u < 2)
                        for (;;) {
                            if (h in f) {
                                s = f[h], h += p;
                                break
                            }
                            if (h += p, e ? h < 0 : l <= h) throw TypeError("Reduce of empty array with no initial value")
                        }
                    for (; e ? h >= 0 : l > h; h += p) h in f && (s = r(s, f[h], h, c));
                    return s
                }
            };
        e.exports = {
            left: u(!1),
            right: u(!0)
        }
    }, function (e, t, r) {
        "use strict";
        var n = r(2),
            i = r(7),
            o = r(165),
            a = r(13),
            u = r(117),
            s = r(1),
            c = r(55),
            f = r(20),
            l = r(6),
            h = r(166),
            p = r(207),
            d = r(57),
            y = r(39),
            v = r(47).f,
            g = r(9).f,
            m = r(167),
            b = r(26),
            w = r(23),
            x = w.get,
            M = w.set,
            k = n.ArrayBuffer,
            _ = k,
            E = n.DataView,
            A = E && E.prototype,
            S = Object.prototype,
            O = n.RangeError,
            F = p.pack,
            j = p.unpack,
            P = function (e) {
                return [255 & e]
            },
            T = function (e) {
                return [255 & e, e >> 8 & 255]
            },
            D = function (e) {
                return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]
            },
            I = function (e) {
                return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0]
            },
            C = function (e) {
                return F(e, 23, 4)
            },
            R = function (e) {
                return F(e, 52, 8)
            },
            L = function (e, t) {
                g(e.prototype, t, {
                    get: function () {
                        return x(this)[t]
                    }
                })
            },
            K = function (e, t, r, n) {
                var i = h(r),
                    o = x(e);
                if (i + t > o.byteLength) throw O("Wrong index");
                var a = x(o.buffer).bytes,
                    u = i + o.byteOffset,
                    s = a.slice(u, u + t);
                return n ? s : s.reverse()
            },
            B = function (e, t, r, n, i, o) {
                var a = h(r),
                    u = x(e);
                if (a + t > u.byteLength) throw O("Wrong index");
                for (var s = x(u.buffer).bytes, c = a + u.byteOffset, f = n(+i), l = 0; l < t; l++) s[c + l] = f[o ? l : t - l - 1]
            };
        if (o) {
            if (!s((function () {
                    k(1)
                })) || !s((function () {
                    new k(-1)
                })) || s((function () {
                    return new k, new k(1.5), new k(NaN), "ArrayBuffer" != k.name
                }))) {
                for (var U, z = (_ = function (e) {
                        return c(this, _), new k(h(e))
                    }).prototype = k.prototype, H = v(k), N = 0; H.length > N;)(U = H[N++]) in _ || a(_, U, k[U]);
                z.constructor = _
            }
            y && d(A) !== S && y(A, S);
            var W = new E(new _(2)),
                V = A.setInt8;
            W.setInt8(0, 2147483648), W.setInt8(1, 2147483649), !W.getInt8(0) && W.getInt8(1) || u(A, {
                setInt8: function (e, t) {
                    V.call(this, e, t << 24 >> 24)
                },
                setUint8: function (e, t) {
                    V.call(this, e, t << 24 >> 24)
                }
            }, {
                unsafe: !0
            })
        } else _ = function (e) {
            c(this, _, "ArrayBuffer");
            var t = h(e);
            M(this, {
                bytes: m.call(new Array(t), 0),
                byteLength: t
            }), i || (this.byteLength = t)
        }, E = function (e, t, r) {
            c(this, E, "DataView"), c(e, _, "DataView");
            var n = x(e).byteLength,
                o = f(t);
            if (o < 0 || o > n) throw O("Wrong offset");
            if (o + (r = r === undefined ? n - o : l(r)) > n) throw O("Wrong length");
            M(this, {
                buffer: e,
                byteLength: r,
                byteOffset: o
            }), i || (this.buffer = e, this.byteLength = r, this.byteOffset = o)
        }, i && (L(_, "byteLength"), L(E, "buffer"), L(E, "byteLength"), L(E, "byteOffset")), u(E.prototype, {
            getInt8: function (e) {
                return K(this, 1, e)[0] << 24 >> 24
            },
            getUint8: function (e) {
                return K(this, 1, e)[0]
            },
            getInt16: function (e) {
                var t = K(this, 2, e, arguments.length > 1 ? arguments[1] : undefined);
                return (t[1] << 8 | t[0]) << 16 >> 16
            },
            getUint16: function (e) {
                var t = K(this, 2, e, arguments.length > 1 ? arguments[1] : undefined);
                return t[1] << 8 | t[0]
            },
            getInt32: function (e) {
                return I(K(this, 4, e, arguments.length > 1 ? arguments[1] : undefined))
            },
            getUint32: function (e) {
                return I(K(this, 4, e, arguments.length > 1 ? arguments[1] : undefined)) >>> 0
            },
            getFloat32: function (e) {
                return j(K(this, 4, e, arguments.length > 1 ? arguments[1] : undefined), 23)
            },
            getFloat64: function (e) {
                return j(K(this, 8, e, arguments.length > 1 ? arguments[1] : undefined), 52)
            },
            setInt8: function (e, t) {
                B(this, 1, e, P, t)
            },
            setUint8: function (e, t) {
                B(this, 1, e, P, t)
            },
            setInt16: function (e, t) {
                B(this, 2, e, T, t, arguments.length > 2 ? arguments[2] : undefined)
            },
            setUint16: function (e, t) {
                B(this, 2, e, T, t, arguments.length > 2 ? arguments[2] : undefined)
            },
            setInt32: function (e, t) {
                B(this, 4, e, D, t, arguments.length > 2 ? arguments[2] : undefined)
            },
            setUint32: function (e, t) {
                B(this, 4, e, D, t, arguments.length > 2 ? arguments[2] : undefined)
            },
            setFloat32: function (e, t) {
                B(this, 4, e, C, t, arguments.length > 2 ? arguments[2] : undefined)
            },
            setFloat64: function (e, t) {
                B(this, 8, e, R, t, arguments.length > 2 ? arguments[2] : undefined)
            }
        });
        b(_, "ArrayBuffer"), b(E, "DataView"), e.exports = {
            ArrayBuffer: _,
            DataView: E
        }
    }, function (e, t, r) {
        "use strict";
        var n = r(0),
            i = r(48).indexOf,
            o = r(24),
            a = r(16),
            u = [].indexOf,
            s = !!u && 1 / [1].indexOf(1, -0) < 0,
            c = o("indexOf"),
            f = a("indexOf", {
                ACCESSORS: !0,
                1: 0
            });
        n({
            target: "Array",
            proto: !0,
            forced: s || !c || !f
        }, {
            indexOf: function (e) {
                return s ? u.apply(this, arguments) || 0 : i(this, e, arguments.length > 1 ? arguments[1] : undefined)
            }
        })
    }, function (e, t, r) {
        "use strict";
        var n, i, o;
        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function u(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        function s(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }
        function c(e) {
            return !!e.ueLogError
        }
        function f(e) {
            return !!(e.ue && e.uex && e.uet)
        }
        r(100), r(139), Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.CsmLogger = void 0;
        var l = (0, r(25).frozen)((o = i = function () {
            function e() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
                    return window.location
                };
                a(this, e), this._location = t
            }
            var t, r, n;
            return t = e, n = [{
                key: "isSupported",
                value: function () {
                    return c(window)
                }
            }], (r = [{
                key: "logError",
                value: function (t, r) {
                    if (c(window)) {
                        var n, i, o, a = {
                                logLevel: null !== (n = r.logLevel) && void 0 !== n ? n : e.DEFAULT_LOG_LEVEL,
                                attribution: null !== (i = r.attribution) && void 0 !== i ? i : e.DEFAULT_LOG_ATTRIBUTION,
                                message: null !== (o = r.message) && void 0 !== o ? o : e.DEFAULT_LOG_MESSAGE
                            },
                            u = this._location();
                        return !(u.port !== undefined && !e.ALLOWED_LOG_PORTS.includes(u.port) || (window.ueLogError(t, a), 0))
                    }
                    return !1
                }
            }, {
                key: "startMeasureFunctionLatency",
                value: function (t) {
                    if (f(window)) {
                        var r = e.SCOPE_PREFIX + t;
                        try {
                            window.uet("bb", r, {
                                wb: 1
                            })
                        } catch (n) {
                            this.logError(n, {
                                message: "startMeasureFunctionLatency"
                            })
                        }
                    }
                }
            }, {
                key: "endMeasureFunctionLatency",
                value: function (t) {
                    if (f(window)) {
                        var r = e.SCOPE_PREFIX + t;
                        try {
                            window.uet("cf", r, {
                                wb: 1
                            }), window.uex("ld", r, {
                                wb: 1
                            })
                        } catch (n) {
                            this.logError(n, {
                                message: "endMeasureFunctionLatency"
                            })
                        }
                    }
                }
            }]) && u(t.prototype, r), n && u(t, n), e
        }(), s(i, "DEFAULT_LOG_LEVEL", "ERROR"), s(i, "DEFAULT_LOG_ATTRIBUTION", "SiegeCryptoJavaScript"), s(i, "DEFAULT_LOG_MESSAGE", "SiegeCryptoJavaScript"), s(i, "SCOPE_PREFIX", "siege:cse:"), s(i, "ALLOWED_LOG_PORTS", ["", "443", "80"]), n = o)) || n;
        t.CsmLogger = l
    }, function (e, t, r) {
        var n = r(7),
            i = r(1),
            o = r(102);
        e.exports = !n && !i((function () {
            return 7 != Object.defineProperty(o("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        }))
    }, function (e, t, r) {
        var n = r(2),
            i = r(103),
            o = n["__core-js_shared__"] || i("__core-js_shared__", {});
        e.exports = o
    }, function (e, t, r) {
        var n = r(8),
            i = r(134),
            o = r(29),
            a = r(9);
        e.exports = function (e, t) {
            for (var r = i(t), u = a.f, s = o.f, c = 0; c < r.length; c++) {
                var f = r[c];
                n(e, f) || u(e, f, s(t, f))
            }
        }
    }, function (e, t, r) {
        var n = r(35),
            i = r(47),
            o = r(107),
            a = r(10);
        e.exports = n("Reflect", "ownKeys") || function (e) {
            var t = i.f(a(e)),
                r = o.f;
            return r ? t.concat(r(e)) : t
        }
    }, function (e, t, r) {
        var n = r(2);
        e.exports = n
    }, function (e, t, r) {
        var n = r(8),
            i = r(15),
            o = r(48).indexOf,
            a = r(46);
        e.exports = function (e, t) {
            var r, u = i(e),
                s = 0,
                c = [];
            for (r in u) !n(a, r) && n(u, r) && c.push(r);
            for (; t.length > s;) n(u, r = t[s++]) && (~o(c, r) || c.push(r));
            return c
        }
    }, function (e, t, r) {
        var n = r(110);
        e.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator
    }, function (e, t, r) {
        var n = r(35);
        e.exports = n("document", "documentElement")
    }, function (e, t, r) {
        "use strict";
        var n = r(0),
            i = r(190),
            o = r(22);
        n({
            target: "String",
            proto: !0,
            forced: !r(191)("includes")
        }, {
            includes: function (e) {
                return !!~String(o(this)).indexOf(i(e), arguments.length > 1 ? arguments[1] : undefined)
            }
        })
    }, function (e, t, r) {
        var n = r(5),
            i = r(21),
            o = r(4)("match");
        e.exports = function (e) {
            var t;
            return n(e) && ((t = e[o]) !== undefined ? !!t : "RegExp" == i(e))
        }
    }, function (e, t, r) {
        var n = r(0),
            i = r(111),
            o = r(1),
            a = r(5),
            u = r(62).onFreeze,
            s = Object.freeze;
        n({
            target: "Object",
            stat: !0,
            forced: o((function () {
                s(1)
            })),
            sham: !i
        }, {
            freeze: function (e) {
                return s && a(e) ? s(u(e)) : e
            }
        })
    }, function (e, t, r) {
        "use strict";
        var n;
        function i() {
            if (n !== undefined) throw n
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.setLoaderError = function (e) {
            e instanceof Error || (e = new Error(e));
            n = e
        }, t.requireLoaderSuccessWhenCalled = function (e) {
            return function () {
                return i(), e.apply(void 0, arguments)
            }
        }
    }, function (e, t, r) {
        var n = r(15),
            i = r(47).f,
            o = {}.toString,
            a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        e.exports.f = function (e) {
            return a && "[object Window]" == o.call(e) ? function (e) {
                try {
                    return i(e)
                } catch (t) {
                    return a.slice()
                }
            }(e) : i(n(e))
        }
    }, function (e, t, r) {
        var n = r(4);
        t.f = n
    }, function (e, t, r) {
        var n = r(35);
        e.exports = n("navigator", "userAgent") || ""
    }, function (e, t, r) {
        "use strict";
        var n = r(12).forEach,
            i = r(24),
            o = r(16),
            a = i("forEach"),
            u = o("forEach");
        e.exports = a && u ? [].forEach : function (e) {
            return n(this, e, arguments.length > 1 ? arguments[1] : undefined)
        }
    }, function (e, t, r) {
        var n = r(10);
        e.exports = function (e, t, r, i) {
            try {
                return i ? t(n(r)[0], r[1]) : t(r)
            } catch (a) {
                var o = e["return"];
                throw o !== undefined && n(o.call(e)), a
            }
        }
    }, function (e, t, r) {
        var n, i, o, a = r(2),
            u = r(1),
            s = r(21),
            c = r(31),
            f = r(138),
            l = r(102),
            h = r(149),
            p = a.location,
            d = a.setImmediate,
            y = a.clearImmediate,
            v = a.process,
            g = a.MessageChannel,
            m = a.Dispatch,
            b = 0,
            w = {},
            x = function (e) {
                if (w.hasOwnProperty(e)) {
                    var t = w[e];
                    delete w[e], t()
                }
            },
            M = function (e) {
                return function () {
                    x(e)
                }
            },
            k = function (e) {
                x(e.data)
            },
            _ = function (e) {
                a.postMessage(e + "", p.protocol + "//" + p.host)
            };
        d && y || (d = function (e) {
            for (var t = [], r = 1; arguments.length > r;) t.push(arguments[r++]);
            return w[++b] = function () {
                ("function" == typeof e ? e : Function(e)).apply(undefined, t)
            }, n(b), b
        }, y = function (e) {
            delete w[e]
        }, "process" == s(v) ? n = function (e) {
            v.nextTick(M(e))
        } : m && m.now ? n = function (e) {
            m.now(M(e))
        } : g && !h ? (o = (i = new g).port2, i.port1.onmessage = k, n = c(o.postMessage, o, 1)) : !a.addEventListener || "function" != typeof postMessage || a.importScripts || u(_) ? n = "onreadystatechange" in l("script") ? function (e) {
            f.appendChild(l("script")).onreadystatechange = function () {
                f.removeChild(this), x(e)
            }
        } : function (e) {
            setTimeout(M(e), 0)
        } : (n = _, a.addEventListener("message", k, !1))), e.exports = {
            set: d,
            clear: y
        }
    }, function (e, t, r) {
        var n = r(145);
        e.exports = /(iphone|ipod|ipad).*applewebkit/i.test(n)
    }, function (e, t, r) {
        "use strict";
        var n = r(52),
            i = function (e) {
                var t, r;
                this.promise = new e((function (e, n) {
                    if (t !== undefined || r !== undefined) throw TypeError("Bad Promise constructor");
                    t = e, r = n
                })), this.resolve = n(t), this.reject = n(r)
            };
        e.exports.f = function (e) {
            return new i(e)
        }
    }, function (e, t) {
        e.exports = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
        }
    }, function (e, t, r) {
        r(63)("asyncIterator")
    }, function (e, t, r) {
        "use strict";
        var n, i, o, a = r(57),
            u = r(13),
            s = r(8),
            c = r(4),
            f = r(44),
            l = c("iterator"),
            h = !1;
        [].keys && ("next" in (o = [].keys()) ? (i = a(a(o))) !== Object.prototype && (n = i) : h = !0), n == undefined && (n = {}), f || s(n, l) || u(n, l, (function () {
            return this
        })), e.exports = {
            IteratorPrototype: n,
            BUGGY_SAFARI_ITERATORS: h
        }
    }, function (e, t, r) {
        var n = r(1);
        e.exports = !n((function () {
            function e() {}
            return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
        }))
    }, function (e, t, r) {
        var n = r(0),
            i = r(1),
            o = r(11),
            a = r(57),
            u = r(154);
        n({
            target: "Object",
            stat: !0,
            forced: i((function () {
                a(1)
            })),
            sham: !u
        }, {
            getPrototypeOf: function (e) {
                return a(o(e))
            }
        })
    }, function (e, t, r) {
        "use strict";
        var n = r(10);
        e.exports = function () {
            var e = n(this),
                t = "";
            return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
        }
    }, function (e, t, r) {
        var n = r(20),
            i = r(22),
            o = function (e) {
                return function (t, r) {
                    var o, a, u = String(i(t)),
                        s = n(r),
                        c = u.length;
                    return s < 0 || s >= c ? e ? "" : undefined : (o = u.charCodeAt(s)) < 55296 || o > 56319 || s + 1 === c || (a = u.charCodeAt(s + 1)) < 56320 || a > 57343 ? e ? u.charAt(s) : o : e ? u.slice(s, s + 2) : a - 56320 + (o - 55296 << 10) + 65536
                }
            };
        e.exports = {
            codeAt: o(!1),
            charAt: o(!0)
        }
    }, function (e, t, r) {
        "use strict";
        var n;
        function i(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }
        r(14), r(17), Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Deferred = void 0;
        var o = (0, r(25).frozen)(n = function a() {
            var e, t;
            if (function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, a), i(this, "promise", void 0), i(this, "resolve", void 0), i(this, "reject", void 0), this.promise = new Promise((function (r, n) {
                    e = r, t = n
                })), !e || !t) throw new Error("Promise callback wasn't called immediately");
            this.resolve = e, this.reject = t
        }) || n;
        t.Deferred = o
    }, function (e, t, r) {
        "use strict";
        var n, i, o;
        Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getProvider = function (e) {
                if (!c[e]) throw new Error("unknown profile id");
                return c[e]
            },
            function (e) {
                e.SI_MD5 = "si:md5"
            }(n || (n = {})),
            function (e) {
                e.RSA_OAEP_WITH_SHA_256 = "RSA-OAEP-256"
            }(i || (i = {})),
            function (e) {
                e.AES_128_GCM = "aes_128_gcm_iv12_tag16"
            }(o || (o = {}));
        var a, u, s, c = (a = {}, u = n.SI_MD5, s = {
            wrappingAlgorithm: i.RSA_OAEP_WITH_SHA_256,
            symmetricAlgorithm: o.AES_128_GCM
        }, u in a ? Object.defineProperty(a, u, {
            value: s,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a[u] = s, a)
    }, function (e, t, r) {
        "use strict";
        r(59);
        var n = r(18),
            i = r(1),
            o = r(4),
            a = r(73),
            u = r(13),
            s = o("species"),
            c = !i((function () {
                var e = /./;
                return e.exec = function () {
                    var e = [];
                    return e.groups = {
                        a: "7"
                    }, e
                }, "7" !== "".replace(e, "$<a>")
            })),
            f = "$0" === "a".replace(/./, "$0"),
            l = o("replace"),
            h = !!/./ [l] && "" === /./ [l]("a", "$0"),
            p = !i((function () {
                var e = /(?:)/,
                    t = e.exec;
                e.exec = function () {
                    return t.apply(this, arguments)
                };
                var r = "ab".split(e);
                return 2 !== r.length || "a" !== r[0] || "b" !== r[1]
            }));
        e.exports = function (e, t, r, l) {
            var d = o(e),
                y = !i((function () {
                    var t = {};
                    return t[d] = function () {
                        return 7
                    }, 7 != "" [e](t)
                })),
                v = y && !i((function () {
                    var t = !1,
                        r = /a/;
                    return "split" === e && ((r = {}).constructor = {}, r.constructor[s] = function () {
                        return r
                    }, r.flags = "", r[d] = /./ [d]), r.exec = function () {
                        return t = !0, null
                    }, r[d](""), !t
                }));
            if (!y || !v || "replace" === e && (!c || !f || h) || "split" === e && !p) {
                var g = /./ [d],
                    m = r(d, "" [e], (function (e, t, r, n, i) {
                        return t.exec === a ? y && !i ? {
                            done: !0,
                            value: g.call(t, r, n)
                        } : {
                            done: !0,
                            value: e.call(r, t, n)
                        } : {
                            done: !1
                        }
                    }), {
                        REPLACE_KEEPS_$0: f,
                        REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: h
                    }),
                    b = m[0],
                    w = m[1];
                n(String.prototype, e, b), n(RegExp.prototype, d, 2 == t ? function (e, t) {
                    return w.call(e, this, t)
                } : function (e) {
                    return w.call(e, this)
                })
            }
            l && u(RegExp.prototype[d], "sham", !0)
        }
    }, function (e, t, r) {
        "use strict";
        var n = r(157).charAt;
        e.exports = function (e, t, r) {
            return t + (r ? n(e, t).length : 1)
        }
    }, function (e, t, r) {
        var n = r(21),
            i = r(73);
        e.exports = function (e, t) {
            var r = e.exec;
            if ("function" == typeof r) {
                var o = r.call(e, t);
                if ("object" != typeof o) throw TypeError("RegExp exec method returned something other than an Object or null");
                return o
            }
            if ("RegExp" !== n(e)) throw TypeError("RegExp#exec called on incompatible receiver");
            return i.call(e, t)
        }
    }, function (e, t, r) {
        "use strict";
        function n(e, t, r, n, i, o, a) {
            try {
                var u = e[o](a),
                    s = u.value
            } catch (c) {
                return void r(c)
            }
            u.done ? t(s) : Promise.resolve(s).then(n, i)
        }
        r(14), r(17), Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.measureAsync = function (e) {
            return function (t, r, i) {
                var o = i.value;
                return i.value = function () {
                    var t, i = (t = regeneratorRuntime.mark((function a() {
                        var t, n, i, u, s = arguments;
                        return regeneratorRuntime.wrap((function (a) {
                            for (;;) switch (a.prev = a.next) {
                            case 0:
                                for (e.logger.startMeasureFunctionLatency(r), a.prev = 1, n = s.length, i = new Array(n), u = 0; u < n; u++) i[u] = s[u];
                                return a.next = 5, o.apply(this, i);
                            case 5:
                                t = a.sent, a.next = 12;
                                break;
                            case 8:
                                throw a.prev = 8, a.t0 = a["catch"](1), e.logger.logError(a.t0, {
                                    message: r
                                }), a.t0;
                            case 12:
                                return e.logger.endMeasureFunctionLatency(r), a.abrupt("return", t);
                            case 14:
                            case "end":
                                return a.stop()
                            }
                        }), a, this, [
                            [1, 8]
                        ])
                    })), function () {
                        var e = this,
                            r = arguments;
                        return new Promise((function (i, o) {
                            var a = t.apply(e, r);
                            function u(e) {
                                n(a, i, o, u, s, "next", e)
                            }
                            function s(e) {
                                n(a, i, o, u, s, "throw", e)
                            }
                            u(undefined)
                        }))
                    });
                    return function () {
                        return i.apply(this, arguments)
                    }
                }(), i
            }
        }, r(27)
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.CsmToolbox = void 0;
        var n = r(130),
            i = {
                timer: Date,
                logger: new n.CsmLogger
            };
        t.CsmToolbox = i
    }, function (e, t) {
        e.exports = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView
    }, function (e, t, r) {
        var n = r(20),
            i = r(6);
        e.exports = function (e) {
            if (e === undefined) return 0;
            var t = n(e),
                r = i(t);
            if (t !== r) throw RangeError("Wrong length or index");
            return r
        }
    }, function (e, t, r) {
        "use strict";
        var n = r(11),
            i = r(30),
            o = r(6);
        e.exports = function (e) {
            for (var t = n(this), r = o(t.length), a = arguments.length, u = i(a > 1 ? arguments[1] : undefined, r), s = a > 2 ? arguments[2] : undefined, c = s === undefined ? r : i(s, r); c > u;) t[u++] = e;
            return t
        }
    }, function (e, t, r) {
        var n = r(2),
            i = r(1),
            o = r(68),
            a = r(3).NATIVE_ARRAY_BUFFER_VIEWS,
            u = n.ArrayBuffer,
            s = n.Int8Array;
        e.exports = !a || !i((function () {
            s(1)
        })) || !i((function () {
            new s(-1)
        })) || !o((function (e) {
            new s, new s(null), new s(1.5), new s(e)
        }), !0) || i((function () {
            return 1 !== new s(new u(2), 1, undefined).length
        }))
    }, function (e, t, r) {
        var n = r(209);
        e.exports = function (e, t) {
            var r = n(e);
            if (r % t) throw RangeError("Wrong offset");
            return r
        }
    }, function (e, t, r) {
        var n = r(11),
            i = r(6),
            o = r(120),
            a = r(119),
            u = r(31),
            s = r(3).aTypedArrayConstructor;
        e.exports = function (e) {
            var t, r, c, f, l, h, p = n(e),
                d = arguments.length,
                y = d > 1 ? arguments[1] : undefined,
                v = y !== undefined,
                g = o(p);
            if (g != undefined && !a(g))
                for (h = (l = g.call(p)).next, p = []; !(f = h.call(l)).done;) p.push(f.value);
            for (v && d > 2 && (y = u(y, arguments[2], 2)), r = i(p.length), c = new(s(this))(r), t = 0; r > t; t++) c[t] = v ? y(p[t], t) : p[t];
            return c
        }
    }, function (e, t, r) {
        var n = r(5),
            i = r(39);
        e.exports = function (e, t, r) {
            var o, a;
            return i && "function" == typeof (o = t.constructor) && o !== r && n(a = o.prototype) && a !== r.prototype && i(e, a), e
        }
    }, function (e, t, r) {
        "use strict";
        var n;
        function i(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.TypeConverter = void 0, r(212);
        var o = (0, r(25).frozen)(n = function () {
            function e() {
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            var t, r, n;
            return t = e, n = [{
                key: "convertStringToDataArray",
                value: function (e) {
                    return (new TextEncoder).encode(e)
                }
            }, {
                key: "toBase64",
                value: function (e) {
                    for (var t = "", r = 0; r < e.byteLength; r++) t += String.fromCharCode(e[r]);
                    return window.btoa(t)
                }
            }], (r = null) && i(t.prototype, r), n && i(t, n), e
        }()) || n;
        t.TypeConverter = o
    }, function (e, t, r) {
        "use strict";
        var n = r(0),
            i = r(42),
            o = r(15),
            a = r(24),
            u = [].join,
            s = i != Object,
            c = a("join", ",");
        n({
            target: "Array",
            proto: !0,
            forced: s || !c
        }, {
            join: function (e) {
                return u.call(o(this), e === undefined ? "," : e)
            }
        })
    }, function (e, t, r) {
        "use strict";
        var n = r(0),
            i = r(2),
            o = r(128),
            a = r(67),
            u = o.ArrayBuffer;
        n({
            global: !0,
            forced: i.ArrayBuffer !== u
        }, {
            ArrayBuffer: u
        }), a("ArrayBuffer")
    }, function (e, t, r) {
        var n = r(0),
            i = r(214);
        n({
            target: "Array",
            stat: !0,
            forced: !r(68)((function (e) {
                Array.from(e)
            }))
        }, {
            from: i
        })
    }, function (e, t, r) {
        "use strict";
        var n = r(0),
            i = r(12).map,
            o = r(53),
            a = r(16),
            u = o("map"),
            s = a("map");
        n({
            target: "Array",
            proto: !0,
            forced: !u || !s
        }, {
            map: function (e) {
                return i(this, e, arguments.length > 1 ? arguments[1] : undefined)
            }
        })
    }, function (e, t, r) {
        "use strict";
        r(28), Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isCseField = function (e) {
            if (!(e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement)) return !1;
            var t = e;
            return t.name !== undefined && "" !== t.name && t.value !== undefined && null !== t.value
        }, t.isCseFilesField = function (e) {
            return e.files instanceof FileList
        }
    }, function (e, t, r) {
        "use strict";
        var n = r(0),
            i = r(12).find,
            o = r(109),
            a = r(16),
            u = !0,
            s = a("find");
        "find" in [] && Array(1).find((function () {
            u = !1
        })), n({
            target: "Array",
            proto: !0,
            forced: u || !s
        }, {
            find: function (e) {
                return i(this, e, arguments.length > 1 ? arguments[1] : undefined)
            }
        }), o("find")
    }, function (e, t, r) {
        var n = r(2),
            i = r(31),
            o = Function.call;
        e.exports = function (e, t, r) {
            return i(o, n[e].prototype[t], r)
        }
    }, function (e, t, r) {
        "use strict";
        var n = r(168);
        (0, r(3).exportTypedArrayStaticMethod)("from", r(170), n)
    }, function (e, t, r) {
        "use strict";
        var n = r(0),
            i = r(30),
            o = r(20),
            a = r(6),
            u = r(11),
            s = r(112),
            c = r(54),
            f = r(53),
            l = r(16),
            h = f("splice"),
            p = l("splice", {
                ACCESSORS: !0,
                0: 0,
                1: 2
            }),
            d = Math.max,
            y = Math.min;
        n({
            target: "Array",
            proto: !0,
            forced: !h || !p
        }, {
            splice: function (e, t) {
                var r, n, f, l, h, p, v = u(this),
                    g = a(v.length),
                    m = i(e, g),
                    b = arguments.length;
                if (0 === b ? r = n = 0 : 1 === b ? (r = 0, n = g - m) : (r = b - 2, n = y(d(o(t), 0), g - m)), g + r - n > 9007199254740991) throw TypeError("Maximum allowed length exceeded");
                for (f = s(v, n), l = 0; l < n; l++)(h = m + l) in v && c(f, l, v[h]);
                if (f.length = n, r < n) {
                    for (l = m; l < g - n; l++) p = l + r, (h = l + n) in v ? v[p] = v[h] : delete v[p];
                    for (l = g; l > g - n + r; l--) delete v[l - 1]
                } else if (r > n)
                    for (l = g - n; l > m; l--) p = l + r - 1, (h = l + n - 1) in v ? v[p] = v[h] : delete v[p];
                for (l = 0; l < r; l++) v[l + m] = arguments[l + 2];
                return v.length = g - n + r, f
            }
        })
    }, function (e, t, r) {
        var n = r(0),
            i = r(235);
        n({
            global: !0,
            forced: parseInt != i
        }, {
            parseInt: i
        })
    }, function (e, t) {
        e.exports = "\t\n\x0B\f\r                　
﻿"
    }, function (e, t, r) {
        "use strict";
        function n(e) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        function i() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return i = function () {
                return e
            }, e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t["default"] = void 0;
        var o = function (e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" !== n(e) && "function" != typeof e) return {
                "default": e
            };
            var t = i();
            if (t && t.has(e)) return t.get(e);
            var r = {},
                o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if (Object.prototype.hasOwnProperty.call(e, a)) {
                    var u = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                    u && (u.get || u.set) ? Object.defineProperty(r, a, u) : r[a] = e[a]
                } r["default"] = e, t && t.set(e, r);
            return r
        }(r(245));
        t["default"] = o
    }, function (e, t, r) {
        e.exports = r(186)
    }, function (e, t, r) {
        "use strict";
        var n = r(130),
            i = r(142);
        "undefined" != typeof importScripts ? r(184) : (n.CsmLogger.isSupported() || (0, i.setLoaderError)("Client-Side Metrics is required as a dependency."), e.exports = r(192))
    }, function (e, t, r) {
        var n = r(2),
            i = r(104),
            o = n.WeakMap;
        e.exports = "function" == typeof o && /native code/.test(i(o))
    }, function (e, t, r) {
        var n = r(7),
            i = r(9),
            o = r(10),
            a = r(50);
        e.exports = n ? Object.defineProperties : function (e, t) {
            o(e);
            for (var r, n = a(t), u = n.length, s = 0; u > s;) i.f(e, r = n[s++], t[r]);
            return e
        }
    }, function (e, t, r) {
        var n = r(7),
            i = r(1),
            o = r(8),
            a = Object.defineProperty,
            u = {},
            s = function (e) {
                throw e
            };
        e.exports = function (e, t) {
            if (o(u, e)) return u[e];
            t || (t = {});
            var r = [][e],
                c = !!o(t, "ACCESSORS") && t.ACCESSORS,
                f = o(t, 0) ? t[0] : s,
                l = o(t, 1) ? t[1] : undefined;
            return u[e] = !!r && !i((function () {
                if (c && !n) return !0;
                var e = {
                    length: -1
                };
                c ? a(e, 1, {
                    enumerable: !0,
                    get: s
                }) : e[1] = 1, r.call(e, f, l)
            }))
        }
    }, function (e, t, r) {
        var n = r(140);
        e.exports = function (e) {
            if (n(e)) throw TypeError("The method doesn't accept regular expressions");
            return e
        }
    }, function (e, t, r) {
        var n = r(4)("match");
        e.exports = function (e) {
            var t = /./;
            try {
                "/./" [e](t)
            } catch (r) {
                try {
                    return t[n] = !1, "/./" [e](t)
                } catch (i) {}
            }
            return !1
        }
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), Object.defineProperty(t, "TypeConverter", {
            enumerable: !0,
            get: function () {
                return c.TypeConverter
            }
        }), t.createDeferred = t.createFormHandler = t.encryptData = t.addProfile = t.addLoadingDataType = t.addDataType = void 0;
        var n = r(193),
            i = r(204),
            o = r(213),
            a = r(217),
            u = r(142),
            s = r(158),
            c = r(172),
            f = h(r(218)),
            l = h(r(184));
        function h(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        f["default"].configureFallback(l["default"].subtle);
        var p = new n.DataTypeStorage(f["default"]),
            d = new a.ProfileStorage,
            y = new i.EncryptionEngine(f["default"], p, d),
            v = p.add.bind(p);
        t.addDataType = v;
        var g = p.addLoadingDataType.bind(p);
        t.addLoadingDataType = g;
        var m = d.add.bind(d);
        t.addProfile = m;
        var b = (0, u.requireLoaderSuccessWhenCalled)(y.encryptData.bind(y));
        t.encryptData = b;
        var w = (0, u.requireLoaderSuccessWhenCalled)((function (e) {
            return new o.FormHandler(d, y, e)
        }));
        t.createFormHandler = w;
        t.createDeferred = function () {
            return new s.Deferred
        }
    }, function (e, t, r) {
        "use strict";
        r(36), r(113), r(37), r(64), r(115), r(65), r(14), r(17), r(38), Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DataTypeStorage = void 0, r(27);
        var n, i = r(203),
            o = r(25),
            a = r(159);
        function u(e, t, r, n, i, o, a) {
            try {
                var u = e[o](a),
                    s = u.value
            } catch (c) {
                return void r(c)
            }
            u.done ? t(s) : Promise.resolve(s).then(n, i)
        }
        function s(e) {
            return function () {
                var t = this,
                    r = arguments;
                return new Promise((function (n, i) {
                    var o = e.apply(t, r);
                    function a(e) {
                        u(o, n, i, a, s, "next", e)
                    }
                    function s(e) {
                        u(o, n, i, a, s, "throw", e)
                    }
                    a(undefined)
                }))
            }
        }
        function c(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), r.push.apply(r, n)
            }
            return r
        }
        function f(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? c(Object(r), !0).forEach((function (t) {
                    h(e, t, r[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }))
            }
            return e
        }
        function l(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        function h(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }
        var p = (0, o.frozen)(n = function () {
            function e(t) {
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this._encryptionSdk = t, h(this, "_dataTypes", new i.AsyncMap)
            }
            var t, r, n, o;
            return t = e, (r = [{
                key: "add",
                value: function (e) {
                    var t = new this._encryptionSdk.PublicMasterKey({
                        publicKey: f({
                            alg: (0, a.getProvider)(e.providerId).wrappingAlgorithm
                        }, e.jwkPublicKey),
                        providerId: e.providerId,
                        keyId: e.keyId
                    });
                    this._dataTypes.set(e.dataTypeId, {
                        publicKeyProvider: t,
                        materialsManager: new this._encryptionSdk.WebCryptoMaterialsManager({
                            keyProvider: t
                        }),
                        providerId: e.providerId
                    })
                }
            }, {
                key: "addLoadingDataType",
                value: function (e, t) {
                    this._dataTypes.set(e, s(regeneratorRuntime.mark((function r() {
                        return regeneratorRuntime.wrap((function (r) {
                            for (;;) switch (r.prev = r.next) {
                            case 0:
                                return r.next = 2, t;
                            case 2:
                                return r.next = 4, new Promise((function (e) {
                                    return setTimeout(e, 0)
                                }));
                            case 4:
                                throw new Error("Promise to load '".concat(e, "' succedeed, but datatype was not loaded"));
                            case 5:
                            case "end":
                                return r.stop()
                            }
                        }), r)
                    })))())
                }
            }, {
                key: "findById",
                value: (o = s(regeneratorRuntime.mark((function u(e) {
                    return regeneratorRuntime.wrap((function (t) {
                        for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", this._dataTypes.get(e));
                        case 1:
                        case "end":
                            return t.stop()
                        }
                    }), u, this)
                }))), function (e) {
                    return o.apply(this, arguments)
                })
            }]) && l(t.prototype, r), n && l(t, n), e
        }()) || n;
        t.DataTypeStorage = p
    }, function (e, t, r) {
        "use strict";
        var n = r(116),
            i = r(66);
        e.exports = n ? {}.toString : function () {
            return "[object " + i(this) + "]"
        }
    }, function (e, t, r) {
        var n = r(2);
        e.exports = n.Promise
    }, function (e, t, r) {
        var n, i, o, a, u, s, c, f, l = r(2),
            h = r(29).f,
            p = r(21),
            d = r(148).set,
            y = r(149),
            v = l.MutationObserver || l.WebKitMutationObserver,
            g = l.process,
            m = l.Promise,
            b = "process" == p(g),
            w = h(l, "queueMicrotask"),
            x = w && w.value;
        x || (n = function () {
            var e, t;
            for (b && (e = g.domain) && e.exit(); i;) {
                t = i.fn, i = i.next;
                try {
                    t()
                } catch (r) {
                    throw i ? a() : o = undefined, r
                }
            }
            o = undefined, e && e.enter()
        }, b ? a = function () {
            g.nextTick(n)
        } : v && !y ? (u = !0, s = document.createTextNode(""), new v(n).observe(s, {
            characterData: !0
        }), a = function () {
            s.data = u = !u
        }) : m && m.resolve ? (c = m.resolve(undefined), f = c.then, a = function () {
            f.call(c, n)
        }) : a = function () {
            d.call(l, n)
        }), e.exports = x || function (e) {
            var t = {
                fn: e,
                next: undefined
            };
            o && (o.next = t), i || (i = t, a()), o = t
        }
    }, function (e, t, r) {
        var n = r(10),
            i = r(5),
            o = r(150);
        e.exports = function (e, t) {
            if (n(e), i(t) && t.constructor === e) return t;
            var r = o.f(e);
            return (0, r.resolve)(t), r.promise
        }
    }, function (e, t, r) {
        var n = r(2);
        e.exports = function (e, t) {
            var r = n.console;
            r && r.error && (1 === arguments.length ? r.error(e) : r.error(e, t))
        }
    }, function (e, t) {
        e.exports = function (e) {
            try {
                return {
                    error: !1,
                    value: e()
                }
            } catch (t) {
                return {
                    error: !0,
                    value: t
                }
            }
        }
    }, function (e, t) {
        e.exports = function (e) {
            return e.webpackPolyfill || (e.deprecate = function () {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function () {
                    return e.l
                }
            }), Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function () {
                    return e.i
                }
            }), e.webpackPolyfill = 1), e
        }
    }, function (e, t, r) {
        "use strict";
        var n = r(153).IteratorPrototype,
            i = r(49),
            o = r(34),
            a = r(26),
            u = r(56),
            s = function () {
                return this
            };
        e.exports = function (e, t, r) {
            var c = t + " Iterator";
            return e.prototype = i(n, {
                next: o(1, r)
            }), a(e, c, !1, !0), u[c] = s, e
        }
    }, function (e, t, r) {
        var n = r(5);
        e.exports = function (e) {
            if (!n(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype");
            return e
        }
    }, function (e, t, r) {
        "use strict";
        r(126), r(14), r(17), Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.AsyncMap = void 0, r(27);
        var n, i, o, a = r(158),
            u = r(25);
        function s(e, t, r, n, i, o, a) {
            try {
                var u = e[o](a),
                    s = u.value
            } catch (c) {
                return void r(c)
            }
            u.done ? t(s) : Promise.resolve(s).then(n, i)
        }
        function c(e) {
            return function () {
                var t = this,
                    r = arguments;
                return new Promise((function (n, i) {
                    var o = e.apply(t, r);
                    function a(e) {
                        s(o, n, i, a, u, "next", e)
                    }
                    function u(e) {
                        s(o, n, i, a, u, "throw", e)
                    }
                    a(undefined)
                }))
            }
        }
        function f(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function l(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        function h(e, t, r) {
            return t && l(e.prototype, t), r && l(e, r), e
        }
        function p(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }! function (e) {
            e[e.EMPTY = 0] = "EMPTY", e[e.VALUE = 1] = "VALUE", e[e.ERROR = 2] = "ERROR"
        }(o || (o = {}));
        var d = (0, u.frozen)(n = function () {
                function e() {
                    f(this, e), p(this, "_value", {
                        status: o.EMPTY
                    }), p(this, "_valueReady", new a.Deferred), p(this, "_setOpIndex", 0)
                }
                var t, r;
                return h(e, [{
                    key: "get",
                    value: (r = c(regeneratorRuntime.mark((function n() {
                        var e;
                        return regeneratorRuntime.wrap((function (t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, this._valueReady.promise;
                            case 2:
                                if (this._value.status !== o.EMPTY) {
                                    t.next = 4;
                                    break
                                }
                                throw new Error("Map entry value is ready but is still empty");
                            case 4:
                                if (this._value.status !== o.ERROR) {
                                    t.next = 8;
                                    break
                                }
                                throw (e = new Error("Map entry value failed to load")).stack = "".concat(e.stack, "\nCaused by: ").concat(this._value.error()), e;
                            case 8:
                                return t.abrupt("return", this._value.value);
                            case 9:
                            case "end":
                                return t.stop()
                            }
                        }), n, this)
                    }))), function () {
                        return r.apply(this, arguments)
                    })
                }, {
                    key: "_setLater",
                    value: (t = c(regeneratorRuntime.mark((function i(e, t) {
                        var r, n;
                        return regeneratorRuntime.wrap((function (i) {
                            for (;;) switch (i.prev = i.next) {
                            case 0:
                                return i.prev = 0, i.next = 3, t;
                            case 3:
                                if (r = i.sent, !(this._value.status === o.VALUE && e < this._value.opIndex)) {
                                    i.next = 6;
                                    break
                                }
                                return i.abrupt("return");
                            case 6:
                                this._value = {
                                    status: o.VALUE,
                                    value: r,
                                    opIndex: e
                                }, i.next = 15;
                                break;
                            case 9:
                                if (i.prev = 9, i.t0 = i["catch"](0), n = i.t0 instanceof Error ? function () {
                                        return "".concat(i.t0.stack)
                                    } : function () {
                                        return "".concat(i.t0)
                                    }, !(this._value.status === o.VALUE || this._value.status === o.ERROR && e < this._value.opIndex)) {
                                    i.next = 14;
                                    break
                                }
                                return i.abrupt("return");
                            case 14:
                                this._value = {
                                    status: o.ERROR,
                                    error: n,
                                    opIndex: e
                                };
                            case 15:
                                this._valueReady.resolve();
                            case 16:
                            case "end":
                                return i.stop()
                            }
                        }), i, this, [
                            [0, 9]
                        ])
                    }))), function (e, r) {
                        return t.apply(this, arguments)
                    })
                }, {
                    key: "set",
                    value: function (e) {
                        this._setLater(this._setOpIndex++, e)
                    }
                }]), e
            }()) || n,
            y = (0, u.frozen)(i = function () {
                function e() {
                    f(this, e), p(this, "_entries", {})
                }
                var t;
                return h(e, [{
                    key: "get",
                    value: (t = c(regeneratorRuntime.mark((function r(e) {
                        return regeneratorRuntime.wrap((function (t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (!(e in this._entries)) {
                                    t.next = 4;
                                    break
                                }
                                return t.abrupt("return", this._entries[e].get());
                            case 4:
                                throw new Error("Key '".concat(e, "' not found, and not being loaded"));
                            case 5:
                            case "end":
                                return t.stop()
                            }
                        }), r, this)
                    }))), function (e) {
                        return t.apply(this, arguments)
                    })
                }, {
                    key: "set",
                    value: function (e, t) {
                        e in this._entries || (this._entries[e] = new d), this._entries[e].set(t)
                    }
                }]), e
            }()) || i;
        t.AsyncMap = y
    }, function (e, t, r) {
        "use strict";
        r(37), r(19), r(72), r(58), r(40), r(28), r(64), r(65), r(14), r(17), r(59), r(33), r(74), r(38), r(41), Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.EncryptionEngine = void 0, r(27);
        var n, i, o, a, u, s, c = r(163),
            f = r(164),
            l = r(206),
            h = r(25),
            p = r(172),
            d = r(159);
        function y(e, t, r, n, i, o, a) {
            try {
                var u = e[o](a),
                    s = u.value
            } catch (c) {
                return void r(c)
            }
            u.done ? t(s) : Promise.resolve(s).then(n, i)
        }
        function v(e) {
            return function () {
                var t = this,
                    r = arguments;
                return new Promise((function (n, i) {
                    var o = e.apply(t, r);
                    function a(e) {
                        y(o, n, i, a, u, "next", e)
                    }
                    function u(e) {
                        y(o, n, i, a, u, "throw", e)
                    }
                    a(undefined)
                }))
            }
        }
        function g(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        function m(e, t, r, n, i) {
            var o = {};
            return Object.keys(n).forEach((function (e) {
                o[e] = n[e]
            })), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), o = r.slice().reverse().reduce((function (r, n) {
                return n(e, t, r) || r
            }), o), i && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(i) : void 0, o.initializer = undefined), void 0 === o.initializer && (Object.defineProperty(e, t, o), o = null), o
        }
        var b = (n = (0, c.measureAsync)(f.CsmToolbox), i = (0, c.measureAsync)(f.CsmToolbox), o = (0, c.measureAsync)(f.CsmToolbox), a = (0, c.measureAsync)(f.CsmToolbox), (0, h.frozen)((m((s = function () {
            function e(t, r, n) {
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this._encryptionSdk = t, this._dataTypeStorage = r, this._profileStorage = n
            }
            var t, r, n, i, o, a, u;
            return t = e, (r = [{
                key: "getDataTypeStorage",
                value: function () {
                    return this._dataTypeStorage
                }
            }, {
                key: "getProfileStorage",
                value: function () {
                    return this._profileStorage
                }
            }, {
                key: "encryptData",
                value: (u = v(regeneratorRuntime.mark((function s(e, t, r) {
                    var n;
                    return regeneratorRuntime.wrap((function (i) {
                        for (;;) switch (i.prev = i.next) {
                        case 0:
                            return i.next = 2, this._dataTypeStorage.findById(t);
                        case 2:
                            return n = i.sent, i.abrupt("return", this._encryptionSdk.encrypt({
                                materialsManager: n.materialsManager,
                                source: e,
                                algorithm: (0, d.getProvider)(n.providerId).symmetricAlgorithm,
                                encryptionContext: r
                            }));
                        case 4:
                        case "end":
                            return i.stop()
                        }
                    }), s, this)
                }))), function (e, t, r) {
                    return u.apply(this, arguments)
                })
            }, {
                key: "encryptString",
                value: (a = v(regeneratorRuntime.mark((function c(e, t, r) {
                    var n, i, o;
                    return regeneratorRuntime.wrap((function (a) {
                        for (;;) switch (a.prev = a.next) {
                        case 0:
                            return a.next = 2, this.encryptData(p.TypeConverter.convertStringToDataArray(e), t.dataType, r);
                        case 2:
                            return n = a.sent, i = p.TypeConverter.toBase64(n.cipherMessage), t.requiresTail && (o = e.replace(/[\s-]/g, "").slice(-4), i += o.length > 3 ? "!" + o : ""), a.abrupt("return", i);
                        case 6:
                        case "end":
                            return a.stop()
                        }
                    }), c, this)
                }))), function (e, t, r) {
                    return a.apply(this, arguments)
                })
            }, {
                key: "encryptFile",
                value: (o = v(regeneratorRuntime.mark((function f(e, t, r) {
                    var n, i;
                    return regeneratorRuntime.wrap((function (o) {
                        for (;;) switch (o.prev = o.next) {
                        case 0:
                            return o.next = 2, (0, l.readFile)(e);
                        case 2:
                            return n = o.sent, o.next = 5, this.encryptData(n, t.dataType, r);
                        case 5:
                            return i = o.sent.cipherMessage, o.abrupt("return", new File([i], e.name, {
                                type: e.type
                            }));
                        case 7:
                        case "end":
                            return o.stop()
                        }
                    }), f, this)
                }))), function (e, t, r) {
                    return o.apply(this, arguments)
                })
            }, {
                key: "encryptFileList",
                value: (i = v(regeneratorRuntime.mark((function h(e, t, r) {
                    var n, i;
                    return regeneratorRuntime.wrap((function (o) {
                        for (;;) switch (o.prev = o.next) {
                        case 0:
                            for (n = [], i = 0; i < e.length; i++) n.push(this.encryptFile(e[i], t, r));
                            return o.abrupt("return", Promise.all(n));
                        case 3:
                        case "end":
                            return o.stop()
                        }
                    }), h, this)
                }))), function (e, t, r) {
                    return i.apply(this, arguments)
                })
            }]) && g(t.prototype, r), n && g(t, n), e
        }()).prototype, "encryptData", [n], Object.getOwnPropertyDescriptor(s.prototype, "encryptData"), s.prototype), m(s.prototype, "encryptString", [i], Object.getOwnPropertyDescriptor(s.prototype, "encryptString"), s.prototype), m(s.prototype, "encryptFile", [o], Object.getOwnPropertyDescriptor(s.prototype, "encryptFile"), s.prototype), m(s.prototype, "encryptFileList", [a], Object.getOwnPropertyDescriptor(s.prototype, "encryptFileList"), s.prototype), u = s)) || u);
        t.EncryptionEngine = b
    }, function (e, t, r) {
        "use strict";
        var n = r(1);
        function i(e, t) {
            return RegExp(e, t)
        }
        t.UNSUPPORTED_Y = n((function () {
            var e = i("a", "y");
            return e.lastIndex = 2, null != e.exec("abcd")
        })), t.BROKEN_CARET = n((function () {
            var e = i("^r", "gy");
            return e.lastIndex = 2, null != e.exec("str")
        }))
    }, function (e, t, r) {
        "use strict";
        function n(e, t, r, n, i, o, a) {
            try {
                var u = e[o](a),
                    s = u.value
            } catch (c) {
                return void r(c)
            }
            u.done ? t(s) : Promise.resolve(s).then(n, i)
        }
        function i(e) {
            return function () {
                var t = this,
                    r = arguments;
                return new Promise((function (i, o) {
                    var a = e.apply(t, r);
                    function u(e) {
                        n(a, i, o, u, s, "next", e)
                    }
                    function s(e) {
                        n(a, i, o, u, s, "throw", e)
                    }
                    u(undefined)
                }))
            }
        }
        function o() {
            return (o = i(regeneratorRuntime.mark((function e(t) {
                return regeneratorRuntime.wrap((function (e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.abrupt("return", new Promise((function (e, r) {
                            var n = new FileReader;
                            n.onabort = function () {
                                r(new Error("file reading operation aborted"))
                            }, n.onerror = function (e) {
                                r(e)
                            }, n.onloadend = function () {
                                e(new Uint8Array(this.result))
                            }, n.readAsArrayBuffer(t)
                        })));
                    case 1:
                    case "end":
                        return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }
        r(19), r(75), r(14), r(17), r(76), r(77), r(78), r(79), r(80), r(81), r(82), r(83), r(84), r(85), r(86), r(87), r(88), r(89), r(90), r(91), r(92), r(93), r(94), r(95), r(96), r(97), r(98), r(99), Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.readFile = function (e) {
            return o.apply(this, arguments)
        }, r(27)
    }, function (e, t) {
        var r = Math.abs,
            n = Math.pow,
            i = Math.floor,
            o = Math.log,
            a = Math.LN2;
        e.exports = {
            pack: function (e, t, u) {
                var s, c, f, l = new Array(u),
                    h = 8 * u - t - 1,
                    p = (1 << h) - 1,
                    d = p >> 1,
                    y = 23 === t ? n(2, -24) - n(2, -77) : 0,
                    v = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0,
                    g = 0;
                for ((e = r(e)) != e || e === 1 / 0 ? (c = e != e ? 1 : 0, s = p) : (s = i(o(e) / a), e * (f = n(2, -s)) < 1 && (s--, f *= 2), (e += s + d >= 1 ? y / f : y * n(2, 1 - d)) * f >= 2 && (s++, f /= 2), s + d >= p ? (c = 0, s = p) : s + d >= 1 ? (c = (e * f - 1) * n(2, t), s += d) : (c = e * n(2, d - 1) * n(2, t), s = 0)); t >= 8; l[g++] = 255 & c, c /= 256, t -= 8);
                for (s = s << t | c, h += t; h > 0; l[g++] = 255 & s, s /= 256, h -= 8);
                return l[--g] |= 128 * v, l
            },
            unpack: function (e, t) {
                var r, i = e.length,
                    o = 8 * i - t - 1,
                    a = (1 << o) - 1,
                    u = a >> 1,
                    s = o - 7,
                    c = i - 1,
                    f = e[c--],
                    l = 127 & f;
                for (f >>= 7; s > 0; l = 256 * l + e[c], c--, s -= 8);
                for (r = l & (1 << -s) - 1, l >>= -s, s += t; s > 0; r = 256 * r + e[c], c--, s -= 8);
                if (0 === l) l = 1 - u;
                else {
                    if (l === a) return r ? NaN : f ? -1 / 0 : 1 / 0;
                    r += n(2, t), l -= u
                }
                return (f ? -1 : 1) * r * n(2, l - t)
            }
        }
    }, function (e, t, r) {
        "use strict";
        var n = r(0),
            i = r(2),
            o = r(7),
            a = r(168),
            u = r(3),
            s = r(128),
            c = r(55),
            f = r(34),
            l = r(13),
            h = r(6),
            p = r(166),
            d = r(169),
            y = r(43),
            v = r(8),
            g = r(66),
            m = r(5),
            b = r(49),
            w = r(39),
            x = r(47).f,
            M = r(170),
            k = r(12).forEach,
            _ = r(67),
            E = r(9),
            A = r(29),
            S = r(23),
            O = r(171),
            F = S.get,
            j = S.set,
            P = E.f,
            T = A.f,
            D = Math.round,
            I = i.RangeError,
            C = s.ArrayBuffer,
            R = s.DataView,
            L = u.NATIVE_ARRAY_BUFFER_VIEWS,
            K = u.TYPED_ARRAY_TAG,
            B = u.TypedArray,
            U = u.TypedArrayPrototype,
            z = u.aTypedArrayConstructor,
            H = u.isTypedArray,
            N = function (e, t) {
                for (var r = 0, n = t.length, i = new(z(e))(n); n > r;) i[r] = t[r++];
                return i
            },
            W = function (e, t) {
                P(e, t, {
                    get: function () {
                        return F(this)[t]
                    }
                })
            },
            V = function (e) {
                var t;
                return e instanceof C || "ArrayBuffer" == (t = g(e)) || "SharedArrayBuffer" == t
            },
            q = function (e, t) {
                return H(e) && "symbol" != typeof t && t in e && String(+t) == String(t)
            },
            G = function (e, t) {
                return q(e, t = y(t, !0)) ? f(2, e[t]) : T(e, t)
            },
            Z = function (e, t, r) {
                return !(q(e, t = y(t, !0)) && m(r) && v(r, "value")) || v(r, "get") || v(r, "set") || r.configurable || v(r, "writable") && !r.writable || v(r, "enumerable") && !r.enumerable ? P(e, t, r) : (e[t] = r.value, e)
            };
        o ? (L || (A.f = G, E.f = Z, W(U, "buffer"), W(U, "byteOffset"), W(U, "byteLength"), W(U, "length")), n({
            target: "Object",
            stat: !0,
            forced: !L
        }, {
            getOwnPropertyDescriptor: G,
            defineProperty: Z
        }), e.exports = function (e, t, r) {
            var o = e.match(/\d+$/)[0] / 8,
                u = e + (r ? "Clamped" : "") + "Array",
                s = "get" + e,
                f = "set" + e,
                y = i[u],
                v = y,
                g = v && v.prototype,
                E = {},
                A = function (e, t) {
                    P(e, t, {
                        get: function () {
                            return function (e, t) {
                                var r = F(e);
                                return r.view[s](t * o + r.byteOffset, !0)
                            }(this, t)
                        },
                        set: function (e) {
                            return function (e, t, n) {
                                var i = F(e);
                                r && (n = (n = D(n)) < 0 ? 0 : n > 255 ? 255 : 255 & n), i.view[f](t * o + i.byteOffset, n, !0)
                            }(this, t, e)
                        },
                        enumerable: !0
                    })
                };
            L ? a && (v = t((function (e, t, r, n) {
                return c(e, v, u), O(m(t) ? V(t) ? n !== undefined ? new y(t, d(r, o), n) : r !== undefined ? new y(t, d(r, o)) : new y(t) : H(t) ? N(v, t) : M.call(v, t) : new y(p(t)), e, v)
            })), w && w(v, B), k(x(y), (function (e) {
                e in v || l(v, e, y[e])
            })), v.prototype = g) : (v = t((function (e, t, r, n) {
                c(e, v, u);
                var i, a, s, f = 0,
                    l = 0;
                if (m(t)) {
                    if (!V(t)) return H(t) ? N(v, t) : M.call(v, t);
                    i = t, l = d(r, o);
                    var y = t.byteLength;
                    if (n === undefined) {
                        if (y % o) throw I("Wrong length");
                        if ((a = y - l) < 0) throw I("Wrong length")
                    } else if ((a = h(n) * o) + l > y) throw I("Wrong length");
                    s = a / o
                } else s = p(t), i = new C(a = s * o);
                for (j(e, {
                        buffer: i,
                        byteOffset: l,
                        byteLength: a,
                        length: s,
                        view: new R(i)
                    }); f < s;) A(e, f++)
            })), w && w(v, B), g = v.prototype = b(U)), g.constructor !== v && l(g, "constructor", v), K && l(g, K, u), E[u] = v, n({
                global: !0,
                forced: v != y,
                sham: !L
            }, E), "BYTES_PER_ELEMENT" in v || l(v, "BYTES_PER_ELEMENT", o), "BYTES_PER_ELEMENT" in g || l(g, "BYTES_PER_ELEMENT", o), _(u)
        }) : e.exports = function () {}
    }, function (e, t, r) {
        var n = r(20);
        e.exports = function (e) {
            var t = n(e);
            if (t < 0) throw RangeError("The argument can't be less than 0");
            return t
        }
    }, function (e, t, r) {
        "use strict";
        var n = r(11),
            i = r(30),
            o = r(6),
            a = Math.min;
        e.exports = [].copyWithin || function (e, t) {
            var r = n(this),
                u = o(r.length),
                s = i(e, u),
                c = i(t, u),
                f = arguments.length > 2 ? arguments[2] : undefined,
                l = a((f === undefined ? u : i(f, u)) - c, u - s),
                h = 1;
            for (c < s && s < c + l && (h = -1, c += l - 1, s += l - 1); l-- > 0;) c in r ? r[s] = r[c] : delete r[s], s += h, c += h;
            return r
        }
    }, function (e, t, r) {
        "use strict";
        var n = r(15),
            i = r(20),
            o = r(6),
            a = r(24),
            u = r(16),
            s = Math.min,
            c = [].lastIndexOf,
            f = !!c && 1 / [1].lastIndexOf(1, -0) < 0,
            l = a("lastIndexOf"),
            h = u("indexOf", {
                ACCESSORS: !0,
                1: 0
            }),
            p = f || !l || !h;
        e.exports = p ? function (e) {
            if (f) return c.apply(this, arguments) || 0;
            var t = n(this),
                r = o(t.length),
                a = r - 1;
            for (arguments.length > 1 && (a = s(a, i(arguments[1]))), a < 0 && (a = r + a); a >= 0; a--)
                if (a in t && t[a] === e) return a || 0;
            return -1
        } : c
    }, function (e, t, r) {
        "use strict";
        (function (e) {
            r(129), r(19), r(173), r(40), r(174), r(75), r(14), r(76), r(77), r(78), r(79), r(80), r(81), r(82), r(83), r(84), r(85), r(86), r(87), r(88), r(89), r(90), r(91), r(92), r(93), r(94), r(95), r(96), r(97), r(98), r(99),
                function (e) {
                    function t() {}
                    function r(e, t) {
                        if (e = void 0 === e ? "utf-8" : e, t = void 0 === t ? {
                                fatal: !1
                            } : t, -1 == n.indexOf(e.toLowerCase())) throw new RangeError("Failed to construct 'TextDecoder': The encoding label provided ('" + e + "') is invalid.");
                        if (t.fatal) throw Error("Failed to construct 'TextDecoder': the 'fatal' option is unsupported.")
                    }
                    if (e.TextEncoder && e.TextDecoder) return !1;
                    var n = ["utf-8", "utf8", "unicode-1-1-utf-8"];
                    Object.defineProperty(t.prototype, "encoding", {
                        value: "utf-8"
                    }), t.prototype.encode = function (e, t) {
                        if ((t = void 0 === t ? {
                                stream: !1
                            } : t).stream) throw Error("Failed to encode: the 'stream' option is unsupported.");
                        t = 0;
                        for (var r = e.length, n = 0, i = Math.max(32, r + (r >> 1) + 7), o = new Uint8Array(i >> 3 << 3); t < r;) {
                            var a = e.charCodeAt(t++);
                            if (55296 <= a && 56319 >= a) {
                                if (t < r) {
                                    var u = e.charCodeAt(t);
                                    56320 == (64512 & u) && (++t, a = ((1023 & a) << 10) + (1023 & u) + 65536)
                                }
                                if (55296 <= a && 56319 >= a) continue
                            }
                            if (n + 4 > o.length && (i += 8, i = (i *= 1 + t / e.length * 2) >> 3 << 3, (u = new Uint8Array(i)).set(o), o = u), 0 == (4294967168 & a)) o[n++] = a;
                            else {
                                if (0 == (4294965248 & a)) o[n++] = a >> 6 & 31 | 192;
                                else if (0 == (4294901760 & a)) o[n++] = a >> 12 & 15 | 224, o[n++] = a >> 6 & 63 | 128;
                                else {
                                    if (0 != (4292870144 & a)) continue;
                                    o[n++] = a >> 18 & 7 | 240, o[n++] = a >> 12 & 63 | 128, o[n++] = a >> 6 & 63 | 128
                                }
                                o[n++] = 63 & a | 128
                            }
                        }
                        return o.slice ? o.slice(0, n) : o.subarray(0, n)
                    }, Object.defineProperty(r.prototype, "encoding", {
                        value: "utf-8"
                    }), Object.defineProperty(r.prototype, "fatal", {
                        value: !1
                    }), Object.defineProperty(r.prototype, "ignoreBOM", {
                        value: !1
                    }), r.prototype.decode = function (e, t) {
                        if ((t = void 0 === t ? {
                                stream: !1
                            } : t).stream) throw Error("Failed to decode: the 'stream' option is unsupported.");
                        e.buffer instanceof ArrayBuffer && (e = e.buffer), e = new Uint8Array(e), t = 0;
                        for (var r = [], n = [];;) {
                            var i = t < e.length;
                            if (!i || 65536 & t) {
                                if (n.push(String.fromCharCode.apply(null, r)), !i) return n.join("");
                                r = [], e = e.subarray(t), t = 0
                            }
                            if (0 === (i = e[t++])) r.push(0);
                            else if (0 == (128 & i)) r.push(i);
                            else if (192 == (224 & i)) {
                                var o = 63 & e[t++];
                                r.push((31 & i) << 6 | o)
                            } else if (224 == (240 & i)) {
                                o = 63 & e[t++];
                                var a = 63 & e[t++];
                                r.push((31 & i) << 12 | o << 6 | a)
                            } else if (240 == (248 & i)) {
                                65535 < (i = (7 & i) << 18 | (o = 63 & e[t++]) << 12 | (a = 63 & e[t++]) << 6 | 63 & e[t++]) && (i -= 65536, r.push(i >>> 10 & 1023 | 55296), i = 56320 | 1023 & i), r.push(i)
                            }
                        }
                    }, e.TextEncoder = t, e.TextDecoder = r
                }("undefined" != typeof window ? window : void 0 !== e ? e : void 0)
        }).call(this, r(101))
    }, function (e, t, r) {
        "use strict";
        r(36), r(113), r(37), r(175), r(72), r(58), r(40), r(28), r(64), r(115), r(65), r(14), r(17), r(33), r(38), Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.FormHandler = void 0, r(27), r(215);
        var n, i, o, a, u, s, c = r(163),
            f = r(164),
            l = r(25),
            h = r(177),
            p = r(216);
        function d(e, t, r, n, i, o, a) {
            try {
                var u = e[o](a),
                    s = u.value
            } catch (c) {
                return void r(c)
            }
            u.done ? t(s) : Promise.resolve(s).then(n, i)
        }
        function y(e) {
            return function () {
                var t = this,
                    r = arguments;
                return new Promise((function (n, i) {
                    var o = e.apply(t, r);
                    function a(e) {
                        d(o, n, i, a, u, "next", e)
                    }
                    function u(e) {
                        d(o, n, i, a, u, "throw", e)
                    }
                    a(undefined)
                }))
            }
        }
        function v(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), r.push.apply(r, n)
            }
            return r
        }
        function g(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        function m(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }
        function b(e, t, r, n, i) {
            var o = {};
            return Object.keys(n).forEach((function (e) {
                o[e] = n[e]
            })), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), o = r.slice().reverse().reduce((function (r, n) {
                return n(e, t, r) || r
            }), o), i && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(i) : void 0, o.initializer = undefined), void 0 === o.initializer && (Object.defineProperty(e, t, o), o = null), o
        }
        var w = (n = (0, c.measureAsync)(f.CsmToolbox), i = (0, c.measureAsync)(f.CsmToolbox), (0, l.frozen)((s = u = function () {
            function e(t, r, n) {
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this._profileStorage = t, this._encryptionEngine = r, this._form = n, m(this, "_formConfig", void 0)
            }
            var t, r, n, i, o, a;
            return t = e, (r = [{
                key: "configure",
                value: function (e) {
                    this._formConfig = function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? v(Object(r), !0).forEach((function (t) {
                                m(e, t, r[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach((function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            }))
                        }
                        return e
                    }({}, e)
                }
            }, {
                key: "_removeIdsRecursive",
                value: function (e) {
                    e.removeAttribute("id");
                    for (var t = 0; t < e.children.length; t++) this._removeIdsRecursive(e.children[t])
                }
            }, {
                key: "_processCseFields",
                value: (a = y(regeneratorRuntime.mark((function u(e, t, r) {
                    var n, i = arguments;
                    return regeneratorRuntime.wrap((function (o) {
                        for (;;) switch (o.prev = o.next) {
                        case 0:
                            return n = !(i.length > 3 && i[3] !== undefined) || i[3], "string" == typeof t && (t = this._profileStorage.findById(t)), o.next = 4, (0, p.processCseFields)(e, t, r, n);
                        case 4:
                        case "end":
                            return o.stop()
                        }
                    }), u, this)
                }))), function (e, t, r) {
                    return a.apply(this, arguments)
                })
            }, {
                key: "generateProcessedForm",
                value: (o = y(regeneratorRuntime.mark((function s(e) {
                    var t, r, n, i, o, a = this;
                    return regeneratorRuntime.wrap((function (u) {
                        for (;;) switch (u.prev = u.next) {
                        case 0:
                            return (t = this._form.cloneNode(!0)).style.display = "none", this._removeIdsRecursive(t), document.body.appendChild(t), u.next = 6, this._processCseFields(t, this._formConfig.formProfile, function () {
                                var t = y(regeneratorRuntime.mark((function r(t, n) {
                                    var i;
                                    return regeneratorRuntime.wrap((function (r) {
                                        for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            if (!(0, h.isCseFilesField)(t)) {
                                                r.next = 4;
                                                break
                                            }
                                            if (!e.skipFiles) {
                                                r.next = 3;
                                                break
                                            }
                                            return r.abrupt("return");
                                        case 3:
                                            throw new Error("Unable to process forms that contain files as UrlEncoded forms. Please use getProcessedFormData instead");
                                        case 4:
                                            return r.next = 6, a._encryptionEngine.encryptString(t.value, n, a._formConfig.encryptionContext);
                                        case 6:
                                            i = r.sent, t instanceof HTMLInputElement && (t.type = "hidden"), t.removeAttribute("maxLength"), t.value = i;
                                        case 10:
                                        case "end":
                                            return r.stop()
                                        }
                                    }), r)
                                })));
                                return function (e, r) {
                                    return t.apply(this, arguments)
                                }
                            }());
                        case 6:
                            for (r = t.elements, n = 0; n < r.length; n++)(o = r[n]) instanceof HTMLInputElement && "password" === (null === (i = o.type) || void 0 === i ? void 0 : i.toLowerCase()) && (o.type = "hidden");
                            return u.abrupt("return", t);
                        case 9:
                        case "end":
                            return u.stop()
                        }
                    }), s, this)
                }))), function (e) {
                    return o.apply(this, arguments)
                })
            }, {
                key: "generateProcessedFormData",
                value: (i = y(regeneratorRuntime.mark((function c(e) {
                    var t, r = this;
                    return regeneratorRuntime.wrap((function (e) {
                        for (;;) switch (e.prev = e.next) {
                        case 0:
                            return t = new FormData, e.next = 3, this._processCseFields(this._form, this._formConfig.formProfile, function () {
                                var e = y(regeneratorRuntime.mark((function n(e, i) {
                                    var o, a, u, s;
                                    return regeneratorRuntime.wrap((function (n) {
                                        for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (!(0, h.isCseFilesField)(e)) {
                                                n.next = 10;
                                                break
                                            }
                                            if (i === undefined) {
                                                n.next = 7;
                                                break
                                            }
                                            return n.next = 4, r._encryptionEngine.encryptFileList(e.files, i, r._formConfig.encryptionContext);
                                        case 4:
                                            o = n.sent, n.next = 8;
                                            break;
                                        case 7:
                                            o = Array.from(e.files);
                                        case 8:
                                            if (o.length > 0)
                                                for (a = 0; a < o.length; a++) u = o[a], t.append(e.name, u, u.name);
                                            return n.abrupt("return");
                                        case 10:
                                            if (i === undefined) {
                                                n.next = 17;
                                                break
                                            }
                                            return n.next = 13, r._encryptionEngine.encryptString(e.value, i, r._formConfig.encryptionContext);
                                        case 13:
                                            s = n.sent, t.append(e.name, s), n.next = 18;
                                            break;
                                        case 17:
                                            t.append(e.name, e.value);
                                        case 18:
                                        case "end":
                                            return n.stop()
                                        }
                                    }), n)
                                })));
                                return function (t, r) {
                                    return e.apply(this, arguments)
                                }
                            }(), !1);
                        case 3:
                            return e.abrupt("return", t);
                        case 4:
                        case "end":
                            return e.stop()
                        }
                    }), c, this)
                }))), function (e) {
                    return i.apply(this, arguments)
                })
            }]) && g(t.prototype, r), n && g(t, n), e
        }(), m(u, "CSE_VIRTUAL_FILE", "cse-virtual-file"), b((a = s).prototype, "generateProcessedForm", [n], Object.getOwnPropertyDescriptor(a.prototype, "generateProcessedForm"), a.prototype), b(a.prototype, "generateProcessedFormData", [i], Object.getOwnPropertyDescriptor(a.prototype, "generateProcessedFormData"), a.prototype), o = a)) || o);
        t.FormHandler = w
    }, function (e, t, r) {
        "use strict";
        var n = r(31),
            i = r(11),
            o = r(147),
            a = r(119),
            u = r(6),
            s = r(54),
            c = r(120);
        e.exports = function (e) {
            var t, r, f, l, h, p, d = i(e),
                y = "function" == typeof this ? this : Array,
                v = arguments.length,
                g = v > 1 ? arguments[1] : undefined,
                m = g !== undefined,
                b = c(d),
                w = 0;
            if (m && (g = n(g, v > 2 ? arguments[2] : undefined, 2)), b == undefined || y == Array && a(b))
                for (r = new y(t = u(d.length)); t > w; w++) p = m ? g(d[w], w) : d[w], s(r, w, p);
            else
                for (h = (l = b.call(d)).next, r = new y; !(f = h.call(l)).done; w++) p = m ? o(l, g, [f.value, w], !0) : f.value, s(r, w, p);
            return r.length = w, r
        }
    }, function (e, t, r) {
        "use strict";
        (function (e) {
            function t(e) {
                return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            r(36), r(69), r(70), r(121), r(37), r(19), r(176), r(58), r(28), r(123), r(124), r(125), r(14), r(17), r(59), r(71), r(33), r(74), r(38), r(41),
                function () {
                    var r;
                    function n(e) {
                        var t = 0;
                        return function () {
                            return t < e.length ? {
                                done: !1,
                                value: e[t++]
                            } : {
                                done: !0
                            }
                        }
                    }
                    var i = "function" == typeof Object.defineProperties ? Object.defineProperty : function (e, t, r) {
                            e != Array.prototype && e != Object.prototype && (e[t] = r.value)
                        },
                        o = "undefined" != typeof window && window === this ? this : void 0 !== e && null != e ? e : this;
                    function a() {
                        a = function () {}, o.Symbol || (o.Symbol = f)
                    }
                    function u(e, t) {
                        this.s = e, i(this, "description", {
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                    u.prototype.toString = function () {
                        return this.s
                    };
                    var s, c, f = (s = 0, function B(e) {
                        if (this instanceof B) throw new TypeError("Symbol is not a constructor");
                        return new u("jscomp_symbol_" + (e || "") + "_" + s++, e)
                    });
                    function l() {
                        a();
                        var e = o.Symbol.iterator;
                        e || (e = o.Symbol.iterator = o.Symbol("Symbol.iterator")), "function" != typeof Array.prototype[e] && i(Array.prototype, e, {
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                return function (e) {
                                    return l(), (e = {
                                        next: e
                                    })[o.Symbol.iterator] = function () {
                                        return this
                                    }, e
                                }(n(this))
                            }
                        }), l = function () {}
                    }
                    function h(e) {
                        var t = "undefined" != typeof Symbol && Symbol.iterator && e[Symbol.iterator];
                        return t ? t.call(e) : {
                            next: n(e)
                        }
                    }
                    if ("function" == typeof Object.setPrototypeOf) c = Object.setPrototypeOf;
                    else {
                        var p;
                        e: {
                            var d = {};
                            try {
                                d.__proto__ = {
                                    v: !0
                                }, p = d.v;
                                break e
                            } catch (K) {}
                            p = !1
                        }
                        c = p ? function (e, t) {
                            if (e.__proto__ = t, e.__proto__ !== t) throw new TypeError(e + " is not extensible");
                            return e
                        } : null
                    }
                    var y = c;
                    function v() {
                        this.h = !1, this.c = null, this.o = void 0, this.b = 1, this.m = this.w = 0, this.g = null
                    }
                    function g(e) {
                        if (e.h) throw new TypeError("Generator is already running");
                        e.h = !0
                    }
                    function m(e, t, r) {
                        return e.b = r, {
                            value: t
                        }
                    }
                    function b(e) {
                        for (var t in this.C = e, this.l = [], e) this.l.push(t);
                        this.l.reverse()
                    }
                    function w(e) {
                        this.a = new v, this.D = e
                    }
                    function x(e, t, r, n) {
                        try {
                            var i = t.call(e.a.c, r);
                            if (!(i instanceof Object)) throw new TypeError("Iterator result " + i + " is not an object");
                            if (!i.done) return e.a.h = !1, i;
                            var o = i.value
                        } catch (a) {
                            return e.a.c = null, e.a.j(a), M(e)
                        }
                        return e.a.c = null, n.call(e.a, o), M(e)
                    }
                    function M(e) {
                        for (; e.a.b;) try {
                            var t = e.D(e.a);
                            if (t) return e.a.h = !1, {
                                value: t.value,
                                done: !1
                            }
                        } catch (r) {
                            e.a.o = void 0, e.a.j(r)
                        }
                        if (e.a.h = !1, e.a.g) {
                            if (t = e.a.g, e.a.g = null, t.B) throw t.A;
                            return {
                                value: t["return"],
                                done: !0
                            }
                        }
                        return {
                            value: void 0,
                            done: !0
                        }
                    }
                    function k(e) {
                        this.next = function (t) {
                            return e.i(t)
                        }, this["throw"] = function (t) {
                            return e.j(t)
                        }, this["return"] = function (t) {
                            return function (e, t) {
                                g(e.a);
                                var r = e.a.c;
                                return r ? x(e, "return" in r ? r["return"] : function (e) {
                                    return {
                                        value: e,
                                        done: !0
                                    }
                                }, t, e.a["return"]) : (e.a["return"](t), M(e))
                            }(e, t)
                        }, l(), this[Symbol.iterator] = function () {
                            return this
                        }
                    }
                    function _(e, t) {
                        var r = new k(new w(t));
                        return y && y(r, e.prototype), r
                    }
                    if (v.prototype.i = function (e) {
                            this.o = e
                        }, v.prototype.j = function (e) {
                            this.g = {
                                A: e,
                                B: !0
                            }, this.b = this.w || this.m
                        }, v.prototype["return"] = function (e) {
                            this.g = {
                                "return": e
                            }, this.b = this.m
                        }, w.prototype.i = function (e) {
                            return g(this.a), this.a.c ? x(this, this.a.c.next, e, this.a.i) : (this.a.i(e), M(this))
                        }, w.prototype.j = function (e) {
                            return g(this.a), this.a.c ? x(this, this.a.c["throw"], e, this.a.i) : (this.a.j(e), M(this))
                        }, "undefined" != typeof Blob && ("undefined" == typeof FormData || !FormData.prototype.keys)) {
                        var E = function (e, t) {
                                for (var r = 0; r < e.length; r++) t(e[r])
                            },
                            A = function (e, t, r) {
                                return t instanceof Blob ? [String(e), t, void 0 !== r ? r + "" : "string" == typeof t.name ? t.name : "blob"] : [String(e), String(t)]
                            },
                            S = function (e, t) {
                                if (e.length < t) throw new TypeError(t + " argument required, but only " + e.length + " present.")
                            },
                            O = function (e) {
                                var t = h(e);
                                return e = t.next().value, t = t.next().value, e instanceof Blob && (e = new File([e], t, {
                                    type: e.type,
                                    lastModified: e.lastModified
                                })), e
                            },
                            F = "object" === ("undefined" == typeof window ? "undefined" : t(window)) ? window : "object" === ("undefined" == typeof self ? "undefined" : t(self)) ? self : this,
                            j = F.FormData,
                            P = F.XMLHttpRequest && F.XMLHttpRequest.prototype.send,
                            T = F.Request && F.fetch,
                            D = F.navigator && F.navigator.sendBeacon;
                        a();
                        var I = F.Symbol && Symbol.toStringTag;
                        I && (Blob.prototype[I] || (Blob.prototype[I] = "Blob"), "File" in F && !File.prototype[I] && (File.prototype[I] = "File"));
                        try {
                            new File([], "")
                        } catch (K) {
                            F.File = function (e, t, r) {
                                return e = new Blob(e, r), r = r && void 0 !== r.lastModified ? new Date(r.lastModified) : new Date, Object.defineProperties(e, {
                                    name: {
                                        value: t
                                    },
                                    lastModifiedDate: {
                                        value: r
                                    },
                                    lastModified: {
                                        value: +r
                                    },
                                    toString: {
                                        value: function () {
                                            return "[object File]"
                                        }
                                    }
                                }), I && Object.defineProperty(e, I, {
                                    value: "File"
                                }), e
                            }
                        }
                        a(), l();
                        var C = function (e) {
                            if (this.f = Object.create(null), !e) return this;
                            var t = this;
                            E(e.elements, (function (e) {
                                if (e.name && !e.disabled && "submit" !== e.type && "button" !== e.type)
                                    if ("file" === e.type) {
                                        var r = e.files && e.files.length ? e.files : [new File([], "", {
                                            type: "application/octet-stream"
                                        })];
                                        E(r, (function (r) {
                                            t.append(e.name, r)
                                        }))
                                    } else "select-multiple" === e.type || "select-one" === e.type ? E(e.options, (function (r) {
                                        !r.disabled && r.selected && t.append(e.name, r.value)
                                    })) : "checkbox" === e.type || "radio" === e.type ? e.checked && t.append(e.name, e.value) : (r = "textarea" === e.type ? e.value.replace(/\r\n/g, "\n").replace(/\n/g, "\r\n") : e.value, t.append(e.name, r))
                            }))
                        };
                        if ((r = C.prototype).append = function (e, t, r) {
                                S(arguments, 2);
                                var n = h(A.apply(null, arguments));
                                e = n.next().value, t = n.next().value, r = n.next().value, (n = this.f)[e] || (n[e] = []), n[e].push([t, r])
                            }, r["delete"] = function (e) {
                                S(arguments, 1), delete this.f[String(e)]
                            }, r.entries = function e() {
                                var t, r, n, i, o, a, u = this;
                                return _(e, (function (e) {
                                    switch (e.b) {
                                    case 1:
                                        t = u.f, n = new b(t);
                                    case 2:
                                        var s;
                                        e: {
                                            for (s = n; 0 < s.l.length;) {
                                                var c = s.l.pop();
                                                if (c in s.C) {
                                                    s = c;
                                                    break e
                                                }
                                            }
                                            s = null
                                        }
                                        if (null == (r = s)) {
                                            e.b = 0;
                                            break
                                        }
                                        i = h(t[r]), o = i.next();
                                    case 5:
                                        if (o.done) {
                                            e.b = 2;
                                            break
                                        }
                                        return a = o.value, m(e, [r, O(a)], 6);
                                    case 6:
                                        o = i.next(), e.b = 5
                                    }
                                }))
                            }, r.forEach = function (e, t) {
                                S(arguments, 1);
                                for (var r = h(this), n = r.next(); !n.done; n = r.next()) {
                                    var i = h(n.value);
                                    n = i.next().value, i = i.next().value, e.call(t, i, n, this)
                                }
                            }, r.get = function (e) {
                                S(arguments, 1);
                                var t = this.f;
                                return t[e = String(e)] ? O(t[e][0]) : null
                            }, r.getAll = function (e) {
                                return S(arguments, 1), (this.f[String(e)] || []).map(O)
                            }, r.has = function (e) {
                                return S(arguments, 1), String(e) in this.f
                            }, r.keys = function n() {
                                var e, t, r, i, o = this;
                                return _(n, (function (n) {
                                    if (1 == n.b && (e = h(o), t = e.next()), 3 != n.b) return t.done ? void(n.b = 0) : (r = t.value, i = h(r), m(n, i.next().value, 3));
                                    t = e.next(), n.b = 2
                                }))
                            }, r.set = function (e, t, r) {
                                S(arguments, 2);
                                var n = A.apply(null, arguments);
                                this.f[n[0]] = [
                                    [n[1], n[2]]
                                ]
                            }, r.values = function i() {
                                var e, t, r, n, o = this;
                                return _(i, (function (i) {
                                    if (1 == i.b && (e = h(o), t = e.next()), 3 != i.b) return t.done ? void(i.b = 0) : (r = t.value, (n = h(r)).next(), m(i, n.next().value, 3));
                                    t = e.next(), i.b = 2
                                }))
                            }, C.prototype._asNative = function () {
                                for (var e = new j, t = h(this), r = t.next(); !r.done; r = t.next()) {
                                    var n = h(r.value);
                                    r = n.next().value, n = n.next().value, e.append(r, n)
                                }
                                return e
                            }, C.prototype._blob = function () {
                                for (var e = "----formdata-polyfill-" + Math.random(), t = [], r = h(this), n = r.next(); !n.done; n = r.next()) {
                                    var i = h(n.value);
                                    n = i.next().value, i = i.next().value, t.push("--" + e + "\r\n"), i instanceof Blob ? t.push('Content-Disposition: form-data; name="' + n + '"; filename="' + i.name + '"\r\n', "Content-Type: " + (i.type || "application/octet-stream") + "\r\n\r\n", i, "\r\n") : t.push('Content-Disposition: form-data; name="' + n + '"\r\n\r\n' + i + "\r\n")
                                }
                                return t.push("--" + e + "--"), new Blob(t, {
                                    type: "multipart/form-data; boundary=" + e
                                })
                            }, C.prototype[Symbol.iterator] = function () {
                                return this.entries()
                            }, C.prototype.toString = function () {
                                return "[object FormData]"
                            }, I && (C.prototype[I] = "FormData"), P) {
                            var R = F.XMLHttpRequest.prototype.setRequestHeader;
                            F.XMLHttpRequest.prototype.setRequestHeader = function (e, t) {
                                R.call(this, e, t), "content-type" === e.toLowerCase() && (this.u = !0)
                            }, F.XMLHttpRequest.prototype.send = function (e) {
                                e instanceof C ? (e = e._blob(), this.u || this.setRequestHeader("Content-Type", e.type), P.call(this, e)) : P.call(this, e)
                            }
                        }
                        if (T) {
                            var L = F.fetch;
                            F.fetch = function (e, t) {
                                return t && t.body && t.body instanceof C && (t.body = t.body._blob()), L.call(this, e, t)
                            }
                        }
                        D && (F.navigator.sendBeacon = function (e, t) {
                            return t instanceof C && (t = t._asNative()), D.call(this, e, t)
                        }), F.FormData = C
                    }
                }()
        }).call(this, r(101))
    }, function (e, t, r) {
        "use strict";
        r(19), r(28), r(14), r(17), r(33), r(41), Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.processCseFields = function (e, t, r) {
            return a.apply(this, arguments)
        }, r(27);
        var n = r(177);
        function i(e, t, r, n, i, o, a) {
            try {
                var u = e[o](a),
                    s = u.value
            } catch (c) {
                return void r(c)
            }
            u.done ? t(s) : Promise.resolve(s).then(n, i)
        }
        function o(e) {
            return function () {
                var t = this,
                    r = arguments;
                return new Promise((function (n, o) {
                    var a = e.apply(t, r);
                    function u(e) {
                        i(a, n, o, u, s, "next", e)
                    }
                    function s(e) {
                        i(a, n, o, u, s, "throw", e)
                    }
                    u(undefined)
                }))
            }
        }
        function a() {
            return (a = o(regeneratorRuntime.mark((function e(t, r, i) {
                var o, a, u, s, c, f, l, h = arguments;
                return regeneratorRuntime.wrap((function (e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        o = !(h.length > 3 && h[3] !== undefined) || h[3], a = t.elements, u = [], s = 0;
                    case 4:
                        if (!(s < a.length)) {
                            e.next = 17;
                            break
                        }
                        if (c = a[s], (0, n.isCseField)(c)) {
                            e.next = 8;
                            break
                        }
                        return e.abrupt("continue", 14);
                    case 8:
                        if (f = !1, (l = r[c.name]) !== undefined && (f = !0), !o || f) {
                            e.next = 13;
                            break
                        }
                        return e.abrupt("continue", 14);
                    case 13:
                        u.push(i(c, l));
                    case 14:
                        s++, e.next = 4;
                        break;
                    case 17:
                        return e.next = 19, Promise.all(u);
                    case 19:
                    case "end":
                        return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }
    }, function (e, t, r) {
        "use strict";
        var n;
        function i(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ProfileStorage = void 0;
        var o = (0, r(25).frozen)(n = function () {
            function e() {
                var t, r, n;
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), n = {}, (r = "_profiles") in (t = this) ? Object.defineProperty(t, r, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[r] = n
            }
            var t, r, n;
            return t = e, (r = [{
                key: "add",
                value: function (e, t) {
                    this._profiles[e] = t
                }
            }, {
                key: "findById",
                value: function (e) {
                    return this._profiles[e]
                }
            }]) && i(t.prototype, r), n && i(t, n), e
        }()) || n;
        t.ProfileStorage = o
    }, function (e, t, r) {
        "use strict";
        function n(e) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        function i() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return i = function () {
                return e
            }, e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t["default"] = void 0, r(219), r(221), r(223);
        var o = function (e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" !== n(e) && "function" != typeof e) return {
                "default": e
            };
            var t = i();
            if (t && t.has(e)) return t.get(e);
            var r = {},
                o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if (Object.prototype.hasOwnProperty.call(e, a)) {
                    var u = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                    u && (u.get || u.set) ? Object.defineProperty(r, a, u) : r[a] = e[a]
                } r["default"] = e, t && t.set(e, r);
            return r
        }(r(224));
        t["default"] = o
    }, function (e, t, r) {
        var n = r(220);
        e.exports = n
    }, function (e, t, r) {
        r(178);
        var n = r(179);
        e.exports = n("Array", "find")
    }, function (e, t, r) {
        var n = r(222);
        e.exports = n
    }, function (e, t, r) {
        r(100);
        var n = r(179);
        e.exports = n("Array", "includes")
    }, function (e, t, r) {
        r(180)
    }, function (e, t, r) {
        "use strict";
        function n(e, t) {
            if (null == e) return {};
            var r, n, i = function (e, t) {
                if (null == e) return {};
                var r, n, i = {},
                    o = Object.keys(e);
                for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
                return i
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
            }
            return i
        }
        function i(e, t) {
            return function (e) {
                if (Array.isArray(e)) return e
            }(e) || function (e, t) {
                if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
                var r = [],
                    n = !0,
                    i = !1,
                    o = undefined;
                try {
                    for (var a, u = e[Symbol.iterator](); !(n = (a = u.next()).done) && (r.push(a.value), !t || r.length !== t); n = !0);
                } catch (s) {
                    i = !0, o = s
                } finally {
                    try {
                        n || null == u["return"] || u["return"]()
                    } finally {
                        if (i) throw o
                    }
                }
                return r
            }(e, t) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }
        function o(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        function a(e, t, r) {
            return t && o(e.prototype, t), r && o(e, r), e
        }
        function u(e) {
            return function (e) {
                if (Array.isArray(e)) {
                    for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
                    return r
                }
            }(e) || function (e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }
        function s(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), r.push.apply(r, n)
            }
            return r
        }
        function c(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? s(Object(r), !0).forEach((function (t) {
                    f(e, t, r[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }))
            }
            return e
        }
        function f(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }
        function l(e, t) {
            return !t || "object" !== b(t) && "function" != typeof t ? p(e) : t
        }
        function h(e) {
            return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        function p(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function d(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && y(e, t)
        }
        function y(e, t) {
            return (y = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        function v(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function g(e, t, r, n, i, o, a) {
            try {
                var u = e[o](a),
                    s = u.value
            } catch (c) {
                return void r(c)
            }
            u.done ? t(s) : Promise.resolve(s).then(n, i)
        }
        function m(e) {
            return function () {
                var t = this,
                    r = arguments;
                return new Promise((function (n, i) {
                    var o = e.apply(t, r);
                    function a(e) {
                        g(o, n, i, a, u, "next", e)
                    }
                    function u(e) {
                        g(o, n, i, a, u, "throw", e)
                    }
                    a(undefined)
                }))
            }
        }
        function b(e) {
            return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        r(36), r(69), r(152), r(70), r(121), r(126), r(225), r(113), r(178), r(37), r(175), r(100), r(129), r(19), r(173), r(176), r(72), r(40), r(226), r(181), r(174), r(75), r(28), r(123), r(227), r(228), r(124), r(229), r(231), r(141), r(64), r(115), r(233), r(155), r(65), r(234), r(125), r(14), r(182), r(17), r(59), r(71), r(237), r(139), r(33), r(74), r(240), r(241), r(76), r(77), r(78), r(79), r(80), r(81), r(82), r(83), r(180), r(84), r(85), r(86), r(87), r(88), r(89), r(90), r(91), r(92), r(93), r(94), r(95), r(96), r(97), r(98), r(99), r(38), r(41), r(244), r(27);
        var w = function (e) {
            var t = {};
            function r(n) {
                if (t[n]) return t[n].exports;
                var i = t[n] = {
                    i: n,
                    l: !1,
                    exports: {}
                };
                return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports
            }
            return r.m = e, r.c = t, r.d = function (e, t, n) {
                r.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: n
                })
            }, r.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }, r.t = function (e, t) {
                if (1 & t && (e = r(e)), 8 & t) return e;
                if (4 & t && "object" == b(e) && e && e.__esModule) return e;
                var n = Object.create(null);
                if (r.r(n), Object.defineProperty(n, "default", {
                        enumerable: !0,
                        value: e
                    }), 2 & t && "string" != typeof e)
                    for (var i in e) r.d(n, i, function (t) {
                        return e[t]
                    }.bind(null, i));
                return n
            }, r.n = function (e) {
                var t = e && e.__esModule ? function () {
                    return e["default"]
                } : function () {
                    return e
                };
                return r.d(t, "a", t), t
            }, r.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, r.p = "", r(r.s = 17)
        }([function (e, t, r) {
            (function (e) {
                ! function (e, t) {
                    function n(e, t) {
                        if (!e) throw new Error(t || "Assertion failed")
                    }
                    function i(e, t) {
                        e.super_ = t;
                        var r = function () {};
                        r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
                    }
                    function o(e, t, r) {
                        if (o.isBN(e)) return e;
                        this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== e && ("le" !== t && "be" !== t || (r = t, t = 10), this._init(e || 0, t || 10, r || "be"))
                    }
                    var a;
                    "object" == b(e) ? e.exports = o : t.BN = o, o.BN = o, o.wordSize = 26;
                    try {
                        a = r(25).Buffer
                    } catch (e) {}
                    function u(e, t, r) {
                        for (var n = 0, i = Math.min(e.length, r), o = t; o < i; o++) {
                            var a = e.charCodeAt(o) - 48;
                            n <<= 4, n |= a >= 49 && a <= 54 ? a - 49 + 10 : a >= 17 && a <= 22 ? a - 17 + 10 : 15 & a
                        }
                        return n
                    }
                    function s(e, t, r, n) {
                        for (var i = 0, o = Math.min(e.length, r), a = t; a < o; a++) {
                            var u = e.charCodeAt(a) - 48;
                            i *= n, i += u >= 49 ? u - 49 + 10 : u >= 17 ? u - 17 + 10 : u
                        }
                        return i
                    }
                    o.isBN = function (e) {
                        return e instanceof o || null !== e && "object" == b(e) && e.constructor.wordSize === o.wordSize && Array.isArray(e.words)
                    }, o.max = function (e, t) {
                        return e.cmp(t) > 0 ? e : t
                    }, o.min = function (e, t) {
                        return e.cmp(t) < 0 ? e : t
                    }, o.prototype._init = function (e, t, r) {
                        if ("number" == typeof e) return this._initNumber(e, t, r);
                        if ("object" == b(e)) return this._initArray(e, t, r);
                        "hex" === t && (t = 16), n(t === (0 | t) && t >= 2 && t <= 36);
                        var i = 0;
                        "-" === (e = e.toString().replace(/\s+/g, ""))[0] && i++, 16 === t ? this._parseHex(e, i) : this._parseBase(e, t, i), "-" === e[0] && (this.negative = 1), this.strip(), "le" === r && this._initArray(this.toArray(), t, r)
                    }, o.prototype._initNumber = function (e, t, r) {
                        e < 0 && (this.negative = 1, e = -e), e < 67108864 ? (this.words = [67108863 & e], this.length = 1) : e < 4503599627370496 ? (this.words = [67108863 & e, e / 67108864 & 67108863], this.length = 2) : (n(e < 9007199254740992), this.words = [67108863 & e, e / 67108864 & 67108863, 1], this.length = 3), "le" === r && this._initArray(this.toArray(), t, r)
                    }, o.prototype._initArray = function (e, t, r) {
                        if (n("number" == typeof e.length), e.length <= 0) return this.words = [0], this.length = 1, this;
                        this.length = Math.ceil(e.length / 3), this.words = new Array(this.length);
                        for (var i = 0; i < this.length; i++) this.words[i] = 0;
                        var o, a, u = 0;
                        if ("be" === r)
                            for (i = e.length - 1, o = 0; i >= 0; i -= 3) a = e[i] | e[i - 1] << 8 | e[i - 2] << 16, this.words[o] |= a << u & 67108863, this.words[o + 1] = a >>> 26 - u & 67108863, (u += 24) >= 26 && (u -= 26, o++);
                        else if ("le" === r)
                            for (i = 0, o = 0; i < e.length; i += 3) a = e[i] | e[i + 1] << 8 | e[i + 2] << 16, this.words[o] |= a << u & 67108863, this.words[o + 1] = a >>> 26 - u & 67108863, (u += 24) >= 26 && (u -= 26, o++);
                        return this.strip()
                    }, o.prototype._parseHex = function (e, t) {
                        this.length = Math.ceil((e.length - t) / 6), this.words = new Array(this.length);
                        for (var r = 0; r < this.length; r++) this.words[r] = 0;
                        var n, i, o = 0;
                        for (r = e.length - 6, n = 0; r >= t; r -= 6) i = u(e, r, r + 6), this.words[n] |= i << o & 67108863, this.words[n + 1] |= i >>> 26 - o & 4194303, (o += 24) >= 26 && (o -= 26, n++);
                        r + 6 !== t && (i = u(e, t, r + 6), this.words[n] |= i << o & 67108863, this.words[n + 1] |= i >>> 26 - o & 4194303), this.strip()
                    }, o.prototype._parseBase = function (e, t, r) {
                        this.words = [0], this.length = 1;
                        for (var n = 0, i = 1; i <= 67108863; i *= t) n++;
                        n--, i = i / t | 0;
                        for (var o = e.length - r, a = o % n, u = Math.min(o, o - a) + r, c = 0, f = r; f < u; f += n) c = s(e, f, f + n, t), this.imuln(i), this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c);
                        if (0 !== a) {
                            var l = 1;
                            for (c = s(e, f, e.length, t), f = 0; f < a; f++) l *= t;
                            this.imuln(l), this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c)
                        }
                    }, o.prototype.copy = function (e) {
                        e.words = new Array(this.length);
                        for (var t = 0; t < this.length; t++) e.words[t] = this.words[t];
                        e.length = this.length, e.negative = this.negative, e.red = this.red
                    }, o.prototype.clone = function () {
                        var e = new o(null);
                        return this.copy(e), e
                    }, o.prototype._expand = function (e) {
                        for (; this.length < e;) this.words[this.length++] = 0;
                        return this
                    }, o.prototype.strip = function () {
                        for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                        return this._normSign()
                    }, o.prototype._normSign = function () {
                        return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                    }, o.prototype.inspect = function () {
                        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                    };
                    var c = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                        f = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                        l = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
                    function h(e, t, r) {
                        r.negative = t.negative ^ e.negative;
                        var n = e.length + t.length | 0;
                        r.length = n, n = n - 1 | 0;
                        var i = 0 | e.words[0],
                            o = 0 | t.words[0],
                            a = i * o,
                            u = 67108863 & a,
                            s = a / 67108864 | 0;
                        r.words[0] = u;
                        for (var c = 1; c < n; c++) {
                            for (var f = s >>> 26, l = 67108863 & s, h = Math.min(c, t.length - 1), p = Math.max(0, c - e.length + 1); p <= h; p++) {
                                var d = c - p | 0;
                                f += (a = (i = 0 | e.words[d]) * (o = 0 | t.words[p]) + l) / 67108864 | 0, l = 67108863 & a
                            }
                            r.words[c] = 0 | l, s = 0 | f
                        }
                        return 0 !== s ? r.words[c] = 0 | s : r.length--, r.strip()
                    }
                    o.prototype.toString = function (e, t) {
                        var r;
                        if (t = 0 | t || 1, 16 === (e = e || 10) || "hex" === e) {
                            r = "";
                            for (var i = 0, o = 0, a = 0; a < this.length; a++) {
                                var u = this.words[a],
                                    s = (16777215 & (u << i | o)).toString(16);
                                r = 0 != (o = u >>> 24 - i & 16777215) || a !== this.length - 1 ? c[6 - s.length] + s + r : s + r, (i += 2) >= 26 && (i -= 26, a--)
                            }
                            for (0 !== o && (r = o.toString(16) + r); r.length % t != 0;) r = "0" + r;
                            return 0 !== this.negative && (r = "-" + r), r
                        }
                        if (e === (0 | e) && e >= 2 && e <= 36) {
                            var h = f[e],
                                p = l[e];
                            r = "";
                            var d = this.clone();
                            for (d.negative = 0; !d.isZero();) {
                                var y = d.modn(p).toString(e);
                                r = (d = d.idivn(p)).isZero() ? y + r : c[h - y.length] + y + r
                            }
                            for (this.isZero() && (r = "0" + r); r.length % t != 0;) r = "0" + r;
                            return 0 !== this.negative && (r = "-" + r), r
                        }
                        n(!1, "Base should be between 2 and 36")
                    }, o.prototype.toNumber = function () {
                        var e = this.words[0];
                        return 2 === this.length ? e += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? e += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -e : e
                    }, o.prototype.toJSON = function () {
                        return this.toString(16)
                    }, o.prototype.toBuffer = function (e, t) {
                        return n(void 0 !== a), this.toArrayLike(a, e, t)
                    }, o.prototype.toArray = function (e, t) {
                        return this.toArrayLike(Array, e, t)
                    }, o.prototype.toArrayLike = function (e, t, r) {
                        var i = this.byteLength(),
                            o = r || Math.max(1, i);
                        n(i <= o, "byte array longer than desired length"), n(o > 0, "Requested array length <= 0"), this.strip();
                        var a, u, s = "le" === t,
                            c = new e(o),
                            f = this.clone();
                        if (s) {
                            for (u = 0; !f.isZero(); u++) a = f.andln(255), f.iushrn(8), c[u] = a;
                            for (; u < o; u++) c[u] = 0
                        } else {
                            for (u = 0; u < o - i; u++) c[u] = 0;
                            for (u = 0; !f.isZero(); u++) a = f.andln(255), f.iushrn(8), c[o - u - 1] = a
                        }
                        return c
                    }, Math.clz32 ? o.prototype._countBits = function (e) {
                        return 32 - Math.clz32(e)
                    } : o.prototype._countBits = function (e) {
                        var t = e,
                            r = 0;
                        return t >= 4096 && (r += 13, t >>>= 13), t >= 64 && (r += 7, t >>>= 7), t >= 8 && (r += 4, t >>>= 4), t >= 2 && (r += 2, t >>>= 2), r + t
                    }, o.prototype._zeroBits = function (e) {
                        if (0 === e) return 26;
                        var t = e,
                            r = 0;
                        return 0 == (8191 & t) && (r += 13, t >>>= 13), 0 == (127 & t) && (r += 7, t >>>= 7), 0 == (15 & t) && (r += 4, t >>>= 4), 0 == (3 & t) && (r += 2, t >>>= 2), 0 == (1 & t) && r++, r
                    }, o.prototype.bitLength = function () {
                        var e = this.words[this.length - 1],
                            t = this._countBits(e);
                        return 26 * (this.length - 1) + t
                    }, o.prototype.zeroBits = function () {
                        if (this.isZero()) return 0;
                        for (var e = 0, t = 0; t < this.length; t++) {
                            var r = this._zeroBits(this.words[t]);
                            if (e += r, 26 !== r) break
                        }
                        return e
                    }, o.prototype.byteLength = function () {
                        return Math.ceil(this.bitLength() / 8)
                    }, o.prototype.toTwos = function (e) {
                        return 0 !== this.negative ? this.abs().inotn(e).iaddn(1) : this.clone()
                    }, o.prototype.fromTwos = function (e) {
                        return this.testn(e - 1) ? this.notn(e).iaddn(1).ineg() : this.clone()
                    }, o.prototype.isNeg = function () {
                        return 0 !== this.negative
                    }, o.prototype.neg = function () {
                        return this.clone().ineg()
                    }, o.prototype.ineg = function () {
                        return this.isZero() || (this.negative ^= 1), this
                    }, o.prototype.iuor = function (e) {
                        for (; this.length < e.length;) this.words[this.length++] = 0;
                        for (var t = 0; t < e.length; t++) this.words[t] = this.words[t] | e.words[t];
                        return this.strip()
                    }, o.prototype.ior = function (e) {
                        return n(0 == (this.negative | e.negative)), this.iuor(e)
                    }, o.prototype.or = function (e) {
                        return this.length > e.length ? this.clone().ior(e) : e.clone().ior(this)
                    }, o.prototype.uor = function (e) {
                        return this.length > e.length ? this.clone().iuor(e) : e.clone().iuor(this)
                    }, o.prototype.iuand = function (e) {
                        var t;
                        t = this.length > e.length ? e : this;
                        for (var r = 0; r < t.length; r++) this.words[r] = this.words[r] & e.words[r];
                        return this.length = t.length, this.strip()
                    }, o.prototype.iand = function (e) {
                        return n(0 == (this.negative | e.negative)), this.iuand(e)
                    }, o.prototype.and = function (e) {
                        return this.length > e.length ? this.clone().iand(e) : e.clone().iand(this)
                    }, o.prototype.uand = function (e) {
                        return this.length > e.length ? this.clone().iuand(e) : e.clone().iuand(this)
                    }, o.prototype.iuxor = function (e) {
                        var t, r;
                        this.length > e.length ? (t = this, r = e) : (t = e, r = this);
                        for (var n = 0; n < r.length; n++) this.words[n] = t.words[n] ^ r.words[n];
                        if (this !== t)
                            for (; n < t.length; n++) this.words[n] = t.words[n];
                        return this.length = t.length, this.strip()
                    }, o.prototype.ixor = function (e) {
                        return n(0 == (this.negative | e.negative)), this.iuxor(e)
                    }, o.prototype.xor = function (e) {
                        return this.length > e.length ? this.clone().ixor(e) : e.clone().ixor(this)
                    }, o.prototype.uxor = function (e) {
                        return this.length > e.length ? this.clone().iuxor(e) : e.clone().iuxor(this)
                    }, o.prototype.inotn = function (e) {
                        n("number" == typeof e && e >= 0);
                        var t = 0 | Math.ceil(e / 26),
                            r = e % 26;
                        this._expand(t), r > 0 && t--;
                        for (var i = 0; i < t; i++) this.words[i] = 67108863 & ~this.words[i];
                        return r > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - r), this.strip()
                    }, o.prototype.notn = function (e) {
                        return this.clone().inotn(e)
                    }, o.prototype.setn = function (e, t) {
                        n("number" == typeof e && e >= 0);
                        var r = e / 26 | 0,
                            i = e % 26;
                        return this._expand(r + 1), this.words[r] = t ? this.words[r] | 1 << i : this.words[r] & ~(1 << i), this.strip()
                    }, o.prototype.iadd = function (e) {
                        var t, r, n;
                        if (0 !== this.negative && 0 === e.negative) return this.negative = 0, t = this.isub(e), this.negative ^= 1, this._normSign();
                        if (0 === this.negative && 0 !== e.negative) return e.negative = 0, t = this.isub(e), e.negative = 1, t._normSign();
                        this.length > e.length ? (r = this, n = e) : (r = e, n = this);
                        for (var i = 0, o = 0; o < n.length; o++) t = (0 | r.words[o]) + (0 | n.words[o]) + i, this.words[o] = 67108863 & t, i = t >>> 26;
                        for (; 0 !== i && o < r.length; o++) t = (0 | r.words[o]) + i, this.words[o] = 67108863 & t, i = t >>> 26;
                        if (this.length = r.length, 0 !== i) this.words[this.length] = i, this.length++;
                        else if (r !== this)
                            for (; o < r.length; o++) this.words[o] = r.words[o];
                        return this
                    }, o.prototype.add = function (e) {
                        var t;
                        return 0 !== e.negative && 0 === this.negative ? (e.negative = 0, t = this.sub(e), e.negative ^= 1, t) : 0 === e.negative && 0 !== this.negative ? (this.negative = 0, t = e.sub(this), this.negative = 1, t) : this.length > e.length ? this.clone().iadd(e) : e.clone().iadd(this)
                    }, o.prototype.isub = function (e) {
                        if (0 !== e.negative) {
                            e.negative = 0;
                            var t = this.iadd(e);
                            return e.negative = 1, t._normSign()
                        }
                        if (0 !== this.negative) return this.negative = 0, this.iadd(e), this.negative = 1, this._normSign();
                        var r, n, i = this.cmp(e);
                        if (0 === i) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                        i > 0 ? (r = this, n = e) : (r = e, n = this);
                        for (var o = 0, a = 0; a < n.length; a++) o = (t = (0 | r.words[a]) - (0 | n.words[a]) + o) >> 26, this.words[a] = 67108863 & t;
                        for (; 0 !== o && a < r.length; a++) o = (t = (0 | r.words[a]) + o) >> 26, this.words[a] = 67108863 & t;
                        if (0 === o && a < r.length && r !== this)
                            for (; a < r.length; a++) this.words[a] = r.words[a];
                        return this.length = Math.max(this.length, a), r !== this && (this.negative = 1), this.strip()
                    }, o.prototype.sub = function (e) {
                        return this.clone().isub(e)
                    };
                    var p = function (e, t, r) {
                        var n, i, o, a = e.words,
                            u = t.words,
                            s = r.words,
                            c = 0,
                            f = 0 | a[0],
                            l = 8191 & f,
                            h = f >>> 13,
                            p = 0 | a[1],
                            d = 8191 & p,
                            y = p >>> 13,
                            v = 0 | a[2],
                            g = 8191 & v,
                            m = v >>> 13,
                            b = 0 | a[3],
                            w = 8191 & b,
                            x = b >>> 13,
                            M = 0 | a[4],
                            k = 8191 & M,
                            _ = M >>> 13,
                            E = 0 | a[5],
                            A = 8191 & E,
                            S = E >>> 13,
                            O = 0 | a[6],
                            F = 8191 & O,
                            j = O >>> 13,
                            P = 0 | a[7],
                            T = 8191 & P,
                            D = P >>> 13,
                            I = 0 | a[8],
                            C = 8191 & I,
                            R = I >>> 13,
                            L = 0 | a[9],
                            K = 8191 & L,
                            B = L >>> 13,
                            U = 0 | u[0],
                            z = 8191 & U,
                            H = U >>> 13,
                            N = 0 | u[1],
                            W = 8191 & N,
                            V = N >>> 13,
                            q = 0 | u[2],
                            G = 8191 & q,
                            Z = q >>> 13,
                            Y = 0 | u[3],
                            Q = 8191 & Y,
                            J = Y >>> 13,
                            X = 0 | u[4],
                            $ = 8191 & X,
                            ee = X >>> 13,
                            te = 0 | u[5],
                            re = 8191 & te,
                            ne = te >>> 13,
                            ie = 0 | u[6],
                            oe = 8191 & ie,
                            ae = ie >>> 13,
                            ue = 0 | u[7],
                            se = 8191 & ue,
                            ce = ue >>> 13,
                            fe = 0 | u[8],
                            le = 8191 & fe,
                            he = fe >>> 13,
                            pe = 0 | u[9],
                            de = 8191 & pe,
                            ye = pe >>> 13;
                        r.negative = e.negative ^ t.negative, r.length = 19;
                        var ve = (c + (n = Math.imul(l, z)) | 0) + ((8191 & (i = (i = Math.imul(l, H)) + Math.imul(h, z) | 0)) << 13) | 0;
                        c = ((o = Math.imul(h, H)) + (i >>> 13) | 0) + (ve >>> 26) | 0, ve &= 67108863, n = Math.imul(d, z), i = (i = Math.imul(d, H)) + Math.imul(y, z) | 0, o = Math.imul(y, H);
                        var ge = (c + (n = n + Math.imul(l, W) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, V) | 0) + Math.imul(h, W) | 0)) << 13) | 0;
                        c = ((o = o + Math.imul(h, V) | 0) + (i >>> 13) | 0) + (ge >>> 26) | 0, ge &= 67108863, n = Math.imul(g, z), i = (i = Math.imul(g, H)) + Math.imul(m, z) | 0, o = Math.imul(m, H), n = n + Math.imul(d, W) | 0, i = (i = i + Math.imul(d, V) | 0) + Math.imul(y, W) | 0, o = o + Math.imul(y, V) | 0;
                        var me = (c + (n = n + Math.imul(l, G) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, Z) | 0) + Math.imul(h, G) | 0)) << 13) | 0;
                        c = ((o = o + Math.imul(h, Z) | 0) + (i >>> 13) | 0) + (me >>> 26) | 0, me &= 67108863, n = Math.imul(w, z), i = (i = Math.imul(w, H)) + Math.imul(x, z) | 0, o = Math.imul(x, H), n = n + Math.imul(g, W) | 0, i = (i = i + Math.imul(g, V) | 0) + Math.imul(m, W) | 0, o = o + Math.imul(m, V) | 0, n = n + Math.imul(d, G) | 0, i = (i = i + Math.imul(d, Z) | 0) + Math.imul(y, G) | 0, o = o + Math.imul(y, Z) | 0;
                        var be = (c + (n = n + Math.imul(l, Q) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, J) | 0) + Math.imul(h, Q) | 0)) << 13) | 0;
                        c = ((o = o + Math.imul(h, J) | 0) + (i >>> 13) | 0) + (be >>> 26) | 0, be &= 67108863, n = Math.imul(k, z), i = (i = Math.imul(k, H)) + Math.imul(_, z) | 0, o = Math.imul(_, H), n = n + Math.imul(w, W) | 0, i = (i = i + Math.imul(w, V) | 0) + Math.imul(x, W) | 0, o = o + Math.imul(x, V) | 0, n = n + Math.imul(g, G) | 0, i = (i = i + Math.imul(g, Z) | 0) + Math.imul(m, G) | 0, o = o + Math.imul(m, Z) | 0, n = n + Math.imul(d, Q) | 0, i = (i = i + Math.imul(d, J) | 0) + Math.imul(y, Q) | 0, o = o + Math.imul(y, J) | 0;
                        var we = (c + (n = n + Math.imul(l, $) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, ee) | 0) + Math.imul(h, $) | 0)) << 13) | 0;
                        c = ((o = o + Math.imul(h, ee) | 0) + (i >>> 13) | 0) + (we >>> 26) | 0, we &= 67108863, n = Math.imul(A, z), i = (i = Math.imul(A, H)) + Math.imul(S, z) | 0, o = Math.imul(S, H), n = n + Math.imul(k, W) | 0, i = (i = i + Math.imul(k, V) | 0) + Math.imul(_, W) | 0, o = o + Math.imul(_, V) | 0, n = n + Math.imul(w, G) | 0, i = (i = i + Math.imul(w, Z) | 0) + Math.imul(x, G) | 0, o = o + Math.imul(x, Z) | 0, n = n + Math.imul(g, Q) | 0, i = (i = i + Math.imul(g, J) | 0) + Math.imul(m, Q) | 0, o = o + Math.imul(m, J) | 0, n = n + Math.imul(d, $) | 0, i = (i = i + Math.imul(d, ee) | 0) + Math.imul(y, $) | 0, o = o + Math.imul(y, ee) | 0;
                        var xe = (c + (n = n + Math.imul(l, re) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, ne) | 0) + Math.imul(h, re) | 0)) << 13) | 0;
                        c = ((o = o + Math.imul(h, ne) | 0) + (i >>> 13) | 0) + (xe >>> 26) | 0, xe &= 67108863, n = Math.imul(F, z), i = (i = Math.imul(F, H)) + Math.imul(j, z) | 0, o = Math.imul(j, H), n = n + Math.imul(A, W) | 0, i = (i = i + Math.imul(A, V) | 0) + Math.imul(S, W) | 0, o = o + Math.imul(S, V) | 0, n = n + Math.imul(k, G) | 0, i = (i = i + Math.imul(k, Z) | 0) + Math.imul(_, G) | 0, o = o + Math.imul(_, Z) | 0, n = n + Math.imul(w, Q) | 0, i = (i = i + Math.imul(w, J) | 0) + Math.imul(x, Q) | 0, o = o + Math.imul(x, J) | 0, n = n + Math.imul(g, $) | 0, i = (i = i + Math.imul(g, ee) | 0) + Math.imul(m, $) | 0, o = o + Math.imul(m, ee) | 0, n = n + Math.imul(d, re) | 0, i = (i = i + Math.imul(d, ne) | 0) + Math.imul(y, re) | 0, o = o + Math.imul(y, ne) | 0;
                        var Me = (c + (n = n + Math.imul(l, oe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, ae) | 0) + Math.imul(h, oe) | 0)) << 13) | 0;
                        c = ((o = o + Math.imul(h, ae) | 0) + (i >>> 13) | 0) + (Me >>> 26) | 0, Me &= 67108863, n = Math.imul(T, z), i = (i = Math.imul(T, H)) + Math.imul(D, z) | 0, o = Math.imul(D, H), n = n + Math.imul(F, W) | 0, i = (i = i + Math.imul(F, V) | 0) + Math.imul(j, W) | 0, o = o + Math.imul(j, V) | 0, n = n + Math.imul(A, G) | 0, i = (i = i + Math.imul(A, Z) | 0) + Math.imul(S, G) | 0, o = o + Math.imul(S, Z) | 0, n = n + Math.imul(k, Q) | 0, i = (i = i + Math.imul(k, J) | 0) + Math.imul(_, Q) | 0, o = o + Math.imul(_, J) | 0, n = n + Math.imul(w, $) | 0, i = (i = i + Math.imul(w, ee) | 0) + Math.imul(x, $) | 0, o = o + Math.imul(x, ee) | 0, n = n + Math.imul(g, re) | 0, i = (i = i + Math.imul(g, ne) | 0) + Math.imul(m, re) | 0, o = o + Math.imul(m, ne) | 0, n = n + Math.imul(d, oe) | 0, i = (i = i + Math.imul(d, ae) | 0) + Math.imul(y, oe) | 0, o = o + Math.imul(y, ae) | 0;
                        var ke = (c + (n = n + Math.imul(l, se) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, ce) | 0) + Math.imul(h, se) | 0)) << 13) | 0;
                        c = ((o = o + Math.imul(h, ce) | 0) + (i >>> 13) | 0) + (ke >>> 26) | 0, ke &= 67108863, n = Math.imul(C, z), i = (i = Math.imul(C, H)) + Math.imul(R, z) | 0, o = Math.imul(R, H), n = n + Math.imul(T, W) | 0, i = (i = i + Math.imul(T, V) | 0) + Math.imul(D, W) | 0, o = o + Math.imul(D, V) | 0, n = n + Math.imul(F, G) | 0, i = (i = i + Math.imul(F, Z) | 0) + Math.imul(j, G) | 0, o = o + Math.imul(j, Z) | 0, n = n + Math.imul(A, Q) | 0, i = (i = i + Math.imul(A, J) | 0) + Math.imul(S, Q) | 0, o = o + Math.imul(S, J) | 0, n = n + Math.imul(k, $) | 0, i = (i = i + Math.imul(k, ee) | 0) + Math.imul(_, $) | 0, o = o + Math.imul(_, ee) | 0, n = n + Math.imul(w, re) | 0, i = (i = i + Math.imul(w, ne) | 0) + Math.imul(x, re) | 0, o = o + Math.imul(x, ne) | 0, n = n + Math.imul(g, oe) | 0, i = (i = i + Math.imul(g, ae) | 0) + Math.imul(m, oe) | 0, o = o + Math.imul(m, ae) | 0, n = n + Math.imul(d, se) | 0, i = (i = i + Math.imul(d, ce) | 0) + Math.imul(y, se) | 0, o = o + Math.imul(y, ce) | 0;
                        var _e = (c + (n = n + Math.imul(l, le) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, he) | 0) + Math.imul(h, le) | 0)) << 13) | 0;
                        c = ((o = o + Math.imul(h, he) | 0) + (i >>> 13) | 0) + (_e >>> 26) | 0, _e &= 67108863, n = Math.imul(K, z), i = (i = Math.imul(K, H)) + Math.imul(B, z) | 0, o = Math.imul(B, H), n = n + Math.imul(C, W) | 0, i = (i = i + Math.imul(C, V) | 0) + Math.imul(R, W) | 0, o = o + Math.imul(R, V) | 0, n = n + Math.imul(T, G) | 0, i = (i = i + Math.imul(T, Z) | 0) + Math.imul(D, G) | 0, o = o + Math.imul(D, Z) | 0, n = n + Math.imul(F, Q) | 0, i = (i = i + Math.imul(F, J) | 0) + Math.imul(j, Q) | 0, o = o + Math.imul(j, J) | 0, n = n + Math.imul(A, $) | 0, i = (i = i + Math.imul(A, ee) | 0) + Math.imul(S, $) | 0, o = o + Math.imul(S, ee) | 0, n = n + Math.imul(k, re) | 0, i = (i = i + Math.imul(k, ne) | 0) + Math.imul(_, re) | 0, o = o + Math.imul(_, ne) | 0, n = n + Math.imul(w, oe) | 0, i = (i = i + Math.imul(w, ae) | 0) + Math.imul(x, oe) | 0, o = o + Math.imul(x, ae) | 0, n = n + Math.imul(g, se) | 0, i = (i = i + Math.imul(g, ce) | 0) + Math.imul(m, se) | 0, o = o + Math.imul(m, ce) | 0, n = n + Math.imul(d, le) | 0, i = (i = i + Math.imul(d, he) | 0) + Math.imul(y, le) | 0, o = o + Math.imul(y, he) | 0;
                        var Ee = (c + (n = n + Math.imul(l, de) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, ye) | 0) + Math.imul(h, de) | 0)) << 13) | 0;
                        c = ((o = o + Math.imul(h, ye) | 0) + (i >>> 13) | 0) + (Ee >>> 26) | 0, Ee &= 67108863, n = Math.imul(K, W), i = (i = Math.imul(K, V)) + Math.imul(B, W) | 0, o = Math.imul(B, V), n = n + Math.imul(C, G) | 0, i = (i = i + Math.imul(C, Z) | 0) + Math.imul(R, G) | 0, o = o + Math.imul(R, Z) | 0, n = n + Math.imul(T, Q) | 0, i = (i = i + Math.imul(T, J) | 0) + Math.imul(D, Q) | 0, o = o + Math.imul(D, J) | 0, n = n + Math.imul(F, $) | 0, i = (i = i + Math.imul(F, ee) | 0) + Math.imul(j, $) | 0, o = o + Math.imul(j, ee) | 0, n = n + Math.imul(A, re) | 0, i = (i = i + Math.imul(A, ne) | 0) + Math.imul(S, re) | 0, o = o + Math.imul(S, ne) | 0, n = n + Math.imul(k, oe) | 0, i = (i = i + Math.imul(k, ae) | 0) + Math.imul(_, oe) | 0, o = o + Math.imul(_, ae) | 0, n = n + Math.imul(w, se) | 0, i = (i = i + Math.imul(w, ce) | 0) + Math.imul(x, se) | 0, o = o + Math.imul(x, ce) | 0, n = n + Math.imul(g, le) | 0, i = (i = i + Math.imul(g, he) | 0) + Math.imul(m, le) | 0, o = o + Math.imul(m, he) | 0;
                        var Ae = (c + (n = n + Math.imul(d, de) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, ye) | 0) + Math.imul(y, de) | 0)) << 13) | 0;
                        c = ((o = o + Math.imul(y, ye) | 0) + (i >>> 13) | 0) + (Ae >>> 26) | 0, Ae &= 67108863, n = Math.imul(K, G), i = (i = Math.imul(K, Z)) + Math.imul(B, G) | 0, o = Math.imul(B, Z), n = n + Math.imul(C, Q) | 0, i = (i = i + Math.imul(C, J) | 0) + Math.imul(R, Q) | 0, o = o + Math.imul(R, J) | 0, n = n + Math.imul(T, $) | 0, i = (i = i + Math.imul(T, ee) | 0) + Math.imul(D, $) | 0, o = o + Math.imul(D, ee) | 0, n = n + Math.imul(F, re) | 0, i = (i = i + Math.imul(F, ne) | 0) + Math.imul(j, re) | 0, o = o + Math.imul(j, ne) | 0, n = n + Math.imul(A, oe) | 0, i = (i = i + Math.imul(A, ae) | 0) + Math.imul(S, oe) | 0, o = o + Math.imul(S, ae) | 0, n = n + Math.imul(k, se) | 0, i = (i = i + Math.imul(k, ce) | 0) + Math.imul(_, se) | 0, o = o + Math.imul(_, ce) | 0, n = n + Math.imul(w, le) | 0, i = (i = i + Math.imul(w, he) | 0) + Math.imul(x, le) | 0, o = o + Math.imul(x, he) | 0;
                        var Se = (c + (n = n + Math.imul(g, de) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(g, ye) | 0) + Math.imul(m, de) | 0)) << 13) | 0;
                        c = ((o = o + Math.imul(m, ye) | 0) + (i >>> 13) | 0) + (Se >>> 26) | 0, Se &= 67108863, n = Math.imul(K, Q), i = (i = Math.imul(K, J)) + Math.imul(B, Q) | 0, o = Math.imul(B, J), n = n + Math.imul(C, $) | 0, i = (i = i + Math.imul(C, ee) | 0) + Math.imul(R, $) | 0, o = o + Math.imul(R, ee) | 0, n = n + Math.imul(T, re) | 0, i = (i = i + Math.imul(T, ne) | 0) + Math.imul(D, re) | 0, o = o + Math.imul(D, ne) | 0, n = n + Math.imul(F, oe) | 0, i = (i = i + Math.imul(F, ae) | 0) + Math.imul(j, oe) | 0, o = o + Math.imul(j, ae) | 0, n = n + Math.imul(A, se) | 0, i = (i = i + Math.imul(A, ce) | 0) + Math.imul(S, se) | 0, o = o + Math.imul(S, ce) | 0, n = n + Math.imul(k, le) | 0, i = (i = i + Math.imul(k, he) | 0) + Math.imul(_, le) | 0, o = o + Math.imul(_, he) | 0;
                        var Oe = (c + (n = n + Math.imul(w, de) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(w, ye) | 0) + Math.imul(x, de) | 0)) << 13) | 0;
                        c = ((o = o + Math.imul(x, ye) | 0) + (i >>> 13) | 0) + (Oe >>> 26) | 0, Oe &= 67108863, n = Math.imul(K, $), i = (i = Math.imul(K, ee)) + Math.imul(B, $) | 0, o = Math.imul(B, ee), n = n + Math.imul(C, re) | 0, i = (i = i + Math.imul(C, ne) | 0) + Math.imul(R, re) | 0, o = o + Math.imul(R, ne) | 0, n = n + Math.imul(T, oe) | 0, i = (i = i + Math.imul(T, ae) | 0) + Math.imul(D, oe) | 0, o = o + Math.imul(D, ae) | 0, n = n + Math.imul(F, se) | 0, i = (i = i + Math.imul(F, ce) | 0) + Math.imul(j, se) | 0, o = o + Math.imul(j, ce) | 0, n = n + Math.imul(A, le) | 0, i = (i = i + Math.imul(A, he) | 0) + Math.imul(S, le) | 0, o = o + Math.imul(S, he) | 0;
                        var Fe = (c + (n = n + Math.imul(k, de) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(k, ye) | 0) + Math.imul(_, de) | 0)) << 13) | 0;
                        c = ((o = o + Math.imul(_, ye) | 0) + (i >>> 13) | 0) + (Fe >>> 26) | 0, Fe &= 67108863, n = Math.imul(K, re), i = (i = Math.imul(K, ne)) + Math.imul(B, re) | 0, o = Math.imul(B, ne), n = n + Math.imul(C, oe) | 0, i = (i = i + Math.imul(C, ae) | 0) + Math.imul(R, oe) | 0, o = o + Math.imul(R, ae) | 0, n = n + Math.imul(T, se) | 0, i = (i = i + Math.imul(T, ce) | 0) + Math.imul(D, se) | 0, o = o + Math.imul(D, ce) | 0, n = n + Math.imul(F, le) | 0, i = (i = i + Math.imul(F, he) | 0) + Math.imul(j, le) | 0, o = o + Math.imul(j, he) | 0;
                        var je = (c + (n = n + Math.imul(A, de) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(A, ye) | 0) + Math.imul(S, de) | 0)) << 13) | 0;
                        c = ((o = o + Math.imul(S, ye) | 0) + (i >>> 13) | 0) + (je >>> 26) | 0, je &= 67108863, n = Math.imul(K, oe), i = (i = Math.imul(K, ae)) + Math.imul(B, oe) | 0, o = Math.imul(B, ae), n = n + Math.imul(C, se) | 0, i = (i = i + Math.imul(C, ce) | 0) + Math.imul(R, se) | 0, o = o + Math.imul(R, ce) | 0, n = n + Math.imul(T, le) | 0, i = (i = i + Math.imul(T, he) | 0) + Math.imul(D, le) | 0, o = o + Math.imul(D, he) | 0;
                        var Pe = (c + (n = n + Math.imul(F, de) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(F, ye) | 0) + Math.imul(j, de) | 0)) << 13) | 0;
                        c = ((o = o + Math.imul(j, ye) | 0) + (i >>> 13) | 0) + (Pe >>> 26) | 0, Pe &= 67108863, n = Math.imul(K, se), i = (i = Math.imul(K, ce)) + Math.imul(B, se) | 0, o = Math.imul(B, ce), n = n + Math.imul(C, le) | 0, i = (i = i + Math.imul(C, he) | 0) + Math.imul(R, le) | 0, o = o + Math.imul(R, he) | 0;
                        var Te = (c + (n = n + Math.imul(T, de) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(T, ye) | 0) + Math.imul(D, de) | 0)) << 13) | 0;
                        c = ((o = o + Math.imul(D, ye) | 0) + (i >>> 13) | 0) + (Te >>> 26) | 0, Te &= 67108863, n = Math.imul(K, le), i = (i = Math.imul(K, he)) + Math.imul(B, le) | 0, o = Math.imul(B, he);
                        var De = (c + (n = n + Math.imul(C, de) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(C, ye) | 0) + Math.imul(R, de) | 0)) << 13) | 0;
                        c = ((o = o + Math.imul(R, ye) | 0) + (i >>> 13) | 0) + (De >>> 26) | 0, De &= 67108863;
                        var Ie = (c + (n = Math.imul(K, de)) | 0) + ((8191 & (i = (i = Math.imul(K, ye)) + Math.imul(B, de) | 0)) << 13) | 0;
                        return c = ((o = Math.imul(B, ye)) + (i >>> 13) | 0) + (Ie >>> 26) | 0, Ie &= 67108863, s[0] = ve, s[1] = ge, s[2] = me, s[3] = be, s[4] = we, s[5] = xe, s[6] = Me, s[7] = ke, s[8] = _e, s[9] = Ee, s[10] = Ae, s[11] = Se, s[12] = Oe, s[13] = Fe, s[14] = je, s[15] = Pe, s[16] = Te, s[17] = De, s[18] = Ie, 0 !== c && (s[19] = c, r.length++), r
                    };
                    function d(e, t, r) {
                        return (new y).mulp(e, t, r)
                    }
                    function y(e, t) {
                        this.x = e, this.y = t
                    }
                    Math.imul || (p = h), o.prototype.mulTo = function (e, t) {
                        var r = this.length + e.length;
                        return 10 === this.length && 10 === e.length ? p(this, e, t) : r < 63 ? h(this, e, t) : r < 1024 ? function (e, t, r) {
                            r.negative = t.negative ^ e.negative, r.length = e.length + t.length;
                            for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
                                var a = i;
                                i = 0;
                                for (var u = 67108863 & n, s = Math.min(o, t.length - 1), c = Math.max(0, o - e.length + 1); c <= s; c++) {
                                    var f = o - c,
                                        l = (0 | e.words[f]) * (0 | t.words[c]),
                                        h = 67108863 & l;
                                    u = 67108863 & (h = h + u | 0), i += (a = (a = a + (l / 67108864 | 0) | 0) + (h >>> 26) | 0) >>> 26, a &= 67108863
                                }
                                r.words[o] = u, n = a, a = i
                            }
                            return 0 !== n ? r.words[o] = n : r.length--, r.strip()
                        }(this, e, t) : d(this, e, t)
                    }, y.prototype.makeRBT = function (e) {
                        for (var t = new Array(e), r = o.prototype._countBits(e) - 1, n = 0; n < e; n++) t[n] = this.revBin(n, r, e);
                        return t
                    }, y.prototype.revBin = function (e, t, r) {
                        if (0 === e || e === r - 1) return e;
                        for (var n = 0, i = 0; i < t; i++) n |= (1 & e) << t - i - 1, e >>= 1;
                        return n
                    }, y.prototype.permute = function (e, t, r, n, i, o) {
                        for (var a = 0; a < o; a++) n[a] = t[e[a]], i[a] = r[e[a]]
                    }, y.prototype.transform = function (e, t, r, n, i, o) {
                        this.permute(o, e, t, r, n, i);
                        for (var a = 1; a < i; a <<= 1)
                            for (var u = a << 1, s = Math.cos(2 * Math.PI / u), c = Math.sin(2 * Math.PI / u), f = 0; f < i; f += u)
                                for (var l = s, h = c, p = 0; p < a; p++) {
                                    var d = r[f + p],
                                        y = n[f + p],
                                        v = r[f + p + a],
                                        g = n[f + p + a],
                                        m = l * v - h * g;
                                    g = l * g + h * v, v = m, r[f + p] = d + v, n[f + p] = y + g, r[f + p + a] = d - v, n[f + p + a] = y - g, p !== u && (m = s * l - c * h, h = s * h + c * l, l = m)
                                }
                    }, y.prototype.guessLen13b = function (e, t) {
                        var r = 1 | Math.max(t, e),
                            n = 1 & r,
                            i = 0;
                        for (r = r / 2 | 0; r; r >>>= 1) i++;
                        return 1 << i + 1 + n
                    }, y.prototype.conjugate = function (e, t, r) {
                        if (!(r <= 1))
                            for (var n = 0; n < r / 2; n++) {
                                var i = e[n];
                                e[n] = e[r - n - 1], e[r - n - 1] = i, i = t[n], t[n] = -t[r - n - 1], t[r - n - 1] = -i
                            }
                    }, y.prototype.normalize13b = function (e, t) {
                        for (var r = 0, n = 0; n < t / 2; n++) {
                            var i = 8192 * Math.round(e[2 * n + 1] / t) + Math.round(e[2 * n] / t) + r;
                            e[n] = 67108863 & i, r = i < 67108864 ? 0 : i / 67108864 | 0
                        }
                        return e
                    }, y.prototype.convert13b = function (e, t, r, i) {
                        for (var o = 0, a = 0; a < t; a++) o += 0 | e[a], r[2 * a] = 8191 & o, o >>>= 13, r[2 * a + 1] = 8191 & o, o >>>= 13;
                        for (a = 2 * t; a < i; ++a) r[a] = 0;
                        n(0 === o), n(0 == (-8192 & o))
                    }, y.prototype.stub = function (e) {
                        for (var t = new Array(e), r = 0; r < e; r++) t[r] = 0;
                        return t
                    }, y.prototype.mulp = function (e, t, r) {
                        var n = 2 * this.guessLen13b(e.length, t.length),
                            i = this.makeRBT(n),
                            o = this.stub(n),
                            a = new Array(n),
                            u = new Array(n),
                            s = new Array(n),
                            c = new Array(n),
                            f = new Array(n),
                            l = new Array(n),
                            h = r.words;
                        h.length = n, this.convert13b(e.words, e.length, a, n), this.convert13b(t.words, t.length, c, n), this.transform(a, o, u, s, n, i), this.transform(c, o, f, l, n, i);
                        for (var p = 0; p < n; p++) {
                            var d = u[p] * f[p] - s[p] * l[p];
                            s[p] = u[p] * l[p] + s[p] * f[p], u[p] = d
                        }
                        return this.conjugate(u, s, n), this.transform(u, s, h, o, n, i), this.conjugate(h, o, n), this.normalize13b(h, n), r.negative = e.negative ^ t.negative, r.length = e.length + t.length, r.strip()
                    }, o.prototype.mul = function (e) {
                        var t = new o(null);
                        return t.words = new Array(this.length + e.length), this.mulTo(e, t)
                    }, o.prototype.mulf = function (e) {
                        var t = new o(null);
                        return t.words = new Array(this.length + e.length), d(this, e, t)
                    }, o.prototype.imul = function (e) {
                        return this.clone().mulTo(e, this)
                    }, o.prototype.imuln = function (e) {
                        n("number" == typeof e), n(e < 67108864);
                        for (var t = 0, r = 0; r < this.length; r++) {
                            var i = (0 | this.words[r]) * e,
                                o = (67108863 & i) + (67108863 & t);
                            t >>= 26, t += i / 67108864 | 0, t += o >>> 26, this.words[r] = 67108863 & o
                        }
                        return 0 !== t && (this.words[r] = t, this.length++), this
                    }, o.prototype.muln = function (e) {
                        return this.clone().imuln(e)
                    }, o.prototype.sqr = function () {
                        return this.mul(this)
                    }, o.prototype.isqr = function () {
                        return this.imul(this.clone())
                    }, o.prototype.pow = function (e) {
                        var t = function (e) {
                            for (var t = new Array(e.bitLength()), r = 0; r < t.length; r++) {
                                var n = r / 26 | 0,
                                    i = r % 26;
                                t[r] = (e.words[n] & 1 << i) >>> i
                            }
                            return t
                        }(e);
                        if (0 === t.length) return new o(1);
                        for (var r = this, n = 0; n < t.length && 0 === t[n]; n++, r = r.sqr());
                        if (++n < t.length)
                            for (var i = r.sqr(); n < t.length; n++, i = i.sqr()) 0 !== t[n] && (r = r.mul(i));
                        return r
                    }, o.prototype.iushln = function (e) {
                        n("number" == typeof e && e >= 0);
                        var t, r = e % 26,
                            i = (e - r) / 26,
                            o = 67108863 >>> 26 - r << 26 - r;
                        if (0 !== r) {
                            var a = 0;
                            for (t = 0; t < this.length; t++) {
                                var u = this.words[t] & o,
                                    s = (0 | this.words[t]) - u << r;
                                this.words[t] = s | a, a = u >>> 26 - r
                            }
                            a && (this.words[t] = a, this.length++)
                        }
                        if (0 !== i) {
                            for (t = this.length - 1; t >= 0; t--) this.words[t + i] = this.words[t];
                            for (t = 0; t < i; t++) this.words[t] = 0;
                            this.length += i
                        }
                        return this.strip()
                    }, o.prototype.ishln = function (e) {
                        return n(0 === this.negative), this.iushln(e)
                    }, o.prototype.iushrn = function (e, t, r) {
                        var i;
                        n("number" == typeof e && e >= 0), i = t ? (t - t % 26) / 26 : 0;
                        var o = e % 26,
                            a = Math.min((e - o) / 26, this.length),
                            u = 67108863 ^ 67108863 >>> o << o,
                            s = r;
                        if (i -= a, i = Math.max(0, i), s) {
                            for (var c = 0; c < a; c++) s.words[c] = this.words[c];
                            s.length = a
                        }
                        if (0 === a);
                        else if (this.length > a)
                            for (this.length -= a, c = 0; c < this.length; c++) this.words[c] = this.words[c + a];
                        else this.words[0] = 0, this.length = 1;
                        var f = 0;
                        for (c = this.length - 1; c >= 0 && (0 !== f || c >= i); c--) {
                            var l = 0 | this.words[c];
                            this.words[c] = f << 26 - o | l >>> o, f = l & u
                        }
                        return s && 0 !== f && (s.words[s.length++] = f), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip()
                    }, o.prototype.ishrn = function (e, t, r) {
                        return n(0 === this.negative), this.iushrn(e, t, r)
                    }, o.prototype.shln = function (e) {
                        return this.clone().ishln(e)
                    }, o.prototype.ushln = function (e) {
                        return this.clone().iushln(e)
                    }, o.prototype.shrn = function (e) {
                        return this.clone().ishrn(e)
                    }, o.prototype.ushrn = function (e) {
                        return this.clone().iushrn(e)
                    }, o.prototype.testn = function (e) {
                        n("number" == typeof e && e >= 0);
                        var t = e % 26,
                            r = (e - t) / 26,
                            i = 1 << t;
                        return !(this.length <= r || !(this.words[r] & i))
                    }, o.prototype.imaskn = function (e) {
                        n("number" == typeof e && e >= 0);
                        var t = e % 26,
                            r = (e - t) / 26;
                        if (n(0 === this.negative, "imaskn works only with positive numbers"), this.length <= r) return this;
                        if (0 !== t && r++, this.length = Math.min(r, this.length), 0 !== t) {
                            var i = 67108863 ^ 67108863 >>> t << t;
                            this.words[this.length - 1] &= i
                        }
                        return this.strip()
                    }, o.prototype.maskn = function (e) {
                        return this.clone().imaskn(e)
                    }, o.prototype.iaddn = function (e) {
                        return n("number" == typeof e), n(e < 67108864), e < 0 ? this.isubn(-e) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < e ? (this.words[0] = e - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(e), this.negative = 1, this) : this._iaddn(e)
                    }, o.prototype._iaddn = function (e) {
                        this.words[0] += e;
                        for (var t = 0; t < this.length && this.words[t] >= 67108864; t++) this.words[t] -= 67108864, t === this.length - 1 ? this.words[t + 1] = 1 : this.words[t + 1]++;
                        return this.length = Math.max(this.length, t + 1), this
                    }, o.prototype.isubn = function (e) {
                        if (n("number" == typeof e), n(e < 67108864), e < 0) return this.iaddn(-e);
                        if (0 !== this.negative) return this.negative = 0, this.iaddn(e), this.negative = 1, this;
                        if (this.words[0] -= e, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                        else
                            for (var t = 0; t < this.length && this.words[t] < 0; t++) this.words[t] += 67108864, this.words[t + 1] -= 1;
                        return this.strip()
                    }, o.prototype.addn = function (e) {
                        return this.clone().iaddn(e)
                    }, o.prototype.subn = function (e) {
                        return this.clone().isubn(e)
                    }, o.prototype.iabs = function () {
                        return this.negative = 0, this
                    }, o.prototype.abs = function () {
                        return this.clone().iabs()
                    }, o.prototype._ishlnsubmul = function (e, t, r) {
                        var i, o, a = e.length + r;
                        this._expand(a);
                        var u = 0;
                        for (i = 0; i < e.length; i++) {
                            o = (0 | this.words[i + r]) + u;
                            var s = (0 | e.words[i]) * t;
                            u = ((o -= 67108863 & s) >> 26) - (s / 67108864 | 0), this.words[i + r] = 67108863 & o
                        }
                        for (; i < this.length - r; i++) u = (o = (0 | this.words[i + r]) + u) >> 26, this.words[i + r] = 67108863 & o;
                        if (0 === u) return this.strip();
                        for (n(-1 === u), u = 0, i = 0; i < this.length; i++) u = (o = -(0 | this.words[i]) + u) >> 26, this.words[i] = 67108863 & o;
                        return this.negative = 1, this.strip()
                    }, o.prototype._wordDiv = function (e, t) {
                        var r = (this.length, e.length),
                            n = this.clone(),
                            i = e,
                            a = 0 | i.words[i.length - 1];
                        0 != (r = 26 - this._countBits(a)) && (i = i.ushln(r), n.iushln(r), a = 0 | i.words[i.length - 1]);
                        var u, s = n.length - i.length;
                        if ("mod" !== t) {
                            (u = new o(null)).length = s + 1, u.words = new Array(u.length);
                            for (var c = 0; c < u.length; c++) u.words[c] = 0
                        }
                        var f = n.clone()._ishlnsubmul(i, 1, s);
                        0 === f.negative && (n = f, u && (u.words[s] = 1));
                        for (var l = s - 1; l >= 0; l--) {
                            var h = 67108864 * (0 | n.words[i.length + l]) + (0 | n.words[i.length + l - 1]);
                            for (h = Math.min(h / a | 0, 67108863), n._ishlnsubmul(i, h, l); 0 !== n.negative;) h--, n.negative = 0, n._ishlnsubmul(i, 1, l), n.isZero() || (n.negative ^= 1);
                            u && (u.words[l] = h)
                        }
                        return u && u.strip(), n.strip(), "div" !== t && 0 !== r && n.iushrn(r), {
                            div: u || null,
                            mod: n
                        }
                    }, o.prototype.divmod = function (e, t, r) {
                        return n(!e.isZero()), this.isZero() ? {
                            div: new o(0),
                            mod: new o(0)
                        } : 0 !== this.negative && 0 === e.negative ? (u = this.neg().divmod(e, t), "mod" !== t && (i = u.div.neg()), "div" !== t && (a = u.mod.neg(), r && 0 !== a.negative && a.iadd(e)), {
                            div: i,
                            mod: a
                        }) : 0 === this.negative && 0 !== e.negative ? (u = this.divmod(e.neg(), t), "mod" !== t && (i = u.div.neg()), {
                            div: i,
                            mod: u.mod
                        }) : 0 != (this.negative & e.negative) ? (u = this.neg().divmod(e.neg(), t), "div" !== t && (a = u.mod.neg(), r && 0 !== a.negative && a.isub(e)), {
                            div: u.div,
                            mod: a
                        }) : e.length > this.length || this.cmp(e) < 0 ? {
                            div: new o(0),
                            mod: this
                        } : 1 === e.length ? "div" === t ? {
                            div: this.divn(e.words[0]),
                            mod: null
                        } : "mod" === t ? {
                            div: null,
                            mod: new o(this.modn(e.words[0]))
                        } : {
                            div: this.divn(e.words[0]),
                            mod: new o(this.modn(e.words[0]))
                        } : this._wordDiv(e, t);
                        var i, a, u
                    }, o.prototype.div = function (e) {
                        return this.divmod(e, "div", !1).div
                    }, o.prototype.mod = function (e) {
                        return this.divmod(e, "mod", !1).mod
                    }, o.prototype.umod = function (e) {
                        return this.divmod(e, "mod", !0).mod
                    }, o.prototype.divRound = function (e) {
                        var t = this.divmod(e);
                        if (t.mod.isZero()) return t.div;
                        var r = 0 !== t.div.negative ? t.mod.isub(e) : t.mod,
                            n = e.ushrn(1),
                            i = e.andln(1),
                            o = r.cmp(n);
                        return o < 0 || 1 === i && 0 === o ? t.div : 0 !== t.div.negative ? t.div.isubn(1) : t.div.iaddn(1)
                    }, o.prototype.modn = function (e) {
                        n(e <= 67108863);
                        for (var t = (1 << 26) % e, r = 0, i = this.length - 1; i >= 0; i--) r = (t * r + (0 | this.words[i])) % e;
                        return r
                    }, o.prototype.idivn = function (e) {
                        n(e <= 67108863);
                        for (var t = 0, r = this.length - 1; r >= 0; r--) {
                            var i = (0 | this.words[r]) + 67108864 * t;
                            this.words[r] = i / e | 0, t = i % e
                        }
                        return this.strip()
                    }, o.prototype.divn = function (e) {
                        return this.clone().idivn(e)
                    }, o.prototype.egcd = function (e) {
                        n(0 === e.negative), n(!e.isZero());
                        var t = this,
                            r = e.clone();
                        t = 0 !== t.negative ? t.umod(e) : t.clone();
                        for (var i = new o(1), a = new o(0), u = new o(0), s = new o(1), c = 0; t.isEven() && r.isEven();) t.iushrn(1), r.iushrn(1), ++c;
                        for (var f = r.clone(), l = t.clone(); !t.isZero();) {
                            for (var h = 0, p = 1; 0 == (t.words[0] & p) && h < 26; ++h, p <<= 1);
                            if (h > 0)
                                for (t.iushrn(h); h-- > 0;)(i.isOdd() || a.isOdd()) && (i.iadd(f), a.isub(l)), i.iushrn(1), a.iushrn(1);
                            for (var d = 0, y = 1; 0 == (r.words[0] & y) && d < 26; ++d, y <<= 1);
                            if (d > 0)
                                for (r.iushrn(d); d-- > 0;)(u.isOdd() || s.isOdd()) && (u.iadd(f), s.isub(l)), u.iushrn(1), s.iushrn(1);
                            t.cmp(r) >= 0 ? (t.isub(r), i.isub(u), a.isub(s)) : (r.isub(t), u.isub(i), s.isub(a))
                        }
                        return {
                            a: u,
                            b: s,
                            gcd: r.iushln(c)
                        }
                    }, o.prototype._invmp = function (e) {
                        n(0 === e.negative), n(!e.isZero());
                        var t = this,
                            r = e.clone();
                        t = 0 !== t.negative ? t.umod(e) : t.clone();
                        for (var i, a = new o(1), u = new o(0), s = r.clone(); t.cmpn(1) > 0 && r.cmpn(1) > 0;) {
                            for (var c = 0, f = 1; 0 == (t.words[0] & f) && c < 26; ++c, f <<= 1);
                            if (c > 0)
                                for (t.iushrn(c); c-- > 0;) a.isOdd() && a.iadd(s), a.iushrn(1);
                            for (var l = 0, h = 1; 0 == (r.words[0] & h) && l < 26; ++l, h <<= 1);
                            if (l > 0)
                                for (r.iushrn(l); l-- > 0;) u.isOdd() && u.iadd(s), u.iushrn(1);
                            t.cmp(r) >= 0 ? (t.isub(r), a.isub(u)) : (r.isub(t), u.isub(a))
                        }
                        return (i = 0 === t.cmpn(1) ? a : u).cmpn(0) < 0 && i.iadd(e), i
                    }, o.prototype.gcd = function (e) {
                        if (this.isZero()) return e.abs();
                        if (e.isZero()) return this.abs();
                        var t = this.clone(),
                            r = e.clone();
                        t.negative = 0, r.negative = 0;
                        for (var n = 0; t.isEven() && r.isEven(); n++) t.iushrn(1), r.iushrn(1);
                        for (;;) {
                            for (; t.isEven();) t.iushrn(1);
                            for (; r.isEven();) r.iushrn(1);
                            var i = t.cmp(r);
                            if (i < 0) {
                                var o = t;
                                t = r, r = o
                            } else if (0 === i || 0 === r.cmpn(1)) break;
                            t.isub(r)
                        }
                        return r.iushln(n)
                    }, o.prototype.invm = function (e) {
                        return this.egcd(e).a.umod(e)
                    }, o.prototype.isEven = function () {
                        return 0 == (1 & this.words[0])
                    }, o.prototype.isOdd = function () {
                        return 1 == (1 & this.words[0])
                    }, o.prototype.andln = function (e) {
                        return this.words[0] & e
                    }, o.prototype.bincn = function (e) {
                        n("number" == typeof e);
                        var t = e % 26,
                            r = (e - t) / 26,
                            i = 1 << t;
                        if (this.length <= r) return this._expand(r + 1), this.words[r] |= i, this;
                        for (var o = i, a = r; 0 !== o && a < this.length; a++) {
                            var u = 0 | this.words[a];
                            o = (u += o) >>> 26, u &= 67108863, this.words[a] = u
                        }
                        return 0 !== o && (this.words[a] = o, this.length++), this
                    }, o.prototype.isZero = function () {
                        return 1 === this.length && 0 === this.words[0]
                    }, o.prototype.cmpn = function (e) {
                        var t, r = e < 0;
                        if (0 !== this.negative && !r) return -1;
                        if (0 === this.negative && r) return 1;
                        if (this.strip(), this.length > 1) t = 1;
                        else {
                            r && (e = -e), n(e <= 67108863, "Number is too big");
                            var i = 0 | this.words[0];
                            t = i === e ? 0 : i < e ? -1 : 1
                        }
                        return 0 !== this.negative ? 0 | -t : t
                    }, o.prototype.cmp = function (e) {
                        if (0 !== this.negative && 0 === e.negative) return -1;
                        if (0 === this.negative && 0 !== e.negative) return 1;
                        var t = this.ucmp(e);
                        return 0 !== this.negative ? 0 | -t : t
                    }, o.prototype.ucmp = function (e) {
                        if (this.length > e.length) return 1;
                        if (this.length < e.length) return -1;
                        for (var t = 0, r = this.length - 1; r >= 0; r--) {
                            var n = 0 | this.words[r],
                                i = 0 | e.words[r];
                            if (n !== i) {
                                n < i ? t = -1 : n > i && (t = 1);
                                break
                            }
                        }
                        return t
                    }, o.prototype.gtn = function (e) {
                        return 1 === this.cmpn(e)
                    }, o.prototype.gt = function (e) {
                        return 1 === this.cmp(e)
                    }, o.prototype.gten = function (e) {
                        return this.cmpn(e) >= 0
                    }, o.prototype.gte = function (e) {
                        return this.cmp(e) >= 0
                    }, o.prototype.ltn = function (e) {
                        return -1 === this.cmpn(e)
                    }, o.prototype.lt = function (e) {
                        return -1 === this.cmp(e)
                    }, o.prototype.lten = function (e) {
                        return this.cmpn(e) <= 0
                    }, o.prototype.lte = function (e) {
                        return this.cmp(e) <= 0
                    }, o.prototype.eqn = function (e) {
                        return 0 === this.cmpn(e)
                    }, o.prototype.eq = function (e) {
                        return 0 === this.cmp(e)
                    }, o.red = function (e) {
                        return new k(e)
                    }, o.prototype.toRed = function (e) {
                        return n(!this.red, "Already a number in reduction context"), n(0 === this.negative, "red works only with positives"), e.convertTo(this)._forceRed(e)
                    }, o.prototype.fromRed = function () {
                        return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                    }, o.prototype._forceRed = function (e) {
                        return this.red = e, this
                    }, o.prototype.forceRed = function (e) {
                        return n(!this.red, "Already a number in reduction context"), this._forceRed(e)
                    }, o.prototype.redAdd = function (e) {
                        return n(this.red, "redAdd works only with red numbers"), this.red.add(this, e)
                    }, o.prototype.redIAdd = function (e) {
                        return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, e)
                    }, o.prototype.redSub = function (e) {
                        return n(this.red, "redSub works only with red numbers"), this.red.sub(this, e)
                    }, o.prototype.redISub = function (e) {
                        return n(this.red, "redISub works only with red numbers"), this.red.isub(this, e)
                    }, o.prototype.redShl = function (e) {
                        return n(this.red, "redShl works only with red numbers"), this.red.shl(this, e)
                    }, o.prototype.redMul = function (e) {
                        return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.mul(this, e)
                    }, o.prototype.redIMul = function (e) {
                        return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.imul(this, e)
                    }, o.prototype.redSqr = function () {
                        return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                    }, o.prototype.redISqr = function () {
                        return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                    }, o.prototype.redSqrt = function () {
                        return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                    }, o.prototype.redInvm = function () {
                        return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                    }, o.prototype.redNeg = function () {
                        return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                    }, o.prototype.redPow = function (e) {
                        return n(this.red && !e.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, e)
                    };
                    var v = {
                        k256: null,
                        p224: null,
                        p192: null,
                        p25519: null
                    };
                    function g(e, t) {
                        this.name = e, this.p = new o(t, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                    }
                    function m() {
                        g.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                    }
                    function w() {
                        g.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                    }
                    function x() {
                        g.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                    }
                    function M() {
                        g.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                    }
                    function k(e) {
                        if ("string" == typeof e) {
                            var t = o._prime(e);
                            this.m = t.p, this.prime = t
                        } else n(e.gtn(1), "modulus must be greater than 1"), this.m = e, this.prime = null
                    }
                    function _(e) {
                        k.call(this, e), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                    }
                    g.prototype._tmp = function () {
                        var e = new o(null);
                        return e.words = new Array(Math.ceil(this.n / 13)), e
                    }, g.prototype.ireduce = function (e) {
                        var t, r = e;
                        do {
                            this.split(r, this.tmp), t = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength()
                        } while (t > this.n);
                        var n = t < this.n ? -1 : r.ucmp(this.p);
                        return 0 === n ? (r.words[0] = 0, r.length = 1) : n > 0 ? r.isub(this.p) : r.strip(), r
                    }, g.prototype.split = function (e, t) {
                        e.iushrn(this.n, 0, t)
                    }, g.prototype.imulK = function (e) {
                        return e.imul(this.k)
                    }, i(m, g), m.prototype.split = function (e, t) {
                        for (var r = Math.min(e.length, 9), n = 0; n < r; n++) t.words[n] = e.words[n];
                        if (t.length = r, e.length <= 9) return e.words[0] = 0, void(e.length = 1);
                        var i = e.words[9];
                        for (t.words[t.length++] = 4194303 & i, n = 10; n < e.length; n++) {
                            var o = 0 | e.words[n];
                            e.words[n - 10] = (4194303 & o) << 4 | i >>> 22, i = o
                        }
                        i >>>= 22, e.words[n - 10] = i, 0 === i && e.length > 10 ? e.length -= 10 : e.length -= 9
                    }, m.prototype.imulK = function (e) {
                        e.words[e.length] = 0, e.words[e.length + 1] = 0, e.length += 2;
                        for (var t = 0, r = 0; r < e.length; r++) {
                            var n = 0 | e.words[r];
                            t += 977 * n, e.words[r] = 67108863 & t, t = 64 * n + (t / 67108864 | 0)
                        }
                        return 0 === e.words[e.length - 1] && (e.length--, 0 === e.words[e.length - 1] && e.length--), e
                    }, i(w, g), i(x, g), i(M, g), M.prototype.imulK = function (e) {
                        for (var t = 0, r = 0; r < e.length; r++) {
                            var n = 19 * (0 | e.words[r]) + t,
                                i = 67108863 & n;
                            n >>>= 26, e.words[r] = i, t = n
                        }
                        return 0 !== t && (e.words[e.length++] = t), e
                    }, o._prime = function (e) {
                        if (v[e]) return v[e];
                        var t;
                        if ("k256" === e) t = new m;
                        else if ("p224" === e) t = new w;
                        else if ("p192" === e) t = new x;
                        else {
                            if ("p25519" !== e) throw new Error("Unknown prime " + e);
                            t = new M
                        }
                        return v[e] = t, t
                    }, k.prototype._verify1 = function (e) {
                        n(0 === e.negative, "red works only with positives"), n(e.red, "red works only with red numbers")
                    }, k.prototype._verify2 = function (e, t) {
                        n(0 == (e.negative | t.negative), "red works only with positives"), n(e.red && e.red === t.red, "red works only with red numbers")
                    }, k.prototype.imod = function (e) {
                        return this.prime ? this.prime.ireduce(e)._forceRed(this) : e.umod(this.m)._forceRed(this)
                    }, k.prototype.neg = function (e) {
                        return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this)
                    }, k.prototype.add = function (e, t) {
                        this._verify2(e, t);
                        var r = e.add(t);
                        return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
                    }, k.prototype.iadd = function (e, t) {
                        this._verify2(e, t);
                        var r = e.iadd(t);
                        return r.cmp(this.m) >= 0 && r.isub(this.m), r
                    }, k.prototype.sub = function (e, t) {
                        this._verify2(e, t);
                        var r = e.sub(t);
                        return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this)
                    }, k.prototype.isub = function (e, t) {
                        this._verify2(e, t);
                        var r = e.isub(t);
                        return r.cmpn(0) < 0 && r.iadd(this.m), r
                    }, k.prototype.shl = function (e, t) {
                        return this._verify1(e), this.imod(e.ushln(t))
                    }, k.prototype.imul = function (e, t) {
                        return this._verify2(e, t), this.imod(e.imul(t))
                    }, k.prototype.mul = function (e, t) {
                        return this._verify2(e, t), this.imod(e.mul(t))
                    }, k.prototype.isqr = function (e) {
                        return this.imul(e, e.clone())
                    }, k.prototype.sqr = function (e) {
                        return this.mul(e, e)
                    }, k.prototype.sqrt = function (e) {
                        if (e.isZero()) return e.clone();
                        var t = this.m.andln(3);
                        if (n(t % 2 == 1), 3 === t) {
                            var r = this.m.add(new o(1)).iushrn(2);
                            return this.pow(e, r)
                        }
                        for (var i = this.m.subn(1), a = 0; !i.isZero() && 0 === i.andln(1);) a++, i.iushrn(1);
                        n(!i.isZero());
                        var u = new o(1).toRed(this),
                            s = u.redNeg(),
                            c = this.m.subn(1).iushrn(1),
                            f = this.m.bitLength();
                        for (f = new o(2 * f * f).toRed(this); 0 !== this.pow(f, c).cmp(s);) f.redIAdd(s);
                        for (var l = this.pow(f, i), h = this.pow(e, i.addn(1).iushrn(1)), p = this.pow(e, i), d = a; 0 !== p.cmp(u);) {
                            for (var y = p, v = 0; 0 !== y.cmp(u); v++) y = y.redSqr();
                            n(v < d);
                            var g = this.pow(l, new o(1).iushln(d - v - 1));
                            h = h.redMul(g), l = g.redSqr(), p = p.redMul(l), d = v
                        }
                        return h
                    }, k.prototype.invm = function (e) {
                        var t = e._invmp(this.m);
                        return 0 !== t.negative ? (t.negative = 0, this.imod(t).redNeg()) : this.imod(t)
                    }, k.prototype.pow = function (e, t) {
                        if (t.isZero()) return new o(1).toRed(this);
                        if (0 === t.cmpn(1)) return e.clone();
                        var r = new Array(16);
                        r[0] = new o(1).toRed(this), r[1] = e;
                        for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], e);
                        var i = r[0],
                            a = 0,
                            u = 0,
                            s = t.bitLength() % 26;
                        for (0 === s && (s = 26), n = t.length - 1; n >= 0; n--) {
                            for (var c = t.words[n], f = s - 1; f >= 0; f--) {
                                var l = c >> f & 1;
                                i !== r[0] && (i = this.sqr(i)), 0 !== l || 0 !== a ? (a <<= 1, a |= l, (4 == ++u || 0 === n && 0 === f) && (i = this.mul(i, r[a]), u = 0, a = 0)) : u = 0
                            }
                            s = 26
                        }
                        return i
                    }, k.prototype.convertTo = function (e) {
                        var t = e.umod(this.m);
                        return t === e ? t.clone() : t
                    }, k.prototype.convertFrom = function (e) {
                        var t = e.clone();
                        return t.red = null, t
                    }, o.mont = function (e) {
                        return new _(e)
                    }, i(_, k), _.prototype.convertTo = function (e) {
                        return this.imod(e.ushln(this.shift))
                    }, _.prototype.convertFrom = function (e) {
                        var t = this.imod(e.mul(this.rinv));
                        return t.red = null, t
                    }, _.prototype.imul = function (e, t) {
                        if (e.isZero() || t.isZero()) return e.words[0] = 0, e.length = 1, e;
                        var r = e.imul(t),
                            n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            i = r.isub(n).iushrn(this.shift),
                            o = i;
                        return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : i.cmpn(0) < 0 && (o = i.iadd(this.m)), o._forceRed(this)
                    }, _.prototype.mul = function (e, t) {
                        if (e.isZero() || t.isZero()) return new o(0)._forceRed(this);
                        var r = e.mul(t),
                            n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            i = r.isub(n).iushrn(this.shift),
                            a = i;
                        return i.cmp(this.m) >= 0 ? a = i.isub(this.m) : i.cmpn(0) < 0 && (a = i.iadd(this.m)), a._forceRed(this)
                    }, _.prototype.invm = function (e) {
                        return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this)
                    }
                }(void 0 === e || e, this)
            }).call(this, r(24)(e))
        }, function (e, t, r) {
            r.r(t);
            var n = r(5),
                i = r(4),
                o = r(16);
            function a(e) {
                if (!e) throw new Error("No supported backend.");
                return e.subtle || e.nonZeroByteSubtle
            }
            function u(e) {
                return !!Object(i.supportsWebCrypto)(e) && e.crypto.subtle
            }
            r.d(t, "getWebCryptoBackend", (function () {
                return c
            })), r.d(t, "configureFallback", (function () {
                return f
            })), r.d(t, "getNonZeroByteBackend", (function () {
                return a
            }));
            var s = function (e) {
                    var t, r, n, a = (t = m(regeneratorRuntime.mark((function c(e) {
                            var t;
                            return regeneratorRuntime.wrap((function (r) {
                                for (;;) switch (r.prev = r.next) {
                                case 0:
                                    if (t = u(e), r.t0 = !t, r.t0) {
                                        r.next = 6;
                                        break
                                    }
                                    return r.next = 5, Object(i.supportsZeroByteGCM)(t);
                                case 5:
                                    r.t0 = !r.sent;
                                case 6:
                                    return r.abrupt("return", r.t0);
                                case 7:
                                case "end":
                                    return r.stop()
                                }
                            }), c)
                        }))), function (e) {
                            return t.apply(this, arguments)
                        })(e),
                        s = !1;
                    return {
                        getWebCryptoBackend: (n = m(regeneratorRuntime.mark((function f() {
                            var t, r, n;
                            return regeneratorRuntime.wrap((function (i) {
                                for (;;) switch (i.prev = i.next) {
                                case 0:
                                    return i.prev = 0, i.next = 3, Object(o.randomValuesOnly)(1);
                                case 3:
                                    i.next = 8;
                                    break;
                                case 5:
                                    return i.prev = 5, i.t0 = i["catch"](0), i.abrupt("return", !1);
                                case 8:
                                    return t = u(e), i.next = 11, a;
                                case 11:
                                    return r = i.sent, i.next = 14, s;
                                case 14:
                                    return n = i.sent, i.abrupt("return", !r && t ? {
                                        subtle: t,
                                        randomValues: o.randomValuesOnly
                                    } : r && t && n ? {
                                        nonZeroByteSubtle: t,
                                        randomValues: o.randomValuesOnly,
                                        zeroByteSubtle: n
                                    } : !(!r || t || !n) && {
                                        subtle: n,
                                        randomValues: o.randomValuesOnly
                                    });
                                case 16:
                                case "end":
                                    return i.stop()
                                }
                            }), f, null, [
                                [0, 5]
                            ])
                        }))), function () {
                            return n.apply(this, arguments)
                        }),
                        configureFallback: (r = m(regeneratorRuntime.mark((function l(e) {
                            return regeneratorRuntime.wrap((function (t) {
                                for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (t.t0 = void 0 !== e, !t.t0) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.next = 4, a;
                                case 4:
                                    t.t0 = t.sent;
                                case 5:
                                    if (!t.t0) {
                                        t.next = 11;
                                        break
                                    }
                                    if (!s) {
                                        t.next = 8;
                                        break
                                    }
                                    throw new Error("Fallback reconfiguration denied");
                                case 8:
                                    if (Object(i.supportsSubtleCrypto)(e)) {
                                        t.next = 10;
                                        break
                                    }
                                    throw new Error("Fallback does not support WebCrypto");
                                case 10:
                                    return t.abrupt("return", s = Object(i.supportsZeroByteGCM)(e).then((function (t) {
                                        if (!t) throw new Error("Fallback does not support zero byte AES-GCM");
                                        return e
                                    })));
                                case 11:
                                case "end":
                                    return t.stop()
                                }
                            }), l)
                        }))), function (e) {
                            return r.apply(this, arguments)
                        })
                    }
                }(Object(n.locateWindow)()),
                c = s.getWebCryptoBackend,
                f = s.configureFallback
        }, function (e, t, r) {
            r.r(t);
            var n, i = r(3);
            ! function (e) {
                e[e.aes_128_gcm_iv12_tag16 = 20] = "aes_128_gcm_iv12_tag16", e[e.aes_192_gcm_iv12_tag16 = 70] = "aes_192_gcm_iv12_tag16", e[e.aes_256_gcm_iv12_tag16 = 120] = "aes_256_gcm_iv12_tag16", e[e.aes_128_gcm_iv12_tag16_hkdf_sha256 = 276] = "aes_128_gcm_iv12_tag16_hkdf_sha256", e[e.aes_192_gcm_iv12_tag16_hkdf_sha256 = 326] = "aes_192_gcm_iv12_tag16_hkdf_sha256", e[e.aes_256_gcm_iv12_tag16_hkdf_sha256 = 376] = "aes_256_gcm_iv12_tag16_hkdf_sha256", e[e.aes_128_gcm_iv12_tag16_hkdf_sha256_ecdsa_p256 = 532] = "aes_128_gcm_iv12_tag16_hkdf_sha256_ecdsa_p256", e[e.aes_192_gcm_iv12_tag16_hkdf_sha384_ecdsa_p384 = 838] = "aes_192_gcm_iv12_tag16_hkdf_sha384_ecdsa_p384", e[e.aes_256_gcm_iv12_tag16_hkdf_sha384_ecdsa_p384 = 888] = "aes_256_gcm_iv12_tag16_hkdf_sha384_ecdsa_p384"
            }(n || (n = {})), Object.freeze(n);
            var o = Object.keys(n).filter((function (e) {
                return !parseInt(e)
            }));
            Object.freeze(o);
            var a = function A() {
                v(this, A)
            };
            function u() {
                return o.slice()
            }
            Object(i.a)(a);
            var s = Object.freeze([Object.freeze({
                    id: 20,
                    name: "aes_128_gcm_iv12_tag16",
                    encryption: "AES-GCM",
                    keyLength: 128,
                    ivLength: 12,
                    tagLength: 128,
                    cacheSafe: !1
                }), Object.freeze({
                    id: 70,
                    name: "aes_192_gcm_iv12_tag16",
                    encryption: "AES-GCM",
                    keyLength: 192,
                    ivLength: 12,
                    tagLength: 128,
                    cacheSafe: !1
                }), Object.freeze({
                    id: 120,
                    name: "aes_256_gcm_iv12_tag16",
                    encryption: "AES-GCM",
                    keyLength: 256,
                    ivLength: 12,
                    tagLength: 128,
                    cacheSafe: !1
                }), Object.freeze({
                    id: 276,
                    name: "aes_128_gcm_iv12_tag16_hkdf_sha256",
                    encryption: "AES-GCM",
                    keyLength: 128,
                    ivLength: 12,
                    tagLength: 128,
                    kdf: "HKDF",
                    kdfHash: "SHA-256",
                    cacheSafe: !0
                }), Object.freeze({
                    id: 326,
                    name: "aes_192_gcm_iv12_tag16_hkdf_sha256",
                    encryption: "AES-GCM",
                    keyLength: 192,
                    ivLength: 12,
                    tagLength: 128,
                    kdf: "HKDF",
                    kdfHash: "SHA-256",
                    cacheSafe: !0
                }), Object.freeze({
                    id: 376,
                    name: "aes_256_gcm_iv12_tag16_hkdf_sha256",
                    encryption: "AES-GCM",
                    keyLength: 256,
                    ivLength: 12,
                    tagLength: 128,
                    kdf: "HKDF",
                    kdfHash: "SHA-256",
                    cacheSafe: !0
                }), Object.freeze({
                    id: 532,
                    name: "aes_128_gcm_iv12_tag16_hkdf_sha256_ecdsa_p256",
                    encryption: "AES-GCM",
                    keyLength: 128,
                    ivLength: 12,
                    tagLength: 128,
                    kdf: "HKDF",
                    kdfHash: "SHA-256",
                    cacheSafe: !0,
                    signatureCurve: "P-256",
                    signatureHash: "SHA-256"
                }), Object.freeze({
                    id: 838,
                    name: "aes_192_gcm_iv12_tag16_hkdf_sha384_ecdsa_p384",
                    encryption: "AES-GCM",
                    keyLength: 192,
                    ivLength: 12,
                    tagLength: 128,
                    kdf: "HKDF",
                    kdfHash: "SHA-384",
                    cacheSafe: !0,
                    signatureCurve: "P-384",
                    signatureHash: "SHA-384"
                }), Object.freeze({
                    id: 888,
                    name: "aes_256_gcm_iv12_tag16_hkdf_sha384_ecdsa_p384",
                    encryption: "AES-GCM",
                    keyLength: 256,
                    ivLength: 12,
                    tagLength: 128,
                    kdf: "HKDF",
                    kdfHash: "SHA-384",
                    cacheSafe: !0,
                    signatureCurve: "P-384",
                    signatureHash: "SHA-384"
                })]),
                c = function (e) {
                    function t(e) {
                        var r;
                        v(this, t), r = l(this, h(t).call(this));
                        var n = s.find((function (t) {
                            return e === t.id
                        }));
                        if (void 0 === n) throw new Error("Unsupported id: ".concat(e));
                        return Object.assign(p(r), n), Object.freeze(p(r)), r
                    }
                    return d(t, e), t
                }(a);
            function f(e) {
                if (!o.includes(e)) throw new Error("Unsupported name ".concat(e));
                return new c(n[e])
            }
            Object(i.a)(c);
            var y = Object.freeze([Object.freeze({
                    id: 20,
                    name: "aes_128_gcm_iv12_tag16",
                    encryption: "aes-128-gcm",
                    keyLength: 128,
                    ivLength: 12,
                    tagLength: 128,
                    cacheSafe: !1
                }), Object.freeze({
                    id: 70,
                    name: "aes_192_gcm_iv12_tag16",
                    encryption: "aes-192-gcm",
                    keyLength: 192,
                    ivLength: 12,
                    tagLength: 128,
                    cacheSafe: !1
                }), Object.freeze({
                    id: 120,
                    name: "aes_256_gcm_iv12_tag16",
                    encryption: "aes-256-gcm",
                    keyLength: 256,
                    ivLength: 12,
                    tagLength: 128,
                    cacheSafe: !1
                }), Object.freeze({
                    id: 276,
                    name: "aes_128_gcm_iv12_tag16_hkdf_sha256",
                    encryption: "aes-128-gcm",
                    keyLength: 128,
                    ivLength: 12,
                    tagLength: 128,
                    kdf: "HKDF",
                    kdfHash: "sha256",
                    cacheSafe: !0
                }), Object.freeze({
                    id: 326,
                    name: "aes_192_gcm_iv12_tag16_hkdf_sha256",
                    encryption: "aes-192-gcm",
                    keyLength: 192,
                    ivLength: 12,
                    tagLength: 128,
                    kdf: "HKDF",
                    kdfHash: "sha256",
                    cacheSafe: !0
                }), Object.freeze({
                    id: 376,
                    name: "aes_256_gcm_iv12_tag16_hkdf_sha256",
                    encryption: "aes-256-gcm",
                    keyLength: 256,
                    ivLength: 12,
                    tagLength: 128,
                    kdf: "HKDF",
                    kdfHash: "sha256",
                    cacheSafe: !0
                }), Object.freeze({
                    id: 532,
                    name: "aes_128_gcm_iv12_tag16_hkdf_sha256_ecdsa_p256",
                    encryption: "aes-128-gcm",
                    keyLength: 128,
                    ivLength: 12,
                    tagLength: 128,
                    kdf: "HKDF",
                    kdfHash: "sha256",
                    cacheSafe: !0,
                    signatureCurve: "prime256v1",
                    signatureHash: "sha256"
                }), Object.freeze({
                    id: 838,
                    name: "aes_192_gcm_iv12_tag16_hkdf_sha384_ecdsa_p384",
                    encryption: "aes-192-gcm",
                    keyLength: 192,
                    ivLength: 12,
                    tagLength: 128,
                    kdf: "HKDF",
                    kdfHash: "sha384",
                    cacheSafe: !0,
                    signatureCurve: "secp384r1",
                    signatureHash: "sha384"
                }), Object.freeze({
                    id: 888,
                    name: "aes_256_gcm_iv12_tag16_hkdf_sha384_ecdsa_p384",
                    encryption: "aes-256-gcm",
                    keyLength: 256,
                    ivLength: 12,
                    tagLength: 128,
                    kdf: "HKDF",
                    kdfHash: "sha384",
                    cacheSafe: !0,
                    signatureCurve: "secp384r1",
                    signatureHash: "sha384"
                })]),
                g = function (e) {
                    function t(e) {
                        var r;
                        v(this, t), r = l(this, h(t).call(this));
                        var n = y.find((function (t) {
                            return e === t.id
                        }));
                        if (void 0 === n) throw new Error("Unsupported type ".concat(e));
                        return Object.assign(p(r), n), Object.freeze(p(r)), r
                    }
                    return d(t, e), t
                }(a);
            function m(e) {
                if (!o.includes(e)) throw new Error("Unsupported name ".concat(e));
                return new g(n[e])
            }
            Object.setPrototypeOf(g.prototype, null), Object.freeze(g.prototype), Object.freeze(g);
            var b = r(12),
                w = r(14),
                x = r(8),
                M = r(10),
                k = r(15),
                _ = r(11),
                E = r(9);
            r.d(t, "AlgorithmSuiteIdentifier", (function () {
                return n
            })), r.d(t, "AlgorithmSuiteNames", (function () {
                return o
            })), r.d(t, "AlgorithmSuite", (function () {
                return a
            })), r.d(t, "getAlgorithmSuiteNames", (function () {
                return u
            })), r.d(t, "WebCryptoAlgorithmSuite", (function () {
                return c
            })), r.d(t, "getWebCryptoAlgorithm", (function () {
                return f
            })), r.d(t, "NodeAlgorithmSuite", (function () {
                return g
            })), r.d(t, "getNodeAlgorithm", (function () {
                return m
            })), r.d(t, "MasterKey", (function () {
                return b.a
            })), r.d(t, "MasterKeyProvider", (function () {
                return w.a
            })), r.d(t, "MaterialsManager", (function () {
                return x.a
            })), r.d(t, "DataKey", (function () {
                return M.a
            })), r.d(t, "SignatureKey", (function () {
                return k.a
            })), r.d(t, "VerificationKey", (function () {
                return k.b
            })), r.d(t, "EncryptedDataKey", (function () {
                return _.a
            })), r.d(t, "ENCODED_SIGNER_KEY", (function () {
                return E.c
            })), r.d(t, "SerializationVersion", (function () {
                return E.f
            })), r.d(t, "ContentType", (function () {
                return E.b
            })), r.d(t, "ContentAADString", (function () {
                return E.a
            })), r.d(t, "ObjectType", (function () {
                return E.d
            })), r.d(t, "SequenceIdentifier", (function () {
                return E.e
            })), r.d(t, "immutableClass", (function () {
                return i.a
            })), r.d(t, "safeBinaryGetter", (function () {
                return i.c
            })), r.d(t, "readOnlyProperty", (function () {
                return i.b
            }))
        }, function (e, t, r) {
            function n(e) {
                return Object.freeze(e), Object.getOwnPropertyNames(e.prototype).filter((function (e) {
                    return "constructor" !== e
                })).forEach((function (t) {
                    return Object.defineProperty(e.prototype, t, {
                        writable: !1
                    })
                })), Object.seal(e.prototype), e
            }
            function i(e, t, r) {
                var n = new Uint8Array(r);
                Object.defineProperty(e, t, {
                    get: function () {
                        return new Uint8Array(n)
                    },
                    enumerable: !0
                })
            }
            function o(e, t, r) {
                Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0
                })
            }
            r.d(t, "a", (function () {
                return n
            })), r.d(t, "c", (function () {
                return i
            })), r.d(t, "b", (function () {
                return o
            }))
        }, function (e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), r(7).__exportStar(r(18), t)
        }, function (e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = {};
            t.locateWindow = function () {
                return "undefined" != typeof window ? window : "undefined" != typeof self ? self : r
            }
        }, function (e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            for (var n = {}, i = new Array(64), o = 0, a = "A".charCodeAt(0), u = "Z".charCodeAt(0); o + a <= u; o++) {
                var s = String.fromCharCode(o + a);
                n[s] = o, i[o] = s
            }
            for (o = 0, a = "a".charCodeAt(0), u = "z".charCodeAt(0); o + a <= u; o++) {
                s = String.fromCharCode(o + a);
                var c = o + 26;
                n[s] = c, i[c] = s
            }
            for (o = 0; o < 10; o++) n[o.toString(10)] = o + 52, s = o.toString(10), c = o + 52, n[s] = c, i[c] = s;
            n["+"] = 62, i[62] = "+", n["/"] = 63, i[63] = "/";
            t.fromBase64 = function (e) {
                var t = e.length / 4 * 3;
                "==" === e.substr(-2) ? t -= 2 : "=" === e.substr(-1) && t--;
                for (var r = new ArrayBuffer(t), i = new DataView(r), o = 0; o < e.length; o += 4) {
                    for (var a = 0, u = 0, s = o, c = o + 3; s <= c; s++) "=" !== e[s] ? (a |= n[e[s]] << 6 * (c - s), u += 6) : a >>= 6;
                    var f = o / 4 * 3;
                    a >>= u % 8;
                    for (var l = Math.floor(u / 8), h = 0; h < l; h++) {
                        var p = 8 * (l - h - 1);
                        i.setUint8(f + h, (a & 255 << p) >> p)
                    }
                }
                return new Uint8Array(r)
            }, t.toBase64 = function (e) {
                for (var t = "", r = 0; r < e.length; r += 3) {
                    for (var n = 0, o = 0, a = r, u = Math.min(r + 3, e.length); a < u; a++) n |= e[a] << 8 * (u - a - 1), o += 8;
                    var s = Math.ceil(o / 6);
                    n <<= 6 * s - o;
                    for (var c = 1; c <= s; c++) {
                        var f = 6 * (s - c);
                        t += i[(n & 63 << f) >> f]
                    }
                    t += "==".slice(0, 4 - s)
                }
                return t
            }
        }, function (e, t, r) {
            r.r(t), r.d(t, "__extends", (function () {
                return i
            })), r.d(t, "__assign", (function () {
                return o
            })), r.d(t, "__rest", (function () {
                return a
            })), r.d(t, "__decorate", (function () {
                return u
            })), r.d(t, "__param", (function () {
                return s
            })), r.d(t, "__metadata", (function () {
                return c
            })), r.d(t, "__awaiter", (function () {
                return f
            })), r.d(t, "__generator", (function () {
                return l
            })), r.d(t, "__exportStar", (function () {
                return h
            })), r.d(t, "__values", (function () {
                return p
            })), r.d(t, "__read", (function () {
                return d
            })), r.d(t, "__spread", (function () {
                return y
            })), r.d(t, "__await", (function () {
                return v
            })), r.d(t, "__asyncGenerator", (function () {
                return g
            })), r.d(t, "__asyncDelegator", (function () {
                return m
            })), r.d(t, "__asyncValues", (function () {
                return w
            })), r.d(t, "__makeTemplateObject", (function () {
                return x
            })), r.d(t, "__importStar", (function () {
                return M
            })), r.d(t, "__importDefault", (function () {
                return k
            }));
            var n = function (e, t) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                    })(e, t)
            };
            function i(e, t) {
                function r() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
            var o = function () {
                return (o = Object.assign || function (e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }).apply(this, arguments)
            };
            function a(e, t) {
                var r = {};
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var i = 0;
                    for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && (r[n[i]] = e[n[i]])
                }
                return r
            }
            function u(e, t, r, n) {
                var i, o = arguments.length,
                    a = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                if ("object" == ("undefined" == typeof Reflect ? "undefined" : b(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, n);
                else
                    for (var u = e.length - 1; u >= 0; u--)(i = e[u]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, r, a) : i(t, r)) || a);
                return o > 3 && a && Object.defineProperty(t, r, a), a
            }
            function s(e, t) {
                return function (r, n) {
                    t(r, n, e)
                }
            }
            function c(e, t) {
                if ("object" == ("undefined" == typeof Reflect ? "undefined" : b(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            }
            function f(e, t, r, n) {
                return new(r || (r = Promise))((function (i, o) {
                    function a(e) {
                        try {
                            s(n.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }
                    function u(e) {
                        try {
                            s(n["throw"](e))
                        } catch (e) {
                            o(e)
                        }
                    }
                    function s(e) {
                        e.done ? i(e.value) : new r((function (t) {
                            t(e.value)
                        })).then(a, u)
                    }
                    s((n = n.apply(e, t || [])).next())
                }))
            }
            function l(e, t) {
                var r, n, i, o, a = {
                    label: 0,
                    sent: function () {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: u(0),
                    "throw": u(1),
                    "return": u(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
                    return this
                }), o;
                function u(o) {
                    return function (u) {
                        return function (o) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (r = 1, n && (i = 2 & o[0] ? n["return"] : o[0] ? n["throw"] || ((i = n["return"]) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                                switch (n = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, n = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < i[1]) {
                                        a.label = i[1], i = o;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2], a.ops.push(o);
                                        break
                                    }
                                    i[2] && a.ops.pop(), a.trys.pop();
                                    continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e], n = 0
                            } finally {
                                r = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, u])
                    }
                }
            }
            function h(e, t) {
                for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r])
            }
            function p(e) {
                var t = "function" == typeof Symbol && e[Symbol.iterator],
                    r = 0;
                return t ? t.call(e) : {
                    next: function () {
                        return e && r >= e.length && (e = void 0), {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                }
            }
            function d(e, t) {
                var r = "function" == typeof Symbol && e[Symbol.iterator];
                if (!r) return e;
                var n, i, o = r.call(e),
                    a = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(n = o.next()).done;) a.push(n.value)
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        n && !n.done && (r = o["return"]) && r.call(o)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return a
            }
            function y() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(d(arguments[t]));
                return e
            }
            function v(e) {
                return this instanceof v ? (this.v = e, this) : new v(e)
            }
            function g(e, t, r) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var n, i = r.apply(e, t || []),
                    o = [];
                return n = {}, a("next"), a("throw"), a("return"), n[Symbol.asyncIterator] = function () {
                    return this
                }, n;
                function a(e) {
                    i[e] && (n[e] = function (t) {
                        return new Promise((function (r, n) {
                            o.push([e, t, r, n]) > 1 || u(e, t)
                        }))
                    })
                }
                function u(e, t) {
                    try {
                        ! function (e) {
                            e.value instanceof v ? Promise.resolve(e.value.v).then(s, c) : f(o[0][2], e)
                        }(i[e](t))
                    } catch (e) {
                        f(o[0][3], e)
                    }
                }
                function s(e) {
                    u("next", e)
                }
                function c(e) {
                    u("throw", e)
                }
                function f(e, t) {
                    e(t), o.shift(), o.length && u(o[0][0], o[0][1])
                }
            }
            function m(e) {
                var t, r;
                return t = {}, n("next"), n("throw", (function (e) {
                    throw e
                })), n("return"), t[Symbol.iterator] = function () {
                    return this
                }, t;
                function n(n, i) {
                    t[n] = e[n] ? function (t) {
                        return (r = !r) ? {
                            value: v(e[n](t)),
                            done: "return" === n
                        } : i ? i(t) : t
                    } : i
                }
            }
            function w(e) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var t, r = e[Symbol.asyncIterator];
                return r ? r.call(e) : (e = p(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function () {
                    return this
                }, t);
                function n(r) {
                    t[r] = e[r] && function (t) {
                        return new Promise((function (n, i) {
                            ! function (e, t, r, n) {
                                Promise.resolve(n).then((function (t) {
                                    e({
                                        value: t,
                                        done: r
                                    })
                                }), t)
                            }(n, i, (t = e[r](t)).done, t.value)
                        }))
                    }
                }
            }
            function x(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e
            }
            function M(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t["default"] = e, t
            }
            function k(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }
        }, function (e, t, r) {
            r.d(t, "a", (function () {
                return i
            }));
            var n = r(3),
                i = function o(e) {
                    var t = e.keyProvider;
                    v(this, o), Object(n.b)(this, "keyProvider", t)
                };
            Object.setPrototypeOf(i.prototype, null), Object(n.a)(i)
        }, function (e, t, r) {
            r.d(t, "c", (function () {
                return s
            })), r.d(t, "f", (function () {
                return n
            })), r.d(t, "b", (function () {
                return i
            })), r.d(t, "a", (function () {
                return o
            })), r.d(t, "d", (function () {
                return a
            })), r.d(t, "e", (function () {
                return u
            }));
            var n, i, o, a, u, s = "aws-crypto-public-key";
            ! function (e) {
                e[e.V1 = 1] = "V1"
            }(n || (n = {})),
            function (e) {
                e[e.NO_FRAMING = 1] = "NO_FRAMING", e[e.FRAMED_DATA = 2] = "FRAMED_DATA"
            }(i || (i = {})),
            function (e) {
                e.FRAME_STRING_ID = "AWSKMSEncryptionClient Frame", e.FINAL_FRAME_STRING_ID = "AWSKMSEncryptionClient Final Frame", e.NON_FRAMED_STRING_ID = "AWSKMSEncryptionClient Single Block"
            }(o || (o = {})),
            function (e) {
                e[e.CUSTOMER_AE_DATA = 128] = "CUSTOMER_AE_DATA"
            }(a || (a = {})),
            function (e) {
                e[e.SEQUENCE_NUMBER_END = 4294967295] = "SEQUENCE_NUMBER_END"
            }(u || (u = {}))
        }, function (e, t, r) {
            r.d(t, "a", (function () {
                return i
            }));
            var n = r(11),
                i = function o(e) {
                    v(this, o);
                    var t = e.getKeyBytes,
                        r = e.rawKeyBytes,
                        i = e.encryptedDataKeys,
                        a = void 0 === i ? [] : i,
                        s = e.encryptionContext,
                        f = e.providerId,
                        l = e.keyInfo,
                        h = e.algorithm,
                        p = e.cryptoKey;
                    if ("function" == typeof t) {
                        var d = new Uint8Array(t());
                        this.getKeyBytes = function () {
                            return new Uint8Array(d)
                        }
                    } else if (void 0 !== r) {
                        var y = new Uint8Array(r);
                        this.getKeyBytes = function () {
                            return new Uint8Array(y)
                        }
                    }
                    if (void 0 === this.getKeyBytes && void 0 === p) throw new Error("Data Key without key not supported");
                    for (var g = arguments.length, m = new Array(g > 1 ? g - 1 : 0), b = 1; b < g; b++) m[b - 1] = arguments[b];
                    this.encryptionContext = c({}, s), Object.freeze(this.encryptionContext), this.providerId = f, this.keyInfo = l, this.algorithm = h, this.cryptoKey = p, this.encryptedDataKeys = [].concat(u(a || []), m).map((function (e) {
                        if (!(e instanceof n.a)) throw new Error("Unsupported instance of additionalEncryptedDataKey");
                        return e
                    })), Object.freeze(this.encryptedDataKeys), Object.freeze(this)
                };
            Object.setPrototypeOf(i.prototype, null), Object.freeze(i.prototype), Object.freeze(i)
        }, function (e, t, r) {
            r.d(t, "a", (function () {
                return i
            }));
            var n = r(3),
                i = function o(e, t, r) {
                    if (v(this, o), "string" != typeof e) throw new Error("Unsupported keyInfo");
                    if ("string" != typeof t) throw new Error("Unsupported providerId");
                    if (!(r instanceof Uint8Array)) throw new Error("Unsupported encryptedDataKey");
                    this.keyInfo = e, this.providerId = t, Object(n.c)(this, "encryptedDataKey", r), Object.freeze(this)
                };
            Object.setPrototypeOf(i.prototype, null), Object.freeze(i.prototype), Object.freeze(i)
        }, function (e, t, r) {
            r.d(t, "a", (function () {
                return o
            }));
            var n = r(3),
                i = r(13),
                o = function () {
                    function e(t) {
                        var r = t.keyId,
                            i = t.providerId;
                        if (v(this, e), this.constructor === e) throw new Error("new MasterKey is not valid, use an implemented MasterKey");
                        if (!r || !i) throw new Error("Master Key requires keyId and providerId");
                        if ("string" != typeof r || "string" != typeof i) throw new Error("keyId and providerId must be strings");
                        Object(n.b)(this, "keyId", r), Object(n.b)(this, "providerId", i)
                    }
                    var t, r, o;
                    return a(e, [{
                        key: "ownsEncryptDataKey",
                        value: function (e) {
                            return this.keyId === e.keyInfo && this.providerId === e.providerId
                        }
                    }, {
                        key: "ownsDecryptDataKey",
                        value: function (e) {
                            return this.keyId === e.keyInfo && this.providerId === e.providerId
                        }
                    }, {
                        key: "masterKeysForEncrypt",
                        value: regeneratorRuntime.mark((function u(e) {
                            return regeneratorRuntime.wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this;
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                            }), u, this)
                        }))
                    }, {
                        key: "masterKeysForDecrypt",
                        value: regeneratorRuntime.mark((function s(e) {
                            return regeneratorRuntime.wrap((function (t) {
                                for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (!e) {
                                        t.next = 7;
                                        break
                                    }
                                    if (t.t0 = this.ownsDecryptDataKey(e), !t.t0) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.next = 5, this;
                                case 5:
                                    t.next = 9;
                                    break;
                                case 7:
                                    return t.next = 9, this;
                                case 9:
                                case "end":
                                    return t.stop()
                                }
                            }), s, this)
                        }))
                    }, {
                        key: "generateDataKey",
                        value: (o = m(regeneratorRuntime.mark((function c(e, t) {
                            var r, n;
                            return regeneratorRuntime.wrap((function (i) {
                                for (;;) switch (i.prev = i.next) {
                                case 0:
                                    return i.next = 2, this._generateDataKey(e, t);
                                case 2:
                                    if (void 0 !== (r = i.sent).getKeyBytes) {
                                        i.next = 5;
                                        break
                                    }
                                    throw new Error("Unable to confirm key length");
                                case 5:
                                    if ((n = r.getKeyBytes().byteLength) === e.keyLength / 8) {
                                        i.next = 8;
                                        break
                                    }
                                    throw new Error("Key length  [".concat(n, "] does not match Algorithm Suite keyLength [").concat(e.keyLength / 8, "]"));
                                case 8:
                                    return i.abrupt("return", r);
                                case 9:
                                case "end":
                                    return i.stop()
                                }
                            }), c, this)
                        }))), function (e, t) {
                            return o.apply(this, arguments)
                        })
                    }, {
                        key: "encryptDataKey",
                        value: (r = m(regeneratorRuntime.mark((function f(e) {
                            var t = this;
                            return regeneratorRuntime.wrap((function (r) {
                                for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return r.abrupt("return", e.encryptedDataKeys.some((function (e) {
                                        return t.ownsEncryptDataKey(e)
                                    })) ? e : this._encryptDataKey(e));
                                case 1:
                                case "end":
                                    return r.stop()
                                }
                            }), f, this)
                        }))), function (e) {
                            return r.apply(this, arguments)
                        })
                    }, {
                        key: "decryptDataKey",
                        value: (t = m(regeneratorRuntime.mark((function l(e, t) {
                            var r, n, o, a = arguments;
                            return regeneratorRuntime.wrap((function (u) {
                                for (;;) switch (u.prev = u.next) {
                                case 0:
                                    for (r = a.length, n = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++) n[o - 2] = a[o];
                                    return u.abrupt("return", Object(i.a)(n, this, (function (r) {
                                        var n = r.masterKey,
                                            i = r.encryptedDataKey;
                                        return n._decryptDataKey(e, t, i)
                                    })));
                                case 2:
                                case "end":
                                    return u.stop()
                                }
                            }), l, this)
                        }))), function (e, r) {
                            return t.apply(this, arguments)
                        })
                    }]), e
                }();
            Object.setPrototypeOf(o.prototype, null), Object(n.a)(o)
        }, function (e, t, r) {
            var n = regeneratorRuntime.mark(o);
            function i(e, t, r) {
                var n = regeneratorRuntime.mark((function a(e, t) {
                        var r, n, i, u, s, c;
                        return regeneratorRuntime.wrap((function (a) {
                            for (;;) switch (a.prev = a.next) {
                            case 0:
                                r = !0, n = !1, i = undefined, a.prev = 3, u = new Set(e).values()[Symbol.iterator]();
                            case 5:
                                if (r = (s = u.next()).done) {
                                    a.next = 11;
                                    break
                                }
                                return c = s.value, a.delegateYield(o(c, t), "t0", 8);
                            case 8:
                                r = !0, a.next = 5;
                                break;
                            case 11:
                                a.next = 17;
                                break;
                            case 13:
                                a.prev = 13, a.t1 = a["catch"](3), n = !0, i = a.t1;
                            case 17:
                                a.prev = 17, a.prev = 18, r || null == u["return"] || u["return"]();
                            case 20:
                                if (a.prev = 20, !n) {
                                    a.next = 23;
                                    break
                                }
                                throw i;
                            case 23:
                                return a.finish(20);
                            case 24:
                                return a.finish(17);
                            case 25:
                            case "end":
                                return a.stop()
                            }
                        }), a, null, [
                            [3, 13, 17, 25],
                            [18, , 20, 24]
                        ])
                    }))(e, t),
                    i = 0;
                return function u() {
                    var e = n.next(),
                        t = e.value;
                    if (e.done) {
                        if (0 === i) throw new Error("Encrypted Data Key not owned by Master Key");
                        throw new Error("Unable to Decrypt Encrypted Data Keys")
                    }
                    return i += 1, r(t)["catch"](u)
                }()
            }
            function o(e, t) {
                var r, i, o, a, u, s;
                return regeneratorRuntime.wrap((function (n) {
                    for (;;) switch (n.prev = n.next) {
                    case 0:
                        r = !0, i = !1, o = undefined, n.prev = 3, a = t.masterKeysForDecrypt(e)[Symbol.iterator]();
                    case 5:
                        if (r = (u = a.next()).done) {
                            n.next = 12;
                            break
                        }
                        return s = u.value, n.next = 9, {
                            masterKey: s,
                            encryptedDataKey: e
                        };
                    case 9:
                        r = !0, n.next = 5;
                        break;
                    case 12:
                        n.next = 18;
                        break;
                    case 14:
                        n.prev = 14, n.t0 = n["catch"](3), i = !0, o = n.t0;
                    case 18:
                        n.prev = 18, n.prev = 19, r || null == a["return"] || a["return"]();
                    case 21:
                        if (n.prev = 21, !i) {
                            n.next = 24;
                            break
                        }
                        throw o;
                    case 24:
                        return n.finish(21);
                    case 25:
                        return n.finish(18);
                    case 26:
                    case "end":
                        return n.stop()
                    }
                }), n, null, [
                    [3, 14, 18, 26],
                    [19, , 21, 25]
                ])
            }
            r.d(t, "a", (function () {
                return i
            }))
        }, function (e, t, r) {
            r.d(t, "a", (function () {
                return s
            }));
            var n = r(12),
                i = r(3),
                o = r(13),
                s = function () {
                    function e(t) {
                        var r = t.providerId,
                            n = t.keys,
                            o = void 0 === n ? [] : n,
                            a = t.keysForEncrypt,
                            s = void 0 === a ? [] : a,
                            c = t.keysForDecrypt,
                            f = void 0 === c ? [] : c;
                        if (v(this, e), !r || "string" != typeof r) throw new Error("A string providerId is required");
                        if (![].concat(u(o), u(s), u(f)).every(e.isMaterialProvider)) throw new Error("Unsupported Instance");
                        var l = new Set([].concat(u(o), u(s))),
                            h = new Set([].concat(u(o), u(f)));
                        this._iteratorForEncrypt = function () {
                            return l.values()
                        }, this._iteratorForDecrypt = function () {
                            return h.values()
                        }, Object(i.b)(this, "providerId", r)
                    }
                    var t;
                    return a(e, [{
                        key: "ownsEncryptDataKey",
                        value: function (e) {
                            var t = !0,
                                r = !1,
                                n = undefined;
                            try {
                                for (var i, o = this.masterKeysForEncrypt()[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                                    if (i.value.ownsEncryptDataKey(e)) return !0
                                }
                            } catch (a) {
                                r = !0, n = a
                            } finally {
                                try {
                                    t || null == o["return"] || o["return"]()
                                } finally {
                                    if (r) throw n
                                }
                            }
                            return !1
                        }
                    }, {
                        key: "ownsDecryptDataKey",
                        value: function (e) {
                            var t = !0,
                                r = !1,
                                n = undefined;
                            try {
                                for (var i, o = this.masterKeysForDecrypt()[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                                    if (i.value.ownsDecryptDataKey(e)) return !0
                                }
                            } catch (a) {
                                r = !0, n = a
                            } finally {
                                try {
                                    t || null == o["return"] || o["return"]()
                                } finally {
                                    if (r) throw n
                                }
                            }
                            return !1
                        }
                    }, {
                        key: "masterKeysForEncrypt",
                        value: regeneratorRuntime.mark((function r(e) {
                            var t, n, i, o, a, u;
                            return regeneratorRuntime.wrap((function (r) {
                                for (;;) switch (r.prev = r.next) {
                                case 0:
                                    t = !0, n = !1, i = undefined, r.prev = 3, o = this._iteratorForEncrypt()[Symbol.iterator]();
                                case 5:
                                    if (t = (a = o.next()).done) {
                                        r.next = 11;
                                        break
                                    }
                                    return u = a.value, r.delegateYield(u.masterKeysForEncrypt(e), "t0", 8);
                                case 8:
                                    t = !0, r.next = 5;
                                    break;
                                case 11:
                                    r.next = 17;
                                    break;
                                case 13:
                                    r.prev = 13, r.t1 = r["catch"](3), n = !0, i = r.t1;
                                case 17:
                                    r.prev = 17, r.prev = 18, t || null == o["return"] || o["return"]();
                                case 20:
                                    if (r.prev = 20, !n) {
                                        r.next = 23;
                                        break
                                    }
                                    throw i;
                                case 23:
                                    return r.finish(20);
                                case 24:
                                    return r.finish(17);
                                case 25:
                                case "end":
                                    return r.stop()
                                }
                            }), r, this, [
                                [3, 13, 17, 25],
                                [18, , 20, 24]
                            ])
                        }))
                    }, {
                        key: "masterKeysForDecrypt",
                        value: regeneratorRuntime.mark((function s(e) {
                            var t, r, n, i, o, a;
                            return regeneratorRuntime.wrap((function (u) {
                                for (;;) switch (u.prev = u.next) {
                                case 0:
                                    t = !0, r = !1, n = undefined, u.prev = 3, i = this._iteratorForDecrypt()[Symbol.iterator]();
                                case 5:
                                    if (t = (o = i.next()).done) {
                                        u.next = 11;
                                        break
                                    }
                                    return a = o.value, u.delegateYield(a.masterKeysForDecrypt(e), "t0", 8);
                                case 8:
                                    t = !0, u.next = 5;
                                    break;
                                case 11:
                                    u.next = 17;
                                    break;
                                case 13:
                                    u.prev = 13, u.t1 = u["catch"](3), r = !0, n = u.t1;
                                case 17:
                                    u.prev = 17, u.prev = 18, t || null == i["return"] || i["return"]();
                                case 20:
                                    if (u.prev = 20, !r) {
                                        u.next = 23;
                                        break
                                    }
                                    throw n;
                                case 23:
                                    return u.finish(20);
                                case 24:
                                    return u.finish(17);
                                case 25:
                                case "end":
                                    return u.stop()
                                }
                            }), s, this, [
                                [3, 13, 17, 25],
                                [18, , 20, 24]
                            ])
                        }))
                    }, {
                        key: "decryptDataKey",
                        value: (t = m(regeneratorRuntime.mark((function c(e, t) {
                            var r, n, i, a = arguments;
                            return regeneratorRuntime.wrap((function (u) {
                                for (;;) switch (u.prev = u.next) {
                                case 0:
                                    for (r = a.length, n = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) n[i - 2] = a[i];
                                    return u.abrupt("return", Object(o.a)(n, this, (function (r) {
                                        var n = r.masterKey,
                                            i = r.encryptedDataKey;
                                        return n.decryptDataKey(e, t, i)
                                    })));
                                case 2:
                                case "end":
                                    return u.stop()
                                }
                            }), c, this)
                        }))), function (e, r) {
                            return t.apply(this, arguments)
                        })
                    }], [{
                        key: "isMaterialProvider",
                        value: function (t) {
                            return t instanceof n.a || t instanceof e
                        }
                    }]), e
                }();
            Object.setPrototypeOf(s.prototype, null), Object(i.a)(s)
        }, function (e, t, r) {
            var n = r(3),
                i = r(0),
                o = r.n(i),
                s = {
                    prime256v1: c(32),
                    secp384r1: c(48),
                    "P-256": c(32),
                    "P-384": c(48)
                };
            function c(e) {
                return function (t) {
                    var r = t.slice(1, e + 1),
                        n = t.slice(e + 1, 2 * e + 1),
                        i = new o.a(u(n)).mod(new o.a(2)).toNumber() + 2,
                        a = new Uint8Array(1 + r.length);
                    return a.set([i], 0), a.set(r, 1), a
                }
            }
            Object.freeze(s);
            var f = p(new o.a("FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFF", 16), new o.a("FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFC", 16), new o.a("5AC635D8AA3A93E7B3EBBD55769886BC651D06B0CC53B0F63BCE3C3E27D2604B", 16), new o.a("FFFFFFFF00000000FFFFFFFFFFFFFFFFBCE6FAADA7179E84F3B9CAC2FC632551", 16)),
                l = p(new o.a("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFF", 16), new o.a("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFC", 16), new o.a("B3312FA7E23EE7E4988E056BE3F82D19181D9C6EFE8141120314088F5013875AC656398D8A2ED19D2A85C8EDD3EC2AEF", 16), new o.a("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC7634D81F4372DDF581A0DB248B0A77AECEC196ACCC52973", 16)),
                h = {
                    prime256v1: f,
                    secp384r1: l,
                    "P-256": f,
                    "P-384": l
                };
            function p(e, t, r, n) {
                var i = new o.a(0),
                    a = new o.a(1),
                    s = new o.a(2),
                    c = new o.a(3),
                    f = new o.a(4),
                    l = e.add(a).div(f),
                    h = {
                        2: i,
                        3: a
                    };
                return function (n) {
                    var i = n.slice(1),
                        a = i.byteLength,
                        p = new o.a(u(i)),
                        y = h[n[0]],
                        v = p.pow(c).mod(e).add(p.mul(t).mod(e)).add(r).mod(e);
                    if (e.mod(f).eq(c)) {
                        var g = v.toRed(o.a.mont(e)).redPow(l).fromRed();
                        return g.mod(s).eq(y) ? d(p, g, a) : d(p, e.sub(g), a)
                    }
                    throw new Error("Curve not supported at this time")
                }
            }
            function d(e, t, r) {
                return new Uint8Array([4].concat(u(e.toArray("be", r)), u(t.toArray("be", r))))
            }
            Object.freeze(h), r.d(t, "a", (function () {
                return y
            })), r.d(t, "b", (function () {
                return g
            }));
            var y = function () {
                function e(t, r) {
                    v(this, e), t instanceof Uint8Array ? Object(n.c)(this, "privateKey", t) : this.privateKey = t, Object(n.c)(this, "compressPoint", r), Object.freeze(this)
                }
                return a(e, null, [{
                    key: "encodeCompressPoint",
                    value: function (e, t) {
                        var r = t.signatureCurve;
                        if (void 0 === r) throw new Error("Unsupported Algorithm");
                        return s[r](e)
                    }
                }]), e
            }();
            Object.setPrototypeOf(y.prototype, null), Object.freeze(y.prototype), Object.freeze(y);
            var g = function () {
                function e(t) {
                    v(this, e), t instanceof Uint8Array ? Object(n.c)(this, "publicKey", t) : this.publicKey = t, Object.freeze(this)
                }
                return a(e, null, [{
                    key: "decodeCompressPoint",
                    value: function (e, t) {
                        var r = t.signatureCurve;
                        if (void 0 === r) throw new Error("Unsupported Algorithm");
                        return h[r](e)
                    }
                }]), e
            }();
            Object.setPrototypeOf(g.prototype, null), Object.freeze(g.prototype), Object.freeze(g)
        }, function (e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(19);
            t.ie11RandomValues = n.randomValues;
            var i = r(20);
            t.webCryptoRandomValues = i.randomValues;
            var o = r(21),
                a = r(4),
                u = r(5);
            t.randomValues = function (e) {
                var t = u.locateWindow();
                return a.supportsWebCrypto(t) ? i.randomValues(e) : o.isMsWindow(t) ? n.randomValues(e) : Promise.reject(new Error("Unable to locate a secure random source."))
            }, t.randomValuesOnly = function (e) {
                var t = u.locateWindow();
                return a.supportsSecureRandom(t) ? i.randomValues(e) : o.isMsWindow(t) ? n.randomValues(e) : Promise.reject(new Error("Unable to locate a secure random source."))
            }
        }, function (e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(32);
            t.WebCryptoMaterialsManager = n.WebCryptoMaterialsManager;
            var i = r(31);
            t.PublicMasterKey = i.PublicMasterKey,
                function (e) {
                    for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r])
                }(r(26));
            var o = r(1);
            t.configureFallback = o.configureFallback
        }, function (e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(7),
                i = ["decrypt", "digest", "encrypt", "exportKey", "generateKey", "importKey", "sign", "verify"];
            function o(e) {
                return "object" == b(e) && "object" == b(e.crypto) && "function" == typeof e.crypto.getRandomValues
            }
            function a(e) {
                return e && i.every((function (t) {
                    return "function" == typeof e[t]
                }))
            }
            t.supportsWebCrypto = function (e) {
                return !(!o(e) || "object" != b(e.crypto.subtle)) && a(e.crypto.subtle)
            }, t.supportsSecureRandom = o, t.supportsSubtleCrypto = a, t.supportsZeroByteGCM = function (e) {
                return n.__awaiter(this, void 0, void 0, (function () {
                    var t;
                    return n.__generator(this, (function (r) {
                        switch (r.label) {
                        case 0:
                            if (!a(e)) return [2, !1];
                            r.label = 1;
                        case 1:
                            return r.trys.push([1, 4, , 5]), [4, e.generateKey({
                                name: "AES-GCM",
                                length: 128
                            }, !1, ["encrypt"])];
                        case 2:
                            return t = r.sent(), [4, e.encrypt({
                                name: "AES-GCM",
                                iv: new Uint8Array(Array(12)),
                                additionalData: new Uint8Array(Array(16)),
                                tagLength: 128
                            }, t, new Uint8Array(0))];
                        case 3:
                            return [2, 16 === r.sent().byteLength];
                        case 4:
                            return r.sent(), [2, !1];
                        case 5:
                            return [2]
                        }
                    }))
                }))
            }
        }, function (e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(5);
            t.randomValues = function (e) {
                return new Promise((function (t) {
                    var r = new Uint8Array(e);
                    n.locateWindow().msCrypto.getRandomValues(r), t(r)
                }))
            }
        }, function (e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(5);
            t.randomValues = function (e) {
                return new Promise((function (t) {
                    var r = new Uint8Array(e);
                    n.locateWindow().crypto.getRandomValues(r), t(r)
                }))
            }
        }, function (e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), r(22).__exportStar(r(23), t)
        }, function (e, t, r) {
            r.r(t), r.d(t, "__extends", (function () {
                return i
            })), r.d(t, "__assign", (function () {
                return o
            })), r.d(t, "__rest", (function () {
                return a
            })), r.d(t, "__decorate", (function () {
                return u
            })), r.d(t, "__param", (function () {
                return s
            })), r.d(t, "__metadata", (function () {
                return c
            })), r.d(t, "__awaiter", (function () {
                return f
            })), r.d(t, "__generator", (function () {
                return l
            })), r.d(t, "__exportStar", (function () {
                return h
            })), r.d(t, "__values", (function () {
                return p
            })), r.d(t, "__read", (function () {
                return d
            })), r.d(t, "__spread", (function () {
                return y
            })), r.d(t, "__await", (function () {
                return v
            })), r.d(t, "__asyncGenerator", (function () {
                return g
            })), r.d(t, "__asyncDelegator", (function () {
                return m
            })), r.d(t, "__asyncValues", (function () {
                return w
            })), r.d(t, "__makeTemplateObject", (function () {
                return x
            })), r.d(t, "__importStar", (function () {
                return M
            })), r.d(t, "__importDefault", (function () {
                return k
            }));
            var n = function (e, t) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                    })(e, t)
            };
            function i(e, t) {
                function r() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
            var o = function () {
                return (o = Object.assign || function (e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }).apply(this, arguments)
            };
            function a(e, t) {
                var r = {};
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var i = 0;
                    for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && (r[n[i]] = e[n[i]])
                }
                return r
            }
            function u(e, t, r, n) {
                var i, o = arguments.length,
                    a = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                if ("object" == ("undefined" == typeof Reflect ? "undefined" : b(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, n);
                else
                    for (var u = e.length - 1; u >= 0; u--)(i = e[u]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, r, a) : i(t, r)) || a);
                return o > 3 && a && Object.defineProperty(t, r, a), a
            }
            function s(e, t) {
                return function (r, n) {
                    t(r, n, e)
                }
            }
            function c(e, t) {
                if ("object" == ("undefined" == typeof Reflect ? "undefined" : b(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            }
            function f(e, t, r, n) {
                return new(r || (r = Promise))((function (i, o) {
                    function a(e) {
                        try {
                            s(n.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }
                    function u(e) {
                        try {
                            s(n["throw"](e))
                        } catch (e) {
                            o(e)
                        }
                    }
                    function s(e) {
                        e.done ? i(e.value) : new r((function (t) {
                            t(e.value)
                        })).then(a, u)
                    }
                    s((n = n.apply(e, t || [])).next())
                }))
            }
            function l(e, t) {
                var r, n, i, o, a = {
                    label: 0,
                    sent: function () {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: u(0),
                    "throw": u(1),
                    "return": u(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
                    return this
                }), o;
                function u(o) {
                    return function (u) {
                        return function (o) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (r = 1, n && (i = 2 & o[0] ? n["return"] : o[0] ? n["throw"] || ((i = n["return"]) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                                switch (n = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, n = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < i[1]) {
                                        a.label = i[1], i = o;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2], a.ops.push(o);
                                        break
                                    }
                                    i[2] && a.ops.pop(), a.trys.pop();
                                    continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e], n = 0
                            } finally {
                                r = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, u])
                    }
                }
            }
            function h(e, t) {
                for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r])
            }
            function p(e) {
                var t = "function" == typeof Symbol && e[Symbol.iterator],
                    r = 0;
                return t ? t.call(e) : {
                    next: function () {
                        return e && r >= e.length && (e = void 0), {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                }
            }
            function d(e, t) {
                var r = "function" == typeof Symbol && e[Symbol.iterator];
                if (!r) return e;
                var n, i, o = r.call(e),
                    a = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(n = o.next()).done;) a.push(n.value)
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        n && !n.done && (r = o["return"]) && r.call(o)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return a
            }
            function y() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(d(arguments[t]));
                return e
            }
            function v(e) {
                return this instanceof v ? (this.v = e, this) : new v(e)
            }
            function g(e, t, r) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var n, i = r.apply(e, t || []),
                    o = [];
                return n = {}, a("next"), a("throw"), a("return"), n[Symbol.asyncIterator] = function () {
                    return this
                }, n;
                function a(e) {
                    i[e] && (n[e] = function (t) {
                        return new Promise((function (r, n) {
                            o.push([e, t, r, n]) > 1 || u(e, t)
                        }))
                    })
                }
                function u(e, t) {
                    try {
                        ! function (e) {
                            e.value instanceof v ? Promise.resolve(e.value.v).then(s, c) : f(o[0][2], e)
                        }(i[e](t))
                    } catch (e) {
                        f(o[0][3], e)
                    }
                }
                function s(e) {
                    u("next", e)
                }
                function c(e) {
                    u("throw", e)
                }
                function f(e, t) {
                    e(t), o.shift(), o.length && u(o[0][0], o[0][1])
                }
            }
            function m(e) {
                var t, r;
                return t = {}, n("next"), n("throw", (function (e) {
                    throw e
                })), n("return"), t[Symbol.iterator] = function () {
                    return this
                }, t;
                function n(n, i) {
                    t[n] = e[n] ? function (t) {
                        return (r = !r) ? {
                            value: v(e[n](t)),
                            done: "return" === n
                        } : i ? i(t) : t
                    } : i
                }
            }
            function w(e) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var t, r = e[Symbol.asyncIterator];
                return r ? r.call(e) : (e = p(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function () {
                    return this
                }, t);
                function n(r) {
                    t[r] = e[r] && function (t) {
                        return new Promise((function (n, i) {
                            ! function (e, t, r, n) {
                                Promise.resolve(n).then((function (t) {
                                    e({
                                        value: t,
                                        done: r
                                    })
                                }), t)
                            }(n, i, (t = e[r](t)).done, t.value)
                        }))
                    }
                }
            }
            function x(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e
            }
            function M(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t["default"] = e, t
            }
            function k(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }
        }, function (e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = ["decrypt", "digest", "encrypt", "exportKey", "generateKey", "importKey", "sign", "verify"];
            t.isMsWindow = function (e) {
                if (function (e) {
                        return "MSInputMethodContext" in e && "msCrypto" in e
                    }(e) && void 0 !== e.msCrypto.subtle) {
                    for (var t = e.msCrypto, r = t.getRandomValues, i = t.subtle, o = 0, a = n.map((function (e) {
                            return i[e]
                        })).concat(r); o < a.length; o++)
                        if ("function" != typeof a[o]) return !1;
                    return !0
                }
                return !1
            }
        }, function (e, t) {
            e.exports = function (e) {
                return e.webpackPolyfill || (e.deprecate = function () {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                    enumerable: !0,
                    get: function () {
                        return e.l
                    }
                }), Object.defineProperty(e, "id", {
                    enumerable: !0,
                    get: function () {
                        return e.i
                    }
                }), e.webpackPolyfill = 1), e
            }
        }, function (e, t) {}, function (e, t, r) {
            var n = this && this.__awaiter || function (e, t, r, n) {
                return new(r || (r = Promise))((function (i, o) {
                    function a(e) {
                        try {
                            s(n.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }
                    function u(e) {
                        try {
                            s(n["throw"](e))
                        } catch (e) {
                            o(e)
                        }
                    }
                    function s(e) {
                        e.done ? i(e.value) : new r((function (t) {
                            t(e.value)
                        })).then(a, u)
                    }
                    s((n = n.apply(e, t || [])).next())
                }))
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(2),
                o = r(30),
                a = r(27),
                u = r(1),
                s = o.serializeFactory(a.fromUtf8),
                c = o.aadFactory(a.fromUtf8),
                f = c.messageAADContentString,
                l = c.messageAAD;
            t.encrypt = function (e) {
                var t = e.source,
                    r = e.algorithm,
                    a = e.encryptionContext,
                    c = e.materialsManager;
                return n(this, void 0, void 0, regeneratorRuntime.mark((function h() {
                    var e, n, p, d, y, v, g, m, b, w, x, M, k, _, E, A, S, O, F, j;
                    return regeneratorRuntime.wrap((function (h) {
                        for (;;) switch (h.prev = h.next) {
                        case 0:
                            return h.next = 2, u.getWebCryptoBackend();
                        case 2:
                            if (e = h.sent) {
                                h.next = 5;
                                break
                            }
                            throw new Error("No supported crypto backend");
                        case 5:
                            return n = t.byteLength + 1, p = {
                                algorithm: i.getWebCryptoAlgorithm(r),
                                encryptionContext: a,
                                frameLength: n,
                                plaintextLength: t.byteLength
                            }, h.next = 9, c.getEncryptionMaterials(p);
                        case 9:
                            return d = h.sent, h.next = 12, e.randomValues(16);
                        case 12:
                            if (null !== (y = h.sent) && 16 === y.byteLength) {
                                h.next = 15;
                                break
                            }
                            throw new Error("bad");
                        case 15:
                            return v = d.algorithm, g = v.id, m = v.ivLength, b = d.encryptedDataKeys.map((function (e) {
                                var t = e.keyInfo,
                                    r = e.providerId,
                                    n = e.encryptedDataKey;
                                return {
                                    keyInfo: t,
                                    providerId: r,
                                    encryptedDataKey: new Uint8Array(n)
                                }
                            })), w = {
                                version: i.SerializationVersion.V1,
                                type: i.ObjectType.CUSTOMER_AE_DATA,
                                algorithmId: g,
                                messageId: y,
                                encryptionContext: d.encryptionContext,
                                encryptedDataKeys: b,
                                contentType: i.ContentType.FRAMED_DATA,
                                headerIvLength: m,
                                frameLength: n
                            }, x = s.serializeMessageHeader(w), M = o.kdfInfo(g, y), k = d.getEncrypter(M), _ = s.headerAuthIv(m), h.next = 26, k(_, x, new Uint8Array(0));
                        case 26:
                            return E = h.sent, A = s.frameIv(m, 1), S = s.finalFrameHeader(1, A, t.byteLength), h.next = 31, k(A, l(y, f({
                                contentType: w.contentType,
                                isFinalFrame: !0
                            }), 1, t.byteLength), t);
                        case 31:
                            if (O = h.sent, F = o.concatBuffers(x, _, E, S, O), "function" != typeof d.sign) {
                                h.next = 38;
                                break
                            }
                            return h.next = 36, d.sign(F);
                        case 36:
                            return j = h.sent, h.abrupt("return", {
                                cipherMessage: o.concatBuffers(F, j),
                                messageHeader: w
                            });
                        case 38:
                            return h.abrupt("return", {
                                cipherMessage: F,
                                messageHeader: w
                            });
                        case 39:
                        case "end":
                            return h.stop()
                        }
                    }), h)
                })))
            }
        }, function (e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(28),
                i = r(29);
            t.fromUtf8 = function (e) {
                return "function" == typeof TextEncoder ? i.fromUtf8(e) : n.fromUtf8(e)
            }, t.toUtf8 = function (e) {
                return "function" == typeof TextDecoder ? i.toUtf8(e) : n.toUtf8(e)
            }
        }, function (e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.fromUtf8 = function (e) {
                for (var t = [], r = 0, n = e.length; r < n; r++) {
                    var i = e.charCodeAt(r);
                    if (i < 128) t.push(i);
                    else if (i < 2048) t.push(i >> 6 | 192, 63 & i | 128);
                    else if (r + 1 < e.length && 55296 == (64512 & i) && 56320 == (64512 & e.charCodeAt(r + 1))) {
                        var o = 65536 + ((1023 & i) << 10) + (1023 & e.charCodeAt(++r));
                        t.push(o >> 18 | 240, o >> 12 & 63 | 128, o >> 6 & 63 | 128, 63 & o | 128)
                    } else t.push(i >> 12 | 224, i >> 6 & 63 | 128, 63 & i | 128)
                }
                return Uint8Array.from(t)
            }, t.toUtf8 = function (e) {
                for (var t = "", r = 0, n = e.length; r < n; r++) {
                    var i = e[r];
                    if (i < 128) t += String.fromCharCode(i);
                    else if (192 <= i && i < 224) {
                        var o = e[++r];
                        t += String.fromCharCode((31 & i) << 6 | 63 & o)
                    } else if (240 <= i && i < 365) {
                        var a = "%" + [i, e[++r], e[++r], e[++r]].map((function (e) {
                            return e.toString(16)
                        })).join("%");
                        t += decodeURIComponent(a)
                    } else t += String.fromCharCode((15 & i) << 12 | (63 & e[++r]) << 6 | 63 & e[++r])
                }
                return t
            }
        }, function (e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.fromUtf8 = function (e) {
                return (new TextEncoder).encode(e)
            }, t.toUtf8 = function (e) {
                return new TextDecoder("utf-8").decode(e)
            }
        }, function (e, t, r) {
            r.r(t);
            var n = r(0),
                o = r.n(n),
                a = r(9);
            function s() {
                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                var n = t.reduce((function (e, t) {
                        return e + t.byteLength
                    }), 0),
                    i = new Uint8Array(n),
                    o = 0;
                return t.forEach((function (e) {
                    e instanceof ArrayBuffer ? i.set(new Uint8Array(e), o) : e instanceof DataView ? i.set(new Uint8Array(e.buffer), o) : i.set(e, o), o += e.byteLength
                })), i
            }
            function c(e) {
                var t = new Uint8Array(1);
                return new DataView(t.buffer).setUint8(0, e), t
            }
            function f(e) {
                var t = new Uint8Array(2);
                return new DataView(t.buffer).setUint16(0, e, !1), t
            }
            function l(e) {
                var t = new Uint8Array(4);
                return new DataView(t.buffer).setUint32(0, e, !1), t
            }
            function h(e) {
                return {
                    messageAADContentString: function (e) {
                        var t = e.contentType,
                            r = e.isFinalFrame;
                        switch (t) {
                        case 1:
                            return a.a.NON_FRAMED_STRING_ID;
                        case 2:
                            return r ? a.a.FINAL_FRAME_STRING_ID : a.a.FRAME_STRING_ID;
                        default:
                            throw new Error("bad")
                        }
                    },
                    messageAAD: function (t, r, n, i) {
                        return s(t, e(r), l(n), new Uint8Array(new o.a(i).toArray("be", 8)))
                    }
                }
            }
            function p(e, t, r) {
                var n = t.messageHeader.frameLength,
                    i = t.algorithmSuite,
                    o = i.ivLength,
                    u = i.tagLength,
                    s = new DataView(e.buffer);
                if (!(4 + o + r > s.byteLength)) {
                    if (s.getUint32(r) !== a.e.SEQUENCE_NUMBER_END) return {
                        sequenceNumber: s.getUint32(r),
                        iv: e.slice(r += 4, r += o),
                        contentLength: n,
                        readPos: r,
                        tagLength: u,
                        isFinalFrame: !1,
                        contentType: a.b.FRAMED_DATA
                    };
                    if (!(8 + o + 4 + r > s.byteLength)) {
                        if (s.getUint32(r) === a.e.SEQUENCE_NUMBER_END) return {
                            sequenceNumber: s.getUint32(r += 4),
                            iv: e.slice(r += 4, r += o),
                            contentLength: s.getUint32(r),
                            readPos: r + 4,
                            tagLength: u,
                            isFinalFrame: !0,
                            contentType: a.b.FRAMED_DATA
                        };
                        throw new Error("Unknown format")
                    }
                }
            }
            var d = r(11);
            function y(e, t) {
                for (var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0, n = new DataView(t.buffer), i = []; e--;) {
                    if (r + 2 > n.byteLength) return !1;
                    var o = n.getUint16(r, !1);
                    if ((r += 2) + o > n.byteLength) return !1;
                    var a = t.slice(r, r + o);
                    i.push(a), r += o
                }
                return {
                    elements: i,
                    readPos: r
                }
            }
            function v(e, t) {
                return {
                    deserializeMessageHeader: function (e) {
                        var i = new DataView(e.buffer);
                        if (22 > i.byteLength) return !1;
                        var o = i.getUint8(0),
                            a = i.getUint8(1),
                            u = i.getUint16(2),
                            s = e.slice(4, 20),
                            c = i.getUint16(20);
                        if (22 + c > i.byteLength) return !1;
                        var f = n(e.slice(22, 22 + c)),
                            l = r(e, 22 + c);
                        if (!l) return !1;
                        var h = l.encryptedDataKeys,
                            p = l.readPos,
                            d = p + 1 + 4 + 1 + 4;
                        if (d > i.byteLength) return !1;
                        var y = i.getUint8(p),
                            v = i.getUint8(p + 1 + 4),
                            g = i.getUint32(p + 1 + 4 + 1),
                            m = e.slice(0, d),
                            b = {
                                version: o,
                                type: a,
                                algorithmId: u,
                                messageId: s,
                                encryptionContext: f,
                                encryptedDataKeys: h,
                                contentType: y,
                                headerIvLength: v,
                                frameLength: g
                            },
                            w = new t(b.algorithmId),
                            x = w.ivLength,
                            M = w.tagLength / 8;
                        return !(d + x + M > i.byteLength) && {
                            messageHeader: b,
                            headerLength: d,
                            rawHeader: m,
                            algorithmSuite: w,
                            headerIv: e.slice(d, d + x),
                            headerAuthTag: e.slice(d + x, d + x + M)
                        }
                    },
                    deserializeEncryptedDataKeys: r,
                    decodeEncryptionContext: n
                };
                function r(t, r) {
                    if (r + 2 > t.byteLength) return !1;
                    var n = new DataView(t.buffer).getUint16(r),
                        o = y(3 * n, t, r + 2);
                    if (!o) return !1;
                    for (var a = o.elements, u = o.readPos, s = n, c = []; s--;) {
                        var f = i(a.splice(0, 2).map(e), 2),
                            l = f[0],
                            h = f[1],
                            p = i(a.splice(0, 1), 1)[0],
                            v = new d.a(h, l, p);
                        c.push(v)
                    }
                    return c.length, {
                        encryptedDataKeys: c,
                        readPos: u
                    }
                }
                function n(t) {
                    var r = {};
                    if (!t.byteLength) return r;
                    var n = new DataView(t.buffer).getUint16(0),
                        o = y(2 * n, t, 2);
                    if (!o) throw new Error("context parse error");
                    for (var a = o.elements, u = (o.readPos, n); u--;) {
                        var s = i(a.splice(0, 2).map(e), 2),
                            c = s[0],
                            f = s[1];
                        r[c] = f
                    }
                    return Object.keys(r).length, t.byteLength, r
                }
            }
            function g(e, t) {
                return s(f(e), t)
            }
            function m(e) {
                return {
                    frameIv: t,
                    nonFramedBodyIv: function (e) {
                        return t(e, 1)
                    },
                    headerAuthIv: function (e) {
                        return new Uint8Array(e)
                    },
                    frameHeader: function (e, t) {
                        return s(l(e), t)
                    },
                    finalFrameHeader: function (e, t, r) {
                        return s(l(a.e.SEQUENCE_NUMBER_END), l(e), t, l(r))
                    },
                    encodeEncryptionContext: r,
                    serializeEncryptionContext: n,
                    serializeEncryptedDataKeys: o,
                    serializeMessageHeader: function (e) {
                        return s(c(e.version), c(e.type), f(e.algorithmId), e.messageId, n(r(e.encryptionContext)), o(e.encryptedDataKeys), new Uint8Array([e.contentType]), new Uint8Array([0, 0, 0, 0]), c(e.headerIvLength), l(e.frameLength))
                    }
                };
                function t(e, t) {
                    if (t < 1) throw new Error("bad");
                    var r = new Uint8Array(e);
                    return new DataView(r.buffer).setUint32(e - 4, t, !1), r
                }
                function r(t) {
                    return Object.entries(t).map((function (t) {
                        return t.map(e)
                    })).map((function (e) {
                        var t = i(e, 2),
                            r = t[0],
                            n = t[1];
                        return s(f(r.byteLength), r, f(n.byteLength), n)
                    }))
                }
                function n(e) {
                    if (!e.length) return new Uint8Array(f(0));
                    var t = s.apply(void 0, [f(e.length)].concat(u(e)));
                    return s(f(t.byteLength), t)
                }
                function o(t) {
                    var r = t.map((function (t) {
                        var r = t.providerId,
                            n = t.keyInfo,
                            o = t.encryptedDataKey,
                            a = i([r, n].map(e), 2),
                            u = a[0],
                            c = a[1];
                        return s(f(u.byteLength), u, f(c.byteLength), c, f(o.byteLength), o)
                    }));
                    return s.apply(void 0, [f(t.length)].concat(u(r)))
                }
            }
            r.d(t, "aadFactory", (function () {
                return h
            })), r.d(t, "concatBuffers", (function () {
                return s
            })), r.d(t, "decodeFrameHeader", (function () {
                return p
            })), r.d(t, "deserializeFactory", (function () {
                return v
            })), r.d(t, "kdfInfo", (function () {
                return g
            })), r.d(t, "serializeFactory", (function () {
                return m
            }))
        }, function (e, t, r) {
            r.r(t);
            var n, i, o, u = r(12),
                s = r(3),
                c = r(10),
                f = r(11),
                y = r(1);
            ! function (e) {
                e.OAEP_SHA1_MFG1 = "OAEP_SHA1_MFG1", e.OAEP_SHA256_MFG1 = "OAEP_SHA256_MFG1"
            }(n || (n = {})),
            function (e) {
                e.raw = "raw", e.pkcs8 = "pkcs8", e.spki = "spki"
            }(i || (i = {})),
            function (e) {
                e["RSA-OAEP"] = "RSA-OAEP", e["RSA-OAEP-256"] = "RSA-OAEP-256"
            }(o || (o = {}));
            var g = {
                name: "RSA-OAEP",
                hash: {
                    name: "SHA-1"
                }
            };
            Object.freeze(g), Object.freeze(g.hash);
            var b = {
                name: "RSA-OAEP",
                hash: {
                    name: "SHA-256"
                }
            };
            function w(e) {
                if (e.alg === o["RSA-OAEP"]) return {
                    format: "jwk",
                    key: e,
                    wrappingAlgorithm: g
                };
                if (e.alg === o["RSA-OAEP-256"]) return {
                    format: "jwk",
                    key: e,
                    wrappingAlgorithm: b
                };
                if (e.padding === n.OAEP_SHA1_MFG1) {
                    var t = g;
                    return {
                        format: e.format,
                        key: e.key,
                        wrappingAlgorithm: t
                    }
                }
                if (e.padding === n.OAEP_SHA256_MFG1) {
                    var r = b;
                    return {
                        format: e.format,
                        key: e.key,
                        wrappingAlgorithm: r
                    }
                }
                throw new Error("Unsupported RsaImportableKey")
            }
            Object.freeze(b), Object.freeze(b.hash);
            var x = r(6);
            function M(e) {
                return {
                    kty: "oct",
                    k: Object(x.toBase64)(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/\=/g, "")
                }
            }
            var k = function (e) {
                function t(e) {
                    var r, n = e.publicKey,
                        i = e.providerId,
                        o = e.keyId;
                    v(this, t), r = l(this, h(t).call(this, {
                        keyId: o,
                        providerId: i
                    }));
                    var a = w(n),
                        u = a.wrappingAlgorithm,
                        c = a.format,
                        f = a.key,
                        d = Object(y.getWebCryptoBackend)().then(y.getNonZeroByteBackend).then((function (e) {
                            return e.importKey(c, f, u, !1, ["wrapKey"])
                        }));
                    return Object(s.b)(p(r), "keyPromise", d), Object(s.b)(p(r), "wrappingAlgorithm", u), r
                }
                var r, n, i;
                return d(t, e), a(t, [{
                    key: "_generateDataKey",
                    value: (i = m(regeneratorRuntime.mark((function o(e, t) {
                        var r, n, i, a, u, s, f, l, h, p;
                        return regeneratorRuntime.wrap((function (o) {
                            for (;;) switch (o.prev = o.next) {
                            case 0:
                                return o.next = 2, Object(y.getWebCryptoBackend)();
                            case 2:
                                if (r = o.sent) {
                                    o.next = 5;
                                    break
                                }
                                throw new Error("No supported backend");
                            case 5:
                                return o.next = 7, r.randomValues(e.keyLength / 8);
                            case 7:
                                if (n = o.sent, i = M(n), a = this.providerId, u = this.keyId, !r.subtle) {
                                    o.next = 18;
                                    break
                                }
                                return f = r.subtle, o.next = 15, _(f, i, e);
                            case 15:
                                s = o.sent, o.next = 26;
                                break;
                            case 18:
                                return l = r.nonZeroByteSubtle, h = r.zeroByteSubtle, o.next = 21, _(l, i, e);
                            case 21:
                                return o.t0 = o.sent, o.next = 24, _(h, i, e);
                            case 24:
                                o.t1 = o.sent, s = {
                                    nonZeroByteCryptoKey: o.t0,
                                    zeroByteCryptoKey: o.t1
                                };
                            case 26:
                                return p = new c.a({
                                    providerId: a,
                                    keyInfo: u,
                                    algorithm: e,
                                    encryptionContext: t,
                                    rawKeyBytes: n,
                                    cryptoKey: s
                                }), o.abrupt("return", this._encryptDataKey(p));
                            case 28:
                            case "end":
                                return o.stop()
                            }
                        }), o, this)
                    }))), function (e, t) {
                        return i.apply(this, arguments)
                    })
                }, {
                    key: "_encryptDataKey",
                    value: (n = m(regeneratorRuntime.mark((function u(e) {
                        var t, r, n, i, o, a, s, l, h;
                        return regeneratorRuntime.wrap((function (u) {
                            for (;;) switch (u.prev = u.next) {
                            case 0:
                                if ("function" == typeof e.getKeyBytes) {
                                    u.next = 2;
                                    break
                                }
                                throw new Error("Unable to encrypt DataKey, no bytes");
                            case 2:
                                return u.t0 = Object(y.getNonZeroByteBackend), u.next = 5, Object(y.getWebCryptoBackend)();
                            case 5:
                                return u.t1 = u.sent, t = (0, u.t0)(u.t1), r = e.algorithm.encryption, n = M(e.getKeyBytes()), u.next = 11, t.importKey("jwk", n, r, !0, ["encrypt"]);
                            case 11:
                                return i = u.sent, u.next = 14, this.keyPromise;
                            case 14:
                                return o = u.sent, u.next = 17, t.wrapKey("raw", i, o, this.wrappingAlgorithm);
                            case 17:
                                return a = u.sent, s = this.providerId, l = this.keyId, h = new f.a(l, s, new Uint8Array(a)), u.abrupt("return", new c.a(e, h));
                            case 22:
                            case "end":
                                return u.stop()
                            }
                        }), u, this)
                    }))), function (e) {
                        return n.apply(this, arguments)
                    })
                }, {
                    key: "_decryptDataKey",
                    value: (r = m(regeneratorRuntime.mark((function g() {
                        return regeneratorRuntime.wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                            case 0:
                                throw new Error("Public Key Decrypt not supported, use a PrivateMasterKey");
                            case 1:
                            case "end":
                                return e.stop()
                            }
                        }), g)
                    }))), function () {
                        return r.apply(this, arguments)
                    })
                }]), t
            }(u.a);
            function _(e, t, r) {
                if (void 0 !== r.kdf) {
                    var n = r.kdf;
                    return e.importKey("jwk", t, n, !1, ["deriveKey"])
                }
                var i = r.encryption;
                return e.importKey("jwk", t, i, !1, ["encrypt"])
            }
            Object(s.a)(k);
            var E = function (e) {
                    function t() {
                        return v(this, t), l(this, h(t).apply(this, arguments))
                    }
                    return d(t, e), a(t, [{
                        key: "_newMasterKey",
                        value: function () {
                            throw new Error("Public Key Decrypt not supported, use a PrivateMasterKey")
                        }
                    }]), t
                }(r(14).a),
                A = function (e) {
                    function t(e) {
                        var r, n = e.privateKey,
                            i = e.providerId,
                            o = e.keyId;
                        v(this, t), r = l(this, h(t).call(this, {
                            keyId: o,
                            providerId: i
                        }));
                        var a = w(n),
                            u = a.wrappingAlgorithm,
                            c = a.format,
                            f = a.key,
                            d = Object(y.getWebCryptoBackend)().then(y.getNonZeroByteBackend).then((function (e) {
                                return e.importKey(c, f, u, !1, ["unwrapKey"])
                            }));
                        return Object(s.b)(p(r), "keyPromise", d), Object(s.b)(p(r), "wrappingAlgorithm", u), r
                    }
                    var r, n, i;
                    return d(t, e), a(t, [{
                        key: "_generateDataKey",
                        value: (i = m(regeneratorRuntime.mark((function o() {
                            return regeneratorRuntime.wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                case 0:
                                    throw new Error("Private Key Generate not supported, use a PublicMasterKey");
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                            }), o)
                        }))), function () {
                            return i.apply(this, arguments)
                        })
                    }, {
                        key: "_encryptDataKey",
                        value: (n = m(regeneratorRuntime.mark((function u() {
                            return regeneratorRuntime.wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                case 0:
                                    throw new Error("Private Key Encrypt not supported, use a PublicMasterKey");
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                            }), u)
                        }))), function () {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "_decryptDataKey",
                        value: (r = m(regeneratorRuntime.mark((function f(e, t, r) {
                            var n, i, o, a, u, s, l, h, p;
                            return regeneratorRuntime.wrap((function (f) {
                                for (;;) switch (f.prev = f.next) {
                                case 0:
                                    return f.next = 2, Object(y.getWebCryptoBackend)();
                                case 2:
                                    return n = f.sent, i = this.providerId, o = this.keyId, a = r.encryptedDataKey, f.next = 8, this.keyPromise;
                                case 8:
                                    if (u = f.sent, !n.subtle) {
                                        f.next = 16;
                                        break
                                    }
                                    return l = n.subtle, f.next = 13, S(l, u, a, e, this.wrappingAlgorithm);
                                case 13:
                                    s = f.sent, f.next = 24;
                                    break;
                                case 16:
                                    return h = n.nonZeroByteSubtle, p = n.zeroByteSubtle, f.next = 19, S(h, u, a, e, this.wrappingAlgorithm);
                                case 19:
                                    return f.t0 = f.sent, f.next = 22, S(p, u, a, e, this.wrappingAlgorithm);
                                case 22:
                                    f.t1 = f.sent, s = {
                                        nonZeroByteCryptoKey: f.t0,
                                        zeroByteCryptoKey: f.t1
                                    };
                                case 24:
                                    return f.abrupt("return", new c.a({
                                        providerId: i,
                                        keyInfo: o,
                                        algorithm: e,
                                        encryptionContext: t,
                                        cryptoKey: s
                                    }));
                                case 25:
                                case "end":
                                    return f.stop()
                                }
                            }), f, this)
                        }))), function (e, t, n) {
                            return r.apply(this, arguments)
                        })
                    }]), t
                }(u.a);
            function S(e, t, r, n, i) {
                var o = n.kdf,
                    a = n.encryption,
                    u = void 0 !== o ? ["deriveKey"] : ["decrypt"];
                return e.unwrapKey("raw", r, t, i, a, !1, u)
            }
            Object(s.a)(A), r.d(t, "PublicMasterKey", (function () {
                return k
            })), r.d(t, "PublicMasterKeyProvider", (function () {
                return E
            })), r.d(t, "PrivateMasterKey", (function () {
                return A
            })), r.d(t, "RsaPadding", (function () {
                return n
            })), r.d(t, "Format", (function () {
                return i
            })), r.d(t, "JsonWebKeyRsaAlg", (function () {
                return o
            }))
        }, function (e, t, r) {
            r.r(t);
            var i = r(1),
                o = function _(e, t, r) {
                    v(this, _), this.algorithm = e.algorithm, this.encryptedDataKeys = e.encryptedDataKeys, this.encryptionContext = e.encryptionContext, this.getEncrypter = function (t) {
                        var n = e.algorithm,
                            i = e.cryptoKey,
                            o = n.encryption,
                            a = n.tagLength;
                        if (r.subtle && i.algorithm) {
                            var u = r.subtle,
                                c = s(u, n, i, ["encrypt"], t);
                            return (function () {
                                var e = m(regeneratorRuntime.mark((function t(e, r, n) {
                                    var i, s;
                                    return regeneratorRuntime.wrap((function (t) {
                                        for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return i = {
                                                name: o,
                                                iv: e,
                                                additionalData: r,
                                                tagLength: a
                                            }, t.next = 3, c;
                                        case 3:
                                            return s = t.sent, t.abrupt("return", u.encrypt(i, s, n));
                                        case 5:
                                        case "end":
                                            return t.stop()
                                        }
                                    }), t)
                                })));
                                return function (t, r, n) {
                                    return e.apply(this, arguments)
                                }
                            }())
                        }
                        var f = r.nonZeroByteSubtle,
                            l = r.zeroByteSubtle,
                            h = i.nonZeroByteCryptoKey,
                            p = i.zeroByteCryptoKey,
                            d = s(f, n, h, ["encrypt"], t),
                            y = s(l, n, p, ["encrypt"], t);
                        return (function () {
                            var e = m(regeneratorRuntime.mark((function t(e, r, n) {
                                var i, u, s;
                                return regeneratorRuntime.wrap((function (t) {
                                    for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (i = {
                                                name: o,
                                                iv: e,
                                                additionalData: r,
                                                tagLength: a
                                            }, !(n.byteLength > 0)) {
                                            t.next = 6;
                                            break
                                        }
                                        return t.next = 4, d;
                                    case 4:
                                        return u = t.sent, t.abrupt("return", f.encrypt(i, u, n));
                                    case 6:
                                        return t.next = 8, y;
                                    case 8:
                                        return s = t.sent, t.abrupt("return", l.encrypt(i, s, n));
                                    case 10:
                                    case "end":
                                        return t.stop()
                                    }
                                }), t)
                            })));
                            return function (t, r, n) {
                                return e.apply(this, arguments)
                            }
                        }())
                    };
                    var n = e.algorithm,
                        o = n.signatureCurve,
                        a = n.signatureHash;
                    if (void 0 !== o && void 0 !== a && void 0 !== t) {
                        if (t.privateKey instanceof Uint8Array) throw new Error("Unsupported key type");
                        var u = t.privateKey,
                            c = {
                                name: "ECDSA",
                                hash: {
                                    name: a
                                }
                            };
                        this.sign = function () {
                            var e = m(regeneratorRuntime.mark((function t(e) {
                                return regeneratorRuntime.wrap((function (t) {
                                    for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", Object(i.getNonZeroByteBackend)(r).sign(c, u, e));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                    }
                                }), t)
                            })));
                            return function (t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }
                    Object.freeze(this)
                };
            Object.setPrototypeOf(o.prototype, null), Object.freeze(o.prototype), Object.freeze(o);
            var u = function E(e, t, r) {
                v(this, E), this.getDecrypter = function (t) {
                    var n = e.algorithm,
                        i = e.cryptoKey,
                        o = n.encryption,
                        a = n.tagLength;
                    if (r.subtle && i.algorithm) {
                        var u = r.subtle,
                            c = s(u, n, i, ["decrypt"], t);
                        return (function () {
                            var e = m(regeneratorRuntime.mark((function t(e, r, n) {
                                var i, s;
                                return regeneratorRuntime.wrap((function (t) {
                                    for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return i = {
                                            name: o,
                                            iv: e,
                                            additionalData: r,
                                            tagLength: a
                                        }, t.next = 3, c;
                                    case 3:
                                        return s = t.sent, t.abrupt("return", u.decrypt(i, s, n));
                                    case 5:
                                    case "end":
                                        return t.stop()
                                    }
                                }), t)
                            })));
                            return function (t, r, n) {
                                return e.apply(this, arguments)
                            }
                        }())
                    }
                    var f = r.nonZeroByteSubtle,
                        l = r.zeroByteSubtle,
                        h = i.nonZeroByteCryptoKey,
                        p = i.zeroByteCryptoKey,
                        d = s(f, n, h, ["decrypt"], t),
                        y = s(l, n, p, ["decrypt"], t);
                    return (function () {
                        var e = m(regeneratorRuntime.mark((function t(e, r, n) {
                            var i, u, s;
                            return regeneratorRuntime.wrap((function (t) {
                                for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (i = {
                                            name: o,
                                            iv: e,
                                            additionalData: r,
                                            tagLength: a
                                        }, !(n.byteLength > 0)) {
                                        t.next = 6;
                                        break
                                    }
                                    return t.next = 4, d;
                                case 4:
                                    return u = t.sent, t.abrupt("return", f.decrypt(i, u, n));
                                case 6:
                                    return t.next = 8, y;
                                case 8:
                                    return s = t.sent, t.abrupt("return", l.decrypt(i, s, n));
                                case 10:
                                case "end":
                                    return t.stop()
                                }
                            }), t)
                        })));
                        return function (t, r, n) {
                            return e.apply(this, arguments)
                        }
                    }())
                };
                var n = e.algorithm,
                    o = n.signatureCurve,
                    a = n.signatureHash;
                if (void 0 !== o && void 0 !== a && void 0 !== t) {
                    if (t.publicKey instanceof Uint8Array) throw new Error("Unsupported key type");
                    var u = t.publicKey,
                        c = {
                            name: "ECDSA",
                            hash: {
                                name: a
                            }
                        };
                    this.verify = function () {
                        var e = m(regeneratorRuntime.mark((function t(e, n) {
                            return regeneratorRuntime.wrap((function (t) {
                                for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", Object(i.getNonZeroByteBackend)(r).verify(c, u, e, n));
                                case 1:
                                case "end":
                                    return t.stop()
                                }
                            }), t)
                        })));
                        return function (t, r) {
                            return e.apply(this, arguments)
                        }
                    }()
                }
                Object.freeze(this)
            };
            function s(e, t, r, n, i) {
                return p.apply(this, arguments)
            }
            function p() {
                return (p = m(regeneratorRuntime.mark((function e(t, r, n, i, o) {
                    var a, u, s, c, f, l;
                    return regeneratorRuntime.wrap((function (e) {
                        for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (a = r.kdf, u = r.kdfHash, void 0 === a || void 0 === u) {
                                e.next = 4;
                                break
                            }
                            return s = r.encryption, c = r.keyLength, f = {
                                name: a,
                                hash: {
                                    name: u
                                },
                                info: o,
                                salt: new Uint8Array
                            }, l = {
                                name: s,
                                length: c
                            }, !1, e.abrupt("return", t.deriveKey(f, n, l, !1, i));
                        case 4:
                            return e.abrupt("return", n);
                        case 5:
                        case "end":
                            return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            Object.setPrototypeOf(u.prototype, null), Object.freeze(u.prototype), Object.freeze(u);
            var y = r(8),
                g = r(9),
                b = r(15),
                w = r(10),
                x = r(3),
                M = r(6),
                k = function (e) {
                    function t() {
                        return v(this, t), l(this, h(t).apply(this, arguments))
                    }
                    var r, s, p, y;
                    return d(t, e), a(t, [{
                        key: "getEncryptionMaterials",
                        value: (y = m(regeneratorRuntime.mark((function x(e) {
                            var t, r, n, a, u, s, f, l, h, p, d, y, v, g, m, b, w;
                            return regeneratorRuntime.wrap((function (x) {
                                for (;;) switch (x.prev = x.next) {
                                case 0:
                                    return x.next = 2, Object(i.getWebCryptoBackend)();
                                case 2:
                                    if (t = x.sent) {
                                        x.next = 5;
                                        break
                                    }
                                    throw new Error("No supported WebCrypto Backend available");
                                case 5:
                                    return r = e.algorithm, n = e.encryptionContext, x.next = 9, this._generateSigningKeyAndUpdateEncryptionContext(r, n, t);
                                case 9:
                                    return a = x.sent, u = a.encryptionContext, s = a.signatureKey, f = c({}, e, {
                                        encryptionContext: u
                                    }), l = this.keyProvider.masterKeysForEncrypt(f), h = l.next(), p = h.value, x.next = 18, p.generateDataKey(r, u);
                                case 18:
                                    d = x.sent, y = !0, v = !1, g = undefined, x.prev = 22, m = l[Symbol.iterator]();
                                case 24:
                                    if (y = (b = m.next()).done) {
                                        x.next = 32;
                                        break
                                    }
                                    return w = b.value, x.next = 28, w.encryptDataKey(d);
                                case 28:
                                    d = x.sent;
                                case 29:
                                    y = !0, x.next = 24;
                                    break;
                                case 32:
                                    x.next = 38;
                                    break;
                                case 34:
                                    x.prev = 34, x.t0 = x["catch"](22), v = !0, g = x.t0;
                                case 38:
                                    x.prev = 38, x.prev = 39, y || null == m["return"] || m["return"]();
                                case 41:
                                    if (x.prev = 41, !v) {
                                        x.next = 44;
                                        break
                                    }
                                    throw g;
                                case 44:
                                    return x.finish(41);
                                case 45:
                                    return x.finish(38);
                                case 46:
                                    return x.abrupt("return", new o(d, s, t));
                                case 47:
                                case "end":
                                    return x.stop()
                                }
                            }), x, this, [
                                [22, 34, 38, 46],
                                [39, , 41, 45]
                            ])
                        }))), function (e) {
                            return y.apply(this, arguments)
                        })
                    }, {
                        key: "_generateSigningKeyAndUpdateEncryptionContext",
                        value: (p = m(regeneratorRuntime.mark((function k(e) {
                            var t, r, n, o, a, u, s, l, h, p, d, y = arguments;
                            return regeneratorRuntime.wrap((function (v) {
                                for (;;) switch (v.prev = v.next) {
                                case 0:
                                    if (t = y.length > 1 && y[1] !== undefined ? y[1] : {}, r = y.length > 2 ? y[2] : undefined, void 0 !== e.signatureCurve) {
                                        v.next = 4;
                                        break
                                    }
                                    return v.abrupt("return", {
                                        encryptionContext: t
                                    });
                                case 4:
                                    return n = Object(i.getNonZeroByteBackend)(r), o = e.signatureCurve, a = {
                                        name: "ECDSA",
                                        namedCurve: o
                                    }, v.next = 9, n.generateKey(a, !1, ["sign"]);
                                case 9:
                                    return u = v.sent, s = u.publicKey, l = u.privateKey, v.next = 14, n.exportKey("raw", s);
                                case 14:
                                    return h = v.sent, p = b.a.encodeCompressPoint(new Uint8Array(h), e), d = new b.a(l, p), v.abrupt("return", {
                                        encryptionContext: c({}, t, f({}, g.c, Object(M.toBase64)(p))),
                                        signatureKey: d
                                    });
                                case 18:
                                case "end":
                                    return v.stop()
                                }
                            }), k)
                        }))), function (e) {
                            return p.apply(this, arguments)
                        })
                    }, {
                        key: "_loadVerificationKeyFromEncryptionContext",
                        value: (s = m(regeneratorRuntime.mark((function _(e, t, r) {
                            var n, o, a, u, s, c;
                            return regeneratorRuntime.wrap((function (f) {
                                for (;;) switch (f.prev = f.next) {
                                case 0:
                                    if (n = t[g.c], void 0 !== e.signatureCurve) {
                                        f.next = 3;
                                        break
                                    }
                                    return f.abrupt("return");
                                case 3:
                                    if ("string" === n) {
                                        f.next = 5;
                                        break
                                    }
                                    throw new Error("bad");
                                case 5:
                                    return o = Object(i.getNonZeroByteBackend)(r), a = e.signatureCurve, u = {
                                        name: "ECDSA",
                                        namedCurve: a
                                    }, s = b.b.decodeCompressPoint(Object(M.fromBase64)(n), e), f.next = 11, o.importKey("raw", s, u, !1, ["sign"]);
                                case 11:
                                    return c = f.sent, f.abrupt("return", new b.b(c));
                                case 13:
                                case "end":
                                    return f.stop()
                                }
                            }), _)
                        }))), function (e, t, r) {
                            return s.apply(this, arguments)
                        })
                    }, {
                        key: "decryptMaterials",
                        value: (r = m(regeneratorRuntime.mark((function E(e, t) {
                            var r, o, a, s, c, f, l, h, p = arguments;
                            return regeneratorRuntime.wrap((function (d) {
                                for (;;) switch (d.prev = d.next) {
                                case 0:
                                    return d.next = 2, Object(i.getWebCryptoBackend)();
                                case 2:
                                    if (o = d.sent) {
                                        d.next = 5;
                                        break
                                    }
                                    throw new Error("No supported WebCrypto Backend available");
                                case 5:
                                    for (a = p.length, s = new Array(a > 2 ? a - 2 : 0), c = 2; c < a; c++) s[c - 2] = p[c];
                                    return d.next = 8, (r = this.keyProvider).decryptDataKey.apply(r, [e, t].concat(s));
                                case 8:
                                    return (f = d.sent).getKeyBytes, f.encryptedDataKeys, l = n(f, ["getKeyBytes", "encryptedDataKeys"]), d.next = 14, this._loadVerificationKeyFromEncryptionContext(e, t, o);
                                case 14:
                                    return h = d.sent, d.abrupt("return", new u(new w.a(l), h, o));
                                case 16:
                                case "end":
                                    return d.stop()
                                }
                            }), E, this)
                        }))), function (e, t) {
                            return r.apply(this, arguments)
                        })
                    }]), t
                }(y.a);
            Object(x.a)(k), r.d(t, "WebCryptoMaterialsManager", (function () {
                return k
            })), r.d(t, "WebCryptoEncryptionMaterial", (function () {
                return o
            })), r.d(t, "WebCryptoDecryptionMaterial", (function () {
                return u
            }))
        }]);
        e.exports = w
    }, function (e, t, r) {
        "use strict";
        var n = r(0),
            i = r(12).every,
            o = r(24),
            a = r(16),
            u = o("every"),
            s = a("every");
        n({
            target: "Array",
            proto: !0,
            forced: !u || !s
        }, {
            every: function (e) {
                return i(this, e, arguments.length > 1 ? arguments[1] : undefined)
            }
        })
    }, function (e, t, r) {
        "use strict";
        var n = r(0),
            i = r(12).some,
            o = r(24),
            a = r(16),
            u = o("some"),
            s = a("some");
        n({
            target: "Array",
            proto: !0,
            forced: !u || !s
        }, {
            some: function (e) {
                return i(this, e, arguments.length > 1 ? arguments[1] : undefined)
            }
        })
    }, function (e, t, r) {
        var n = r(0),
            i = Math.floor,
            o = Math.log,
            a = Math.LOG2E;
        n({
            target: "Math",
            stat: !0
        }, {
            clz32: function (e) {
                return (e >>>= 0) ? 31 - i(o(e + .5) * a) : 32
            }
        })
    }, function (e, t, r) {
        var n = r(0),
            i = r(1),
            o = Math.imul;
        n({
            target: "Math",
            stat: !0,
            forced: i((function () {
                return -5 != o(4294967295, 5) || 2 != o.length
            }))
        }, {
            imul: function (e, t) {
                var r = +e,
                    n = +t,
                    i = 65535 & r,
                    o = 65535 & n;
                return 0 | i * o + ((65535 & r >>> 16) * o + i * (65535 & n >>> 16) << 16 >>> 0)
            }
        })
    }, function (e, t, r) {
        var n = r(0),
            i = r(230);
        n({
            target: "Object",
            stat: !0,
            forced: Object.assign !== i
        }, {
            assign: i
        })
    }, function (e, t, r) {
        "use strict";
        var n = r(7),
            i = r(1),
            o = r(50),
            a = r(107),
            u = r(60),
            s = r(11),
            c = r(42),
            f = Object.assign,
            l = Object.defineProperty;
        e.exports = !f || i((function () {
            if (n && 1 !== f({
                    b: 1
                }, f(l({}, "a", {
                    enumerable: !0,
                    get: function () {
                        l(this, "b", {
                            value: 3,
                            enumerable: !1
                        })
                    }
                }), {
                    b: 2
                })).b) return !0;
            var e = {},
                t = {},
                r = Symbol();
            return e[r] = 7, "abcdefghijklmnopqrst".split("").forEach((function (e) {
                t[e] = e
            })), 7 != f({}, e)[r] || "abcdefghijklmnopqrst" != o(f({}, t)).join("")
        })) ? function (e, t) {
            for (var r = s(e), i = arguments.length, f = 1, l = a.f, h = u.f; i > f;)
                for (var p, d = c(arguments[f++]), y = l ? o(d).concat(l(d)) : o(d), v = y.length, g = 0; v > g;) p = y[g++], n && !h.call(d, p) || (r[p] = d[p]);
            return r
        } : f
    }, function (e, t, r) {
        var n = r(0),
            i = r(232).entries;
        n({
            target: "Object",
            stat: !0
        }, {
            entries: function (e) {
                return i(e)
            }
        })
    }, function (e, t, r) {
        var n = r(7),
            i = r(50),
            o = r(15),
            a = r(60).f,
            u = function (e) {
                return function (t) {
                    for (var r, u = o(t), s = i(u), c = s.length, f = 0, l = []; c > f;) r = s[f++], n && !a.call(u, r) || l.push(e ? [r, u[r]] : u[r]);
                    return l
                }
            };
        e.exports = {
            entries: u(!0),
            values: u(!1)
        }
    }, function (e, t, r) {
        var n = r(0),
            i = r(1),
            o = r(143).f;
        n({
            target: "Object",
            stat: !0,
            forced: i((function () {
                return !Object.getOwnPropertyNames(1)
            }))
        }, {
            getOwnPropertyNames: o
        })
    }, function (e, t, r) {
        var n = r(0),
            i = r(5),
            o = r(62).onFreeze,
            a = r(111),
            u = r(1),
            s = Object.seal;
        n({
            target: "Object",
            stat: !0,
            forced: u((function () {
                s(1)
            })),
            sham: !a
        }, {
            seal: function (e) {
                return s && i(e) ? s(o(e)) : e
            }
        })
    }, function (e, t, r) {
        var n = r(2),
            i = r(236).trim,
            o = r(183),
            a = n.parseInt,
            u = /^[+-]?0[Xx]/,
            s = 8 !== a(o + "08") || 22 !== a(o + "0x16");
        e.exports = s ? function (e, t) {
            var r = i(String(e));
            return a(r, t >>> 0 || (u.test(r) ? 16 : 10))
        } : a
    }, function (e, t, r) {
        var n = r(22),
            i = "[" + r(183) + "]",
            o = RegExp("^" + i + i + "*"),
            a = RegExp(i + i + "*$"),
            u = function (e) {
                return function (t) {
                    var r = String(n(t));
                    return 1 & e && (r = r.replace(o, "")), 2 & e && (r = r.replace(a, "")), r
                }
            };
        e.exports = {
            start: u(1),
            end: u(2),
            trim: u(3)
        }
    }, function (e, t, r) {
        "use strict";
        var n = r(238),
            i = r(239);
        e.exports = n("Set", (function (e) {
            return function () {
                return e(this, arguments.length ? arguments[0] : undefined)
            }
        }), i)
    }, function (e, t, r) {
        "use strict";
        var n = r(0),
            i = r(2),
            o = r(108),
            a = r(18),
            u = r(62),
            s = r(118),
            c = r(55),
            f = r(5),
            l = r(1),
            h = r(68),
            p = r(26),
            d = r(171);
        e.exports = function (e, t, r) {
            var y = -1 !== e.indexOf("Map"),
                v = -1 !== e.indexOf("Weak"),
                g = y ? "set" : "add",
                m = i[e],
                b = m && m.prototype,
                w = m,
                x = {},
                M = function (e) {
                    var t = b[e];
                    a(b, e, "add" == e ? function (e) {
                        return t.call(this, 0 === e ? 0 : e), this
                    } : "delete" == e ? function (e) {
                        return !(v && !f(e)) && t.call(this, 0 === e ? 0 : e)
                    } : "get" == e ? function (e) {
                        return v && !f(e) ? undefined : t.call(this, 0 === e ? 0 : e)
                    } : "has" == e ? function (e) {
                        return !(v && !f(e)) && t.call(this, 0 === e ? 0 : e)
                    } : function (e, r) {
                        return t.call(this, 0 === e ? 0 : e, r), this
                    })
                };
            if (o(e, "function" != typeof m || !(v || b.forEach && !l((function () {
                    (new m).entries().next()
                }))))) w = r.getConstructor(t, e, y, g), u.REQUIRED = !0;
            else if (o(e, !0)) {
                var k = new w,
                    _ = k[g](v ? {} : -0, 1) != k,
                    E = l((function () {
                        k.has(1)
                    })),
                    A = h((function (e) {
                        new m(e)
                    })),
                    S = !v && l((function () {
                        for (var e = new m, t = 5; t--;) e[g](t, t);
                        return !e.has(-0)
                    }));
                A || ((w = t((function (t, r) {
                    c(t, w, e);
                    var n = d(new m, t, w);
                    return r != undefined && s(r, n[g], n, y), n
                }))).prototype = b, b.constructor = w), (E || S) && (M("delete"), M("has"), y && M("get")), (S || _) && M(g), v && b.clear && delete b.clear
            }
            return x[e] = w, n({
                global: !0,
                forced: w != m
            }, x), p(w, e), v || r.setStrong(w, e, y), w
        }
    }, function (e, t, r) {
        "use strict";
        var n = r(9).f,
            i = r(49),
            o = r(117),
            a = r(31),
            u = r(55),
            s = r(118),
            c = r(122),
            f = r(67),
            l = r(7),
            h = r(62).fastKey,
            p = r(23),
            d = p.set,
            y = p.getterFor;
        e.exports = {
            getConstructor: function (e, t, r, c) {
                var f = e((function (e, n) {
                        u(e, f, t), d(e, {
                            type: t,
                            index: i(null),
                            first: undefined,
                            last: undefined,
                            size: 0
                        }), l || (e.size = 0), n != undefined && s(n, e[c], e, r)
                    })),
                    p = y(t),
                    v = function (e, t, r) {
                        var n, i, o = p(e),
                            a = g(e, t);
                        return a ? a.value = r : (o.last = a = {
                            index: i = h(t, !0),
                            key: t,
                            value: r,
                            previous: n = o.last,
                            next: undefined,
                            removed: !1
                        }, o.first || (o.first = a), n && (n.next = a), l ? o.size++ : e.size++, "F" !== i && (o.index[i] = a)), e
                    },
                    g = function (e, t) {
                        var r, n = p(e),
                            i = h(t);
                        if ("F" !== i) return n.index[i];
                        for (r = n.first; r; r = r.next)
                            if (r.key == t) return r
                    };
                return o(f.prototype, {
                    clear: function () {
                        for (var e = p(this), t = e.index, r = e.first; r;) r.removed = !0, r.previous && (r.previous = r.previous.next = undefined), delete t[r.index], r = r.next;
                        e.first = e.last = undefined, l ? e.size = 0 : this.size = 0
                    },
                    "delete": function (e) {
                        var t = p(this),
                            r = g(this, e);
                        if (r) {
                            var n = r.next,
                                i = r.previous;
                            delete t.index[r.index], r.removed = !0, i && (i.next = n), n && (n.previous = i), t.first == r && (t.first = n), t.last == r && (t.last = i), l ? t.size-- : this.size--
                        }
                        return !!r
                    },
                    forEach: function (e) {
                        for (var t, r = p(this), n = a(e, arguments.length > 1 ? arguments[1] : undefined, 3); t = t ? t.next : r.first;)
                            for (n(t.value, t.key, this); t && t.removed;) t = t.previous
                    },
                    has: function (e) {
                        return !!g(this, e)
                    }
                }), o(f.prototype, r ? {
                    get: function (e) {
                        var t = g(this, e);
                        return t && t.value
                    },
                    set: function (e, t) {
                        return v(this, 0 === e ? 0 : e, t)
                    }
                } : {
                    add: function (e) {
                        return v(this, e = 0 === e ? 0 : e, e)
                    }
                }), l && n(f.prototype, "size", {
                    get: function () {
                        return p(this).size
                    }
                }), f
            },
            setStrong: function (e, t, r) {
                var n = t + " Iterator",
                    i = y(t),
                    o = y(n);
                c(e, t, (function (e, t) {
                    d(this, {
                        type: n,
                        target: e,
                        state: i(e),
                        kind: t,
                        last: undefined
                    })
                }), (function () {
                    for (var e = o(this), t = e.kind, r = e.last; r && r.removed;) r = r.previous;
                    return e.target && (e.last = r = r ? r.next : e.state.first) ? "keys" == t ? {
                        value: r.key,
                        done: !1
                    } : "values" == t ? {
                        value: r.value,
                        done: !1
                    } : {
                        value: [r.key, r.value],
                        done: !1
                    } : (e.target = undefined, {
                        value: undefined,
                        done: !0
                    })
                }), r ? "entries" : "values", !r, !0), f(t)
            }
        }
    }, function (e, t, r) {
        "use strict";
        var n = r(160),
            i = r(140),
            o = r(10),
            a = r(22),
            u = r(32),
            s = r(161),
            c = r(6),
            f = r(162),
            l = r(73),
            h = r(1),
            p = [].push,
            d = Math.min,
            y = !h((function () {
                return !RegExp(4294967295, "y")
            }));
        n("split", 2, (function (e, t, r) {
            var n;
            return n = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (e, r) {
                var n = String(a(this)),
                    o = r === undefined ? 4294967295 : r >>> 0;
                if (0 === o) return [];
                if (e === undefined) return [n];
                if (!i(e)) return t.call(n, e, o);
                for (var u, s, c, f = [], h = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), d = 0, y = new RegExp(e.source, h + "g");
                    (u = l.call(y, n)) && !((s = y.lastIndex) > d && (f.push(n.slice(d, u.index)), u.length > 1 && u.index < n.length && p.apply(f, u.slice(1)), c = u[0].length, d = s, f.length >= o));) y.lastIndex === u.index && y.lastIndex++;
                return d === n.length ? !c && y.test("") || f.push("") : f.push(n.slice(d)), f.length > o ? f.slice(0, o) : f
            } : "0".split(undefined, 0).length ? function (e, r) {
                return e === undefined && 0 === r ? [] : t.call(this, e, r)
            } : t, [function (t, r) {
                var i = a(this),
                    o = t == undefined ? undefined : t[e];
                return o !== undefined ? o.call(t, i, r) : n.call(String(i), t, r)
            }, function (e, i) {
                var a = r(n, e, this, i, n !== t);
                if (a.done) return a.value;
                var l = o(e),
                    h = String(this),
                    p = u(l, RegExp),
                    v = l.unicode,
                    g = (l.ignoreCase ? "i" : "") + (l.multiline ? "m" : "") + (l.unicode ? "u" : "") + (y ? "y" : "g"),
                    m = new p(y ? l : "^(?:" + l.source + ")", g),
                    b = i === undefined ? 4294967295 : i >>> 0;
                if (0 === b) return [];
                if (0 === h.length) return null === f(m, h) ? [h] : [];
                for (var w = 0, x = 0, M = []; x < h.length;) {
                    m.lastIndex = y ? x : 0;
                    var k, _ = f(m, y ? h : h.slice(x));
                    if (null === _ || (k = d(c(m.lastIndex + (y ? 0 : x)), h.length)) === w) x = s(h, x, v);
                    else {
                        if (M.push(h.slice(w, x)), M.length === b) return M;
                        for (var E = 1; E <= _.length - 1; E++)
                            if (M.push(_[E]), M.length === b) return M;
                        x = w = k
                    }
                }
                return M.push(h.slice(w)), M
            }]
        }), !y)
    }, function (e, t, r) {
        "use strict";
        var n = r(0),
            i = r(242);
        n({
            target: "String",
            proto: !0,
            forced: r(243)("sub")
        }, {
            sub: function () {
                return i(this, "sub", "", "")
            }
        })
    }, function (e, t, r) {
        var n = r(22),
            i = /"/g;
        e.exports = function (e, t, r, o) {
            var a = String(n(e)),
                u = "<" + t;
            return "" !== r && (u += " " + r + '="' + String(o).replace(i, "&quot;") + '"'), u + ">" + a + "</" + t + ">"
        }
    }, function (e, t, r) {
        var n = r(1);
        e.exports = function (e) {
            return n((function () {
                var t = "" [e]('"');
                return t !== t.toLowerCase() || t.split('"').length > 3
            }))
        }
    }, function (e, t, r) {
        "use strict";
        r(0)({
            target: "URL",
            proto: !0,
            enumerable: !0
        }, {
            toJSON: function () {
                return URL.prototype.toString.call(this)
            }
        })
    }, function (e, t, r) {
        "use strict";
        function n(e) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        r(36), r(69), r(70), r(126), r(129), r(19), r(72), r(58), r(40), r(181), r(75), r(28), r(14), r(182), r(17), r(59), r(71), r(33), r(74), r(76), r(77), r(78), r(79), r(80), r(81), r(82), r(83), r(84), r(85), r(86), r(87), r(88), r(89), r(90), r(91), r(92), r(93), r(94), r(95), r(96), r(97), r(98), r(99), r(41);
        var i = i || function () {
            var e = {
                    register: function (t, r, n) {
                        e[t] || (e[t] = {});
                        var i = e[t];
                        i[r] || (i[r] = n)
                    },
                    exists: function (t, r) {
                        return !!e[t] && !!e[t][r]
                    }
                },
                t = function () {
                    if ("undefined" != typeof document) try {
                        throw new Error
                    } catch (t) {
                        if (t.stack) {
                            var e = /\w+:\/\/(.+?\/)*.+\.js/.exec(t.stack);
                            return e && e.length > 0 ? e[0] : null
                        }
                    } else if ("undefined" != typeof self) return self.location.href;
                    return null
                }(),
                r = "undefined" != typeof Worker,
                i = "undefined" != typeof importScripts,
                o = "undefined" != typeof Uint8Array,
                a = function () {
                    try {
                        return Object.defineProperty({}, "oncomplete", {}), !0
                    } catch (e) {
                        return !1
                    }
                }(),
                u = r,
                s = function (e, t, r, n, i) {
                    if (a) {
                        var o = {};
                        n && (o.get = n), i && (o.set = i), Object.defineProperty(e, t, o)
                    } else e[t] = r
                },
                c = {},
                f = function () {
                    var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                        t = "undefined" != typeof btoa;
                    function r(t) {
                        for (t = t.replace(/-/g, "+").replace(/_/g, "/"); t.length % 4 != 0;) t += "=";
                        var r, n, i, o, a, u, s, c = [];
                        for (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""), s = 0; s < t.length; s += 4) r = e.indexOf(t.charAt(s)) << 2 | (o = e.indexOf(t.charAt(s + 1))) >> 4, n = (15 & o) << 4 | (a = e.indexOf(t.charAt(s + 2))) >> 2, i = (3 & a) << 6 | (u = e.indexOf(t.charAt(s + 3))), c.push(r), 64 !== a && c.push(n), 64 !== u && c.push(i);
                        return c
                    }
                    function n(e) {
                        return Object.prototype.toString.call(e).slice(8, -1)
                    }
                    function i(e) {
                        return [e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e]
                    }
                    return {
                        toBase64: function (r, n) {
                            var i, o, a, u, s, c, f, l, h = "";
                            if (n || (n = !1), (r.pop || r.subarray) && (r = String.fromCharCode.apply(null, r)), t) h = btoa(r);
                            else
                                for (l = 0; l < r.length; l += 3) u = (i = r.charCodeAt(l)) >> 2, s = (3 & i) << 4 | (o = r.charCodeAt(l + 1)) >> 4, c = (15 & o) << 2 | (a = r.charCodeAt(l + 2)) >> 6, f = 63 & a, isNaN(o) ? c = f = 64 : isNaN(a) && (f = 64), h = h + e.charAt(u) + e.charAt(s) + e.charAt(c) + e.charAt(f);
                            return n ? h.replace(/\+/g, "-").replace(/\//g, "_").replace(/\=/g, "") : h
                        },
                        base64ToString: function (e) {
                            if (t) {
                                for (e = e.replace(/-/g, "+").replace(/_/g, "/"); e.length % 4 != 0;) e += "=";
                                return atob(e)
                            }
                            return String.fromCharCode.apply(null, r(e))
                        },
                        base64ToBytes: r,
                        getObjectType: n,
                        bytesToHexString: function (e, t) {
                            var r = "";
                            void 0 === t && (t = !1);
                            for (var n = 0; n < e.length; n++) {
                                t && n % 4 == 0 && 0 !== n && (r += "-");
                                var i = e[n].toString(16).toUpperCase();
                                1 === i.length && (r += "0"), r += i
                            }
                            return r
                        },
                        bytesToInt32: function (e, t) {
                            return e[t = t || 0] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]
                        },
                        stringToBytes: function (e) {
                            for (var t = new Array(e.length), r = 0; r < t.length; r++) t[r] = e.charCodeAt(r);
                            return t
                        },
                        unpackData: function (e, t, n) {
                            var i, o = r(e),
                                a = [];
                            if (isNaN(t)) return o;
                            for (i = 0; i < o.length; i += t) a.push(o.slice(i, i + t));
                            if (n)
                                for (i = 0; i < a.length; i++) a[i] = (a[i][0] << 24) + (a[i][1] << 16) + (a[i][2] << 8) + a[i][3];
                            return a
                        },
                        hexToBytesArray: function (e) {
                            e = e.replace(/\-/g, "");
                            for (var t = []; e.length >= 2;) t.push(parseInt(e.substring(0, 2), 16)), e = e.substring(2, e.length);
                            return t
                        },
                        int32ToBytes: i,
                        int32ArrayToBytes: function (e) {
                            for (var t = [], r = 0; r < e.length; r++) t = t.concat(i(e[r]));
                            return t
                        },
                        toArray: function (e) {
                            return e ? e.pop ? e : (e.isView && (e = Uint8Array(e)), 1 === e.length ? [e[0]] : Array.apply(null, e)) : []
                        },
                        arraysEqual: function (e, t) {
                            var r = !0;
                            e.length !== t.length && (r = !1);
                            for (var n = 0; n < e.length; n++) e[n] !== t[n] && (r = !1);
                            return r
                        },
                        clone: function (e) {
                            var t = {};
                            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                            return t
                        },
                        xorVectors: function (e, t) {
                            for (var r = Math.min(e.length, t.length), n = new Array(r), i = 0; i < r; i += 1) n[i] = e[i] ^ t[i];
                            return n
                        },
                        padEnd: function (e, t, r) {
                            for (; e.length < r;) e.push(t);
                            return e
                        },
                        padFront: function (e, t, r) {
                            for (; e.length < r;) e.unshift(t);
                            return e
                        },
                        getVector: function (e, t) {
                            t || (t = 0);
                            for (var r = new Array(e), n = 0; n < e; n += 1) r[n] = t;
                            return r
                        },
                        verifyByteArray: function (e) {
                            if ("Array" !== n(e)) return !1;
                            for (var t, r = 0; r < e.length; r++)
                                if (t = e[r], isNaN(t) || t < 0 || t > 255) return !1;
                            return !0
                        }
                    }
                }(),
                l = function () {
                    function t(e) {
                        return i && self.postMessage(e), e
                    }
                    return {
                        jsCryptoRunner: function (r) {
                            var n, i = r.data.operationType;
                            if (!e.exists(i, r.data.algorithm.name)) throw new Error("unregistered algorithm.");
                            var o = e[i][r.data.algorithm.name],
                                a = r.data;
                            return "process" === a.operationSubType ? (o(a), n = t({
                                type: "process"
                            })) : n = t(o(a)), n
                        }
                    }
                }();
            i && (self.onmessage = function (e) {
                if (e.data.prngSeed) {
                    var t = e.data.prngSeed;
                    G.init(t)
                } else l.jsCryptoRunner(e)
            });
            var h = function () {
                var e = f;
                function t(e) {
                    var t = e.algorithm.name.slice(0, 3).toLowerCase();
                    return "rsa" === t ? "RSA" : "ecd" === t ? "EC" : "oct"
                }
                var r = {
                    hmac: function (e) {
                        return "HS" + e.hash.name.substring(e.hash.name.indexOf("-") + 1)
                    },
                    "aes-cbc": function (e) {
                        return "A" + e.length.toString() + "CBC"
                    },
                    "aes-gcm": function (e) {
                        return "A" + e.length.toString() + "GCM"
                    },
                    "rsaes-pkcs1-v1_5": function (e) {
                        return "RSA1_5"
                    },
                    "rsassa-pkcs1-v1_5": function (e) {
                        return "RS" + e.hash.name.substring(e.hash.name.indexOf("-") + 1)
                    },
                    "rsa-oaep": function (e) {
                        return "RS-OAEP-" + e.hash.name.substring(e.hash.name.indexOf("-") + 1)
                    },
                    "rsa-pss": function (e) {
                        return "PS-" + e.hash.name.substring(e.hash.name.indexOf("-") + 1)
                    },
                    ecdsa: function (e) {
                        return "EC-" + e.namedCurve.substring(e.namedCurve.indexOf("-") + 1)
                    }
                };
                return {
                    keyToJwkOld: function (r, n) {
                        var i = {};
                        if (i.kty = t(r), i.extractable = r.extractable, n.pop) i.k = e.toBase64(n, !0);
                        else
                            for (var o in n) n[o].pop && (i[o] = e.toBase64(n[o], !0));
                        return r.algorithm.namedCurve && (i.crv = r.algorithm.namedCurve),
                            function (e) {
                                for (var t = [], r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
                                return 0 === t[t.length - 1] && t.pop(), t
                            }(JSON.stringify(i, null, "\t"))
                    },
                    keyToJwk: function (n, i) {
                        var o = {};
                        if (o.kty = t(n), o.ext = n.extractable, o.alg = r[n.algorithm.name.toLowerCase()](n.algorithm), o.key_ops = n.keyUsage, i.pop) o.k = e.toBase64(i, !0);
                        else
                            for (var a in i) i[a].pop && (o[a] = e.toBase64(i[a], !0));
                        return n.algorithm.namedCurve && (o.crv = n.algorithm.namedCurve), o
                    },
                    jwkToKey: function (t, r, n) {
                        for (var i = JSON.parse(JSON.stringify(t)), o = 0; o < n.length; o += 1) {
                            var a = i[n[o]];
                            a && (i[n[o]] = e.base64ToBytes(a))
                        }
                        return i
                    }
                }
            }();
            var p = p || function () {
                for (var e = Math.floor(3), t = [1, 256], r = 2; r <= e; r++) t[r] = 256 * t[r - 1];
                var i = [0],
                    o = [1];
                function a(e) {
                    var t, r = null;
                    if (arguments.length && "number" != typeof arguments[0]) {
                        if ("object" === n(arguments[0]))
                            for (r = new Array(e.length), t = 0; t < e.length; t += 1) r[t] = e[t]
                    } else
                        for (r = new Array(e), t = 0; t < e; t += 1) r[t] = 0;
                    return r
                }
                function u(e) {
                    for (var t = new Array(e.length), r = 0; r < e.length;) t[r] = e[e.length - r - 1], r += 1;
                    return t
                }
                function s(e) {
                    for (var t = 8388608, r = 24; r-- > 0 && (e & t) !== t;) t >>>= 1;
                    return r
                }
                function c(e, t, r, n, i) {
                    for (; i-- > 0;) r[n + i] = e[t + i]
                }
                function f(e) {
                    var t;
                    for (t = 0; t < e.length; t += 1)
                        if (0 !== e[t]) return !1;
                    return !0
                }
                function l(r) {
                    var n = Math.floor((r.length + e - 1) / e),
                        i = new Array(n);
                    i[0] = 0;
                    for (var o = 0, a = 0, u = 0, s = r.length - 1; s >= 0; s--) o += t[u++] * (255 & r[s]), t[u] === 1 << 24 && (u = 0, i[a++] = o, o = 0);
                    for (0 !== o && (i[a] = o); null == i[--n];) i[n] = 0;
                    return i
                }
                function h(e, t) {
                    if (void 0 === t)
                        if (e <= 1) t = 1;
                        else {
                            var r = Math.log(e) / Math.LN2;
                            t = Math.ceil(r / 24)
                        } for (var n = []; e > 0;) n.push(e % (1 << 24)), e = Math.floor(e / (1 << 24));
                    for (; n.length < t;) n.push(0);
                    return n
                }
                function d(e) {
                    for (var t = e.length - 1; t >= 0; t--)
                        if (e[t] !== undefined && 0 !== e[t]) return t;
                    return 0 === e[0] ? -1 : 0
                }
                function y(e, t) {
                    var r = 0,
                        n = d(e) + 1,
                        i = d(t) + 1;
                    if (n > i) r = 1;
                    else if (i > n) r = -1;
                    else
                        for (; n-- > 0 && 0 === r;) r = e[n] - t[n];
                    return r
                }
                function v(e, t, r) {
                    var n = d(e);
                    if (e.length = t || n + 1, r)
                        for (; ++n < e.length;) e[n] = 0;
                    return e.length <= 0 && (e[0] = 0, e.length = 1), e
                }
                function g(e, t, r, n) {
                    if (r === undefined) r = 1;
                    else if (r >= 24 || r < 0) throw new Error("bit count must be smaller than DIGIT_BITS and positive in shiftLeft");
                    n === undefined && (n = e.length);
                    var i = 24 - r;
                    t[n] = e[n - 1] >>> 24 - r || t[n];
                    for (var o = n - 1; o > 0; o--) t[o] = 16777215 & (e[o] << r | e[o - 1] >>> i);
                    t[0] = e[0] << r & 16777215
                }
                function m(e, t, r) {
                    var n = e,
                        i = t;
                    t.length < e.length && (n = t, i = e);
                    var o, a = n.length,
                        u = 0;
                    for (o = 0; o < a; o += 1) u += n[o] + i[o], r[o] = 16777215 & u, u >>= 24;
                    for (o = a; o < i.length; o += 1) u += i[o], r[o] = 16777215 & u, u >>= 24;
                    return r.length = i.length, 0 !== u && (r[o] = 16777215 & u), u
                }
                function b(e, t, r) {
                    var n = t.length;
                    if (e.length < t.length && (n = d(t) + 1, e.length < n)) throw new Error("Subtrahend is longer than minuend, not supported.");
                    var i, o = 0;
                    for (i = 0; i < n; i += 1) o += e[i] - t[i], r[i] = 16777215 & o, o >>= 24;
                    for (; i < e.length;) o += e[i], r[i++] = 16777215 & o, o >>= 24;
                    return o
                }
                function w(e, t, r) {
                    var n, i, o, a = "number" == typeof t ? [t] : t,
                        u = Math.max(e.length, a.length);
                    for (n = 0; n < u; n += 1) r[n] = 0;
                    for (n = 0; n < a.length; n += 1) {
                        for (o = 0, i = 0; i < e.length; i += 1) o += e[i] * a[n] + r[n + i], r[n + i] = 16777215 & o, o = Math.floor(o / (1 << 24));
                        r[e.length + n] = 16777215 & o
                    }
                    return r.length = e.length + a.length, r
                }
                function x(e, t, r, n, i, o) {
                    var a, u, f, l, h, p, y, m = d(e) + 1,
                        b = d(t) + 1;
                    if (m < b) return c(e, 0, n, 0, e.length), n.length = e.length, v(n), r[0] = 0, void(r.length = 1);
                    if (0 === b || 1 === b && 0 === t[b - 1]) throw new Error("Division by zero.");
                    if (1 === b) {
                        for (h = t[0], u = 0, y = m - 1; y >= 0; y--) l = u * (1 << 24) + e[y], r[y] = l / h & 16777215, u = l - r[y] * h & 16777215;
                        return r.length = m, v(r), n[0] = u, void(n.length = 1)
                    }
                    var w = 23 - s(t[b - 1]),
                        x = i || [];
                    x.length = b, g(t, x, w, b);
                    var M = o || [];
                    for (M.length = m, g(e, M, w, m), M[m] = M[m] || 0, r.length = m - b + 1, n.length = b, y = m - b; y >= 0; y--) {
                        for (a = Math.floor((M[y + b] * (1 << 24) + M[y + b - 1]) / x[b - 1]), u = M[y + b] * (1 << 24) + M[y + b - 1] - a * x[b - 1];
                            (a >= 1 << 24 || a * x[b - 2] > u * (1 << 24) + M[y + b - 2]) && (a -= 1, (u += x[b - 1]) < 1 << 24););
                        for (f = 0, p = 0; p < b; p++) l = a * x[p], h = M[p + y] - f - (16777215 & l), M[p + y] = 16777215 & h, f = Math.floor(l / (1 << 24)) - Math.floor(h / (1 << 24));
                        if (h = M[y + b] - f, M[y + b] = 16777215 & h, r[y] = 16777215 & a, h < 0) {
                            for (r[y] = r[y] - 1, f = 0, p = 0; p < b; p++) h = M[p + y] + x[p] + f, M[p + y] = 16777215 & h, f = h >> 24;
                            M[y + b] = M[y + b] + f & 16777215
                        }
                    }
                    for (p = 0; p < b; p++) n[p] = 16777215 & (M[p] >>> w | M[p + 1] << 24 - w);
                    v(r), v(n)
                }
                function M(e, t, r, n, i, o) {
                    var a = [];
                    return w(e, t, a), x(a, r, a, n, i, o), n
                }
                function k(e, t, r, n, i) {
                    var o;
                    if (f(e)) return c(t, 0, i, 0, t.length), i.length = t.length, 0;
                    if (f(t)) return c(e, 0, i, 0, e.length), i.length = e.length, 0;
                    y(e, t) < 0 ? (o = e.slice(0), c(t, 0, i, 0, t.length), i.length = t.length) : (o = t.slice(0), c(e, 0, i, 0, e.length), i.length = e.length), v(i), v(o);
                    var a, u, s = new Array(i.length),
                        l = new Array(i.length),
                        h = new Array(i.length),
                        p = n !== undefined;
                    p && ((a = new Array(i.length))[0] = 1, a.length = 1, n[0] = 0, n.length = 1);
                    var d = new Array(i.length),
                        g = r !== undefined;
                    g && ((u = new Array(i.length))[0] = 0, u.length = 1, r[0] = 1, r.length = 1);
                    for (var b, M = -1, k = r, _ = n, E = i; !f(o);) x(i, o, s, l, d, h), g && (w(s, u, d), m(d, r, d), v(d), b = r, r = u, u = d, d = b), p && (w(s, a, h), m(h, n, h), v(h), b = n, n = a, a = h, h = b), b = i, i = o, o = l, l = b, M++;
                    return g && (c(r, 0, k, 0, r.length), k.length = r.length), p && (c(n, 0, _, 0, n.length), _.length = n.length), c(i, 0, E, 0, i.length), E.length = i.length, M
                }
                function _(e) {
                    function t(e, t, r, n) {
                        var i, o, a, u, s, c = 0,
                            f = (n = n || this).m.length,
                            l = f - 1,
                            h = n.mPrime,
                            p = n.m0,
                            d = e[0],
                            y = 0;
                        for (a = 0; a < f; a += 1) r[a] = 0;
                        for (a = 0; a < f; a += 1) {
                            for (y = d * (i = t[a]) + r[0], r[0] = 16777215 & y, y = Math.floor(y / (1 << 24)), u = 1; u < f; u += 1) y = e[u] * i + r[u] + y, r[u] = 16777215 & y, y = Math.floor(y / (1 << 24));
                            for (c += y, o = r[0] * h & 16777215, y = Math.floor((r[0] + p * o) / (1 << 24)), u = 1, s = 0; u < f; u += 1, s++) y = n.m[u] * o + r[u] + y, r[s] = 16777215 & y, y = Math.floor(y / (1 << 24));
                            c += y, r[l] = 16777215 & c, c = Math.floor(c / (1 << 24))
                        }
                        var v = n.temp1 === r ? n.temp2 : n.temp1,
                            g = 0;
                        for (a = 0; a < f; a += 1) g = r[a] - n.m[a] + (g >> 24), v[a] = 16777215 & g;
                        for (g = (c >>> 24) + ((g = (16777215 & c) + (g >> 24)) >> 24), a = 0; a < f; a += 1) r[a] = g & (v[a] ^ r[a]) ^ v[a]
                    }
                    var r = e,
                        n = r[0],
                        i = r.length,
                        o = a(i);
                    o[0] = 1;
                    var u = function (e) {
                            for (var t = 1, r = 2, n = 3, i = n & e, o = 2; o <= 24; o += 1) r < i && (t += r), r <<= 1, i = e * t & (n = n << 1 | 1);
                            return 1 + (16777215 & ~t)
                        }(n),
                        f = a(2 * i + 1),
                        l = a(i + 1),
                        h = a(2 * i + 1),
                        p = a(2 * i + 1),
                        d = l;
                    d[i] = 1, x(d, r, f, l, h, p);
                    var y = v(l, i, !0),
                        g = a(2 * i + 1),
                        m = g;
                    m[2 * i] = 1, x(m, r, f, g, h, p), v(g, i, !0);
                    var b = a(i);
                    t(g, g, b, {
                        m: r,
                        mPrime: u,
                        m0: n,
                        temp1: h,
                        temp2: p
                    });
                    var w = new Array(4);
                    return w[0] = y, w[1] = new Array(i), w[2] = new Array(i), w[3] = new Array(i), {
                        m: e,
                        m0: n,
                        mPrime: u,
                        rSquaredModm: g,
                        s: i,
                        rModM: y,
                        rCubedModm: b,
                        one: o,
                        temp1: h,
                        temp2: p,
                        convertToMontgomeryForm: function (e) {
                            if (e.length < this.s) {
                                e.length = this.s;
                                for (var t = 0; t < this.s; t++) e[t] = isNaN(e[t]) ? 0 : e[t]
                            }
                            var r = a(e.length);
                            for (this.montgomeryMultiply(e, this.rSquaredModm, r), t = 0; t < this.s; t += 1) e[t] = r[t]
                        },
                        convertToStandardForm: function (e) {
                            this.montgomeryMultiply(e, this.one, this.temp1);
                            for (var t = 0; t < this.s; t += 1) e[t] = this.temp1[t]
                        },
                        montgomeryMultiply: t,
                        modExp: function (e, t, r) {
                            var n;
                            for (n = t.length - 1; n > 0 && 0 === t[n]; n--);
                            var i = 24 * n + s(t[n]) + 1,
                                o = (i += 2 - i % 2) % 24 - 2;
                            o < 0 && (o += 24);
                            var a = 3 << o;
                            for (n = 1; n < w.length; n++) M(w[n - 1], e, this.m, w[n], h, p), v(w[n], this.s, !0);
                            var u, f = new Array(this.s),
                                l = r,
                                d = p;
                            for (c(this.rModM, 0, d, 0, this.s); i > 0;) this.montgomeryMultiply(d, d, l), this.montgomeryMultiply(l, l, f), u = (t[Math.floor((i - 1) / 24)] & a) >>> o, this.montgomeryMultiply(f, w[u], d), i -= 2, o -= 2, 0 === (a >>>= 2) && (a = 3 << 22, o = 22);
                            return this.montgomeryMultiply(d, this.one, r), r
                        }
                    }
                }
                return {
                    DIGIT_BITS: 24,
                    DIGIT_NUM_BYTES: e,
                    DIGIT_MASK: 16777215,
                    DIGIT_BASE: 1 << 24,
                    DIGIT_MAX: 16777215,
                    Zero: i,
                    One: o,
                    normalizeDigitArray: v,
                    swapEndianness: u,
                    bytesToDigits: l,
                    stringToDigits: function (e, t) {
                        e = e.replace(/^\s+|\s+$/g, "");
                        var r = [0],
                            n = [0];
                        t = t || 10;
                        for (var i = 0; i < e.length; i += 1) {
                            var o = parseInt(e[i], t);
                            if (isNaN(o)) throw new Error("Failed to convert string to integer in radix " + t.toString());
                            w(r, t, n), m(n, [o], r), v(r)
                        }
                        return r
                    },
                    digitsToString: function (e, t) {
                        if (1 << 24 <= (t = t || 10)) throw new Error("DIGIT_BASE is smaller than RADIX; cannot convert.");
                        var r, n = e.length,
                            i = [],
                            o = [],
                            a = [],
                            u = [],
                            s = [],
                            c = [],
                            f = "",
                            l = "0";
                        for (s[0] = t; Math.floor((1 << 24) / s[0]) >= t;) s[0] = s[0] * t, l = l.concat("0");
                        for (r = 0; r < n; r += 1) c[r] = e[r];
                        for (;;) {
                            var h = !0;
                            for (r = 0; r < c.length; r += 1)
                                if (0 !== c[r]) {
                                    h = !1;
                                    break
                                } if (h) break;
                            x(c, s, i, o, a, u), v(i, c.length, !0);
                            var p = o[0].toString(t);
                            f = l.substring(0, l.length - p.length) + p + f;
                            var d = c;
                            c = i, i = d
                        }
                        for (; 0 !== f.length && "0" === f[0];) f = f.substring(1, f.length);
                        return 0 === f.length && (f = "0"), f
                    },
                    intToDigits: h,
                    digitsToBytes: function (t, r, n) {
                        var i, o, a, s = [0];
                        for (void 0 === r && (r = !0), i = 0; i < t.length; i += 1)
                            for (a = t[i], o = 0; o < e; o += 1) s[i * e + o] = 255 & a, a = Math.floor(a / 256);
                        if (s = u(s), n === undefined && (n = 1), r)
                            for (; s.length > n && 0 === s[0];) s.shift();
                        return s
                    },
                    sequenceEqual: function (e, t) {
                        if (e.length !== t.length) return !1;
                        for (var r = 0; r < e.length; r += 1)
                            if (e[r] !== t[r]) return !1;
                        return !0
                    },
                    isZero: f,
                    isEven: function (e) {
                        return 0 == (1 & e[0])
                    },
                    powerOfTwo: function (e) {
                        var t = a(Math.ceil((e + 1) / 8));
                        return t[0] = Math.pow(2, e % 8), t
                    },
                    shiftRight: function (e, t, r, n) {
                        if (r === undefined) r = 1;
                        else if (r >= 24 || r < 0) throw new Error("Invalid bit count for shiftRight");
                        n === undefined && (n = e.length);
                        for (var i = n - 1, o = 24 - r, a = 0; a < i; a++) t[a] = 16777215 & (e[a + 1] << o | e[a] >>> r);
                        t[i] = e[i] >>> r
                    },
                    shiftLeft: g,
                    compareDigits: y,
                    computeBitArray: function (e) {
                        for (var t = a(8 * e.length), r = 0, n = e.length - 1; n >= 0;) {
                            for (var i = 0; i < 8;) {
                                var o = 1 << i,
                                    u = (e[n] & o) === o ? 1 : 0,
                                    s = 8 * (e.length - n - 1) + i;
                                1 === u && (r = s + 1), t[s] = u, i += 1
                            }
                            n--
                        }
                        return t.slice(0, r)
                    },
                    bitLength: function (e) {
                        for (var t = 0, r = 0; t < e.length;) {
                            if (0 === r)
                                for (var n = 7; n >= 0 && 0 === r;) {
                                    var i = 1 << n;
                                    (e[t] & i) === i && (r = n + 1), n--
                                } else r += 8;
                            t += 1
                        }
                        return r
                    },
                    fixedWindowRecode: function (e, t, r) {
                        e = e.slice();
                        for (var n = [], i = Math.pow(2, t), o = Math.pow(2, t - 1), a = 0; a < r; a++) n[a] = e[0] % i - o, e[0] = e[0] - n[a], p.shiftRight(e, e, t - 1);
                        return n[a] = e[0], n
                    },
                    IntegerGroup: function (e) {
                        var t = l(e),
                            r = t.length,
                            n = h(0, r),
                            i = h(1, r),
                            o = a(r),
                            u = a(r);
                        function s(e, t) {
                            return {
                                m_digits: e,
                                m_group: t,
                                equals: function (e) {
                                    return 0 === y(this.m_digits, e.m_digits) && this.m_group.equals(this.m_group, e.m_group)
                                }
                            }
                        }
                        return {
                            m_modulus: t,
                            m_digitWidth: r,
                            montmul: new _(t),
                            createElementFromInteger: function (e) {
                                return s(h(e, this.m_digitWidth), this)
                            },
                            createElementFromBytes: function (e) {
                                var t = l(e);
                                if (p.compareDigits(t, this.m_modulus) >= 0) throw new Error("The number provided is not an element of this group");
                                return v(t, this.m_digitWidth, !0), s(t, this)
                            },
                            createElementFromDigits: function (e) {
                                return p.normalizeDigitArray(e, this.m_digitWidth, !0), s(e, this)
                            },
                            equals: function (e) {
                                return 0 === y(this.m_modulus, e.m_modulus)
                            },
                            add: function (e, t, r) {
                                var n, i = this.m_digitWidth,
                                    o = r.m_digits;
                                p.add(e.m_digits, t.m_digits, o);
                                var a = y(o, this.m_modulus) >= 0 ? 16777215 : 0,
                                    u = 0;
                                for (n = 0; n < i; n += 1) u = o[n] - (this.m_modulus[n] & a) + u, o[n] = 16777215 & u, u >>= 24;
                                o.length = i
                            },
                            subtract: function (e, t, r) {
                                var n, i = this.m_digitWidth,
                                    o = r.m_digits,
                                    a = p.subtract(e.m_digits, t.m_digits, r.m_digits);
                                if (-1 === a)
                                    for (a = 0, n = 0; n < i; n += 1) a += o[n] + this.m_modulus[n], o[n] = 16777215 & a, a >>= 24
                            },
                            multiply: function (e, t, r) {
                                return p.modMul(e.m_digits, t.m_digits, this.m_modulus, r.m_digits, o, u)
                            },
                            inverse: function (e, t) {
                                p.modInv(e.m_digits, this.m_modulus, t.m_digits)
                            },
                            modexp: function (e, t, r) {
                                if (r = r || s([], this), 0 === y(t, n)) r.m_digits = h(1, this.m_digitWidth);
                                else if (0 === y(t, i)) {
                                    for (var o = 0; o < e.m_digits.length; o++) r.m_digits[o] = e.m_digits[o];
                                    r.m_digits.length = e.m_digits.length
                                } else this.montmul.modExp(e.m_digits, t, r.m_digits), r.m_digits.length = this.montmul.s;
                                return r
                            }
                        }
                    },
                    add: m,
                    subtract: b,
                    multiply: w,
                    divRem: x,
                    reduce: function (e, t, r, n, i) {
                        return x(e, t, [], r, n, i), r
                    },
                    modInv: function (e, t, r, n) {
                        var i = new Array(t.length),
                            a = new Array(t.length),
                            u = new Array(t.length),
                            s = k(e, t, a, i, u);
                        return r = r || [], 0 !== y(u, o) ? (r[0] = NaN, r.length = 1) : (1 == (1 & s) ? b(t, i, r) : (c(i, 0, r, 0, i.length), r.length = i.length), n ? v(r, t.length, !0) : v(r)), r
                    },
                    modExp: function (e, t, r, n) {
                        if (n = n || [], 0 === y(t, i)) n[0] = 1;
                        else if (0 === y(t, o)) c(e, 0, n, 0, e.length), n.length = e.length;
                        else {
                            var a = new _(r);
                            v(e, a.s, !0), a.modExp(e, t, n), n.length = r.length
                        }
                        return n
                    },
                    modMul: M,
                    MontgomeryMultiplier: _,
                    gcd: function (e, t, r) {
                        var n = e,
                            i = t;
                        return y(e, t) > 0 && (n = t, i = e), k(n, i, undefined, undefined, r), v(r)
                    }
                }
            }();
            var d = d || function () {
                function e(e) {
                    var t, r = null;
                    if (arguments.length && "number" != typeof arguments[0]) {
                        if ("object" === n(arguments[0]))
                            for (r = [], t = 0; t < e.length; t += 1) r[t] = e[t]
                    } else
                        for (r = [], t = 0; t < e; t += 1) r[t] = 0;
                    return r
                }
                var t = p.bytesToDigits,
                    r = function (e, t, r, n, o, a) {
                        var u = e.length;
                        return {
                            p: e,
                            a: t,
                            b: r,
                            order: n,
                            generator: i(this, !1, o, a, null, !1),
                            allocatePointStorage: function () {
                                return i(this, !1, p.intToDigits(0, u), p.intToDigits(0, u))
                            },
                            createPointAtInfinity: function () {
                                return i(this, !0, p.intToDigits(0, u), p.intToDigits(0, u))
                            }
                        }
                    },
                    i = function u(t, r, n, i, o, c) {
                        var f;
                        return void 0 === o && (o = null), void 0 === c && (c = !1), s(f = {
                            equals: function (e) {
                                return function (e) {
                                    return !!e && (!(!f.isInfinity || !e.isInfinity) || (null !== f.z || null === e.z) && ((null === f.z || null !== e.z) && (null === f.z ? 0 === p.compareDigits(f.x, e.x) && 0 === p.compareDigits(f.y, e.y) && f.isInMontgomeryForm === e.isInMontgomeryForm : 0 === p.compareDigits(f.x, e.x) && 0 === p.compareDigits(f.y, e.y) && 0 === p.compareDigits(f.z, e.z) && f.isInMontgomeryForm === e.isInMontgomeryForm)))
                                }(e)
                            },
                            copy: function (e) {
                                ! function (e, t) {
                                    if (t.curve = e.curve, t.x = e.x.slice(), t.y = e.y.slice(), null !== e.z ? t.z = e.z.slice() : t.z = null, a || (t.isAffine = e.isAffine), t.isInMontgomeryForm = e.isInMontgomeryForm, t.isInfinity = e.isInfinity, !t.equals(e)) throw new Error("Instances should be equal.")
                                }(this, e)
                            },
                            clone: function () {
                                return t = u(f.curve, f.isInfinity, e(f.x), e(f.y), f.z ? e(f.z) : null, f.isInMontgomeryForm), f.ta && (t.ta = e(f.ta)), f.tb && (t.tb = e(f.tb)), t;
                                var t
                            }
                        }, "curve", t, (function () {
                            return t
                        }), (function (e) {
                            t = e
                        })), s(f, "x", n, (function () {
                            return n
                        }), (function (e) {
                            n = e
                        })), s(f, "y", i, (function () {
                            return i
                        }), (function (e) {
                            i = e
                        })), s(f, "z", o, (function () {
                            return o
                        }), (function (e) {
                            o = e
                        })), s(f, "isInMontgomeryForm", c, (function () {
                            return c
                        }), (function (e) {
                            c = e
                        })), s(f, "isInfinity", r, (function () {
                            return r
                        }), (function (e) {
                            r = e
                        })), s(f, "isAffine", null === o, (function () {
                            return null === o
                        })), f
                    },
                    o = {};
                return {
                    createCurve: function (e) {
                        var n = o[e.toUpperCase()];
                        if (!n) throw new Error(e + " Unsupported curve.");
                        if (0 === n.type) return function (e) {
                            var n = new r(t(e.p), t(e.a), t(e.b), t(e.order), t(e.gx), t(e.gy));
                            return n.type = e.type, n.name = e.name, n.generator.curve = n, n
                        }(n);
                        if (1 === n.type) return function (e) {
                            var t = p.bytesToDigits,
                                n = new r(t(e.p), t(e.a), t(e.d), t(e.order), t(e.gx), t(e.gy));
                            return n.type = e.type, 1 == n.type && (n.d = n.b.slice(), delete n.b), n.rbits = e.info[2], n.name = e.name, n.generator.curve = n, n
                        }(n);
                        throw new Error(e + " Unsupported curve type.")
                    },
                    curves: o,
                    sec1EncodingFp: function () {
                        return {
                            encodePoint: function (t) {
                                if (!t) throw new Error("point");
                                if (!t.isAffine) throw new Error("Point must be in affine form.");
                                if (t.isInMontgomeryForm) throw new Error("Point must not be in Montgomery form.");
                                if (t.isInfinity) return e(1);
                                var r = p.digitsToBytes(t.x),
                                    n = p.digitsToBytes(t.y),
                                    i = p.digitsToBytes(t.curve.p).length;
                                if (i < r.length || i < n.length) throw new Error("Point coordinate(s) are bigger than the field order.");
                                var o = e(2 * i + 1);
                                o[0] = 4;
                                for (var a = i - r.length, u = 0; u < r.length; u++) o[u + 1 + a] = r[u];
                                for (a = i - n.length, u = 0; u < n.length; u++) o[i + u + 1 + a] = n[u];
                                return o
                            },
                            decodePoint: function (t, r) {
                                if (t.length < 1) throw new Error("Byte array must have non-zero length");
                                var n = p.digitsToBytes(r.p).length;
                                if (0 === t[0] && 1 === t.length) return r.createPointAtInfinity();
                                if (4 === t[0] && t.length === 1 + 2 * n) {
                                    for (var o = e(n), a = e(n), u = 0; u < n; u++) o[u] = t[u + 1], a[u] = t[n + u + 1];
                                    var s = p.bytesToDigits(o),
                                        c = p.bytesToDigits(a);
                                    return i(r, !1, s, c)
                                }
                                throw new Error("Unsupported encoding format")
                            }
                        }
                    },
                    EllipticCurvePointFp: i,
                    EllipticCurveOperatorFp: function (t) {
                        var r = 1 === t.type,
                            n = t.p.length,
                            i = p.MontgomeryMultiplier(t.p),
                            o = t.a.slice();
                        i.convertToMontgomeryForm(o);
                        var u = p.isZero(t.a),
                            s = p.One,
                            c = e(n);
                        c[0] = 1, i.convertToMontgomeryForm(c);
                        var f = p.IntegerGroup(p.digitsToBytes(i.m), !0),
                            l = e(n),
                            h = e(n),
                            d = e(n),
                            y = e(n),
                            v = e(n),
                            g = e(n),
                            m = e(n),
                            b = e(n),
                            w = e(n),
                            x = e(n),
                            M = e(n),
                            k = e(n);
                        function _(e, t, r) {
                            var n = f.createElementFromInteger(0);
                            n.m_digits = r, f.subtract(f.createElementFromDigits(e), f.createElementFromDigits(t), n)
                        }
                        function E(e, t, r) {
                            var n = f.createElementFromInteger(0);
                            n.m_digits = r, f.add(f.createElementFromDigits(e), f.createElementFromDigits(t), n)
                        }
                        function A(e, r) {
                            var n = e.length,
                                i = t.p;
                            if (1 == (1 & e[0])) {
                                for (var o = 0, a = 0; a < n; a += 1) o += e[a] + i[a], r[a] = o & p.DIGIT_MASK, o >>>= p.DIGIT_BITS;
                                o <<= p.DIGIT_BITS - 1, p.shiftRight(r, r), r[n - 1] |= o
                            } else p.shiftRight(e, r)
                        }
                        function S(e, t, r) {
                            i.montgomeryMultiply(e, t, r)
                        }
                        function O(e, t) {
                            i.montgomeryMultiply(e, e, t)
                        }
                        function F(e, t) {
                            var r = t.clone();
                            if (L(r), !U(r)) throw new Error("Invalid Parameter");
                            var n = t.clone();
                            B(n);
                            var i, o = [t.clone()],
                                a = n.clone(),
                                u = n.clone();
                            j(n, u), K(u);
                            for (var s = 1; s < Math.pow(2, e - 2); s++) T(a, u, a), K(i = a.clone()), o[s] = i;
                            return o
                        }
                        function j(e, t) {
                            if (void 0 === e) throw new Error("point undefined");
                            if (void 0 === t) throw new Error("outputPoint undefined");
                            if (e.isAffine) throw new Error("Given point was in Affine form. Use convertToJacobian() first.");
                            if (!e.isInMontgomeryForm) throw new Error("Given point must be in Montgomery form. Use montgomeryize() first.");
                            u ? function (e, t) {
                                if (e.isInfinity) t.isInfinity = !0;
                                else {
                                    O(e.y, y), O(e.x, v), E(v, v, l), E(l, v, v), S(e.x, y, g), O(y, l), A(v, h), O(h, y), S(e.y, e.z, w);
                                    for (var r = 0; r < w.length; r += 1) t.z[r] = w[r];
                                    _(y, g, t.x), _(t.x, g, t.x), _(g, t.x, v), S(h, v, d), _(d, l, t.y), t.isInfinity = !1, t.isInMontgomeryForm = !0
                                }
                            }(e, t) : function (e, t) {
                                e.isInfinity ? t.isInfinity = !0 : (O(e.z, h), S(e.z, e.y, v), E(e.x, h, d), _(e.x, h, h), t.z = v.slice(), S(h, d, y), A(y, d), E(y, d, h), O(e.y, d), O(h, v), S(e.x, d, y), _(v, y, v), _(v, y, t.x), _(y, t.x, v), O(d, y), S(h, v, d), _(d, y, t.y), t.isInfinity = !1, t.isInMontgomeryForm = !0)
                            }(e, t)
                        }
                        function P(e, t, r) {
                            if (e.isInfinity) return t.copy(r), void this.convertToJacobianForm(r);
                            if (t.isInfinity) e.copy(r);
                            else {
                                O(e.z, g), S(e.z, g, m), S(t.x, g, v), S(t.y, m, g), _(v, e.x, h), _(g, e.y, d), O(d, v), O(h, m), S(m, e.x, g), S(h, m, l), _(v, g, y), _(y, g, y), S(e.z, h, v), _(y, g, y), S(l, e.y, m), _(y, l, y);
                                for (var n = !0, i = 0; i < y.length; i++)
                                    if (0 !== y[i]) {
                                        n = !1;
                                        break
                                    } if (n) {
                                    for (i = 0; i < r.x.length; i++) r.x[i] = 0, r.y[i] = 0, r.z[i] = 0;
                                    r.y[0] = 1
                                } else E(m, m, h), S(v, y, r.z), S(d, y, v), O(y, l), E(h, v, h), S(l, g, v), O(h, b), S(l, y, g), _(b, v, r.x), _(r.x, v, r.x), _(r.x, g, r.x), _(r.x, v, y), S(g, m, l), S(h, y, v), _(v, l, r.y), r.isInfinity = !1, r.isInMontgomeryForm = !0
                            }
                        }
                        function T(e, t, r) {
                            if (null === e) throw new Error("jacobianPoint");
                            if (null === t) throw new Error("affinePoint");
                            if (null === r) throw new Error("outputPoint");
                            if (e.curve !== t.curve || e.curve !== r.curve) throw new Error("All points must be from the same curve object.");
                            if (e.isAffine) throw new Error("Given jacobianPoint was in Affine form. Use ConvertToJacobian() before calling DoubleJacobianAddAffinePoints().");
                            if (!t.isAffine) throw new Error("Given affinePoint was in Jacobian form. Use ConvertToAffine() before calling DoubleJacobianAddAffinePoints().");
                            if (r.isAffine) throw new Error("Given jacobianPoint was in Jacobian form. Use ConvertToJacobian() before calling DoubleJacobianAddAffinePoints().");
                            if (!e.isInMontgomeryForm) throw new Error("Jacobian point must be in Montgomery form");
                            if (!t.isInMontgomeryForm) throw new Error("Affine point must be in Montgomery form");
                            if (e.isInfinity) return t.copy(r), void this.convertToJacobianForm(r);
                            if (t.isInfinity) e.copy(r);
                            else {
                                var i;
                                for (O(e.z, h), S(h, e.z, d), S(h, t.x, y), S(d, t.y, v), _(y, e.x, h), _(v, e.y, d), i = 0; i < h.length; i += 1)
                                    if (0 !== h[i]) {
                                        S(e.z, h, l);
                                        for (var o = 0; o < n; o += 1) r.z[o] = l[o];
                                        return O(h, y), S(y, h, v), S(y, e.x, g), E(g, g, h), O(d, r.x), _(r.x, h, r.x), _(r.x, v, r.x), _(g, r.x, y), S(d, y, g), S(e.y, v, m), _(g, m, r.y), r.isInfinity = !1, void(r.isInMontgomeryForm = !0)
                                    } for (i = 0; i < d.length; i += 1)
                                    if (0 !== d[i]) return r.isInfinity = !0, void(r.isInMontgomeryForm = !0);
                                t.copy(r), this.convertToJacobianForm(r), this.double(r, r), r.isInMontgomeryForm = !0
                            }
                        }
                        function D(e, r, i, o) {
                            if (r.isInfinity || p.isZero(e)) i.isInfinity = !0;
                            else {
                                if (p.compareDigits(e, t.order) >= 0) throw new Error("The scalar k must be in the range 1 <= k < order.");
                                if (e = e.slice(), 1 === r.curve.type) {
                                    var a = "undefined" != typeof r.ta;
                                    a || H(r),
                                        function (e, t, r, i) {
                                            if (! function (e) {
                                                    e.ta && W(e = e.clone());
                                                    if (p.modMul(e.y, e.y, e.curve.p, y), p.modMul(e.x, e.x, e.curve.p, d), p.add(d, y, h), p.reduce(v, e.curve.p, v), p.modMul(d, y, e.curve.p, v), p.modMul(e.curve.d, v, e.curve.p, y), p.add(y, [1], d), p.reduce(d, e.curve.p, d), p.subtract(h, d, h), p.reduce(h, e.curve.p, h), 0 == p.isZero(h)) return !1;
                                                    return !0
                                                }(t)) throw new Error("Invalid Parameter");
                                            var o = t.curve.rbits;
                                            i = void 0 === i || i;
                                            var a, u, s = n <= 8 ? 5 : 6,
                                                c = Math.floor((o + (s - 2)) / (s - 1));
                                            e = e.slice();
                                            var f = t.clone();
                                            H(f), i && (V(f, f), V(f, f));
                                            var l = z(1 << s - 2, f),
                                                g = 1 & e[0],
                                                m = [];
                                            for (_(t.curve.order, e, m), a = 0; a < e.length; a++) e[a] = g - 1 & (e[a] ^ m[a]) ^ e[a];
                                            var b = p.fixedWindowRecode(e, s, c),
                                                w = Math.floor(Math.abs(b[c]) - 1) / 2,
                                                x = l[w];
                                            for (f.x = x.x.slice(), f.y = x.y.slice(), f.z = x.z.slice(), a = c - 1; a >= 0; a--) {
                                                for (u = 0; u < s - 1; u++) V(f, f);
                                                w = Math.floor((Math.abs(b[a]) - 1) / 2);
                                                var M = N(l, w);
                                                b[a] < 0 && (_(t.curve.p, M.x, M.x), _(t.curve.p, M.td, M.td)), G(M, f, f)
                                            }
                                            for (_(t.curve.p, f.x, m), a = 0; a < f.x.length; a++) f.x[a] = g - 1 & (f.x[a] ^ m[a]) ^ f.x[a];
                                            W(f), r.x = f.x.slice(), r.y = f.y.slice()
                                        }(e, r, i, o), a || W(r)
                                } else {
                                    var u = r.isInMontgomeryForm,
                                        s = i.isInMontgomeryForm,
                                        c = i.isAffine;
                                    u || R(r), s || R(i),
                                        function (e, t, r) {
                                            var i = t.clone();
                                            if (L(i), !U(i)) throw new Error("Invalid Parameters.");
                                            var o = 1 & e[0],
                                                a = [];
                                            for (_(t.curve.order, e, a), y = 0; y < e.length; y++) e[y] = o - 1 & (e[y] ^ a[y]) ^ e[y];
                                            var u = n <= 8 ? 5 : 6,
                                                s = t.curve.p.length * p.DIGIT_BITS,
                                                c = Math.ceil(s / (u - 1)),
                                                f = p.fixedWindowRecode(e, u, c),
                                                l = F(u, t),
                                                h = Math.floor(Math.abs(f[c]) - 1) / 2,
                                                d = l[h].clone();
                                            B(d);
                                            for (var y = c - 1; y >= 0; y--) {
                                                for (var v = 0; v < u - 2; v++) j(d, d);
                                                h = Math.floor((Math.abs(f[y]) - 1) / 2);
                                                var g = I(l, h);
                                                f[y] < 0 && C(g, g), P(d, g, d)
                                            }
                                            for (_(t.curve.p, d.y, a), y = 0; y < d.y.length; y++) d.y[y] = o - 1 & (d.y[y] ^ a[y]) ^ d.y[y];
                                            d.copy(r)
                                        }(e, r, i), c && K(i), u || L(r), s || L(i)
                                }
                            }
                        }
                        function I(e, t) {
                            for (var r = (t + 1) % e.length, n = 0; n < e.length; n++) {
                                var i = e[r].clone();
                                r = (r + 1) % e.length
                            }
                            return i
                        }
                        function C(e, t) {
                            e !== t && e.copy(t), _(e.curve.p, e.y, t.y)
                        }
                        function R(e) {
                            if (e.isInMontgomeryForm) throw new Error("The given point is already in Montgomery form.");
                            e.isInfinity || (i.convertToMontgomeryForm(e.x), i.convertToMontgomeryForm(e.y), null !== e.z && i.convertToMontgomeryForm(e.z), "undefined" != typeof e.ta && (i.convertToMontgomeryForm(e.ta), i.convertToMontgomeryForm(e.tb))), e.isInMontgomeryForm = !0
                        }
                        function L(e) {
                            if (!e.isInMontgomeryForm) throw new Error("The given point is not in montgomery form.");
                            e.isInfinity || (i.convertToStandardForm(e.x), i.convertToStandardForm(e.y), null !== e.z && i.convertToStandardForm(e.z), "undefined" != typeof e.ta && (i.convertToStandardForm(e.ta), i.convertToStandardForm(e.tb))), e.isInMontgomeryForm = !1
                        }
                        function K(e) {
                            if (e.isInfinity) return e.z = null, void(a || (e.isAffine = !0));
                            if (p.modInv(e.z, t.p, k, !0), e.isInMontgomeryForm) {
                                S(k, i.rCubedModm, M);
                                var r = k;
                                k = M, M = r
                            }
                            O(k, x), S(e.x, x, M);
                            for (var o = 0; o < n; o += 1) e.x[o] = M[o];
                            S(e.y, x, M), S(M, k, e.y), e.z = null, delete e.ta, delete e.tb, a || (e.isAffine = !0)
                        }
                        function B(t) {
                            if (!t.isAffine) throw new Error("The given point is not in Affine form.");
                            a || (t.isAffine = !1);
                            var r, n, i = t.isInMontgomeryForm ? c : s;
                            for (r = e(i.length), n = 0; n < i.length; n += 1) r[n] = i[n];
                            t.z = r
                        }
                        function U(e) {
                            return !e.isInfinity && (p.modMul(e.y, e.y, e.curve.p, h), p.modMul(e.x, e.x, e.curve.p, d), p.modMul(e.x, d, e.curve.p, y), E(y, e.curve.b, d), p.modMul(e.x, e.curve.a, e.curve.p, y), E(d, y, d), _(h, d, h), 0 != p.isZero(h))
                        }
                        function z(e, t) {
                            var r = t.clone(),
                                n = r.clone(),
                                i = [];
                            i[0] = q(t), V(r, r), n = q(r), r = t.clone();
                            for (var o = 1; o < e; o++) G(n, r, r), i[o] = q(r);
                            return i
                        }
                        function H(e) {
                            e.ta = e.x.slice(), e.tb = e.y.slice(), e.z = [1]
                        }
                        function N(e, t) {
                            for (var r = (t + 1) % e.length, n = 0; n < e.length; n++) {
                                var i = {
                                    x: e[r].x.slice(),
                                    y: e[r].y.slice(),
                                    z: e[r].z.slice(),
                                    td: e[r].td.slice()
                                };
                                r = (r + 1) % e.length
                            }
                            return i
                        }
                        function W(e) {
                            p.modInv(e.z, t.p, k, !0), p.modMul(e.x, k, t.p, e.x), p.modMul(e.y, k, t.p, e.y), delete e.ta, delete e.tb, e.z = null
                        }
                        function V(e, t) {
                            if ("undefined" == typeof e.ta) throw new Error("Point should be in Extended Projective form.");
                            p.modMul(e.x, e.x, e.curve.p, l), p.modMul(e.y, e.y, e.curve.p, h), p.modMul(e.z, e.z, e.curve.p, e.ta), _(h, l, t.tb), E(l, h, l), E(e.ta, e.ta, e.ta), E(e.y, e.y, e.y), _(e.ta, l, h), p.modMul(e.x, e.y, e.curve.p, t.ta), p.modMul(l, t.tb, e.curve.p, t.y), p.modMul(h, t.ta, e.curve.p, t.x), p.modMul(l, h, e.curve.p, t.z)
                        }
                        function q(e) {
                            var t = e.curve,
                                r = t.p,
                                n = {
                                    x: e.x.slice(),
                                    y: e.y.slice(),
                                    z: e.z.slice(),
                                    td: [],
                                    curve: e.curve
                                };
                            return p.modMul(e.ta, e.tb, r, x), p.modMul(x, t.d, r, n.td), n
                        }
                        function G(e, t, r) {
                            var n = p,
                                i = t.curve.p;
                            h = [], d = [], y = [], n.modMul(t.z, e.z, i, y), n.modMul(t.ta, t.tb, i, h), E(t.x, t.y, t.ta), n.modMul(h, e.td, i, d), E(e.x, e.y, t.tb), _(y, d, h), E(y, d, y), n.modMul(t.ta, t.tb, i, d), n.modMul(t.x, e.x, i, t.z), n.modMul(t.y, e.y, i, t.x), _(d, t.z, d), _(t.x, t.z, r.ta), _(d, t.x, r.tb), n.modMul(r.ta, y, i, r.y), n.modMul(r.tb, h, i, r.x), n.modMul(y, h, i, r.z)
                        }
                        var Z = {
                            convertToMontgomeryForm: R,
                            convertToStandardForm: L,
                            convertToAffineForm: K,
                            convertToJacobianForm: B,
                            generatePrecomputationTable: function (e, t) {
                                return F(e, t)
                            }
                        };
                        return r ? (Z.double = V, Z.add = function (e, t, r) {
                            if (e.curve.p, "undefined" == typeof e.ta) throw new Error("Point1 should be in Extended Projective form.");
                            if ("undefined" == typeof t.ta) throw new Error("Point2 should be in Extended Projective form.");
                            G(q(e), t, r)
                        }, Z.scalarMultiply = D, Z.normalize = W, Z.convertToExtendedProjective = H, Z.convertTedToWeierstrass = function (e, t) {
                            var r = e.curve.a.slice(),
                                n = e.curve.d.slice(),
                                i = e.curve.p,
                                o = p.modMul,
                                a = p.modInv;
                            o(r, h = [5], i, d), _(d, n, d), o(n, h, i, y), _(r, y, h), o(e.y, h, i, y), E(y, d, d), _(h = [1], e.y, y), o(h = [12], y, i, v), a(v, i, v, !0), o(e.x, y, i, h), E(h, h, y), E(y, y, y), a(y, i, y, !0), o(v, d, i, t.x), h = [1], E(e.y, h, h), _(r, n, d), o(h, d, i, v), o(v, y, i, t.y)
                        }, Z.convertWeierstrassToTed = function (e, t) {
                            var r = t.curve.a.slice(),
                                n = t.curve.d.slice(),
                                i = t.curve.p,
                                o = p.modMul,
                                a = p.modInv;
                            E(e.x, e.x, h), E(e.x, h, h), E(h, h, h), _(h, r, d), _(d, n, d), E(e.y, e.y, y), E(e.y, y, y), E(y, y, y), a(y, i, y, !0), o(d, y, i, t.x), E(h, h, h), E(h, n, d), E(h, r, h), E(r, r, y), _(d, y, d), _(d, y, d), _(d, r, d), E(n, n, y), _(h, y, h), _(h, y, h), _(h, n, h), a(h, i, h, !0), o(h, d, i, t.y)
                        }, Z.generatePrecomputationTable = function (e, t) {
                            return z(e, t)
                        }) : (Z.double = j, Z.mixedDoubleAdd = P, Z.mixedAdd = T, Z.scalarMultiply = D, Z.negate = C), Z
                    },
                    ModularSquareRootSolver: function (e) {
                        var t = e,
                            r = [];
                        if (void 0 === e) throw new Error("modulus");
                        if (p.isEven(e)) throw new Error("Only odd moduli are supported");
                        var n = p.MontgomeryMultiplier(t);
                        t[0] % 4 == 3 ? (p.add(t, p.One, r), p.shiftRight(r, r, 2)) : r = null;
                        var i = new Array(t.length),
                            o = new Array(t.length);
                        return {
                            squareRoot: function (e) {
                                if (null !== r) return function (e) {
                                    var t = p.intToDigits(0, 16);
                                    n.modExp(e, r, t);
                                    var i = [0];
                                    return p.modMul(t, t, n.m, i), 0 !== p.compareDigits(e, i) ? null : t
                                }(e);
                                throw new Error("GeneralCase not supported.")
                            },
                            jacobiSymbol: function (e) {
                                var r, n;
                                r = e.slice(), n = t.slice(), p.reduce(r, n, r, i, o);
                                for (var a = 1; !p.isZero(r);) {
                                    for (; p.isEven(r);) {
                                        p.shiftRight(r, r);
                                        var u = 7 & n[0];
                                        3 !== u && 5 !== u || (a = -a)
                                    }
                                    var s = r;
                                    r = n, n = s;
                                    var c = 3 & r[0],
                                        f = 3 & n[0];
                                    3 === c && 3 === f && (a = -a), p.reduce(r, n, r, i, o)
                                }
                                return 0 === p.compareDigits(n, p.One) ? a : 0
                            }
                        }
                    }
                }
            }();
            void 0 !== d && (d.curves["P-256"] = {
                name: "P-256",
                type: 0,
                p: [255, 255, 255, 255, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                a: [255, 255, 255, 255, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 252],
                b: [90, 198, 53, 216, 170, 58, 147, 231, 179, 235, 189, 85, 118, 152, 134, 188, 101, 29, 6, 176, 204, 83, 176, 246, 59, 206, 60, 62, 39, 210, 96, 75],
                order: [255, 255, 255, 255, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 188, 230, 250, 173, 167, 23, 158, 132, 243, 185, 202, 194, 252, 99, 37, 81],
                gx: [107, 23, 209, 242, 225, 44, 66, 71, 248, 188, 230, 229, 99, 164, 64, 242, 119, 3, 125, 129, 45, 235, 51, 160, 244, 161, 57, 69, 216, 152, 194, 150],
                gy: [79, 227, 66, 226, 254, 26, 127, 155, 142, 231, 235, 74, 124, 15, 158, 22, 43, 206, 51, 87, 107, 49, 94, 206, 203, 182, 64, 104, 55, 191, 81, 245],
                cf: 1
            }, d.curves["P-384"] = {
                name: "P-384",
                type: 0,
                p: [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255],
                a: [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 252],
                b: [179, 49, 47, 167, 226, 62, 231, 228, 152, 142, 5, 107, 227, 248, 45, 25, 24, 29, 156, 110, 254, 129, 65, 18, 3, 20, 8, 143, 80, 19, 135, 90, 198, 86, 57, 141, 138, 46, 209, 157, 42, 133, 200, 237, 211, 236, 42, 239],
                order: [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 199, 99, 77, 129, 244, 55, 45, 223, 88, 26, 13, 178, 72, 176, 167, 122, 236, 236, 25, 106, 204, 197, 41, 115],
                gx: [170, 135, 202, 34, 190, 139, 5, 55, 142, 177, 199, 30, 243, 32, 173, 116, 110, 29, 59, 98, 139, 167, 155, 152, 89, 247, 65, 224, 130, 84, 42, 56, 85, 2, 242, 93, 191, 85, 41, 108, 58, 84, 94, 56, 114, 118, 10, 183],
                gy: [54, 23, 222, 74, 150, 38, 44, 111, 93, 158, 152, 191, 146, 146, 220, 41, 248, 244, 29, 189, 40, 154, 20, 124, 233, 218, 49, 19, 181, 240, 184, 192, 10, 96, 177, 206, 29, 126, 129, 157, 122, 67, 29, 124, 144, 234, 14, 95],
                cf: 1
            }, d.curves["P-521"] = {
                name: "P-521",
                type: 0,
                p: [1, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                a: [1, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 252],
                b: [0, 81, 149, 62, 185, 97, 142, 28, 154, 31, 146, 154, 33, 160, 182, 133, 64, 238, 162, 218, 114, 91, 153, 179, 21, 243, 184, 180, 137, 145, 142, 241, 9, 225, 86, 25, 57, 81, 236, 126, 147, 123, 22, 82, 192, 189, 59, 177, 191, 7, 53, 115, 223, 136, 61, 44, 52, 241, 239, 69, 31, 212, 107, 80, 63, 0],
                order: [1, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 250, 81, 134, 135, 131, 191, 47, 150, 107, 127, 204, 1, 72, 247, 9, 165, 208, 59, 181, 201, 184, 137, 156, 71, 174, 187, 111, 183, 30, 145, 56, 100, 9],
                gx: [0, 198, 133, 142, 6, 183, 4, 4, 233, 205, 158, 62, 203, 102, 35, 149, 180, 66, 156, 100, 129, 57, 5, 63, 181, 33, 248, 40, 175, 96, 107, 77, 61, 186, 161, 75, 94, 119, 239, 231, 89, 40, 254, 29, 193, 39, 162, 255, 168, 222, 51, 72, 179, 193, 133, 106, 66, 155, 249, 126, 126, 49, 194, 229, 189, 102],
                gy: [1, 24, 57, 41, 106, 120, 154, 59, 192, 4, 92, 138, 95, 180, 44, 125, 27, 217, 152, 245, 68, 73, 87, 155, 68, 104, 23, 175, 189, 23, 39, 62, 102, 44, 151, 238, 114, 153, 94, 244, 38, 64, 197, 80, 185, 1, 63, 173, 7, 97, 53, 60, 112, 134, 162, 114, 194, 64, 136, 190, 148, 118, 159, 209, 102, 80],
                cf: 1
            });
            void 0 !== d && (d.curves["BN-254"] = {
                name: "BN-254",
                type: 0,
                p: [37, 35, 100, 130, 64, 0, 0, 1, 186, 52, 77, 128, 0, 0, 0, 8, 97, 33, 0, 0, 0, 0, 0, 19, 167, 0, 0, 0, 0, 0, 0, 19],
                a: [0],
                b: [2],
                order: [37, 35, 100, 130, 64, 0, 0, 1, 186, 52, 77, 128, 0, 0, 0, 7, 255, 159, 128, 0, 0, 0, 0, 16, 161, 0, 0, 0, 0, 0, 0, 13],
                gx: [37, 35, 100, 130, 64, 0, 0, 1, 186, 52, 77, 128, 0, 0, 0, 8, 97, 33, 0, 0, 0, 0, 0, 19, 167, 0, 0, 0, 0, 0, 0, 18],
                gy: [1],
                cf: 1
            });
            var y = {
                    info: ["numsp256d1", 256, 256, 256],
                    type: 0,
                    p: [67, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255].reverse(),
                    a: [64, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255].reverse(),
                    b: [129, 85, 2].reverse(),
                    order: [37, 168, 81, 71, 41, 32, 171, 32, 96, 92, 38, 234, 117, 130, 60, 228, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255].reverse(),
                    gx: [177, 172, 26, 178, 30, 238, 82, 188, 58, 199, 212, 3, 9, 155, 87, 131, 9, 203, 66, 79, 160, 149, 122, 41, 97, 219, 170, 90, 182, 214, 158, 188].reverse(),
                    gy: [159, 222, 132, 33, 203, 185, 181, 128, 187, 15, 49, 21, 209, 195, 85, 201, 53, 224, 4, 126, 247, 139, 68, 115, 166, 182, 153, 51, 241, 192, 143, 208].reverse(),
                    cf: 1
                },
                v = {
                    info: ["numsp256t1", 256, 255, 256],
                    name: "numsp256t1",
                    type: 1,
                    p: [67, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255].reverse(),
                    a: [1],
                    d: [85, 195, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255].reverse(),
                    order: [245, 74, 221, 238, 144, 177, 71, 26, 155, 67, 89, 47, 165, 90, 149, 65, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64].reverse(),
                    gx: [218, 19, 237, 46, 144, 192, 222, 160, 134, 53, 8, 227, 14, 138, 57, 12, 214, 155, 32, 105, 95, 61, 30, 205, 125, 35, 234, 106, 251, 20, 117, 138].reverse(),
                    gy: [230, 137, 138, 121, 231, 22, 166, 47, 211, 110, 133, 16, 216, 97, 95, 113, 16, 128, 75, 166, 217, 101, 150, 206, 199, 37, 217, 217, 159, 62, 213, 68].reverse(),
                    cf: 4
                },
                g = {
                    info: ["numsp384d1", 384, 384, 384],
                    name: "numsp384d1",
                    type: 0,
                    p: [195, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255].reverse(),
                    a: [192, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255].reverse(),
                    b: [187, 119, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255].reverse(),
                    order: [185, 97, 14, 123, 246, 129, 77, 96, 122, 226, 55, 76, 61, 157, 218, 190, 129, 104, 93, 235, 30, 175, 30, 214, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255].reverse(),
                    gx: [42, 21, 152, 32, 4, 186, 156, 235, 123, 196, 97, 15, 16, 237, 46, 82, 66, 199, 108, 42, 27, 41, 189, 243, 244, 249, 129, 251, 205, 193, 37, 2, 166, 241, 5, 65, 34, 202, 128, 72, 28, 24, 111, 177, 240, 86, 121, 117].reverse(),
                    gy: [22, 7, 24, 102, 236, 184, 116, 92, 38, 173, 244, 191, 219, 180, 214, 188, 126, 131, 26, 18, 125, 131, 32, 185, 156, 115, 127, 248, 119, 105, 4, 176, 126, 207, 132, 5, 48, 61, 227, 215, 56, 142, 155, 225, 104, 227, 222, 172].reverse(),
                    cf: 1
                },
                m = {
                    info: ["numsp384t1", 384, 382, 384],
                    name: "numsp384t1",
                    type: 1,
                    p: [195, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255].reverse(),
                    a: [1],
                    d: [159, 209, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255].reverse(),
                    order: [125, 137, 163, 230, 196, 220, 185, 32, 121, 200, 53, 171, 90, 85, 228, 97, 207, 225, 107, 180, 28, 26, 71, 226, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 63].reverse(),
                    gx: [222, 107, 32, 108, 228, 64, 213, 80, 19, 148, 69, 101, 177, 146, 242, 111, 64, 99, 49, 243, 168, 255, 99, 87, 0, 76, 190, 229, 70, 244, 11, 179, 181, 93, 229, 154, 18, 162, 182, 192, 108, 38, 169, 69, 251, 17, 177, 97].reverse(),
                    gy: [146, 147, 114, 240, 225, 3, 141, 157, 220, 72, 236, 70, 249, 176, 114, 0, 75, 150, 69, 246, 247, 152, 15, 131, 86, 95, 66, 241, 116, 130, 173, 22, 215, 13, 177, 35, 164, 177, 56, 135, 176, 238, 166, 185, 103, 62, 152, 130].reverse(),
                    cf: 4
                },
                b = ([199, 253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255].reverse(), [196, 253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255].reverse(), [155, 217, 1].reverse(), [93, 85, 51, 4, 57, 63, 21, 206, 67, 210, 124, 96, 54, 139, 86, 59, 198, 189, 208, 151, 237, 88, 194, 79, 27, 131, 231, 148, 251, 164, 60, 91, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255].reverse(), [87, 174, 171, 140, 149, 135, 130, 220, 226, 93, 111, 125, 19, 96, 93, 29, 131, 21, 86, 37, 134, 66, 121, 147, 158, 53, 107, 7, 81, 161, 33, 80, 249, 217, 6, 83, 194, 224, 6, 69, 133, 246, 1, 181, 59, 216, 202, 152, 82, 59, 61, 160, 2, 112, 43, 218, 147, 10, 29, 20, 71, 52, 192, 58].reverse(), [166, 39, 53, 56, 96, 135, 160, 35, 233, 15, 253, 76, 30, 92, 43, 207, 2, 86, 90, 178, 64, 168, 33, 193, 233, 237, 14, 139, 218, 21, 132, 162, 20, 79, 209, 123, 12, 38, 75, 143, 140, 187, 188, 171, 222, 219, 151, 75, 0, 177, 235, 99, 220, 238, 14, 206, 179, 86, 173, 41, 202, 84, 58, 148].reverse(), {
                    info: ["numsp512t1", 512, 510, 512],
                    name: "numsp512t1",
                    type: 1,
                    p: [199, 253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255].reverse(),
                    a: [1].reverse(),
                    d: [239, 203, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255].reverse(),
                    order: [109, 212, 238, 27, 245, 140, 70, 103, 255, 236, 239, 109, 120, 5, 70, 42, 245, 134, 182, 112, 201, 216, 63, 158, 186, 145, 207, 47, 109, 99, 240, 180, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 63].reverse(),
                    gx: [254, 87, 236, 153, 41, 171, 185, 197, 21, 240, 196, 124, 66, 37, 229, 15, 173, 4, 137, 86, 146, 201, 189, 120, 15, 115, 70, 238, 78, 193, 33, 70, 71, 129, 59, 39, 190, 126, 161, 39, 130, 163, 196, 77, 159, 231, 209, 47, 51, 197, 211, 136, 120, 203, 24, 122, 156, 182, 141, 18, 109, 49, 142, 223].reverse(),
                    gy: [225, 245, 226, 193, 192, 222, 109, 50, 31, 208, 241, 155, 138, 211, 102, 2, 253, 193, 236, 42, 134, 6, 26, 96, 98, 53, 150, 233, 242, 83, 202, 32, 65, 131, 158, 144, 149, 107, 43, 169, 34, 157, 37, 216, 38, 247, 118, 228, 110, 37, 42, 168, 119, 245, 176, 152, 113, 202, 73, 157, 243, 191, 9, 109].reverse(),
                    cf: 4
                });
            void 0 !== d && (d.curves.NUMSP256D1 = y, d.curves.NUMSP384D1 = g, d.curves.NUMSP512D1 = b, d.curves.NUMSP256T1 = v, d.curves.NUMSP384T1 = m, d.curves.NUMSP512T1 = b);
            var w, x, M, k, _, E = function (e, t, r, n, i, o, a) {
                    var u = f,
                        s = r.slice(),
                        c = new Array(i),
                        l = [],
                        h = 0;
                    function p(e) {
                        for (var t = Math.floor(e.length / i), r = 0; r < t; r++) o(e, r, s, n, c);
                        return h += t, e.slice(t * i)
                    }
                    function d() {
                        if (0 !== p(function (e) {
                                var t = i - e.length % i;
                                t <= i / 8 && (t += i);
                                var r = u.getVector(t);
                                r[0] = 128;
                                var n = 8 * (e.length + h * i);
                                return r[t - 4] = n >>> 24 & 255, r[t - 3] = n >>> 16 & 255, r[t - 2] = n >>> 8 & 255, r[t - 1] = 255 & n, e.concat(r)
                            }(l)).length) throw new Error("buffer.length !== 0");
                        var e = function () {
                            for (var e = [], t = 0; t < s.length; t++) e = e.concat(u.int32ToBytes(s[t]));
                            return e.length = a / 8, e
                        }();
                        return l = [], s = r.slice(), h = 0, e
                    }
                    return {
                        name: e,
                        computeHash: function (e) {
                            return l = p(e), d()
                        },
                        process: function (e) {
                            (l = l.concat(e)).length >= i && (l = p(l))
                        },
                        finish: d,
                        der: t,
                        hashLen: a,
                        maxMessageSize: 4294967295
                    }
                },
                A = (x = (w = f).unpackData, M = x("Z0UjAe/Nq4mYutz+EDJUdsPS4fA=", 4, 1), k = x("WoJ5mVqCeZlagnmZWoJ5mVqCeZlagnmZWoJ5mVqCeZlagnmZWoJ5mVqCeZlagnmZWoJ5mVqCeZlagnmZWoJ5mVqCeZlagnmZWoJ5mVqCeZlu2euhbtnroW7Z66Fu2euhbtnroW7Z66Fu2euhbtnroW7Z66Fu2euhbtnroW7Z66Fu2euhbtnroW7Z66Fu2euhbtnroW7Z66Fu2euhbtnroY8bvNyPG7zcjxu83I8bvNyPG7zcjxu83I8bvNyPG7zcjxu83I8bvNyPG7zcjxu83I8bvNyPG7zcjxu83I8bvNyPG7zcjxu83I8bvNyPG7zcymLB1spiwdbKYsHWymLB1spiwdbKYsHWymLB1spiwdbKYsHWymLB1spiwdbKYsHWymLB1spiwdbKYsHWymLB1spiwdbKYsHWymLB1spiwdY", 4, 1), _ = x("MCEwCQYFKw4DAhoFAAQU"), {
                    sha1: E("SHA-1", _, M, k, 64, (function (e, t, r, n, i) {
                        var o, a, u, s, c = 4294967295,
                            f = r[0],
                            l = r[1],
                            h = r[2],
                            p = r[3],
                            d = r[4];
                        for (a = 0; a < 16; a++) i[a] = w.bytesToInt32(e, 64 * t + 4 * a);
                        for (o = 16; o < 80; o++) s = i[o - 3] ^ i[o - 8] ^ i[o - 14] ^ i[o - 16], i[o] = s << 1 | s >>> 31;
                        for (a = 0; a < 80; a++) u = f << 5 | f >>> 27, u += a >= 60 ? l ^ h ^ p : a >= 40 ? l & h ^ l & p ^ h & p : a >= 20 ? l ^ h ^ p : l & h ^ ~l & p, u += d + n[a] + i[a], d = p, p = h, h = l << 30 | l >>> 2, l = f, f = u;
                        return r[0] += f & c, r[1] += l & c, r[2] += h & c, r[3] += p & c, r[4] += d & c, r
                    }), 160)
                });
            void 0 !== e && (A.hash = function (e) {
                if ("process" !== e.operationSubType) return "finish" === e.operationSubType ? A.sha1.finish() : A.sha1.computeHash(e.buffer);
                A.sha1.process(e.buffer)
            }, e.register("digest", "sha-1", A.hash)), c["sha-1"] = A.sha1;
            var S = function () {
                var e = f;
                function t(t, r, n, i, o) {
                    var a, u, s, c, f, l = 4294967295,
                        h = n[0],
                        p = n[1],
                        d = n[2],
                        y = n[3],
                        v = n[4],
                        g = n[5],
                        m = n[6],
                        b = n[7];
                    for (u = 0; u < 16; u++) o[u] = e.bytesToInt32(t, 64 * r + 4 * u);
                    for (a = 16; a < 64; a++) c = o[a - 15], f = o[a - 2], o[a] = ((f >>> 17 | f << 15) ^ (f >>> 19 | f << 13) ^ f >>> 10) + o[a - 7] + ((c >>> 7 | c << 25) ^ (c >>> 18 | c << 14) ^ c >>> 3) + o[a - 16], o[a] = o[a] & l;
                    for (u = 0; u < 64; u++) y += s = b + ((v >>> 6 | v << 26) ^ (v >>> 11 | v << 21) ^ (v >>> 25 | v << 7)) + (v & g ^ ~v & m) + i[u] + o[u], s += ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + (h & (p ^ d) ^ p & d), b = m, m = g, g = v, v = y, y = d, d = p, p = h, h = s;
                    return n[0] += h & l, n[1] += p & l, n[2] += d & l, n[3] += y & l, n[4] += v & l, n[5] += g & l, n[6] += m & l, n[7] += b & l, n
                }
                var r, n, i, o, a, u = e.unpackData;
                return n = u("wQWe2DZ81QcwcN0X9w5ZOf/ACzFoWBURZPmPp776T6Q", 4, 1), i = u("agnmZ7tnroU8bvNypU/1OlEOUn+bBWiMH4PZq1vgzRk", 4, 1), r = u("QoovmHE3RJG1wPvP6bXbpTlWwltZ8RHxkj+CpKscXtXYB6qYEoNbASQxhb5VDH3Dcr5ddIDesf6b3AanwZvxdOSbacHvvkeGD8GdxiQMocwt6SxvSnSEqlywqdx2+YjamD5RUqgxxm2wAyfIv1l/x8bgC/PVp5FHBspjURQpKWcntwqFLhshOE0sbfxTOA0TZQpzVHZqCruBwskuknIshaK/6KGoGmZLwkuLcMdsUaPRkugZ1pkGJPQONYUQaqBwGaTBFh43bAgnSHdMNLC8tTkcDLNO2KpKW5zKT2gub/N0j4LueKVjb4TIeBSMxwIIkL7/+qRQbOu++aP3xnF48g", 4, 1), o = u("MC0wDQYJYIZIAWUDBAIEBQAEHA"), a = u("MDEwDQYJYIZIAWUDBAIBBQAEIA"), {
                    sha224: E("SHA-224", o, n, r, 64, t, 224),
                    sha256: E("SHA-256", a, i, r, 64, t, 256)
                }
            }();
            void 0 !== e && (S.hash256 = function (e) {
                if ("process" !== e.operationSubType) return "finish" === e.operationSubType ? S.sha256.finish() : S.sha256.computeHash(e.buffer);
                S.sha256.process(e.buffer)
            }, S.hash224 = function (e) {
                if ("process" !== e.operationSubType) return "finish" === e.operationSubType ? S.sha224.finish() : S.sha224.computeHash(e.buffer);
                S.sha224.process(e.buffer)
            }, e.register("digest", "sha-224", S.hash224), e.register("digest", "sha-256", S.hash256)), c["sha-224"] = S.sha224, c["sha-256"] = S.sha256;
            var O = function () {
                function e(e, t, r, n, i) {
                    var o = t + n | 0,
                        a = o >>> 0 < n >>> 0;
                    i[0] = e + r + a | 0, i[1] = o
                }
                function t(t, r, n, i, o) {
                    var a, u, s, c, f, l, h, p, d, y = [],
                        v = [],
                        g = [],
                        m = n[0],
                        b = n[1],
                        w = n[2],
                        x = n[3],
                        M = n[4],
                        k = n[5],
                        _ = n[6],
                        E = n[7],
                        A = n[8],
                        S = n[9],
                        O = n[10],
                        F = n[11],
                        j = n[12],
                        P = n[13],
                        T = n[14],
                        D = n[15];
                    for (a = 0; a < 32; a++) d = 128 * r + 4 * a, o[a] = t.slice(d, d + 4), o[a] = o[a][0] << 24 | o[a][1] << 16 | o[a][2] << 8 | o[a][3];
                    for (a = 32; a < 160; a += 2) s = ((h = o[a - 30]) >>> 1 | (p = o[a - 29]) << 31) ^ (h >>> 8 | p << 24) ^ h >>> 7, c = (p >>> 1 | h << 31) ^ (p >>> 8 | h << 24) ^ (p >>> 7 | h << 25), e(f = ((h = o[a - 4]) >>> 19 | (p = o[a - 3]) << 13) ^ (p >>> 29 | h << 3) ^ h >>> 6, l = (p >>> 19 | h << 13) ^ (h >>> 29 | p << 3) ^ (p >>> 6 | h << 26), o[a - 14], o[a - 13], y), e(s, c, y[0], y[1], y), e(o[a - 32], o[a - 31], y[0], y[1], y), o[a] = y[0], o[a + 1] = y[1];
                    for (u = 0; u < 160; u += 2) f = A & O ^ j & ~A, l = S & F ^ P & ~S, e(T, D, s = (A >>> 14 | S << 18) ^ (A >>> 18 | S << 14) ^ (S >>> 9 | A << 23), c = (S >>> 14 | A << 18) ^ (S >>> 18 | A << 14) ^ (A >>> 9 | S << 23), y), e(f, l, i[u], i[u + 1], v), e(y[0], y[1], o[u], o[u + 1], g), e(v[0], v[1], g[0], g[1], g), e(g[0], g[1], _, E, y), _ = y[0], E = y[1], l = b & (x ^ k) ^ x & k, f = m & (w ^ M) ^ w & M, e(g[0], g[1], s = (m >>> 28 | b << 4) ^ (b >>> 2 | m << 30) ^ (b >>> 7 | m << 25), c = (b >>> 28 | m << 4) ^ (m >>> 2 | b << 30) ^ (m >>> 7 | b << 25), y), e(f, l, s = y[0], c = y[1], y), T = j, D = P, j = O, P = F, O = A, F = S, A = _, S = E, _ = M, E = k, M = w, k = x, w = m, x = b, m = s = y[0], b = c = y[1];
                    return e(n[0], n[1], m, b, y), n[0] = y[0], n[1] = y[1], e(n[2], n[3], w, x, y), n[2] = y[0], n[3] = y[1], e(n[4], n[5], M, k, y), n[4] = y[0], n[5] = y[1], e(n[6], n[7], _, E, y), n[6] = y[0], n[7] = y[1], e(n[8], n[9], A, S, y), n[8] = y[0], n[9] = y[1], e(n[10], n[11], O, F, y), n[10] = y[0], n[11] = y[1], e(n[12], n[13], j, P, y), n[12] = y[0], n[13] = y[1], e(n[14], n[15], T, D, y), n[14] = y[0], n[15] = y[1], n
                }
                var r, n, i, o, a, u, s, c = f.unpackData;
                return r = c("y7udXcEFnthimikqNnzVB5FZAVowcN0XFS/s2PcOWTlnMyZn/8ALMY60SodoWBUR2wwuDWT5j6dHtUgdvvpPpA==", 4, 1), n = c("agnmZ/O8yQi7Z66FhMqnOzxu83L+lPgrpU/1Ol8dNvFRDlJ/reaC0ZsFaIwrPmwfH4PZq/tBvWtb4M0ZE34heQ", 4, 1), i = c("QoovmNcoriJxN0SRI+9lzbXA+8/sTTsv6bXbpYGJ27w5VsJb80i1OFnxEfG2BdAZkj+CpK8ZT5urHF7V2m2BGNgHqpijAwJCEoNbAUVwb74kMYW+TuSyjFUMfcPV/7Ticr5ddPJ7iW+A3rH+OxaWsZvcBqclxxI1wZvxdM9pJpTkm2nBnvFK0u++R4Y4TyXjD8GdxouM1bUkDKHMd6ycZS3pLG9ZKwJ1SnSEqm6m5INcsKncvUH71Hb5iNqDEVO1mD5RUu5m36uoMcZtLbQyELADJ8iY+yE/v1l/x77vDuTG4AvzPaiPwtWnkUeTCqclBspjUeADgm8UKSlnCg5ucCe3CoVG0i/8LhshOFwmySZNLG38WsQq7VM4DROdlbPfZQpzVIuvY952agq7PHeyqIHCyS5H7a7mknIshRSCNTuiv+ihTPEDZKgaZku8QjABwkuLcND4l5HHbFGjBlS+MNGS6BnW71IY1pkGJFVlqRD0DjWFV3EgKhBqoHAyu9G4GaTBFrjS0MgeN2wIUUGrUydId0zfjuuZNLC8teGbSKg5HAyzxclaY07YqkrjQYrLW5zKT3dj43NoLm/z1rK4o3SPgu5d77L8eKVjb0MXL2CEyHgUofCrcozHAggaZDnskL7/+iNjHiikUGzr3oK96b75o/eyxnkVxnF48uNyUyvKJz7O6iZhnNGGuMchwMIH6tp91s3g6x71fU9/7m7ReAbwZ6pyF2+6CmN9xaLImKYRP5gEvvkNrhtxCzUTHEcbKNt39SMEfYQyyqt7QMckkzyevgoVyb68Qx1nxJwQDUxMxdS+yz5Ctll/KZz8ZX4qX8tvqzrW+uxsRBmMSkdYFw==", 4, 1), o = c("MEEwDQYJYIZIAWUDBAICBQAEMA"), a = c("MFEwDQYJYIZIAWUDBAIDBQAEQA"), u = c("MC0wDQYJYIZIAWUDBAIFBQAEHA"), s = c("MDEwDQYJYIZIAWUDBAIGBQAEIA"), {
                    sha384: E("SHA-384", o, r, i, 128, t, 384),
                    sha512: E("SHA-512", a, n, i, 128, t, 512),
                    sha512_224: E("SHA-512.224", u, n, i, 128, t, 224),
                    sha512_256: E("SHA-512.256", s, n, i, 128, t, 256)
                }
            }();
            void 0 !== e && (O.hash384 = function (e) {
                if ("process" !== e.operationSubType) return "finish" === e.operationSubType ? O.sha384.finish() : O.sha384.computeHash(e.buffer);
                O.sha384.process(e.buffer)
            }, O.hash512 = function (e) {
                if ("process" !== e.operationSubType) return "finish" === e.operationSubType ? O.sha512.finish() : O.sha512.computeHash(e.buffer);
                O.sha512.process(e.buffer)
            }, e.register("digest", "sha-384", O.hash384), e.register("digest", "sha-512", O.hash512)), c["sha-384"] = O.sha384, c["sha-512"] = O.sha512;
            var F = function () {
                var e, t, r, n, i, o, a, u;
                function s(e, t) {
                    for (var r = new Array(e), n = 0; n < e.length; n++) r[n] = e[n] ^ t[n];
                    return r
                }
                function c(e, t) {
                    for (var r = e.slice(), n = e.length; n < t; n++) r.push(0);
                    return r
                }
                void 0 !== S && (e = S), void 0 !== O && (t = O), void 0 !== A && (r = A);
                var f, l = null;
                function h(e) {
                    var t, r;
                    if (l) n.process(e);
                    else {
                        a = new Array(i), u = new Array(i);
                        for (var h = 0; h < i; h++) a[h] = 54, u[h] = 92;
                        t = s(l = o.length === i ? o : o.length > i ? c(n.computeHash(o), i) : c(o, i), a), f = s(l, u), r = t.concat(e), n.process(r)
                    }
                }
                function p() {
                    var e = n.finish(),
                        t = f.concat(e);
                    return n.computeHash(t)
                }
                function d() {
                    o = null, n = null, l = null
                }
                function y(o) {
                    switch (o.toLowerCase()) {
                    case "sha-1":
                        if (r === undefined) throw new Error("Sha1 object not found");
                        n = r.sha1, i = 64;
                        break;
                    case "sha-224":
                        n = e.sha224, i = 64;
                        break;
                    case "sha-256":
                        n = e.sha256, i = 64;
                        break;
                    case "sha-384":
                        if (t === undefined) throw new Error("Sha512 object not found");
                        n = t.sha384, i = 128;
                        break;
                    case "sha-512":
                        if (t === undefined) throw new Error("Sha512 object not found");
                        n = t.sha512, i = 128;
                        break;
                    default:
                        throw new Error("unsupported hash alorithm (sha-224, sha-256, sha-384, sha-512)")
                    }
                }
                return {
                    computeHmac: function (e, t, r) {
                        o = t, y(r), h(e);
                        var n = p();
                        return d(), n
                    },
                    process: function (e, t, r) {
                        n || (o = t, y(r)), h(e)
                    },
                    finish: function (e, t) {
                        n || (o = e, y(t), h([]));
                        var r = p();
                        return d(), r
                    }
                }
            }();
            void 0 !== e && (F.signHmac = function (e) {
                var t = e.algorithm.hash.name;
                if ("process" !== e.operationSubType) return "finish" === e.operationSubType ? F.finish(e.keyData, t) : F.computeHmac(e.buffer, e.keyData, t);
                F.process(e.buffer, e.keyData, t)
            }, F.verifyHmac = function (e) {
                var t = e.algorithm.hash.name;
                if ("process" !== e.operationSubType) return "finish" === e.operationSubType ? f.arraysEqual(F.finish(e.keyData, t), e.signature) : f.arraysEqual(F.computeHmac(e.buffer, e.keyData, t), e.signature);
                F.process(e.buffer, e.keyData, t)
            }, F.generateKey = function (e) {
                var t = e.algorithm.length;
                return t || (t = {
                    "sha-256": 32,
                    "sha-384": 48,
                    "sha-512": 64
                } [e.algorithm.hash.name.toLowerCase()]), {
                    type: "keyGeneration",
                    keyData: G.getBytes(t),
                    keyHandle: {
                        algorithm: e.algorithm,
                        extractable: e.extractable,
                        keyUsage: e.keyUsage,
                        type: "secret"
                    }
                }
            }, F.importKey = function (e) {
                var t = h.jwkToKey(e.keyData, e.algorithm, ["k"]);
                return t.alg = t.alg.replace("HS", "sha-"), {
                    type: "keyImport",
                    keyData: t.k,
                    keyHandle: {
                        algorithm: {
                            name: "hmac",
                            hash: {
                                name: t.alg
                            }
                        },
                        extractable: e.extractable || t.extractable,
                        keyUsage: e.keyUsage,
                        type: "secret"
                    }
                }
            }, F.exportKey = function (e) {
                return {
                    type: "keyExport",
                    keyHandle: h.keyToJwk(e.keyHandle, e.keyData)
                }
            }, e.register("importKey", "hmac", F.importKey), e.register("exportKey", "hmac", F.exportKey), e.register("generateKey", "hmac", F.generateKey), e.register("sign", "hmac", F.signHmac), e.register("verify", "hmac", F.verifyHmac));
            var j, P, T, D, I, C, R, L, K, B, U = {
                    aes: function (e) {
                        var t, r, n, i;
                        switch (j || (j = f.unpackData("AAIEBggKDA4QEhQWGBocHiAiJCYoKiwuMDI0Njg6PD5AQkRGSEpMTlBSVFZYWlxeYGJkZmhqbG5wcnR2eHp8foCChIaIioyOkJKUlpianJ6goqSmqKqsrrCytLa4ury+wMLExsjKzM7Q0tTW2Nrc3uDi5Obo6uzu8PL09vj6/P4bGR8dExEXFQsJDw0DAQcFOzk/PTMxNzUrKS8tIyEnJVtZX11TUVdVS0lPTUNBR0V7eX99c3F3dWtpb21jYWdlm5mfnZORl5WLiY+Ng4GHhbu5v72zsbe1q6mvraOhp6Xb2d/d09HX1cvJz83DwcfF+/n//fPx9/Xr6e/t4+Hn5QADBgUMDwoJGBseHRQXEhEwMzY1PD86OSgrLi0kJyIhYGNmZWxvaml4e359dHdycVBTVlVcX1pZSEtOTURHQkHAw8bFzM/Kydjb3t3U19LR8PP29fz/+vno6+7t5Ofi4aCjpqWsr6qpuLu+vbS3srGQk5aVnJ+amYiLjo2Eh4KBm5idnpeUkZKDgIWGj4yJiquora6npKGis7C1tr+8ubr7+P3+9/Tx8uPg5ebv7Onqy8jNzsfEwcLT0NXW39zZ2ltYXV5XVFFSQ0BFRk9MSUpraG1uZ2RhYnNwdXZ/fHl6Ozg9Pjc0MTIjICUmLywpKgsIDQ4HBAECExAVFh8cGRoADhwSODYkKnB+bGJIRlRa4O788tjWxMqQnoyCqKa0utvVx8nj7f/xq6W3uZOdj4E7NScpAw0fEUtFV1lzfW9hraOxv5WbiYfd08HP5ev5901DUV91e2lnPTMhLwULGRd2eGpkTkBSXAYIGhQ+MCIslpiKhK6gsrzm6Pr03tDCzEFPXVN5d2VrMT8tIwkHFRuhr72zmZeFi9HfzcPp5/X7mpSGiKKsvrDq5Pb40tzOwHp0ZmhCTF5QCgQWGDI8LiDs4vD+1NrIxpySgI6kqri2DAIQHjQ6KCZ8cmBuREpYVjc5KyUPARMdR0lbVX9xY23X2cvF7+Hz/aepu7WfkYONAA0aFzQ5LiNoZXJ/XFFGS9Ddysfk6f7zuLWir4yBlpu7tqGsj4KVmNPeycTn6v3wa2ZxfF9SRUgDDhkUNzotIG1gd3pZVENOBQgfEjE8Kya9sKeqiYSTntXYz8Lh7Pv21tvMweLv+PW+s6SpioeQnQYLHBEyPyglbmN0eVpXQE3a18DN7uP0+bK/qKWGi5yRCgcQHT4zJClib3h1VltMQWFse3ZVWE9CCQQTHj0wJyqxvKumhYifktnUw87t4Pf6t7qtoIOOmZTf0sXI6+bx/GdqfXBTXklEDwIVGDs2ISwMARYbODUiL2RpfnNQXUpH3NHGy+jl8v+0ua6jgI2alwALFh0sJzoxWFNORXR/Ymmwu6atnJeKgejj/vXEz9LZe3BtZldcQUojKDU+DwQZEsvA3dbn7PH6k5iFjr+0qaL2/eDr2tHMx66luLOCiZSfRk1QW2phfHceFQgDMjkkL42Gm5Chqre81d7DyPny7+Q9NisgERoHDGVuc3hJQl9U9/zh6tvQzcavpLmyg4iVnkdMUVprYH12HxQJAjM4JS6Mh5qRoKu2vdTfwsn48+7lPDcqIRAbBg1kb3J5SENeVQEKFxwtJjswWVJPRHV+Y2ixuqesnZaLgOni//TFztPYenFsZ1ZdQEsiKTQ/DgUYE8rB3Nfm7fD7kpmEj761qKMACRIbJC02P0hBWlNsZX53kJmCi7S9pq/Y0crD/PXu5zsyKSAfFg0Ec3phaFdeRUyrormwj4adlOPq8fjHztXcdn9kbVJbQEk+NywlGhMIAebv9P3Cy9DZrqe8tYqDmJFNRF9WaWB7cgUMFx4hKDM63dTPxvnw6+KVnIeOsbijquzl/vfIwdrTpK22v4CJkpt8dW5nWFFKQzQ9Ji8QGQIL197FzPP64eiflo2Eu7KpoEdOVVxjanF4DwYdFCsiOTCak4iBvrespdLbwMn2/+TtCgMYES4nPDVCS1BZZm90faGos7qFjJee6eD78s3E39YxOCMqFRwHDnlwa2JdVE9GY3x3e/Jrb8UwAWcr/terdsqCyX36WUfwrdSir5ykcsC3/ZMmNj/3zDSl5fFx2DEVBMcjwxiWBZoHEoDi6yeydQmDLBobblqgUjvWsynjL4RT0QDtIPyxW2rLvjlKTFjP0O+q+0NNM4VF+QJ/UDyfqFGjQI+SnTj1vLbaIRD/89LNDBPsX5dEF8Snfj1kXRlzYIFP3CIqkIhG7rgU3l4L2+AyOgpJBiRcwtOsYpGV5HnnyDdtjdVOqWxW9Opleq4IunglLhymtMbo3XQfS72LinA+tWZIA/YOYTVXuYbBHZ7h+JgRadmOlJseh+nOVSjfjKGJDb/mQmhBmS0PsFS7FlIJatUwNqU4v0CjnoHz1/t84zmCmy//hzSOQ0TE3unLVHuUMqbCIz3uTJULQvrDTgguoWYo2SSydluiSW2L0SVy+PZkhmiYFtSkXMxdZbaSbHBIUP3tudpeFUZXp42dhJDYqwCMvNMK9+RYBbizRQbQLB6Pyj8PAsGvvQMBE4prOpERQU9n3OqX8s/O8LTmc5asdCLnrTWF4vk36Bx1325H8RpxHSnFiW+3Yg6qGL4b/FY+S8bSeSCa28D+eM1a9B/dqDOIB8cxsRIQWSeA7F9gUX+pGbVKDS3lep+TyZzvoOA7Ta4q9bDI67s8g1OZYRcrBH66d9Ym4WkUY1UhDH2NAQIECBAgQIAbNmzYq02aL168Y8aXNWrUs33678WROXLk071hwp8lSpQzZsyDHTp06MuNAQIECBAgQIAbNmzYq02aL168Y8aXNWrUs33678WROXLk071hwp8lSpQzZsyDHTp06MuNAQIECBAgQIAbNmzYq02aL168Y8aXNWrUs33678WROXLk071hwp8lSpQzZsyDHTp06MuNAQIECBAgQIAbNmzYq02aL168Y8aXNWrUs33678WROXLk071hwp8lSpQzZsyDHTp06MuNAQIECBAgQIAbNmzYq02aL168Y8aXNWrUs33678WROXLk071hwp8lSpQzZsyDHTp06MuN", 256, !1), P = j[0], T = j[1], D = j[2], I = j[3], C = j[4], R = j[5], L = j[6], K = j[7], B = j[8]), 8 * e.length) {
                        case 128:
                            t = 128, r = 4, n = 10;
                            break;
                        case 192:
                            t = 192, r = 6, n = 12;
                            break;
                        case 256:
                            t = 256, r = 8, n = 14;
                            break;
                        default:
                            throw new Error("Unsupported keyLength")
                        }
                        var o = function (e) {
                                var t = e[1];
                                e[1] = e[5], e[5] = e[9], e[9] = e[13], e[13] = t, t = e[2], e[2] = e[10], e[10] = t, t = e[6], e[6] = e[14], e[14] = t, t = e[15], e[15] = e[11], e[11] = e[7], e[7] = e[3], e[3] = t
                            },
                            a = function (e) {
                                var t = e[13];
                                e[13] = e[9], e[9] = e[5], e[5] = e[1], e[1] = t, t = e[10], e[10] = e[2], e[2] = t, t = e[14], e[14] = e[6], e[6] = t, t = e[3], e[3] = e[7], e[7] = e[11], e[11] = e[15], e[15] = t
                            },
                            u = function (e) {
                                var t = e[0],
                                    r = e[1],
                                    n = e[2],
                                    i = e[3],
                                    o = e[4],
                                    a = e[5],
                                    u = e[6],
                                    s = e[7],
                                    c = e[8],
                                    f = e[9],
                                    l = e[10],
                                    h = e[11],
                                    p = e[12],
                                    d = e[13],
                                    y = e[14],
                                    v = e[15];
                                e[0] = P[t] ^ T[r] ^ n ^ i, e[1] = t ^ P[r] ^ T[n] ^ i, e[2] = t ^ r ^ P[n] ^ T[i], e[3] = T[t] ^ r ^ n ^ P[i], e[4] = P[o] ^ T[a] ^ u ^ s, e[5] = o ^ P[a] ^ T[u] ^ s, e[6] = o ^ a ^ P[u] ^ T[s], e[7] = T[o] ^ a ^ u ^ P[s], e[8] = P[c] ^ T[f] ^ l ^ h, e[9] = c ^ P[f] ^ T[l] ^ h, e[10] = c ^ f ^ P[l] ^ T[h], e[11] = T[c] ^ f ^ l ^ P[h], e[12] = P[p] ^ T[d] ^ y ^ v, e[13] = p ^ P[d] ^ T[y] ^ v, e[14] = p ^ d ^ P[y] ^ T[v], e[15] = T[p] ^ d ^ y ^ P[v]
                            },
                            s = function (e) {
                                var t = e[0],
                                    r = e[1],
                                    n = e[2],
                                    i = e[3],
                                    o = e[4],
                                    a = e[5],
                                    u = e[6],
                                    s = e[7],
                                    c = e[8],
                                    f = e[9],
                                    l = e[10],
                                    h = e[11],
                                    p = e[12],
                                    d = e[13],
                                    y = e[14],
                                    v = e[15];
                                e[0] = D[t] ^ C[r] ^ I[n] ^ R[i], e[1] = R[t] ^ D[r] ^ C[n] ^ I[i], e[2] = I[t] ^ R[r] ^ D[n] ^ C[i], e[3] = C[t] ^ I[r] ^ R[n] ^ D[i], e[4] = D[o] ^ C[a] ^ I[u] ^ R[s], e[5] = R[o] ^ D[a] ^ C[u] ^ I[s], e[6] = I[o] ^ R[a] ^ D[u] ^ C[s], e[7] = C[o] ^ I[a] ^ R[u] ^ D[s], e[8] = D[c] ^ C[f] ^ I[l] ^ R[h], e[9] = R[c] ^ D[f] ^ C[l] ^ I[h], e[10] = I[c] ^ R[f] ^ D[l] ^ C[h], e[11] = C[c] ^ I[f] ^ R[l] ^ D[h], e[12] = D[p] ^ C[d] ^ I[y] ^ R[v], e[13] = R[p] ^ D[d] ^ C[y] ^ I[v], e[14] = I[p] ^ R[d] ^ D[y] ^ C[v], e[15] = C[p] ^ I[d] ^ R[y] ^ D[v]
                            },
                            c = function (e, t) {
                                return [e[0] ^ t[0], e[1] ^ t[1], e[2] ^ t[2], e[3] ^ t[3]]
                            },
                            l = function (e, t, r) {
                                for (var n = 0; n < e.length; n += 1) e[n] ^= t[n + r]
                            },
                            h = function (e) {
                                for (var t = 0; t < e.length; t += 1) e[t] = L[e[t]]
                            },
                            p = function (e) {
                                for (var t = 0; t < e.length; t += 1) e[t] = K[e[t]]
                            },
                            d = function (e, t) {
                                return [e[4 * t], e[4 * t + 1], e[4 * t + 2], e[4 * t + 3]]
                            };
                        return i = function (e) {
                            for (var t, i, o, a, u, s, f, l = [], p = 0; p < 4 * r;) l.push(e[p++]);
                            for (p = r; p < 4 * (n + 1);) {
                                if (t = d(l, p - 1), p % r == 0) {
                                    var y = [B[p / r], 0, 0, 0];
                                    f = void 0, f = (s = t)[0], s[0] = s[1], s[1] = s[2], s[2] = s[3], s[3] = f, h(t), t = c(t, y)
                                } else r > 6 && p % r == 4 && h(t);
                                var v = c(d(l, p - r), t);
                                o = v, u = 0, (i = l)[4 * (a = p)] = o[4 * u], i[4 * a + 1] = o[4 * u + 1], i[4 * a + 2] = o[4 * u + 2], i[4 * a + 3] = o[4 * u + 3], p += 1
                            }
                            return l
                        }(e), {
                            encrypt: function (e) {
                                var t, r = e;
                                for (l(r, i, 0), t = 1; t <= n - 1; t += 1) h(r), o(r), u(r), l(r, i, 4 * t * 4);
                                return h(r), o(r), l(r, i, 4 * n * 4), r
                            },
                            decrypt: function (e) {
                                var t, r = e;
                                for (l(r, i, 4 * n * 4), t = n - 1; t >= 1; t -= 1) a(r), p(r), l(r, i, 4 * t * 4), s(r);
                                return a(r), p(r), l(r, i, 0), r
                            },
                            clear: function () {},
                            keyLength: t,
                            blockSize: 128
                        }
                    }
                },
                z = z || {};
            z.pkcsv7 = function (e) {
                return {
                    pad: function (t) {
                        var r = t[t.length - 1 >= 0 ? t.length - 1 : 0],
                            n = r.length;
                        if (n === e) {
                            var i, o = [];
                            for (i = 0; i < e; i += 1) o.push(e);
                            t.push(o)
                        } else
                            for (var a = e - n & 255; r.length !== e;) r.push(a)
                    },
                    unpad: function (t) {
                        var r = !0;
                        t.length % e != 0 && (r = !1);
                        for (var n = t.slice(-e), i = n[n.length - 1], o = 0; o < e; o++) {
                            var a = e - o <= i,
                                u = n[o] === i;
                            r = (!a || u) && r
                        }
                        var s = r ? i : 0;
                        return t.length -= s, r
                    }
                }
            };
            var H = function (e) {
                    var t = e.blockSize / 8,
                        r = z.pkcsv7(t),
                        n = function (e) {
                            var t, r, n = [];
                            for (t = 0; t < e.length; t += 1) {
                                var i = e[t];
                                for (r = 0; r < i.length; r += 1) n.push(i[r])
                            }
                            return n
                        };
                    function i(e) {
                        var r = [];
                        s = s.concat(e);
                        for (var n = Math.floor(s.length / t), i = 0; i < n; i++) r.push(s.slice(i * t, (i + 1) * t));
                        return s = s.slice(n * t), r
                    }
                    function o(t) {
                        for (var r, n = [], i = 0; i < t.length; i++) r = f.xorVectors(u, t[i]), n.push(e.encrypt(r)), u = n[i];
                        return n
                    }
                    function a() {
                        s = [], c = [], u = null
                    }
                    var u, s = [],
                        c = [];
                    return {
                        init: function (e) {
                            if (e.length !== t) throw new Error("Invalid iv size");
                            u = e.slice()
                        },
                        encrypt: function (e) {
                            return this.processEncrypt(e), this.finishEncrypt()
                        },
                        processEncrypt: function (e) {
                            var t = o(i(e));
                            c = c.concat(n(t))
                        },
                        finishEncrypt: function () {
                            var e = 1 === s.length ? [
                                [s[0]]
                            ] : [s];
                            r.pad(e);
                            var t = c.concat(n(o(e)));
                            return a(), t
                        },
                        decrypt: function (e) {
                            return this.processDecrypt(e), this.finishDecrypt()
                        },
                        processDecrypt: function (t) {
                            var r = function (t) {
                                for (var r, n, i = [], o = 0; o < t.length; o += 1) r = t[o].slice(0, t[o].length), n = e.decrypt(r), i.push(f.xorVectors(u, n)), u = t[o];
                                return i
                            }(i(t));
                            c = c.concat(n(r))
                        },
                        finishDecrypt: function () {
                            var e = c;
                            r.unpad(e);
                            return a(), e
                        }
                    }
                },
                N = null;
            void 0 !== e && (H.workerEncrypt = function (e) {
                var t;
                if (N || (N = H(U.aes(e.keyData))).init(e.algorithm.iv), "process" !== e.operationSubType) return "finish" === e.operationSubType ? (t = N.finishEncrypt(), N = null, t) : (t = N.encrypt(e.buffer), N = null, t);
                N.processEncrypt(e.buffer)
            }, H.workerDecrypt = function (e) {
                var t;
                if (N || (N = H(U.aes(e.keyData))).init(e.algorithm.iv), "process" !== e.operationSubType) return "finish" === e.operationSubType ? (t = N.finishDecrypt(), N = null, t) : (t = N.decrypt(e.buffer), N = null, t);
                N.processDecrypt(e.buffer)
            }, H.generateKey = function (e) {
                if (e.algorithm.length % 8 != 0) throw new Error;
                return {
                    type: "keyGeneration",
                    keyData: G.getBytes(Math.floor(e.algorithm.length / 8)),
                    keyHandle: {
                        algorithm: e.algorithm,
                        extractable: e.extractable,
                        keyUsage: e.keyUsage,
                        type: "secret"
                    }
                }
            }, H.importKey = function (e) {
                var t = h.jwkToKey(e.keyData, e.algorithm, ["k"]);
                return e.algorithm.length = 8 * t.k.length, {
                    type: "keyImport",
                    keyData: t.k,
                    keyHandle: {
                        algorithm: e.algorithm,
                        extractable: e.extractable || t.extractable,
                        keyUsage: e.keyUsage,
                        type: "secret"
                    }
                }
            }, H.exportKey = function (e) {
                return {
                    type: "keyExport",
                    keyHandle: h.keyToJwk(e.keyHandle, e.keyData)
                }
            }, e.register("importKey", "aes-cbc", H.importKey), e.register("exportKey", "aes-cbc", H.exportKey), e.register("generateKey", "aes-cbc", H.generateKey), e.register("encrypt", "aes-cbc", H.workerEncrypt), e.register("decrypt", "aes-cbc", H.workerDecrypt));
            var W, V = function (e) {
                var t, r, n, i, o, a, u = f,
                    s = [],
                    c = e.encrypt(u.getVector(16)),
                    l = u.getVector(16),
                    h = [],
                    p = [],
                    d = 0;
                function y(e, t) {
                    for (var r, n = Math.floor(t.length / 16), i = 0; i < n; i++) r = t.slice(16 * i, 16 * i + 16), l = g(u.xorVectors(l, r), e);
                    return h = t.slice(16 * n), l
                }
                function v() {
                    var e = 16 * Math.ceil(d / 16) - d,
                        t = x(8 * r.length),
                        n = x(8 * d),
                        i = h.concat(u.getVector(e)).concat(t).concat(n);
                    return y(c, i)
                }
                function g(e, t) {
                    for (var r, n, i, o, a, s, c, f = u.getVector(16), l = t.slice(), h = [225, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], p = 0; p < 128; p++) a = e, s = p, c = void 0, c = Math.floor(s / 8), r = a[c] >> 7 - s % 8 & 1, i = u.xorVectors(f, l), f = u.select(f, i, r), o = 1 & l[15], m(l), n = u.xorVectors(l, h), l = u.select(l, n, o);
                    return f
                }
                function m(e) {
                    for (var t = e.length - 1; t > 0; t--) e[t] = (1 & e[t - 1]) << 7 | e[t] >>> 1;
                    return e[0] = e[0] >>> 1, e
                }
                function b(e) {
                    for (var t = 256, r = 1; r <= 4; r++) t = (t >>> 8) + e[e.length - r], e[e.length - r] = 255 & t;
                    return e
                }
                function w(t, r) {
                    var n, i = Math.ceil(r.length / 16),
                        o = [];
                    a !== t && (a = t.slice());
                    for (var s = 0; s < i; s++) {
                        n = r.slice(16 * s, 16 * s + 16);
                        for (var c = e.encrypt(a.slice()), f = u.xorVectors(n, c), l = 0; l < f.length; l++) o.push(f[l]);
                        a = b(a)
                    }
                    return o
                }
                function x(e) {
                    return [0, 0, 0, 0, e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e]
                }
                function M() {
                    d = 0, s = [], p = [], l = u.getVector(16), h = [], a = t = r = null
                }
                return {
                    init: function (e, a, s) {
                        if (r = a || [], (n = isNaN(s) ? 128 : s) % 8 != 0) throw new Error("DataError");
                        if (12 === (t = e).length) i = t.concat([0, 0, 0, 1]);
                        else {
                            var f = 16 * Math.ceil(t.length / 16) - t.length;
                            i = y(c, t.concat(u.getVector(f + 8)).concat(x(8 * t.length))), l = u.getVector(16)
                        }
                        var h, p;
                        o = b(i.slice()), y(c, (h = r, p = 16 * Math.ceil(r.length / 16) - r.length, h.concat(u.getVector(p))))
                    },
                    encrypt: function (e) {
                        d = e.length;
                        var t = w(o, e);
                        y(c, t);
                        var r = v(),
                            a = w(i, r).slice(0, n / 8);
                        return M(), t.slice().concat(a)
                    },
                    decrypt: function (e, t) {
                        d = e.length;
                        var r = w(o, e);
                        y(c, e);
                        var a = v(),
                            s = w(i, a).slice(0, n / 8);
                        return M(), u.arraysEqual(s, t) ? r : null
                    },
                    processEncrypt: function (e) {
                        var t = (s = s.concat(e)).slice(0, 16 * Math.floor(s.length / 16));
                        d += t.length, s = s.slice(t.length);
                        var r = w(a || o, t);
                        p = p.concat(r), y(c, r)
                    },
                    processDecrypt: function (e) {
                        var t = (s = s.concat(e)).slice(0, 16 * Math.floor((s.length - n / 8) / 16));
                        d += t.length, s = s.slice(t.length);
                        var r = w(a || o, t);
                        p = p.concat(r), y(c, t)
                    },
                    finishEncrypt: function () {
                        var e = w(a, s);
                        p = p.concat(e), d += s.length;
                        var t = v(),
                            r = w(i, t).slice(0, n / 8),
                            o = p.slice().concat(r);
                        return M(), o
                    },
                    finishDecrypt: function () {
                        var e = Math.floor(n / 8),
                            t = s.slice(-e);
                        s = s.slice(0, s.length - e);
                        var r = w(a, s);
                        p = p.concat(r), d += s.length;
                        var o = v(),
                            c = w(i, o).slice(0, n / 8),
                            f = p.slice();
                        if (M(), u.arraysEqual(c, t)) return f;
                        throw new Error("OperationError")
                    }
                }
            };
            function q() {
                if (!(this instanceof q)) throw new Error("create MsrcryptoPrng object with new keyword");
                var e, t, r, n, i = !1,
                    o = 1;
                function a(e) {
                    var t;
                    for (t = e.length - 1; t >= 0 && (e[t] += 1, e[t] >= 256 && (e[t] = 0), !e[t]); t -= 1);
                }
                function u() {
                    e = f.getVector(32), t = f.getVector(16), r = 32, n = 48, o = 1
                }
                function s(e, t) {
                    if ((t = t || [0]).length > n) throw new Error("Incorrect entropy or additionalEntropy length");
                    t = t.concat(f.getVector(n - t.length)), e = e.concat(f.getVector((n - e.length % n) % n));
                    for (var r = 0; r < e.length; r += n) {
                        c(f.xorVectors(e.slice(r, r + n), t))
                    }
                    o = 1
                }
                function c(i) {
                    for (var o = [], u = new U.aes(e); o.length < n;) {
                        a(t);
                        var s = t.slice(0, 16),
                            c = u.encrypt(s);
                        o = o.concat(c)
                    }
                    o = f.xorVectors(o, i), e = o.slice(0, r), t = o.slice(r)
                }
                function l(r, i) {
                    if (r >= 65536) throw new Error("too much random requested");
                    if (o > 1 << 24) throw new Error("Reseeding is required");
                    if (i && i.length > 0) {
                        for (; i.length < n;) i = i.concat(f.getVector(n - i.length));
                        c(i)
                    } else i = f.getVector(n);
                    for (var u = [], s = new U.aes(e); u.length < r;) {
                        a(t);
                        var l = t.slice(0, t.length),
                            h = s.encrypt(l);
                        u = u.concat(h)
                    }
                    return u = u.slice(0, r), c(i), o += 1, u
                }
                return (u(), {
                    reseed: s,
                    init: function (e, t) {
                        if (e.length < n) throw new Error("Initial entropy length too short");
                        u(), s(e, t), i = !0
                    },
                    getBytes: function (e, t) {
                        if (!i) throw new Error("can't get randomness before initialization");
                        return l(e, t)
                    },
                    getNonZeroBytes: function (e, t) {
                        if (!i) throw new Error("can't get randomness before initialization");
                        for (var r, n = []; n.length < e;) {
                            r = l(e, t);
                            for (var o = 0; o < r.length; o += 1) 0 !== r[o] && n.push(r[o])
                        }
                        return n.slice(0, e)
                    }
                })
            }
            void 0 !== e && (V.encrypt = function (e) {
                var t;
                if (W || (W = V(U.aes(e.keyData))).init(e.algorithm.iv, e.algorithm.additionalData, e.algorithm.tagLength), "process" !== e.operationSubType) return "finish" === e.operationSubType ? (t = W.finishEncrypt(), W = null, t) : (t = W.encrypt(e.buffer), W = null, t);
                W.processEncrypt(e.buffer)
            }, V.decrypt = function (e) {
                var t;
                if (W || (W = V(U.aes(e.keyData))).init(e.algorithm.iv, e.algorithm.additionalData, e.algorithm.tagLength), "process" !== e.operationSubType) {
                    if ("finish" === e.operationSubType) return t = W.finishDecrypt(), W = null, t;
                    var r = Math.floor(e.algorithm.tagLength / 8),
                        n = e.buffer.slice(0, e.buffer.length - r),
                        i = e.buffer.slice(-r);
                    return t = W.decrypt(n, i), W = null, t
                }
                W.processDecrypt(e.buffer)
            }, V.generateKey = function (e) {
                if (e.algorithm.length % 8 != 0) throw new Error;
                return {
                    type: "keyGeneration",
                    keyData: G.getBytes(Math.floor(e.algorithm.length / 8)),
                    keyHandle: {
                        algorithm: e.algorithm,
                        extractable: e.extractable,
                        keyUsage: e.keyUsage,
                        type: "secret"
                    }
                }
            }, V.importKey = function (e) {
                var t = h.jwkToKey(e.keyData, e.algorithm, ["k"]);
                return {
                    type: "keyImport",
                    keyData: t.k,
                    keyHandle: {
                        algorithm: e.algorithm,
                        extractable: e.extractable || t.extractable,
                        keyUsage: e.keyUsage,
                        type: "secret"
                    }
                }
            }, V.exportKey = function (e) {
                return {
                    type: "keyExport",
                    keyHandle: h.keyToJwk(e.keyHandle, e.keyData)
                }
            }, e.register("importKey", "aes-gcm", V.importKey), e.register("exportKey", "aes-gcm", V.exportKey), e.register("generateKey", "aes-gcm", V.generateKey), e.register("encrypt", "aes-gcm", V.encrypt), e.register("decrypt", "aes-gcm", V.decrypt));
            var G = new q;
            var Z, Y = function (e) {
                    var t = f,
                        r = e.hasOwnProperty("n") && e.hasOwnProperty("d"),
                        n = e.hasOwnProperty("p") && e.hasOwnProperty("q"),
                        i = e.n.length;
                    function o(e) {
                        var r = p.digitsToBytes(e);
                        return t.padFront(r, 0, i), r
                    }
                    function a(e, t, r) {
                        var n = p.bytesToDigits(t),
                            i = p.IntegerGroup(r),
                            o = i.createElementFromBytes(e);
                        return i.modexp(o, n).m_digits
                    }
                    return {
                        encrypt: function (t) {
                            return o(a(t, e.e, e.n))
                        },
                        decrypt: function (t) {
                            if (n) return function (t) {
                                var r = e.p,
                                    n = e.q,
                                    i = e.dp,
                                    a = e.dq,
                                    u = e.qi,
                                    s = p.bytesToDigits(r),
                                    c = p.bytesToDigits(n),
                                    f = new Array(s.length + c.length),
                                    l = new Array(s.length + 1),
                                    h = new Array(c.length + 1),
                                    d = p.bytesToDigits(t);
                                p.reduce(d, s, f), p.modExp(f, p.bytesToDigits(i), s, l), p.reduce(d, c, f), p.modExp(f, p.bytesToDigits(a), c, h);
                                var y = p.subtract(l, h, f);
                                return 0 !== y && p.subtract(h, l, f), p.modMul(f, p.bytesToDigits(u), s, d), 0 !== y && p.subtract(s, d, d), p.multiply(d, c, f), p.add(h, f, l), o(l)
                            }(t);
                            if (r) return function (t) {
                                return o(a(t, e.d, e.n))
                            }(t);
                            throw new Error("missing private key")
                        }
                    }
                },
                Q = function (e, t, r) {
                    var n, i, o, a = [],
                        u = r.hashLen / 8;
                    for (o = 0; o <= Math.floor(t / u); o += 1) n = [o >>> 24 & 255, o >>> 16 & 255, o >>> 8 & 255, 255 & o], i = r.computeHash(e.concat(n)), a = a.concat(i);
                    return a.slice(0, t)
                };
            (Z = Z || {}).oaep = function (e, t) {
                var r = f,
                    n = G,
                    i = e.n.length;
                if (null === t) throw new Error("must supply hashFunction");
                return {
                    pad: function (e, o) {
                        return function (e, o) {
                            var a, u, s, c, f, l, h, p, d, y;
                            if (e.length > i - t.hashLen / 8 * 2 - 2) throw new Error("Message too long.");
                            return o || (o = []), a = t.computeHash(o), u = i - e.length - 2 * a.length - 2, s = r.getVector(u), c = a.concat(s, [1], e), f = n.getBytes(a.length), l = Q(f, i - a.length - 1, t), h = r.xorVectors(c, l), p = Q(h, a.length, t), d = r.xorVectors(f, p), e = (y = [0].concat(d).concat(h)).slice(), y
                        }(e, o)
                    },
                    unpad: function (e, n) {
                        return function (e, n) {
                            var o, a, u, s, c, f, l, h;
                            if (n || (n = []), o = t.computeHash(n), 0 !== e[0]) throw new Error("Encryption Error");
                            if (a = e.slice(1, o.length + 1), u = e.slice(o.length + 1), s = Q(u, o.length, t), c = r.xorVectors(a, s), f = Q(c, i - o.length - 1, t), h = (l = r.xorVectors(u, f)).slice(0, o.length), !r.arraysEqual(o, h)) throw new Error("Encryption Error");
                            var p = (l = l.slice(o.length)).indexOf(1);
                            return l.slice(p + 1)
                        }(e, n)
                    }
                }
            }, (Z = Z || {}).pkcs1Encrypt = function (e) {
                var t = G,
                    r = e.n.length;
                return {
                    pad: function (e) {
                        return function (e) {
                            var n;
                            if (e.length > r - 11) throw new Error("message too long");
                            return n = t.getNonZeroBytes(r - e.length - 3), [0, 2].concat(n, [0], e)
                        }(e)
                    },
                    unpad: function (e) {
                        return function (e) {
                            var t;
                            for (t = 1; t < e.length && 0 !== e[t]; t += 1);
                            return e.slice(t + 1)
                        }(e)
                    }
                }
            }, Z.pkcs1Sign = function (e, t) {
                var r = f,
                    n = e.n.length;
                function i(e) {
                    var i, o, a;
                    if (o = t.computeHash(e.slice()), a = (i = t.der.concat(o)).length, n < a + 11) throw new Error("intended encoded message length too short");
                    return [0, 1].concat(r.getVector(n - a - 3, 255), [0], i)
                }
                return {
                    sign: function (e) {
                        return i(e)
                    },
                    verify: function (e, t) {
                        var n = i(t);
                        return r.arraysEqual(e, n)
                    }
                }
            }, (Z = Z || {}).pss = function (e, t) {
                var r = f,
                    n = G;
                return {
                    sign: function (i, o, a) {
                        return function (i, o, a) {
                            var u = 8 * e.n.length - 1,
                                s = Math.ceil(u / 8),
                                c = t.computeHash(i);
                            if (o = a ? a.length : o || c.length, s < c.length + o + 2) throw new Error("encoding error");
                            a = a || n.getBytes(o);
                            for (var f = [0, 0, 0, 0, 0, 0, 0, 0].concat(c, a), l = t.computeHash(f), h = r.getVector(s - a.length - l.length - 2).concat([1], a), p = Q(l, s - l.length - 1, t), d = r.xorVectors(h, p), y = 0, v = 0; v < 8 - (8 * s - u); v++) y += 1 << v;
                            return d[0] &= y, d.concat(l, [188])
                        }(i, o, a)
                    },
                    verify: function (n, i, o) {
                        return function (n, i, o) {
                            var a = 8 * e.n.length - 1,
                                u = Math.ceil(a / 8),
                                s = t.computeHash(i),
                                c = s.length;
                            if (u < c + (o = o || c) + 2) return !1;
                            var f = n.slice(0, u - c - 1),
                                l = n.slice(f.length, f.length + c),
                                h = Q(l, u - c - 1, t),
                                p = r.xorVectors(f, h);
                            p[0] &= 255 >>> 8 - (8 * u - a);
                            for (var d = 0; d < u - c - o - 2; d++)
                                if (0 !== p[d]) return !1;
                            if (1 !== p[u - c - o - 2]) return !1;
                            var y = p.slice(-o),
                                v = [0, 0, 0, 0, 0, 0, 0, 0].concat(s, y),
                                g = t.computeHash(v);
                            return r.arraysEqual(g, l)
                        }(n, i, o)
                    }
                }
            };
            var J = function (e, t, r) {
                var n = Y(e);
                if (!t) throw new Error("padding mode");
                function i() {
                    if (!r || !r.computeHash) throw new Error("missing hash function")
                }
                var o, a = null,
                    u = null;
                switch (t) {
                case "rsaes-pkcs1-v1_5":
                    o = Z.pkcs1Encrypt(e);
                    break;
                case "rsassa-pkcs1-v1_5":
                    i(), o = Z.pkcs1Sign(e, r);
                    break;
                case "rsa-oaep":
                    i(), o = Z.oaep(e, r);
                    break;
                case "rsa-pss":
                    i(), o = Z.pss(e, r);
                    break;
                case "raw":
                    o = {
                        pad: function (e) {
                            return e
                        },
                        unpad: function (e) {
                            return e
                        }
                    };
                    break;
                default:
                    throw new Error("invalid mode")
                }
                return o && (a = o.pad || o.sign, u = o.unpad || o.verify), {
                    encrypt: function (e, t) {
                        var r;
                        return r = null !== a ? a(e, t) : e.slice(), n.encrypt(r)
                    },
                    decrypt: function (e, t) {
                        var r = n.decrypt(e);
                        return r = null !== u ? u(r, t) : r.slice(0)
                    },
                    signData: function (e, t, r) {
                        return n.decrypt(a(e, t, r))
                    },
                    verifySignature: function (e, t, r) {
                        var i = n.encrypt(e);
                        return u(i, t, r)
                    },
                    mode: t
                }
            };
            void 0 !== e && (J.sign = function (e) {
                var t = e.algorithm.hash.name,
                    r = c[t.toLowerCase()],
                    n = e.algorithm.saltLength,
                    i = e.algorithm.salt;
                return J(e.keyData, e.algorithm.name, r).signData(e.buffer, n, i)
            }, J.verify = function (e) {
                var t = e.algorithm.hash.name,
                    r = c[t.toLowerCase()],
                    n = e.algorithm.saltLength;
                return J(e.keyData, e.algorithm.name, r).verifySignature(e.signature, e.buffer, n)
            }, J.workerEncrypt = function (e) {
                var t, r, n;
                switch (e.algorithm.name) {
                case "rsaes-pkcs1-v1_5":
                    t = J(e.keyData, e.algorithm.name).encrypt(e.buffer);
                    break;
                case "rsa-oaep":
                    if (!(n = e.algorithm.hash.name)) throw new Error("unsupported hash algorithm");
                    r = c[n.toLowerCase()], t = J(e.keyData, e.algorithm.name, r).encrypt(e.buffer);
                    break;
                default:
                    throw new Error("unsupported algorithm")
                }
                return t
            }, J.workerDecrypt = function (e) {
                var t, r;
                switch (e.algorithm.name) {
                case "rsaes-pkcs1-v1_5":
                    t = J(e.keyData, e.algorithm.name).decrypt(e.buffer);
                    break;
                case "rsa-oaep":
                    var n = e.algorithm.hash.name;
                    if (!n) throw new Error("unsupported hash algorithm");
                    r = c[n.toLowerCase()], t = J(e.keyData, e.algorithm.name, r).decrypt(e.buffer);
                    break;
                default:
                    throw new Error("unsupported algorithm")
                }
                return t
            }, J.importKey = function (e) {
                var t = h.jwkToKey(e.keyData, e.algorithm, ["n", "e", "d", "q", "p", "dq", "dp", "qi"]);
                return {
                    type: "keyImport",
                    keyData: t,
                    keyHandle: {
                        algorithm: e.algorithm,
                        extractable: e.extractable || t.extractable,
                        keyUsage: e.keyUsage,
                        type: t.d || t.dq ? "private" : "public"
                    }
                }
            }, J.exportKey = function (e) {
                return {
                    type: "keyExport",
                    keyHandle: h.keyToJwk(e.keyHandle, e.keyData)
                }
            }, e.register("sign", "rsassa-pkcs1-v1_5", J.sign), e.register("sign", "rsa-pss", J.sign), e.register("verify", "rsassa-pkcs1-v1_5", J.verify), e.register("verify", "rsa-pss", J.verify), e.register("encrypt", "rsa-oaep", J.workerEncrypt), e.register("encrypt", "rsaes-pkcs1-v1_5", J.workerEncrypt), e.register("decrypt", "rsa-oaep", J.workerDecrypt), e.register("decrypt", "rsaes-pkcs1-v1_5", J.workerDecrypt), e.register("importKey", "rsa-oaep", J.importKey), e.register("importKey", "rsaes-pkcs1-v1_5", J.importKey), e.register("importKey", "rsassa-pkcs1-v1_5", J.importKey), e.register("importKey", "rsa-pss", J.importKey), e.register("exportKey", "rsa-oaep", J.exportKey), e.register("exportKey", "rsaes-pkcs1-v1_5", J.exportKey), e.register("exportKey", "rsassa-pkcs1-v1_5", J.exportKey), e.register("exportKey", "rsa-pss", J.exportKey)), J.workerWrapKey = function (e) {
                switch (e.algorithm.name) {
                case "rsa-oaep":
                    var t = e.algorithm.hash.name.toLowerCase();
                    return J(e.keyData1, e.keyHandle1.algorithm.name, c[t]).encrypt(e.keyData);
                default:
                    throw new Error("unsupported algorithm")
                }
            }, e.register("wrapKey", "rsa-oaep", J.workerWrapKey);
            var X = function (e) {
                    var t = f;
                    return {
                        deriveKey: function (r, n, i) {
                            for (var o = Math.ceil(i / (e.hashLen / 8)), a = 1, u = r.concat(n), s = [], c = 0; c < o; c++) {
                                var f = t.int32ToBytes(a++).concat(u),
                                    l = e.computeHash(f);
                                s = s.concat(l)
                            }
                            return s.slice(0, i)
                        }
                    }
                },
                $ = null;
            void 0 !== e && (X.deriveKey = function (e) {
                var t = f,
                    r = e.algorithm.hash.name,
                    n = c[r.toLowerCase()];
                $ = X(n);
                var i = e.algorithm,
                    o = t.toArray(i.algorithmId).concat(t.toArray(i.partyUInfo), t.toArray(i.partyVInfo), t.toArray(i.publicInfo), t.toArray(i.privateInfo)),
                    a = $.deriveKey(e.keyData, o, e.derivedKeyType.length);
                return $ = null, {
                    type: "keyDerive",
                    keyData: a,
                    keyHandle: {
                        algorithm: e.derivedKeyType,
                        extractable: e.extractable,
                        keyUsage: e.keyUsage,
                        type: "secret"
                    }
                }
            }, X.deriveBits = function (e) {
                var t = e.algorithm.hash.name,
                    r = c[t.toLowerCase()];
                $ = X(r);
                var n = e.algorithm,
                    i = n.algorithmId.concat(n.partyUInfo, n.partyVInfo, n.publicInfo || [], n.privateInfo || []),
                    o = $.deriveKey(e.keyData, i, e.length);
                return $ = null, o
            }, e.register("deriveKey", "concat", X.deriveKey), e.register("deriveBits", "concat", X.deriveBits));
            var ee = function (e) {
                var t = p.bytesToDigits,
                    r = p.digitsToBytes,
                    n = e,
                    i = new d.EllipticCurveOperatorFp(e);
                return {
                    generateKey: function (t) {
                        var o = [],
                            a = G.getBytes(e.order.length * p.DIGIT_NUM_BYTES);
                        a = t || a, p.reduce(p.bytesToDigits(a), n.order, o);
                        var u = n.allocatePointStorage();
                        return i.scalarMultiply(o, n.generator, u), {
                            privateKey: {
                                x: r(u.x),
                                y: r(u.y),
                                d: r(o)
                            },
                            publicKey: {
                                x: r(u.x),
                                y: r(u.y)
                            }
                        }
                    },
                    deriveBits: function (e, r, o) {
                        var a = new d.EllipticCurvePointFp(n, !1, t(r.x), t(r.y), null, !1),
                            u = n.allocatePointStorage();
                        i.convertToJacobianForm(u), i.convertToMontgomeryForm(u), i.scalarMultiply(t(e.d), a, u), i.convertToAffineForm(u), i.convertToStandardForm(u);
                        var s = p.digitsToBytes(u.x);
                        if (o && 8 * s.length < o) throw new Error("DataError");
                        return o ? s.slice(0, o / 8) : s
                    },
                    computePublicKey: function (e) {
                        n.generator.isInMontgomeryForm || i.convertToMontgomeryForm(n.generator);
                        var o = n.allocatePointStorage();
                        return i.convertToJacobianForm(o), i.convertToMontgomeryForm(o), i.scalarMultiply(t(e), n.generator, o), {
                            x: r(o.x),
                            y: r(o.y)
                        }
                    }
                }
            };
            void 0 !== e && (ee.deriveBits = function (e) {
                var t = d.createCurve(e.algorithm.namedCurve.toUpperCase()),
                    r = e.keyData,
                    n = e.additionalKeyData;
                return ee(t).deriveBits(r, n, e.length)
            }, ee.generateKey = function (e) {
                var t = d.createCurve(e.algorithm.namedCurve.toUpperCase()),
                    r = ee(t).generateKey();
                return {
                    type: "keyPairGeneration",
                    keyPair: {
                        publicKey: {
                            keyData: r.publicKey,
                            keyHandle: {
                                algorithm: e.algorithm,
                                extractable: e.extractable,
                                keyUsage: e.keyUsage,
                                type: "public"
                            }
                        },
                        privateKey: {
                            keyData: r.privateKey,
                            keyHandle: {
                                algorithm: e.algorithm,
                                extractable: e.extractable,
                                keyUsage: e.keyUsage,
                                type: "private"
                            }
                        }
                    }
                }
            }, ee.importKey = function (e) {
                var t = h.jwkToKey(e.keyData, e.algorithm, ["x", "y", "d", "crv"]);
                if (t.d && (!t.x || !t.y)) {
                    var r = d.createCurve(e.algorithm.namedCurve.toUpperCase()),
                        n = ee(r).computePublicKey(t.d);
                    t.x = n.x, t.y = n.y
                }
                return {
                    type: "keyImport",
                    keyData: t,
                    keyHandle: {
                        algorithm: e.algorithm,
                        extractable: e.extractable || t.extractable,
                        keyUsage: e.keyUsage,
                        type: t.d ? "private" : "public"
                    }
                }
            }, ee.exportKey = function (e) {
                return {
                    type: "keyExport",
                    keyHandle: h.keyToJwk(e.keyHandle, e.keyData)
                }
            }, e.register("importKey", "ecdh", ee.importKey), e.register("exportKey", "ecdh", ee.exportKey), e.register("generateKey", "ecdh", ee.generateKey), e.register("deriveBits", "ecdh", ee.deriveBits));
            var te, re = function (e) {
                var t = p.bytesToDigits,
                    r = p.digitsToBytes,
                    n = new d.EllipticCurveOperatorFp(e),
                    i = r(e.order).length,
                    o = 1 === e.type;
                function a(t) {
                    var r = e.allocatePointStorage();
                    return n.scalarMultiply(t, e.generator, r), {
                        publicKey: r,
                        privateKey: t
                    }
                }
                function u(t) {
                    var r = [];
                    return t || (t = G.getBytes(e.order.length * p.DIGIT_NUM_BYTES)), p.reduce(p.bytesToDigits(t), e.order, r), a(r)
                }
                function s(r) {
                    r.length > i && (r.length = i);
                    var n = t(r);
                    if (o) {
                        var a = 8 - e.rbits % 8;
                        p.shiftRight(n, n, a)
                    }
                    return p.reduce(n, e.order, n), n
                }
                return {
                    createKey: function (e) {
                        return a(t(e))
                    },
                    generateKey: u,
                    sign: function (n, o, a) {
                        a || (a = u());
                        var c = a.publicKey.x,
                            l = a.privateKey,
                            h = t(n.d),
                            d = s(o.slice()),
                            y = [],
                            v = [];
                        p.reduce(c, e.order, c), p.modMul(c, h, e.order, y), p.add(y, d, y), p.reduce(y, e.order, y), p.modInv(l, e.order, v), p.modMul(y, v, e.order, y);
                        var g = f.padFront(r(c, !0, i), 0, i),
                            m = f.padFront(r(y, !0, i), 0, i);
                        return g.concat(m)
                    },
                    verify: function (r, i, a) {
                        var u = Math.floor(i.length / 2),
                            c = t(i.slice(0, u)),
                            f = t(i.slice(u)),
                            l = s(a.slice()),
                            h = [],
                            y = [],
                            v = new d.EllipticCurvePointFp(e, !1, t(r.x), t(r.y), null, !1);
                        p.modInv(f, e.order, f), p.modMul(l, f, e.order, h), p.modMul(c, f, e.order, y);
                        var g = e.allocatePointStorage(),
                            m = e.allocatePointStorage();
                        return o ? (p.add(h, h, h), p.add(h, h, h), p.reduce(h, e.order, h), n.scalarMultiply(h, e.generator, g, !1), n.scalarMultiply(y, v, m, !1), n.convertToExtendedProjective(g), n.convertToExtendedProjective(m), n.add(m, g, g), n.normalize(g)) : (n.scalarMultiply(h, e.generator, g), n.scalarMultiply(y, v, m), n.convertToJacobianForm(g), n.convertToMontgomeryForm(g), n.convertToMontgomeryForm(m), n.mixedAdd(g, m, g), n.convertToAffineForm(g), n.convertToStandardForm(g)), !g.isInfinity && (p.reduce(g.x, e.order, g.x), 0 === p.compareDigits(g.x, c))
                    }
                }
            };
            void 0 !== e && (re.sign = function (e) {
                var t = e.algorithm.hash.name,
                    r = d.createCurve(e.algorithm.namedCurve.toUpperCase()),
                    n = c[t.toLowerCase()].computeHash(e.buffer);
                return re(r).sign(e.keyData, n)
            }, re.verify = function (e) {
                var t = e.algorithm.hash.name,
                    r = d.createCurve(e.algorithm.namedCurve.toUpperCase()),
                    n = c[t.toLowerCase()].computeHash(e.buffer);
                return re(r).verify(e.keyData, e.signature, n)
            }, re.generateKey = function (e) {
                var t = d.createCurve(e.algorithm.namedCurve.toUpperCase()),
                    r = re(t).generateKey(),
                    n = p.digitsToBytes;
                function i(e) {
                    return f.padFront(e, 0, 8 * Math.ceil(e.length / 8))
                }
                var o = i(n(r.publicKey.x)),
                    a = i(n(r.publicKey.y)),
                    u = i(n(r.privateKey));
                return {
                    type: "keyPairGeneration",
                    keyPair: {
                        publicKey: {
                            keyData: {
                                x: o,
                                y: a
                            },
                            keyHandle: {
                                algorithm: e.algorithm,
                                extractable: e.extractable,
                                keyUsage: e.keyUsage,
                                type: "public"
                            }
                        },
                        privateKey: {
                            keyData: {
                                x: o,
                                y: a,
                                d: u
                            },
                            keyHandle: {
                                algorithm: e.algorithm,
                                extractable: e.extractable,
                                keyUsage: e.keyUsage,
                                type: "private"
                            }
                        }
                    }
                }
            }, re.importKey = function (e) {
                var t = h.jwkToKey(e.keyData, e.algorithm, ["x", "y", "d", "crv"]);
                if (t.d && (!t.x || !t.y)) {
                    var r = re.curves[e.algorithm.namedCurve](),
                        n = re(r).computePublicKey(t.d);
                    t.x = n.x, t.y = n.y
                }
                return {
                    type: "keyImport",
                    keyData: t,
                    keyHandle: {
                        algorithm: e.algorithm,
                        extractable: e.extractable || t.extractable,
                        keyUsage: e.keyUsage,
                        type: t.d ? "private" : "public"
                    }
                }
            }, re.exportKey = function (e) {
                return {
                    type: "keyExport",
                    keyHandle: h.keyToJwk(e.keyHandle, e.keyData)
                }
            }, e.register("sign", "ecdsa", re.sign), e.register("verify", "ecdsa", re.verify), e.register("generateKey", "ecdsa", re.generateKey), e.register("importKey", "ecdsa", re.importKey), e.register("exportKey", "ecdsa", re.exportKey)), i || (te = function () {
                function n() {
                    var e;
                    return {
                        postMessage: function (t) {
                            try {
                                e = l.jsCryptoRunner({
                                    data: t
                                })
                            } catch (r) {
                                return void this.onerror({
                                    data: r.description,
                                    type: "error"
                                })
                            }
                            t.operationSubType && "process" === t.operationSubType || this.onmessage({
                                data: e
                            })
                        },
                        onmessage: null,
                        onerror: null,
                        terminate: function () {}
                    }
                }
                function i(e) {
                    var t, r, n;
                    return {
                        dispatchEvent: function (i) {
                            "error" !== i.type ? (this.result = e(i.data), r.apply(t, [this.result])) : n && n.apply(t, [i.message ? i.message : i])
                        },
                        promise: t = new Promise((function (e, t) {
                            r = e, n = t
                        })),
                        result: null
                    }
                }
                function a(e) {
                    var t = i((function (e) {
                        return e = function (e) {
                            if (o && e.pop) return new Uint8Array(e).buffer;
                            return e
                        }(e)
                    }));
                    return t.process = function (t) {
                        e.operationSubType = "process", e.buffer = h.toArray(t), c.continueJob(this, h.clone(e))
                    }, t.finish = function () {
                        e.operationSubType = "finish", e.buffer = [], c.continueJob(this, h.clone(e))
                    }, t.abort = function () {
                        c.abortJob(this)
                    }, t.onabort = null, t.onprogress = null, t.algorithm = e.algorithm || null, t.key = e.keyHandle || null, t
                }
                window.Promise || (window.Promise = function (e, t) {
                    if (!(this instanceof Promise)) throw new Error("use 'new' keyword with Promise constructor");
                    var r = null,
                        n = null,
                        i = [],
                        o = [],
                        a = [],
                        u = [];
                    this.then = function (e, t) {
                        var s;
                        return r ? (s = e(r.result)) && s.then ? s : Promise.resolve(s) : n ? (s = t ? t(n.result) : n.result) && s.then ? s : Promise.resolve(s) : (i.push(e), t && o.push(t), new Promise((function (e, t) {
                            u.push(e), a.push(t)
                        })))
                    }, this["catch"] = function (e) {
                        var t;
                        return n ? (t = e(n.result)) && t.then ? t : Promise.resolve(t) : (o.push(e), new Promise((function (e, t) {
                            u.push(e), a.push(t)
                        })))
                    };
                    e((function (e) {
                        for (var t = 0; t < i.length; t++) {
                            var n = i[t](e);
                            n && n.then ? n.then(u[t]) : u[t] && u[t](n)
                        }
                        r = {
                            result: e
                        }
                    }), (function (e) {
                        for (var t = 0; t < o.length; t++) {
                            var r = o[t](e);
                            r && r.then ? r.then(u[t], a[t]) : u[t] && u[t](r)
                        }
                        n = {
                            result: e
                        }
                    }))
                }, window.Promise.all = function (e) {
                    var t = [],
                        r = 0;
                    function n(n, i) {
                        return function (o) {
                            t[n] = o, ++r == e.length && i(t)
                        }
                    }
                    return new Promise((function (t, r) {
                        for (var i = 0; i < e.length; i++) e[i].then(n(i, t)), e[i]["catch"]((function (e) {
                            r(e)
                        }))
                    }))
                }, window.Promise.race = function (e) {
                    var t = !1;
                    function r(e) {
                        return function (r) {
                            t || (t = !0, e(r))
                        }
                    }
                    return new Promise((function (t, n) {
                        for (var i = 0; i < e.length; i++) e[i].then(r(t), r(n))
                    }))
                }, window.Promise.reject = function (e) {
                    return new Promise((function (t, r) {
                        r(e)
                    }))
                }, window.Promise.resolve = function (e) {
                    return new Promise((function (t, r) {
                        t(e)
                    }))
                });
                var s = [];
                s.add = function (e, t) {
                    s.push({
                        keyHandle: e,
                        keyData: t
                    })
                }, s.remove = function (e) {
                    for (var t = 0; t < s.length; t++)
                        if (s[t].keyHandle === e) return void(s = s.splice(t, 1))
                }, s.lookup = function (e) {
                    for (var t = 0; t < s.length; t++)
                        if (s[t].keyHandle === e) return s[t].keyData;
                    return null
                };
                var c = function () {
                        var e = [],
                            i = [],
                            o = 0;
                        function a() {
                            ! function (t) {
                                for (var r = e.length - 1; r >= 0; r -= 1) e[r].isWebWorker === t && (e[r].terminate(), e.splice(r, 1))
                            }(!u);
                            for (var t = 0; t < e.length; t++)
                                if (!e[t].busy) return e[t];
                            return null
                        }
                        function s(t) {
                            for (var r = 0; r < e.length; r++)
                                if (e[r] === t) return t.terminate(), void e.splice(r, 1)
                        }
                        function c(t) {
                            for (var r = 0; r < e.length; r++)
                                if (e[r].operation === t) return e[r];
                            return null
                        }
                        function f(e, t) {
                            i.push({
                                operation: e,
                                data: t,
                                id: o++
                            })
                        }
                        function l(t) {
                            if (t.busy = !1, t.operation = null, u)
                                if (i.length > 0) {
                                    var r = i.shift();
                                    d(r.operation, r.data)
                                } else(function () {
                                    for (var t = 0, r = 0; r < e.length; r++) e[r].busy || (t += 1);
                                    return t
                                })() > 2 && s(t)
                        }
                        function h(r) {
                            var o;
                            if (u) try {
                                (o = new Worker(t)).postMessage({
                                    prngSeed: G.getBytes(48)
                                }), o.isWebWorker = !0
                            } catch (a) {
                                u = !1, m.forceSync = !0, (o = n()).isWebWorker = !1
                            } else(o = n()).isWebWorker = !1;
                            return o.operation = r, o.busy = !1, o.onmessage = function (e) {
                                    for (var t = o.operation, r = 0; r < i.length; r++)
                                        if (i[r].operation === o.operation) {
                                            var n = i[r];
                                            return i.splice(r, 1), void y(o, n.data)
                                        } t && "process" !== e.data.type && (l(o), t.dispatchEvent(e))
                                }, o.onerror = function (e) {
                                    var t = o.operation;
                                    l(o), t.dispatchEvent(e)
                                },
                                function (t) {
                                    e.push(t)
                                }(o), o
                        }
                        function p(t, n) {
                            var i = null;
                            if (u = r && !m.forceSync, i = a(), u && null === i && e.length >= 12) f(t, n);
                            else {
                                if (null === i && (i = h(t)), null === i) throw f(t, n), new Error("could not create new worker");
                                i.operation = t, i.busy = !0, y(i, n)
                            }
                        }
                        function d(e, t) {
                            var r = c(e);
                            r ? y(r, t) : p(e, t)
                        }
                        function y(e, t) {
                            if (u) e.data = t, e.postMessage(t);
                            else {
                                var r = (n = t, function () {
                                    return e.postMessage(n)
                                });
                                setTimeout(r, 0)
                            }
                            var n
                        }
                        return {
                            runJob: p,
                            continueJob: d,
                            abortJob: function (e) {
                                var t = c(e);
                                t && s(t)
                            }
                        }
                    }(),
                    h = f;
                var p = [{
                        name: "algorithm",
                        type: "Object",
                        required: !0
                    }, {
                        name: "keyHandle",
                        type: "Object",
                        required: !0
                    }, {
                        name: "buffer",
                        type: "Array",
                        required: !1
                    }, {
                        name: "signature",
                        type: "Array",
                        required: !0
                    }, {
                        name: "format",
                        type: "String",
                        required: !0
                    }, {
                        name: "keyData",
                        type: "Object",
                        required: !0
                    }, {
                        name: "extractable",
                        type: "Boolean",
                        required: !1
                    }, {
                        name: "keyUsage",
                        type: "Array",
                        required: !1
                    }, {
                        name: "derivedKeyType",
                        type: "Object",
                        required: !0
                    }, {
                        name: "length",
                        type: "Number",
                        required: !1
                    }, {
                        name: "extractable",
                        type: "Boolean",
                        required: !0
                    }, {
                        name: "keyUsage",
                        type: "Array",
                        required: !0
                    }],
                    d = {
                        encrypt: [0, 1, 2],
                        decrypt: [0, 1, 2],
                        sign: [0, 1, 2],
                        verify: [0, 1, 3, 2],
                        digest: [0, 2],
                        generateKey: [0, 6, 7],
                        importKey: [4, 5, 0, 10, 11],
                        exportKey: [0, 4, 1, 6, 7],
                        deriveKey: [0, 1, 8, 6, 7],
                        deriveBits: [0, 1, 9],
                        wrapKey: [4, 1, 1, 0],
                        unwrapKey: [2, 0, 1, 6, 7]
                    };
                function y(e) {
                    var t = s.lookup(e);
                    if (!t) throw new Error("key not found");
                    return t
                }
                function v(e) {
                    var t = JSON.parse(JSON.stringify(e));
                    return "string" == typeof t && (t = {
                        name: t
                    }), t
                }
                function g(t, r, n) {
                    var o = function (e, t) {
                        for (var r = {
                                operationType: e
                            }, n = d[e], i = 0; i < n.length; i += 1) {
                            var o = p[n[i]],
                                a = t[i];
                            if (a != undefined && null != a) {
                                if (a.subarray && (a = h.toArray(a)), "ArrayBuffer" == h.getObjectType(a) && (a = h.toArray(a)), f.getObjectType(a) !== o.type) throw new Error(o.name);
                                "algorithm" === o.name && (a.name = a.name.toLowerCase(), a.iv && (a.iv = h.toArray(a.iv)), a.salt && (a.salt = h.toArray(a.salt)), a.additionalData && (a.additionalData = h.toArray(a.additionalData)), a.hash && !a.hash.name && "String" === f.getObjectType(a.hash) && (a.hash = {
                                    name: a.hash
                                })), r.hasOwnProperty(o.name) ? r[o.name + "1"] = a : r[o.name] = a
                            } else if (o.required) throw new Error(o.name)
                        }
                        return r
                    }(t, r);
                    ! function (t, r) {
                        if (!e.exists(t, r)) throw new Error("unsupported algorithm")
                    }(t, o.algorithm.name), o.keyHandle && (o.keyData = y(o.keyHandle)), o.keyHandle1 && (o.keyData1 = y(o.keyHandle1)), o.algorithm && o.algorithm["public"] && (o.additionalKeyData = y(o.algorithm["public"]));
                    var u = n ? i((function (e) {
                        switch (e.type) {
                        case "keyGeneration":
                        case "keyImport":
                        case "keyDerive":
                            return s.add(e.keyHandle, e.keyData), e.keyHandle;
                        case "keyExport":
                            return e.keyHandle;
                        case "keyPairGeneration":
                            return s.add(e.keyPair.publicKey.keyHandle, e.keyPair.publicKey.keyData), s.add(e.keyPair.privateKey.keyHandle, e.keyPair.privateKey.keyData), {
                                publicKey: e.keyPair.publicKey.keyHandle,
                                privateKey: e.keyPair.privateKey.keyHandle
                            };
                        default:
                            throw new Error("Unknown key operation")
                        }
                    })) : a(o);
                    return (n || o.buffer || "deriveBits" === t || "wrapKey" === t) && c.runJob(u, o), u.promise
                }
                var m = {
                    encrypt: function (e, t, r) {
                        return g("encrypt", arguments, 0)
                    },
                    decrypt: function (e, t, r) {
                        return g("decrypt", arguments, 0)
                    },
                    sign: function (e, t, r) {
                        return g("sign", arguments, 0)
                    },
                    verify: function (e, t, r, n) {
                        return g("verify", arguments, 0)
                    },
                    digest: function (e, t) {
                        return g("digest", arguments, 0)
                    },
                    generateKey: function (e, t, r) {
                        return g("generateKey", arguments, 1)
                    },
                    deriveKey: function (e, t, r, n, i) {
                        return g("deriveKey", arguments, 1)
                    },
                    deriveBits: function (e, t, r) {
                        return g("deriveBits", arguments, 0)
                    },
                    importKey: function (e, t, r, n, i) {
                        return g("importKey", [e, t, v(r), n, i], 1)
                    },
                    exportKey: function (e, t) {
                        return g("exportKey", [t.algorithm, e, t], 1)
                    },
                    wrapKey: function (e, t, r, n) {
                        return g("wrapKey", [e, t, r, v(n)], 0)
                    },
                    unwrapKey: function (e, t, r, n, i, o) {
                        return g("unwrapKey", arguments, 1)
                    }
                };
                return m
            }());
            var ne = function () {
                var e = f;
                return {
                    wrapKey: function (t) {
                        var r = J(t.keyData1, t.keyHandle1.algorithm.name, c["sha-1"]),
                            n = h.keyToJwkOld(t.keyHandle, t.keyData),
                            i = {
                                alg: t.keyHandle1.algorithm.name.toUpperCase(),
                                enc: "A128GCM"
                            },
                            o = e.toBase64(JSON.stringify(i), !0),
                            a = G.getBytes(32),
                            u = r.encrypt(a),
                            s = e.toBase64(u, !0),
                            f = G.getBytes(12),
                            l = e.toBase64(f, !0),
                            p = o.concat(".", s, ".", l),
                            d = V(U.aes(a));
                        d.init(f, e.stringToBytes(p), 128);
                        var y = d.encrypt(n),
                            v = y.slice(-16),
                            g = {
                                recipients: [{
                                    header: o,
                                    encrypted_key: s,
                                    integrity_value: e.toBase64(v, !0)
                                }],
                                initialization_vector: l,
                                ciphertext: e.toBase64(y.slice(0, y.length - v.length), !0)
                            };
                        return e.stringToBytes(JSON.stringify(g))
                    },
                    unwrapKey: function (t) {
                        var r = e.base64ToBytes,
                            n = JSON.parse(String.fromCharCode.apply(null, t.buffer)),
                            i = (e.base64ToString(n.recipients[0].header), r(n.recipients[0].encrypted_key)),
                            o = r(n.recipients[0].integrity_value),
                            a = r(n.initialization_vector),
                            u = r(n.ciphertext),
                            s = c["sha-1"],
                            f = J(t.keyData, t.keyHandle.algorithm.name, s).decrypt(i),
                            l = n.recipients[0].header.concat(".", n.recipients[0].encrypted_key, ".", n.initialization_vector),
                            p = V(U.aes(f));
                        p.init(a, e.stringToBytes(l), 128);
                        var d = p.decrypt(u, o),
                            y = h.jwkToKey(d, t.algorithm, ["k"]);
                        return {
                            type: "keyImport",
                            keyData: y.k,
                            keyHandle: {
                                algorithm: {
                                    name: t.algorithm.name
                                },
                                extractable: t.extractable || y.extractable,
                                keyUsage: t.keyUsage,
                                type: "secret"
                            }
                        }
                    }
                }
            }();
            void 0 !== e && (e.register("wrapKey", "aes-gcm", ne.wrapKey), e.register("unwrapKey", "aes-cbc", ne.unwrapKey)), f.toArray = function (e) {
                return e ? e.pop ? e : (e.isView && (e = Uint8Array(e)), 1 === e.length ? [e[0]] : Array.prototype.slice.apply(e)) : []
            }, f.select = function (e, t, r) {
                if (e.length !== t.length) throw new Error("Arrays must be of equal size");
                for (var n = e.length, i = e.slice(0, n), o = 255 & -(1 & r), a = 0; a < n; a++) i[a] ^= (e[a] ^ t[a]) & o;
                return i
            };
            var ie, oe = {
                subtle: te,
                getRandomValues: function (e) {
                    var t, r = G.getBytes(e.length);
                    for (t = 0; t < e.length; t += 1) e[t] = r[t];
                    return e
                },
                initPrng: function (e) {
                    var t = Object.prototype.toString.call(e);
                    if ("[object Array]" !== t && "[object Uint8Array]" !== t) throw new Error("entropyData must be a Array or Uint8Array");
                    ie && ie.reseed(e), G.reseed(ie.read(48)), !0
                },
                toBase64: function (e, t) {
                    return f.toBase64(e, !1)
                },
                base64ToString: function (e) {
                    return f.base64ToString(e)
                },
                url: t
            };
            if (void 0 !== p && (oe.cryptoMath = p), "undefined" != typeof testInterface && (oe.testInterface = testInterface), !i) {
                (ie = ie || new function () {
                    var e = [],
                        t = new q,
                        r = !1,
                        n = !1,
                        i = ["Cookie", "RedirectUri", "ETag", "x-ms-client-antiforgery-id", "x-ms-client-request-id", "x-ms-client-session-id", "SubscriptionPool"];
                    function o() {
                        var o, a = [];
                        for (o = 0; o < 48; o += 1) a[o] = Math.floor(256 * Math.random());
                        var s = window.crypto || window.msCrypto;
                        if (s && "function" == typeof s.getRandomValues && window.Uint8Array) {
                            var c = new window.Uint8Array(48);
                            s.getRandomValues(c), s.getRandomValues(c), a = a.concat(Array.apply(null, Array.prototype.slice.apply(c))), n = !0
                        }
                        var l = new XMLHttpRequest;
                        for (o = 0; o < i.length; o += 1) try {
                            var h = l.getResponseHeader(i[o]);
                            if (h) {
                                var p = f.stringToBytes(h);
                                a = a.concat(p)
                            }
                        } catch (d) {}
                        n || (a = a.concat(e.splice(0, e.length)), u.startCollectors()), r ? t.reseed(a) : t.init(a), r = !0
                    }
                    function a(t) {
                        for (var r = 0; r < t.length; ++r) e.push(t[r]);
                        e.length >= 128 && u.stopCollectors()
                    }
                    var u = {
                        startCollectors: function () {
                            if (!this.collectorsRegistered) {
                                if (window.addEventListener) window.addEventListener("mousemove", this.MouseEventCallBack, !0), window.addEventListener("load", this.LoadTimeCallBack, !0);
                                else {
                                    if (!document.attachEvent) throw new Error("Can't attach events for entropy collection");
                                    document.attachEvent("onmousemove", this.MouseEventCallBack), document.attachEvent("onload", this.LoadTimeCallBack)
                                }
                                this.collectorsRegistered = 1
                            }
                        },
                        stopCollectors: function () {
                            this.collectorsRegistered && (window.removeEventListener ? (window.removeEventListener("mousemove", this.MouseEventCallBack, 1), window.removeEventListener("load", this.LoadTimeCallBack, 1)) : window.detachEvent && (window.detachEvent("onmousemove", this.MouseEventCallBack), window.detachEvent("onload", this.LoadTimeCallBack)), this.collectorsRegistered = 0)
                        },
                        MouseEventCallBack: function (e) {
                            var t = (new Date).valueOf(),
                                r = e.x || e.clientX || e.offsetX || 0,
                                n = e.y || e.clientY || e.offsetY || 0;
                            a([255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255, 255 & r, r >> 8 & 255, 255 & n, n >> 8 & 255])
                        },
                        LoadTimeCallBack: function () {
                            var e = (new Date).valueOf();
                            a([255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255])
                        }
                    };
                    return {
                        init: function () {
                            if (o(), !n) try {
                                u.startCollectors()
                            } catch (e) {}
                        },
                        reseed: function (e) {
                            t.reseed(e)
                        },
                        read: function (e) {
                            if (!r) throw new Error("Entropy pool is not initialized.");
                            var n = t.getBytes(e);
                            return o(), n
                        }
                    }
                }).init();
                var ae = ie.read(48);
                G.init(ae)
            }
            return oe
        }();
        e.exports = i
    }]);
    return SiegeCrypto;
});
