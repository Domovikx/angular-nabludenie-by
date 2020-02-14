function _defineProperty(n, e, t) {
  return (
    e in n
      ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 })
      : (n[e] = t),
    n
  );
}
function _slicedToArray(n, e) {
  return _arrayWithHoles(n) || _iterableToArrayLimit(n, e) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError('Invalid attempt to destructure non-iterable instance');
}
function _iterableToArrayLimit(n, e) {
  if (Symbol.iterator in Object(n) || '[object Arguments]' === Object.prototype.toString.call(n)) {
    var t = [],
      l = !0,
      r = !1,
      i = void 0;
    try {
      for (
        var u, o = n[Symbol.iterator]();
        !(l = (u = o.next()).done) && (t.push(u.value), !e || t.length !== e);
        l = !0
      );
    } catch (a) {
      (r = !0), (i = a);
    } finally {
      try {
        l || null == o.return || o.return();
      } finally {
        if (r) throw i;
      }
    }
    return t;
  }
}
function _arrayWithHoles(n) {
  if (Array.isArray(n)) return n;
}
function _toConsumableArray(n) {
  return _arrayWithoutHoles(n) || _iterableToArray(n) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError('Invalid attempt to spread non-iterable instance');
}
function _iterableToArray(n) {
  if (Symbol.iterator in Object(n) || '[object Arguments]' === Object.prototype.toString.call(n))
    return Array.from(n);
}
function _arrayWithoutHoles(n) {
  if (Array.isArray(n)) {
    for (var e = 0, t = new Array(n.length); e < n.length; e++) t[e] = n[e];
    return t;
  }
}
function isNativeReflectConstruct() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
  if (Reflect.construct.sham) return !1;
  if ('function' == typeof Proxy) return !0;
  try {
    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
  } catch (n) {
    return !1;
  }
}
function _construct(n, e, t) {
  return (_construct = isNativeReflectConstruct()
    ? Reflect.construct
    : function(n, e, t) {
        var l = [null];
        l.push.apply(l, e);
        var r = new (Function.bind.apply(n, l))();
        return t && _setPrototypeOf(r, t.prototype), r;
      }).apply(null, arguments);
}
function _possibleConstructorReturn(n, e) {
  return !e || ('object' != typeof e && 'function' != typeof e) ? _assertThisInitialized(n) : e;
}
function _assertThisInitialized(n) {
  if (void 0 === n)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n;
}
function _get(n, e, t) {
  return (_get =
    'undefined' != typeof Reflect && Reflect.get
      ? Reflect.get
      : function(n, e, t) {
          var l = _superPropBase(n, e);
          if (l) {
            var r = Object.getOwnPropertyDescriptor(l, e);
            return r.get ? r.get.call(t) : r.value;
          }
        })(n, e, t || n);
}
function _superPropBase(n, e) {
  for (; !Object.prototype.hasOwnProperty.call(n, e) && null !== (n = _getPrototypeOf(n)); );
  return n;
}
function _getPrototypeOf(n) {
  return (_getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n);
      })(n);
}
function _inherits(n, e) {
  if ('function' != typeof e && null !== e)
    throw new TypeError('Super expression must either be null or a function');
  (n.prototype = Object.create(e && e.prototype, {
    constructor: { value: n, writable: !0, configurable: !0 }
  })),
    e && _setPrototypeOf(n, e);
}
function _setPrototypeOf(n, e) {
  return (_setPrototypeOf =
    Object.setPrototypeOf ||
    function(n, e) {
      return (n.__proto__ = e), n;
    })(n, e);
}
function _classCallCheck(n, e) {
  if (!(n instanceof e)) throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(n, e) {
  for (var t = 0; t < e.length; t++) {
    var l = e[t];
    (l.enumerable = l.enumerable || !1),
      (l.configurable = !0),
      'value' in l && (l.writable = !0),
      Object.defineProperty(n, l.key, l);
  }
}
function _createClass(n, e, t) {
  return e && _defineProperties(n.prototype, e), t && _defineProperties(n, t), n;
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    0: function(n, e, t) {
      n.exports = t('zUnb');
    },
    zUnb: function(n, e, t) {
      'use strict';
      function l(n) {
        return 'function' == typeof n;
      }
      t.r(e);
      var r = !1,
        i = {
          Promise: void 0,
          set useDeprecatedSynchronousErrorHandling(n) {
            if (n) {
              var e = new Error();
              console.warn(
                'DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' +
                  e.stack
              );
            } else r && console.log('RxJS: Back to a better error behavior. Thank you. <3');
            r = n;
          },
          get useDeprecatedSynchronousErrorHandling() {
            return r;
          }
        };
      function u(n) {
        setTimeout(function() {
          throw n;
        });
      }
      var o = {
          closed: !0,
          next: function(n) {},
          error: function(n) {
            if (i.useDeprecatedSynchronousErrorHandling) throw n;
            u(n);
          },
          complete: function() {}
        },
        a =
          Array.isArray ||
          function(n) {
            return n && 'number' == typeof n.length;
          };
      function s(n) {
        return null !== n && 'object' == typeof n;
      }
      function c(n) {
        return (
          Error.call(this),
          (this.message = n
            ? ''.concat(n.length, ' errors occurred during unsubscription:\n').concat(
                n
                  .map(function(n, e) {
                    return ''.concat(e + 1, ') ').concat(n.toString());
                  })
                  .join('\n  ')
              )
            : ''),
          (this.name = 'UnsubscriptionError'),
          (this.errors = n),
          this
        );
      }
      c.prototype = Object.create(Error.prototype);
      var h,
        f = c,
        d =
          (((h = (function() {
            function n(e) {
              _classCallCheck(this, n),
                (this.closed = !1),
                (this._parent = null),
                (this._parents = null),
                (this._subscriptions = null),
                e && (this._unsubscribe = e);
            }
            return (
              _createClass(n, [
                {
                  key: 'unsubscribe',
                  value: function() {
                    var n,
                      e = !1;
                    if (!this.closed) {
                      var t = this._parent,
                        r = this._parents,
                        i = this._unsubscribe,
                        u = this._subscriptions;
                      (this.closed = !0),
                        (this._parent = null),
                        (this._parents = null),
                        (this._subscriptions = null);
                      for (var o = -1, c = r ? r.length : 0; t; )
                        t.remove(this), (t = (++o < c && r[o]) || null);
                      if (l(i))
                        try {
                          i.call(this);
                        } catch (d) {
                          (e = !0), (n = d instanceof f ? p(d.errors) : [d]);
                        }
                      if (a(u))
                        for (o = -1, c = u.length; ++o < c; ) {
                          var h = u[o];
                          if (s(h))
                            try {
                              h.unsubscribe();
                            } catch (d) {
                              (e = !0),
                                (n = n || []),
                                d instanceof f ? (n = n.concat(p(d.errors))) : n.push(d);
                            }
                        }
                      if (e) throw new f(n);
                    }
                  }
                },
                {
                  key: 'add',
                  value: function(e) {
                    var t = e;
                    switch (typeof e) {
                      case 'function':
                        t = new n(e);
                      case 'object':
                        if (t === this || t.closed || 'function' != typeof t.unsubscribe) return t;
                        if (this.closed) return t.unsubscribe(), t;
                        if (!(t instanceof n)) {
                          var l = t;
                          (t = new n())._subscriptions = [l];
                        }
                        break;
                      default:
                        if (!e) return n.EMPTY;
                        throw new Error('unrecognized teardown ' + e + ' added to Subscription.');
                    }
                    if (t._addParent(this)) {
                      var r = this._subscriptions;
                      r ? r.push(t) : (this._subscriptions = [t]);
                    }
                    return t;
                  }
                },
                {
                  key: 'remove',
                  value: function(n) {
                    var e = this._subscriptions;
                    if (e) {
                      var t = e.indexOf(n);
                      -1 !== t && e.splice(t, 1);
                    }
                  }
                },
                {
                  key: '_addParent',
                  value: function(n) {
                    var e = this._parent,
                      t = this._parents;
                    return (
                      e !== n &&
                      (e
                        ? t
                          ? -1 === t.indexOf(n) && (t.push(n), !0)
                          : ((this._parents = [n]), !0)
                        : ((this._parent = n), !0))
                    );
                  }
                }
              ]),
              n
            );
          })()).EMPTY = (function(n) {
            return (n.closed = !0), n;
          })(new h())),
          h);
      function p(n) {
        return n.reduce(function(n, e) {
          return n.concat(e instanceof f ? e.errors : e);
        }, []);
      }
      var v =
          'function' == typeof Symbol ? Symbol('rxSubscriber') : '@@rxSubscriber_' + Math.random(),
        g = (function(n) {
          function e(n, t, l) {
            var r;
            switch (
              (_classCallCheck(this, e),
              ((r = _possibleConstructorReturn(
                this,
                _getPrototypeOf(e).call(this)
              )).syncErrorValue = null),
              (r.syncErrorThrown = !1),
              (r.syncErrorThrowable = !1),
              (r.isStopped = !1),
              arguments.length)
            ) {
              case 0:
                r.destination = o;
                break;
              case 1:
                if (!n) {
                  r.destination = o;
                  break;
                }
                if ('object' == typeof n) {
                  n instanceof e
                    ? ((r.syncErrorThrowable = n.syncErrorThrowable),
                      (r.destination = n),
                      n.add(_assertThisInitialized(r)))
                    : ((r.syncErrorThrowable = !0),
                      (r.destination = new _(_assertThisInitialized(r), n)));
                  break;
                }
              default:
                (r.syncErrorThrowable = !0),
                  (r.destination = new _(_assertThisInitialized(r), n, t, l));
            }
            return r;
          }
          return (
            _inherits(e, n),
            _createClass(
              e,
              [
                {
                  key: v,
                  value: function() {
                    return this;
                  }
                },
                {
                  key: 'next',
                  value: function(n) {
                    this.isStopped || this._next(n);
                  }
                },
                {
                  key: 'error',
                  value: function(n) {
                    this.isStopped || ((this.isStopped = !0), this._error(n));
                  }
                },
                {
                  key: 'complete',
                  value: function() {
                    this.isStopped || ((this.isStopped = !0), this._complete());
                  }
                },
                {
                  key: 'unsubscribe',
                  value: function() {
                    this.closed ||
                      ((this.isStopped = !0),
                      _get(_getPrototypeOf(e.prototype), 'unsubscribe', this).call(this));
                  }
                },
                {
                  key: '_next',
                  value: function(n) {
                    this.destination.next(n);
                  }
                },
                {
                  key: '_error',
                  value: function(n) {
                    this.destination.error(n), this.unsubscribe();
                  }
                },
                {
                  key: '_complete',
                  value: function() {
                    this.destination.complete(), this.unsubscribe();
                  }
                },
                {
                  key: '_unsubscribeAndRecycle',
                  value: function() {
                    var n = this._parent,
                      e = this._parents;
                    return (
                      (this._parent = null),
                      (this._parents = null),
                      this.unsubscribe(),
                      (this.closed = !1),
                      (this.isStopped = !1),
                      (this._parent = n),
                      (this._parents = e),
                      this
                    );
                  }
                }
              ],
              [
                {
                  key: 'create',
                  value: function(n, t, l) {
                    var r = new e(n, t, l);
                    return (r.syncErrorThrowable = !1), r;
                  }
                }
              ]
            ),
            e
          );
        })(d),
        _ = (function(n) {
          function e(n, t, r, i) {
            var u, a;
            _classCallCheck(this, e),
              ((u = _possibleConstructorReturn(
                this,
                _getPrototypeOf(e).call(this)
              ))._parentSubscriber = n);
            var s = _assertThisInitialized(u);
            return (
              l(t)
                ? (a = t)
                : t &&
                  ((a = t.next),
                  (r = t.error),
                  (i = t.complete),
                  t !== o &&
                    (l((s = Object.create(t)).unsubscribe) && u.add(s.unsubscribe.bind(s)),
                    (s.unsubscribe = u.unsubscribe.bind(_assertThisInitialized(u))))),
              (u._context = s),
              (u._next = a),
              (u._error = r),
              (u._complete = i),
              u
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: 'next',
                value: function(n) {
                  if (!this.isStopped && this._next) {
                    var e = this._parentSubscriber;
                    i.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable
                      ? this.__tryOrSetError(e, this._next, n) && this.unsubscribe()
                      : this.__tryOrUnsub(this._next, n);
                  }
                }
              },
              {
                key: 'error',
                value: function(n) {
                  if (!this.isStopped) {
                    var e = this._parentSubscriber,
                      t = i.useDeprecatedSynchronousErrorHandling;
                    if (this._error)
                      t && e.syncErrorThrowable
                        ? (this.__tryOrSetError(e, this._error, n), this.unsubscribe())
                        : (this.__tryOrUnsub(this._error, n), this.unsubscribe());
                    else if (e.syncErrorThrowable)
                      t ? ((e.syncErrorValue = n), (e.syncErrorThrown = !0)) : u(n),
                        this.unsubscribe();
                    else {
                      if ((this.unsubscribe(), t)) throw n;
                      u(n);
                    }
                  }
                }
              },
              {
                key: 'complete',
                value: function() {
                  var n = this;
                  if (!this.isStopped) {
                    var e = this._parentSubscriber;
                    if (this._complete) {
                      var t = function() {
                        return n._complete.call(n._context);
                      };
                      i.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable
                        ? (this.__tryOrSetError(e, t), this.unsubscribe())
                        : (this.__tryOrUnsub(t), this.unsubscribe());
                    } else this.unsubscribe();
                  }
                }
              },
              {
                key: '__tryOrUnsub',
                value: function(n, e) {
                  try {
                    n.call(this._context, e);
                  } catch (t) {
                    if ((this.unsubscribe(), i.useDeprecatedSynchronousErrorHandling)) throw t;
                    u(t);
                  }
                }
              },
              {
                key: '__tryOrSetError',
                value: function(n, e, t) {
                  if (!i.useDeprecatedSynchronousErrorHandling) throw new Error('bad call');
                  try {
                    e.call(this._context, t);
                  } catch (l) {
                    return i.useDeprecatedSynchronousErrorHandling
                      ? ((n.syncErrorValue = l), (n.syncErrorThrown = !0), !0)
                      : (u(l), !0);
                  }
                  return !1;
                }
              },
              {
                key: '_unsubscribe',
                value: function() {
                  var n = this._parentSubscriber;
                  (this._context = null), (this._parentSubscriber = null), n.unsubscribe();
                }
              }
            ]),
            e
          );
        })(g),
        m = ('function' == typeof Symbol && Symbol.observable) || '@@observable';
      function y() {}
      function C() {
        for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++) e[t] = arguments[t];
        return k(e);
      }
      function k(n) {
        return n
          ? 1 === n.length
            ? n[0]
            : function(e) {
                return n.reduce(function(n, e) {
                  return e(n);
                }, e);
              }
          : y;
      }
      var b,
        w =
          (((b = (function() {
            function n(e) {
              _classCallCheck(this, n), (this._isScalar = !1), e && (this._subscribe = e);
            }
            return (
              _createClass(n, [
                {
                  key: 'lift',
                  value: function(e) {
                    var t = new n();
                    return (t.source = this), (t.operator = e), t;
                  }
                },
                {
                  key: 'subscribe',
                  value: function(n, e, t) {
                    var l = this.operator,
                      r = (function(n, e, t) {
                        if (n) {
                          if (n instanceof g) return n;
                          if (n[v]) return n[v]();
                        }
                        return n || e || t ? new g(n, e, t) : new g(o);
                      })(n, e, t);
                    if (
                      (r.add(
                        l
                          ? l.call(r, this.source)
                          : this.source ||
                            (i.useDeprecatedSynchronousErrorHandling && !r.syncErrorThrowable)
                          ? this._subscribe(r)
                          : this._trySubscribe(r)
                      ),
                      i.useDeprecatedSynchronousErrorHandling &&
                        r.syncErrorThrowable &&
                        ((r.syncErrorThrowable = !1), r.syncErrorThrown))
                    )
                      throw r.syncErrorValue;
                    return r;
                  }
                },
                {
                  key: '_trySubscribe',
                  value: function(n) {
                    try {
                      return this._subscribe(n);
                    } catch (e) {
                      i.useDeprecatedSynchronousErrorHandling &&
                        ((n.syncErrorThrown = !0), (n.syncErrorValue = e)),
                        (function(n) {
                          for (; n; ) {
                            var e = n,
                              t = e.closed,
                              l = e.destination,
                              r = e.isStopped;
                            if (t || r) return !1;
                            n = l && l instanceof g ? l : null;
                          }
                          return !0;
                        })(n)
                          ? n.error(e)
                          : console.warn(e);
                    }
                  }
                },
                {
                  key: 'forEach',
                  value: function(n, e) {
                    var t = this;
                    return new (e = x(e))(function(e, l) {
                      var r;
                      r = t.subscribe(
                        function(e) {
                          try {
                            n(e);
                          } catch (t) {
                            l(t), r && r.unsubscribe();
                          }
                        },
                        l,
                        e
                      );
                    });
                  }
                },
                {
                  key: '_subscribe',
                  value: function(n) {
                    var e = this.source;
                    return e && e.subscribe(n);
                  }
                },
                {
                  key: m,
                  value: function() {
                    return this;
                  }
                },
                {
                  key: 'pipe',
                  value: function() {
                    for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
                      e[t] = arguments[t];
                    return 0 === e.length ? this : k(e)(this);
                  }
                },
                {
                  key: 'toPromise',
                  value: function(n) {
                    var e = this;
                    return new (n = x(n))(function(n, t) {
                      var l;
                      e.subscribe(
                        function(n) {
                          return (l = n);
                        },
                        function(n) {
                          return t(n);
                        },
                        function() {
                          return n(l);
                        }
                      );
                    });
                  }
                }
              ]),
              n
            );
          })()).create = function(n) {
            return new b(n);
          }),
          b);
      function x(n) {
        if ((n || (n = i.Promise || Promise), !n)) throw new Error('no Promise impl found');
        return n;
      }
      function O() {
        return (
          Error.call(this),
          (this.message = 'object unsubscribed'),
          (this.name = 'ObjectUnsubscribedError'),
          this
        );
      }
      O.prototype = Object.create(Error.prototype);
      var E,
        P = O,
        S = (function(n) {
          function e(n, t) {
            var l;
            return (
              _classCallCheck(this, e),
              ((l = _possibleConstructorReturn(this, _getPrototypeOf(e).call(this))).subject = n),
              (l.subscriber = t),
              (l.closed = !1),
              l
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: 'unsubscribe',
                value: function() {
                  if (!this.closed) {
                    this.closed = !0;
                    var n = this.subject,
                      e = n.observers;
                    if (((this.subject = null), e && 0 !== e.length && !n.isStopped && !n.closed)) {
                      var t = e.indexOf(this.subscriber);
                      -1 !== t && e.splice(t, 1);
                    }
                  }
                }
              }
            ]),
            e
          );
        })(d),
        T = (function(n) {
          function e(n) {
            var t;
            return (
              _classCallCheck(this, e),
              ((t = _possibleConstructorReturn(
                this,
                _getPrototypeOf(e).call(this, n)
              )).destination = n),
              t
            );
          }
          return _inherits(e, n), e;
        })(g),
        M =
          (((E = (function(n) {
            function e() {
              var n;
              return (
                _classCallCheck(this, e),
                ((n = _possibleConstructorReturn(
                  this,
                  _getPrototypeOf(e).call(this)
                )).observers = []),
                (n.closed = !1),
                (n.isStopped = !1),
                (n.hasError = !1),
                (n.thrownError = null),
                n
              );
            }
            return (
              _inherits(e, n),
              _createClass(e, [
                {
                  key: v,
                  value: function() {
                    return new T(this);
                  }
                },
                {
                  key: 'lift',
                  value: function(n) {
                    var e = new A(this, this);
                    return (e.operator = n), e;
                  }
                },
                {
                  key: 'next',
                  value: function(n) {
                    if (this.closed) throw new P();
                    if (!this.isStopped)
                      for (var e = this.observers, t = e.length, l = e.slice(), r = 0; r < t; r++)
                        l[r].next(n);
                  }
                },
                {
                  key: 'error',
                  value: function(n) {
                    if (this.closed) throw new P();
                    (this.hasError = !0), (this.thrownError = n), (this.isStopped = !0);
                    for (var e = this.observers, t = e.length, l = e.slice(), r = 0; r < t; r++)
                      l[r].error(n);
                    this.observers.length = 0;
                  }
                },
                {
                  key: 'complete',
                  value: function() {
                    if (this.closed) throw new P();
                    this.isStopped = !0;
                    for (var n = this.observers, e = n.length, t = n.slice(), l = 0; l < e; l++)
                      t[l].complete();
                    this.observers.length = 0;
                  }
                },
                {
                  key: 'unsubscribe',
                  value: function() {
                    (this.isStopped = !0), (this.closed = !0), (this.observers = null);
                  }
                },
                {
                  key: '_trySubscribe',
                  value: function(n) {
                    if (this.closed) throw new P();
                    return _get(_getPrototypeOf(e.prototype), '_trySubscribe', this).call(this, n);
                  }
                },
                {
                  key: '_subscribe',
                  value: function(n) {
                    if (this.closed) throw new P();
                    return this.hasError
                      ? (n.error(this.thrownError), d.EMPTY)
                      : this.isStopped
                      ? (n.complete(), d.EMPTY)
                      : (this.observers.push(n), new S(this, n));
                  }
                },
                {
                  key: 'asObservable',
                  value: function() {
                    var n = new w();
                    return (n.source = this), n;
                  }
                }
              ]),
              e
            );
          })(w)).create = function(n, e) {
            return new A(n, e);
          }),
          E),
        A = (function(n) {
          function e(n, t) {
            var l;
            return (
              _classCallCheck(this, e),
              ((l = _possibleConstructorReturn(
                this,
                _getPrototypeOf(e).call(this)
              )).destination = n),
              (l.source = t),
              l
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: 'next',
                value: function(n) {
                  var e = this.destination;
                  e && e.next && e.next(n);
                }
              },
              {
                key: 'error',
                value: function(n) {
                  var e = this.destination;
                  e && e.error && this.destination.error(n);
                }
              },
              {
                key: 'complete',
                value: function() {
                  var n = this.destination;
                  n && n.complete && this.destination.complete();
                }
              },
              {
                key: '_subscribe',
                value: function(n) {
                  return this.source ? this.source.subscribe(n) : d.EMPTY;
                }
              }
            ]),
            e
          );
        })(M);
      function R(n) {
        return n && 'function' == typeof n.schedule;
      }
      var I = (function(n) {
          function e(n, t, l) {
            var r;
            return (
              _classCallCheck(this, e),
              ((r = _possibleConstructorReturn(this, _getPrototypeOf(e).call(this))).parent = n),
              (r.outerValue = t),
              (r.outerIndex = l),
              (r.index = 0),
              r
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: '_next',
                value: function(n) {
                  this.parent.notifyNext(this.outerValue, n, this.outerIndex, this.index++, this);
                }
              },
              {
                key: '_error',
                value: function(n) {
                  this.parent.notifyError(n, this), this.unsubscribe();
                }
              },
              {
                key: '_complete',
                value: function() {
                  this.parent.notifyComplete(this), this.unsubscribe();
                }
              }
            ]),
            e
          );
        })(g),
        N = function(n) {
          return function(e) {
            for (var t = 0, l = n.length; t < l && !e.closed; t++) e.next(n[t]);
            e.closed || e.complete();
          };
        },
        V = function(n) {
          return function(e) {
            return (
              n
                .then(
                  function(n) {
                    e.closed || (e.next(n), e.complete());
                  },
                  function(n) {
                    return e.error(n);
                  }
                )
                .then(null, u),
              e
            );
          };
        };
      var D = 'function' == typeof Symbol && Symbol.iterator ? Symbol.iterator : '@@iterator',
        j = function(n) {
          return function(e) {
            for (var t = n[D](); ; ) {
              var l = t.next();
              if (l.done) {
                e.complete();
                break;
              }
              if ((e.next(l.value), e.closed)) break;
            }
            return (
              'function' == typeof t.return &&
                e.add(function() {
                  t.return && t.return();
                }),
              e
            );
          };
        },
        L = function(n) {
          return function(e) {
            var t = n[m]();
            if ('function' != typeof t.subscribe)
              throw new TypeError('Provided object does not correctly implement Symbol.observable');
            return t.subscribe(e);
          };
        },
        U = function(n) {
          return n && 'number' == typeof n.length && 'function' != typeof n;
        };
      function F(n) {
        return !!n && 'function' != typeof n.subscribe && 'function' == typeof n.then;
      }
      var z = function(n) {
        if (n instanceof w)
          return function(e) {
            return n._isScalar ? (e.next(n.value), void e.complete()) : n.subscribe(e);
          };
        if (n && 'function' == typeof n[m]) return L(n);
        if (U(n)) return N(n);
        if (F(n)) return V(n);
        if (n && 'function' == typeof n[D]) return j(n);
        var e = s(n) ? 'an invalid object' : "'".concat(n, "'");
        throw new TypeError(
          'You provided '.concat(e, ' where a stream was expected.') +
            ' You can provide an Observable, Promise, Array, or Iterable.'
        );
      };
      function H(n, e, t, l) {
        var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new I(n, t, l);
        if (!r.closed) return z(e)(r);
      }
      var q = (function(n) {
        function e() {
          return (
            _classCallCheck(this, e),
            _possibleConstructorReturn(this, _getPrototypeOf(e).apply(this, arguments))
          );
        }
        return (
          _inherits(e, n),
          _createClass(e, [
            {
              key: 'notifyNext',
              value: function(n, e, t, l, r) {
                this.destination.next(e);
              }
            },
            {
              key: 'notifyError',
              value: function(n, e) {
                this.destination.error(n);
              }
            },
            {
              key: 'notifyComplete',
              value: function(n) {
                this.destination.complete();
              }
            }
          ]),
          e
        );
      })(g);
      function B(n, e) {
        return function(t) {
          if ('function' != typeof n)
            throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
          return t.lift(new G(n, e));
        };
      }
      var G = (function() {
          function n(e, t) {
            _classCallCheck(this, n), (this.project = e), (this.thisArg = t);
          }
          return (
            _createClass(n, [
              {
                key: 'call',
                value: function(n, e) {
                  return e.subscribe(new K(n, this.project, this.thisArg));
                }
              }
            ]),
            n
          );
        })(),
        K = (function(n) {
          function e(n, t, l) {
            var r;
            return (
              _classCallCheck(this, e),
              ((r = _possibleConstructorReturn(
                this,
                _getPrototypeOf(e).call(this, n)
              )).project = t),
              (r.count = 0),
              (r.thisArg = l || _assertThisInitialized(r)),
              r
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: '_next',
                value: function(n) {
                  var e;
                  try {
                    e = this.project.call(this.thisArg, n, this.count++);
                  } catch (t) {
                    return void this.destination.error(t);
                  }
                  this.destination.next(e);
                }
              }
            ]),
            e
          );
        })(g);
      function W(n, e) {
        return new w(
          e
            ? function(t) {
                var l = new d(),
                  r = 0;
                return (
                  l.add(
                    e.schedule(function() {
                      r !== n.length
                        ? (t.next(n[r++]), t.closed || l.add(this.schedule()))
                        : t.complete();
                    })
                  ),
                  l
                );
              }
            : N(n)
        );
      }
      function Z(n, e) {
        if (!e) return n instanceof w ? n : new w(z(n));
        if (null != n) {
          if (
            (function(n) {
              return n && 'function' == typeof n[m];
            })(n)
          )
            return (function(n, e) {
              return new w(
                e
                  ? function(t) {
                      var l = new d();
                      return (
                        l.add(
                          e.schedule(function() {
                            var r = n[m]();
                            l.add(
                              r.subscribe({
                                next: function(n) {
                                  l.add(
                                    e.schedule(function() {
                                      return t.next(n);
                                    })
                                  );
                                },
                                error: function(n) {
                                  l.add(
                                    e.schedule(function() {
                                      return t.error(n);
                                    })
                                  );
                                },
                                complete: function() {
                                  l.add(
                                    e.schedule(function() {
                                      return t.complete();
                                    })
                                  );
                                }
                              })
                            );
                          })
                        ),
                        l
                      );
                    }
                  : L(n)
              );
            })(n, e);
          if (F(n))
            return (function(n, e) {
              return new w(
                e
                  ? function(t) {
                      var l = new d();
                      return (
                        l.add(
                          e.schedule(function() {
                            return n.then(
                              function(n) {
                                l.add(
                                  e.schedule(function() {
                                    t.next(n),
                                      l.add(
                                        e.schedule(function() {
                                          return t.complete();
                                        })
                                      );
                                  })
                                );
                              },
                              function(n) {
                                l.add(
                                  e.schedule(function() {
                                    return t.error(n);
                                  })
                                );
                              }
                            );
                          })
                        ),
                        l
                      );
                    }
                  : V(n)
              );
            })(n, e);
          if (U(n)) return W(n, e);
          if (
            (function(n) {
              return n && 'function' == typeof n[D];
            })(n) ||
            'string' == typeof n
          )
            return (function(n, e) {
              if (!n) throw new Error('Iterable cannot be null');
              return new w(
                e
                  ? function(t) {
                      var l,
                        r = new d();
                      return (
                        r.add(function() {
                          l && 'function' == typeof l.return && l.return();
                        }),
                        r.add(
                          e.schedule(function() {
                            (l = n[D]()),
                              r.add(
                                e.schedule(function() {
                                  if (!t.closed) {
                                    var n, e;
                                    try {
                                      var r = l.next();
                                      (n = r.value), (e = r.done);
                                    } catch (i) {
                                      return void t.error(i);
                                    }
                                    e ? t.complete() : (t.next(n), this.schedule());
                                  }
                                })
                              );
                          })
                        ),
                        r
                      );
                    }
                  : j(n)
              );
            })(n, e);
        }
        throw new TypeError(((null !== n && typeof n) || n) + ' is not observable');
      }
      function Q(n, e) {
        var t =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.POSITIVE_INFINITY;
        return 'function' == typeof e
          ? function(l) {
              return l.pipe(
                Q(function(t, l) {
                  return Z(n(t, l)).pipe(
                    B(function(n, r) {
                      return e(t, n, l, r);
                    })
                  );
                }, t)
              );
            }
          : ('number' == typeof e && (t = e),
            function(e) {
              return e.lift(new Y(n, t));
            });
      }
      var Y = (function() {
          function n(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : Number.POSITIVE_INFINITY;
            _classCallCheck(this, n), (this.project = e), (this.concurrent = t);
          }
          return (
            _createClass(n, [
              {
                key: 'call',
                value: function(n, e) {
                  return e.subscribe(new $(n, this.project, this.concurrent));
                }
              }
            ]),
            n
          );
        })(),
        $ = (function(n) {
          function e(n, t) {
            var l,
              r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : Number.POSITIVE_INFINITY;
            return (
              _classCallCheck(this, e),
              ((l = _possibleConstructorReturn(
                this,
                _getPrototypeOf(e).call(this, n)
              )).project = t),
              (l.concurrent = r),
              (l.hasCompleted = !1),
              (l.buffer = []),
              (l.active = 0),
              (l.index = 0),
              l
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: '_next',
                value: function(n) {
                  this.active < this.concurrent ? this._tryNext(n) : this.buffer.push(n);
                }
              },
              {
                key: '_tryNext',
                value: function(n) {
                  var e,
                    t = this.index++;
                  try {
                    e = this.project(n, t);
                  } catch (l) {
                    return void this.destination.error(l);
                  }
                  this.active++, this._innerSub(e, n, t);
                }
              },
              {
                key: '_innerSub',
                value: function(n, e, t) {
                  var l = new I(this, void 0, void 0);
                  this.destination.add(l), H(this, n, e, t, l);
                }
              },
              {
                key: '_complete',
                value: function() {
                  (this.hasCompleted = !0),
                    0 === this.active && 0 === this.buffer.length && this.destination.complete(),
                    this.unsubscribe();
                }
              },
              {
                key: 'notifyNext',
                value: function(n, e, t, l, r) {
                  this.destination.next(e);
                }
              },
              {
                key: 'notifyComplete',
                value: function(n) {
                  var e = this.buffer;
                  this.remove(n),
                    this.active--,
                    e.length > 0
                      ? this._next(e.shift())
                      : 0 === this.active && this.hasCompleted && this.destination.complete();
                }
              }
            ]),
            e
          );
        })(q);
      function J(n) {
        return n;
      }
      function X() {
        var n =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Number.POSITIVE_INFINITY;
        return Q(J, n);
      }
      function nn() {
        return function(n) {
          return n.lift(new en(n));
        };
      }
      var en = (function() {
          function n(e) {
            _classCallCheck(this, n), (this.connectable = e);
          }
          return (
            _createClass(n, [
              {
                key: 'call',
                value: function(n, e) {
                  var t = this.connectable;
                  t._refCount++;
                  var l = new tn(n, t),
                    r = e.subscribe(l);
                  return l.closed || (l.connection = t.connect()), r;
                }
              }
            ]),
            n
          );
        })(),
        tn = (function(n) {
          function e(n, t) {
            var l;
            return (
              _classCallCheck(this, e),
              ((l = _possibleConstructorReturn(
                this,
                _getPrototypeOf(e).call(this, n)
              )).connectable = t),
              l
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: '_unsubscribe',
                value: function() {
                  var n = this.connectable;
                  if (n) {
                    this.connectable = null;
                    var e = n._refCount;
                    if (e <= 0) this.connection = null;
                    else if (((n._refCount = e - 1), e > 1)) this.connection = null;
                    else {
                      var t = this.connection,
                        l = n._connection;
                      (this.connection = null), !l || (t && l !== t) || l.unsubscribe();
                    }
                  } else this.connection = null;
                }
              }
            ]),
            e
          );
        })(g),
        ln = (function(n) {
          function e(n, t) {
            var l;
            return (
              _classCallCheck(this, e),
              ((l = _possibleConstructorReturn(this, _getPrototypeOf(e).call(this))).source = n),
              (l.subjectFactory = t),
              (l._refCount = 0),
              (l._isComplete = !1),
              l
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: '_subscribe',
                value: function(n) {
                  return this.getSubject().subscribe(n);
                }
              },
              {
                key: 'getSubject',
                value: function() {
                  var n = this._subject;
                  return (
                    (n && !n.isStopped) || (this._subject = this.subjectFactory()), this._subject
                  );
                }
              },
              {
                key: 'connect',
                value: function() {
                  var n = this._connection;
                  return (
                    n ||
                      ((this._isComplete = !1),
                      (n = this._connection = new d()).add(
                        this.source.subscribe(new un(this.getSubject(), this))
                      ),
                      n.closed
                        ? ((this._connection = null), (n = d.EMPTY))
                        : (this._connection = n)),
                    n
                  );
                }
              },
              {
                key: 'refCount',
                value: function() {
                  return nn()(this);
                }
              }
            ]),
            e
          );
        })(w).prototype,
        rn = {
          operator: { value: null },
          _refCount: { value: 0, writable: !0 },
          _subject: { value: null, writable: !0 },
          _connection: { value: null, writable: !0 },
          _subscribe: { value: ln._subscribe },
          _isComplete: { value: ln._isComplete, writable: !0 },
          getSubject: { value: ln.getSubject },
          connect: { value: ln.connect },
          refCount: { value: ln.refCount }
        },
        un = (function(n) {
          function e(n, t) {
            var l;
            return (
              _classCallCheck(this, e),
              ((l = _possibleConstructorReturn(
                this,
                _getPrototypeOf(e).call(this, n)
              )).connectable = t),
              l
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: '_error',
                value: function(n) {
                  this._unsubscribe(),
                    _get(_getPrototypeOf(e.prototype), '_error', this).call(this, n);
                }
              },
              {
                key: '_complete',
                value: function() {
                  (this.connectable._isComplete = !0),
                    this._unsubscribe(),
                    _get(_getPrototypeOf(e.prototype), '_complete', this).call(this);
                }
              },
              {
                key: '_unsubscribe',
                value: function() {
                  var n = this.connectable;
                  if (n) {
                    this.connectable = null;
                    var e = n._connection;
                    (n._refCount = 0),
                      (n._subject = null),
                      (n._connection = null),
                      e && e.unsubscribe();
                  }
                }
              }
            ]),
            e
          );
        })(T);
      function on() {
        return new M();
      }
      function an(n, e, t) {
        var l = (function(n) {
          return function() {
            if (n) {
              var e = n.apply(void 0, arguments);
              for (var t in e) this[t] = e[t];
            }
          };
        })(e);
        function r() {
          for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++) e[t] = arguments[t];
          if (this instanceof r) return l.apply(this, e), this;
          var i = _construct(r, e);
          return (u.annotation = i), u;
          function u(n, e, t) {
            for (
              var l = n.hasOwnProperty('__parameters__')
                ? n.__parameters__
                : Object.defineProperty(n, '__parameters__', { value: [] }).__parameters__;
              l.length <= t;

            )
              l.push(null);
            return (l[t] = l[t] || []).push(i), n;
          }
        }
        return (
          t && (r.prototype = Object.create(t.prototype)),
          (r.prototype.ngMetadataName = n),
          (r.annotationCls = r),
          r
        );
      }
      var sn = an('Inject', function(n) {
          return { token: n };
        }),
        cn = an('Optional'),
        hn = an('Self'),
        fn = an('SkipSelf'),
        dn = (function(n) {
          return (
            (n[(n.Default = 0)] = 'Default'),
            (n[(n.Host = 1)] = 'Host'),
            (n[(n.Self = 2)] = 'Self'),
            (n[(n.SkipSelf = 4)] = 'SkipSelf'),
            (n[(n.Optional = 8)] = 'Optional'),
            n
          );
        })({});
      function pn(n) {
        for (var e in n) if (n[e] === pn) return e;
        throw Error('Could not find renamed property on target object.');
      }
      function vn(n) {
        return {
          token: n.token,
          providedIn: n.providedIn || null,
          factory: n.factory,
          value: void 0
        };
      }
      var gn = vn;
      function _n(n) {
        var e = n[mn];
        return e && e.token === n ? e : null;
      }
      var mn = pn({ ngInjectableDef: pn });
      function yn(n) {
        if ('string' == typeof n) return n;
        if (n instanceof Array) return '[' + n.map(yn).join(', ') + ']';
        if (null == n) return '' + n;
        if (n.overriddenName) return ''.concat(n.overriddenName);
        if (n.name) return ''.concat(n.name);
        var e = n.toString();
        if (null == e) return '' + e;
        var t = e.indexOf('\n');
        return -1 === t ? e : e.substring(0, t);
      }
      var Cn = pn({ __forward_ref__: pn });
      function kn(n) {
        return (
          (n.__forward_ref__ = kn),
          (n.toString = function() {
            return yn(this());
          }),
          n
        );
      }
      function bn(n) {
        var e = n;
        return 'function' == typeof e && e.hasOwnProperty(Cn) && e.__forward_ref__ === kn ? e() : n;
      }
      var wn = 'undefined' != typeof globalThis && globalThis,
        xn = 'undefined' != typeof window && window,
        On =
          'undefined' != typeof self &&
          'undefined' != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          self,
        En = 'undefined' != typeof global && global,
        Pn = wn || En || xn || On,
        Sn = (function() {
          function n(e, t) {
            _classCallCheck(this, n),
              (this._desc = e),
              (this.ngMetadataName = 'InjectionToken'),
              (this.ngInjectableDef = void 0),
              'number' == typeof t
                ? (this.__NG_ELEMENT_ID__ = t)
                : void 0 !== t &&
                  (this.ngInjectableDef = vn({
                    token: this,
                    providedIn: t.providedIn || 'root',
                    factory: t.factory
                  }));
          }
          return (
            _createClass(n, [
              {
                key: 'toString',
                value: function() {
                  return 'InjectionToken '.concat(this._desc);
                }
              }
            ]),
            n
          );
        })(),
        Tn = new Sn('INJECTOR', -1),
        Mn = new Object(),
        An = /\n/gm,
        Rn = pn({ provide: String, useValue: pn }),
        In = void 0;
      function Nn(n) {
        var e = In;
        return (In = n), e;
      }
      function Vn(n) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dn.Default;
        return (function(n) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dn.Default;
          if (void 0 === In) throw new Error('inject() must be called from an injection context');
          return null === In
            ? (function(n, e, t) {
                var l = _n(n);
                if (l && 'root' == l.providedIn)
                  return void 0 === l.value ? (l.value = l.factory()) : l.value;
                if (t & dn.Optional) return null;
                throw new Error('Injector: NOT_FOUND ['.concat(yn(n), ']'));
              })(n, 0, e)
            : In.get(n, e & dn.Optional ? null : void 0, e);
        })(n, e);
      }
      var Dn = Vn,
        jn = (function() {
          function n() {
            _classCallCheck(this, n);
          }
          return (
            _createClass(n, [
              {
                key: 'get',
                value: function(n) {
                  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Mn;
                  if (e === Mn) {
                    var t = new Error('NullInjectorError: No provider for '.concat(yn(n), '!'));
                    throw ((t.name = 'NullInjectorError'), t);
                  }
                  return e;
                }
              }
            ]),
            n
          );
        })();
      function Ln(n, e, t) {
        var l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        n = n && '\n' === n.charAt(0) && '\u0275' == n.charAt(1) ? n.substr(2) : n;
        var r = yn(e);
        if (e instanceof Array) r = e.map(yn).join(' -> ');
        else if ('object' == typeof e) {
          var i = [];
          for (var u in e)
            if (e.hasOwnProperty(u)) {
              var o = e[u];
              i.push(u + ':' + ('string' == typeof o ? JSON.stringify(o) : yn(o)));
            }
          r = '{'.concat(i.join(', '), '}');
        }
        return ''
          .concat(t)
          .concat(l ? '(' + l + ')' : '', '[')
          .concat(r, ']: ')
          .concat(n.replace(An, '\n  '));
      }
      var Un = function n() {
          _classCallCheck(this, n);
        },
        Fn = function n() {
          _classCallCheck(this, n);
        };
      function zn(n, e, t) {
        e >= n.length ? n.push(t) : n.splice(e, 0, t);
      }
      function Hn(n, e) {
        return e >= n.length - 1 ? n.pop() : n.splice(e, 1)[0];
      }
      var qn = (function() {
          var n = { Emulated: 0, Native: 1, None: 2, ShadowDom: 3 };
          return (
            (n[n.Emulated] = 'Emulated'),
            (n[n.Native] = 'Native'),
            (n[n.None] = 'None'),
            (n[n.ShadowDom] = 'ShadowDom'),
            n
          );
        })(),
        Bn = (
          ('undefined' != typeof requestAnimationFrame && requestAnimationFrame) ||
          setTimeout
        ).bind(Pn);
      function Gn(n) {
        return n.ngDebugContext;
      }
      function Kn(n) {
        return n.ngOriginalError;
      }
      function Wn(n) {
        for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), l = 1; l < e; l++)
          t[l - 1] = arguments[l];
        n.error.apply(n, t);
      }
      var Zn = (function() {
          function n() {
            _classCallCheck(this, n), (this._console = console);
          }
          return (
            _createClass(n, [
              {
                key: 'handleError',
                value: function(n) {
                  var e = this._findOriginalError(n),
                    t = this._findContext(n),
                    l = (function(n) {
                      return n.ngErrorLogger || Wn;
                    })(n);
                  l(this._console, 'ERROR', n),
                    e && l(this._console, 'ORIGINAL ERROR', e),
                    t && l(this._console, 'ERROR CONTEXT', t);
                }
              },
              {
                key: '_findContext',
                value: function(n) {
                  return n ? (Gn(n) ? Gn(n) : this._findContext(Kn(n))) : null;
                }
              },
              {
                key: '_findOriginalError',
                value: function(n) {
                  for (var e = Kn(n); e && Kn(e); ) e = Kn(e);
                  return e;
                }
              }
            ]),
            n
          );
        })(),
        Qn = !0,
        Yn = !1;
      function $n() {
        return (Yn = !0), Qn;
      }
      var Jn = (function() {
          function n(e) {
            if (
              (_classCallCheck(this, n),
              (this.defaultDoc = e),
              (this.inertDocument = this.defaultDoc.implementation.createHTMLDocument(
                'sanitization-inert'
              )),
              (this.inertBodyElement = this.inertDocument.body),
              null == this.inertBodyElement)
            ) {
              var t = this.inertDocument.createElement('html');
              this.inertDocument.appendChild(t),
                (this.inertBodyElement = this.inertDocument.createElement('body')),
                t.appendChild(this.inertBodyElement);
            }
            (this.inertBodyElement.innerHTML =
              '<svg><g onload="this.parentNode.remove()"></g></svg>'),
              !this.inertBodyElement.querySelector || this.inertBodyElement.querySelector('svg')
                ? ((this.inertBodyElement.innerHTML =
                    '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">'),
                  (this.getInertBodyElement =
                    this.inertBodyElement.querySelector &&
                    this.inertBodyElement.querySelector('svg img') &&
                    (function() {
                      try {
                        return !!window.DOMParser;
                      } catch (n) {
                        return !1;
                      }
                    })()
                      ? this.getInertBodyElement_DOMParser
                      : this.getInertBodyElement_InertDocument))
                : (this.getInertBodyElement = this.getInertBodyElement_XHR);
          }
          return (
            _createClass(n, [
              {
                key: 'getInertBodyElement_XHR',
                value: function(n) {
                  n = '<body><remove></remove>' + n + '</body>';
                  try {
                    n = encodeURI(n);
                  } catch (l) {
                    return null;
                  }
                  var e = new XMLHttpRequest();
                  (e.responseType = 'document'),
                    e.open('GET', 'data:text/html;charset=utf-8,' + n, !1),
                    e.send(void 0);
                  var t = e.response.body;
                  return t.removeChild(t.firstChild), t;
                }
              },
              {
                key: 'getInertBodyElement_DOMParser',
                value: function(n) {
                  n = '<body><remove></remove>' + n + '</body>';
                  try {
                    var e = new window.DOMParser().parseFromString(n, 'text/html').body;
                    return e.removeChild(e.firstChild), e;
                  } catch (t) {
                    return null;
                  }
                }
              },
              {
                key: 'getInertBodyElement_InertDocument',
                value: function(n) {
                  var e = this.inertDocument.createElement('template');
                  return 'content' in e
                    ? ((e.innerHTML = n), e)
                    : ((this.inertBodyElement.innerHTML = n),
                      this.defaultDoc.documentMode &&
                        this.stripCustomNsAttrs(this.inertBodyElement),
                      this.inertBodyElement);
                }
              },
              {
                key: 'stripCustomNsAttrs',
                value: function(n) {
                  for (var e = n.attributes, t = e.length - 1; 0 < t; t--) {
                    var l = e.item(t).name;
                    ('xmlns:ns1' !== l && 0 !== l.indexOf('ns1:')) || n.removeAttribute(l);
                  }
                  for (var r = n.firstChild; r; )
                    r.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(r),
                      (r = r.nextSibling);
                }
              }
            ]),
            n
          );
        })(),
        Xn = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        ne = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
      function ee(n) {
        return (n = String(n)).match(Xn) || n.match(ne)
          ? n
          : ($n() &&
              console.warn(
                'WARNING: sanitizing unsafe URL value '.concat(
                  n,
                  ' (see http://g.co/ng/security#xss)'
                )
              ),
            'unsafe:' + n);
      }
      function te(n) {
        var e = {},
          t = !0,
          l = !1,
          r = void 0;
        try {
          for (var i, u = n.split(',')[Symbol.iterator](); !(t = (i = u.next()).done); t = !0) {
            e[i.value] = !0;
          }
        } catch (o) {
          (l = !0), (r = o);
        } finally {
          try {
            t || null == u.return || u.return();
          } finally {
            if (l) throw r;
          }
        }
        return e;
      }
      function le() {
        for (var n = {}, e = arguments.length, t = new Array(e), l = 0; l < e; l++)
          t[l] = arguments[l];
        for (var r = 0, i = t; r < i.length; r++) {
          var u = i[r];
          for (var o in u) u.hasOwnProperty(o) && (n[o] = !0);
        }
        return n;
      }
      var re,
        ie = te('area,br,col,hr,img,wbr'),
        ue = te('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr'),
        oe = te('rp,rt'),
        ae = le(oe, ue),
        se = le(
          ie,
          le(
            ue,
            te(
              'address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul'
            )
          ),
          le(
            oe,
            te(
              'a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video'
            )
          ),
          ae
        ),
        ce = te('background,cite,href,itemtype,longdesc,poster,src,xlink:href'),
        he = te('srcset'),
        fe = le(
          ce,
          he,
          te(
            'abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width'
          ),
          te(
            'aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext'
          )
        ),
        de = te('script,style,template'),
        pe = (function() {
          function n() {
            _classCallCheck(this, n), (this.sanitizedSomething = !1), (this.buf = []);
          }
          return (
            _createClass(n, [
              {
                key: 'sanitizeChildren',
                value: function(n) {
                  for (var e = n.firstChild, t = !0; e; )
                    if (
                      (e.nodeType === Node.ELEMENT_NODE
                        ? (t = this.startElement(e))
                        : e.nodeType === Node.TEXT_NODE
                        ? this.chars(e.nodeValue)
                        : (this.sanitizedSomething = !0),
                      t && e.firstChild)
                    )
                      e = e.firstChild;
                    else
                      for (; e; ) {
                        e.nodeType === Node.ELEMENT_NODE && this.endElement(e);
                        var l = this.checkClobberedElement(e, e.nextSibling);
                        if (l) {
                          e = l;
                          break;
                        }
                        e = this.checkClobberedElement(e, e.parentNode);
                      }
                  return this.buf.join('');
                }
              },
              {
                key: 'startElement',
                value: function(n) {
                  var e = n.nodeName.toLowerCase();
                  if (!se.hasOwnProperty(e))
                    return (this.sanitizedSomething = !0), !de.hasOwnProperty(e);
                  this.buf.push('<'), this.buf.push(e);
                  for (var t, l = n.attributes, r = 0; r < l.length; r++) {
                    var i = l.item(r),
                      u = i.name,
                      o = u.toLowerCase();
                    if (fe.hasOwnProperty(o)) {
                      var a = i.value;
                      ce[o] && (a = ee(a)),
                        he[o] &&
                          ((t = a),
                          (a = (t = String(t))
                            .split(',')
                            .map(function(n) {
                              return ee(n.trim());
                            })
                            .join(', '))),
                        this.buf.push(' ', u, '="', _e(a), '"');
                    } else this.sanitizedSomething = !0;
                  }
                  return this.buf.push('>'), !0;
                }
              },
              {
                key: 'endElement',
                value: function(n) {
                  var e = n.nodeName.toLowerCase();
                  se.hasOwnProperty(e) &&
                    !ie.hasOwnProperty(e) &&
                    (this.buf.push('</'), this.buf.push(e), this.buf.push('>'));
                }
              },
              {
                key: 'chars',
                value: function(n) {
                  this.buf.push(_e(n));
                }
              },
              {
                key: 'checkClobberedElement',
                value: function(n, e) {
                  if (
                    e &&
                    (n.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY) ===
                      Node.DOCUMENT_POSITION_CONTAINED_BY
                  )
                    throw new Error(
                      'Failed to sanitize html because the element is clobbered: '.concat(
                        n.outerHTML
                      )
                    );
                  return e;
                }
              }
            ]),
            n
          );
        })(),
        ve = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        ge = /([^\#-~ |!])/g;
      function _e(n) {
        return n
          .replace(/&/g, '&amp;')
          .replace(ve, function(n) {
            return (
              '&#' + (1024 * (n.charCodeAt(0) - 55296) + (n.charCodeAt(1) - 56320) + 65536) + ';'
            );
          })
          .replace(ge, function(n) {
            return '&#' + n.charCodeAt(0) + ';';
          })
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
      }
      function me(n) {
        return 'content' in n &&
          (function(n) {
            return n.nodeType === Node.ELEMENT_NODE && 'TEMPLATE' === n.nodeName;
          })(n)
          ? n.content
          : null;
      }
      var ye = (function() {
          var n = { NONE: 0, HTML: 1, STYLE: 2, SCRIPT: 3, URL: 4, RESOURCE_URL: 5 };
          return (
            (n[n.NONE] = 'NONE'),
            (n[n.HTML] = 'HTML'),
            (n[n.STYLE] = 'STYLE'),
            (n[n.SCRIPT] = 'SCRIPT'),
            (n[n.URL] = 'URL'),
            (n[n.RESOURCE_URL] = 'RESOURCE_URL'),
            n
          );
        })(),
        Ce = function n() {
          _classCallCheck(this, n);
        },
        ke = new RegExp(
          '^([-,."\'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|Z|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$',
          'g'
        ),
        be = /^url\(([^)]+)\)$/,
        we = /([A-Z])/g;
      function xe(n) {
        try {
          return null != n ? n.toString().slice(0, 30) : n;
        } catch (e) {
          return '[ERROR] Exception while trying to serialize the value';
        }
      }
      var Oe = (function() {
          var n = function n() {
            _classCallCheck(this, n);
          };
          return (
            (n.__NG_ELEMENT_ID__ = function() {
              return Ee();
            }),
            n
          );
        })(),
        Ee = function() {},
        Pe = new Sn('The presence of this token marks an injector as being the root injector.'),
        Se = function(n, e, t) {
          return new Ne(n, e, t);
        },
        Te = (function() {
          var n = (function() {
            function n() {
              _classCallCheck(this, n);
            }
            return (
              _createClass(n, null, [
                {
                  key: 'create',
                  value: function(n, e) {
                    return Array.isArray(n)
                      ? Se(n, e, '')
                      : Se(n.providers, n.parent, n.name || '');
                  }
                }
              ]),
              n
            );
          })();
          return (
            (n.THROW_IF_NOT_FOUND = Mn),
            (n.NULL = new jn()),
            (n.ngInjectableDef = vn({
              token: n,
              providedIn: 'any',
              factory: function() {
                return Vn(Tn);
              }
            })),
            (n.__NG_ELEMENT_ID__ = -1),
            n
          );
        })(),
        Me = function(n) {
          return n;
        },
        Ae = [],
        Re = Me,
        Ie = function() {
          return Array.prototype.slice.call(arguments);
        },
        Ne = (function() {
          function n(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Te.NULL,
              l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            _classCallCheck(this, n), (this.parent = t), (this.source = l);
            var r = (this._records = new Map());
            r.set(Te, { token: Te, fn: Me, deps: Ae, value: this, useNew: !1 }),
              r.set(Tn, { token: Tn, fn: Me, deps: Ae, value: this, useNew: !1 }),
              (function n(e, t) {
                if (t)
                  if ((t = bn(t)) instanceof Array) for (var l = 0; l < t.length; l++) n(e, t[l]);
                  else {
                    if ('function' == typeof t) throw De('Function/Class not supported', t);
                    if (!t || 'object' != typeof t || !t.provide)
                      throw De('Unexpected provider', t);
                    var r = bn(t.provide),
                      i = (function(n) {
                        var e = (function(n) {
                            var e = Ae,
                              t = n.deps;
                            if (t && t.length) {
                              e = [];
                              for (var l = 0; l < t.length; l++) {
                                var r = 6,
                                  i = bn(t[l]);
                                if (i instanceof Array)
                                  for (var u = 0, o = i; u < o.length; u++) {
                                    var a = o[u];
                                    a instanceof cn || a == cn
                                      ? (r |= 1)
                                      : a instanceof fn || a == fn
                                      ? (r &= -3)
                                      : a instanceof hn || a == hn
                                      ? (r &= -5)
                                      : (i = a instanceof sn ? a.token : bn(a));
                                  }
                                e.push({ token: i, options: r });
                              }
                            } else if (n.useExisting)
                              e = [{ token: bn(n.useExisting), options: 6 }];
                            else if (!(t || Rn in n)) throw De("'deps' required", n);
                            return e;
                          })(n),
                          t = Me,
                          l = Ae,
                          r = !1,
                          i = bn(n.provide);
                        if (Rn in n) l = n.useValue;
                        else if (n.useFactory) t = n.useFactory;
                        else if (n.useExisting);
                        else if (n.useClass) (r = !0), (t = bn(n.useClass));
                        else {
                          if ('function' != typeof i)
                            throw De(
                              'StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable',
                              n
                            );
                          (r = !0), (t = i);
                        }
                        return { deps: e, fn: t, useNew: r, value: l };
                      })(t);
                    if (!0 === t.multi) {
                      var u = e.get(r);
                      if (u) {
                        if (u.fn !== Ie) throw Ve(r);
                      } else
                        e.set(
                          r,
                          (u = { token: t.provide, deps: [], useNew: !1, fn: Ie, value: Ae })
                        );
                      (r = t), u.deps.push({ token: r, options: 6 });
                    }
                    var o = e.get(r);
                    if (o && o.fn == Ie) throw Ve(r);
                    e.set(r, i);
                  }
              })(r, e);
          }
          return (
            _createClass(n, [
              {
                key: 'get',
                value: function(n, e) {
                  var t =
                      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : dn.Default,
                    l = this._records.get(n);
                  try {
                    return (function n(e, t, l, r, i, u) {
                      try {
                        return (function(e, t, l, r, i, u) {
                          var o;
                          if (!t || u & dn.SkipSelf) u & dn.Self || (o = r.get(e, i, dn.Default));
                          else {
                            if ((o = t.value) == Re) throw Error('\u0275Circular dependency');
                            if (o === Ae) {
                              t.value = Re;
                              var a = t.useNew,
                                s = t.fn,
                                c = t.deps,
                                h = Ae;
                              if (c.length) {
                                h = [];
                                for (var f = 0; f < c.length; f++) {
                                  var d = c[f],
                                    p = d.options,
                                    v = 2 & p ? l.get(d.token) : void 0;
                                  h.push(
                                    n(
                                      d.token,
                                      v,
                                      l,
                                      v || 4 & p ? r : Te.NULL,
                                      1 & p ? null : Te.THROW_IF_NOT_FOUND,
                                      dn.Default
                                    )
                                  );
                                }
                              }
                              t.value = o = a
                                ? _construct(s, _toConsumableArray(h))
                                : s.apply(void 0, h);
                            }
                          }
                          return o;
                        })(e, t, l, r, i, u);
                      } catch (o) {
                        throw (o instanceof Error || (o = new Error(o)),
                        (o.ngTempTokenPath = o.ngTempTokenPath || []).unshift(e),
                        t && t.value == Re && (t.value = Ae),
                        o);
                      }
                    })(n, l, this._records, this.parent, e, t);
                  } catch (r) {
                    return (function(n, e, t, l) {
                      var r = n.ngTempTokenPath;
                      throw (e.__source && r.unshift(e.__source),
                      (n.message = Ln('\n' + n.message, r, 'StaticInjectorError', l)),
                      (n.ngTokenPath = r),
                      (n.ngTempTokenPath = null),
                      n);
                    })(r, n, 0, this.source);
                  }
                }
              },
              {
                key: 'toString',
                value: function() {
                  var n = [];
                  return (
                    this._records.forEach(function(e, t) {
                      return n.push(yn(t));
                    }),
                    'StaticInjector['.concat(n.join(', '), ']')
                  );
                }
              }
            ]),
            n
          );
        })();
      function Ve(n) {
        return De('Cannot mix multi providers and regular providers', n);
      }
      function De(n, e) {
        return new Error(Ln(n, e, 'StaticInjectorError'));
      }
      var je = new Sn('AnalyzeForEntryComponents'),
        Le = null;
      function Ue() {
        if (!Le) {
          var n = Pn.Symbol;
          if (n && n.iterator) Le = n.iterator;
          else
            for (var e = Object.getOwnPropertyNames(Map.prototype), t = 0; t < e.length; ++t) {
              var l = e[t];
              'entries' !== l &&
                'size' !== l &&
                Map.prototype[l] === Map.prototype.entries &&
                (Le = l);
            }
        }
        return Le;
      }
      function Fe(n, e) {
        return n === e || ('number' == typeof n && 'number' == typeof e && isNaN(n) && isNaN(e));
      }
      function ze(n, e) {
        var t = qe(n),
          l = qe(e);
        return t && l
          ? (function(n, e, t) {
              for (var l = n[Ue()](), r = e[Ue()](); ; ) {
                var i = l.next(),
                  u = r.next();
                if (i.done && u.done) return !0;
                if (i.done || u.done) return !1;
                if (!t(i.value, u.value)) return !1;
              }
            })(n, e, ze)
          : !(
              t ||
              !(n && ('object' == typeof n || 'function' == typeof n)) ||
              l ||
              !(e && ('object' == typeof e || 'function' == typeof e))
            ) || Fe(n, e);
      }
      var He = (function() {
        function n(e) {
          _classCallCheck(this, n), (this.wrapped = e);
        }
        return (
          _createClass(n, null, [
            {
              key: 'wrap',
              value: function(e) {
                return new n(e);
              }
            },
            {
              key: 'unwrap',
              value: function(e) {
                return n.isWrapped(e) ? e.wrapped : e;
              }
            },
            {
              key: 'isWrapped',
              value: function(e) {
                return e instanceof n;
              }
            }
          ]),
          n
        );
      })();
      function qe(n) {
        return !!Be(n) && (Array.isArray(n) || (!(n instanceof Map) && Ue() in n));
      }
      function Be(n) {
        return null !== n && ('function' == typeof n || 'object' == typeof n);
      }
      function Ge(n) {
        return !!n && 'function' == typeof n.then;
      }
      function Ke(n) {
        return !!n && 'function' == typeof n.subscribe;
      }
      var We = (function() {
          function n(e, t, l) {
            _classCallCheck(this, n),
              (this.previousValue = e),
              (this.currentValue = t),
              (this.firstChange = l);
          }
          return (
            _createClass(n, [
              {
                key: 'isFirstChange',
                value: function() {
                  return this.firstChange;
                }
              }
            ]),
            n
          );
        })(),
        Ze = function n() {
          _classCallCheck(this, n);
        };
      function Qe(n) {
        var e = Error(
          'No component factory found for '.concat(
            yn(n),
            '. Did you add it to @NgModule.entryComponents?'
          )
        );
        return (e[Ye] = n), e;
      }
      var Ye = 'ngComponent',
        $e = (function() {
          function n() {
            _classCallCheck(this, n);
          }
          return (
            _createClass(n, [
              {
                key: 'resolveComponentFactory',
                value: function(n) {
                  throw Qe(n);
                }
              }
            ]),
            n
          );
        })(),
        Je = (function() {
          var n = function n() {
            _classCallCheck(this, n);
          };
          return (n.NULL = new $e()), n;
        })(),
        Xe = (function() {
          function n(e, t, l) {
            _classCallCheck(this, n),
              (this._parent = t),
              (this._ngModule = l),
              (this._factories = new Map());
            for (var r = 0; r < e.length; r++) {
              var i = e[r];
              this._factories.set(i.componentType, i);
            }
          }
          return (
            _createClass(n, [
              {
                key: 'resolveComponentFactory',
                value: function(n) {
                  var e = this._factories.get(n);
                  if ((!e && this._parent && (e = this._parent.resolveComponentFactory(n)), !e))
                    throw Qe(n);
                  return new nt(e, this._ngModule);
                }
              }
            ]),
            n
          );
        })(),
        nt = (function(n) {
          function e(n, t) {
            var l;
            return (
              _classCallCheck(this, e),
              ((l = _possibleConstructorReturn(this, _getPrototypeOf(e).call(this))).factory = n),
              (l.ngModule = t),
              (l.selector = n.selector),
              (l.componentType = n.componentType),
              (l.ngContentSelectors = n.ngContentSelectors),
              (l.inputs = n.inputs),
              (l.outputs = n.outputs),
              l
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: 'create',
                value: function(n, e, t, l) {
                  return this.factory.create(n, e, t, l || this.ngModule);
                }
              }
            ]),
            e
          );
        })(Ze);
      function et() {}
      var tt = (function() {
          var n = function n(e) {
            _classCallCheck(this, n), (this.nativeElement = e);
          };
          return (
            (n.__NG_ELEMENT_ID__ = function() {
              return lt(n);
            }),
            n
          );
        })(),
        lt = et,
        rt = function n() {
          _classCallCheck(this, n);
        },
        it = (function() {
          var n = { Important: 1, DashCase: 2 };
          return (n[n.Important] = 'Important'), (n[n.DashCase] = 'DashCase'), n;
        })(),
        ut = (function() {
          var n = function n() {
            _classCallCheck(this, n);
          };
          return (
            (n.__NG_ELEMENT_ID__ = function() {
              return ot();
            }),
            n
          );
        })(),
        ot = et,
        at = new (function n(e) {
          _classCallCheck(this, n),
            (this.full = e),
            (this.major = e.split('.')[0]),
            (this.minor = e.split('.')[1]),
            (this.patch = e
              .split('.')
              .slice(2)
              .join('.'));
        })('8.2.14'),
        st = (function() {
          function n() {
            _classCallCheck(this, n);
          }
          return (
            _createClass(n, [
              {
                key: 'supports',
                value: function(n) {
                  return qe(n);
                }
              },
              {
                key: 'create',
                value: function(n) {
                  return new ht(n);
                }
              }
            ]),
            n
          );
        })(),
        ct = function(n, e) {
          return e;
        },
        ht = (function() {
          function n(e) {
            _classCallCheck(this, n),
              (this.length = 0),
              (this._linkedRecords = null),
              (this._unlinkedRecords = null),
              (this._previousItHead = null),
              (this._itHead = null),
              (this._itTail = null),
              (this._additionsHead = null),
              (this._additionsTail = null),
              (this._movesHead = null),
              (this._movesTail = null),
              (this._removalsHead = null),
              (this._removalsTail = null),
              (this._identityChangesHead = null),
              (this._identityChangesTail = null),
              (this._trackByFn = e || ct);
          }
          return (
            _createClass(n, [
              {
                key: 'forEachItem',
                value: function(n) {
                  var e;
                  for (e = this._itHead; null !== e; e = e._next) n(e);
                }
              },
              {
                key: 'forEachOperation',
                value: function(n) {
                  for (var e = this._itHead, t = this._removalsHead, l = 0, r = null; e || t; ) {
                    var i = !t || (e && e.currentIndex < vt(t, l, r)) ? e : t,
                      u = vt(i, l, r),
                      o = i.currentIndex;
                    if (i === t) l--, (t = t._nextRemoved);
                    else if (((e = e._next), null == i.previousIndex)) l++;
                    else {
                      r || (r = []);
                      var a = u - l,
                        s = o - l;
                      if (a != s) {
                        for (var c = 0; c < a; c++) {
                          var h = c < r.length ? r[c] : (r[c] = 0),
                            f = h + c;
                          s <= f && f < a && (r[c] = h + 1);
                        }
                        r[i.previousIndex] = s - a;
                      }
                    }
                    u !== o && n(i, u, o);
                  }
                }
              },
              {
                key: 'forEachPreviousItem',
                value: function(n) {
                  var e;
                  for (e = this._previousItHead; null !== e; e = e._nextPrevious) n(e);
                }
              },
              {
                key: 'forEachAddedItem',
                value: function(n) {
                  var e;
                  for (e = this._additionsHead; null !== e; e = e._nextAdded) n(e);
                }
              },
              {
                key: 'forEachMovedItem',
                value: function(n) {
                  var e;
                  for (e = this._movesHead; null !== e; e = e._nextMoved) n(e);
                }
              },
              {
                key: 'forEachRemovedItem',
                value: function(n) {
                  var e;
                  for (e = this._removalsHead; null !== e; e = e._nextRemoved) n(e);
                }
              },
              {
                key: 'forEachIdentityChange',
                value: function(n) {
                  var e;
                  for (e = this._identityChangesHead; null !== e; e = e._nextIdentityChange) n(e);
                }
              },
              {
                key: 'diff',
                value: function(n) {
                  if ((null == n && (n = []), !qe(n)))
                    throw new Error(
                      "Error trying to diff '".concat(
                        yn(n),
                        "'. Only arrays and iterables are allowed"
                      )
                    );
                  return this.check(n) ? this : null;
                }
              },
              { key: 'onDestroy', value: function() {} },
              {
                key: 'check',
                value: function(n) {
                  var e = this;
                  this._reset();
                  var t,
                    l,
                    r,
                    i = this._itHead,
                    u = !1;
                  if (Array.isArray(n)) {
                    this.length = n.length;
                    for (var o = 0; o < this.length; o++)
                      (l = n[o]),
                        (r = this._trackByFn(o, l)),
                        null !== i && Fe(i.trackById, r)
                          ? (u && (i = this._verifyReinsertion(i, l, r, o)),
                            Fe(i.item, l) || this._addIdentityChange(i, l))
                          : ((i = this._mismatch(i, l, r, o)), (u = !0)),
                        (i = i._next);
                  } else
                    (t = 0),
                      (function(n, e) {
                        if (Array.isArray(n)) for (var t = 0; t < n.length; t++) e(n[t]);
                        else for (var l, r = n[Ue()](); !(l = r.next()).done; ) e(l.value);
                      })(n, function(n) {
                        (r = e._trackByFn(t, n)),
                          null !== i && Fe(i.trackById, r)
                            ? (u && (i = e._verifyReinsertion(i, n, r, t)),
                              Fe(i.item, n) || e._addIdentityChange(i, n))
                            : ((i = e._mismatch(i, n, r, t)), (u = !0)),
                          (i = i._next),
                          t++;
                      }),
                      (this.length = t);
                  return this._truncate(i), (this.collection = n), this.isDirty;
                }
              },
              {
                key: '_reset',
                value: function() {
                  if (this.isDirty) {
                    var n, e;
                    for (n = this._previousItHead = this._itHead; null !== n; n = n._next)
                      n._nextPrevious = n._next;
                    for (n = this._additionsHead; null !== n; n = n._nextAdded)
                      n.previousIndex = n.currentIndex;
                    for (
                      this._additionsHead = this._additionsTail = null, n = this._movesHead;
                      null !== n;
                      n = e
                    )
                      (n.previousIndex = n.currentIndex), (e = n._nextMoved);
                    (this._movesHead = this._movesTail = null),
                      (this._removalsHead = this._removalsTail = null),
                      (this._identityChangesHead = this._identityChangesTail = null);
                  }
                }
              },
              {
                key: '_mismatch',
                value: function(n, e, t, l) {
                  var r;
                  return (
                    null === n ? (r = this._itTail) : ((r = n._prev), this._remove(n)),
                    null !==
                    (n = null === this._linkedRecords ? null : this._linkedRecords.get(t, l))
                      ? (Fe(n.item, e) || this._addIdentityChange(n, e), this._moveAfter(n, r, l))
                      : null !==
                        (n =
                          null === this._unlinkedRecords
                            ? null
                            : this._unlinkedRecords.get(t, null))
                      ? (Fe(n.item, e) || this._addIdentityChange(n, e),
                        this._reinsertAfter(n, r, l))
                      : (n = this._addAfter(new ft(e, t), r, l)),
                    n
                  );
                }
              },
              {
                key: '_verifyReinsertion',
                value: function(n, e, t, l) {
                  var r =
                    null === this._unlinkedRecords ? null : this._unlinkedRecords.get(t, null);
                  return (
                    null !== r
                      ? (n = this._reinsertAfter(r, n._prev, l))
                      : n.currentIndex != l && ((n.currentIndex = l), this._addToMoves(n, l)),
                    n
                  );
                }
              },
              {
                key: '_truncate',
                value: function(n) {
                  for (; null !== n; ) {
                    var e = n._next;
                    this._addToRemovals(this._unlink(n)), (n = e);
                  }
                  null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
                    null !== this._additionsTail && (this._additionsTail._nextAdded = null),
                    null !== this._movesTail && (this._movesTail._nextMoved = null),
                    null !== this._itTail && (this._itTail._next = null),
                    null !== this._removalsTail && (this._removalsTail._nextRemoved = null),
                    null !== this._identityChangesTail &&
                      (this._identityChangesTail._nextIdentityChange = null);
                }
              },
              {
                key: '_reinsertAfter',
                value: function(n, e, t) {
                  null !== this._unlinkedRecords && this._unlinkedRecords.remove(n);
                  var l = n._prevRemoved,
                    r = n._nextRemoved;
                  return (
                    null === l ? (this._removalsHead = r) : (l._nextRemoved = r),
                    null === r ? (this._removalsTail = l) : (r._prevRemoved = l),
                    this._insertAfter(n, e, t),
                    this._addToMoves(n, t),
                    n
                  );
                }
              },
              {
                key: '_moveAfter',
                value: function(n, e, t) {
                  return this._unlink(n), this._insertAfter(n, e, t), this._addToMoves(n, t), n;
                }
              },
              {
                key: '_addAfter',
                value: function(n, e, t) {
                  return (
                    this._insertAfter(n, e, t),
                    (this._additionsTail =
                      null === this._additionsTail
                        ? (this._additionsHead = n)
                        : (this._additionsTail._nextAdded = n)),
                    n
                  );
                }
              },
              {
                key: '_insertAfter',
                value: function(n, e, t) {
                  var l = null === e ? this._itHead : e._next;
                  return (
                    (n._next = l),
                    (n._prev = e),
                    null === l ? (this._itTail = n) : (l._prev = n),
                    null === e ? (this._itHead = n) : (e._next = n),
                    null === this._linkedRecords && (this._linkedRecords = new pt()),
                    this._linkedRecords.put(n),
                    (n.currentIndex = t),
                    n
                  );
                }
              },
              {
                key: '_remove',
                value: function(n) {
                  return this._addToRemovals(this._unlink(n));
                }
              },
              {
                key: '_unlink',
                value: function(n) {
                  null !== this._linkedRecords && this._linkedRecords.remove(n);
                  var e = n._prev,
                    t = n._next;
                  return (
                    null === e ? (this._itHead = t) : (e._next = t),
                    null === t ? (this._itTail = e) : (t._prev = e),
                    n
                  );
                }
              },
              {
                key: '_addToMoves',
                value: function(n, e) {
                  return n.previousIndex === e
                    ? n
                    : ((this._movesTail =
                        null === this._movesTail
                          ? (this._movesHead = n)
                          : (this._movesTail._nextMoved = n)),
                      n);
                }
              },
              {
                key: '_addToRemovals',
                value: function(n) {
                  return (
                    null === this._unlinkedRecords && (this._unlinkedRecords = new pt()),
                    this._unlinkedRecords.put(n),
                    (n.currentIndex = null),
                    (n._nextRemoved = null),
                    null === this._removalsTail
                      ? ((this._removalsTail = this._removalsHead = n), (n._prevRemoved = null))
                      : ((n._prevRemoved = this._removalsTail),
                        (this._removalsTail = this._removalsTail._nextRemoved = n)),
                    n
                  );
                }
              },
              {
                key: '_addIdentityChange',
                value: function(n, e) {
                  return (
                    (n.item = e),
                    (this._identityChangesTail =
                      null === this._identityChangesTail
                        ? (this._identityChangesHead = n)
                        : (this._identityChangesTail._nextIdentityChange = n)),
                    n
                  );
                }
              },
              {
                key: 'isDirty',
                get: function() {
                  return (
                    null !== this._additionsHead ||
                    null !== this._movesHead ||
                    null !== this._removalsHead ||
                    null !== this._identityChangesHead
                  );
                }
              }
            ]),
            n
          );
        })(),
        ft = function n(e, t) {
          _classCallCheck(this, n),
            (this.item = e),
            (this.trackById = t),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        },
        dt = (function() {
          function n() {
            _classCallCheck(this, n), (this._head = null), (this._tail = null);
          }
          return (
            _createClass(n, [
              {
                key: 'add',
                value: function(n) {
                  null === this._head
                    ? ((this._head = this._tail = n), (n._nextDup = null), (n._prevDup = null))
                    : ((this._tail._nextDup = n),
                      (n._prevDup = this._tail),
                      (n._nextDup = null),
                      (this._tail = n));
                }
              },
              {
                key: 'get',
                value: function(n, e) {
                  var t;
                  for (t = this._head; null !== t; t = t._nextDup)
                    if ((null === e || e <= t.currentIndex) && Fe(t.trackById, n)) return t;
                  return null;
                }
              },
              {
                key: 'remove',
                value: function(n) {
                  var e = n._prevDup,
                    t = n._nextDup;
                  return (
                    null === e ? (this._head = t) : (e._nextDup = t),
                    null === t ? (this._tail = e) : (t._prevDup = e),
                    null === this._head
                  );
                }
              }
            ]),
            n
          );
        })(),
        pt = (function() {
          function n() {
            _classCallCheck(this, n), (this.map = new Map());
          }
          return (
            _createClass(n, [
              {
                key: 'put',
                value: function(n) {
                  var e = n.trackById,
                    t = this.map.get(e);
                  t || ((t = new dt()), this.map.set(e, t)), t.add(n);
                }
              },
              {
                key: 'get',
                value: function(n, e) {
                  var t = this.map.get(n);
                  return t ? t.get(n, e) : null;
                }
              },
              {
                key: 'remove',
                value: function(n) {
                  var e = n.trackById;
                  return this.map.get(e).remove(n) && this.map.delete(e), n;
                }
              },
              {
                key: 'clear',
                value: function() {
                  this.map.clear();
                }
              },
              {
                key: 'isEmpty',
                get: function() {
                  return 0 === this.map.size;
                }
              }
            ]),
            n
          );
        })();
      function vt(n, e, t) {
        var l = n.previousIndex;
        if (null === l) return l;
        var r = 0;
        return t && l < t.length && (r = t[l]), l + e + r;
      }
      var gt = (function() {
          function n() {
            _classCallCheck(this, n);
          }
          return (
            _createClass(n, [
              {
                key: 'supports',
                value: function(n) {
                  return n instanceof Map || Be(n);
                }
              },
              {
                key: 'create',
                value: function() {
                  return new _t();
                }
              }
            ]),
            n
          );
        })(),
        _t = (function() {
          function n() {
            _classCallCheck(this, n),
              (this._records = new Map()),
              (this._mapHead = null),
              (this._appendAfter = null),
              (this._previousMapHead = null),
              (this._changesHead = null),
              (this._changesTail = null),
              (this._additionsHead = null),
              (this._additionsTail = null),
              (this._removalsHead = null),
              (this._removalsTail = null);
          }
          return (
            _createClass(n, [
              {
                key: 'forEachItem',
                value: function(n) {
                  var e;
                  for (e = this._mapHead; null !== e; e = e._next) n(e);
                }
              },
              {
                key: 'forEachPreviousItem',
                value: function(n) {
                  var e;
                  for (e = this._previousMapHead; null !== e; e = e._nextPrevious) n(e);
                }
              },
              {
                key: 'forEachChangedItem',
                value: function(n) {
                  var e;
                  for (e = this._changesHead; null !== e; e = e._nextChanged) n(e);
                }
              },
              {
                key: 'forEachAddedItem',
                value: function(n) {
                  var e;
                  for (e = this._additionsHead; null !== e; e = e._nextAdded) n(e);
                }
              },
              {
                key: 'forEachRemovedItem',
                value: function(n) {
                  var e;
                  for (e = this._removalsHead; null !== e; e = e._nextRemoved) n(e);
                }
              },
              {
                key: 'diff',
                value: function(n) {
                  if (n) {
                    if (!(n instanceof Map || Be(n)))
                      throw new Error(
                        "Error trying to diff '".concat(
                          yn(n),
                          "'. Only maps and objects are allowed"
                        )
                      );
                  } else n = new Map();
                  return this.check(n) ? this : null;
                }
              },
              { key: 'onDestroy', value: function() {} },
              {
                key: 'check',
                value: function(n) {
                  var e = this;
                  this._reset();
                  var t = this._mapHead;
                  if (
                    ((this._appendAfter = null),
                    this._forEach(n, function(n, l) {
                      if (t && t.key === l)
                        e._maybeAddToChanges(t, n), (e._appendAfter = t), (t = t._next);
                      else {
                        var r = e._getOrCreateRecordForKey(l, n);
                        t = e._insertBeforeOrAppend(t, r);
                      }
                    }),
                    t)
                  ) {
                    t._prev && (t._prev._next = null), (this._removalsHead = t);
                    for (var l = t; null !== l; l = l._nextRemoved)
                      l === this._mapHead && (this._mapHead = null),
                        this._records.delete(l.key),
                        (l._nextRemoved = l._next),
                        (l.previousValue = l.currentValue),
                        (l.currentValue = null),
                        (l._prev = null),
                        (l._next = null);
                  }
                  return (
                    this._changesTail && (this._changesTail._nextChanged = null),
                    this._additionsTail && (this._additionsTail._nextAdded = null),
                    this.isDirty
                  );
                }
              },
              {
                key: '_insertBeforeOrAppend',
                value: function(n, e) {
                  if (n) {
                    var t = n._prev;
                    return (
                      (e._next = n),
                      (e._prev = t),
                      (n._prev = e),
                      t && (t._next = e),
                      n === this._mapHead && (this._mapHead = e),
                      (this._appendAfter = n),
                      n
                    );
                  }
                  return (
                    this._appendAfter
                      ? ((this._appendAfter._next = e), (e._prev = this._appendAfter))
                      : (this._mapHead = e),
                    (this._appendAfter = e),
                    null
                  );
                }
              },
              {
                key: '_getOrCreateRecordForKey',
                value: function(n, e) {
                  if (this._records.has(n)) {
                    var t = this._records.get(n);
                    this._maybeAddToChanges(t, e);
                    var l = t._prev,
                      r = t._next;
                    return (
                      l && (l._next = r), r && (r._prev = l), (t._next = null), (t._prev = null), t
                    );
                  }
                  var i = new mt(n);
                  return this._records.set(n, i), (i.currentValue = e), this._addToAdditions(i), i;
                }
              },
              {
                key: '_reset',
                value: function() {
                  if (this.isDirty) {
                    var n;
                    for (
                      this._previousMapHead = this._mapHead, n = this._previousMapHead;
                      null !== n;
                      n = n._next
                    )
                      n._nextPrevious = n._next;
                    for (n = this._changesHead; null !== n; n = n._nextChanged)
                      n.previousValue = n.currentValue;
                    for (n = this._additionsHead; null != n; n = n._nextAdded)
                      n.previousValue = n.currentValue;
                    (this._changesHead = this._changesTail = null),
                      (this._additionsHead = this._additionsTail = null),
                      (this._removalsHead = null);
                  }
                }
              },
              {
                key: '_maybeAddToChanges',
                value: function(n, e) {
                  Fe(e, n.currentValue) ||
                    ((n.previousValue = n.currentValue),
                    (n.currentValue = e),
                    this._addToChanges(n));
                }
              },
              {
                key: '_addToAdditions',
                value: function(n) {
                  null === this._additionsHead
                    ? (this._additionsHead = this._additionsTail = n)
                    : ((this._additionsTail._nextAdded = n), (this._additionsTail = n));
                }
              },
              {
                key: '_addToChanges',
                value: function(n) {
                  null === this._changesHead
                    ? (this._changesHead = this._changesTail = n)
                    : ((this._changesTail._nextChanged = n), (this._changesTail = n));
                }
              },
              {
                key: '_forEach',
                value: function(n, e) {
                  n instanceof Map
                    ? n.forEach(e)
                    : Object.keys(n).forEach(function(t) {
                        return e(n[t], t);
                      });
                }
              },
              {
                key: 'isDirty',
                get: function() {
                  return (
                    null !== this._additionsHead ||
                    null !== this._changesHead ||
                    null !== this._removalsHead
                  );
                }
              }
            ]),
            n
          );
        })(),
        mt = function n(e) {
          _classCallCheck(this, n),
            (this.key = e),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        },
        yt = (function() {
          var n = (function() {
            function n(e) {
              _classCallCheck(this, n), (this.factories = e);
            }
            return (
              _createClass(
                n,
                [
                  {
                    key: 'find',
                    value: function(n) {
                      var e,
                        t = this.factories.find(function(e) {
                          return e.supports(n);
                        });
                      if (null != t) return t;
                      throw new Error(
                        "Cannot find a differ supporting object '"
                          .concat(n, "' of type '")
                          .concat((e = n).name || typeof e, "'")
                      );
                    }
                  }
                ],
                [
                  {
                    key: 'create',
                    value: function(e, t) {
                      if (null != t) {
                        var l = t.factories.slice();
                        e = e.concat(l);
                      }
                      return new n(e);
                    }
                  },
                  {
                    key: 'extend',
                    value: function(e) {
                      return {
                        provide: n,
                        useFactory: function(t) {
                          if (!t)
                            throw new Error(
                              'Cannot extend IterableDiffers without a parent injector'
                            );
                          return n.create(e, t);
                        },
                        deps: [[n, new fn(), new cn()]]
                      };
                    }
                  }
                ]
              ),
              n
            );
          })();
          return (
            (n.ngInjectableDef = vn({
              token: n,
              providedIn: 'root',
              factory: function() {
                return new n([new st()]);
              }
            })),
            n
          );
        })(),
        Ct = (function() {
          var n = (function() {
            function n(e) {
              _classCallCheck(this, n), (this.factories = e);
            }
            return (
              _createClass(
                n,
                [
                  {
                    key: 'find',
                    value: function(n) {
                      var e = this.factories.find(function(e) {
                        return e.supports(n);
                      });
                      if (e) return e;
                      throw new Error("Cannot find a differ supporting object '".concat(n, "'"));
                    }
                  }
                ],
                [
                  {
                    key: 'create',
                    value: function(e, t) {
                      if (t) {
                        var l = t.factories.slice();
                        e = e.concat(l);
                      }
                      return new n(e);
                    }
                  },
                  {
                    key: 'extend',
                    value: function(e) {
                      return {
                        provide: n,
                        useFactory: function(t) {
                          if (!t)
                            throw new Error(
                              'Cannot extend KeyValueDiffers without a parent injector'
                            );
                          return n.create(e, t);
                        },
                        deps: [[n, new fn(), new cn()]]
                      };
                    }
                  }
                ]
              ),
              n
            );
          })();
          return (
            (n.ngInjectableDef = vn({
              token: n,
              providedIn: 'root',
              factory: function() {
                return new n([new gt()]);
              }
            })),
            n
          );
        })(),
        kt = [new gt()],
        bt = new yt([new st()]),
        wt = new Ct(kt),
        xt = (function() {
          var n = function n() {
            _classCallCheck(this, n);
          };
          return (
            (n.__NG_ELEMENT_ID__ = function() {
              return Ot(n, tt);
            }),
            n
          );
        })(),
        Ot = et,
        Et = (function() {
          var n = function n() {
            _classCallCheck(this, n);
          };
          return (
            (n.__NG_ELEMENT_ID__ = function() {
              return Pt(n, tt);
            }),
            n
          );
        })(),
        Pt = et;
      function St(n, e, t, l) {
        var r = "ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '"
          .concat(e, "'. Current value: '")
          .concat(t, "'.");
        return (
          l &&
            (r +=
              ' It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?'),
          (function(n, e) {
            var t = new Error(n);
            return Tt(t, e), t;
          })(r, n)
        );
      }
      function Tt(n, e) {
        (n.ngDebugContext = e), (n.ngErrorLogger = e.logError.bind(e));
      }
      function Mt(n) {
        return new Error('ViewDestroyedError: Attempt to use a destroyed view: '.concat(n));
      }
      function At(n, e, t) {
        var l = n.state,
          r = 1792 & l;
        return r === e ? ((n.state = (-1793 & l) | t), (n.initIndex = -1), !0) : r === t;
      }
      function Rt(n, e, t) {
        return (1792 & n.state) === e && n.initIndex <= t && ((n.initIndex = t + 1), !0);
      }
      function It(n, e) {
        return n.nodes[e];
      }
      function Nt(n, e) {
        return n.nodes[e];
      }
      function Vt(n, e) {
        return n.nodes[e];
      }
      function Dt(n, e) {
        return n.nodes[e];
      }
      function jt(n, e) {
        return n.nodes[e];
      }
      var Lt = {
          setCurrentNode: void 0,
          createRootView: void 0,
          createEmbeddedView: void 0,
          createComponentView: void 0,
          createNgModuleRef: void 0,
          overrideProvider: void 0,
          overrideComponentView: void 0,
          clearOverrides: void 0,
          checkAndUpdateView: void 0,
          checkNoChangesView: void 0,
          destroyView: void 0,
          resolveDep: void 0,
          createDebugContext: void 0,
          handleEvent: void 0,
          updateDirectives: void 0,
          updateRenderer: void 0,
          dirtyParentQueries: void 0
        },
        Ut = function() {},
        Ft = new Map();
      function zt(n) {
        var e = Ft.get(n);
        return e || ((e = yn(n) + '_' + Ft.size), Ft.set(n, e)), e;
      }
      function Ht(n) {
        return {
          id: '$$undefined',
          styles: n.styles,
          encapsulation: n.encapsulation,
          data: n.data
        };
      }
      var qt = 0;
      function Bt(n, e, t, l) {
        return !(!(2 & n.state) && Fe(n.oldValues[e.bindingIndex + t], l));
      }
      function Gt(n, e, t, l) {
        return !!Bt(n, e, t, l) && ((n.oldValues[e.bindingIndex + t] = l), !0);
      }
      function Kt(n, e, t, l) {
        var r = n.oldValues[e.bindingIndex + t];
        if (1 & n.state || !ze(r, l)) {
          var i = e.bindings[t].name;
          throw St(
            Lt.createDebugContext(n, e.nodeIndex),
            ''.concat(i, ': ').concat(r),
            ''.concat(i, ': ').concat(l),
            0 != (1 & n.state)
          );
        }
      }
      function Wt(n) {
        for (var e = n; e; )
          2 & e.def.flags && (e.state |= 8), (e = e.viewContainerParent || e.parent);
      }
      function Zt(n, e) {
        for (var t = n; t && t !== e; ) (t.state |= 64), (t = t.viewContainerParent || t.parent);
      }
      function Qt(n, e, t, l) {
        try {
          return (
            Wt(33554432 & n.def.nodes[e].flags ? Nt(n, e).componentView : n),
            Lt.handleEvent(n, e, t, l)
          );
        } catch (r) {
          n.root.errorHandler.handleError(r);
        }
      }
      function Yt(n) {
        return n.parent ? Nt(n.parent, n.parentNodeDef.nodeIndex) : null;
      }
      function $t(n) {
        return n.parent ? n.parentNodeDef.parent : null;
      }
      function Jt(n, e) {
        switch (201347067 & e.flags) {
          case 1:
            return Nt(n, e.nodeIndex).renderElement;
          case 2:
            return It(n, e.nodeIndex).renderText;
        }
      }
      function Xt(n) {
        return !!n.parent && !!(32768 & n.parentNodeDef.flags);
      }
      function nl(n) {
        return !(!n.parent || 32768 & n.parentNodeDef.flags);
      }
      function el(n) {
        return 1 << n % 32;
      }
      function tl(n) {
        var e = {},
          t = 0,
          l = {};
        return (
          n &&
            n.forEach(function(n) {
              var r = _slicedToArray(n, 2),
                i = r[0],
                u = r[1];
              'number' == typeof i ? ((e[i] = u), (t |= el(i))) : (l[i] = u);
            }),
          { matchedQueries: e, references: l, matchedQueryIds: t }
        );
      }
      function ll(n, e) {
        return n.map(function(n) {
          var t, l, r;
          return (
            Array.isArray(n)
              ? ((r = (t = _slicedToArray(n, 2))[0]), (l = t[1]))
              : ((r = 0), (l = n)),
            l &&
              ('function' == typeof l || 'object' == typeof l) &&
              e &&
              Object.defineProperty(l, '__source', { value: e, configurable: !0 }),
            { flags: r, token: l, tokenKey: zt(l) }
          );
        });
      }
      function rl(n, e, t) {
        var l = t.renderParent;
        return l
          ? 0 == (1 & l.flags) ||
            0 == (33554432 & l.flags) ||
            (l.element.componentRendererType &&
              l.element.componentRendererType.encapsulation === qn.Native)
            ? Nt(n, t.renderParent.nodeIndex).renderElement
            : void 0
          : e;
      }
      var il = new WeakMap();
      function ul(n) {
        var e = il.get(n);
        return (
          e ||
            (((e = n(function() {
              return Ut;
            })).factory = n),
            il.set(n, e)),
          e
        );
      }
      function ol(n, e, t, l, r) {
        3 === e && (t = n.renderer.parentNode(Jt(n, n.def.lastRenderRootNode))),
          al(n, e, 0, n.def.nodes.length - 1, t, l, r);
      }
      function al(n, e, t, l, r, i, u) {
        for (var o = t; o <= l; o++) {
          var a = n.def.nodes[o];
          11 & a.flags && cl(n, a, e, r, i, u), (o += a.childCount);
        }
      }
      function sl(n, e, t, l, r, i) {
        for (var u = n; u && !Xt(u); ) u = u.parent;
        for (
          var o = u.parent, a = $t(u), s = a.nodeIndex + a.childCount, c = a.nodeIndex + 1;
          c <= s;
          c++
        ) {
          var h = o.def.nodes[c];
          h.ngContentIndex === e && cl(o, h, t, l, r, i), (c += h.childCount);
        }
        if (!o.parent) {
          var f = n.root.projectableNodes[e];
          if (f) for (var d = 0; d < f.length; d++) hl(n, f[d], t, l, r, i);
        }
      }
      function cl(n, e, t, l, r, i) {
        if (8 & e.flags) sl(n, e.ngContent.index, t, l, r, i);
        else {
          var u = Jt(n, e);
          if (
            (3 === t && 33554432 & e.flags && 48 & e.bindingFlags
              ? (16 & e.bindingFlags && hl(n, u, t, l, r, i),
                32 & e.bindingFlags && hl(Nt(n, e.nodeIndex).componentView, u, t, l, r, i))
              : hl(n, u, t, l, r, i),
            16777216 & e.flags)
          )
            for (var o = Nt(n, e.nodeIndex).viewContainer._embeddedViews, a = 0; a < o.length; a++)
              ol(o[a], t, l, r, i);
          1 & e.flags &&
            !e.element.name &&
            al(n, t, e.nodeIndex + 1, e.nodeIndex + e.childCount, l, r, i);
        }
      }
      function hl(n, e, t, l, r, i) {
        var u = n.renderer;
        switch (t) {
          case 1:
            u.appendChild(l, e);
            break;
          case 2:
            u.insertBefore(l, e, r);
            break;
          case 3:
            u.removeChild(l, e);
            break;
          case 0:
            i.push(e);
        }
      }
      var fl = /^:([^:]+):(.+)$/;
      function dl(n) {
        if (':' === n[0]) {
          var e = n.match(fl);
          return [e[1], e[2]];
        }
        return ['', n];
      }
      function pl(n) {
        for (var e = 0, t = 0; t < n.length; t++) e |= n[t].flags;
        return e;
      }
      var vl = new Object(),
        gl = zt(Te),
        _l = zt(Tn),
        ml = zt(Un);
      function yl(n, e, t, l) {
        return (t = bn(t)), { index: -1, deps: ll(l, yn(e)), flags: n, token: e, value: t };
      }
      function Cl(n, e) {
        var t,
          l,
          r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Te.THROW_IF_NOT_FOUND,
          i = Nn(n);
        try {
          if (8 & e.flags) return e.token;
          if ((2 & e.flags && (r = null), 1 & e.flags)) return n._parent.get(e.token, r);
          var u = e.tokenKey;
          switch (u) {
            case gl:
            case _l:
            case ml:
              return n;
          }
          var o,
            a = n._def.providersByKey[u];
          if (a) {
            var s = n._providers[a.index];
            return void 0 === s && (s = n._providers[a.index] = kl(n, a)), s === vl ? void 0 : s;
          }
          if (
            (o = _n(e.token)) &&
            ((t = n),
            null != (l = o).providedIn &&
              ((function(n, e) {
                return n._def.modules.indexOf(e) > -1;
              })(t, l.providedIn) ||
                ('root' === l.providedIn && t._def.isRoot)))
          ) {
            var c = n._providers.length;
            return (
              (n._def.providers[c] = n._def.providersByKey[e.tokenKey] = {
                flags: 5120,
                value: o.factory,
                deps: [],
                index: c,
                token: e.token
              }),
              (n._providers[c] = vl),
              (n._providers[c] = kl(n, n._def.providersByKey[e.tokenKey]))
            );
          }
          return 4 & e.flags ? r : n._parent.get(e.token, r);
        } finally {
          Nn(i);
        }
      }
      function kl(n, e) {
        var t;
        switch (201347067 & e.flags) {
          case 512:
            t = (function(n, e, t) {
              var l = t.length;
              switch (l) {
                case 0:
                  return new e();
                case 1:
                  return new e(Cl(n, t[0]));
                case 2:
                  return new e(Cl(n, t[0]), Cl(n, t[1]));
                case 3:
                  return new e(Cl(n, t[0]), Cl(n, t[1]), Cl(n, t[2]));
                default:
                  for (var r = new Array(l), i = 0; i < l; i++) r[i] = Cl(n, t[i]);
                  return _construct(e, r);
              }
            })(n, e.value, e.deps);
            break;
          case 1024:
            t = (function(n, e, t) {
              var l = t.length;
              switch (l) {
                case 0:
                  return e();
                case 1:
                  return e(Cl(n, t[0]));
                case 2:
                  return e(Cl(n, t[0]), Cl(n, t[1]));
                case 3:
                  return e(Cl(n, t[0]), Cl(n, t[1]), Cl(n, t[2]));
                default:
                  for (var r = Array(l), i = 0; i < l; i++) r[i] = Cl(n, t[i]);
                  return e.apply(void 0, r);
              }
            })(n, e.value, e.deps);
            break;
          case 2048:
            t = Cl(n, e.deps[0]);
            break;
          case 256:
            t = e.value;
        }
        return (
          t === vl ||
            null === t ||
            'object' != typeof t ||
            131072 & e.flags ||
            'function' != typeof t.ngOnDestroy ||
            (e.flags |= 131072),
          void 0 === t ? vl : t
        );
      }
      function bl(n, e) {
        var t = n.viewContainer._embeddedViews;
        if (((null == e || e >= t.length) && (e = t.length - 1), e < 0)) return null;
        var l = t[e];
        return (l.viewContainerParent = null), Hn(t, e), Lt.dirtyParentQueries(l), xl(l), l;
      }
      function wl(n, e, t) {
        var l = e ? Jt(e, e.def.lastRenderRootNode) : n.renderElement,
          r = t.renderer.parentNode(l),
          i = t.renderer.nextSibling(l);
        ol(t, 2, r, i, void 0);
      }
      function xl(n) {
        ol(n, 3, null, null, void 0);
      }
      var Ol = new Object();
      function El(n, e, t, l, r, i) {
        return new Pl(n, e, t, l, r, i);
      }
      var Pl = (function(n) {
          function e(n, t, l, r, i, u) {
            var o;
            return (
              _classCallCheck(this, e),
              ((o = _possibleConstructorReturn(this, _getPrototypeOf(e).call(this))).selector = n),
              (o.componentType = t),
              (o._inputs = r),
              (o._outputs = i),
              (o.ngContentSelectors = u),
              (o.viewDefFactory = l),
              o
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: 'create',
                value: function(n, e, t, l) {
                  if (!l) throw new Error('ngModule should be provided');
                  var r = ul(this.viewDefFactory),
                    i = r.nodes[0].element.componentProvider.nodeIndex,
                    u = Lt.createRootView(n, e || [], t, r, l, Ol),
                    o = Vt(u, i).instance;
                  return (
                    t && u.renderer.setAttribute(Nt(u, 0).renderElement, 'ng-version', at.full),
                    new Sl(u, new Rl(u), o)
                  );
                }
              },
              {
                key: 'inputs',
                get: function() {
                  var n = [],
                    e = this._inputs;
                  for (var t in e) n.push({ propName: t, templateName: e[t] });
                  return n;
                }
              },
              {
                key: 'outputs',
                get: function() {
                  var n = [];
                  for (var e in this._outputs)
                    n.push({ propName: e, templateName: this._outputs[e] });
                  return n;
                }
              }
            ]),
            e
          );
        })(Ze),
        Sl = (function(n) {
          function e(n, t, l) {
            var r;
            return (
              _classCallCheck(this, e),
              ((r = _possibleConstructorReturn(this, _getPrototypeOf(e).call(this)))._view = n),
              (r._viewRef = t),
              (r._component = l),
              (r._elDef = r._view.def.nodes[0]),
              (r.hostView = t),
              (r.changeDetectorRef = t),
              (r.instance = l),
              r
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: 'destroy',
                value: function() {
                  this._viewRef.destroy();
                }
              },
              {
                key: 'onDestroy',
                value: function(n) {
                  this._viewRef.onDestroy(n);
                }
              },
              {
                key: 'location',
                get: function() {
                  return new tt(Nt(this._view, this._elDef.nodeIndex).renderElement);
                }
              },
              {
                key: 'injector',
                get: function() {
                  return new Dl(this._view, this._elDef);
                }
              },
              {
                key: 'componentType',
                get: function() {
                  return this._component.constructor;
                }
              }
            ]),
            e
          );
        })(
          (function() {
            return function n() {
              _classCallCheck(this, n);
            };
          })()
        );
      function Tl(n, e, t) {
        return new Ml(n, e, t);
      }
      var Ml = (function() {
        function n(e, t, l) {
          _classCallCheck(this, n),
            (this._view = e),
            (this._elDef = t),
            (this._data = l),
            (this._embeddedViews = []);
        }
        return (
          _createClass(n, [
            {
              key: 'clear',
              value: function() {
                for (var n = this._embeddedViews.length - 1; n >= 0; n--) {
                  var e = bl(this._data, n);
                  Lt.destroyView(e);
                }
              }
            },
            {
              key: 'get',
              value: function(n) {
                var e = this._embeddedViews[n];
                if (e) {
                  var t = new Rl(e);
                  return t.attachToViewContainerRef(this), t;
                }
                return null;
              }
            },
            {
              key: 'createEmbeddedView',
              value: function(n, e, t) {
                var l = n.createEmbeddedView(e || {});
                return this.insert(l, t), l;
              }
            },
            {
              key: 'createComponent',
              value: function(n, e, t, l, r) {
                var i = t || this.parentInjector;
                r || n instanceof nt || (r = i.get(Un));
                var u = n.create(i, l, void 0, r);
                return this.insert(u.hostView, e), u;
              }
            },
            {
              key: 'insert',
              value: function(n, e) {
                if (n.destroyed)
                  throw new Error('Cannot insert a destroyed View in a ViewContainer!');
                var t,
                  l,
                  r,
                  i,
                  u,
                  o = n;
                return (
                  (t = this._view),
                  (l = this._data),
                  (r = e),
                  (i = o._view),
                  (u = l.viewContainer._embeddedViews),
                  null == r && (r = u.length),
                  (i.viewContainerParent = t),
                  zn(u, r, i),
                  (function(n, e) {
                    var t = Yt(e);
                    if (t && t !== n && !(16 & e.state)) {
                      e.state |= 16;
                      var l = t.template._projectedViews;
                      l || (l = t.template._projectedViews = []),
                        l.push(e),
                        (function(n, e) {
                          if (!(4 & e.flags)) {
                            (n.nodeFlags |= 4), (e.flags |= 4);
                            for (var t = e.parent; t; ) (t.childFlags |= 4), (t = t.parent);
                          }
                        })(e.parent.def, e.parentNodeDef);
                    }
                  })(l, i),
                  Lt.dirtyParentQueries(i),
                  wl(l, r > 0 ? u[r - 1] : null, i),
                  o.attachToViewContainerRef(this),
                  n
                );
              }
            },
            {
              key: 'move',
              value: function(n, e) {
                if (n.destroyed)
                  throw new Error('Cannot move a destroyed View in a ViewContainer!');
                var t,
                  l,
                  r,
                  i,
                  u,
                  o = this._embeddedViews.indexOf(n._view);
                return (
                  (t = this._data),
                  (l = o),
                  (r = e),
                  (i = t.viewContainer._embeddedViews),
                  (u = i[l]),
                  Hn(i, l),
                  null == r && (r = i.length),
                  zn(i, r, u),
                  Lt.dirtyParentQueries(u),
                  xl(u),
                  wl(t, r > 0 ? i[r - 1] : null, u),
                  n
                );
              }
            },
            {
              key: 'indexOf',
              value: function(n) {
                return this._embeddedViews.indexOf(n._view);
              }
            },
            {
              key: 'remove',
              value: function(n) {
                var e = bl(this._data, n);
                e && Lt.destroyView(e);
              }
            },
            {
              key: 'detach',
              value: function(n) {
                var e = bl(this._data, n);
                return e ? new Rl(e) : null;
              }
            },
            {
              key: 'element',
              get: function() {
                return new tt(this._data.renderElement);
              }
            },
            {
              key: 'injector',
              get: function() {
                return new Dl(this._view, this._elDef);
              }
            },
            {
              key: 'parentInjector',
              get: function() {
                for (var n = this._view, e = this._elDef.parent; !e && n; )
                  (e = $t(n)), (n = n.parent);
                return n ? new Dl(n, e) : new Dl(this._view, null);
              }
            },
            {
              key: 'length',
              get: function() {
                return this._embeddedViews.length;
              }
            }
          ]),
          n
        );
      })();
      function Al(n) {
        return new Rl(n);
      }
      var Rl = (function() {
        function n(e) {
          _classCallCheck(this, n),
            (this._view = e),
            (this._viewContainerRef = null),
            (this._appRef = null);
        }
        return (
          _createClass(n, [
            {
              key: 'markForCheck',
              value: function() {
                Wt(this._view);
              }
            },
            {
              key: 'detach',
              value: function() {
                this._view.state &= -5;
              }
            },
            {
              key: 'detectChanges',
              value: function() {
                var n = this._view.root.rendererFactory;
                n.begin && n.begin();
                try {
                  Lt.checkAndUpdateView(this._view);
                } finally {
                  n.end && n.end();
                }
              }
            },
            {
              key: 'checkNoChanges',
              value: function() {
                Lt.checkNoChangesView(this._view);
              }
            },
            {
              key: 'reattach',
              value: function() {
                this._view.state |= 4;
              }
            },
            {
              key: 'onDestroy',
              value: function(n) {
                this._view.disposables || (this._view.disposables = []),
                  this._view.disposables.push(n);
              }
            },
            {
              key: 'destroy',
              value: function() {
                this._appRef
                  ? this._appRef.detachView(this)
                  : this._viewContainerRef &&
                    this._viewContainerRef.detach(this._viewContainerRef.indexOf(this)),
                  Lt.destroyView(this._view);
              }
            },
            {
              key: 'detachFromAppRef',
              value: function() {
                (this._appRef = null), xl(this._view), Lt.dirtyParentQueries(this._view);
              }
            },
            {
              key: 'attachToAppRef',
              value: function(n) {
                if (this._viewContainerRef)
                  throw new Error('This view is already attached to a ViewContainer!');
                this._appRef = n;
              }
            },
            {
              key: 'attachToViewContainerRef',
              value: function(n) {
                if (this._appRef)
                  throw new Error('This view is already attached directly to the ApplicationRef!');
                this._viewContainerRef = n;
              }
            },
            {
              key: 'rootNodes',
              get: function() {
                return ol(this._view, 0, void 0, void 0, (n = [])), n;
                var n;
              }
            },
            {
              key: 'context',
              get: function() {
                return this._view.context;
              }
            },
            {
              key: 'destroyed',
              get: function() {
                return 0 != (128 & this._view.state);
              }
            }
          ]),
          n
        );
      })();
      function Il(n, e) {
        return new Nl(n, e);
      }
      var Nl = (function(n) {
        function e(n, t) {
          var l;
          return (
            _classCallCheck(this, e),
            ((l = _possibleConstructorReturn(this, _getPrototypeOf(e).call(this)))._parentView = n),
            (l._def = t),
            l
          );
        }
        return (
          _inherits(e, n),
          _createClass(e, [
            {
              key: 'createEmbeddedView',
              value: function(n) {
                return new Rl(
                  Lt.createEmbeddedView(this._parentView, this._def, this._def.element.template, n)
                );
              }
            },
            {
              key: 'elementRef',
              get: function() {
                return new tt(Nt(this._parentView, this._def.nodeIndex).renderElement);
              }
            }
          ]),
          e
        );
      })(xt);
      function Vl(n, e) {
        return new Dl(n, e);
      }
      var Dl = (function() {
        function n(e, t) {
          _classCallCheck(this, n), (this.view = e), (this.elDef = t);
        }
        return (
          _createClass(n, [
            {
              key: 'get',
              value: function(n) {
                var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : Te.THROW_IF_NOT_FOUND;
                return Lt.resolveDep(
                  this.view,
                  this.elDef,
                  !!this.elDef && 0 != (33554432 & this.elDef.flags),
                  { flags: 0, token: n, tokenKey: zt(n) },
                  e
                );
              }
            }
          ]),
          n
        );
      })();
      function jl(n, e) {
        var t = n.def.nodes[e];
        if (1 & t.flags) {
          var l = Nt(n, t.nodeIndex);
          return t.element.template ? l.template : l.renderElement;
        }
        if (2 & t.flags) return It(n, t.nodeIndex).renderText;
        if (20240 & t.flags) return Vt(n, t.nodeIndex).instance;
        throw new Error('Illegal state: read nodeValue for node index '.concat(e));
      }
      function Ll(n) {
        return new Ul(n.renderer);
      }
      var Ul = (function() {
        function n(e) {
          _classCallCheck(this, n), (this.delegate = e);
        }
        return (
          _createClass(n, [
            {
              key: 'selectRootElement',
              value: function(n) {
                return this.delegate.selectRootElement(n);
              }
            },
            {
              key: 'createElement',
              value: function(n, e) {
                var t = _slicedToArray(dl(e), 2),
                  l = t[0],
                  r = t[1],
                  i = this.delegate.createElement(r, l);
                return n && this.delegate.appendChild(n, i), i;
              }
            },
            {
              key: 'createViewRoot',
              value: function(n) {
                return n;
              }
            },
            {
              key: 'createTemplateAnchor',
              value: function(n) {
                var e = this.delegate.createComment('');
                return n && this.delegate.appendChild(n, e), e;
              }
            },
            {
              key: 'createText',
              value: function(n, e) {
                var t = this.delegate.createText(e);
                return n && this.delegate.appendChild(n, t), t;
              }
            },
            {
              key: 'projectNodes',
              value: function(n, e) {
                for (var t = 0; t < e.length; t++) this.delegate.appendChild(n, e[t]);
              }
            },
            {
              key: 'attachViewAfter',
              value: function(n, e) {
                for (
                  var t = this.delegate.parentNode(n), l = this.delegate.nextSibling(n), r = 0;
                  r < e.length;
                  r++
                )
                  this.delegate.insertBefore(t, e[r], l);
              }
            },
            {
              key: 'detachView',
              value: function(n) {
                for (var e = 0; e < n.length; e++) {
                  var t = n[e],
                    l = this.delegate.parentNode(t);
                  this.delegate.removeChild(l, t);
                }
              }
            },
            {
              key: 'destroyView',
              value: function(n, e) {
                for (var t = 0; t < e.length; t++) this.delegate.destroyNode(e[t]);
              }
            },
            {
              key: 'listen',
              value: function(n, e, t) {
                return this.delegate.listen(n, e, t);
              }
            },
            {
              key: 'listenGlobal',
              value: function(n, e, t) {
                return this.delegate.listen(n, e, t);
              }
            },
            {
              key: 'setElementProperty',
              value: function(n, e, t) {
                this.delegate.setProperty(n, e, t);
              }
            },
            {
              key: 'setElementAttribute',
              value: function(n, e, t) {
                var l = _slicedToArray(dl(e), 2),
                  r = l[0],
                  i = l[1];
                null != t
                  ? this.delegate.setAttribute(n, i, t, r)
                  : this.delegate.removeAttribute(n, i, r);
              }
            },
            { key: 'setBindingDebugInfo', value: function(n, e, t) {} },
            {
              key: 'setElementClass',
              value: function(n, e, t) {
                t ? this.delegate.addClass(n, e) : this.delegate.removeClass(n, e);
              }
            },
            {
              key: 'setElementStyle',
              value: function(n, e, t) {
                null != t ? this.delegate.setStyle(n, e, t) : this.delegate.removeStyle(n, e);
              }
            },
            {
              key: 'invokeElementMethod',
              value: function(n, e, t) {
                n[e].apply(n, t);
              }
            },
            {
              key: 'setText',
              value: function(n, e) {
                this.delegate.setValue(n, e);
              }
            },
            {
              key: 'animate',
              value: function() {
                throw new Error('Renderer.animate is no longer supported!');
              }
            }
          ]),
          n
        );
      })();
      function Fl(n, e, t, l) {
        return new zl(n, e, t, l);
      }
      var zl = (function() {
          function n(e, t, l, r) {
            _classCallCheck(this, n),
              (this._moduleType = e),
              (this._parent = t),
              (this._bootstrapComponents = l),
              (this._def = r),
              (this._destroyListeners = []),
              (this._destroyed = !1),
              (this.injector = this),
              (function(n) {
                for (
                  var e = n._def, t = (n._providers = new Array(e.providers.length)), l = 0;
                  l < e.providers.length;
                  l++
                ) {
                  var r = e.providers[l];
                  4096 & r.flags || (void 0 === t[l] && (t[l] = kl(n, r)));
                }
              })(this);
          }
          return (
            _createClass(n, [
              {
                key: 'get',
                value: function(n) {
                  var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : Te.THROW_IF_NOT_FOUND,
                    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : dn.Default,
                    l = 0;
                  return (
                    t & dn.SkipSelf ? (l |= 1) : t & dn.Self && (l |= 4),
                    Cl(this, { token: n, tokenKey: zt(n), flags: l }, e)
                  );
                }
              },
              {
                key: 'destroy',
                value: function() {
                  if (this._destroyed)
                    throw new Error(
                      'The ng module '.concat(
                        yn(this.instance.constructor),
                        ' has already been destroyed.'
                      )
                    );
                  (this._destroyed = !0),
                    (function(n, e) {
                      for (var t = n._def, l = new Set(), r = 0; r < t.providers.length; r++)
                        if (131072 & t.providers[r].flags) {
                          var i = n._providers[r];
                          if (i && i !== vl) {
                            var u = i.ngOnDestroy;
                            'function' != typeof u || l.has(i) || (u.apply(i), l.add(i));
                          }
                        }
                    })(this),
                    this._destroyListeners.forEach(function(n) {
                      return n();
                    });
                }
              },
              {
                key: 'onDestroy',
                value: function(n) {
                  this._destroyListeners.push(n);
                }
              },
              {
                key: 'instance',
                get: function() {
                  return this.get(this._moduleType);
                }
              },
              {
                key: 'componentFactoryResolver',
                get: function() {
                  return this.get(Je);
                }
              }
            ]),
            n
          );
        })(),
        Hl = zt(function n() {
          _classCallCheck(this, n);
        }),
        ql = zt(ut),
        Bl = zt(tt),
        Gl = zt(Et),
        Kl = zt(xt),
        Wl = zt(Oe),
        Zl = zt(Te),
        Ql = zt(Tn);
      function Yl(n, e, t, l, r, i, u, o) {
        var a = [];
        if (u)
          for (var s in u) {
            var c = _slicedToArray(u[s], 2),
              h = c[0],
              f = c[1];
            a[h] = {
              flags: 8,
              name: s,
              nonMinifiedName: f,
              ns: null,
              securityContext: null,
              suffix: null
            };
          }
        var d = [];
        if (o) for (var p in o) d.push({ type: 1, propName: p, target: null, eventName: o[p] });
        return Jl(n, (e |= 16384), t, l, r, r, i, a, d);
      }
      function $l(n, e, t, l, r) {
        return Jl(-1, n, e, 0, t, l, r);
      }
      function Jl(n, e, t, l, r, i, u, o, a) {
        var s = tl(t),
          c = s.matchedQueries,
          h = s.references,
          f = s.matchedQueryIds;
        a || (a = []), o || (o = []), (i = bn(i));
        var d = ll(u, yn(r));
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: n,
          flags: e,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: c,
          matchedQueryIds: f,
          references: h,
          ngContentIndex: -1,
          childCount: l,
          bindings: o,
          bindingFlags: pl(o),
          outputs: a,
          element: null,
          provider: { token: r, value: i, deps: d },
          text: null,
          query: null,
          ngContent: null
        };
      }
      function Xl(n, e) {
        return lr(n, e);
      }
      function nr(n, e) {
        for (var t = n; t.parent && !Xt(t); ) t = t.parent;
        return rr(t.parent, $t(t), !0, e.provider.value, e.provider.deps);
      }
      function er(n, e) {
        var t = rr(n, e.parent, (32768 & e.flags) > 0, e.provider.value, e.provider.deps);
        if (e.outputs.length)
          for (var l = 0; l < e.outputs.length; l++) {
            var r = e.outputs[l],
              i = t[r.propName];
            if (!Ke(i))
              throw new Error(
                '@Output '
                  .concat(r.propName, " not initialized in '")
                  .concat(t.constructor.name, "'.")
              );
            var u = i.subscribe(tr(n, e.parent.nodeIndex, r.eventName));
            n.disposables[e.outputIndex + l] = u.unsubscribe.bind(u);
          }
        return t;
      }
      function tr(n, e, t) {
        return function(l) {
          return Qt(n, e, t, l);
        };
      }
      function lr(n, e) {
        var t = (8192 & e.flags) > 0,
          l = e.provider;
        switch (201347067 & e.flags) {
          case 512:
            return rr(n, e.parent, t, l.value, l.deps);
          case 1024:
            return (function(n, e, t, l, r) {
              var i = r.length;
              switch (i) {
                case 0:
                  return l();
                case 1:
                  return l(ur(n, e, t, r[0]));
                case 2:
                  return l(ur(n, e, t, r[0]), ur(n, e, t, r[1]));
                case 3:
                  return l(ur(n, e, t, r[0]), ur(n, e, t, r[1]), ur(n, e, t, r[2]));
                default:
                  for (var u = Array(i), o = 0; o < i; o++) u[o] = ur(n, e, t, r[o]);
                  return l.apply(void 0, u);
              }
            })(n, e.parent, t, l.value, l.deps);
          case 2048:
            return ur(n, e.parent, t, l.deps[0]);
          case 256:
            return l.value;
        }
      }
      function rr(n, e, t, l, r) {
        var i = r.length;
        switch (i) {
          case 0:
            return new l();
          case 1:
            return new l(ur(n, e, t, r[0]));
          case 2:
            return new l(ur(n, e, t, r[0]), ur(n, e, t, r[1]));
          case 3:
            return new l(ur(n, e, t, r[0]), ur(n, e, t, r[1]), ur(n, e, t, r[2]));
          default:
            for (var u = new Array(i), o = 0; o < i; o++) u[o] = ur(n, e, t, r[o]);
            return _construct(l, u);
        }
      }
      var ir = {};
      function ur(n, e, t, l) {
        var r =
          arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Te.THROW_IF_NOT_FOUND;
        if (8 & l.flags) return l.token;
        var i = n;
        2 & l.flags && (r = null);
        var u = l.tokenKey;
        u === Wl && (t = !(!e || !e.element.componentView)),
          e && 1 & l.flags && ((t = !1), (e = e.parent));
        for (var o = n; o; ) {
          if (e)
            switch (u) {
              case Hl:
                return Ll(or(o, e, t));
              case ql:
                return or(o, e, t).renderer;
              case Bl:
                return new tt(Nt(o, e.nodeIndex).renderElement);
              case Gl:
                return Nt(o, e.nodeIndex).viewContainer;
              case Kl:
                if (e.element.template) return Nt(o, e.nodeIndex).template;
                break;
              case Wl:
                return Al(or(o, e, t));
              case Zl:
              case Ql:
                return Vl(o, e);
              default:
                var a = (t ? e.element.allProviders : e.element.publicProviders)[u];
                if (a) {
                  var s = Vt(o, a.nodeIndex);
                  return (
                    s || ((s = { instance: lr(o, a) }), (o.nodes[a.nodeIndex] = s)), s.instance
                  );
                }
            }
          (t = Xt(o)), (e = $t(o)), (o = o.parent), 4 & l.flags && (o = null);
        }
        var c = i.root.injector.get(l.token, ir);
        return c !== ir || r === ir ? c : i.root.ngModule.injector.get(l.token, r);
      }
      function or(n, e, t) {
        var l;
        if (t) l = Nt(n, e.nodeIndex).componentView;
        else for (l = n; l.parent && !Xt(l); ) l = l.parent;
        return l;
      }
      function ar(n, e, t, l, r, i) {
        if (32768 & t.flags) {
          var u = Nt(n, t.parent.nodeIndex).componentView;
          2 & u.def.flags && (u.state |= 8);
        }
        if (((e.instance[t.bindings[l].name] = r), 524288 & t.flags)) {
          i = i || {};
          var o = He.unwrap(n.oldValues[t.bindingIndex + l]);
          i[t.bindings[l].nonMinifiedName] = new We(o, r, 0 != (2 & n.state));
        }
        return (n.oldValues[t.bindingIndex + l] = r), i;
      }
      function sr(n, e) {
        if (n.def.nodeFlags & e)
          for (var t = n.def.nodes, l = 0, r = 0; r < t.length; r++) {
            var i = t[r],
              u = i.parent;
            for (
              !u && i.flags & e && hr(n, r, i.flags & e, l++),
                0 == (i.childFlags & e) && (r += i.childCount);
              u && 1 & u.flags && r === u.nodeIndex + u.childCount;

            )
              u.directChildFlags & e && (l = cr(n, u, e, l)), (u = u.parent);
          }
      }
      function cr(n, e, t, l) {
        for (var r = e.nodeIndex + 1; r <= e.nodeIndex + e.childCount; r++) {
          var i = n.def.nodes[r];
          i.flags & t && hr(n, r, i.flags & t, l++), (r += i.childCount);
        }
        return l;
      }
      function hr(n, e, t, l) {
        var r = Vt(n, e);
        if (r) {
          var i = r.instance;
          i &&
            (Lt.setCurrentNode(n, e),
            1048576 & t && Rt(n, 512, l) && i.ngAfterContentInit(),
            2097152 & t && i.ngAfterContentChecked(),
            4194304 & t && Rt(n, 768, l) && i.ngAfterViewInit(),
            8388608 & t && i.ngAfterViewChecked(),
            131072 & t && i.ngOnDestroy());
        }
      }
      var fr = new Sn('SCHEDULER_TOKEN', {
          providedIn: 'root',
          factory: function() {
            return Bn;
          }
        }),
        dr = {},
        pr = (function() {
          var n = {
            LocaleId: 0,
            DayPeriodsFormat: 1,
            DayPeriodsStandalone: 2,
            DaysFormat: 3,
            DaysStandalone: 4,
            MonthsFormat: 5,
            MonthsStandalone: 6,
            Eras: 7,
            FirstDayOfWeek: 8,
            WeekendRange: 9,
            DateFormat: 10,
            TimeFormat: 11,
            DateTimeFormat: 12,
            NumberSymbols: 13,
            NumberFormats: 14,
            CurrencySymbol: 15,
            CurrencyName: 16,
            Currencies: 17,
            PluralCase: 18,
            ExtraData: 19
          };
          return (
            (n[n.LocaleId] = 'LocaleId'),
            (n[n.DayPeriodsFormat] = 'DayPeriodsFormat'),
            (n[n.DayPeriodsStandalone] = 'DayPeriodsStandalone'),
            (n[n.DaysFormat] = 'DaysFormat'),
            (n[n.DaysStandalone] = 'DaysStandalone'),
            (n[n.MonthsFormat] = 'MonthsFormat'),
            (n[n.MonthsStandalone] = 'MonthsStandalone'),
            (n[n.Eras] = 'Eras'),
            (n[n.FirstDayOfWeek] = 'FirstDayOfWeek'),
            (n[n.WeekendRange] = 'WeekendRange'),
            (n[n.DateFormat] = 'DateFormat'),
            (n[n.TimeFormat] = 'TimeFormat'),
            (n[n.DateTimeFormat] = 'DateTimeFormat'),
            (n[n.NumberSymbols] = 'NumberSymbols'),
            (n[n.NumberFormats] = 'NumberFormats'),
            (n[n.CurrencySymbol] = 'CurrencySymbol'),
            (n[n.CurrencyName] = 'CurrencyName'),
            (n[n.Currencies] = 'Currencies'),
            (n[n.PluralCase] = 'PluralCase'),
            (n[n.ExtraData] = 'ExtraData'),
            n
          );
        })(),
        vr = void 0,
        gr = [
          'en',
          [['a', 'p'], ['AM', 'PM'], vr],
          [['AM', 'PM'], vr, vr],
          [
            ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
          ],
          vr,
          [
            ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
            ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December'
            ]
          ],
          vr,
          [
            ['B', 'A'],
            ['BC', 'AD'],
            ['Before Christ', 'Anno Domini']
          ],
          0,
          [6, 0],
          ['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
          ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
          ['{1}, {0}', vr, "{1} 'at' {0}", vr],
          ['.', ',', ';', '%', '+', '-', 'E', '\xd7', '\u2030', '\u221e', 'NaN', ':'],
          ['#,##0.###', '#,##0%', '\xa4#,##0.00', '#E0'],
          '$',
          'US Dollar',
          {},
          function(n) {
            var e = Math.floor(Math.abs(n)),
              t = n.toString().replace(/^[^.]*\.?/, '').length;
            return 1 === e && 0 === t ? 1 : 5;
          }
        ],
        _r = (function(n) {
          function e() {
            var n,
              t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return (
              _classCallCheck(this, e),
              ((n = _possibleConstructorReturn(this, _getPrototypeOf(e).call(this))).__isAsync = t),
              n
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: 'emit',
                value: function(n) {
                  _get(_getPrototypeOf(e.prototype), 'next', this).call(this, n);
                }
              },
              {
                key: 'subscribe',
                value: function(n, t, l) {
                  var r,
                    i = function(n) {
                      return null;
                    },
                    u = function() {
                      return null;
                    };
                  n && 'object' == typeof n
                    ? ((r = this.__isAsync
                        ? function(e) {
                            setTimeout(function() {
                              return n.next(e);
                            });
                          }
                        : function(e) {
                            n.next(e);
                          }),
                      n.error &&
                        (i = this.__isAsync
                          ? function(e) {
                              setTimeout(function() {
                                return n.error(e);
                              });
                            }
                          : function(e) {
                              n.error(e);
                            }),
                      n.complete &&
                        (u = this.__isAsync
                          ? function() {
                              setTimeout(function() {
                                return n.complete();
                              });
                            }
                          : function() {
                              n.complete();
                            }))
                    : ((r = this.__isAsync
                        ? function(e) {
                            setTimeout(function() {
                              return n(e);
                            });
                          }
                        : function(e) {
                            n(e);
                          }),
                      t &&
                        (i = this.__isAsync
                          ? function(n) {
                              setTimeout(function() {
                                return t(n);
                              });
                            }
                          : function(n) {
                              t(n);
                            }),
                      l &&
                        (u = this.__isAsync
                          ? function() {
                              setTimeout(function() {
                                return l();
                              });
                            }
                          : function() {
                              l();
                            }));
                  var o = _get(_getPrototypeOf(e.prototype), 'subscribe', this).call(this, r, i, u);
                  return n instanceof d && n.add(o), o;
                }
              }
            ]),
            e
          );
        })(M);
      function mr() {
        return this._results[Ue()]();
      }
      var yr = (function() {
          function n() {
            _classCallCheck(this, n),
              (this.dirty = !0),
              (this._results = []),
              (this.changes = new _r()),
              (this.length = 0);
            var e = Ue(),
              t = n.prototype;
            t[e] || (t[e] = mr);
          }
          return (
            _createClass(n, [
              {
                key: 'map',
                value: function(n) {
                  return this._results.map(n);
                }
              },
              {
                key: 'filter',
                value: function(n) {
                  return this._results.filter(n);
                }
              },
              {
                key: 'find',
                value: function(n) {
                  return this._results.find(n);
                }
              },
              {
                key: 'reduce',
                value: function(n, e) {
                  return this._results.reduce(n, e);
                }
              },
              {
                key: 'forEach',
                value: function(n) {
                  this._results.forEach(n);
                }
              },
              {
                key: 'some',
                value: function(n) {
                  return this._results.some(n);
                }
              },
              {
                key: 'toArray',
                value: function() {
                  return this._results.slice();
                }
              },
              {
                key: 'toString',
                value: function() {
                  return this._results.toString();
                }
              },
              {
                key: 'reset',
                value: function(n) {
                  (this._results = (function n(e, t) {
                    void 0 === t && (t = e);
                    for (var l = 0; l < e.length; l++) {
                      var r = e[l];
                      Array.isArray(r)
                        ? (t === e && (t = e.slice(0, l)), n(r, t))
                        : t !== e && t.push(r);
                    }
                    return t;
                  })(n)),
                    (this.dirty = !1),
                    (this.length = this._results.length),
                    (this.last = this._results[this.length - 1]),
                    (this.first = this._results[0]);
                }
              },
              {
                key: 'notifyOnChanges',
                value: function() {
                  this.changes.emit(this);
                }
              },
              {
                key: 'setDirty',
                value: function() {
                  this.dirty = !0;
                }
              },
              {
                key: 'destroy',
                value: function() {
                  this.changes.complete(), this.changes.unsubscribe();
                }
              }
            ]),
            n
          );
        })(),
        Cr = new Sn('Application Initializer'),
        kr = (function() {
          function n(e) {
            var t = this;
            _classCallCheck(this, n),
              (this.appInits = e),
              (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise(function(n, e) {
                (t.resolve = n), (t.reject = e);
              }));
          }
          return (
            _createClass(n, [
              {
                key: 'runInitializers',
                value: function() {
                  var n = this;
                  if (!this.initialized) {
                    var e = [],
                      t = function() {
                        (n.done = !0), n.resolve();
                      };
                    if (this.appInits)
                      for (var l = 0; l < this.appInits.length; l++) {
                        var r = this.appInits[l]();
                        Ge(r) && e.push(r);
                      }
                    Promise.all(e)
                      .then(function() {
                        t();
                      })
                      .catch(function(e) {
                        n.reject(e);
                      }),
                      0 === e.length && t(),
                      (this.initialized = !0);
                  }
                }
              }
            ]),
            n
          );
        })(),
        br = new Sn('AppId');
      function wr() {
        return ''
          .concat(xr())
          .concat(xr())
          .concat(xr());
      }
      function xr() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      var Or = new Sn('Platform Initializer'),
        Er = new Sn('Platform ID'),
        Pr = new Sn('appBootstrapListener'),
        Sr = (function() {
          function n() {
            _classCallCheck(this, n);
          }
          return (
            _createClass(n, [
              {
                key: 'log',
                value: function(n) {
                  console.log(n);
                }
              },
              {
                key: 'warn',
                value: function(n) {
                  console.warn(n);
                }
              }
            ]),
            n
          );
        })(),
        Tr = new Sn('LocaleId');
      function Mr() {
        throw new Error('Runtime compiler is not loaded');
      }
      var Ar,
        Rr,
        Ir = Mr,
        Nr = Mr,
        Vr = Mr,
        Dr = Mr,
        jr = (function() {
          function n() {
            _classCallCheck(this, n),
              (this.compileModuleSync = Ir),
              (this.compileModuleAsync = Nr),
              (this.compileModuleAndAllComponentsSync = Vr),
              (this.compileModuleAndAllComponentsAsync = Dr);
          }
          return (
            _createClass(n, [
              { key: 'clearCache', value: function() {} },
              { key: 'clearCacheFor', value: function(n) {} },
              { key: 'getModuleId', value: function(n) {} }
            ]),
            n
          );
        })(),
        Lr = function n() {
          _classCallCheck(this, n);
        };
      var Ur,
        Fr = !(!(Ur = Pn.wtf) || ((Ar = Ur.trace), !Ar) || ((Rr = Ar.events), 0));
      function zr(n, e) {
        return null;
      }
      var Hr = Fr
          ? function(n) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
              return Rr.createScope(n, e);
            }
          : function(n, e) {
              return zr;
            },
        qr = Fr
          ? function(n, e) {
              return Ar.leaveScope(n, e), e;
            }
          : function(n, e) {
              return e;
            },
        Br = Promise.resolve(0);
      function Gr(n) {
        'undefined' == typeof Zone
          ? Br.then(function() {
              n && n.apply(null, null);
            })
          : Zone.current.scheduleMicroTask('scheduleMicrotask', n);
      }
      var Kr = (function() {
        function n(e) {
          var t,
            l = e.enableLongStackTrace,
            r = void 0 !== l && l;
          if (
            (_classCallCheck(this, n),
            (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new _r(!1)),
            (this.onMicrotaskEmpty = new _r(!1)),
            (this.onStable = new _r(!1)),
            (this.onError = new _r(!1)),
            'undefined' == typeof Zone)
          )
            throw new Error('In this configuration Angular requires Zone.js');
          Zone.assertZonePatched(),
            (this._nesting = 0),
            (this._outer = this._inner = Zone.current),
            Zone.wtfZoneSpec && (this._inner = this._inner.fork(Zone.wtfZoneSpec)),
            Zone.TaskTrackingZoneSpec &&
              (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec())),
            r &&
              Zone.longStackTraceZoneSpec &&
              (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)),
            ((t = this)._inner = t._inner.fork({
              name: 'angular',
              properties: { isAngularZone: !0 },
              onInvokeTask: function(n, e, l, r, i, u) {
                try {
                  return Yr(t), n.invokeTask(l, r, i, u);
                } finally {
                  $r(t);
                }
              },
              onInvoke: function(n, e, l, r, i, u, o) {
                try {
                  return Yr(t), n.invoke(l, r, i, u, o);
                } finally {
                  $r(t);
                }
              },
              onHasTask: function(n, e, l, r) {
                n.hasTask(l, r),
                  e === l &&
                    ('microTask' == r.change
                      ? ((t.hasPendingMicrotasks = r.microTask), Qr(t))
                      : 'macroTask' == r.change && (t.hasPendingMacrotasks = r.macroTask));
              },
              onHandleError: function(n, e, l, r) {
                return (
                  n.handleError(l, r),
                  t.runOutsideAngular(function() {
                    return t.onError.emit(r);
                  }),
                  !1
                );
              }
            }));
        }
        return (
          _createClass(
            n,
            [
              {
                key: 'run',
                value: function(n, e, t) {
                  return this._inner.run(n, e, t);
                }
              },
              {
                key: 'runTask',
                value: function(n, e, t, l) {
                  var r = this._inner,
                    i = r.scheduleEventTask('NgZoneEvent: ' + l, n, Zr, Wr, Wr);
                  try {
                    return r.runTask(i, e, t);
                  } finally {
                    r.cancelTask(i);
                  }
                }
              },
              {
                key: 'runGuarded',
                value: function(n, e, t) {
                  return this._inner.runGuarded(n, e, t);
                }
              },
              {
                key: 'runOutsideAngular',
                value: function(n) {
                  return this._outer.run(n);
                }
              }
            ],
            [
              {
                key: 'isInAngularZone',
                value: function() {
                  return !0 === Zone.current.get('isAngularZone');
                }
              },
              {
                key: 'assertInAngularZone',
                value: function() {
                  if (!n.isInAngularZone())
                    throw new Error('Expected to be in Angular Zone, but it is not!');
                }
              },
              {
                key: 'assertNotInAngularZone',
                value: function() {
                  if (n.isInAngularZone())
                    throw new Error('Expected to not be in Angular Zone, but it is!');
                }
              }
            ]
          ),
          n
        );
      })();
      function Wr() {}
      var Zr = {};
      function Qr(n) {
        if (0 == n._nesting && !n.hasPendingMicrotasks && !n.isStable)
          try {
            n._nesting++, n.onMicrotaskEmpty.emit(null);
          } finally {
            if ((n._nesting--, !n.hasPendingMicrotasks))
              try {
                n.runOutsideAngular(function() {
                  return n.onStable.emit(null);
                });
              } finally {
                n.isStable = !0;
              }
          }
      }
      function Yr(n) {
        n._nesting++, n.isStable && ((n.isStable = !1), n.onUnstable.emit(null));
      }
      function $r(n) {
        n._nesting--, Qr(n);
      }
      var Jr,
        Xr = (function() {
          function n() {
            _classCallCheck(this, n),
              (this.hasPendingMicrotasks = !1),
              (this.hasPendingMacrotasks = !1),
              (this.isStable = !0),
              (this.onUnstable = new _r()),
              (this.onMicrotaskEmpty = new _r()),
              (this.onStable = new _r()),
              (this.onError = new _r());
          }
          return (
            _createClass(n, [
              {
                key: 'run',
                value: function(n) {
                  return n();
                }
              },
              {
                key: 'runGuarded',
                value: function(n) {
                  return n();
                }
              },
              {
                key: 'runOutsideAngular',
                value: function(n) {
                  return n();
                }
              },
              {
                key: 'runTask',
                value: function(n) {
                  return n();
                }
              }
            ]),
            n
          );
        })(),
        ni = (function() {
          function n(e) {
            var t = this;
            _classCallCheck(this, n),
              (this._ngZone = e),
              (this._pendingCount = 0),
              (this._isZoneStable = !0),
              (this._didWork = !1),
              (this._callbacks = []),
              (this.taskTrackingZone = null),
              this._watchAngularEvents(),
              e.run(function() {
                t.taskTrackingZone =
                  'undefined' == typeof Zone ? null : Zone.current.get('TaskTrackingZone');
              });
          }
          return (
            _createClass(n, [
              {
                key: '_watchAngularEvents',
                value: function() {
                  var n = this;
                  this._ngZone.onUnstable.subscribe({
                    next: function() {
                      (n._didWork = !0), (n._isZoneStable = !1);
                    }
                  }),
                    this._ngZone.runOutsideAngular(function() {
                      n._ngZone.onStable.subscribe({
                        next: function() {
                          Kr.assertNotInAngularZone(),
                            Gr(function() {
                              (n._isZoneStable = !0), n._runCallbacksIfReady();
                            });
                        }
                      });
                    });
                }
              },
              {
                key: 'increasePendingRequestCount',
                value: function() {
                  return (this._pendingCount += 1), (this._didWork = !0), this._pendingCount;
                }
              },
              {
                key: 'decreasePendingRequestCount',
                value: function() {
                  if (((this._pendingCount -= 1), this._pendingCount < 0))
                    throw new Error('pending async requests below zero');
                  return this._runCallbacksIfReady(), this._pendingCount;
                }
              },
              {
                key: 'isStable',
                value: function() {
                  return (
                    this._isZoneStable &&
                    0 === this._pendingCount &&
                    !this._ngZone.hasPendingMacrotasks
                  );
                }
              },
              {
                key: '_runCallbacksIfReady',
                value: function() {
                  var n = this;
                  if (this.isStable())
                    Gr(function() {
                      for (; 0 !== n._callbacks.length; ) {
                        var e = n._callbacks.pop();
                        clearTimeout(e.timeoutId), e.doneCb(n._didWork);
                      }
                      n._didWork = !1;
                    });
                  else {
                    var e = this.getPendingTasks();
                    (this._callbacks = this._callbacks.filter(function(n) {
                      return !n.updateCb || !n.updateCb(e) || (clearTimeout(n.timeoutId), !1);
                    })),
                      (this._didWork = !0);
                  }
                }
              },
              {
                key: 'getPendingTasks',
                value: function() {
                  return this.taskTrackingZone
                    ? this.taskTrackingZone.macroTasks.map(function(n) {
                        return {
                          source: n.source,
                          creationLocation: n.creationLocation,
                          data: n.data
                        };
                      })
                    : [];
                }
              },
              {
                key: 'addCallback',
                value: function(n, e, t) {
                  var l = this,
                    r = -1;
                  e &&
                    e > 0 &&
                    (r = setTimeout(function() {
                      (l._callbacks = l._callbacks.filter(function(n) {
                        return n.timeoutId !== r;
                      })),
                        n(l._didWork, l.getPendingTasks());
                    }, e)),
                    this._callbacks.push({ doneCb: n, timeoutId: r, updateCb: t });
                }
              },
              {
                key: 'whenStable',
                value: function(n, e, t) {
                  if (t && !this.taskTrackingZone)
                    throw new Error(
                      'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?'
                    );
                  this.addCallback(n, e, t), this._runCallbacksIfReady();
                }
              },
              {
                key: 'getPendingRequestCount',
                value: function() {
                  return this._pendingCount;
                }
              },
              {
                key: 'findProviders',
                value: function(n, e, t) {
                  return [];
                }
              }
            ]),
            n
          );
        })(),
        ei = (function() {
          function n() {
            _classCallCheck(this, n), (this._applications = new Map()), ti.addToWindow(this);
          }
          return (
            _createClass(n, [
              {
                key: 'registerApplication',
                value: function(n, e) {
                  this._applications.set(n, e);
                }
              },
              {
                key: 'unregisterApplication',
                value: function(n) {
                  this._applications.delete(n);
                }
              },
              {
                key: 'unregisterAllApplications',
                value: function() {
                  this._applications.clear();
                }
              },
              {
                key: 'getTestability',
                value: function(n) {
                  return this._applications.get(n) || null;
                }
              },
              {
                key: 'getAllTestabilities',
                value: function() {
                  return Array.from(this._applications.values());
                }
              },
              {
                key: 'getAllRootElements',
                value: function() {
                  return Array.from(this._applications.keys());
                }
              },
              {
                key: 'findTestabilityInTree',
                value: function(n) {
                  var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                  return ti.findTestabilityInTree(this, n, e);
                }
              }
            ]),
            n
          );
        })(),
        ti = new ((function() {
          function n() {
            _classCallCheck(this, n);
          }
          return (
            _createClass(n, [
              { key: 'addToWindow', value: function(n) {} },
              {
                key: 'findTestabilityInTree',
                value: function(n, e, t) {
                  return null;
                }
              }
            ]),
            n
          );
        })())(),
        li = new Sn('AllowMultipleToken'),
        ri = function n(e, t) {
          _classCallCheck(this, n), (this.name = e), (this.token = t);
        };
      function ii(n, e) {
        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          l = 'Platform: '.concat(e),
          r = new Sn(l);
        return function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            i = ui();
          if (!i || i.injector.get(li, !1))
            if (n) n(t.concat(e).concat({ provide: r, useValue: !0 }));
            else {
              var u = t.concat(e).concat({ provide: r, useValue: !0 });
              !(function(n) {
                if (Jr && !Jr.destroyed && !Jr.injector.get(li, !1))
                  throw new Error(
                    'There can be only one platform. Destroy the previous one to create a new one.'
                  );
                Jr = n.get(oi);
                var e = n.get(Or, null);
                e &&
                  e.forEach(function(n) {
                    return n();
                  });
              })(Te.create({ providers: u, name: l }));
            }
          return (function(n) {
            var e = ui();
            if (!e) throw new Error('No platform exists!');
            if (!e.injector.get(n, null))
              throw new Error(
                'A platform with a different configuration has been created. Please destroy it first.'
              );
            return e;
          })(r);
        };
      }
      function ui() {
        return Jr && !Jr.destroyed ? Jr : null;
      }
      var oi = (function() {
        function n(e) {
          _classCallCheck(this, n),
            (this._injector = e),
            (this._modules = []),
            (this._destroyListeners = []),
            (this._destroyed = !1);
        }
        return (
          _createClass(n, [
            {
              key: 'bootstrapModuleFactory',
              value: function(n, e) {
                var t,
                  l = this,
                  r =
                    'noop' === (t = e ? e.ngZone : void 0)
                      ? new Xr()
                      : ('zone.js' === t ? void 0 : t) || new Kr({ enableLongStackTrace: $n() }),
                  i = [{ provide: Kr, useValue: r }];
                return r.run(function() {
                  var e = Te.create({ providers: i, parent: l.injector, name: n.moduleType.name }),
                    t = n.create(e),
                    u = t.injector.get(Zn, null);
                  if (!u)
                    throw new Error(
                      'No ErrorHandler. Is platform module (BrowserModule) included?'
                    );
                  return (
                    t.onDestroy(function() {
                      return hi(l._modules, t);
                    }),
                    r.runOutsideAngular(function() {
                      return r.onError.subscribe({
                        next: function(n) {
                          u.handleError(n);
                        }
                      });
                    }),
                    (function(n, e, r) {
                      try {
                        var i =
                          ((u = t.injector.get(kr)).runInitializers(),
                          u.donePromise.then(function() {
                            return l._moduleDoBootstrap(t), t;
                          }));
                        return Ge(i)
                          ? i.catch(function(t) {
                              throw (e.runOutsideAngular(function() {
                                return n.handleError(t);
                              }),
                              t);
                            })
                          : i;
                      } catch (o) {
                        throw (e.runOutsideAngular(function() {
                          return n.handleError(o);
                        }),
                        o);
                      }
                      var u;
                    })(u, r)
                  );
                });
              }
            },
            {
              key: 'bootstrapModule',
              value: function(n) {
                var e = this,
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                  l = ai({}, t);
                return (function(n, e, t) {
                  return n
                    .get(Lr)
                    .createCompiler([e])
                    .compileModuleAsync(t);
                })(this.injector, l, n).then(function(n) {
                  return e.bootstrapModuleFactory(n, l);
                });
              }
            },
            {
              key: '_moduleDoBootstrap',
              value: function(n) {
                var e = n.injector.get(ci);
                if (n._bootstrapComponents.length > 0)
                  n._bootstrapComponents.forEach(function(n) {
                    return e.bootstrap(n);
                  });
                else {
                  if (!n.instance.ngDoBootstrap)
                    throw new Error(
                      'The module '.concat(
                        yn(n.instance.constructor),
                        ' was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. '
                      ) + 'Please define one of these.'
                    );
                  n.instance.ngDoBootstrap(e);
                }
                this._modules.push(n);
              }
            },
            {
              key: 'onDestroy',
              value: function(n) {
                this._destroyListeners.push(n);
              }
            },
            {
              key: 'destroy',
              value: function() {
                if (this._destroyed) throw new Error('The platform has already been destroyed!');
                this._modules.slice().forEach(function(n) {
                  return n.destroy();
                }),
                  this._destroyListeners.forEach(function(n) {
                    return n();
                  }),
                  (this._destroyed = !0);
              }
            },
            {
              key: 'injector',
              get: function() {
                return this._injector;
              }
            },
            {
              key: 'destroyed',
              get: function() {
                return this._destroyed;
              }
            }
          ]),
          n
        );
      })();
      function ai(n, e) {
        return Array.isArray(e) ? e.reduce(ai, n) : Object.assign({}, n, e);
      }
      var si,
        ci =
          (((si = (function() {
            function n(e, t, l, r, i, u) {
              var o = this;
              _classCallCheck(this, n),
                (this._zone = e),
                (this._console = t),
                (this._injector = l),
                (this._exceptionHandler = r),
                (this._componentFactoryResolver = i),
                (this._initStatus = u),
                (this._bootstrapListeners = []),
                (this._views = []),
                (this._runningTick = !1),
                (this._enforceNoNewChanges = !1),
                (this._stable = !0),
                (this.componentTypes = []),
                (this.components = []),
                (this._enforceNoNewChanges = $n()),
                this._zone.onMicrotaskEmpty.subscribe({
                  next: function() {
                    o._zone.run(function() {
                      o.tick();
                    });
                  }
                });
              var a = new w(function(n) {
                  (o._stable =
                    o._zone.isStable &&
                    !o._zone.hasPendingMacrotasks &&
                    !o._zone.hasPendingMicrotasks),
                    o._zone.runOutsideAngular(function() {
                      n.next(o._stable), n.complete();
                    });
                }),
                s = new w(function(n) {
                  var e;
                  o._zone.runOutsideAngular(function() {
                    e = o._zone.onStable.subscribe(function() {
                      Kr.assertNotInAngularZone(),
                        Gr(function() {
                          o._stable ||
                            o._zone.hasPendingMacrotasks ||
                            o._zone.hasPendingMicrotasks ||
                            ((o._stable = !0), n.next(!0));
                        });
                    });
                  });
                  var t = o._zone.onUnstable.subscribe(function() {
                    Kr.assertInAngularZone(),
                      o._stable &&
                        ((o._stable = !1),
                        o._zone.runOutsideAngular(function() {
                          n.next(!1);
                        }));
                  });
                  return function() {
                    e.unsubscribe(), t.unsubscribe();
                  };
                });
              this.isStable = (function() {
                for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
                  e[t] = arguments[t];
                var l = Number.POSITIVE_INFINITY,
                  r = null,
                  i = e[e.length - 1];
                return (
                  R(i)
                    ? ((r = e.pop()),
                      e.length > 1 && 'number' == typeof e[e.length - 1] && (l = e.pop()))
                    : 'number' == typeof i && (l = e.pop()),
                  null === r && 1 === e.length && e[0] instanceof w ? e[0] : X(l)(W(e, r))
                );
              })(
                a,
                s.pipe(function(n) {
                  return nn()(
                    ((e = on),
                    function(n) {
                      var t;
                      t =
                        'function' == typeof e
                          ? e
                          : function() {
                              return e;
                            };
                      var l = Object.create(n, rn);
                      return (l.source = n), (l.subjectFactory = t), l;
                    })(n)
                  );
                  var e;
                })
              );
            }
            return (
              _createClass(n, [
                {
                  key: 'bootstrap',
                  value: function(n, e) {
                    var t,
                      l = this;
                    if (!this._initStatus.done)
                      throw new Error(
                        'Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.'
                      );
                    (t =
                      n instanceof Ze
                        ? n
                        : this._componentFactoryResolver.resolveComponentFactory(n)),
                      this.componentTypes.push(t.componentType);
                    var r = t instanceof nt ? null : this._injector.get(Un),
                      i = t.create(Te.NULL, [], e || t.selector, r);
                    i.onDestroy(function() {
                      l._unloadComponent(i);
                    });
                    var u = i.injector.get(ni, null);
                    return (
                      u && i.injector.get(ei).registerApplication(i.location.nativeElement, u),
                      this._loadComponent(i),
                      $n() &&
                        this._console.log(
                          'Angular is running in the development mode. Call enableProdMode() to enable the production mode.'
                        ),
                      i
                    );
                  }
                },
                {
                  key: 'tick',
                  value: function() {
                    var e = this;
                    if (this._runningTick)
                      throw new Error('ApplicationRef.tick is called recursively');
                    var t = n._tickScope();
                    try {
                      this._runningTick = !0;
                      var l = !0,
                        r = !1,
                        i = void 0;
                      try {
                        for (
                          var u, o = this._views[Symbol.iterator]();
                          !(l = (u = o.next()).done);
                          l = !0
                        )
                          u.value.detectChanges();
                      } catch (d) {
                        (r = !0), (i = d);
                      } finally {
                        try {
                          l || null == o.return || o.return();
                        } finally {
                          if (r) throw i;
                        }
                      }
                      if (this._enforceNoNewChanges) {
                        var a = !0,
                          s = !1,
                          c = void 0;
                        try {
                          for (
                            var h, f = this._views[Symbol.iterator]();
                            !(a = (h = f.next()).done);
                            a = !0
                          )
                            h.value.checkNoChanges();
                        } catch (d) {
                          (s = !0), (c = d);
                        } finally {
                          try {
                            a || null == f.return || f.return();
                          } finally {
                            if (s) throw c;
                          }
                        }
                      }
                    } catch (p) {
                      this._zone.runOutsideAngular(function() {
                        return e._exceptionHandler.handleError(p);
                      });
                    } finally {
                      (this._runningTick = !1), qr(t);
                    }
                  }
                },
                {
                  key: 'attachView',
                  value: function(n) {
                    var e = n;
                    this._views.push(e), e.attachToAppRef(this);
                  }
                },
                {
                  key: 'detachView',
                  value: function(n) {
                    var e = n;
                    hi(this._views, e), e.detachFromAppRef();
                  }
                },
                {
                  key: '_loadComponent',
                  value: function(n) {
                    this.attachView(n.hostView),
                      this.tick(),
                      this.components.push(n),
                      this._injector
                        .get(Pr, [])
                        .concat(this._bootstrapListeners)
                        .forEach(function(e) {
                          return e(n);
                        });
                  }
                },
                {
                  key: '_unloadComponent',
                  value: function(n) {
                    this.detachView(n.hostView), hi(this.components, n);
                  }
                },
                {
                  key: 'ngOnDestroy',
                  value: function() {
                    this._views.slice().forEach(function(n) {
                      return n.destroy();
                    });
                  }
                },
                {
                  key: 'viewCount',
                  get: function() {
                    return this._views.length;
                  }
                }
              ]),
              n
            );
          })())._tickScope = Hr('ApplicationRef#tick()')),
          si);
      function hi(n, e) {
        var t = n.indexOf(e);
        t > -1 && n.splice(t, 1);
      }
      var fi = function n() {
          _classCallCheck(this, n);
        },
        di = function n() {
          _classCallCheck(this, n);
        },
        pi = { factoryPathPrefix: '', factoryPathSuffix: '.ngfactory' },
        vi = (function() {
          function n(e, t) {
            _classCallCheck(this, n), (this._compiler = e), (this._config = t || pi);
          }
          return (
            _createClass(n, [
              {
                key: 'load',
                value: function(n) {
                  return this._compiler instanceof jr
                    ? this.loadFactory(n)
                    : this.loadAndCompile(n);
                }
              },
              {
                key: 'loadAndCompile',
                value: function(n) {
                  var e = this,
                    l = _slicedToArray(n.split('#'), 2),
                    r = l[0],
                    i = l[1];
                  return (
                    void 0 === i && (i = 'default'),
                    t('zn8P')(r)
                      .then(function(n) {
                        return n[i];
                      })
                      .then(function(n) {
                        return gi(n, r, i);
                      })
                      .then(function(n) {
                        return e._compiler.compileModuleAsync(n);
                      })
                  );
                }
              },
              {
                key: 'loadFactory',
                value: function(n) {
                  var e = _slicedToArray(n.split('#'), 2),
                    l = e[0],
                    r = e[1],
                    i = 'NgFactory';
                  return (
                    void 0 === r && ((r = 'default'), (i = '')),
                    t('zn8P')(this._config.factoryPathPrefix + l + this._config.factoryPathSuffix)
                      .then(function(n) {
                        return n[r + i];
                      })
                      .then(function(n) {
                        return gi(n, l, r);
                      })
                  );
                }
              }
            ]),
            n
          );
        })();
      function gi(n, e, t) {
        if (!n) throw new Error("Cannot find '".concat(t, "' in '").concat(e, "'"));
        return n;
      }
      var _i = function n(e, t) {
          _classCallCheck(this, n), (this.name = e), (this.callback = t);
        },
        mi = (function() {
          function n(e, t, l) {
            _classCallCheck(this, n),
              (this.listeners = []),
              (this.parent = null),
              (this._debugContext = l),
              (this.nativeNode = e),
              t && t instanceof yi && t.addChild(this);
          }
          return (
            _createClass(n, [
              {
                key: 'injector',
                get: function() {
                  return this._debugContext.injector;
                }
              },
              {
                key: 'componentInstance',
                get: function() {
                  return this._debugContext.component;
                }
              },
              {
                key: 'context',
                get: function() {
                  return this._debugContext.context;
                }
              },
              {
                key: 'references',
                get: function() {
                  return this._debugContext.references;
                }
              },
              {
                key: 'providerTokens',
                get: function() {
                  return this._debugContext.providerTokens;
                }
              }
            ]),
            n
          );
        })(),
        yi = (function(n) {
          function e(n, t, l) {
            var r;
            return (
              _classCallCheck(this, e),
              ((r = _possibleConstructorReturn(
                this,
                _getPrototypeOf(e).call(this, n, t, l)
              )).properties = {}),
              (r.attributes = {}),
              (r.classes = {}),
              (r.styles = {}),
              (r.childNodes = []),
              (r.nativeElement = n),
              r
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: 'addChild',
                value: function(n) {
                  n && (this.childNodes.push(n), (n.parent = this));
                }
              },
              {
                key: 'removeChild',
                value: function(n) {
                  var e = this.childNodes.indexOf(n);
                  -1 !== e && ((n.parent = null), this.childNodes.splice(e, 1));
                }
              },
              {
                key: 'insertChildrenAfter',
                value: function(n, e) {
                  var t,
                    l = this,
                    r = this.childNodes.indexOf(n);
                  -1 !== r &&
                    ((t = this.childNodes).splice.apply(
                      t,
                      [r + 1, 0].concat(_toConsumableArray(e))
                    ),
                    e.forEach(function(e) {
                      e.parent && e.parent.removeChild(e), (n.parent = l);
                    }));
                }
              },
              {
                key: 'insertBefore',
                value: function(n, e) {
                  var t = this.childNodes.indexOf(n);
                  -1 === t
                    ? this.addChild(e)
                    : (e.parent && e.parent.removeChild(e),
                      (e.parent = this),
                      this.childNodes.splice(t, 0, e));
                }
              },
              {
                key: 'query',
                value: function(n) {
                  return this.queryAll(n)[0] || null;
                }
              },
              {
                key: 'queryAll',
                value: function(n) {
                  var t = [];
                  return (
                    (function n(t, l, r) {
                      t.childNodes.forEach(function(t) {
                        t instanceof e && (l(t) && r.push(t), n(t, l, r));
                      });
                    })(this, n, t),
                    t
                  );
                }
              },
              {
                key: 'queryAllNodes',
                value: function(n) {
                  var t = [];
                  return (
                    (function n(t, l, r) {
                      t instanceof e &&
                        t.childNodes.forEach(function(t) {
                          l(t) && r.push(t), t instanceof e && n(t, l, r);
                        });
                    })(this, n, t),
                    t
                  );
                }
              },
              {
                key: 'triggerEventHandler',
                value: function(n, e) {
                  this.listeners.forEach(function(t) {
                    t.name == n && t.callback(e);
                  });
                }
              },
              {
                key: 'children',
                get: function() {
                  return this.childNodes.filter(function(n) {
                    return n instanceof e;
                  });
                }
              }
            ]),
            e
          );
        })(mi),
        Ci = new Map(),
        ki = function(n) {
          return Ci.get(n) || null;
        };
      function bi(n) {
        Ci.set(n.nativeNode, n);
      }
      var wi = ii(null, 'core', [
        { provide: Er, useValue: 'unknown' },
        { provide: oi, deps: [Te] },
        { provide: ei, deps: [] },
        { provide: Sr, deps: [] }
      ]);
      function xi() {
        return bt;
      }
      function Oi() {
        return wt;
      }
      function Ei(n) {
        return n || 'en-US';
      }
      function Pi(n) {
        var e = [];
        return (
          n.onStable.subscribe(function() {
            for (; e.length; ) e.pop()();
          }),
          function(n) {
            e.push(n);
          }
        );
      }
      var Si = function n(e) {
        _classCallCheck(this, n);
      };
      function Ti(n, e, t, l, r, i) {
        n |= 1;
        var u = tl(e),
          o = u.matchedQueries,
          a = u.references;
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          flags: n,
          checkIndex: -1,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: o,
          matchedQueryIds: u.matchedQueryIds,
          references: a,
          ngContentIndex: t,
          childCount: l,
          bindings: [],
          bindingFlags: 0,
          outputs: [],
          element: {
            ns: null,
            name: null,
            attrs: null,
            template: i ? ul(i) : null,
            componentProvider: null,
            componentView: null,
            componentRendererType: null,
            publicProviders: null,
            allProviders: null,
            handleEvent: r || Ut
          },
          provider: null,
          text: null,
          query: null,
          ngContent: null
        };
      }
      function Mi(n, e, t, l, r, i) {
        var u,
          o = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : [],
          a = arguments.length > 7 ? arguments[7] : void 0,
          s = arguments.length > 8 ? arguments[8] : void 0,
          c = arguments.length > 9 ? arguments[9] : void 0,
          h = arguments.length > 10 ? arguments[10] : void 0,
          f = arguments.length > 11 ? arguments[11] : void 0;
        c || (c = Ut);
        var d = tl(t),
          p = d.matchedQueries,
          v = d.references,
          g = d.matchedQueryIds,
          _ = null,
          m = null;
        i && ((_ = (u = _slicedToArray(dl(i), 2))[0]), (m = u[1])), (a = a || []);
        for (var y = new Array(a.length), C = 0; C < a.length; C++) {
          var k = _slicedToArray(a[C], 3),
            b = k[0],
            w = k[1],
            x = k[2],
            O = dl(w),
            E = _slicedToArray(O, 2),
            P = E[0],
            S = E[1],
            T = void 0,
            M = void 0;
          switch (15 & b) {
            case 4:
              M = x;
              break;
            case 1:
            case 8:
              T = x;
          }
          y[C] = { flags: b, ns: P, name: S, nonMinifiedName: S, securityContext: T, suffix: M };
        }
        s = s || [];
        for (var A = new Array(s.length), R = 0; R < s.length; R++) {
          var I = _slicedToArray(s[R], 2),
            N = I[0],
            V = I[1];
          A[R] = { type: 0, target: N, eventName: V, propName: null };
        }
        var D = (o = o || []).map(function(n) {
          var e = _slicedToArray(n, 2),
            t = e[0],
            l = e[1],
            r = _slicedToArray(dl(t), 2);
          return [r[0], r[1], l];
        });
        return (
          (f = (function(n) {
            if (n && '$$undefined' === n.id) {
              var e =
                (null != n.encapsulation && n.encapsulation !== qn.None) ||
                n.styles.length ||
                Object.keys(n.data).length;
              n.id = e ? 'c'.concat(qt++) : '$$empty';
            }
            return n && '$$empty' === n.id && (n = null), n || null;
          })(f)),
          h && (e |= 33554432),
          {
            nodeIndex: -1,
            parent: null,
            renderParent: null,
            bindingIndex: -1,
            outputIndex: -1,
            checkIndex: n,
            flags: (e |= 1),
            childFlags: 0,
            directChildFlags: 0,
            childMatchedQueries: 0,
            matchedQueries: p,
            matchedQueryIds: g,
            references: v,
            ngContentIndex: l,
            childCount: r,
            bindings: y,
            bindingFlags: pl(y),
            outputs: A,
            element: {
              ns: _,
              name: m,
              attrs: D,
              template: null,
              componentProvider: null,
              componentView: h || null,
              componentRendererType: f,
              publicProviders: null,
              allProviders: null,
              handleEvent: c || Ut
            },
            provider: null,
            text: null,
            query: null,
            ngContent: null
          }
        );
      }
      function Ai(n, e, t) {
        var l,
          r = t.element,
          i = n.root.selectorOrNode,
          u = n.renderer;
        if (n.parent || !i) {
          l = r.name ? u.createElement(r.name, r.ns) : u.createComment('');
          var o = rl(n, e, t);
          o && u.appendChild(o, l);
        } else
          l = u.selectRootElement(
            i,
            !!r.componentRendererType && r.componentRendererType.encapsulation === qn.ShadowDom
          );
        if (r.attrs)
          for (var a = 0; a < r.attrs.length; a++) {
            var s = _slicedToArray(r.attrs[a], 3),
              c = s[0],
              h = s[1],
              f = s[2];
            u.setAttribute(l, h, f, c);
          }
        return l;
      }
      function Ri(n, e, t, l) {
        for (var r = 0; r < t.outputs.length; r++) {
          var i = t.outputs[r],
            u = Ii(
              n,
              t.nodeIndex,
              ((h = i.eventName), (c = i.target) ? ''.concat(c, ':').concat(h) : h)
            ),
            o = i.target,
            a = n;
          'component' === i.target && ((o = null), (a = e));
          var s = a.renderer.listen(o || l, i.eventName, u);
          n.disposables[t.outputIndex + r] = s;
        }
        var c, h;
      }
      function Ii(n, e, t) {
        return function(l) {
          return Qt(n, e, t, l);
        };
      }
      function Ni(n, e, t, l) {
        if (!Gt(n, e, t, l)) return !1;
        var r = e.bindings[t],
          i = Nt(n, e.nodeIndex),
          u = i.renderElement,
          o = r.name;
        switch (15 & r.flags) {
          case 1:
            !(function(n, e, t, l, r, i) {
              var u = e.securityContext,
                o = u ? n.root.sanitizer.sanitize(u, i) : i;
              o = null != o ? o.toString() : null;
              var a = n.renderer;
              null != i ? a.setAttribute(t, r, o, l) : a.removeAttribute(t, r, l);
            })(n, r, u, r.ns, o, l);
            break;
          case 2:
            !(function(n, e, t, l) {
              var r = n.renderer;
              l ? r.addClass(e, t) : r.removeClass(e, t);
            })(n, u, o, l);
            break;
          case 4:
            !(function(n, e, t, l, r) {
              var i = n.root.sanitizer.sanitize(ye.STYLE, r);
              if (null != i) {
                i = i.toString();
                var u = e.suffix;
                null != u && (i += u);
              } else i = null;
              var o = n.renderer;
              null != i ? o.setStyle(t, l, i) : o.removeStyle(t, l);
            })(n, r, u, o, l);
            break;
          case 8:
            !(function(n, e, t, l, r) {
              var i = e.securityContext,
                u = i ? n.root.sanitizer.sanitize(i, r) : r;
              n.renderer.setProperty(t, l, u);
            })(33554432 & e.flags && 32 & r.flags ? i.componentView : n, r, u, o, l);
        }
        return !0;
      }
      function Vi(n, e, t) {
        var l = [];
        for (var r in t) l.push({ propName: r, bindingType: t[r] });
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: -1,
          flags: n,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          ngContentIndex: -1,
          matchedQueries: {},
          matchedQueryIds: 0,
          references: {},
          childCount: 0,
          bindings: [],
          bindingFlags: 0,
          outputs: [],
          element: null,
          provider: null,
          text: null,
          query: { id: e, filterId: el(e), bindings: l },
          ngContent: null
        };
      }
      function Di(n) {
        for (var e = n.def.nodeMatchedQueries; n.parent && nl(n); ) {
          var t = n.parentNodeDef;
          n = n.parent;
          for (var l = t.nodeIndex + t.childCount, r = 0; r <= l; r++) {
            var i = n.def.nodes[r];
            67108864 & i.flags &&
              536870912 & i.flags &&
              (i.query.filterId & e) === i.query.filterId &&
              jt(n, r).setDirty(),
              (!(1 & i.flags && r + i.childCount < t.nodeIndex) &&
                67108864 & i.childFlags &&
                536870912 & i.childFlags) ||
                (r += i.childCount);
          }
        }
        if (134217728 & n.def.nodeFlags)
          for (var u = 0; u < n.def.nodes.length; u++) {
            var o = n.def.nodes[u];
            134217728 & o.flags && 536870912 & o.flags && jt(n, u).setDirty(), (u += o.childCount);
          }
      }
      function ji(n, e) {
        var t = jt(n, e.nodeIndex);
        if (t.dirty) {
          var l,
            r = void 0;
          if (67108864 & e.flags) {
            var i = e.parent.parent;
            (r = Li(n, i.nodeIndex, i.nodeIndex + i.childCount, e.query, [])),
              (l = Vt(n, e.parent.nodeIndex).instance);
          } else
            134217728 & e.flags &&
              ((r = Li(n, 0, n.def.nodes.length - 1, e.query, [])), (l = n.component));
          t.reset(r);
          for (var u = e.query.bindings, o = !1, a = 0; a < u.length; a++) {
            var s = u[a],
              c = void 0;
            switch (s.bindingType) {
              case 0:
                c = t.first;
                break;
              case 1:
                (c = t), (o = !0);
            }
            l[s.propName] = c;
          }
          o && t.notifyOnChanges();
        }
      }
      function Li(n, e, t, l, r) {
        for (var i = e; i <= t; i++) {
          var u = n.def.nodes[i],
            o = u.matchedQueries[l.id];
          if (
            (null != o && r.push(Ui(n, u, o)),
            1 & u.flags &&
              u.element.template &&
              (u.element.template.nodeMatchedQueries & l.filterId) === l.filterId)
          ) {
            var a = Nt(n, i);
            if (
              ((u.childMatchedQueries & l.filterId) === l.filterId &&
                (Li(n, i + 1, i + u.childCount, l, r), (i += u.childCount)),
              16777216 & u.flags)
            )
              for (var s = a.viewContainer._embeddedViews, c = 0; c < s.length; c++) {
                var h = s[c],
                  f = Yt(h);
                f && f === a && Li(h, 0, h.def.nodes.length - 1, l, r);
              }
            var d = a.template._projectedViews;
            if (d)
              for (var p = 0; p < d.length; p++) {
                var v = d[p];
                Li(v, 0, v.def.nodes.length - 1, l, r);
              }
          }
          (u.childMatchedQueries & l.filterId) !== l.filterId && (i += u.childCount);
        }
        return r;
      }
      function Ui(n, e, t) {
        if (null != t)
          switch (t) {
            case 1:
              return Nt(n, e.nodeIndex).renderElement;
            case 0:
              return new tt(Nt(n, e.nodeIndex).renderElement);
            case 2:
              return Nt(n, e.nodeIndex).template;
            case 3:
              return Nt(n, e.nodeIndex).viewContainer;
            case 4:
              return Vt(n, e.nodeIndex).instance;
          }
      }
      function Fi(n, e, t) {
        var l = rl(n, e, t);
        l && sl(n, t.ngContent.index, 1, l, null, void 0);
      }
      function zi(n, e) {
        return (function(n, e, t) {
          for (var l = new Array(t.length), r = 0; r < t.length; r++) {
            var i = t[r];
            l[r] = {
              flags: 8,
              name: i,
              ns: null,
              nonMinifiedName: i,
              securityContext: null,
              suffix: null
            };
          }
          return {
            nodeIndex: -1,
            parent: null,
            renderParent: null,
            bindingIndex: -1,
            outputIndex: -1,
            checkIndex: e,
            flags: 32,
            childFlags: 0,
            directChildFlags: 0,
            childMatchedQueries: 0,
            matchedQueries: {},
            matchedQueryIds: 0,
            references: {},
            ngContentIndex: -1,
            childCount: 0,
            bindings: l,
            bindingFlags: pl(l),
            outputs: [],
            element: null,
            provider: null,
            text: null,
            query: null,
            ngContent: null
          };
        })(0, n, new Array(e));
      }
      function Hi(n, e, t) {
        for (var l = new Array(t.length - 1), r = 1; r < t.length; r++)
          l[r - 1] = {
            flags: 8,
            name: null,
            ns: null,
            nonMinifiedName: null,
            securityContext: null,
            suffix: t[r]
          };
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: n,
          flags: 2,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: {},
          matchedQueryIds: 0,
          references: {},
          ngContentIndex: e,
          childCount: 0,
          bindings: l,
          bindingFlags: 8,
          outputs: [],
          element: null,
          provider: null,
          text: { prefix: t[0] },
          query: null,
          ngContent: null
        };
      }
      function qi(n, e, t) {
        var l,
          r = n.renderer;
        l = r.createText(t.text.prefix);
        var i = rl(n, e, t);
        return i && r.appendChild(i, l), { renderText: l };
      }
      function Bi(n, e) {
        return (null != n ? n.toString() : '') + e.suffix;
      }
      function Gi(n, e, t, l) {
        for (
          var r = 0,
            i = 0,
            u = 0,
            o = 0,
            a = 0,
            s = null,
            c = null,
            h = !1,
            f = !1,
            d = null,
            p = 0;
          p < e.length;
          p++
        ) {
          var v = e[p];
          if (
            ((v.nodeIndex = p),
            (v.parent = s),
            (v.bindingIndex = r),
            (v.outputIndex = i),
            (v.renderParent = c),
            (u |= v.flags),
            (a |= v.matchedQueryIds),
            v.element)
          ) {
            var g = v.element;
            (g.publicProviders = s ? s.element.publicProviders : Object.create(null)),
              (g.allProviders = g.publicProviders),
              (h = !1),
              (f = !1),
              v.element.template && (a |= v.element.template.nodeMatchedQueries);
          }
          if (
            (Wi(s, v, e.length),
            (r += v.bindings.length),
            (i += v.outputs.length),
            !c && 3 & v.flags && (d = v),
            20224 & v.flags)
          ) {
            h ||
              ((h = !0),
              (s.element.publicProviders = Object.create(s.element.publicProviders)),
              (s.element.allProviders = s.element.publicProviders));
            var _ = 0 != (32768 & v.flags);
            0 == (8192 & v.flags) || _
              ? (s.element.publicProviders[zt(v.provider.token)] = v)
              : (f ||
                  ((f = !0), (s.element.allProviders = Object.create(s.element.publicProviders))),
                (s.element.allProviders[zt(v.provider.token)] = v)),
              _ && (s.element.componentProvider = v);
          }
          if (
            (s
              ? ((s.childFlags |= v.flags),
                (s.directChildFlags |= v.flags),
                (s.childMatchedQueries |= v.matchedQueryIds),
                v.element &&
                  v.element.template &&
                  (s.childMatchedQueries |= v.element.template.nodeMatchedQueries))
              : (o |= v.flags),
            v.childCount > 0)
          )
            (s = v), Ki(v) || (c = v);
          else
            for (; s && p === s.nodeIndex + s.childCount; ) {
              var m = s.parent;
              m &&
                ((m.childFlags |= s.childFlags), (m.childMatchedQueries |= s.childMatchedQueries)),
                (c = (s = m) && Ki(s) ? s.renderParent : s);
            }
        }
        return {
          factory: null,
          nodeFlags: u,
          rootNodeFlags: o,
          nodeMatchedQueries: a,
          flags: n,
          nodes: e,
          updateDirectives: t || Ut,
          updateRenderer: l || Ut,
          handleEvent: function(n, t, l, r) {
            return e[t].element.handleEvent(n, l, r);
          },
          bindingCount: r,
          outputCount: i,
          lastRenderRootNode: d
        };
      }
      function Ki(n) {
        return 0 != (1 & n.flags) && null === n.element.name;
      }
      function Wi(n, e, t) {
        var l = e.element && e.element.template;
        if (l) {
          if (!l.lastRenderRootNode)
            throw new Error('Illegal State: Embedded templates without nodes are not allowed!');
          if (l.lastRenderRootNode && 16777216 & l.lastRenderRootNode.flags)
            throw new Error(
              "Illegal State: Last root node of a template can't have embedded views, at index ".concat(
                e.nodeIndex,
                '!'
              )
            );
        }
        if (20224 & e.flags && 0 == (1 & (n ? n.flags : 0)))
          throw new Error(
            'Illegal State: StaticProvider/Directive nodes need to be children of elements or anchors, at index '.concat(
              e.nodeIndex,
              '!'
            )
          );
        if (e.query) {
          if (67108864 & e.flags && (!n || 0 == (16384 & n.flags)))
            throw new Error(
              'Illegal State: Content Query nodes need to be children of directives, at index '.concat(
                e.nodeIndex,
                '!'
              )
            );
          if (134217728 & e.flags && n)
            throw new Error(
              'Illegal State: View Query nodes have to be top level nodes, at index '.concat(
                e.nodeIndex,
                '!'
              )
            );
        }
        if (e.childCount) {
          var r = n ? n.nodeIndex + n.childCount : t - 1;
          if (e.nodeIndex <= r && e.nodeIndex + e.childCount > r)
            throw new Error(
              'Illegal State: childCount of node leads outside of parent, at index '.concat(
                e.nodeIndex,
                '!'
              )
            );
        }
      }
      function Zi(n, e, t, l) {
        var r = $i(n.root, n.renderer, n, e, t);
        return Ji(r, n.component, l), Xi(r), r;
      }
      function Qi(n, e, t) {
        var l = $i(n, n.renderer, null, null, e);
        return Ji(l, t, t), Xi(l), l;
      }
      function Yi(n, e, t, l) {
        var r,
          i = e.element.componentRendererType;
        return (
          (r = i ? n.root.rendererFactory.createRenderer(l, i) : n.root.renderer),
          $i(n.root, r, n, e.element.componentProvider, t)
        );
      }
      function $i(n, e, t, l, r) {
        var i = new Array(r.nodes.length),
          u = r.outputCount ? new Array(r.outputCount) : null;
        return {
          def: r,
          parent: t,
          viewContainerParent: null,
          parentNodeDef: l,
          context: null,
          component: null,
          nodes: i,
          state: 13,
          root: n,
          renderer: e,
          oldValues: new Array(r.bindingCount),
          disposables: u,
          initIndex: -1
        };
      }
      function Ji(n, e, t) {
        (n.component = e), (n.context = t);
      }
      function Xi(n) {
        var e;
        Xt(n) && (e = Nt(n.parent, n.parentNodeDef.parent.nodeIndex).renderElement);
        for (var t = n.def, l = n.nodes, r = 0; r < t.nodes.length; r++) {
          var i = t.nodes[r],
            u = void 0;
          switch ((Lt.setCurrentNode(n, r), 201347067 & i.flags)) {
            case 1:
              var o = Ai(n, e, i),
                a = void 0;
              if (33554432 & i.flags) {
                var s = ul(i.element.componentView);
                a = Lt.createComponentView(n, i, s, o);
              }
              Ri(n, a, i, o),
                (u = {
                  renderElement: o,
                  componentView: a,
                  viewContainer: null,
                  template: i.element.template ? Il(n, i) : void 0
                }),
                16777216 & i.flags && (u.viewContainer = Tl(n, i, u));
              break;
            case 2:
              u = qi(n, e, i);
              break;
            case 512:
            case 1024:
            case 2048:
            case 256:
              (u = l[r]) || 4096 & i.flags || (u = { instance: Xl(n, i) });
              break;
            case 16:
              u = { instance: nr(n, i) };
              break;
            case 16384:
              (u = l[r]) || (u = { instance: er(n, i) }),
                32768 & i.flags &&
                  Ji(Nt(n, i.parent.nodeIndex).componentView, u.instance, u.instance);
              break;
            case 32:
            case 64:
            case 128:
              u = { value: void 0 };
              break;
            case 67108864:
            case 134217728:
              u = new yr();
              break;
            case 8:
              Fi(n, e, i), (u = void 0);
          }
          l[r] = u;
        }
        au(n, ou.CreateViewNodes), fu(n, 201326592, 268435456, 0);
      }
      function nu(n) {
        lu(n),
          Lt.updateDirectives(n, 1),
          su(n, ou.CheckNoChanges),
          Lt.updateRenderer(n, 1),
          au(n, ou.CheckNoChanges),
          (n.state &= -97);
      }
      function eu(n) {
        1 & n.state ? ((n.state &= -2), (n.state |= 2)) : (n.state &= -3),
          At(n, 0, 256),
          lu(n),
          Lt.updateDirectives(n, 0),
          su(n, ou.CheckAndUpdate),
          fu(n, 67108864, 536870912, 0);
        var e = At(n, 256, 512);
        sr(n, 2097152 | (e ? 1048576 : 0)),
          Lt.updateRenderer(n, 0),
          au(n, ou.CheckAndUpdate),
          fu(n, 134217728, 536870912, 0),
          sr(n, 8388608 | ((e = At(n, 512, 768)) ? 4194304 : 0)),
          2 & n.def.flags && (n.state &= -9),
          (n.state &= -97),
          At(n, 768, 1024);
      }
      function tu(n, e, t, l, r, i, u, o, a, s, c, h, f) {
        return 0 === t
          ? (function(n, e, t, l, r, i, u, o, a, s, c, h) {
              switch (201347067 & e.flags) {
                case 1:
                  return (function(n, e, t, l, r, i, u, o, a, s, c, h) {
                    var f = e.bindings.length,
                      d = !1;
                    return (
                      f > 0 && Ni(n, e, 0, t) && (d = !0),
                      f > 1 && Ni(n, e, 1, l) && (d = !0),
                      f > 2 && Ni(n, e, 2, r) && (d = !0),
                      f > 3 && Ni(n, e, 3, i) && (d = !0),
                      f > 4 && Ni(n, e, 4, u) && (d = !0),
                      f > 5 && Ni(n, e, 5, o) && (d = !0),
                      f > 6 && Ni(n, e, 6, a) && (d = !0),
                      f > 7 && Ni(n, e, 7, s) && (d = !0),
                      f > 8 && Ni(n, e, 8, c) && (d = !0),
                      f > 9 && Ni(n, e, 9, h) && (d = !0),
                      d
                    );
                  })(n, e, t, l, r, i, u, o, a, s, c, h);
                case 2:
                  return (function(n, e, t, l, r, i, u, o, a, s, c, h) {
                    var f = !1,
                      d = e.bindings,
                      p = d.length;
                    if (
                      (p > 0 && Gt(n, e, 0, t) && (f = !0),
                      p > 1 && Gt(n, e, 1, l) && (f = !0),
                      p > 2 && Gt(n, e, 2, r) && (f = !0),
                      p > 3 && Gt(n, e, 3, i) && (f = !0),
                      p > 4 && Gt(n, e, 4, u) && (f = !0),
                      p > 5 && Gt(n, e, 5, o) && (f = !0),
                      p > 6 && Gt(n, e, 6, a) && (f = !0),
                      p > 7 && Gt(n, e, 7, s) && (f = !0),
                      p > 8 && Gt(n, e, 8, c) && (f = !0),
                      p > 9 && Gt(n, e, 9, h) && (f = !0),
                      f)
                    ) {
                      var v = e.text.prefix;
                      p > 0 && (v += Bi(t, d[0])),
                        p > 1 && (v += Bi(l, d[1])),
                        p > 2 && (v += Bi(r, d[2])),
                        p > 3 && (v += Bi(i, d[3])),
                        p > 4 && (v += Bi(u, d[4])),
                        p > 5 && (v += Bi(o, d[5])),
                        p > 6 && (v += Bi(a, d[6])),
                        p > 7 && (v += Bi(s, d[7])),
                        p > 8 && (v += Bi(c, d[8])),
                        p > 9 && (v += Bi(h, d[9]));
                      var g = It(n, e.nodeIndex).renderText;
                      n.renderer.setValue(g, v);
                    }
                    return f;
                  })(n, e, t, l, r, i, u, o, a, s, c, h);
                case 16384:
                  return (function(n, e, t, l, r, i, u, o, a, s, c, h) {
                    var f = Vt(n, e.nodeIndex),
                      d = f.instance,
                      p = !1,
                      v = void 0,
                      g = e.bindings.length;
                    return (
                      g > 0 && Bt(n, e, 0, t) && ((p = !0), (v = ar(n, f, e, 0, t, v))),
                      g > 1 && Bt(n, e, 1, l) && ((p = !0), (v = ar(n, f, e, 1, l, v))),
                      g > 2 && Bt(n, e, 2, r) && ((p = !0), (v = ar(n, f, e, 2, r, v))),
                      g > 3 && Bt(n, e, 3, i) && ((p = !0), (v = ar(n, f, e, 3, i, v))),
                      g > 4 && Bt(n, e, 4, u) && ((p = !0), (v = ar(n, f, e, 4, u, v))),
                      g > 5 && Bt(n, e, 5, o) && ((p = !0), (v = ar(n, f, e, 5, o, v))),
                      g > 6 && Bt(n, e, 6, a) && ((p = !0), (v = ar(n, f, e, 6, a, v))),
                      g > 7 && Bt(n, e, 7, s) && ((p = !0), (v = ar(n, f, e, 7, s, v))),
                      g > 8 && Bt(n, e, 8, c) && ((p = !0), (v = ar(n, f, e, 8, c, v))),
                      g > 9 && Bt(n, e, 9, h) && ((p = !0), (v = ar(n, f, e, 9, h, v))),
                      v && d.ngOnChanges(v),
                      65536 & e.flags && Rt(n, 256, e.nodeIndex) && d.ngOnInit(),
                      262144 & e.flags && d.ngDoCheck(),
                      p
                    );
                  })(n, e, t, l, r, i, u, o, a, s, c, h);
                case 32:
                case 64:
                case 128:
                  return (function(n, e, t, l, r, i, u, o, a, s, c, h) {
                    var f = e.bindings,
                      d = !1,
                      p = f.length;
                    if (
                      (p > 0 && Gt(n, e, 0, t) && (d = !0),
                      p > 1 && Gt(n, e, 1, l) && (d = !0),
                      p > 2 && Gt(n, e, 2, r) && (d = !0),
                      p > 3 && Gt(n, e, 3, i) && (d = !0),
                      p > 4 && Gt(n, e, 4, u) && (d = !0),
                      p > 5 && Gt(n, e, 5, o) && (d = !0),
                      p > 6 && Gt(n, e, 6, a) && (d = !0),
                      p > 7 && Gt(n, e, 7, s) && (d = !0),
                      p > 8 && Gt(n, e, 8, c) && (d = !0),
                      p > 9 && Gt(n, e, 9, h) && (d = !0),
                      d)
                    ) {
                      var v,
                        g = Dt(n, e.nodeIndex);
                      switch (201347067 & e.flags) {
                        case 32:
                          (v = new Array(f.length)),
                            p > 0 && (v[0] = t),
                            p > 1 && (v[1] = l),
                            p > 2 && (v[2] = r),
                            p > 3 && (v[3] = i),
                            p > 4 && (v[4] = u),
                            p > 5 && (v[5] = o),
                            p > 6 && (v[6] = a),
                            p > 7 && (v[7] = s),
                            p > 8 && (v[8] = c),
                            p > 9 && (v[9] = h);
                          break;
                        case 64:
                          (v = {}),
                            p > 0 && (v[f[0].name] = t),
                            p > 1 && (v[f[1].name] = l),
                            p > 2 && (v[f[2].name] = r),
                            p > 3 && (v[f[3].name] = i),
                            p > 4 && (v[f[4].name] = u),
                            p > 5 && (v[f[5].name] = o),
                            p > 6 && (v[f[6].name] = a),
                            p > 7 && (v[f[7].name] = s),
                            p > 8 && (v[f[8].name] = c),
                            p > 9 && (v[f[9].name] = h);
                          break;
                        case 128:
                          var _ = t;
                          switch (p) {
                            case 1:
                              v = _.transform(t);
                              break;
                            case 2:
                              v = _.transform(l);
                              break;
                            case 3:
                              v = _.transform(l, r);
                              break;
                            case 4:
                              v = _.transform(l, r, i);
                              break;
                            case 5:
                              v = _.transform(l, r, i, u);
                              break;
                            case 6:
                              v = _.transform(l, r, i, u, o);
                              break;
                            case 7:
                              v = _.transform(l, r, i, u, o, a);
                              break;
                            case 8:
                              v = _.transform(l, r, i, u, o, a, s);
                              break;
                            case 9:
                              v = _.transform(l, r, i, u, o, a, s, c);
                              break;
                            case 10:
                              v = _.transform(l, r, i, u, o, a, s, c, h);
                          }
                      }
                      g.value = v;
                    }
                    return d;
                  })(n, e, t, l, r, i, u, o, a, s, c, h);
                default:
                  throw 'unreachable';
              }
            })(n, e, l, r, i, u, o, a, s, c, h, f)
          : (function(n, e, t) {
              switch (201347067 & e.flags) {
                case 1:
                  return (function(n, e, t) {
                    for (var l = !1, r = 0; r < t.length; r++) Ni(n, e, r, t[r]) && (l = !0);
                    return l;
                  })(n, e, t);
                case 2:
                  return (function(n, e, t) {
                    for (var l = e.bindings, r = !1, i = 0; i < t.length; i++)
                      Gt(n, e, i, t[i]) && (r = !0);
                    if (r) {
                      for (var u = '', o = 0; o < t.length; o++) u += Bi(t[o], l[o]);
                      u = e.text.prefix + u;
                      var a = It(n, e.nodeIndex).renderText;
                      n.renderer.setValue(a, u);
                    }
                    return r;
                  })(n, e, t);
                case 16384:
                  return (function(n, e, t) {
                    for (
                      var l = Vt(n, e.nodeIndex), r = l.instance, i = !1, u = void 0, o = 0;
                      o < t.length;
                      o++
                    )
                      Bt(n, e, o, t[o]) && ((i = !0), (u = ar(n, l, e, o, t[o], u)));
                    return (
                      u && r.ngOnChanges(u),
                      65536 & e.flags && Rt(n, 256, e.nodeIndex) && r.ngOnInit(),
                      262144 & e.flags && r.ngDoCheck(),
                      i
                    );
                  })(n, e, t);
                case 32:
                case 64:
                case 128:
                  return (function(n, e, t) {
                    for (var l = e.bindings, r = !1, i = 0; i < t.length; i++)
                      Gt(n, e, i, t[i]) && (r = !0);
                    if (r) {
                      var u,
                        o = Dt(n, e.nodeIndex);
                      switch (201347067 & e.flags) {
                        case 32:
                          u = t;
                          break;
                        case 64:
                          u = {};
                          for (var a = 0; a < t.length; a++) u[l[a].name] = t[a];
                          break;
                        case 128:
                          var s = t[0],
                            c = t.slice(1);
                          u = s.transform.apply(s, _toConsumableArray(c));
                      }
                      o.value = u;
                    }
                    return r;
                  })(n, e, t);
                default:
                  throw 'unreachable';
              }
            })(n, e, l);
      }
      function lu(n) {
        var e = n.def;
        if (4 & e.nodeFlags)
          for (var t = 0; t < e.nodes.length; t++) {
            var l = e.nodes[t];
            if (4 & l.flags) {
              var r = Nt(n, t).template._projectedViews;
              if (r)
                for (var i = 0; i < r.length; i++) {
                  var u = r[i];
                  (u.state |= 32), Zt(u, n);
                }
            } else 0 == (4 & l.childFlags) && (t += l.childCount);
          }
      }
      function ru(n, e, t, l, r, i, u, o, a, s, c, h, f) {
        return (
          0 === t
            ? (function(n, e, t, l, r, i, u, o, a, s, c, h) {
                var f = e.bindings.length;
                f > 0 && Kt(n, e, 0, t),
                  f > 1 && Kt(n, e, 1, l),
                  f > 2 && Kt(n, e, 2, r),
                  f > 3 && Kt(n, e, 3, i),
                  f > 4 && Kt(n, e, 4, u),
                  f > 5 && Kt(n, e, 5, o),
                  f > 6 && Kt(n, e, 6, a),
                  f > 7 && Kt(n, e, 7, s),
                  f > 8 && Kt(n, e, 8, c),
                  f > 9 && Kt(n, e, 9, h);
              })(n, e, l, r, i, u, o, a, s, c, h, f)
            : (function(n, e, t) {
                for (var l = 0; l < t.length; l++) Kt(n, e, l, t[l]);
              })(n, e, l),
          !1
        );
      }
      function iu(n, e) {
        if (jt(n, e.nodeIndex).dirty)
          throw St(
            Lt.createDebugContext(n, e.nodeIndex),
            'Query '.concat(e.query.id, ' not dirty'),
            'Query '.concat(e.query.id, ' dirty'),
            0 != (1 & n.state)
          );
      }
      function uu(n) {
        if (!(128 & n.state)) {
          if ((su(n, ou.Destroy), au(n, ou.Destroy), sr(n, 131072), n.disposables))
            for (var e = 0; e < n.disposables.length; e++) n.disposables[e]();
          !(function(n) {
            if (16 & n.state) {
              var e = Yt(n);
              if (e) {
                var t = e.template._projectedViews;
                t && (Hn(t, t.indexOf(n)), Lt.dirtyParentQueries(n));
              }
            }
          })(n),
            n.renderer.destroyNode &&
              (function(n) {
                for (var e = n.def.nodes.length, t = 0; t < e; t++) {
                  var l = n.def.nodes[t];
                  1 & l.flags
                    ? n.renderer.destroyNode(Nt(n, t).renderElement)
                    : 2 & l.flags
                    ? n.renderer.destroyNode(It(n, t).renderText)
                    : (67108864 & l.flags || 134217728 & l.flags) && jt(n, t).destroy();
                }
              })(n),
            Xt(n) && n.renderer.destroy(),
            (n.state |= 128);
        }
      }
      var ou = (function() {
        var n = {
          CreateViewNodes: 0,
          CheckNoChanges: 1,
          CheckNoChangesProjectedViews: 2,
          CheckAndUpdate: 3,
          CheckAndUpdateProjectedViews: 4,
          Destroy: 5
        };
        return (
          (n[n.CreateViewNodes] = 'CreateViewNodes'),
          (n[n.CheckNoChanges] = 'CheckNoChanges'),
          (n[n.CheckNoChangesProjectedViews] = 'CheckNoChangesProjectedViews'),
          (n[n.CheckAndUpdate] = 'CheckAndUpdate'),
          (n[n.CheckAndUpdateProjectedViews] = 'CheckAndUpdateProjectedViews'),
          (n[n.Destroy] = 'Destroy'),
          n
        );
      })();
      function au(n, e) {
        var t = n.def;
        if (33554432 & t.nodeFlags)
          for (var l = 0; l < t.nodes.length; l++) {
            var r = t.nodes[l];
            33554432 & r.flags
              ? cu(Nt(n, l).componentView, e)
              : 0 == (33554432 & r.childFlags) && (l += r.childCount);
          }
      }
      function su(n, e) {
        var t = n.def;
        if (16777216 & t.nodeFlags)
          for (var l = 0; l < t.nodes.length; l++) {
            var r = t.nodes[l];
            if (16777216 & r.flags)
              for (var i = Nt(n, l).viewContainer._embeddedViews, u = 0; u < i.length; u++)
                cu(i[u], e);
            else 0 == (16777216 & r.childFlags) && (l += r.childCount);
          }
      }
      function cu(n, e) {
        var t = n.state;
        switch (e) {
          case ou.CheckNoChanges:
            0 == (128 & t) &&
              (12 == (12 & t) ? nu(n) : 64 & t && hu(n, ou.CheckNoChangesProjectedViews));
            break;
          case ou.CheckNoChangesProjectedViews:
            0 == (128 & t) && (32 & t ? nu(n) : 64 & t && hu(n, e));
            break;
          case ou.CheckAndUpdate:
            0 == (128 & t) &&
              (12 == (12 & t) ? eu(n) : 64 & t && hu(n, ou.CheckAndUpdateProjectedViews));
            break;
          case ou.CheckAndUpdateProjectedViews:
            0 == (128 & t) && (32 & t ? eu(n) : 64 & t && hu(n, e));
            break;
          case ou.Destroy:
            uu(n);
            break;
          case ou.CreateViewNodes:
            Xi(n);
        }
      }
      function hu(n, e) {
        su(n, e), au(n, e);
      }
      function fu(n, e, t, l) {
        if (n.def.nodeFlags & e && n.def.nodeFlags & t)
          for (var r = n.def.nodes.length, i = 0; i < r; i++) {
            var u = n.def.nodes[i];
            if (u.flags & e && u.flags & t)
              switch ((Lt.setCurrentNode(n, u.nodeIndex), l)) {
                case 0:
                  ji(n, u);
                  break;
                case 1:
                  iu(n, u);
              }
            (u.childFlags & e && u.childFlags & t) || (i += u.childCount);
          }
      }
      var du = !1;
      function pu(n, e, t, l, r, i) {
        var u = r.injector.get(rt);
        return Qi(gu(n, r, u, e, t), l, i);
      }
      function vu(n, e, t, l, r, i) {
        var u = r.injector.get(rt),
          o = gu(n, r, new Zu(u), e, t),
          a = Eu(l);
        return Ku(Vu.create, Qi, null, [o, a, i]);
      }
      function gu(n, e, t, l, r) {
        var i = e.injector.get(Ce),
          u = e.injector.get(Zn),
          o = t.createRenderer(null, null);
        return {
          ngModule: e,
          injector: n,
          projectableNodes: l,
          selectorOrNode: r,
          sanitizer: i,
          rendererFactory: t,
          renderer: o,
          errorHandler: u
        };
      }
      function _u(n, e, t, l) {
        var r = Eu(t);
        return Ku(Vu.create, Zi, null, [n, e, r, l]);
      }
      function mu(n, e, t, l) {
        return (
          (t = bu.get(e.element.componentProvider.provider.token) || Eu(t)),
          Ku(Vu.create, Yi, null, [n, e, t, l])
        );
      }
      function yu(n, e, t, l) {
        return Fl(
          n,
          e,
          t,
          (function(n) {
            var e = (function(n) {
                var e = !1,
                  t = !1;
                return 0 === Cu.size
                  ? { hasOverrides: e, hasDeprecatedOverrides: t }
                  : (n.providers.forEach(function(n) {
                      var l = Cu.get(n.token);
                      3840 & n.flags && l && ((e = !0), (t = t || l.deprecatedBehavior));
                    }),
                    n.modules.forEach(function(n) {
                      ku.forEach(function(l, r) {
                        _n(r).providedIn === n && ((e = !0), (t = t || l.deprecatedBehavior));
                      });
                    }),
                    { hasOverrides: e, hasDeprecatedOverrides: t });
              })(n),
              t = e.hasOverrides,
              l = e.hasDeprecatedOverrides;
            return t
              ? ((function(n) {
                  for (var e = 0; e < n.providers.length; e++) {
                    var t = n.providers[e];
                    l && (t.flags |= 4096);
                    var r = Cu.get(t.token);
                    r &&
                      ((t.flags = (-3841 & t.flags) | r.flags),
                      (t.deps = ll(r.deps)),
                      (t.value = r.value));
                  }
                  if (ku.size > 0) {
                    var i = new Set(n.modules);
                    ku.forEach(function(e, t) {
                      if (i.has(_n(t).providedIn)) {
                        var r = {
                          token: t,
                          flags: e.flags | (l ? 4096 : 0),
                          deps: ll(e.deps),
                          value: e.value,
                          index: n.providers.length
                        };
                        n.providers.push(r), (n.providersByKey[zt(t)] = r);
                      }
                    });
                  }
                })(
                  (n = n.factory(function() {
                    return Ut;
                  }))
                ),
                n)
              : n;
          })(l)
        );
      }
      var Cu = new Map(),
        ku = new Map(),
        bu = new Map();
      function wu(n) {
        var e;
        Cu.set(n.token, n),
          'function' == typeof n.token &&
            (e = _n(n.token)) &&
            'function' == typeof e.providedIn &&
            ku.set(n.token, n);
      }
      function xu(n, e) {
        var t = ul(e.viewDefFactory),
          l = ul(t.nodes[0].element.componentView);
        bu.set(n, l);
      }
      function Ou() {
        Cu.clear(), ku.clear(), bu.clear();
      }
      function Eu(n) {
        if (0 === Cu.size) return n;
        var e = (function(n) {
          for (var e = [], t = null, l = 0; l < n.nodes.length; l++) {
            var r = n.nodes[l];
            1 & r.flags && (t = r),
              t && 3840 & r.flags && Cu.has(r.provider.token) && (e.push(t.nodeIndex), (t = null));
          }
          return e;
        })(n);
        if (0 === e.length) return n;
        n = n.factory(function() {
          return Ut;
        });
        for (var t = 0; t < e.length; t++) l(n, e[t]);
        return n;
        function l(n, e) {
          for (var t = e + 1; t < n.nodes.length; t++) {
            var l = n.nodes[t];
            if (1 & l.flags) return;
            if (3840 & l.flags) {
              var r = l.provider,
                i = Cu.get(r.token);
              i &&
                ((l.flags = (-3841 & l.flags) | i.flags),
                (r.deps = ll(i.deps)),
                (r.value = i.value));
            }
          }
        }
      }
      function Pu(n, e, t, l, r, i, u, o, a, s, c, h, f) {
        var d = n.def.nodes[e];
        return tu(n, d, t, l, r, i, u, o, a, s, c, h, f), 224 & d.flags ? Dt(n, e).value : void 0;
      }
      function Su(n, e, t, l, r, i, u, o, a, s, c, h, f) {
        var d = n.def.nodes[e];
        return ru(n, d, t, l, r, i, u, o, a, s, c, h, f), 224 & d.flags ? Dt(n, e).value : void 0;
      }
      function Tu(n) {
        return Ku(Vu.detectChanges, eu, null, [n]);
      }
      function Mu(n) {
        return Ku(Vu.checkNoChanges, nu, null, [n]);
      }
      function Au(n) {
        return Ku(Vu.destroy, uu, null, [n]);
      }
      var Ru,
        Iu,
        Nu,
        Vu = (function() {
          var n = { create: 0, detectChanges: 1, checkNoChanges: 2, destroy: 3, handleEvent: 4 };
          return (
            (n[n.create] = 'create'),
            (n[n.detectChanges] = 'detectChanges'),
            (n[n.checkNoChanges] = 'checkNoChanges'),
            (n[n.destroy] = 'destroy'),
            (n[n.handleEvent] = 'handleEvent'),
            n
          );
        })();
      function Du(n, e) {
        (Iu = n), (Nu = e);
      }
      function ju(n, e, t, l) {
        return Du(n, e), Ku(Vu.handleEvent, n.def.handleEvent, null, [n, e, t, l]);
      }
      function Lu(n, e) {
        if (128 & n.state) throw Mt(Vu[Ru]);
        return (
          Du(n, Hu(n, 0)),
          n.def.updateDirectives(function(n, t, l) {
            for (
              var r = n.def.nodes[t], i = arguments.length, u = new Array(i > 3 ? i - 3 : 0), o = 3;
              o < i;
              o++
            )
              u[o - 3] = arguments[o];
            return (
              0 === e ? Fu(n, r, l, u) : zu(n, r, l, u),
              16384 & r.flags && Du(n, Hu(n, t)),
              224 & r.flags ? Dt(n, r.nodeIndex).value : void 0
            );
          }, n)
        );
      }
      function Uu(n, e) {
        if (128 & n.state) throw Mt(Vu[Ru]);
        return (
          Du(n, qu(n, 0)),
          n.def.updateRenderer(function(n, t, l) {
            for (
              var r = n.def.nodes[t], i = arguments.length, u = new Array(i > 3 ? i - 3 : 0), o = 3;
              o < i;
              o++
            )
              u[o - 3] = arguments[o];
            return (
              0 === e ? Fu(n, r, l, u) : zu(n, r, l, u),
              3 & r.flags && Du(n, qu(n, t)),
              224 & r.flags ? Dt(n, r.nodeIndex).value : void 0
            );
          }, n)
        );
      }
      function Fu(n, e, t, l) {
        if (tu.apply(void 0, [n, e, t].concat(_toConsumableArray(l)))) {
          var r = 1 === t ? l[0] : l;
          if (16384 & e.flags) {
            for (var i = {}, u = 0; u < e.bindings.length; u++) {
              var o = e.bindings[u],
                a = r[u];
              8 & o.flags &&
                (i[
                  ((d = o.nonMinifiedName),
                  (p = void 0),
                  (p = d.replace(/[$@]/g, '_')),
                  'ng-reflect-'.concat(
                    (d = p.replace(we, function() {
                      for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
                        e[t] = arguments[t];
                      return '-' + e[1].toLowerCase();
                    }))
                  ))
                ] = xe(a));
            }
            var s = e.parent,
              c = Nt(n, s.nodeIndex).renderElement;
            if (s.element.name)
              for (var h in i) {
                var f = i[h];
                null != f ? n.renderer.setAttribute(c, h, f) : n.renderer.removeAttribute(c, h);
              }
            else n.renderer.setValue(c, 'bindings='.concat(JSON.stringify(i, null, 2)));
          }
        }
        var d, p;
      }
      function zu(n, e, t, l) {
        ru.apply(void 0, [n, e, t].concat(_toConsumableArray(l)));
      }
      function Hu(n, e) {
        for (var t = e; t < n.def.nodes.length; t++) {
          var l = n.def.nodes[t];
          if (16384 & l.flags && l.bindings && l.bindings.length) return t;
        }
        return null;
      }
      function qu(n, e) {
        for (var t = e; t < n.def.nodes.length; t++) {
          var l = n.def.nodes[t];
          if (3 & l.flags && l.bindings && l.bindings.length) return t;
        }
        return null;
      }
      var Bu = (function() {
        function n(e, t) {
          _classCallCheck(this, n),
            (this.view = e),
            (this.nodeIndex = t),
            null == t && (this.nodeIndex = t = 0),
            (this.nodeDef = e.def.nodes[t]);
          for (var l = this.nodeDef, r = e; l && 0 == (1 & l.flags); ) l = l.parent;
          if (!l) for (; !l && r; ) (l = $t(r)), (r = r.parent);
          (this.elDef = l), (this.elView = r);
        }
        return (
          _createClass(n, [
            {
              key: 'logError',
              value: function(n) {
                for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), l = 1; l < e; l++)
                  t[l - 1] = arguments[l];
                var r, i;
                2 & this.nodeDef.flags
                  ? ((r = this.view.def), (i = this.nodeDef.nodeIndex))
                  : ((r = this.elView.def), (i = this.elDef.nodeIndex));
                var u = (function(n, e) {
                    for (var t = -1, l = 0; l <= e; l++) 3 & n.nodes[l].flags && t++;
                    return t;
                  })(r, i),
                  o = -1;
                r.factory(function() {
                  var e;
                  return ++o === u ? (e = n.error).bind.apply(e, [n].concat(t)) : Ut;
                }),
                  o < u &&
                    (n.error('Illegal state: the ViewDefinitionFactory did not call the logger!'),
                    n.error.apply(n, t));
              }
            },
            {
              key: 'elOrCompView',
              get: function() {
                return Nt(this.elView, this.elDef.nodeIndex).componentView || this.view;
              }
            },
            {
              key: 'injector',
              get: function() {
                return Vl(this.elView, this.elDef);
              }
            },
            {
              key: 'component',
              get: function() {
                return this.elOrCompView.component;
              }
            },
            {
              key: 'context',
              get: function() {
                return this.elOrCompView.context;
              }
            },
            {
              key: 'providerTokens',
              get: function() {
                var n = [];
                if (this.elDef)
                  for (
                    var e = this.elDef.nodeIndex + 1;
                    e <= this.elDef.nodeIndex + this.elDef.childCount;
                    e++
                  ) {
                    var t = this.elView.def.nodes[e];
                    20224 & t.flags && n.push(t.provider.token), (e += t.childCount);
                  }
                return n;
              }
            },
            {
              key: 'references',
              get: function() {
                var n = {};
                if (this.elDef) {
                  Gu(this.elView, this.elDef, n);
                  for (
                    var e = this.elDef.nodeIndex + 1;
                    e <= this.elDef.nodeIndex + this.elDef.childCount;
                    e++
                  ) {
                    var t = this.elView.def.nodes[e];
                    20224 & t.flags && Gu(this.elView, t, n), (e += t.childCount);
                  }
                }
                return n;
              }
            },
            {
              key: 'componentRenderElement',
              get: function() {
                var n = (function(n) {
                  for (; n && !Xt(n); ) n = n.parent;
                  return n.parent ? Nt(n.parent, $t(n).nodeIndex) : null;
                })(this.elOrCompView);
                return n ? n.renderElement : void 0;
              }
            },
            {
              key: 'renderNode',
              get: function() {
                return 2 & this.nodeDef.flags
                  ? Jt(this.view, this.nodeDef)
                  : Jt(this.elView, this.elDef);
              }
            }
          ]),
          n
        );
      })();
      function Gu(n, e, t) {
        for (var l in e.references) t[l] = Ui(n, e, e.references[l]);
      }
      function Ku(n, e, t, l) {
        var r,
          i,
          u = Ru,
          o = Iu,
          a = Nu;
        try {
          Ru = n;
          var s = e.apply(t, l);
          return (Iu = o), (Nu = a), (Ru = u), s;
        } catch (c) {
          if (Gn(c) || !Iu) throw c;
          throw ((r = c),
          (i = Wu()),
          r instanceof Error || (r = new Error(r.toString())),
          Tt(r, i),
          r);
        }
      }
      function Wu() {
        return Iu ? new Bu(Iu, Nu) : null;
      }
      var Zu = (function() {
          function n(e) {
            _classCallCheck(this, n), (this.delegate = e);
          }
          return (
            _createClass(n, [
              {
                key: 'createRenderer',
                value: function(n, e) {
                  return new Qu(this.delegate.createRenderer(n, e));
                }
              },
              {
                key: 'begin',
                value: function() {
                  this.delegate.begin && this.delegate.begin();
                }
              },
              {
                key: 'end',
                value: function() {
                  this.delegate.end && this.delegate.end();
                }
              },
              {
                key: 'whenRenderingDone',
                value: function() {
                  return this.delegate.whenRenderingDone
                    ? this.delegate.whenRenderingDone()
                    : Promise.resolve(null);
                }
              }
            ]),
            n
          );
        })(),
        Qu = (function() {
          function n(e) {
            _classCallCheck(this, n),
              (this.delegate = e),
              (this.debugContextFactory = Wu),
              (this.data = this.delegate.data);
          }
          return (
            _createClass(n, [
              {
                key: 'createDebugContext',
                value: function(n) {
                  return this.debugContextFactory(n);
                }
              },
              {
                key: 'destroyNode',
                value: function(n) {
                  var e = ki(n);
                  !(function(n) {
                    Ci.delete(n.nativeNode);
                  })(e),
                    e instanceof mi && (e.listeners.length = 0),
                    this.delegate.destroyNode && this.delegate.destroyNode(n);
                }
              },
              {
                key: 'destroy',
                value: function() {
                  this.delegate.destroy();
                }
              },
              {
                key: 'createElement',
                value: function(n, e) {
                  var t = this.delegate.createElement(n, e),
                    l = this.createDebugContext(t);
                  if (l) {
                    var r = new yi(t, null, l);
                    (r.name = n), bi(r);
                  }
                  return t;
                }
              },
              {
                key: 'createComment',
                value: function(n) {
                  var e = this.delegate.createComment(n),
                    t = this.createDebugContext(e);
                  return t && bi(new mi(e, null, t)), e;
                }
              },
              {
                key: 'createText',
                value: function(n) {
                  var e = this.delegate.createText(n),
                    t = this.createDebugContext(e);
                  return t && bi(new mi(e, null, t)), e;
                }
              },
              {
                key: 'appendChild',
                value: function(n, e) {
                  var t = ki(n),
                    l = ki(e);
                  t && l && t instanceof yi && t.addChild(l), this.delegate.appendChild(n, e);
                }
              },
              {
                key: 'insertBefore',
                value: function(n, e, t) {
                  var l = ki(n),
                    r = ki(e),
                    i = ki(t);
                  l && r && l instanceof yi && l.insertBefore(i, r),
                    this.delegate.insertBefore(n, e, t);
                }
              },
              {
                key: 'removeChild',
                value: function(n, e) {
                  var t = ki(n),
                    l = ki(e);
                  t && l && t instanceof yi && t.removeChild(l), this.delegate.removeChild(n, e);
                }
              },
              {
                key: 'selectRootElement',
                value: function(n, e) {
                  var t = this.delegate.selectRootElement(n, e),
                    l = Wu();
                  return l && bi(new yi(t, null, l)), t;
                }
              },
              {
                key: 'setAttribute',
                value: function(n, e, t, l) {
                  var r = ki(n);
                  r && r instanceof yi && (r.attributes[l ? l + ':' + e : e] = t),
                    this.delegate.setAttribute(n, e, t, l);
                }
              },
              {
                key: 'removeAttribute',
                value: function(n, e, t) {
                  var l = ki(n);
                  l && l instanceof yi && (l.attributes[t ? t + ':' + e : e] = null),
                    this.delegate.removeAttribute(n, e, t);
                }
              },
              {
                key: 'addClass',
                value: function(n, e) {
                  var t = ki(n);
                  t && t instanceof yi && (t.classes[e] = !0), this.delegate.addClass(n, e);
                }
              },
              {
                key: 'removeClass',
                value: function(n, e) {
                  var t = ki(n);
                  t && t instanceof yi && (t.classes[e] = !1), this.delegate.removeClass(n, e);
                }
              },
              {
                key: 'setStyle',
                value: function(n, e, t, l) {
                  var r = ki(n);
                  r && r instanceof yi && (r.styles[e] = t), this.delegate.setStyle(n, e, t, l);
                }
              },
              {
                key: 'removeStyle',
                value: function(n, e, t) {
                  var l = ki(n);
                  l && l instanceof yi && (l.styles[e] = null), this.delegate.removeStyle(n, e, t);
                }
              },
              {
                key: 'setProperty',
                value: function(n, e, t) {
                  var l = ki(n);
                  l && l instanceof yi && (l.properties[e] = t), this.delegate.setProperty(n, e, t);
                }
              },
              {
                key: 'listen',
                value: function(n, e, t) {
                  if ('string' != typeof n) {
                    var l = ki(n);
                    l && l.listeners.push(new _i(e, t));
                  }
                  return this.delegate.listen(n, e, t);
                }
              },
              {
                key: 'parentNode',
                value: function(n) {
                  return this.delegate.parentNode(n);
                }
              },
              {
                key: 'nextSibling',
                value: function(n) {
                  return this.delegate.nextSibling(n);
                }
              },
              {
                key: 'setValue',
                value: function(n, e) {
                  return this.delegate.setValue(n, e);
                }
              }
            ]),
            n
          );
        })();
      var Yu = (function(n) {
          function e(n, t, l) {
            var r;
            return (
              _classCallCheck(this, e),
              ((r = _possibleConstructorReturn(
                this,
                _getPrototypeOf(e).call(this)
              )).moduleType = n),
              (r._bootstrapComponents = t),
              (r._ngModuleDefFactory = l),
              r
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: 'create',
                value: function(n) {
                  !(function() {
                    if (!du) {
                      du = !0;
                      var n = $n()
                        ? {
                            setCurrentNode: Du,
                            createRootView: vu,
                            createEmbeddedView: _u,
                            createComponentView: mu,
                            createNgModuleRef: yu,
                            overrideProvider: wu,
                            overrideComponentView: xu,
                            clearOverrides: Ou,
                            checkAndUpdateView: Tu,
                            checkNoChangesView: Mu,
                            destroyView: Au,
                            createDebugContext: function(n, e) {
                              return new Bu(n, e);
                            },
                            handleEvent: ju,
                            updateDirectives: Lu,
                            updateRenderer: Uu
                          }
                        : {
                            setCurrentNode: function() {},
                            createRootView: pu,
                            createEmbeddedView: Zi,
                            createComponentView: Yi,
                            createNgModuleRef: Fl,
                            overrideProvider: Ut,
                            overrideComponentView: Ut,
                            clearOverrides: Ut,
                            checkAndUpdateView: eu,
                            checkNoChangesView: nu,
                            destroyView: uu,
                            createDebugContext: function(n, e) {
                              return new Bu(n, e);
                            },
                            handleEvent: function(n, e, t, l) {
                              return n.def.handleEvent(n, e, t, l);
                            },
                            updateDirectives: function(n, e) {
                              return n.def.updateDirectives(0 === e ? Pu : Su, n);
                            },
                            updateRenderer: function(n, e) {
                              return n.def.updateRenderer(0 === e ? Pu : Su, n);
                            }
                          };
                      (Lt.setCurrentNode = n.setCurrentNode),
                        (Lt.createRootView = n.createRootView),
                        (Lt.createEmbeddedView = n.createEmbeddedView),
                        (Lt.createComponentView = n.createComponentView),
                        (Lt.createNgModuleRef = n.createNgModuleRef),
                        (Lt.overrideProvider = n.overrideProvider),
                        (Lt.overrideComponentView = n.overrideComponentView),
                        (Lt.clearOverrides = n.clearOverrides),
                        (Lt.checkAndUpdateView = n.checkAndUpdateView),
                        (Lt.checkNoChangesView = n.checkNoChangesView),
                        (Lt.destroyView = n.destroyView),
                        (Lt.resolveDep = ur),
                        (Lt.createDebugContext = n.createDebugContext),
                        (Lt.handleEvent = n.handleEvent),
                        (Lt.updateDirectives = n.updateDirectives),
                        (Lt.updateRenderer = n.updateRenderer),
                        (Lt.dirtyParentQueries = Di);
                    }
                  })();
                  var e = (function(n) {
                    var e = Array.from(n.providers),
                      t = Array.from(n.modules),
                      l = {};
                    for (var r in n.providersByKey) l[r] = n.providersByKey[r];
                    return {
                      factory: n.factory,
                      isRoot: n.isRoot,
                      providers: e,
                      modules: t,
                      providersByKey: l
                    };
                  })(ul(this._ngModuleDefFactory));
                  return Lt.createNgModuleRef(
                    this.moduleType,
                    n || Te.NULL,
                    this._bootstrapComponents,
                    e
                  );
                }
              }
            ]),
            e
          );
        })(Fn),
        $u = function n() {
          _classCallCheck(this, n);
        },
        Ju = function n() {
          _classCallCheck(this, n), (this.title = 'angular-nabludenie-by');
        },
        Xu = function n() {
          _classCallCheck(this, n);
        },
        no = new Sn('Location Initialized'),
        eo = function n() {
          _classCallCheck(this, n);
        },
        to = new Sn('appBaseHref'),
        lo = (function() {
          function n(e, t) {
            var l = this;
            _classCallCheck(this, n),
              (this._subject = new _r()),
              (this._urlChangeListeners = []),
              (this._platformStrategy = e);
            var r = this._platformStrategy.getBaseHref();
            (this._platformLocation = t),
              (this._baseHref = n.stripTrailingSlash(ro(r))),
              this._platformStrategy.onPopState(function(n) {
                l._subject.emit({ url: l.path(!0), pop: !0, state: n.state, type: n.type });
              });
          }
          return (
            _createClass(
              n,
              [
                {
                  key: 'path',
                  value: function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return this.normalize(this._platformStrategy.path(n));
                  }
                },
                {
                  key: 'getState',
                  value: function() {
                    return this._platformLocation.getState();
                  }
                },
                {
                  key: 'isCurrentPathEqualTo',
                  value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
                    return this.path() == this.normalize(e + n.normalizeQueryParams(t));
                  }
                },
                {
                  key: 'normalize',
                  value: function(e) {
                    return n.stripTrailingSlash(
                      (function(n, e) {
                        return n && e.startsWith(n) ? e.substring(n.length) : e;
                      })(this._baseHref, ro(e))
                    );
                  }
                },
                {
                  key: 'prepareExternalUrl',
                  value: function(n) {
                    return (
                      n && '/' !== n[0] && (n = '/' + n),
                      this._platformStrategy.prepareExternalUrl(n)
                    );
                  }
                },
                {
                  key: 'go',
                  value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
                      l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    this._platformStrategy.pushState(l, '', e, t),
                      this._notifyUrlChangeListeners(
                        this.prepareExternalUrl(e + n.normalizeQueryParams(t)),
                        l
                      );
                  }
                },
                {
                  key: 'replaceState',
                  value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
                      l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    this._platformStrategy.replaceState(l, '', e, t),
                      this._notifyUrlChangeListeners(
                        this.prepareExternalUrl(e + n.normalizeQueryParams(t)),
                        l
                      );
                  }
                },
                {
                  key: 'forward',
                  value: function() {
                    this._platformStrategy.forward();
                  }
                },
                {
                  key: 'back',
                  value: function() {
                    this._platformStrategy.back();
                  }
                },
                {
                  key: 'onUrlChange',
                  value: function(n) {
                    var e = this;
                    this._urlChangeListeners.push(n),
                      this.subscribe(function(n) {
                        e._notifyUrlChangeListeners(n.url, n.state);
                      });
                  }
                },
                {
                  key: '_notifyUrlChangeListeners',
                  value: function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
                      e = arguments.length > 1 ? arguments[1] : void 0;
                    this._urlChangeListeners.forEach(function(t) {
                      return t(n, e);
                    });
                  }
                },
                {
                  key: 'subscribe',
                  value: function(n, e, t) {
                    return this._subject.subscribe({ next: n, error: e, complete: t });
                  }
                }
              ],
              [
                {
                  key: 'normalizeQueryParams',
                  value: function(n) {
                    return n && '?' !== n[0] ? '?' + n : n;
                  }
                },
                {
                  key: 'joinWithSlash',
                  value: function(n, e) {
                    if (0 == n.length) return e;
                    if (0 == e.length) return n;
                    var t = 0;
                    return (
                      n.endsWith('/') && t++,
                      e.startsWith('/') && t++,
                      2 == t ? n + e.substring(1) : 1 == t ? n + e : n + '/' + e
                    );
                  }
                },
                {
                  key: 'stripTrailingSlash',
                  value: function(n) {
                    var e = n.match(/#|\?|$/),
                      t = (e && e.index) || n.length;
                    return n.slice(0, t - ('/' === n[t - 1] ? 1 : 0)) + n.slice(t);
                  }
                }
              ]
            ),
            n
          );
        })();
      function ro(n) {
        return n.replace(/\/index.html$/, '');
      }
      var io = (function(n) {
          function e(n, t) {
            var l;
            return (
              _classCallCheck(this, e),
              ((l = _possibleConstructorReturn(
                this,
                _getPrototypeOf(e).call(this)
              ))._platformLocation = n),
              (l._baseHref = ''),
              null != t && (l._baseHref = t),
              l
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: 'onPopState',
                value: function(n) {
                  this._platformLocation.onPopState(n), this._platformLocation.onHashChange(n);
                }
              },
              {
                key: 'getBaseHref',
                value: function() {
                  return this._baseHref;
                }
              },
              {
                key: 'path',
                value: function() {
                  arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                  var n = this._platformLocation.hash;
                  return null == n && (n = '#'), n.length > 0 ? n.substring(1) : n;
                }
              },
              {
                key: 'prepareExternalUrl',
                value: function(n) {
                  var e = lo.joinWithSlash(this._baseHref, n);
                  return e.length > 0 ? '#' + e : e;
                }
              },
              {
                key: 'pushState',
                value: function(n, e, t, l) {
                  var r = this.prepareExternalUrl(t + lo.normalizeQueryParams(l));
                  0 == r.length && (r = this._platformLocation.pathname),
                    this._platformLocation.pushState(n, e, r);
                }
              },
              {
                key: 'replaceState',
                value: function(n, e, t, l) {
                  var r = this.prepareExternalUrl(t + lo.normalizeQueryParams(l));
                  0 == r.length && (r = this._platformLocation.pathname),
                    this._platformLocation.replaceState(n, e, r);
                }
              },
              {
                key: 'forward',
                value: function() {
                  this._platformLocation.forward();
                }
              },
              {
                key: 'back',
                value: function() {
                  this._platformLocation.back();
                }
              }
            ]),
            e
          );
        })(eo),
        uo = (function(n) {
          function e(n, t) {
            var l;
            if (
              (_classCallCheck(this, e),
              ((l = _possibleConstructorReturn(
                this,
                _getPrototypeOf(e).call(this)
              ))._platformLocation = n),
              null == t && (t = l._platformLocation.getBaseHrefFromDOM()),
              null == t)
            )
              throw new Error(
                'No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.'
              );
            return (l._baseHref = t), _possibleConstructorReturn(l);
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: 'onPopState',
                value: function(n) {
                  this._platformLocation.onPopState(n), this._platformLocation.onHashChange(n);
                }
              },
              {
                key: 'getBaseHref',
                value: function() {
                  return this._baseHref;
                }
              },
              {
                key: 'prepareExternalUrl',
                value: function(n) {
                  return lo.joinWithSlash(this._baseHref, n);
                }
              },
              {
                key: 'path',
                value: function() {
                  var n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    e =
                      this._platformLocation.pathname +
                      lo.normalizeQueryParams(this._platformLocation.search),
                    t = this._platformLocation.hash;
                  return t && n ? ''.concat(e).concat(t) : e;
                }
              },
              {
                key: 'pushState',
                value: function(n, e, t, l) {
                  var r = this.prepareExternalUrl(t + lo.normalizeQueryParams(l));
                  this._platformLocation.pushState(n, e, r);
                }
              },
              {
                key: 'replaceState',
                value: function(n, e, t, l) {
                  var r = this.prepareExternalUrl(t + lo.normalizeQueryParams(l));
                  this._platformLocation.replaceState(n, e, r);
                }
              },
              {
                key: 'forward',
                value: function() {
                  this._platformLocation.forward();
                }
              },
              {
                key: 'back',
                value: function() {
                  this._platformLocation.back();
                }
              }
            ]),
            e
          );
        })(eo),
        oo = (function() {
          var n = { Zero: 0, One: 1, Two: 2, Few: 3, Many: 4, Other: 5 };
          return (
            (n[n.Zero] = 'Zero'),
            (n[n.One] = 'One'),
            (n[n.Two] = 'Two'),
            (n[n.Few] = 'Few'),
            (n[n.Many] = 'Many'),
            (n[n.Other] = 'Other'),
            n
          );
        })(),
        ao = new Sn('UseV4Plurals'),
        so = function n() {
          _classCallCheck(this, n);
        },
        co = (function(n) {
          function e(n, t) {
            var l;
            return (
              _classCallCheck(this, e),
              ((l = _possibleConstructorReturn(this, _getPrototypeOf(e).call(this))).locale = n),
              (l.deprecatedPluralFn = t),
              l
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: 'getPluralCategory',
                value: function(n, e) {
                  switch (
                    this.deprecatedPluralFn
                      ? this.deprecatedPluralFn(e || this.locale, n)
                      : (function(n) {
                          return (function(n) {
                            var e = n.toLowerCase().replace(/_/g, '-'),
                              t = dr[e];
                            if (t) return t;
                            var l = e.split('-')[0];
                            if ((t = dr[l])) return t;
                            if ('en' === l) return gr;
                            throw new Error('Missing locale data for the locale "'.concat(n, '".'));
                          })(n)[pr.PluralCase];
                        })(e || this.locale)(n)
                  ) {
                    case oo.Zero:
                      return 'zero';
                    case oo.One:
                      return 'one';
                    case oo.Two:
                      return 'two';
                    case oo.Few:
                      return 'few';
                    case oo.Many:
                      return 'many';
                    default:
                      return 'other';
                  }
                }
              }
            ]),
            e
          );
        })(so),
        ho = (function() {
          function n(e, t) {
            _classCallCheck(this, n),
              (this._viewContainer = e),
              (this._context = new fo()),
              (this._thenTemplateRef = null),
              (this._elseTemplateRef = null),
              (this._thenViewRef = null),
              (this._elseViewRef = null),
              (this._thenTemplateRef = t);
          }
          return (
            _createClass(n, [
              {
                key: '_updateView',
                value: function() {
                  this._context.$implicit
                    ? this._thenViewRef ||
                      (this._viewContainer.clear(),
                      (this._elseViewRef = null),
                      this._thenTemplateRef &&
                        (this._thenViewRef = this._viewContainer.createEmbeddedView(
                          this._thenTemplateRef,
                          this._context
                        )))
                    : this._elseViewRef ||
                      (this._viewContainer.clear(),
                      (this._thenViewRef = null),
                      this._elseTemplateRef &&
                        (this._elseViewRef = this._viewContainer.createEmbeddedView(
                          this._elseTemplateRef,
                          this._context
                        )));
                }
              },
              {
                key: 'ngIf',
                set: function(n) {
                  (this._context.$implicit = this._context.ngIf = n), this._updateView();
                }
              },
              {
                key: 'ngIfThen',
                set: function(n) {
                  po('ngIfThen', n),
                    (this._thenTemplateRef = n),
                    (this._thenViewRef = null),
                    this._updateView();
                }
              },
              {
                key: 'ngIfElse',
                set: function(n) {
                  po('ngIfElse', n),
                    (this._elseTemplateRef = n),
                    (this._elseViewRef = null),
                    this._updateView();
                }
              }
            ]),
            n
          );
        })(),
        fo = function n() {
          _classCallCheck(this, n), (this.$implicit = null), (this.ngIf = null);
        };
      function po(n, e) {
        if (e && !e.createEmbeddedView)
          throw new Error(
            ''.concat(n, " must be a TemplateRef, but received '").concat(yn(e), "'.")
          );
      }
      var vo,
        go = function n() {
          _classCallCheck(this, n);
        },
        _o = new Sn('DocumentToken'),
        mo =
          (((vo = function n() {
            _classCallCheck(this, n);
          }).ngInjectableDef = vn({
            token: vo,
            providedIn: 'root',
            factory: function() {
              return new yo(Vn(_o), window, Vn(Zn));
            }
          })),
          vo),
        yo = (function() {
          function n(e, t, l) {
            _classCallCheck(this, n),
              (this.document = e),
              (this.window = t),
              (this.errorHandler = l),
              (this.offset = function() {
                return [0, 0];
              });
          }
          return (
            _createClass(n, [
              {
                key: 'setOffset',
                value: function(n) {
                  this.offset = Array.isArray(n)
                    ? function() {
                        return n;
                      }
                    : n;
                }
              },
              {
                key: 'getScrollPosition',
                value: function() {
                  return this.supportScrollRestoration()
                    ? [this.window.scrollX, this.window.scrollY]
                    : [0, 0];
                }
              },
              {
                key: 'scrollToPosition',
                value: function(n) {
                  this.supportScrollRestoration() && this.window.scrollTo(n[0], n[1]);
                }
              },
              {
                key: 'scrollToAnchor',
                value: function(n) {
                  if (this.supportScrollRestoration()) {
                    n =
                      this.window.CSS && this.window.CSS.escape
                        ? this.window.CSS.escape(n)
                        : n.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g, '\\$1');
                    try {
                      var e = this.document.querySelector('#'.concat(n));
                      if (e) return void this.scrollToElement(e);
                      var t = this.document.querySelector("[name='".concat(n, "']"));
                      if (t) return void this.scrollToElement(t);
                    } catch (l) {
                      this.errorHandler.handleError(l);
                    }
                  }
                }
              },
              {
                key: 'setHistoryScrollRestoration',
                value: function(n) {
                  if (this.supportScrollRestoration()) {
                    var e = this.window.history;
                    e && e.scrollRestoration && (e.scrollRestoration = n);
                  }
                }
              },
              {
                key: 'scrollToElement',
                value: function(n) {
                  var e = n.getBoundingClientRect(),
                    t = e.left + this.window.pageXOffset,
                    l = e.top + this.window.pageYOffset,
                    r = this.offset();
                  this.window.scrollTo(t - r[0], l - r[1]);
                }
              },
              {
                key: 'supportScrollRestoration',
                value: function() {
                  try {
                    return !!this.window && !!this.window.scrollTo;
                  } catch (n) {
                    return !1;
                  }
                }
              }
            ]),
            n
          );
        })(),
        Co = new w(function(n) {
          return n.complete();
        });
      function ko(n) {
        return n
          ? (function(n) {
              return new w(function(e) {
                return n.schedule(function() {
                  return e.complete();
                });
              });
            })(n)
          : Co;
      }
      function bo(n) {
        var e = new w(function(e) {
          e.next(n), e.complete();
        });
        return (e._isScalar = !0), (e.value = n), e;
      }
      function wo() {
        for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++) e[t] = arguments[t];
        var l = e[e.length - 1];
        switch ((R(l) ? e.pop() : (l = void 0), e.length)) {
          case 0:
            return ko(l);
          case 1:
            return l ? W(e, l) : bo(e[0]);
          default:
            return W(e, l);
        }
      }
      var xo = (function(n) {
        function e(n) {
          var t;
          return (
            _classCallCheck(this, e),
            ((t = _possibleConstructorReturn(this, _getPrototypeOf(e).call(this)))._value = n),
            t
          );
        }
        return (
          _inherits(e, n),
          _createClass(e, [
            {
              key: '_subscribe',
              value: function(n) {
                var t = _get(_getPrototypeOf(e.prototype), '_subscribe', this).call(this, n);
                return t && !t.closed && n.next(this._value), t;
              }
            },
            {
              key: 'getValue',
              value: function() {
                if (this.hasError) throw this.thrownError;
                if (this.closed) throw new P();
                return this._value;
              }
            },
            {
              key: 'next',
              value: function(n) {
                _get(_getPrototypeOf(e.prototype), 'next', this).call(this, (this._value = n));
              }
            },
            {
              key: 'value',
              get: function() {
                return this.getValue();
              }
            }
          ]),
          e
        );
      })(M);
      function Oo() {
        return (
          Error.call(this),
          (this.message = 'no elements in sequence'),
          (this.name = 'EmptyError'),
          this
        );
      }
      Oo.prototype = Object.create(Error.prototype);
      var Eo = Oo,
        Po = {},
        So = (function() {
          function n(e) {
            _classCallCheck(this, n), (this.resultSelector = e);
          }
          return (
            _createClass(n, [
              {
                key: 'call',
                value: function(n, e) {
                  return e.subscribe(new To(n, this.resultSelector));
                }
              }
            ]),
            n
          );
        })(),
        To = (function(n) {
          function e(n, t) {
            var l;
            return (
              _classCallCheck(this, e),
              ((l = _possibleConstructorReturn(
                this,
                _getPrototypeOf(e).call(this, n)
              )).resultSelector = t),
              (l.active = 0),
              (l.values = []),
              (l.observables = []),
              l
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: '_next',
                value: function(n) {
                  this.values.push(Po), this.observables.push(n);
                }
              },
              {
                key: '_complete',
                value: function() {
                  var n = this.observables,
                    e = n.length;
                  if (0 === e) this.destination.complete();
                  else {
                    (this.active = e), (this.toRespond = e);
                    for (var t = 0; t < e; t++) {
                      var l = n[t];
                      this.add(H(this, l, l, t));
                    }
                  }
                }
              },
              {
                key: 'notifyComplete',
                value: function(n) {
                  0 == (this.active -= 1) && this.destination.complete();
                }
              },
              {
                key: 'notifyNext',
                value: function(n, e, t, l, r) {
                  var i = this.values,
                    u = this.toRespond ? (i[t] === Po ? --this.toRespond : this.toRespond) : 0;
                  (i[t] = e),
                    0 === u &&
                      (this.resultSelector
                        ? this._tryResultSelector(i)
                        : this.destination.next(i.slice()));
                }
              },
              {
                key: '_tryResultSelector',
                value: function(n) {
                  var e;
                  try {
                    e = this.resultSelector.apply(this, n);
                  } catch (t) {
                    return void this.destination.error(t);
                  }
                  this.destination.next(e);
                }
              }
            ]),
            e
          );
        })(q);
      function Mo(n) {
        return new w(function(e) {
          var t;
          try {
            t = n();
          } catch (l) {
            return void e.error(l);
          }
          return (t ? Z(t) : ko()).subscribe(e);
        });
      }
      function Ao() {
        return X(1);
      }
      function Ro(n, e) {
        return function(t) {
          return t.lift(new Io(n, e));
        };
      }
      var Io = (function() {
          function n(e, t) {
            _classCallCheck(this, n), (this.predicate = e), (this.thisArg = t);
          }
          return (
            _createClass(n, [
              {
                key: 'call',
                value: function(n, e) {
                  return e.subscribe(new No(n, this.predicate, this.thisArg));
                }
              }
            ]),
            n
          );
        })(),
        No = (function(n) {
          function e(n, t, l) {
            var r;
            return (
              _classCallCheck(this, e),
              ((r = _possibleConstructorReturn(
                this,
                _getPrototypeOf(e).call(this, n)
              )).predicate = t),
              (r.thisArg = l),
              (r.count = 0),
              r
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: '_next',
                value: function(n) {
                  var e;
                  try {
                    e = this.predicate.call(this.thisArg, n, this.count++);
                  } catch (t) {
                    return void this.destination.error(t);
                  }
                  e && this.destination.next(n);
                }
              }
            ]),
            e
          );
        })(g);
      function Vo() {
        return (
          Error.call(this),
          (this.message = 'argument out of range'),
          (this.name = 'ArgumentOutOfRangeError'),
          this
        );
      }
      Vo.prototype = Object.create(Error.prototype);
      var Do = Vo;
      function jo(n) {
        return function(e) {
          return 0 === n ? ko() : e.lift(new Lo(n));
        };
      }
      var Lo = (function() {
          function n(e) {
            if ((_classCallCheck(this, n), (this.total = e), this.total < 0)) throw new Do();
          }
          return (
            _createClass(n, [
              {
                key: 'call',
                value: function(n, e) {
                  return e.subscribe(new Uo(n, this.total));
                }
              }
            ]),
            n
          );
        })(),
        Uo = (function(n) {
          function e(n, t) {
            var l;
            return (
              _classCallCheck(this, e),
              ((l = _possibleConstructorReturn(this, _getPrototypeOf(e).call(this, n))).total = t),
              (l.ring = new Array()),
              (l.count = 0),
              l
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: '_next',
                value: function(n) {
                  var e = this.ring,
                    t = this.total,
                    l = this.count++;
                  e.length < t ? e.push(n) : (e[l % t] = n);
                }
              },
              {
                key: '_complete',
                value: function() {
                  var n = this.destination,
                    e = this.count;
                  if (e > 0)
                    for (
                      var t = this.count >= this.total ? this.total : this.count,
                        l = this.ring,
                        r = 0;
                      r < t;
                      r++
                    ) {
                      var i = e++ % t;
                      n.next(l[i]);
                    }
                  n.complete();
                }
              }
            ]),
            e
          );
        })(g);
      function Fo(n, e, t) {
        return function(l) {
          return l.lift(new zo(n, e, t));
        };
      }
      var zo = (function() {
          function n(e, t, l) {
            _classCallCheck(this, n),
              (this.nextOrObserver = e),
              (this.error = t),
              (this.complete = l);
          }
          return (
            _createClass(n, [
              {
                key: 'call',
                value: function(n, e) {
                  return e.subscribe(new Ho(n, this.nextOrObserver, this.error, this.complete));
                }
              }
            ]),
            n
          );
        })(),
        Ho = (function(n) {
          function e(n, t, r, i) {
            var u;
            return (
              _classCallCheck(this, e),
              ((u = _possibleConstructorReturn(
                this,
                _getPrototypeOf(e).call(this, n)
              ))._tapNext = y),
              (u._tapError = y),
              (u._tapComplete = y),
              (u._tapError = r || y),
              (u._tapComplete = i || y),
              l(t)
                ? ((u._context = _assertThisInitialized(u)), (u._tapNext = t))
                : t &&
                  ((u._context = t),
                  (u._tapNext = t.next || y),
                  (u._tapError = t.error || y),
                  (u._tapComplete = t.complete || y)),
              u
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: '_next',
                value: function(n) {
                  try {
                    this._tapNext.call(this._context, n);
                  } catch (e) {
                    return void this.destination.error(e);
                  }
                  this.destination.next(n);
                }
              },
              {
                key: '_error',
                value: function(n) {
                  try {
                    this._tapError.call(this._context, n);
                  } catch (n) {
                    return void this.destination.error(n);
                  }
                  this.destination.error(n);
                }
              },
              {
                key: '_complete',
                value: function() {
                  try {
                    this._tapComplete.call(this._context);
                  } catch (n) {
                    return void this.destination.error(n);
                  }
                  return this.destination.complete();
                }
              }
            ]),
            e
          );
        })(g),
        qo = function() {
          var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bo;
          return Fo({
            hasValue: !1,
            next: function() {
              this.hasValue = !0;
            },
            complete: function() {
              if (!this.hasValue) throw n();
            }
          });
        };
      function Bo() {
        return new Eo();
      }
      function Go() {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return function(e) {
          return e.lift(new Ko(n));
        };
      }
      var Ko = (function() {
          function n(e) {
            _classCallCheck(this, n), (this.defaultValue = e);
          }
          return (
            _createClass(n, [
              {
                key: 'call',
                value: function(n, e) {
                  return e.subscribe(new Wo(n, this.defaultValue));
                }
              }
            ]),
            n
          );
        })(),
        Wo = (function(n) {
          function e(n, t) {
            var l;
            return (
              _classCallCheck(this, e),
              ((l = _possibleConstructorReturn(
                this,
                _getPrototypeOf(e).call(this, n)
              )).defaultValue = t),
              (l.isEmpty = !0),
              l
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: '_next',
                value: function(n) {
                  (this.isEmpty = !1), this.destination.next(n);
                }
              },
              {
                key: '_complete',
                value: function() {
                  this.isEmpty && this.destination.next(this.defaultValue),
                    this.destination.complete();
                }
              }
            ]),
            e
          );
        })(g);
      function Zo(n, e) {
        var t = arguments.length >= 2;
        return function(l) {
          return l.pipe(
            n
              ? Ro(function(e, t) {
                  return n(e, t, l);
                })
              : J,
            jo(1),
            t
              ? Go(e)
              : qo(function() {
                  return new Eo();
                })
          );
        };
      }
      function Qo(n) {
        return function(e) {
          var t = new Yo(n),
            l = e.lift(t);
          return (t.caught = l);
        };
      }
      var Yo = (function() {
          function n(e) {
            _classCallCheck(this, n), (this.selector = e);
          }
          return (
            _createClass(n, [
              {
                key: 'call',
                value: function(n, e) {
                  return e.subscribe(new $o(n, this.selector, this.caught));
                }
              }
            ]),
            n
          );
        })(),
        $o = (function(n) {
          function e(n, t, l) {
            var r;
            return (
              _classCallCheck(this, e),
              ((r = _possibleConstructorReturn(
                this,
                _getPrototypeOf(e).call(this, n)
              )).selector = t),
              (r.caught = l),
              r
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: 'error',
                value: function(n) {
                  if (!this.isStopped) {
                    var t;
                    try {
                      t = this.selector(n, this.caught);
                    } catch (r) {
                      return void _get(_getPrototypeOf(e.prototype), 'error', this).call(this, r);
                    }
                    this._unsubscribeAndRecycle();
                    var l = new I(this, void 0, void 0);
                    this.add(l), H(this, t, void 0, void 0, l);
                  }
                }
              }
            ]),
            e
          );
        })(q);
      function Jo(n) {
        return function(e) {
          return 0 === n ? ko() : e.lift(new Xo(n));
        };
      }
      var Xo = (function() {
          function n(e) {
            if ((_classCallCheck(this, n), (this.total = e), this.total < 0)) throw new Do();
          }
          return (
            _createClass(n, [
              {
                key: 'call',
                value: function(n, e) {
                  return e.subscribe(new na(n, this.total));
                }
              }
            ]),
            n
          );
        })(),
        na = (function(n) {
          function e(n, t) {
            var l;
            return (
              _classCallCheck(this, e),
              ((l = _possibleConstructorReturn(this, _getPrototypeOf(e).call(this, n))).total = t),
              (l.count = 0),
              l
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: '_next',
                value: function(n) {
                  var e = this.total,
                    t = ++this.count;
                  t <= e &&
                    (this.destination.next(n),
                    t === e && (this.destination.complete(), this.unsubscribe()));
                }
              }
            ]),
            e
          );
        })(g);
      function ea(n, e) {
        var t = arguments.length >= 2;
        return function(l) {
          return l.pipe(
            n
              ? Ro(function(e, t) {
                  return n(e, t, l);
                })
              : J,
            Jo(1),
            t
              ? Go(e)
              : qo(function() {
                  return new Eo();
                })
          );
        };
      }
      var ta = (function() {
          function n(e, t, l) {
            _classCallCheck(this, n), (this.predicate = e), (this.thisArg = t), (this.source = l);
          }
          return (
            _createClass(n, [
              {
                key: 'call',
                value: function(n, e) {
                  return e.subscribe(new la(n, this.predicate, this.thisArg, this.source));
                }
              }
            ]),
            n
          );
        })(),
        la = (function(n) {
          function e(n, t, l, r) {
            var i;
            return (
              _classCallCheck(this, e),
              ((i = _possibleConstructorReturn(
                this,
                _getPrototypeOf(e).call(this, n)
              )).predicate = t),
              (i.thisArg = l),
              (i.source = r),
              (i.index = 0),
              (i.thisArg = l || _assertThisInitialized(i)),
              i
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: 'notifyComplete',
                value: function(n) {
                  this.destination.next(n), this.destination.complete();
                }
              },
              {
                key: '_next',
                value: function(n) {
                  var e = !1;
                  try {
                    e = this.predicate.call(this.thisArg, n, this.index++, this.source);
                  } catch (t) {
                    return void this.destination.error(t);
                  }
                  e || this.notifyComplete(!1);
                }
              },
              {
                key: '_complete',
                value: function() {
                  this.notifyComplete(!0);
                }
              }
            ]),
            e
          );
        })(g);
      function ra(n, e) {
        return 'function' == typeof e
          ? function(t) {
              return t.pipe(
                ra(function(t, l) {
                  return Z(n(t, l)).pipe(
                    B(function(n, r) {
                      return e(t, n, l, r);
                    })
                  );
                })
              );
            }
          : function(e) {
              return e.lift(new ia(n));
            };
      }
      var ia = (function() {
          function n(e) {
            _classCallCheck(this, n), (this.project = e);
          }
          return (
            _createClass(n, [
              {
                key: 'call',
                value: function(n, e) {
                  return e.subscribe(new ua(n, this.project));
                }
              }
            ]),
            n
          );
        })(),
        ua = (function(n) {
          function e(n, t) {
            var l;
            return (
              _classCallCheck(this, e),
              ((l = _possibleConstructorReturn(
                this,
                _getPrototypeOf(e).call(this, n)
              )).project = t),
              (l.index = 0),
              l
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: '_next',
                value: function(n) {
                  var e,
                    t = this.index++;
                  try {
                    e = this.project(n, t);
                  } catch (l) {
                    return void this.destination.error(l);
                  }
                  this._innerSub(e, n, t);
                }
              },
              {
                key: '_innerSub',
                value: function(n, e, t) {
                  var l = this.innerSubscription;
                  l && l.unsubscribe();
                  var r = new I(this, void 0, void 0);
                  this.destination.add(r), (this.innerSubscription = H(this, n, e, t, r));
                }
              },
              {
                key: '_complete',
                value: function() {
                  var n = this.innerSubscription;
                  (n && !n.closed) ||
                    _get(_getPrototypeOf(e.prototype), '_complete', this).call(this),
                    this.unsubscribe();
                }
              },
              {
                key: '_unsubscribe',
                value: function() {
                  this.innerSubscription = null;
                }
              },
              {
                key: 'notifyComplete',
                value: function(n) {
                  this.destination.remove(n),
                    (this.innerSubscription = null),
                    this.isStopped &&
                      _get(_getPrototypeOf(e.prototype), '_complete', this).call(this);
                }
              },
              {
                key: 'notifyNext',
                value: function(n, e, t, l, r) {
                  this.destination.next(e);
                }
              }
            ]),
            e
          );
        })(q);
      function oa(n, e) {
        var t = !1;
        return (
          arguments.length >= 2 && (t = !0),
          function(l) {
            return l.lift(new aa(n, e, t));
          }
        );
      }
      var aa = (function() {
          function n(e, t) {
            var l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            _classCallCheck(this, n), (this.accumulator = e), (this.seed = t), (this.hasSeed = l);
          }
          return (
            _createClass(n, [
              {
                key: 'call',
                value: function(n, e) {
                  return e.subscribe(new sa(n, this.accumulator, this.seed, this.hasSeed));
                }
              }
            ]),
            n
          );
        })(),
        sa = (function(n) {
          function e(n, t, l, r) {
            var i;
            return (
              _classCallCheck(this, e),
              ((i = _possibleConstructorReturn(
                this,
                _getPrototypeOf(e).call(this, n)
              )).accumulator = t),
              (i._seed = l),
              (i.hasSeed = r),
              (i.index = 0),
              i
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: '_next',
                value: function(n) {
                  if (this.hasSeed) return this._tryNext(n);
                  (this.seed = n), this.destination.next(n);
                }
              },
              {
                key: '_tryNext',
                value: function(n) {
                  var e,
                    t = this.index++;
                  try {
                    e = this.accumulator(this.seed, n, t);
                  } catch (l) {
                    this.destination.error(l);
                  }
                  (this.seed = e), this.destination.next(e);
                }
              },
              {
                key: 'seed',
                get: function() {
                  return this._seed;
                },
                set: function(n) {
                  (this.hasSeed = !0), (this._seed = n);
                }
              }
            ]),
            e
          );
        })(g);
      function ca(n, e) {
        return Q(n, e, 1);
      }
      var ha = (function() {
          function n(e) {
            _classCallCheck(this, n), (this.callback = e);
          }
          return (
            _createClass(n, [
              {
                key: 'call',
                value: function(n, e) {
                  return e.subscribe(new fa(n, this.callback));
                }
              }
            ]),
            n
          );
        })(),
        fa = (function(n) {
          function e(n, t) {
            var l;
            return (
              _classCallCheck(this, e),
              (l = _possibleConstructorReturn(this, _getPrototypeOf(e).call(this, n))).add(
                new d(t)
              ),
              l
            );
          }
          return _inherits(e, n), e;
        })(g),
        da = null;
      function pa() {
        return da;
      }
      var va,
        ga = {
          class: 'className',
          innerHtml: 'innerHTML',
          readonly: 'readOnly',
          tabindex: 'tabIndex'
        },
        _a = {
          '\b': 'Backspace',
          '\t': 'Tab',
          '\x7f': 'Delete',
          '\x1b': 'Escape',
          Del: 'Delete',
          Esc: 'Escape',
          Left: 'ArrowLeft',
          Right: 'ArrowRight',
          Up: 'ArrowUp',
          Down: 'ArrowDown',
          Menu: 'ContextMenu',
          Scroll: 'ScrollLock',
          Win: 'OS'
        },
        ma = {
          A: '1',
          B: '2',
          C: '3',
          D: '4',
          E: '5',
          F: '6',
          G: '7',
          H: '8',
          I: '9',
          J: '*',
          K: '+',
          M: '-',
          N: '.',
          O: '/',
          '`': '0',
          '\x90': 'NumLock'
        },
        ya = (function() {
          if (Pn.Node)
            return (
              Pn.Node.prototype.contains ||
              function(n) {
                return !!(16 & this.compareDocumentPosition(n));
              }
            );
        })(),
        Ca = (function(n) {
          function e() {
            return (
              _classCallCheck(this, e),
              _possibleConstructorReturn(this, _getPrototypeOf(e).apply(this, arguments))
            );
          }
          return (
            _inherits(e, n),
            _createClass(
              e,
              [
                {
                  key: 'parse',
                  value: function(n) {
                    throw new Error('parse not implemented');
                  }
                },
                {
                  key: 'hasProperty',
                  value: function(n, e) {
                    return e in n;
                  }
                },
                {
                  key: 'setProperty',
                  value: function(n, e, t) {
                    n[e] = t;
                  }
                },
                {
                  key: 'getProperty',
                  value: function(n, e) {
                    return n[e];
                  }
                },
                {
                  key: 'invoke',
                  value: function(n, e, t) {
                    n[e].apply(n, _toConsumableArray(t));
                  }
                },
                {
                  key: 'logError',
                  value: function(n) {
                    window.console && (console.error ? console.error(n) : console.log(n));
                  }
                },
                {
                  key: 'log',
                  value: function(n) {
                    window.console && window.console.log && window.console.log(n);
                  }
                },
                {
                  key: 'logGroup',
                  value: function(n) {
                    window.console && window.console.group && window.console.group(n);
                  }
                },
                {
                  key: 'logGroupEnd',
                  value: function() {
                    window.console && window.console.groupEnd && window.console.groupEnd();
                  }
                },
                {
                  key: 'contains',
                  value: function(n, e) {
                    return ya.call(n, e);
                  }
                },
                {
                  key: 'querySelector',
                  value: function(n, e) {
                    return n.querySelector(e);
                  }
                },
                {
                  key: 'querySelectorAll',
                  value: function(n, e) {
                    return n.querySelectorAll(e);
                  }
                },
                {
                  key: 'on',
                  value: function(n, e, t) {
                    n.addEventListener(e, t, !1);
                  }
                },
                {
                  key: 'onAndCancel',
                  value: function(n, e, t) {
                    return (
                      n.addEventListener(e, t, !1),
                      function() {
                        n.removeEventListener(e, t, !1);
                      }
                    );
                  }
                },
                {
                  key: 'dispatchEvent',
                  value: function(n, e) {
                    n.dispatchEvent(e);
                  }
                },
                {
                  key: 'createMouseEvent',
                  value: function(n) {
                    var e = this.getDefaultDocument().createEvent('MouseEvent');
                    return e.initEvent(n, !0, !0), e;
                  }
                },
                {
                  key: 'createEvent',
                  value: function(n) {
                    var e = this.getDefaultDocument().createEvent('Event');
                    return e.initEvent(n, !0, !0), e;
                  }
                },
                {
                  key: 'preventDefault',
                  value: function(n) {
                    n.preventDefault(), (n.returnValue = !1);
                  }
                },
                {
                  key: 'isPrevented',
                  value: function(n) {
                    return n.defaultPrevented || (null != n.returnValue && !n.returnValue);
                  }
                },
                {
                  key: 'getInnerHTML',
                  value: function(n) {
                    return n.innerHTML;
                  }
                },
                {
                  key: 'getTemplateContent',
                  value: function(n) {
                    return 'content' in n && this.isTemplateElement(n) ? n.content : null;
                  }
                },
                {
                  key: 'getOuterHTML',
                  value: function(n) {
                    return n.outerHTML;
                  }
                },
                {
                  key: 'nodeName',
                  value: function(n) {
                    return n.nodeName;
                  }
                },
                {
                  key: 'nodeValue',
                  value: function(n) {
                    return n.nodeValue;
                  }
                },
                {
                  key: 'type',
                  value: function(n) {
                    return n.type;
                  }
                },
                {
                  key: 'content',
                  value: function(n) {
                    return this.hasProperty(n, 'content') ? n.content : n;
                  }
                },
                {
                  key: 'firstChild',
                  value: function(n) {
                    return n.firstChild;
                  }
                },
                {
                  key: 'nextSibling',
                  value: function(n) {
                    return n.nextSibling;
                  }
                },
                {
                  key: 'parentElement',
                  value: function(n) {
                    return n.parentNode;
                  }
                },
                {
                  key: 'childNodes',
                  value: function(n) {
                    return n.childNodes;
                  }
                },
                {
                  key: 'childNodesAsList',
                  value: function(n) {
                    for (var e = n.childNodes, t = new Array(e.length), l = 0; l < e.length; l++)
                      t[l] = e[l];
                    return t;
                  }
                },
                {
                  key: 'clearNodes',
                  value: function(n) {
                    for (; n.firstChild; ) n.removeChild(n.firstChild);
                  }
                },
                {
                  key: 'appendChild',
                  value: function(n, e) {
                    n.appendChild(e);
                  }
                },
                {
                  key: 'removeChild',
                  value: function(n, e) {
                    n.removeChild(e);
                  }
                },
                {
                  key: 'replaceChild',
                  value: function(n, e, t) {
                    n.replaceChild(e, t);
                  }
                },
                {
                  key: 'remove',
                  value: function(n) {
                    return n.parentNode && n.parentNode.removeChild(n), n;
                  }
                },
                {
                  key: 'insertBefore',
                  value: function(n, e, t) {
                    n.insertBefore(t, e);
                  }
                },
                {
                  key: 'insertAllBefore',
                  value: function(n, e, t) {
                    t.forEach(function(t) {
                      return n.insertBefore(t, e);
                    });
                  }
                },
                {
                  key: 'insertAfter',
                  value: function(n, e, t) {
                    n.insertBefore(t, e.nextSibling);
                  }
                },
                {
                  key: 'setInnerHTML',
                  value: function(n, e) {
                    n.innerHTML = e;
                  }
                },
                {
                  key: 'getText',
                  value: function(n) {
                    return n.textContent;
                  }
                },
                {
                  key: 'setText',
                  value: function(n, e) {
                    n.textContent = e;
                  }
                },
                {
                  key: 'getValue',
                  value: function(n) {
                    return n.value;
                  }
                },
                {
                  key: 'setValue',
                  value: function(n, e) {
                    n.value = e;
                  }
                },
                {
                  key: 'getChecked',
                  value: function(n) {
                    return n.checked;
                  }
                },
                {
                  key: 'setChecked',
                  value: function(n, e) {
                    n.checked = e;
                  }
                },
                {
                  key: 'createComment',
                  value: function(n) {
                    return this.getDefaultDocument().createComment(n);
                  }
                },
                {
                  key: 'createTemplate',
                  value: function(n) {
                    var e = this.getDefaultDocument().createElement('template');
                    return (e.innerHTML = n), e;
                  }
                },
                {
                  key: 'createElement',
                  value: function(n, e) {
                    return (e = e || this.getDefaultDocument()).createElement(n);
                  }
                },
                {
                  key: 'createElementNS',
                  value: function(n, e, t) {
                    return (t = t || this.getDefaultDocument()).createElementNS(n, e);
                  }
                },
                {
                  key: 'createTextNode',
                  value: function(n, e) {
                    return (e = e || this.getDefaultDocument()).createTextNode(n);
                  }
                },
                {
                  key: 'createScriptTag',
                  value: function(n, e, t) {
                    var l = (t = t || this.getDefaultDocument()).createElement('SCRIPT');
                    return l.setAttribute(n, e), l;
                  }
                },
                {
                  key: 'createStyleElement',
                  value: function(n, e) {
                    var t = (e = e || this.getDefaultDocument()).createElement('style');
                    return this.appendChild(t, this.createTextNode(n, e)), t;
                  }
                },
                {
                  key: 'createShadowRoot',
                  value: function(n) {
                    return n.createShadowRoot();
                  }
                },
                {
                  key: 'getShadowRoot',
                  value: function(n) {
                    return n.shadowRoot;
                  }
                },
                {
                  key: 'getHost',
                  value: function(n) {
                    return n.host;
                  }
                },
                {
                  key: 'clone',
                  value: function(n) {
                    return n.cloneNode(!0);
                  }
                },
                {
                  key: 'getElementsByClassName',
                  value: function(n, e) {
                    return n.getElementsByClassName(e);
                  }
                },
                {
                  key: 'getElementsByTagName',
                  value: function(n, e) {
                    return n.getElementsByTagName(e);
                  }
                },
                {
                  key: 'classList',
                  value: function(n) {
                    return Array.prototype.slice.call(n.classList, 0);
                  }
                },
                {
                  key: 'addClass',
                  value: function(n, e) {
                    n.classList.add(e);
                  }
                },
                {
                  key: 'removeClass',
                  value: function(n, e) {
                    n.classList.remove(e);
                  }
                },
                {
                  key: 'hasClass',
                  value: function(n, e) {
                    return n.classList.contains(e);
                  }
                },
                {
                  key: 'setStyle',
                  value: function(n, e, t) {
                    n.style[e] = t;
                  }
                },
                {
                  key: 'removeStyle',
                  value: function(n, e) {
                    n.style[e] = '';
                  }
                },
                {
                  key: 'getStyle',
                  value: function(n, e) {
                    return n.style[e];
                  }
                },
                {
                  key: 'hasStyle',
                  value: function(n, e, t) {
                    var l = this.getStyle(n, e) || '';
                    return t ? l == t : l.length > 0;
                  }
                },
                {
                  key: 'tagName',
                  value: function(n) {
                    return n.tagName;
                  }
                },
                {
                  key: 'attributeMap',
                  value: function(n) {
                    for (var e = new Map(), t = n.attributes, l = 0; l < t.length; l++) {
                      var r = t.item(l);
                      e.set(r.name, r.value);
                    }
                    return e;
                  }
                },
                {
                  key: 'hasAttribute',
                  value: function(n, e) {
                    return n.hasAttribute(e);
                  }
                },
                {
                  key: 'hasAttributeNS',
                  value: function(n, e, t) {
                    return n.hasAttributeNS(e, t);
                  }
                },
                {
                  key: 'getAttribute',
                  value: function(n, e) {
                    return n.getAttribute(e);
                  }
                },
                {
                  key: 'getAttributeNS',
                  value: function(n, e, t) {
                    return n.getAttributeNS(e, t);
                  }
                },
                {
                  key: 'setAttribute',
                  value: function(n, e, t) {
                    n.setAttribute(e, t);
                  }
                },
                {
                  key: 'setAttributeNS',
                  value: function(n, e, t, l) {
                    n.setAttributeNS(e, t, l);
                  }
                },
                {
                  key: 'removeAttribute',
                  value: function(n, e) {
                    n.removeAttribute(e);
                  }
                },
                {
                  key: 'removeAttributeNS',
                  value: function(n, e, t) {
                    n.removeAttributeNS(e, t);
                  }
                },
                {
                  key: 'templateAwareRoot',
                  value: function(n) {
                    return this.isTemplateElement(n) ? this.content(n) : n;
                  }
                },
                {
                  key: 'createHtmlDocument',
                  value: function() {
                    return document.implementation.createHTMLDocument('fakeTitle');
                  }
                },
                {
                  key: 'getDefaultDocument',
                  value: function() {
                    return document;
                  }
                },
                {
                  key: 'getBoundingClientRect',
                  value: function(n) {
                    try {
                      return n.getBoundingClientRect();
                    } catch (e) {
                      return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
                    }
                  }
                },
                {
                  key: 'getTitle',
                  value: function(n) {
                    return n.title;
                  }
                },
                {
                  key: 'setTitle',
                  value: function(n, e) {
                    n.title = e || '';
                  }
                },
                {
                  key: 'elementMatches',
                  value: function(n, e) {
                    return (
                      !!this.isElementNode(n) &&
                      ((n.matches && n.matches(e)) ||
                        (n.msMatchesSelector && n.msMatchesSelector(e)) ||
                        (n.webkitMatchesSelector && n.webkitMatchesSelector(e)))
                    );
                  }
                },
                {
                  key: 'isTemplateElement',
                  value: function(n) {
                    return this.isElementNode(n) && 'TEMPLATE' === n.nodeName;
                  }
                },
                {
                  key: 'isTextNode',
                  value: function(n) {
                    return n.nodeType === Node.TEXT_NODE;
                  }
                },
                {
                  key: 'isCommentNode',
                  value: function(n) {
                    return n.nodeType === Node.COMMENT_NODE;
                  }
                },
                {
                  key: 'isElementNode',
                  value: function(n) {
                    return n.nodeType === Node.ELEMENT_NODE;
                  }
                },
                {
                  key: 'hasShadowRoot',
                  value: function(n) {
                    return null != n.shadowRoot && n instanceof HTMLElement;
                  }
                },
                {
                  key: 'isShadowRoot',
                  value: function(n) {
                    return n instanceof DocumentFragment;
                  }
                },
                {
                  key: 'importIntoDoc',
                  value: function(n) {
                    return document.importNode(this.templateAwareRoot(n), !0);
                  }
                },
                {
                  key: 'adoptNode',
                  value: function(n) {
                    return document.adoptNode(n);
                  }
                },
                {
                  key: 'getHref',
                  value: function(n) {
                    return n.getAttribute('href');
                  }
                },
                {
                  key: 'getEventKey',
                  value: function(n) {
                    var e = n.key;
                    if (null == e) {
                      if (null == (e = n.keyIdentifier)) return 'Unidentified';
                      e.startsWith('U+') &&
                        ((e = String.fromCharCode(parseInt(e.substring(2), 16))),
                        3 === n.location && ma.hasOwnProperty(e) && (e = ma[e]));
                    }
                    return _a[e] || e;
                  }
                },
                {
                  key: 'getGlobalEventTarget',
                  value: function(n, e) {
                    return 'window' === e
                      ? window
                      : 'document' === e
                      ? n
                      : 'body' === e
                      ? n.body
                      : null;
                  }
                },
                {
                  key: 'getHistory',
                  value: function() {
                    return window.history;
                  }
                },
                {
                  key: 'getLocation',
                  value: function() {
                    return window.location;
                  }
                },
                {
                  key: 'getBaseHref',
                  value: function(n) {
                    var e,
                      t =
                        ka || (ka = document.querySelector('base'))
                          ? ka.getAttribute('href')
                          : null;
                    return null == t
                      ? null
                      : ((e = t),
                        va || (va = document.createElement('a')),
                        va.setAttribute('href', e),
                        '/' === va.pathname.charAt(0) ? va.pathname : '/' + va.pathname);
                  }
                },
                {
                  key: 'resetBaseElement',
                  value: function() {
                    ka = null;
                  }
                },
                {
                  key: 'getUserAgent',
                  value: function() {
                    return window.navigator.userAgent;
                  }
                },
                {
                  key: 'setData',
                  value: function(n, e, t) {
                    this.setAttribute(n, 'data-' + e, t);
                  }
                },
                {
                  key: 'getData',
                  value: function(n, e) {
                    return this.getAttribute(n, 'data-' + e);
                  }
                },
                {
                  key: 'getComputedStyle',
                  value: (function(n) {
                    function e(e) {
                      return n.apply(this, arguments);
                    }
                    return (
                      (e.toString = function() {
                        return n.toString();
                      }),
                      e
                    );
                  })(function(n) {
                    return getComputedStyle(n);
                  })
                },
                {
                  key: 'supportsWebAnimation',
                  value: function() {
                    return 'function' == typeof Element.prototype.animate;
                  }
                },
                {
                  key: 'performanceNow',
                  value: function() {
                    return window.performance && window.performance.now
                      ? window.performance.now()
                      : new Date().getTime();
                  }
                },
                {
                  key: 'supportsCookies',
                  value: function() {
                    return !0;
                  }
                },
                {
                  key: 'getCookie',
                  value: function(n) {
                    return (function(n, e) {
                      e = encodeURIComponent(e);
                      var t = !0,
                        l = !1,
                        r = void 0;
                      try {
                        for (
                          var i, u = n.split(';')[Symbol.iterator]();
                          !(t = (i = u.next()).done);
                          t = !0
                        ) {
                          var o = i.value,
                            a = o.indexOf('='),
                            s = _slicedToArray(
                              -1 == a ? [o, ''] : [o.slice(0, a), o.slice(a + 1)],
                              2
                            ),
                            c = s[0],
                            h = s[1];
                          if (c.trim() === e) return decodeURIComponent(h);
                        }
                      } catch (f) {
                        (l = !0), (r = f);
                      } finally {
                        try {
                          t || null == u.return || u.return();
                        } finally {
                          if (l) throw r;
                        }
                      }
                      return null;
                    })(document.cookie, n);
                  }
                },
                {
                  key: 'setCookie',
                  value: function(n, e) {
                    document.cookie = encodeURIComponent(n) + '=' + encodeURIComponent(e);
                  }
                },
                {
                  key: 'attrToPropMap',
                  get: function() {
                    return ga;
                  }
                }
              ],
              [
                {
                  key: 'makeCurrent',
                  value: function() {
                    var n;
                    (n = new e()), da || (da = n);
                  }
                }
              ]
            ),
            e
          );
        })(
          (function(n) {
            function e() {
              var n;
              _classCallCheck(this, e),
                ((n = _possibleConstructorReturn(
                  this,
                  _getPrototypeOf(e).call(this)
                ))._animationPrefix = null),
                (n._transitionEnd = null);
              try {
                var t = n.createElement('div', document);
                if (null != n.getStyle(t, 'animationName')) n._animationPrefix = '';
                else
                  for (var l = ['Webkit', 'Moz', 'O', 'ms'], r = 0; r < l.length; r++)
                    if (null != n.getStyle(t, l[r] + 'AnimationName')) {
                      n._animationPrefix = '-' + l[r].toLowerCase() + '-';
                      break;
                    }
                var i = {
                  WebkitTransition: 'webkitTransitionEnd',
                  MozTransition: 'transitionend',
                  OTransition: 'oTransitionEnd otransitionend',
                  transition: 'transitionend'
                };
                Object.keys(i).forEach(function(e) {
                  null != n.getStyle(t, e) && (n._transitionEnd = i[e]);
                });
              } catch (u) {
                (n._animationPrefix = null), (n._transitionEnd = null);
              }
              return n;
            }
            return (
              _inherits(e, n),
              _createClass(e, [
                {
                  key: 'getDistributedNodes',
                  value: function(n) {
                    return n.getDistributedNodes();
                  }
                },
                {
                  key: 'resolveAndSetHref',
                  value: function(n, e, t) {
                    n.href = null == t ? e : e + '/../' + t;
                  }
                },
                {
                  key: 'supportsDOMEvents',
                  value: function() {
                    return !0;
                  }
                },
                {
                  key: 'supportsNativeShadowDOM',
                  value: function() {
                    return 'function' == typeof document.body.createShadowRoot;
                  }
                },
                {
                  key: 'getAnimationPrefix',
                  value: function() {
                    return this._animationPrefix ? this._animationPrefix : '';
                  }
                },
                {
                  key: 'getTransitionEnd',
                  value: function() {
                    return this._transitionEnd ? this._transitionEnd : '';
                  }
                },
                {
                  key: 'supportsAnimation',
                  value: function() {
                    return null != this._animationPrefix && null != this._transitionEnd;
                  }
                }
              ]),
              e
            );
          })(
            (function() {
              function n() {
                _classCallCheck(this, n), (this.resourceLoaderType = null);
              }
              return (
                _createClass(n, [
                  {
                    key: 'attrToPropMap',
                    get: function() {
                      return this._attrToPropMap;
                    },
                    set: function(n) {
                      this._attrToPropMap = n;
                    }
                  }
                ]),
                n
              );
            })()
          )
        ),
        ka = null;
      function ba() {
        return !!window.history.pushState;
      }
      var wa = new Sn('TRANSITION_ID'),
        xa = [
          {
            provide: Cr,
            useFactory: function(n, e, t) {
              return function() {
                t.get(kr).donePromise.then(function() {
                  var t = pa();
                  Array.prototype.slice
                    .apply(t.querySelectorAll(e, 'style[ng-transition]'))
                    .filter(function(e) {
                      return t.getAttribute(e, 'ng-transition') === n;
                    })
                    .forEach(function(n) {
                      return t.remove(n);
                    });
                });
              };
            },
            deps: [wa, _o, Te],
            multi: !0
          }
        ],
        Oa = (function() {
          function n() {
            _classCallCheck(this, n);
          }
          return (
            _createClass(
              n,
              [
                {
                  key: 'addToWindow',
                  value: function(n) {
                    (Pn.getAngularTestability = function(e) {
                      var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        l = n.findTestabilityInTree(e, t);
                      if (null == l) throw new Error('Could not find testability for element.');
                      return l;
                    }),
                      (Pn.getAllAngularTestabilities = function() {
                        return n.getAllTestabilities();
                      }),
                      (Pn.getAllAngularRootElements = function() {
                        return n.getAllRootElements();
                      }),
                      Pn.frameworkStabilizers || (Pn.frameworkStabilizers = []),
                      Pn.frameworkStabilizers.push(function(n) {
                        var e = Pn.getAllAngularTestabilities(),
                          t = e.length,
                          l = !1,
                          r = function(e) {
                            (l = l || e), 0 == --t && n(l);
                          };
                        e.forEach(function(n) {
                          n.whenStable(r);
                        });
                      });
                  }
                },
                {
                  key: 'findTestabilityInTree',
                  value: function(n, e, t) {
                    if (null == e) return null;
                    var l = n.getTestability(e);
                    return null != l
                      ? l
                      : t
                      ? pa().isShadowRoot(e)
                        ? this.findTestabilityInTree(n, pa().getHost(e), !0)
                        : this.findTestabilityInTree(n, pa().parentElement(e), !0)
                      : null;
                  }
                }
              ],
              [
                {
                  key: 'init',
                  value: function() {
                    var e;
                    (e = new n()), (ti = e);
                  }
                }
              ]
            ),
            n
          );
        })();
      function Ea(n, e) {
        ('undefined' != typeof COMPILED && COMPILED) || ((Pn.ng = Pn.ng || {})[n] = e);
      }
      var Pa = { ApplicationRef: ci, NgZone: Kr };
      function Sa(n) {
        return ki(n);
      }
      var Ta = new Sn('EventManagerPlugins'),
        Ma = (function() {
          function n(e, t) {
            var l = this;
            _classCallCheck(this, n),
              (this._zone = t),
              (this._eventNameToPlugin = new Map()),
              e.forEach(function(n) {
                return (n.manager = l);
              }),
              (this._plugins = e.slice().reverse());
          }
          return (
            _createClass(n, [
              {
                key: 'addEventListener',
                value: function(n, e, t) {
                  return this._findPluginFor(e).addEventListener(n, e, t);
                }
              },
              {
                key: 'addGlobalEventListener',
                value: function(n, e, t) {
                  return this._findPluginFor(e).addGlobalEventListener(n, e, t);
                }
              },
              {
                key: 'getZone',
                value: function() {
                  return this._zone;
                }
              },
              {
                key: '_findPluginFor',
                value: function(n) {
                  var e = this._eventNameToPlugin.get(n);
                  if (e) return e;
                  for (var t = this._plugins, l = 0; l < t.length; l++) {
                    var r = t[l];
                    if (r.supports(n)) return this._eventNameToPlugin.set(n, r), r;
                  }
                  throw new Error('No event manager plugin found for event '.concat(n));
                }
              }
            ]),
            n
          );
        })(),
        Aa = (function() {
          function n(e) {
            _classCallCheck(this, n), (this._doc = e);
          }
          return (
            _createClass(n, [
              {
                key: 'addGlobalEventListener',
                value: function(n, e, t) {
                  var l = pa().getGlobalEventTarget(this._doc, n);
                  if (!l)
                    throw new Error('Unsupported event target '.concat(l, ' for event ').concat(e));
                  return this.addEventListener(l, e, t);
                }
              }
            ]),
            n
          );
        })(),
        Ra = (function() {
          function n() {
            _classCallCheck(this, n), (this._stylesSet = new Set());
          }
          return (
            _createClass(n, [
              {
                key: 'addStyles',
                value: function(n) {
                  var e = this,
                    t = new Set();
                  n.forEach(function(n) {
                    e._stylesSet.has(n) || (e._stylesSet.add(n), t.add(n));
                  }),
                    this.onStylesAdded(t);
                }
              },
              { key: 'onStylesAdded', value: function(n) {} },
              {
                key: 'getAllStyles',
                value: function() {
                  return Array.from(this._stylesSet);
                }
              }
            ]),
            n
          );
        })(),
        Ia = (function(n) {
          function e(n) {
            var t;
            return (
              _classCallCheck(this, e),
              ((t = _possibleConstructorReturn(this, _getPrototypeOf(e).call(this)))._doc = n),
              (t._hostNodes = new Set()),
              (t._styleNodes = new Set()),
              t._hostNodes.add(n.head),
              t
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: '_addStylesToHost',
                value: function(n, e) {
                  var t = this;
                  n.forEach(function(n) {
                    var l = t._doc.createElement('style');
                    (l.textContent = n), t._styleNodes.add(e.appendChild(l));
                  });
                }
              },
              {
                key: 'addHost',
                value: function(n) {
                  this._addStylesToHost(this._stylesSet, n), this._hostNodes.add(n);
                }
              },
              {
                key: 'removeHost',
                value: function(n) {
                  this._hostNodes.delete(n);
                }
              },
              {
                key: 'onStylesAdded',
                value: function(n) {
                  var e = this;
                  this._hostNodes.forEach(function(t) {
                    return e._addStylesToHost(n, t);
                  });
                }
              },
              {
                key: 'ngOnDestroy',
                value: function() {
                  this._styleNodes.forEach(function(n) {
                    return pa().remove(n);
                  });
                }
              }
            ]),
            e
          );
        })(Ra),
        Na = {
          svg: 'http://www.w3.org/2000/svg',
          xhtml: 'http://www.w3.org/1999/xhtml',
          xlink: 'http://www.w3.org/1999/xlink',
          xml: 'http://www.w3.org/XML/1998/namespace',
          xmlns: 'http://www.w3.org/2000/xmlns/'
        },
        Va = /%COMP%/g;
      function Da(n, e, t) {
        for (var l = 0; l < e.length; l++) {
          var r = e[l];
          Array.isArray(r) ? Da(n, r, t) : ((r = r.replace(Va, n)), t.push(r));
        }
        return t;
      }
      function ja(n) {
        return function(e) {
          !1 === n(e) && (e.preventDefault(), (e.returnValue = !1));
        };
      }
      var La = (function() {
          function n(e, t, l) {
            _classCallCheck(this, n),
              (this.eventManager = e),
              (this.sharedStylesHost = t),
              (this.appId = l),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new Ua(e));
          }
          return (
            _createClass(n, [
              {
                key: 'createRenderer',
                value: function(n, e) {
                  if (!n || !e) return this.defaultRenderer;
                  switch (e.encapsulation) {
                    case qn.Emulated:
                      var t = this.rendererByCompId.get(e.id);
                      return (
                        t ||
                          ((t = new Ha(this.eventManager, this.sharedStylesHost, e, this.appId)),
                          this.rendererByCompId.set(e.id, t)),
                        t.applyToHost(n),
                        t
                      );
                    case qn.Native:
                    case qn.ShadowDom:
                      return new qa(this.eventManager, this.sharedStylesHost, n, e);
                    default:
                      if (!this.rendererByCompId.has(e.id)) {
                        var l = Da(e.id, e.styles, []);
                        this.sharedStylesHost.addStyles(l),
                          this.rendererByCompId.set(e.id, this.defaultRenderer);
                      }
                      return this.defaultRenderer;
                  }
                }
              },
              { key: 'begin', value: function() {} },
              { key: 'end', value: function() {} }
            ]),
            n
          );
        })(),
        Ua = (function() {
          function n(e) {
            _classCallCheck(this, n), (this.eventManager = e), (this.data = Object.create(null));
          }
          return (
            _createClass(n, [
              { key: 'destroy', value: function() {} },
              {
                key: 'createElement',
                value: function(n, e) {
                  return e ? document.createElementNS(Na[e] || e, n) : document.createElement(n);
                }
              },
              {
                key: 'createComment',
                value: function(n) {
                  return document.createComment(n);
                }
              },
              {
                key: 'createText',
                value: function(n) {
                  return document.createTextNode(n);
                }
              },
              {
                key: 'appendChild',
                value: function(n, e) {
                  n.appendChild(e);
                }
              },
              {
                key: 'insertBefore',
                value: function(n, e, t) {
                  n && n.insertBefore(e, t);
                }
              },
              {
                key: 'removeChild',
                value: function(n, e) {
                  n && n.removeChild(e);
                }
              },
              {
                key: 'selectRootElement',
                value: function(n, e) {
                  var t = 'string' == typeof n ? document.querySelector(n) : n;
                  if (!t)
                    throw new Error('The selector "'.concat(n, '" did not match any elements'));
                  return e || (t.textContent = ''), t;
                }
              },
              {
                key: 'parentNode',
                value: function(n) {
                  return n.parentNode;
                }
              },
              {
                key: 'nextSibling',
                value: function(n) {
                  return n.nextSibling;
                }
              },
              {
                key: 'setAttribute',
                value: function(n, e, t, l) {
                  if (l) {
                    e = l + ':' + e;
                    var r = Na[l];
                    r ? n.setAttributeNS(r, e, t) : n.setAttribute(e, t);
                  } else n.setAttribute(e, t);
                }
              },
              {
                key: 'removeAttribute',
                value: function(n, e, t) {
                  if (t) {
                    var l = Na[t];
                    l ? n.removeAttributeNS(l, e) : n.removeAttribute(''.concat(t, ':').concat(e));
                  } else n.removeAttribute(e);
                }
              },
              {
                key: 'addClass',
                value: function(n, e) {
                  n.classList.add(e);
                }
              },
              {
                key: 'removeClass',
                value: function(n, e) {
                  n.classList.remove(e);
                }
              },
              {
                key: 'setStyle',
                value: function(n, e, t, l) {
                  l & it.DashCase
                    ? n.style.setProperty(e, t, l & it.Important ? 'important' : '')
                    : (n.style[e] = t);
                }
              },
              {
                key: 'removeStyle',
                value: function(n, e, t) {
                  t & it.DashCase ? n.style.removeProperty(e) : (n.style[e] = '');
                }
              },
              {
                key: 'setProperty',
                value: function(n, e, t) {
                  za(e, 'property'), (n[e] = t);
                }
              },
              {
                key: 'setValue',
                value: function(n, e) {
                  n.nodeValue = e;
                }
              },
              {
                key: 'listen',
                value: function(n, e, t) {
                  return (
                    za(e, 'listener'),
                    'string' == typeof n
                      ? this.eventManager.addGlobalEventListener(n, e, ja(t))
                      : this.eventManager.addEventListener(n, e, ja(t))
                  );
                }
              }
            ]),
            n
          );
        })(),
        Fa = '@'.charCodeAt(0);
      function za(n, e) {
        if (n.charCodeAt(0) === Fa)
          throw new Error(
            'Found the synthetic '
              .concat(e, ' ')
              .concat(
                n,
                '. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.'
              )
          );
      }
      var Ha = (function(n) {
          function e(n, t, l, r) {
            var i;
            _classCallCheck(this, e),
              ((i = _possibleConstructorReturn(
                this,
                _getPrototypeOf(e).call(this, n)
              )).component = l);
            var u,
              o = Da(r + '-' + l.id, l.styles, []);
            return (
              t.addStyles(o),
              (i.contentAttr = '_ngcontent-%COMP%'.replace(Va, r + '-' + l.id)),
              (i.hostAttr = ((u = r + '-' + l.id), '_nghost-%COMP%'.replace(Va, u))),
              i
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: 'applyToHost',
                value: function(n) {
                  _get(_getPrototypeOf(e.prototype), 'setAttribute', this).call(
                    this,
                    n,
                    this.hostAttr,
                    ''
                  );
                }
              },
              {
                key: 'createElement',
                value: function(n, t) {
                  var l = _get(_getPrototypeOf(e.prototype), 'createElement', this).call(
                    this,
                    n,
                    t
                  );
                  return (
                    _get(_getPrototypeOf(e.prototype), 'setAttribute', this).call(
                      this,
                      l,
                      this.contentAttr,
                      ''
                    ),
                    l
                  );
                }
              }
            ]),
            e
          );
        })(Ua),
        qa = (function(n) {
          function e(n, t, l, r) {
            var i;
            _classCallCheck(this, e),
              ((i = _possibleConstructorReturn(
                this,
                _getPrototypeOf(e).call(this, n)
              )).sharedStylesHost = t),
              (i.hostEl = l),
              (i.component = r),
              (i.shadowRoot =
                r.encapsulation === qn.ShadowDom
                  ? l.attachShadow({ mode: 'open' })
                  : l.createShadowRoot()),
              i.sharedStylesHost.addHost(i.shadowRoot);
            for (var u = Da(r.id, r.styles, []), o = 0; o < u.length; o++) {
              var a = document.createElement('style');
              (a.textContent = u[o]), i.shadowRoot.appendChild(a);
            }
            return i;
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: 'nodeOrShadowRoot',
                value: function(n) {
                  return n === this.hostEl ? this.shadowRoot : n;
                }
              },
              {
                key: 'destroy',
                value: function() {
                  this.sharedStylesHost.removeHost(this.shadowRoot);
                }
              },
              {
                key: 'appendChild',
                value: function(n, t) {
                  return _get(_getPrototypeOf(e.prototype), 'appendChild', this).call(
                    this,
                    this.nodeOrShadowRoot(n),
                    t
                  );
                }
              },
              {
                key: 'insertBefore',
                value: function(n, t, l) {
                  return _get(_getPrototypeOf(e.prototype), 'insertBefore', this).call(
                    this,
                    this.nodeOrShadowRoot(n),
                    t,
                    l
                  );
                }
              },
              {
                key: 'removeChild',
                value: function(n, t) {
                  return _get(_getPrototypeOf(e.prototype), 'removeChild', this).call(
                    this,
                    this.nodeOrShadowRoot(n),
                    t
                  );
                }
              },
              {
                key: 'parentNode',
                value: function(n) {
                  return this.nodeOrShadowRoot(
                    _get(_getPrototypeOf(e.prototype), 'parentNode', this).call(
                      this,
                      this.nodeOrShadowRoot(n)
                    )
                  );
                }
              }
            ]),
            e
          );
        })(Ua),
        Ba =
          ('undefined' != typeof Zone && Zone.__symbol__) ||
          function(n) {
            return '__zone_symbol__' + n;
          },
        Ga = Ba('addEventListener'),
        Ka = Ba('removeEventListener'),
        Wa = {},
        Za = '__zone_symbol__propagationStopped',
        Qa = (function() {
          var n = 'undefined' != typeof Zone && Zone[Ba('BLACK_LISTED_EVENTS')];
          if (n) {
            var e = {};
            return (
              n.forEach(function(n) {
                e[n] = n;
              }),
              e
            );
          }
        })(),
        Ya = function(n) {
          return !!Qa && Qa.hasOwnProperty(n);
        },
        $a = function(n) {
          var e = Wa[n.type];
          if (e) {
            var t = this[e];
            if (t) {
              var l = [n];
              if (1 === t.length) {
                var r = t[0];
                return r.zone !== Zone.current
                  ? r.zone.run(r.handler, this, l)
                  : r.handler.apply(this, l);
              }
              for (var i = t.slice(), u = 0; u < i.length && !0 !== n[Za]; u++) {
                var o = i[u];
                o.zone !== Zone.current ? o.zone.run(o.handler, this, l) : o.handler.apply(this, l);
              }
            }
          }
        },
        Ja = (function(n) {
          function e(n, t, l) {
            var r;
            return (
              _classCallCheck(this, e),
              ((r = _possibleConstructorReturn(this, _getPrototypeOf(e).call(this, n))).ngZone = t),
              (l &&
                (function(n) {
                  return 'server' === n;
                })(l)) ||
                r.patchEvent(),
              r
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: 'patchEvent',
                value: function() {
                  if (
                    'undefined' != typeof Event &&
                    Event &&
                    Event.prototype &&
                    !Event.prototype.__zone_symbol__stopImmediatePropagation
                  ) {
                    var n = (Event.prototype.__zone_symbol__stopImmediatePropagation =
                      Event.prototype.stopImmediatePropagation);
                    Event.prototype.stopImmediatePropagation = function() {
                      this && (this[Za] = !0), n && n.apply(this, arguments);
                    };
                  }
                }
              },
              {
                key: 'supports',
                value: function(n) {
                  return !0;
                }
              },
              {
                key: 'addEventListener',
                value: function(n, e, t) {
                  var l = this,
                    r = t;
                  if (!n[Ga] || (Kr.isInAngularZone() && !Ya(e))) n.addEventListener(e, r, !1);
                  else {
                    var i = Wa[e];
                    i || (i = Wa[e] = Ba('ANGULAR' + e + 'FALSE'));
                    var u = n[i],
                      o = u && u.length > 0;
                    u || (u = n[i] = []);
                    var a = Ya(e) ? Zone.root : Zone.current;
                    if (0 === u.length) u.push({ zone: a, handler: r });
                    else {
                      for (var s = !1, c = 0; c < u.length; c++)
                        if (u[c].handler === r) {
                          s = !0;
                          break;
                        }
                      s || u.push({ zone: a, handler: r });
                    }
                    o || n[Ga](e, $a, !1);
                  }
                  return function() {
                    return l.removeEventListener(n, e, r);
                  };
                }
              },
              {
                key: 'removeEventListener',
                value: function(n, e, t) {
                  var l = n[Ka];
                  if (!l) return n.removeEventListener.apply(n, [e, t, !1]);
                  var r = Wa[e],
                    i = r && n[r];
                  if (!i) return n.removeEventListener.apply(n, [e, t, !1]);
                  for (var u = !1, o = 0; o < i.length; o++)
                    if (i[o].handler === t) {
                      (u = !0), i.splice(o, 1);
                      break;
                    }
                  u
                    ? 0 === i.length && l.apply(n, [e, $a, !1])
                    : n.removeEventListener.apply(n, [e, t, !1]);
                }
              }
            ]),
            e
          );
        })(Aa),
        Xa = {
          pan: !0,
          panstart: !0,
          panmove: !0,
          panend: !0,
          pancancel: !0,
          panleft: !0,
          panright: !0,
          panup: !0,
          pandown: !0,
          pinch: !0,
          pinchstart: !0,
          pinchmove: !0,
          pinchend: !0,
          pinchcancel: !0,
          pinchin: !0,
          pinchout: !0,
          press: !0,
          pressup: !0,
          rotate: !0,
          rotatestart: !0,
          rotatemove: !0,
          rotateend: !0,
          rotatecancel: !0,
          swipe: !0,
          swipeleft: !0,
          swiperight: !0,
          swipeup: !0,
          swipedown: !0,
          tap: !0
        },
        ns = new Sn('HammerGestureConfig'),
        es = new Sn('HammerLoader'),
        ts = (function() {
          function n() {
            _classCallCheck(this, n), (this.events = []), (this.overrides = {});
          }
          return (
            _createClass(n, [
              {
                key: 'buildHammer',
                value: function(n) {
                  var e = new Hammer(n, this.options);
                  for (var t in (e.get('pinch').set({ enable: !0 }),
                  e.get('rotate').set({ enable: !0 }),
                  this.overrides))
                    e.get(t).set(this.overrides[t]);
                  return e;
                }
              }
            ]),
            n
          );
        })(),
        ls = (function(n) {
          function e(n, t, l, r) {
            var i;
            return (
              _classCallCheck(this, e),
              ((i = _possibleConstructorReturn(
                this,
                _getPrototypeOf(e).call(this, n)
              ))._config = t),
              (i.console = l),
              (i.loader = r),
              i
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: 'supports',
                value: function(n) {
                  return !(
                    (!Xa.hasOwnProperty(n.toLowerCase()) && !this.isCustomEvent(n)) ||
                    (!window.Hammer &&
                      !this.loader &&
                      (this.console.warn(
                        'The "'.concat(n, '" event cannot be bound because Hammer.JS is not ') +
                          'loaded and no custom loader has been specified.'
                      ),
                      1))
                  );
                }
              },
              {
                key: 'addEventListener',
                value: function(n, e, t) {
                  var l = this,
                    r = this.manager.getZone();
                  if (((e = e.toLowerCase()), !window.Hammer && this.loader)) {
                    var i = !1,
                      u = function() {
                        i = !0;
                      };
                    return (
                      this.loader()
                        .then(function() {
                          if (!window.Hammer)
                            return (
                              l.console.warn(
                                'The custom HAMMER_LOADER completed, but Hammer.JS is not present.'
                              ),
                              void (u = function() {})
                            );
                          i || (u = l.addEventListener(n, e, t));
                        })
                        .catch(function() {
                          l.console.warn(
                            'The "'.concat(e, '" event cannot be bound because the custom ') +
                              'Hammer.JS loader failed.'
                          ),
                            (u = function() {});
                        }),
                      function() {
                        u();
                      }
                    );
                  }
                  return r.runOutsideAngular(function() {
                    var i = l._config.buildHammer(n),
                      u = function(n) {
                        r.runGuarded(function() {
                          t(n);
                        });
                      };
                    return (
                      i.on(e, u),
                      function() {
                        i.off(e, u), 'function' == typeof i.destroy && i.destroy();
                      }
                    );
                  });
                }
              },
              {
                key: 'isCustomEvent',
                value: function(n) {
                  return this._config.events.indexOf(n) > -1;
                }
              }
            ]),
            e
          );
        })(Aa),
        rs = ['alt', 'control', 'meta', 'shift'],
        is = {
          alt: function(n) {
            return n.altKey;
          },
          control: function(n) {
            return n.ctrlKey;
          },
          meta: function(n) {
            return n.metaKey;
          },
          shift: function(n) {
            return n.shiftKey;
          }
        },
        us = (function(n) {
          function e(n) {
            return (
              _classCallCheck(this, e),
              _possibleConstructorReturn(this, _getPrototypeOf(e).call(this, n))
            );
          }
          return (
            _inherits(e, n),
            _createClass(
              e,
              [
                {
                  key: 'supports',
                  value: function(n) {
                    return null != e.parseEventName(n);
                  }
                },
                {
                  key: 'addEventListener',
                  value: function(n, t, l) {
                    var r = e.parseEventName(t),
                      i = e.eventCallback(r.fullKey, l, this.manager.getZone());
                    return this.manager.getZone().runOutsideAngular(function() {
                      return pa().onAndCancel(n, r.domEventName, i);
                    });
                  }
                }
              ],
              [
                {
                  key: 'parseEventName',
                  value: function(n) {
                    var t = n.toLowerCase().split('.'),
                      l = t.shift();
                    if (0 === t.length || ('keydown' !== l && 'keyup' !== l)) return null;
                    var r = e._normalizeKey(t.pop()),
                      i = '';
                    if (
                      (rs.forEach(function(n) {
                        var e = t.indexOf(n);
                        e > -1 && (t.splice(e, 1), (i += n + '.'));
                      }),
                      (i += r),
                      0 != t.length || 0 === r.length)
                    )
                      return null;
                    var u = {};
                    return (u.domEventName = l), (u.fullKey = i), u;
                  }
                },
                {
                  key: 'getEventFullKey',
                  value: function(n) {
                    var e = '',
                      t = pa().getEventKey(n);
                    return (
                      ' ' === (t = t.toLowerCase()) ? (t = 'space') : '.' === t && (t = 'dot'),
                      rs.forEach(function(l) {
                        l != t && (0, is[l])(n) && (e += l + '.');
                      }),
                      (e += t)
                    );
                  }
                },
                {
                  key: 'eventCallback',
                  value: function(n, t, l) {
                    return function(r) {
                      e.getEventFullKey(r) === n &&
                        l.runGuarded(function() {
                          return t(r);
                        });
                    };
                  }
                },
                {
                  key: '_normalizeKey',
                  value: function(n) {
                    switch (n) {
                      case 'esc':
                        return 'escape';
                      default:
                        return n;
                    }
                  }
                }
              ]
            ),
            e
          );
        })(Aa),
        os = function n() {
          _classCallCheck(this, n);
        },
        as = (function(n) {
          function e(n) {
            var t;
            return (
              _classCallCheck(this, e),
              ((t = _possibleConstructorReturn(this, _getPrototypeOf(e).call(this)))._doc = n),
              t
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: 'sanitize',
                value: function(n, e) {
                  if (null == e) return null;
                  switch (n) {
                    case ye.NONE:
                      return e;
                    case ye.HTML:
                      return e instanceof cs
                        ? e.changingThisBreaksApplicationSecurity
                        : (this.checkNotSafeValue(e, 'HTML'),
                          (function(n, e) {
                            var t = null;
                            try {
                              re = re || new Jn(n);
                              var l = e ? String(e) : '';
                              t = re.getInertBodyElement(l);
                              var r = 5,
                                i = l;
                              do {
                                if (0 === r)
                                  throw new Error(
                                    'Failed to sanitize html because the input is unstable'
                                  );
                                r--, (l = i), (i = t.innerHTML), (t = re.getInertBodyElement(l));
                              } while (l !== i);
                              var u = new pe(),
                                o = u.sanitizeChildren(me(t) || t);
                              return (
                                $n() &&
                                  u.sanitizedSomething &&
                                  console.warn(
                                    'WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss'
                                  ),
                                o
                              );
                            } finally {
                              if (t)
                                for (var a = me(t) || t; a.firstChild; )
                                  a.removeChild(a.firstChild);
                            }
                          })(this._doc, String(e)));
                    case ye.STYLE:
                      return e instanceof hs
                        ? e.changingThisBreaksApplicationSecurity
                        : (this.checkNotSafeValue(e, 'Style'),
                          (function(n) {
                            if (!(n = String(n).trim())) return '';
                            var e = n.match(be);
                            return (e && ee(e[1]) === e[1]) ||
                              (n.match(ke) &&
                                (function(n) {
                                  for (var e = !0, t = !0, l = 0; l < n.length; l++) {
                                    var r = n.charAt(l);
                                    "'" === r && t ? (e = !e) : '"' === r && e && (t = !t);
                                  }
                                  return e && t;
                                })(n))
                              ? n
                              : ($n() &&
                                  console.warn(
                                    'WARNING: sanitizing unsafe style value '.concat(
                                      n,
                                      ' (see http://g.co/ng/security#xss).'
                                    )
                                  ),
                                'unsafe');
                          })(e));
                    case ye.SCRIPT:
                      if (e instanceof fs) return e.changingThisBreaksApplicationSecurity;
                      throw (this.checkNotSafeValue(e, 'Script'),
                      new Error('unsafe value used in a script context'));
                    case ye.URL:
                      return e instanceof ps || e instanceof ds
                        ? e.changingThisBreaksApplicationSecurity
                        : (this.checkNotSafeValue(e, 'URL'), ee(String(e)));
                    case ye.RESOURCE_URL:
                      if (e instanceof ps) return e.changingThisBreaksApplicationSecurity;
                      throw (this.checkNotSafeValue(e, 'ResourceURL'),
                      new Error(
                        'unsafe value used in a resource URL context (see http://g.co/ng/security#xss)'
                      ));
                    default:
                      throw new Error(
                        'Unexpected SecurityContext '.concat(
                          n,
                          ' (see http://g.co/ng/security#xss)'
                        )
                      );
                  }
                }
              },
              {
                key: 'checkNotSafeValue',
                value: function(n, e) {
                  if (n instanceof ss)
                    throw new Error(
                      'Required a safe '.concat(e, ', got a ').concat(n.getTypeName(), ' ') +
                        '(see http://g.co/ng/security#xss)'
                    );
                }
              },
              {
                key: 'bypassSecurityTrustHtml',
                value: function(n) {
                  return new cs(n);
                }
              },
              {
                key: 'bypassSecurityTrustStyle',
                value: function(n) {
                  return new hs(n);
                }
              },
              {
                key: 'bypassSecurityTrustScript',
                value: function(n) {
                  return new fs(n);
                }
              },
              {
                key: 'bypassSecurityTrustUrl',
                value: function(n) {
                  return new ds(n);
                }
              },
              {
                key: 'bypassSecurityTrustResourceUrl',
                value: function(n) {
                  return new ps(n);
                }
              }
            ]),
            e
          );
        })(os),
        ss = (function() {
          function n(e) {
            _classCallCheck(this, n), (this.changingThisBreaksApplicationSecurity = e);
          }
          return (
            _createClass(n, [
              {
                key: 'toString',
                value: function() {
                  return (
                    'SafeValue must use [property]=binding: '.concat(
                      this.changingThisBreaksApplicationSecurity
                    ) + ' (see http://g.co/ng/security#xss)'
                  );
                }
              }
            ]),
            n
          );
        })(),
        cs = (function(n) {
          function e() {
            return (
              _classCallCheck(this, e),
              _possibleConstructorReturn(this, _getPrototypeOf(e).apply(this, arguments))
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: 'getTypeName',
                value: function() {
                  return 'HTML';
                }
              }
            ]),
            e
          );
        })(ss),
        hs = (function(n) {
          function e() {
            return (
              _classCallCheck(this, e),
              _possibleConstructorReturn(this, _getPrototypeOf(e).apply(this, arguments))
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: 'getTypeName',
                value: function() {
                  return 'Style';
                }
              }
            ]),
            e
          );
        })(ss),
        fs = (function(n) {
          function e() {
            return (
              _classCallCheck(this, e),
              _possibleConstructorReturn(this, _getPrototypeOf(e).apply(this, arguments))
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: 'getTypeName',
                value: function() {
                  return 'Script';
                }
              }
            ]),
            e
          );
        })(ss),
        ds = (function(n) {
          function e() {
            return (
              _classCallCheck(this, e),
              _possibleConstructorReturn(this, _getPrototypeOf(e).apply(this, arguments))
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: 'getTypeName',
                value: function() {
                  return 'URL';
                }
              }
            ]),
            e
          );
        })(ss),
        ps = (function(n) {
          function e() {
            return (
              _classCallCheck(this, e),
              _possibleConstructorReturn(this, _getPrototypeOf(e).apply(this, arguments))
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: 'getTypeName',
                value: function() {
                  return 'ResourceURL';
                }
              }
            ]),
            e
          );
        })(ss),
        vs = ii(wi, 'browser', [
          { provide: Er, useValue: 'browser' },
          {
            provide: Or,
            useValue: function() {
              Ca.makeCurrent(), Oa.init();
            },
            multi: !0
          },
          {
            provide: Xu,
            useClass: (function(n) {
              function e(n) {
                var t;
                return (
                  _classCallCheck(this, e),
                  ((t = _possibleConstructorReturn(this, _getPrototypeOf(e).call(this)))._doc = n),
                  t._init(),
                  t
                );
              }
              return (
                _inherits(e, n),
                _createClass(e, [
                  {
                    key: '_init',
                    value: function() {
                      (this.location = pa().getLocation()), (this._history = pa().getHistory());
                    }
                  },
                  {
                    key: 'getBaseHrefFromDOM',
                    value: function() {
                      return pa().getBaseHref(this._doc);
                    }
                  },
                  {
                    key: 'onPopState',
                    value: function(n) {
                      pa()
                        .getGlobalEventTarget(this._doc, 'window')
                        .addEventListener('popstate', n, !1);
                    }
                  },
                  {
                    key: 'onHashChange',
                    value: function(n) {
                      pa()
                        .getGlobalEventTarget(this._doc, 'window')
                        .addEventListener('hashchange', n, !1);
                    }
                  },
                  {
                    key: 'pushState',
                    value: function(n, e, t) {
                      ba() ? this._history.pushState(n, e, t) : (this.location.hash = t);
                    }
                  },
                  {
                    key: 'replaceState',
                    value: function(n, e, t) {
                      ba() ? this._history.replaceState(n, e, t) : (this.location.hash = t);
                    }
                  },
                  {
                    key: 'forward',
                    value: function() {
                      this._history.forward();
                    }
                  },
                  {
                    key: 'back',
                    value: function() {
                      this._history.back();
                    }
                  },
                  {
                    key: 'getState',
                    value: function() {
                      return this._history.state;
                    }
                  },
                  {
                    key: 'href',
                    get: function() {
                      return this.location.href;
                    }
                  },
                  {
                    key: 'protocol',
                    get: function() {
                      return this.location.protocol;
                    }
                  },
                  {
                    key: 'hostname',
                    get: function() {
                      return this.location.hostname;
                    }
                  },
                  {
                    key: 'port',
                    get: function() {
                      return this.location.port;
                    }
                  },
                  {
                    key: 'pathname',
                    get: function() {
                      return this.location.pathname;
                    },
                    set: function(n) {
                      this.location.pathname = n;
                    }
                  },
                  {
                    key: 'search',
                    get: function() {
                      return this.location.search;
                    }
                  },
                  {
                    key: 'hash',
                    get: function() {
                      return this.location.hash;
                    }
                  }
                ]),
                e
              );
            })(Xu),
            deps: [_o]
          },
          {
            provide: _o,
            useFactory: function() {
              return document;
            },
            deps: []
          }
        ]);
      function gs() {
        return new Zn();
      }
      var _s = (function() {
        function n(e) {
          if ((_classCallCheck(this, n), e))
            throw new Error(
              'BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.'
            );
        }
        return (
          _createClass(n, null, [
            {
              key: 'withServerTransition',
              value: function(e) {
                return {
                  ngModule: n,
                  providers: [
                    { provide: br, useValue: e.appId },
                    { provide: wa, useExisting: br },
                    xa
                  ]
                };
              }
            }
          ]),
          n
        );
      })();
      'undefined' != typeof window && window;
      var ms = function n(e, t) {
          _classCallCheck(this, n), (this.id = e), (this.url = t);
        },
        ys = (function(n) {
          function e(n, t) {
            var l,
              r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'imperative',
              i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return (
              _classCallCheck(this, e),
              ((l = _possibleConstructorReturn(
                this,
                _getPrototypeOf(e).call(this, n, t)
              )).navigationTrigger = r),
              (l.restoredState = i),
              l
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: 'toString',
                value: function() {
                  return 'NavigationStart(id: '.concat(this.id, ", url: '").concat(this.url, "')");
                }
              }
            ]),
            e
          );
        })(ms),
        Cs = (function(n) {
          function e(n, t, l) {
            var r;
            return (
              _classCallCheck(this, e),
              ((r = _possibleConstructorReturn(
                this,
                _getPrototypeOf(e).call(this, n, t)
              )).urlAfterRedirects = l),
              r
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: 'toString',
                value: function() {
                  return 'NavigationEnd(id: '
                    .concat(this.id, ", url: '")
                    .concat(this.url, "', urlAfterRedirects: '")
                    .concat(this.urlAfterRedirects, "')");
                }
              }
            ]),
            e
          );
        })(ms),
        ks = (function(n) {
          function e(n, t, l) {
            var r;
            return (
              _classCallCheck(this, e),
              ((r = _possibleConstructorReturn(
                this,
                _getPrototypeOf(e).call(this, n, t)
              )).reason = l),
              r
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: 'toString',
                value: function() {
                  return 'NavigationCancel(id: '.concat(this.id, ", url: '").concat(this.url, "')");
                }
              }
            ]),
            e
          );
        })(ms),
        bs = (function(n) {
          function e(n, t, l) {
            var r;
            return (
              _classCallCheck(this, e),
              ((r = _possibleConstructorReturn(
                this,
                _getPrototypeOf(e).call(this, n, t)
              )).error = l),
              r
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: 'toString',
                value: function() {
                  return 'NavigationError(id: '
                    .concat(this.id, ", url: '")
                    .concat(this.url, "', error: ")
                    .concat(this.error, ')');
                }
              }
            ]),
            e
          );
        })(ms),
        ws = (function(n) {
          function e(n, t, l, r) {
            var i;
            return (
              _classCallCheck(this, e),
              ((i = _possibleConstructorReturn(
                this,
                _getPrototypeOf(e).call(this, n, t)
              )).urlAfterRedirects = l),
              (i.state = r),
              i
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: 'toString',
                value: function() {
                  return 'RoutesRecognized(id: '
                    .concat(this.id, ", url: '")
                    .concat(this.url, "', urlAfterRedirects: '")
                    .concat(this.urlAfterRedirects, "', state: ")
                    .concat(this.state, ')');
                }
              }
            ]),
            e
          );
        })(ms),
        xs = (function(n) {
          function e(n, t, l, r) {
            var i;
            return (
              _classCallCheck(this, e),
              ((i = _possibleConstructorReturn(
                this,
                _getPrototypeOf(e).call(this, n, t)
              )).urlAfterRedirects = l),
              (i.state = r),
              i
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: 'toString',
                value: function() {
                  return 'GuardsCheckStart(id: '
                    .concat(this.id, ", url: '")
                    .concat(this.url, "', urlAfterRedirects: '")
                    .concat(this.urlAfterRedirects, "', state: ")
                    .concat(this.state, ')');
                }
              }
            ]),
            e
          );
        })(ms),
        Os = (function(n) {
          function e(n, t, l, r, i) {
            var u;
            return (
              _classCallCheck(this, e),
              ((u = _possibleConstructorReturn(
                this,
                _getPrototypeOf(e).call(this, n, t)
              )).urlAfterRedirects = l),
              (u.state = r),
              (u.shouldActivate = i),
              u
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: 'toString',
                value: function() {
                  return 'GuardsCheckEnd(id: '
                    .concat(this.id, ", url: '")
                    .concat(this.url, "', urlAfterRedirects: '")
                    .concat(this.urlAfterRedirects, "', state: ")
                    .concat(this.state, ', shouldActivate: ')
                    .concat(this.shouldActivate, ')');
                }
              }
            ]),
            e
          );
        })(ms),
        Es = (function(n) {
          function e(n, t, l, r) {
            var i;
            return (
              _classCallCheck(this, e),
              ((i = _possibleConstructorReturn(
                this,
                _getPrototypeOf(e).call(this, n, t)
              )).urlAfterRedirects = l),
              (i.state = r),
              i
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: 'toString',
                value: function() {
                  return 'ResolveStart(id: '
                    .concat(this.id, ", url: '")
                    .concat(this.url, "', urlAfterRedirects: '")
                    .concat(this.urlAfterRedirects, "', state: ")
                    .concat(this.state, ')');
                }
              }
            ]),
            e
          );
        })(ms),
        Ps = (function(n) {
          function e(n, t, l, r) {
            var i;
            return (
              _classCallCheck(this, e),
              ((i = _possibleConstructorReturn(
                this,
                _getPrototypeOf(e).call(this, n, t)
              )).urlAfterRedirects = l),
              (i.state = r),
              i
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: 'toString',
                value: function() {
                  return 'ResolveEnd(id: '
                    .concat(this.id, ", url: '")
                    .concat(this.url, "', urlAfterRedirects: '")
                    .concat(this.urlAfterRedirects, "', state: ")
                    .concat(this.state, ')');
                }
              }
            ]),
            e
          );
        })(ms),
        Ss = (function() {
          function n(e) {
            _classCallCheck(this, n), (this.route = e);
          }
          return (
            _createClass(n, [
              {
                key: 'toString',
                value: function() {
                  return 'RouteConfigLoadStart(path: '.concat(this.route.path, ')');
                }
              }
            ]),
            n
          );
        })(),
        Ts = (function() {
          function n(e) {
            _classCallCheck(this, n), (this.route = e);
          }
          return (
            _createClass(n, [
              {
                key: 'toString',
                value: function() {
                  return 'RouteConfigLoadEnd(path: '.concat(this.route.path, ')');
                }
              }
            ]),
            n
          );
        })(),
        Ms = (function() {
          function n(e) {
            _classCallCheck(this, n), (this.snapshot = e);
          }
          return (
            _createClass(n, [
              {
                key: 'toString',
                value: function() {
                  return "ChildActivationStart(path: '".concat(
                    (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || '',
                    "')"
                  );
                }
              }
            ]),
            n
          );
        })(),
        As = (function() {
          function n(e) {
            _classCallCheck(this, n), (this.snapshot = e);
          }
          return (
            _createClass(n, [
              {
                key: 'toString',
                value: function() {
                  return "ChildActivationEnd(path: '".concat(
                    (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || '',
                    "')"
                  );
                }
              }
            ]),
            n
          );
        })(),
        Rs = (function() {
          function n(e) {
            _classCallCheck(this, n), (this.snapshot = e);
          }
          return (
            _createClass(n, [
              {
                key: 'toString',
                value: function() {
                  return "ActivationStart(path: '".concat(
                    (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || '',
                    "')"
                  );
                }
              }
            ]),
            n
          );
        })(),
        Is = (function() {
          function n(e) {
            _classCallCheck(this, n), (this.snapshot = e);
          }
          return (
            _createClass(n, [
              {
                key: 'toString',
                value: function() {
                  return "ActivationEnd(path: '".concat(
                    (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || '',
                    "')"
                  );
                }
              }
            ]),
            n
          );
        })(),
        Ns = (function() {
          function n(e, t, l) {
            _classCallCheck(this, n),
              (this.routerEvent = e),
              (this.position = t),
              (this.anchor = l);
          }
          return (
            _createClass(n, [
              {
                key: 'toString',
                value: function() {
                  return "Scroll(anchor: '"
                    .concat(this.anchor, "', position: '")
                    .concat(
                      this.position
                        ? ''.concat(this.position[0], ', ').concat(this.position[1])
                        : null,
                      "')"
                    );
                }
              }
            ]),
            n
          );
        })(),
        Vs = function n() {
          _classCallCheck(this, n);
        },
        Ds = (function() {
          function n(e) {
            _classCallCheck(this, n), (this.params = e || {});
          }
          return (
            _createClass(n, [
              {
                key: 'has',
                value: function(n) {
                  return this.params.hasOwnProperty(n);
                }
              },
              {
                key: 'get',
                value: function(n) {
                  if (this.has(n)) {
                    var e = this.params[n];
                    return Array.isArray(e) ? e[0] : e;
                  }
                  return null;
                }
              },
              {
                key: 'getAll',
                value: function(n) {
                  if (this.has(n)) {
                    var e = this.params[n];
                    return Array.isArray(e) ? e : [e];
                  }
                  return [];
                }
              },
              {
                key: 'keys',
                get: function() {
                  return Object.keys(this.params);
                }
              }
            ]),
            n
          );
        })();
      function js(n) {
        return new Ds(n);
      }
      function Ls(n) {
        var e = Error('NavigationCancelingError: ' + n);
        return (e.ngNavigationCancelingError = !0), e;
      }
      function Us(n, e, t) {
        var l = t.path.split('/');
        if (l.length > n.length) return null;
        if ('full' === t.pathMatch && (e.hasChildren() || l.length < n.length)) return null;
        for (var r = {}, i = 0; i < l.length; i++) {
          var u = l[i],
            o = n[i];
          if (u.startsWith(':')) r[u.substring(1)] = o;
          else if (u !== o.path) return null;
        }
        return { consumed: n.slice(0, l.length), posParams: r };
      }
      var Fs = function n(e, t) {
        _classCallCheck(this, n), (this.routes = e), (this.module = t);
      };
      function zs(n) {
        for (
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '', t = 0;
          t < n.length;
          t++
        ) {
          var l = n[t];
          Hs(l, qs(e, l));
        }
      }
      function Hs(n, e) {
        if (!n)
          throw new Error(
            "\n      Invalid configuration of route '".concat(
              e,
              "': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    "
            )
          );
        if (Array.isArray(n))
          throw new Error(
            "Invalid configuration of route '".concat(e, "': Array cannot be specified")
          );
        if (!n.component && !n.children && !n.loadChildren && n.outlet && 'primary' !== n.outlet)
          throw new Error(
            "Invalid configuration of route '".concat(
              e,
              "': a componentless route without children or loadChildren cannot have a named outlet set"
            )
          );
        if (n.redirectTo && n.children)
          throw new Error(
            "Invalid configuration of route '".concat(
              e,
              "': redirectTo and children cannot be used together"
            )
          );
        if (n.redirectTo && n.loadChildren)
          throw new Error(
            "Invalid configuration of route '".concat(
              e,
              "': redirectTo and loadChildren cannot be used together"
            )
          );
        if (n.children && n.loadChildren)
          throw new Error(
            "Invalid configuration of route '".concat(
              e,
              "': children and loadChildren cannot be used together"
            )
          );
        if (n.redirectTo && n.component)
          throw new Error(
            "Invalid configuration of route '".concat(
              e,
              "': redirectTo and component cannot be used together"
            )
          );
        if (n.path && n.matcher)
          throw new Error(
            "Invalid configuration of route '".concat(
              e,
              "': path and matcher cannot be used together"
            )
          );
        if (void 0 === n.redirectTo && !n.component && !n.children && !n.loadChildren)
          throw new Error(
            "Invalid configuration of route '".concat(
              e,
              "'. One of the following must be provided: component, redirectTo, children or loadChildren"
            )
          );
        if (void 0 === n.path && void 0 === n.matcher)
          throw new Error(
            "Invalid configuration of route '".concat(
              e,
              "': routes must have either a path or a matcher specified"
            )
          );
        if ('string' == typeof n.path && '/' === n.path.charAt(0))
          throw new Error(
            "Invalid configuration of route '".concat(e, "': path cannot start with a slash")
          );
        if ('' === n.path && void 0 !== n.redirectTo && void 0 === n.pathMatch)
          throw new Error(
            'Invalid configuration of route \'{path: "'
              .concat(e, '", redirectTo: "')
              .concat(
                n.redirectTo,
                "\"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'."
              )
          );
        if (void 0 !== n.pathMatch && 'full' !== n.pathMatch && 'prefix' !== n.pathMatch)
          throw new Error(
            "Invalid configuration of route '".concat(
              e,
              "': pathMatch can only be set to 'prefix' or 'full'"
            )
          );
        n.children && zs(n.children, e);
      }
      function qs(n, e) {
        return e
          ? n || e.path
            ? n && !e.path
              ? ''.concat(n, '/')
              : !n && e.path
              ? e.path
              : ''.concat(n, '/').concat(e.path)
            : ''
          : n;
      }
      function Bs(n) {
        var e = n.children && n.children.map(Bs),
          t = e ? Object.assign({}, n, { children: e }) : Object.assign({}, n);
        return (
          !t.component &&
            (e || t.loadChildren) &&
            t.outlet &&
            'primary' !== t.outlet &&
            (t.component = Vs),
          t
        );
      }
      function Gs(n, e) {
        var t,
          l = Object.keys(n),
          r = Object.keys(e);
        if (!l || !r || l.length != r.length) return !1;
        for (var i = 0; i < l.length; i++) if (n[(t = l[i])] !== e[t]) return !1;
        return !0;
      }
      function Ks(n) {
        return Array.prototype.concat.apply([], n);
      }
      function Ws(n) {
        return n.length > 0 ? n[n.length - 1] : null;
      }
      function Zs(n, e) {
        for (var t in n) n.hasOwnProperty(t) && e(n[t], t);
      }
      function Qs(n) {
        return Ke(n) ? n : Ge(n) ? Z(Promise.resolve(n)) : wo(n);
      }
      function Ys(n, e, t) {
        return t
          ? (function(n, e) {
              return Gs(n, e);
            })(n.queryParams, e.queryParams) &&
              (function n(e, t) {
                if (!nc(e.segments, t.segments)) return !1;
                if (e.numberOfChildren !== t.numberOfChildren) return !1;
                for (var l in t.children) {
                  if (!e.children[l]) return !1;
                  if (!n(e.children[l], t.children[l])) return !1;
                }
                return !0;
              })(n.root, e.root)
          : (function(n, e) {
              return (
                Object.keys(e).length <= Object.keys(n).length &&
                Object.keys(e).every(function(t) {
                  return e[t] === n[t];
                })
              );
            })(n.queryParams, e.queryParams) &&
              (function n(e, t) {
                return (function e(t, l, r) {
                  if (t.segments.length > r.length)
                    return !!nc(t.segments.slice(0, r.length), r) && !l.hasChildren();
                  if (t.segments.length === r.length) {
                    if (!nc(t.segments, r)) return !1;
                    for (var i in l.children) {
                      if (!t.children[i]) return !1;
                      if (!n(t.children[i], l.children[i])) return !1;
                    }
                    return !0;
                  }
                  var u = r.slice(0, t.segments.length),
                    o = r.slice(t.segments.length);
                  return !!nc(t.segments, u) && !!t.children.primary && e(t.children.primary, l, o);
                })(e, t, t.segments);
              })(n.root, e.root);
      }
      var $s = (function() {
          function n(e, t, l) {
            _classCallCheck(this, n), (this.root = e), (this.queryParams = t), (this.fragment = l);
          }
          return (
            _createClass(n, [
              {
                key: 'toString',
                value: function() {
                  return rc.serialize(this);
                }
              },
              {
                key: 'queryParamMap',
                get: function() {
                  return (
                    this._queryParamMap || (this._queryParamMap = js(this.queryParams)),
                    this._queryParamMap
                  );
                }
              }
            ]),
            n
          );
        })(),
        Js = (function() {
          function n(e, t) {
            var l = this;
            _classCallCheck(this, n),
              (this.segments = e),
              (this.children = t),
              (this.parent = null),
              Zs(t, function(n, e) {
                return (n.parent = l);
              });
          }
          return (
            _createClass(n, [
              {
                key: 'hasChildren',
                value: function() {
                  return this.numberOfChildren > 0;
                }
              },
              {
                key: 'toString',
                value: function() {
                  return ic(this);
                }
              },
              {
                key: 'numberOfChildren',
                get: function() {
                  return Object.keys(this.children).length;
                }
              }
            ]),
            n
          );
        })(),
        Xs = (function() {
          function n(e, t) {
            _classCallCheck(this, n), (this.path = e), (this.parameters = t);
          }
          return (
            _createClass(n, [
              {
                key: 'toString',
                value: function() {
                  return hc(this);
                }
              },
              {
                key: 'parameterMap',
                get: function() {
                  return (
                    this._parameterMap || (this._parameterMap = js(this.parameters)),
                    this._parameterMap
                  );
                }
              }
            ]),
            n
          );
        })();
      function nc(n, e) {
        return (
          n.length === e.length &&
          n.every(function(n, t) {
            return n.path === e[t].path;
          })
        );
      }
      function ec(n, e) {
        var t = [];
        return (
          Zs(n.children, function(n, l) {
            'primary' === l && (t = t.concat(e(n, l)));
          }),
          Zs(n.children, function(n, l) {
            'primary' !== l && (t = t.concat(e(n, l)));
          }),
          t
        );
      }
      var tc = function n() {
          _classCallCheck(this, n);
        },
        lc = (function() {
          function n() {
            _classCallCheck(this, n);
          }
          return (
            _createClass(n, [
              {
                key: 'parse',
                value: function(n) {
                  var e = new gc(n);
                  return new $s(e.parseRootSegment(), e.parseQueryParams(), e.parseFragment());
                }
              },
              {
                key: 'serialize',
                value: function(n) {
                  var e, t, l;
                  return ''
                    .concat(
                      '/'.concat(
                        (function n(e, t) {
                          if (!e.hasChildren()) return ic(e);
                          if (t) {
                            var l = e.children.primary ? n(e.children.primary, !1) : '',
                              r = [];
                            return (
                              Zs(e.children, function(e, t) {
                                'primary' !== t && r.push(''.concat(t, ':').concat(n(e, !1)));
                              }),
                              r.length > 0 ? ''.concat(l, '(').concat(r.join('//'), ')') : l
                            );
                          }
                          var i = ec(e, function(t, l) {
                            return 'primary' === l
                              ? [n(e.children.primary, !1)]
                              : [''.concat(l, ':').concat(n(t, !1))];
                          });
                          return ''.concat(ic(e), '/(').concat(i.join('//'), ')');
                        })(n.root, !0)
                      ),
                      ((t = n.queryParams),
                      (l = Object.keys(t).map(function(n) {
                        var e = t[n];
                        return Array.isArray(e)
                          ? e
                              .map(function(e) {
                                return ''.concat(oc(n), '=').concat(oc(e));
                              })
                              .join('&')
                          : ''.concat(oc(n), '=').concat(oc(e));
                      })),
                      l.length ? '?'.concat(l.join('&')) : '')
                    )
                    .concat(
                      'string' == typeof n.fragment
                        ? '#'.concat(((e = n.fragment), encodeURI(e)))
                        : ''
                    );
                }
              }
            ]),
            n
          );
        })(),
        rc = new lc();
      function ic(n) {
        return n.segments
          .map(function(n) {
            return hc(n);
          })
          .join('/');
      }
      function uc(n) {
        return encodeURIComponent(n)
          .replace(/%40/g, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',');
      }
      function oc(n) {
        return uc(n).replace(/%3B/gi, ';');
      }
      function ac(n) {
        return uc(n)
          .replace(/\(/g, '%28')
          .replace(/\)/g, '%29')
          .replace(/%26/gi, '&');
      }
      function sc(n) {
        return decodeURIComponent(n);
      }
      function cc(n) {
        return sc(n.replace(/\+/g, '%20'));
      }
      function hc(n) {
        return ''.concat(ac(n.path)).concat(
          ((e = n.parameters),
          Object.keys(e)
            .map(function(n) {
              return ';'.concat(ac(n), '=').concat(ac(e[n]));
            })
            .join(''))
        );
        var e;
      }
      var fc = /^[^\/()?;=#]+/;
      function dc(n) {
        var e = n.match(fc);
        return e ? e[0] : '';
      }
      var pc = /^[^=?&#]+/,
        vc = /^[^?&#]+/,
        gc = (function() {
          function n(e) {
            _classCallCheck(this, n), (this.url = e), (this.remaining = e);
          }
          return (
            _createClass(n, [
              {
                key: 'parseRootSegment',
                value: function() {
                  return (
                    this.consumeOptional('/'),
                    '' === this.remaining || this.peekStartsWith('?') || this.peekStartsWith('#')
                      ? new Js([], {})
                      : new Js([], this.parseChildren())
                  );
                }
              },
              {
                key: 'parseQueryParams',
                value: function() {
                  var n = {};
                  if (this.consumeOptional('?'))
                    do {
                      this.parseQueryParam(n);
                    } while (this.consumeOptional('&'));
                  return n;
                }
              },
              {
                key: 'parseFragment',
                value: function() {
                  return this.consumeOptional('#') ? decodeURIComponent(this.remaining) : null;
                }
              },
              {
                key: 'parseChildren',
                value: function() {
                  if ('' === this.remaining) return {};
                  this.consumeOptional('/');
                  var n = [];
                  for (
                    this.peekStartsWith('(') || n.push(this.parseSegment());
                    this.peekStartsWith('/') &&
                    !this.peekStartsWith('//') &&
                    !this.peekStartsWith('/(');

                  )
                    this.capture('/'), n.push(this.parseSegment());
                  var e = {};
                  this.peekStartsWith('/(') && (this.capture('/'), (e = this.parseParens(!0)));
                  var t = {};
                  return (
                    this.peekStartsWith('(') && (t = this.parseParens(!1)),
                    (n.length > 0 || Object.keys(e).length > 0) && (t.primary = new Js(n, e)),
                    t
                  );
                }
              },
              {
                key: 'parseSegment',
                value: function() {
                  var n = dc(this.remaining);
                  if ('' === n && this.peekStartsWith(';'))
                    throw new Error(
                      "Empty path url segment cannot have parameters: '".concat(
                        this.remaining,
                        "'."
                      )
                    );
                  return this.capture(n), new Xs(sc(n), this.parseMatrixParams());
                }
              },
              {
                key: 'parseMatrixParams',
                value: function() {
                  for (var n = {}; this.consumeOptional(';'); ) this.parseParam(n);
                  return n;
                }
              },
              {
                key: 'parseParam',
                value: function(n) {
                  var e = dc(this.remaining);
                  if (e) {
                    this.capture(e);
                    var t = '';
                    if (this.consumeOptional('=')) {
                      var l = dc(this.remaining);
                      l && ((t = l), this.capture(t));
                    }
                    n[sc(e)] = sc(t);
                  }
                }
              },
              {
                key: 'parseQueryParam',
                value: function(n) {
                  var e = (function(n) {
                    var e = n.match(pc);
                    return e ? e[0] : '';
                  })(this.remaining);
                  if (e) {
                    this.capture(e);
                    var t = '';
                    if (this.consumeOptional('=')) {
                      var l = (function(n) {
                        var e = n.match(vc);
                        return e ? e[0] : '';
                      })(this.remaining);
                      l && ((t = l), this.capture(t));
                    }
                    var r = cc(e),
                      i = cc(t);
                    if (n.hasOwnProperty(r)) {
                      var u = n[r];
                      Array.isArray(u) || ((u = [u]), (n[r] = u)), u.push(i);
                    } else n[r] = i;
                  }
                }
              },
              {
                key: 'parseParens',
                value: function(n) {
                  var e = {};
                  for (
                    this.capture('(');
                    !this.consumeOptional(')') && this.remaining.length > 0;

                  ) {
                    var t = dc(this.remaining),
                      l = this.remaining[t.length];
                    if ('/' !== l && ')' !== l && ';' !== l)
                      throw new Error("Cannot parse url '".concat(this.url, "'"));
                    var r = void 0;
                    t.indexOf(':') > -1
                      ? ((r = t.substr(0, t.indexOf(':'))), this.capture(r), this.capture(':'))
                      : n && (r = 'primary');
                    var i = this.parseChildren();
                    (e[r] = 1 === Object.keys(i).length ? i.primary : new Js([], i)),
                      this.consumeOptional('//');
                  }
                  return e;
                }
              },
              {
                key: 'peekStartsWith',
                value: function(n) {
                  return this.remaining.startsWith(n);
                }
              },
              {
                key: 'consumeOptional',
                value: function(n) {
                  return (
                    !!this.peekStartsWith(n) &&
                    ((this.remaining = this.remaining.substring(n.length)), !0)
                  );
                }
              },
              {
                key: 'capture',
                value: function(n) {
                  if (!this.consumeOptional(n)) throw new Error('Expected "'.concat(n, '".'));
                }
              }
            ]),
            n
          );
        })(),
        _c = (function() {
          function n(e) {
            _classCallCheck(this, n), (this._root = e);
          }
          return (
            _createClass(n, [
              {
                key: 'parent',
                value: function(n) {
                  var e = this.pathFromRoot(n);
                  return e.length > 1 ? e[e.length - 2] : null;
                }
              },
              {
                key: 'children',
                value: function(n) {
                  var e = mc(n, this._root);
                  return e
                    ? e.children.map(function(n) {
                        return n.value;
                      })
                    : [];
                }
              },
              {
                key: 'firstChild',
                value: function(n) {
                  var e = mc(n, this._root);
                  return e && e.children.length > 0 ? e.children[0].value : null;
                }
              },
              {
                key: 'siblings',
                value: function(n) {
                  var e = yc(n, this._root);
                  return e.length < 2
                    ? []
                    : e[e.length - 2].children
                        .map(function(n) {
                          return n.value;
                        })
                        .filter(function(e) {
                          return e !== n;
                        });
                }
              },
              {
                key: 'pathFromRoot',
                value: function(n) {
                  return yc(n, this._root).map(function(n) {
                    return n.value;
                  });
                }
              },
              {
                key: 'root',
                get: function() {
                  return this._root.value;
                }
              }
            ]),
            n
          );
        })();
      function mc(n, e) {
        if (n === e.value) return e;
        var t = !0,
          l = !1,
          r = void 0;
        try {
          for (var i, u = e.children[Symbol.iterator](); !(t = (i = u.next()).done); t = !0) {
            var o = mc(n, i.value);
            if (o) return o;
          }
        } catch (a) {
          (l = !0), (r = a);
        } finally {
          try {
            t || null == u.return || u.return();
          } finally {
            if (l) throw r;
          }
        }
        return null;
      }
      function yc(n, e) {
        if (n === e.value) return [e];
        var t = !0,
          l = !1,
          r = void 0;
        try {
          for (var i, u = e.children[Symbol.iterator](); !(t = (i = u.next()).done); t = !0) {
            var o = yc(n, i.value);
            if (o.length) return o.unshift(e), o;
          }
        } catch (a) {
          (l = !0), (r = a);
        } finally {
          try {
            t || null == u.return || u.return();
          } finally {
            if (l) throw r;
          }
        }
        return [];
      }
      var Cc = (function() {
        function n(e, t) {
          _classCallCheck(this, n), (this.value = e), (this.children = t);
        }
        return (
          _createClass(n, [
            {
              key: 'toString',
              value: function() {
                return 'TreeNode('.concat(this.value, ')');
              }
            }
          ]),
          n
        );
      })();
      function kc(n) {
        var e = {};
        return (
          n &&
            n.children.forEach(function(n) {
              return (e[n.value.outlet] = n);
            }),
          e
        );
      }
      var bc = (function(n) {
        function e(n, t) {
          var l;
          return (
            _classCallCheck(this, e),
            ((l = _possibleConstructorReturn(this, _getPrototypeOf(e).call(this, n))).snapshot = t),
            Sc(_assertThisInitialized(l), n),
            l
          );
        }
        return (
          _inherits(e, n),
          _createClass(e, [
            {
              key: 'toString',
              value: function() {
                return this.snapshot.toString();
              }
            }
          ]),
          e
        );
      })(_c);
      function wc(n, e) {
        var t = (function(n, e) {
            var t = new Ec([], {}, {}, '', {}, 'primary', e, null, n.root, -1, {});
            return new Pc('', new Cc(t, []));
          })(n, e),
          l = new xo([new Xs('', {})]),
          r = new xo({}),
          i = new xo({}),
          u = new xo({}),
          o = new xo(''),
          a = new xc(l, r, u, o, i, 'primary', e, t.root);
        return (a.snapshot = t.root), new bc(new Cc(a, []), t);
      }
      var xc = (function() {
        function n(e, t, l, r, i, u, o, a) {
          _classCallCheck(this, n),
            (this.url = e),
            (this.params = t),
            (this.queryParams = l),
            (this.fragment = r),
            (this.data = i),
            (this.outlet = u),
            (this.component = o),
            (this._futureSnapshot = a);
        }
        return (
          _createClass(n, [
            {
              key: 'toString',
              value: function() {
                return this.snapshot
                  ? this.snapshot.toString()
                  : 'Future('.concat(this._futureSnapshot, ')');
              }
            },
            {
              key: 'routeConfig',
              get: function() {
                return this._futureSnapshot.routeConfig;
              }
            },
            {
              key: 'root',
              get: function() {
                return this._routerState.root;
              }
            },
            {
              key: 'parent',
              get: function() {
                return this._routerState.parent(this);
              }
            },
            {
              key: 'firstChild',
              get: function() {
                return this._routerState.firstChild(this);
              }
            },
            {
              key: 'children',
              get: function() {
                return this._routerState.children(this);
              }
            },
            {
              key: 'pathFromRoot',
              get: function() {
                return this._routerState.pathFromRoot(this);
              }
            },
            {
              key: 'paramMap',
              get: function() {
                return (
                  this._paramMap ||
                    (this._paramMap = this.params.pipe(
                      B(function(n) {
                        return js(n);
                      })
                    )),
                  this._paramMap
                );
              }
            },
            {
              key: 'queryParamMap',
              get: function() {
                return (
                  this._queryParamMap ||
                    (this._queryParamMap = this.queryParams.pipe(
                      B(function(n) {
                        return js(n);
                      })
                    )),
                  this._queryParamMap
                );
              }
            }
          ]),
          n
        );
      })();
      function Oc(n) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'emptyOnly',
          t = n.pathFromRoot,
          l = 0;
        if ('always' !== e)
          for (l = t.length - 1; l >= 1; ) {
            var r = t[l],
              i = t[l - 1];
            if (r.routeConfig && '' === r.routeConfig.path) l--;
            else {
              if (i.component) break;
              l--;
            }
          }
        return (function(n) {
          return n.reduce(
            function(n, e) {
              return {
                params: Object.assign({}, n.params, e.params),
                data: Object.assign({}, n.data, e.data),
                resolve: Object.assign({}, n.resolve, e._resolvedData)
              };
            },
            { params: {}, data: {}, resolve: {} }
          );
        })(t.slice(l));
      }
      var Ec = (function() {
          function n(e, t, l, r, i, u, o, a, s, c, h) {
            _classCallCheck(this, n),
              (this.url = e),
              (this.params = t),
              (this.queryParams = l),
              (this.fragment = r),
              (this.data = i),
              (this.outlet = u),
              (this.component = o),
              (this.routeConfig = a),
              (this._urlSegment = s),
              (this._lastPathIndex = c),
              (this._resolve = h);
          }
          return (
            _createClass(n, [
              {
                key: 'toString',
                value: function() {
                  return "Route(url:'"
                    .concat(
                      this.url
                        .map(function(n) {
                          return n.toString();
                        })
                        .join('/'),
                      "', path:'"
                    )
                    .concat(this.routeConfig ? this.routeConfig.path : '', "')");
                }
              },
              {
                key: 'root',
                get: function() {
                  return this._routerState.root;
                }
              },
              {
                key: 'parent',
                get: function() {
                  return this._routerState.parent(this);
                }
              },
              {
                key: 'firstChild',
                get: function() {
                  return this._routerState.firstChild(this);
                }
              },
              {
                key: 'children',
                get: function() {
                  return this._routerState.children(this);
                }
              },
              {
                key: 'pathFromRoot',
                get: function() {
                  return this._routerState.pathFromRoot(this);
                }
              },
              {
                key: 'paramMap',
                get: function() {
                  return this._paramMap || (this._paramMap = js(this.params)), this._paramMap;
                }
              },
              {
                key: 'queryParamMap',
                get: function() {
                  return (
                    this._queryParamMap || (this._queryParamMap = js(this.queryParams)),
                    this._queryParamMap
                  );
                }
              }
            ]),
            n
          );
        })(),
        Pc = (function(n) {
          function e(n, t) {
            var l;
            return (
              _classCallCheck(this, e),
              ((l = _possibleConstructorReturn(this, _getPrototypeOf(e).call(this, t))).url = n),
              Sc(_assertThisInitialized(l), t),
              l
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: 'toString',
                value: function() {
                  return Tc(this._root);
                }
              }
            ]),
            e
          );
        })(_c);
      function Sc(n, e) {
        (e.value._routerState = n),
          e.children.forEach(function(e) {
            return Sc(n, e);
          });
      }
      function Tc(n) {
        var e = n.children.length > 0 ? ' { '.concat(n.children.map(Tc).join(', '), ' } ') : '';
        return ''.concat(n.value).concat(e);
      }
      function Mc(n) {
        if (n.snapshot) {
          var e = n.snapshot,
            t = n._futureSnapshot;
          (n.snapshot = t),
            Gs(e.queryParams, t.queryParams) || n.queryParams.next(t.queryParams),
            e.fragment !== t.fragment && n.fragment.next(t.fragment),
            Gs(e.params, t.params) || n.params.next(t.params),
            (function(n, e) {
              if (n.length !== e.length) return !1;
              for (var t = 0; t < n.length; ++t) if (!Gs(n[t], e[t])) return !1;
              return !0;
            })(e.url, t.url) || n.url.next(t.url),
            Gs(e.data, t.data) || n.data.next(t.data);
        } else (n.snapshot = n._futureSnapshot), n.data.next(n._futureSnapshot.data);
      }
      function Ac(n, e) {
        var t, l;
        return (
          Gs(n.params, e.params) &&
          nc((t = n.url), (l = e.url)) &&
          t.every(function(n, e) {
            return Gs(n.parameters, l[e].parameters);
          }) &&
          !(!n.parent != !e.parent) &&
          (!n.parent || Ac(n.parent, e.parent))
        );
      }
      function Rc(n) {
        return 'object' == typeof n && null != n && !n.outlets && !n.segmentPath;
      }
      function Ic(n, e, t, l, r) {
        var i = {};
        return (
          l &&
            Zs(l, function(n, e) {
              i[e] = Array.isArray(n)
                ? n.map(function(n) {
                    return ''.concat(n);
                  })
                : ''.concat(n);
            }),
          new $s(
            t.root === n
              ? e
              : (function n(e, t, l) {
                  var r = {};
                  return (
                    Zs(e.children, function(e, i) {
                      r[i] = e === t ? l : n(e, t, l);
                    }),
                    new Js(e.segments, r)
                  );
                })(t.root, n, e),
            i,
            r
          )
        );
      }
      var Nc = (function() {
          function n(e, t, l) {
            if (
              (_classCallCheck(this, n),
              (this.isAbsolute = e),
              (this.numberOfDoubleDots = t),
              (this.commands = l),
              e && l.length > 0 && Rc(l[0]))
            )
              throw new Error('Root segment cannot have matrix parameters');
            var r = l.find(function(n) {
              return 'object' == typeof n && null != n && n.outlets;
            });
            if (r && r !== Ws(l)) throw new Error('{outlets:{}} has to be the last command');
          }
          return (
            _createClass(n, [
              {
                key: 'toRoot',
                value: function() {
                  return this.isAbsolute && 1 === this.commands.length && '/' == this.commands[0];
                }
              }
            ]),
            n
          );
        })(),
        Vc = function n(e, t, l) {
          _classCallCheck(this, n),
            (this.segmentGroup = e),
            (this.processChildren = t),
            (this.index = l);
        };
      function Dc(n) {
        return 'object' == typeof n && null != n && n.outlets ? n.outlets.primary : ''.concat(n);
      }
      function jc(n, e, t) {
        if ((n || (n = new Js([], {})), 0 === n.segments.length && n.hasChildren()))
          return Lc(n, e, t);
        var l = (function(n, e, t) {
            for (
              var l = 0, r = e, i = { match: !1, pathIndex: 0, commandIndex: 0 };
              r < n.segments.length;

            ) {
              if (l >= t.length) return i;
              var u = n.segments[r],
                o = Dc(t[l]),
                a = l < t.length - 1 ? t[l + 1] : null;
              if (r > 0 && void 0 === o) break;
              if (o && a && 'object' == typeof a && void 0 === a.outlets) {
                if (!Hc(o, a, u)) return i;
                l += 2;
              } else {
                if (!Hc(o, {}, u)) return i;
                l++;
              }
              r++;
            }
            return { match: !0, pathIndex: r, commandIndex: l };
          })(n, e, t),
          r = t.slice(l.commandIndex);
        if (l.match && l.pathIndex < n.segments.length) {
          var i = new Js(n.segments.slice(0, l.pathIndex), {});
          return (
            (i.children.primary = new Js(n.segments.slice(l.pathIndex), n.children)), Lc(i, 0, r)
          );
        }
        return l.match && 0 === r.length
          ? new Js(n.segments, {})
          : l.match && !n.hasChildren()
          ? Uc(n, e, t)
          : l.match
          ? Lc(n, 0, r)
          : Uc(n, e, t);
      }
      function Lc(n, e, t) {
        if (0 === t.length) return new Js(n.segments, {});
        var l = (function(n) {
            return 'object' != typeof n[0]
              ? { primary: n }
              : void 0 === n[0].outlets
              ? { primary: n }
              : n[0].outlets;
          })(t),
          r = {};
        return (
          Zs(l, function(t, l) {
            null !== t && (r[l] = jc(n.children[l], e, t));
          }),
          Zs(n.children, function(n, e) {
            void 0 === l[e] && (r[e] = n);
          }),
          new Js(n.segments, r)
        );
      }
      function Uc(n, e, t) {
        for (var l = n.segments.slice(0, e), r = 0; r < t.length; ) {
          if ('object' == typeof t[r] && void 0 !== t[r].outlets) {
            var i = Fc(t[r].outlets);
            return new Js(l, i);
          }
          if (0 === r && Rc(t[0])) l.push(new Xs(n.segments[e].path, t[0])), r++;
          else {
            var u = Dc(t[r]),
              o = r < t.length - 1 ? t[r + 1] : null;
            u && o && Rc(o) ? (l.push(new Xs(u, zc(o))), (r += 2)) : (l.push(new Xs(u, {})), r++);
          }
        }
        return new Js(l, {});
      }
      function Fc(n) {
        var e = {};
        return (
          Zs(n, function(n, t) {
            null !== n && (e[t] = Uc(new Js([], {}), 0, n));
          }),
          e
        );
      }
      function zc(n) {
        var e = {};
        return (
          Zs(n, function(n, t) {
            return (e[t] = ''.concat(n));
          }),
          e
        );
      }
      function Hc(n, e, t) {
        return n == t.path && Gs(e, t.parameters);
      }
      var qc = (function() {
        function n(e, t, l, r) {
          _classCallCheck(this, n),
            (this.routeReuseStrategy = e),
            (this.futureState = t),
            (this.currState = l),
            (this.forwardEvent = r);
        }
        return (
          _createClass(n, [
            {
              key: 'activate',
              value: function(n) {
                var e = this.futureState._root,
                  t = this.currState ? this.currState._root : null;
                this.deactivateChildRoutes(e, t, n),
                  Mc(this.futureState.root),
                  this.activateChildRoutes(e, t, n);
              }
            },
            {
              key: 'deactivateChildRoutes',
              value: function(n, e, t) {
                var l = this,
                  r = kc(e);
                n.children.forEach(function(n) {
                  var e = n.value.outlet;
                  l.deactivateRoutes(n, r[e], t), delete r[e];
                }),
                  Zs(r, function(n, e) {
                    l.deactivateRouteAndItsChildren(n, t);
                  });
              }
            },
            {
              key: 'deactivateRoutes',
              value: function(n, e, t) {
                var l = n.value,
                  r = e ? e.value : null;
                if (l === r)
                  if (l.component) {
                    var i = t.getContext(l.outlet);
                    i && this.deactivateChildRoutes(n, e, i.children);
                  } else this.deactivateChildRoutes(n, e, t);
                else r && this.deactivateRouteAndItsChildren(e, t);
              }
            },
            {
              key: 'deactivateRouteAndItsChildren',
              value: function(n, e) {
                this.routeReuseStrategy.shouldDetach(n.value.snapshot)
                  ? this.detachAndStoreRouteSubtree(n, e)
                  : this.deactivateRouteAndOutlet(n, e);
              }
            },
            {
              key: 'detachAndStoreRouteSubtree',
              value: function(n, e) {
                var t = e.getContext(n.value.outlet);
                if (t && t.outlet) {
                  var l = t.outlet.detach(),
                    r = t.children.onOutletDeactivated();
                  this.routeReuseStrategy.store(n.value.snapshot, {
                    componentRef: l,
                    route: n,
                    contexts: r
                  });
                }
              }
            },
            {
              key: 'deactivateRouteAndOutlet',
              value: function(n, e) {
                var t = this,
                  l = e.getContext(n.value.outlet);
                if (l) {
                  var r = kc(n),
                    i = n.value.component ? l.children : e;
                  Zs(r, function(n, e) {
                    return t.deactivateRouteAndItsChildren(n, i);
                  }),
                    l.outlet && (l.outlet.deactivate(), l.children.onOutletDeactivated());
                }
              }
            },
            {
              key: 'activateChildRoutes',
              value: function(n, e, t) {
                var l = this,
                  r = kc(e);
                n.children.forEach(function(n) {
                  l.activateRoutes(n, r[n.value.outlet], t),
                    l.forwardEvent(new Is(n.value.snapshot));
                }),
                  n.children.length && this.forwardEvent(new As(n.value.snapshot));
              }
            },
            {
              key: 'activateRoutes',
              value: function(n, e, t) {
                var l = n.value,
                  r = e ? e.value : null;
                if ((Mc(l), l === r))
                  if (l.component) {
                    var i = t.getOrCreateContext(l.outlet);
                    this.activateChildRoutes(n, e, i.children);
                  } else this.activateChildRoutes(n, e, t);
                else if (l.component) {
                  var u = t.getOrCreateContext(l.outlet);
                  if (this.routeReuseStrategy.shouldAttach(l.snapshot)) {
                    var o = this.routeReuseStrategy.retrieve(l.snapshot);
                    this.routeReuseStrategy.store(l.snapshot, null),
                      u.children.onOutletReAttached(o.contexts),
                      (u.attachRef = o.componentRef),
                      (u.route = o.route.value),
                      u.outlet && u.outlet.attach(o.componentRef, o.route.value),
                      Bc(o.route);
                  } else {
                    var a = (function(n) {
                        for (var e = n.parent; e; e = e.parent) {
                          var t = e.routeConfig;
                          if (t && t._loadedConfig) return t._loadedConfig;
                          if (t && t.component) return null;
                        }
                        return null;
                      })(l.snapshot),
                      s = a ? a.module.componentFactoryResolver : null;
                    (u.attachRef = null),
                      (u.route = l),
                      (u.resolver = s),
                      u.outlet && u.outlet.activateWith(l, s),
                      this.activateChildRoutes(n, null, u.children);
                  }
                } else this.activateChildRoutes(n, null, t);
              }
            }
          ]),
          n
        );
      })();
      function Bc(n) {
        Mc(n.value), n.children.forEach(Bc);
      }
      function Gc(n) {
        return 'function' == typeof n;
      }
      function Kc(n) {
        return n instanceof $s;
      }
      var Wc = function n(e) {
          _classCallCheck(this, n), (this.segmentGroup = e || null);
        },
        Zc = function n(e) {
          _classCallCheck(this, n), (this.urlTree = e);
        };
      function Qc(n) {
        return new w(function(e) {
          return e.error(new Wc(n));
        });
      }
      function Yc(n) {
        return new w(function(e) {
          return e.error(new Zc(n));
        });
      }
      function $c(n) {
        return new w(function(e) {
          return e.error(
            new Error(
              "Only absolute redirects can have named outlets. redirectTo: '".concat(n, "'")
            )
          );
        });
      }
      var Jc = (function() {
        function n(e, t, l, r, i) {
          _classCallCheck(this, n),
            (this.configLoader = t),
            (this.urlSerializer = l),
            (this.urlTree = r),
            (this.config = i),
            (this.allowRedirects = !0),
            (this.ngModule = e.get(Un));
        }
        return (
          _createClass(n, [
            {
              key: 'apply',
              value: function() {
                var n = this;
                return this.expandSegmentGroup(
                  this.ngModule,
                  this.config,
                  this.urlTree.root,
                  'primary'
                )
                  .pipe(
                    B(function(e) {
                      return n.createUrlTree(e, n.urlTree.queryParams, n.urlTree.fragment);
                    })
                  )
                  .pipe(
                    Qo(function(e) {
                      if (e instanceof Zc) return (n.allowRedirects = !1), n.match(e.urlTree);
                      if (e instanceof Wc) throw n.noMatchError(e);
                      throw e;
                    })
                  );
              }
            },
            {
              key: 'match',
              value: function(n) {
                var e = this;
                return this.expandSegmentGroup(this.ngModule, this.config, n.root, 'primary')
                  .pipe(
                    B(function(t) {
                      return e.createUrlTree(t, n.queryParams, n.fragment);
                    })
                  )
                  .pipe(
                    Qo(function(n) {
                      if (n instanceof Wc) throw e.noMatchError(n);
                      throw n;
                    })
                  );
              }
            },
            {
              key: 'noMatchError',
              value: function(n) {
                return new Error(
                  "Cannot match any routes. URL Segment: '".concat(n.segmentGroup, "'")
                );
              }
            },
            {
              key: 'createUrlTree',
              value: function(n, e, t) {
                var l = n.segments.length > 0 ? new Js([], { primary: n }) : n;
                return new $s(l, e, t);
              }
            },
            {
              key: 'expandSegmentGroup',
              value: function(n, e, t, l) {
                return 0 === t.segments.length && t.hasChildren()
                  ? this.expandChildren(n, e, t).pipe(
                      B(function(n) {
                        return new Js([], n);
                      })
                    )
                  : this.expandSegment(n, t, e, t.segments, l, !0);
              }
            },
            {
              key: 'expandChildren',
              value: function(n, e, t) {
                var l = this;
                return (function(t, r) {
                  if (0 === Object.keys(t).length) return wo({});
                  var i = [],
                    u = [],
                    o = {};
                  return (
                    Zs(t, function(t, r) {
                      var a,
                        s,
                        c = ((a = r), (s = t), l.expandSegmentGroup(n, e, s, a)).pipe(
                          B(function(n) {
                            return (o[r] = n);
                          })
                        );
                      'primary' === r ? i.push(c) : u.push(c);
                    }),
                    wo.apply(null, i.concat(u)).pipe(
                      Ao(),
                      Zo(),
                      B(function() {
                        return o;
                      })
                    )
                  );
                })(t.children);
              }
            },
            {
              key: 'expandSegment',
              value: function(n, e, t, l, r, i) {
                var u = this;
                return wo.apply(void 0, _toConsumableArray(t)).pipe(
                  B(function(o) {
                    return u.expandSegmentAgainstRoute(n, e, t, o, l, r, i).pipe(
                      Qo(function(n) {
                        if (n instanceof Wc) return wo(null);
                        throw n;
                      })
                    );
                  }),
                  Ao(),
                  ea(function(n) {
                    return !!n;
                  }),
                  Qo(function(n, t) {
                    if (n instanceof Eo || 'EmptyError' === n.name) {
                      if (u.noLeftoversInUrl(e, l, r)) return wo(new Js([], {}));
                      throw new Wc(e);
                    }
                    throw n;
                  })
                );
              }
            },
            {
              key: 'noLeftoversInUrl',
              value: function(n, e, t) {
                return 0 === e.length && !n.children[t];
              }
            },
            {
              key: 'expandSegmentAgainstRoute',
              value: function(n, e, t, l, r, i, u) {
                return th(l) !== i
                  ? Qc(e)
                  : void 0 === l.redirectTo
                  ? this.matchSegmentAgainstRoute(n, e, l, r)
                  : u && this.allowRedirects
                  ? this.expandSegmentAgainstRouteUsingRedirect(n, e, t, l, r, i)
                  : Qc(e);
              }
            },
            {
              key: 'expandSegmentAgainstRouteUsingRedirect',
              value: function(n, e, t, l, r, i) {
                return '**' === l.path
                  ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(n, t, l, i)
                  : this.expandRegularSegmentAgainstRouteUsingRedirect(n, e, t, l, r, i);
              }
            },
            {
              key: 'expandWildCardWithParamsAgainstRouteUsingRedirect',
              value: function(n, e, t, l) {
                var r = this,
                  i = this.applyRedirectCommands([], t.redirectTo, {});
                return t.redirectTo.startsWith('/')
                  ? Yc(i)
                  : this.lineralizeSegments(t, i).pipe(
                      Q(function(t) {
                        var i = new Js(t, {});
                        return r.expandSegment(n, i, e, t, l, !1);
                      })
                    );
              }
            },
            {
              key: 'expandRegularSegmentAgainstRouteUsingRedirect',
              value: function(n, e, t, l, r, i) {
                var u = this,
                  o = Xc(e, l, r),
                  a = o.matched,
                  s = o.consumedSegments,
                  c = o.lastChild,
                  h = o.positionalParamSegments;
                if (!a) return Qc(e);
                var f = this.applyRedirectCommands(s, l.redirectTo, h);
                return l.redirectTo.startsWith('/')
                  ? Yc(f)
                  : this.lineralizeSegments(l, f).pipe(
                      Q(function(l) {
                        return u.expandSegment(n, e, t, l.concat(r.slice(c)), i, !1);
                      })
                    );
              }
            },
            {
              key: 'matchSegmentAgainstRoute',
              value: function(n, e, t, l) {
                var r = this;
                if ('**' === t.path)
                  return t.loadChildren
                    ? this.configLoader.load(n.injector, t).pipe(
                        B(function(n) {
                          return (t._loadedConfig = n), new Js(l, {});
                        })
                      )
                    : wo(new Js(l, {}));
                var i = Xc(e, t, l),
                  u = i.matched,
                  o = i.consumedSegments,
                  a = i.lastChild;
                if (!u) return Qc(e);
                var s = l.slice(a);
                return this.getChildConfig(n, t, l).pipe(
                  Q(function(n) {
                    var t = n.module,
                      l = n.routes,
                      i = (function(n, e, t, l) {
                        return t.length > 0 &&
                          (function(n, e, t) {
                            return t.some(function(t) {
                              return eh(n, e, t) && 'primary' !== th(t);
                            });
                          })(n, t, l)
                          ? {
                              segmentGroup: nh(
                                new Js(
                                  e,
                                  (function(n, e) {
                                    var t = {};
                                    t.primary = e;
                                    var l = !0,
                                      r = !1,
                                      i = void 0;
                                    try {
                                      for (
                                        var u, o = n[Symbol.iterator]();
                                        !(l = (u = o.next()).done);
                                        l = !0
                                      ) {
                                        var a = u.value;
                                        '' === a.path &&
                                          'primary' !== th(a) &&
                                          (t[th(a)] = new Js([], {}));
                                      }
                                    } catch (s) {
                                      (r = !0), (i = s);
                                    } finally {
                                      try {
                                        l || null == o.return || o.return();
                                      } finally {
                                        if (r) throw i;
                                      }
                                    }
                                    return t;
                                  })(l, new Js(t, n.children))
                                )
                              ),
                              slicedSegments: []
                            }
                          : 0 === t.length &&
                            (function(n, e, t) {
                              return t.some(function(t) {
                                return eh(n, e, t);
                              });
                            })(n, t, l)
                          ? {
                              segmentGroup: nh(
                                new Js(
                                  n.segments,
                                  (function(n, e, t, l) {
                                    var r = {},
                                      i = !0,
                                      u = !1,
                                      o = void 0;
                                    try {
                                      for (
                                        var a, s = t[Symbol.iterator]();
                                        !(i = (a = s.next()).done);
                                        i = !0
                                      ) {
                                        var c = a.value;
                                        eh(n, e, c) && !l[th(c)] && (r[th(c)] = new Js([], {}));
                                      }
                                    } catch (h) {
                                      (u = !0), (o = h);
                                    } finally {
                                      try {
                                        i || null == s.return || s.return();
                                      } finally {
                                        if (u) throw o;
                                      }
                                    }
                                    return Object.assign({}, l, r);
                                  })(n, t, l, n.children)
                                )
                              ),
                              slicedSegments: t
                            }
                          : { segmentGroup: n, slicedSegments: t };
                      })(e, o, s, l),
                      u = i.segmentGroup,
                      a = i.slicedSegments;
                    return 0 === a.length && u.hasChildren()
                      ? r.expandChildren(t, l, u).pipe(
                          B(function(n) {
                            return new Js(o, n);
                          })
                        )
                      : 0 === l.length && 0 === a.length
                      ? wo(new Js(o, {}))
                      : r.expandSegment(t, u, l, a, 'primary', !0).pipe(
                          B(function(n) {
                            return new Js(o.concat(n.segments), n.children);
                          })
                        );
                  })
                );
              }
            },
            {
              key: 'getChildConfig',
              value: function(n, e, t) {
                var l = this;
                return e.children
                  ? wo(new Fs(e.children, n))
                  : e.loadChildren
                  ? void 0 !== e._loadedConfig
                    ? wo(e._loadedConfig)
                    : (function(n, e, t) {
                        var l,
                          r = e.canLoad;
                        return r && 0 !== r.length
                          ? Z(r)
                              .pipe(
                                B(function(l) {
                                  var r,
                                    i = n.get(l);
                                  if (
                                    (function(n) {
                                      return n && Gc(n.canLoad);
                                    })(i)
                                  )
                                    r = i.canLoad(e, t);
                                  else {
                                    if (!Gc(i)) throw new Error('Invalid CanLoad guard');
                                    r = i(e, t);
                                  }
                                  return Qs(r);
                                })
                              )
                              .pipe(
                                Ao(),
                                ((l = function(n) {
                                  return !0 === n;
                                }),
                                function(n) {
                                  return n.lift(new ta(l, void 0, n));
                                })
                              )
                          : wo(!0);
                      })(n.injector, e, t).pipe(
                        Q(function(t) {
                          return t
                            ? l.configLoader.load(n.injector, e).pipe(
                                B(function(n) {
                                  return (e._loadedConfig = n), n;
                                })
                              )
                            : (function(n) {
                                return new w(function(e) {
                                  return e.error(
                                    Ls(
                                      'Cannot load children because the guard of the route "path: \''.concat(
                                        n.path,
                                        '\'" returned false'
                                      )
                                    )
                                  );
                                });
                              })(e);
                        })
                      )
                  : wo(new Fs([], n));
              }
            },
            {
              key: 'lineralizeSegments',
              value: function(n, e) {
                for (var t = [], l = e.root; ; ) {
                  if (((t = t.concat(l.segments)), 0 === l.numberOfChildren)) return wo(t);
                  if (l.numberOfChildren > 1 || !l.children.primary) return $c(n.redirectTo);
                  l = l.children.primary;
                }
              }
            },
            {
              key: 'applyRedirectCommands',
              value: function(n, e, t) {
                return this.applyRedirectCreatreUrlTree(e, this.urlSerializer.parse(e), n, t);
              }
            },
            {
              key: 'applyRedirectCreatreUrlTree',
              value: function(n, e, t, l) {
                var r = this.createSegmentGroup(n, e.root, t, l);
                return new $s(
                  r,
                  this.createQueryParams(e.queryParams, this.urlTree.queryParams),
                  e.fragment
                );
              }
            },
            {
              key: 'createQueryParams',
              value: function(n, e) {
                var t = {};
                return (
                  Zs(n, function(n, l) {
                    if ('string' == typeof n && n.startsWith(':')) {
                      var r = n.substring(1);
                      t[l] = e[r];
                    } else t[l] = n;
                  }),
                  t
                );
              }
            },
            {
              key: 'createSegmentGroup',
              value: function(n, e, t, l) {
                var r = this,
                  i = this.createSegments(n, e.segments, t, l),
                  u = {};
                return (
                  Zs(e.children, function(e, i) {
                    u[i] = r.createSegmentGroup(n, e, t, l);
                  }),
                  new Js(i, u)
                );
              }
            },
            {
              key: 'createSegments',
              value: function(n, e, t, l) {
                var r = this;
                return e.map(function(e) {
                  return e.path.startsWith(':') ? r.findPosParam(n, e, l) : r.findOrReturn(e, t);
                });
              }
            },
            {
              key: 'findPosParam',
              value: function(n, e, t) {
                var l = t[e.path.substring(1)];
                if (!l)
                  throw new Error(
                    "Cannot redirect to '".concat(n, "'. Cannot find '").concat(e.path, "'.")
                  );
                return l;
              }
            },
            {
              key: 'findOrReturn',
              value: function(n, e) {
                var t = 0,
                  l = !0,
                  r = !1,
                  i = void 0;
                try {
                  for (var u, o = e[Symbol.iterator](); !(l = (u = o.next()).done); l = !0) {
                    var a = u.value;
                    if (a.path === n.path) return e.splice(t), a;
                    t++;
                  }
                } catch (s) {
                  (r = !0), (i = s);
                } finally {
                  try {
                    l || null == o.return || o.return();
                  } finally {
                    if (r) throw i;
                  }
                }
                return n;
              }
            }
          ]),
          n
        );
      })();
      function Xc(n, e, t) {
        if ('' === e.path)
          return 'full' === e.pathMatch && (n.hasChildren() || t.length > 0)
            ? { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} }
            : { matched: !0, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
        var l = (e.matcher || Us)(t, n, e);
        return l
          ? {
              matched: !0,
              consumedSegments: l.consumed,
              lastChild: l.consumed.length,
              positionalParamSegments: l.posParams
            }
          : { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
      }
      function nh(n) {
        if (1 === n.numberOfChildren && n.children.primary) {
          var e = n.children.primary;
          return new Js(n.segments.concat(e.segments), e.children);
        }
        return n;
      }
      function eh(n, e, t) {
        return (
          (!(n.hasChildren() || e.length > 0) || 'full' !== t.pathMatch) &&
          '' === t.path &&
          void 0 !== t.redirectTo
        );
      }
      function th(n) {
        return n.outlet || 'primary';
      }
      var lh = function n(e) {
          _classCallCheck(this, n), (this.path = e), (this.route = this.path[this.path.length - 1]);
        },
        rh = function n(e, t) {
          _classCallCheck(this, n), (this.component = e), (this.route = t);
        };
      function ih(n, e, t) {
        var l = (function(n) {
          if (!n) return null;
          for (var e = n.parent; e; e = e.parent) {
            var t = e.routeConfig;
            if (t && t._loadedConfig) return t._loadedConfig;
          }
          return null;
        })(e);
        return (l ? l.module.injector : t).get(n);
      }
      function uh(n, e, t) {
        var l = kc(n),
          r = n.value;
        Zs(l, function(n, l) {
          uh(n, r.component ? (e ? e.children.getContext(l) : null) : e, t);
        }),
          t.canDeactivateChecks.push(
            new rh(
              r.component && e && e.outlet && e.outlet.isActivated ? e.outlet.component : null,
              r
            )
          );
      }
      var oh = Symbol('INITIAL_VALUE');
      function ah() {
        return ra(function(n) {
          return function() {
            for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++) e[t] = arguments[t];
            var l = null,
              r = null;
            return (
              R(e[e.length - 1]) && (r = e.pop()),
              'function' == typeof e[e.length - 1] && (l = e.pop()),
              1 === e.length && a(e[0]) && (e = e[0]),
              W(e, r).lift(new So(l))
            );
          }
            .apply(
              void 0,
              _toConsumableArray(
                n.map(function(n) {
                  return n.pipe(
                    Jo(1),
                    (function() {
                      for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
                        e[t] = arguments[t];
                      return function(n) {
                        var t = e[e.length - 1];
                        R(t) ? e.pop() : (t = null);
                        var l = e.length;
                        return (function() {
                          return Ao()(wo.apply(void 0, arguments));
                        })(1 !== l || t ? (l > 0 ? W(e, t) : ko(t)) : bo(e[0]), n);
                      };
                    })(oh)
                  );
                })
              )
            )
            .pipe(
              oa(function(n, e) {
                var t = !1;
                return e.reduce(function(n, l, r) {
                  if (n !== oh) return n;
                  if ((l === oh && (t = !0), !t)) {
                    if (!1 === l) return l;
                    if (r === e.length - 1 || Kc(l)) return l;
                  }
                  return n;
                }, n);
              }, oh),
              Ro(function(n) {
                return n !== oh;
              }),
              B(function(n) {
                return Kc(n) ? n : !0 === n;
              }),
              Jo(1)
            );
        });
      }
      function sh(n, e) {
        return null !== n && e && e(new Rs(n)), wo(!0);
      }
      function ch(n, e) {
        return null !== n && e && e(new Ms(n)), wo(!0);
      }
      function hh(n, e, t) {
        var l = e.routeConfig ? e.routeConfig.canActivate : null;
        return l && 0 !== l.length
          ? wo(
              l.map(function(l) {
                return Mo(function() {
                  var r,
                    i = ih(l, e, t);
                  if (
                    (function(n) {
                      return n && Gc(n.canActivate);
                    })(i)
                  )
                    r = Qs(i.canActivate(e, n));
                  else {
                    if (!Gc(i)) throw new Error('Invalid CanActivate guard');
                    r = Qs(i(e, n));
                  }
                  return r.pipe(ea());
                });
              })
            ).pipe(ah())
          : wo(!0);
      }
      function fh(n, e, t) {
        var l = e[e.length - 1],
          r = e
            .slice(0, e.length - 1)
            .reverse()
            .map(function(n) {
              return (function(n) {
                var e = n.routeConfig ? n.routeConfig.canActivateChild : null;
                return e && 0 !== e.length ? { node: n, guards: e } : null;
              })(n);
            })
            .filter(function(n) {
              return null !== n;
            })
            .map(function(e) {
              return Mo(function() {
                return wo(
                  e.guards.map(function(r) {
                    var i,
                      u = ih(r, e.node, t);
                    if (
                      (function(n) {
                        return n && Gc(n.canActivateChild);
                      })(u)
                    )
                      i = Qs(u.canActivateChild(l, n));
                    else {
                      if (!Gc(u)) throw new Error('Invalid CanActivateChild guard');
                      i = Qs(u(l, n));
                    }
                    return i.pipe(ea());
                  })
                ).pipe(ah());
              });
            });
        return wo(r).pipe(ah());
      }
      var dh = function n() {
          _classCallCheck(this, n);
        },
        ph = (function() {
          function n(e, t, l, r, i, u) {
            _classCallCheck(this, n),
              (this.rootComponentType = e),
              (this.config = t),
              (this.urlTree = l),
              (this.url = r),
              (this.paramsInheritanceStrategy = i),
              (this.relativeLinkResolution = u);
          }
          return (
            _createClass(n, [
              {
                key: 'recognize',
                value: function() {
                  try {
                    var n = _h(this.urlTree.root, [], [], this.config, this.relativeLinkResolution)
                        .segmentGroup,
                      e = this.processSegmentGroup(this.config, n, 'primary'),
                      t = new Ec(
                        [],
                        Object.freeze({}),
                        Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                        this.urlTree.fragment,
                        {},
                        'primary',
                        this.rootComponentType,
                        null,
                        this.urlTree.root,
                        -1,
                        {}
                      ),
                      l = new Cc(t, e),
                      r = new Pc(this.url, l);
                    return this.inheritParamsAndData(r._root), wo(r);
                  } catch (i) {
                    return new w(function(n) {
                      return n.error(i);
                    });
                  }
                }
              },
              {
                key: 'inheritParamsAndData',
                value: function(n) {
                  var e = this,
                    t = n.value,
                    l = Oc(t, this.paramsInheritanceStrategy);
                  (t.params = Object.freeze(l.params)),
                    (t.data = Object.freeze(l.data)),
                    n.children.forEach(function(n) {
                      return e.inheritParamsAndData(n);
                    });
                }
              },
              {
                key: 'processSegmentGroup',
                value: function(n, e, t) {
                  return 0 === e.segments.length && e.hasChildren()
                    ? this.processChildren(n, e)
                    : this.processSegment(n, e, e.segments, t);
                }
              },
              {
                key: 'processChildren',
                value: function(n, e) {
                  var t,
                    l = this,
                    r = ec(e, function(e, t) {
                      return l.processSegmentGroup(n, e, t);
                    });
                  return (
                    (t = {}),
                    r.forEach(function(n) {
                      var e = t[n.value.outlet];
                      if (e) {
                        var l = e.url
                            .map(function(n) {
                              return n.toString();
                            })
                            .join('/'),
                          r = n.value.url
                            .map(function(n) {
                              return n.toString();
                            })
                            .join('/');
                        throw new Error(
                          "Two segments cannot have the same outlet name: '"
                            .concat(l, "' and '")
                            .concat(r, "'.")
                        );
                      }
                      t[n.value.outlet] = n.value;
                    }),
                    r.sort(function(n, e) {
                      return 'primary' === n.value.outlet
                        ? -1
                        : 'primary' === e.value.outlet
                        ? 1
                        : n.value.outlet.localeCompare(e.value.outlet);
                    }),
                    r
                  );
                }
              },
              {
                key: 'processSegment',
                value: function(n, e, t, l) {
                  var r = !0,
                    i = !1,
                    u = void 0;
                  try {
                    for (var o, a = n[Symbol.iterator](); !(r = (o = a.next()).done); r = !0) {
                      var s = o.value;
                      try {
                        return this.processSegmentAgainstRoute(s, e, t, l);
                      } catch (c) {
                        if (!(c instanceof dh)) throw c;
                      }
                    }
                  } catch (h) {
                    (i = !0), (u = h);
                  } finally {
                    try {
                      r || null == a.return || a.return();
                    } finally {
                      if (i) throw u;
                    }
                  }
                  if (this.noLeftoversInUrl(e, t, l)) return [];
                  throw new dh();
                }
              },
              {
                key: 'noLeftoversInUrl',
                value: function(n, e, t) {
                  return 0 === e.length && !n.children[t];
                }
              },
              {
                key: 'processSegmentAgainstRoute',
                value: function(n, e, t, l) {
                  if (n.redirectTo) throw new dh();
                  if ((n.outlet || 'primary') !== l) throw new dh();
                  var r,
                    i = [],
                    u = [];
                  if ('**' === n.path) {
                    var o = t.length > 0 ? Ws(t).parameters : {};
                    r = new Ec(
                      t,
                      o,
                      Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                      this.urlTree.fragment,
                      Ch(n),
                      l,
                      n.component,
                      n,
                      vh(e),
                      gh(e) + t.length,
                      kh(n)
                    );
                  } else {
                    var a = (function(n, e, t) {
                      if ('' === e.path) {
                        if ('full' === e.pathMatch && (n.hasChildren() || t.length > 0))
                          throw new dh();
                        return { consumedSegments: [], lastChild: 0, parameters: {} };
                      }
                      var l = (e.matcher || Us)(t, n, e);
                      if (!l) throw new dh();
                      var r = {};
                      Zs(l.posParams, function(n, e) {
                        r[e] = n.path;
                      });
                      var i =
                        l.consumed.length > 0
                          ? Object.assign({}, r, l.consumed[l.consumed.length - 1].parameters)
                          : r;
                      return {
                        consumedSegments: l.consumed,
                        lastChild: l.consumed.length,
                        parameters: i
                      };
                    })(e, n, t);
                    (i = a.consumedSegments),
                      (u = t.slice(a.lastChild)),
                      (r = new Ec(
                        i,
                        a.parameters,
                        Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                        this.urlTree.fragment,
                        Ch(n),
                        l,
                        n.component,
                        n,
                        vh(e),
                        gh(e) + i.length,
                        kh(n)
                      ));
                  }
                  var s = (function(n) {
                      return n.children ? n.children : n.loadChildren ? n._loadedConfig.routes : [];
                    })(n),
                    c = _h(e, i, u, s, this.relativeLinkResolution),
                    h = c.segmentGroup,
                    f = c.slicedSegments;
                  if (0 === f.length && h.hasChildren()) {
                    var d = this.processChildren(s, h);
                    return [new Cc(r, d)];
                  }
                  if (0 === s.length && 0 === f.length) return [new Cc(r, [])];
                  var p = this.processSegment(s, h, f, 'primary');
                  return [new Cc(r, p)];
                }
              }
            ]),
            n
          );
        })();
      function vh(n) {
        for (var e = n; e._sourceSegment; ) e = e._sourceSegment;
        return e;
      }
      function gh(n) {
        for (var e = n, t = e._segmentIndexShift ? e._segmentIndexShift : 0; e._sourceSegment; )
          t += (e = e._sourceSegment)._segmentIndexShift ? e._segmentIndexShift : 0;
        return t - 1;
      }
      function _h(n, e, t, l, r) {
        if (
          t.length > 0 &&
          (function(n, e, t) {
            return t.some(function(t) {
              return mh(n, e, t) && 'primary' !== yh(t);
            });
          })(n, t, l)
        ) {
          var i = new Js(
            e,
            (function(n, e, t, l) {
              var r = {};
              (r.primary = l), (l._sourceSegment = n), (l._segmentIndexShift = e.length);
              var i = !0,
                u = !1,
                o = void 0;
              try {
                for (var a, s = t[Symbol.iterator](); !(i = (a = s.next()).done); i = !0) {
                  var c = a.value;
                  if ('' === c.path && 'primary' !== yh(c)) {
                    var h = new Js([], {});
                    (h._sourceSegment = n), (h._segmentIndexShift = e.length), (r[yh(c)] = h);
                  }
                }
              } catch (f) {
                (u = !0), (o = f);
              } finally {
                try {
                  i || null == s.return || s.return();
                } finally {
                  if (u) throw o;
                }
              }
              return r;
            })(n, e, l, new Js(t, n.children))
          );
          return (
            (i._sourceSegment = n),
            (i._segmentIndexShift = e.length),
            { segmentGroup: i, slicedSegments: [] }
          );
        }
        if (
          0 === t.length &&
          (function(n, e, t) {
            return t.some(function(t) {
              return mh(n, e, t);
            });
          })(n, t, l)
        ) {
          var u = new Js(
            n.segments,
            (function(n, e, t, l, r, i) {
              var u = {},
                o = !0,
                a = !1,
                s = void 0;
              try {
                for (var c, h = l[Symbol.iterator](); !(o = (c = h.next()).done); o = !0) {
                  var f = c.value;
                  if (mh(n, t, f) && !r[yh(f)]) {
                    var d = new Js([], {});
                    (d._sourceSegment = n),
                      (d._segmentIndexShift = 'legacy' === i ? n.segments.length : e.length),
                      (u[yh(f)] = d);
                  }
                }
              } catch (p) {
                (a = !0), (s = p);
              } finally {
                try {
                  o || null == h.return || h.return();
                } finally {
                  if (a) throw s;
                }
              }
              return Object.assign({}, r, u);
            })(n, e, t, l, n.children, r)
          );
          return (
            (u._sourceSegment = n),
            (u._segmentIndexShift = e.length),
            { segmentGroup: u, slicedSegments: t }
          );
        }
        var o = new Js(n.segments, n.children);
        return (
          (o._sourceSegment = n),
          (o._segmentIndexShift = e.length),
          { segmentGroup: o, slicedSegments: t }
        );
      }
      function mh(n, e, t) {
        return (
          (!(n.hasChildren() || e.length > 0) || 'full' !== t.pathMatch) &&
          '' === t.path &&
          void 0 === t.redirectTo
        );
      }
      function yh(n) {
        return n.outlet || 'primary';
      }
      function Ch(n) {
        return n.data || {};
      }
      function kh(n) {
        return n.resolve || {};
      }
      function bh(n, e, t, l) {
        var r = ih(n, e, l);
        return Qs(r.resolve ? r.resolve(e, t) : r(e, t));
      }
      function wh(n) {
        return function(e) {
          return e.pipe(
            ra(function(e) {
              var t = n(e);
              return t
                ? Z(t).pipe(
                    B(function() {
                      return e;
                    })
                  )
                : Z([e]);
            })
          );
        };
      }
      var xh = function n() {
          _classCallCheck(this, n);
        },
        Oh = (function() {
          function n() {
            _classCallCheck(this, n);
          }
          return (
            _createClass(n, [
              {
                key: 'shouldDetach',
                value: function(n) {
                  return !1;
                }
              },
              { key: 'store', value: function(n, e) {} },
              {
                key: 'shouldAttach',
                value: function(n) {
                  return !1;
                }
              },
              {
                key: 'retrieve',
                value: function(n) {
                  return null;
                }
              },
              {
                key: 'shouldReuseRoute',
                value: function(n, e) {
                  return n.routeConfig === e.routeConfig;
                }
              }
            ]),
            n
          );
        })(),
        Eh = new Sn('ROUTES'),
        Ph = (function() {
          function n(e, t, l, r) {
            _classCallCheck(this, n),
              (this.loader = e),
              (this.compiler = t),
              (this.onLoadStartListener = l),
              (this.onLoadEndListener = r);
          }
          return (
            _createClass(n, [
              {
                key: 'load',
                value: function(n, e) {
                  var t = this;
                  return (
                    this.onLoadStartListener && this.onLoadStartListener(e),
                    this.loadModuleFactory(e.loadChildren).pipe(
                      B(function(l) {
                        t.onLoadEndListener && t.onLoadEndListener(e);
                        var r = l.create(n);
                        return new Fs(Ks(r.injector.get(Eh)).map(Bs), r);
                      })
                    )
                  );
                }
              },
              {
                key: 'loadModuleFactory',
                value: function(n) {
                  var e = this;
                  return 'string' == typeof n
                    ? Z(this.loader.load(n))
                    : Qs(n()).pipe(
                        Q(function(n) {
                          return n instanceof Fn ? wo(n) : Z(e.compiler.compileModuleAsync(n));
                        })
                      );
                }
              }
            ]),
            n
          );
        })(),
        Sh = function n() {
          _classCallCheck(this, n);
        },
        Th = (function() {
          function n() {
            _classCallCheck(this, n);
          }
          return (
            _createClass(n, [
              {
                key: 'shouldProcessUrl',
                value: function(n) {
                  return !0;
                }
              },
              {
                key: 'extract',
                value: function(n) {
                  return n;
                }
              },
              {
                key: 'merge',
                value: function(n, e) {
                  return n;
                }
              }
            ]),
            n
          );
        })();
      function Mh(n) {
        throw n;
      }
      function Ah(n, e, t) {
        return e.parse('/');
      }
      function Rh(n, e) {
        return wo(null);
      }
      var Ih = (function() {
          function n(e, t, l, r, i, u, o, a) {
            var s = this;
            _classCallCheck(this, n),
              (this.rootComponentType = e),
              (this.urlSerializer = t),
              (this.rootContexts = l),
              (this.location = r),
              (this.config = a),
              (this.lastSuccessfulNavigation = null),
              (this.currentNavigation = null),
              (this.navigationId = 0),
              (this.isNgZoneEnabled = !1),
              (this.events = new M()),
              (this.errorHandler = Mh),
              (this.malformedUriErrorHandler = Ah),
              (this.navigated = !1),
              (this.lastSuccessfulId = -1),
              (this.hooks = { beforePreactivation: Rh, afterPreactivation: Rh }),
              (this.urlHandlingStrategy = new Th()),
              (this.routeReuseStrategy = new Oh()),
              (this.onSameUrlNavigation = 'ignore'),
              (this.paramsInheritanceStrategy = 'emptyOnly'),
              (this.urlUpdateStrategy = 'deferred'),
              (this.relativeLinkResolution = 'legacy'),
              (this.ngModule = i.get(Un)),
              (this.console = i.get(Sr));
            var c = i.get(Kr);
            (this.isNgZoneEnabled = c instanceof Kr),
              this.resetConfig(a),
              (this.currentUrlTree = new $s(new Js([], {}), {}, null)),
              (this.rawUrlTree = this.currentUrlTree),
              (this.browserUrlTree = this.currentUrlTree),
              (this.configLoader = new Ph(
                u,
                o,
                function(n) {
                  return s.triggerEvent(new Ss(n));
                },
                function(n) {
                  return s.triggerEvent(new Ts(n));
                }
              )),
              (this.routerState = wc(this.currentUrlTree, this.rootComponentType)),
              (this.transitions = new xo({
                id: 0,
                currentUrlTree: this.currentUrlTree,
                currentRawUrl: this.currentUrlTree,
                extractedUrl: this.urlHandlingStrategy.extract(this.currentUrlTree),
                urlAfterRedirects: this.urlHandlingStrategy.extract(this.currentUrlTree),
                rawUrl: this.currentUrlTree,
                extras: {},
                resolve: null,
                reject: null,
                promise: Promise.resolve(!0),
                source: 'imperative',
                restoredState: null,
                currentSnapshot: this.routerState.snapshot,
                targetSnapshot: null,
                currentRouterState: this.routerState,
                targetRouterState: null,
                guards: { canActivateChecks: [], canDeactivateChecks: [] },
                guardsResult: null
              })),
              (this.navigations = this.setupNavigations(this.transitions)),
              this.processNavigations();
          }
          return (
            _createClass(n, [
              {
                key: 'setupNavigations',
                value: function(n) {
                  var e = this,
                    t = this.events;
                  return n.pipe(
                    Ro(function(n) {
                      return 0 !== n.id;
                    }),
                    B(function(n) {
                      return Object.assign({}, n, {
                        extractedUrl: e.urlHandlingStrategy.extract(n.rawUrl)
                      });
                    }),
                    ra(function(n) {
                      var l,
                        r,
                        i,
                        u,
                        o = !1,
                        a = !1;
                      return wo(n).pipe(
                        Fo(function(n) {
                          e.currentNavigation = {
                            id: n.id,
                            initialUrl: n.currentRawUrl,
                            extractedUrl: n.extractedUrl,
                            trigger: n.source,
                            extras: n.extras,
                            previousNavigation: e.lastSuccessfulNavigation
                              ? Object.assign({}, e.lastSuccessfulNavigation, {
                                  previousNavigation: null
                                })
                              : null
                          };
                        }),
                        ra(function(n) {
                          var l,
                            r,
                            i,
                            u,
                            o =
                              !e.navigated ||
                              n.extractedUrl.toString() !== e.browserUrlTree.toString();
                          if (
                            ('reload' === e.onSameUrlNavigation || o) &&
                            e.urlHandlingStrategy.shouldProcessUrl(n.rawUrl)
                          )
                            return wo(n).pipe(
                              ra(function(n) {
                                var l = e.transitions.getValue();
                                return (
                                  t.next(
                                    new ys(
                                      n.id,
                                      e.serializeUrl(n.extractedUrl),
                                      n.source,
                                      n.restoredState
                                    )
                                  ),
                                  l !== e.transitions.getValue() ? Co : [n]
                                );
                              }),
                              ra(function(n) {
                                return Promise.resolve(n);
                              }),
                              ((l = e.ngModule.injector),
                              (r = e.configLoader),
                              (i = e.urlSerializer),
                              (u = e.config),
                              function(n) {
                                return n.pipe(
                                  ra(function(n) {
                                    return (function(n, e, t, l, r) {
                                      return new Jc(n, e, t, l, r).apply();
                                    })(l, r, i, n.extractedUrl, u).pipe(
                                      B(function(e) {
                                        return Object.assign({}, n, { urlAfterRedirects: e });
                                      })
                                    );
                                  })
                                );
                              }),
                              Fo(function(n) {
                                e.currentNavigation = Object.assign({}, e.currentNavigation, {
                                  finalUrl: n.urlAfterRedirects
                                });
                              }),
                              (function(n, t, l, r, i) {
                                return function(l) {
                                  return l.pipe(
                                    Q(function(l) {
                                      return (function(n, e, t, l) {
                                        var r =
                                            arguments.length > 4 && void 0 !== arguments[4]
                                              ? arguments[4]
                                              : 'emptyOnly',
                                          i =
                                            arguments.length > 5 && void 0 !== arguments[5]
                                              ? arguments[5]
                                              : 'legacy';
                                        return new ph(n, e, t, l, r, i).recognize();
                                      })(
                                        n,
                                        t,
                                        l.urlAfterRedirects,
                                        ((u = l.urlAfterRedirects), e.serializeUrl(u)),
                                        r,
                                        i
                                      ).pipe(
                                        B(function(n) {
                                          return Object.assign({}, l, { targetSnapshot: n });
                                        })
                                      );
                                      var u;
                                    })
                                  );
                                };
                              })(
                                e.rootComponentType,
                                e.config,
                                0,
                                e.paramsInheritanceStrategy,
                                e.relativeLinkResolution
                              ),
                              Fo(function(n) {
                                'eager' === e.urlUpdateStrategy &&
                                  (n.extras.skipLocationChange ||
                                    e.setBrowserUrl(
                                      n.urlAfterRedirects,
                                      !!n.extras.replaceUrl,
                                      n.id,
                                      n.extras.state
                                    ),
                                  (e.browserUrlTree = n.urlAfterRedirects));
                              }),
                              Fo(function(n) {
                                var l = new ws(
                                  n.id,
                                  e.serializeUrl(n.extractedUrl),
                                  e.serializeUrl(n.urlAfterRedirects),
                                  n.targetSnapshot
                                );
                                t.next(l);
                              })
                            );
                          if (
                            o &&
                            e.rawUrlTree &&
                            e.urlHandlingStrategy.shouldProcessUrl(e.rawUrlTree)
                          ) {
                            var a = n.id,
                              s = n.extractedUrl,
                              c = n.source,
                              h = n.restoredState,
                              f = n.extras,
                              d = new ys(a, e.serializeUrl(s), c, h);
                            t.next(d);
                            var p = wc(s, e.rootComponentType).snapshot;
                            return wo(
                              Object.assign({}, n, {
                                targetSnapshot: p,
                                urlAfterRedirects: s,
                                extras: Object.assign({}, f, {
                                  skipLocationChange: !1,
                                  replaceUrl: !1
                                })
                              })
                            );
                          }
                          return (
                            (e.rawUrlTree = n.rawUrl),
                            (e.browserUrlTree = n.urlAfterRedirects),
                            n.resolve(null),
                            Co
                          );
                        }),
                        wh(function(n) {
                          var t = n.targetSnapshot,
                            l = n.id,
                            r = n.extractedUrl,
                            i = n.rawUrl,
                            u = n.extras,
                            o = u.skipLocationChange,
                            a = u.replaceUrl;
                          return e.hooks.beforePreactivation(t, {
                            navigationId: l,
                            appliedUrlTree: r,
                            rawUrlTree: i,
                            skipLocationChange: !!o,
                            replaceUrl: !!a
                          });
                        }),
                        Fo(function(n) {
                          var t = new xs(
                            n.id,
                            e.serializeUrl(n.extractedUrl),
                            e.serializeUrl(n.urlAfterRedirects),
                            n.targetSnapshot
                          );
                          e.triggerEvent(t);
                        }),
                        B(function(n) {
                          return Object.assign({}, n, {
                            guards:
                              ((t = n.targetSnapshot),
                              (l = n.currentSnapshot),
                              (r = e.rootContexts),
                              (i = t._root),
                              (function n(e, t, l, r) {
                                var i =
                                    arguments.length > 4 && void 0 !== arguments[4]
                                      ? arguments[4]
                                      : { canDeactivateChecks: [], canActivateChecks: [] },
                                  u = kc(t);
                                return (
                                  e.children.forEach(function(e) {
                                    !(function(e, t, l, r) {
                                      var i =
                                          arguments.length > 4 && void 0 !== arguments[4]
                                            ? arguments[4]
                                            : { canDeactivateChecks: [], canActivateChecks: [] },
                                        u = e.value,
                                        o = t ? t.value : null,
                                        a = l ? l.getContext(e.value.outlet) : null;
                                      if (o && u.routeConfig === o.routeConfig) {
                                        var s = (function(n, e, t) {
                                          if ('function' == typeof t) return t(n, e);
                                          switch (t) {
                                            case 'pathParamsChange':
                                              return !nc(n.url, e.url);
                                            case 'pathParamsOrQueryParamsChange':
                                              return (
                                                !nc(n.url, e.url) ||
                                                !Gs(n.queryParams, e.queryParams)
                                              );
                                            case 'always':
                                              return !0;
                                            case 'paramsOrQueryParamsChange':
                                              return !Ac(n, e) || !Gs(n.queryParams, e.queryParams);
                                            case 'paramsChange':
                                            default:
                                              return !Ac(n, e);
                                          }
                                        })(o, u, u.routeConfig.runGuardsAndResolvers);
                                        s
                                          ? i.canActivateChecks.push(new lh(r))
                                          : ((u.data = o.data),
                                            (u._resolvedData = o._resolvedData)),
                                          n(e, t, u.component ? (a ? a.children : null) : l, r, i),
                                          s &&
                                            i.canDeactivateChecks.push(
                                              new rh(
                                                (a && a.outlet && a.outlet.component) || null,
                                                o
                                              )
                                            );
                                      } else
                                        o && uh(t, a, i),
                                          i.canActivateChecks.push(new lh(r)),
                                          n(
                                            e,
                                            null,
                                            u.component ? (a ? a.children : null) : l,
                                            r,
                                            i
                                          );
                                    })(e, u[e.value.outlet], l, r.concat([e.value]), i),
                                      delete u[e.value.outlet];
                                  }),
                                  Zs(u, function(n, e) {
                                    return uh(n, l.getContext(e), i);
                                  }),
                                  i
                                );
                              })(i, l ? l._root : null, r, [i.value]))
                          });
                          var t, l, r, i;
                        }),
                        (function(n, e) {
                          return function(t) {
                            return t.pipe(
                              Q(function(t) {
                                var l = t.targetSnapshot,
                                  r = t.currentSnapshot,
                                  i = t.guards,
                                  u = i.canActivateChecks,
                                  o = i.canDeactivateChecks;
                                return 0 === o.length && 0 === u.length
                                  ? wo(Object.assign({}, t, { guardsResult: !0 }))
                                  : (function(n, e, t, l) {
                                      return Z(n).pipe(
                                        Q(function(n) {
                                          return (function(n, e, t, l, r) {
                                            var i =
                                              e && e.routeConfig
                                                ? e.routeConfig.canDeactivate
                                                : null;
                                            return i && 0 !== i.length
                                              ? wo(
                                                  i.map(function(i) {
                                                    var u,
                                                      o = ih(i, e, r);
                                                    if (
                                                      (function(n) {
                                                        return n && Gc(n.canDeactivate);
                                                      })(o)
                                                    )
                                                      u = Qs(o.canDeactivate(n, e, t, l));
                                                    else {
                                                      if (!Gc(o))
                                                        throw new Error(
                                                          'Invalid CanDeactivate guard'
                                                        );
                                                      u = Qs(o(n, e, t, l));
                                                    }
                                                    return u.pipe(ea());
                                                  })
                                                ).pipe(ah())
                                              : wo(!0);
                                          })(n.component, n.route, t, e, l);
                                        }),
                                        ea(function(n) {
                                          return !0 !== n;
                                        }, !0)
                                      );
                                    })(o, l, r, n).pipe(
                                      Q(function(t) {
                                        return t && 'boolean' == typeof t
                                          ? (function(n, e, t, l) {
                                              return Z(e).pipe(
                                                ca(function(e) {
                                                  return Z([
                                                    ch(e.route.parent, l),
                                                    sh(e.route, l),
                                                    fh(n, e.path, t),
                                                    hh(n, e.route, t)
                                                  ]).pipe(
                                                    Ao(),
                                                    ea(function(n) {
                                                      return !0 !== n;
                                                    }, !0)
                                                  );
                                                }),
                                                ea(function(n) {
                                                  return !0 !== n;
                                                }, !0)
                                              );
                                            })(l, u, n, e)
                                          : wo(t);
                                      }),
                                      B(function(n) {
                                        return Object.assign({}, t, { guardsResult: n });
                                      })
                                    );
                              })
                            );
                          };
                        })(e.ngModule.injector, function(n) {
                          return e.triggerEvent(n);
                        }),
                        Fo(function(n) {
                          if (Kc(n.guardsResult)) {
                            var t = Ls(
                              'Redirecting to "'.concat(e.serializeUrl(n.guardsResult), '"')
                            );
                            throw ((t.url = n.guardsResult), t);
                          }
                        }),
                        Fo(function(n) {
                          var t = new Os(
                            n.id,
                            e.serializeUrl(n.extractedUrl),
                            e.serializeUrl(n.urlAfterRedirects),
                            n.targetSnapshot,
                            !!n.guardsResult
                          );
                          e.triggerEvent(t);
                        }),
                        Ro(function(n) {
                          if (!n.guardsResult) {
                            e.resetUrlToCurrentUrlTree();
                            var l = new ks(n.id, e.serializeUrl(n.extractedUrl), '');
                            return t.next(l), n.resolve(!1), !1;
                          }
                          return !0;
                        }),
                        wh(function(n) {
                          if (n.guards.canActivateChecks.length)
                            return wo(n).pipe(
                              Fo(function(n) {
                                var t = new Es(
                                  n.id,
                                  e.serializeUrl(n.extractedUrl),
                                  e.serializeUrl(n.urlAfterRedirects),
                                  n.targetSnapshot
                                );
                                e.triggerEvent(t);
                              }),
                              ((t = e.paramsInheritanceStrategy),
                              (l = e.ngModule.injector),
                              function(n) {
                                return n.pipe(
                                  Q(function(n) {
                                    var e = n.targetSnapshot,
                                      r = n.guards.canActivateChecks;
                                    return r.length
                                      ? Z(r).pipe(
                                          ca(function(n) {
                                            return (function(n, e, t, l) {
                                              return (function(n, e, t, l) {
                                                var r = Object.keys(n);
                                                if (0 === r.length) return wo({});
                                                if (1 === r.length) {
                                                  var i = r[0];
                                                  return bh(n[i], e, t, l).pipe(
                                                    B(function(n) {
                                                      return _defineProperty({}, i, n);
                                                    })
                                                  );
                                                }
                                                var u = {};
                                                return Z(r)
                                                  .pipe(
                                                    Q(function(r) {
                                                      return bh(n[r], e, t, l).pipe(
                                                        B(function(n) {
                                                          return (u[r] = n), n;
                                                        })
                                                      );
                                                    })
                                                  )
                                                  .pipe(
                                                    Zo(),
                                                    B(function() {
                                                      return u;
                                                    })
                                                  );
                                              })(n._resolve, n, e, l).pipe(
                                                B(function(e) {
                                                  return (
                                                    (n._resolvedData = e),
                                                    (n.data = Object.assign(
                                                      {},
                                                      n.data,
                                                      Oc(n, t).resolve
                                                    )),
                                                    null
                                                  );
                                                })
                                              );
                                            })(n.route, e, t, l);
                                          }),
                                          (function(n, e) {
                                            return arguments.length >= 2
                                              ? function(t) {
                                                  return C(oa(n, e), jo(1), Go(e))(t);
                                                }
                                              : function(e) {
                                                  return C(
                                                    oa(function(e, t, l) {
                                                      return n(e, t, l + 1);
                                                    }),
                                                    jo(1)
                                                  )(e);
                                                };
                                          })(function(n, e) {
                                            return n;
                                          }),
                                          B(function(e) {
                                            return n;
                                          })
                                        )
                                      : wo(n);
                                  })
                                );
                              }),
                              Fo(function(n) {
                                var t = new Ps(
                                  n.id,
                                  e.serializeUrl(n.extractedUrl),
                                  e.serializeUrl(n.urlAfterRedirects),
                                  n.targetSnapshot
                                );
                                e.triggerEvent(t);
                              })
                            );
                          var t, l;
                        }),
                        wh(function(n) {
                          var t = n.targetSnapshot,
                            l = n.id,
                            r = n.extractedUrl,
                            i = n.rawUrl,
                            u = n.extras,
                            o = u.skipLocationChange,
                            a = u.replaceUrl;
                          return e.hooks.afterPreactivation(t, {
                            navigationId: l,
                            appliedUrlTree: r,
                            rawUrlTree: i,
                            skipLocationChange: !!o,
                            replaceUrl: !!a
                          });
                        }),
                        B(function(n) {
                          var t = (function(n, e, t) {
                            var l = (function n(e, t, l) {
                              if (l && e.shouldReuseRoute(t.value, l.value.snapshot)) {
                                var r = l.value;
                                r._futureSnapshot = t.value;
                                var i = (function(e, t, l) {
                                  return t.children.map(function(t) {
                                    var r = !0,
                                      i = !1,
                                      u = void 0;
                                    try {
                                      for (
                                        var o, a = l.children[Symbol.iterator]();
                                        !(r = (o = a.next()).done);
                                        r = !0
                                      ) {
                                        var s = o.value;
                                        if (e.shouldReuseRoute(s.value.snapshot, t.value))
                                          return n(e, t, s);
                                      }
                                    } catch (c) {
                                      (i = !0), (u = c);
                                    } finally {
                                      try {
                                        r || null == a.return || a.return();
                                      } finally {
                                        if (i) throw u;
                                      }
                                    }
                                    return n(e, t);
                                  });
                                })(e, t, l);
                                return new Cc(r, i);
                              }
                              var u = e.retrieve(t.value);
                              if (u) {
                                var o = u.route;
                                return (
                                  (function n(e, t) {
                                    if (e.value.routeConfig !== t.value.routeConfig)
                                      throw new Error(
                                        'Cannot reattach ActivatedRouteSnapshot created from a different route'
                                      );
                                    if (e.children.length !== t.children.length)
                                      throw new Error(
                                        'Cannot reattach ActivatedRouteSnapshot with a different number of children'
                                      );
                                    t.value._futureSnapshot = e.value;
                                    for (var l = 0; l < e.children.length; ++l)
                                      n(e.children[l], t.children[l]);
                                  })(t, o),
                                  o
                                );
                              }
                              var a,
                                s = new xc(
                                  new xo((a = t.value).url),
                                  new xo(a.params),
                                  new xo(a.queryParams),
                                  new xo(a.fragment),
                                  new xo(a.data),
                                  a.outlet,
                                  a.component,
                                  a
                                ),
                                c = t.children.map(function(t) {
                                  return n(e, t);
                                });
                              return new Cc(s, c);
                            })(n, e._root, t ? t._root : void 0);
                            return new bc(l, e);
                          })(e.routeReuseStrategy, n.targetSnapshot, n.currentRouterState);
                          return Object.assign({}, n, { targetRouterState: t });
                        }),
                        Fo(function(n) {
                          (e.currentUrlTree = n.urlAfterRedirects),
                            (e.rawUrlTree = e.urlHandlingStrategy.merge(
                              e.currentUrlTree,
                              n.rawUrl
                            )),
                            (e.routerState = n.targetRouterState),
                            'deferred' === e.urlUpdateStrategy &&
                              (n.extras.skipLocationChange ||
                                e.setBrowserUrl(
                                  e.rawUrlTree,
                                  !!n.extras.replaceUrl,
                                  n.id,
                                  n.extras.state
                                ),
                              (e.browserUrlTree = n.urlAfterRedirects));
                        }),
                        ((r = e.rootContexts),
                        (i = e.routeReuseStrategy),
                        (u = function(n) {
                          return e.triggerEvent(n);
                        }),
                        B(function(n) {
                          return (
                            new qc(i, n.targetRouterState, n.currentRouterState, u).activate(r), n
                          );
                        })),
                        Fo({
                          next: function() {
                            o = !0;
                          },
                          complete: function() {
                            o = !0;
                          }
                        }),
                        ((l = function() {
                          if (!o && !a) {
                            e.resetUrlToCurrentUrlTree();
                            var l = new ks(
                              n.id,
                              e.serializeUrl(n.extractedUrl),
                              'Navigation ID '
                                .concat(n.id, ' is not equal to the current navigation id ')
                                .concat(e.navigationId)
                            );
                            t.next(l), n.resolve(!1);
                          }
                          e.currentNavigation = null;
                        }),
                        function(n) {
                          return n.lift(new ha(l));
                        }),
                        Qo(function(l) {
                          if (((a = !0), (o = l) && o.ngNavigationCancelingError)) {
                            var r = Kc(l.url);
                            r ||
                              ((e.navigated = !0),
                              e.resetStateAndUrl(n.currentRouterState, n.currentUrlTree, n.rawUrl));
                            var i = new ks(n.id, e.serializeUrl(n.extractedUrl), l.message);
                            t.next(i), n.resolve(!1), r && e.navigateByUrl(l.url);
                          } else {
                            e.resetStateAndUrl(n.currentRouterState, n.currentUrlTree, n.rawUrl);
                            var u = new bs(n.id, e.serializeUrl(n.extractedUrl), l);
                            t.next(u);
                            try {
                              n.resolve(e.errorHandler(l));
                            } catch (s) {
                              n.reject(s);
                            }
                          }
                          var o;
                          return Co;
                        })
                      );
                    })
                  );
                }
              },
              {
                key: 'resetRootComponentType',
                value: function(n) {
                  (this.rootComponentType = n),
                    (this.routerState.root.component = this.rootComponentType);
                }
              },
              {
                key: 'getTransition',
                value: function() {
                  var n = this.transitions.value;
                  return (n.urlAfterRedirects = this.browserUrlTree), n;
                }
              },
              {
                key: 'setTransition',
                value: function(n) {
                  this.transitions.next(Object.assign({}, this.getTransition(), n));
                }
              },
              {
                key: 'initialNavigation',
                value: function() {
                  this.setUpLocationChangeListener(),
                    0 === this.navigationId &&
                      this.navigateByUrl(this.location.path(!0), { replaceUrl: !0 });
                }
              },
              {
                key: 'setUpLocationChangeListener',
                value: function() {
                  var n = this;
                  this.locationSubscription ||
                    (this.locationSubscription = this.location.subscribe(function(e) {
                      var t = n.parseUrl(e.url),
                        l = 'popstate' === e.type ? 'popstate' : 'hashchange',
                        r = e.state && e.state.navigationId ? e.state : null;
                      setTimeout(function() {
                        n.scheduleNavigation(t, l, r, { replaceUrl: !0 });
                      }, 0);
                    }));
                }
              },
              {
                key: 'getCurrentNavigation',
                value: function() {
                  return this.currentNavigation;
                }
              },
              {
                key: 'triggerEvent',
                value: function(n) {
                  this.events.next(n);
                }
              },
              {
                key: 'resetConfig',
                value: function(n) {
                  zs(n),
                    (this.config = n.map(Bs)),
                    (this.navigated = !1),
                    (this.lastSuccessfulId = -1);
                }
              },
              {
                key: 'ngOnDestroy',
                value: function() {
                  this.dispose();
                }
              },
              {
                key: 'dispose',
                value: function() {
                  this.locationSubscription &&
                    (this.locationSubscription.unsubscribe(), (this.locationSubscription = null));
                }
              },
              {
                key: 'createUrlTree',
                value: function(n) {
                  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    t = e.relativeTo,
                    l = e.queryParams,
                    r = e.fragment,
                    i = e.preserveQueryParams,
                    u = e.queryParamsHandling,
                    o = e.preserveFragment;
                  $n() &&
                    i &&
                    console &&
                    console.warn &&
                    console.warn(
                      'preserveQueryParams is deprecated, use queryParamsHandling instead.'
                    );
                  var a = t || this.routerState.root,
                    s = o ? this.currentUrlTree.fragment : r,
                    c = null;
                  if (u)
                    switch (u) {
                      case 'merge':
                        c = Object.assign({}, this.currentUrlTree.queryParams, l);
                        break;
                      case 'preserve':
                        c = this.currentUrlTree.queryParams;
                        break;
                      default:
                        c = l || null;
                    }
                  else c = i ? this.currentUrlTree.queryParams : l || null;
                  return (
                    null !== c && (c = this.removeEmptyProps(c)),
                    (function(n, e, t, l, r) {
                      if (0 === t.length) return Ic(e.root, e.root, e, l, r);
                      var i = (function(n) {
                        if ('string' == typeof n[0] && 1 === n.length && '/' === n[0])
                          return new Nc(!0, 0, n);
                        var e = 0,
                          t = !1,
                          l = n.reduce(function(n, l, r) {
                            if ('object' == typeof l && null != l) {
                              if (l.outlets) {
                                var i = {};
                                return (
                                  Zs(l.outlets, function(n, e) {
                                    i[e] = 'string' == typeof n ? n.split('/') : n;
                                  }),
                                  [].concat(_toConsumableArray(n), [{ outlets: i }])
                                );
                              }
                              if (l.segmentPath)
                                return [].concat(_toConsumableArray(n), [l.segmentPath]);
                            }
                            return 'string' != typeof l
                              ? [].concat(_toConsumableArray(n), [l])
                              : 0 === r
                              ? (l.split('/').forEach(function(l, r) {
                                  (0 == r && '.' === l) ||
                                    (0 == r && '' === l
                                      ? (t = !0)
                                      : '..' === l
                                      ? e++
                                      : '' != l && n.push(l));
                                }),
                                n)
                              : [].concat(_toConsumableArray(n), [l]);
                          }, []);
                        return new Nc(t, e, l);
                      })(t);
                      if (i.toRoot()) return Ic(e.root, new Js([], {}), e, l, r);
                      var u = (function(n, e, t) {
                          if (n.isAbsolute) return new Vc(e.root, !0, 0);
                          if (-1 === t.snapshot._lastPathIndex)
                            return new Vc(t.snapshot._urlSegment, !0, 0);
                          var l = Rc(n.commands[0]) ? 0 : 1;
                          return (function(n, e, t) {
                            for (var l = n, r = e, i = t; i > r; ) {
                              if (((i -= r), !(l = l.parent)))
                                throw new Error("Invalid number of '../'");
                              r = l.segments.length;
                            }
                            return new Vc(l, !1, r - i);
                          })(
                            t.snapshot._urlSegment,
                            t.snapshot._lastPathIndex + l,
                            n.numberOfDoubleDots
                          );
                        })(i, e, n),
                        o = u.processChildren
                          ? Lc(u.segmentGroup, u.index, i.commands)
                          : jc(u.segmentGroup, u.index, i.commands);
                      return Ic(u.segmentGroup, o, e, l, r);
                    })(a, this.currentUrlTree, n, c, s)
                  );
                }
              },
              {
                key: 'navigateByUrl',
                value: function(n) {
                  var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : { skipLocationChange: !1 };
                  $n() &&
                    this.isNgZoneEnabled &&
                    !Kr.isInAngularZone() &&
                    this.console.warn(
                      "Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?"
                    );
                  var t = Kc(n) ? n : this.parseUrl(n),
                    l = this.urlHandlingStrategy.merge(t, this.rawUrlTree);
                  return this.scheduleNavigation(l, 'imperative', null, e);
                }
              },
              {
                key: 'navigate',
                value: function(n) {
                  var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : { skipLocationChange: !1 };
                  return (
                    (function(n) {
                      for (var e = 0; e < n.length; e++) {
                        var t = n[e];
                        if (null == t)
                          throw new Error(
                            'The requested path contains '.concat(t, ' segment at index ').concat(e)
                          );
                      }
                    })(n),
                    this.navigateByUrl(this.createUrlTree(n, e), e)
                  );
                }
              },
              {
                key: 'serializeUrl',
                value: function(n) {
                  return this.urlSerializer.serialize(n);
                }
              },
              {
                key: 'parseUrl',
                value: function(n) {
                  var e;
                  try {
                    e = this.urlSerializer.parse(n);
                  } catch (t) {
                    e = this.malformedUriErrorHandler(t, this.urlSerializer, n);
                  }
                  return e;
                }
              },
              {
                key: 'isActive',
                value: function(n, e) {
                  if (Kc(n)) return Ys(this.currentUrlTree, n, e);
                  var t = this.parseUrl(n);
                  return Ys(this.currentUrlTree, t, e);
                }
              },
              {
                key: 'removeEmptyProps',
                value: function(n) {
                  return Object.keys(n).reduce(function(e, t) {
                    var l = n[t];
                    return null != l && (e[t] = l), e;
                  }, {});
                }
              },
              {
                key: 'processNavigations',
                value: function() {
                  var n = this;
                  this.navigations.subscribe(
                    function(e) {
                      (n.navigated = !0),
                        (n.lastSuccessfulId = e.id),
                        n.events.next(
                          new Cs(
                            e.id,
                            n.serializeUrl(e.extractedUrl),
                            n.serializeUrl(n.currentUrlTree)
                          )
                        ),
                        (n.lastSuccessfulNavigation = n.currentNavigation),
                        (n.currentNavigation = null),
                        e.resolve(!0);
                    },
                    function(e) {
                      n.console.warn('Unhandled Navigation Error: ');
                    }
                  );
                }
              },
              {
                key: 'scheduleNavigation',
                value: function(n, e, t, l) {
                  var r = this.getTransition();
                  if (
                    r &&
                    'imperative' !== e &&
                    'imperative' === r.source &&
                    r.rawUrl.toString() === n.toString()
                  )
                    return Promise.resolve(!0);
                  if (
                    r &&
                    'hashchange' == e &&
                    'popstate' === r.source &&
                    r.rawUrl.toString() === n.toString()
                  )
                    return Promise.resolve(!0);
                  if (
                    r &&
                    'popstate' == e &&
                    'hashchange' === r.source &&
                    r.rawUrl.toString() === n.toString()
                  )
                    return Promise.resolve(!0);
                  var i = null,
                    u = null,
                    o = new Promise(function(n, e) {
                      (i = n), (u = e);
                    }),
                    a = ++this.navigationId;
                  return (
                    this.setTransition({
                      id: a,
                      source: e,
                      restoredState: t,
                      currentUrlTree: this.currentUrlTree,
                      currentRawUrl: this.rawUrlTree,
                      rawUrl: n,
                      extras: l,
                      resolve: i,
                      reject: u,
                      promise: o,
                      currentSnapshot: this.routerState.snapshot,
                      currentRouterState: this.routerState
                    }),
                    o.catch(function(n) {
                      return Promise.reject(n);
                    })
                  );
                }
              },
              {
                key: 'setBrowserUrl',
                value: function(n, e, t, l) {
                  var r = this.urlSerializer.serialize(n);
                  (l = l || {}),
                    this.location.isCurrentPathEqualTo(r) || e
                      ? this.location.replaceState(r, '', Object.assign({}, l, { navigationId: t }))
                      : this.location.go(r, '', Object.assign({}, l, { navigationId: t }));
                }
              },
              {
                key: 'resetStateAndUrl',
                value: function(n, e, t) {
                  (this.routerState = n),
                    (this.currentUrlTree = e),
                    (this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, t)),
                    this.resetUrlToCurrentUrlTree();
                }
              },
              {
                key: 'resetUrlToCurrentUrlTree',
                value: function() {
                  this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), '', {
                    navigationId: this.lastSuccessfulId
                  });
                }
              },
              {
                key: 'url',
                get: function() {
                  return this.serializeUrl(this.currentUrlTree);
                }
              }
            ]),
            n
          );
        })(),
        Nh = (function() {
          function n(e, t, l) {
            var r = this;
            _classCallCheck(this, n),
              (this.router = e),
              (this.route = t),
              (this.locationStrategy = l),
              (this.commands = []),
              (this.subscription = e.events.subscribe(function(n) {
                n instanceof Cs && r.updateTargetUrlAndHref();
              }));
          }
          return (
            _createClass(n, [
              {
                key: 'ngOnChanges',
                value: function(n) {
                  this.updateTargetUrlAndHref();
                }
              },
              {
                key: 'ngOnDestroy',
                value: function() {
                  this.subscription.unsubscribe();
                }
              },
              {
                key: 'onClick',
                value: function(n, e, t, l) {
                  if (0 !== n || e || t || l) return !0;
                  if ('string' == typeof this.target && '_self' != this.target) return !0;
                  var r = {
                    skipLocationChange: Vh(this.skipLocationChange),
                    replaceUrl: Vh(this.replaceUrl),
                    state: this.state
                  };
                  return this.router.navigateByUrl(this.urlTree, r), !1;
                }
              },
              {
                key: 'updateTargetUrlAndHref',
                value: function() {
                  this.href = this.locationStrategy.prepareExternalUrl(
                    this.router.serializeUrl(this.urlTree)
                  );
                }
              },
              {
                key: 'routerLink',
                set: function(n) {
                  this.commands = null != n ? (Array.isArray(n) ? n : [n]) : [];
                }
              },
              {
                key: 'preserveQueryParams',
                set: function(n) {
                  $n() &&
                    console &&
                    console.warn &&
                    console.warn(
                      'preserveQueryParams is deprecated, use queryParamsHandling instead.'
                    ),
                    (this.preserve = n);
                }
              },
              {
                key: 'urlTree',
                get: function() {
                  return this.router.createUrlTree(this.commands, {
                    relativeTo: this.route,
                    queryParams: this.queryParams,
                    fragment: this.fragment,
                    preserveQueryParams: Vh(this.preserve),
                    queryParamsHandling: this.queryParamsHandling,
                    preserveFragment: Vh(this.preserveFragment)
                  });
                }
              }
            ]),
            n
          );
        })();
      function Vh(n) {
        return '' === n || !!n;
      }
      var Dh = function n() {
          _classCallCheck(this, n),
            (this.outlet = null),
            (this.route = null),
            (this.resolver = null),
            (this.children = new jh()),
            (this.attachRef = null);
        },
        jh = (function() {
          function n() {
            _classCallCheck(this, n), (this.contexts = new Map());
          }
          return (
            _createClass(n, [
              {
                key: 'onChildOutletCreated',
                value: function(n, e) {
                  var t = this.getOrCreateContext(n);
                  (t.outlet = e), this.contexts.set(n, t);
                }
              },
              {
                key: 'onChildOutletDestroyed',
                value: function(n) {
                  var e = this.getContext(n);
                  e && (e.outlet = null);
                }
              },
              {
                key: 'onOutletDeactivated',
                value: function() {
                  var n = this.contexts;
                  return (this.contexts = new Map()), n;
                }
              },
              {
                key: 'onOutletReAttached',
                value: function(n) {
                  this.contexts = n;
                }
              },
              {
                key: 'getOrCreateContext',
                value: function(n) {
                  var e = this.getContext(n);
                  return e || ((e = new Dh()), this.contexts.set(n, e)), e;
                }
              },
              {
                key: 'getContext',
                value: function(n) {
                  return this.contexts.get(n) || null;
                }
              }
            ]),
            n
          );
        })(),
        Lh = (function() {
          function n(e, t, l, r, i) {
            _classCallCheck(this, n),
              (this.parentContexts = e),
              (this.location = t),
              (this.resolver = l),
              (this.changeDetector = i),
              (this.activated = null),
              (this._activatedRoute = null),
              (this.activateEvents = new _r()),
              (this.deactivateEvents = new _r()),
              (this.name = r || 'primary'),
              e.onChildOutletCreated(this.name, this);
          }
          return (
            _createClass(n, [
              {
                key: 'ngOnDestroy',
                value: function() {
                  this.parentContexts.onChildOutletDestroyed(this.name);
                }
              },
              {
                key: 'ngOnInit',
                value: function() {
                  if (!this.activated) {
                    var n = this.parentContexts.getContext(this.name);
                    n &&
                      n.route &&
                      (n.attachRef
                        ? this.attach(n.attachRef, n.route)
                        : this.activateWith(n.route, n.resolver || null));
                  }
                }
              },
              {
                key: 'detach',
                value: function() {
                  if (!this.activated) throw new Error('Outlet is not activated');
                  this.location.detach();
                  var n = this.activated;
                  return (this.activated = null), (this._activatedRoute = null), n;
                }
              },
              {
                key: 'attach',
                value: function(n, e) {
                  (this.activated = n),
                    (this._activatedRoute = e),
                    this.location.insert(n.hostView);
                }
              },
              {
                key: 'deactivate',
                value: function() {
                  if (this.activated) {
                    var n = this.component;
                    this.activated.destroy(),
                      (this.activated = null),
                      (this._activatedRoute = null),
                      this.deactivateEvents.emit(n);
                  }
                }
              },
              {
                key: 'activateWith',
                value: function(n, e) {
                  if (this.isActivated)
                    throw new Error('Cannot activate an already activated outlet');
                  this._activatedRoute = n;
                  var t = (e = e || this.resolver).resolveComponentFactory(
                      n._futureSnapshot.routeConfig.component
                    ),
                    l = this.parentContexts.getOrCreateContext(this.name).children,
                    r = new Uh(n, l, this.location.injector);
                  (this.activated = this.location.createComponent(t, this.location.length, r)),
                    this.changeDetector.markForCheck(),
                    this.activateEvents.emit(this.activated.instance);
                }
              },
              {
                key: 'isActivated',
                get: function() {
                  return !!this.activated;
                }
              },
              {
                key: 'component',
                get: function() {
                  if (!this.activated) throw new Error('Outlet is not activated');
                  return this.activated.instance;
                }
              },
              {
                key: 'activatedRoute',
                get: function() {
                  if (!this.activated) throw new Error('Outlet is not activated');
                  return this._activatedRoute;
                }
              },
              {
                key: 'activatedRouteData',
                get: function() {
                  return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
                }
              }
            ]),
            n
          );
        })(),
        Uh = (function() {
          function n(e, t, l) {
            _classCallCheck(this, n), (this.route = e), (this.childContexts = t), (this.parent = l);
          }
          return (
            _createClass(n, [
              {
                key: 'get',
                value: function(n, e) {
                  return n === xc
                    ? this.route
                    : n === jh
                    ? this.childContexts
                    : this.parent.get(n, e);
                }
              }
            ]),
            n
          );
        })(),
        Fh = function n() {
          _classCallCheck(this, n);
        },
        zh = (function() {
          function n() {
            _classCallCheck(this, n);
          }
          return (
            _createClass(n, [
              {
                key: 'preload',
                value: function(n, e) {
                  return e().pipe(
                    Qo(function() {
                      return wo(null);
                    })
                  );
                }
              }
            ]),
            n
          );
        })(),
        Hh = (function() {
          function n() {
            _classCallCheck(this, n);
          }
          return (
            _createClass(n, [
              {
                key: 'preload',
                value: function(n, e) {
                  return wo(null);
                }
              }
            ]),
            n
          );
        })(),
        qh = (function() {
          function n(e, t, l, r, i) {
            _classCallCheck(this, n),
              (this.router = e),
              (this.injector = r),
              (this.preloadingStrategy = i),
              (this.loader = new Ph(
                t,
                l,
                function(n) {
                  return e.triggerEvent(new Ss(n));
                },
                function(n) {
                  return e.triggerEvent(new Ts(n));
                }
              ));
          }
          return (
            _createClass(n, [
              {
                key: 'setUpPreloading',
                value: function() {
                  var n = this;
                  this.subscription = this.router.events
                    .pipe(
                      Ro(function(n) {
                        return n instanceof Cs;
                      }),
                      ca(function() {
                        return n.preload();
                      })
                    )
                    .subscribe(function() {});
                }
              },
              {
                key: 'preload',
                value: function() {
                  var n = this.injector.get(Un);
                  return this.processRoutes(n, this.router.config);
                }
              },
              {
                key: 'ngOnDestroy',
                value: function() {
                  this.subscription.unsubscribe();
                }
              },
              {
                key: 'processRoutes',
                value: function(n, e) {
                  var t = [],
                    l = !0,
                    r = !1,
                    i = void 0;
                  try {
                    for (var u, o = e[Symbol.iterator](); !(l = (u = o.next()).done); l = !0) {
                      var a = u.value;
                      if (a.loadChildren && !a.canLoad && a._loadedConfig) {
                        var s = a._loadedConfig;
                        t.push(this.processRoutes(s.module, s.routes));
                      } else
                        a.loadChildren && !a.canLoad
                          ? t.push(this.preloadConfig(n, a))
                          : a.children && t.push(this.processRoutes(n, a.children));
                    }
                  } catch (c) {
                    (r = !0), (i = c);
                  } finally {
                    try {
                      l || null == o.return || o.return();
                    } finally {
                      if (r) throw i;
                    }
                  }
                  return Z(t).pipe(
                    X(),
                    B(function(n) {})
                  );
                }
              },
              {
                key: 'preloadConfig',
                value: function(n, e) {
                  var t = this;
                  return this.preloadingStrategy.preload(e, function() {
                    return t.loader.load(n.injector, e).pipe(
                      Q(function(n) {
                        return (e._loadedConfig = n), t.processRoutes(n.module, n.routes);
                      })
                    );
                  });
                }
              }
            ]),
            n
          );
        })(),
        Bh = (function() {
          function n(e, t) {
            var l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            _classCallCheck(this, n),
              (this.router = e),
              (this.viewportScroller = t),
              (this.options = l),
              (this.lastId = 0),
              (this.lastSource = 'imperative'),
              (this.restoredId = 0),
              (this.store = {}),
              (l.scrollPositionRestoration = l.scrollPositionRestoration || 'disabled'),
              (l.anchorScrolling = l.anchorScrolling || 'disabled');
          }
          return (
            _createClass(n, [
              {
                key: 'init',
                value: function() {
                  'disabled' !== this.options.scrollPositionRestoration &&
                    this.viewportScroller.setHistoryScrollRestoration('manual'),
                    (this.routerEventsSubscription = this.createScrollEvents()),
                    (this.scrollEventsSubscription = this.consumeScrollEvents());
                }
              },
              {
                key: 'createScrollEvents',
                value: function() {
                  var n = this;
                  return this.router.events.subscribe(function(e) {
                    e instanceof ys
                      ? ((n.store[n.lastId] = n.viewportScroller.getScrollPosition()),
                        (n.lastSource = e.navigationTrigger),
                        (n.restoredId = e.restoredState ? e.restoredState.navigationId : 0))
                      : e instanceof Cs &&
                        ((n.lastId = e.id),
                        n.scheduleScrollEvent(e, n.router.parseUrl(e.urlAfterRedirects).fragment));
                  });
                }
              },
              {
                key: 'consumeScrollEvents',
                value: function() {
                  var n = this;
                  return this.router.events.subscribe(function(e) {
                    e instanceof Ns &&
                      (e.position
                        ? 'top' === n.options.scrollPositionRestoration
                          ? n.viewportScroller.scrollToPosition([0, 0])
                          : 'enabled' === n.options.scrollPositionRestoration &&
                            n.viewportScroller.scrollToPosition(e.position)
                        : e.anchor && 'enabled' === n.options.anchorScrolling
                        ? n.viewportScroller.scrollToAnchor(e.anchor)
                        : 'disabled' !== n.options.scrollPositionRestoration &&
                          n.viewportScroller.scrollToPosition([0, 0]));
                  });
                }
              },
              {
                key: 'scheduleScrollEvent',
                value: function(n, e) {
                  this.router.triggerEvent(
                    new Ns(
                      n,
                      'popstate' === this.lastSource ? this.store[this.restoredId] : null,
                      e
                    )
                  );
                }
              },
              {
                key: 'ngOnDestroy',
                value: function() {
                  this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(),
                    this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe();
                }
              }
            ]),
            n
          );
        })(),
        Gh = new Sn('ROUTER_CONFIGURATION'),
        Kh = new Sn('ROUTER_FORROOT_GUARD'),
        Wh = [
          lo,
          { provide: tc, useClass: lc },
          {
            provide: Ih,
            useFactory: nf,
            deps: [ci, tc, jh, lo, Te, fi, jr, Eh, Gh, [Sh, new cn()], [xh, new cn()]]
          },
          jh,
          { provide: xc, useFactory: ef, deps: [Ih] },
          { provide: fi, useClass: vi },
          qh,
          Hh,
          zh,
          { provide: Gh, useValue: { enableTracing: !1 } }
        ];
      function Zh() {
        return new ri('Router', Ih);
      }
      var Qh = (function() {
        function n(e, t) {
          _classCallCheck(this, n);
        }
        return (
          _createClass(n, null, [
            {
              key: 'forRoot',
              value: function(e, t) {
                return {
                  ngModule: n,
                  providers: [
                    Wh,
                    Xh(e),
                    { provide: Kh, useFactory: Jh, deps: [[Ih, new cn(), new fn()]] },
                    { provide: Gh, useValue: t || {} },
                    { provide: eo, useFactory: $h, deps: [Xu, [new sn(to), new cn()], Gh] },
                    { provide: Bh, useFactory: Yh, deps: [Ih, mo, Gh] },
                    {
                      provide: Fh,
                      useExisting: t && t.preloadingStrategy ? t.preloadingStrategy : Hh
                    },
                    { provide: ri, multi: !0, useFactory: Zh },
                    [
                      tf,
                      { provide: Cr, multi: !0, useFactory: lf, deps: [tf] },
                      { provide: uf, useFactory: rf, deps: [tf] },
                      { provide: Pr, multi: !0, useExisting: uf }
                    ]
                  ]
                };
              }
            },
            {
              key: 'forChild',
              value: function(e) {
                return { ngModule: n, providers: [Xh(e)] };
              }
            }
          ]),
          n
        );
      })();
      function Yh(n, e, t) {
        return t.scrollOffset && e.setOffset(t.scrollOffset), new Bh(n, e, t);
      }
      function $h(n, e) {
        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return t.useHash ? new io(n, e) : new uo(n, e);
      }
      function Jh(n) {
        if (n)
          throw new Error(
            'RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.'
          );
        return 'guarded';
      }
      function Xh(n) {
        return [
          { provide: je, multi: !0, useValue: n },
          { provide: Eh, multi: !0, useValue: n }
        ];
      }
      function nf(n, e, t, l, r, i, u, o) {
        var a = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : {},
          s = arguments.length > 9 ? arguments[9] : void 0,
          c = arguments.length > 10 ? arguments[10] : void 0,
          h = new Ih(null, e, t, l, r, i, u, Ks(o));
        if (
          (s && (h.urlHandlingStrategy = s),
          c && (h.routeReuseStrategy = c),
          a.errorHandler && (h.errorHandler = a.errorHandler),
          a.malformedUriErrorHandler && (h.malformedUriErrorHandler = a.malformedUriErrorHandler),
          a.enableTracing)
        ) {
          var f = pa();
          h.events.subscribe(function(n) {
            f.logGroup('Router Event: '.concat(n.constructor.name)),
              f.log(n.toString()),
              f.log(n),
              f.logGroupEnd();
          });
        }
        return (
          a.onSameUrlNavigation && (h.onSameUrlNavigation = a.onSameUrlNavigation),
          a.paramsInheritanceStrategy &&
            (h.paramsInheritanceStrategy = a.paramsInheritanceStrategy),
          a.urlUpdateStrategy && (h.urlUpdateStrategy = a.urlUpdateStrategy),
          a.relativeLinkResolution && (h.relativeLinkResolution = a.relativeLinkResolution),
          h
        );
      }
      function ef(n) {
        return n.routerState.root;
      }
      var tf = (function() {
        function n(e) {
          _classCallCheck(this, n),
            (this.injector = e),
            (this.initNavigation = !1),
            (this.resultOfPreactivationDone = new M());
        }
        return (
          _createClass(n, [
            {
              key: 'appInitializer',
              value: function() {
                var n = this;
                return this.injector.get(no, Promise.resolve(null)).then(function() {
                  var e = null,
                    t = new Promise(function(n) {
                      return (e = n);
                    }),
                    l = n.injector.get(Ih),
                    r = n.injector.get(Gh);
                  if (n.isLegacyDisabled(r) || n.isLegacyEnabled(r)) e(!0);
                  else if ('disabled' === r.initialNavigation)
                    l.setUpLocationChangeListener(), e(!0);
                  else {
                    if ('enabled' !== r.initialNavigation)
                      throw new Error(
                        "Invalid initialNavigation options: '".concat(r.initialNavigation, "'")
                      );
                    (l.hooks.afterPreactivation = function() {
                      return n.initNavigation
                        ? wo(null)
                        : ((n.initNavigation = !0), e(!0), n.resultOfPreactivationDone);
                    }),
                      l.initialNavigation();
                  }
                  return t;
                });
              }
            },
            {
              key: 'bootstrapListener',
              value: function(n) {
                var e = this.injector.get(Gh),
                  t = this.injector.get(qh),
                  l = this.injector.get(Bh),
                  r = this.injector.get(Ih),
                  i = this.injector.get(ci);
                n === i.components[0] &&
                  (this.isLegacyEnabled(e)
                    ? r.initialNavigation()
                    : this.isLegacyDisabled(e) && r.setUpLocationChangeListener(),
                  t.setUpPreloading(),
                  l.init(),
                  r.resetRootComponentType(i.componentTypes[0]),
                  this.resultOfPreactivationDone.next(null),
                  this.resultOfPreactivationDone.complete());
              }
            },
            {
              key: 'isLegacyEnabled',
              value: function(n) {
                return (
                  'legacy_enabled' === n.initialNavigation ||
                  !0 === n.initialNavigation ||
                  void 0 === n.initialNavigation
                );
              }
            },
            {
              key: 'isLegacyDisabled',
              value: function(n) {
                return 'legacy_disabled' === n.initialNavigation || !1 === n.initialNavigation;
              }
            }
          ]),
          n
        );
      })();
      function lf(n) {
        return n.appInitializer.bind(n);
      }
      function rf(n) {
        return n.bootstrapListener.bind(n);
      }
      var uf = new Sn('Router Initializer'),
        of = Ht({ encapsulation: 2, styles: [], data: {} });
      function af(n) {
        return Gi(
          0,
          [
            (n()(),
            Mi(0, 16777216, null, null, 1, 'router-outlet', [], null, null, null, null, null)),
            Yl(1, 212992, null, 0, Lh, [jh, Et, Je, [8, null], Oe], null, null)
          ],
          function(n, e) {
            n(e, 1, 0);
          },
          null
        );
      }
      var sf = El(
          'ng-component',
          Vs,
          function(n) {
            return Gi(
              0,
              [
                (n()(), Mi(0, 0, null, null, 1, 'ng-component', [], null, null, null, af, of)),
                Yl(1, 49152, null, 0, Vs, [], null, null)
              ],
              null,
              null
            );
          },
          {},
          {},
          []
        ),
        cf = (function() {
          function n() {
            _classCallCheck(this, n);
          }
          return _createClass(n, [{ key: 'ngOnInit', value: function() {} }]), n;
        })(),
        hf = Ht({
          encapsulation: 0,
          styles: [
            [
              '[_nghost-%COMP%]{overflow:hidden;padding:0 10px}.slider-sm[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto 20px;text-align:center;overflow:hidden}.slider-sm__img[_ngcontent-%COMP%]{max-width:100%}@media (max-width:540px){.slider-sm__img[_ngcontent-%COMP%]{max-width:unset;height:200px}}'
            ]
          ],
          data: {}
        });
      function ff(n) {
        return Gi(
          0,
          [
            (n()(),
            Mi(
              0,
              0,
              null,
              null,
              1,
              'section',
              [['class', 'slider-sm']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              1,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['class', 'slider-sm__img'],
                ['src', 'assets/img/Banner4.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            ))
          ],
          null,
          null
        );
      }
      var df = (function() {
          function n() {
            _classCallCheck(this, n);
          }
          return _createClass(n, [{ key: 'ngOnInit', value: function() {} }]), n;
        })(),
        pf = Ht({
          encapsulation: 0,
          styles: [
            [
              '*[_ngcontent-%COMP%]{box-sizing:border-box}.brands-sm[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto 20px}.title-wrapper[_ngcontent-%COMP%]{position:relative}.title-wrapper[_ngcontent-%COMP%]:after{content:"";background:#dcdcdc;position:absolute;left:0;top:50%;margin-top:-.5px;display:block;width:100%;height:1px;z-index:-1}.text[_ngcontent-%COMP%]{background:#fff;margin:15px 20px;padding:0 10px;display:inline-block;text-transform:uppercase;font-family:Arial,sans-serif;color:#494940}img[_ngcontent-%COMP%]{max-width:230px;width:100%}ul[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,auto);grid-gap:10px;padding:0 10px}@media (max-width:1200px){ul[_ngcontent-%COMP%]{grid-template-columns:repeat(3,auto)}}@media (max-width:800px){ul[_ngcontent-%COMP%]{grid-template-columns:repeat(2,auto)}}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:grid;align-content:center;padding:10px;background-color:#fafafa;border:1px solid #e0e0e0;box-shadow:inset 0 1px 1px #fff;border-radius:5px;-webkit-transition:.5s;transition:.5s}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{border:1px solid #ff4800;-webkit-transform:scale(1.03);transform:scale(1.03)}'
            ]
          ],
          data: {}
        });
      function vf(n) {
        return Gi(
          0,
          [
            (n()(),
            Mi(
              0,
              0,
              null,
              null,
              29,
              'section',
              [['class', 'brands-sm']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              1,
              0,
              null,
              null,
              3,
              'div',
              [['class', 'title-wrapper']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(2, 0, null, null, 2, 'h2', [['class', 'title']], null, null, null, null, null)),
            (n()(),
            Mi(3, 0, null, null, 1, 'span', [['class', 'text']], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, ['\u041d\u0430\u0448\u0438 \u0431\u0440\u0435\u043d\u0434\u044b'])),
            (n()(), Mi(5, 0, null, null, 24, 'ul', [], null, null, null, null, null)),
            (n()(), Mi(6, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (n()(), Mi(7, 0, null, null, 1, 'a', [['href', '']], null, null, null, null, null)),
            (n()(),
            Mi(
              8,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/brend/dahua_kaliningrad.png']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(9, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (n()(), Mi(10, 0, null, null, 1, 'a', [['href', '']], null, null, null, null, null)),
            (n()(),
            Mi(
              11,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/brend/el.png']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(12, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (n()(), Mi(13, 0, null, null, 1, 'a', [['href', '']], null, null, null, null, null)),
            (n()(),
            Mi(
              14,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/brend/ez_ip.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(15, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (n()(), Mi(16, 0, null, null, 1, 'a', [['href', '']], null, null, null, null, null)),
            (n()(),
            Mi(
              17,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/brend/hikvision_kaliningrad.png']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(18, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (n()(), Mi(19, 0, null, null, 1, 'a', [['href', '']], null, null, null, null, null)),
            (n()(),
            Mi(
              20,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/brend/hiwatch-kaliningrad.png']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(21, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (n()(), Mi(22, 0, null, null, 1, 'a', [['href', '']], null, null, null, null, null)),
            (n()(),
            Mi(
              23,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/brend/logo-CTV.png']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(24, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (n()(), Mi(25, 0, null, null, 1, 'a', [['href', '']], null, null, null, null, null)),
            (n()(),
            Mi(
              26,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/brend/optimus.png']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(27, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (n()(), Mi(28, 0, null, null, 1, 'a', [['href', '']], null, null, null, null, null)),
            (n()(),
            Mi(
              29,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/brend/tantos.png']
              ],
              null,
              null,
              null,
              null,
              null
            ))
          ],
          null,
          null
        );
      }
      var gf = (function() {
          function n() {
            _classCallCheck(this, n);
          }
          return _createClass(n, [{ key: 'ngOnInit', value: function() {} }]), n;
        })(),
        _f = Ht({
          encapsulation: 0,
          styles: [
            [
              '*[_ngcontent-%COMP%]{box-sizing:border-box}.about-company[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto 20px}.title-wrapper[_ngcontent-%COMP%]{position:relative}.title-wrapper[_ngcontent-%COMP%]:after{content:"";background:#dcdcdc;position:absolute;left:0;top:50%;margin-top:-.5px;display:block;width:100%;height:1px;z-index:-1}.title__text[_ngcontent-%COMP%]{background:#fff;margin:15px 20px;padding:0 10px;display:inline-block;text-transform:uppercase;font-family:Arial,sans-serif;color:#494940}.about-company__content[_ngcontent-%COMP%]{padding:0 10px;display:grid;grid-template-columns:repeat(2,auto)}.content__list[_ngcontent-%COMP%]{margin-left:40px;color:#525252;line-height:1.5;margin-bottom:10px;list-style-type:circle}.content__button[_ngcontent-%COMP%]{background:unset;border:0;font-size:16px;margin:0 0 0 20px;padding:0}@media (max-width:1200px){.content__img[_ngcontent-%COMP%]{display:none}}'
            ]
          ],
          data: {}
        });
      function mf(n) {
        return Gi(
          0,
          [
            (n()(), Mi(0, 0, null, null, 21, 'div', [], null, null, null, null, null)),
            (n()(), Mi(1, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              ' \u041f\u0440\u0435\u0436\u0434\u0435 \u0447\u0435\u043c \u043a\u0443\u043f\u0438\u0442\u044c \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f, \u0436\u0435\u043b\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u043f\u0440\u043e\u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0441\u043e \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u0430\u043c\u0438. \u0420\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0438 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 \u041e\u041e\u041e \xab\u0414\u041c\u0414 \u0441\u0438\u0441\u0442\u0435\u043c\u0441\xbb \u0434\u0430\u0434\u0443\u0442 \u0441\u043e\u0432\u0435\u0442\u044b \u0438 \u043f\u043e\u043c\u043e\u0433\u0443\u0442 \u043f\u043e\u0434\u043e\u0431\u0440\u0430\u0442\u044c \u0430\u043f\u043f\u0430\u0440\u0430\u0442\u0443\u0440\u0443. \u042d\u043a\u0441\u043f\u0435\u0440\u0442\u044b \u043f\u0440\u043e\u0434\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0438\u0440\u0443\u044e\u0442 \u0438\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u043e\u0434\u0445\u043e\u0434 \u043a \u043a\u0430\u0436\u0434\u043e\u043c\u0443 \u043a\u043b\u0438\u0435\u043d\u0442\u0443. '
            ])),
            (n()(), Mi(3, 0, null, null, 1, 'h3', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              ' \u0421\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u0447\u0430\u044f \u0441 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0435\u0439 \u041e\u041e\u041e \xab\u0414\u041c\u0414 \u0441\u0438\u0441\u0442\u0435\u043c\u0441\xbb, \u0432\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u0442\u0430\u043a\u0438\u0435 \u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430: '
            ])),
            (n()(),
            Mi(
              5,
              0,
              null,
              null,
              8,
              'ul',
              [['class', 'content__list']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(6, 0, null, null, 1, 'li', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430;'
            ])),
            (n()(), Mi(8, 0, null, null, 1, 'li', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u043e\u0440\u0438\u0433\u0438\u043d\u0430\u043b\u044c\u043d\u043e\u0439 \u0442\u0435\u0445\u043d\u0438\u043a\u0438;'
            ])),
            (n()(), Mi(10, 0, null, null, 1, 'li', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u043d\u0435\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043d\u044b\u0439 \u0432\u044b\u0431\u043e\u0440 \u0430\u043f\u043f\u0430\u0440\u0430\u0442\u0443\u0440\u044b;'
            ])),
            (n()(), Mi(12, 0, null, null, 1, 'li', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u0433\u0430\u0440\u0430\u043d\u0442\u0438\u044f \u0438 \u0441\u0435\u0440\u0432\u0438\u0441.'
            ])),
            (n()(), Mi(14, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              ' \u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u043c\u043e\u0434\u0435\u043b\u0438 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f. \u041a\u043b\u0438\u0435\u043d\u0442\u0443 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0430\u0442 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438 \u0430\u043f\u043f\u0430\u0440\u0430\u0442\u0443\u0440\u0443, \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u0443\u044e \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0446\u0438\u0444\u0440\u043e\u0432\u044b\u0445 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439. '
            ])),
            (n()(), Mi(16, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              ' \u041e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u043b\u044f \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f \u043e\u0442\u043b\u0438\u0447\u0430\u0435\u0442\u0441\u044f \u043f\u0440\u043e\u0441\u0442\u043e\u0442\u043e\u0439 \u044d\u043a\u0441\u043f\u043b\u0443\u0430\u0442\u0430\u0446\u0438\u0438. \u0427\u0435\u043b\u043e\u0432\u0435\u043a\u0443 \u043d\u0435 \u043f\u043e\u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u043c\u043d\u043e\u0433\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438, \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u0443\u0447\u0438\u0442\u044c\u0441\u044f \u0435\u0433\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c. \u041a\u0430\u0436\u0434\u0430\u044f \u043a\u0430\u043c\u0435\u0440\u0430 \u0438\u043c\u0435\u0435\u0442 \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0443\u044e \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044e, \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u043d\u0443\u044e \u043d\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u043c \u044f\u0437\u044b\u043a\u0435. '
            ])),
            (n()(), Mi(18, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              ' \u0420\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0438 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 \u041e\u041e\u041e \xab\u0414\u041c\u0414 \u0441\u0438\u0441\u0442\u0435\u043c\u0441\xbb \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u044b \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442 \u043e\u0445\u0440\u0430\u043d\u043d\u043e\u0433\u043e \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u0430 \u0434\u043b\u044f \u043b\u044e\u0431\u043e\u0439 \u0442\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u0438. \u041f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0437\u0430\u0434\u0430\u043d\u0438\u044f \u043c\u0430\u0441\u0442\u0435\u0440\u0430 \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u044e\u0442 \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0443 \u043e\u0431\u044a\u0435\u043a\u0442\u0430. \u041d\u0430\u0448\u0438 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u044b \u043f\u043e\u0434\u0431\u0435\u0440\u0443\u0442 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0435\u0435 \u043c\u0435\u0441\u0442\u043e, \u0447\u0442\u043e\u0431\u044b \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0438\u0442\u044c \u043a\u0430\u043c\u0435\u0440\u044b. '
            ])),
            (n()(), Mi(20, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              ' \u0412\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0435 \u043f\u043e\u0434 \u043a\u043b\u044e\u0447 \u0443\u0434\u0438\u0432\u0438\u0442 \u0432\u0430\u0441 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u044c\u044e \u0446\u0435\u043d. '
            ]))
          ],
          null,
          null
        );
      }
      function yf(n) {
        return Gi(
          0,
          [
            (n()(),
            Mi(
              0,
              0,
              null,
              null,
              21,
              'section',
              [['class', 'about-company']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              1,
              0,
              null,
              null,
              3,
              'div',
              [['class', 'title-wrapper']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(2, 0, null, null, 2, 'h2', [['class', 'title']], null, null, null, null, null)),
            (n()(),
            Mi(
              3,
              0,
              null,
              null,
              1,
              'span',
              [['class', 'title__text']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Hi(-1, null, ['\u041e \u041a\u043e\u043c\u043f\u0430\u043d\u0438\u0438'])),
            (n()(),
            Mi(
              5,
              0,
              null,
              null,
              16,
              'div',
              [['class', 'about-company__content']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              6,
              0,
              null,
              null,
              14,
              'div',
              [['class', 'content__description']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(7, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              ' \u041e\u041e\u041e "\u0414\u041c\u0414 \u0441\u0438\u0441\u0442\u0435\u043c\u044f" \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u043d\u043e \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u044e\u0449\u0430\u044f\u0441\u044f \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f. \u041c\u044b \u0440\u0430\u0434\u044b \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u0442\u044c \u0412\u0430\u043c \u0448\u0438\u0440\u043e\u043a\u0438\u0439 \u0441\u043f\u0435\u043a\u0442\u0440 \u043e\u0445\u0440\u0430\u043d\u043d\u044b\u0445 \u0441\u0438\u0441\u0442\u0435\u043c, \u0430 \u0442\u0430\u043a \u0436\u0435 \u0432\u0435\u0441\u044c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0439 \u043f\u0435\u0440\u0435\u0447\u0435\u043d\u044c \u0443\u0441\u043b\u0443\u0433. \u041f\u043e\u0437\u0432\u043e\u043d\u0438\u0432 \u043d\u0430\u043c \u0412\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0443\u044e \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u044e, \u0438\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u043e\u0434\u0445\u043e\u0434 \u0438 \u0433\u0438\u0431\u043a\u0443\u044e \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u0441\u043a\u0438\u0434\u043e\u043a. '
            ])),
            (n()(), Mi(9, 0, null, null, 1, 'h3', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u041f\u043e\u043a\u0443\u043f\u043a\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f \u0432 \u041c\u0438\u043d\u0441\u043a\u0435'
            ])),
            (n()(), Mi(11, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              ' \u0427\u0442\u043e\u0431\u044b \u043a\u0443\u043f\u0438\u0442\u044c \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0435 \u0432 \u041c\u0438\u043d\u0441\u043a\u0435, \u0433\u043e\u0440\u043e\u0436\u0430\u043d\u0435 \u043e\u0431\u0440\u0430\u0449\u0430\u044e\u0442\u0441\u044f \u043a \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043b\u044f\u043c \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 \u041e\u041e\u041e \xab\u0414\u041c\u0414 \u0441\u0438\u0441\u0442\u0435\u043c\u0441\xbb. \u0414\u0430\u043d\u043d\u0430\u044f \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0434\u0430\u0435\u0442 \u0438 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u0435\u0442 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438. \u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f \u041e\u041e\u041e \xab\u0414\u041c\u0414 \u0441\u0438\u0441\u0442\u0435\u043c\u0441\xbb \u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0431\u043e\u043b\u044c\u0448\u0438\u043c \u0443\u0432\u0430\u0436\u0435\u043d\u0438\u0435\u043c \u0441\u0442\u043e\u043b\u0438\u0447\u043d\u044b\u0445 \u0436\u0438\u0442\u0435\u043b\u0435\u0439. \u0411\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f \u0440\u0430\u0431\u043e\u0442\u0435 \u044d\u0442\u043e\u0439 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438, \u0443 \u043b\u044e\u0434\u0435\u0439 \u043f\u043e\u044f\u0432\u0438\u043b\u0441\u044f \u0448\u0430\u043d\u0441 \u0437\u0430\u0449\u0438\u0442\u0438\u0442\u044c \u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u043e \u043e\u0442 \u0437\u043b\u043e\u0443\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u0438\u043a\u043e\u0432. '
            ])),
            (n()(), Mi(13, 0, null, null, 1, 'h3', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              ' \u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0441\u0438\u0441\u0442\u0435\u043c \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f '
            ])),
            (n()(), Mi(15, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              ' \u0421\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430 \u0434\u043b\u044f \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u044e\u0442\u0441\u044f \u0432\u043e \u0432\u0441\u0435\u0445 \u0441\u0444\u0435\u0440\u0430\u0445 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438. \u041a\u0430\u043c\u0435\u0440\u044b \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u043d\u0430 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0445 \u0441\u0442\u043e\u044f\u043d\u043a\u0430\u0445 \u0438 \u0434\u0430\u0447\u043d\u044b\u0445 \u0443\u0447\u0430\u0441\u0442\u043a\u0430\u0445. \u042d\u0442\u043e \u043f\u043e\u043c\u043e\u0433\u0430\u0435\u0442 \u044d\u043a\u043e\u043d\u043e\u043c\u0438\u0442\u044c \u0434\u0435\u043d\u0435\u0436\u043d\u044b\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430. \u0412\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u044b \u0441\u0443\u043f\u0435\u0440\u043c\u0430\u0440\u043a\u0435\u0442\u043e\u0432 \u0443\u043c\u0435\u043d\u044c\u0448\u0430\u044e\u0442 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u043e\u0432 \u043f\u043e\u0441\u043b\u0435 \u043f\u043e\u043a\u0443\u043f\u043a\u0438 \u043e\u0445\u0440\u0430\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f. \u041f\u0440\u0435\u0434\u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u0435\u043b\u044f\u043c \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0435 \u043f\u0440\u0438\u0434\u0435\u0442\u0441\u044f \u043d\u0430\u0434\u0435\u044f\u0442\u044c\u0441\u044f \u043d\u0430 \u0447\u0435\u0441\u0442\u043d\u043e\u0441\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u043e\u0432. \u041a\u0430\u043c\u0435\u0440\u0430 \u0431\u0443\u0434\u0435\u0442 \u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u044f\u0449\u0438\u0435 \u043d\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f. \u041d\u0438 \u043e\u0434\u0438\u043d \u0447\u0435\u043b\u043e\u0432\u0435\u043a, \u043f\u0440\u043e\u043d\u0438\u043a\u0448\u0438\u0439 \u043d\u0430 \u043e\u0445\u0440\u0430\u043d\u044f\u0435\u043c\u0443\u044e \u0442\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u044e, \u043d\u0435 \u043e\u0441\u0442\u0430\u043d\u0435\u0442\u0441\u044f \u043d\u0435\u0437\u0430\u043c\u0435\u0447\u0435\u043d\u043d\u044b\u043c. ... '
            ])),
            (n()(), Ti(16777216, null, null, 1, null, mf)),
            Yl(18, 16384, null, 0, ho, [Et, xt], { ngIf: [0, 'ngIf'] }, null),
            (n()(),
            Mi(
              19,
              0,
              null,
              null,
              1,
              'button',
              [['class', 'content__button']],
              null,
              [[null, 'click']],
              function(n, e, t) {
                var l = !0,
                  r = n.component;
                return 'click' === e && (l = 0 != (r.isVisible = !r.isVisible) && l), l;
              },
              null,
              null
            )),
            (n()(),
            Hi(-1, null, [
              '\u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c / \u0441\u043a\u0440\u044b\u0442\u044c'
            ])),
            (n()(),
            Mi(
              21,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['class', 'content__img'],
                ['src', 'assets/img/about-company/1.png']
              ],
              null,
              null,
              null,
              null,
              null
            ))
          ],
          function(n, e) {
            n(e, 18, 0, e.component.isVisible);
          },
          null
        );
      }
      var Cf = (function() {
          function n() {
            _classCallCheck(this, n);
          }
          return _createClass(n, [{ key: 'ngOnInit', value: function() {} }]), n;
        })(),
        kf = Ht({
          encapsulation: 0,
          styles: [
            [
              '*[_ngcontent-%COMP%]{box-sizing:border-box}.section[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto 20px}.title-wrapper[_ngcontent-%COMP%]{position:relative}.title-wrapper[_ngcontent-%COMP%]:after{content:"";background:#dcdcdc;position:absolute;left:0;top:50%;margin-top:-.5px;display:block;width:100%;height:1px;z-index:-1}.title__text[_ngcontent-%COMP%]{background:#fff;margin:15px 20px;padding:0 10px;display:inline-block;text-transform:uppercase;font-family:Arial,sans-serif;color:#494940}.content__list[_ngcontent-%COMP%]{padding:0 10px;display:grid;grid-template-columns:repeat(4,auto);-webkit-column-gap:10px;-moz-column-gap:10px;column-gap:10px}@media (max-width:760px){.content__list[_ngcontent-%COMP%]{grid-template-columns:repeat(2,auto)}}@media (max-width:450px){.content__list[_ngcontent-%COMP%]{grid-template-columns:1fr}}.item[_ngcontent-%COMP%]{text-align:center;display:grid;padding:20px 10px 0;border:1px solid #fff;border-radius:5px}.item[_ngcontent-%COMP%]   .item__title[_ngcontent-%COMP%]{grid-row:2;margin:20px 0 10px}.item[_ngcontent-%COMP%]   .item__svg[_ngcontent-%COMP%]{grid-row:1;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;width:124px;height:124px;border:2px solid #e9e9e9;border-radius:50%;margin:0 auto;background-color:#f4f4f4}.item[_ngcontent-%COMP%]   .svg[_ngcontent-%COMP%]{width:60px;height:60px;fill:#494940}.item[_ngcontent-%COMP%]:hover{-webkit-transition:1s;transition:1s;background-color:#fafafa;border:1px solid #e0e0e0}.item[_ngcontent-%COMP%]:hover   .item__svg[_ngcontent-%COMP%]{-webkit-transition:.25s;transition:.25s;background-color:#fff4ef;border:2px solid #ff8352}.item[_ngcontent-%COMP%]:hover   .svg[_ngcontent-%COMP%]{-webkit-transition:.25s;transition:.25s;fill:#c23801}'
            ]
          ],
          data: {}
        });
      function bf(n) {
        return Gi(
          0,
          [
            (n()(),
            Mi(
              0,
              0,
              null,
              null,
              39,
              'section',
              [['class', 'section']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              1,
              0,
              null,
              null,
              3,
              'div',
              [['class', 'title-wrapper']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(2, 0, null, null, 2, 'h2', [['class', 'title']], null, null, null, null, null)),
            (n()(),
            Mi(
              3,
              0,
              null,
              null,
              1,
              'span',
              [['class', 'title__text']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Hi(-1, null, [
              '\u0421\u0438\u0441\u0442\u0435\u043c\u044b \u043e\u0445\u0440\u0430\u043d\u044b \u0438 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438'
            ])),
            (n()(),
            Mi(
              5,
              0,
              null,
              null,
              34,
              'div',
              [['class', 'section__content']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              6,
              0,
              null,
              null,
              0,
              'div',
              [['class', 'content__description']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              7,
              0,
              null,
              null,
              32,
              'ul',
              [['class', 'content__list']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(8, 0, null, null, 7, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
            Mi(
              9,
              0,
              null,
              null,
              1,
              'h3',
              [['class', 'item__title']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Hi(-1, null, [
              '\u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0430\u0441\u0441\u043e\u0440\u0442\u0438\u043c\u0435\u043d\u0442'
            ])),
            (n()(),
            Mi(
              11,
              0,
              null,
              null,
              2,
              'div',
              [['class', 'item__svg']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              12,
              0,
              null,
              null,
              1,
              ':svg:svg',
              [['class', 'svg__warehouse svg']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              13,
              0,
              null,
              null,
              0,
              ':svg:use',
              [[':xlink:href', 'assets/svg/sprite.svg#svg__warehouse']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(14, 0, null, null, 1, 'p', [['class', 'item__text']], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              ' \u041f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e\u0435 \u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u0448\u0438\u0440\u043e\u043a\u043e\u0433\u043e \u0430\u0441\u0441\u043e\u0440\u0442\u0438\u043c\u0435\u043d\u0442\u0430 \u043d\u0430 \u0441\u043a\u043b\u0430\u0434\u0435, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0441\u0432\u043e\u0435\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e \u043f\u043e\u0441\u0442\u0430\u0432\u043a\u0443 \u043f\u043e\u0434 \u0437\u0430\u043a\u0430\u0437. '
            ])),
            (n()(),
            Mi(16, 0, null, null, 7, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
            Mi(
              17,
              0,
              null,
              null,
              1,
              'h3',
              [['class', 'item__title']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Hi(-1, null, [
              '\u0422\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430'
            ])),
            (n()(),
            Mi(
              19,
              0,
              null,
              null,
              2,
              'div',
              [['class', 'item__svg']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              20,
              0,
              null,
              null,
              1,
              ':svg:svg',
              [['class', 'svg__support svg']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              21,
              0,
              null,
              null,
              0,
              ':svg:use',
              [[':xlink:href', 'assets/svg/sprite.svg#svg__support']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(22, 0, null, null, 1, 'p', [['class', 'item__text']], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              ' \u041e\u043f\u0442\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u043f\u043e \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044e \u0441\u0438\u0441\u0442\u0435\u043c \u043e\u0445\u0440\u0430\u043d\u044b \u043d\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u0435 \u043b\u044e\u0431\u043e\u0439 \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u0438. '
            ])),
            (n()(),
            Mi(24, 0, null, null, 7, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
            Mi(
              25,
              0,
              null,
              null,
              1,
              'h3',
              [['class', 'item__title']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Hi(-1, null, [
              '\u041a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u0438'
            ])),
            (n()(),
            Mi(
              27,
              0,
              null,
              null,
              2,
              'div',
              [['class', 'item__svg']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              28,
              0,
              null,
              null,
              1,
              ':svg:svg',
              [['class', 'svg__consultation svg']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              29,
              0,
              null,
              null,
              0,
              ':svg:use',
              [[':xlink:href', 'assets/svg/sprite.svg#svg__consultation']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(30, 0, null, null, 1, 'p', [['class', 'item__text']], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              ' \u0418\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u043e\u0434\u0445\u043e\u0434 \u0438 \u0434\u0435\u0442\u0430\u043b\u044c\u043d\u0443\u044e \u043f\u0440\u043e\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0437\u0430\u0434\u0430\u043d\u0438\u044f \u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u0430. '
            ])),
            (n()(),
            Mi(32, 0, null, null, 7, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
            Mi(
              33,
              0,
              null,
              null,
              1,
              'h3',
              [['class', 'item__title']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Hi(-1, null, [
              '\u0413\u0430\u0440\u0430\u043d\u0442\u0438\u044f \u0438 \u0441\u0435\u0440\u0432\u0438\u0441'
            ])),
            (n()(),
            Mi(
              35,
              0,
              null,
              null,
              2,
              'div',
              [['class', 'item__svg']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              36,
              0,
              null,
              null,
              1,
              ':svg:svg',
              [['class', 'svg__warranty svg']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              37,
              0,
              null,
              null,
              0,
              ':svg:use',
              [[':xlink:href', 'assets/svg/sprite.svg#svg__warranty']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(38, 0, null, null, 1, 'p', [['class', 'item__text']], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              ' \u0421\u0435\u0440\u0432\u0438\u0441\u043d\u043e\u0435 \u0438 \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0439\u043d\u043e\u0435 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u0435 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f \u0434\u043b\u044f \u043e\u0445\u0440\u0430\u043d\u043d\u044b\u0445 \u0441\u0438\u0441\u0442\u0435\u043c. '
            ]))
          ],
          null,
          null
        );
      }
      var wf = (function() {
          function n() {
            _classCallCheck(this, n);
          }
          return _createClass(n, [{ key: 'ngOnInit', value: function() {} }]), n;
        })(),
        xf = Ht({
          encapsulation: 0,
          styles: [
            [
              '[_nghost-%COMP%]{display:grid;-webkit-box-pack:center;justify-content:center;overflow:hidden}@media (max-width:1200px){[_nghost-%COMP%]{-webkit-box-pack:left;justify-content:left}}'
            ]
          ],
          data: {}
        });
      function Of(n) {
        return Gi(
          0,
          [
            (n()(), Mi(0, 0, null, null, 8, null, null, null, null, null, null, null)),
            (n()(), Mi(1, 0, null, null, 1, 'app-slider-sm', [], null, null, null, ff, hf)),
            Yl(2, 114688, null, 0, cf, [], null, null),
            (n()(), Mi(3, 0, null, null, 1, 'app-brands-sm', [], null, null, null, vf, pf)),
            Yl(4, 114688, null, 0, df, [], null, null),
            (n()(), Mi(5, 0, null, null, 1, 'app-about-company', [], null, null, null, yf, _f)),
            Yl(6, 114688, null, 0, gf, [], null, null),
            (n()(),
            Mi(
              7,
              0,
              null,
              null,
              1,
              'app-security-and-safety-systems',
              [],
              null,
              null,
              null,
              bf,
              kf
            )),
            Yl(8, 114688, null, 0, Cf, [], null, null)
          ],
          function(n, e) {
            n(e, 2, 0), n(e, 4, 0), n(e, 6, 0), n(e, 8, 0);
          },
          null
        );
      }
      var Ef = El(
          'app-page-home',
          wf,
          function(n) {
            return Gi(
              0,
              [
                (n()(), Mi(0, 0, null, null, 1, 'app-page-home', [], null, null, null, Of, xf)),
                Yl(1, 114688, null, 0, wf, [], null, null)
              ],
              function(n, e) {
                n(e, 1, 0);
              },
              null
            );
          },
          {},
          {},
          []
        ),
        Pf = (function() {
          function n() {
            _classCallCheck(this, n);
          }
          return _createClass(n, [{ key: 'ngOnInit', value: function() {} }]), n;
        })(),
        Sf = Ht({
          encapsulation: 0,
          styles: [
            [
              '*[_ngcontent-%COMP%]{box-sizing:border-box}.section[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto 20px}.title-wrapper[_ngcontent-%COMP%]{position:relative}.title-wrapper[_ngcontent-%COMP%]:after{content:"";background:#dcdcdc;position:absolute;left:0;top:50%;margin-top:-.5px;display:block;width:100%;height:1px;z-index:-1}.text[_ngcontent-%COMP%]{background:#fff;margin:15px 20px;padding:0 10px;display:inline-block;text-transform:uppercase;font-family:Arial,sans-serif;color:#494940}img[_ngcontent-%COMP%]{max-width:230px;width:100%}.catalog_list[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,auto);grid-gap:10px;padding:0 10px}@media (max-width:1200px){.catalog_list[_ngcontent-%COMP%]{grid-template-columns:repeat(3,auto)}}@media (max-width:800px){.catalog_list[_ngcontent-%COMP%]{grid-template-columns:repeat(2,auto)}}@media (max-width:560px){.catalog_list[_ngcontent-%COMP%]{grid-template-columns:repeat(1,auto);margin:0 auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}}.catalog_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{display:grid;padding:10px;background-color:#fafafa;border:1px solid #e0e0e0;box-shadow:inset 0 1px 1px #fff;border-radius:5px;-webkit-transition:.5s;transition:.5s}.catalog_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover{border:1px solid #ff4800;-webkit-transform:scale(1.03);transform:scale(1.03)}.catalog_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{display:grid;justify-items:center}.catalog_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{align-self:end;justify-self:center}.catalog_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{align-self:center}'
            ]
          ],
          data: {}
        });
      function Tf(n) {
        return Gi(
          0,
          [
            (n()(),
            Mi(
              0,
              0,
              null,
              null,
              50,
              'section',
              [['class', 'section']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              1,
              0,
              null,
              null,
              3,
              'div',
              [['class', 'title-wrapper']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(2, 0, null, null, 2, 'h2', [['class', 'title']], null, null, null, null, null)),
            (n()(),
            Mi(3, 0, null, null, 1, 'span', [['class', 'text']], null, null, null, null, null)),
            (n()(), Hi(-1, null, ['\u041a\u0430\u0442\u0430\u043b\u043e\u0433'])),
            (n()(),
            Mi(
              5,
              0,
              null,
              null,
              45,
              'ul',
              [['class', 'catalog_list']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(6, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
            Mi(
              7,
              0,
              null,
              null,
              3,
              'a',
              [
                ['class', 'link'],
                ['href', '']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              8,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/catalog/cat1.png']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(9, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u0421\u0438\u0441\u0442\u0435\u043c\u044b \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f'
            ])),
            (n()(),
            Mi(11, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
            Mi(
              12,
              0,
              null,
              null,
              3,
              'a',
              [
                ['class', 'link'],
                ['href', '']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              13,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/catalog/domofon.png']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(14, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u041a\u043e\u043d\u0442\u0440\u043e\u043b\u044c \u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043e\u043c'
            ])),
            (n()(),
            Mi(16, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
            Mi(
              17,
              0,
              null,
              null,
              3,
              'a',
              [
                ['class', 'link'],
                ['href', '']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              18,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/catalog/videodomofon-monitor.png']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(19, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u0412\u0438\u0434\u0435\u043e\u0434\u043e\u043c\u043e\u0444\u043e\u043d\u044b'
            ])),
            (n()(),
            Mi(21, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
            Mi(
              22,
              0,
              null,
              null,
              3,
              'a',
              [
                ['class', 'link'],
                ['href', '']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              23,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/catalog/cat4.png']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(24, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u0421\u0435\u0442\u0435\u0432\u043e\u0435 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435'
            ])),
            (n()(),
            Mi(26, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
            Mi(
              27,
              0,
              null,
              null,
              3,
              'a',
              [
                ['class', 'link'],
                ['href', '']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              28,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/catalog/cat5.png']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(29, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0438 \u043f\u0438\u0442\u0430\u043d\u0438\u044f'
            ])),
            (n()(),
            Mi(31, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
            Mi(
              32,
              0,
              null,
              null,
              3,
              'a',
              [
                ['class', 'link'],
                ['href', '']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              33,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/catalog/logo.png']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(34, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), Hi(-1, null, ['\u0423\u043c\u043d\u044b\u0439 \u0434\u043e\u043c'])),
            (n()(),
            Mi(36, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
            Mi(
              37,
              0,
              null,
              null,
              3,
              'a',
              [
                ['class', 'link'],
                ['href', '']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              38,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/catalog/gsm_signal_kateg.png']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(39, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              'GSM \u0441\u0438\u0433\u043d\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f'
            ])),
            (n()(),
            Mi(41, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
            Mi(
              42,
              0,
              null,
              null,
              3,
              'a',
              [
                ['class', 'link'],
                ['href', '']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              43,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/catalog/rkit.png']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(44, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u0423\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430 \u0440\u0430\u0434\u0438\u043e\u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f'
            ])),
            (n()(),
            Mi(46, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
            Mi(
              47,
              0,
              null,
              null,
              3,
              'a',
              [
                ['class', 'link'],
                ['href', '']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              48,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/catalog/photo.png']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(49, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u0410\u043a\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044b \u0438 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b'
            ]))
          ],
          null,
          null
        );
      }
      var Mf = (function() {
          function n() {
            _classCallCheck(this, n);
          }
          return _createClass(n, [{ key: 'ngOnInit', value: function() {} }]), n;
        })(),
        Af = Ht({ encapsulation: 0, styles: [['']], data: {} });
      function Rf(n) {
        return Gi(
          0,
          [
            (n()(), Mi(0, 0, null, null, 1, 'app-catalog', [], null, null, null, Tf, Sf)),
            Yl(1, 114688, null, 0, Pf, [], null, null)
          ],
          function(n, e) {
            n(e, 1, 0);
          },
          null
        );
      }
      var If = El(
          'app-page-catalog',
          Mf,
          function(n) {
            return Gi(
              0,
              [
                (n()(), Mi(0, 0, null, null, 1, 'app-page-catalog', [], null, null, null, Rf, Af)),
                Yl(1, 114688, null, 0, Mf, [], null, null)
              ],
              function(n, e) {
                n(e, 1, 0);
              },
              null
            );
          },
          {},
          {},
          []
        ),
        Nf = (function() {
          function n() {
            _classCallCheck(this, n);
          }
          return _createClass(n, [{ key: 'ngOnInit', value: function() {} }]), n;
        })(),
        Vf = Ht({ encapsulation: 0, styles: [['']], data: {} });
      function Df(n) {
        return Gi(
          0,
          [
            (n()(), Mi(0, 0, null, null, 1, 'app-about-company', [], null, null, null, yf, _f)),
            Yl(1, 114688, null, 0, gf, [], null, null),
            (n()(),
            Mi(
              2,
              0,
              null,
              null,
              1,
              'app-security-and-safety-systems',
              [],
              null,
              null,
              null,
              bf,
              kf
            )),
            Yl(3, 114688, null, 0, Cf, [], null, null)
          ],
          function(n, e) {
            n(e, 1, 0), n(e, 3, 0);
          },
          null
        );
      }
      var jf = El(
          'app-page-about',
          Nf,
          function(n) {
            return Gi(
              0,
              [
                (n()(), Mi(0, 0, null, null, 1, 'app-page-about', [], null, null, null, Df, Vf)),
                Yl(1, 114688, null, 0, Nf, [], null, null)
              ],
              function(n, e) {
                n(e, 1, 0);
              },
              null
            );
          },
          {},
          {},
          []
        ),
        Lf = (function() {
          function n() {
            _classCallCheck(this, n);
          }
          return _createClass(n, [{ key: 'ngOnInit', value: function() {} }]), n;
        })(),
        Uf = Ht({
          encapsulation: 0,
          styles: [
            [
              '.section[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto 20px}.title-wrapper[_ngcontent-%COMP%]{position:relative}.title-wrapper[_ngcontent-%COMP%]:after{content:"";background:#dcdcdc;position:absolute;left:0;top:50%;margin-top:-.5px;display:block;width:100%;height:1px;z-index:-1}.text[_ngcontent-%COMP%]{background:#fff;margin:15px 20px;padding:0 10px;display:inline-block;text-transform:uppercase;font-family:Arial,sans-serif;color:#494940}img[_ngcontent-%COMP%]{max-width:230px;width:100%}.svg[_ngcontent-%COMP%]{margin:5px 10px;width:50px;height:50px;fill:currentColor}.catalog_list[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,auto);grid-gap:10px;padding:0 10px}.catalog_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{display:grid;padding:10px;background-color:#fafafa;border:1px solid #e0e0e0;box-shadow:inset 0 1px 1px #fff;border-radius:5px;-webkit-transition:.5s;transition:.5s}.catalog_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover{border:1px solid #ff4800;-webkit-transform:scale(1.03);transform:scale(1.03)}.catalog_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{display:grid;justify-items:center}.catalog_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{align-self:end;justify-self:center}.catalog_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{align-self:center}.box[_ngcontent-%COMP%]{padding:0 10px;display:grid;grid-template-columns:auto 300px}@media (max-width:600px){.box[_ngcontent-%COMP%]{grid-template-columns:auto}}.box_guaranty[_ngcontent-%COMP%]{padding:0 10px;color:#525252}.list_options[_ngcontent-%COMP%]{display:-webkit-box;display:flex;flex-flow:wrap}.list_options[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:10px}@media (max-width:800px){.list_options[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center}}.list_aside[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.list_aside[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}@media (max-width:800px){.list_aside[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center}.list_aside[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}}'
            ]
          ],
          data: {}
        });
      function Ff(n) {
        return Gi(
          0,
          [
            (n()(),
            Mi(
              0,
              0,
              null,
              null,
              55,
              'section',
              [['class', 'section']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              1,
              0,
              null,
              null,
              3,
              'div',
              [['class', 'title-wrapper']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(2, 0, null, null, 2, 'h2', [['class', 'title']], null, null, null, null, null)),
            (n()(),
            Mi(3, 0, null, null, 1, 'span', [['class', 'text']], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u0442\u0435\u0445.\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430'
            ])),
            (n()(),
            Mi(5, 0, null, null, 50, 'div', [['class', 'box']], null, null, null, null, null)),
            (n()(),
            Mi(
              6,
              0,
              null,
              null,
              30,
              'ul',
              [['class', 'list_options']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(7, 0, null, null, 5, 'li', [], null, null, null, null, null)),
            (n()(), Mi(8, 0, null, null, 4, 'a', [['href', '']], null, null, null, null, null)),
            (n()(),
            Mi(
              9,
              0,
              null,
              null,
              1,
              ':svg:svg',
              [['class', 'svg__settings svg']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              10,
              0,
              null,
              null,
              0,
              ':svg:use',
              [[':xlink:href', 'assets/svg/sprite.svg#svg__settings']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(11, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u043f\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0435'
            ])),
            (n()(), Mi(13, 0, null, null, 5, 'li', [], null, null, null, null, null)),
            (n()(), Mi(14, 0, null, null, 4, 'a', [['href', '']], null, null, null, null, null)),
            (n()(),
            Mi(
              15,
              0,
              null,
              null,
              1,
              ':svg:svg',
              [['class', 'svg__download svg']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              16,
              0,
              null,
              null,
              0,
              ':svg:use',
              [[':xlink:href', 'assets/svg/sprite.svg#svg__download']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(17, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u041f\u0440\u043e\u0448\u0438\u0432\u043a\u0438 \u0438 \u041f\u041e \u0441\u043a\u0430\u0447\u0430\u0442\u044c \u0441 FTP'
            ])),
            (n()(), Mi(19, 0, null, null, 5, 'li', [], null, null, null, null, null)),
            (n()(), Mi(20, 0, null, null, 4, 'a', [['href', '']], null, null, null, null, null)),
            (n()(),
            Mi(
              21,
              0,
              null,
              null,
              1,
              ':svg:svg',
              [['class', 'svg__wrench svg']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              22,
              0,
              null,
              null,
              0,
              ':svg:use',
              [[':xlink:href', 'assets/svg/sprite.svg#svg__wrench']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(23, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u0413\u0430\u0440\u0430\u043d\u0442\u0438\u044f \u0438 \u0440\u0435\u043c\u043e\u043d\u0442'
            ])),
            (n()(), Mi(25, 0, null, null, 5, 'li', [], null, null, null, null, null)),
            (n()(), Mi(26, 0, null, null, 4, 'a', [['href', '']], null, null, null, null, null)),
            (n()(),
            Mi(
              27,
              0,
              null,
              null,
              1,
              ':svg:svg',
              [['class', 'svg__letter svg']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              28,
              0,
              null,
              null,
              0,
              ':svg:use',
              [[':xlink:href', 'assets/svg/sprite.svg#svg__letter']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(29, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b \u0442\u0435\u0445\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438'
            ])),
            (n()(), Mi(31, 0, null, null, 5, 'li', [], null, null, null, null, null)),
            (n()(), Mi(32, 0, null, null, 4, 'a', [['href', '']], null, null, null, null, null)),
            (n()(),
            Mi(
              33,
              0,
              null,
              null,
              1,
              ':svg:svg',
              [['class', 'svg__shield svg']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              34,
              0,
              null,
              null,
              0,
              ':svg:use',
              [[':xlink:href', 'assets/svg/sprite.svg#svg__shield']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(35, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u0414\u0435\u043a\u043b\u0430\u0440\u0430\u0446\u0438\u044f \u043e \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438'
            ])),
            (n()(),
            Mi(
              37,
              0,
              null,
              null,
              18,
              'ul',
              [['class', 'list_aside']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(38, 0, null, null, 5, 'li', [], null, null, null, null, null)),
            (n()(), Mi(39, 0, null, null, 4, 'a', [['href', '']], null, null, null, null, null)),
            (n()(),
            Mi(
              40,
              0,
              null,
              null,
              1,
              ':svg:svg',
              [['class', 'svg__calculator svg']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              41,
              0,
              null,
              null,
              0,
              ':svg:use',
              [[':xlink:href', 'assets/svg/sprite.svg#svg__calculator']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(42, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440\u044b'
            ])),
            (n()(), Mi(44, 0, null, null, 5, 'li', [], null, null, null, null, null)),
            (n()(), Mi(45, 0, null, null, 4, 'a', [['href', '']], null, null, null, null, null)),
            (n()(),
            Mi(
              46,
              0,
              null,
              null,
              1,
              ':svg:svg',
              [['class', 'svg__download svg']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              47,
              0,
              null,
              null,
              0,
              ':svg:use',
              [[':xlink:href', 'assets/svg/sprite.svg#svg__download']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(48, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u043a\u0430\u0442\u0430\u043b\u043e\u0433 \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u0438'
            ])),
            (n()(), Mi(50, 0, null, null, 5, 'li', [], null, null, null, null, null)),
            (n()(), Mi(51, 0, null, null, 4, 'a', [['href', '']], null, null, null, null, null)),
            (n()(),
            Mi(
              52,
              0,
              null,
              null,
              1,
              ':svg:svg',
              [['class', 'svg__download svg']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              53,
              0,
              null,
              null,
              0,
              ':svg:use',
              [[':xlink:href', 'assets/svg/sprite.svg#svg__download']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(54, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u043f\u0440\u0430\u0439\u0441-\u043b\u0438\u0441\u0442'
            ])),
            (n()(),
            Mi(
              56,
              0,
              null,
              null,
              65,
              'section',
              [['class', 'section']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              57,
              0,
              null,
              null,
              3,
              'div',
              [['class', 'title-wrapper']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(58, 0, null, null, 2, 'h2', [['class', 'title']], null, null, null, null, null)),
            (n()(),
            Mi(59, 0, null, null, 1, 'span', [['class', 'text']], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u0413\u0430\u0440\u0430\u043d\u0442\u0438\u044f \u0438 \u0440\u0435\u043c\u043e\u043d\u0442'
            ])),
            (n()(),
            Mi(
              61,
              0,
              null,
              null,
              60,
              'div',
              [['class', 'box_guaranty']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(62, 0, null, null, 1, 'h3', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u0432 \u0440\u0435\u043c\u043e\u043d\u0442'
            ])),
            (n()(), Mi(64, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              ' \u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f \u0432 \u0440\u0435\u043c\u043e\u043d\u0442 (\u0432 \u0442\u043e\u043c \u0447\u0438\u0441\u043b\u0435 \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0439\u043d\u044b\u0439) \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0437\u0430 \u0441\u0447\u0435\u0442 \u041a\u043b\u0438\u0435\u043d\u0442\u0430. \u041e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0437\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0443 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f \u0432 \u0421\u0435\u0440\u0432\u0438\u0441\u043d\u044b\u0439 \u0446\u0435\u043d\u0442\u0440 Optimus \u043d\u0435\u0441\u0435\u0442 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u0435\u043b\u044c. '
            ])),
            (n()(), Mi(66, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              ' \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0438 \u0432\u043b\u043e\u0436\u0438\u0442\u044c \u0410\u043a\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f \u0432 \u0440\u0435\u043c\u043e\u043d\u0442. '
            ])),
            (n()(), Mi(68, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              ' \u041e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442\u0441\u044f \u0432 \u0447\u0438\u0441\u0442\u043e\u043c \u0432\u0438\u0434\u0435 \u0441 \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u0435\u043c: '
            ])),
            (n()(), Mi(70, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              ' - \u0434\u0435\u0444\u0435\u043a\u0442\u043e\u0432 \u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u0439 \u0438\u0445 \u043f\u0440\u043e\u044f\u0432\u043b\u0435\u043d\u0438\u044f; '
            ])),
            (n()(), Mi(72, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              ' - \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0442\u043d\u043e\u0441\u0442\u044c \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f; '
            ])),
            (n()(), Mi(74, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              ' - \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u043e\u0435 \u043b\u0438\u0446\u043e \u0441 \u043d\u043e\u043c\u0435\u0440\u043e\u043c \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u043e\u0433\u043e \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430. '
            ])),
            (n()(), Mi(76, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              ' \u041f\u0440\u0438 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0438 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u0434\u0435\u0444\u0435\u043a\u0442\u0430\u0445 \u0422\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0426\u0435\u043d\u0442\u0440 \u0432\u043f\u0440\u0430\u0432\u0435 \u043e\u0442\u043a\u0430\u0437\u0430\u0442\u044c \u0432 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u0438 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f. \u0422\u0430\u043a\u0436\u0435 \u043d\u0435 \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0440\u0435\u043c\u043e\u043d\u0442 \u043d\u0435\u0438\u0441\u043f\u0440\u0430\u0432\u043d\u043e\u0441\u0442\u0435\u0439 \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0445 \u0432 \u0430\u043a\u0442\u0435. '
            ])),
            (n()(), Mi(78, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              ' \u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u0430 \u043a\u0430\u043a \u0447\u0435\u0440\u0435\u0437 \u0434\u0438\u043b\u0435\u0440\u0430, \u0443 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0431\u044b\u043b\u043e \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0442\u0435\u043d\u043e \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435, \u0442\u0430\u043a \u0438 \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e, \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0422\u041a. '
            ])),
            (n()(), Mi(80, 0, null, null, 1, 'h3', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e:'
            ])),
            (n()(), Mi(82, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              ' \u0413\u0430\u0440\u0430\u043d\u0442\u0438\u044f \u043d\u0430 \u0432\u0441\u0435 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435 Optimus 37 \u043c\u0435\u0441\u044f\u0446\u0435\u0432 '
            ])),
            (n()(), Mi(84, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              ' \u0420\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u0432 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0430\u0445 \u0442\u043e\u0432\u0430\u0440\u043e\u0432 \u043d\u0430 \u0432\u043a\u043b\u0430\u0434\u043a\u0435 \u0424\u0430\u0439\u043b\u044b \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f \u0432 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0435 \u0441\u0430\u0439\u0442\u0430 '
            ])),
            (n()(), Mi(86, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              ' \u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f \u0432 \u0440\u0435\u043c\u043e\u043d\u0442 (\u0432 \u0442\u043e\u043c \u0447\u0438\u0441\u043b\u0435 \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0439\u043d\u044b\u0439) \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0437\u0430 \u0441\u0447\u0435\u0442 \u041a\u043b\u0438\u0435\u043d\u0442\u0430. \u041e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0437\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0443 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f \u0432 \u0421\u0435\u0440\u0432\u0438\u0441\u043d\u044b\u0439 \u0446\u0435\u043d\u0442\u0440 Optimus \u043d\u0435\u0441\u0435\u0442 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u0435\u043b\u044c. '
            ])),
            (n()(), Mi(88, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              ' \u041f\u043e \u0432\u043e\u043f\u0440\u043e\u0441\u0430\u043c \u0440\u0435\u043c\u043e\u043d\u0442\u0430 (\u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430, \u043f\u0440\u043e\u0434\u0435\u043b\u0430\u043d\u043d\u043e\u0433\u043e \u0440\u0435\u043c\u043e\u043d\u0442\u0430) \u0438 \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0439\u043d\u043e\u0433\u043e \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u044f \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044c \u0432 \u0441\u0435\u0440\u0432\u0438\u0441\u043d\u044b\u0439 \u0446\u0435\u043d\u0442\u0440: '
            ])),
            (n()(), Mi(90, 0, null, null, 1, 'h3', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u041d\u0430 \u0442\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u0438 \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0438 \u0411\u0435\u043b\u0430\u0440\u0443\u0441\u044c:'
            ])),
            (n()(), Mi(92, 0, null, null, 1, 'strong', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u0427\u041f \u201c\u041c\u043e\u0431\u0438\u041b\u0410\u0411 \u0421\u0426\u201d, \u0433. \u041c\u0438\u043d\u0441\u043a'
            ])),
            (n()(), Mi(94, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), Hi(-1, null, ['\u041f\u043e\u0447\u0442\u0430: info@mobilab.by'])),
            (n()(), Mi(96, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), Hi(-1, null, ['\u0421\u0430\u0439\u0442: www.mobilab.by'])),
            (n()(), Mi(98, 0, null, null, 23, 'strong', [], null, null, null, null, null)),
            (n()(), Mi(99, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              ' \u0426\u0435\u043d\u0442\u0440 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u044f \u044e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043b\u0438\u0446 \u0438 \u0418\u041f(\u0442\u043e\u0440\u0433\u0443\u044e\u0449\u0438\u0435 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438) \u0422\u0435\u043b\u0435\u0444\u043e\u043d: '
            ])),
            (n()(), Mi(101, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), Hi(-1, null, [' +375 (17) 362 76 84 (\u0433\u043e\u0440.) '])),
            (n()(), Hi(-1, null, [' +375 (33) 333 23 23 (\u041c\u0422\u0421) '])),
            (n()(), Mi(104, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), Hi(-1, null, [' +375 (44) 7 751 751 (Velcom) '])),
            (n()(), Mi(106, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              ' \u0410\u0434\u0440\u0435\u0441: \u041c\u0438\u043d\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d \u041d\u043e\u0432\u043e\u0434\u0432\u043e\u0440\u0441\u043a\u0438\u0439 \u0441/\u0441 33/1-8, \u0440\u0430\u0439\u043e\u043d \u0434. \u0411\u043e\u043b\u044c\u0448\u043e\u0435 \u0421\u0442\u0438\u043a\u043b\u0435\u0432\u043e '
            ])),
            (n()(), Mi(108, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              ' \u0412\u0440\u0435\u043c\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 9 \u0434\u043e 18.30 \u043f\u043e \u043c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u043e\u043c\u0443 \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0432 \u0440\u0430\u0431\u043e\u0447\u0438\u0435 \u0434\u043d\u0438 '
            ])),
            (n()(), Mi(110, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              ' \u0426\u0435\u043d\u0442\u0440 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u044f \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043b\u0438\u0446(\u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u0438) '
            ])),
            (n()(), Mi(112, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), Hi(-1, null, [' \u0422\u0435\u043b\u0435\u0444\u043e\u043d: '])),
            (n()(), Mi(114, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), Hi(-1, null, [' +375 (29) 272 22 21 (\u041c\u0422\u0421) '])),
            (n()(), Mi(116, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), Hi(-1, null, [' +375 (29) 136 66 69 (Velcom) '])),
            (n()(), Mi(118, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              ' \u0410\u0434\u0440\u0435\u0441: \u043f\u0440. \u041d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438, \u0434. 46 \u0411, \u043f\u043e\u043c. 1-\u041d '
            ])),
            (n()(), Mi(120, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              ' \u0412\u0440\u0435\u043c\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 10 \u0434\u043e 19 \u043f\u043e \u043c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u043e\u043c\u0443 \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0432 \u0440\u0430\u0431\u043e\u0447\u0438\u0435 \u0434\u043d\u0438 '
            ]))
          ],
          null,
          null
        );
      }
      var zf = El(
          'app-page-support',
          Lf,
          function(n) {
            return Gi(
              0,
              [
                (n()(), Mi(0, 0, null, null, 1, 'app-page-support', [], null, null, null, Ff, Uf)),
                Yl(1, 114688, null, 0, Lf, [], null, null)
              ],
              function(n, e) {
                n(e, 1, 0);
              },
              null
            );
          },
          {},
          {},
          []
        ),
        Hf = (function() {
          function n() {
            _classCallCheck(this, n);
          }
          return _createClass(n, [{ key: 'ngOnInit', value: function() {} }]), n;
        })(),
        qf = Ht({
          encapsulation: 0,
          styles: [
            [
              '*[_ngcontent-%COMP%]{box-sizing:border-box}.section[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto 20px}.title-wrapper[_ngcontent-%COMP%]{position:relative}.title-wrapper[_ngcontent-%COMP%]:after{content:"";background:#dcdcdc;position:absolute;left:0;top:50%;margin-top:-.5px;display:block;width:100%;height:1px;z-index:-1}.text[_ngcontent-%COMP%]{background:#fff;margin:15px 20px;padding:0 10px;display:inline-block;text-transform:uppercase;font-family:Arial,sans-serif;color:#494940}img[_ngcontent-%COMP%]{max-width:230px;width:100%}.catalog_list[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,auto);grid-gap:10px;padding:0 10px}@media (max-width:1200px){.catalog_list[_ngcontent-%COMP%]{grid-template-columns:repeat(3,auto)}}@media (max-width:800px){.catalog_list[_ngcontent-%COMP%]{grid-template-columns:repeat(2,auto)}}@media (max-width:560px){.catalog_list[_ngcontent-%COMP%]{grid-template-columns:repeat(1,auto);margin:0 auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}}.catalog_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{display:grid;padding:10px;background-color:#fafafa;border:1px solid #e0e0e0;box-shadow:inset 0 1px 1px #fff;border-radius:5px;-webkit-transition:.5s;transition:.5s}.catalog_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover{border:1px solid #ff4800;-webkit-transform:scale(1.03);transform:scale(1.03)}.catalog_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{display:grid;justify-items:center}.catalog_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{align-self:end;justify-self:center}.catalog_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{align-self:center}'
            ]
          ],
          data: {}
        });
      function Bf(n) {
        return Gi(
          0,
          [
            (n()(),
            Mi(
              0,
              0,
              null,
              null,
              170,
              'section',
              [['class', 'section']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              1,
              0,
              null,
              null,
              3,
              'div',
              [['class', 'title-wrapper']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(2, 0, null, null, 2, 'h2', [['class', 'title']], null, null, null, null, null)),
            (n()(),
            Mi(3, 0, null, null, 1, 'span', [['class', 'text']], null, null, null, null, null)),
            (n()(), Hi(-1, null, ['\u041a\u043b\u0438\u0435\u043d\u0442\u044b'])),
            (n()(),
            Mi(
              5,
              0,
              null,
              null,
              165,
              'ul',
              [['class', 'catalog_list']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(6, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
            Mi(
              7,
              0,
              null,
              null,
              3,
              'a',
              [
                ['class', 'link'],
                ['href', '']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              8,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/customers/001.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(9, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), Hi(-1, null, ['WebStudio MoonWay'])),
            (n()(),
            Mi(11, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
            Mi(
              12,
              0,
              null,
              null,
              3,
              'a',
              [
                ['class', 'link'],
                ['href', '']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              13,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/customers/002.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(14, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u0422\u0438\u043f\u043e\u0433\u0440\u0430\u0444\u0438\u044f "\u0423\u0441\u043b\u0443\u0433\u0438"'
            ])),
            (n()(),
            Mi(16, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
            Mi(
              17,
              0,
              null,
              null,
              3,
              'a',
              [
                ['class', 'link'],
                ['href', '']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              18,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/customers/003.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(19, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), Hi(-1, null, ['ColoritPak'])),
            (n()(),
            Mi(21, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
            Mi(
              22,
              0,
              null,
              null,
              3,
              'a',
              [
                ['class', 'link'],
                ['href', '']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              23,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/customers/004.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(24, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), Hi(-1, null, ['Mercedes-Benz'])),
            (n()(),
            Mi(26, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
            Mi(
              27,
              0,
              null,
              null,
              3,
              'a',
              [
                ['class', 'link'],
                ['href', '']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              28,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/customers/005.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(29, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), Hi(-1, null, ['Natusana'])),
            (n()(),
            Mi(31, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
            Mi(
              32,
              0,
              null,
              null,
              3,
              'a',
              [
                ['class', 'link'],
                ['href', '']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              33,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/customers/006.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(34, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u0422\u0426 "\u041d\u0430 \u0413\u043e\u043b\u043e\u0434\u0435\u0434\u0430"'
            ])),
            (n()(),
            Mi(36, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
            Mi(
              37,
              0,
              null,
              null,
              3,
              'a',
              [
                ['class', 'link'],
                ['href', '']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              38,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/customers/007.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(39, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u041a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u0438\u0432\u0421\u0442\u0440\u043e\u0439'
            ])),
            (n()(),
            Mi(41, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
            Mi(
              42,
              0,
              null,
              null,
              3,
              'a',
              [
                ['class', 'link'],
                ['href', '']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              43,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/customers/008.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(44, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, ['\u041e\u0442\u0435\u043b\u044c "\u041c\u0438\u043d\u0441\u043a"'])),
            (n()(),
            Mi(46, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
            Mi(
              47,
              0,
              null,
              null,
              3,
              'a',
              [
                ['class', 'link'],
                ['href', '']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              48,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/customers/009.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(49, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), Hi(-1, null, ['Natusana'])),
            (n()(),
            Mi(51, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
            Mi(
              52,
              0,
              null,
              null,
              3,
              'a',
              [
                ['class', 'link'],
                ['href', '']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              53,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/customers/010.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(54, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u0422\u0426 "\u041d\u0430 \u0413\u043e\u043b\u043e\u0434\u0435\u0434\u0430"'
            ])),
            (n()(),
            Mi(56, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
            Mi(
              57,
              0,
              null,
              null,
              3,
              'a',
              [
                ['class', 'link'],
                ['href', '']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              58,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/customers/011.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(59, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u041a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u0438\u0432\u0421\u0442\u0440\u043e\u0439'
            ])),
            (n()(),
            Mi(61, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
            Mi(
              62,
              0,
              null,
              null,
              3,
              'a',
              [
                ['class', 'link'],
                ['href', '']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              63,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/customers/012.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(64, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, ['\u041e\u0442\u0435\u043b\u044c "\u041c\u0438\u043d\u0441\u043a"'])),
            (n()(),
            Mi(66, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
            Mi(
              67,
              0,
              null,
              null,
              3,
              'a',
              [
                ['class', 'link'],
                ['href', '']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              68,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/customers/013.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(69, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, ['\u0410\u0442\u043b\u0430\u0441 \u0422\u0435\u0445\u043d\u043e'])),
            (n()(),
            Mi(71, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
            Mi(
              72,
              0,
              null,
              null,
              3,
              'a',
              [
                ['class', 'link'],
                ['href', '']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              73,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/customers/014.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(74, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), Hi(-1, null, ['\u0416\u0421\u041f\u041a \u2116832'])),
            (n()(),
            Mi(76, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
            Mi(
              77,
              0,
              null,
              null,
              3,
              'a',
              [
                ['class', 'link'],
                ['href', '']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              78,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/customers/015.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(79, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u0416\u041a\u0425 \u0412\u0438\u0442\u0435\u0431\u0441\u043a\u043e\u0439 \u043e\u0431\u0441\u043b\u0430\u0441\u0442\u0438'
            ])),
            (n()(),
            Mi(81, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
            Mi(
              82,
              0,
              null,
              null,
              3,
              'a',
              [
                ['class', 'link'],
                ['href', '']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              83,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/customers/016.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(84, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), Hi(-1, null, ['\u0416\u0421\u041f\u041a \u2116648'])),
            (n()(),
            Mi(86, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
            Mi(
              87,
              0,
              null,
              null,
              3,
              'a',
              [
                ['class', 'link'],
                ['href', '']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              88,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/customers/017.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(89, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u0417\u0430\u0432\u043e\u0434 \u0432\u0438\u043d\u043e\u0433\u0440\u0430\u0434\u043d\u044b\u0445 \u0432\u0438\u043d'
            ])),
            (n()(),
            Mi(91, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
            Mi(
              92,
              0,
              null,
              null,
              3,
              'a',
              [
                ['class', 'link'],
                ['href', '']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              93,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/customers/018.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(94, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u041e\u0442\u0434\u0435\u043b \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u044f'
            ])),
            (n()(),
            Mi(96, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
            Mi(
              97,
              0,
              null,
              null,
              3,
              'a',
              [
                ['class', 'link'],
                ['href', '']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              98,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/customers/019.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(99, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u0422\u0443\u0440\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u043f\u043e\u0440\u0442\u0430\u043b'
            ])),
            (n()(),
            Mi(101, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
            Mi(
              102,
              0,
              null,
              null,
              3,
              'a',
              [
                ['class', 'link'],
                ['href', '']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              103,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/customers/020.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(104, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u041e\u041e\u041e "\u0412\u0438\u0432\u0430\u0421\u0442\u0440\u043e\u0439"'
            ])),
            (n()(),
            Mi(106, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
            Mi(
              107,
              0,
              null,
              null,
              3,
              'a',
              [
                ['class', 'link'],
                ['href', '']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              108,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/customers/021.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(109, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, ['\u0416\u0421\u041f\u041a "\u041e\u0437\u0435\u0440\u0446\u043e"'])),
            (n()(),
            Mi(111, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
            Mi(
              112,
              0,
              null,
              null,
              3,
              'a',
              [
                ['class', 'link'],
                ['href', '']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              113,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/customers/022.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(114, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), Hi(-1, null, ['"\u0411\u0435\u043b\u0422\u0430\u043c\u043e"'])),
            (n()(),
            Mi(116, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
            Mi(
              117,
              0,
              null,
              null,
              3,
              'a',
              [
                ['class', 'link'],
                ['href', '']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              118,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/customers/023.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(119, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442\u0438\u043b\u044c'
            ])),
            (n()(),
            Mi(121, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
            Mi(
              122,
              0,
              null,
              null,
              3,
              'a',
              [
                ['class', 'link'],
                ['href', '']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              123,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/customers/024.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(124, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u0436\u0435\u043d\u0441\u043a\u0438\u0445 \u0441\u0443\u043e\u043c\u043a'
            ])),
            (n()(),
            Mi(126, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
            Mi(
              127,
              0,
              null,
              null,
              3,
              'a',
              [
                ['class', 'link'],
                ['href', '']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              128,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/customers/025.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(129, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), Hi(-1, null, ['\u0416\u0421\u041f\u041a'])),
            (n()(),
            Mi(131, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
            Mi(
              132,
              0,
              null,
              null,
              3,
              'a',
              [
                ['class', 'link'],
                ['href', '']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              133,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/customers/026.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(134, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u0421\u0430\u043b\u043e\u043d \u043a\u0440\u0430\u0441\u043e\u0442\u044b'
            ])),
            (n()(),
            Mi(136, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
            Mi(
              137,
              0,
              null,
              null,
              3,
              'a',
              [
                ['class', 'link'],
                ['href', '']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              138,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/customers/027.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(139, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u0412\u0438\u0442\u0430\u043c\u0438\u043d\u043d\u044b\u0439 \u0437\u0430\u0432\u043e\u0434'
            ])),
            (n()(),
            Mi(141, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
            Mi(
              142,
              0,
              null,
              null,
              3,
              'a',
              [
                ['class', 'link'],
                ['href', '']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              143,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/customers/028.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(144, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b'
            ])),
            (n()(),
            Mi(146, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
            Mi(
              147,
              0,
              null,
              null,
              3,
              'a',
              [
                ['class', 'link'],
                ['href', '']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              148,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/customers/029.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(149, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u0414\u0435\u043f\u0430\u0440\u0442\u0430\u043c\u0435\u043d\u0442 \u041e\u0445\u0440\u0430\u043d\u044b'
            ])),
            (n()(),
            Mi(151, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
            Mi(
              152,
              0,
              null,
              null,
              3,
              'a',
              [
                ['class', 'link'],
                ['href', '']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              153,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/customers/030.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(154, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), Hi(-1, null, ['\u0422\u0414 "\u042d\u043b\u0438\u0441"'])),
            (n()(),
            Mi(156, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
            Mi(
              157,
              0,
              null,
              null,
              3,
              'a',
              [
                ['class', 'link'],
                ['href', '']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              158,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/customers/031.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(159, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), Hi(-1, null, ['\u041c\u0438\u043d\u0441\u043a\u0442\u0440\u0430\u043d\u0441'])),
            (n()(),
            Mi(161, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
            Mi(
              162,
              0,
              null,
              null,
              3,
              'a',
              [
                ['class', 'link'],
                ['href', '']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              163,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/customers/032.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(164, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), Hi(-1, null, ['\u041e\u041e\u041e "\u0411\u0435\u043b\u041b\u041f\u0417"'])),
            (n()(),
            Mi(166, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
            Mi(
              167,
              0,
              null,
              null,
              3,
              'a',
              [
                ['class', 'link'],
                ['href', '']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              168,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/customers/033.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(169, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), Hi(-1, null, ['ADANI']))
          ],
          null,
          null
        );
      }
      var Gf = (function() {
          function n() {
            _classCallCheck(this, n);
          }
          return _createClass(n, [{ key: 'ngOnInit', value: function() {} }]), n;
        })(),
        Kf = Ht({ encapsulation: 0, styles: [['']], data: {} });
      function Wf(n) {
        return Gi(
          0,
          [
            (n()(), Mi(0, 0, null, null, 1, 'app-customers', [], null, null, null, Bf, qf)),
            Yl(1, 114688, null, 0, Hf, [], null, null)
          ],
          function(n, e) {
            n(e, 1, 0);
          },
          null
        );
      }
      var Zf = El(
          'app-page-clients',
          Gf,
          function(n) {
            return Gi(
              0,
              [
                (n()(), Mi(0, 0, null, null, 1, 'app-page-clients', [], null, null, null, Wf, Kf)),
                Yl(1, 114688, null, 0, Gf, [], null, null)
              ],
              function(n, e) {
                n(e, 1, 0);
              },
              null
            );
          },
          {},
          {},
          []
        ),
        Qf = (function() {
          function n() {
            _classCallCheck(this, n);
          }
          return _createClass(n, [{ key: 'ngOnInit', value: function() {} }]), n;
        })(),
        Yf = Ht({
          encapsulation: 0,
          styles: [
            [
              '*[_ngcontent-%COMP%]{box-sizing:border-box}img[_ngcontent-%COMP%]{max-width:540px;width:100%}.article[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto 20px}.title_wrapper[_ngcontent-%COMP%]{position:relative}.title_wrapper[_ngcontent-%COMP%]:after{content:"";background:#dcdcdc;position:absolute;left:0;top:50%;margin-top:-.5px;display:block;width:100%;height:1px;z-index:-1}.text[_ngcontent-%COMP%]{background:#fff;margin:15px 20px;padding:0 10px;display:inline-block;text-transform:uppercase;font-family:Arial,sans-serif;color:#494940}.article_content[_ngcontent-%COMP%]{padding:0 10px}.article_title[_ngcontent-%COMP%], .button[_ngcontent-%COMP%]{cursor:pointer;white-space:pre;text-decoration:none;outline:0;color:#494940;-webkit-transition:.2s;transition:.2s;border:0;font-size:16px;border-radius:5px}.article_title[_ngcontent-%COMP%]:hover, .button[_ngcontent-%COMP%]:hover{color:#ff4800}.button[_ngcontent-%COMP%]{display:block;margin-left:auto}.button[_ngcontent-%COMP%]:hover{color:#fff;background:#444645}'
            ]
          ],
          data: {}
        });
      function $f(n) {
        return Gi(
          0,
          [
            (n()(), Mi(0, 0, null, null, 23, 'div', [], null, null, null, null, null)),
            (n()(), Mi(1, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              ' IP-\u0432\u0438\u0434\u0435\u043e\u043a\u0430\u043c\u0435\u0440\u0430 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0435\u0434\u0438\u043d\u044f\u044e\u0442\u0441\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043a\u0430\u043c\u0435\u0440\u044b \u0438 \u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u043e\u0433\u043e \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044f. \u0414\u0440\u0443\u0433\u0438\u043c\u0438 \u0441\u043b\u043e\u0432\u0430\u043c\u0438, \u044d\u0442\u043e \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0432\u0438\u0434\u0435\u043e\u043a\u0430\u043c\u0435\u0440\u044b \u0438 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0430. \u0412 \u0434\u0430\u043d\u043d\u044b\u0445 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430\u0445 \u043f\u043e\u0442\u043e\u043a \u0432\u0438\u0434\u0435\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0435\u0442\u0441\u044f \u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e IP-\u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0430 \u0432 \u0446\u0438\u0444\u0440\u043e\u0432\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435. \u0422\u0430\u043a \u043a\u0430\u043a \u0432 \u044d\u0442\u043e\u043c \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0441\u0435\u0442\u044c Ethernet, \u043a\u0430\u0436\u0434\u043e\u0439 \u043a\u0430\u043c\u0435\u0440\u0435 \u043f\u0440\u0438\u0441\u0432\u0430\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0430\u0434\u0440\u0435\u0441. \u0413\u043b\u0430\u0432\u043d\u043e\u0435 \u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u043e \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432 \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0442\u0438\u043f\u0430 \u2013 \u0432\u044b\u0441\u043e\u043a\u043e\u0435 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u0435\u0442\u0441\u044f \u043d\u0430 \u043c\u043e\u043d\u0438\u0442\u043e\u0440. '
            ])),
            (n()(), Mi(3, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              ' \u041d\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f\u0448\u043d\u0438\u0439 \u0434\u0435\u043d\u044c \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u0438 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432 \u0434\u043b\u044f \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u044e\u0442 \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u044f\u043c \u0431\u043e\u043b\u044c\u0448\u043e\u0435 \u0440\u0430\u0437\u043d\u043e\u043e\u0431\u0440\u0430\u0437\u0438\u0435 \u043a\u0430\u043c\u0435\u0440, \u0440\u0430\u0437\u043e\u0431\u0440\u0430\u0442\u044c\u0441\u044f \u0432 \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u044f\u0445 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043f\u043e\u0434 \u0441\u0438\u043b\u0443 \u043d\u0435 \u043a\u0430\u0436\u0434\u043e\u043c\u0443 \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0443. \u0421 \u0443\u0447\u0435\u0442\u043e\u043c \u0448\u0438\u0440\u043e\u043a\u043e\u0433\u043e \u0430\u0441\u0441\u043e\u0440\u0442\u0438\u043c\u0435\u043d\u0442\u0430 \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u0438 \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0432\u044b\u0434\u0435\u043b\u0438\u0442\u044c \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0443\u0436\u043d\u043e \u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0432 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u043f\u043e\u043a\u0443\u043f\u043e\u043a. '
            ])),
            (n()(), Mi(5, 0, null, null, 1, 'h3', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u0427\u0442\u043e \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0443\u0447\u0435\u0441\u0442\u044c \u043f\u0440\u0438 \u043f\u043e\u043a\u0443\u043f\u043a\u0435 \u043a\u0430\u043c\u0435\u0440\u044b?'
            ])),
            (n()(), Mi(7, 0, null, null, 3, 'p', [], null, null, null, null, null)),
            (n()(), Mi(8, 0, null, null, 1, 'strong', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u041f\u043e\u043a\u0443\u043f\u043a\u0430 IP-\u043a\u0430\u043c\u0435\u0440 \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f \u0432 \u041c\u0438\u043d\u0441\u043a\u0435'
            ])),
            (n()(),
            Hi(-1, null, [
              ' \u0434\u043e\u043b\u0436\u043d\u0430 \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0442\u044c\u0441\u044f \u0441 \u0443\u0447\u0435\u0442\u043e\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432: '
            ])),
            (n()(), Mi(11, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              ' \u0423\u0447\u0430\u0441\u0442\u043e\u043a, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043a\u0430\u043c\u0435\u0440\u0443 (\u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435 \u0438\u043b\u0438 \u043d\u0430\u0440\u0443\u0436\u043d\u043e\u0435 \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432 \u2013 \u043e\u0442 \u044d\u0442\u043e\u0433\u043e \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u044c \u0437\u0430\u0449\u0438\u0442\u044b \u043e\u0442 \u043c\u0435\u0445\u0430\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0438 \u043a\u043b\u0438\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043f\u043e\u0432\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u0439). \u041a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u0435\u0442\u0441\u044f \u043d\u0430 \u043c\u043e\u043d\u0438\u0442\u043e\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f. \u0417\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0437\u0430\u0434\u0430\u0447\u0438, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043d\u0430\u0446\u0435\u043b\u0435\u043d\u043e \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u043c\u043e\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e. \u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u044c \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f. '
            ])),
            (n()(), Mi(13, 0, null, null, 4, 'p', [], null, null, null, null, null)),
            (n()(), Hi(-1, null, [' \u0422\u0430\u043a\u0436\u0435 '])),
            (n()(), Mi(15, 0, null, null, 1, 'strong', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0442\u0435\u043d\u0438\u0435'
            ])),
            (n()(),
            Hi(-1, null, [
              ' \u043a\u0430\u043c\u0435\u0440 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441 \u0443\u0447\u0435\u0442\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f. \u042d\u0442\u043e \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0435 \u0444\u043e\u0440\u043c\u0430\u0442\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0436\u043d\u043e \u0440\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u0442\u044c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u043e\u0433\u043e \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044f. \u041d\u0435 \u043b\u0438\u0448\u043d\u0435\u0439 \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438 \u043a\u0430\u043c\u0435\u0440\u044b \u043d\u0430 \u043d\u0435\u0441\u0430\u043d\u043a\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0435 \u0432\u043c\u0435\u0448\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e \u043f\u043e\u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0445 \u043b\u0438\u0447\u043d\u043e\u0441\u0442\u0435\u0439. '
            ])),
            (n()(), Mi(18, 0, null, null, 3, 'p', [], null, null, null, null, null)),
            (n()(), Mi(19, 0, null, null, 1, 'strong', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f IP-\u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f'
            ])),
            (n()(),
            Hi(-1, null, [
              ' \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u0430 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u0438 \u043d\u0430\u0448\u0435\u0439 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438. \u0423 \u043d\u0430\u0441 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u0435\u043d\u043d\u044b\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430 \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0445 \u0431\u0440\u0435\u043d\u0434\u043e\u0432. '
            ])),
            (n()(),
            Mi(
              22,
              0,
              null,
              null,
              1,
              'button',
              [['class', 'button']],
              null,
              [[null, 'click']],
              function(n, e, t) {
                var l = !0,
                  r = n.component;
                return 'click' === e && (l = 0 != (r.show = !r.show) && l), l;
              },
              null,
              null
            )),
            (n()(), Hi(-1, null, ['\u0441\u043a\u0440\u044b\u0442\u044c']))
          ],
          null,
          null
        );
      }
      function Jf(n) {
        return Gi(
          0,
          [
            (n()(),
            Mi(
              0,
              0,
              null,
              null,
              12,
              'article',
              [['class', 'article']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              1,
              0,
              null,
              null,
              3,
              'div',
              [['class', 'title_wrapper']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(2, 0, null, null, 2, 'h2', [['class', 'title']], null, null, null, null, null)),
            (n()(),
            Mi(3, 0, null, null, 1, 'span', [['class', 'text']], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u041a\u0430\u043a \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u0432\u044b\u0431\u0440\u0430\u0442\u044c IP \u043a\u0430\u043c\u0435\u0440\u044b'
            ])),
            (n()(),
            Mi(
              5,
              0,
              null,
              null,
              7,
              'div',
              [['class', 'article_content']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(6, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              ' IP-\u0432\u0438\u0434\u0435\u043e\u043a\u0430\u043c\u0435\u0440\u0430 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0435\u0434\u0438\u043d\u044f\u044e\u0442\u0441\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043a\u0430\u043c\u0435\u0440\u044b \u0438 \u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u043e\u0433\u043e \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044f. '
            ])),
            (n()(),
            Mi(
              8,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/news/ip-video-1.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              9,
              0,
              null,
              null,
              1,
              'h3',
              [['class', 'article_title']],
              null,
              [[null, 'click']],
              function(n, e, t) {
                var l = !0,
                  r = n.component;
                return 'click' === e && (l = 0 != (r.show = !r.show) && l), l;
              },
              null,
              null
            )),
            (n()(),
            Hi(-1, null, [
              '\u041a\u0430\u043a \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u0432\u044b\u0431\u0440\u0430\u0442\u044c IP \u043a\u0430\u043c\u0435\u0440\u044b ...'
            ])),
            (n()(), Ti(16777216, null, null, 1, null, $f)),
            Yl(12, 16384, null, 0, ho, [Et, xt], { ngIf: [0, 'ngIf'] }, null)
          ],
          function(n, e) {
            n(e, 12, 0, e.component.show);
          },
          null
        );
      }
      var Xf = (function() {
          function n() {
            _classCallCheck(this, n);
          }
          return _createClass(n, [{ key: 'ngOnInit', value: function() {} }]), n;
        })(),
        nd = Ht({
          encapsulation: 0,
          styles: [
            [
              '*[_ngcontent-%COMP%]{box-sizing:border-box}img[_ngcontent-%COMP%]{max-width:540px;width:100%}.article[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto 20px}.title_wrapper[_ngcontent-%COMP%]{position:relative}.title_wrapper[_ngcontent-%COMP%]:after{content:"";background:#dcdcdc;position:absolute;left:0;top:50%;margin-top:-.5px;display:block;width:100%;height:1px;z-index:-1}.text[_ngcontent-%COMP%]{background:#fff;margin:15px 20px;padding:0 10px;display:inline-block;text-transform:uppercase;font-family:Arial,sans-serif;color:#494940}.article_content[_ngcontent-%COMP%]{padding:0 10px}.article_title[_ngcontent-%COMP%], .button[_ngcontent-%COMP%]{cursor:pointer;white-space:pre;text-decoration:none;outline:0;color:#494940;-webkit-transition:.2s;transition:.2s;border:0;font-size:16px;border-radius:5px}.article_title[_ngcontent-%COMP%]:hover, .button[_ngcontent-%COMP%]:hover{color:#ff4800}.button[_ngcontent-%COMP%]{display:block;margin-left:auto}.button[_ngcontent-%COMP%]:hover{color:#fff;background:#444645}'
            ]
          ],
          data: {}
        });
      function ed(n) {
        return Gi(
          0,
          [
            (n()(), Mi(0, 0, null, null, 31, 'div', [], null, null, null, null, null)),
            (n()(), Mi(1, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              ' \u0423\u0447\u0438\u0442\u044b\u0432\u0430\u044f \u0442\u043e\u0442 \u0444\u0430\u043a\u0442, \u0447\u0442\u043e \u0434\u0430\u0447\u0430 \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0436\u0438\u0432\u0430\u043d\u0438\u044f, \u043f\u043e\u0434\u0431\u043e\u0440 \u0438 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0442\u0435\u043d\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0447\u0435\u043d\u044c \u0432\u0430\u0436\u043d\u043e\u0439 \u0437\u0430\u0434\u0430\u0447\u0435\u0439 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0430 \u0437\u0430\u0433\u043e\u0440\u043e\u0434\u043d\u043e\u0433\u043e \u0434\u043e\u043c\u0430. \u0427\u0430\u0449\u0435 \u0432\u0441\u0435\u0433\u043e \u043f\u043e\u0434\u0431\u0438\u0440\u0430\u0435\u0442\u0441\u044f \u0442\u043e\u0442 \u0432\u0430\u0440\u0438\u0430\u043d\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043f\u0440\u043e\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u0438 \u043f\u043e \u043f\u0440\u0438\u0435\u0437\u0434\u0435 \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0430 \u043d\u0430 \u0434\u0430\u0447\u0443. \u0411\u0435\u0437\u0443\u0441\u043b\u043e\u0432\u043d\u043e, \u0442\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c \u043d\u0435 \u0443\u0434\u0430\u0435\u0442\u0441\u044f \u043e\u0442\u0440\u0435\u0430\u0433\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u0430 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044e \u0432 \u0441\u0440\u043e\u0447\u043d\u043e\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u0435, \u043e\u0434\u043d\u0430\u043a\u043e \u043d\u0435\u043f\u0440\u0430\u0432\u043e\u043c\u0435\u0440\u043d\u044b\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043b\u044e\u0434\u0435\u0439 \u0431\u0443\u0434\u0443\u0442 \u0437\u0430\u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043a\u0430\u043c\u0435\u0440\u044b. '
            ])),
            (n()(), Mi(3, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              ' \u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0442 \u0434\u0440\u0443\u0433\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u0438\u0441\u0442\u0435\u043c, \u043f\u0440\u0435\u0434\u043f\u043e\u043b\u0430\u0433\u0430\u044e\u0449\u0438\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043c\u0433\u043d\u043e\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u0440\u0435\u0430\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043d\u0430 \u0432\u043e\u0437\u043d\u0438\u043a\u0430\u044e\u0449\u0438\u0435 \u043d\u0435\u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u044b\u0435 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438. \u0412 \u0434\u0430\u043d\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0441\u0440\u043e\u0447\u043d\u043e\u0441\u0442\u044c \u0440\u0435\u0430\u043a\u0446\u0438\u0438 \u0445\u043e\u0437\u044f\u0438\u043d\u0430 \u0434\u0430\u0447\u0438 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u0432\u0438\u0441\u0435\u0442\u044c \u0438\u0441\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u0434\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u0434\u043e \u0437\u0430\u0433\u043e\u0440\u043e\u0434\u043d\u043e\u0433\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0438 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u043f\u0440\u0438\u0431\u044b\u0442\u044c \u043d\u0430 \u043c\u0435\u0441\u0442\u043e \u0432 \u043b\u044e\u0431\u043e\u0435 \u0432\u0440\u0435\u043c\u044f. '
            ])),
            (n()(), Mi(5, 0, null, null, 1, 'h3', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u041d\u0430 \u0447\u0442\u043e \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u044c \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435 \u043f\u0440\u0438 \u0432\u044b\u0431\u043e\u0440\u0435 \u043a\u0430\u043c\u0435\u0440?'
            ])),
            (n()(), Mi(7, 0, null, null, 4, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              ' \u041f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u043f\u043e\u0434\u043e\u0431\u0440\u0430\u0442\u044c '
            ])),
            (n()(), Mi(9, 0, null, null, 1, 'strong', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u0438 \u0432\u0438\u0434\u0435\u043e\u043a\u0430\u043c\u0435\u0440\u044b'
            ])),
            (n()(),
            Hi(-1, null, [
              ' \u0434\u043b\u044f \u0434\u0430\u0447\u0438 \u043b\u0443\u0447\u0448\u0435 \u0432\u0441\u0435\u0433\u043e \u043e\u0442\u0434\u0430\u0432\u0430\u0442\u044c \u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0442\u0435\u043d\u0438\u0435 \u0433\u043e\u0442\u043e\u0432\u044b\u043c \u0440\u0435\u0448\u0435\u043d\u0438\u044f\u043c, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0442\u043b\u0438\u0447\u0430\u044e\u0442\u0441\u044f \u043f\u0440\u043e\u0441\u0442\u043e\u0442\u043e\u0439 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0438 \u0434\u0435\u043c\u043e\u043a\u0440\u0430\u0442\u0438\u0447\u043d\u043e\u0439 \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c\u044e. '
            ])),
            (n()(), Mi(12, 0, null, null, 3, 'p', [], null, null, null, null, null)),
            (n()(), Mi(13, 0, null, null, 1, 'strong', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u0412\u044b\u0431\u043e\u0440 \u0441\u0438\u0441\u0442\u0435\u043c \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0434\u0430\u0447\u0438'
            ])),
            (n()(),
            Hi(-1, null, [
              ' \u043a\u0440\u0430\u0439\u043d\u0435 \u0432\u0430\u0436\u043d\u043e \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0438\u0442\u044c \u0441 \u0443\u0447\u0435\u0442\u043e\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a: '
            ])),
            (n()(), Mi(16, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              ' - \u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u0430\u043d\u0442\u0438\u0432\u0430\u043d\u0434\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u043e\u043a\u0440\u044b\u0442\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0434\u0435\u043b\u0430\u0435\u0442 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u0443\u0441\u0442\u043e\u0439\u0447\u0438\u0432\u044b\u043c \u043a \u0432\u043d\u0435\u0448\u043d\u0438\u043c \u043f\u043e\u0432\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u044f\u043c; '
            ])),
            (n()(), Mi(18, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '- \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e, \u043f\u0440\u0435\u0434\u043e\u0442\u0432\u0440\u0430\u0449\u0430\u044e\u0449\u0435\u0435 \u0432\u043b\u0438\u044f\u043d\u0438\u0435 \u0431\u043b\u0438\u043a\u043e\u0432 \u043e\u0442 \u0441\u043e\u043b\u043d\u0446\u0430 \u043d\u0430 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f;'
            ])),
            (n()(), Mi(20, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '- \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0437\u0430\u043f\u0438\u0441\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0432 \u043d\u043e\u0447\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0441\u0443\u0442\u043e\u043a;'
            ])),
            (n()(), Mi(22, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              ' - \u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0433\u043e \u0443\u0433\u043b\u0430 \u043e\u0431\u0437\u043e\u0440\u0430 \u043a\u0430\u043c\u0435\u0440\u044b \u0438 \u043f\u043e\u0432\u043e\u0440\u043e\u0442\u043e\u0432 (\u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u0439 \u0437\u0430\u0434\u0430\u0447\u0438 \u0438 \u043f\u043b\u043e\u0449\u0430\u0434\u0438, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043e\u0445\u0432\u0430\u0442\u0438\u0442\u044c \u043f\u0440\u0438 \u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0438). '
            ])),
            (n()(), Mi(24, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              ' \u041a\u0440\u043e\u043c\u0435 \u0442\u043e\u0433\u043e, \u043f\u0440\u0438 \u043f\u043e\u043a\u0443\u043f\u043a\u0435 \u0442\u0430\u043a\u0438\u0445 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432 \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0431\u0443\u0434\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u0434\u043b\u044f \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430. \u0417\u0430 \u044d\u0442\u043e \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f (\u0430\u043d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0435 \u043b\u0438\u0431\u043e \u0446\u0438\u0444\u0440\u043e\u0432\u044b\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u043a\u0430\u043c\u0435\u0440). '
            ])),
            (n()(), Mi(26, 0, null, null, 3, 'p', [], null, null, null, null, null)),
            (n()(), Mi(27, 0, null, null, 1, 'strong', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u041f\u0440\u043e\u0434\u0430\u0436\u0430 \u043a\u0430\u043c\u0435\u0440 \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f \u0432 \u041c\u0438\u043d\u0441\u043a\u0435'
            ])),
            (n()(),
            Hi(-1, null, [
              ' \u2013 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0435 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u043d\u0430\u0448\u0435\u0439 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438. \u0423 \u043d\u0430\u0441 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u044b \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u0441\u0438\u0441\u0442\u0435\u043c, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u043f\u043e\u0442\u0440\u0435\u0431\u043d\u043e\u0441\u0442\u044f\u043c \u0432\u0441\u0435\u0445 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0439 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432. '
            ])),
            (n()(),
            Mi(
              30,
              0,
              null,
              null,
              1,
              'button',
              [['class', 'button']],
              null,
              [[null, 'click']],
              function(n, e, t) {
                var l = !0,
                  r = n.component;
                return 'click' === e && (l = 0 != (r.show = !r.show) && l), l;
              },
              null,
              null
            )),
            (n()(), Hi(-1, null, ['\u0441\u043a\u0440\u044b\u0442\u044c']))
          ],
          null,
          null
        );
      }
      function td(n) {
        return Gi(
          0,
          [
            (n()(),
            Mi(
              0,
              0,
              null,
              null,
              12,
              'article',
              [['class', 'article']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              1,
              0,
              null,
              null,
              3,
              'div',
              [['class', 'title_wrapper']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(2, 0, null, null, 2, 'h2', [['class', 'title']], null, null, null, null, null)),
            (n()(),
            Mi(3, 0, null, null, 1, 'span', [['class', 'text']], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u041a\u0430\u043a \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0434\u0430\u0447\u0438'
            ])),
            (n()(),
            Mi(
              5,
              0,
              null,
              null,
              7,
              'div',
              [['class', 'article_content']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(6, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              ' \u0423\u0447\u0438\u0442\u044b\u0432\u0430\u044f \u0442\u043e\u0442 \u0444\u0430\u043a\u0442, \u0447\u0442\u043e \u0434\u0430\u0447\u0430 \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0436\u0438\u0432\u0430\u043d\u0438\u044f, \u043f\u043e\u0434\u0431\u043e\u0440 \u0438 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0442\u0435\u043d\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0447\u0435\u043d\u044c \u0432\u0430\u0436\u043d\u043e\u0439 \u0437\u0430\u0434\u0430\u0447\u0435\u0439 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0430 \u0437\u0430\u0433\u043e\u0440\u043e\u0434\u043d\u043e\u0433\u043e \u0434\u043e\u043c\u0430. '
            ])),
            (n()(),
            Mi(
              8,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/news/Screenshot_1.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              9,
              0,
              null,
              null,
              1,
              'h3',
              [['class', 'article_title']],
              null,
              [[null, 'click']],
              function(n, e, t) {
                var l = !0,
                  r = n.component;
                return 'click' === e && (l = 0 != (r.show = !r.show) && l), l;
              },
              null,
              null
            )),
            (n()(),
            Hi(-1, null, [
              ' \u041a\u0430\u043a \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0434\u0430\u0447\u0438 ... '
            ])),
            (n()(), Ti(16777216, null, null, 1, null, ed)),
            Yl(12, 16384, null, 0, ho, [Et, xt], { ngIf: [0, 'ngIf'] }, null)
          ],
          function(n, e) {
            n(e, 12, 0, e.component.show);
          },
          null
        );
      }
      var ld = (function() {
          function n() {
            _classCallCheck(this, n);
          }
          return _createClass(n, [{ key: 'ngOnInit', value: function() {} }]), n;
        })(),
        rd = Ht({ encapsulation: 0, styles: [['']], data: {} });
      function id(n) {
        return Gi(
          0,
          [
            (n()(),
            Mi(
              0,
              0,
              null,
              null,
              1,
              'app-news-how-to-choose-the-right-ip-camera',
              [],
              null,
              null,
              null,
              Jf,
              Yf
            )),
            Yl(1, 114688, null, 0, Qf, [], null, null),
            (n()(),
            Mi(
              2,
              0,
              null,
              null,
              1,
              'app-news-how-to-choose-CCTV-system-for-cottages',
              [],
              null,
              null,
              null,
              td,
              nd
            )),
            Yl(3, 114688, null, 0, Xf, [], null, null)
          ],
          function(n, e) {
            n(e, 1, 0), n(e, 3, 0);
          },
          null
        );
      }
      var ud = El(
          'app-page-articles',
          ld,
          function(n) {
            return Gi(
              0,
              [
                (n()(), Mi(0, 0, null, null, 1, 'app-page-articles', [], null, null, null, id, rd)),
                Yl(1, 114688, null, 0, ld, [], null, null)
              ],
              function(n, e) {
                n(e, 1, 0);
              },
              null
            );
          },
          {},
          {},
          []
        ),
        od = (function() {
          function n() {
            _classCallCheck(this, n);
          }
          return _createClass(n, [{ key: 'ngOnInit', value: function() {} }]), n;
        })(),
        ad = Ht({ encapsulation: 0, styles: [['']], data: {} });
      function sd(n) {
        return Gi(
          0,
          [
            (n()(), Mi(0, 0, null, null, 1, 'app-brands-sm', [], null, null, null, vf, pf)),
            Yl(1, 114688, null, 0, df, [], null, null)
          ],
          function(n, e) {
            n(e, 1, 0);
          },
          null
        );
      }
      var cd,
        hd = El(
          'app-page-brands',
          od,
          function(n) {
            return Gi(
              0,
              [
                (n()(), Mi(0, 0, null, null, 1, 'app-page-brands', [], null, null, null, sd, ad)),
                Yl(1, 114688, null, 0, od, [], null, null)
              ],
              function(n, e) {
                n(e, 1, 0);
              },
              null
            );
          },
          {},
          {},
          []
        ),
        fd = (function() {
          function n() {
            _classCallCheck(this, n),
              (this.load = new _r()),
              (this.baloon = new _r()),
              (this.yaclick = new _r()),
              (this.drag = new _r()),
              (this.hint = new _r()),
              (this.mouse = new _r()),
              (this.multitouch = new _r());
          }
          return (
            _createClass(n, [
              {
                key: 'ngOnInit',
                value: function() {
                  this._logErrors();
                }
              },
              {
                key: '_logErrors',
                value: function() {
                  this.geometry ||
                    (console.error('Placemark: geometry input is required.'), (this.geometry = []));
                }
              },
              {
                key: 'initPlacemark',
                value: function(n, e) {
                  var t = new n.Placemark(this.geometry, this.properties, this.options);
                  return e.geoObjects.add(t), this.emitEvents(n, t), t;
                }
              },
              {
                key: 'emitEvents',
                value: function(n, e) {
                  var t = this;
                  this.load.emit({ ymaps: n, instance: e }),
                    e.events.add(['balloonopen', 'balloonclose'], function(l) {
                      return t.baloon.emit({
                        ymaps: n,
                        instance: e,
                        type: l.originalEvent.type,
                        event: l
                      });
                    }),
                    e.events.add(['click', 'dblclick'], function(l) {
                      return t.yaclick.emit({
                        ymaps: n,
                        instance: e,
                        type: l.originalEvent.type,
                        event: l
                      });
                    }),
                    e.events.add(['dragstart', 'dragend'], function(l) {
                      return t.drag.emit({
                        ymaps: n,
                        instance: e,
                        type: l.originalEvent.type,
                        event: l
                      });
                    }),
                    e.events.add(['hintopen', 'hintclose'], function(l) {
                      return t.hint.emit({
                        ymaps: n,
                        instance: e,
                        type: l.originalEvent.type,
                        event: l
                      });
                    }),
                    e.events.add(
                      ['mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseup'],
                      function(l) {
                        return t.mouse.emit({
                          ymaps: n,
                          instance: e,
                          type: l.originalEvent.type,
                          event: l
                        });
                      }
                    ),
                    e.events.add(['multitouchstart', 'multitouchmove', 'multitouchend'], function(
                      l
                    ) {
                      return t.multitouch.emit({
                        ymaps: n,
                        instance: e,
                        type: l.originalEvent.type,
                        event: l
                      });
                    });
                }
              }
            ]),
            n
          );
        })(),
        dd =
          (((cd = (function() {
            function n(e, t) {
              _classCallCheck(this, n), (this.document = t), (this._apiKey = e);
            }
            return (
              _createClass(n, [
                {
                  key: 'initScript',
                  value: function() {
                    if (!this._scriptYmaps) {
                      var n = this.document.createElement('script');
                      (n.src = 'https://api-maps.yandex.ru/2.1/?apikey='.concat(
                        this._apiKey,
                        '&lang=ru_RU'
                      )),
                        (this._scriptYmaps = this.document.body.appendChild(n));
                    }
                    return 'ymaps' in window
                      ? Z(ymaps.ready()).pipe(
                          B(function() {
                            return ymaps;
                          })
                        )
                      : (function n(e, t, r, i) {
                          return (
                            l(r) && ((i = r), (r = void 0)),
                            i
                              ? n(e, t, r).pipe(
                                  B(function(n) {
                                    return a(n) ? i.apply(void 0, _toConsumableArray(n)) : i(n);
                                  })
                                )
                              : new w(function(n) {
                                  !(function n(e, t, l, r, i) {
                                    var u;
                                    if (
                                      (function(n) {
                                        return (
                                          n &&
                                          'function' == typeof n.addEventListener &&
                                          'function' == typeof n.removeEventListener
                                        );
                                      })(e)
                                    ) {
                                      var o = e;
                                      e.addEventListener(t, l, i),
                                        (u = function() {
                                          return o.removeEventListener(t, l, i);
                                        });
                                    } else if (
                                      (function(n) {
                                        return (
                                          n &&
                                          'function' == typeof n.on &&
                                          'function' == typeof n.off
                                        );
                                      })(e)
                                    ) {
                                      var a = e;
                                      e.on(t, l),
                                        (u = function() {
                                          return a.off(t, l);
                                        });
                                    } else if (
                                      (function(n) {
                                        return (
                                          n &&
                                          'function' == typeof n.addListener &&
                                          'function' == typeof n.removeListener
                                        );
                                      })(e)
                                    ) {
                                      var s = e;
                                      e.addListener(t, l),
                                        (u = function() {
                                          return s.removeListener(t, l);
                                        });
                                    } else {
                                      if (!e || !e.length)
                                        throw new TypeError('Invalid event target');
                                      for (var c = 0, h = e.length; c < h; c++) n(e[c], t, l, r, i);
                                    }
                                    r.add(u);
                                  })(
                                    e,
                                    t,
                                    function(e) {
                                      n.next(
                                        arguments.length > 1
                                          ? Array.prototype.slice.call(arguments)
                                          : e
                                      );
                                    },
                                    n,
                                    r
                                  );
                                })
                          );
                        })(this._scriptYmaps, 'load').pipe(
                          ra(function() {
                            return Z(ymaps.ready()).pipe(
                              B(function() {
                                return ymaps;
                              })
                            );
                          })
                        );
                  }
                }
              ]),
              n
            );
          })()).ngInjectableDef = gn({
            factory: function() {
              return new cd(Dn('API_KEY', 8), Dn(_o));
            },
            token: cd,
            providedIn: 'root'
          })),
          cd),
        pd = (function() {
          function n(e) {
            _classCallCheck(this, n),
              (this._yandexMapService = e),
              (this.zoom = 10),
              (this.state = {}),
              (this.options = {}),
              (this.load = new _r()),
              (this.action = new _r()),
              (this.baloon = new _r()),
              (this.yaclick = new _r()),
              (this.hint = new _r()),
              (this.mouse = new _r()),
              (this.multitouch = new _r());
          }
          return (
            _createClass(n, [
              {
                key: 'ngOnInit',
                value: function() {
                  var n = this;
                  this._yandexMapService
                    .initScript()
                    .pipe(Jo(1))
                    .subscribe(function(e) {
                      if (n.onlyInstance) n.load.emit({ ymaps: e });
                      else {
                        n._logErrors();
                        var t = n._createMap(e, 'f'.concat((~~(1e8 * Math.random())).toString(16)));
                        n.emitEvents(e, t), n._addObjectsOnMap(e, t);
                      }
                    });
                }
              },
              {
                key: '_logErrors',
                value: function() {
                  this.center ||
                    (console.error('Map: center input is required.'), (this.center = []));
                }
              },
              {
                key: '_createMap',
                value: function(n, e) {
                  return (
                    this.mapContainer.nativeElement.setAttribute('id', e),
                    new n.Map(
                      e,
                      Object.assign({}, this.state, { zoom: this.zoom, center: this.center }),
                      this.options
                    )
                  );
                }
              },
              {
                key: '_addObjectsOnMap',
                value: function(n, e) {
                  var t = [];
                  this.placemarks.forEach(function(l) {
                    t.push(l.initPlacemark(n, e));
                  }),
                    this.clusterer && this._createClusterer(n, e, t),
                    this.multiroutes.forEach(function(t) {
                      t.initMultiroute(n, e);
                    }),
                    this.geoObjects.forEach(function(t) {
                      t.initGeoObject(n, e);
                    }),
                    this.controls.forEach(function(t) {
                      t.initControl(n, e);
                    });
                }
              },
              {
                key: '_createClusterer',
                value: function(n, e, t) {
                  var l = new n.Clusterer(this.clusterer);
                  l.add(t), e.geoObjects.add(l);
                }
              },
              {
                key: 'emitEvents',
                value: function(n, e) {
                  var t = this;
                  this.load.emit({ ymaps: n, instance: e }),
                    e.events.add(['actionbegin', 'actionend'], function(l) {
                      return t.action.emit({
                        ymaps: n,
                        instance: e,
                        type: l.originalEvent.type,
                        event: l
                      });
                    }),
                    e.events.add(['balloonopen', 'balloonclose'], function(l) {
                      return t.baloon.emit({
                        ymaps: n,
                        instance: e,
                        type: l.originalEvent.type,
                        event: l
                      });
                    }),
                    e.events.add(['click', 'dblclick'], function(l) {
                      return t.yaclick.emit({
                        ymaps: n,
                        instance: e,
                        type: l.originalEvent.type,
                        event: l
                      });
                    }),
                    e.events.add(['hintopen', 'hintclose'], function(l) {
                      return t.hint.emit({
                        ymaps: n,
                        instance: e,
                        type: l.originalEvent.type,
                        event: l
                      });
                    }),
                    e.events.add(
                      ['mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseup'],
                      function(l) {
                        return t.mouse.emit({
                          ymaps: n,
                          instance: e,
                          type: l.originalEvent.type,
                          event: l
                        });
                      }
                    ),
                    e.events.add(['multitouchstart', 'multitouchmove', 'multitouchend'], function(
                      l
                    ) {
                      return t.multitouch.emit({
                        ymaps: n,
                        instance: e,
                        type: l.originalEvent.type,
                        event: l
                      });
                    });
                }
              }
            ]),
            n
          );
        })(),
        vd = (function() {
          function n() {
            _classCallCheck(this, n);
          }
          return (
            _createClass(n, null, [
              {
                key: 'forRoot',
                value: function(e) {
                  return { ngModule: n, providers: [{ provide: 'API_KEY', useValue: e }] };
                }
              }
            ]),
            n
          );
        })(),
        gd = Ht({
          encapsulation: 0,
          styles: ['.container[_ngcontent-%COMP%]{width:100%;height:100%}'],
          data: {}
        });
      function _d(n) {
        return Gi(
          0,
          [
            Vi(402653184, 1, { mapContainer: 0 }),
            (n()(),
            Mi(
              1,
              0,
              [
                [1, 0],
                ['container', 1]
              ],
              null,
              0,
              'div',
              [['class', 'container']],
              null,
              null,
              null,
              null,
              null
            ))
          ],
          null,
          null
        );
      }
      var md = Ht({ encapsulation: 0, styles: [''], data: {} });
      function yd(n) {
        return Gi(0, [], null, null);
      }
      var Cd = (function() {
          function n() {
            _classCallCheck(this, n),
              (this.clusterer = { preset: 'islands#invertedVioletClusterIcons', hasBaloon: !1 }),
              (this.placemarkPropertiesVSTU = {
                hintContent: '\u0412\u0413\u0422\u0423',
                balloonContent:
                  '\u0412\u0438\u0442\u0435\u0431\u0441\u043a\u0438\u0439 \u0413\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0423\u043d\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442'
              }),
              (this.placemarkOptions = {
                iconLayout: 'default#image',
                iconImageHref:
                  'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png',
                iconImageSize: [32, 32]
              });
          }
          return _createClass(n, [{ key: 'ngOnInit', value: function() {} }]), n;
        })(),
        kd = Ht({
          encapsulation: 0,
          styles: [
            [
              '*[_ngcontent-%COMP%]{box-sizing:border-box}.section[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto 20px}.title-wrapper[_ngcontent-%COMP%]{position:relative}.title-wrapper[_ngcontent-%COMP%]:after{content:"";background:#dcdcdc;position:absolute;left:0;top:50%;margin-top:-.5px;display:block;width:100%;height:1px;z-index:-1}.text[_ngcontent-%COMP%]{background:#fff;margin:15px 20px;padding:0 10px;display:inline-block;text-transform:uppercase;font-family:Arial,sans-serif;color:#494940}.map_container[_ngcontent-%COMP%]{width:100%;height:500px}'
            ]
          ],
          data: {}
        });
      function bd(n) {
        return Gi(
          0,
          [
            (n()(),
            Mi(
              0,
              0,
              null,
              null,
              18,
              'section',
              [['class', 'section']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              1,
              0,
              null,
              null,
              3,
              'div',
              [['class', 'title-wrapper']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(2, 0, null, null, 2, 'h2', [['class', 'title']], null, null, null, null, null)),
            (n()(),
            Mi(3, 0, null, null, 1, 'span', [['class', 'text']], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u0421\u0445\u0435\u043c\u0430 \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044f'
            ])),
            (n()(),
            Mi(
              5,
              0,
              null,
              null,
              13,
              'div',
              [['class', 'map_container']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(6, 0, null, null, 12, 'angular-yandex-map', [], null, null, null, _d, gd)),
            Yl(
              7,
              114688,
              null,
              4,
              pd,
              [dd],
              { center: [0, 'center'], zoom: [1, 'zoom'], clusterer: [2, 'clusterer'] },
              null
            ),
            Vi(603979776, 1, { placemarks: 1 }),
            Vi(603979776, 2, { multiroutes: 1 }),
            Vi(603979776, 3, { geoObjects: 1 }),
            Vi(603979776, 4, { controls: 1 }),
            zi(12, 2),
            (n()(),
            Mi(13, 0, null, null, 2, 'angular-yandex-placemark', [], null, null, null, yd, md)),
            Yl(
              14,
              114688,
              [[1, 4]],
              0,
              fd,
              [],
              { geometry: [0, 'geometry'], properties: [1, 'properties'], options: [2, 'options'] },
              null
            ),
            zi(15, 2),
            (n()(),
            Mi(16, 0, null, null, 2, 'angular-yandex-placemark', [], null, null, null, yd, md)),
            Yl(
              17,
              114688,
              [[1, 4]],
              0,
              fd,
              [],
              { geometry: [0, 'geometry'], options: [1, 'options'] },
              null
            ),
            zi(18, 2)
          ],
          function(n, e) {
            var t = e.component,
              l = n(e, 12, 0, 55.178214, 30.234987);
            n(e, 7, 0, l, 16, t.clusterer);
            var r = n(e, 15, 0, 55.178214, 30.234987);
            n(e, 14, 0, r, t.placemarkPropertiesVSTU, t.placemarkOptions);
            var i = n(e, 18, 0, 53.915512, 27.513412);
            n(e, 17, 0, i, t.placemarkOptions);
          },
          null
        );
      }
      var wd = (function(n) {
          function e(n, t) {
            var l;
            _classCallCheck(this, e),
              ((l = _possibleConstructorReturn(
                this,
                _getPrototypeOf(e).call(this, n)
              )).sources = t),
              (l.completed = 0),
              (l.haveValues = 0);
            var r = t.length;
            l.values = new Array(r);
            for (var i = 0; i < r; i++) {
              var u = H(_assertThisInitialized(l), t[i], null, i);
              u && l.add(u);
            }
            return l;
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: 'notifyNext',
                value: function(n, e, t, l, r) {
                  (this.values[t] = e), r._hasValue || ((r._hasValue = !0), this.haveValues++);
                }
              },
              {
                key: 'notifyComplete',
                value: function(n) {
                  var e = this.destination,
                    t = this.haveValues,
                    l = this.values,
                    r = l.length;
                  n._hasValue
                    ? (this.completed++,
                      this.completed === r && (t === r && e.next(l), e.complete()))
                    : e.complete();
                }
              }
            ]),
            e
          );
        })(q),
        xd = new Sn('NgValueAccessor'),
        Od = new Sn('CompositionEventMode'),
        Ed = (function() {
          function n(e, t, l) {
            var r;
            _classCallCheck(this, n),
              (this._renderer = e),
              (this._elementRef = t),
              (this._compositionMode = l),
              (this.onChange = function(n) {}),
              (this.onTouched = function() {}),
              (this._composing = !1),
              null == this._compositionMode &&
                (this._compositionMode =
                  ((r = pa() ? pa().getUserAgent() : ''), !/android (\d+)/.test(r.toLowerCase())));
          }
          return (
            _createClass(n, [
              {
                key: 'writeValue',
                value: function(n) {
                  this._renderer.setProperty(
                    this._elementRef.nativeElement,
                    'value',
                    null == n ? '' : n
                  );
                }
              },
              {
                key: 'registerOnChange',
                value: function(n) {
                  this.onChange = n;
                }
              },
              {
                key: 'registerOnTouched',
                value: function(n) {
                  this.onTouched = n;
                }
              },
              {
                key: 'setDisabledState',
                value: function(n) {
                  this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', n);
                }
              },
              {
                key: '_handleInput',
                value: function(n) {
                  (!this._compositionMode || (this._compositionMode && !this._composing)) &&
                    this.onChange(n);
                }
              },
              {
                key: '_compositionStart',
                value: function() {
                  this._composing = !0;
                }
              },
              {
                key: '_compositionEnd',
                value: function(n) {
                  (this._composing = !1), this._compositionMode && this.onChange(n);
                }
              }
            ]),
            n
          );
        })(),
        Pd = (function() {
          function n() {
            _classCallCheck(this, n);
          }
          return (
            _createClass(n, [
              {
                key: 'reset',
                value: function(n) {
                  this.control && this.control.reset(n);
                }
              },
              {
                key: 'hasError',
                value: function(n, e) {
                  return !!this.control && this.control.hasError(n, e);
                }
              },
              {
                key: 'getError',
                value: function(n, e) {
                  return this.control ? this.control.getError(n, e) : null;
                }
              },
              {
                key: 'value',
                get: function() {
                  return this.control ? this.control.value : null;
                }
              },
              {
                key: 'valid',
                get: function() {
                  return this.control ? this.control.valid : null;
                }
              },
              {
                key: 'invalid',
                get: function() {
                  return this.control ? this.control.invalid : null;
                }
              },
              {
                key: 'pending',
                get: function() {
                  return this.control ? this.control.pending : null;
                }
              },
              {
                key: 'disabled',
                get: function() {
                  return this.control ? this.control.disabled : null;
                }
              },
              {
                key: 'enabled',
                get: function() {
                  return this.control ? this.control.enabled : null;
                }
              },
              {
                key: 'errors',
                get: function() {
                  return this.control ? this.control.errors : null;
                }
              },
              {
                key: 'pristine',
                get: function() {
                  return this.control ? this.control.pristine : null;
                }
              },
              {
                key: 'dirty',
                get: function() {
                  return this.control ? this.control.dirty : null;
                }
              },
              {
                key: 'touched',
                get: function() {
                  return this.control ? this.control.touched : null;
                }
              },
              {
                key: 'status',
                get: function() {
                  return this.control ? this.control.status : null;
                }
              },
              {
                key: 'untouched',
                get: function() {
                  return this.control ? this.control.untouched : null;
                }
              },
              {
                key: 'statusChanges',
                get: function() {
                  return this.control ? this.control.statusChanges : null;
                }
              },
              {
                key: 'valueChanges',
                get: function() {
                  return this.control ? this.control.valueChanges : null;
                }
              },
              {
                key: 'path',
                get: function() {
                  return null;
                }
              }
            ]),
            n
          );
        })(),
        Sd = (function(n) {
          function e() {
            return (
              _classCallCheck(this, e),
              _possibleConstructorReturn(this, _getPrototypeOf(e).apply(this, arguments))
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: 'formDirective',
                get: function() {
                  return null;
                }
              },
              {
                key: 'path',
                get: function() {
                  return null;
                }
              }
            ]),
            e
          );
        })(Pd);
      function Td() {
        throw new Error('unimplemented');
      }
      var Md = (function(n) {
          function e() {
            var n;
            return (
              _classCallCheck(this, e),
              ((n = _possibleConstructorReturn(
                this,
                _getPrototypeOf(e).apply(this, arguments)
              ))._parent = null),
              (n.name = null),
              (n.valueAccessor = null),
              (n._rawValidators = []),
              (n._rawAsyncValidators = []),
              n
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: 'validator',
                get: function() {
                  return Td();
                }
              },
              {
                key: 'asyncValidator',
                get: function() {
                  return Td();
                }
              }
            ]),
            e
          );
        })(Pd),
        Ad = (function() {
          function n(e) {
            _classCallCheck(this, n), (this._cd = e);
          }
          return (
            _createClass(n, [
              {
                key: 'ngClassUntouched',
                get: function() {
                  return !!this._cd.control && this._cd.control.untouched;
                }
              },
              {
                key: 'ngClassTouched',
                get: function() {
                  return !!this._cd.control && this._cd.control.touched;
                }
              },
              {
                key: 'ngClassPristine',
                get: function() {
                  return !!this._cd.control && this._cd.control.pristine;
                }
              },
              {
                key: 'ngClassDirty',
                get: function() {
                  return !!this._cd.control && this._cd.control.dirty;
                }
              },
              {
                key: 'ngClassValid',
                get: function() {
                  return !!this._cd.control && this._cd.control.valid;
                }
              },
              {
                key: 'ngClassInvalid',
                get: function() {
                  return !!this._cd.control && this._cd.control.invalid;
                }
              },
              {
                key: 'ngClassPending',
                get: function() {
                  return !!this._cd.control && this._cd.control.pending;
                }
              }
            ]),
            n
          );
        })(),
        Rd = (function(n) {
          function e(n) {
            return (
              _classCallCheck(this, e),
              _possibleConstructorReturn(this, _getPrototypeOf(e).call(this, n))
            );
          }
          return _inherits(e, n), e;
        })(Ad),
        Id = (function(n) {
          function e(n) {
            return (
              _classCallCheck(this, e),
              _possibleConstructorReturn(this, _getPrototypeOf(e).call(this, n))
            );
          }
          return _inherits(e, n), e;
        })(Ad);
      function Nd(n) {
        return null == n || 0 === n.length;
      }
      var Vd = new Sn('NgValidators'),
        Dd = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        jd = (function() {
          function n() {
            _classCallCheck(this, n);
          }
          return (
            _createClass(n, null, [
              {
                key: 'min',
                value: function(n) {
                  return function(e) {
                    if (Nd(e.value) || Nd(n)) return null;
                    var t = parseFloat(e.value);
                    return !isNaN(t) && t < n ? { min: { min: n, actual: e.value } } : null;
                  };
                }
              },
              {
                key: 'max',
                value: function(n) {
                  return function(e) {
                    if (Nd(e.value) || Nd(n)) return null;
                    var t = parseFloat(e.value);
                    return !isNaN(t) && t > n ? { max: { max: n, actual: e.value } } : null;
                  };
                }
              },
              {
                key: 'required',
                value: function(n) {
                  return Nd(n.value) ? { required: !0 } : null;
                }
              },
              {
                key: 'requiredTrue',
                value: function(n) {
                  return !0 === n.value ? null : { required: !0 };
                }
              },
              {
                key: 'email',
                value: function(n) {
                  return Nd(n.value) ? null : Dd.test(n.value) ? null : { email: !0 };
                }
              },
              {
                key: 'minLength',
                value: function(n) {
                  return function(e) {
                    if (Nd(e.value)) return null;
                    var t = e.value ? e.value.length : 0;
                    return t < n ? { minlength: { requiredLength: n, actualLength: t } } : null;
                  };
                }
              },
              {
                key: 'maxLength',
                value: function(n) {
                  return function(e) {
                    var t = e.value ? e.value.length : 0;
                    return t > n ? { maxlength: { requiredLength: n, actualLength: t } } : null;
                  };
                }
              },
              {
                key: 'pattern',
                value: function(e) {
                  return e
                    ? ('string' == typeof e
                        ? ((l = ''),
                          '^' !== e.charAt(0) && (l += '^'),
                          (l += e),
                          '$' !== e.charAt(e.length - 1) && (l += '$'),
                          (t = new RegExp(l)))
                        : ((l = e.toString()), (t = e)),
                      function(n) {
                        if (Nd(n.value)) return null;
                        var e = n.value;
                        return t.test(e)
                          ? null
                          : { pattern: { requiredPattern: l, actualValue: e } };
                      })
                    : n.nullValidator;
                  var t, l;
                }
              },
              {
                key: 'nullValidator',
                value: function(n) {
                  return null;
                }
              },
              {
                key: 'compose',
                value: function(n) {
                  if (!n) return null;
                  var e = n.filter(Ld);
                  return 0 == e.length
                    ? null
                    : function(n) {
                        return Fd(
                          (function(n, e) {
                            return e.map(function(e) {
                              return e(n);
                            });
                          })(n, e)
                        );
                      };
                }
              },
              {
                key: 'composeAsync',
                value: function(n) {
                  if (!n) return null;
                  var e = n.filter(Ld);
                  return 0 == e.length
                    ? null
                    : function(n) {
                        return (function n() {
                          for (var e = arguments.length, t = new Array(e), l = 0; l < e; l++)
                            t[l] = arguments[l];
                          var r;
                          return (
                            'function' == typeof t[t.length - 1] && (r = t.pop()),
                            1 === t.length && a(t[0]) && (t = t[0]),
                            0 === t.length
                              ? Co
                              : r
                              ? n(t).pipe(
                                  B(function(n) {
                                    return r.apply(void 0, _toConsumableArray(n));
                                  })
                                )
                              : new w(function(n) {
                                  return new wd(n, t);
                                })
                          );
                        })(
                          (function(n, e) {
                            return e.map(function(e) {
                              return e(n);
                            });
                          })(n, e).map(Ud)
                        ).pipe(B(Fd));
                      };
                }
              }
            ]),
            n
          );
        })();
      function Ld(n) {
        return null != n;
      }
      function Ud(n) {
        var e = Ge(n) ? Z(n) : n;
        if (!Ke(e)) throw new Error('Expected validator to return Promise or Observable.');
        return e;
      }
      function Fd(n) {
        var e = n.reduce(function(n, e) {
          return null != e ? Object.assign({}, n, e) : n;
        }, {});
        return 0 === Object.keys(e).length ? null : e;
      }
      function zd(n) {
        return n.validate
          ? function(e) {
              return n.validate(e);
            }
          : n;
      }
      function Hd(n) {
        return n.validate
          ? function(e) {
              return n.validate(e);
            }
          : n;
      }
      var qd = (function() {
          function n() {
            _classCallCheck(this, n), (this._accessors = []);
          }
          return (
            _createClass(n, [
              {
                key: 'add',
                value: function(n, e) {
                  this._accessors.push([n, e]);
                }
              },
              {
                key: 'remove',
                value: function(n) {
                  for (var e = this._accessors.length - 1; e >= 0; --e)
                    if (this._accessors[e][1] === n) return void this._accessors.splice(e, 1);
                }
              },
              {
                key: 'select',
                value: function(n) {
                  var e = this;
                  this._accessors.forEach(function(t) {
                    e._isSameGroup(t, n) && t[1] !== n && t[1].fireUncheck(n.value);
                  });
                }
              },
              {
                key: '_isSameGroup',
                value: function(n, e) {
                  return (
                    !!n[0].control && n[0]._parent === e._control._parent && n[1].name === e.name
                  );
                }
              }
            ]),
            n
          );
        })(),
        Bd =
          '\n    <div [formGroup]="myGroup">\n      <input formControlName="firstName">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });',
        Gd =
          '\n    <div [formGroup]="myGroup">\n       <div formGroupName="person">\n          <input formControlName="firstName">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });',
        Kd = (function() {
          function n() {
            _classCallCheck(this, n);
          }
          return (
            _createClass(n, null, [
              {
                key: 'controlParentException',
                value: function() {
                  throw new Error(
                    "formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ".concat(
                      Bd
                    )
                  );
                }
              },
              {
                key: 'ngModelGroupException',
                value: function() {
                  throw new Error(
                    'formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a "form" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        '.concat(
                      Gd,
                      '\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        \n    <form>\n       <div ngModelGroup="person">\n          <input [(ngModel)]="person.name" name="firstName">\n       </div>\n    </form>'
                    )
                  );
                }
              },
              {
                key: 'missingFormException',
                value: function() {
                  throw new Error(
                    'formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       '.concat(
                      Bd
                    )
                  );
                }
              },
              {
                key: 'groupParentException',
                value: function() {
                  throw new Error(
                    "formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ".concat(
                      Gd
                    )
                  );
                }
              },
              {
                key: 'arrayParentException',
                value: function() {
                  throw new Error(
                    'formArrayName must be used with a parent formGroup directive.  You\'ll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        \n    <div [formGroup]="myGroup">\n      <div formArrayName="cities">\n        <div *ngFor="let city of cityArray.controls; index as i">\n          <input [formControlName]="i">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl(\'SF\')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });'
                  );
                }
              },
              {
                key: 'disabledAttrWarning',
                value: function() {
                  console.warn(
                    "\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    "
                  );
                }
              },
              {
                key: 'ngModelWarning',
                value: function(n) {
                  console.warn(
                    "\n    It looks like you're using ngModel on the same form field as "
                      .concat(
                        n,
                        '. \n    Support for using the ngModel input property and ngModelChange event with \n    reactive form directives has been deprecated in Angular v6 and will be removed \n    in Angular v7.\n    \n    For more information on this, see our API docs here:\n    https://angular.io/api/forms/'
                      )
                      .concat(
                        'formControl' === n ? 'FormControlDirective' : 'FormControlName',
                        '#use-with-ngmodel\n    '
                      )
                  );
                }
              }
            ]),
            n
          );
        })();
      function Wd(n, e) {
        return [].concat(_toConsumableArray(e.path), [n]);
      }
      function Zd(n, e) {
        n || Jd(e, 'Cannot find control with'),
          e.valueAccessor || Jd(e, 'No value accessor for form control with'),
          (n.validator = jd.compose([n.validator, e.validator])),
          (n.asyncValidator = jd.composeAsync([n.asyncValidator, e.asyncValidator])),
          e.valueAccessor.writeValue(n.value),
          (function(n, e) {
            e.valueAccessor.registerOnChange(function(t) {
              (n._pendingValue = t),
                (n._pendingChange = !0),
                (n._pendingDirty = !0),
                'change' === n.updateOn && Qd(n, e);
            });
          })(n, e),
          (function(n, e) {
            n.registerOnChange(function(n, t) {
              e.valueAccessor.writeValue(n), t && e.viewToModelUpdate(n);
            });
          })(n, e),
          (function(n, e) {
            e.valueAccessor.registerOnTouched(function() {
              (n._pendingTouched = !0),
                'blur' === n.updateOn && n._pendingChange && Qd(n, e),
                'submit' !== n.updateOn && n.markAsTouched();
            });
          })(n, e),
          e.valueAccessor.setDisabledState &&
            n.registerOnDisabledChange(function(n) {
              e.valueAccessor.setDisabledState(n);
            }),
          e._rawValidators.forEach(function(e) {
            e.registerOnValidatorChange &&
              e.registerOnValidatorChange(function() {
                return n.updateValueAndValidity();
              });
          }),
          e._rawAsyncValidators.forEach(function(e) {
            e.registerOnValidatorChange &&
              e.registerOnValidatorChange(function() {
                return n.updateValueAndValidity();
              });
          });
      }
      function Qd(n, e) {
        n._pendingDirty && n.markAsDirty(),
          n.setValue(n._pendingValue, { emitModelToViewChange: !1 }),
          e.viewToModelUpdate(n._pendingValue),
          (n._pendingChange = !1);
      }
      function Yd(n, e) {
        null == n && Jd(e, 'Cannot find control with'),
          (n.validator = jd.compose([n.validator, e.validator])),
          (n.asyncValidator = jd.composeAsync([n.asyncValidator, e.asyncValidator]));
      }
      function $d(n) {
        return Jd(n, 'There is no FormControl instance attached to form control element with');
      }
      function Jd(n, e) {
        var t;
        throw ((t =
          n.path.length > 1
            ? "path: '".concat(n.path.join(' -> '), "'")
            : n.path[0]
            ? "name: '".concat(n.path, "'")
            : 'unspecified name attribute'),
        new Error(''.concat(e, ' ').concat(t)));
      }
      function Xd(n) {
        return null != n ? jd.compose(n.map(zd)) : null;
      }
      function np(n) {
        return null != n ? jd.composeAsync(n.map(Hd)) : null;
      }
      var ep = [
        (function() {
          function n(e, t) {
            _classCallCheck(this, n),
              (this._renderer = e),
              (this._elementRef = t),
              (this.onChange = function(n) {}),
              (this.onTouched = function() {});
          }
          return (
            _createClass(n, [
              {
                key: 'writeValue',
                value: function(n) {
                  this._renderer.setProperty(this._elementRef.nativeElement, 'checked', n);
                }
              },
              {
                key: 'registerOnChange',
                value: function(n) {
                  this.onChange = n;
                }
              },
              {
                key: 'registerOnTouched',
                value: function(n) {
                  this.onTouched = n;
                }
              },
              {
                key: 'setDisabledState',
                value: function(n) {
                  this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', n);
                }
              }
            ]),
            n
          );
        })(),
        (function() {
          function n(e, t) {
            _classCallCheck(this, n),
              (this._renderer = e),
              (this._elementRef = t),
              (this.onChange = function(n) {}),
              (this.onTouched = function() {});
          }
          return (
            _createClass(n, [
              {
                key: 'writeValue',
                value: function(n) {
                  this._renderer.setProperty(
                    this._elementRef.nativeElement,
                    'value',
                    parseFloat(n)
                  );
                }
              },
              {
                key: 'registerOnChange',
                value: function(n) {
                  this.onChange = function(e) {
                    n('' == e ? null : parseFloat(e));
                  };
                }
              },
              {
                key: 'registerOnTouched',
                value: function(n) {
                  this.onTouched = n;
                }
              },
              {
                key: 'setDisabledState',
                value: function(n) {
                  this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', n);
                }
              }
            ]),
            n
          );
        })(),
        (function() {
          function n(e, t) {
            _classCallCheck(this, n),
              (this._renderer = e),
              (this._elementRef = t),
              (this.onChange = function(n) {}),
              (this.onTouched = function() {});
          }
          return (
            _createClass(n, [
              {
                key: 'writeValue',
                value: function(n) {
                  this._renderer.setProperty(
                    this._elementRef.nativeElement,
                    'value',
                    null == n ? '' : n
                  );
                }
              },
              {
                key: 'registerOnChange',
                value: function(n) {
                  this.onChange = function(e) {
                    n('' == e ? null : parseFloat(e));
                  };
                }
              },
              {
                key: 'registerOnTouched',
                value: function(n) {
                  this.onTouched = n;
                }
              },
              {
                key: 'setDisabledState',
                value: function(n) {
                  this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', n);
                }
              }
            ]),
            n
          );
        })(),
        (function() {
          function n(e, t) {
            _classCallCheck(this, n),
              (this._renderer = e),
              (this._elementRef = t),
              (this._optionMap = new Map()),
              (this._idCounter = 0),
              (this.onChange = function(n) {}),
              (this.onTouched = function() {}),
              (this._compareWith = Fe);
          }
          return (
            _createClass(n, [
              {
                key: 'writeValue',
                value: function(n) {
                  this.value = n;
                  var e = this._getOptionId(n);
                  null == e &&
                    this._renderer.setProperty(this._elementRef.nativeElement, 'selectedIndex', -1);
                  var t = (function(n, e) {
                    return null == n
                      ? ''.concat(e)
                      : (e && 'object' == typeof e && (e = 'Object'),
                        ''
                          .concat(n, ': ')
                          .concat(e)
                          .slice(0, 50));
                  })(e, n);
                  this._renderer.setProperty(this._elementRef.nativeElement, 'value', t);
                }
              },
              {
                key: 'registerOnChange',
                value: function(n) {
                  var e = this;
                  this.onChange = function(t) {
                    (e.value = e._getOptionValue(t)), n(e.value);
                  };
                }
              },
              {
                key: 'registerOnTouched',
                value: function(n) {
                  this.onTouched = n;
                }
              },
              {
                key: 'setDisabledState',
                value: function(n) {
                  this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', n);
                }
              },
              {
                key: '_registerOption',
                value: function() {
                  return (this._idCounter++).toString();
                }
              },
              {
                key: '_getOptionId',
                value: function(n) {
                  for (var e = 0, t = Array.from(this._optionMap.keys()); e < t.length; e++) {
                    var l = t[e];
                    if (this._compareWith(this._optionMap.get(l), n)) return l;
                  }
                  return null;
                }
              },
              {
                key: '_getOptionValue',
                value: function(n) {
                  var e = (function(n) {
                    return n.split(':')[0];
                  })(n);
                  return this._optionMap.has(e) ? this._optionMap.get(e) : n;
                }
              },
              {
                key: 'compareWith',
                set: function(n) {
                  if ('function' != typeof n)
                    throw new Error(
                      'compareWith must be a function, but received '.concat(JSON.stringify(n))
                    );
                  this._compareWith = n;
                }
              }
            ]),
            n
          );
        })(),
        (function() {
          function n(e, t) {
            _classCallCheck(this, n),
              (this._renderer = e),
              (this._elementRef = t),
              (this._optionMap = new Map()),
              (this._idCounter = 0),
              (this.onChange = function(n) {}),
              (this.onTouched = function() {}),
              (this._compareWith = Fe);
          }
          return (
            _createClass(n, [
              {
                key: 'writeValue',
                value: function(n) {
                  var e,
                    t = this;
                  if (((this.value = n), Array.isArray(n))) {
                    var l = n.map(function(n) {
                      return t._getOptionId(n);
                    });
                    e = function(n, e) {
                      n._setSelected(l.indexOf(e.toString()) > -1);
                    };
                  } else
                    e = function(n, e) {
                      n._setSelected(!1);
                    };
                  this._optionMap.forEach(e);
                }
              },
              {
                key: 'registerOnChange',
                value: function(n) {
                  var e = this;
                  this.onChange = function(t) {
                    var l = [];
                    if (t.hasOwnProperty('selectedOptions'))
                      for (var r = t.selectedOptions, i = 0; i < r.length; i++) {
                        var u = r.item(i),
                          o = e._getOptionValue(u.value);
                        l.push(o);
                      }
                    else
                      for (var a = t.options, s = 0; s < a.length; s++) {
                        var c = a.item(s);
                        if (c.selected) {
                          var h = e._getOptionValue(c.value);
                          l.push(h);
                        }
                      }
                    (e.value = l), n(l);
                  };
                }
              },
              {
                key: 'registerOnTouched',
                value: function(n) {
                  this.onTouched = n;
                }
              },
              {
                key: 'setDisabledState',
                value: function(n) {
                  this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', n);
                }
              },
              {
                key: '_registerOption',
                value: function(n) {
                  var e = (this._idCounter++).toString();
                  return this._optionMap.set(e, n), e;
                }
              },
              {
                key: '_getOptionId',
                value: function(n) {
                  for (var e = 0, t = Array.from(this._optionMap.keys()); e < t.length; e++) {
                    var l = t[e];
                    if (this._compareWith(this._optionMap.get(l)._value, n)) return l;
                  }
                  return null;
                }
              },
              {
                key: '_getOptionValue',
                value: function(n) {
                  var e = (function(n) {
                    return n.split(':')[0];
                  })(n);
                  return this._optionMap.has(e) ? this._optionMap.get(e)._value : n;
                }
              },
              {
                key: 'compareWith',
                set: function(n) {
                  if ('function' != typeof n)
                    throw new Error(
                      'compareWith must be a function, but received '.concat(JSON.stringify(n))
                    );
                  this._compareWith = n;
                }
              }
            ]),
            n
          );
        })(),
        (function() {
          function n(e, t, l, r) {
            _classCallCheck(this, n),
              (this._renderer = e),
              (this._elementRef = t),
              (this._registry = l),
              (this._injector = r),
              (this.onChange = function() {}),
              (this.onTouched = function() {});
          }
          return (
            _createClass(n, [
              {
                key: 'ngOnInit',
                value: function() {
                  (this._control = this._injector.get(Md)),
                    this._checkName(),
                    this._registry.add(this._control, this);
                }
              },
              {
                key: 'ngOnDestroy',
                value: function() {
                  this._registry.remove(this);
                }
              },
              {
                key: 'writeValue',
                value: function(n) {
                  (this._state = n === this.value),
                    this._renderer.setProperty(
                      this._elementRef.nativeElement,
                      'checked',
                      this._state
                    );
                }
              },
              {
                key: 'registerOnChange',
                value: function(n) {
                  var e = this;
                  (this._fn = n),
                    (this.onChange = function() {
                      n(e.value), e._registry.select(e);
                    });
                }
              },
              {
                key: 'fireUncheck',
                value: function(n) {
                  this.writeValue(n);
                }
              },
              {
                key: 'registerOnTouched',
                value: function(n) {
                  this.onTouched = n;
                }
              },
              {
                key: 'setDisabledState',
                value: function(n) {
                  this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', n);
                }
              },
              {
                key: '_checkName',
                value: function() {
                  this.name &&
                    this.formControlName &&
                    this.name !== this.formControlName &&
                    this._throwNameError(),
                    !this.name && this.formControlName && (this.name = this.formControlName);
                }
              },
              {
                key: '_throwNameError',
                value: function() {
                  throw new Error(
                    '\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type="radio" formControlName="food" name="food">\n    '
                  );
                }
              }
            ]),
            n
          );
        })()
      ];
      function tp(n) {
        var e = rp(n) ? n.validators : n;
        return Array.isArray(e) ? Xd(e) : e || null;
      }
      function lp(n, e) {
        var t = rp(e) ? e.asyncValidators : n;
        return Array.isArray(t) ? np(t) : t || null;
      }
      function rp(n) {
        return null != n && !Array.isArray(n) && 'object' == typeof n;
      }
      var ip = (function() {
          function n(e, t) {
            _classCallCheck(this, n),
              (this.validator = e),
              (this.asyncValidator = t),
              (this._onCollectionChange = function() {}),
              (this.pristine = !0),
              (this.touched = !1),
              (this._onDisabledChange = []);
          }
          return (
            _createClass(n, [
              {
                key: 'setValidators',
                value: function(n) {
                  this.validator = tp(n);
                }
              },
              {
                key: 'setAsyncValidators',
                value: function(n) {
                  this.asyncValidator = lp(n);
                }
              },
              {
                key: 'clearValidators',
                value: function() {
                  this.validator = null;
                }
              },
              {
                key: 'clearAsyncValidators',
                value: function() {
                  this.asyncValidator = null;
                }
              },
              {
                key: 'markAsTouched',
                value: function() {
                  var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  (this.touched = !0), this._parent && !n.onlySelf && this._parent.markAsTouched(n);
                }
              },
              {
                key: 'markAllAsTouched',
                value: function() {
                  this.markAsTouched({ onlySelf: !0 }),
                    this._forEachChild(function(n) {
                      return n.markAllAsTouched();
                    });
                }
              },
              {
                key: 'markAsUntouched',
                value: function() {
                  var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  (this.touched = !1),
                    (this._pendingTouched = !1),
                    this._forEachChild(function(n) {
                      n.markAsUntouched({ onlySelf: !0 });
                    }),
                    this._parent && !n.onlySelf && this._parent._updateTouched(n);
                }
              },
              {
                key: 'markAsDirty',
                value: function() {
                  var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  (this.pristine = !1), this._parent && !n.onlySelf && this._parent.markAsDirty(n);
                }
              },
              {
                key: 'markAsPristine',
                value: function() {
                  var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  (this.pristine = !0),
                    (this._pendingDirty = !1),
                    this._forEachChild(function(n) {
                      n.markAsPristine({ onlySelf: !0 });
                    }),
                    this._parent && !n.onlySelf && this._parent._updatePristine(n);
                }
              },
              {
                key: 'markAsPending',
                value: function() {
                  var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  (this.status = 'PENDING'),
                    !1 !== n.emitEvent && this.statusChanges.emit(this.status),
                    this._parent && !n.onlySelf && this._parent.markAsPending(n);
                }
              },
              {
                key: 'disable',
                value: function() {
                  var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = this._parentMarkedDirty(n.onlySelf);
                  (this.status = 'DISABLED'),
                    (this.errors = null),
                    this._forEachChild(function(e) {
                      e.disable(Object.assign({}, n, { onlySelf: !0 }));
                    }),
                    this._updateValue(),
                    !1 !== n.emitEvent &&
                      (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)),
                    this._updateAncestors(Object.assign({}, n, { skipPristineCheck: e })),
                    this._onDisabledChange.forEach(function(n) {
                      return n(!0);
                    });
                }
              },
              {
                key: 'enable',
                value: function() {
                  var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = this._parentMarkedDirty(n.onlySelf);
                  (this.status = 'VALID'),
                    this._forEachChild(function(e) {
                      e.enable(Object.assign({}, n, { onlySelf: !0 }));
                    }),
                    this.updateValueAndValidity({ onlySelf: !0, emitEvent: n.emitEvent }),
                    this._updateAncestors(Object.assign({}, n, { skipPristineCheck: e })),
                    this._onDisabledChange.forEach(function(n) {
                      return n(!1);
                    });
                }
              },
              {
                key: '_updateAncestors',
                value: function(n) {
                  this._parent &&
                    !n.onlySelf &&
                    (this._parent.updateValueAndValidity(n),
                    n.skipPristineCheck || this._parent._updatePristine(),
                    this._parent._updateTouched());
                }
              },
              {
                key: 'setParent',
                value: function(n) {
                  this._parent = n;
                }
              },
              {
                key: 'updateValueAndValidity',
                value: function() {
                  var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  this._setInitialStatus(),
                    this._updateValue(),
                    this.enabled &&
                      (this._cancelExistingSubscription(),
                      (this.errors = this._runValidator()),
                      (this.status = this._calculateStatus()),
                      ('VALID' !== this.status && 'PENDING' !== this.status) ||
                        this._runAsyncValidator(n.emitEvent)),
                    !1 !== n.emitEvent &&
                      (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)),
                    this._parent && !n.onlySelf && this._parent.updateValueAndValidity(n);
                }
              },
              {
                key: '_updateTreeValidity',
                value: function() {
                  var n =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : { emitEvent: !0 };
                  this._forEachChild(function(e) {
                    return e._updateTreeValidity(n);
                  }),
                    this.updateValueAndValidity({ onlySelf: !0, emitEvent: n.emitEvent });
                }
              },
              {
                key: '_setInitialStatus',
                value: function() {
                  this.status = this._allControlsDisabled() ? 'DISABLED' : 'VALID';
                }
              },
              {
                key: '_runValidator',
                value: function() {
                  return this.validator ? this.validator(this) : null;
                }
              },
              {
                key: '_runAsyncValidator',
                value: function(n) {
                  var e = this;
                  if (this.asyncValidator) {
                    this.status = 'PENDING';
                    var t = Ud(this.asyncValidator(this));
                    this._asyncValidationSubscription = t.subscribe(function(t) {
                      return e.setErrors(t, { emitEvent: n });
                    });
                  }
                }
              },
              {
                key: '_cancelExistingSubscription',
                value: function() {
                  this._asyncValidationSubscription &&
                    this._asyncValidationSubscription.unsubscribe();
                }
              },
              {
                key: 'setErrors',
                value: function(n) {
                  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  (this.errors = n), this._updateControlsErrors(!1 !== e.emitEvent);
                }
              },
              {
                key: 'get',
                value: function(n) {
                  return (function(n, e, t) {
                    return null == e
                      ? null
                      : (e instanceof Array || (e = e.split('.')),
                        e instanceof Array && 0 === e.length
                          ? null
                          : e.reduce(function(n, e) {
                              return n instanceof op
                                ? n.controls.hasOwnProperty(e)
                                  ? n.controls[e]
                                  : null
                                : (n instanceof ap && n.at(e)) || null;
                            }, n));
                  })(this, n);
                }
              },
              {
                key: 'getError',
                value: function(n, e) {
                  var t = e ? this.get(e) : this;
                  return t && t.errors ? t.errors[n] : null;
                }
              },
              {
                key: 'hasError',
                value: function(n, e) {
                  return !!this.getError(n, e);
                }
              },
              {
                key: '_updateControlsErrors',
                value: function(n) {
                  (this.status = this._calculateStatus()),
                    n && this.statusChanges.emit(this.status),
                    this._parent && this._parent._updateControlsErrors(n);
                }
              },
              {
                key: '_initObservables',
                value: function() {
                  (this.valueChanges = new _r()), (this.statusChanges = new _r());
                }
              },
              {
                key: '_calculateStatus',
                value: function() {
                  return this._allControlsDisabled()
                    ? 'DISABLED'
                    : this.errors
                    ? 'INVALID'
                    : this._anyControlsHaveStatus('PENDING')
                    ? 'PENDING'
                    : this._anyControlsHaveStatus('INVALID')
                    ? 'INVALID'
                    : 'VALID';
                }
              },
              {
                key: '_anyControlsHaveStatus',
                value: function(n) {
                  return this._anyControls(function(e) {
                    return e.status === n;
                  });
                }
              },
              {
                key: '_anyControlsDirty',
                value: function() {
                  return this._anyControls(function(n) {
                    return n.dirty;
                  });
                }
              },
              {
                key: '_anyControlsTouched',
                value: function() {
                  return this._anyControls(function(n) {
                    return n.touched;
                  });
                }
              },
              {
                key: '_updatePristine',
                value: function() {
                  var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  (this.pristine = !this._anyControlsDirty()),
                    this._parent && !n.onlySelf && this._parent._updatePristine(n);
                }
              },
              {
                key: '_updateTouched',
                value: function() {
                  var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  (this.touched = this._anyControlsTouched()),
                    this._parent && !n.onlySelf && this._parent._updateTouched(n);
                }
              },
              {
                key: '_isBoxedValue',
                value: function(n) {
                  return (
                    'object' == typeof n &&
                    null !== n &&
                    2 === Object.keys(n).length &&
                    'value' in n &&
                    'disabled' in n
                  );
                }
              },
              {
                key: '_registerOnCollectionChange',
                value: function(n) {
                  this._onCollectionChange = n;
                }
              },
              {
                key: '_setUpdateStrategy',
                value: function(n) {
                  rp(n) && null != n.updateOn && (this._updateOn = n.updateOn);
                }
              },
              {
                key: '_parentMarkedDirty',
                value: function(n) {
                  return (
                    !n && this._parent && this._parent.dirty && !this._parent._anyControlsDirty()
                  );
                }
              },
              {
                key: 'parent',
                get: function() {
                  return this._parent;
                }
              },
              {
                key: 'valid',
                get: function() {
                  return 'VALID' === this.status;
                }
              },
              {
                key: 'invalid',
                get: function() {
                  return 'INVALID' === this.status;
                }
              },
              {
                key: 'pending',
                get: function() {
                  return 'PENDING' == this.status;
                }
              },
              {
                key: 'disabled',
                get: function() {
                  return 'DISABLED' === this.status;
                }
              },
              {
                key: 'enabled',
                get: function() {
                  return 'DISABLED' !== this.status;
                }
              },
              {
                key: 'dirty',
                get: function() {
                  return !this.pristine;
                }
              },
              {
                key: 'untouched',
                get: function() {
                  return !this.touched;
                }
              },
              {
                key: 'updateOn',
                get: function() {
                  return this._updateOn
                    ? this._updateOn
                    : this.parent
                    ? this.parent.updateOn
                    : 'change';
                }
              },
              {
                key: 'root',
                get: function() {
                  for (var n = this; n._parent; ) n = n._parent;
                  return n;
                }
              }
            ]),
            n
          );
        })(),
        up = (function(n) {
          function e() {
            var n,
              t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              l = arguments.length > 1 ? arguments[1] : void 0,
              r = arguments.length > 2 ? arguments[2] : void 0;
            return (
              _classCallCheck(this, e),
              ((n = _possibleConstructorReturn(
                this,
                _getPrototypeOf(e).call(this, tp(l), lp(r, l))
              ))._onChange = []),
              n._applyFormState(t),
              n._setUpdateStrategy(l),
              n.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 }),
              n._initObservables(),
              n
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: 'setValue',
                value: function(n) {
                  var e = this,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  (this.value = this._pendingValue = n),
                    this._onChange.length &&
                      !1 !== t.emitModelToViewChange &&
                      this._onChange.forEach(function(n) {
                        return n(e.value, !1 !== t.emitViewToModelChange);
                      }),
                    this.updateValueAndValidity(t);
                }
              },
              {
                key: 'patchValue',
                value: function(n) {
                  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  this.setValue(n, e);
                }
              },
              {
                key: 'reset',
                value: function() {
                  var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  this._applyFormState(n),
                    this.markAsPristine(e),
                    this.markAsUntouched(e),
                    this.setValue(this.value, e),
                    (this._pendingChange = !1);
                }
              },
              { key: '_updateValue', value: function() {} },
              {
                key: '_anyControls',
                value: function(n) {
                  return !1;
                }
              },
              {
                key: '_allControlsDisabled',
                value: function() {
                  return this.disabled;
                }
              },
              {
                key: 'registerOnChange',
                value: function(n) {
                  this._onChange.push(n);
                }
              },
              {
                key: '_clearChangeFns',
                value: function() {
                  (this._onChange = []),
                    (this._onDisabledChange = []),
                    (this._onCollectionChange = function() {});
                }
              },
              {
                key: 'registerOnDisabledChange',
                value: function(n) {
                  this._onDisabledChange.push(n);
                }
              },
              { key: '_forEachChild', value: function(n) {} },
              {
                key: '_syncPendingControls',
                value: function() {
                  return !(
                    'submit' !== this.updateOn ||
                    (this._pendingDirty && this.markAsDirty(),
                    this._pendingTouched && this.markAsTouched(),
                    !this._pendingChange) ||
                    (this.setValue(this._pendingValue, { onlySelf: !0, emitModelToViewChange: !1 }),
                    0)
                  );
                }
              },
              {
                key: '_applyFormState',
                value: function(n) {
                  this._isBoxedValue(n)
                    ? ((this.value = this._pendingValue = n.value),
                      n.disabled
                        ? this.disable({ onlySelf: !0, emitEvent: !1 })
                        : this.enable({ onlySelf: !0, emitEvent: !1 }))
                    : (this.value = this._pendingValue = n);
                }
              }
            ]),
            e
          );
        })(ip),
        op = (function(n) {
          function e(n, t, l) {
            var r;
            return (
              _classCallCheck(this, e),
              ((r = _possibleConstructorReturn(
                this,
                _getPrototypeOf(e).call(this, tp(t), lp(l, t))
              )).controls = n),
              r._initObservables(),
              r._setUpdateStrategy(t),
              r._setUpControls(),
              r.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 }),
              r
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: 'registerControl',
                value: function(n, e) {
                  return this.controls[n]
                    ? this.controls[n]
                    : ((this.controls[n] = e),
                      e.setParent(this),
                      e._registerOnCollectionChange(this._onCollectionChange),
                      e);
                }
              },
              {
                key: 'addControl',
                value: function(n, e) {
                  this.registerControl(n, e),
                    this.updateValueAndValidity(),
                    this._onCollectionChange();
                }
              },
              {
                key: 'removeControl',
                value: function(n) {
                  this.controls[n] && this.controls[n]._registerOnCollectionChange(function() {}),
                    delete this.controls[n],
                    this.updateValueAndValidity(),
                    this._onCollectionChange();
                }
              },
              {
                key: 'setControl',
                value: function(n, e) {
                  this.controls[n] && this.controls[n]._registerOnCollectionChange(function() {}),
                    delete this.controls[n],
                    e && this.registerControl(n, e),
                    this.updateValueAndValidity(),
                    this._onCollectionChange();
                }
              },
              {
                key: 'contains',
                value: function(n) {
                  return this.controls.hasOwnProperty(n) && this.controls[n].enabled;
                }
              },
              {
                key: 'setValue',
                value: function(n) {
                  var e = this,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  this._checkAllValuesPresent(n),
                    Object.keys(n).forEach(function(l) {
                      e._throwIfControlMissing(l),
                        e.controls[l].setValue(n[l], { onlySelf: !0, emitEvent: t.emitEvent });
                    }),
                    this.updateValueAndValidity(t);
                }
              },
              {
                key: 'patchValue',
                value: function(n) {
                  var e = this,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  Object.keys(n).forEach(function(l) {
                    e.controls[l] &&
                      e.controls[l].patchValue(n[l], { onlySelf: !0, emitEvent: t.emitEvent });
                  }),
                    this.updateValueAndValidity(t);
                }
              },
              {
                key: 'reset',
                value: function() {
                  var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  this._forEachChild(function(t, l) {
                    t.reset(n[l], { onlySelf: !0, emitEvent: e.emitEvent });
                  }),
                    this._updatePristine(e),
                    this._updateTouched(e),
                    this.updateValueAndValidity(e);
                }
              },
              {
                key: 'getRawValue',
                value: function() {
                  return this._reduceChildren({}, function(n, e, t) {
                    return (n[t] = e instanceof up ? e.value : e.getRawValue()), n;
                  });
                }
              },
              {
                key: '_syncPendingControls',
                value: function() {
                  var n = this._reduceChildren(!1, function(n, e) {
                    return !!e._syncPendingControls() || n;
                  });
                  return n && this.updateValueAndValidity({ onlySelf: !0 }), n;
                }
              },
              {
                key: '_throwIfControlMissing',
                value: function(n) {
                  if (!Object.keys(this.controls).length)
                    throw new Error(
                      "\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "
                    );
                  if (!this.controls[n])
                    throw new Error('Cannot find form control with name: '.concat(n, '.'));
                }
              },
              {
                key: '_forEachChild',
                value: function(n) {
                  var e = this;
                  Object.keys(this.controls).forEach(function(t) {
                    return n(e.controls[t], t);
                  });
                }
              },
              {
                key: '_setUpControls',
                value: function() {
                  var n = this;
                  this._forEachChild(function(e) {
                    e.setParent(n), e._registerOnCollectionChange(n._onCollectionChange);
                  });
                }
              },
              {
                key: '_updateValue',
                value: function() {
                  this.value = this._reduceValue();
                }
              },
              {
                key: '_anyControls',
                value: function(n) {
                  var e = this,
                    t = !1;
                  return (
                    this._forEachChild(function(l, r) {
                      t = t || (e.contains(r) && n(l));
                    }),
                    t
                  );
                }
              },
              {
                key: '_reduceValue',
                value: function() {
                  var n = this;
                  return this._reduceChildren({}, function(e, t, l) {
                    return (t.enabled || n.disabled) && (e[l] = t.value), e;
                  });
                }
              },
              {
                key: '_reduceChildren',
                value: function(n, e) {
                  var t = n;
                  return (
                    this._forEachChild(function(n, l) {
                      t = e(t, n, l);
                    }),
                    t
                  );
                }
              },
              {
                key: '_allControlsDisabled',
                value: function() {
                  for (var n = 0, e = Object.keys(this.controls); n < e.length; n++) {
                    var t = e[n];
                    if (this.controls[t].enabled) return !1;
                  }
                  return Object.keys(this.controls).length > 0 || this.disabled;
                }
              },
              {
                key: '_checkAllValuesPresent',
                value: function(n) {
                  this._forEachChild(function(e, t) {
                    if (void 0 === n[t])
                      throw new Error(
                        "Must supply a value for form control with name: '".concat(t, "'.")
                      );
                  });
                }
              }
            ]),
            e
          );
        })(ip),
        ap = (function(n) {
          function e(n, t, l) {
            var r;
            return (
              _classCallCheck(this, e),
              ((r = _possibleConstructorReturn(
                this,
                _getPrototypeOf(e).call(this, tp(t), lp(l, t))
              )).controls = n),
              r._initObservables(),
              r._setUpdateStrategy(t),
              r._setUpControls(),
              r.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 }),
              r
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: 'at',
                value: function(n) {
                  return this.controls[n];
                }
              },
              {
                key: 'push',
                value: function(n) {
                  this.controls.push(n),
                    this._registerControl(n),
                    this.updateValueAndValidity(),
                    this._onCollectionChange();
                }
              },
              {
                key: 'insert',
                value: function(n, e) {
                  this.controls.splice(n, 0, e),
                    this._registerControl(e),
                    this.updateValueAndValidity();
                }
              },
              {
                key: 'removeAt',
                value: function(n) {
                  this.controls[n] && this.controls[n]._registerOnCollectionChange(function() {}),
                    this.controls.splice(n, 1),
                    this.updateValueAndValidity();
                }
              },
              {
                key: 'setControl',
                value: function(n, e) {
                  this.controls[n] && this.controls[n]._registerOnCollectionChange(function() {}),
                    this.controls.splice(n, 1),
                    e && (this.controls.splice(n, 0, e), this._registerControl(e)),
                    this.updateValueAndValidity(),
                    this._onCollectionChange();
                }
              },
              {
                key: 'setValue',
                value: function(n) {
                  var e = this,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  this._checkAllValuesPresent(n),
                    n.forEach(function(n, l) {
                      e._throwIfControlMissing(l),
                        e.at(l).setValue(n, { onlySelf: !0, emitEvent: t.emitEvent });
                    }),
                    this.updateValueAndValidity(t);
                }
              },
              {
                key: 'patchValue',
                value: function(n) {
                  var e = this,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  n.forEach(function(n, l) {
                    e.at(l) && e.at(l).patchValue(n, { onlySelf: !0, emitEvent: t.emitEvent });
                  }),
                    this.updateValueAndValidity(t);
                }
              },
              {
                key: 'reset',
                value: function() {
                  var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  this._forEachChild(function(t, l) {
                    t.reset(n[l], { onlySelf: !0, emitEvent: e.emitEvent });
                  }),
                    this._updatePristine(e),
                    this._updateTouched(e),
                    this.updateValueAndValidity(e);
                }
              },
              {
                key: 'getRawValue',
                value: function() {
                  return this.controls.map(function(n) {
                    return n instanceof up ? n.value : n.getRawValue();
                  });
                }
              },
              {
                key: 'clear',
                value: function() {
                  this.controls.length < 1 ||
                    (this._forEachChild(function(n) {
                      return n._registerOnCollectionChange(function() {});
                    }),
                    this.controls.splice(0),
                    this.updateValueAndValidity());
                }
              },
              {
                key: '_syncPendingControls',
                value: function() {
                  var n = this.controls.reduce(function(n, e) {
                    return !!e._syncPendingControls() || n;
                  }, !1);
                  return n && this.updateValueAndValidity({ onlySelf: !0 }), n;
                }
              },
              {
                key: '_throwIfControlMissing',
                value: function(n) {
                  if (!this.controls.length)
                    throw new Error(
                      "\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "
                    );
                  if (!this.at(n)) throw new Error('Cannot find form control at index '.concat(n));
                }
              },
              {
                key: '_forEachChild',
                value: function(n) {
                  this.controls.forEach(function(e, t) {
                    n(e, t);
                  });
                }
              },
              {
                key: '_updateValue',
                value: function() {
                  var n = this;
                  this.value = this.controls
                    .filter(function(e) {
                      return e.enabled || n.disabled;
                    })
                    .map(function(n) {
                      return n.value;
                    });
                }
              },
              {
                key: '_anyControls',
                value: function(n) {
                  return this.controls.some(function(e) {
                    return e.enabled && n(e);
                  });
                }
              },
              {
                key: '_setUpControls',
                value: function() {
                  var n = this;
                  this._forEachChild(function(e) {
                    return n._registerControl(e);
                  });
                }
              },
              {
                key: '_checkAllValuesPresent',
                value: function(n) {
                  this._forEachChild(function(e, t) {
                    if (void 0 === n[t])
                      throw new Error(
                        'Must supply a value for form control at index: '.concat(t, '.')
                      );
                  });
                }
              },
              {
                key: '_allControlsDisabled',
                value: function() {
                  var n = !0,
                    e = !1,
                    t = void 0;
                  try {
                    for (
                      var l, r = this.controls[Symbol.iterator]();
                      !(n = (l = r.next()).done);
                      n = !0
                    ) {
                      if (l.value.enabled) return !1;
                    }
                  } catch (i) {
                    (e = !0), (t = i);
                  } finally {
                    try {
                      n || null == r.return || r.return();
                    } finally {
                      if (e) throw t;
                    }
                  }
                  return this.controls.length > 0 || this.disabled;
                }
              },
              {
                key: '_registerControl',
                value: function(n) {
                  n.setParent(this), n._registerOnCollectionChange(this._onCollectionChange);
                }
              },
              {
                key: 'length',
                get: function() {
                  return this.controls.length;
                }
              }
            ]),
            e
          );
        })(ip),
        sp = new Sn('NgFormSelectorWarning'),
        cp = (function(n) {
          function e() {
            return (
              _classCallCheck(this, e),
              _possibleConstructorReturn(this, _getPrototypeOf(e).apply(this, arguments))
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: 'ngOnInit',
                value: function() {
                  this._checkParentType(), this.formDirective.addFormGroup(this);
                }
              },
              {
                key: 'ngOnDestroy',
                value: function() {
                  this.formDirective && this.formDirective.removeFormGroup(this);
                }
              },
              { key: '_checkParentType', value: function() {} },
              {
                key: 'control',
                get: function() {
                  return this.formDirective.getFormGroup(this);
                }
              },
              {
                key: 'path',
                get: function() {
                  return Wd(this.name, this._parent);
                }
              },
              {
                key: 'formDirective',
                get: function() {
                  return this._parent ? this._parent.formDirective : null;
                }
              },
              {
                key: 'validator',
                get: function() {
                  return Xd(this._validators);
                }
              },
              {
                key: 'asyncValidator',
                get: function() {
                  return np(this._asyncValidators);
                }
              }
            ]),
            e
          );
        })(Sd),
        hp = function n() {
          _classCallCheck(this, n);
        },
        fp = new Sn('NgModelWithFormControlWarning'),
        dp = (function(n) {
          function e(n, t) {
            var l;
            return (
              _classCallCheck(this, e),
              ((l = _possibleConstructorReturn(
                this,
                _getPrototypeOf(e).call(this)
              ))._validators = n),
              (l._asyncValidators = t),
              (l.submitted = !1),
              (l.directives = []),
              (l.form = null),
              (l.ngSubmit = new _r()),
              l
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: 'ngOnChanges',
                value: function(n) {
                  this._checkFormPresent(),
                    n.hasOwnProperty('form') &&
                      (this._updateValidators(),
                      this._updateDomValue(),
                      this._updateRegistrations());
                }
              },
              {
                key: 'addControl',
                value: function(n) {
                  var e = this.form.get(n.path);
                  return (
                    Zd(e, n),
                    e.updateValueAndValidity({ emitEvent: !1 }),
                    this.directives.push(n),
                    e
                  );
                }
              },
              {
                key: 'getControl',
                value: function(n) {
                  return this.form.get(n.path);
                }
              },
              {
                key: 'removeControl',
                value: function(n) {
                  var e, t, l;
                  (e = this.directives), (t = n), (l = e.indexOf(t)) > -1 && e.splice(l, 1);
                }
              },
              {
                key: 'addFormGroup',
                value: function(n) {
                  var e = this.form.get(n.path);
                  Yd(e, n), e.updateValueAndValidity({ emitEvent: !1 });
                }
              },
              { key: 'removeFormGroup', value: function(n) {} },
              {
                key: 'getFormGroup',
                value: function(n) {
                  return this.form.get(n.path);
                }
              },
              {
                key: 'addFormArray',
                value: function(n) {
                  var e = this.form.get(n.path);
                  Yd(e, n), e.updateValueAndValidity({ emitEvent: !1 });
                }
              },
              { key: 'removeFormArray', value: function(n) {} },
              {
                key: 'getFormArray',
                value: function(n) {
                  return this.form.get(n.path);
                }
              },
              {
                key: 'updateModel',
                value: function(n, e) {
                  this.form.get(n.path).setValue(e);
                }
              },
              {
                key: 'onSubmit',
                value: function(n) {
                  return (
                    (this.submitted = !0),
                    (e = this.directives),
                    this.form._syncPendingControls(),
                    e.forEach(function(n) {
                      var e = n.control;
                      'submit' === e.updateOn &&
                        e._pendingChange &&
                        (n.viewToModelUpdate(e._pendingValue), (e._pendingChange = !1));
                    }),
                    this.ngSubmit.emit(n),
                    !1
                  );
                  var e;
                }
              },
              {
                key: 'onReset',
                value: function() {
                  this.resetForm();
                }
              },
              {
                key: 'resetForm',
                value: function(n) {
                  this.form.reset(n), (this.submitted = !1);
                }
              },
              {
                key: '_updateDomValue',
                value: function() {
                  var n = this;
                  this.directives.forEach(function(e) {
                    var t = n.form.get(e.path);
                    e.control !== t &&
                      ((function(n, e) {
                        e.valueAccessor.registerOnChange(function() {
                          return $d(e);
                        }),
                          e.valueAccessor.registerOnTouched(function() {
                            return $d(e);
                          }),
                          e._rawValidators.forEach(function(n) {
                            n.registerOnValidatorChange && n.registerOnValidatorChange(null);
                          }),
                          e._rawAsyncValidators.forEach(function(n) {
                            n.registerOnValidatorChange && n.registerOnValidatorChange(null);
                          }),
                          n && n._clearChangeFns();
                      })(e.control, e),
                      t && Zd(t, e),
                      (e.control = t));
                  }),
                    this.form._updateTreeValidity({ emitEvent: !1 });
                }
              },
              {
                key: '_updateRegistrations',
                value: function() {
                  var n = this;
                  this.form._registerOnCollectionChange(function() {
                    return n._updateDomValue();
                  }),
                    this._oldForm && this._oldForm._registerOnCollectionChange(function() {}),
                    (this._oldForm = this.form);
                }
              },
              {
                key: '_updateValidators',
                value: function() {
                  var n = Xd(this._validators);
                  this.form.validator = jd.compose([this.form.validator, n]);
                  var e = np(this._asyncValidators);
                  this.form.asyncValidator = jd.composeAsync([this.form.asyncValidator, e]);
                }
              },
              {
                key: '_checkFormPresent',
                value: function() {
                  this.form || Kd.missingFormException();
                }
              },
              {
                key: 'formDirective',
                get: function() {
                  return this;
                }
              },
              {
                key: 'control',
                get: function() {
                  return this.form;
                }
              },
              {
                key: 'path',
                get: function() {
                  return [];
                }
              }
            ]),
            e
          );
        })(Sd),
        pp = (function(n) {
          function e(n, t, l) {
            var r;
            return (
              _classCallCheck(this, e),
              ((r = _possibleConstructorReturn(this, _getPrototypeOf(e).call(this)))._parent = n),
              (r._validators = t),
              (r._asyncValidators = l),
              r
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: '_checkParentType',
                value: function() {
                  gp(this._parent) && Kd.groupParentException();
                }
              }
            ]),
            e
          );
        })(cp),
        vp = (function(n) {
          function e(n, t, l) {
            var r;
            return (
              _classCallCheck(this, e),
              ((r = _possibleConstructorReturn(this, _getPrototypeOf(e).call(this)))._parent = n),
              (r._validators = t),
              (r._asyncValidators = l),
              r
            );
          }
          return (
            _inherits(e, n),
            _createClass(e, [
              {
                key: 'ngOnInit',
                value: function() {
                  this._checkParentType(), this.formDirective.addFormArray(this);
                }
              },
              {
                key: 'ngOnDestroy',
                value: function() {
                  this.formDirective && this.formDirective.removeFormArray(this);
                }
              },
              {
                key: '_checkParentType',
                value: function() {
                  gp(this._parent) && Kd.arrayParentException();
                }
              },
              {
                key: 'control',
                get: function() {
                  return this.formDirective.getFormArray(this);
                }
              },
              {
                key: 'formDirective',
                get: function() {
                  return this._parent ? this._parent.formDirective : null;
                }
              },
              {
                key: 'path',
                get: function() {
                  return Wd(this.name, this._parent);
                }
              },
              {
                key: 'validator',
                get: function() {
                  return Xd(this._validators);
                }
              },
              {
                key: 'asyncValidator',
                get: function() {
                  return np(this._asyncValidators);
                }
              }
            ]),
            e
          );
        })(Sd);
      function gp(n) {
        return !(n instanceof pp || n instanceof dp || n instanceof vp);
      }
      var _p,
        mp =
          (((_p = (function(n) {
            function e(n, t, l, r, i) {
              var u;
              return (
                _classCallCheck(this, e),
                ((u = _possibleConstructorReturn(
                  this,
                  _getPrototypeOf(e).call(this)
                ))._ngModelWarningConfig = i),
                (u._added = !1),
                (u.update = new _r()),
                (u._ngModelWarningSent = !1),
                (u._parent = n),
                (u._rawValidators = t || []),
                (u._rawAsyncValidators = l || []),
                (u.valueAccessor = (function(n, e) {
                  if (!e) return null;
                  Array.isArray(e) ||
                    Jd(n, 'Value accessor was not provided as an array for form control with');
                  var t = void 0,
                    l = void 0,
                    r = void 0;
                  return (
                    e.forEach(function(e) {
                      var i;
                      e.constructor === Ed
                        ? (t = e)
                        : ((i = e),
                          ep.some(function(n) {
                            return i.constructor === n;
                          })
                            ? (l &&
                                Jd(
                                  n,
                                  'More than one built-in value accessor matches form control with'
                                ),
                              (l = e))
                            : (r &&
                                Jd(
                                  n,
                                  'More than one custom value accessor matches form control with'
                                ),
                              (r = e)));
                    }),
                    r || l || t || (Jd(n, 'No valid value accessor for form control with'), null)
                  );
                })(_assertThisInitialized(u), r)),
                u
              );
            }
            return (
              _inherits(e, n),
              _createClass(e, [
                {
                  key: 'ngOnChanges',
                  value: function(n) {
                    var t, l;
                    this._added || this._setUpControl(),
                      (function(n, e) {
                        if (!n.hasOwnProperty('model')) return !1;
                        var t = n.model;
                        return !!t.isFirstChange() || !Fe(e, t.currentValue);
                      })(n, this.viewModel) &&
                        ((t = e),
                        (l = this._ngModelWarningConfig),
                        $n() &&
                          'never' !== l &&
                          ((((null !== l && 'once' !== l) || t._ngModelWarningSentOnce) &&
                            ('always' !== l || this._ngModelWarningSent)) ||
                            (Kd.ngModelWarning('formControlName'),
                            (t._ngModelWarningSentOnce = !0),
                            (this._ngModelWarningSent = !0))),
                        (this.viewModel = this.model),
                        this.formDirective.updateModel(this, this.model));
                  }
                },
                {
                  key: 'ngOnDestroy',
                  value: function() {
                    this.formDirective && this.formDirective.removeControl(this);
                  }
                },
                {
                  key: 'viewToModelUpdate',
                  value: function(n) {
                    (this.viewModel = n), this.update.emit(n);
                  }
                },
                {
                  key: '_checkParentType',
                  value: function() {
                    !(this._parent instanceof pp) && this._parent instanceof cp
                      ? Kd.ngModelGroupException()
                      : this._parent instanceof pp ||
                        this._parent instanceof dp ||
                        this._parent instanceof vp ||
                        Kd.controlParentException();
                  }
                },
                {
                  key: '_setUpControl',
                  value: function() {
                    this._checkParentType(),
                      (this.control = this.formDirective.addControl(this)),
                      this.control.disabled &&
                        this.valueAccessor.setDisabledState &&
                        this.valueAccessor.setDisabledState(!0),
                      (this._added = !0);
                  }
                },
                {
                  key: 'isDisabled',
                  set: function(n) {
                    Kd.disabledAttrWarning();
                  }
                },
                {
                  key: 'path',
                  get: function() {
                    return Wd(this.name, this._parent);
                  }
                },
                {
                  key: 'formDirective',
                  get: function() {
                    return this._parent ? this._parent.formDirective : null;
                  }
                },
                {
                  key: 'validator',
                  get: function() {
                    return Xd(this._rawValidators);
                  }
                },
                {
                  key: 'asyncValidator',
                  get: function() {
                    return np(this._rawAsyncValidators);
                  }
                }
              ]),
              e
            );
          })(Md))._ngModelWarningSentOnce = !1),
          _p),
        yp = (function() {
          function n() {
            _classCallCheck(this, n);
          }
          return (
            _createClass(n, [
              {
                key: 'validate',
                value: function(n) {
                  return this.required ? jd.required(n) : null;
                }
              },
              {
                key: 'registerOnValidatorChange',
                value: function(n) {
                  this._onChange = n;
                }
              },
              {
                key: 'required',
                get: function() {
                  return this._required;
                },
                set: function(n) {
                  (this._required = null != n && !1 !== n && 'false' !== ''.concat(n)),
                    this._onChange && this._onChange();
                }
              }
            ]),
            n
          );
        })(),
        Cp = function n() {
          _classCallCheck(this, n);
        },
        kp = (function() {
          function n() {
            _classCallCheck(this, n);
          }
          return (
            _createClass(n, [
              {
                key: 'group',
                value: function(n) {
                  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    t = this._reduceControls(n),
                    l = null,
                    r = null,
                    i = void 0;
                  return (
                    null != e &&
                      ((function(n) {
                        return (
                          void 0 !== n.asyncValidators ||
                          void 0 !== n.validators ||
                          void 0 !== n.updateOn
                        );
                      })(e)
                        ? ((l = null != e.validators ? e.validators : null),
                          (r = null != e.asyncValidators ? e.asyncValidators : null),
                          (i = null != e.updateOn ? e.updateOn : void 0))
                        : ((l = null != e.validator ? e.validator : null),
                          (r = null != e.asyncValidator ? e.asyncValidator : null))),
                    new op(t, { asyncValidators: r, updateOn: i, validators: l })
                  );
                }
              },
              {
                key: 'control',
                value: function(n, e, t) {
                  return new up(n, e, t);
                }
              },
              {
                key: 'array',
                value: function(n, e, t) {
                  var l = this,
                    r = n.map(function(n) {
                      return l._createControl(n);
                    });
                  return new ap(r, e, t);
                }
              },
              {
                key: '_reduceControls',
                value: function(n) {
                  var e = this,
                    t = {};
                  return (
                    Object.keys(n).forEach(function(l) {
                      t[l] = e._createControl(n[l]);
                    }),
                    t
                  );
                }
              },
              {
                key: '_createControl',
                value: function(n) {
                  return n instanceof up || n instanceof op || n instanceof ap
                    ? n
                    : Array.isArray(n)
                    ? this.control(n[0], n.length > 1 ? n[1] : null, n.length > 2 ? n[2] : null)
                    : this.control(n);
                }
              }
            ]),
            n
          );
        })(),
        bp = (function() {
          function n() {
            _classCallCheck(this, n);
          }
          return (
            _createClass(n, null, [
              {
                key: 'withConfig',
                value: function(e) {
                  return {
                    ngModule: n,
                    providers: [{ provide: sp, useValue: e.warnOnDeprecatedNgFormSelector }]
                  };
                }
              }
            ]),
            n
          );
        })(),
        wp = (function() {
          function n() {
            _classCallCheck(this, n);
          }
          return (
            _createClass(n, null, [
              {
                key: 'withConfig',
                value: function(e) {
                  return {
                    ngModule: n,
                    providers: [{ provide: fp, useValue: e.warnOnNgModelWithFormControl }]
                  };
                }
              }
            ]),
            n
          );
        })(),
        xp = (function() {
          function n() {
            _classCallCheck(this, n);
          }
          return (
            _createClass(n, [
              {
                key: 'ngOnInit',
                value: function() {
                  this.createForm();
                }
              },
              {
                key: 'createForm',
                value: function() {
                  this.formQuestion = new op({
                    formName: new up(null),
                    formEmail: new up(null),
                    formTopic: new up(null),
                    formMessage: new up(null)
                  });
                }
              }
            ]),
            n
          );
        })(),
        Op = Ht({
          encapsulation: 0,
          styles: [
            [
              '.section[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto 20px}.title-wrapper[_ngcontent-%COMP%]{position:relative}.title-wrapper[_ngcontent-%COMP%]:after{content:"";background:#dcdcdc;position:absolute;left:0;top:50%;margin-top:-.5px;display:block;width:100%;height:1px;z-index:-1}.text[_ngcontent-%COMP%]{background:#fff;margin:15px 20px;padding:0 10px;display:inline-block;text-transform:uppercase;font-family:Arial,sans-serif;color:#494940}label[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;padding-right:10px}.textarea[_ngcontent-%COMP%]{resize:none;min-height:100px;border-radius:3px;margin-top:6px;padding:6px}.button[_ngcontent-%COMP%]{padding:10px 20px;margin:10px 0 5px;color:#fff;background-color:#444;border:0;border-radius:3px;text-transform:uppercase}.button[_ngcontent-%COMP%]:hover{background-color:#ff4800;color:#fff}.form[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);grid-column-gap:10px}.form[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{grid-column:1/span 2}.form[_ngcontent-%COMP%]   .item--fieldset[_ngcontent-%COMP%]{grid-column:1;display:grid;grid-template-columns:100px auto;padding-left:20px}.form[_ngcontent-%COMP%]   .item--message[_ngcontent-%COMP%]{grid-column:2;display:grid}input[_ngcontent-%COMP%]{outline:0;margin:5px 0;border-radius:3px;padding:0 10px;border:1px solid #a9a9a9}svg[_ngcontent-%COMP%]{margin:5px 10px;width:22px;height:22px;fill:#444}'
            ]
          ],
          data: {}
        });
      function Ep(n) {
        return Gi(
          0,
          [
            (n()(),
            Mi(
              0,
              0,
              null,
              null,
              59,
              'section',
              [['class', 'section']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              1,
              0,
              null,
              null,
              3,
              'div',
              [['class', 'title-wrapper']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(2, 0, null, null, 2, 'h2', [['class', 'title']], null, null, null, null, null)),
            (n()(),
            Mi(3, 0, null, null, 1, 'span', [['class', 'text']], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u0417\u0410\u0414\u0410\u0419\u0422\u0415 \u0412\u041e\u041f\u0420\u041e\u0421\u042b'
            ])),
            (n()(),
            Mi(
              5,
              0,
              null,
              null,
              54,
              'form',
              [
                ['class', 'form'],
                ['novalidate', '']
              ],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null]
              ],
              [
                [null, 'submit'],
                [null, 'reset']
              ],
              function(n, e, t) {
                var l = !0;
                return (
                  'submit' === e && (l = !1 !== jl(n, 7).onSubmit(t) && l),
                  'reset' === e && (l = !1 !== jl(n, 7).onReset() && l),
                  l
                );
              },
              null,
              null
            )),
            Yl(6, 16384, null, 0, hp, [], null, null),
            Yl(
              7,
              540672,
              null,
              0,
              dp,
              [
                [8, null],
                [8, null]
              ],
              { form: [0, 'form'] },
              null
            ),
            $l(2048, null, Sd, null, [dp]),
            Yl(9, 16384, null, 0, Id, [[4, Sd]], null, null),
            (n()(),
            Mi(
              10,
              0,
              null,
              null,
              36,
              'div',
              [['class', 'form__item item item--fieldset']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(11, 0, null, null, 3, 'label', [], null, null, null, null, null)),
            (n()(),
            Mi(
              12,
              0,
              null,
              null,
              1,
              ':svg:svg',
              [['class', 'svg__user svg']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              13,
              0,
              null,
              null,
              0,
              ':svg:use',
              [[':xlink:href', 'assets/svg/sprite.svg#svg__user']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Hi(-1, null, [' \u0418\u043c\u044f '])),
            (n()(),
            Mi(
              15,
              0,
              null,
              null,
              7,
              'input',
              [
                ['formControlName', 'formName'],
                ['placeholder', '\u0418\u043c\u044f *'],
                ['required', ''],
                ['type', 'text']
              ],
              [
                [1, 'required', 0],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null]
              ],
              [
                [null, 'input'],
                [null, 'blur'],
                [null, 'compositionstart'],
                [null, 'compositionend']
              ],
              function(n, e, t) {
                var l = !0;
                return (
                  'input' === e && (l = !1 !== jl(n, 16)._handleInput(t.target.value) && l),
                  'blur' === e && (l = !1 !== jl(n, 16).onTouched() && l),
                  'compositionstart' === e && (l = !1 !== jl(n, 16)._compositionStart() && l),
                  'compositionend' === e &&
                    (l = !1 !== jl(n, 16)._compositionEnd(t.target.value) && l),
                  l
                );
              },
              null,
              null
            )),
            Yl(16, 16384, null, 0, Ed, [ut, tt, [2, Od]], null, null),
            Yl(17, 16384, null, 0, yp, [], { required: [0, 'required'] }, null),
            $l(
              1024,
              null,
              Vd,
              function(n) {
                return [n];
              },
              [yp]
            ),
            $l(
              1024,
              null,
              xd,
              function(n) {
                return [n];
              },
              [Ed]
            ),
            Yl(
              20,
              671744,
              null,
              0,
              mp,
              [
                [3, Sd],
                [6, Vd],
                [8, null],
                [6, xd],
                [2, fp]
              ],
              { name: [0, 'name'] },
              null
            ),
            $l(2048, null, Md, null, [mp]),
            Yl(22, 16384, null, 0, Rd, [[4, Md]], null, null),
            (n()(), Mi(23, 0, null, null, 3, 'label', [], null, null, null, null, null)),
            (n()(),
            Mi(
              24,
              0,
              null,
              null,
              1,
              ':svg:svg',
              [['class', 'svg__letter svg']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              25,
              0,
              null,
              null,
              0,
              ':svg:use',
              [[':xlink:href', 'assets/svg/sprite.svg#svg__letter']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Hi(-1, null, [' Email '])),
            (n()(),
            Mi(
              27,
              0,
              null,
              null,
              7,
              'input',
              [
                ['formControlName', 'formEmail'],
                ['placeholder', 'Email *'],
                ['required', ''],
                ['type', 'email']
              ],
              [
                [1, 'required', 0],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null]
              ],
              [
                [null, 'input'],
                [null, 'blur'],
                [null, 'compositionstart'],
                [null, 'compositionend']
              ],
              function(n, e, t) {
                var l = !0;
                return (
                  'input' === e && (l = !1 !== jl(n, 28)._handleInput(t.target.value) && l),
                  'blur' === e && (l = !1 !== jl(n, 28).onTouched() && l),
                  'compositionstart' === e && (l = !1 !== jl(n, 28)._compositionStart() && l),
                  'compositionend' === e &&
                    (l = !1 !== jl(n, 28)._compositionEnd(t.target.value) && l),
                  l
                );
              },
              null,
              null
            )),
            Yl(28, 16384, null, 0, Ed, [ut, tt, [2, Od]], null, null),
            Yl(29, 16384, null, 0, yp, [], { required: [0, 'required'] }, null),
            $l(
              1024,
              null,
              Vd,
              function(n) {
                return [n];
              },
              [yp]
            ),
            $l(
              1024,
              null,
              xd,
              function(n) {
                return [n];
              },
              [Ed]
            ),
            Yl(
              32,
              671744,
              null,
              0,
              mp,
              [
                [3, Sd],
                [6, Vd],
                [8, null],
                [6, xd],
                [2, fp]
              ],
              { name: [0, 'name'] },
              null
            ),
            $l(2048, null, Md, null, [mp]),
            Yl(34, 16384, null, 0, Rd, [[4, Md]], null, null),
            (n()(), Mi(35, 0, null, null, 3, 'label', [], null, null, null, null, null)),
            (n()(),
            Mi(
              36,
              0,
              null,
              null,
              1,
              ':svg:svg',
              [['class', 'svg__newspaper svg']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              37,
              0,
              null,
              null,
              0,
              ':svg:use',
              [[':xlink:href', 'assets/svg/sprite.svg#svg__newspaper']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Hi(-1, null, [' \u0422\u0435\u043c\u0430 '])),
            (n()(),
            Mi(
              39,
              0,
              null,
              null,
              7,
              'input',
              [
                ['formControlName', 'formTopic'],
                ['placeholder', '\u0422\u0435\u043c\u0430 *'],
                ['required', ''],
                ['type', 'text']
              ],
              [
                [1, 'required', 0],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null]
              ],
              [
                [null, 'input'],
                [null, 'blur'],
                [null, 'compositionstart'],
                [null, 'compositionend']
              ],
              function(n, e, t) {
                var l = !0;
                return (
                  'input' === e && (l = !1 !== jl(n, 40)._handleInput(t.target.value) && l),
                  'blur' === e && (l = !1 !== jl(n, 40).onTouched() && l),
                  'compositionstart' === e && (l = !1 !== jl(n, 40)._compositionStart() && l),
                  'compositionend' === e &&
                    (l = !1 !== jl(n, 40)._compositionEnd(t.target.value) && l),
                  l
                );
              },
              null,
              null
            )),
            Yl(40, 16384, null, 0, Ed, [ut, tt, [2, Od]], null, null),
            Yl(41, 16384, null, 0, yp, [], { required: [0, 'required'] }, null),
            $l(
              1024,
              null,
              Vd,
              function(n) {
                return [n];
              },
              [yp]
            ),
            $l(
              1024,
              null,
              xd,
              function(n) {
                return [n];
              },
              [Ed]
            ),
            Yl(
              44,
              671744,
              null,
              0,
              mp,
              [
                [3, Sd],
                [6, Vd],
                [8, null],
                [6, xd],
                [2, fp]
              ],
              { name: [0, 'name'] },
              null
            ),
            $l(2048, null, Md, null, [mp]),
            Yl(46, 16384, null, 0, Rd, [[4, Md]], null, null),
            (n()(),
            Mi(
              47,
              0,
              null,
              null,
              12,
              'div',
              [['class', 'form__item item item--message']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(48, 0, null, null, 1, 'label', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u0412\u0430\u0448\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435'
            ])),
            (n()(),
            Mi(
              50,
              0,
              null,
              null,
              7,
              'textarea',
              [
                ['class', 'textarea'],
                ['formControlName', 'formMessage'],
                ['placeholder', 'C\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 *'],
                ['required', ''],
                ['type', 'text']
              ],
              [
                [1, 'required', 0],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null]
              ],
              [
                [null, 'input'],
                [null, 'blur'],
                [null, 'compositionstart'],
                [null, 'compositionend']
              ],
              function(n, e, t) {
                var l = !0;
                return (
                  'input' === e && (l = !1 !== jl(n, 51)._handleInput(t.target.value) && l),
                  'blur' === e && (l = !1 !== jl(n, 51).onTouched() && l),
                  'compositionstart' === e && (l = !1 !== jl(n, 51)._compositionStart() && l),
                  'compositionend' === e &&
                    (l = !1 !== jl(n, 51)._compositionEnd(t.target.value) && l),
                  l
                );
              },
              null,
              null
            )),
            Yl(51, 16384, null, 0, Ed, [ut, tt, [2, Od]], null, null),
            Yl(52, 16384, null, 0, yp, [], { required: [0, 'required'] }, null),
            $l(
              1024,
              null,
              Vd,
              function(n) {
                return [n];
              },
              [yp]
            ),
            $l(
              1024,
              null,
              xd,
              function(n) {
                return [n];
              },
              [Ed]
            ),
            Yl(
              55,
              671744,
              null,
              0,
              mp,
              [
                [3, Sd],
                [6, Vd],
                [8, null],
                [6, xd],
                [2, fp]
              ],
              { name: [0, 'name'] },
              null
            ),
            $l(2048, null, Md, null, [mp]),
            Yl(57, 16384, null, 0, Rd, [[4, Md]], null, null),
            (n()(),
            Mi(
              58,
              0,
              null,
              null,
              1,
              'button',
              [['class', 'button']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Hi(-1, null, ['\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c']))
          ],
          function(n, e) {
            n(e, 7, 0, e.component.formQuestion),
              n(e, 17, 0, ''),
              n(e, 20, 0, 'formName'),
              n(e, 29, 0, ''),
              n(e, 32, 0, 'formEmail'),
              n(e, 41, 0, ''),
              n(e, 44, 0, 'formTopic'),
              n(e, 52, 0, ''),
              n(e, 55, 0, 'formMessage');
          },
          function(n, e) {
            n(
              e,
              5,
              0,
              jl(e, 9).ngClassUntouched,
              jl(e, 9).ngClassTouched,
              jl(e, 9).ngClassPristine,
              jl(e, 9).ngClassDirty,
              jl(e, 9).ngClassValid,
              jl(e, 9).ngClassInvalid,
              jl(e, 9).ngClassPending
            ),
              n(
                e,
                15,
                0,
                jl(e, 17).required ? '' : null,
                jl(e, 22).ngClassUntouched,
                jl(e, 22).ngClassTouched,
                jl(e, 22).ngClassPristine,
                jl(e, 22).ngClassDirty,
                jl(e, 22).ngClassValid,
                jl(e, 22).ngClassInvalid,
                jl(e, 22).ngClassPending
              ),
              n(
                e,
                27,
                0,
                jl(e, 29).required ? '' : null,
                jl(e, 34).ngClassUntouched,
                jl(e, 34).ngClassTouched,
                jl(e, 34).ngClassPristine,
                jl(e, 34).ngClassDirty,
                jl(e, 34).ngClassValid,
                jl(e, 34).ngClassInvalid,
                jl(e, 34).ngClassPending
              ),
              n(
                e,
                39,
                0,
                jl(e, 41).required ? '' : null,
                jl(e, 46).ngClassUntouched,
                jl(e, 46).ngClassTouched,
                jl(e, 46).ngClassPristine,
                jl(e, 46).ngClassDirty,
                jl(e, 46).ngClassValid,
                jl(e, 46).ngClassInvalid,
                jl(e, 46).ngClassPending
              ),
              n(
                e,
                50,
                0,
                jl(e, 52).required ? '' : null,
                jl(e, 57).ngClassUntouched,
                jl(e, 57).ngClassTouched,
                jl(e, 57).ngClassPristine,
                jl(e, 57).ngClassDirty,
                jl(e, 57).ngClassValid,
                jl(e, 57).ngClassInvalid,
                jl(e, 57).ngClassPending
              );
          }
        );
      }
      var Pp = function n() {
          _classCallCheck(this, n);
        },
        Sp = Ht({
          encapsulation: 0,
          styles: [
            [
              '*[_ngcontent-%COMP%]{box-sizing:border-box}.section[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto 20px}.title-wrapper[_ngcontent-%COMP%]{position:relative}a[_ngcontent-%COMP%], li[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}a[_ngcontent-%COMP%]{padding:2px 0}.title-wrapper[_ngcontent-%COMP%]:after{content:"";background:#dcdcdc;position:absolute;left:0;top:50%;margin-top:-.5px;display:block;width:100%;height:1px;z-index:-1}.text[_ngcontent-%COMP%]{background:#fff;margin:15px 20px;padding:0 10px;display:inline-block;text-transform:uppercase;font-family:Arial,sans-serif;color:#494940}img[_ngcontent-%COMP%]{max-width:230px;width:100%}.svg[_ngcontent-%COMP%]{margin:5px 10px;width:22px;height:22px;fill:currentColor}.container__contacts[_ngcontent-%COMP%]{padding-left:20px}.catalog_list[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,auto);grid-gap:10px;padding:0 10px}.catalog_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{display:grid;padding:10px;background-color:#fafafa;border:1px solid #e0e0e0;box-shadow:inset 0 1px 1px #fff;border-radius:5px;-webkit-transition:.5s;transition:.5s}.catalog_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover{border:1px solid #ff4800;-webkit-transform:scale(1.03);transform:scale(1.03)}.catalog_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{display:grid;justify-items:center}.catalog_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{align-self:end;justify-self:center}.catalog_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{align-self:center}.box[_ngcontent-%COMP%]{padding:0 10px;display:grid;grid-template-columns:auto 300px}.box_guaranty[_ngcontent-%COMP%]{padding:0 10px;color:#525252}.list_options[_ngcontent-%COMP%]{display:-webkit-box;display:flex;flex-flow:wrap}.list_options[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:10px}.list_aside[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.list_aside[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}'
            ]
          ],
          data: {}
        });
      function Tp(n) {
        return Gi(
          0,
          [
            (n()(),
            Mi(
              0,
              0,
              null,
              null,
              45,
              'section',
              [['class', 'section']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              1,
              0,
              null,
              null,
              3,
              'div',
              [['class', 'title-wrapper']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(2, 0, null, null, 2, 'h2', [['class', 'title']], null, null, null, null, null)),
            (n()(),
            Mi(3, 0, null, null, 1, 'span', [['class', 'text']], null, null, null, null, null)),
            (n()(), Hi(-1, null, ['\u041a\u041e\u041d\u0422\u0410\u041a\u0422\u042b'])),
            (n()(),
            Mi(
              5,
              0,
              null,
              null,
              40,
              'ul',
              [['class', 'container__contacts contacts']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              6,
              0,
              null,
              null,
              10,
              'li',
              [['class', 'contacts__item item']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              7,
              0,
              null,
              null,
              2,
              'a',
              [
                ['class', 'item__svg_box'],
                ['href', 'tel:+375 17 241-08-08']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              8,
              0,
              null,
              null,
              1,
              ':svg:svg',
              [['class', 'svg__phone svg']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              9,
              0,
              null,
              null,
              0,
              ':svg:use',
              [[':xlink:href', 'assets/svg/sprite.svg#svg__phone']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(10, 0, null, null, 6, 'ul', [], null, null, null, null, null)),
            (n()(), Mi(11, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (n()(),
            Mi(
              12,
              0,
              null,
              null,
              1,
              'a',
              [['href', 'tel:+375 17 241-08-08']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Hi(-1, null, ['+375 17 241-08-08'])),
            (n()(), Mi(14, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (n()(),
            Mi(
              15,
              0,
              null,
              null,
              1,
              'a',
              [['href', 'tel:+375 17 337-08-08']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Hi(-1, null, ['+375 17 337-08-08'])),
            (n()(),
            Mi(
              17,
              0,
              null,
              null,
              10,
              'li',
              [['class', 'contacts__item item']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              18,
              0,
              null,
              null,
              2,
              'a',
              [
                ['class', 'item__svg_box'],
                ['href', 'tel:+375 29 337-30-30']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              19,
              0,
              null,
              null,
              1,
              ':svg:svg',
              [['class', 'svg__skype_logo svg']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              20,
              0,
              null,
              null,
              0,
              ':svg:use',
              [[':xlink:href', 'assets/svg/sprite.svg#svg__mobile']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(21, 0, null, null, 6, 'ul', [], null, null, null, null, null)),
            (n()(), Mi(22, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (n()(),
            Mi(
              23,
              0,
              null,
              null,
              1,
              'a',
              [['href', 'tel:+375 29 337-30-30']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Hi(-1, null, ['+375 29 337-30-30'])),
            (n()(), Mi(25, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (n()(),
            Mi(
              26,
              0,
              null,
              null,
              1,
              'a',
              [['href', 'tel:+375 29 737-20-23']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Hi(-1, null, ['+375 29 737-20-23'])),
            (n()(),
            Mi(
              28,
              0,
              null,
              null,
              5,
              'li',
              [['class', 'contacts__item item']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              29,
              0,
              null,
              null,
              4,
              'a',
              [
                ['class', 'item__svg_box'],
                ['href', 'mailto:info@nabludenie.by']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              30,
              0,
              null,
              null,
              1,
              ':svg:svg',
              [['class', 'svg__letter svg']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              31,
              0,
              null,
              null,
              0,
              ':svg:use',
              [[':xlink:href', 'assets/svg/sprite.svg#svg__letter']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(32, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (n()(), Hi(-1, null, ['info@nabludenie.by'])),
            (n()(),
            Mi(
              34,
              0,
              null,
              null,
              5,
              'li',
              [['class', 'contacts__item item']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              35,
              0,
              null,
              null,
              4,
              'a',
              [
                ['class', 'item__svg_box'],
                ['href', 'skype:mihail.dam?chat']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              36,
              0,
              null,
              null,
              1,
              ':svg:svg',
              [['class', 'svg__skype_logo svg']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              37,
              0,
              null,
              null,
              0,
              ':svg:use',
              [[':xlink:href', 'assets/svg/sprite.svg#svg__skype_logo']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(38, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (n()(), Hi(-1, null, ['mihail.dam'])),
            (n()(),
            Mi(
              40,
              0,
              null,
              null,
              5,
              'li',
              [['class', 'contacts__item item']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              41,
              0,
              null,
              null,
              4,
              'a',
              [['class', 'item__svg_box']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              42,
              0,
              null,
              null,
              1,
              ':svg:svg',
              [['class', 'svg__location_pin svg']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              43,
              0,
              null,
              null,
              0,
              ':svg:use',
              [[':xlink:href', 'assets/svg/sprite.svg#svg__location_pin']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(44, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u0443\u043b. \u0411\u0438\u0440\u044e\u0437\u043e\u0432\u0430 4, 3-\u0439 \u044d\u0442\u0430\u0436'
            ]))
          ],
          null,
          null
        );
      }
      var Mp = function n() {
          _classCallCheck(this, n);
        },
        Ap = Ht({
          encapsulation: 0,
          styles: [
            [
              '[_nghost-%COMP%]{max-width:1200px;margin:0 auto 20px;display:grid;grid-template-columns:repeat(3,1fr);grid-column-gap:10px}app-map-yandex[_ngcontent-%COMP%]{grid-column:1/span 3}app-question-form[_ngcontent-%COMP%]{grid-column:1/span 2}app-contact-data[_ngcontent-%COMP%]{grid-column:3}'
            ]
          ],
          data: {}
        });
      function Rp(n) {
        return Gi(
          0,
          [
            (n()(), Mi(0, 0, null, null, 1, 'app-map-yandex', [], null, null, null, bd, kd)),
            Yl(1, 114688, null, 0, Cd, [], null, null),
            (n()(), Mi(2, 0, null, null, 1, 'app-question-form', [], null, null, null, Ep, Op)),
            Yl(3, 114688, null, 0, xp, [], null, null),
            (n()(), Mi(4, 0, null, null, 1, 'app-contact-data', [], null, null, null, Tp, Sp)),
            Yl(5, 49152, null, 0, Pp, [], null, null)
          ],
          function(n, e) {
            n(e, 1, 0), n(e, 3, 0);
          },
          null
        );
      }
      var Ip = El(
          'app-page-contacts',
          Mp,
          function(n) {
            return Gi(
              0,
              [
                (n()(), Mi(0, 0, null, null, 1, 'app-page-contacts', [], null, null, null, Rp, Ap)),
                Yl(1, 49152, null, 0, Mp, [], null, null)
              ],
              null,
              null
            );
          },
          {},
          {},
          []
        ),
        Np = function n() {
          _classCallCheck(this, n);
        },
        Vp = Ht({
          encapsulation: 0,
          styles: [
            [
              '.button[_ngcontent-%COMP%], a[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{cursor:pointer;display:inline-block;text-align:center;white-space:pre;text-decoration:none;outline:0;color:#494940;-webkit-transition:.2s;transition:.2s}.button[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:hover, button[_ngcontent-%COMP%]:hover{color:#ff4800}input[_ngcontent-%COMP%]{outline:0}[_nghost-%COMP%]{display:block}.svg[_ngcontent-%COMP%]{fill:#ff4800;width:22px;height:22px;-webkit-transition:.6s;transition:.6s}.address__link[_ngcontent-%COMP%], .telephones__link[_ngcontent-%COMP%]{color:#7f7d74;font-size:14px;line-height:18px}.header[_ngcontent-%COMP%]{padding-top:10px;border-top:4px solid #ff4800}.header__container__top[_ngcontent-%COMP%]{margin:0 auto;display:grid;grid-template-columns:repeat(3,1fr);place-items:center center;max-width:1200px;width:100%;height:100px}@media (max-width:760px){.header__container__top[_ngcontent-%COMP%]{grid-template-columns:auto}.header__container__top[_ngcontent-%COMP%]   .header__address[_ngcontent-%COMP%], .header__container__top[_ngcontent-%COMP%]   .header__telephones[_ngcontent-%COMP%]{display:none}}.header__telephones[_ngcontent-%COMP%]{display:grid;-webkit-box-align:end;align-items:end;grid-column-gap:10px;grid-template-columns:repeat(2,auto)}.telephones__link__svg[_ngcontent-%COMP%]   .svg[_ngcontent-%COMP%]{width:36px;height:36px;-webkit-transition:.6s;transition:.6s}.telephones__link__svg[_ngcontent-%COMP%]:hover   .svg[_ngcontent-%COMP%]{fill:#c23801}.header__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:255px}.header__address[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:22px;height:22px}.address__link[_ngcontent-%COMP%]{display:grid;-webkit-box-align:center;align-items:center;grid-column-gap:5px;margin:3px 0;grid-template-columns:repeat(2,-webkit-min-content);grid-template-columns:repeat(2,min-content)}.address__link[_ngcontent-%COMP%]:hover   .svg[_ngcontent-%COMP%]{fill:#c23801}.header__bottom_box[_ngcontent-%COMP%]{padding:10px 0;min-height:50px;box-shadow:0 -3px 7px -2px rgba(40,53,55,.3)}.header__container__bottom[_ngcontent-%COMP%]{display:-webkit-box;display:flex;padding:0 15px;margin:0 auto;max-width:1200px;width:100%;-webkit-box-align:center;align-items:center}.navigation__list[_ngcontent-%COMP%]{display:-webkit-box;display:flex;text-transform:uppercase}.navigation__links[_ngcontent-%COMP%]{font-size:13px;font-weight:600;padding:13px 10px}.header__button__price[_ngcontent-%COMP%]{margin:0 10px;border:1px dashed;text-transform:uppercase;color:#ff4800;background:#fff;font-size:18px;font-weight:600;padding:6px 20px;-webkit-transition:.6s;transition:.6s;outline:0}.header__button__price[_ngcontent-%COMP%]:hover{border:1px dashed #fff;color:#fff;font-size:18px;border-radius:10px;background:#ff4800}@media (max-width:860px){.header__container__bottom[_ngcontent-%COMP%]{-webkit-box-align:end;align-items:end}.navigation__list[_ngcontent-%COMP%]{flex-wrap:wrap}.header__button__price[_ngcontent-%COMP%]{display:none}}.header__form[_ngcontent-%COMP%]{margin-left:auto;display:-webkit-box;display:flex}.form__input[_ngcontent-%COMP%]{height:35px;padding:8px 15px;color:#363633;font-size:13px;line-height:20px;background-color:transparent;border:1px solid #e0e0e0;border-radius:0;box-shadow:none}.form__input[_ngcontent-%COMP%]::-webkit-input-placeholder{font-style:italic}.form__button[_ngcontent-%COMP%]{width:35px;height:35px;font-size:0;background-size:23px;background-repeat:no-repeat;background-position:center;background-color:#ff4800;border:none}.form__button[_ngcontent-%COMP%]   .svg[_ngcontent-%COMP%]{fill:#fff;-webkit-transition:.6s;transition:.6s}.form__button[_ngcontent-%COMP%]:hover{background-size:24px;background-color:#363633}.form__button[_ngcontent-%COMP%]:hover   .svg[_ngcontent-%COMP%]{fill:#ff4800}@media (max-width:1100px){.form__button[_ngcontent-%COMP%]{border-radius:3px}.form__input[_ngcontent-%COMP%]{display:none}}'
            ]
          ],
          data: {}
        });
      function Dp(n) {
        return Gi(
          0,
          [
            (n()(),
            Mi(
              0,
              0,
              null,
              null,
              87,
              'header',
              [['class', 'header']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(1, 0, null, null, 1, 'h1', [['hidden', '']], null, null, null, null, null)),
            (n()(), Hi(-1, null, ['\u0414\u041c\u0414 C\u0438\u0441\u0442\u0435\u043c\u0441'])),
            (n()(),
            Mi(
              3,
              0,
              null,
              null,
              38,
              'div',
              [['class', 'header__container__top']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              4,
              0,
              null,
              null,
              13,
              'div',
              [['class', 'header__telephones telephones']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              5,
              0,
              null,
              null,
              2,
              'a',
              [
                ['class', 'telephones__link__svg'],
                ['href', 'tel:+375293373030']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              6,
              0,
              null,
              null,
              1,
              ':svg:svg',
              [['class', 'svg__headsets_with_microphone svg']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              7,
              0,
              null,
              null,
              0,
              ':svg:use',
              [[':xlink:href', 'assets/svg/sprite.svg#svg__headsets_with_microphone']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              8,
              0,
              null,
              null,
              9,
              'ul',
              [['class', 'telephones__list']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(9, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (n()(),
            Mi(
              10,
              0,
              null,
              null,
              1,
              'a',
              [
                ['class', 'telephones__link'],
                ['href', 'tel:+375293373030']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Hi(-1, null, ['+375 29 337-30-30'])),
            (n()(), Mi(12, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (n()(),
            Mi(
              13,
              0,
              null,
              null,
              1,
              'a',
              [
                ['class', 'telephones__link'],
                ['href', 'tel:+375297372023']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Hi(-1, null, ['+375 29 737-20-23'])),
            (n()(), Mi(15, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (n()(),
            Mi(
              16,
              0,
              null,
              null,
              1,
              'a',
              [
                ['class', 'telephones__link'],
                ['href', 'tel:+375172410808']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Hi(-1, null, ['+375 17 241-08-08'])),
            (n()(),
            Mi(
              18,
              0,
              null,
              null,
              4,
              'div',
              [['class', 'header__logo']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              19,
              0,
              null,
              null,
              3,
              'a',
              [],
              [
                [1, 'target', 0],
                [8, 'href', 4]
              ],
              [[null, 'click']],
              function(n, e, t) {
                var l = !0;
                return (
                  'click' === e &&
                    (l = !1 !== jl(n, 20).onClick(t.button, t.ctrlKey, t.metaKey, t.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Yl(20, 671744, null, 0, Nh, [Ih, xc, eo], { routerLink: [0, 'routerLink'] }, null),
            zi(21, 1),
            (n()(),
            Mi(
              22,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/img/dmd-logo.png']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              23,
              0,
              null,
              null,
              18,
              'div',
              [['class', 'header__address address']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              24,
              0,
              null,
              null,
              17,
              'ul',
              [['class', 'address__list']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(25, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (n()(),
            Mi(
              26,
              0,
              null,
              null,
              3,
              'a',
              [
                ['class', 'address__link'],
                ['href', 'skype:mihail.dam?chat']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              27,
              0,
              null,
              null,
              1,
              ':svg:svg',
              [['class', 'svg__skype_logo svg']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              28,
              0,
              null,
              null,
              0,
              ':svg:use',
              [[':xlink:href', 'assets/svg/sprite.svg#svg__skype_logo']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Hi(-1, null, [' mihail.dam '])),
            (n()(), Mi(30, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (n()(),
            Mi(
              31,
              0,
              null,
              null,
              3,
              'a',
              [
                ['class', 'address__link'],
                ['href', 'mailto:info@nabludenie.by']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              32,
              0,
              null,
              null,
              1,
              ':svg:svg',
              [['class', 'svg__letter svg']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              33,
              0,
              null,
              null,
              0,
              ':svg:use',
              [[':xlink:href', 'assets/svg/sprite.svg#svg__letter']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Hi(-1, null, [' info@nabludenie.by '])),
            (n()(), Mi(35, 0, null, null, 6, 'li', [], null, null, null, null, null)),
            (n()(),
            Mi(
              36,
              0,
              null,
              null,
              5,
              'a',
              [['class', 'address__link']],
              [
                [1, 'target', 0],
                [8, 'href', 4]
              ],
              [[null, 'click']],
              function(n, e, t) {
                var l = !0;
                return (
                  'click' === e &&
                    (l = !1 !== jl(n, 37).onClick(t.button, t.ctrlKey, t.metaKey, t.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Yl(37, 671744, null, 0, Nh, [Ih, xc, eo], { routerLink: [0, 'routerLink'] }, null),
            zi(38, 1),
            (n()(),
            Mi(
              39,
              0,
              null,
              null,
              1,
              ':svg:svg',
              [['class', 'svg__location_pin svg']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              40,
              0,
              null,
              null,
              0,
              ':svg:use',
              [[':xlink:href', 'assets/svg/sprite.svg#svg__location_pin']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Hi(-1, null, [
              ' \u0443\u043b.\u0411\u0438\u0440\u044e\u0437\u043e\u0432\u0430 4, 3-\u0439 \u044d\u0442\u0430\u0436 '
            ])),
            (n()(),
            Mi(
              42,
              0,
              null,
              null,
              45,
              'div',
              [['class', 'header__bottom_box']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              43,
              0,
              null,
              null,
              44,
              'div',
              [['class', 'header__container__bottom']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              44,
              0,
              null,
              null,
              36,
              'nav',
              [['class', 'header__navigation navigation']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              45,
              0,
              null,
              null,
              35,
              'ul',
              [['class', 'navigation__list']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(46, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (n()(),
            Mi(
              47,
              0,
              null,
              null,
              3,
              'a',
              [['class', 'navigation__links']],
              [
                [1, 'target', 0],
                [8, 'href', 4]
              ],
              [[null, 'click']],
              function(n, e, t) {
                var l = !0;
                return (
                  'click' === e &&
                    (l = !1 !== jl(n, 48).onClick(t.button, t.ctrlKey, t.metaKey, t.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Yl(48, 671744, null, 0, Nh, [Ih, xc, eo], { routerLink: [0, 'routerLink'] }, null),
            zi(49, 1),
            (n()(), Hi(-1, null, ['\u041a\u0410\u0422\u0410\u041b\u041e\u0413'])),
            (n()(), Mi(51, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (n()(),
            Mi(
              52,
              0,
              null,
              null,
              3,
              'a',
              [['class', 'navigation__links']],
              [
                [1, 'target', 0],
                [8, 'href', 4]
              ],
              [[null, 'click']],
              function(n, e, t) {
                var l = !0;
                return (
                  'click' === e &&
                    (l = !1 !== jl(n, 53).onClick(t.button, t.ctrlKey, t.metaKey, t.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Yl(53, 671744, null, 0, Nh, [Ih, xc, eo], { routerLink: [0, 'routerLink'] }, null),
            zi(54, 1),
            (n()(), Hi(-1, null, ['\u041e \u041a\u041e\u041c\u041f\u0410\u041d\u0418\u0418'])),
            (n()(), Mi(56, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (n()(),
            Mi(
              57,
              0,
              null,
              null,
              3,
              'a',
              [['class', 'navigation__links']],
              [
                [1, 'target', 0],
                [8, 'href', 4]
              ],
              [[null, 'click']],
              function(n, e, t) {
                var l = !0;
                return (
                  'click' === e &&
                    (l = !1 !== jl(n, 58).onClick(t.button, t.ctrlKey, t.metaKey, t.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Yl(58, 671744, null, 0, Nh, [Ih, xc, eo], { routerLink: [0, 'routerLink'] }, null),
            zi(59, 1),
            (n()(),
            Hi(-1, null, [
              '\u0422\u0415\u0425.\u041f\u041e\u0414\u0414\u0415\u0420\u0416\u041a\u0410'
            ])),
            (n()(), Mi(61, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (n()(),
            Mi(
              62,
              0,
              null,
              null,
              3,
              'a',
              [['class', 'navigation__links']],
              [
                [1, 'target', 0],
                [8, 'href', 4]
              ],
              [[null, 'click']],
              function(n, e, t) {
                var l = !0;
                return (
                  'click' === e &&
                    (l = !1 !== jl(n, 63).onClick(t.button, t.ctrlKey, t.metaKey, t.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Yl(63, 671744, null, 0, Nh, [Ih, xc, eo], { routerLink: [0, 'routerLink'] }, null),
            zi(64, 1),
            (n()(), Hi(-1, null, ['\u041a\u041b\u0418\u0415\u041d\u0422\u042b'])),
            (n()(), Mi(66, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (n()(),
            Mi(
              67,
              0,
              null,
              null,
              3,
              'a',
              [['class', 'navigation__links']],
              [
                [1, 'target', 0],
                [8, 'href', 4]
              ],
              [[null, 'click']],
              function(n, e, t) {
                var l = !0;
                return (
                  'click' === e &&
                    (l = !1 !== jl(n, 68).onClick(t.button, t.ctrlKey, t.metaKey, t.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Yl(68, 671744, null, 0, Nh, [Ih, xc, eo], { routerLink: [0, 'routerLink'] }, null),
            zi(69, 1),
            (n()(), Hi(-1, null, ['\u0421\u0422\u0410\u0422\u042c\u0418'])),
            (n()(), Mi(71, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (n()(),
            Mi(
              72,
              0,
              null,
              null,
              3,
              'a',
              [['class', 'navigation__links']],
              [
                [1, 'target', 0],
                [8, 'href', 4]
              ],
              [[null, 'click']],
              function(n, e, t) {
                var l = !0;
                return (
                  'click' === e &&
                    (l = !1 !== jl(n, 73).onClick(t.button, t.ctrlKey, t.metaKey, t.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Yl(73, 671744, null, 0, Nh, [Ih, xc, eo], { routerLink: [0, 'routerLink'] }, null),
            zi(74, 1),
            (n()(), Hi(-1, null, ['\u0411\u0420\u0415\u041d\u0414\u042b'])),
            (n()(), Mi(76, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (n()(),
            Mi(
              77,
              0,
              null,
              null,
              3,
              'a',
              [['class', 'navigation__links']],
              [
                [1, 'target', 0],
                [8, 'href', 4]
              ],
              [[null, 'click']],
              function(n, e, t) {
                var l = !0;
                return (
                  'click' === e &&
                    (l = !1 !== jl(n, 78).onClick(t.button, t.ctrlKey, t.metaKey, t.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Yl(78, 671744, null, 0, Nh, [Ih, xc, eo], { routerLink: [0, 'routerLink'] }, null),
            zi(79, 1),
            (n()(), Hi(-1, null, ['\u041a\u041e\u041d\u0422\u0410\u041a\u0422\u042b'])),
            (n()(),
            Mi(
              81,
              0,
              null,
              null,
              1,
              'button',
              [['class', 'button header__button__price']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Hi(-1, null, ['\u043f\u0440\u0430\u0439\u0441'])),
            (n()(),
            Mi(
              83,
              0,
              null,
              null,
              4,
              'form',
              [['class', 'header__form form']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              84,
              0,
              null,
              null,
              0,
              'input',
              [
                ['class', 'form__input'],
                [
                  'placeholder',
                  '\u041f\u043e\u0438\u0441\u043a \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u0438'
                ],
                ['type', 'search']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              85,
              0,
              null,
              null,
              2,
              'button',
              [['class', 'form__button button']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              86,
              0,
              null,
              null,
              1,
              ':svg:svg',
              [['class', 'svg__magnifying_search_lenses_tool svg']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              87,
              0,
              null,
              null,
              0,
              ':svg:use',
              [[':xlink:href', 'assets/svg/sprite.svg#svg__magnifying_search_lenses_tool']],
              null,
              null,
              null,
              null,
              null
            ))
          ],
          function(n, e) {
            var t = n(e, 21, 0, '/');
            n(e, 20, 0, t);
            var l = n(e, 38, 0, '/contacts');
            n(e, 37, 0, l);
            var r = n(e, 49, 0, '/catalog');
            n(e, 48, 0, r);
            var i = n(e, 54, 0, '/about');
            n(e, 53, 0, i);
            var u = n(e, 59, 0, '/support');
            n(e, 58, 0, u);
            var o = n(e, 64, 0, '/clients');
            n(e, 63, 0, o);
            var a = n(e, 69, 0, '/articles');
            n(e, 68, 0, a);
            var s = n(e, 74, 0, '/brands');
            n(e, 73, 0, s);
            var c = n(e, 79, 0, '/contacts');
            n(e, 78, 0, c);
          },
          function(n, e) {
            n(e, 19, 0, jl(e, 20).target, jl(e, 20).href),
              n(e, 36, 0, jl(e, 37).target, jl(e, 37).href),
              n(e, 47, 0, jl(e, 48).target, jl(e, 48).href),
              n(e, 52, 0, jl(e, 53).target, jl(e, 53).href),
              n(e, 57, 0, jl(e, 58).target, jl(e, 58).href),
              n(e, 62, 0, jl(e, 63).target, jl(e, 63).href),
              n(e, 67, 0, jl(e, 68).target, jl(e, 68).href),
              n(e, 72, 0, jl(e, 73).target, jl(e, 73).href),
              n(e, 77, 0, jl(e, 78).target, jl(e, 78).href);
          }
        );
      }
      var jp = (function() {
          function n() {
            _classCallCheck(this, n);
          }
          return _createClass(n, [{ key: 'ngOnInit', value: function() {} }]), n;
        })(),
        Lp = Ht({
          encapsulation: 0,
          styles: [
            [
              '[_nghost-%COMP%]{display:block}a[_ngcontent-%COMP%]{color:#fff;padding:5px 0}a[_ngcontent-%COMP%]:hover{color:#ff4800}li[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:end;align-items:flex-end}.svg[_ngcontent-%COMP%]{width:22px;height:22px;fill:#fff;margin-right:10px}.svg__letter[_ngcontent-%COMP%], .svg__location_pin[_ngcontent-%COMP%], .svg__skype_logo[_ngcontent-%COMP%]{height:17px}.item__svg_box[_ngcontent-%COMP%]{display:-webkit-box;display:flex}.footer__top_line[_ngcontent-%COMP%]{height:45px;background:#ff4800}@media (max-width:540px){.footer__top_line[_ngcontent-%COMP%]{display:none}}.footer__container[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(20px,auto) minmax(230px,290px) minmax(230px,870px) minmax(20px,auto);background:#444645;padding:45px 0}.footer__container[_ngcontent-%COMP%]   .container__contacts[_ngcontent-%COMP%]{grid-column:2}.footer__container[_ngcontent-%COMP%]   .container__catalog_list[_ngcontent-%COMP%]{grid-column:3;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column wrap;height:100%;max-height:160px}.footer__container[_ngcontent-%COMP%]   .container__catalog_list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-right:10px}@media (max-width:950px){.footer__top_line[_ngcontent-%COMP%]{height:5px}.footer__container[_ngcontent-%COMP%]   .container__catalog_list[_ngcontent-%COMP%]{max-height:220px}}@media (max-width:750px){.footer__container[_ngcontent-%COMP%]   .container__catalog_list[_ngcontent-%COMP%]{max-height:unset}}@media (max-width:540px){.footer__container[_ngcontent-%COMP%]{grid-template-columns:auto}.footer__container[_ngcontent-%COMP%]   .container__catalog_list[_ngcontent-%COMP%]{display:none}}.footer__bottom[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(20px,auto) minmax(auto,1170px) minmax(20px,auto);font-size:13px;padding:10px 0;color:#fff;background:#373737;border-top:1px solid #383938;box-shadow:inset 0 1px 0 rgba(255,255,255,.1)}.footer__bottom[_ngcontent-%COMP%]   .bottom__wrapper[_ngcontent-%COMP%]{grid-column:2}.footer__bottom[_ngcontent-%COMP%]   .bottom__text[_ngcontent-%COMP%]{color:#ccc;padding:0;margin:5px 0}'
            ]
          ],
          data: {}
        });
      function Up(n) {
        return Gi(
          0,
          [
            (n()(),
            Mi(
              0,
              0,
              null,
              null,
              132,
              'footer',
              [['class', 'footer']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              1,
              0,
              null,
              null,
              0,
              'div',
              [['class', 'footer__top_line']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              2,
              0,
              null,
              null,
              124,
              'section',
              [['class', 'footer__container container']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              3,
              0,
              null,
              null,
              42,
              'ul',
              [['class', 'container__contacts contacts']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              4,
              0,
              null,
              null,
              10,
              'li',
              [['class', 'contacts__item item']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              5,
              0,
              null,
              null,
              2,
              'a',
              [
                ['class', 'item__svg_box'],
                ['href', 'tel:+375 17 241-08-08']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              6,
              0,
              null,
              null,
              1,
              ':svg:svg',
              [['class', 'svg__phone svg']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              7,
              0,
              null,
              null,
              0,
              ':svg:use',
              [[':xlink:href', 'assets/svg/sprite.svg#svg__phone']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(8, 0, null, null, 6, 'ul', [], null, null, null, null, null)),
            (n()(), Mi(9, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (n()(),
            Mi(
              10,
              0,
              null,
              null,
              1,
              'a',
              [['href', 'tel:+375 17 241-08-08']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Hi(-1, null, ['+375 17 241-08-08'])),
            (n()(), Mi(12, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (n()(),
            Mi(
              13,
              0,
              null,
              null,
              1,
              'a',
              [['href', 'tel:+375 17 337-08-08']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Hi(-1, null, ['+375 17 337-08-08'])),
            (n()(),
            Mi(
              15,
              0,
              null,
              null,
              10,
              'li',
              [['class', 'contacts__item item']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              16,
              0,
              null,
              null,
              2,
              'a',
              [
                ['class', 'item__svg_box'],
                ['href', 'tel:+375 29 337-30-30']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              17,
              0,
              null,
              null,
              1,
              ':svg:svg',
              [['class', 'svg__skype_logo svg']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              18,
              0,
              null,
              null,
              0,
              ':svg:use',
              [[':xlink:href', 'assets/svg/sprite.svg#svg__mobile']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(19, 0, null, null, 6, 'ul', [], null, null, null, null, null)),
            (n()(), Mi(20, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (n()(),
            Mi(
              21,
              0,
              null,
              null,
              1,
              'a',
              [['href', 'tel:+375 29 337-30-30']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Hi(-1, null, ['+375 29 337-30-30'])),
            (n()(), Mi(23, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (n()(),
            Mi(
              24,
              0,
              null,
              null,
              1,
              'a',
              [['href', 'tel:+375 29 737-20-23']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Hi(-1, null, ['+375 29 737-20-23'])),
            (n()(),
            Mi(
              26,
              0,
              null,
              null,
              5,
              'li',
              [['class', 'contacts__item item']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              27,
              0,
              null,
              null,
              4,
              'a',
              [
                ['class', 'item__svg_box'],
                ['href', 'mailto:info@nabludenie.by']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              28,
              0,
              null,
              null,
              1,
              ':svg:svg',
              [['class', 'svg__letter svg']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              29,
              0,
              null,
              null,
              0,
              ':svg:use',
              [[':xlink:href', 'assets/svg/sprite.svg#svg__letter']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(30, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (n()(), Hi(-1, null, ['info@nabludenie.by'])),
            (n()(),
            Mi(
              32,
              0,
              null,
              null,
              5,
              'li',
              [['class', 'contacts__item item']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              33,
              0,
              null,
              null,
              4,
              'a',
              [
                ['class', 'item__svg_box'],
                ['href', 'skype:mihail.dam?chat']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              34,
              0,
              null,
              null,
              1,
              ':svg:svg',
              [['class', 'svg__skype_logo svg']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              35,
              0,
              null,
              null,
              0,
              ':svg:use',
              [[':xlink:href', 'assets/svg/sprite.svg#svg__skype_logo']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(36, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (n()(), Hi(-1, null, ['mihail.dam'])),
            (n()(),
            Mi(
              38,
              0,
              null,
              null,
              7,
              'li',
              [['class', 'contacts__item item']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              39,
              0,
              null,
              null,
              6,
              'a',
              [['class', 'item__svg_box']],
              [
                [1, 'target', 0],
                [8, 'href', 4]
              ],
              [[null, 'click']],
              function(n, e, t) {
                var l = !0;
                return (
                  'click' === e &&
                    (l = !1 !== jl(n, 40).onClick(t.button, t.ctrlKey, t.metaKey, t.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Yl(40, 671744, null, 0, Nh, [Ih, xc, eo], { routerLink: [0, 'routerLink'] }, null),
            zi(41, 1),
            (n()(),
            Mi(
              42,
              0,
              null,
              null,
              1,
              ':svg:svg',
              [['class', 'svg__location_pin svg']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              43,
              0,
              null,
              null,
              0,
              ':svg:use',
              [[':xlink:href', 'assets/svg/sprite.svg#svg__location_pin']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(44, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (n()(),
            Hi(-1, null, [
              '\u0443\u043b. \u0411\u0438\u0440\u044e\u0437\u043e\u0432\u0430 4, 3-\u0439 \u044d\u0442\u0430\u0436'
            ])),
            (n()(),
            Mi(
              46,
              0,
              null,
              null,
              80,
              'ul',
              [['class', 'container__catalog_list']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Mi(47, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (n()(),
            Mi(
              48,
              0,
              null,
              null,
              3,
              'a',
              [],
              [
                [1, 'target', 0],
                [8, 'href', 4]
              ],
              [[null, 'click']],
              function(n, e, t) {
                var l = !0;
                return (
                  'click' === e &&
                    (l = !1 !== jl(n, 49).onClick(t.button, t.ctrlKey, t.metaKey, t.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Yl(49, 671744, null, 0, Nh, [Ih, xc, eo], { routerLink: [0, 'routerLink'] }, null),
            zi(50, 1),
            (n()(), Hi(-1, null, ['IP-\u043a\u0430\u043c\u0435\u0440\u044b'])),
            (n()(), Mi(52, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (n()(),
            Mi(
              53,
              0,
              null,
              null,
              3,
              'a',
              [],
              [
                [1, 'target', 0],
                [8, 'href', 4]
              ],
              [[null, 'click']],
              function(n, e, t) {
                var l = !0;
                return (
                  'click' === e &&
                    (l = !1 !== jl(n, 54).onClick(t.button, t.ctrlKey, t.metaKey, t.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Yl(54, 671744, null, 0, Nh, [Ih, xc, eo], { routerLink: [0, 'routerLink'] }, null),
            zi(55, 1),
            (n()(), Hi(-1, null, ['AHD \u043a\u0430\u043c\u0435\u0440\u044b'])),
            (n()(), Mi(57, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (n()(),
            Mi(
              58,
              0,
              null,
              null,
              3,
              'a',
              [],
              [
                [1, 'target', 0],
                [8, 'href', 4]
              ],
              [[null, 'click']],
              function(n, e, t) {
                var l = !0;
                return (
                  'click' === e &&
                    (l = !1 !== jl(n, 59).onClick(t.button, t.ctrlKey, t.metaKey, t.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Yl(59, 671744, null, 0, Nh, [Ih, xc, eo], { routerLink: [0, 'routerLink'] }, null),
            zi(60, 1),
            (n()(),
            Hi(-1, null, [
              '\u0412\u0438\u0434\u0435\u043e\u0434\u043e\u043c\u043e\u0444\u043e\u043d\u044b'
            ])),
            (n()(), Mi(62, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (n()(),
            Mi(
              63,
              0,
              null,
              null,
              3,
              'a',
              [],
              [
                [1, 'target', 0],
                [8, 'href', 4]
              ],
              [[null, 'click']],
              function(n, e, t) {
                var l = !0;
                return (
                  'click' === e &&
                    (l = !1 !== jl(n, 64).onClick(t.button, t.ctrlKey, t.metaKey, t.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Yl(64, 671744, null, 0, Nh, [Ih, xc, eo], { routerLink: [0, 'routerLink'] }, null),
            zi(65, 1),
            (n()(), Hi(-1, null, ['\u0423\u0434\u043b\u0438\u043d\u0438\u0442\u0435\u043b\u0438'])),
            (n()(), Mi(67, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (n()(),
            Mi(
              68,
              0,
              null,
              null,
              3,
              'a',
              [],
              [
                [1, 'target', 0],
                [8, 'href', 4]
              ],
              [[null, 'click']],
              function(n, e, t) {
                var l = !0;
                return (
                  'click' === e &&
                    (l = !1 !== jl(n, 69).onClick(t.button, t.ctrlKey, t.metaKey, t.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Yl(69, 671744, null, 0, Nh, [Ih, xc, eo], { routerLink: [0, 'routerLink'] }, null),
            zi(70, 1),
            (n()(), Hi(-1, null, ['\u0423\u043c\u043d\u044b\u0439 \u0434\u043e\u043c'])),
            (n()(), Mi(72, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (n()(),
            Mi(
              73,
              0,
              null,
              null,
              3,
              'a',
              [],
              [
                [1, 'target', 0],
                [8, 'href', 4]
              ],
              [[null, 'click']],
              function(n, e, t) {
                var l = !0;
                return (
                  'click' === e &&
                    (l = !1 !== jl(n, 74).onClick(t.button, t.ctrlKey, t.metaKey, t.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Yl(74, 671744, null, 0, Nh, [Ih, xc, eo], { routerLink: [0, 'routerLink'] }, null),
            zi(75, 1),
            (n()(),
            Hi(-1, null, [
              '\u0411\u043b\u043e\u043a\u0438 \u043f\u0438\u0442\u0430\u043d\u0438\u044f'
            ])),
            (n()(), Mi(77, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (n()(),
            Mi(
              78,
              0,
              null,
              null,
              3,
              'a',
              [],
              [
                [1, 'target', 0],
                [8, 'href', 4]
              ],
              [[null, 'click']],
              function(n, e, t) {
                var l = !0;
                return (
                  'click' === e &&
                    (l = !1 !== jl(n, 79).onClick(t.button, t.ctrlKey, t.metaKey, t.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Yl(79, 671744, null, 0, Nh, [Ih, xc, eo], { routerLink: [0, 'routerLink'] }, null),
            zi(80, 1),
            (n()(),
            Hi(-1, null, [
              '\u0410\u043a\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044b \u0421\u041a\u0423\u0414'
            ])),
            (n()(), Mi(82, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (n()(),
            Mi(
              83,
              0,
              null,
              null,
              3,
              'a',
              [],
              [
                [1, 'target', 0],
                [8, 'href', 4]
              ],
              [[null, 'click']],
              function(n, e, t) {
                var l = !0;
                return (
                  'click' === e &&
                    (l = !1 !== jl(n, 84).onClick(t.button, t.ctrlKey, t.metaKey, t.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Yl(84, 671744, null, 0, Nh, [Ih, xc, eo], { routerLink: [0, 'routerLink'] }, null),
            zi(85, 1),
            (n()(),
            Hi(-1, null, [
              'GSM \u0441\u0438\u0433\u043d\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f'
            ])),
            (n()(), Mi(87, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (n()(),
            Mi(
              88,
              0,
              null,
              null,
              3,
              'a',
              [],
              [
                [1, 'target', 0],
                [8, 'href', 4]
              ],
              [[null, 'click']],
              function(n, e, t) {
                var l = !0;
                return (
                  'click' === e &&
                    (l = !1 !== jl(n, 89).onClick(t.button, t.ctrlKey, t.metaKey, t.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Yl(89, 671744, null, 0, Nh, [Ih, xc, eo], { routerLink: [0, 'routerLink'] }, null),
            zi(90, 1),
            (n()(),
            Hi(-1, null, [
              '\u0420\u043e\u0415 \u043a\u043e\u043c\u043c\u0443\u0442\u0430\u0442\u043e\u0440\u044b'
            ])),
            (n()(), Mi(92, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (n()(),
            Mi(
              93,
              0,
              null,
              null,
              3,
              'a',
              [],
              [
                [1, 'target', 0],
                [8, 'href', 4]
              ],
              [[null, 'click']],
              function(n, e, t) {
                var l = !0;
                return (
                  'click' === e &&
                    (l = !1 !== jl(n, 94).onClick(t.button, t.ctrlKey, t.metaKey, t.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Yl(94, 671744, null, 0, Nh, [Ih, xc, eo], { routerLink: [0, 'routerLink'] }, null),
            zi(95, 1),
            (n()(),
            Hi(-1, null, [
              'IP-\u0412\u0438\u0434\u0435\u043e\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u044b'
            ])),
            (n()(), Mi(97, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (n()(),
            Mi(
              98,
              0,
              null,
              null,
              3,
              'a',
              [],
              [
                [1, 'target', 0],
                [8, 'href', 4]
              ],
              [[null, 'click']],
              function(n, e, t) {
                var l = !0;
                return (
                  'click' === e &&
                    (l = !1 !== jl(n, 99).onClick(t.button, t.ctrlKey, t.metaKey, t.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Yl(99, 671744, null, 0, Nh, [Ih, xc, eo], { routerLink: [0, 'routerLink'] }, null),
            zi(100, 1),
            (n()(),
            Hi(-1, null, [
              'AHD \u0432\u0438\u0434\u0435\u043e\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u044b'
            ])),
            (n()(), Mi(102, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (n()(),
            Mi(
              103,
              0,
              null,
              null,
              3,
              'a',
              [],
              [
                [1, 'target', 0],
                [8, 'href', 4]
              ],
              [[null, 'click']],
              function(n, e, t) {
                var l = !0;
                return (
                  'click' === e &&
                    (l =
                      !1 !== jl(n, 104).onClick(t.button, t.ctrlKey, t.metaKey, t.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Yl(104, 671744, null, 0, Nh, [Ih, xc, eo], { routerLink: [0, 'routerLink'] }, null),
            zi(105, 1),
            (n()(),
            Hi(-1, null, [
              '\u0417\u0430\u043c\u043a\u0438, \u0437\u0430\u0449\u0435\u043b\u043a\u0438, \u0434\u043e\u0432\u043e\u0434\u0447\u0438\u043a\u0438'
            ])),
            (n()(), Mi(107, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (n()(),
            Mi(
              108,
              0,
              null,
              null,
              3,
              'a',
              [],
              [
                [1, 'target', 0],
                [8, 'href', 4]
              ],
              [[null, 'click']],
              function(n, e, t) {
                var l = !0;
                return (
                  'click' === e &&
                    (l =
                      !1 !== jl(n, 109).onClick(t.button, t.ctrlKey, t.metaKey, t.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Yl(109, 671744, null, 0, Nh, [Ih, xc, eo], { routerLink: [0, 'routerLink'] }, null),
            zi(110, 1),
            (n()(),
            Hi(-1, null, [
              '\u0418\u043d\u0436\u0435\u043a\u0442\u043e\u0440\u044b \u0438 \u0441\u043f\u043b\u0438\u0442\u0442\u0435\u0440\u044b'
            ])),
            (n()(), Mi(112, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (n()(),
            Mi(
              113,
              0,
              null,
              null,
              3,
              'a',
              [],
              [
                [1, 'target', 0],
                [8, 'href', 4]
              ],
              [[null, 'click']],
              function(n, e, t) {
                var l = !0;
                return (
                  'click' === e &&
                    (l =
                      !1 !== jl(n, 114).onClick(t.button, t.ctrlKey, t.metaKey, t.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Yl(114, 671744, null, 0, Nh, [Ih, xc, eo], { routerLink: [0, 'routerLink'] }, null),
            zi(115, 1),
            (n()(),
            Hi(-1, null, [
              '\u0410\u043a\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044b \u0438 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b'
            ])),
            (n()(), Mi(117, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (n()(),
            Mi(
              118,
              0,
              null,
              null,
              3,
              'a',
              [],
              [
                [1, 'target', 0],
                [8, 'href', 4]
              ],
              [[null, 'click']],
              function(n, e, t) {
                var l = !0;
                return (
                  'click' === e &&
                    (l =
                      !1 !== jl(n, 119).onClick(t.button, t.ctrlKey, t.metaKey, t.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Yl(119, 671744, null, 0, Nh, [Ih, xc, eo], { routerLink: [0, 'routerLink'] }, null),
            zi(120, 1),
            (n()(),
            Hi(-1, null, [
              '\u0423\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430 \u0440\u0430\u0434\u0438\u043e\u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f'
            ])),
            (n()(), Mi(122, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (n()(),
            Mi(
              123,
              0,
              null,
              null,
              3,
              'a',
              [],
              [
                [1, 'target', 0],
                [8, 'href', 4]
              ],
              [[null, 'click']],
              function(n, e, t) {
                var l = !0;
                return (
                  'click' === e &&
                    (l =
                      !1 !== jl(n, 124).onClick(t.button, t.ctrlKey, t.metaKey, t.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Yl(124, 671744, null, 0, Nh, [Ih, xc, eo], { routerLink: [0, 'routerLink'] }, null),
            zi(125, 1),
            (n()(), Hi(-1, null, ['\u0411\u0440\u0435\u043d\u0434\u044b'])),
            (n()(),
            Mi(
              127,
              0,
              null,
              null,
              5,
              'section',
              [['class', 'footer__bottom bottom']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              128,
              0,
              null,
              null,
              4,
              'div',
              [['class', 'bottom__wrapper']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Mi(
              129,
              0,
              null,
              null,
              1,
              'p',
              [['class', 'bottom__text']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Hi(-1, null, [
              '\xa9 2013- 2020. \u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 - free.'
            ])),
            (n()(),
            Mi(
              131,
              0,
              null,
              null,
              1,
              'p',
              [['class', 'bottom__text']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Hi(-1, null, [
              '\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0441\u0430\u0439\u0442\u0430-\u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0430 \u2013 \u043e\u0431\u044b\u0447\u043d\u044b\u0439 \u043a\u0443\u0440\u0441\u043e\u0432\u043e\u0439 \u0438\u043b\u0438 \u0434\u0438\u043f\u043b\u043e\u043c\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442'
            ]))
          ],
          function(n, e) {
            var t = n(e, 41, 0, '/contacts');
            n(e, 40, 0, t);
            var l = n(e, 50, 0, '/catalog');
            n(e, 49, 0, l);
            var r = n(e, 55, 0, '/catalog');
            n(e, 54, 0, r);
            var i = n(e, 60, 0, '/catalog');
            n(e, 59, 0, i);
            var u = n(e, 65, 0, '/catalog');
            n(e, 64, 0, u);
            var o = n(e, 70, 0, '/catalog');
            n(e, 69, 0, o);
            var a = n(e, 75, 0, '/catalog');
            n(e, 74, 0, a);
            var s = n(e, 80, 0, '/catalog');
            n(e, 79, 0, s);
            var c = n(e, 85, 0, '/catalog');
            n(e, 84, 0, c);
            var h = n(e, 90, 0, '/catalog');
            n(e, 89, 0, h);
            var f = n(e, 95, 0, '/catalog');
            n(e, 94, 0, f);
            var d = n(e, 100, 0, '/catalog');
            n(e, 99, 0, d);
            var p = n(e, 105, 0, '/catalog');
            n(e, 104, 0, p);
            var v = n(e, 110, 0, '/catalog');
            n(e, 109, 0, v);
            var g = n(e, 115, 0, '/catalog');
            n(e, 114, 0, g);
            var _ = n(e, 120, 0, '/catalog');
            n(e, 119, 0, _);
            var m = n(e, 125, 0, '/catalog');
            n(e, 124, 0, m);
          },
          function(n, e) {
            n(e, 39, 0, jl(e, 40).target, jl(e, 40).href),
              n(e, 48, 0, jl(e, 49).target, jl(e, 49).href),
              n(e, 53, 0, jl(e, 54).target, jl(e, 54).href),
              n(e, 58, 0, jl(e, 59).target, jl(e, 59).href),
              n(e, 63, 0, jl(e, 64).target, jl(e, 64).href),
              n(e, 68, 0, jl(e, 69).target, jl(e, 69).href),
              n(e, 73, 0, jl(e, 74).target, jl(e, 74).href),
              n(e, 78, 0, jl(e, 79).target, jl(e, 79).href),
              n(e, 83, 0, jl(e, 84).target, jl(e, 84).href),
              n(e, 88, 0, jl(e, 89).target, jl(e, 89).href),
              n(e, 93, 0, jl(e, 94).target, jl(e, 94).href),
              n(e, 98, 0, jl(e, 99).target, jl(e, 99).href),
              n(e, 103, 0, jl(e, 104).target, jl(e, 104).href),
              n(e, 108, 0, jl(e, 109).target, jl(e, 109).href),
              n(e, 113, 0, jl(e, 114).target, jl(e, 114).href),
              n(e, 118, 0, jl(e, 119).target, jl(e, 119).href),
              n(e, 123, 0, jl(e, 124).target, jl(e, 124).href);
          }
        );
      }
      var Fp = Ht({
        encapsulation: 0,
        styles: [
          [
            '*[_ngcontent-%COMP%]{margin:0;padding:0}.content[_ngcontent-%COMP%]{min-height:calc(100vh - 411px)}'
          ]
        ],
        data: {}
      });
      function zp(n) {
        return Gi(
          0,
          [
            (n()(),
            Mi(0, 0, null, null, 4, 'div', [['class', 'content']], null, null, null, null, null)),
            (n()(), Mi(1, 0, null, null, 1, 'app-header', [], null, null, null, Dp, Vp)),
            Yl(2, 49152, null, 0, Np, [], null, null),
            (n()(),
            Mi(3, 16777216, null, null, 1, 'router-outlet', [], null, null, null, null, null)),
            Yl(4, 212992, null, 0, Lh, [jh, Et, Je, [8, null], Oe], null, null),
            (n()(), Mi(5, 0, null, null, 1, 'app-footer', [], null, null, null, Up, Lp)),
            Yl(6, 114688, null, 0, jp, [], null, null)
          ],
          function(n, e) {
            n(e, 4, 0), n(e, 6, 0);
          },
          null
        );
      }
      var Hp = El(
          'app-root',
          Ju,
          function(n) {
            return Gi(
              0,
              [
                (n()(), Mi(0, 0, null, null, 1, 'app-root', [], null, null, null, zp, Fp)),
                Yl(1, 49152, null, 0, Ju, [], null, null)
              ],
              null,
              null
            );
          },
          {},
          {},
          []
        ),
        qp = function n() {
          _classCallCheck(this, n);
        },
        Bp = function n() {
          _classCallCheck(this, n);
        },
        Gp = function n() {
          _classCallCheck(this, n);
        },
        Kp = function n() {
          _classCallCheck(this, n);
        },
        Wp = function n() {
          _classCallCheck(this, n);
        },
        Zp = function n() {
          _classCallCheck(this, n);
        },
        Qp = function n() {
          _classCallCheck(this, n);
        },
        Yp = function n() {
          _classCallCheck(this, n);
        },
        $p = function n() {
          _classCallCheck(this, n);
        },
        Jp = function n() {
          _classCallCheck(this, n);
        },
        Xp = function n() {
          _classCallCheck(this, n);
        },
        nv = function n() {
          _classCallCheck(this, n);
        },
        ev = function n() {
          _classCallCheck(this, n);
        },
        tv = function n() {
          _classCallCheck(this, n);
        },
        lv = function n() {
          _classCallCheck(this, n);
        },
        rv = function n() {
          _classCallCheck(this, n);
        },
        iv = function n() {
          _classCallCheck(this, n);
        },
        uv = function n() {
          _classCallCheck(this, n);
        },
        ov = new Yu($u, [Ju], function(n) {
          return (function(n) {
            for (var e = {}, t = [], l = !1, r = 0; r < n.length; r++) {
              var i = n[r];
              i.token === Pe && !0 === i.value && (l = !0),
                1073741824 & i.flags && t.push(i.token),
                (i.index = r),
                (e[zt(i.token)] = i);
            }
            return { factory: null, providersByKey: e, providers: n, modules: t, isRoot: l };
          })([
            yl(512, Je, Xe, [[8, [sf, Ef, If, jf, zf, Zf, ud, hd, Ip, Hp]], [3, Je], Un]),
            yl(5120, Tr, Ei, [[3, Tr]]),
            yl(4608, so, co, [Tr, [2, ao]]),
            yl(5120, fr, Pi, [Kr]),
            yl(5120, br, wr, []),
            yl(5120, yt, xi, []),
            yl(5120, Ct, Oi, []),
            yl(4608, os, as, [_o]),
            yl(6144, Ce, null, [os]),
            yl(4608, ns, ts, []),
            yl(
              5120,
              Ta,
              function(n, e, t, l, r, i, u, o) {
                return [new Ja(n, e, t), new us(l), new ls(r, i, u, o)];
              },
              [_o, Kr, Er, _o, _o, ns, Sr, [2, es]]
            ),
            yl(4608, Ma, Ma, [Ta, Kr]),
            yl(135680, Ia, Ia, [_o]),
            yl(4608, La, La, [Ma, Ia, br]),
            yl(6144, rt, null, [La]),
            yl(6144, Ra, null, [Ia]),
            yl(4608, ni, ni, [Kr]),
            yl(5120, xc, ef, [Ih]),
            yl(4608, Hh, Hh, []),
            yl(6144, Fh, null, [Hh]),
            yl(135680, qh, qh, [Ih, fi, jr, Te, Fh]),
            yl(4608, zh, zh, []),
            yl(5120, Bh, Yh, [Ih, mo, Gh]),
            yl(5120, uf, rf, [tf]),
            yl(
              5120,
              Pr,
              function(n) {
                return [n];
              },
              [uf]
            ),
            yl(4608, qd, qd, []),
            yl(4608, kp, kp, []),
            yl(1073742336, go, go, []),
            yl(1024, Zn, gs, []),
            yl(
              1024,
              ri,
              function() {
                return [Zh()];
              },
              []
            ),
            yl(512, tf, tf, [Te]),
            yl(
              1024,
              Cr,
              function(n, e) {
                return [
                  ((t = n),
                  Ea('probe', Sa),
                  Ea(
                    'coreTokens',
                    Object.assign(
                      {},
                      Pa,
                      (t || []).reduce(function(n, e) {
                        return (n[e.name] = e.token), n;
                      }, {})
                    )
                  ),
                  function() {
                    return Sa;
                  }),
                  lf(e)
                ];
                var t;
              },
              [[2, ri], tf]
            ),
            yl(512, kr, kr, [[2, Cr]]),
            yl(131584, ci, ci, [Kr, Sr, Te, Zn, Je, kr]),
            yl(1073742336, Si, Si, [ci]),
            yl(1073742336, _s, _s, [[3, _s]]),
            yl(1024, Kh, Jh, [[3, Ih]]),
            yl(512, tc, lc, []),
            yl(512, jh, jh, []),
            yl(256, Gh, {}, []),
            yl(1024, eo, $h, [Xu, [2, to], Gh]),
            yl(512, lo, lo, [eo, Xu]),
            yl(512, jr, jr, []),
            yl(512, fi, vi, [jr, [2, di]]),
            yl(
              1024,
              Eh,
              function() {
                return [
                  [
                    { path: '', component: wf },
                    { path: 'catalog', component: Mf },
                    { path: 'about', component: Nf },
                    { path: 'support', component: Lf },
                    { path: 'clients', component: Gf },
                    { path: 'articles', component: ld },
                    { path: 'brands', component: od },
                    { path: 'contacts', component: Mp }
                  ]
                ];
              },
              []
            ),
            yl(1024, Ih, nf, [ci, tc, jh, lo, Te, fi, jr, Eh, Gh, [2, Sh], [2, xh]]),
            yl(1073742336, Qh, Qh, [
              [2, Kh],
              [2, Ih]
            ]),
            yl(1073742336, qp, qp, []),
            yl(1073742336, vd, vd, []),
            yl(1073742336, Bp, Bp, []),
            yl(1073742336, Gp, Gp, []),
            yl(1073742336, Kp, Kp, []),
            yl(1073742336, Wp, Wp, []),
            yl(1073742336, Zp, Zp, []),
            yl(1073742336, Qp, Qp, []),
            yl(1073742336, Yp, Yp, []),
            yl(1073742336, $p, $p, []),
            yl(1073742336, Jp, Jp, []),
            yl(1073742336, Xp, Xp, []),
            yl(1073742336, nv, nv, []),
            yl(1073742336, Cp, Cp, []),
            yl(1073742336, bp, bp, []),
            yl(1073742336, wp, wp, []),
            yl(1073742336, ev, ev, []),
            yl(1073742336, tv, tv, []),
            yl(1073742336, lv, lv, []),
            yl(1073742336, rv, rv, []),
            yl(1073742336, iv, iv, []),
            yl(1073742336, uv, uv, []),
            yl(1073742336, $u, $u, []),
            yl(256, Pe, !0, []),
            yl(256, 'API_KEY', '7f51d984-8723-4f7a-83a0-14ef48da9470', [])
          ]);
        });
      (function() {
        if (Yn) throw new Error('Cannot enable prod mode after platform setup.');
        Qn = !1;
      })(),
        vs()
          .bootstrapModuleFactory(ov)
          .catch(function(n) {
            return console.error(n);
          });
    },
    zn8P: function(n, e) {
      function t(n) {
        return Promise.resolve().then(function() {
          var e = new Error("Cannot find module '" + n + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        });
      }
      (t.keys = function() {
        return [];
      }),
        (t.resolve = t),
        (n.exports = t),
        (t.id = 'zn8P');
    }
  },
  [[0, 0]]
]);
