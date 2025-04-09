/*! For license information please see dad4bcd892d4d5138807.js.LICENSE.txt */
function _typeof(t) {
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t &&
              'function' == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    _typeof(t)
  )
}
import 'core-js/modules/es.symbol.js'
import 'core-js/modules/es.symbol.description.js'
import 'core-js/modules/es.symbol.iterator.js'
import 'core-js/modules/es.array.iterator.js'
import 'core-js/modules/es.array.slice.js'
import 'core-js/modules/es.function.name.js'
import 'core-js/modules/es.object.get-prototype-of.js'
import 'core-js/modules/es.object.to-string.js'
import 'core-js/modules/es.promise.js'
import 'core-js/modules/es.string.iterator.js'
import 'core-js/modules/web.dom-collections.for-each.js'
import 'core-js/modules/web.dom-collections.iterator.js'
function _regeneratorRuntime() {
  'use strict'
  _regeneratorRuntime = function () {
    return r
  }
  var t,
    r = {},
    e = Object.prototype,
    o = e.hasOwnProperty,
    n =
      Object.defineProperty ||
      function (t, r, e) {
        t[r] = e.value
      },
    i = 'function' == typeof Symbol ? Symbol : {},
    a = i.iterator || '@@iterator',
    c = i.asyncIterator || '@@asyncIterator',
    u = i.toStringTag || '@@toStringTag'
  function s(t, r, e) {
    return (
      Object.defineProperty(t, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }),
      t[r]
    )
  }
  try {
    s({}, '')
  } catch (t) {
    s = function (t, r, e) {
      return (t[r] = e)
    }
  }
  function f(t, r, e, o) {
    var i = r && r.prototype instanceof d ? r : d,
      a = Object.create(i.prototype),
      c = new P(o || [])
    return n(a, '_invoke', { value: O(t, e, c) }), a
  }
  function l(t, r, e) {
    try {
      return { type: 'normal', arg: t.call(r, e) }
    } catch (t) {
      return { type: 'throw', arg: t }
    }
  }
  r.wrap = f
  var h = 'suspendedStart',
    p = 'suspendedYield',
    y = 'executing',
    m = 'completed',
    v = {}
  function d() {}
  function g() {}
  function w() {}
  var j = {}
  s(j, a, function () {
    return this
  })
  var b = Object.getPrototypeOf,
    L = b && b(b(T([])))
  L && L !== e && o.call(L, a) && (j = L)
  var x = (w.prototype = d.prototype = Object.create(j))
  function _(t) {
    ;['next', 'throw', 'return'].forEach(function (r) {
      s(t, r, function (t) {
        return this._invoke(r, t)
      })
    })
  }
  function E(t, r) {
    function e(n, i, a, c) {
      var u = l(t[n], t, i)
      if ('throw' !== u.type) {
        var s = u.arg,
          f = s.value
        return f && 'object' == _typeof(f) && o.call(f, '__await')
          ? r.resolve(f.__await).then(
              function (t) {
                e('next', t, a, c)
              },
              function (t) {
                e('throw', t, a, c)
              }
            )
          : r.resolve(f).then(
              function (t) {
                ;(s.value = t), a(s)
              },
              function (t) {
                return e('throw', t, a, c)
              }
            )
      }
      c(u.arg)
    }
    var i
    n(this, '_invoke', {
      value: function (t, o) {
        function n() {
          return new r(function (r, n) {
            e(t, o, r, n)
          })
        }
        return (i = i ? i.then(n, n) : n())
      },
    })
  }
  function O(r, e, o) {
    var n = h
    return function (i, a) {
      if (n === y) throw Error('Generator is already running')
      if (n === m) {
        if ('throw' === i) throw a
        return { value: t, done: !0 }
      }
      for (o.method = i, o.arg = a; ; ) {
        var c = o.delegate
        if (c) {
          var u = S(c, o)
          if (u) {
            if (u === v) continue
            return u
          }
        }
        if ('next' === o.method) o.sent = o._sent = o.arg
        else if ('throw' === o.method) {
          if (n === h) throw ((n = m), o.arg)
          o.dispatchException(o.arg)
        } else 'return' === o.method && o.abrupt('return', o.arg)
        n = y
        var s = l(r, e, o)
        if ('normal' === s.type) {
          if (((n = o.done ? m : p), s.arg === v)) continue
          return { value: s.arg, done: o.done }
        }
        'throw' === s.type && ((n = m), (o.method = 'throw'), (o.arg = s.arg))
      }
    }
  }
  function S(r, e) {
    var o = e.method,
      n = r.iterator[o]
    if (n === t)
      return (
        (e.delegate = null),
        ('throw' === o &&
          r.iterator.return &&
          ((e.method = 'return'), (e.arg = t), S(r, e), 'throw' === e.method)) ||
          ('return' !== o &&
            ((e.method = 'throw'),
            (e.arg = new TypeError("The iterator does not provide a '" + o + "' method")))),
        v
      )
    var i = l(n, r.iterator, e.arg)
    if ('throw' === i.type) return (e.method = 'throw'), (e.arg = i.arg), (e.delegate = null), v
    var a = i.arg
    return a
      ? a.done
        ? ((e[r.resultName] = a.value),
          (e.next = r.nextLoc),
          'return' !== e.method && ((e.method = 'next'), (e.arg = t)),
          (e.delegate = null),
          v)
        : a
      : ((e.method = 'throw'),
        (e.arg = new TypeError('iterator result is not an object')),
        (e.delegate = null),
        v)
  }
  function G(t) {
    var r = { tryLoc: t[0] }
    1 in t && (r.catchLoc = t[1]),
      2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])),
      this.tryEntries.push(r)
  }
  function k(t) {
    var r = t.completion || {}
    ;(r.type = 'normal'), delete r.arg, (t.completion = r)
  }
  function P(t) {
    ;(this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(G, this), this.reset(!0)
  }
  function T(r) {
    if (r || '' === r) {
      var e = r[a]
      if (e) return e.call(r)
      if ('function' == typeof r.next) return r
      if (!isNaN(r.length)) {
        var n = -1,
          i = function e() {
            for (; ++n < r.length; ) if (o.call(r, n)) return (e.value = r[n]), (e.done = !1), e
            return (e.value = t), (e.done = !0), e
          }
        return (i.next = i)
      }
    }
    throw new TypeError(_typeof(r) + ' is not iterable')
  }
  return (
    (g.prototype = w),
    n(x, 'constructor', { value: w, configurable: !0 }),
    n(w, 'constructor', { value: g, configurable: !0 }),
    (g.displayName = s(w, u, 'GeneratorFunction')),
    (r.isGeneratorFunction = function (t) {
      var r = 'function' == typeof t && t.constructor
      return !!r && (r === g || 'GeneratorFunction' === (r.displayName || r.name))
    }),
    (r.mark = function (t) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(t, w)
          : ((t.__proto__ = w), s(t, u, 'GeneratorFunction')),
        (t.prototype = Object.create(x)),
        t
      )
    }),
    (r.awrap = function (t) {
      return { __await: t }
    }),
    _(E.prototype),
    s(E.prototype, c, function () {
      return this
    }),
    (r.AsyncIterator = E),
    (r.async = function (t, e, o, n, i) {
      void 0 === i && (i = Promise)
      var a = new E(f(t, e, o, n), i)
      return r.isGeneratorFunction(e)
        ? a
        : a.next().then(function (t) {
            return t.done ? t.value : a.next()
          })
    }),
    _(x),
    s(x, u, 'Generator'),
    s(x, a, function () {
      return this
    }),
    s(x, 'toString', function () {
      return '[object Generator]'
    }),
    (r.keys = function (t) {
      var r = Object(t),
        e = []
      for (var o in r) e.push(o)
      return (
        e.reverse(),
        function t() {
          for (; e.length; ) {
            var o = e.pop()
            if (o in r) return (t.value = o), (t.done = !1), t
          }
          return (t.done = !0), t
        }
      )
    }),
    (r.values = T),
    (P.prototype = {
      constructor: P,
      reset: function (r) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = t),
          (this.done = !1),
          (this.delegate = null),
          (this.method = 'next'),
          (this.arg = t),
          this.tryEntries.forEach(k),
          !r)
        )
          for (var e in this)
            't' === e.charAt(0) && o.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t)
      },
      stop: function () {
        this.done = !0
        var t = this.tryEntries[0].completion
        if ('throw' === t.type) throw t.arg
        return this.rval
      },
      dispatchException: function (r) {
        if (this.done) throw r
        var e = this
        function n(o, n) {
          return (
            (c.type = 'throw'),
            (c.arg = r),
            (e.next = o),
            n && ((e.method = 'next'), (e.arg = t)),
            !!n
          )
        }
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var a = this.tryEntries[i],
            c = a.completion
          if ('root' === a.tryLoc) return n('end')
          if (a.tryLoc <= this.prev) {
            var u = o.call(a, 'catchLoc'),
              s = o.call(a, 'finallyLoc')
            if (u && s) {
              if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
              if (this.prev < a.finallyLoc) return n(a.finallyLoc)
            } else if (u) {
              if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
            } else {
              if (!s) throw Error('try statement without catch or finally')
              if (this.prev < a.finallyLoc) return n(a.finallyLoc)
            }
          }
        }
      },
      abrupt: function (t, r) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var n = this.tryEntries[e]
          if (n.tryLoc <= this.prev && o.call(n, 'finallyLoc') && this.prev < n.finallyLoc) {
            var i = n
            break
          }
        }
        i && ('break' === t || 'continue' === t) && i.tryLoc <= r && r <= i.finallyLoc && (i = null)
        var a = i ? i.completion : {}
        return (
          (a.type = t),
          (a.arg = r),
          i ? ((this.method = 'next'), (this.next = i.finallyLoc), v) : this.complete(a)
        )
      },
      complete: function (t, r) {
        if ('throw' === t.type) throw t.arg
        return (
          'break' === t.type || 'continue' === t.type
            ? (this.next = t.arg)
            : 'return' === t.type
              ? ((this.rval = this.arg = t.arg), (this.method = 'return'), (this.next = 'end'))
              : 'normal' === t.type && r && (this.next = r),
          v
        )
      },
      finish: function (t) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var e = this.tryEntries[r]
          if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), k(e), v
        }
      },
      catch: function (t) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var e = this.tryEntries[r]
          if (e.tryLoc === t) {
            var o = e.completion
            if ('throw' === o.type) {
              var n = o.arg
              k(e)
            }
            return n
          }
        }
        throw Error('illegal catch attempt')
      },
      delegateYield: function (r, e, o) {
        return (
          (this.delegate = { iterator: T(r), resultName: e, nextLoc: o }),
          'next' === this.method && (this.arg = t),
          v
        )
      },
    }),
    r
  )
}
function asyncGeneratorStep(t, r, e, o, n, i, a) {
  try {
    var c = t[i](a),
      u = c.value
  } catch (t) {
    return void e(t)
  }
  c.done ? r(u) : Promise.resolve(u).then(o, n)
}
function _asyncToGenerator(t) {
  return function () {
    var r = this,
      e = arguments
    return new Promise(function (o, n) {
      var i = t.apply(r, e)
      function a(t) {
        asyncGeneratorStep(i, o, n, a, c, 'next', t)
      }
      function c(t) {
        asyncGeneratorStep(i, o, n, a, c, 'throw', t)
      }
      a(void 0)
    })
  }
}
import { onLogin, onLogout, onSelectFactory } from './helper.js'
Office.onReady(
  (function () {
    var t = _asyncToGenerator(
      _regeneratorRuntime().mark(function t(r) {
        return _regeneratorRuntime().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                if (r.host === Office.HostType.Excel)
                  try {
                    Office.actions.associate('onLogin', onLogin),
                      Office.actions.associate('onLogout', onLogout),
                      Office.actions.associate('onSelectFactory', onSelectFactory)
                  } catch (t) {
                    console.error('Error during Office.js initialization:', t)
                  }
              case 1:
              case 'end':
                return t.stop()
            }
        }, t)
      })
    )
    return function (r) {
      return t.apply(this, arguments)
    }
  })()
)
