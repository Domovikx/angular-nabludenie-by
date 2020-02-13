(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    0: function(t, n, e) {
      t.exports = e('zUnb');
    },
    zUnb: function(t, n, e) {
      'use strict';
      function l(t) {
        return 'function' == typeof t;
      }
      e.r(n);
      let r = !1;
      const s = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(t) {
          if (t) {
            const t = new Error();
            console.warn(
              'DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' +
                t.stack
            );
          } else r && console.log('RxJS: Back to a better error behavior. Thank you. <3');
          r = t;
        },
        get useDeprecatedSynchronousErrorHandling() {
          return r;
        }
      };
      function i(t) {
        setTimeout(() => {
          throw t;
        });
      }
      const o = {
          closed: !0,
          next(t) {},
          error(t) {
            if (s.useDeprecatedSynchronousErrorHandling) throw t;
            i(t);
          },
          complete() {}
        },
        u = Array.isArray || (t => t && 'number' == typeof t.length);
      function a(t) {
        return null !== t && 'object' == typeof t;
      }
      function c(t) {
        return (
          Error.call(this),
          (this.message = t
            ? `${t.length} errors occurred during unsubscription:\n${t
                .map((t, n) => `${n + 1}) ${t.toString()}`)
                .join('\n  ')}`
            : ''),
          (this.name = 'UnsubscriptionError'),
          (this.errors = t),
          this
        );
      }
      c.prototype = Object.create(Error.prototype);
      const h = c;
      let d = (() => {
        class t {
          constructor(t) {
            (this.closed = !1),
              (this._parent = null),
              (this._parents = null),
              (this._subscriptions = null),
              t && (this._unsubscribe = t);
          }
          unsubscribe() {
            let t,
              n = !1;
            if (this.closed) return;
            let { _parent: e, _parents: r, _unsubscribe: s, _subscriptions: i } = this;
            (this.closed = !0),
              (this._parent = null),
              (this._parents = null),
              (this._subscriptions = null);
            let o = -1,
              c = r ? r.length : 0;
            for (; e; ) e.remove(this), (e = (++o < c && r[o]) || null);
            if (l(s))
              try {
                s.call(this);
              } catch (d) {
                (n = !0), (t = d instanceof h ? p(d.errors) : [d]);
              }
            if (u(i))
              for (o = -1, c = i.length; ++o < c; ) {
                const e = i[o];
                if (a(e))
                  try {
                    e.unsubscribe();
                  } catch (d) {
                    (n = !0),
                      (t = t || []),
                      d instanceof h ? (t = t.concat(p(d.errors))) : t.push(d);
                  }
              }
            if (n) throw new h(t);
          }
          add(n) {
            let e = n;
            switch (typeof n) {
              case 'function':
                e = new t(n);
              case 'object':
                if (e === this || e.closed || 'function' != typeof e.unsubscribe) return e;
                if (this.closed) return e.unsubscribe(), e;
                if (!(e instanceof t)) {
                  const n = e;
                  (e = new t()), (e._subscriptions = [n]);
                }
                break;
              default:
                if (!n) return t.EMPTY;
                throw new Error('unrecognized teardown ' + n + ' added to Subscription.');
            }
            if (e._addParent(this)) {
              const t = this._subscriptions;
              t ? t.push(e) : (this._subscriptions = [e]);
            }
            return e;
          }
          remove(t) {
            const n = this._subscriptions;
            if (n) {
              const e = n.indexOf(t);
              -1 !== e && n.splice(e, 1);
            }
          }
          _addParent(t) {
            let { _parent: n, _parents: e } = this;
            return (
              n !== t &&
              (n
                ? e
                  ? -1 === e.indexOf(t) && (e.push(t), !0)
                  : ((this._parents = [t]), !0)
                : ((this._parent = t), !0))
            );
          }
        }
        return (
          (t.EMPTY = (function(t) {
            return (t.closed = !0), t;
          })(new t())),
          t
        );
      })();
      function p(t) {
        return t.reduce((t, n) => t.concat(n instanceof h ? n.errors : n), []);
      }
      const g =
        'function' == typeof Symbol ? Symbol('rxSubscriber') : '@@rxSubscriber_' + Math.random();
      class f extends d {
        constructor(t, n, e) {
          switch (
            (super(),
            (this.syncErrorValue = null),
            (this.syncErrorThrown = !1),
            (this.syncErrorThrowable = !1),
            (this.isStopped = !1),
            arguments.length)
          ) {
            case 0:
              this.destination = o;
              break;
            case 1:
              if (!t) {
                this.destination = o;
                break;
              }
              if ('object' == typeof t) {
                t instanceof f
                  ? ((this.syncErrorThrowable = t.syncErrorThrowable),
                    (this.destination = t),
                    t.add(this))
                  : ((this.syncErrorThrowable = !0), (this.destination = new m(this, t)));
                break;
              }
            default:
              (this.syncErrorThrowable = !0), (this.destination = new m(this, t, n, e));
          }
        }
        [g]() {
          return this;
        }
        static create(t, n, e) {
          const l = new f(t, n, e);
          return (l.syncErrorThrowable = !1), l;
        }
        next(t) {
          this.isStopped || this._next(t);
        }
        error(t) {
          this.isStopped || ((this.isStopped = !0), this._error(t));
        }
        complete() {
          this.isStopped || ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed || ((this.isStopped = !0), super.unsubscribe());
        }
        _next(t) {
          this.destination.next(t);
        }
        _error(t) {
          this.destination.error(t), this.unsubscribe();
        }
        _complete() {
          this.destination.complete(), this.unsubscribe();
        }
        _unsubscribeAndRecycle() {
          const { _parent: t, _parents: n } = this;
          return (
            (this._parent = null),
            (this._parents = null),
            this.unsubscribe(),
            (this.closed = !1),
            (this.isStopped = !1),
            (this._parent = t),
            (this._parents = n),
            this
          );
        }
      }
      class m extends f {
        constructor(t, n, e, r) {
          let s;
          super(), (this._parentSubscriber = t);
          let i = this;
          l(n)
            ? (s = n)
            : n &&
              ((s = n.next),
              (e = n.error),
              (r = n.complete),
              n !== o &&
                ((i = Object.create(n)),
                l(i.unsubscribe) && this.add(i.unsubscribe.bind(i)),
                (i.unsubscribe = this.unsubscribe.bind(this)))),
            (this._context = i),
            (this._next = s),
            (this._error = e),
            (this._complete = r);
        }
        next(t) {
          if (!this.isStopped && this._next) {
            const { _parentSubscriber: n } = this;
            s.useDeprecatedSynchronousErrorHandling && n.syncErrorThrowable
              ? this.__tryOrSetError(n, this._next, t) && this.unsubscribe()
              : this.__tryOrUnsub(this._next, t);
          }
        }
        error(t) {
          if (!this.isStopped) {
            const { _parentSubscriber: n } = this,
              { useDeprecatedSynchronousErrorHandling: e } = s;
            if (this._error)
              e && n.syncErrorThrowable
                ? (this.__tryOrSetError(n, this._error, t), this.unsubscribe())
                : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
            else if (n.syncErrorThrowable)
              e ? ((n.syncErrorValue = t), (n.syncErrorThrown = !0)) : i(t), this.unsubscribe();
            else {
              if ((this.unsubscribe(), e)) throw t;
              i(t);
            }
          }
        }
        complete() {
          if (!this.isStopped) {
            const { _parentSubscriber: t } = this;
            if (this._complete) {
              const n = () => this._complete.call(this._context);
              s.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable
                ? (this.__tryOrSetError(t, n), this.unsubscribe())
                : (this.__tryOrUnsub(n), this.unsubscribe());
            } else this.unsubscribe();
          }
        }
        __tryOrUnsub(t, n) {
          try {
            t.call(this._context, n);
          } catch (e) {
            if ((this.unsubscribe(), s.useDeprecatedSynchronousErrorHandling)) throw e;
            i(e);
          }
        }
        __tryOrSetError(t, n, e) {
          if (!s.useDeprecatedSynchronousErrorHandling) throw new Error('bad call');
          try {
            n.call(this._context, e);
          } catch (l) {
            return s.useDeprecatedSynchronousErrorHandling
              ? ((t.syncErrorValue = l), (t.syncErrorThrown = !0), !0)
              : (i(l), !0);
          }
          return !1;
        }
        _unsubscribe() {
          const { _parentSubscriber: t } = this;
          (this._context = null), (this._parentSubscriber = null), t.unsubscribe();
        }
      }
      const _ = ('function' == typeof Symbol && Symbol.observable) || '@@observable';
      function v() {}
      function y(...t) {
        return w(t);
      }
      function w(t) {
        return t
          ? 1 === t.length
            ? t[0]
            : function(n) {
                return t.reduce((t, n) => n(t), n);
              }
          : v;
      }
      let b = (() => {
        class t {
          constructor(t) {
            (this._isScalar = !1), t && (this._subscribe = t);
          }
          lift(n) {
            const e = new t();
            return (e.source = this), (e.operator = n), e;
          }
          subscribe(t, n, e) {
            const { operator: l } = this,
              r = (function(t, n, e) {
                if (t) {
                  if (t instanceof f) return t;
                  if (t[g]) return t[g]();
                }
                return t || n || e ? new f(t, n, e) : new f(o);
              })(t, n, e);
            if (
              (r.add(
                l
                  ? l.call(r, this.source)
                  : this.source ||
                    (s.useDeprecatedSynchronousErrorHandling && !r.syncErrorThrowable)
                  ? this._subscribe(r)
                  : this._trySubscribe(r)
              ),
              s.useDeprecatedSynchronousErrorHandling &&
                r.syncErrorThrowable &&
                ((r.syncErrorThrowable = !1), r.syncErrorThrown))
            )
              throw r.syncErrorValue;
            return r;
          }
          _trySubscribe(t) {
            try {
              return this._subscribe(t);
            } catch (n) {
              s.useDeprecatedSynchronousErrorHandling &&
                ((t.syncErrorThrown = !0), (t.syncErrorValue = n)),
                (function(t) {
                  for (; t; ) {
                    const { closed: n, destination: e, isStopped: l } = t;
                    if (n || l) return !1;
                    t = e && e instanceof f ? e : null;
                  }
                  return !0;
                })(t)
                  ? t.error(n)
                  : console.warn(n);
            }
          }
          forEach(t, n) {
            return new (n = C(n))((n, e) => {
              let l;
              l = this.subscribe(
                n => {
                  try {
                    t(n);
                  } catch (r) {
                    e(r), l && l.unsubscribe();
                  }
                },
                e,
                n
              );
            });
          }
          _subscribe(t) {
            const { source: n } = this;
            return n && n.subscribe(t);
          }
          [_]() {
            return this;
          }
          pipe(...t) {
            return 0 === t.length ? this : w(t)(this);
          }
          toPromise(t) {
            return new (t = C(t))((t, n) => {
              let e;
              this.subscribe(
                t => (e = t),
                t => n(t),
                () => t(e)
              );
            });
          }
        }
        return (t.create = n => new t(n)), t;
      })();
      function C(t) {
        if ((t || (t = s.Promise || Promise), !t)) throw new Error('no Promise impl found');
        return t;
      }
      function x() {
        return (
          Error.call(this),
          (this.message = 'object unsubscribed'),
          (this.name = 'ObjectUnsubscribedError'),
          this
        );
      }
      x.prototype = Object.create(Error.prototype);
      const k = x;
      class E extends d {
        constructor(t, n) {
          super(), (this.subject = t), (this.subscriber = n), (this.closed = !1);
        }
        unsubscribe() {
          if (this.closed) return;
          this.closed = !0;
          const t = this.subject,
            n = t.observers;
          if (((this.subject = null), !n || 0 === n.length || t.isStopped || t.closed)) return;
          const e = n.indexOf(this.subscriber);
          -1 !== e && n.splice(e, 1);
        }
      }
      class S extends f {
        constructor(t) {
          super(t), (this.destination = t);
        }
      }
      let O = (() => {
        class t extends b {
          constructor() {
            super(),
              (this.observers = []),
              (this.closed = !1),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          [g]() {
            return new S(this);
          }
          lift(t) {
            const n = new P(this, this);
            return (n.operator = t), n;
          }
          next(t) {
            if (this.closed) throw new k();
            if (!this.isStopped) {
              const { observers: n } = this,
                e = n.length,
                l = n.slice();
              for (let r = 0; r < e; r++) l[r].next(t);
            }
          }
          error(t) {
            if (this.closed) throw new k();
            (this.hasError = !0), (this.thrownError = t), (this.isStopped = !0);
            const { observers: n } = this,
              e = n.length,
              l = n.slice();
            for (let r = 0; r < e; r++) l[r].error(t);
            this.observers.length = 0;
          }
          complete() {
            if (this.closed) throw new k();
            this.isStopped = !0;
            const { observers: t } = this,
              n = t.length,
              e = t.slice();
            for (let l = 0; l < n; l++) e[l].complete();
            this.observers.length = 0;
          }
          unsubscribe() {
            (this.isStopped = !0), (this.closed = !0), (this.observers = null);
          }
          _trySubscribe(t) {
            if (this.closed) throw new k();
            return super._trySubscribe(t);
          }
          _subscribe(t) {
            if (this.closed) throw new k();
            return this.hasError
              ? (t.error(this.thrownError), d.EMPTY)
              : this.isStopped
              ? (t.complete(), d.EMPTY)
              : (this.observers.push(t), new E(this, t));
          }
          asObservable() {
            const t = new b();
            return (t.source = this), t;
          }
        }
        return (t.create = (t, n) => new P(t, n)), t;
      })();
      class P extends O {
        constructor(t, n) {
          super(), (this.destination = t), (this.source = n);
        }
        next(t) {
          const { destination: n } = this;
          n && n.next && n.next(t);
        }
        error(t) {
          const { destination: n } = this;
          n && n.error && this.destination.error(t);
        }
        complete() {
          const { destination: t } = this;
          t && t.complete && this.destination.complete();
        }
        _subscribe(t) {
          const { source: n } = this;
          return n ? this.source.subscribe(t) : d.EMPTY;
        }
      }
      function M(t) {
        return t && 'function' == typeof t.schedule;
      }
      class T extends f {
        constructor(t, n, e) {
          super(),
            (this.parent = t),
            (this.outerValue = n),
            (this.outerIndex = e),
            (this.index = 0);
        }
        _next(t) {
          this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this);
        }
        _error(t) {
          this.parent.notifyError(t, this), this.unsubscribe();
        }
        _complete() {
          this.parent.notifyComplete(this), this.unsubscribe();
        }
      }
      const A = t => n => {
          for (let e = 0, l = t.length; e < l && !n.closed; e++) n.next(t[e]);
          n.closed || n.complete();
        },
        I = t => n => (
          t
            .then(
              t => {
                n.closed || (n.next(t), n.complete());
              },
              t => n.error(t)
            )
            .then(null, i),
          n
        );
      function R() {
        return 'function' == typeof Symbol && Symbol.iterator ? Symbol.iterator : '@@iterator';
      }
      const N = R(),
        V = t => n => {
          const e = t[N]();
          for (;;) {
            const t = e.next();
            if (t.done) {
              n.complete();
              break;
            }
            if ((n.next(t.value), n.closed)) break;
          }
          return (
            'function' == typeof e.return &&
              n.add(() => {
                e.return && e.return();
              }),
            n
          );
        },
        D = t => n => {
          const e = t[_]();
          if ('function' != typeof e.subscribe)
            throw new TypeError('Provided object does not correctly implement Symbol.observable');
          return e.subscribe(n);
        },
        L = t => t && 'number' == typeof t.length && 'function' != typeof t;
      function U(t) {
        return !!t && 'function' != typeof t.subscribe && 'function' == typeof t.then;
      }
      const j = t => {
        if (t instanceof b)
          return n => (t._isScalar ? (n.next(t.value), void n.complete()) : t.subscribe(n));
        if (t && 'function' == typeof t[_]) return D(t);
        if (L(t)) return A(t);
        if (U(t)) return I(t);
        if (t && 'function' == typeof t[N]) return V(t);
        {
          const n = a(t) ? 'an invalid object' : `'${t}'`;
          throw new TypeError(
            `You provided ${n} where a stream was expected.` +
              ' You can provide an Observable, Promise, Array, or Iterable.'
          );
        }
      };
      function F(t, n, e, l, r = new T(t, e, l)) {
        if (!r.closed) return j(n)(r);
      }
      class $ extends f {
        notifyNext(t, n, e, l, r) {
          this.destination.next(n);
        }
        notifyError(t, n) {
          this.destination.error(t);
        }
        notifyComplete(t) {
          this.destination.complete();
        }
      }
      function H(t, n) {
        return function(e) {
          if ('function' != typeof t)
            throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
          return e.lift(new z(t, n));
        };
      }
      class z {
        constructor(t, n) {
          (this.project = t), (this.thisArg = n);
        }
        call(t, n) {
          return n.subscribe(new q(t, this.project, this.thisArg));
        }
      }
      class q extends f {
        constructor(t, n, e) {
          super(t), (this.project = n), (this.count = 0), (this.thisArg = e || this);
        }
        _next(t) {
          let n;
          try {
            n = this.project.call(this.thisArg, t, this.count++);
          } catch (e) {
            return void this.destination.error(e);
          }
          this.destination.next(n);
        }
      }
      function B(t, n) {
        return new b(
          n
            ? e => {
                const l = new d();
                let r = 0;
                return (
                  l.add(
                    n.schedule(function() {
                      r !== t.length
                        ? (e.next(t[r++]), e.closed || l.add(this.schedule()))
                        : e.complete();
                    })
                  ),
                  l
                );
              }
            : A(t)
        );
      }
      function G(t, n) {
        if (!n) return t instanceof b ? t : new b(j(t));
        if (null != t) {
          if (
            (function(t) {
              return t && 'function' == typeof t[_];
            })(t)
          )
            return (function(t, n) {
              return new b(
                n
                  ? e => {
                      const l = new d();
                      return (
                        l.add(
                          n.schedule(() => {
                            const r = t[_]();
                            l.add(
                              r.subscribe({
                                next(t) {
                                  l.add(n.schedule(() => e.next(t)));
                                },
                                error(t) {
                                  l.add(n.schedule(() => e.error(t)));
                                },
                                complete() {
                                  l.add(n.schedule(() => e.complete()));
                                }
                              })
                            );
                          })
                        ),
                        l
                      );
                    }
                  : D(t)
              );
            })(t, n);
          if (U(t))
            return (function(t, n) {
              return new b(
                n
                  ? e => {
                      const l = new d();
                      return (
                        l.add(
                          n.schedule(() =>
                            t.then(
                              t => {
                                l.add(
                                  n.schedule(() => {
                                    e.next(t), l.add(n.schedule(() => e.complete()));
                                  })
                                );
                              },
                              t => {
                                l.add(n.schedule(() => e.error(t)));
                              }
                            )
                          )
                        ),
                        l
                      );
                    }
                  : I(t)
              );
            })(t, n);
          if (L(t)) return B(t, n);
          if (
            (function(t) {
              return t && 'function' == typeof t[N];
            })(t) ||
            'string' == typeof t
          )
            return (function(t, n) {
              if (!t) throw new Error('Iterable cannot be null');
              return new b(
                n
                  ? e => {
                      const l = new d();
                      let r;
                      return (
                        l.add(() => {
                          r && 'function' == typeof r.return && r.return();
                        }),
                        l.add(
                          n.schedule(() => {
                            (r = t[N]()),
                              l.add(
                                n.schedule(function() {
                                  if (e.closed) return;
                                  let t, n;
                                  try {
                                    const e = r.next();
                                    (t = e.value), (n = e.done);
                                  } catch (l) {
                                    return void e.error(l);
                                  }
                                  n ? e.complete() : (e.next(t), this.schedule());
                                })
                              );
                          })
                        ),
                        l
                      );
                    }
                  : V(t)
              );
            })(t, n);
        }
        throw new TypeError(((null !== t && typeof t) || t) + ' is not observable');
      }
      function K(t, n, e = Number.POSITIVE_INFINITY) {
        return 'function' == typeof n
          ? l => l.pipe(K((e, l) => G(t(e, l)).pipe(H((t, r) => n(e, t, l, r))), e))
          : ('number' == typeof n && (e = n), n => n.lift(new W(t, e)));
      }
      class W {
        constructor(t, n = Number.POSITIVE_INFINITY) {
          (this.project = t), (this.concurrent = n);
        }
        call(t, n) {
          return n.subscribe(new Z(t, this.project, this.concurrent));
        }
      }
      class Z extends $ {
        constructor(t, n, e = Number.POSITIVE_INFINITY) {
          super(t),
            (this.project = n),
            (this.concurrent = e),
            (this.hasCompleted = !1),
            (this.buffer = []),
            (this.active = 0),
            (this.index = 0);
        }
        _next(t) {
          this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t);
        }
        _tryNext(t) {
          let n;
          const e = this.index++;
          try {
            n = this.project(t, e);
          } catch (l) {
            return void this.destination.error(l);
          }
          this.active++, this._innerSub(n, t, e);
        }
        _innerSub(t, n, e) {
          const l = new T(this, void 0, void 0);
          this.destination.add(l), F(this, t, n, e, l);
        }
        _complete() {
          (this.hasCompleted = !0),
            0 === this.active && 0 === this.buffer.length && this.destination.complete(),
            this.unsubscribe();
        }
        notifyNext(t, n, e, l, r) {
          this.destination.next(n);
        }
        notifyComplete(t) {
          const n = this.buffer;
          this.remove(t),
            this.active--,
            n.length > 0
              ? this._next(n.shift())
              : 0 === this.active && this.hasCompleted && this.destination.complete();
        }
      }
      function Q(t) {
        return t;
      }
      function Y(t = Number.POSITIVE_INFINITY) {
        return K(Q, t);
      }
      function J() {
        return function(t) {
          return t.lift(new X(t));
        };
      }
      class X {
        constructor(t) {
          this.connectable = t;
        }
        call(t, n) {
          const { connectable: e } = this;
          e._refCount++;
          const l = new tt(t, e),
            r = n.subscribe(l);
          return l.closed || (l.connection = e.connect()), r;
        }
      }
      class tt extends f {
        constructor(t, n) {
          super(t), (this.connectable = n);
        }
        _unsubscribe() {
          const { connectable: t } = this;
          if (!t) return void (this.connection = null);
          this.connectable = null;
          const n = t._refCount;
          if (n <= 0) return void (this.connection = null);
          if (((t._refCount = n - 1), n > 1)) return void (this.connection = null);
          const { connection: e } = this,
            l = t._connection;
          (this.connection = null), !l || (e && l !== e) || l.unsubscribe();
        }
      }
      const nt = class extends b {
          constructor(t, n) {
            super(),
              (this.source = t),
              (this.subjectFactory = n),
              (this._refCount = 0),
              (this._isComplete = !1);
          }
          _subscribe(t) {
            return this.getSubject().subscribe(t);
          }
          getSubject() {
            const t = this._subject;
            return (t && !t.isStopped) || (this._subject = this.subjectFactory()), this._subject;
          }
          connect() {
            let t = this._connection;
            return (
              t ||
                ((this._isComplete = !1),
                (t = this._connection = new d()),
                t.add(this.source.subscribe(new lt(this.getSubject(), this))),
                t.closed ? ((this._connection = null), (t = d.EMPTY)) : (this._connection = t)),
              t
            );
          }
          refCount() {
            return J()(this);
          }
        }.prototype,
        et = {
          operator: { value: null },
          _refCount: { value: 0, writable: !0 },
          _subject: { value: null, writable: !0 },
          _connection: { value: null, writable: !0 },
          _subscribe: { value: nt._subscribe },
          _isComplete: { value: nt._isComplete, writable: !0 },
          getSubject: { value: nt.getSubject },
          connect: { value: nt.connect },
          refCount: { value: nt.refCount }
        };
      class lt extends S {
        constructor(t, n) {
          super(t), (this.connectable = n);
        }
        _error(t) {
          this._unsubscribe(), super._error(t);
        }
        _complete() {
          (this.connectable._isComplete = !0), this._unsubscribe(), super._complete();
        }
        _unsubscribe() {
          const t = this.connectable;
          if (t) {
            this.connectable = null;
            const n = t._connection;
            (t._refCount = 0), (t._subject = null), (t._connection = null), n && n.unsubscribe();
          }
        }
      }
      function rt() {
        return new O();
      }
      function st(t, n, e) {
        const l = (function(t) {
          return function(...n) {
            if (t) {
              const e = t(...n);
              for (const t in e) this[t] = e[t];
            }
          };
        })(n);
        function r(...t) {
          if (this instanceof r) return l.apply(this, t), this;
          const n = new r(...t);
          return (e.annotation = n), e;
          function e(t, e, l) {
            const r = t.hasOwnProperty('__parameters__')
              ? t.__parameters__
              : Object.defineProperty(t, '__parameters__', { value: [] }).__parameters__;
            for (; r.length <= l; ) r.push(null);
            return (r[l] = r[l] || []).push(n), t;
          }
        }
        return (
          e && (r.prototype = Object.create(e.prototype)),
          (r.prototype.ngMetadataName = t),
          (r.annotationCls = r),
          r
        );
      }
      const it = st('Inject', t => ({ token: t })),
        ot = st('Optional'),
        ut = st('Self'),
        at = st('SkipSelf');
      var ct = (function(t) {
        return (
          (t[(t.Default = 0)] = 'Default'),
          (t[(t.Host = 1)] = 'Host'),
          (t[(t.Self = 2)] = 'Self'),
          (t[(t.SkipSelf = 4)] = 'SkipSelf'),
          (t[(t.Optional = 8)] = 'Optional'),
          t
        );
      })({});
      function ht(t) {
        for (let n in t) if (t[n] === ht) return n;
        throw Error('Could not find renamed property on target object.');
      }
      function dt(t) {
        return {
          token: t.token,
          providedIn: t.providedIn || null,
          factory: t.factory,
          value: void 0
        };
      }
      const pt = dt;
      function gt(t) {
        const n = t[ft];
        return n && n.token === t ? n : null;
      }
      const ft = ht({ ngInjectableDef: ht });
      function mt(t) {
        if ('string' == typeof t) return t;
        if (t instanceof Array) return '[' + t.map(mt).join(', ') + ']';
        if (null == t) return '' + t;
        if (t.overriddenName) return `${t.overriddenName}`;
        if (t.name) return `${t.name}`;
        const n = t.toString();
        if (null == n) return '' + n;
        const e = n.indexOf('\n');
        return -1 === e ? n : n.substring(0, e);
      }
      const _t = ht({ __forward_ref__: ht });
      function vt(t) {
        return (
          (t.__forward_ref__ = vt),
          (t.toString = function() {
            return mt(this());
          }),
          t
        );
      }
      function yt(t) {
        const n = t;
        return 'function' == typeof n && n.hasOwnProperty(_t) && n.__forward_ref__ === vt ? n() : t;
      }
      const wt = 'undefined' != typeof globalThis && globalThis,
        bt = 'undefined' != typeof window && window,
        Ct =
          'undefined' != typeof self &&
          'undefined' != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          self,
        xt = 'undefined' != typeof global && global,
        kt = wt || xt || bt || Ct;
      class Et {
        constructor(t, n) {
          (this._desc = t),
            (this.ngMetadataName = 'InjectionToken'),
            (this.ngInjectableDef = void 0),
            'number' == typeof n
              ? (this.__NG_ELEMENT_ID__ = n)
              : void 0 !== n &&
                (this.ngInjectableDef = dt({
                  token: this,
                  providedIn: n.providedIn || 'root',
                  factory: n.factory
                }));
        }
        toString() {
          return `InjectionToken ${this._desc}`;
        }
      }
      const St = new Et('INJECTOR', -1),
        Ot = new Object(),
        Pt = /\n/gm,
        Mt = ht({ provide: String, useValue: ht });
      let Tt = void 0;
      function At(t) {
        const n = Tt;
        return (Tt = t), n;
      }
      function It(t, n = ct.Default) {
        return (function(t, n = ct.Default) {
          if (void 0 === Tt) throw new Error('inject() must be called from an injection context');
          return null === Tt
            ? (function(t, n, e) {
                const l = gt(t);
                if (l && 'root' == l.providedIn)
                  return void 0 === l.value ? (l.value = l.factory()) : l.value;
                if (e & ct.Optional) return null;
                throw new Error(`Injector: NOT_FOUND [${mt(t)}]`);
              })(t, 0, n)
            : Tt.get(t, n & ct.Optional ? null : void 0, n);
        })(t, n);
      }
      const Rt = It;
      class Nt {
        get(t, n = Ot) {
          if (n === Ot) {
            const n = new Error(`NullInjectorError: No provider for ${mt(t)}!`);
            throw ((n.name = 'NullInjectorError'), n);
          }
          return n;
        }
      }
      function Vt(t, n, e, l = null) {
        t = t && '\n' === t.charAt(0) && '\u0275' == t.charAt(1) ? t.substr(2) : t;
        let r = mt(n);
        if (n instanceof Array) r = n.map(mt).join(' -> ');
        else if ('object' == typeof n) {
          let t = [];
          for (let e in n)
            if (n.hasOwnProperty(e)) {
              let l = n[e];
              t.push(e + ':' + ('string' == typeof l ? JSON.stringify(l) : mt(l)));
            }
          r = `{${t.join(', ')}}`;
        }
        return `${e}${l ? '(' + l + ')' : ''}[${r}]: ${t.replace(Pt, '\n  ')}`;
      }
      class Dt {}
      class Lt {}
      function Ut(t, n, e) {
        n >= t.length ? t.push(e) : t.splice(n, 0, e);
      }
      function jt(t, n) {
        return n >= t.length - 1 ? t.pop() : t.splice(n, 1)[0];
      }
      const Ft = (function() {
          var t = { Emulated: 0, Native: 1, None: 2, ShadowDom: 3 };
          return (
            (t[t.Emulated] = 'Emulated'),
            (t[t.Native] = 'Native'),
            (t[t.None] = 'None'),
            (t[t.ShadowDom] = 'ShadowDom'),
            t
          );
        })(),
        $t = (() =>
          (
            ('undefined' != typeof requestAnimationFrame && requestAnimationFrame) ||
            setTimeout
          ).bind(kt))();
      function Ht(t) {
        return t.ngDebugContext;
      }
      function zt(t) {
        return t.ngOriginalError;
      }
      function qt(t, ...n) {
        t.error(...n);
      }
      class Bt {
        constructor() {
          this._console = console;
        }
        handleError(t) {
          const n = this._findOriginalError(t),
            e = this._findContext(t),
            l = (function(t) {
              return t.ngErrorLogger || qt;
            })(t);
          l(this._console, 'ERROR', t),
            n && l(this._console, 'ORIGINAL ERROR', n),
            e && l(this._console, 'ERROR CONTEXT', e);
        }
        _findContext(t) {
          return t ? (Ht(t) ? Ht(t) : this._findContext(zt(t))) : null;
        }
        _findOriginalError(t) {
          let n = zt(t);
          for (; n && zt(n); ) n = zt(n);
          return n;
        }
      }
      let Gt = !0,
        Kt = !1;
      function Wt() {
        return (Kt = !0), Gt;
      }
      class Zt {
        constructor(t) {
          if (
            ((this.defaultDoc = t),
            (this.inertDocument = this.defaultDoc.implementation.createHTMLDocument(
              'sanitization-inert'
            )),
            (this.inertBodyElement = this.inertDocument.body),
            null == this.inertBodyElement)
          ) {
            const t = this.inertDocument.createElement('html');
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
                    } catch (t) {
                      return !1;
                    }
                  })()
                    ? this.getInertBodyElement_DOMParser
                    : this.getInertBodyElement_InertDocument))
              : (this.getInertBodyElement = this.getInertBodyElement_XHR);
        }
        getInertBodyElement_XHR(t) {
          t = '<body><remove></remove>' + t + '</body>';
          try {
            t = encodeURI(t);
          } catch (l) {
            return null;
          }
          const n = new XMLHttpRequest();
          (n.responseType = 'document'),
            n.open('GET', 'data:text/html;charset=utf-8,' + t, !1),
            n.send(void 0);
          const e = n.response.body;
          return e.removeChild(e.firstChild), e;
        }
        getInertBodyElement_DOMParser(t) {
          t = '<body><remove></remove>' + t + '</body>';
          try {
            const n = new window.DOMParser().parseFromString(t, 'text/html').body;
            return n.removeChild(n.firstChild), n;
          } catch (n) {
            return null;
          }
        }
        getInertBodyElement_InertDocument(t) {
          const n = this.inertDocument.createElement('template');
          return 'content' in n
            ? ((n.innerHTML = t), n)
            : ((this.inertBodyElement.innerHTML = t),
              this.defaultDoc.documentMode && this.stripCustomNsAttrs(this.inertBodyElement),
              this.inertBodyElement);
        }
        stripCustomNsAttrs(t) {
          const n = t.attributes;
          for (let l = n.length - 1; 0 < l; l--) {
            const e = n.item(l).name;
            ('xmlns:ns1' !== e && 0 !== e.indexOf('ns1:')) || t.removeAttribute(e);
          }
          let e = t.firstChild;
          for (; e; )
            e.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(e), (e = e.nextSibling);
        }
      }
      const Qt = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        Yt = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
      function Jt(t) {
        return (t = String(t)).match(Qt) || t.match(Yt)
          ? t
          : (Wt() &&
              console.warn(
                `WARNING: sanitizing unsafe URL value ${t} (see http://g.co/ng/security#xss)`
              ),
            'unsafe:' + t);
      }
      function Xt(t) {
        const n = {};
        for (const e of t.split(',')) n[e] = !0;
        return n;
      }
      function tn(...t) {
        const n = {};
        for (const e of t) for (const t in e) e.hasOwnProperty(t) && (n[t] = !0);
        return n;
      }
      const nn = Xt('area,br,col,hr,img,wbr'),
        en = Xt('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr'),
        ln = Xt('rp,rt'),
        rn = tn(ln, en),
        sn = tn(
          nn,
          tn(
            en,
            Xt(
              'address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul'
            )
          ),
          tn(
            ln,
            Xt(
              'a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video'
            )
          ),
          rn
        ),
        on = Xt('background,cite,href,itemtype,longdesc,poster,src,xlink:href'),
        un = Xt('srcset'),
        an = tn(
          on,
          un,
          Xt(
            'abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width'
          ),
          Xt(
            'aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext'
          )
        ),
        cn = Xt('script,style,template');
      class hn {
        constructor() {
          (this.sanitizedSomething = !1), (this.buf = []);
        }
        sanitizeChildren(t) {
          let n = t.firstChild,
            e = !0;
          for (; n; )
            if (
              (n.nodeType === Node.ELEMENT_NODE
                ? (e = this.startElement(n))
                : n.nodeType === Node.TEXT_NODE
                ? this.chars(n.nodeValue)
                : (this.sanitizedSomething = !0),
              e && n.firstChild)
            )
              n = n.firstChild;
            else
              for (; n; ) {
                n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
                let t = this.checkClobberedElement(n, n.nextSibling);
                if (t) {
                  n = t;
                  break;
                }
                n = this.checkClobberedElement(n, n.parentNode);
              }
          return this.buf.join('');
        }
        startElement(t) {
          const n = t.nodeName.toLowerCase();
          if (!sn.hasOwnProperty(n)) return (this.sanitizedSomething = !0), !cn.hasOwnProperty(n);
          this.buf.push('<'), this.buf.push(n);
          const e = t.attributes;
          for (let r = 0; r < e.length; r++) {
            const t = e.item(r),
              n = t.name,
              s = n.toLowerCase();
            if (!an.hasOwnProperty(s)) {
              this.sanitizedSomething = !0;
              continue;
            }
            let i = t.value;
            on[s] && (i = Jt(i)),
              un[s] &&
                ((l = i),
                (i = (l = String(l))
                  .split(',')
                  .map(t => Jt(t.trim()))
                  .join(', '))),
              this.buf.push(' ', n, '="', gn(i), '"');
          }
          var l;
          return this.buf.push('>'), !0;
        }
        endElement(t) {
          const n = t.nodeName.toLowerCase();
          sn.hasOwnProperty(n) &&
            !nn.hasOwnProperty(n) &&
            (this.buf.push('</'), this.buf.push(n), this.buf.push('>'));
        }
        chars(t) {
          this.buf.push(gn(t));
        }
        checkClobberedElement(t, n) {
          if (
            n &&
            (t.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_CONTAINED_BY) ===
              Node.DOCUMENT_POSITION_CONTAINED_BY
          )
            throw new Error(
              `Failed to sanitize html because the element is clobbered: ${t.outerHTML}`
            );
          return n;
        }
      }
      const dn = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        pn = /([^\#-~ |!])/g;
      function gn(t) {
        return t
          .replace(/&/g, '&amp;')
          .replace(dn, function(t) {
            return (
              '&#' + (1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320) + 65536) + ';'
            );
          })
          .replace(pn, function(t) {
            return '&#' + t.charCodeAt(0) + ';';
          })
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
      }
      let fn;
      function mn(t) {
        return 'content' in t &&
          (function(t) {
            return t.nodeType === Node.ELEMENT_NODE && 'TEMPLATE' === t.nodeName;
          })(t)
          ? t.content
          : null;
      }
      const _n = (function() {
        var t = { NONE: 0, HTML: 1, STYLE: 2, SCRIPT: 3, URL: 4, RESOURCE_URL: 5 };
        return (
          (t[t.NONE] = 'NONE'),
          (t[t.HTML] = 'HTML'),
          (t[t.STYLE] = 'STYLE'),
          (t[t.SCRIPT] = 'SCRIPT'),
          (t[t.URL] = 'URL'),
          (t[t.RESOURCE_URL] = 'RESOURCE_URL'),
          t
        );
      })();
      class vn {}
      const yn = new RegExp(
          '^([-,."\'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|Z|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$',
          'g'
        ),
        wn = /^url\(([^)]+)\)$/,
        bn = /([A-Z])/g;
      function Cn(t) {
        try {
          return null != t ? t.toString().slice(0, 30) : t;
        } catch (n) {
          return '[ERROR] Exception while trying to serialize the value';
        }
      }
      let xn = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = () => kn()), t;
      })();
      const kn = (...t) => {},
        En = new Et('The presence of this token marks an injector as being the root injector.'),
        Sn = function(t, n, e) {
          return new In(t, n, e);
        };
      let On = (() => {
        class t {
          static create(t, n) {
            return Array.isArray(t) ? Sn(t, n, '') : Sn(t.providers, t.parent, t.name || '');
          }
        }
        return (
          (t.THROW_IF_NOT_FOUND = Ot),
          (t.NULL = new Nt()),
          (t.ngInjectableDef = dt({ token: t, providedIn: 'any', factory: () => It(St) })),
          (t.__NG_ELEMENT_ID__ = -1),
          t
        );
      })();
      const Pn = function(t) {
          return t;
        },
        Mn = [],
        Tn = Pn,
        An = function() {
          return Array.prototype.slice.call(arguments);
        };
      class In {
        constructor(t, n = On.NULL, e = null) {
          (this.parent = n), (this.source = e);
          const l = (this._records = new Map());
          l.set(On, { token: On, fn: Pn, deps: Mn, value: this, useNew: !1 }),
            l.set(St, { token: St, fn: Pn, deps: Mn, value: this, useNew: !1 }),
            (function t(n, e) {
              if (e)
                if ((e = yt(e)) instanceof Array) for (let l = 0; l < e.length; l++) t(n, e[l]);
                else {
                  if ('function' == typeof e) throw Nn('Function/Class not supported', e);
                  if (!e || 'object' != typeof e || !e.provide) throw Nn('Unexpected provider', e);
                  {
                    let t = yt(e.provide);
                    const l = (function(t) {
                      const n = (function(t) {
                        let n = Mn;
                        const e = t.deps;
                        if (e && e.length) {
                          n = [];
                          for (let t = 0; t < e.length; t++) {
                            let l = 6,
                              r = yt(e[t]);
                            if (r instanceof Array)
                              for (let t = 0, n = r; t < n.length; t++) {
                                const e = n[t];
                                e instanceof ot || e == ot
                                  ? (l |= 1)
                                  : e instanceof at || e == at
                                  ? (l &= -3)
                                  : e instanceof ut || e == ut
                                  ? (l &= -5)
                                  : (r = e instanceof it ? e.token : yt(e));
                              }
                            n.push({ token: r, options: l });
                          }
                        } else if (t.useExisting) n = [{ token: yt(t.useExisting), options: 6 }];
                        else if (!(e || Mt in t)) throw Nn("'deps' required", t);
                        return n;
                      })(t);
                      let e = Pn,
                        l = Mn,
                        r = !1,
                        s = yt(t.provide);
                      if (Mt in t) l = t.useValue;
                      else if (t.useFactory) e = t.useFactory;
                      else if (t.useExisting);
                      else if (t.useClass) (r = !0), (e = yt(t.useClass));
                      else {
                        if ('function' != typeof s)
                          throw Nn(
                            'StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable',
                            t
                          );
                        (r = !0), (e = s);
                      }
                      return { deps: n, fn: e, useNew: r, value: l };
                    })(e);
                    if (!0 === e.multi) {
                      let l = n.get(t);
                      if (l) {
                        if (l.fn !== An) throw Rn(t);
                      } else
                        n.set(
                          t,
                          (l = { token: e.provide, deps: [], useNew: !1, fn: An, value: Mn })
                        );
                      (t = e), l.deps.push({ token: t, options: 6 });
                    }
                    const r = n.get(t);
                    if (r && r.fn == An) throw Rn(t);
                    n.set(t, l);
                  }
                }
            })(l, t);
        }
        get(t, n, e = ct.Default) {
          const l = this._records.get(t);
          try {
            return (function t(n, e, l, r, s, i) {
              try {
                return (function(n, e, l, r, s, i) {
                  let o;
                  if (!e || i & ct.SkipSelf) i & ct.Self || (o = r.get(n, s, ct.Default));
                  else {
                    if (((o = e.value), o == Tn)) throw Error('\u0275Circular dependency');
                    if (o === Mn) {
                      e.value = Tn;
                      let n = void 0,
                        s = e.useNew,
                        i = e.fn,
                        u = e.deps,
                        a = Mn;
                      if (u.length) {
                        a = [];
                        for (let n = 0; n < u.length; n++) {
                          const e = u[n],
                            s = e.options,
                            i = 2 & s ? l.get(e.token) : void 0;
                          a.push(
                            t(
                              e.token,
                              i,
                              l,
                              i || 4 & s ? r : On.NULL,
                              1 & s ? null : On.THROW_IF_NOT_FOUND,
                              ct.Default
                            )
                          );
                        }
                      }
                      e.value = o = s ? new i(...a) : i.apply(n, a);
                    }
                  }
                  return o;
                })(n, e, l, r, s, i);
              } catch (o) {
                throw (o instanceof Error || (o = new Error(o)),
                (o.ngTempTokenPath = o.ngTempTokenPath || []).unshift(n),
                e && e.value == Tn && (e.value = Mn),
                o);
              }
            })(t, l, this._records, this.parent, n, e);
          } catch (r) {
            return (function(t, n, e, l) {
              const r = t.ngTempTokenPath;
              throw (n.__source && r.unshift(n.__source),
              (t.message = Vt('\n' + t.message, r, 'StaticInjectorError', l)),
              (t.ngTokenPath = r),
              (t.ngTempTokenPath = null),
              t);
            })(r, t, 0, this.source);
          }
        }
        toString() {
          const t = [];
          return this._records.forEach((n, e) => t.push(mt(e))), `StaticInjector[${t.join(', ')}]`;
        }
      }
      function Rn(t) {
        return Nn('Cannot mix multi providers and regular providers', t);
      }
      function Nn(t, n) {
        return new Error(Vt(t, n, 'StaticInjectorError'));
      }
      const Vn = new Et('AnalyzeForEntryComponents');
      let Dn = null;
      function Ln() {
        if (!Dn) {
          const t = kt.Symbol;
          if (t && t.iterator) Dn = t.iterator;
          else {
            const t = Object.getOwnPropertyNames(Map.prototype);
            for (let n = 0; n < t.length; ++n) {
              const e = t[n];
              'entries' !== e &&
                'size' !== e &&
                Map.prototype[e] === Map.prototype.entries &&
                (Dn = e);
            }
          }
        }
        return Dn;
      }
      function Un(t, n) {
        return t === n || ('number' == typeof t && 'number' == typeof n && isNaN(t) && isNaN(n));
      }
      function jn(t, n) {
        const e = $n(t),
          l = $n(n);
        if (e && l)
          return (function(t, n, e) {
            const l = t[Ln()](),
              r = n[Ln()]();
            for (;;) {
              const t = l.next(),
                n = r.next();
              if (t.done && n.done) return !0;
              if (t.done || n.done) return !1;
              if (!e(t.value, n.value)) return !1;
            }
          })(t, n, jn);
        {
          const r = t && ('object' == typeof t || 'function' == typeof t),
            s = n && ('object' == typeof n || 'function' == typeof n);
          return !(e || !r || l || !s) || Un(t, n);
        }
      }
      class Fn {
        constructor(t) {
          this.wrapped = t;
        }
        static wrap(t) {
          return new Fn(t);
        }
        static unwrap(t) {
          return Fn.isWrapped(t) ? t.wrapped : t;
        }
        static isWrapped(t) {
          return t instanceof Fn;
        }
      }
      function $n(t) {
        return !!Hn(t) && (Array.isArray(t) || (!(t instanceof Map) && Ln() in t));
      }
      function Hn(t) {
        return null !== t && ('function' == typeof t || 'object' == typeof t);
      }
      function zn(t) {
        return !!t && 'function' == typeof t.then;
      }
      function qn(t) {
        return !!t && 'function' == typeof t.subscribe;
      }
      class Bn {
        constructor(t, n, e) {
          (this.previousValue = t), (this.currentValue = n), (this.firstChange = e);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      class Gn {}
      function Kn(t) {
        const n = Error(
          `No component factory found for ${mt(t)}. Did you add it to @NgModule.entryComponents?`
        );
        return (n[Wn] = t), n;
      }
      const Wn = 'ngComponent';
      class Zn {
        resolveComponentFactory(t) {
          throw Kn(t);
        }
      }
      let Qn = (() => {
        class t {}
        return (t.NULL = new Zn()), t;
      })();
      class Yn {
        constructor(t, n, e) {
          (this._parent = n), (this._ngModule = e), (this._factories = new Map());
          for (let l = 0; l < t.length; l++) {
            const n = t[l];
            this._factories.set(n.componentType, n);
          }
        }
        resolveComponentFactory(t) {
          let n = this._factories.get(t);
          if ((!n && this._parent && (n = this._parent.resolveComponentFactory(t)), !n))
            throw Kn(t);
          return new Jn(n, this._ngModule);
        }
      }
      class Jn extends Gn {
        constructor(t, n) {
          super(),
            (this.factory = t),
            (this.ngModule = n),
            (this.selector = t.selector),
            (this.componentType = t.componentType),
            (this.ngContentSelectors = t.ngContentSelectors),
            (this.inputs = t.inputs),
            (this.outputs = t.outputs);
        }
        create(t, n, e, l) {
          return this.factory.create(t, n, e, l || this.ngModule);
        }
      }
      function Xn(...t) {}
      let te = (() => {
        class t {
          constructor(t) {
            this.nativeElement = t;
          }
        }
        return (t.__NG_ELEMENT_ID__ = () => ne(t)), t;
      })();
      const ne = Xn;
      class ee {}
      class le {}
      const re = (function() {
        var t = { Important: 1, DashCase: 2 };
        return (t[t.Important] = 'Important'), (t[t.DashCase] = 'DashCase'), t;
      })();
      let se = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = () => ie()), t;
      })();
      const ie = Xn;
      class oe {
        constructor(t) {
          (this.full = t),
            (this.major = t.split('.')[0]),
            (this.minor = t.split('.')[1]),
            (this.patch = t
              .split('.')
              .slice(2)
              .join('.'));
        }
      }
      const ue = new oe('8.2.14');
      class ae {
        constructor() {}
        supports(t) {
          return $n(t);
        }
        create(t) {
          return new he(t);
        }
      }
      const ce = (t, n) => n;
      class he {
        constructor(t) {
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
            (this._trackByFn = t || ce);
        }
        forEachItem(t) {
          let n;
          for (n = this._itHead; null !== n; n = n._next) t(n);
        }
        forEachOperation(t) {
          let n = this._itHead,
            e = this._removalsHead,
            l = 0,
            r = null;
          for (; n || e; ) {
            const s = !e || (n && n.currentIndex < fe(e, l, r)) ? n : e,
              i = fe(s, l, r),
              o = s.currentIndex;
            if (s === e) l--, (e = e._nextRemoved);
            else if (((n = n._next), null == s.previousIndex)) l++;
            else {
              r || (r = []);
              const t = i - l,
                n = o - l;
              if (t != n) {
                for (let e = 0; e < t; e++) {
                  const l = e < r.length ? r[e] : (r[e] = 0),
                    s = l + e;
                  n <= s && s < t && (r[e] = l + 1);
                }
                r[s.previousIndex] = n - t;
              }
            }
            i !== o && t(s, i, o);
          }
        }
        forEachPreviousItem(t) {
          let n;
          for (n = this._previousItHead; null !== n; n = n._nextPrevious) t(n);
        }
        forEachAddedItem(t) {
          let n;
          for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n);
        }
        forEachMovedItem(t) {
          let n;
          for (n = this._movesHead; null !== n; n = n._nextMoved) t(n);
        }
        forEachRemovedItem(t) {
          let n;
          for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n);
        }
        forEachIdentityChange(t) {
          let n;
          for (n = this._identityChangesHead; null !== n; n = n._nextIdentityChange) t(n);
        }
        diff(t) {
          if ((null == t && (t = []), !$n(t)))
            throw new Error(
              `Error trying to diff '${mt(t)}'. Only arrays and iterables are allowed`
            );
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let n,
            e,
            l,
            r = this._itHead,
            s = !1;
          if (Array.isArray(t)) {
            this.length = t.length;
            for (let n = 0; n < this.length; n++)
              (e = t[n]),
                (l = this._trackByFn(n, e)),
                null !== r && Un(r.trackById, l)
                  ? (s && (r = this._verifyReinsertion(r, e, l, n)),
                    Un(r.item, e) || this._addIdentityChange(r, e))
                  : ((r = this._mismatch(r, e, l, n)), (s = !0)),
                (r = r._next);
          } else
            (n = 0),
              (function(t, n) {
                if (Array.isArray(t)) for (let e = 0; e < t.length; e++) n(t[e]);
                else {
                  const e = t[Ln()]();
                  let l;
                  for (; !(l = e.next()).done; ) n(l.value);
                }
              })(t, t => {
                (l = this._trackByFn(n, t)),
                  null !== r && Un(r.trackById, l)
                    ? (s && (r = this._verifyReinsertion(r, t, l, n)),
                      Un(r.item, t) || this._addIdentityChange(r, t))
                    : ((r = this._mismatch(r, t, l, n)), (s = !0)),
                  (r = r._next),
                  n++;
              }),
              (this.length = n);
          return this._truncate(r), (this.collection = t), this.isDirty;
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let t, n;
            for (t = this._previousItHead = this._itHead; null !== t; t = t._next)
              t._nextPrevious = t._next;
            for (t = this._additionsHead; null !== t; t = t._nextAdded)
              t.previousIndex = t.currentIndex;
            for (
              this._additionsHead = this._additionsTail = null, t = this._movesHead;
              null !== t;
              t = n
            )
              (t.previousIndex = t.currentIndex), (n = t._nextMoved);
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(t, n, e, l) {
          let r;
          return (
            null === t ? (r = this._itTail) : ((r = t._prev), this._remove(t)),
            null !== (t = null === this._linkedRecords ? null : this._linkedRecords.get(e, l))
              ? (Un(t.item, n) || this._addIdentityChange(t, n), this._moveAfter(t, r, l))
              : null !==
                (t = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(e, null))
              ? (Un(t.item, n) || this._addIdentityChange(t, n), this._reinsertAfter(t, r, l))
              : (t = this._addAfter(new de(n, e), r, l)),
            t
          );
        }
        _verifyReinsertion(t, n, e, l) {
          let r = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(e, null);
          return (
            null !== r
              ? (t = this._reinsertAfter(r, t._prev, l))
              : t.currentIndex != l && ((t.currentIndex = l), this._addToMoves(t, l)),
            t
          );
        }
        _truncate(t) {
          for (; null !== t; ) {
            const n = t._next;
            this._addToRemovals(this._unlink(t)), (t = n);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail && (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail && (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail &&
              (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(t, n, e) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
          const l = t._prevRemoved,
            r = t._nextRemoved;
          return (
            null === l ? (this._removalsHead = r) : (l._nextRemoved = r),
            null === r ? (this._removalsTail = l) : (r._prevRemoved = l),
            this._insertAfter(t, n, e),
            this._addToMoves(t, e),
            t
          );
        }
        _moveAfter(t, n, e) {
          return this._unlink(t), this._insertAfter(t, n, e), this._addToMoves(t, e), t;
        }
        _addAfter(t, n, e) {
          return (
            this._insertAfter(t, n, e),
            (this._additionsTail =
              null === this._additionsTail
                ? (this._additionsHead = t)
                : (this._additionsTail._nextAdded = t)),
            t
          );
        }
        _insertAfter(t, n, e) {
          const l = null === n ? this._itHead : n._next;
          return (
            (t._next = l),
            (t._prev = n),
            null === l ? (this._itTail = t) : (l._prev = t),
            null === n ? (this._itHead = t) : (n._next = t),
            null === this._linkedRecords && (this._linkedRecords = new ge()),
            this._linkedRecords.put(t),
            (t.currentIndex = e),
            t
          );
        }
        _remove(t) {
          return this._addToRemovals(this._unlink(t));
        }
        _unlink(t) {
          null !== this._linkedRecords && this._linkedRecords.remove(t);
          const n = t._prev,
            e = t._next;
          return (
            null === n ? (this._itHead = e) : (n._next = e),
            null === e ? (this._itTail = n) : (e._prev = n),
            t
          );
        }
        _addToMoves(t, n) {
          return t.previousIndex === n
            ? t
            : ((this._movesTail =
                null === this._movesTail
                  ? (this._movesHead = t)
                  : (this._movesTail._nextMoved = t)),
              t);
        }
        _addToRemovals(t) {
          return (
            null === this._unlinkedRecords && (this._unlinkedRecords = new ge()),
            this._unlinkedRecords.put(t),
            (t.currentIndex = null),
            (t._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = t), (t._prevRemoved = null))
              : ((t._prevRemoved = this._removalsTail),
                (this._removalsTail = this._removalsTail._nextRemoved = t)),
            t
          );
        }
        _addIdentityChange(t, n) {
          return (
            (t.item = n),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = t)
                : (this._identityChangesTail._nextIdentityChange = t)),
            t
          );
        }
      }
      class de {
        constructor(t, n) {
          (this.item = t),
            (this.trackById = n),
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
        }
      }
      class pe {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(t) {
          null === this._head
            ? ((this._head = this._tail = t), (t._nextDup = null), (t._prevDup = null))
            : ((this._tail._nextDup = t),
              (t._prevDup = this._tail),
              (t._nextDup = null),
              (this._tail = t));
        }
        get(t, n) {
          let e;
          for (e = this._head; null !== e; e = e._nextDup)
            if ((null === n || n <= e.currentIndex) && Un(e.trackById, t)) return e;
          return null;
        }
        remove(t) {
          const n = t._prevDup,
            e = t._nextDup;
          return (
            null === n ? (this._head = e) : (n._nextDup = e),
            null === e ? (this._tail = n) : (e._prevDup = n),
            null === this._head
          );
        }
      }
      class ge {
        constructor() {
          this.map = new Map();
        }
        put(t) {
          const n = t.trackById;
          let e = this.map.get(n);
          e || ((e = new pe()), this.map.set(n, e)), e.add(t);
        }
        get(t, n) {
          const e = this.map.get(t);
          return e ? e.get(t, n) : null;
        }
        remove(t) {
          const n = t.trackById;
          return this.map.get(n).remove(t) && this.map.delete(n), t;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function fe(t, n, e) {
        const l = t.previousIndex;
        if (null === l) return l;
        let r = 0;
        return e && l < e.length && (r = e[l]), l + n + r;
      }
      class me {
        constructor() {}
        supports(t) {
          return t instanceof Map || Hn(t);
        }
        create() {
          return new _e();
        }
      }
      class _e {
        constructor() {
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
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._changesHead ||
            null !== this._removalsHead
          );
        }
        forEachItem(t) {
          let n;
          for (n = this._mapHead; null !== n; n = n._next) t(n);
        }
        forEachPreviousItem(t) {
          let n;
          for (n = this._previousMapHead; null !== n; n = n._nextPrevious) t(n);
        }
        forEachChangedItem(t) {
          let n;
          for (n = this._changesHead; null !== n; n = n._nextChanged) t(n);
        }
        forEachAddedItem(t) {
          let n;
          for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n);
        }
        forEachRemovedItem(t) {
          let n;
          for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n);
        }
        diff(t) {
          if (t) {
            if (!(t instanceof Map || Hn(t)))
              throw new Error(`Error trying to diff '${mt(t)}'. Only maps and objects are allowed`);
          } else t = new Map();
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let n = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(t, (t, e) => {
              if (n && n.key === e)
                this._maybeAddToChanges(n, t), (this._appendAfter = n), (n = n._next);
              else {
                const l = this._getOrCreateRecordForKey(e, t);
                n = this._insertBeforeOrAppend(n, l);
              }
            }),
            n)
          ) {
            n._prev && (n._prev._next = null), (this._removalsHead = n);
            for (let t = n; null !== t; t = t._nextRemoved)
              t === this._mapHead && (this._mapHead = null),
                this._records.delete(t.key),
                (t._nextRemoved = t._next),
                (t.previousValue = t.currentValue),
                (t.currentValue = null),
                (t._prev = null),
                (t._next = null);
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(t, n) {
          if (t) {
            const e = t._prev;
            return (
              (n._next = t),
              (n._prev = e),
              (t._prev = n),
              e && (e._next = n),
              t === this._mapHead && (this._mapHead = n),
              (this._appendAfter = t),
              t
            );
          }
          return (
            this._appendAfter
              ? ((this._appendAfter._next = n), (n._prev = this._appendAfter))
              : (this._mapHead = n),
            (this._appendAfter = n),
            null
          );
        }
        _getOrCreateRecordForKey(t, n) {
          if (this._records.has(t)) {
            const e = this._records.get(t);
            this._maybeAddToChanges(e, n);
            const l = e._prev,
              r = e._next;
            return l && (l._next = r), r && (r._prev = l), (e._next = null), (e._prev = null), e;
          }
          const e = new ve(t);
          return this._records.set(t, e), (e.currentValue = n), this._addToAdditions(e), e;
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              this._previousMapHead = this._mapHead, t = this._previousMapHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._changesHead; null !== t; t = t._nextChanged)
              t.previousValue = t.currentValue;
            for (t = this._additionsHead; null != t; t = t._nextAdded)
              t.previousValue = t.currentValue;
            (this._changesHead = this._changesTail = null),
              (this._additionsHead = this._additionsTail = null),
              (this._removalsHead = null);
          }
        }
        _maybeAddToChanges(t, n) {
          Un(n, t.currentValue) ||
            ((t.previousValue = t.currentValue), (t.currentValue = n), this._addToChanges(t));
        }
        _addToAdditions(t) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = t)
            : ((this._additionsTail._nextAdded = t), (this._additionsTail = t));
        }
        _addToChanges(t) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = t)
            : ((this._changesTail._nextChanged = t), (this._changesTail = t));
        }
        _forEach(t, n) {
          t instanceof Map ? t.forEach(n) : Object.keys(t).forEach(e => n(t[e], e));
        }
      }
      class ve {
        constructor(t) {
          (this.key = t),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        }
      }
      let ye = (() => {
          class t {
            constructor(t) {
              this.factories = t;
            }
            static create(n, e) {
              if (null != e) {
                const t = e.factories.slice();
                n = n.concat(t);
              }
              return new t(n);
            }
            static extend(n) {
              return {
                provide: t,
                useFactory: e => {
                  if (!e)
                    throw new Error('Cannot extend IterableDiffers without a parent injector');
                  return t.create(n, e);
                },
                deps: [[t, new at(), new ot()]]
              };
            }
            find(t) {
              const n = this.factories.find(n => n.supports(t));
              if (null != n) return n;
              throw new Error(
                `Cannot find a differ supporting object '${t}' of type '${((e = t),
                e.name || typeof e)}'`
              );
              var e;
            }
          }
          return (
            (t.ngInjectableDef = dt({
              token: t,
              providedIn: 'root',
              factory: () => new t([new ae()])
            })),
            t
          );
        })(),
        we = (() => {
          class t {
            constructor(t) {
              this.factories = t;
            }
            static create(n, e) {
              if (e) {
                const t = e.factories.slice();
                n = n.concat(t);
              }
              return new t(n);
            }
            static extend(n) {
              return {
                provide: t,
                useFactory: e => {
                  if (!e)
                    throw new Error('Cannot extend KeyValueDiffers without a parent injector');
                  return t.create(n, e);
                },
                deps: [[t, new at(), new ot()]]
              };
            }
            find(t) {
              const n = this.factories.find(n => n.supports(t));
              if (n) return n;
              throw new Error(`Cannot find a differ supporting object '${t}'`);
            }
          }
          return (
            (t.ngInjectableDef = dt({
              token: t,
              providedIn: 'root',
              factory: () => new t([new me()])
            })),
            t
          );
        })();
      const be = [new me()],
        Ce = new ye([new ae()]),
        xe = new we(be);
      let ke = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = () => Ee(t, te)), t;
      })();
      const Ee = Xn;
      let Se = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = () => Oe(t, te)), t;
      })();
      const Oe = Xn;
      function Pe(t, n, e, l) {
        let r = `ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '${n}'. Current value: '${e}'.`;
        return (
          l &&
            (r +=
              ' It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?'),
          (function(t, n) {
            const e = new Error(t);
            return Me(e, n), e;
          })(r, t)
        );
      }
      function Me(t, n) {
        (t.ngDebugContext = n), (t.ngErrorLogger = n.logError.bind(n));
      }
      function Te(t) {
        return new Error(`ViewDestroyedError: Attempt to use a destroyed view: ${t}`);
      }
      function Ae(t, n, e) {
        const l = t.state,
          r = 1792 & l;
        return r === n ? ((t.state = (-1793 & l) | e), (t.initIndex = -1), !0) : r === e;
      }
      function Ie(t, n, e) {
        return (1792 & t.state) === n && t.initIndex <= e && ((t.initIndex = e + 1), !0);
      }
      function Re(t, n) {
        return t.nodes[n];
      }
      function Ne(t, n) {
        return t.nodes[n];
      }
      function Ve(t, n) {
        return t.nodes[n];
      }
      function De(t, n) {
        return t.nodes[n];
      }
      function Le(t, n) {
        return t.nodes[n];
      }
      const Ue = {
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
        je = () => {},
        Fe = new Map();
      function $e(t) {
        let n = Fe.get(t);
        return n || ((n = mt(t) + '_' + Fe.size), Fe.set(t, n)), n;
      }
      function He(t) {
        return {
          id: '$$undefined',
          styles: t.styles,
          encapsulation: t.encapsulation,
          data: t.data
        };
      }
      let ze = 0;
      function qe(t, n, e, l) {
        return !(!(2 & t.state) && Un(t.oldValues[n.bindingIndex + e], l));
      }
      function Be(t, n, e, l) {
        return !!qe(t, n, e, l) && ((t.oldValues[n.bindingIndex + e] = l), !0);
      }
      function Ge(t, n, e, l) {
        const r = t.oldValues[n.bindingIndex + e];
        if (1 & t.state || !jn(r, l)) {
          const s = n.bindings[e].name;
          throw Pe(
            Ue.createDebugContext(t, n.nodeIndex),
            `${s}: ${r}`,
            `${s}: ${l}`,
            0 != (1 & t.state)
          );
        }
      }
      function Ke(t) {
        let n = t;
        for (; n; ) 2 & n.def.flags && (n.state |= 8), (n = n.viewContainerParent || n.parent);
      }
      function We(t, n) {
        let e = t;
        for (; e && e !== n; ) (e.state |= 64), (e = e.viewContainerParent || e.parent);
      }
      function Ze(t, n, e, l) {
        try {
          return (
            Ke(33554432 & t.def.nodes[n].flags ? Ne(t, n).componentView : t),
            Ue.handleEvent(t, n, e, l)
          );
        } catch (r) {
          t.root.errorHandler.handleError(r);
        }
      }
      function Qe(t) {
        return t.parent ? Ne(t.parent, t.parentNodeDef.nodeIndex) : null;
      }
      function Ye(t) {
        return t.parent ? t.parentNodeDef.parent : null;
      }
      function Je(t, n) {
        switch (201347067 & n.flags) {
          case 1:
            return Ne(t, n.nodeIndex).renderElement;
          case 2:
            return Re(t, n.nodeIndex).renderText;
        }
      }
      function Xe(t) {
        return !!t.parent && !!(32768 & t.parentNodeDef.flags);
      }
      function tl(t) {
        return !(!t.parent || 32768 & t.parentNodeDef.flags);
      }
      function nl(t) {
        return 1 << t % 32;
      }
      function el(t) {
        const n = {};
        let e = 0;
        const l = {};
        return (
          t &&
            t.forEach(([t, r]) => {
              'number' == typeof t ? ((n[t] = r), (e |= nl(t))) : (l[t] = r);
            }),
          { matchedQueries: n, references: l, matchedQueryIds: e }
        );
      }
      function ll(t, n) {
        return t.map(t => {
          let e, l;
          return (
            Array.isArray(t) ? ([l, e] = t) : ((l = 0), (e = t)),
            e &&
              ('function' == typeof e || 'object' == typeof e) &&
              n &&
              Object.defineProperty(e, '__source', { value: n, configurable: !0 }),
            { flags: l, token: e, tokenKey: $e(e) }
          );
        });
      }
      function rl(t, n, e) {
        let l = e.renderParent;
        return l
          ? 0 == (1 & l.flags) ||
            0 == (33554432 & l.flags) ||
            (l.element.componentRendererType &&
              l.element.componentRendererType.encapsulation === Ft.Native)
            ? Ne(t, e.renderParent.nodeIndex).renderElement
            : void 0
          : n;
      }
      const sl = new WeakMap();
      function il(t) {
        let n = sl.get(t);
        return n || ((n = t(() => je)), (n.factory = t), sl.set(t, n)), n;
      }
      function ol(t, n, e, l, r) {
        3 === n && (e = t.renderer.parentNode(Je(t, t.def.lastRenderRootNode))),
          ul(t, n, 0, t.def.nodes.length - 1, e, l, r);
      }
      function ul(t, n, e, l, r, s, i) {
        for (let o = e; o <= l; o++) {
          const e = t.def.nodes[o];
          11 & e.flags && cl(t, e, n, r, s, i), (o += e.childCount);
        }
      }
      function al(t, n, e, l, r, s) {
        let i = t;
        for (; i && !Xe(i); ) i = i.parent;
        const o = i.parent,
          u = Ye(i),
          a = u.nodeIndex + u.childCount;
        for (let c = u.nodeIndex + 1; c <= a; c++) {
          const t = o.def.nodes[c];
          t.ngContentIndex === n && cl(o, t, e, l, r, s), (c += t.childCount);
        }
        if (!o.parent) {
          const i = t.root.projectableNodes[n];
          if (i) for (let n = 0; n < i.length; n++) hl(t, i[n], e, l, r, s);
        }
      }
      function cl(t, n, e, l, r, s) {
        if (8 & n.flags) al(t, n.ngContent.index, e, l, r, s);
        else {
          const i = Je(t, n);
          if (
            (3 === e && 33554432 & n.flags && 48 & n.bindingFlags
              ? (16 & n.bindingFlags && hl(t, i, e, l, r, s),
                32 & n.bindingFlags && hl(Ne(t, n.nodeIndex).componentView, i, e, l, r, s))
              : hl(t, i, e, l, r, s),
            16777216 & n.flags)
          ) {
            const i = Ne(t, n.nodeIndex).viewContainer._embeddedViews;
            for (let t = 0; t < i.length; t++) ol(i[t], e, l, r, s);
          }
          1 & n.flags &&
            !n.element.name &&
            ul(t, e, n.nodeIndex + 1, n.nodeIndex + n.childCount, l, r, s);
        }
      }
      function hl(t, n, e, l, r, s) {
        const i = t.renderer;
        switch (e) {
          case 1:
            i.appendChild(l, n);
            break;
          case 2:
            i.insertBefore(l, n, r);
            break;
          case 3:
            i.removeChild(l, n);
            break;
          case 0:
            s.push(n);
        }
      }
      const dl = /^:([^:]+):(.+)$/;
      function pl(t) {
        if (':' === t[0]) {
          const n = t.match(dl);
          return [n[1], n[2]];
        }
        return ['', t];
      }
      function gl(t) {
        let n = 0;
        for (let e = 0; e < t.length; e++) n |= t[e].flags;
        return n;
      }
      const fl = new Object(),
        ml = $e(On),
        _l = $e(St),
        vl = $e(Dt);
      function yl(t, n, e, l) {
        return (e = yt(e)), { index: -1, deps: ll(l, mt(n)), flags: t, token: n, value: e };
      }
      function wl(t, n, e = On.THROW_IF_NOT_FOUND) {
        const l = At(t);
        try {
          if (8 & n.flags) return n.token;
          if ((2 & n.flags && (e = null), 1 & n.flags)) return t._parent.get(n.token, e);
          const i = n.tokenKey;
          switch (i) {
            case ml:
            case _l:
            case vl:
              return t;
          }
          const o = t._def.providersByKey[i];
          let u;
          if (o) {
            let n = t._providers[o.index];
            return void 0 === n && (n = t._providers[o.index] = bl(t, o)), n === fl ? void 0 : n;
          }
          if (
            (u = gt(n.token)) &&
            ((r = t),
            null != (s = u).providedIn &&
              ((function(t, n) {
                return t._def.modules.indexOf(n) > -1;
              })(r, s.providedIn) ||
                ('root' === s.providedIn && r._def.isRoot)))
          ) {
            const e = t._providers.length;
            return (
              (t._def.providers[e] = t._def.providersByKey[n.tokenKey] = {
                flags: 5120,
                value: u.factory,
                deps: [],
                index: e,
                token: n.token
              }),
              (t._providers[e] = fl),
              (t._providers[e] = bl(t, t._def.providersByKey[n.tokenKey]))
            );
          }
          return 4 & n.flags ? e : t._parent.get(n.token, e);
        } finally {
          At(l);
        }
        var r, s;
      }
      function bl(t, n) {
        let e;
        switch (201347067 & n.flags) {
          case 512:
            e = (function(t, n, e) {
              const l = e.length;
              switch (l) {
                case 0:
                  return new n();
                case 1:
                  return new n(wl(t, e[0]));
                case 2:
                  return new n(wl(t, e[0]), wl(t, e[1]));
                case 3:
                  return new n(wl(t, e[0]), wl(t, e[1]), wl(t, e[2]));
                default:
                  const r = new Array(l);
                  for (let n = 0; n < l; n++) r[n] = wl(t, e[n]);
                  return new n(...r);
              }
            })(t, n.value, n.deps);
            break;
          case 1024:
            e = (function(t, n, e) {
              const l = e.length;
              switch (l) {
                case 0:
                  return n();
                case 1:
                  return n(wl(t, e[0]));
                case 2:
                  return n(wl(t, e[0]), wl(t, e[1]));
                case 3:
                  return n(wl(t, e[0]), wl(t, e[1]), wl(t, e[2]));
                default:
                  const r = Array(l);
                  for (let n = 0; n < l; n++) r[n] = wl(t, e[n]);
                  return n(...r);
              }
            })(t, n.value, n.deps);
            break;
          case 2048:
            e = wl(t, n.deps[0]);
            break;
          case 256:
            e = n.value;
        }
        return (
          e === fl ||
            null === e ||
            'object' != typeof e ||
            131072 & n.flags ||
            'function' != typeof e.ngOnDestroy ||
            (n.flags |= 131072),
          void 0 === e ? fl : e
        );
      }
      function Cl(t, n) {
        const e = t.viewContainer._embeddedViews;
        if (((null == n || n >= e.length) && (n = e.length - 1), n < 0)) return null;
        const l = e[n];
        return (l.viewContainerParent = null), jt(e, n), Ue.dirtyParentQueries(l), kl(l), l;
      }
      function xl(t, n, e) {
        const l = n ? Je(n, n.def.lastRenderRootNode) : t.renderElement,
          r = e.renderer.parentNode(l),
          s = e.renderer.nextSibling(l);
        ol(e, 2, r, s, void 0);
      }
      function kl(t) {
        ol(t, 3, null, null, void 0);
      }
      const El = new Object();
      function Sl(t, n, e, l, r, s) {
        return new Ol(t, n, e, l, r, s);
      }
      class Ol extends Gn {
        constructor(t, n, e, l, r, s) {
          super(),
            (this.selector = t),
            (this.componentType = n),
            (this._inputs = l),
            (this._outputs = r),
            (this.ngContentSelectors = s),
            (this.viewDefFactory = e);
        }
        get inputs() {
          const t = [],
            n = this._inputs;
          for (let e in n) t.push({ propName: e, templateName: n[e] });
          return t;
        }
        get outputs() {
          const t = [];
          for (let n in this._outputs) t.push({ propName: n, templateName: this._outputs[n] });
          return t;
        }
        create(t, n, e, l) {
          if (!l) throw new Error('ngModule should be provided');
          const r = il(this.viewDefFactory),
            s = r.nodes[0].element.componentProvider.nodeIndex,
            i = Ue.createRootView(t, n || [], e, r, l, El),
            o = Ve(i, s).instance;
          return (
            e && i.renderer.setAttribute(Ne(i, 0).renderElement, 'ng-version', ue.full),
            new Pl(i, new Il(i), o)
          );
        }
      }
      class Pl extends class {} {
        constructor(t, n, e) {
          super(),
            (this._view = t),
            (this._viewRef = n),
            (this._component = e),
            (this._elDef = this._view.def.nodes[0]),
            (this.hostView = n),
            (this.changeDetectorRef = n),
            (this.instance = e);
        }
        get location() {
          return new te(Ne(this._view, this._elDef.nodeIndex).renderElement);
        }
        get injector() {
          return new Dl(this._view, this._elDef);
        }
        get componentType() {
          return this._component.constructor;
        }
        destroy() {
          this._viewRef.destroy();
        }
        onDestroy(t) {
          this._viewRef.onDestroy(t);
        }
      }
      function Ml(t, n, e) {
        return new Tl(t, n, e);
      }
      class Tl {
        constructor(t, n, e) {
          (this._view = t), (this._elDef = n), (this._data = e), (this._embeddedViews = []);
        }
        get element() {
          return new te(this._data.renderElement);
        }
        get injector() {
          return new Dl(this._view, this._elDef);
        }
        get parentInjector() {
          let t = this._view,
            n = this._elDef.parent;
          for (; !n && t; ) (n = Ye(t)), (t = t.parent);
          return t ? new Dl(t, n) : new Dl(this._view, null);
        }
        clear() {
          for (let t = this._embeddedViews.length - 1; t >= 0; t--) {
            const n = Cl(this._data, t);
            Ue.destroyView(n);
          }
        }
        get(t) {
          const n = this._embeddedViews[t];
          if (n) {
            const t = new Il(n);
            return t.attachToViewContainerRef(this), t;
          }
          return null;
        }
        get length() {
          return this._embeddedViews.length;
        }
        createEmbeddedView(t, n, e) {
          const l = t.createEmbeddedView(n || {});
          return this.insert(l, e), l;
        }
        createComponent(t, n, e, l, r) {
          const s = e || this.parentInjector;
          r || t instanceof Jn || (r = s.get(Dt));
          const i = t.create(s, l, void 0, r);
          return this.insert(i.hostView, n), i;
        }
        insert(t, n) {
          if (t.destroyed) throw new Error('Cannot insert a destroyed View in a ViewContainer!');
          const e = t;
          return (
            (function(t, n, e, l) {
              let r = n.viewContainer._embeddedViews;
              null == e && (e = r.length),
                (l.viewContainerParent = t),
                Ut(r, e, l),
                (function(t, n) {
                  const e = Qe(n);
                  if (!e || e === t || 16 & n.state) return;
                  n.state |= 16;
                  let l = e.template._projectedViews;
                  l || (l = e.template._projectedViews = []),
                    l.push(n),
                    (function(t, n) {
                      if (4 & n.flags) return;
                      (t.nodeFlags |= 4), (n.flags |= 4);
                      let e = n.parent;
                      for (; e; ) (e.childFlags |= 4), (e = e.parent);
                    })(n.parent.def, n.parentNodeDef);
                })(n, l),
                Ue.dirtyParentQueries(l),
                xl(n, e > 0 ? r[e - 1] : null, l);
            })(this._view, this._data, n, e._view),
            e.attachToViewContainerRef(this),
            t
          );
        }
        move(t, n) {
          if (t.destroyed) throw new Error('Cannot move a destroyed View in a ViewContainer!');
          const e = this._embeddedViews.indexOf(t._view);
          return (
            (function(t, n, e) {
              const l = t.viewContainer._embeddedViews,
                r = l[n];
              jt(l, n),
                null == e && (e = l.length),
                Ut(l, e, r),
                Ue.dirtyParentQueries(r),
                kl(r),
                xl(t, e > 0 ? l[e - 1] : null, r);
            })(this._data, e, n),
            t
          );
        }
        indexOf(t) {
          return this._embeddedViews.indexOf(t._view);
        }
        remove(t) {
          const n = Cl(this._data, t);
          n && Ue.destroyView(n);
        }
        detach(t) {
          const n = Cl(this._data, t);
          return n ? new Il(n) : null;
        }
      }
      function Al(t) {
        return new Il(t);
      }
      class Il {
        constructor(t) {
          (this._view = t), (this._viewContainerRef = null), (this._appRef = null);
        }
        get rootNodes() {
          return (function(t) {
            const n = [];
            return ol(t, 0, void 0, void 0, n), n;
          })(this._view);
        }
        get context() {
          return this._view.context;
        }
        get destroyed() {
          return 0 != (128 & this._view.state);
        }
        markForCheck() {
          Ke(this._view);
        }
        detach() {
          this._view.state &= -5;
        }
        detectChanges() {
          const t = this._view.root.rendererFactory;
          t.begin && t.begin();
          try {
            Ue.checkAndUpdateView(this._view);
          } finally {
            t.end && t.end();
          }
        }
        checkNoChanges() {
          Ue.checkNoChangesView(this._view);
        }
        reattach() {
          this._view.state |= 4;
        }
        onDestroy(t) {
          this._view.disposables || (this._view.disposables = []), this._view.disposables.push(t);
        }
        destroy() {
          this._appRef
            ? this._appRef.detachView(this)
            : this._viewContainerRef &&
              this._viewContainerRef.detach(this._viewContainerRef.indexOf(this)),
            Ue.destroyView(this._view);
        }
        detachFromAppRef() {
          (this._appRef = null), kl(this._view), Ue.dirtyParentQueries(this._view);
        }
        attachToAppRef(t) {
          if (this._viewContainerRef)
            throw new Error('This view is already attached to a ViewContainer!');
          this._appRef = t;
        }
        attachToViewContainerRef(t) {
          if (this._appRef)
            throw new Error('This view is already attached directly to the ApplicationRef!');
          this._viewContainerRef = t;
        }
      }
      function Rl(t, n) {
        return new Nl(t, n);
      }
      class Nl extends ke {
        constructor(t, n) {
          super(), (this._parentView = t), (this._def = n);
        }
        createEmbeddedView(t) {
          return new Il(
            Ue.createEmbeddedView(this._parentView, this._def, this._def.element.template, t)
          );
        }
        get elementRef() {
          return new te(Ne(this._parentView, this._def.nodeIndex).renderElement);
        }
      }
      function Vl(t, n) {
        return new Dl(t, n);
      }
      class Dl {
        constructor(t, n) {
          (this.view = t), (this.elDef = n);
        }
        get(t, n = On.THROW_IF_NOT_FOUND) {
          return Ue.resolveDep(
            this.view,
            this.elDef,
            !!this.elDef && 0 != (33554432 & this.elDef.flags),
            { flags: 0, token: t, tokenKey: $e(t) },
            n
          );
        }
      }
      function Ll(t, n) {
        const e = t.def.nodes[n];
        if (1 & e.flags) {
          const n = Ne(t, e.nodeIndex);
          return e.element.template ? n.template : n.renderElement;
        }
        if (2 & e.flags) return Re(t, e.nodeIndex).renderText;
        if (20240 & e.flags) return Ve(t, e.nodeIndex).instance;
        throw new Error(`Illegal state: read nodeValue for node index ${n}`);
      }
      function Ul(t) {
        return new jl(t.renderer);
      }
      class jl {
        constructor(t) {
          this.delegate = t;
        }
        selectRootElement(t) {
          return this.delegate.selectRootElement(t);
        }
        createElement(t, n) {
          const [e, l] = pl(n),
            r = this.delegate.createElement(l, e);
          return t && this.delegate.appendChild(t, r), r;
        }
        createViewRoot(t) {
          return t;
        }
        createTemplateAnchor(t) {
          const n = this.delegate.createComment('');
          return t && this.delegate.appendChild(t, n), n;
        }
        createText(t, n) {
          const e = this.delegate.createText(n);
          return t && this.delegate.appendChild(t, e), e;
        }
        projectNodes(t, n) {
          for (let e = 0; e < n.length; e++) this.delegate.appendChild(t, n[e]);
        }
        attachViewAfter(t, n) {
          const e = this.delegate.parentNode(t),
            l = this.delegate.nextSibling(t);
          for (let r = 0; r < n.length; r++) this.delegate.insertBefore(e, n[r], l);
        }
        detachView(t) {
          for (let n = 0; n < t.length; n++) {
            const e = t[n],
              l = this.delegate.parentNode(e);
            this.delegate.removeChild(l, e);
          }
        }
        destroyView(t, n) {
          for (let e = 0; e < n.length; e++) this.delegate.destroyNode(n[e]);
        }
        listen(t, n, e) {
          return this.delegate.listen(t, n, e);
        }
        listenGlobal(t, n, e) {
          return this.delegate.listen(t, n, e);
        }
        setElementProperty(t, n, e) {
          this.delegate.setProperty(t, n, e);
        }
        setElementAttribute(t, n, e) {
          const [l, r] = pl(n);
          null != e
            ? this.delegate.setAttribute(t, r, e, l)
            : this.delegate.removeAttribute(t, r, l);
        }
        setBindingDebugInfo(t, n, e) {}
        setElementClass(t, n, e) {
          e ? this.delegate.addClass(t, n) : this.delegate.removeClass(t, n);
        }
        setElementStyle(t, n, e) {
          null != e ? this.delegate.setStyle(t, n, e) : this.delegate.removeStyle(t, n);
        }
        invokeElementMethod(t, n, e) {
          t[n].apply(t, e);
        }
        setText(t, n) {
          this.delegate.setValue(t, n);
        }
        animate() {
          throw new Error('Renderer.animate is no longer supported!');
        }
      }
      function Fl(t, n, e, l) {
        return new $l(t, n, e, l);
      }
      class $l {
        constructor(t, n, e, l) {
          (this._moduleType = t),
            (this._parent = n),
            (this._bootstrapComponents = e),
            (this._def = l),
            (this._destroyListeners = []),
            (this._destroyed = !1),
            (this.injector = this),
            (function(t) {
              const n = t._def,
                e = (t._providers = new Array(n.providers.length));
              for (let l = 0; l < n.providers.length; l++) {
                const r = n.providers[l];
                4096 & r.flags || (void 0 === e[l] && (e[l] = bl(t, r)));
              }
            })(this);
        }
        get(t, n = On.THROW_IF_NOT_FOUND, e = ct.Default) {
          let l = 0;
          return (
            e & ct.SkipSelf ? (l |= 1) : e & ct.Self && (l |= 4),
            wl(this, { token: t, tokenKey: $e(t), flags: l }, n)
          );
        }
        get instance() {
          return this.get(this._moduleType);
        }
        get componentFactoryResolver() {
          return this.get(Qn);
        }
        destroy() {
          if (this._destroyed)
            throw new Error(
              `The ng module ${mt(this.instance.constructor)} has already been destroyed.`
            );
          (this._destroyed = !0),
            (function(t, n) {
              const e = t._def,
                l = new Set();
              for (let r = 0; r < e.providers.length; r++)
                if (131072 & e.providers[r].flags) {
                  const n = t._providers[r];
                  if (n && n !== fl) {
                    const t = n.ngOnDestroy;
                    'function' != typeof t || l.has(n) || (t.apply(n), l.add(n));
                  }
                }
            })(this),
            this._destroyListeners.forEach(t => t());
        }
        onDestroy(t) {
          this._destroyListeners.push(t);
        }
      }
      const Hl = $e(ee),
        zl = $e(se),
        ql = $e(te),
        Bl = $e(Se),
        Gl = $e(ke),
        Kl = $e(xn),
        Wl = $e(On),
        Zl = $e(St);
      function Ql(t, n, e, l, r, s, i, o) {
        const u = [];
        if (i)
          for (let c in i) {
            const [t, n] = i[c];
            u[t] = {
              flags: 8,
              name: c,
              nonMinifiedName: n,
              ns: null,
              securityContext: null,
              suffix: null
            };
          }
        const a = [];
        if (o) for (let c in o) a.push({ type: 1, propName: c, target: null, eventName: o[c] });
        return Jl(t, (n |= 16384), e, l, r, r, s, u, a);
      }
      function Yl(t, n, e, l, r) {
        return Jl(-1, t, n, 0, e, l, r);
      }
      function Jl(t, n, e, l, r, s, i, o, u) {
        const { matchedQueries: a, references: c, matchedQueryIds: h } = el(e);
        u || (u = []), o || (o = []), (s = yt(s));
        const d = ll(i, mt(r));
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: t,
          flags: n,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: a,
          matchedQueryIds: h,
          references: c,
          ngContentIndex: -1,
          childCount: l,
          bindings: o,
          bindingFlags: gl(o),
          outputs: u,
          element: null,
          provider: { token: r, value: s, deps: d },
          text: null,
          query: null,
          ngContent: null
        };
      }
      function Xl(t, n) {
        return lr(t, n);
      }
      function tr(t, n) {
        let e = t;
        for (; e.parent && !Xe(e); ) e = e.parent;
        return rr(e.parent, Ye(e), !0, n.provider.value, n.provider.deps);
      }
      function nr(t, n) {
        const e = rr(t, n.parent, (32768 & n.flags) > 0, n.provider.value, n.provider.deps);
        if (n.outputs.length)
          for (let l = 0; l < n.outputs.length; l++) {
            const r = n.outputs[l],
              s = e[r.propName];
            if (!qn(s))
              throw new Error(`@Output ${r.propName} not initialized in '${e.constructor.name}'.`);
            {
              const e = s.subscribe(er(t, n.parent.nodeIndex, r.eventName));
              t.disposables[n.outputIndex + l] = e.unsubscribe.bind(e);
            }
          }
        return e;
      }
      function er(t, n, e) {
        return l => Ze(t, n, e, l);
      }
      function lr(t, n) {
        const e = (8192 & n.flags) > 0,
          l = n.provider;
        switch (201347067 & n.flags) {
          case 512:
            return rr(t, n.parent, e, l.value, l.deps);
          case 1024:
            return (function(t, n, e, l, r) {
              const s = r.length;
              switch (s) {
                case 0:
                  return l();
                case 1:
                  return l(ir(t, n, e, r[0]));
                case 2:
                  return l(ir(t, n, e, r[0]), ir(t, n, e, r[1]));
                case 3:
                  return l(ir(t, n, e, r[0]), ir(t, n, e, r[1]), ir(t, n, e, r[2]));
                default:
                  const i = Array(s);
                  for (let l = 0; l < s; l++) i[l] = ir(t, n, e, r[l]);
                  return l(...i);
              }
            })(t, n.parent, e, l.value, l.deps);
          case 2048:
            return ir(t, n.parent, e, l.deps[0]);
          case 256:
            return l.value;
        }
      }
      function rr(t, n, e, l, r) {
        const s = r.length;
        switch (s) {
          case 0:
            return new l();
          case 1:
            return new l(ir(t, n, e, r[0]));
          case 2:
            return new l(ir(t, n, e, r[0]), ir(t, n, e, r[1]));
          case 3:
            return new l(ir(t, n, e, r[0]), ir(t, n, e, r[1]), ir(t, n, e, r[2]));
          default:
            const i = new Array(s);
            for (let l = 0; l < s; l++) i[l] = ir(t, n, e, r[l]);
            return new l(...i);
        }
      }
      const sr = {};
      function ir(t, n, e, l, r = On.THROW_IF_NOT_FOUND) {
        if (8 & l.flags) return l.token;
        const s = t;
        2 & l.flags && (r = null);
        const i = l.tokenKey;
        i === Kl && (e = !(!n || !n.element.componentView)),
          n && 1 & l.flags && ((e = !1), (n = n.parent));
        let o = t;
        for (; o; ) {
          if (n)
            switch (i) {
              case Hl:
                return Ul(or(o, n, e));
              case zl:
                return or(o, n, e).renderer;
              case ql:
                return new te(Ne(o, n.nodeIndex).renderElement);
              case Bl:
                return Ne(o, n.nodeIndex).viewContainer;
              case Gl:
                if (n.element.template) return Ne(o, n.nodeIndex).template;
                break;
              case Kl:
                return Al(or(o, n, e));
              case Wl:
              case Zl:
                return Vl(o, n);
              default:
                const t = (e ? n.element.allProviders : n.element.publicProviders)[i];
                if (t) {
                  let n = Ve(o, t.nodeIndex);
                  return (
                    n || ((n = { instance: lr(o, t) }), (o.nodes[t.nodeIndex] = n)), n.instance
                  );
                }
            }
          (e = Xe(o)), (n = Ye(o)), (o = o.parent), 4 & l.flags && (o = null);
        }
        const u = s.root.injector.get(l.token, sr);
        return u !== sr || r === sr ? u : s.root.ngModule.injector.get(l.token, r);
      }
      function or(t, n, e) {
        let l;
        if (e) l = Ne(t, n.nodeIndex).componentView;
        else for (l = t; l.parent && !Xe(l); ) l = l.parent;
        return l;
      }
      function ur(t, n, e, l, r, s) {
        if (32768 & e.flags) {
          const n = Ne(t, e.parent.nodeIndex).componentView;
          2 & n.def.flags && (n.state |= 8);
        }
        if (((n.instance[e.bindings[l].name] = r), 524288 & e.flags)) {
          s = s || {};
          const n = Fn.unwrap(t.oldValues[e.bindingIndex + l]);
          s[e.bindings[l].nonMinifiedName] = new Bn(n, r, 0 != (2 & t.state));
        }
        return (t.oldValues[e.bindingIndex + l] = r), s;
      }
      function ar(t, n) {
        if (!(t.def.nodeFlags & n)) return;
        const e = t.def.nodes;
        let l = 0;
        for (let r = 0; r < e.length; r++) {
          const s = e[r];
          let i = s.parent;
          for (
            !i && s.flags & n && hr(t, r, s.flags & n, l++),
              0 == (s.childFlags & n) && (r += s.childCount);
            i && 1 & i.flags && r === i.nodeIndex + i.childCount;

          )
            i.directChildFlags & n && (l = cr(t, i, n, l)), (i = i.parent);
        }
      }
      function cr(t, n, e, l) {
        for (let r = n.nodeIndex + 1; r <= n.nodeIndex + n.childCount; r++) {
          const n = t.def.nodes[r];
          n.flags & e && hr(t, r, n.flags & e, l++), (r += n.childCount);
        }
        return l;
      }
      function hr(t, n, e, l) {
        const r = Ve(t, n);
        if (!r) return;
        const s = r.instance;
        s &&
          (Ue.setCurrentNode(t, n),
          1048576 & e && Ie(t, 512, l) && s.ngAfterContentInit(),
          2097152 & e && s.ngAfterContentChecked(),
          4194304 & e && Ie(t, 768, l) && s.ngAfterViewInit(),
          8388608 & e && s.ngAfterViewChecked(),
          131072 & e && s.ngOnDestroy());
      }
      const dr = new Et('SCHEDULER_TOKEN', { providedIn: 'root', factory: () => $t }),
        pr = {},
        gr = (function() {
          var t = {
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
            (t[t.LocaleId] = 'LocaleId'),
            (t[t.DayPeriodsFormat] = 'DayPeriodsFormat'),
            (t[t.DayPeriodsStandalone] = 'DayPeriodsStandalone'),
            (t[t.DaysFormat] = 'DaysFormat'),
            (t[t.DaysStandalone] = 'DaysStandalone'),
            (t[t.MonthsFormat] = 'MonthsFormat'),
            (t[t.MonthsStandalone] = 'MonthsStandalone'),
            (t[t.Eras] = 'Eras'),
            (t[t.FirstDayOfWeek] = 'FirstDayOfWeek'),
            (t[t.WeekendRange] = 'WeekendRange'),
            (t[t.DateFormat] = 'DateFormat'),
            (t[t.TimeFormat] = 'TimeFormat'),
            (t[t.DateTimeFormat] = 'DateTimeFormat'),
            (t[t.NumberSymbols] = 'NumberSymbols'),
            (t[t.NumberFormats] = 'NumberFormats'),
            (t[t.CurrencySymbol] = 'CurrencySymbol'),
            (t[t.CurrencyName] = 'CurrencyName'),
            (t[t.Currencies] = 'Currencies'),
            (t[t.PluralCase] = 'PluralCase'),
            (t[t.ExtraData] = 'ExtraData'),
            t
          );
        })(),
        fr = void 0;
      var mr = [
        'en',
        [['a', 'p'], ['AM', 'PM'], fr],
        [['AM', 'PM'], fr, fr],
        [
          ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
          ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
        ],
        fr,
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
        fr,
        [
          ['B', 'A'],
          ['BC', 'AD'],
          ['Before Christ', 'Anno Domini']
        ],
        0,
        [6, 0],
        ['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
        ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
        ['{1}, {0}', fr, "{1} 'at' {0}", fr],
        ['.', ',', ';', '%', '+', '-', 'E', '\xd7', '\u2030', '\u221e', 'NaN', ':'],
        ['#,##0.###', '#,##0%', '\xa4#,##0.00', '#E0'],
        '$',
        'US Dollar',
        {},
        function(t) {
          let n = Math.floor(Math.abs(t)),
            e = t.toString().replace(/^[^.]*\.?/, '').length;
          return 1 === n && 0 === e ? 1 : 5;
        }
      ];
      class _r extends O {
        constructor(t = !1) {
          super(), (this.__isAsync = t);
        }
        emit(t) {
          super.next(t);
        }
        subscribe(t, n, e) {
          let l,
            r = t => null,
            s = () => null;
          t && 'object' == typeof t
            ? ((l = this.__isAsync
                ? n => {
                    setTimeout(() => t.next(n));
                  }
                : n => {
                    t.next(n);
                  }),
              t.error &&
                (r = this.__isAsync
                  ? n => {
                      setTimeout(() => t.error(n));
                    }
                  : n => {
                      t.error(n);
                    }),
              t.complete &&
                (s = this.__isAsync
                  ? () => {
                      setTimeout(() => t.complete());
                    }
                  : () => {
                      t.complete();
                    }))
            : ((l = this.__isAsync
                ? n => {
                    setTimeout(() => t(n));
                  }
                : n => {
                    t(n);
                  }),
              n &&
                (r = this.__isAsync
                  ? t => {
                      setTimeout(() => n(t));
                    }
                  : t => {
                      n(t);
                    }),
              e &&
                (s = this.__isAsync
                  ? () => {
                      setTimeout(() => e());
                    }
                  : () => {
                      e();
                    }));
          const i = super.subscribe(l, r, s);
          return t instanceof d && t.add(i), i;
        }
      }
      function vr() {
        return this._results[Ln()]();
      }
      class yr {
        constructor() {
          (this.dirty = !0), (this._results = []), (this.changes = new _r()), (this.length = 0);
          const t = Ln(),
            n = yr.prototype;
          n[t] || (n[t] = vr);
        }
        map(t) {
          return this._results.map(t);
        }
        filter(t) {
          return this._results.filter(t);
        }
        find(t) {
          return this._results.find(t);
        }
        reduce(t, n) {
          return this._results.reduce(t, n);
        }
        forEach(t) {
          this._results.forEach(t);
        }
        some(t) {
          return this._results.some(t);
        }
        toArray() {
          return this._results.slice();
        }
        toString() {
          return this._results.toString();
        }
        reset(t) {
          (this._results = (function t(n, e) {
            void 0 === e && (e = n);
            for (let l = 0; l < n.length; l++) {
              let r = n[l];
              Array.isArray(r) ? (e === n && (e = n.slice(0, l)), t(r, e)) : e !== n && e.push(r);
            }
            return e;
          })(t)),
            (this.dirty = !1),
            (this.length = this._results.length),
            (this.last = this._results[this.length - 1]),
            (this.first = this._results[0]);
        }
        notifyOnChanges() {
          this.changes.emit(this);
        }
        setDirty() {
          this.dirty = !0;
        }
        destroy() {
          this.changes.complete(), this.changes.unsubscribe();
        }
      }
      const wr = new Et('Application Initializer');
      class br {
        constructor(t) {
          (this.appInits = t),
            (this.initialized = !1),
            (this.done = !1),
            (this.donePromise = new Promise((t, n) => {
              (this.resolve = t), (this.reject = n);
            }));
        }
        runInitializers() {
          if (this.initialized) return;
          const t = [],
            n = () => {
              (this.done = !0), this.resolve();
            };
          if (this.appInits)
            for (let e = 0; e < this.appInits.length; e++) {
              const n = this.appInits[e]();
              zn(n) && t.push(n);
            }
          Promise.all(t)
            .then(() => {
              n();
            })
            .catch(t => {
              this.reject(t);
            }),
            0 === t.length && n(),
            (this.initialized = !0);
        }
      }
      const Cr = new Et('AppId');
      function xr() {
        return `${kr()}${kr()}${kr()}`;
      }
      function kr() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      const Er = new Et('Platform Initializer'),
        Sr = new Et('Platform ID'),
        Or = new Et('appBootstrapListener');
      class Pr {
        log(t) {
          console.log(t);
        }
        warn(t) {
          console.warn(t);
        }
      }
      const Mr = new Et('LocaleId');
      function Tr() {
        throw new Error('Runtime compiler is not loaded');
      }
      const Ar = Tr,
        Ir = Tr,
        Rr = Tr,
        Nr = Tr;
      class Vr {
        constructor() {
          (this.compileModuleSync = Ar),
            (this.compileModuleAsync = Ir),
            (this.compileModuleAndAllComponentsSync = Rr),
            (this.compileModuleAndAllComponentsAsync = Nr);
        }
        clearCache() {}
        clearCacheFor(t) {}
        getModuleId(t) {}
      }
      class Dr {}
      let Lr, Ur;
      function jr() {
        const t = kt.wtf;
        return !(!t || ((Lr = t.trace), !Lr) || ((Ur = Lr.events), 0));
      }
      const Fr = jr();
      function $r(t, n) {
        return null;
      }
      const Hr = Fr
          ? function(t, n = null) {
              return Ur.createScope(t, n);
            }
          : (t, n) => $r,
        zr = Fr
          ? function(t, n) {
              return Lr.leaveScope(t, n), n;
            }
          : (t, n) => n,
        qr = (() => Promise.resolve(0))();
      function Br(t) {
        'undefined' == typeof Zone
          ? qr.then(() => {
              t && t.apply(null, null);
            })
          : Zone.current.scheduleMicroTask('scheduleMicrotask', t);
      }
      class Gr {
        constructor({ enableLongStackTrace: t = !1 }) {
          if (
            ((this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new _r(!1)),
            (this.onMicrotaskEmpty = new _r(!1)),
            (this.onStable = new _r(!1)),
            (this.onError = new _r(!1)),
            'undefined' == typeof Zone)
          )
            throw new Error('In this configuration Angular requires Zone.js');
          var n;
          Zone.assertZonePatched(),
            (this._nesting = 0),
            (this._outer = this._inner = Zone.current),
            Zone.wtfZoneSpec && (this._inner = this._inner.fork(Zone.wtfZoneSpec)),
            Zone.TaskTrackingZoneSpec &&
              (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec())),
            t &&
              Zone.longStackTraceZoneSpec &&
              (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)),
            ((n = this)._inner = n._inner.fork({
              name: 'angular',
              properties: { isAngularZone: !0 },
              onInvokeTask: (t, e, l, r, s, i) => {
                try {
                  return Qr(n), t.invokeTask(l, r, s, i);
                } finally {
                  Yr(n);
                }
              },
              onInvoke: (t, e, l, r, s, i, o) => {
                try {
                  return Qr(n), t.invoke(l, r, s, i, o);
                } finally {
                  Yr(n);
                }
              },
              onHasTask: (t, e, l, r) => {
                t.hasTask(l, r),
                  e === l &&
                    ('microTask' == r.change
                      ? ((n.hasPendingMicrotasks = r.microTask), Zr(n))
                      : 'macroTask' == r.change && (n.hasPendingMacrotasks = r.macroTask));
              },
              onHandleError: (t, e, l, r) => (
                t.handleError(l, r), n.runOutsideAngular(() => n.onError.emit(r)), !1
              )
            }));
        }
        static isInAngularZone() {
          return !0 === Zone.current.get('isAngularZone');
        }
        static assertInAngularZone() {
          if (!Gr.isInAngularZone())
            throw new Error('Expected to be in Angular Zone, but it is not!');
        }
        static assertNotInAngularZone() {
          if (Gr.isInAngularZone())
            throw new Error('Expected to not be in Angular Zone, but it is!');
        }
        run(t, n, e) {
          return this._inner.run(t, n, e);
        }
        runTask(t, n, e, l) {
          const r = this._inner,
            s = r.scheduleEventTask('NgZoneEvent: ' + l, t, Wr, Kr, Kr);
          try {
            return r.runTask(s, n, e);
          } finally {
            r.cancelTask(s);
          }
        }
        runGuarded(t, n, e) {
          return this._inner.runGuarded(t, n, e);
        }
        runOutsideAngular(t) {
          return this._outer.run(t);
        }
      }
      function Kr() {}
      const Wr = {};
      function Zr(t) {
        if (0 == t._nesting && !t.hasPendingMicrotasks && !t.isStable)
          try {
            t._nesting++, t.onMicrotaskEmpty.emit(null);
          } finally {
            if ((t._nesting--, !t.hasPendingMicrotasks))
              try {
                t.runOutsideAngular(() => t.onStable.emit(null));
              } finally {
                t.isStable = !0;
              }
          }
      }
      function Qr(t) {
        t._nesting++, t.isStable && ((t.isStable = !1), t.onUnstable.emit(null));
      }
      function Yr(t) {
        t._nesting--, Zr(t);
      }
      class Jr {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new _r()),
            (this.onMicrotaskEmpty = new _r()),
            (this.onStable = new _r()),
            (this.onError = new _r());
        }
        run(t) {
          return t();
        }
        runGuarded(t) {
          return t();
        }
        runOutsideAngular(t) {
          return t();
        }
        runTask(t) {
          return t();
        }
      }
      class Xr {
        constructor(t) {
          (this._ngZone = t),
            (this._pendingCount = 0),
            (this._isZoneStable = !0),
            (this._didWork = !1),
            (this._callbacks = []),
            (this.taskTrackingZone = null),
            this._watchAngularEvents(),
            t.run(() => {
              this.taskTrackingZone =
                'undefined' == typeof Zone ? null : Zone.current.get('TaskTrackingZone');
            });
        }
        _watchAngularEvents() {
          this._ngZone.onUnstable.subscribe({
            next: () => {
              (this._didWork = !0), (this._isZoneStable = !1);
            }
          }),
            this._ngZone.runOutsideAngular(() => {
              this._ngZone.onStable.subscribe({
                next: () => {
                  Gr.assertNotInAngularZone(),
                    Br(() => {
                      (this._isZoneStable = !0), this._runCallbacksIfReady();
                    });
                }
              });
            });
        }
        increasePendingRequestCount() {
          return (this._pendingCount += 1), (this._didWork = !0), this._pendingCount;
        }
        decreasePendingRequestCount() {
          if (((this._pendingCount -= 1), this._pendingCount < 0))
            throw new Error('pending async requests below zero');
          return this._runCallbacksIfReady(), this._pendingCount;
        }
        isStable() {
          return (
            this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks
          );
        }
        _runCallbacksIfReady() {
          if (this.isStable())
            Br(() => {
              for (; 0 !== this._callbacks.length; ) {
                let t = this._callbacks.pop();
                clearTimeout(t.timeoutId), t.doneCb(this._didWork);
              }
              this._didWork = !1;
            });
          else {
            let t = this.getPendingTasks();
            (this._callbacks = this._callbacks.filter(
              n => !n.updateCb || !n.updateCb(t) || (clearTimeout(n.timeoutId), !1)
            )),
              (this._didWork = !0);
          }
        }
        getPendingTasks() {
          return this.taskTrackingZone
            ? this.taskTrackingZone.macroTasks.map(t => ({
                source: t.source,
                creationLocation: t.creationLocation,
                data: t.data
              }))
            : [];
        }
        addCallback(t, n, e) {
          let l = -1;
          n &&
            n > 0 &&
            (l = setTimeout(() => {
              (this._callbacks = this._callbacks.filter(t => t.timeoutId !== l)),
                t(this._didWork, this.getPendingTasks());
            }, n)),
            this._callbacks.push({ doneCb: t, timeoutId: l, updateCb: e });
        }
        whenStable(t, n, e) {
          if (e && !this.taskTrackingZone)
            throw new Error(
              'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?'
            );
          this.addCallback(t, n, e), this._runCallbacksIfReady();
        }
        getPendingRequestCount() {
          return this._pendingCount;
        }
        findProviders(t, n, e) {
          return [];
        }
      }
      class ts {
        constructor() {
          (this._applications = new Map()), ls.addToWindow(this);
        }
        registerApplication(t, n) {
          this._applications.set(t, n);
        }
        unregisterApplication(t) {
          this._applications.delete(t);
        }
        unregisterAllApplications() {
          this._applications.clear();
        }
        getTestability(t) {
          return this._applications.get(t) || null;
        }
        getAllTestabilities() {
          return Array.from(this._applications.values());
        }
        getAllRootElements() {
          return Array.from(this._applications.keys());
        }
        findTestabilityInTree(t, n = !0) {
          return ls.findTestabilityInTree(this, t, n);
        }
      }
      class ns {
        addToWindow(t) {}
        findTestabilityInTree(t, n, e) {
          return null;
        }
      }
      let es,
        ls = new ns();
      const rs = new Et('AllowMultipleToken');
      class ss {
        constructor(t, n) {
          (this.name = t), (this.token = n);
        }
      }
      function is(t, n, e = []) {
        const l = `Platform: ${n}`,
          r = new Et(l);
        return (n = []) => {
          let s = os();
          if (!s || s.injector.get(rs, !1))
            if (t) t(e.concat(n).concat({ provide: r, useValue: !0 }));
            else {
              const t = e.concat(n).concat({ provide: r, useValue: !0 });
              !(function(t) {
                if (es && !es.destroyed && !es.injector.get(rs, !1))
                  throw new Error(
                    'There can be only one platform. Destroy the previous one to create a new one.'
                  );
                es = t.get(us);
                const n = t.get(Er, null);
                n && n.forEach(t => t());
              })(On.create({ providers: t, name: l }));
            }
          return (function(t) {
            const n = os();
            if (!n) throw new Error('No platform exists!');
            if (!n.injector.get(t, null))
              throw new Error(
                'A platform with a different configuration has been created. Please destroy it first.'
              );
            return n;
          })(r);
        };
      }
      function os() {
        return es && !es.destroyed ? es : null;
      }
      class us {
        constructor(t) {
          (this._injector = t),
            (this._modules = []),
            (this._destroyListeners = []),
            (this._destroyed = !1);
        }
        bootstrapModuleFactory(t, n) {
          const e = (function(t) {
              let n;
              return (
                (n =
                  'noop' === t
                    ? new Jr()
                    : ('zone.js' === t ? void 0 : t) || new Gr({ enableLongStackTrace: Wt() })),
                n
              );
            })(n ? n.ngZone : void 0),
            l = [{ provide: Gr, useValue: e }];
          return e.run(() => {
            const n = On.create({ providers: l, parent: this.injector, name: t.moduleType.name }),
              r = t.create(n),
              s = r.injector.get(Bt, null);
            if (!s)
              throw new Error('No ErrorHandler. Is platform module (BrowserModule) included?');
            return (
              r.onDestroy(() => hs(this._modules, r)),
              e.runOutsideAngular(() =>
                e.onError.subscribe({
                  next: t => {
                    s.handleError(t);
                  }
                })
              ),
              (function(t, n, e) {
                try {
                  const l = e();
                  return zn(l)
                    ? l.catch(e => {
                        throw (n.runOutsideAngular(() => t.handleError(e)), e);
                      })
                    : l;
                } catch (l) {
                  throw (n.runOutsideAngular(() => t.handleError(l)), l);
                }
              })(s, e, () => {
                const t = r.injector.get(br);
                return (
                  t.runInitializers(), t.donePromise.then(() => (this._moduleDoBootstrap(r), r))
                );
              })
            );
          });
        }
        bootstrapModule(t, n = []) {
          const e = as({}, n);
          return (function(t, n, e) {
            return t
              .get(Dr)
              .createCompiler([n])
              .compileModuleAsync(e);
          })(this.injector, e, t).then(t => this.bootstrapModuleFactory(t, e));
        }
        _moduleDoBootstrap(t) {
          const n = t.injector.get(cs);
          if (t._bootstrapComponents.length > 0)
            t._bootstrapComponents.forEach(t => n.bootstrap(t));
          else {
            if (!t.instance.ngDoBootstrap)
              throw new Error(
                `The module ${mt(
                  t.instance.constructor
                )} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. ` +
                  'Please define one of these.'
              );
            t.instance.ngDoBootstrap(n);
          }
          this._modules.push(t);
        }
        onDestroy(t) {
          this._destroyListeners.push(t);
        }
        get injector() {
          return this._injector;
        }
        destroy() {
          if (this._destroyed) throw new Error('The platform has already been destroyed!');
          this._modules.slice().forEach(t => t.destroy()),
            this._destroyListeners.forEach(t => t()),
            (this._destroyed = !0);
        }
        get destroyed() {
          return this._destroyed;
        }
      }
      function as(t, n) {
        return Array.isArray(n) ? n.reduce(as, t) : Object.assign({}, t, n);
      }
      let cs = (() => {
        class t {
          constructor(t, n, e, l, r, s) {
            (this._zone = t),
              (this._console = n),
              (this._injector = e),
              (this._exceptionHandler = l),
              (this._componentFactoryResolver = r),
              (this._initStatus = s),
              (this._bootstrapListeners = []),
              (this._views = []),
              (this._runningTick = !1),
              (this._enforceNoNewChanges = !1),
              (this._stable = !0),
              (this.componentTypes = []),
              (this.components = []),
              (this._enforceNoNewChanges = Wt()),
              this._zone.onMicrotaskEmpty.subscribe({
                next: () => {
                  this._zone.run(() => {
                    this.tick();
                  });
                }
              });
            const i = new b(t => {
                (this._stable =
                  this._zone.isStable &&
                  !this._zone.hasPendingMacrotasks &&
                  !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    t.next(this._stable), t.complete();
                  });
              }),
              o = new b(t => {
                let n;
                this._zone.runOutsideAngular(() => {
                  n = this._zone.onStable.subscribe(() => {
                    Gr.assertNotInAngularZone(),
                      Br(() => {
                        this._stable ||
                          this._zone.hasPendingMacrotasks ||
                          this._zone.hasPendingMicrotasks ||
                          ((this._stable = !0), t.next(!0));
                      });
                  });
                });
                const e = this._zone.onUnstable.subscribe(() => {
                  Gr.assertInAngularZone(),
                    this._stable &&
                      ((this._stable = !1),
                      this._zone.runOutsideAngular(() => {
                        t.next(!1);
                      }));
                });
                return () => {
                  n.unsubscribe(), e.unsubscribe();
                };
              });
            this.isStable = (function(...t) {
              let n = Number.POSITIVE_INFINITY,
                e = null,
                l = t[t.length - 1];
              return (
                M(l)
                  ? ((e = t.pop()),
                    t.length > 1 && 'number' == typeof t[t.length - 1] && (n = t.pop()))
                  : 'number' == typeof l && (n = t.pop()),
                null === e && 1 === t.length && t[0] instanceof b ? t[0] : Y(n)(B(t, e))
              );
            })(
              i,
              o.pipe(t => {
                return J()(
                  ((n = rt),
                  function(t) {
                    let e;
                    e =
                      'function' == typeof n
                        ? n
                        : function() {
                            return n;
                          };
                    const l = Object.create(t, et);
                    return (l.source = t), (l.subjectFactory = e), l;
                  })(t)
                );
                var n;
              })
            );
          }
          bootstrap(t, n) {
            if (!this._initStatus.done)
              throw new Error(
                'Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.'
              );
            let e;
            (e = t instanceof Gn ? t : this._componentFactoryResolver.resolveComponentFactory(t)),
              this.componentTypes.push(e.componentType);
            const l = e instanceof Jn ? null : this._injector.get(Dt),
              r = e.create(On.NULL, [], n || e.selector, l);
            r.onDestroy(() => {
              this._unloadComponent(r);
            });
            const s = r.injector.get(Xr, null);
            return (
              s && r.injector.get(ts).registerApplication(r.location.nativeElement, s),
              this._loadComponent(r),
              Wt() &&
                this._console.log(
                  'Angular is running in the development mode. Call enableProdMode() to enable the production mode.'
                ),
              r
            );
          }
          tick() {
            if (this._runningTick) throw new Error('ApplicationRef.tick is called recursively');
            const n = t._tickScope();
            try {
              this._runningTick = !0;
              for (let t of this._views) t.detectChanges();
              if (this._enforceNoNewChanges) for (let t of this._views) t.checkNoChanges();
            } catch (e) {
              this._zone.runOutsideAngular(() => this._exceptionHandler.handleError(e));
            } finally {
              (this._runningTick = !1), zr(n);
            }
          }
          attachView(t) {
            const n = t;
            this._views.push(n), n.attachToAppRef(this);
          }
          detachView(t) {
            const n = t;
            hs(this._views, n), n.detachFromAppRef();
          }
          _loadComponent(t) {
            this.attachView(t.hostView),
              this.tick(),
              this.components.push(t),
              this._injector
                .get(Or, [])
                .concat(this._bootstrapListeners)
                .forEach(n => n(t));
          }
          _unloadComponent(t) {
            this.detachView(t.hostView), hs(this.components, t);
          }
          ngOnDestroy() {
            this._views.slice().forEach(t => t.destroy());
          }
          get viewCount() {
            return this._views.length;
          }
        }
        return (t._tickScope = Hr('ApplicationRef#tick()')), t;
      })();
      function hs(t, n) {
        const e = t.indexOf(n);
        e > -1 && t.splice(e, 1);
      }
      class ds {}
      class ps {}
      const gs = { factoryPathPrefix: '', factoryPathSuffix: '.ngfactory' };
      class fs {
        constructor(t, n) {
          (this._compiler = t), (this._config = n || gs);
        }
        load(t) {
          return this._compiler instanceof Vr ? this.loadFactory(t) : this.loadAndCompile(t);
        }
        loadAndCompile(t) {
          let [n, l] = t.split('#');
          return (
            void 0 === l && (l = 'default'),
            e('zn8P')(n)
              .then(t => t[l])
              .then(t => ms(t, n, l))
              .then(t => this._compiler.compileModuleAsync(t))
          );
        }
        loadFactory(t) {
          let [n, l] = t.split('#'),
            r = 'NgFactory';
          return (
            void 0 === l && ((l = 'default'), (r = '')),
            e('zn8P')(this._config.factoryPathPrefix + n + this._config.factoryPathSuffix)
              .then(t => t[l + r])
              .then(t => ms(t, n, l))
          );
        }
      }
      function ms(t, n, e) {
        if (!t) throw new Error(`Cannot find '${e}' in '${n}'`);
        return t;
      }
      class _s {
        constructor(t, n) {
          (this.name = t), (this.callback = n);
        }
      }
      class vs {
        constructor(t, n, e) {
          (this.listeners = []),
            (this.parent = null),
            (this._debugContext = e),
            (this.nativeNode = t),
            n && n instanceof ys && n.addChild(this);
        }
        get injector() {
          return this._debugContext.injector;
        }
        get componentInstance() {
          return this._debugContext.component;
        }
        get context() {
          return this._debugContext.context;
        }
        get references() {
          return this._debugContext.references;
        }
        get providerTokens() {
          return this._debugContext.providerTokens;
        }
      }
      class ys extends vs {
        constructor(t, n, e) {
          super(t, n, e),
            (this.properties = {}),
            (this.attributes = {}),
            (this.classes = {}),
            (this.styles = {}),
            (this.childNodes = []),
            (this.nativeElement = t);
        }
        addChild(t) {
          t && (this.childNodes.push(t), (t.parent = this));
        }
        removeChild(t) {
          const n = this.childNodes.indexOf(t);
          -1 !== n && ((t.parent = null), this.childNodes.splice(n, 1));
        }
        insertChildrenAfter(t, n) {
          const e = this.childNodes.indexOf(t);
          -1 !== e &&
            (this.childNodes.splice(e + 1, 0, ...n),
            n.forEach(n => {
              n.parent && n.parent.removeChild(n), (t.parent = this);
            }));
        }
        insertBefore(t, n) {
          const e = this.childNodes.indexOf(t);
          -1 === e
            ? this.addChild(n)
            : (n.parent && n.parent.removeChild(n),
              (n.parent = this),
              this.childNodes.splice(e, 0, n));
        }
        query(t) {
          return this.queryAll(t)[0] || null;
        }
        queryAll(t) {
          const n = [];
          return (
            (function t(n, e, l) {
              n.childNodes.forEach(n => {
                n instanceof ys && (e(n) && l.push(n), t(n, e, l));
              });
            })(this, t, n),
            n
          );
        }
        queryAllNodes(t) {
          const n = [];
          return (
            (function t(n, e, l) {
              n instanceof ys &&
                n.childNodes.forEach(n => {
                  e(n) && l.push(n), n instanceof ys && t(n, e, l);
                });
            })(this, t, n),
            n
          );
        }
        get children() {
          return this.childNodes.filter(t => t instanceof ys);
        }
        triggerEventHandler(t, n) {
          this.listeners.forEach(e => {
            e.name == t && e.callback(n);
          });
        }
      }
      const ws = new Map(),
        bs = function(t) {
          return ws.get(t) || null;
        };
      function Cs(t) {
        ws.set(t.nativeNode, t);
      }
      const xs = is(null, 'core', [
        { provide: Sr, useValue: 'unknown' },
        { provide: us, deps: [On] },
        { provide: ts, deps: [] },
        { provide: Pr, deps: [] }
      ]);
      function ks() {
        return Ce;
      }
      function Es() {
        return xe;
      }
      function Ss(t) {
        return t || 'en-US';
      }
      function Os(t) {
        let n = [];
        return (
          t.onStable.subscribe(() => {
            for (; n.length; ) n.pop()();
          }),
          function(t) {
            n.push(t);
          }
        );
      }
      class Ps {
        constructor(t) {}
      }
      function Ms(t, n, e, l, r, s) {
        t |= 1;
        const { matchedQueries: i, references: o, matchedQueryIds: u } = el(n);
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          flags: t,
          checkIndex: -1,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: i,
          matchedQueryIds: u,
          references: o,
          ngContentIndex: e,
          childCount: l,
          bindings: [],
          bindingFlags: 0,
          outputs: [],
          element: {
            ns: null,
            name: null,
            attrs: null,
            template: s ? il(s) : null,
            componentProvider: null,
            componentView: null,
            componentRendererType: null,
            publicProviders: null,
            allProviders: null,
            handleEvent: r || je
          },
          provider: null,
          text: null,
          query: null,
          ngContent: null
        };
      }
      function Ts(t, n, e, l, r, s, i = [], o, u, a, c, h) {
        a || (a = je);
        const { matchedQueries: d, references: p, matchedQueryIds: g } = el(e);
        let f = null,
          m = null;
        s && ([f, m] = pl(s)), (o = o || []);
        const _ = new Array(o.length);
        for (let w = 0; w < o.length; w++) {
          const [t, n, e] = o[w],
            [l, r] = pl(n);
          let s = void 0,
            i = void 0;
          switch (15 & t) {
            case 4:
              i = e;
              break;
            case 1:
            case 8:
              s = e;
          }
          _[w] = { flags: t, ns: l, name: r, nonMinifiedName: r, securityContext: s, suffix: i };
        }
        u = u || [];
        const v = new Array(u.length);
        for (let w = 0; w < u.length; w++) {
          const [t, n] = u[w];
          v[w] = { type: 0, target: t, eventName: n, propName: null };
        }
        const y = (i = i || []).map(([t, n]) => {
          const [e, l] = pl(t);
          return [e, l, n];
        });
        return (
          (h = (function(t) {
            if (t && '$$undefined' === t.id) {
              const n =
                (null != t.encapsulation && t.encapsulation !== Ft.None) ||
                t.styles.length ||
                Object.keys(t.data).length;
              t.id = n ? `c${ze++}` : '$$empty';
            }
            return t && '$$empty' === t.id && (t = null), t || null;
          })(h)),
          c && (n |= 33554432),
          {
            nodeIndex: -1,
            parent: null,
            renderParent: null,
            bindingIndex: -1,
            outputIndex: -1,
            checkIndex: t,
            flags: (n |= 1),
            childFlags: 0,
            directChildFlags: 0,
            childMatchedQueries: 0,
            matchedQueries: d,
            matchedQueryIds: g,
            references: p,
            ngContentIndex: l,
            childCount: r,
            bindings: _,
            bindingFlags: gl(_),
            outputs: v,
            element: {
              ns: f,
              name: m,
              attrs: y,
              template: null,
              componentProvider: null,
              componentView: c || null,
              componentRendererType: h,
              publicProviders: null,
              allProviders: null,
              handleEvent: a || je
            },
            provider: null,
            text: null,
            query: null,
            ngContent: null
          }
        );
      }
      function As(t, n, e) {
        const l = e.element,
          r = t.root.selectorOrNode,
          s = t.renderer;
        let i;
        if (t.parent || !r) {
          i = l.name ? s.createElement(l.name, l.ns) : s.createComment('');
          const r = rl(t, n, e);
          r && s.appendChild(r, i);
        } else
          i = s.selectRootElement(
            r,
            !!l.componentRendererType && l.componentRendererType.encapsulation === Ft.ShadowDom
          );
        if (l.attrs)
          for (let o = 0; o < l.attrs.length; o++) {
            const [t, n, e] = l.attrs[o];
            s.setAttribute(i, n, e, t);
          }
        return i;
      }
      function Is(t, n, e, l) {
        for (let i = 0; i < e.outputs.length; i++) {
          const o = e.outputs[i],
            u = Rs(t, e.nodeIndex, ((s = o.eventName), (r = o.target) ? `${r}:${s}` : s));
          let a = o.target,
            c = t;
          'component' === o.target && ((a = null), (c = n));
          const h = c.renderer.listen(a || l, o.eventName, u);
          t.disposables[e.outputIndex + i] = h;
        }
        var r, s;
      }
      function Rs(t, n, e) {
        return l => Ze(t, n, e, l);
      }
      function Ns(t, n, e, l) {
        if (!Be(t, n, e, l)) return !1;
        const r = n.bindings[e],
          s = Ne(t, n.nodeIndex),
          i = s.renderElement,
          o = r.name;
        switch (15 & r.flags) {
          case 1:
            !(function(t, n, e, l, r, s) {
              const i = n.securityContext;
              let o = i ? t.root.sanitizer.sanitize(i, s) : s;
              o = null != o ? o.toString() : null;
              const u = t.renderer;
              null != s ? u.setAttribute(e, r, o, l) : u.removeAttribute(e, r, l);
            })(t, r, i, r.ns, o, l);
            break;
          case 2:
            !(function(t, n, e, l) {
              const r = t.renderer;
              l ? r.addClass(n, e) : r.removeClass(n, e);
            })(t, i, o, l);
            break;
          case 4:
            !(function(t, n, e, l, r) {
              let s = t.root.sanitizer.sanitize(_n.STYLE, r);
              if (null != s) {
                s = s.toString();
                const t = n.suffix;
                null != t && (s += t);
              } else s = null;
              const i = t.renderer;
              null != s ? i.setStyle(e, l, s) : i.removeStyle(e, l);
            })(t, r, i, o, l);
            break;
          case 8:
            !(function(t, n, e, l, r) {
              const s = n.securityContext;
              let i = s ? t.root.sanitizer.sanitize(s, r) : r;
              t.renderer.setProperty(e, l, i);
            })(33554432 & n.flags && 32 & r.flags ? s.componentView : t, r, i, o, l);
        }
        return !0;
      }
      function Vs(t, n, e) {
        let l = [];
        for (let r in e) l.push({ propName: r, bindingType: e[r] });
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: -1,
          flags: t,
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
          query: { id: n, filterId: nl(n), bindings: l },
          ngContent: null
        };
      }
      function Ds(t) {
        const n = t.def.nodeMatchedQueries;
        for (; t.parent && tl(t); ) {
          let e = t.parentNodeDef;
          t = t.parent;
          const l = e.nodeIndex + e.childCount;
          for (let r = 0; r <= l; r++) {
            const l = t.def.nodes[r];
            67108864 & l.flags &&
              536870912 & l.flags &&
              (l.query.filterId & n) === l.query.filterId &&
              Le(t, r).setDirty(),
              (!(1 & l.flags && r + l.childCount < e.nodeIndex) &&
                67108864 & l.childFlags &&
                536870912 & l.childFlags) ||
                (r += l.childCount);
          }
        }
        if (134217728 & t.def.nodeFlags)
          for (let e = 0; e < t.def.nodes.length; e++) {
            const n = t.def.nodes[e];
            134217728 & n.flags && 536870912 & n.flags && Le(t, e).setDirty(), (e += n.childCount);
          }
      }
      function Ls(t, n) {
        const e = Le(t, n.nodeIndex);
        if (!e.dirty) return;
        let l,
          r = void 0;
        if (67108864 & n.flags) {
          const e = n.parent.parent;
          (r = Us(t, e.nodeIndex, e.nodeIndex + e.childCount, n.query, [])),
            (l = Ve(t, n.parent.nodeIndex).instance);
        } else
          134217728 & n.flags &&
            ((r = Us(t, 0, t.def.nodes.length - 1, n.query, [])), (l = t.component));
        e.reset(r);
        const s = n.query.bindings;
        let i = !1;
        for (let o = 0; o < s.length; o++) {
          const t = s[o];
          let n;
          switch (t.bindingType) {
            case 0:
              n = e.first;
              break;
            case 1:
              (n = e), (i = !0);
          }
          l[t.propName] = n;
        }
        i && e.notifyOnChanges();
      }
      function Us(t, n, e, l, r) {
        for (let s = n; s <= e; s++) {
          const n = t.def.nodes[s],
            e = n.matchedQueries[l.id];
          if (
            (null != e && r.push(js(t, n, e)),
            1 & n.flags &&
              n.element.template &&
              (n.element.template.nodeMatchedQueries & l.filterId) === l.filterId)
          ) {
            const e = Ne(t, s);
            if (
              ((n.childMatchedQueries & l.filterId) === l.filterId &&
                (Us(t, s + 1, s + n.childCount, l, r), (s += n.childCount)),
              16777216 & n.flags)
            ) {
              const t = e.viewContainer._embeddedViews;
              for (let n = 0; n < t.length; n++) {
                const s = t[n],
                  i = Qe(s);
                i && i === e && Us(s, 0, s.def.nodes.length - 1, l, r);
              }
            }
            const i = e.template._projectedViews;
            if (i)
              for (let t = 0; t < i.length; t++) {
                const n = i[t];
                Us(n, 0, n.def.nodes.length - 1, l, r);
              }
          }
          (n.childMatchedQueries & l.filterId) !== l.filterId && (s += n.childCount);
        }
        return r;
      }
      function js(t, n, e) {
        if (null != e)
          switch (e) {
            case 1:
              return Ne(t, n.nodeIndex).renderElement;
            case 0:
              return new te(Ne(t, n.nodeIndex).renderElement);
            case 2:
              return Ne(t, n.nodeIndex).template;
            case 3:
              return Ne(t, n.nodeIndex).viewContainer;
            case 4:
              return Ve(t, n.nodeIndex).instance;
          }
      }
      function Fs(t, n, e) {
        const l = rl(t, n, e);
        l && al(t, e.ngContent.index, 1, l, null, void 0);
      }
      function $s(t, n) {
        return (function(t, n, e) {
          const l = new Array(e.length);
          for (let r = 0; r < e.length; r++) {
            const t = e[r];
            l[r] = {
              flags: 8,
              name: t,
              ns: null,
              nonMinifiedName: t,
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
            checkIndex: n,
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
            bindingFlags: gl(l),
            outputs: [],
            element: null,
            provider: null,
            text: null,
            query: null,
            ngContent: null
          };
        })(0, t, new Array(n));
      }
      function Hs(t, n, e) {
        const l = new Array(e.length - 1);
        for (let r = 1; r < e.length; r++)
          l[r - 1] = {
            flags: 8,
            name: null,
            ns: null,
            nonMinifiedName: null,
            securityContext: null,
            suffix: e[r]
          };
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: t,
          flags: 2,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: {},
          matchedQueryIds: 0,
          references: {},
          ngContentIndex: n,
          childCount: 0,
          bindings: l,
          bindingFlags: 8,
          outputs: [],
          element: null,
          provider: null,
          text: { prefix: e[0] },
          query: null,
          ngContent: null
        };
      }
      function zs(t, n, e) {
        let l;
        const r = t.renderer;
        l = r.createText(e.text.prefix);
        const s = rl(t, n, e);
        return s && r.appendChild(s, l), { renderText: l };
      }
      function qs(t, n) {
        return (null != t ? t.toString() : '') + n.suffix;
      }
      function Bs(t, n, e, l) {
        let r = 0,
          s = 0,
          i = 0,
          o = 0,
          u = 0,
          a = null,
          c = null,
          h = !1,
          d = !1,
          p = null;
        for (let g = 0; g < n.length; g++) {
          const t = n[g];
          if (
            ((t.nodeIndex = g),
            (t.parent = a),
            (t.bindingIndex = r),
            (t.outputIndex = s),
            (t.renderParent = c),
            (i |= t.flags),
            (u |= t.matchedQueryIds),
            t.element)
          ) {
            const n = t.element;
            (n.publicProviders = a ? a.element.publicProviders : Object.create(null)),
              (n.allProviders = n.publicProviders),
              (h = !1),
              (d = !1),
              t.element.template && (u |= t.element.template.nodeMatchedQueries);
          }
          if (
            (Ks(a, t, n.length),
            (r += t.bindings.length),
            (s += t.outputs.length),
            !c && 3 & t.flags && (p = t),
            20224 & t.flags)
          ) {
            h ||
              ((h = !0),
              (a.element.publicProviders = Object.create(a.element.publicProviders)),
              (a.element.allProviders = a.element.publicProviders));
            const n = 0 != (32768 & t.flags);
            0 == (8192 & t.flags) || n
              ? (a.element.publicProviders[$e(t.provider.token)] = t)
              : (d ||
                  ((d = !0), (a.element.allProviders = Object.create(a.element.publicProviders))),
                (a.element.allProviders[$e(t.provider.token)] = t)),
              n && (a.element.componentProvider = t);
          }
          if (
            (a
              ? ((a.childFlags |= t.flags),
                (a.directChildFlags |= t.flags),
                (a.childMatchedQueries |= t.matchedQueryIds),
                t.element &&
                  t.element.template &&
                  (a.childMatchedQueries |= t.element.template.nodeMatchedQueries))
              : (o |= t.flags),
            t.childCount > 0)
          )
            (a = t), Gs(t) || (c = t);
          else
            for (; a && g === a.nodeIndex + a.childCount; ) {
              const t = a.parent;
              t &&
                ((t.childFlags |= a.childFlags), (t.childMatchedQueries |= a.childMatchedQueries)),
                (a = t),
                (c = a && Gs(a) ? a.renderParent : a);
            }
        }
        return {
          factory: null,
          nodeFlags: i,
          rootNodeFlags: o,
          nodeMatchedQueries: u,
          flags: t,
          nodes: n,
          updateDirectives: e || je,
          updateRenderer: l || je,
          handleEvent: (t, e, l, r) => n[e].element.handleEvent(t, l, r),
          bindingCount: r,
          outputCount: s,
          lastRenderRootNode: p
        };
      }
      function Gs(t) {
        return 0 != (1 & t.flags) && null === t.element.name;
      }
      function Ks(t, n, e) {
        const l = n.element && n.element.template;
        if (l) {
          if (!l.lastRenderRootNode)
            throw new Error('Illegal State: Embedded templates without nodes are not allowed!');
          if (l.lastRenderRootNode && 16777216 & l.lastRenderRootNode.flags)
            throw new Error(
              `Illegal State: Last root node of a template can't have embedded views, at index ${n.nodeIndex}!`
            );
        }
        if (20224 & n.flags && 0 == (1 & (t ? t.flags : 0)))
          throw new Error(
            `Illegal State: StaticProvider/Directive nodes need to be children of elements or anchors, at index ${n.nodeIndex}!`
          );
        if (n.query) {
          if (67108864 & n.flags && (!t || 0 == (16384 & t.flags)))
            throw new Error(
              `Illegal State: Content Query nodes need to be children of directives, at index ${n.nodeIndex}!`
            );
          if (134217728 & n.flags && t)
            throw new Error(
              `Illegal State: View Query nodes have to be top level nodes, at index ${n.nodeIndex}!`
            );
        }
        if (n.childCount) {
          const l = t ? t.nodeIndex + t.childCount : e - 1;
          if (n.nodeIndex <= l && n.nodeIndex + n.childCount > l)
            throw new Error(
              `Illegal State: childCount of node leads outside of parent, at index ${n.nodeIndex}!`
            );
        }
      }
      function Ws(t, n, e, l) {
        const r = Ys(t.root, t.renderer, t, n, e);
        return Js(r, t.component, l), Xs(r), r;
      }
      function Zs(t, n, e) {
        const l = Ys(t, t.renderer, null, null, n);
        return Js(l, e, e), Xs(l), l;
      }
      function Qs(t, n, e, l) {
        const r = n.element.componentRendererType;
        let s;
        return (
          (s = r ? t.root.rendererFactory.createRenderer(l, r) : t.root.renderer),
          Ys(t.root, s, t, n.element.componentProvider, e)
        );
      }
      function Ys(t, n, e, l, r) {
        const s = new Array(r.nodes.length),
          i = r.outputCount ? new Array(r.outputCount) : null;
        return {
          def: r,
          parent: e,
          viewContainerParent: null,
          parentNodeDef: l,
          context: null,
          component: null,
          nodes: s,
          state: 13,
          root: t,
          renderer: n,
          oldValues: new Array(r.bindingCount),
          disposables: i,
          initIndex: -1
        };
      }
      function Js(t, n, e) {
        (t.component = n), (t.context = e);
      }
      function Xs(t) {
        let n;
        Xe(t) && (n = Ne(t.parent, t.parentNodeDef.parent.nodeIndex).renderElement);
        const e = t.def,
          l = t.nodes;
        for (let r = 0; r < e.nodes.length; r++) {
          const s = e.nodes[r];
          let i;
          switch ((Ue.setCurrentNode(t, r), 201347067 & s.flags)) {
            case 1:
              const e = As(t, n, s);
              let o = void 0;
              if (33554432 & s.flags) {
                const n = il(s.element.componentView);
                o = Ue.createComponentView(t, s, n, e);
              }
              Is(t, o, s, e),
                (i = {
                  renderElement: e,
                  componentView: o,
                  viewContainer: null,
                  template: s.element.template ? Rl(t, s) : void 0
                }),
                16777216 & s.flags && (i.viewContainer = Ml(t, s, i));
              break;
            case 2:
              i = zs(t, n, s);
              break;
            case 512:
            case 1024:
            case 2048:
            case 256:
              (i = l[r]), i || 4096 & s.flags || (i = { instance: Xl(t, s) });
              break;
            case 16:
              i = { instance: tr(t, s) };
              break;
            case 16384:
              (i = l[r]),
                i || (i = { instance: nr(t, s) }),
                32768 & s.flags &&
                  Js(Ne(t, s.parent.nodeIndex).componentView, i.instance, i.instance);
              break;
            case 32:
            case 64:
            case 128:
              i = { value: void 0 };
              break;
            case 67108864:
            case 134217728:
              i = new yr();
              break;
            case 8:
              Fs(t, n, s), (i = void 0);
          }
          l[r] = i;
        }
        ui(t, oi.CreateViewNodes), di(t, 201326592, 268435456, 0);
      }
      function ti(t) {
        li(t),
          Ue.updateDirectives(t, 1),
          ai(t, oi.CheckNoChanges),
          Ue.updateRenderer(t, 1),
          ui(t, oi.CheckNoChanges),
          (t.state &= -97);
      }
      function ni(t) {
        1 & t.state ? ((t.state &= -2), (t.state |= 2)) : (t.state &= -3),
          Ae(t, 0, 256),
          li(t),
          Ue.updateDirectives(t, 0),
          ai(t, oi.CheckAndUpdate),
          di(t, 67108864, 536870912, 0);
        let n = Ae(t, 256, 512);
        ar(t, 2097152 | (n ? 1048576 : 0)),
          Ue.updateRenderer(t, 0),
          ui(t, oi.CheckAndUpdate),
          di(t, 134217728, 536870912, 0),
          (n = Ae(t, 512, 768)),
          ar(t, 8388608 | (n ? 4194304 : 0)),
          2 & t.def.flags && (t.state &= -9),
          (t.state &= -97),
          Ae(t, 768, 1024);
      }
      function ei(t, n, e, l, r, s, i, o, u, a, c, h, d) {
        return 0 === e
          ? (function(t, n, e, l, r, s, i, o, u, a, c, h) {
              switch (201347067 & n.flags) {
                case 1:
                  return (function(t, n, e, l, r, s, i, o, u, a, c, h) {
                    const d = n.bindings.length;
                    let p = !1;
                    return (
                      d > 0 && Ns(t, n, 0, e) && (p = !0),
                      d > 1 && Ns(t, n, 1, l) && (p = !0),
                      d > 2 && Ns(t, n, 2, r) && (p = !0),
                      d > 3 && Ns(t, n, 3, s) && (p = !0),
                      d > 4 && Ns(t, n, 4, i) && (p = !0),
                      d > 5 && Ns(t, n, 5, o) && (p = !0),
                      d > 6 && Ns(t, n, 6, u) && (p = !0),
                      d > 7 && Ns(t, n, 7, a) && (p = !0),
                      d > 8 && Ns(t, n, 8, c) && (p = !0),
                      d > 9 && Ns(t, n, 9, h) && (p = !0),
                      p
                    );
                  })(t, n, e, l, r, s, i, o, u, a, c, h);
                case 2:
                  return (function(t, n, e, l, r, s, i, o, u, a, c, h) {
                    let d = !1;
                    const p = n.bindings,
                      g = p.length;
                    if (
                      (g > 0 && Be(t, n, 0, e) && (d = !0),
                      g > 1 && Be(t, n, 1, l) && (d = !0),
                      g > 2 && Be(t, n, 2, r) && (d = !0),
                      g > 3 && Be(t, n, 3, s) && (d = !0),
                      g > 4 && Be(t, n, 4, i) && (d = !0),
                      g > 5 && Be(t, n, 5, o) && (d = !0),
                      g > 6 && Be(t, n, 6, u) && (d = !0),
                      g > 7 && Be(t, n, 7, a) && (d = !0),
                      g > 8 && Be(t, n, 8, c) && (d = !0),
                      g > 9 && Be(t, n, 9, h) && (d = !0),
                      d)
                    ) {
                      let d = n.text.prefix;
                      g > 0 && (d += qs(e, p[0])),
                        g > 1 && (d += qs(l, p[1])),
                        g > 2 && (d += qs(r, p[2])),
                        g > 3 && (d += qs(s, p[3])),
                        g > 4 && (d += qs(i, p[4])),
                        g > 5 && (d += qs(o, p[5])),
                        g > 6 && (d += qs(u, p[6])),
                        g > 7 && (d += qs(a, p[7])),
                        g > 8 && (d += qs(c, p[8])),
                        g > 9 && (d += qs(h, p[9]));
                      const f = Re(t, n.nodeIndex).renderText;
                      t.renderer.setValue(f, d);
                    }
                    return d;
                  })(t, n, e, l, r, s, i, o, u, a, c, h);
                case 16384:
                  return (function(t, n, e, l, r, s, i, o, u, a, c, h) {
                    const d = Ve(t, n.nodeIndex),
                      p = d.instance;
                    let g = !1,
                      f = void 0;
                    const m = n.bindings.length;
                    return (
                      m > 0 && qe(t, n, 0, e) && ((g = !0), (f = ur(t, d, n, 0, e, f))),
                      m > 1 && qe(t, n, 1, l) && ((g = !0), (f = ur(t, d, n, 1, l, f))),
                      m > 2 && qe(t, n, 2, r) && ((g = !0), (f = ur(t, d, n, 2, r, f))),
                      m > 3 && qe(t, n, 3, s) && ((g = !0), (f = ur(t, d, n, 3, s, f))),
                      m > 4 && qe(t, n, 4, i) && ((g = !0), (f = ur(t, d, n, 4, i, f))),
                      m > 5 && qe(t, n, 5, o) && ((g = !0), (f = ur(t, d, n, 5, o, f))),
                      m > 6 && qe(t, n, 6, u) && ((g = !0), (f = ur(t, d, n, 6, u, f))),
                      m > 7 && qe(t, n, 7, a) && ((g = !0), (f = ur(t, d, n, 7, a, f))),
                      m > 8 && qe(t, n, 8, c) && ((g = !0), (f = ur(t, d, n, 8, c, f))),
                      m > 9 && qe(t, n, 9, h) && ((g = !0), (f = ur(t, d, n, 9, h, f))),
                      f && p.ngOnChanges(f),
                      65536 & n.flags && Ie(t, 256, n.nodeIndex) && p.ngOnInit(),
                      262144 & n.flags && p.ngDoCheck(),
                      g
                    );
                  })(t, n, e, l, r, s, i, o, u, a, c, h);
                case 32:
                case 64:
                case 128:
                  return (function(t, n, e, l, r, s, i, o, u, a, c, h) {
                    const d = n.bindings;
                    let p = !1;
                    const g = d.length;
                    if (
                      (g > 0 && Be(t, n, 0, e) && (p = !0),
                      g > 1 && Be(t, n, 1, l) && (p = !0),
                      g > 2 && Be(t, n, 2, r) && (p = !0),
                      g > 3 && Be(t, n, 3, s) && (p = !0),
                      g > 4 && Be(t, n, 4, i) && (p = !0),
                      g > 5 && Be(t, n, 5, o) && (p = !0),
                      g > 6 && Be(t, n, 6, u) && (p = !0),
                      g > 7 && Be(t, n, 7, a) && (p = !0),
                      g > 8 && Be(t, n, 8, c) && (p = !0),
                      g > 9 && Be(t, n, 9, h) && (p = !0),
                      p)
                    ) {
                      const p = De(t, n.nodeIndex);
                      let f;
                      switch (201347067 & n.flags) {
                        case 32:
                          (f = new Array(d.length)),
                            g > 0 && (f[0] = e),
                            g > 1 && (f[1] = l),
                            g > 2 && (f[2] = r),
                            g > 3 && (f[3] = s),
                            g > 4 && (f[4] = i),
                            g > 5 && (f[5] = o),
                            g > 6 && (f[6] = u),
                            g > 7 && (f[7] = a),
                            g > 8 && (f[8] = c),
                            g > 9 && (f[9] = h);
                          break;
                        case 64:
                          (f = {}),
                            g > 0 && (f[d[0].name] = e),
                            g > 1 && (f[d[1].name] = l),
                            g > 2 && (f[d[2].name] = r),
                            g > 3 && (f[d[3].name] = s),
                            g > 4 && (f[d[4].name] = i),
                            g > 5 && (f[d[5].name] = o),
                            g > 6 && (f[d[6].name] = u),
                            g > 7 && (f[d[7].name] = a),
                            g > 8 && (f[d[8].name] = c),
                            g > 9 && (f[d[9].name] = h);
                          break;
                        case 128:
                          const t = e;
                          switch (g) {
                            case 1:
                              f = t.transform(e);
                              break;
                            case 2:
                              f = t.transform(l);
                              break;
                            case 3:
                              f = t.transform(l, r);
                              break;
                            case 4:
                              f = t.transform(l, r, s);
                              break;
                            case 5:
                              f = t.transform(l, r, s, i);
                              break;
                            case 6:
                              f = t.transform(l, r, s, i, o);
                              break;
                            case 7:
                              f = t.transform(l, r, s, i, o, u);
                              break;
                            case 8:
                              f = t.transform(l, r, s, i, o, u, a);
                              break;
                            case 9:
                              f = t.transform(l, r, s, i, o, u, a, c);
                              break;
                            case 10:
                              f = t.transform(l, r, s, i, o, u, a, c, h);
                          }
                      }
                      p.value = f;
                    }
                    return p;
                  })(t, n, e, l, r, s, i, o, u, a, c, h);
                default:
                  throw 'unreachable';
              }
            })(t, n, l, r, s, i, o, u, a, c, h, d)
          : (function(t, n, e) {
              switch (201347067 & n.flags) {
                case 1:
                  return (function(t, n, e) {
                    let l = !1;
                    for (let r = 0; r < e.length; r++) Ns(t, n, r, e[r]) && (l = !0);
                    return l;
                  })(t, n, e);
                case 2:
                  return (function(t, n, e) {
                    const l = n.bindings;
                    let r = !1;
                    for (let s = 0; s < e.length; s++) Be(t, n, s, e[s]) && (r = !0);
                    if (r) {
                      let r = '';
                      for (let t = 0; t < e.length; t++) r += qs(e[t], l[t]);
                      r = n.text.prefix + r;
                      const s = Re(t, n.nodeIndex).renderText;
                      t.renderer.setValue(s, r);
                    }
                    return r;
                  })(t, n, e);
                case 16384:
                  return (function(t, n, e) {
                    const l = Ve(t, n.nodeIndex),
                      r = l.instance;
                    let s = !1,
                      i = void 0;
                    for (let o = 0; o < e.length; o++)
                      qe(t, n, o, e[o]) && ((s = !0), (i = ur(t, l, n, o, e[o], i)));
                    return (
                      i && r.ngOnChanges(i),
                      65536 & n.flags && Ie(t, 256, n.nodeIndex) && r.ngOnInit(),
                      262144 & n.flags && r.ngDoCheck(),
                      s
                    );
                  })(t, n, e);
                case 32:
                case 64:
                case 128:
                  return (function(t, n, e) {
                    const l = n.bindings;
                    let r = !1;
                    for (let s = 0; s < e.length; s++) Be(t, n, s, e[s]) && (r = !0);
                    if (r) {
                      const r = De(t, n.nodeIndex);
                      let s;
                      switch (201347067 & n.flags) {
                        case 32:
                          s = e;
                          break;
                        case 64:
                          s = {};
                          for (let r = 0; r < e.length; r++) s[l[r].name] = e[r];
                          break;
                        case 128:
                          const t = e[0],
                            n = e.slice(1);
                          s = t.transform(...n);
                      }
                      r.value = s;
                    }
                    return r;
                  })(t, n, e);
                default:
                  throw 'unreachable';
              }
            })(t, n, l);
      }
      function li(t) {
        const n = t.def;
        if (4 & n.nodeFlags)
          for (let e = 0; e < n.nodes.length; e++) {
            const l = n.nodes[e];
            if (4 & l.flags) {
              const n = Ne(t, e).template._projectedViews;
              if (n)
                for (let e = 0; e < n.length; e++) {
                  const l = n[e];
                  (l.state |= 32), We(l, t);
                }
            } else 0 == (4 & l.childFlags) && (e += l.childCount);
          }
      }
      function ri(t, n, e, l, r, s, i, o, u, a, c, h, d) {
        return (
          0 === e
            ? (function(t, n, e, l, r, s, i, o, u, a, c, h) {
                const d = n.bindings.length;
                d > 0 && Ge(t, n, 0, e),
                  d > 1 && Ge(t, n, 1, l),
                  d > 2 && Ge(t, n, 2, r),
                  d > 3 && Ge(t, n, 3, s),
                  d > 4 && Ge(t, n, 4, i),
                  d > 5 && Ge(t, n, 5, o),
                  d > 6 && Ge(t, n, 6, u),
                  d > 7 && Ge(t, n, 7, a),
                  d > 8 && Ge(t, n, 8, c),
                  d > 9 && Ge(t, n, 9, h);
              })(t, n, l, r, s, i, o, u, a, c, h, d)
            : (function(t, n, e) {
                for (let l = 0; l < e.length; l++) Ge(t, n, l, e[l]);
              })(t, n, l),
          !1
        );
      }
      function si(t, n) {
        if (Le(t, n.nodeIndex).dirty)
          throw Pe(
            Ue.createDebugContext(t, n.nodeIndex),
            `Query ${n.query.id} not dirty`,
            `Query ${n.query.id} dirty`,
            0 != (1 & t.state)
          );
      }
      function ii(t) {
        if (!(128 & t.state)) {
          if ((ai(t, oi.Destroy), ui(t, oi.Destroy), ar(t, 131072), t.disposables))
            for (let n = 0; n < t.disposables.length; n++) t.disposables[n]();
          !(function(t) {
            if (!(16 & t.state)) return;
            const n = Qe(t);
            if (n) {
              const e = n.template._projectedViews;
              e && (jt(e, e.indexOf(t)), Ue.dirtyParentQueries(t));
            }
          })(t),
            t.renderer.destroyNode &&
              (function(t) {
                const n = t.def.nodes.length;
                for (let e = 0; e < n; e++) {
                  const n = t.def.nodes[e];
                  1 & n.flags
                    ? t.renderer.destroyNode(Ne(t, e).renderElement)
                    : 2 & n.flags
                    ? t.renderer.destroyNode(Re(t, e).renderText)
                    : (67108864 & n.flags || 134217728 & n.flags) && Le(t, e).destroy();
                }
              })(t),
            Xe(t) && t.renderer.destroy(),
            (t.state |= 128);
        }
      }
      const oi = (function() {
        var t = {
          CreateViewNodes: 0,
          CheckNoChanges: 1,
          CheckNoChangesProjectedViews: 2,
          CheckAndUpdate: 3,
          CheckAndUpdateProjectedViews: 4,
          Destroy: 5
        };
        return (
          (t[t.CreateViewNodes] = 'CreateViewNodes'),
          (t[t.CheckNoChanges] = 'CheckNoChanges'),
          (t[t.CheckNoChangesProjectedViews] = 'CheckNoChangesProjectedViews'),
          (t[t.CheckAndUpdate] = 'CheckAndUpdate'),
          (t[t.CheckAndUpdateProjectedViews] = 'CheckAndUpdateProjectedViews'),
          (t[t.Destroy] = 'Destroy'),
          t
        );
      })();
      function ui(t, n) {
        const e = t.def;
        if (33554432 & e.nodeFlags)
          for (let l = 0; l < e.nodes.length; l++) {
            const r = e.nodes[l];
            33554432 & r.flags
              ? ci(Ne(t, l).componentView, n)
              : 0 == (33554432 & r.childFlags) && (l += r.childCount);
          }
      }
      function ai(t, n) {
        const e = t.def;
        if (16777216 & e.nodeFlags)
          for (let l = 0; l < e.nodes.length; l++) {
            const r = e.nodes[l];
            if (16777216 & r.flags) {
              const e = Ne(t, l).viewContainer._embeddedViews;
              for (let t = 0; t < e.length; t++) ci(e[t], n);
            } else 0 == (16777216 & r.childFlags) && (l += r.childCount);
          }
      }
      function ci(t, n) {
        const e = t.state;
        switch (n) {
          case oi.CheckNoChanges:
            0 == (128 & e) &&
              (12 == (12 & e) ? ti(t) : 64 & e && hi(t, oi.CheckNoChangesProjectedViews));
            break;
          case oi.CheckNoChangesProjectedViews:
            0 == (128 & e) && (32 & e ? ti(t) : 64 & e && hi(t, n));
            break;
          case oi.CheckAndUpdate:
            0 == (128 & e) &&
              (12 == (12 & e) ? ni(t) : 64 & e && hi(t, oi.CheckAndUpdateProjectedViews));
            break;
          case oi.CheckAndUpdateProjectedViews:
            0 == (128 & e) && (32 & e ? ni(t) : 64 & e && hi(t, n));
            break;
          case oi.Destroy:
            ii(t);
            break;
          case oi.CreateViewNodes:
            Xs(t);
        }
      }
      function hi(t, n) {
        ai(t, n), ui(t, n);
      }
      function di(t, n, e, l) {
        if (!(t.def.nodeFlags & n && t.def.nodeFlags & e)) return;
        const r = t.def.nodes.length;
        for (let s = 0; s < r; s++) {
          const r = t.def.nodes[s];
          if (r.flags & n && r.flags & e)
            switch ((Ue.setCurrentNode(t, r.nodeIndex), l)) {
              case 0:
                Ls(t, r);
                break;
              case 1:
                si(t, r);
            }
          (r.childFlags & n && r.childFlags & e) || (s += r.childCount);
        }
      }
      let pi = !1;
      function gi(t, n, e, l, r, s) {
        const i = r.injector.get(le);
        return Zs(mi(t, r, i, n, e), l, s);
      }
      function fi(t, n, e, l, r, s) {
        const i = r.injector.get(le),
          o = mi(t, r, new Wi(i), n, e),
          u = Si(l);
        return Gi(Ii.create, Zs, null, [o, u, s]);
      }
      function mi(t, n, e, l, r) {
        const s = n.injector.get(vn),
          i = n.injector.get(Bt),
          o = e.createRenderer(null, null);
        return {
          ngModule: n,
          injector: t,
          projectableNodes: l,
          selectorOrNode: r,
          sanitizer: s,
          rendererFactory: e,
          renderer: o,
          errorHandler: i
        };
      }
      function _i(t, n, e, l) {
        const r = Si(e);
        return Gi(Ii.create, Ws, null, [t, n, r, l]);
      }
      function vi(t, n, e, l) {
        return (
          (e = Ci.get(n.element.componentProvider.provider.token) || Si(e)),
          Gi(Ii.create, Qs, null, [t, n, e, l])
        );
      }
      function yi(t, n, e, l) {
        return Fl(
          t,
          n,
          e,
          (function(t) {
            const { hasOverrides: n, hasDeprecatedOverrides: e } = (function(t) {
              let n = !1,
                e = !1;
              return 0 === wi.size
                ? { hasOverrides: n, hasDeprecatedOverrides: e }
                : (t.providers.forEach(t => {
                    const l = wi.get(t.token);
                    3840 & t.flags && l && ((n = !0), (e = e || l.deprecatedBehavior));
                  }),
                  t.modules.forEach(t => {
                    bi.forEach((l, r) => {
                      gt(r).providedIn === t && ((n = !0), (e = e || l.deprecatedBehavior));
                    });
                  }),
                  { hasOverrides: n, hasDeprecatedOverrides: e });
            })(t);
            return n
              ? ((function(t) {
                  for (let n = 0; n < t.providers.length; n++) {
                    const l = t.providers[n];
                    e && (l.flags |= 4096);
                    const r = wi.get(l.token);
                    r &&
                      ((l.flags = (-3841 & l.flags) | r.flags),
                      (l.deps = ll(r.deps)),
                      (l.value = r.value));
                  }
                  if (bi.size > 0) {
                    let n = new Set(t.modules);
                    bi.forEach((l, r) => {
                      if (n.has(gt(r).providedIn)) {
                        let n = {
                          token: r,
                          flags: l.flags | (e ? 4096 : 0),
                          deps: ll(l.deps),
                          value: l.value,
                          index: t.providers.length
                        };
                        t.providers.push(n), (t.providersByKey[$e(r)] = n);
                      }
                    });
                  }
                })((t = t.factory(() => je))),
                t)
              : t;
          })(l)
        );
      }
      const wi = new Map(),
        bi = new Map(),
        Ci = new Map();
      function xi(t) {
        let n;
        wi.set(t.token, t),
          'function' == typeof t.token &&
            (n = gt(t.token)) &&
            'function' == typeof n.providedIn &&
            bi.set(t.token, t);
      }
      function ki(t, n) {
        const e = il(n.viewDefFactory),
          l = il(e.nodes[0].element.componentView);
        Ci.set(t, l);
      }
      function Ei() {
        wi.clear(), bi.clear(), Ci.clear();
      }
      function Si(t) {
        if (0 === wi.size) return t;
        const n = (function(t) {
          const n = [];
          let e = null;
          for (let l = 0; l < t.nodes.length; l++) {
            const r = t.nodes[l];
            1 & r.flags && (e = r),
              e && 3840 & r.flags && wi.has(r.provider.token) && (n.push(e.nodeIndex), (e = null));
          }
          return n;
        })(t);
        if (0 === n.length) return t;
        t = t.factory(() => je);
        for (let l = 0; l < n.length; l++) e(t, n[l]);
        return t;
        function e(t, n) {
          for (let e = n + 1; e < t.nodes.length; e++) {
            const n = t.nodes[e];
            if (1 & n.flags) return;
            if (3840 & n.flags) {
              const t = n.provider,
                e = wi.get(t.token);
              e &&
                ((n.flags = (-3841 & n.flags) | e.flags),
                (t.deps = ll(e.deps)),
                (t.value = e.value));
            }
          }
        }
      }
      function Oi(t, n, e, l, r, s, i, o, u, a, c, h, d) {
        const p = t.def.nodes[n];
        return ei(t, p, e, l, r, s, i, o, u, a, c, h, d), 224 & p.flags ? De(t, n).value : void 0;
      }
      function Pi(t, n, e, l, r, s, i, o, u, a, c, h, d) {
        const p = t.def.nodes[n];
        return ri(t, p, e, l, r, s, i, o, u, a, c, h, d), 224 & p.flags ? De(t, n).value : void 0;
      }
      function Mi(t) {
        return Gi(Ii.detectChanges, ni, null, [t]);
      }
      function Ti(t) {
        return Gi(Ii.checkNoChanges, ti, null, [t]);
      }
      function Ai(t) {
        return Gi(Ii.destroy, ii, null, [t]);
      }
      const Ii = (function() {
        var t = { create: 0, detectChanges: 1, checkNoChanges: 2, destroy: 3, handleEvent: 4 };
        return (
          (t[t.create] = 'create'),
          (t[t.detectChanges] = 'detectChanges'),
          (t[t.checkNoChanges] = 'checkNoChanges'),
          (t[t.destroy] = 'destroy'),
          (t[t.handleEvent] = 'handleEvent'),
          t
        );
      })();
      let Ri, Ni, Vi;
      function Di(t, n) {
        (Ni = t), (Vi = n);
      }
      function Li(t, n, e, l) {
        return Di(t, n), Gi(Ii.handleEvent, t.def.handleEvent, null, [t, n, e, l]);
      }
      function Ui(t, n) {
        if (128 & t.state) throw Te(Ii[Ri]);
        return (
          Di(t, Hi(t, 0)),
          t.def.updateDirectives(function(t, e, l, ...r) {
            const s = t.def.nodes[e];
            return (
              0 === n ? Fi(t, s, l, r) : $i(t, s, l, r),
              16384 & s.flags && Di(t, Hi(t, e)),
              224 & s.flags ? De(t, s.nodeIndex).value : void 0
            );
          }, t)
        );
      }
      function ji(t, n) {
        if (128 & t.state) throw Te(Ii[Ri]);
        return (
          Di(t, zi(t, 0)),
          t.def.updateRenderer(function(t, e, l, ...r) {
            const s = t.def.nodes[e];
            return (
              0 === n ? Fi(t, s, l, r) : $i(t, s, l, r),
              3 & s.flags && Di(t, zi(t, e)),
              224 & s.flags ? De(t, s.nodeIndex).value : void 0
            );
          }, t)
        );
      }
      function Fi(t, n, e, l) {
        if (ei(t, n, e, ...l)) {
          const i = 1 === e ? l[0] : l;
          if (16384 & n.flags) {
            const e = {};
            for (let t = 0; t < n.bindings.length; t++) {
              const l = n.bindings[t],
                o = i[t];
              8 & l.flags &&
                (e[
                  ((r = l.nonMinifiedName),
                  (s = void 0),
                  (s = r.replace(/[$@]/g, '_')),
                  `ng-reflect-${(r = s.replace(bn, (...t) => '-' + t[1].toLowerCase()))}`)
                ] = Cn(o));
            }
            const l = n.parent,
              o = Ne(t, l.nodeIndex).renderElement;
            if (l.element.name)
              for (let n in e) {
                const l = e[n];
                null != l ? t.renderer.setAttribute(o, n, l) : t.renderer.removeAttribute(o, n);
              }
            else t.renderer.setValue(o, `bindings=${JSON.stringify(e, null, 2)}`);
          }
        }
        var r, s;
      }
      function $i(t, n, e, l) {
        ri(t, n, e, ...l);
      }
      function Hi(t, n) {
        for (let e = n; e < t.def.nodes.length; e++) {
          const n = t.def.nodes[e];
          if (16384 & n.flags && n.bindings && n.bindings.length) return e;
        }
        return null;
      }
      function zi(t, n) {
        for (let e = n; e < t.def.nodes.length; e++) {
          const n = t.def.nodes[e];
          if (3 & n.flags && n.bindings && n.bindings.length) return e;
        }
        return null;
      }
      class qi {
        constructor(t, n) {
          (this.view = t),
            (this.nodeIndex = n),
            null == n && (this.nodeIndex = n = 0),
            (this.nodeDef = t.def.nodes[n]);
          let e = this.nodeDef,
            l = t;
          for (; e && 0 == (1 & e.flags); ) e = e.parent;
          if (!e) for (; !e && l; ) (e = Ye(l)), (l = l.parent);
          (this.elDef = e), (this.elView = l);
        }
        get elOrCompView() {
          return Ne(this.elView, this.elDef.nodeIndex).componentView || this.view;
        }
        get injector() {
          return Vl(this.elView, this.elDef);
        }
        get component() {
          return this.elOrCompView.component;
        }
        get context() {
          return this.elOrCompView.context;
        }
        get providerTokens() {
          const t = [];
          if (this.elDef)
            for (
              let n = this.elDef.nodeIndex + 1;
              n <= this.elDef.nodeIndex + this.elDef.childCount;
              n++
            ) {
              const e = this.elView.def.nodes[n];
              20224 & e.flags && t.push(e.provider.token), (n += e.childCount);
            }
          return t;
        }
        get references() {
          const t = {};
          if (this.elDef) {
            Bi(this.elView, this.elDef, t);
            for (
              let n = this.elDef.nodeIndex + 1;
              n <= this.elDef.nodeIndex + this.elDef.childCount;
              n++
            ) {
              const e = this.elView.def.nodes[n];
              20224 & e.flags && Bi(this.elView, e, t), (n += e.childCount);
            }
          }
          return t;
        }
        get componentRenderElement() {
          const t = (function(t) {
            for (; t && !Xe(t); ) t = t.parent;
            return t.parent ? Ne(t.parent, Ye(t).nodeIndex) : null;
          })(this.elOrCompView);
          return t ? t.renderElement : void 0;
        }
        get renderNode() {
          return 2 & this.nodeDef.flags ? Je(this.view, this.nodeDef) : Je(this.elView, this.elDef);
        }
        logError(t, ...n) {
          let e, l;
          2 & this.nodeDef.flags
            ? ((e = this.view.def), (l = this.nodeDef.nodeIndex))
            : ((e = this.elView.def), (l = this.elDef.nodeIndex));
          const r = (function(t, n) {
            let e = -1;
            for (let l = 0; l <= n; l++) 3 & t.nodes[l].flags && e++;
            return e;
          })(e, l);
          let s = -1;
          e.factory(() => (s++, s === r ? t.error.bind(t, ...n) : je)),
            s < r &&
              (t.error('Illegal state: the ViewDefinitionFactory did not call the logger!'),
              t.error(...n));
        }
      }
      function Bi(t, n, e) {
        for (let l in n.references) e[l] = js(t, n, n.references[l]);
      }
      function Gi(t, n, e, l) {
        const r = Ri,
          s = Ni,
          i = Vi;
        try {
          Ri = t;
          const o = n.apply(e, l);
          return (Ni = s), (Vi = i), (Ri = r), o;
        } catch (o) {
          if (Ht(o) || !Ni) throw o;
          throw (function(t, n) {
            return t instanceof Error || (t = new Error(t.toString())), Me(t, n), t;
          })(o, Ki());
        }
      }
      function Ki() {
        return Ni ? new qi(Ni, Vi) : null;
      }
      class Wi {
        constructor(t) {
          this.delegate = t;
        }
        createRenderer(t, n) {
          return new Zi(this.delegate.createRenderer(t, n));
        }
        begin() {
          this.delegate.begin && this.delegate.begin();
        }
        end() {
          this.delegate.end && this.delegate.end();
        }
        whenRenderingDone() {
          return this.delegate.whenRenderingDone
            ? this.delegate.whenRenderingDone()
            : Promise.resolve(null);
        }
      }
      class Zi {
        constructor(t) {
          (this.delegate = t), (this.debugContextFactory = Ki), (this.data = this.delegate.data);
        }
        createDebugContext(t) {
          return this.debugContextFactory(t);
        }
        destroyNode(t) {
          const n = bs(t);
          !(function(t) {
            ws.delete(t.nativeNode);
          })(n),
            n instanceof vs && (n.listeners.length = 0),
            this.delegate.destroyNode && this.delegate.destroyNode(t);
        }
        destroy() {
          this.delegate.destroy();
        }
        createElement(t, n) {
          const e = this.delegate.createElement(t, n),
            l = this.createDebugContext(e);
          if (l) {
            const n = new ys(e, null, l);
            (n.name = t), Cs(n);
          }
          return e;
        }
        createComment(t) {
          const n = this.delegate.createComment(t),
            e = this.createDebugContext(n);
          return e && Cs(new vs(n, null, e)), n;
        }
        createText(t) {
          const n = this.delegate.createText(t),
            e = this.createDebugContext(n);
          return e && Cs(new vs(n, null, e)), n;
        }
        appendChild(t, n) {
          const e = bs(t),
            l = bs(n);
          e && l && e instanceof ys && e.addChild(l), this.delegate.appendChild(t, n);
        }
        insertBefore(t, n, e) {
          const l = bs(t),
            r = bs(n),
            s = bs(e);
          l && r && l instanceof ys && l.insertBefore(s, r), this.delegate.insertBefore(t, n, e);
        }
        removeChild(t, n) {
          const e = bs(t),
            l = bs(n);
          e && l && e instanceof ys && e.removeChild(l), this.delegate.removeChild(t, n);
        }
        selectRootElement(t, n) {
          const e = this.delegate.selectRootElement(t, n),
            l = Ki();
          return l && Cs(new ys(e, null, l)), e;
        }
        setAttribute(t, n, e, l) {
          const r = bs(t);
          r && r instanceof ys && (r.attributes[l ? l + ':' + n : n] = e),
            this.delegate.setAttribute(t, n, e, l);
        }
        removeAttribute(t, n, e) {
          const l = bs(t);
          l && l instanceof ys && (l.attributes[e ? e + ':' + n : n] = null),
            this.delegate.removeAttribute(t, n, e);
        }
        addClass(t, n) {
          const e = bs(t);
          e && e instanceof ys && (e.classes[n] = !0), this.delegate.addClass(t, n);
        }
        removeClass(t, n) {
          const e = bs(t);
          e && e instanceof ys && (e.classes[n] = !1), this.delegate.removeClass(t, n);
        }
        setStyle(t, n, e, l) {
          const r = bs(t);
          r && r instanceof ys && (r.styles[n] = e), this.delegate.setStyle(t, n, e, l);
        }
        removeStyle(t, n, e) {
          const l = bs(t);
          l && l instanceof ys && (l.styles[n] = null), this.delegate.removeStyle(t, n, e);
        }
        setProperty(t, n, e) {
          const l = bs(t);
          l && l instanceof ys && (l.properties[n] = e), this.delegate.setProperty(t, n, e);
        }
        listen(t, n, e) {
          if ('string' != typeof t) {
            const l = bs(t);
            l && l.listeners.push(new _s(n, e));
          }
          return this.delegate.listen(t, n, e);
        }
        parentNode(t) {
          return this.delegate.parentNode(t);
        }
        nextSibling(t) {
          return this.delegate.nextSibling(t);
        }
        setValue(t, n) {
          return this.delegate.setValue(t, n);
        }
      }
      function Qi(t, n, e) {
        return new Yi(t, n, e);
      }
      class Yi extends Lt {
        constructor(t, n, e) {
          super(),
            (this.moduleType = t),
            (this._bootstrapComponents = n),
            (this._ngModuleDefFactory = e);
        }
        create(t) {
          !(function() {
            if (pi) return;
            pi = !0;
            const t = Wt()
              ? {
                  setCurrentNode: Di,
                  createRootView: fi,
                  createEmbeddedView: _i,
                  createComponentView: vi,
                  createNgModuleRef: yi,
                  overrideProvider: xi,
                  overrideComponentView: ki,
                  clearOverrides: Ei,
                  checkAndUpdateView: Mi,
                  checkNoChangesView: Ti,
                  destroyView: Ai,
                  createDebugContext: (t, n) => new qi(t, n),
                  handleEvent: Li,
                  updateDirectives: Ui,
                  updateRenderer: ji
                }
              : {
                  setCurrentNode: () => {},
                  createRootView: gi,
                  createEmbeddedView: Ws,
                  createComponentView: Qs,
                  createNgModuleRef: Fl,
                  overrideProvider: je,
                  overrideComponentView: je,
                  clearOverrides: je,
                  checkAndUpdateView: ni,
                  checkNoChangesView: ti,
                  destroyView: ii,
                  createDebugContext: (t, n) => new qi(t, n),
                  handleEvent: (t, n, e, l) => t.def.handleEvent(t, n, e, l),
                  updateDirectives: (t, n) => t.def.updateDirectives(0 === n ? Oi : Pi, t),
                  updateRenderer: (t, n) => t.def.updateRenderer(0 === n ? Oi : Pi, t)
                };
            (Ue.setCurrentNode = t.setCurrentNode),
              (Ue.createRootView = t.createRootView),
              (Ue.createEmbeddedView = t.createEmbeddedView),
              (Ue.createComponentView = t.createComponentView),
              (Ue.createNgModuleRef = t.createNgModuleRef),
              (Ue.overrideProvider = t.overrideProvider),
              (Ue.overrideComponentView = t.overrideComponentView),
              (Ue.clearOverrides = t.clearOverrides),
              (Ue.checkAndUpdateView = t.checkAndUpdateView),
              (Ue.checkNoChangesView = t.checkNoChangesView),
              (Ue.destroyView = t.destroyView),
              (Ue.resolveDep = ir),
              (Ue.createDebugContext = t.createDebugContext),
              (Ue.handleEvent = t.handleEvent),
              (Ue.updateDirectives = t.updateDirectives),
              (Ue.updateRenderer = t.updateRenderer),
              (Ue.dirtyParentQueries = Ds);
          })();
          const n = (function(t) {
            const n = Array.from(t.providers),
              e = Array.from(t.modules),
              l = {};
            for (const r in t.providersByKey) l[r] = t.providersByKey[r];
            return {
              factory: t.factory,
              isRoot: t.isRoot,
              providers: n,
              modules: e,
              providersByKey: l
            };
          })(il(this._ngModuleDefFactory));
          return Ue.createNgModuleRef(this.moduleType, t || On.NULL, this._bootstrapComponents, n);
        }
      }
      class Ji {}
      class Xi {
        constructor() {
          this.title = 'angular-nabludenie-by';
        }
      }
      class to {}
      const no = new Et('Location Initialized');
      class eo {}
      const lo = new Et('appBaseHref');
      class ro {
        constructor(t, n) {
          (this._subject = new _r()), (this._urlChangeListeners = []), (this._platformStrategy = t);
          const e = this._platformStrategy.getBaseHref();
          (this._platformLocation = n),
            (this._baseHref = ro.stripTrailingSlash(so(e))),
            this._platformStrategy.onPopState(t => {
              this._subject.emit({ url: this.path(!0), pop: !0, state: t.state, type: t.type });
            });
        }
        path(t = !1) {
          return this.normalize(this._platformStrategy.path(t));
        }
        getState() {
          return this._platformLocation.getState();
        }
        isCurrentPathEqualTo(t, n = '') {
          return this.path() == this.normalize(t + ro.normalizeQueryParams(n));
        }
        normalize(t) {
          return ro.stripTrailingSlash(
            (function(t, n) {
              return t && n.startsWith(t) ? n.substring(t.length) : n;
            })(this._baseHref, so(t))
          );
        }
        prepareExternalUrl(t) {
          return t && '/' !== t[0] && (t = '/' + t), this._platformStrategy.prepareExternalUrl(t);
        }
        go(t, n = '', e = null) {
          this._platformStrategy.pushState(e, '', t, n),
            this._notifyUrlChangeListeners(
              this.prepareExternalUrl(t + ro.normalizeQueryParams(n)),
              e
            );
        }
        replaceState(t, n = '', e = null) {
          this._platformStrategy.replaceState(e, '', t, n),
            this._notifyUrlChangeListeners(
              this.prepareExternalUrl(t + ro.normalizeQueryParams(n)),
              e
            );
        }
        forward() {
          this._platformStrategy.forward();
        }
        back() {
          this._platformStrategy.back();
        }
        onUrlChange(t) {
          this._urlChangeListeners.push(t),
            this.subscribe(t => {
              this._notifyUrlChangeListeners(t.url, t.state);
            });
        }
        _notifyUrlChangeListeners(t = '', n) {
          this._urlChangeListeners.forEach(e => e(t, n));
        }
        subscribe(t, n, e) {
          return this._subject.subscribe({ next: t, error: n, complete: e });
        }
        static normalizeQueryParams(t) {
          return t && '?' !== t[0] ? '?' + t : t;
        }
        static joinWithSlash(t, n) {
          if (0 == t.length) return n;
          if (0 == n.length) return t;
          let e = 0;
          return (
            t.endsWith('/') && e++,
            n.startsWith('/') && e++,
            2 == e ? t + n.substring(1) : 1 == e ? t + n : t + '/' + n
          );
        }
        static stripTrailingSlash(t) {
          const n = t.match(/#|\?|$/),
            e = (n && n.index) || t.length;
          return t.slice(0, e - ('/' === t[e - 1] ? 1 : 0)) + t.slice(e);
        }
      }
      function so(t) {
        return t.replace(/\/index.html$/, '');
      }
      class io extends eo {
        constructor(t, n) {
          super(),
            (this._platformLocation = t),
            (this._baseHref = ''),
            null != n && (this._baseHref = n);
        }
        onPopState(t) {
          this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t);
        }
        getBaseHref() {
          return this._baseHref;
        }
        path(t = !1) {
          let n = this._platformLocation.hash;
          return null == n && (n = '#'), n.length > 0 ? n.substring(1) : n;
        }
        prepareExternalUrl(t) {
          const n = ro.joinWithSlash(this._baseHref, t);
          return n.length > 0 ? '#' + n : n;
        }
        pushState(t, n, e, l) {
          let r = this.prepareExternalUrl(e + ro.normalizeQueryParams(l));
          0 == r.length && (r = this._platformLocation.pathname),
            this._platformLocation.pushState(t, n, r);
        }
        replaceState(t, n, e, l) {
          let r = this.prepareExternalUrl(e + ro.normalizeQueryParams(l));
          0 == r.length && (r = this._platformLocation.pathname),
            this._platformLocation.replaceState(t, n, r);
        }
        forward() {
          this._platformLocation.forward();
        }
        back() {
          this._platformLocation.back();
        }
      }
      class oo extends eo {
        constructor(t, n) {
          if (
            (super(),
            (this._platformLocation = t),
            null == n && (n = this._platformLocation.getBaseHrefFromDOM()),
            null == n)
          )
            throw new Error(
              'No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.'
            );
          this._baseHref = n;
        }
        onPopState(t) {
          this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t);
        }
        getBaseHref() {
          return this._baseHref;
        }
        prepareExternalUrl(t) {
          return ro.joinWithSlash(this._baseHref, t);
        }
        path(t = !1) {
          const n =
              this._platformLocation.pathname +
              ro.normalizeQueryParams(this._platformLocation.search),
            e = this._platformLocation.hash;
          return e && t ? `${n}${e}` : n;
        }
        pushState(t, n, e, l) {
          const r = this.prepareExternalUrl(e + ro.normalizeQueryParams(l));
          this._platformLocation.pushState(t, n, r);
        }
        replaceState(t, n, e, l) {
          const r = this.prepareExternalUrl(e + ro.normalizeQueryParams(l));
          this._platformLocation.replaceState(t, n, r);
        }
        forward() {
          this._platformLocation.forward();
        }
        back() {
          this._platformLocation.back();
        }
      }
      const uo = (function() {
          var t = { Zero: 0, One: 1, Two: 2, Few: 3, Many: 4, Other: 5 };
          return (
            (t[t.Zero] = 'Zero'),
            (t[t.One] = 'One'),
            (t[t.Two] = 'Two'),
            (t[t.Few] = 'Few'),
            (t[t.Many] = 'Many'),
            (t[t.Other] = 'Other'),
            t
          );
        })(),
        ao = new Et('UseV4Plurals');
      class co {}
      class ho extends co {
        constructor(t, n) {
          super(), (this.locale = t), (this.deprecatedPluralFn = n);
        }
        getPluralCategory(t, n) {
          switch (
            this.deprecatedPluralFn
              ? this.deprecatedPluralFn(n || this.locale, t)
              : (function(t) {
                  return (function(t) {
                    const n = t.toLowerCase().replace(/_/g, '-');
                    let e = pr[n];
                    if (e) return e;
                    const l = n.split('-')[0];
                    if (((e = pr[l]), e)) return e;
                    if ('en' === l) return mr;
                    throw new Error(`Missing locale data for the locale "${t}".`);
                  })(t)[gr.PluralCase];
                })(n || this.locale)(t)
          ) {
            case uo.Zero:
              return 'zero';
            case uo.One:
              return 'one';
            case uo.Two:
              return 'two';
            case uo.Few:
              return 'few';
            case uo.Many:
              return 'many';
            default:
              return 'other';
          }
        }
      }
      class po {
        constructor(t, n) {
          (this._viewContainer = t),
            (this._context = new go()),
            (this._thenTemplateRef = null),
            (this._elseTemplateRef = null),
            (this._thenViewRef = null),
            (this._elseViewRef = null),
            (this._thenTemplateRef = n);
        }
        set ngIf(t) {
          (this._context.$implicit = this._context.ngIf = t), this._updateView();
        }
        set ngIfThen(t) {
          fo('ngIfThen', t),
            (this._thenTemplateRef = t),
            (this._thenViewRef = null),
            this._updateView();
        }
        set ngIfElse(t) {
          fo('ngIfElse', t),
            (this._elseTemplateRef = t),
            (this._elseViewRef = null),
            this._updateView();
        }
        _updateView() {
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
      }
      class go {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function fo(t, n) {
        if (n && !n.createEmbeddedView)
          throw new Error(`${t} must be a TemplateRef, but received '${mt(n)}'.`);
      }
      class mo {}
      const _o = new Et('DocumentToken');
      let vo = (() => {
        class t {}
        return (
          (t.ngInjectableDef = dt({
            token: t,
            providedIn: 'root',
            factory: () => new yo(It(_o), window, It(Bt))
          })),
          t
        );
      })();
      class yo {
        constructor(t, n, e) {
          (this.document = t),
            (this.window = n),
            (this.errorHandler = e),
            (this.offset = () => [0, 0]);
        }
        setOffset(t) {
          this.offset = Array.isArray(t) ? () => t : t;
        }
        getScrollPosition() {
          return this.supportScrollRestoration()
            ? [this.window.scrollX, this.window.scrollY]
            : [0, 0];
        }
        scrollToPosition(t) {
          this.supportScrollRestoration() && this.window.scrollTo(t[0], t[1]);
        }
        scrollToAnchor(t) {
          if (this.supportScrollRestoration()) {
            t =
              this.window.CSS && this.window.CSS.escape
                ? this.window.CSS.escape(t)
                : t.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g, '\\$1');
            try {
              const n = this.document.querySelector(`#${t}`);
              if (n) return void this.scrollToElement(n);
              const e = this.document.querySelector(`[name='${t}']`);
              if (e) return void this.scrollToElement(e);
            } catch (n) {
              this.errorHandler.handleError(n);
            }
          }
        }
        setHistoryScrollRestoration(t) {
          if (this.supportScrollRestoration()) {
            const n = this.window.history;
            n && n.scrollRestoration && (n.scrollRestoration = t);
          }
        }
        scrollToElement(t) {
          const n = t.getBoundingClientRect(),
            e = n.left + this.window.pageXOffset,
            l = n.top + this.window.pageYOffset,
            r = this.offset();
          this.window.scrollTo(e - r[0], l - r[1]);
        }
        supportScrollRestoration() {
          try {
            return !!this.window && !!this.window.scrollTo;
          } catch (t) {
            return !1;
          }
        }
      }
      const wo = new b(t => t.complete());
      function bo(t) {
        return t
          ? (function(t) {
              return new b(n => t.schedule(() => n.complete()));
            })(t)
          : wo;
      }
      function Co(t) {
        const n = new b(n => {
          n.next(t), n.complete();
        });
        return (n._isScalar = !0), (n.value = t), n;
      }
      function xo(...t) {
        let n = t[t.length - 1];
        switch ((M(n) ? t.pop() : (n = void 0), t.length)) {
          case 0:
            return bo(n);
          case 1:
            return n ? B(t, n) : Co(t[0]);
          default:
            return B(t, n);
        }
      }
      class ko extends O {
        constructor(t) {
          super(), (this._value = t);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(t) {
          const n = super._subscribe(t);
          return n && !n.closed && t.next(this._value), n;
        }
        getValue() {
          if (this.hasError) throw this.thrownError;
          if (this.closed) throw new k();
          return this._value;
        }
        next(t) {
          super.next((this._value = t));
        }
      }
      function Eo() {
        return (
          Error.call(this),
          (this.message = 'no elements in sequence'),
          (this.name = 'EmptyError'),
          this
        );
      }
      Eo.prototype = Object.create(Error.prototype);
      const So = Eo,
        Oo = {};
      class Po {
        constructor(t) {
          this.resultSelector = t;
        }
        call(t, n) {
          return n.subscribe(new Mo(t, this.resultSelector));
        }
      }
      class Mo extends $ {
        constructor(t, n) {
          super(t),
            (this.resultSelector = n),
            (this.active = 0),
            (this.values = []),
            (this.observables = []);
        }
        _next(t) {
          this.values.push(Oo), this.observables.push(t);
        }
        _complete() {
          const t = this.observables,
            n = t.length;
          if (0 === n) this.destination.complete();
          else {
            (this.active = n), (this.toRespond = n);
            for (let e = 0; e < n; e++) {
              const n = t[e];
              this.add(F(this, n, n, e));
            }
          }
        }
        notifyComplete(t) {
          0 == (this.active -= 1) && this.destination.complete();
        }
        notifyNext(t, n, e, l, r) {
          const s = this.values,
            i = this.toRespond ? (s[e] === Oo ? --this.toRespond : this.toRespond) : 0;
          (s[e] = n),
            0 === i &&
              (this.resultSelector ? this._tryResultSelector(s) : this.destination.next(s.slice()));
        }
        _tryResultSelector(t) {
          let n;
          try {
            n = this.resultSelector.apply(this, t);
          } catch (e) {
            return void this.destination.error(e);
          }
          this.destination.next(n);
        }
      }
      function To(t) {
        return new b(n => {
          let e;
          try {
            e = t();
          } catch (l) {
            return void n.error(l);
          }
          return (e ? G(e) : bo()).subscribe(n);
        });
      }
      function Ao() {
        return Y(1);
      }
      function Io(t, n) {
        return function(e) {
          return e.lift(new Ro(t, n));
        };
      }
      class Ro {
        constructor(t, n) {
          (this.predicate = t), (this.thisArg = n);
        }
        call(t, n) {
          return n.subscribe(new No(t, this.predicate, this.thisArg));
        }
      }
      class No extends f {
        constructor(t, n, e) {
          super(t), (this.predicate = n), (this.thisArg = e), (this.count = 0);
        }
        _next(t) {
          let n;
          try {
            n = this.predicate.call(this.thisArg, t, this.count++);
          } catch (e) {
            return void this.destination.error(e);
          }
          n && this.destination.next(t);
        }
      }
      function Vo() {
        return (
          Error.call(this),
          (this.message = 'argument out of range'),
          (this.name = 'ArgumentOutOfRangeError'),
          this
        );
      }
      Vo.prototype = Object.create(Error.prototype);
      const Do = Vo;
      function Lo(t) {
        return function(n) {
          return 0 === t ? bo() : n.lift(new Uo(t));
        };
      }
      class Uo {
        constructor(t) {
          if (((this.total = t), this.total < 0)) throw new Do();
        }
        call(t, n) {
          return n.subscribe(new jo(t, this.total));
        }
      }
      class jo extends f {
        constructor(t, n) {
          super(t), (this.total = n), (this.ring = new Array()), (this.count = 0);
        }
        _next(t) {
          const n = this.ring,
            e = this.total,
            l = this.count++;
          n.length < e ? n.push(t) : (n[l % e] = t);
        }
        _complete() {
          const t = this.destination;
          let n = this.count;
          if (n > 0) {
            const e = this.count >= this.total ? this.total : this.count,
              l = this.ring;
            for (let r = 0; r < e; r++) {
              const r = n++ % e;
              t.next(l[r]);
            }
          }
          t.complete();
        }
      }
      function Fo(t, n, e) {
        return function(l) {
          return l.lift(new $o(t, n, e));
        };
      }
      class $o {
        constructor(t, n, e) {
          (this.nextOrObserver = t), (this.error = n), (this.complete = e);
        }
        call(t, n) {
          return n.subscribe(new Ho(t, this.nextOrObserver, this.error, this.complete));
        }
      }
      class Ho extends f {
        constructor(t, n, e, r) {
          super(t),
            (this._tapNext = v),
            (this._tapError = v),
            (this._tapComplete = v),
            (this._tapError = e || v),
            (this._tapComplete = r || v),
            l(n)
              ? ((this._context = this), (this._tapNext = n))
              : n &&
                ((this._context = n),
                (this._tapNext = n.next || v),
                (this._tapError = n.error || v),
                (this._tapComplete = n.complete || v));
        }
        _next(t) {
          try {
            this._tapNext.call(this._context, t);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(t);
        }
        _error(t) {
          try {
            this._tapError.call(this._context, t);
          } catch (t) {
            return void this.destination.error(t);
          }
          this.destination.error(t);
        }
        _complete() {
          try {
            this._tapComplete.call(this._context);
          } catch (t) {
            return void this.destination.error(t);
          }
          return this.destination.complete();
        }
      }
      const zo = (t = qo) =>
        Fo({
          hasValue: !1,
          next() {
            this.hasValue = !0;
          },
          complete() {
            if (!this.hasValue) throw t();
          }
        });
      function qo() {
        return new So();
      }
      function Bo(t = null) {
        return n => n.lift(new Go(t));
      }
      class Go {
        constructor(t) {
          this.defaultValue = t;
        }
        call(t, n) {
          return n.subscribe(new Ko(t, this.defaultValue));
        }
      }
      class Ko extends f {
        constructor(t, n) {
          super(t), (this.defaultValue = n), (this.isEmpty = !0);
        }
        _next(t) {
          (this.isEmpty = !1), this.destination.next(t);
        }
        _complete() {
          this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete();
        }
      }
      function Wo(t, n) {
        const e = arguments.length >= 2;
        return l => l.pipe(t ? Io((n, e) => t(n, e, l)) : Q, Lo(1), e ? Bo(n) : zo(() => new So()));
      }
      function Zo(t) {
        return function(n) {
          const e = new Qo(t),
            l = n.lift(e);
          return (e.caught = l);
        };
      }
      class Qo {
        constructor(t) {
          this.selector = t;
        }
        call(t, n) {
          return n.subscribe(new Yo(t, this.selector, this.caught));
        }
      }
      class Yo extends $ {
        constructor(t, n, e) {
          super(t), (this.selector = n), (this.caught = e);
        }
        error(t) {
          if (!this.isStopped) {
            let e;
            try {
              e = this.selector(t, this.caught);
            } catch (n) {
              return void super.error(n);
            }
            this._unsubscribeAndRecycle();
            const l = new T(this, void 0, void 0);
            this.add(l), F(this, e, void 0, void 0, l);
          }
        }
      }
      function Jo(t) {
        return n => (0 === t ? bo() : n.lift(new Xo(t)));
      }
      class Xo {
        constructor(t) {
          if (((this.total = t), this.total < 0)) throw new Do();
        }
        call(t, n) {
          return n.subscribe(new tu(t, this.total));
        }
      }
      class tu extends f {
        constructor(t, n) {
          super(t), (this.total = n), (this.count = 0);
        }
        _next(t) {
          const n = this.total,
            e = ++this.count;
          e <= n &&
            (this.destination.next(t),
            e === n && (this.destination.complete(), this.unsubscribe()));
        }
      }
      function nu(t, n) {
        const e = arguments.length >= 2;
        return l => l.pipe(t ? Io((n, e) => t(n, e, l)) : Q, Jo(1), e ? Bo(n) : zo(() => new So()));
      }
      class eu {
        constructor(t, n, e) {
          (this.predicate = t), (this.thisArg = n), (this.source = e);
        }
        call(t, n) {
          return n.subscribe(new lu(t, this.predicate, this.thisArg, this.source));
        }
      }
      class lu extends f {
        constructor(t, n, e, l) {
          super(t),
            (this.predicate = n),
            (this.thisArg = e),
            (this.source = l),
            (this.index = 0),
            (this.thisArg = e || this);
        }
        notifyComplete(t) {
          this.destination.next(t), this.destination.complete();
        }
        _next(t) {
          let n = !1;
          try {
            n = this.predicate.call(this.thisArg, t, this.index++, this.source);
          } catch (e) {
            return void this.destination.error(e);
          }
          n || this.notifyComplete(!1);
        }
        _complete() {
          this.notifyComplete(!0);
        }
      }
      function ru(t, n) {
        return 'function' == typeof n
          ? e => e.pipe(ru((e, l) => G(t(e, l)).pipe(H((t, r) => n(e, t, l, r)))))
          : n => n.lift(new su(t));
      }
      class su {
        constructor(t) {
          this.project = t;
        }
        call(t, n) {
          return n.subscribe(new iu(t, this.project));
        }
      }
      class iu extends $ {
        constructor(t, n) {
          super(t), (this.project = n), (this.index = 0);
        }
        _next(t) {
          let n;
          const e = this.index++;
          try {
            n = this.project(t, e);
          } catch (l) {
            return void this.destination.error(l);
          }
          this._innerSub(n, t, e);
        }
        _innerSub(t, n, e) {
          const l = this.innerSubscription;
          l && l.unsubscribe();
          const r = new T(this, void 0, void 0);
          this.destination.add(r), (this.innerSubscription = F(this, t, n, e, r));
        }
        _complete() {
          const { innerSubscription: t } = this;
          (t && !t.closed) || super._complete(), this.unsubscribe();
        }
        _unsubscribe() {
          this.innerSubscription = null;
        }
        notifyComplete(t) {
          this.destination.remove(t),
            (this.innerSubscription = null),
            this.isStopped && super._complete();
        }
        notifyNext(t, n, e, l, r) {
          this.destination.next(n);
        }
      }
      function ou(t, n) {
        let e = !1;
        return (
          arguments.length >= 2 && (e = !0),
          function(l) {
            return l.lift(new uu(t, n, e));
          }
        );
      }
      class uu {
        constructor(t, n, e = !1) {
          (this.accumulator = t), (this.seed = n), (this.hasSeed = e);
        }
        call(t, n) {
          return n.subscribe(new au(t, this.accumulator, this.seed, this.hasSeed));
        }
      }
      class au extends f {
        constructor(t, n, e, l) {
          super(t), (this.accumulator = n), (this._seed = e), (this.hasSeed = l), (this.index = 0);
        }
        get seed() {
          return this._seed;
        }
        set seed(t) {
          (this.hasSeed = !0), (this._seed = t);
        }
        _next(t) {
          if (this.hasSeed) return this._tryNext(t);
          (this.seed = t), this.destination.next(t);
        }
        _tryNext(t) {
          const n = this.index++;
          let e;
          try {
            e = this.accumulator(this.seed, t, n);
          } catch (l) {
            this.destination.error(l);
          }
          (this.seed = e), this.destination.next(e);
        }
      }
      function cu(t, n) {
        return K(t, n, 1);
      }
      class hu {
        constructor(t) {
          this.callback = t;
        }
        call(t, n) {
          return n.subscribe(new du(t, this.callback));
        }
      }
      class du extends f {
        constructor(t, n) {
          super(t), this.add(new d(n));
        }
      }
      let pu = null;
      function gu() {
        return pu;
      }
      const fu = {
          class: 'className',
          innerHtml: 'innerHTML',
          readonly: 'readOnly',
          tabindex: 'tabIndex'
        },
        mu = {
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
        _u = {
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
        vu = (() => {
          if (kt.Node)
            return (
              kt.Node.prototype.contains ||
              function(t) {
                return !!(16 & this.compareDocumentPosition(t));
              }
            );
        })();
      class yu extends class extends class {
        constructor() {
          this.resourceLoaderType = null;
        }
        get attrToPropMap() {
          return this._attrToPropMap;
        }
        set attrToPropMap(t) {
          this._attrToPropMap = t;
        }
      } {
        constructor() {
          super(), (this._animationPrefix = null), (this._transitionEnd = null);
          try {
            const t = this.createElement('div', document);
            if (null != this.getStyle(t, 'animationName')) this._animationPrefix = '';
            else {
              const n = ['Webkit', 'Moz', 'O', 'ms'];
              for (let e = 0; e < n.length; e++)
                if (null != this.getStyle(t, n[e] + 'AnimationName')) {
                  this._animationPrefix = '-' + n[e].toLowerCase() + '-';
                  break;
                }
            }
            const n = {
              WebkitTransition: 'webkitTransitionEnd',
              MozTransition: 'transitionend',
              OTransition: 'oTransitionEnd otransitionend',
              transition: 'transitionend'
            };
            Object.keys(n).forEach(e => {
              null != this.getStyle(t, e) && (this._transitionEnd = n[e]);
            });
          } catch (t) {
            (this._animationPrefix = null), (this._transitionEnd = null);
          }
        }
        getDistributedNodes(t) {
          return t.getDistributedNodes();
        }
        resolveAndSetHref(t, n, e) {
          t.href = null == e ? n : n + '/../' + e;
        }
        supportsDOMEvents() {
          return !0;
        }
        supportsNativeShadowDOM() {
          return 'function' == typeof document.body.createShadowRoot;
        }
        getAnimationPrefix() {
          return this._animationPrefix ? this._animationPrefix : '';
        }
        getTransitionEnd() {
          return this._transitionEnd ? this._transitionEnd : '';
        }
        supportsAnimation() {
          return null != this._animationPrefix && null != this._transitionEnd;
        }
      } {
        parse(t) {
          throw new Error('parse not implemented');
        }
        static makeCurrent() {
          var t;
          (t = new yu()), pu || (pu = t);
        }
        hasProperty(t, n) {
          return n in t;
        }
        setProperty(t, n, e) {
          t[n] = e;
        }
        getProperty(t, n) {
          return t[n];
        }
        invoke(t, n, e) {
          t[n](...e);
        }
        logError(t) {
          window.console && (console.error ? console.error(t) : console.log(t));
        }
        log(t) {
          window.console && window.console.log && window.console.log(t);
        }
        logGroup(t) {
          window.console && window.console.group && window.console.group(t);
        }
        logGroupEnd() {
          window.console && window.console.groupEnd && window.console.groupEnd();
        }
        get attrToPropMap() {
          return fu;
        }
        contains(t, n) {
          return vu.call(t, n);
        }
        querySelector(t, n) {
          return t.querySelector(n);
        }
        querySelectorAll(t, n) {
          return t.querySelectorAll(n);
        }
        on(t, n, e) {
          t.addEventListener(n, e, !1);
        }
        onAndCancel(t, n, e) {
          return (
            t.addEventListener(n, e, !1),
            () => {
              t.removeEventListener(n, e, !1);
            }
          );
        }
        dispatchEvent(t, n) {
          t.dispatchEvent(n);
        }
        createMouseEvent(t) {
          const n = this.getDefaultDocument().createEvent('MouseEvent');
          return n.initEvent(t, !0, !0), n;
        }
        createEvent(t) {
          const n = this.getDefaultDocument().createEvent('Event');
          return n.initEvent(t, !0, !0), n;
        }
        preventDefault(t) {
          t.preventDefault(), (t.returnValue = !1);
        }
        isPrevented(t) {
          return t.defaultPrevented || (null != t.returnValue && !t.returnValue);
        }
        getInnerHTML(t) {
          return t.innerHTML;
        }
        getTemplateContent(t) {
          return 'content' in t && this.isTemplateElement(t) ? t.content : null;
        }
        getOuterHTML(t) {
          return t.outerHTML;
        }
        nodeName(t) {
          return t.nodeName;
        }
        nodeValue(t) {
          return t.nodeValue;
        }
        type(t) {
          return t.type;
        }
        content(t) {
          return this.hasProperty(t, 'content') ? t.content : t;
        }
        firstChild(t) {
          return t.firstChild;
        }
        nextSibling(t) {
          return t.nextSibling;
        }
        parentElement(t) {
          return t.parentNode;
        }
        childNodes(t) {
          return t.childNodes;
        }
        childNodesAsList(t) {
          const n = t.childNodes,
            e = new Array(n.length);
          for (let l = 0; l < n.length; l++) e[l] = n[l];
          return e;
        }
        clearNodes(t) {
          for (; t.firstChild; ) t.removeChild(t.firstChild);
        }
        appendChild(t, n) {
          t.appendChild(n);
        }
        removeChild(t, n) {
          t.removeChild(n);
        }
        replaceChild(t, n, e) {
          t.replaceChild(n, e);
        }
        remove(t) {
          return t.parentNode && t.parentNode.removeChild(t), t;
        }
        insertBefore(t, n, e) {
          t.insertBefore(e, n);
        }
        insertAllBefore(t, n, e) {
          e.forEach(e => t.insertBefore(e, n));
        }
        insertAfter(t, n, e) {
          t.insertBefore(e, n.nextSibling);
        }
        setInnerHTML(t, n) {
          t.innerHTML = n;
        }
        getText(t) {
          return t.textContent;
        }
        setText(t, n) {
          t.textContent = n;
        }
        getValue(t) {
          return t.value;
        }
        setValue(t, n) {
          t.value = n;
        }
        getChecked(t) {
          return t.checked;
        }
        setChecked(t, n) {
          t.checked = n;
        }
        createComment(t) {
          return this.getDefaultDocument().createComment(t);
        }
        createTemplate(t) {
          const n = this.getDefaultDocument().createElement('template');
          return (n.innerHTML = t), n;
        }
        createElement(t, n) {
          return (n = n || this.getDefaultDocument()).createElement(t);
        }
        createElementNS(t, n, e) {
          return (e = e || this.getDefaultDocument()).createElementNS(t, n);
        }
        createTextNode(t, n) {
          return (n = n || this.getDefaultDocument()).createTextNode(t);
        }
        createScriptTag(t, n, e) {
          const l = (e = e || this.getDefaultDocument()).createElement('SCRIPT');
          return l.setAttribute(t, n), l;
        }
        createStyleElement(t, n) {
          const e = (n = n || this.getDefaultDocument()).createElement('style');
          return this.appendChild(e, this.createTextNode(t, n)), e;
        }
        createShadowRoot(t) {
          return t.createShadowRoot();
        }
        getShadowRoot(t) {
          return t.shadowRoot;
        }
        getHost(t) {
          return t.host;
        }
        clone(t) {
          return t.cloneNode(!0);
        }
        getElementsByClassName(t, n) {
          return t.getElementsByClassName(n);
        }
        getElementsByTagName(t, n) {
          return t.getElementsByTagName(n);
        }
        classList(t) {
          return Array.prototype.slice.call(t.classList, 0);
        }
        addClass(t, n) {
          t.classList.add(n);
        }
        removeClass(t, n) {
          t.classList.remove(n);
        }
        hasClass(t, n) {
          return t.classList.contains(n);
        }
        setStyle(t, n, e) {
          t.style[n] = e;
        }
        removeStyle(t, n) {
          t.style[n] = '';
        }
        getStyle(t, n) {
          return t.style[n];
        }
        hasStyle(t, n, e) {
          const l = this.getStyle(t, n) || '';
          return e ? l == e : l.length > 0;
        }
        tagName(t) {
          return t.tagName;
        }
        attributeMap(t) {
          const n = new Map(),
            e = t.attributes;
          for (let l = 0; l < e.length; l++) {
            const t = e.item(l);
            n.set(t.name, t.value);
          }
          return n;
        }
        hasAttribute(t, n) {
          return t.hasAttribute(n);
        }
        hasAttributeNS(t, n, e) {
          return t.hasAttributeNS(n, e);
        }
        getAttribute(t, n) {
          return t.getAttribute(n);
        }
        getAttributeNS(t, n, e) {
          return t.getAttributeNS(n, e);
        }
        setAttribute(t, n, e) {
          t.setAttribute(n, e);
        }
        setAttributeNS(t, n, e, l) {
          t.setAttributeNS(n, e, l);
        }
        removeAttribute(t, n) {
          t.removeAttribute(n);
        }
        removeAttributeNS(t, n, e) {
          t.removeAttributeNS(n, e);
        }
        templateAwareRoot(t) {
          return this.isTemplateElement(t) ? this.content(t) : t;
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument('fakeTitle');
        }
        getDefaultDocument() {
          return document;
        }
        getBoundingClientRect(t) {
          try {
            return t.getBoundingClientRect();
          } catch (n) {
            return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
          }
        }
        getTitle(t) {
          return t.title;
        }
        setTitle(t, n) {
          t.title = n || '';
        }
        elementMatches(t, n) {
          return (
            !!this.isElementNode(t) &&
            ((t.matches && t.matches(n)) ||
              (t.msMatchesSelector && t.msMatchesSelector(n)) ||
              (t.webkitMatchesSelector && t.webkitMatchesSelector(n)))
          );
        }
        isTemplateElement(t) {
          return this.isElementNode(t) && 'TEMPLATE' === t.nodeName;
        }
        isTextNode(t) {
          return t.nodeType === Node.TEXT_NODE;
        }
        isCommentNode(t) {
          return t.nodeType === Node.COMMENT_NODE;
        }
        isElementNode(t) {
          return t.nodeType === Node.ELEMENT_NODE;
        }
        hasShadowRoot(t) {
          return null != t.shadowRoot && t instanceof HTMLElement;
        }
        isShadowRoot(t) {
          return t instanceof DocumentFragment;
        }
        importIntoDoc(t) {
          return document.importNode(this.templateAwareRoot(t), !0);
        }
        adoptNode(t) {
          return document.adoptNode(t);
        }
        getHref(t) {
          return t.getAttribute('href');
        }
        getEventKey(t) {
          let n = t.key;
          if (null == n) {
            if (((n = t.keyIdentifier), null == n)) return 'Unidentified';
            n.startsWith('U+') &&
              ((n = String.fromCharCode(parseInt(n.substring(2), 16))),
              3 === t.location && _u.hasOwnProperty(n) && (n = _u[n]));
          }
          return mu[n] || n;
        }
        getGlobalEventTarget(t, n) {
          return 'window' === n ? window : 'document' === n ? t : 'body' === n ? t.body : null;
        }
        getHistory() {
          return window.history;
        }
        getLocation() {
          return window.location;
        }
        getBaseHref(t) {
          const n =
            bu || ((bu = document.querySelector('base')), bu) ? bu.getAttribute('href') : null;
          return null == n
            ? null
            : ((e = n),
              wu || (wu = document.createElement('a')),
              wu.setAttribute('href', e),
              '/' === wu.pathname.charAt(0) ? wu.pathname : '/' + wu.pathname);
          var e;
        }
        resetBaseElement() {
          bu = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        setData(t, n, e) {
          this.setAttribute(t, 'data-' + n, e);
        }
        getData(t, n) {
          return this.getAttribute(t, 'data-' + n);
        }
        getComputedStyle(t) {
          return getComputedStyle(t);
        }
        supportsWebAnimation() {
          return 'function' == typeof Element.prototype.animate;
        }
        performanceNow() {
          return window.performance && window.performance.now
            ? window.performance.now()
            : new Date().getTime();
        }
        supportsCookies() {
          return !0;
        }
        getCookie(t) {
          return (function(t, n) {
            n = encodeURIComponent(n);
            for (const e of t.split(';')) {
              const t = e.indexOf('='),
                [l, r] = -1 == t ? [e, ''] : [e.slice(0, t), e.slice(t + 1)];
              if (l.trim() === n) return decodeURIComponent(r);
            }
            return null;
          })(document.cookie, t);
        }
        setCookie(t, n) {
          document.cookie = encodeURIComponent(t) + '=' + encodeURIComponent(n);
        }
      }
      let wu,
        bu = null;
      function Cu() {
        return !!window.history.pushState;
      }
      const xu = new Et('TRANSITION_ID'),
        ku = [
          {
            provide: wr,
            useFactory: function(t, n, e) {
              return () => {
                e.get(br).donePromise.then(() => {
                  const e = gu();
                  Array.prototype.slice
                    .apply(e.querySelectorAll(n, 'style[ng-transition]'))
                    .filter(n => e.getAttribute(n, 'ng-transition') === t)
                    .forEach(t => e.remove(t));
                });
              };
            },
            deps: [xu, _o, On],
            multi: !0
          }
        ];
      class Eu {
        static init() {
          var t;
          (t = new Eu()), (ls = t);
        }
        addToWindow(t) {
          (kt.getAngularTestability = (n, e = !0) => {
            const l = t.findTestabilityInTree(n, e);
            if (null == l) throw new Error('Could not find testability for element.');
            return l;
          }),
            (kt.getAllAngularTestabilities = () => t.getAllTestabilities()),
            (kt.getAllAngularRootElements = () => t.getAllRootElements()),
            kt.frameworkStabilizers || (kt.frameworkStabilizers = []),
            kt.frameworkStabilizers.push(t => {
              const n = kt.getAllAngularTestabilities();
              let e = n.length,
                l = !1;
              const r = function(n) {
                (l = l || n), e--, 0 == e && t(l);
              };
              n.forEach(function(t) {
                t.whenStable(r);
              });
            });
        }
        findTestabilityInTree(t, n, e) {
          if (null == n) return null;
          const l = t.getTestability(n);
          return null != l
            ? l
            : e
            ? gu().isShadowRoot(n)
              ? this.findTestabilityInTree(t, gu().getHost(n), !0)
              : this.findTestabilityInTree(t, gu().parentElement(n), !0)
            : null;
        }
      }
      function Su(t, n) {
        ('undefined' != typeof COMPILED && COMPILED) || ((kt.ng = kt.ng || {})[t] = n);
      }
      const Ou = (() => ({ ApplicationRef: cs, NgZone: Gr }))();
      function Pu(t) {
        return bs(t);
      }
      const Mu = new Et('EventManagerPlugins');
      class Tu {
        constructor(t, n) {
          (this._zone = n),
            (this._eventNameToPlugin = new Map()),
            t.forEach(t => (t.manager = this)),
            (this._plugins = t.slice().reverse());
        }
        addEventListener(t, n, e) {
          return this._findPluginFor(n).addEventListener(t, n, e);
        }
        addGlobalEventListener(t, n, e) {
          return this._findPluginFor(n).addGlobalEventListener(t, n, e);
        }
        getZone() {
          return this._zone;
        }
        _findPluginFor(t) {
          const n = this._eventNameToPlugin.get(t);
          if (n) return n;
          const e = this._plugins;
          for (let l = 0; l < e.length; l++) {
            const n = e[l];
            if (n.supports(t)) return this._eventNameToPlugin.set(t, n), n;
          }
          throw new Error(`No event manager plugin found for event ${t}`);
        }
      }
      class Au {
        constructor(t) {
          this._doc = t;
        }
        addGlobalEventListener(t, n, e) {
          const l = gu().getGlobalEventTarget(this._doc, t);
          if (!l) throw new Error(`Unsupported event target ${l} for event ${n}`);
          return this.addEventListener(l, n, e);
        }
      }
      class Iu {
        constructor() {
          this._stylesSet = new Set();
        }
        addStyles(t) {
          const n = new Set();
          t.forEach(t => {
            this._stylesSet.has(t) || (this._stylesSet.add(t), n.add(t));
          }),
            this.onStylesAdded(n);
        }
        onStylesAdded(t) {}
        getAllStyles() {
          return Array.from(this._stylesSet);
        }
      }
      class Ru extends Iu {
        constructor(t) {
          super(),
            (this._doc = t),
            (this._hostNodes = new Set()),
            (this._styleNodes = new Set()),
            this._hostNodes.add(t.head);
        }
        _addStylesToHost(t, n) {
          t.forEach(t => {
            const e = this._doc.createElement('style');
            (e.textContent = t), this._styleNodes.add(n.appendChild(e));
          });
        }
        addHost(t) {
          this._addStylesToHost(this._stylesSet, t), this._hostNodes.add(t);
        }
        removeHost(t) {
          this._hostNodes.delete(t);
        }
        onStylesAdded(t) {
          this._hostNodes.forEach(n => this._addStylesToHost(t, n));
        }
        ngOnDestroy() {
          this._styleNodes.forEach(t => gu().remove(t));
        }
      }
      const Nu = {
          svg: 'http://www.w3.org/2000/svg',
          xhtml: 'http://www.w3.org/1999/xhtml',
          xlink: 'http://www.w3.org/1999/xlink',
          xml: 'http://www.w3.org/XML/1998/namespace',
          xmlns: 'http://www.w3.org/2000/xmlns/'
        },
        Vu = /%COMP%/g;
      function Du(t, n, e) {
        for (let l = 0; l < n.length; l++) {
          let r = n[l];
          Array.isArray(r) ? Du(t, r, e) : ((r = r.replace(Vu, t)), e.push(r));
        }
        return e;
      }
      function Lu(t) {
        return n => {
          !1 === t(n) && (n.preventDefault(), (n.returnValue = !1));
        };
      }
      class Uu {
        constructor(t, n, e) {
          (this.eventManager = t),
            (this.sharedStylesHost = n),
            (this.appId = e),
            (this.rendererByCompId = new Map()),
            (this.defaultRenderer = new ju(t));
        }
        createRenderer(t, n) {
          if (!t || !n) return this.defaultRenderer;
          switch (n.encapsulation) {
            case Ft.Emulated: {
              let e = this.rendererByCompId.get(n.id);
              return (
                e ||
                  ((e = new Hu(this.eventManager, this.sharedStylesHost, n, this.appId)),
                  this.rendererByCompId.set(n.id, e)),
                e.applyToHost(t),
                e
              );
            }
            case Ft.Native:
            case Ft.ShadowDom:
              return new zu(this.eventManager, this.sharedStylesHost, t, n);
            default:
              if (!this.rendererByCompId.has(n.id)) {
                const t = Du(n.id, n.styles, []);
                this.sharedStylesHost.addStyles(t),
                  this.rendererByCompId.set(n.id, this.defaultRenderer);
              }
              return this.defaultRenderer;
          }
        }
        begin() {}
        end() {}
      }
      class ju {
        constructor(t) {
          (this.eventManager = t), (this.data = Object.create(null));
        }
        destroy() {}
        createElement(t, n) {
          return n ? document.createElementNS(Nu[n] || n, t) : document.createElement(t);
        }
        createComment(t) {
          return document.createComment(t);
        }
        createText(t) {
          return document.createTextNode(t);
        }
        appendChild(t, n) {
          t.appendChild(n);
        }
        insertBefore(t, n, e) {
          t && t.insertBefore(n, e);
        }
        removeChild(t, n) {
          t && t.removeChild(n);
        }
        selectRootElement(t, n) {
          let e = 'string' == typeof t ? document.querySelector(t) : t;
          if (!e) throw new Error(`The selector "${t}" did not match any elements`);
          return n || (e.textContent = ''), e;
        }
        parentNode(t) {
          return t.parentNode;
        }
        nextSibling(t) {
          return t.nextSibling;
        }
        setAttribute(t, n, e, l) {
          if (l) {
            n = l + ':' + n;
            const r = Nu[l];
            r ? t.setAttributeNS(r, n, e) : t.setAttribute(n, e);
          } else t.setAttribute(n, e);
        }
        removeAttribute(t, n, e) {
          if (e) {
            const l = Nu[e];
            l ? t.removeAttributeNS(l, n) : t.removeAttribute(`${e}:${n}`);
          } else t.removeAttribute(n);
        }
        addClass(t, n) {
          t.classList.add(n);
        }
        removeClass(t, n) {
          t.classList.remove(n);
        }
        setStyle(t, n, e, l) {
          l & re.DashCase
            ? t.style.setProperty(n, e, l & re.Important ? 'important' : '')
            : (t.style[n] = e);
        }
        removeStyle(t, n, e) {
          e & re.DashCase ? t.style.removeProperty(n) : (t.style[n] = '');
        }
        setProperty(t, n, e) {
          $u(n, 'property'), (t[n] = e);
        }
        setValue(t, n) {
          t.nodeValue = n;
        }
        listen(t, n, e) {
          return (
            $u(n, 'listener'),
            'string' == typeof t
              ? this.eventManager.addGlobalEventListener(t, n, Lu(e))
              : this.eventManager.addEventListener(t, n, Lu(e))
          );
        }
      }
      const Fu = (() => '@'.charCodeAt(0))();
      function $u(t, n) {
        if (t.charCodeAt(0) === Fu)
          throw new Error(
            `Found the synthetic ${n} ${t}. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.`
          );
      }
      class Hu extends ju {
        constructor(t, n, e, l) {
          super(t), (this.component = e);
          const r = Du(l + '-' + e.id, e.styles, []);
          n.addStyles(r),
            (this.contentAttr = '_ngcontent-%COMP%'.replace(Vu, l + '-' + e.id)),
            (this.hostAttr = (function(t) {
              return '_nghost-%COMP%'.replace(Vu, t);
            })(l + '-' + e.id));
        }
        applyToHost(t) {
          super.setAttribute(t, this.hostAttr, '');
        }
        createElement(t, n) {
          const e = super.createElement(t, n);
          return super.setAttribute(e, this.contentAttr, ''), e;
        }
      }
      class zu extends ju {
        constructor(t, n, e, l) {
          super(t),
            (this.sharedStylesHost = n),
            (this.hostEl = e),
            (this.component = l),
            (this.shadowRoot =
              l.encapsulation === Ft.ShadowDom
                ? e.attachShadow({ mode: 'open' })
                : e.createShadowRoot()),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const r = Du(l.id, l.styles, []);
          for (let s = 0; s < r.length; s++) {
            const t = document.createElement('style');
            (t.textContent = r[s]), this.shadowRoot.appendChild(t);
          }
        }
        nodeOrShadowRoot(t) {
          return t === this.hostEl ? this.shadowRoot : t;
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
        appendChild(t, n) {
          return super.appendChild(this.nodeOrShadowRoot(t), n);
        }
        insertBefore(t, n, e) {
          return super.insertBefore(this.nodeOrShadowRoot(t), n, e);
        }
        removeChild(t, n) {
          return super.removeChild(this.nodeOrShadowRoot(t), n);
        }
        parentNode(t) {
          return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)));
        }
      }
      const qu = (() =>
          ('undefined' != typeof Zone && Zone.__symbol__) ||
          function(t) {
            return '__zone_symbol__' + t;
          })(),
        Bu = qu('addEventListener'),
        Gu = qu('removeEventListener'),
        Ku = {},
        Wu = '__zone_symbol__propagationStopped',
        Zu = (() => {
          const t = 'undefined' != typeof Zone && Zone[qu('BLACK_LISTED_EVENTS')];
          if (t) {
            const n = {};
            return (
              t.forEach(t => {
                n[t] = t;
              }),
              n
            );
          }
        })(),
        Qu = function(t) {
          return !!Zu && Zu.hasOwnProperty(t);
        },
        Yu = function(t) {
          const n = Ku[t.type];
          if (!n) return;
          const e = this[n];
          if (!e) return;
          const l = [t];
          if (1 === e.length) {
            const t = e[0];
            return t.zone !== Zone.current
              ? t.zone.run(t.handler, this, l)
              : t.handler.apply(this, l);
          }
          {
            const n = e.slice();
            for (let e = 0; e < n.length && !0 !== t[Wu]; e++) {
              const t = n[e];
              t.zone !== Zone.current ? t.zone.run(t.handler, this, l) : t.handler.apply(this, l);
            }
          }
        };
      class Ju extends Au {
        constructor(t, n, e) {
          super(t),
            (this.ngZone = n),
            (e &&
              (function(t) {
                return 'server' === t;
              })(e)) ||
              this.patchEvent();
        }
        patchEvent() {
          if ('undefined' == typeof Event || !Event || !Event.prototype) return;
          if (Event.prototype.__zone_symbol__stopImmediatePropagation) return;
          const t = (Event.prototype.__zone_symbol__stopImmediatePropagation =
            Event.prototype.stopImmediatePropagation);
          Event.prototype.stopImmediatePropagation = function() {
            this && (this[Wu] = !0), t && t.apply(this, arguments);
          };
        }
        supports(t) {
          return !0;
        }
        addEventListener(t, n, e) {
          let l = e;
          if (!t[Bu] || (Gr.isInAngularZone() && !Qu(n))) t.addEventListener(n, l, !1);
          else {
            let e = Ku[n];
            e || (e = Ku[n] = qu('ANGULAR' + n + 'FALSE'));
            let r = t[e];
            const s = r && r.length > 0;
            r || (r = t[e] = []);
            const i = Qu(n) ? Zone.root : Zone.current;
            if (0 === r.length) r.push({ zone: i, handler: l });
            else {
              let t = !1;
              for (let n = 0; n < r.length; n++)
                if (r[n].handler === l) {
                  t = !0;
                  break;
                }
              t || r.push({ zone: i, handler: l });
            }
            s || t[Bu](n, Yu, !1);
          }
          return () => this.removeEventListener(t, n, l);
        }
        removeEventListener(t, n, e) {
          let l = t[Gu];
          if (!l) return t.removeEventListener.apply(t, [n, e, !1]);
          let r = Ku[n],
            s = r && t[r];
          if (!s) return t.removeEventListener.apply(t, [n, e, !1]);
          let i = !1;
          for (let o = 0; o < s.length; o++)
            if (s[o].handler === e) {
              (i = !0), s.splice(o, 1);
              break;
            }
          i
            ? 0 === s.length && l.apply(t, [n, Yu, !1])
            : t.removeEventListener.apply(t, [n, e, !1]);
        }
      }
      const Xu = {
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
        ta = new Et('HammerGestureConfig'),
        na = new Et('HammerLoader');
      class ea {
        constructor() {
          (this.events = []), (this.overrides = {});
        }
        buildHammer(t) {
          const n = new Hammer(t, this.options);
          n.get('pinch').set({ enable: !0 }), n.get('rotate').set({ enable: !0 });
          for (const e in this.overrides) n.get(e).set(this.overrides[e]);
          return n;
        }
      }
      class la extends Au {
        constructor(t, n, e, l) {
          super(t), (this._config = n), (this.console = e), (this.loader = l);
        }
        supports(t) {
          return !(
            (!Xu.hasOwnProperty(t.toLowerCase()) && !this.isCustomEvent(t)) ||
            (!window.Hammer &&
              !this.loader &&
              (this.console.warn(
                `The "${t}" event cannot be bound because Hammer.JS is not ` +
                  'loaded and no custom loader has been specified.'
              ),
              1))
          );
        }
        addEventListener(t, n, e) {
          const l = this.manager.getZone();
          if (((n = n.toLowerCase()), !window.Hammer && this.loader)) {
            let l = !1,
              r = () => {
                l = !0;
              };
            return (
              this.loader()
                .then(() => {
                  if (!window.Hammer)
                    return (
                      this.console.warn(
                        'The custom HAMMER_LOADER completed, but Hammer.JS is not present.'
                      ),
                      void (r = () => {})
                    );
                  l || (r = this.addEventListener(t, n, e));
                })
                .catch(() => {
                  this.console.warn(
                    `The "${n}" event cannot be bound because the custom ` +
                      'Hammer.JS loader failed.'
                  ),
                    (r = () => {});
                }),
              () => {
                r();
              }
            );
          }
          return l.runOutsideAngular(() => {
            const r = this._config.buildHammer(t),
              s = function(t) {
                l.runGuarded(function() {
                  e(t);
                });
              };
            return (
              r.on(n, s),
              () => {
                r.off(n, s), 'function' == typeof r.destroy && r.destroy();
              }
            );
          });
        }
        isCustomEvent(t) {
          return this._config.events.indexOf(t) > -1;
        }
      }
      const ra = ['alt', 'control', 'meta', 'shift'],
        sa = {
          alt: t => t.altKey,
          control: t => t.ctrlKey,
          meta: t => t.metaKey,
          shift: t => t.shiftKey
        };
      class ia extends Au {
        constructor(t) {
          super(t);
        }
        supports(t) {
          return null != ia.parseEventName(t);
        }
        addEventListener(t, n, e) {
          const l = ia.parseEventName(n),
            r = ia.eventCallback(l.fullKey, e, this.manager.getZone());
          return this.manager
            .getZone()
            .runOutsideAngular(() => gu().onAndCancel(t, l.domEventName, r));
        }
        static parseEventName(t) {
          const n = t.toLowerCase().split('.'),
            e = n.shift();
          if (0 === n.length || ('keydown' !== e && 'keyup' !== e)) return null;
          const l = ia._normalizeKey(n.pop());
          let r = '';
          if (
            (ra.forEach(t => {
              const e = n.indexOf(t);
              e > -1 && (n.splice(e, 1), (r += t + '.'));
            }),
            (r += l),
            0 != n.length || 0 === l.length)
          )
            return null;
          const s = {};
          return (s.domEventName = e), (s.fullKey = r), s;
        }
        static getEventFullKey(t) {
          let n = '',
            e = gu().getEventKey(t);
          return (
            (e = e.toLowerCase()),
            ' ' === e ? (e = 'space') : '.' === e && (e = 'dot'),
            ra.forEach(l => {
              l != e && (0, sa[l])(t) && (n += l + '.');
            }),
            (n += e),
            n
          );
        }
        static eventCallback(t, n, e) {
          return l => {
            ia.getEventFullKey(l) === t && e.runGuarded(() => n(l));
          };
        }
        static _normalizeKey(t) {
          switch (t) {
            case 'esc':
              return 'escape';
            default:
              return t;
          }
        }
      }
      class oa {}
      class ua extends oa {
        constructor(t) {
          super(), (this._doc = t);
        }
        sanitize(t, n) {
          if (null == n) return null;
          switch (t) {
            case _n.NONE:
              return n;
            case _n.HTML:
              return n instanceof ca
                ? n.changingThisBreaksApplicationSecurity
                : (this.checkNotSafeValue(n, 'HTML'),
                  (function(t, n) {
                    let e = null;
                    try {
                      fn = fn || new Zt(t);
                      let l = n ? String(n) : '';
                      e = fn.getInertBodyElement(l);
                      let r = 5,
                        s = l;
                      do {
                        if (0 === r)
                          throw new Error('Failed to sanitize html because the input is unstable');
                        r--, (l = s), (s = e.innerHTML), (e = fn.getInertBodyElement(l));
                      } while (l !== s);
                      const i = new hn(),
                        o = i.sanitizeChildren(mn(e) || e);
                      return (
                        Wt() &&
                          i.sanitizedSomething &&
                          console.warn(
                            'WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss'
                          ),
                        o
                      );
                    } finally {
                      if (e) {
                        const t = mn(e) || e;
                        for (; t.firstChild; ) t.removeChild(t.firstChild);
                      }
                    }
                  })(this._doc, String(n)));
            case _n.STYLE:
              return n instanceof ha
                ? n.changingThisBreaksApplicationSecurity
                : (this.checkNotSafeValue(n, 'Style'),
                  (function(t) {
                    if (!(t = String(t).trim())) return '';
                    const n = t.match(wn);
                    return (n && Jt(n[1]) === n[1]) ||
                      (t.match(yn) &&
                        (function(t) {
                          let n = !0,
                            e = !0;
                          for (let l = 0; l < t.length; l++) {
                            const r = t.charAt(l);
                            "'" === r && e ? (n = !n) : '"' === r && n && (e = !e);
                          }
                          return n && e;
                        })(t))
                      ? t
                      : (Wt() &&
                          console.warn(
                            `WARNING: sanitizing unsafe style value ${t} (see http://g.co/ng/security#xss).`
                          ),
                        'unsafe');
                  })(n));
            case _n.SCRIPT:
              if (n instanceof da) return n.changingThisBreaksApplicationSecurity;
              throw (this.checkNotSafeValue(n, 'Script'),
              new Error('unsafe value used in a script context'));
            case _n.URL:
              return n instanceof ga || n instanceof pa
                ? n.changingThisBreaksApplicationSecurity
                : (this.checkNotSafeValue(n, 'URL'), Jt(String(n)));
            case _n.RESOURCE_URL:
              if (n instanceof ga) return n.changingThisBreaksApplicationSecurity;
              throw (this.checkNotSafeValue(n, 'ResourceURL'),
              new Error(
                'unsafe value used in a resource URL context (see http://g.co/ng/security#xss)'
              ));
            default:
              throw new Error(`Unexpected SecurityContext ${t} (see http://g.co/ng/security#xss)`);
          }
        }
        checkNotSafeValue(t, n) {
          if (t instanceof aa)
            throw new Error(
              `Required a safe ${n}, got a ${t.getTypeName()} ` +
                '(see http://g.co/ng/security#xss)'
            );
        }
        bypassSecurityTrustHtml(t) {
          return new ca(t);
        }
        bypassSecurityTrustStyle(t) {
          return new ha(t);
        }
        bypassSecurityTrustScript(t) {
          return new da(t);
        }
        bypassSecurityTrustUrl(t) {
          return new pa(t);
        }
        bypassSecurityTrustResourceUrl(t) {
          return new ga(t);
        }
      }
      class aa {
        constructor(t) {
          this.changingThisBreaksApplicationSecurity = t;
        }
        toString() {
          return (
            `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity}` +
            ' (see http://g.co/ng/security#xss)'
          );
        }
      }
      class ca extends aa {
        getTypeName() {
          return 'HTML';
        }
      }
      class ha extends aa {
        getTypeName() {
          return 'Style';
        }
      }
      class da extends aa {
        getTypeName() {
          return 'Script';
        }
      }
      class pa extends aa {
        getTypeName() {
          return 'URL';
        }
      }
      class ga extends aa {
        getTypeName() {
          return 'ResourceURL';
        }
      }
      const fa = is(xs, 'browser', [
        { provide: Sr, useValue: 'browser' },
        {
          provide: Er,
          useValue: function() {
            yu.makeCurrent(), Eu.init();
          },
          multi: !0
        },
        {
          provide: to,
          useClass: class extends to {
            constructor(t) {
              super(), (this._doc = t), this._init();
            }
            _init() {
              (this.location = gu().getLocation()), (this._history = gu().getHistory());
            }
            getBaseHrefFromDOM() {
              return gu().getBaseHref(this._doc);
            }
            onPopState(t) {
              gu()
                .getGlobalEventTarget(this._doc, 'window')
                .addEventListener('popstate', t, !1);
            }
            onHashChange(t) {
              gu()
                .getGlobalEventTarget(this._doc, 'window')
                .addEventListener('hashchange', t, !1);
            }
            get href() {
              return this.location.href;
            }
            get protocol() {
              return this.location.protocol;
            }
            get hostname() {
              return this.location.hostname;
            }
            get port() {
              return this.location.port;
            }
            get pathname() {
              return this.location.pathname;
            }
            get search() {
              return this.location.search;
            }
            get hash() {
              return this.location.hash;
            }
            set pathname(t) {
              this.location.pathname = t;
            }
            pushState(t, n, e) {
              Cu() ? this._history.pushState(t, n, e) : (this.location.hash = e);
            }
            replaceState(t, n, e) {
              Cu() ? this._history.replaceState(t, n, e) : (this.location.hash = e);
            }
            forward() {
              this._history.forward();
            }
            back() {
              this._history.back();
            }
            getState() {
              return this._history.state;
            }
          },
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
      function ma() {
        return new Bt();
      }
      class _a {
        constructor(t) {
          if (t)
            throw new Error(
              'BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.'
            );
        }
        static withServerTransition(t) {
          return {
            ngModule: _a,
            providers: [{ provide: Cr, useValue: t.appId }, { provide: xu, useExisting: Cr }, ku]
          };
        }
      }
      'undefined' != typeof window && window;
      class va {
        constructor(t, n) {
          (this.id = t), (this.url = n);
        }
      }
      class ya extends va {
        constructor(t, n, e = 'imperative', l = null) {
          super(t, n), (this.navigationTrigger = e), (this.restoredState = l);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class wa extends va {
        constructor(t, n, e) {
          super(t, n), (this.urlAfterRedirects = e);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      class ba extends va {
        constructor(t, n, e) {
          super(t, n), (this.reason = e);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class Ca extends va {
        constructor(t, n, e) {
          super(t, n), (this.error = e);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class xa extends va {
        constructor(t, n, e, l) {
          super(t, n), (this.urlAfterRedirects = e), (this.state = l);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class ka extends va {
        constructor(t, n, e, l) {
          super(t, n), (this.urlAfterRedirects = e), (this.state = l);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Ea extends va {
        constructor(t, n, e, l, r) {
          super(t, n), (this.urlAfterRedirects = e), (this.state = l), (this.shouldActivate = r);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class Sa extends va {
        constructor(t, n, e, l) {
          super(t, n), (this.urlAfterRedirects = e), (this.state = l);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Oa extends va {
        constructor(t, n, e, l) {
          super(t, n), (this.urlAfterRedirects = e), (this.state = l);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Pa {
        constructor(t) {
          this.route = t;
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class Ma {
        constructor(t) {
          this.route = t;
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class Ta {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ChildActivationStart(path: '${(this.snapshot.routeConfig &&
            this.snapshot.routeConfig.path) ||
            ''}')`;
        }
      }
      class Aa {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ChildActivationEnd(path: '${(this.snapshot.routeConfig &&
            this.snapshot.routeConfig.path) ||
            ''}')`;
        }
      }
      class Ia {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ActivationStart(path: '${(this.snapshot.routeConfig &&
            this.snapshot.routeConfig.path) ||
            ''}')`;
        }
      }
      class Ra {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ActivationEnd(path: '${(this.snapshot.routeConfig &&
            this.snapshot.routeConfig.path) ||
            ''}')`;
        }
      }
      class Na {
        constructor(t, n, e) {
          (this.routerEvent = t), (this.position = n), (this.anchor = e);
        }
        toString() {
          return `Scroll(anchor: '${this.anchor}', position: '${
            this.position ? `${this.position[0]}, ${this.position[1]}` : null
          }')`;
        }
      }
      class Va {}
      class Da {
        constructor(t) {
          this.params = t || {};
        }
        has(t) {
          return this.params.hasOwnProperty(t);
        }
        get(t) {
          if (this.has(t)) {
            const n = this.params[t];
            return Array.isArray(n) ? n[0] : n;
          }
          return null;
        }
        getAll(t) {
          if (this.has(t)) {
            const n = this.params[t];
            return Array.isArray(n) ? n : [n];
          }
          return [];
        }
        get keys() {
          return Object.keys(this.params);
        }
      }
      function La(t) {
        return new Da(t);
      }
      function Ua(t) {
        const n = Error('NavigationCancelingError: ' + t);
        return (n.ngNavigationCancelingError = !0), n;
      }
      function ja(t, n, e) {
        const l = e.path.split('/');
        if (l.length > t.length) return null;
        if ('full' === e.pathMatch && (n.hasChildren() || l.length < t.length)) return null;
        const r = {};
        for (let s = 0; s < l.length; s++) {
          const n = l[s],
            e = t[s];
          if (n.startsWith(':')) r[n.substring(1)] = e;
          else if (n !== e.path) return null;
        }
        return { consumed: t.slice(0, l.length), posParams: r };
      }
      class Fa {
        constructor(t, n) {
          (this.routes = t), (this.module = n);
        }
      }
      function $a(t, n = '') {
        for (let e = 0; e < t.length; e++) {
          const l = t[e];
          Ha(l, za(n, l));
        }
      }
      function Ha(t, n) {
        if (!t)
          throw new Error(
            `\n      Invalid configuration of route '${n}': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    `
          );
        if (Array.isArray(t))
          throw new Error(`Invalid configuration of route '${n}': Array cannot be specified`);
        if (!t.component && !t.children && !t.loadChildren && t.outlet && 'primary' !== t.outlet)
          throw new Error(
            `Invalid configuration of route '${n}': a componentless route without children or loadChildren cannot have a named outlet set`
          );
        if (t.redirectTo && t.children)
          throw new Error(
            `Invalid configuration of route '${n}': redirectTo and children cannot be used together`
          );
        if (t.redirectTo && t.loadChildren)
          throw new Error(
            `Invalid configuration of route '${n}': redirectTo and loadChildren cannot be used together`
          );
        if (t.children && t.loadChildren)
          throw new Error(
            `Invalid configuration of route '${n}': children and loadChildren cannot be used together`
          );
        if (t.redirectTo && t.component)
          throw new Error(
            `Invalid configuration of route '${n}': redirectTo and component cannot be used together`
          );
        if (t.path && t.matcher)
          throw new Error(
            `Invalid configuration of route '${n}': path and matcher cannot be used together`
          );
        if (void 0 === t.redirectTo && !t.component && !t.children && !t.loadChildren)
          throw new Error(
            `Invalid configuration of route '${n}'. One of the following must be provided: component, redirectTo, children or loadChildren`
          );
        if (void 0 === t.path && void 0 === t.matcher)
          throw new Error(
            `Invalid configuration of route '${n}': routes must have either a path or a matcher specified`
          );
        if ('string' == typeof t.path && '/' === t.path.charAt(0))
          throw new Error(`Invalid configuration of route '${n}': path cannot start with a slash`);
        if ('' === t.path && void 0 !== t.redirectTo && void 0 === t.pathMatch)
          throw new Error(
            `Invalid configuration of route '{path: "${n}", redirectTo: "${t.redirectTo}"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.`
          );
        if (void 0 !== t.pathMatch && 'full' !== t.pathMatch && 'prefix' !== t.pathMatch)
          throw new Error(
            `Invalid configuration of route '${n}': pathMatch can only be set to 'prefix' or 'full'`
          );
        t.children && $a(t.children, n);
      }
      function za(t, n) {
        return n
          ? t || n.path
            ? t && !n.path
              ? `${t}/`
              : !t && n.path
              ? n.path
              : `${t}/${n.path}`
            : ''
          : t;
      }
      function qa(t) {
        const n = t.children && t.children.map(qa),
          e = n ? Object.assign({}, t, { children: n }) : Object.assign({}, t);
        return (
          !e.component &&
            (n || e.loadChildren) &&
            e.outlet &&
            'primary' !== e.outlet &&
            (e.component = Va),
          e
        );
      }
      function Ba(t, n) {
        const e = Object.keys(t),
          l = Object.keys(n);
        if (!e || !l || e.length != l.length) return !1;
        let r;
        for (let s = 0; s < e.length; s++) if (((r = e[s]), t[r] !== n[r])) return !1;
        return !0;
      }
      function Ga(t) {
        return Array.prototype.concat.apply([], t);
      }
      function Ka(t) {
        return t.length > 0 ? t[t.length - 1] : null;
      }
      function Wa(t, n) {
        for (const e in t) t.hasOwnProperty(e) && n(t[e], e);
      }
      function Za(t) {
        return qn(t) ? t : zn(t) ? G(Promise.resolve(t)) : xo(t);
      }
      function Qa(t, n, e) {
        return e
          ? (function(t, n) {
              return Ba(t, n);
            })(t.queryParams, n.queryParams) &&
              (function t(n, e) {
                if (!tc(n.segments, e.segments)) return !1;
                if (n.numberOfChildren !== e.numberOfChildren) return !1;
                for (const l in e.children) {
                  if (!n.children[l]) return !1;
                  if (!t(n.children[l], e.children[l])) return !1;
                }
                return !0;
              })(t.root, n.root)
          : (function(t, n) {
              return (
                Object.keys(n).length <= Object.keys(t).length &&
                Object.keys(n).every(e => n[e] === t[e])
              );
            })(t.queryParams, n.queryParams) &&
              (function t(n, e) {
                return (function n(e, l, r) {
                  if (e.segments.length > r.length)
                    return !!tc(e.segments.slice(0, r.length), r) && !l.hasChildren();
                  if (e.segments.length === r.length) {
                    if (!tc(e.segments, r)) return !1;
                    for (const n in l.children) {
                      if (!e.children[n]) return !1;
                      if (!t(e.children[n], l.children[n])) return !1;
                    }
                    return !0;
                  }
                  {
                    const t = r.slice(0, e.segments.length),
                      s = r.slice(e.segments.length);
                    return (
                      !!tc(e.segments, t) && !!e.children.primary && n(e.children.primary, l, s)
                    );
                  }
                })(n, e, e.segments);
              })(t.root, n.root);
      }
      class Ya {
        constructor(t, n, e) {
          (this.root = t), (this.queryParams = n), (this.fragment = e);
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = La(this.queryParams)), this._queryParamMap
          );
        }
        toString() {
          return rc.serialize(this);
        }
      }
      class Ja {
        constructor(t, n) {
          (this.segments = t),
            (this.children = n),
            (this.parent = null),
            Wa(n, (t, n) => (t.parent = this));
        }
        hasChildren() {
          return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
          return Object.keys(this.children).length;
        }
        toString() {
          return sc(this);
        }
      }
      class Xa {
        constructor(t, n) {
          (this.path = t), (this.parameters = n);
        }
        get parameterMap() {
          return (
            this._parameterMap || (this._parameterMap = La(this.parameters)), this._parameterMap
          );
        }
        toString() {
          return hc(this);
        }
      }
      function tc(t, n) {
        return t.length === n.length && t.every((t, e) => t.path === n[e].path);
      }
      function nc(t, n) {
        let e = [];
        return (
          Wa(t.children, (t, l) => {
            'primary' === l && (e = e.concat(n(t, l)));
          }),
          Wa(t.children, (t, l) => {
            'primary' !== l && (e = e.concat(n(t, l)));
          }),
          e
        );
      }
      class ec {}
      class lc {
        parse(t) {
          const n = new mc(t);
          return new Ya(n.parseRootSegment(), n.parseQueryParams(), n.parseFragment());
        }
        serialize(t) {
          var n;
          return `${`/${(function t(n, e) {
            if (!n.hasChildren()) return sc(n);
            if (e) {
              const e = n.children.primary ? t(n.children.primary, !1) : '',
                l = [];
              return (
                Wa(n.children, (n, e) => {
                  'primary' !== e && l.push(`${e}:${t(n, !1)}`);
                }),
                l.length > 0 ? `${e}(${l.join('//')})` : e
              );
            }
            {
              const e = nc(n, (e, l) =>
                'primary' === l ? [t(n.children.primary, !1)] : [`${l}:${t(e, !1)}`]
              );
              return `${sc(n)}/(${e.join('//')})`;
            }
          })(t.root, !0)}`}${(function(t) {
            const n = Object.keys(t).map(n => {
              const e = t[n];
              return Array.isArray(e)
                ? e.map(t => `${oc(n)}=${oc(t)}`).join('&')
                : `${oc(n)}=${oc(e)}`;
            });
            return n.length ? `?${n.join('&')}` : '';
          })(t.queryParams)}${
            'string' == typeof t.fragment ? `#${((n = t.fragment), encodeURI(n))}` : ''
          }`;
        }
      }
      const rc = new lc();
      function sc(t) {
        return t.segments.map(t => hc(t)).join('/');
      }
      function ic(t) {
        return encodeURIComponent(t)
          .replace(/%40/g, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',');
      }
      function oc(t) {
        return ic(t).replace(/%3B/gi, ';');
      }
      function uc(t) {
        return ic(t)
          .replace(/\(/g, '%28')
          .replace(/\)/g, '%29')
          .replace(/%26/gi, '&');
      }
      function ac(t) {
        return decodeURIComponent(t);
      }
      function cc(t) {
        return ac(t.replace(/\+/g, '%20'));
      }
      function hc(t) {
        return `${uc(t.path)}${((n = t.parameters),
        Object.keys(n)
          .map(t => `;${uc(t)}=${uc(n[t])}`)
          .join(''))}`;
        var n;
      }
      const dc = /^[^\/()?;=#]+/;
      function pc(t) {
        const n = t.match(dc);
        return n ? n[0] : '';
      }
      const gc = /^[^=?&#]+/,
        fc = /^[^?&#]+/;
      class mc {
        constructor(t) {
          (this.url = t), (this.remaining = t);
        }
        parseRootSegment() {
          return (
            this.consumeOptional('/'),
            '' === this.remaining || this.peekStartsWith('?') || this.peekStartsWith('#')
              ? new Ja([], {})
              : new Ja([], this.parseChildren())
          );
        }
        parseQueryParams() {
          const t = {};
          if (this.consumeOptional('?'))
            do {
              this.parseQueryParam(t);
            } while (this.consumeOptional('&'));
          return t;
        }
        parseFragment() {
          return this.consumeOptional('#') ? decodeURIComponent(this.remaining) : null;
        }
        parseChildren() {
          if ('' === this.remaining) return {};
          this.consumeOptional('/');
          const t = [];
          for (
            this.peekStartsWith('(') || t.push(this.parseSegment());
            this.peekStartsWith('/') && !this.peekStartsWith('//') && !this.peekStartsWith('/(');

          )
            this.capture('/'), t.push(this.parseSegment());
          let n = {};
          this.peekStartsWith('/(') && (this.capture('/'), (n = this.parseParens(!0)));
          let e = {};
          return (
            this.peekStartsWith('(') && (e = this.parseParens(!1)),
            (t.length > 0 || Object.keys(n).length > 0) && (e.primary = new Ja(t, n)),
            e
          );
        }
        parseSegment() {
          const t = pc(this.remaining);
          if ('' === t && this.peekStartsWith(';'))
            throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);
          return this.capture(t), new Xa(ac(t), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const t = {};
          for (; this.consumeOptional(';'); ) this.parseParam(t);
          return t;
        }
        parseParam(t) {
          const n = pc(this.remaining);
          if (!n) return;
          this.capture(n);
          let e = '';
          if (this.consumeOptional('=')) {
            const t = pc(this.remaining);
            t && ((e = t), this.capture(e));
          }
          t[ac(n)] = ac(e);
        }
        parseQueryParam(t) {
          const n = (function(t) {
            const n = t.match(gc);
            return n ? n[0] : '';
          })(this.remaining);
          if (!n) return;
          this.capture(n);
          let e = '';
          if (this.consumeOptional('=')) {
            const t = (function(t) {
              const n = t.match(fc);
              return n ? n[0] : '';
            })(this.remaining);
            t && ((e = t), this.capture(e));
          }
          const l = cc(n),
            r = cc(e);
          if (t.hasOwnProperty(l)) {
            let n = t[l];
            Array.isArray(n) || ((n = [n]), (t[l] = n)), n.push(r);
          } else t[l] = r;
        }
        parseParens(t) {
          const n = {};
          for (this.capture('('); !this.consumeOptional(')') && this.remaining.length > 0; ) {
            const e = pc(this.remaining),
              l = this.remaining[e.length];
            if ('/' !== l && ')' !== l && ';' !== l)
              throw new Error(`Cannot parse url '${this.url}'`);
            let r = void 0;
            e.indexOf(':') > -1
              ? ((r = e.substr(0, e.indexOf(':'))), this.capture(r), this.capture(':'))
              : t && (r = 'primary');
            const s = this.parseChildren();
            (n[r] = 1 === Object.keys(s).length ? s.primary : new Ja([], s)),
              this.consumeOptional('//');
          }
          return n;
        }
        peekStartsWith(t) {
          return this.remaining.startsWith(t);
        }
        consumeOptional(t) {
          return (
            !!this.peekStartsWith(t) && ((this.remaining = this.remaining.substring(t.length)), !0)
          );
        }
        capture(t) {
          if (!this.consumeOptional(t)) throw new Error(`Expected "${t}".`);
        }
      }
      class _c {
        constructor(t) {
          this._root = t;
        }
        get root() {
          return this._root.value;
        }
        parent(t) {
          const n = this.pathFromRoot(t);
          return n.length > 1 ? n[n.length - 2] : null;
        }
        children(t) {
          const n = vc(t, this._root);
          return n ? n.children.map(t => t.value) : [];
        }
        firstChild(t) {
          const n = vc(t, this._root);
          return n && n.children.length > 0 ? n.children[0].value : null;
        }
        siblings(t) {
          const n = yc(t, this._root);
          return n.length < 2
            ? []
            : n[n.length - 2].children.map(t => t.value).filter(n => n !== t);
        }
        pathFromRoot(t) {
          return yc(t, this._root).map(t => t.value);
        }
      }
      function vc(t, n) {
        if (t === n.value) return n;
        for (const e of n.children) {
          const n = vc(t, e);
          if (n) return n;
        }
        return null;
      }
      function yc(t, n) {
        if (t === n.value) return [n];
        for (const e of n.children) {
          const l = yc(t, e);
          if (l.length) return l.unshift(n), l;
        }
        return [];
      }
      class wc {
        constructor(t, n) {
          (this.value = t), (this.children = n);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function bc(t) {
        const n = {};
        return t && t.children.forEach(t => (n[t.value.outlet] = t)), n;
      }
      class Cc extends _c {
        constructor(t, n) {
          super(t), (this.snapshot = n), Pc(this, t);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function xc(t, n) {
        const e = (function(t, n) {
            const e = new Sc([], {}, {}, '', {}, 'primary', n, null, t.root, -1, {});
            return new Oc('', new wc(e, []));
          })(t, n),
          l = new ko([new Xa('', {})]),
          r = new ko({}),
          s = new ko({}),
          i = new ko({}),
          o = new ko(''),
          u = new kc(l, r, i, o, s, 'primary', n, e.root);
        return (u.snapshot = e.root), new Cc(new wc(u, []), e);
      }
      class kc {
        constructor(t, n, e, l, r, s, i, o) {
          (this.url = t),
            (this.params = n),
            (this.queryParams = e),
            (this.fragment = l),
            (this.data = r),
            (this.outlet = s),
            (this.component = i),
            (this._futureSnapshot = o);
        }
        get routeConfig() {
          return this._futureSnapshot.routeConfig;
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap || (this._paramMap = this.params.pipe(H(t => La(t)))), this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = this.queryParams.pipe(H(t => La(t)))),
            this._queryParamMap
          );
        }
        toString() {
          return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`;
        }
      }
      function Ec(t, n = 'emptyOnly') {
        const e = t.pathFromRoot;
        let l = 0;
        if ('always' !== n)
          for (l = e.length - 1; l >= 1; ) {
            const t = e[l],
              n = e[l - 1];
            if (t.routeConfig && '' === t.routeConfig.path) l--;
            else {
              if (n.component) break;
              l--;
            }
          }
        return (function(t) {
          return t.reduce(
            (t, n) => ({
              params: Object.assign({}, t.params, n.params),
              data: Object.assign({}, t.data, n.data),
              resolve: Object.assign({}, t.resolve, n._resolvedData)
            }),
            { params: {}, data: {}, resolve: {} }
          );
        })(e.slice(l));
      }
      class Sc {
        constructor(t, n, e, l, r, s, i, o, u, a, c) {
          (this.url = t),
            (this.params = n),
            (this.queryParams = e),
            (this.fragment = l),
            (this.data = r),
            (this.outlet = s),
            (this.component = i),
            (this.routeConfig = o),
            (this._urlSegment = u),
            (this._lastPathIndex = a),
            (this._resolve = c);
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return this._paramMap || (this._paramMap = La(this.params)), this._paramMap;
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = La(this.queryParams)), this._queryParamMap
          );
        }
        toString() {
          return `Route(url:'${this.url.map(t => t.toString()).join('/')}', path:'${
            this.routeConfig ? this.routeConfig.path : ''
          }')`;
        }
      }
      class Oc extends _c {
        constructor(t, n) {
          super(n), (this.url = t), Pc(this, n);
        }
        toString() {
          return Mc(this._root);
        }
      }
      function Pc(t, n) {
        (n.value._routerState = t), n.children.forEach(n => Pc(t, n));
      }
      function Mc(t) {
        const n = t.children.length > 0 ? ` { ${t.children.map(Mc).join(', ')} } ` : '';
        return `${t.value}${n}`;
      }
      function Tc(t) {
        if (t.snapshot) {
          const n = t.snapshot,
            e = t._futureSnapshot;
          (t.snapshot = e),
            Ba(n.queryParams, e.queryParams) || t.queryParams.next(e.queryParams),
            n.fragment !== e.fragment && t.fragment.next(e.fragment),
            Ba(n.params, e.params) || t.params.next(e.params),
            (function(t, n) {
              if (t.length !== n.length) return !1;
              for (let e = 0; e < t.length; ++e) if (!Ba(t[e], n[e])) return !1;
              return !0;
            })(n.url, e.url) || t.url.next(e.url),
            Ba(n.data, e.data) || t.data.next(e.data);
        } else (t.snapshot = t._futureSnapshot), t.data.next(t._futureSnapshot.data);
      }
      function Ac(t, n) {
        var e, l;
        return (
          Ba(t.params, n.params) &&
          tc((e = t.url), (l = n.url)) &&
          e.every((t, n) => Ba(t.parameters, l[n].parameters)) &&
          !(!t.parent != !n.parent) &&
          (!t.parent || Ac(t.parent, n.parent))
        );
      }
      function Ic(t) {
        return 'object' == typeof t && null != t && !t.outlets && !t.segmentPath;
      }
      function Rc(t, n, e, l, r) {
        let s = {};
        return (
          l &&
            Wa(l, (t, n) => {
              s[n] = Array.isArray(t) ? t.map(t => `${t}`) : `${t}`;
            }),
          new Ya(
            e.root === t
              ? n
              : (function t(n, e, l) {
                  const r = {};
                  return (
                    Wa(n.children, (n, s) => {
                      r[s] = n === e ? l : t(n, e, l);
                    }),
                    new Ja(n.segments, r)
                  );
                })(e.root, t, n),
            s,
            r
          )
        );
      }
      class Nc {
        constructor(t, n, e) {
          if (
            ((this.isAbsolute = t),
            (this.numberOfDoubleDots = n),
            (this.commands = e),
            t && e.length > 0 && Ic(e[0]))
          )
            throw new Error('Root segment cannot have matrix parameters');
          const l = e.find(t => 'object' == typeof t && null != t && t.outlets);
          if (l && l !== Ka(e)) throw new Error('{outlets:{}} has to be the last command');
        }
        toRoot() {
          return this.isAbsolute && 1 === this.commands.length && '/' == this.commands[0];
        }
      }
      class Vc {
        constructor(t, n, e) {
          (this.segmentGroup = t), (this.processChildren = n), (this.index = e);
        }
      }
      function Dc(t) {
        return 'object' == typeof t && null != t && t.outlets ? t.outlets.primary : `${t}`;
      }
      function Lc(t, n, e) {
        if ((t || (t = new Ja([], {})), 0 === t.segments.length && t.hasChildren()))
          return Uc(t, n, e);
        const l = (function(t, n, e) {
            let l = 0,
              r = n;
            const s = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; r < t.segments.length; ) {
              if (l >= e.length) return s;
              const n = t.segments[r],
                i = Dc(e[l]),
                o = l < e.length - 1 ? e[l + 1] : null;
              if (r > 0 && void 0 === i) break;
              if (i && o && 'object' == typeof o && void 0 === o.outlets) {
                if (!Hc(i, o, n)) return s;
                l += 2;
              } else {
                if (!Hc(i, {}, n)) return s;
                l++;
              }
              r++;
            }
            return { match: !0, pathIndex: r, commandIndex: l };
          })(t, n, e),
          r = e.slice(l.commandIndex);
        if (l.match && l.pathIndex < t.segments.length) {
          const n = new Ja(t.segments.slice(0, l.pathIndex), {});
          return (
            (n.children.primary = new Ja(t.segments.slice(l.pathIndex), t.children)), Uc(n, 0, r)
          );
        }
        return l.match && 0 === r.length
          ? new Ja(t.segments, {})
          : l.match && !t.hasChildren()
          ? jc(t, n, e)
          : l.match
          ? Uc(t, 0, r)
          : jc(t, n, e);
      }
      function Uc(t, n, e) {
        if (0 === e.length) return new Ja(t.segments, {});
        {
          const l = (function(t) {
              return 'object' != typeof t[0]
                ? { primary: t }
                : void 0 === t[0].outlets
                ? { primary: t }
                : t[0].outlets;
            })(e),
            r = {};
          return (
            Wa(l, (e, l) => {
              null !== e && (r[l] = Lc(t.children[l], n, e));
            }),
            Wa(t.children, (t, n) => {
              void 0 === l[n] && (r[n] = t);
            }),
            new Ja(t.segments, r)
          );
        }
      }
      function jc(t, n, e) {
        const l = t.segments.slice(0, n);
        let r = 0;
        for (; r < e.length; ) {
          if ('object' == typeof e[r] && void 0 !== e[r].outlets) {
            const t = Fc(e[r].outlets);
            return new Ja(l, t);
          }
          if (0 === r && Ic(e[0])) {
            l.push(new Xa(t.segments[n].path, e[0])), r++;
            continue;
          }
          const s = Dc(e[r]),
            i = r < e.length - 1 ? e[r + 1] : null;
          s && i && Ic(i) ? (l.push(new Xa(s, $c(i))), (r += 2)) : (l.push(new Xa(s, {})), r++);
        }
        return new Ja(l, {});
      }
      function Fc(t) {
        const n = {};
        return (
          Wa(t, (t, e) => {
            null !== t && (n[e] = jc(new Ja([], {}), 0, t));
          }),
          n
        );
      }
      function $c(t) {
        const n = {};
        return Wa(t, (t, e) => (n[e] = `${t}`)), n;
      }
      function Hc(t, n, e) {
        return t == e.path && Ba(n, e.parameters);
      }
      class zc {
        constructor(t, n, e, l) {
          (this.routeReuseStrategy = t),
            (this.futureState = n),
            (this.currState = e),
            (this.forwardEvent = l);
        }
        activate(t) {
          const n = this.futureState._root,
            e = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(n, e, t),
            Tc(this.futureState.root),
            this.activateChildRoutes(n, e, t);
        }
        deactivateChildRoutes(t, n, e) {
          const l = bc(n);
          t.children.forEach(t => {
            const n = t.value.outlet;
            this.deactivateRoutes(t, l[n], e), delete l[n];
          }),
            Wa(l, (t, n) => {
              this.deactivateRouteAndItsChildren(t, e);
            });
        }
        deactivateRoutes(t, n, e) {
          const l = t.value,
            r = n ? n.value : null;
          if (l === r)
            if (l.component) {
              const r = e.getContext(l.outlet);
              r && this.deactivateChildRoutes(t, n, r.children);
            } else this.deactivateChildRoutes(t, n, e);
          else r && this.deactivateRouteAndItsChildren(n, e);
        }
        deactivateRouteAndItsChildren(t, n) {
          this.routeReuseStrategy.shouldDetach(t.value.snapshot)
            ? this.detachAndStoreRouteSubtree(t, n)
            : this.deactivateRouteAndOutlet(t, n);
        }
        detachAndStoreRouteSubtree(t, n) {
          const e = n.getContext(t.value.outlet);
          if (e && e.outlet) {
            const n = e.outlet.detach(),
              l = e.children.onOutletDeactivated();
            this.routeReuseStrategy.store(t.value.snapshot, {
              componentRef: n,
              route: t,
              contexts: l
            });
          }
        }
        deactivateRouteAndOutlet(t, n) {
          const e = n.getContext(t.value.outlet);
          if (e) {
            const l = bc(t),
              r = t.value.component ? e.children : n;
            Wa(l, (t, n) => this.deactivateRouteAndItsChildren(t, r)),
              e.outlet && (e.outlet.deactivate(), e.children.onOutletDeactivated());
          }
        }
        activateChildRoutes(t, n, e) {
          const l = bc(n);
          t.children.forEach(t => {
            this.activateRoutes(t, l[t.value.outlet], e),
              this.forwardEvent(new Ra(t.value.snapshot));
          }),
            t.children.length && this.forwardEvent(new Aa(t.value.snapshot));
        }
        activateRoutes(t, n, e) {
          const l = t.value,
            r = n ? n.value : null;
          if ((Tc(l), l === r))
            if (l.component) {
              const r = e.getOrCreateContext(l.outlet);
              this.activateChildRoutes(t, n, r.children);
            } else this.activateChildRoutes(t, n, e);
          else if (l.component) {
            const n = e.getOrCreateContext(l.outlet);
            if (this.routeReuseStrategy.shouldAttach(l.snapshot)) {
              const t = this.routeReuseStrategy.retrieve(l.snapshot);
              this.routeReuseStrategy.store(l.snapshot, null),
                n.children.onOutletReAttached(t.contexts),
                (n.attachRef = t.componentRef),
                (n.route = t.route.value),
                n.outlet && n.outlet.attach(t.componentRef, t.route.value),
                qc(t.route);
            } else {
              const e = (function(t) {
                  for (let n = t.parent; n; n = n.parent) {
                    const t = n.routeConfig;
                    if (t && t._loadedConfig) return t._loadedConfig;
                    if (t && t.component) return null;
                  }
                  return null;
                })(l.snapshot),
                r = e ? e.module.componentFactoryResolver : null;
              (n.attachRef = null),
                (n.route = l),
                (n.resolver = r),
                n.outlet && n.outlet.activateWith(l, r),
                this.activateChildRoutes(t, null, n.children);
            }
          } else this.activateChildRoutes(t, null, e);
        }
      }
      function qc(t) {
        Tc(t.value), t.children.forEach(qc);
      }
      function Bc(t) {
        return 'function' == typeof t;
      }
      function Gc(t) {
        return t instanceof Ya;
      }
      class Kc {
        constructor(t) {
          this.segmentGroup = t || null;
        }
      }
      class Wc {
        constructor(t) {
          this.urlTree = t;
        }
      }
      function Zc(t) {
        return new b(n => n.error(new Kc(t)));
      }
      function Qc(t) {
        return new b(n => n.error(new Wc(t)));
      }
      function Yc(t) {
        return new b(n =>
          n.error(new Error(`Only absolute redirects can have named outlets. redirectTo: '${t}'`))
        );
      }
      class Jc {
        constructor(t, n, e, l, r) {
          (this.configLoader = n),
            (this.urlSerializer = e),
            (this.urlTree = l),
            (this.config = r),
            (this.allowRedirects = !0),
            (this.ngModule = t.get(Dt));
        }
        apply() {
          return this.expandSegmentGroup(this.ngModule, this.config, this.urlTree.root, 'primary')
            .pipe(H(t => this.createUrlTree(t, this.urlTree.queryParams, this.urlTree.fragment)))
            .pipe(
              Zo(t => {
                if (t instanceof Wc) return (this.allowRedirects = !1), this.match(t.urlTree);
                if (t instanceof Kc) throw this.noMatchError(t);
                throw t;
              })
            );
        }
        match(t) {
          return this.expandSegmentGroup(this.ngModule, this.config, t.root, 'primary')
            .pipe(H(n => this.createUrlTree(n, t.queryParams, t.fragment)))
            .pipe(
              Zo(t => {
                if (t instanceof Kc) throw this.noMatchError(t);
                throw t;
              })
            );
        }
        noMatchError(t) {
          return new Error(`Cannot match any routes. URL Segment: '${t.segmentGroup}'`);
        }
        createUrlTree(t, n, e) {
          const l = t.segments.length > 0 ? new Ja([], { primary: t }) : t;
          return new Ya(l, n, e);
        }
        expandSegmentGroup(t, n, e, l) {
          return 0 === e.segments.length && e.hasChildren()
            ? this.expandChildren(t, n, e).pipe(H(t => new Ja([], t)))
            : this.expandSegment(t, e, n, e.segments, l, !0);
        }
        expandChildren(t, n, e) {
          return (function(t, n) {
            if (0 === Object.keys(t).length) return xo({});
            const e = [],
              l = [],
              r = {};
            return (
              Wa(t, (t, s) => {
                const i = n(s, t).pipe(H(t => (r[s] = t)));
                'primary' === s ? e.push(i) : l.push(i);
              }),
              xo.apply(null, e.concat(l)).pipe(
                Ao(),
                Wo(),
                H(() => r)
              )
            );
          })(e.children, (e, l) => this.expandSegmentGroup(t, n, l, e));
        }
        expandSegment(t, n, e, l, r, s) {
          return xo(...e).pipe(
            H(i =>
              this.expandSegmentAgainstRoute(t, n, e, i, l, r, s).pipe(
                Zo(t => {
                  if (t instanceof Kc) return xo(null);
                  throw t;
                })
              )
            ),
            Ao(),
            nu(t => !!t),
            Zo((t, e) => {
              if (t instanceof So || 'EmptyError' === t.name) {
                if (this.noLeftoversInUrl(n, l, r)) return xo(new Ja([], {}));
                throw new Kc(n);
              }
              throw t;
            })
          );
        }
        noLeftoversInUrl(t, n, e) {
          return 0 === n.length && !t.children[e];
        }
        expandSegmentAgainstRoute(t, n, e, l, r, s, i) {
          return eh(l) !== s
            ? Zc(n)
            : void 0 === l.redirectTo
            ? this.matchSegmentAgainstRoute(t, n, l, r)
            : i && this.allowRedirects
            ? this.expandSegmentAgainstRouteUsingRedirect(t, n, e, l, r, s)
            : Zc(n);
        }
        expandSegmentAgainstRouteUsingRedirect(t, n, e, l, r, s) {
          return '**' === l.path
            ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(t, e, l, s)
            : this.expandRegularSegmentAgainstRouteUsingRedirect(t, n, e, l, r, s);
        }
        expandWildCardWithParamsAgainstRouteUsingRedirect(t, n, e, l) {
          const r = this.applyRedirectCommands([], e.redirectTo, {});
          return e.redirectTo.startsWith('/')
            ? Qc(r)
            : this.lineralizeSegments(e, r).pipe(
                K(e => {
                  const r = new Ja(e, {});
                  return this.expandSegment(t, r, n, e, l, !1);
                })
              );
        }
        expandRegularSegmentAgainstRouteUsingRedirect(t, n, e, l, r, s) {
          const { matched: i, consumedSegments: o, lastChild: u, positionalParamSegments: a } = Xc(
            n,
            l,
            r
          );
          if (!i) return Zc(n);
          const c = this.applyRedirectCommands(o, l.redirectTo, a);
          return l.redirectTo.startsWith('/')
            ? Qc(c)
            : this.lineralizeSegments(l, c).pipe(
                K(l => this.expandSegment(t, n, e, l.concat(r.slice(u)), s, !1))
              );
        }
        matchSegmentAgainstRoute(t, n, e, l) {
          if ('**' === e.path)
            return e.loadChildren
              ? this.configLoader
                  .load(t.injector, e)
                  .pipe(H(t => ((e._loadedConfig = t), new Ja(l, {}))))
              : xo(new Ja(l, {}));
          const { matched: r, consumedSegments: s, lastChild: i } = Xc(n, e, l);
          if (!r) return Zc(n);
          const o = l.slice(i);
          return this.getChildConfig(t, e, l).pipe(
            K(t => {
              const e = t.module,
                l = t.routes,
                { segmentGroup: r, slicedSegments: i } = (function(t, n, e, l) {
                  return e.length > 0 &&
                    (function(t, n, e) {
                      return e.some(e => nh(t, n, e) && 'primary' !== eh(e));
                    })(t, e, l)
                    ? {
                        segmentGroup: th(
                          new Ja(
                            n,
                            (function(t, n) {
                              const e = {};
                              e.primary = n;
                              for (const l of t)
                                '' === l.path && 'primary' !== eh(l) && (e[eh(l)] = new Ja([], {}));
                              return e;
                            })(l, new Ja(e, t.children))
                          )
                        ),
                        slicedSegments: []
                      }
                    : 0 === e.length &&
                      (function(t, n, e) {
                        return e.some(e => nh(t, n, e));
                      })(t, e, l)
                    ? {
                        segmentGroup: th(
                          new Ja(
                            t.segments,
                            (function(t, n, e, l) {
                              const r = {};
                              for (const s of e)
                                nh(t, n, s) && !l[eh(s)] && (r[eh(s)] = new Ja([], {}));
                              return Object.assign({}, l, r);
                            })(t, e, l, t.children)
                          )
                        ),
                        slicedSegments: e
                      }
                    : { segmentGroup: t, slicedSegments: e };
                })(n, s, o, l);
              return 0 === i.length && r.hasChildren()
                ? this.expandChildren(e, l, r).pipe(H(t => new Ja(s, t)))
                : 0 === l.length && 0 === i.length
                ? xo(new Ja(s, {}))
                : this.expandSegment(e, r, l, i, 'primary', !0).pipe(
                    H(t => new Ja(s.concat(t.segments), t.children))
                  );
            })
          );
        }
        getChildConfig(t, n, e) {
          return n.children
            ? xo(new Fa(n.children, t))
            : n.loadChildren
            ? void 0 !== n._loadedConfig
              ? xo(n._loadedConfig)
              : (function(t, n, e) {
                  const l = n.canLoad;
                  return l && 0 !== l.length
                    ? G(l)
                        .pipe(
                          H(l => {
                            const r = t.get(l);
                            let s;
                            if (
                              (function(t) {
                                return t && Bc(t.canLoad);
                              })(r)
                            )
                              s = r.canLoad(n, e);
                            else {
                              if (!Bc(r)) throw new Error('Invalid CanLoad guard');
                              s = r(n, e);
                            }
                            return Za(s);
                          })
                        )
                        .pipe(Ao(), ((r = t => !0 === t), t => t.lift(new eu(r, void 0, t))))
                    : xo(!0);
                  var r;
                })(t.injector, n, e).pipe(
                  K(e =>
                    e
                      ? this.configLoader
                          .load(t.injector, n)
                          .pipe(H(t => ((n._loadedConfig = t), t)))
                      : (function(t) {
                          return new b(n =>
                            n.error(
                              Ua(
                                `Cannot load children because the guard of the route "path: '${t.path}'" returned false`
                              )
                            )
                          );
                        })(n)
                  )
                )
            : xo(new Fa([], t));
        }
        lineralizeSegments(t, n) {
          let e = [],
            l = n.root;
          for (;;) {
            if (((e = e.concat(l.segments)), 0 === l.numberOfChildren)) return xo(e);
            if (l.numberOfChildren > 1 || !l.children.primary) return Yc(t.redirectTo);
            l = l.children.primary;
          }
        }
        applyRedirectCommands(t, n, e) {
          return this.applyRedirectCreatreUrlTree(n, this.urlSerializer.parse(n), t, e);
        }
        applyRedirectCreatreUrlTree(t, n, e, l) {
          const r = this.createSegmentGroup(t, n.root, e, l);
          return new Ya(
            r,
            this.createQueryParams(n.queryParams, this.urlTree.queryParams),
            n.fragment
          );
        }
        createQueryParams(t, n) {
          const e = {};
          return (
            Wa(t, (t, l) => {
              if ('string' == typeof t && t.startsWith(':')) {
                const r = t.substring(1);
                e[l] = n[r];
              } else e[l] = t;
            }),
            e
          );
        }
        createSegmentGroup(t, n, e, l) {
          const r = this.createSegments(t, n.segments, e, l);
          let s = {};
          return (
            Wa(n.children, (n, r) => {
              s[r] = this.createSegmentGroup(t, n, e, l);
            }),
            new Ja(r, s)
          );
        }
        createSegments(t, n, e, l) {
          return n.map(n =>
            n.path.startsWith(':') ? this.findPosParam(t, n, l) : this.findOrReturn(n, e)
          );
        }
        findPosParam(t, n, e) {
          const l = e[n.path.substring(1)];
          if (!l) throw new Error(`Cannot redirect to '${t}'. Cannot find '${n.path}'.`);
          return l;
        }
        findOrReturn(t, n) {
          let e = 0;
          for (const l of n) {
            if (l.path === t.path) return n.splice(e), l;
            e++;
          }
          return t;
        }
      }
      function Xc(t, n, e) {
        if ('' === n.path)
          return 'full' === n.pathMatch && (t.hasChildren() || e.length > 0)
            ? { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} }
            : { matched: !0, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
        const l = (n.matcher || ja)(e, t, n);
        return l
          ? {
              matched: !0,
              consumedSegments: l.consumed,
              lastChild: l.consumed.length,
              positionalParamSegments: l.posParams
            }
          : { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
      }
      function th(t) {
        if (1 === t.numberOfChildren && t.children.primary) {
          const n = t.children.primary;
          return new Ja(t.segments.concat(n.segments), n.children);
        }
        return t;
      }
      function nh(t, n, e) {
        return (
          (!(t.hasChildren() || n.length > 0) || 'full' !== e.pathMatch) &&
          '' === e.path &&
          void 0 !== e.redirectTo
        );
      }
      function eh(t) {
        return t.outlet || 'primary';
      }
      class lh {
        constructor(t) {
          (this.path = t), (this.route = this.path[this.path.length - 1]);
        }
      }
      class rh {
        constructor(t, n) {
          (this.component = t), (this.route = n);
        }
      }
      function sh(t, n, e) {
        const l = t._root;
        return (function t(n, e, l, r, s = { canDeactivateChecks: [], canActivateChecks: [] }) {
          const i = bc(e);
          return (
            n.children.forEach(n => {
              !(function(n, e, l, r, s = { canDeactivateChecks: [], canActivateChecks: [] }) {
                const i = n.value,
                  o = e ? e.value : null,
                  u = l ? l.getContext(n.value.outlet) : null;
                if (o && i.routeConfig === o.routeConfig) {
                  const a = (function(t, n, e) {
                    if ('function' == typeof e) return e(t, n);
                    switch (e) {
                      case 'pathParamsChange':
                        return !tc(t.url, n.url);
                      case 'pathParamsOrQueryParamsChange':
                        return !tc(t.url, n.url) || !Ba(t.queryParams, n.queryParams);
                      case 'always':
                        return !0;
                      case 'paramsOrQueryParamsChange':
                        return !Ac(t, n) || !Ba(t.queryParams, n.queryParams);
                      case 'paramsChange':
                      default:
                        return !Ac(t, n);
                    }
                  })(o, i, i.routeConfig.runGuardsAndResolvers);
                  a
                    ? s.canActivateChecks.push(new lh(r))
                    : ((i.data = o.data), (i._resolvedData = o._resolvedData)),
                    t(n, e, i.component ? (u ? u.children : null) : l, r, s),
                    a &&
                      s.canDeactivateChecks.push(
                        new rh((u && u.outlet && u.outlet.component) || null, o)
                      );
                } else
                  o && oh(e, u, s),
                    s.canActivateChecks.push(new lh(r)),
                    t(n, null, i.component ? (u ? u.children : null) : l, r, s);
              })(n, i[n.value.outlet], l, r.concat([n.value]), s),
                delete i[n.value.outlet];
            }),
            Wa(i, (t, n) => oh(t, l.getContext(n), s)),
            s
          );
        })(l, n ? n._root : null, e, [l.value]);
      }
      function ih(t, n, e) {
        const l = (function(t) {
          if (!t) return null;
          for (let n = t.parent; n; n = n.parent) {
            const t = n.routeConfig;
            if (t && t._loadedConfig) return t._loadedConfig;
          }
          return null;
        })(n);
        return (l ? l.module.injector : e).get(t);
      }
      function oh(t, n, e) {
        const l = bc(t),
          r = t.value;
        Wa(l, (t, l) => {
          oh(t, r.component ? (n ? n.children.getContext(l) : null) : n, e);
        }),
          e.canDeactivateChecks.push(
            new rh(
              r.component && n && n.outlet && n.outlet.isActivated ? n.outlet.component : null,
              r
            )
          );
      }
      const uh = Symbol('INITIAL_VALUE');
      function ah() {
        return ru(t =>
          (function(...t) {
            let n = null,
              e = null;
            return (
              M(t[t.length - 1]) && (e = t.pop()),
              'function' == typeof t[t.length - 1] && (n = t.pop()),
              1 === t.length && u(t[0]) && (t = t[0]),
              B(t, e).lift(new Po(n))
            );
          })(
            ...t.map(t =>
              t.pipe(
                Jo(1),
                (function(...t) {
                  return n => {
                    let e = t[t.length - 1];
                    M(e) ? t.pop() : (e = null);
                    const l = t.length;
                    return (function(...t) {
                      return Ao()(xo(...t));
                    })(1 !== l || e ? (l > 0 ? B(t, e) : bo(e)) : Co(t[0]), n);
                  };
                })(uh)
              )
            )
          ).pipe(
            ou((t, n) => {
              let e = !1;
              return n.reduce((t, l, r) => {
                if (t !== uh) return t;
                if ((l === uh && (e = !0), !e)) {
                  if (!1 === l) return l;
                  if (r === n.length - 1 || Gc(l)) return l;
                }
                return t;
              }, t);
            }, uh),
            Io(t => t !== uh),
            H(t => (Gc(t) ? t : !0 === t)),
            Jo(1)
          )
        );
      }
      function ch(t, n) {
        return null !== t && n && n(new Ia(t)), xo(!0);
      }
      function hh(t, n) {
        return null !== t && n && n(new Ta(t)), xo(!0);
      }
      function dh(t, n, e) {
        const l = n.routeConfig ? n.routeConfig.canActivate : null;
        return l && 0 !== l.length
          ? xo(
              l.map(l =>
                To(() => {
                  const r = ih(l, n, e);
                  let s;
                  if (
                    (function(t) {
                      return t && Bc(t.canActivate);
                    })(r)
                  )
                    s = Za(r.canActivate(n, t));
                  else {
                    if (!Bc(r)) throw new Error('Invalid CanActivate guard');
                    s = Za(r(n, t));
                  }
                  return s.pipe(nu());
                })
              )
            ).pipe(ah())
          : xo(!0);
      }
      function ph(t, n, e) {
        const l = n[n.length - 1],
          r = n
            .slice(0, n.length - 1)
            .reverse()
            .map(t =>
              (function(t) {
                const n = t.routeConfig ? t.routeConfig.canActivateChild : null;
                return n && 0 !== n.length ? { node: t, guards: n } : null;
              })(t)
            )
            .filter(t => null !== t)
            .map(n =>
              To(() =>
                xo(
                  n.guards.map(r => {
                    const s = ih(r, n.node, e);
                    let i;
                    if (
                      (function(t) {
                        return t && Bc(t.canActivateChild);
                      })(s)
                    )
                      i = Za(s.canActivateChild(l, t));
                    else {
                      if (!Bc(s)) throw new Error('Invalid CanActivateChild guard');
                      i = Za(s(l, t));
                    }
                    return i.pipe(nu());
                  })
                ).pipe(ah())
              )
            );
        return xo(r).pipe(ah());
      }
      class gh {}
      class fh {
        constructor(t, n, e, l, r, s) {
          (this.rootComponentType = t),
            (this.config = n),
            (this.urlTree = e),
            (this.url = l),
            (this.paramsInheritanceStrategy = r),
            (this.relativeLinkResolution = s);
        }
        recognize() {
          try {
            const t = vh(this.urlTree.root, [], [], this.config, this.relativeLinkResolution)
                .segmentGroup,
              n = this.processSegmentGroup(this.config, t, 'primary'),
              e = new Sc(
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
              l = new wc(e, n),
              r = new Oc(this.url, l);
            return this.inheritParamsAndData(r._root), xo(r);
          } catch (t) {
            return new b(n => n.error(t));
          }
        }
        inheritParamsAndData(t) {
          const n = t.value,
            e = Ec(n, this.paramsInheritanceStrategy);
          (n.params = Object.freeze(e.params)),
            (n.data = Object.freeze(e.data)),
            t.children.forEach(t => this.inheritParamsAndData(t));
        }
        processSegmentGroup(t, n, e) {
          return 0 === n.segments.length && n.hasChildren()
            ? this.processChildren(t, n)
            : this.processSegment(t, n, n.segments, e);
        }
        processChildren(t, n) {
          const e = nc(n, (n, e) => this.processSegmentGroup(t, n, e));
          return (
            (function(t) {
              const n = {};
              t.forEach(t => {
                const e = n[t.value.outlet];
                if (e) {
                  const n = e.url.map(t => t.toString()).join('/'),
                    l = t.value.url.map(t => t.toString()).join('/');
                  throw new Error(
                    `Two segments cannot have the same outlet name: '${n}' and '${l}'.`
                  );
                }
                n[t.value.outlet] = t.value;
              });
            })(e),
            e.sort((t, n) =>
              'primary' === t.value.outlet
                ? -1
                : 'primary' === n.value.outlet
                ? 1
                : t.value.outlet.localeCompare(n.value.outlet)
            ),
            e
          );
        }
        processSegment(t, n, e, l) {
          for (const s of t)
            try {
              return this.processSegmentAgainstRoute(s, n, e, l);
            } catch (r) {
              if (!(r instanceof gh)) throw r;
            }
          if (this.noLeftoversInUrl(n, e, l)) return [];
          throw new gh();
        }
        noLeftoversInUrl(t, n, e) {
          return 0 === n.length && !t.children[e];
        }
        processSegmentAgainstRoute(t, n, e, l) {
          if (t.redirectTo) throw new gh();
          if ((t.outlet || 'primary') !== l) throw new gh();
          let r,
            s = [],
            i = [];
          if ('**' === t.path) {
            const s = e.length > 0 ? Ka(e).parameters : {};
            r = new Sc(
              e,
              s,
              Object.freeze(Object.assign({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              bh(t),
              l,
              t.component,
              t,
              mh(n),
              _h(n) + e.length,
              Ch(t)
            );
          } else {
            const o = (function(t, n, e) {
              if ('' === n.path) {
                if ('full' === n.pathMatch && (t.hasChildren() || e.length > 0)) throw new gh();
                return { consumedSegments: [], lastChild: 0, parameters: {} };
              }
              const l = (n.matcher || ja)(e, t, n);
              if (!l) throw new gh();
              const r = {};
              Wa(l.posParams, (t, n) => {
                r[n] = t.path;
              });
              const s =
                l.consumed.length > 0
                  ? Object.assign({}, r, l.consumed[l.consumed.length - 1].parameters)
                  : r;
              return { consumedSegments: l.consumed, lastChild: l.consumed.length, parameters: s };
            })(n, t, e);
            (s = o.consumedSegments),
              (i = e.slice(o.lastChild)),
              (r = new Sc(
                s,
                o.parameters,
                Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                this.urlTree.fragment,
                bh(t),
                l,
                t.component,
                t,
                mh(n),
                _h(n) + s.length,
                Ch(t)
              ));
          }
          const o = (function(t) {
              return t.children ? t.children : t.loadChildren ? t._loadedConfig.routes : [];
            })(t),
            { segmentGroup: u, slicedSegments: a } = vh(n, s, i, o, this.relativeLinkResolution);
          if (0 === a.length && u.hasChildren()) {
            const t = this.processChildren(o, u);
            return [new wc(r, t)];
          }
          if (0 === o.length && 0 === a.length) return [new wc(r, [])];
          const c = this.processSegment(o, u, a, 'primary');
          return [new wc(r, c)];
        }
      }
      function mh(t) {
        let n = t;
        for (; n._sourceSegment; ) n = n._sourceSegment;
        return n;
      }
      function _h(t) {
        let n = t,
          e = n._segmentIndexShift ? n._segmentIndexShift : 0;
        for (; n._sourceSegment; )
          (n = n._sourceSegment), (e += n._segmentIndexShift ? n._segmentIndexShift : 0);
        return e - 1;
      }
      function vh(t, n, e, l, r) {
        if (
          e.length > 0 &&
          (function(t, n, e) {
            return e.some(e => yh(t, n, e) && 'primary' !== wh(e));
          })(t, e, l)
        ) {
          const r = new Ja(
            n,
            (function(t, n, e, l) {
              const r = {};
              (r.primary = l), (l._sourceSegment = t), (l._segmentIndexShift = n.length);
              for (const s of e)
                if ('' === s.path && 'primary' !== wh(s)) {
                  const e = new Ja([], {});
                  (e._sourceSegment = t), (e._segmentIndexShift = n.length), (r[wh(s)] = e);
                }
              return r;
            })(t, n, l, new Ja(e, t.children))
          );
          return (
            (r._sourceSegment = t),
            (r._segmentIndexShift = n.length),
            { segmentGroup: r, slicedSegments: [] }
          );
        }
        if (
          0 === e.length &&
          (function(t, n, e) {
            return e.some(e => yh(t, n, e));
          })(t, e, l)
        ) {
          const s = new Ja(
            t.segments,
            (function(t, n, e, l, r, s) {
              const i = {};
              for (const o of l)
                if (yh(t, e, o) && !r[wh(o)]) {
                  const e = new Ja([], {});
                  (e._sourceSegment = t),
                    (e._segmentIndexShift = 'legacy' === s ? t.segments.length : n.length),
                    (i[wh(o)] = e);
                }
              return Object.assign({}, r, i);
            })(t, n, e, l, t.children, r)
          );
          return (
            (s._sourceSegment = t),
            (s._segmentIndexShift = n.length),
            { segmentGroup: s, slicedSegments: e }
          );
        }
        const s = new Ja(t.segments, t.children);
        return (
          (s._sourceSegment = t),
          (s._segmentIndexShift = n.length),
          { segmentGroup: s, slicedSegments: e }
        );
      }
      function yh(t, n, e) {
        return (
          (!(t.hasChildren() || n.length > 0) || 'full' !== e.pathMatch) &&
          '' === e.path &&
          void 0 === e.redirectTo
        );
      }
      function wh(t) {
        return t.outlet || 'primary';
      }
      function bh(t) {
        return t.data || {};
      }
      function Ch(t) {
        return t.resolve || {};
      }
      function xh(t, n, e, l) {
        const r = ih(t, n, l);
        return Za(r.resolve ? r.resolve(n, e) : r(n, e));
      }
      function kh(t) {
        return function(n) {
          return n.pipe(
            ru(n => {
              const e = t(n);
              return e ? G(e).pipe(H(() => n)) : G([n]);
            })
          );
        };
      }
      class Eh {}
      class Sh {
        shouldDetach(t) {
          return !1;
        }
        store(t, n) {}
        shouldAttach(t) {
          return !1;
        }
        retrieve(t) {
          return null;
        }
        shouldReuseRoute(t, n) {
          return t.routeConfig === n.routeConfig;
        }
      }
      const Oh = new Et('ROUTES');
      class Ph {
        constructor(t, n, e, l) {
          (this.loader = t),
            (this.compiler = n),
            (this.onLoadStartListener = e),
            (this.onLoadEndListener = l);
        }
        load(t, n) {
          return (
            this.onLoadStartListener && this.onLoadStartListener(n),
            this.loadModuleFactory(n.loadChildren).pipe(
              H(e => {
                this.onLoadEndListener && this.onLoadEndListener(n);
                const l = e.create(t);
                return new Fa(Ga(l.injector.get(Oh)).map(qa), l);
              })
            )
          );
        }
        loadModuleFactory(t) {
          return 'string' == typeof t
            ? G(this.loader.load(t))
            : Za(t()).pipe(
                K(t => (t instanceof Lt ? xo(t) : G(this.compiler.compileModuleAsync(t))))
              );
        }
      }
      class Mh {}
      class Th {
        shouldProcessUrl(t) {
          return !0;
        }
        extract(t) {
          return t;
        }
        merge(t, n) {
          return t;
        }
      }
      function Ah(t) {
        throw t;
      }
      function Ih(t, n, e) {
        return n.parse('/');
      }
      function Rh(t, n) {
        return xo(null);
      }
      class Nh {
        constructor(t, n, e, l, r, s, i, o) {
          (this.rootComponentType = t),
            (this.urlSerializer = n),
            (this.rootContexts = e),
            (this.location = l),
            (this.config = o),
            (this.lastSuccessfulNavigation = null),
            (this.currentNavigation = null),
            (this.navigationId = 0),
            (this.isNgZoneEnabled = !1),
            (this.events = new O()),
            (this.errorHandler = Ah),
            (this.malformedUriErrorHandler = Ih),
            (this.navigated = !1),
            (this.lastSuccessfulId = -1),
            (this.hooks = { beforePreactivation: Rh, afterPreactivation: Rh }),
            (this.urlHandlingStrategy = new Th()),
            (this.routeReuseStrategy = new Sh()),
            (this.onSameUrlNavigation = 'ignore'),
            (this.paramsInheritanceStrategy = 'emptyOnly'),
            (this.urlUpdateStrategy = 'deferred'),
            (this.relativeLinkResolution = 'legacy'),
            (this.ngModule = r.get(Dt)),
            (this.console = r.get(Pr));
          const u = r.get(Gr);
          (this.isNgZoneEnabled = u instanceof Gr),
            this.resetConfig(o),
            (this.currentUrlTree = new Ya(new Ja([], {}), {}, null)),
            (this.rawUrlTree = this.currentUrlTree),
            (this.browserUrlTree = this.currentUrlTree),
            (this.configLoader = new Ph(
              s,
              i,
              t => this.triggerEvent(new Pa(t)),
              t => this.triggerEvent(new Ma(t))
            )),
            (this.routerState = xc(this.currentUrlTree, this.rootComponentType)),
            (this.transitions = new ko({
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
        setupNavigations(t) {
          const n = this.events;
          return t.pipe(
            Io(t => 0 !== t.id),
            H(t =>
              Object.assign({}, t, { extractedUrl: this.urlHandlingStrategy.extract(t.rawUrl) })
            ),
            ru(t => {
              let e = !1,
                l = !1;
              return xo(t).pipe(
                Fo(t => {
                  this.currentNavigation = {
                    id: t.id,
                    initialUrl: t.currentRawUrl,
                    extractedUrl: t.extractedUrl,
                    trigger: t.source,
                    extras: t.extras,
                    previousNavigation: this.lastSuccessfulNavigation
                      ? Object.assign({}, this.lastSuccessfulNavigation, {
                          previousNavigation: null
                        })
                      : null
                  };
                }),
                ru(t => {
                  const e =
                    !this.navigated || t.extractedUrl.toString() !== this.browserUrlTree.toString();
                  if (
                    ('reload' === this.onSameUrlNavigation || e) &&
                    this.urlHandlingStrategy.shouldProcessUrl(t.rawUrl)
                  )
                    return xo(t).pipe(
                      ru(t => {
                        const e = this.transitions.getValue();
                        return (
                          n.next(
                            new ya(
                              t.id,
                              this.serializeUrl(t.extractedUrl),
                              t.source,
                              t.restoredState
                            )
                          ),
                          e !== this.transitions.getValue() ? wo : [t]
                        );
                      }),
                      ru(t => Promise.resolve(t)),
                      ((l = this.ngModule.injector),
                      (r = this.configLoader),
                      (s = this.urlSerializer),
                      (i = this.config),
                      function(t) {
                        return t.pipe(
                          ru(t =>
                            (function(t, n, e, l, r) {
                              return new Jc(t, n, e, l, r).apply();
                            })(l, r, s, t.extractedUrl, i).pipe(
                              H(n => Object.assign({}, t, { urlAfterRedirects: n }))
                            )
                          )
                        );
                      }),
                      Fo(t => {
                        this.currentNavigation = Object.assign({}, this.currentNavigation, {
                          finalUrl: t.urlAfterRedirects
                        });
                      }),
                      (function(t, n, e, l, r) {
                        return function(s) {
                          return s.pipe(
                            K(s =>
                              (function(t, n, e, l, r = 'emptyOnly', s = 'legacy') {
                                return new fh(t, n, e, l, r, s).recognize();
                              })(t, n, s.urlAfterRedirects, e(s.urlAfterRedirects), l, r).pipe(
                                H(t => Object.assign({}, s, { targetSnapshot: t }))
                              )
                            )
                          );
                        };
                      })(
                        this.rootComponentType,
                        this.config,
                        t => this.serializeUrl(t),
                        this.paramsInheritanceStrategy,
                        this.relativeLinkResolution
                      ),
                      Fo(t => {
                        'eager' === this.urlUpdateStrategy &&
                          (t.extras.skipLocationChange ||
                            this.setBrowserUrl(
                              t.urlAfterRedirects,
                              !!t.extras.replaceUrl,
                              t.id,
                              t.extras.state
                            ),
                          (this.browserUrlTree = t.urlAfterRedirects));
                      }),
                      Fo(t => {
                        const e = new xa(
                          t.id,
                          this.serializeUrl(t.extractedUrl),
                          this.serializeUrl(t.urlAfterRedirects),
                          t.targetSnapshot
                        );
                        n.next(e);
                      })
                    );
                  var l, r, s, i;
                  if (
                    e &&
                    this.rawUrlTree &&
                    this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)
                  ) {
                    const { id: e, extractedUrl: l, source: r, restoredState: s, extras: i } = t,
                      o = new ya(e, this.serializeUrl(l), r, s);
                    n.next(o);
                    const u = xc(l, this.rootComponentType).snapshot;
                    return xo(
                      Object.assign({}, t, {
                        targetSnapshot: u,
                        urlAfterRedirects: l,
                        extras: Object.assign({}, i, { skipLocationChange: !1, replaceUrl: !1 })
                      })
                    );
                  }
                  return (
                    (this.rawUrlTree = t.rawUrl),
                    (this.browserUrlTree = t.urlAfterRedirects),
                    t.resolve(null),
                    wo
                  );
                }),
                kh(t => {
                  const {
                    targetSnapshot: n,
                    id: e,
                    extractedUrl: l,
                    rawUrl: r,
                    extras: { skipLocationChange: s, replaceUrl: i }
                  } = t;
                  return this.hooks.beforePreactivation(n, {
                    navigationId: e,
                    appliedUrlTree: l,
                    rawUrlTree: r,
                    skipLocationChange: !!s,
                    replaceUrl: !!i
                  });
                }),
                Fo(t => {
                  const n = new ka(
                    t.id,
                    this.serializeUrl(t.extractedUrl),
                    this.serializeUrl(t.urlAfterRedirects),
                    t.targetSnapshot
                  );
                  this.triggerEvent(n);
                }),
                H(t =>
                  Object.assign({}, t, {
                    guards: sh(t.targetSnapshot, t.currentSnapshot, this.rootContexts)
                  })
                ),
                (function(t, n) {
                  return function(e) {
                    return e.pipe(
                      K(e => {
                        const {
                          targetSnapshot: l,
                          currentSnapshot: r,
                          guards: { canActivateChecks: s, canDeactivateChecks: i }
                        } = e;
                        return 0 === i.length && 0 === s.length
                          ? xo(Object.assign({}, e, { guardsResult: !0 }))
                          : (function(t, n, e, l) {
                              return G(t).pipe(
                                K(t =>
                                  (function(t, n, e, l, r) {
                                    const s =
                                      n && n.routeConfig ? n.routeConfig.canDeactivate : null;
                                    return s && 0 !== s.length
                                      ? xo(
                                          s.map(s => {
                                            const i = ih(s, n, r);
                                            let o;
                                            if (
                                              (function(t) {
                                                return t && Bc(t.canDeactivate);
                                              })(i)
                                            )
                                              o = Za(i.canDeactivate(t, n, e, l));
                                            else {
                                              if (!Bc(i))
                                                throw new Error('Invalid CanDeactivate guard');
                                              o = Za(i(t, n, e, l));
                                            }
                                            return o.pipe(nu());
                                          })
                                        ).pipe(ah())
                                      : xo(!0);
                                  })(t.component, t.route, e, n, l)
                                ),
                                nu(t => !0 !== t, !0)
                              );
                            })(i, l, r, t).pipe(
                              K(e =>
                                e && 'boolean' == typeof e
                                  ? (function(t, n, e, l) {
                                      return G(n).pipe(
                                        cu(n =>
                                          G([
                                            hh(n.route.parent, l),
                                            ch(n.route, l),
                                            ph(t, n.path, e),
                                            dh(t, n.route, e)
                                          ]).pipe(
                                            Ao(),
                                            nu(t => !0 !== t, !0)
                                          )
                                        ),
                                        nu(t => !0 !== t, !0)
                                      );
                                    })(l, s, t, n)
                                  : xo(e)
                              ),
                              H(t => Object.assign({}, e, { guardsResult: t }))
                            );
                      })
                    );
                  };
                })(this.ngModule.injector, t => this.triggerEvent(t)),
                Fo(t => {
                  if (Gc(t.guardsResult)) {
                    const n = Ua(`Redirecting to "${this.serializeUrl(t.guardsResult)}"`);
                    throw ((n.url = t.guardsResult), n);
                  }
                }),
                Fo(t => {
                  const n = new Ea(
                    t.id,
                    this.serializeUrl(t.extractedUrl),
                    this.serializeUrl(t.urlAfterRedirects),
                    t.targetSnapshot,
                    !!t.guardsResult
                  );
                  this.triggerEvent(n);
                }),
                Io(t => {
                  if (!t.guardsResult) {
                    this.resetUrlToCurrentUrlTree();
                    const e = new ba(t.id, this.serializeUrl(t.extractedUrl), '');
                    return n.next(e), t.resolve(!1), !1;
                  }
                  return !0;
                }),
                kh(t => {
                  if (t.guards.canActivateChecks.length)
                    return xo(t).pipe(
                      Fo(t => {
                        const n = new Sa(
                          t.id,
                          this.serializeUrl(t.extractedUrl),
                          this.serializeUrl(t.urlAfterRedirects),
                          t.targetSnapshot
                        );
                        this.triggerEvent(n);
                      }),
                      ((n = this.paramsInheritanceStrategy),
                      (e = this.ngModule.injector),
                      function(t) {
                        return t.pipe(
                          K(t => {
                            const {
                              targetSnapshot: l,
                              guards: { canActivateChecks: r }
                            } = t;
                            return r.length
                              ? G(r).pipe(
                                  cu(t =>
                                    (function(t, n, e, l) {
                                      return (function(t, n, e, l) {
                                        const r = Object.keys(t);
                                        if (0 === r.length) return xo({});
                                        if (1 === r.length) {
                                          const s = r[0];
                                          return xh(t[s], n, e, l).pipe(H(t => ({ [s]: t })));
                                        }
                                        const s = {};
                                        return G(r)
                                          .pipe(
                                            K(r => xh(t[r], n, e, l).pipe(H(t => ((s[r] = t), t))))
                                          )
                                          .pipe(
                                            Wo(),
                                            H(() => s)
                                          );
                                      })(t._resolve, t, n, l).pipe(
                                        H(
                                          n => (
                                            (t._resolvedData = n),
                                            (t.data = Object.assign({}, t.data, Ec(t, e).resolve)),
                                            null
                                          )
                                        )
                                      );
                                    })(t.route, l, n, e)
                                  ),
                                  (function(t, n) {
                                    return arguments.length >= 2
                                      ? function(e) {
                                          return y(ou(t, n), Lo(1), Bo(n))(e);
                                        }
                                      : function(n) {
                                          return y(
                                            ou((n, e, l) => t(n, e, l + 1)),
                                            Lo(1)
                                          )(n);
                                        };
                                  })((t, n) => t),
                                  H(n => t)
                                )
                              : xo(t);
                          })
                        );
                      }),
                      Fo(t => {
                        const n = new Oa(
                          t.id,
                          this.serializeUrl(t.extractedUrl),
                          this.serializeUrl(t.urlAfterRedirects),
                          t.targetSnapshot
                        );
                        this.triggerEvent(n);
                      })
                    );
                  var n, e;
                }),
                kh(t => {
                  const {
                    targetSnapshot: n,
                    id: e,
                    extractedUrl: l,
                    rawUrl: r,
                    extras: { skipLocationChange: s, replaceUrl: i }
                  } = t;
                  return this.hooks.afterPreactivation(n, {
                    navigationId: e,
                    appliedUrlTree: l,
                    rawUrlTree: r,
                    skipLocationChange: !!s,
                    replaceUrl: !!i
                  });
                }),
                H(t => {
                  const n = (function(t, n, e) {
                    const l = (function t(n, e, l) {
                      if (l && n.shouldReuseRoute(e.value, l.value.snapshot)) {
                        const r = l.value;
                        r._futureSnapshot = e.value;
                        const s = (function(n, e, l) {
                          return e.children.map(e => {
                            for (const r of l.children)
                              if (n.shouldReuseRoute(r.value.snapshot, e.value)) return t(n, e, r);
                            return t(n, e);
                          });
                        })(n, e, l);
                        return new wc(r, s);
                      }
                      {
                        const l = n.retrieve(e.value);
                        if (l) {
                          const t = l.route;
                          return (
                            (function t(n, e) {
                              if (n.value.routeConfig !== e.value.routeConfig)
                                throw new Error(
                                  'Cannot reattach ActivatedRouteSnapshot created from a different route'
                                );
                              if (n.children.length !== e.children.length)
                                throw new Error(
                                  'Cannot reattach ActivatedRouteSnapshot with a different number of children'
                                );
                              e.value._futureSnapshot = n.value;
                              for (let l = 0; l < n.children.length; ++l)
                                t(n.children[l], e.children[l]);
                            })(e, t),
                            t
                          );
                        }
                        {
                          const l = new kc(
                              new ko((r = e.value).url),
                              new ko(r.params),
                              new ko(r.queryParams),
                              new ko(r.fragment),
                              new ko(r.data),
                              r.outlet,
                              r.component,
                              r
                            ),
                            s = e.children.map(e => t(n, e));
                          return new wc(l, s);
                        }
                      }
                      var r;
                    })(t, n._root, e ? e._root : void 0);
                    return new Cc(l, n);
                  })(this.routeReuseStrategy, t.targetSnapshot, t.currentRouterState);
                  return Object.assign({}, t, { targetRouterState: n });
                }),
                Fo(t => {
                  (this.currentUrlTree = t.urlAfterRedirects),
                    (this.rawUrlTree = this.urlHandlingStrategy.merge(
                      this.currentUrlTree,
                      t.rawUrl
                    )),
                    (this.routerState = t.targetRouterState),
                    'deferred' === this.urlUpdateStrategy &&
                      (t.extras.skipLocationChange ||
                        this.setBrowserUrl(
                          this.rawUrlTree,
                          !!t.extras.replaceUrl,
                          t.id,
                          t.extras.state
                        ),
                      (this.browserUrlTree = t.urlAfterRedirects));
                }),
                ((s = this.rootContexts),
                (i = this.routeReuseStrategy),
                (o = t => this.triggerEvent(t)),
                H(t => (new zc(i, t.targetRouterState, t.currentRouterState, o).activate(s), t))),
                Fo({
                  next() {
                    e = !0;
                  },
                  complete() {
                    e = !0;
                  }
                }),
                ((r = () => {
                  if (!e && !l) {
                    this.resetUrlToCurrentUrlTree();
                    const e = new ba(
                      t.id,
                      this.serializeUrl(t.extractedUrl),
                      `Navigation ID ${t.id} is not equal to the current navigation id ${this.navigationId}`
                    );
                    n.next(e), t.resolve(!1);
                  }
                  this.currentNavigation = null;
                }),
                t => t.lift(new hu(r))),
                Zo(e => {
                  if (((l = !0), (r = e) && r.ngNavigationCancelingError)) {
                    const l = Gc(e.url);
                    l ||
                      ((this.navigated = !0),
                      this.resetStateAndUrl(t.currentRouterState, t.currentUrlTree, t.rawUrl));
                    const r = new ba(t.id, this.serializeUrl(t.extractedUrl), e.message);
                    n.next(r), t.resolve(!1), l && this.navigateByUrl(e.url);
                  } else {
                    this.resetStateAndUrl(t.currentRouterState, t.currentUrlTree, t.rawUrl);
                    const l = new Ca(t.id, this.serializeUrl(t.extractedUrl), e);
                    n.next(l);
                    try {
                      t.resolve(this.errorHandler(e));
                    } catch (s) {
                      t.reject(s);
                    }
                  }
                  var r;
                  return wo;
                })
              );
              var r, s, i, o;
            })
          );
        }
        resetRootComponentType(t) {
          (this.rootComponentType = t), (this.routerState.root.component = this.rootComponentType);
        }
        getTransition() {
          const t = this.transitions.value;
          return (t.urlAfterRedirects = this.browserUrlTree), t;
        }
        setTransition(t) {
          this.transitions.next(Object.assign({}, this.getTransition(), t));
        }
        initialNavigation() {
          this.setUpLocationChangeListener(),
            0 === this.navigationId &&
              this.navigateByUrl(this.location.path(!0), { replaceUrl: !0 });
        }
        setUpLocationChangeListener() {
          this.locationSubscription ||
            (this.locationSubscription = this.location.subscribe(t => {
              let n = this.parseUrl(t.url);
              const e = 'popstate' === t.type ? 'popstate' : 'hashchange',
                l = t.state && t.state.navigationId ? t.state : null;
              setTimeout(() => {
                this.scheduleNavigation(n, e, l, { replaceUrl: !0 });
              }, 0);
            }));
        }
        get url() {
          return this.serializeUrl(this.currentUrlTree);
        }
        getCurrentNavigation() {
          return this.currentNavigation;
        }
        triggerEvent(t) {
          this.events.next(t);
        }
        resetConfig(t) {
          $a(t), (this.config = t.map(qa)), (this.navigated = !1), (this.lastSuccessfulId = -1);
        }
        ngOnDestroy() {
          this.dispose();
        }
        dispose() {
          this.locationSubscription &&
            (this.locationSubscription.unsubscribe(), (this.locationSubscription = null));
        }
        createUrlTree(t, n = {}) {
          const {
            relativeTo: e,
            queryParams: l,
            fragment: r,
            preserveQueryParams: s,
            queryParamsHandling: i,
            preserveFragment: o
          } = n;
          Wt() &&
            s &&
            console &&
            console.warn &&
            console.warn('preserveQueryParams is deprecated, use queryParamsHandling instead.');
          const u = e || this.routerState.root,
            a = o ? this.currentUrlTree.fragment : r;
          let c = null;
          if (i)
            switch (i) {
              case 'merge':
                c = Object.assign({}, this.currentUrlTree.queryParams, l);
                break;
              case 'preserve':
                c = this.currentUrlTree.queryParams;
                break;
              default:
                c = l || null;
            }
          else c = s ? this.currentUrlTree.queryParams : l || null;
          return (
            null !== c && (c = this.removeEmptyProps(c)),
            (function(t, n, e, l, r) {
              if (0 === e.length) return Rc(n.root, n.root, n, l, r);
              const s = (function(t) {
                if ('string' == typeof t[0] && 1 === t.length && '/' === t[0])
                  return new Nc(!0, 0, t);
                let n = 0,
                  e = !1;
                const l = t.reduce((t, l, r) => {
                  if ('object' == typeof l && null != l) {
                    if (l.outlets) {
                      const n = {};
                      return (
                        Wa(l.outlets, (t, e) => {
                          n[e] = 'string' == typeof t ? t.split('/') : t;
                        }),
                        [...t, { outlets: n }]
                      );
                    }
                    if (l.segmentPath) return [...t, l.segmentPath];
                  }
                  return 'string' != typeof l
                    ? [...t, l]
                    : 0 === r
                    ? (l.split('/').forEach((l, r) => {
                        (0 == r && '.' === l) ||
                          (0 == r && '' === l ? (e = !0) : '..' === l ? n++ : '' != l && t.push(l));
                      }),
                      t)
                    : [...t, l];
                }, []);
                return new Nc(e, n, l);
              })(e);
              if (s.toRoot()) return Rc(n.root, new Ja([], {}), n, l, r);
              const i = (function(t, n, e) {
                  if (t.isAbsolute) return new Vc(n.root, !0, 0);
                  if (-1 === e.snapshot._lastPathIndex)
                    return new Vc(e.snapshot._urlSegment, !0, 0);
                  const l = Ic(t.commands[0]) ? 0 : 1;
                  return (function(t, n, e) {
                    let l = t,
                      r = n,
                      s = e;
                    for (; s > r; ) {
                      if (((s -= r), (l = l.parent), !l))
                        throw new Error("Invalid number of '../'");
                      r = l.segments.length;
                    }
                    return new Vc(l, !1, r - s);
                  })(e.snapshot._urlSegment, e.snapshot._lastPathIndex + l, t.numberOfDoubleDots);
                })(s, n, t),
                o = i.processChildren
                  ? Uc(i.segmentGroup, i.index, s.commands)
                  : Lc(i.segmentGroup, i.index, s.commands);
              return Rc(i.segmentGroup, o, n, l, r);
            })(u, this.currentUrlTree, t, c, a)
          );
        }
        navigateByUrl(t, n = { skipLocationChange: !1 }) {
          Wt() &&
            this.isNgZoneEnabled &&
            !Gr.isInAngularZone() &&
            this.console.warn(
              "Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?"
            );
          const e = Gc(t) ? t : this.parseUrl(t),
            l = this.urlHandlingStrategy.merge(e, this.rawUrlTree);
          return this.scheduleNavigation(l, 'imperative', null, n);
        }
        navigate(t, n = { skipLocationChange: !1 }) {
          return (
            (function(t) {
              for (let n = 0; n < t.length; n++) {
                const e = t[n];
                if (null == e)
                  throw new Error(`The requested path contains ${e} segment at index ${n}`);
              }
            })(t),
            this.navigateByUrl(this.createUrlTree(t, n), n)
          );
        }
        serializeUrl(t) {
          return this.urlSerializer.serialize(t);
        }
        parseUrl(t) {
          let n;
          try {
            n = this.urlSerializer.parse(t);
          } catch (e) {
            n = this.malformedUriErrorHandler(e, this.urlSerializer, t);
          }
          return n;
        }
        isActive(t, n) {
          if (Gc(t)) return Qa(this.currentUrlTree, t, n);
          const e = this.parseUrl(t);
          return Qa(this.currentUrlTree, e, n);
        }
        removeEmptyProps(t) {
          return Object.keys(t).reduce((n, e) => {
            const l = t[e];
            return null != l && (n[e] = l), n;
          }, {});
        }
        processNavigations() {
          this.navigations.subscribe(
            t => {
              (this.navigated = !0),
                (this.lastSuccessfulId = t.id),
                this.events.next(
                  new wa(
                    t.id,
                    this.serializeUrl(t.extractedUrl),
                    this.serializeUrl(this.currentUrlTree)
                  )
                ),
                (this.lastSuccessfulNavigation = this.currentNavigation),
                (this.currentNavigation = null),
                t.resolve(!0);
            },
            t => {
              this.console.warn('Unhandled Navigation Error: ');
            }
          );
        }
        scheduleNavigation(t, n, e, l) {
          const r = this.getTransition();
          if (
            r &&
            'imperative' !== n &&
            'imperative' === r.source &&
            r.rawUrl.toString() === t.toString()
          )
            return Promise.resolve(!0);
          if (
            r &&
            'hashchange' == n &&
            'popstate' === r.source &&
            r.rawUrl.toString() === t.toString()
          )
            return Promise.resolve(!0);
          if (
            r &&
            'popstate' == n &&
            'hashchange' === r.source &&
            r.rawUrl.toString() === t.toString()
          )
            return Promise.resolve(!0);
          let s = null,
            i = null;
          const o = new Promise((t, n) => {
              (s = t), (i = n);
            }),
            u = ++this.navigationId;
          return (
            this.setTransition({
              id: u,
              source: n,
              restoredState: e,
              currentUrlTree: this.currentUrlTree,
              currentRawUrl: this.rawUrlTree,
              rawUrl: t,
              extras: l,
              resolve: s,
              reject: i,
              promise: o,
              currentSnapshot: this.routerState.snapshot,
              currentRouterState: this.routerState
            }),
            o.catch(t => Promise.reject(t))
          );
        }
        setBrowserUrl(t, n, e, l) {
          const r = this.urlSerializer.serialize(t);
          (l = l || {}),
            this.location.isCurrentPathEqualTo(r) || n
              ? this.location.replaceState(r, '', Object.assign({}, l, { navigationId: e }))
              : this.location.go(r, '', Object.assign({}, l, { navigationId: e }));
        }
        resetStateAndUrl(t, n, e) {
          (this.routerState = t),
            (this.currentUrlTree = n),
            (this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, e)),
            this.resetUrlToCurrentUrlTree();
        }
        resetUrlToCurrentUrlTree() {
          this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), '', {
            navigationId: this.lastSuccessfulId
          });
        }
      }
      class Vh {
        constructor(t, n, e) {
          (this.router = t),
            (this.route = n),
            (this.locationStrategy = e),
            (this.commands = []),
            (this.subscription = t.events.subscribe(t => {
              t instanceof wa && this.updateTargetUrlAndHref();
            }));
        }
        set routerLink(t) {
          this.commands = null != t ? (Array.isArray(t) ? t : [t]) : [];
        }
        set preserveQueryParams(t) {
          Wt() &&
            console &&
            console.warn &&
            console.warn('preserveQueryParams is deprecated, use queryParamsHandling instead.'),
            (this.preserve = t);
        }
        ngOnChanges(t) {
          this.updateTargetUrlAndHref();
        }
        ngOnDestroy() {
          this.subscription.unsubscribe();
        }
        onClick(t, n, e, l) {
          if (0 !== t || n || e || l) return !0;
          if ('string' == typeof this.target && '_self' != this.target) return !0;
          const r = {
            skipLocationChange: Dh(this.skipLocationChange),
            replaceUrl: Dh(this.replaceUrl),
            state: this.state
          };
          return this.router.navigateByUrl(this.urlTree, r), !1;
        }
        updateTargetUrlAndHref() {
          this.href = this.locationStrategy.prepareExternalUrl(
            this.router.serializeUrl(this.urlTree)
          );
        }
        get urlTree() {
          return this.router.createUrlTree(this.commands, {
            relativeTo: this.route,
            queryParams: this.queryParams,
            fragment: this.fragment,
            preserveQueryParams: Dh(this.preserve),
            queryParamsHandling: this.queryParamsHandling,
            preserveFragment: Dh(this.preserveFragment)
          });
        }
      }
      function Dh(t) {
        return '' === t || !!t;
      }
      class Lh {
        constructor() {
          (this.outlet = null),
            (this.route = null),
            (this.resolver = null),
            (this.children = new Uh()),
            (this.attachRef = null);
        }
      }
      class Uh {
        constructor() {
          this.contexts = new Map();
        }
        onChildOutletCreated(t, n) {
          const e = this.getOrCreateContext(t);
          (e.outlet = n), this.contexts.set(t, e);
        }
        onChildOutletDestroyed(t) {
          const n = this.getContext(t);
          n && (n.outlet = null);
        }
        onOutletDeactivated() {
          const t = this.contexts;
          return (this.contexts = new Map()), t;
        }
        onOutletReAttached(t) {
          this.contexts = t;
        }
        getOrCreateContext(t) {
          let n = this.getContext(t);
          return n || ((n = new Lh()), this.contexts.set(t, n)), n;
        }
        getContext(t) {
          return this.contexts.get(t) || null;
        }
      }
      class jh {
        constructor(t, n, e, l, r) {
          (this.parentContexts = t),
            (this.location = n),
            (this.resolver = e),
            (this.changeDetector = r),
            (this.activated = null),
            (this._activatedRoute = null),
            (this.activateEvents = new _r()),
            (this.deactivateEvents = new _r()),
            (this.name = l || 'primary'),
            t.onChildOutletCreated(this.name, this);
        }
        ngOnDestroy() {
          this.parentContexts.onChildOutletDestroyed(this.name);
        }
        ngOnInit() {
          if (!this.activated) {
            const t = this.parentContexts.getContext(this.name);
            t &&
              t.route &&
              (t.attachRef
                ? this.attach(t.attachRef, t.route)
                : this.activateWith(t.route, t.resolver || null));
          }
        }
        get isActivated() {
          return !!this.activated;
        }
        get component() {
          if (!this.activated) throw new Error('Outlet is not activated');
          return this.activated.instance;
        }
        get activatedRoute() {
          if (!this.activated) throw new Error('Outlet is not activated');
          return this._activatedRoute;
        }
        get activatedRouteData() {
          return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
        }
        detach() {
          if (!this.activated) throw new Error('Outlet is not activated');
          this.location.detach();
          const t = this.activated;
          return (this.activated = null), (this._activatedRoute = null), t;
        }
        attach(t, n) {
          (this.activated = t), (this._activatedRoute = n), this.location.insert(t.hostView);
        }
        deactivate() {
          if (this.activated) {
            const t = this.component;
            this.activated.destroy(),
              (this.activated = null),
              (this._activatedRoute = null),
              this.deactivateEvents.emit(t);
          }
        }
        activateWith(t, n) {
          if (this.isActivated) throw new Error('Cannot activate an already activated outlet');
          this._activatedRoute = t;
          const e = (n = n || this.resolver).resolveComponentFactory(
              t._futureSnapshot.routeConfig.component
            ),
            l = this.parentContexts.getOrCreateContext(this.name).children,
            r = new Fh(t, l, this.location.injector);
          (this.activated = this.location.createComponent(e, this.location.length, r)),
            this.changeDetector.markForCheck(),
            this.activateEvents.emit(this.activated.instance);
        }
      }
      class Fh {
        constructor(t, n, e) {
          (this.route = t), (this.childContexts = n), (this.parent = e);
        }
        get(t, n) {
          return t === kc ? this.route : t === Uh ? this.childContexts : this.parent.get(t, n);
        }
      }
      class $h {}
      class Hh {
        preload(t, n) {
          return n().pipe(Zo(() => xo(null)));
        }
      }
      class zh {
        preload(t, n) {
          return xo(null);
        }
      }
      class qh {
        constructor(t, n, e, l, r) {
          (this.router = t),
            (this.injector = l),
            (this.preloadingStrategy = r),
            (this.loader = new Ph(
              n,
              e,
              n => t.triggerEvent(new Pa(n)),
              n => t.triggerEvent(new Ma(n))
            ));
        }
        setUpPreloading() {
          this.subscription = this.router.events
            .pipe(
              Io(t => t instanceof wa),
              cu(() => this.preload())
            )
            .subscribe(() => {});
        }
        preload() {
          const t = this.injector.get(Dt);
          return this.processRoutes(t, this.router.config);
        }
        ngOnDestroy() {
          this.subscription.unsubscribe();
        }
        processRoutes(t, n) {
          const e = [];
          for (const l of n)
            if (l.loadChildren && !l.canLoad && l._loadedConfig) {
              const t = l._loadedConfig;
              e.push(this.processRoutes(t.module, t.routes));
            } else
              l.loadChildren && !l.canLoad
                ? e.push(this.preloadConfig(t, l))
                : l.children && e.push(this.processRoutes(t, l.children));
          return G(e).pipe(
            Y(),
            H(t => {})
          );
        }
        preloadConfig(t, n) {
          return this.preloadingStrategy.preload(n, () =>
            this.loader
              .load(t.injector, n)
              .pipe(K(t => ((n._loadedConfig = t), this.processRoutes(t.module, t.routes))))
          );
        }
      }
      class Bh {
        constructor(t, n, e = {}) {
          (this.router = t),
            (this.viewportScroller = n),
            (this.options = e),
            (this.lastId = 0),
            (this.lastSource = 'imperative'),
            (this.restoredId = 0),
            (this.store = {}),
            (e.scrollPositionRestoration = e.scrollPositionRestoration || 'disabled'),
            (e.anchorScrolling = e.anchorScrolling || 'disabled');
        }
        init() {
          'disabled' !== this.options.scrollPositionRestoration &&
            this.viewportScroller.setHistoryScrollRestoration('manual'),
            (this.routerEventsSubscription = this.createScrollEvents()),
            (this.scrollEventsSubscription = this.consumeScrollEvents());
        }
        createScrollEvents() {
          return this.router.events.subscribe(t => {
            t instanceof ya
              ? ((this.store[this.lastId] = this.viewportScroller.getScrollPosition()),
                (this.lastSource = t.navigationTrigger),
                (this.restoredId = t.restoredState ? t.restoredState.navigationId : 0))
              : t instanceof wa &&
                ((this.lastId = t.id),
                this.scheduleScrollEvent(t, this.router.parseUrl(t.urlAfterRedirects).fragment));
          });
        }
        consumeScrollEvents() {
          return this.router.events.subscribe(t => {
            t instanceof Na &&
              (t.position
                ? 'top' === this.options.scrollPositionRestoration
                  ? this.viewportScroller.scrollToPosition([0, 0])
                  : 'enabled' === this.options.scrollPositionRestoration &&
                    this.viewportScroller.scrollToPosition(t.position)
                : t.anchor && 'enabled' === this.options.anchorScrolling
                ? this.viewportScroller.scrollToAnchor(t.anchor)
                : 'disabled' !== this.options.scrollPositionRestoration &&
                  this.viewportScroller.scrollToPosition([0, 0]));
          });
        }
        scheduleScrollEvent(t, n) {
          this.router.triggerEvent(
            new Na(t, 'popstate' === this.lastSource ? this.store[this.restoredId] : null, n)
          );
        }
        ngOnDestroy() {
          this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(),
            this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe();
        }
      }
      const Gh = new Et('ROUTER_CONFIGURATION'),
        Kh = new Et('ROUTER_FORROOT_GUARD'),
        Wh = [
          ro,
          { provide: ec, useClass: lc },
          {
            provide: Nh,
            useFactory: nd,
            deps: [cs, ec, Uh, ro, On, ds, Vr, Oh, Gh, [Mh, new ot()], [Eh, new ot()]]
          },
          Uh,
          { provide: kc, useFactory: ed, deps: [Nh] },
          { provide: ds, useClass: fs },
          qh,
          zh,
          Hh,
          { provide: Gh, useValue: { enableTracing: !1 } }
        ];
      function Zh() {
        return new ss('Router', Nh);
      }
      class Qh {
        constructor(t, n) {}
        static forRoot(t, n) {
          return {
            ngModule: Qh,
            providers: [
              Wh,
              td(t),
              { provide: Kh, useFactory: Xh, deps: [[Nh, new ot(), new at()]] },
              { provide: Gh, useValue: n || {} },
              { provide: eo, useFactory: Jh, deps: [to, [new it(lo), new ot()], Gh] },
              { provide: Bh, useFactory: Yh, deps: [Nh, vo, Gh] },
              { provide: $h, useExisting: n && n.preloadingStrategy ? n.preloadingStrategy : zh },
              { provide: ss, multi: !0, useFactory: Zh },
              [
                ld,
                { provide: wr, multi: !0, useFactory: rd, deps: [ld] },
                { provide: id, useFactory: sd, deps: [ld] },
                { provide: Or, multi: !0, useExisting: id }
              ]
            ]
          };
        }
        static forChild(t) {
          return { ngModule: Qh, providers: [td(t)] };
        }
      }
      function Yh(t, n, e) {
        return e.scrollOffset && n.setOffset(e.scrollOffset), new Bh(t, n, e);
      }
      function Jh(t, n, e = {}) {
        return e.useHash ? new io(t, n) : new oo(t, n);
      }
      function Xh(t) {
        if (t)
          throw new Error(
            'RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.'
          );
        return 'guarded';
      }
      function td(t) {
        return [
          { provide: Vn, multi: !0, useValue: t },
          { provide: Oh, multi: !0, useValue: t }
        ];
      }
      function nd(t, n, e, l, r, s, i, o, u = {}, a, c) {
        const h = new Nh(null, n, e, l, r, s, i, Ga(o));
        if (
          (a && (h.urlHandlingStrategy = a),
          c && (h.routeReuseStrategy = c),
          u.errorHandler && (h.errorHandler = u.errorHandler),
          u.malformedUriErrorHandler && (h.malformedUriErrorHandler = u.malformedUriErrorHandler),
          u.enableTracing)
        ) {
          const t = gu();
          h.events.subscribe(n => {
            t.logGroup(`Router Event: ${n.constructor.name}`),
              t.log(n.toString()),
              t.log(n),
              t.logGroupEnd();
          });
        }
        return (
          u.onSameUrlNavigation && (h.onSameUrlNavigation = u.onSameUrlNavigation),
          u.paramsInheritanceStrategy &&
            (h.paramsInheritanceStrategy = u.paramsInheritanceStrategy),
          u.urlUpdateStrategy && (h.urlUpdateStrategy = u.urlUpdateStrategy),
          u.relativeLinkResolution && (h.relativeLinkResolution = u.relativeLinkResolution),
          h
        );
      }
      function ed(t) {
        return t.routerState.root;
      }
      class ld {
        constructor(t) {
          (this.injector = t),
            (this.initNavigation = !1),
            (this.resultOfPreactivationDone = new O());
        }
        appInitializer() {
          return this.injector.get(no, Promise.resolve(null)).then(() => {
            let t = null;
            const n = new Promise(n => (t = n)),
              e = this.injector.get(Nh),
              l = this.injector.get(Gh);
            if (this.isLegacyDisabled(l) || this.isLegacyEnabled(l)) t(!0);
            else if ('disabled' === l.initialNavigation) e.setUpLocationChangeListener(), t(!0);
            else {
              if ('enabled' !== l.initialNavigation)
                throw new Error(`Invalid initialNavigation options: '${l.initialNavigation}'`);
              (e.hooks.afterPreactivation = () =>
                this.initNavigation
                  ? xo(null)
                  : ((this.initNavigation = !0), t(!0), this.resultOfPreactivationDone)),
                e.initialNavigation();
            }
            return n;
          });
        }
        bootstrapListener(t) {
          const n = this.injector.get(Gh),
            e = this.injector.get(qh),
            l = this.injector.get(Bh),
            r = this.injector.get(Nh),
            s = this.injector.get(cs);
          t === s.components[0] &&
            (this.isLegacyEnabled(n)
              ? r.initialNavigation()
              : this.isLegacyDisabled(n) && r.setUpLocationChangeListener(),
            e.setUpPreloading(),
            l.init(),
            r.resetRootComponentType(s.componentTypes[0]),
            this.resultOfPreactivationDone.next(null),
            this.resultOfPreactivationDone.complete());
        }
        isLegacyEnabled(t) {
          return (
            'legacy_enabled' === t.initialNavigation ||
            !0 === t.initialNavigation ||
            void 0 === t.initialNavigation
          );
        }
        isLegacyDisabled(t) {
          return 'legacy_disabled' === t.initialNavigation || !1 === t.initialNavigation;
        }
      }
      function rd(t) {
        return t.appInitializer.bind(t);
      }
      function sd(t) {
        return t.bootstrapListener.bind(t);
      }
      const id = new Et('Router Initializer');
      var od = He({ encapsulation: 2, styles: [], data: {} });
      function ud(t) {
        return Bs(
          0,
          [
            (t()(),
            Ts(0, 16777216, null, null, 1, 'router-outlet', [], null, null, null, null, null)),
            Ql(1, 212992, null, 0, jh, [Uh, Se, Qn, [8, null], xn], null, null)
          ],
          function(t, n) {
            t(n, 1, 0);
          },
          null
        );
      }
      function ad(t) {
        return Bs(
          0,
          [
            (t()(), Ts(0, 0, null, null, 1, 'ng-component', [], null, null, null, ud, od)),
            Ql(1, 49152, null, 0, Va, [], null, null)
          ],
          null,
          null
        );
      }
      var cd = Sl('ng-component', Va, ad, {}, {}, []);
      class hd {
        constructor() {}
        ngOnInit() {}
      }
      var dd = He({
        encapsulation: 0,
        styles: [
          [
            '[_nghost-%COMP%]{overflow:hidden}.slider-sm[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto 20px;text-align:center}.slider-sm__img[_ngcontent-%COMP%]{width:100%;padding:0 10px}'
          ]
        ],
        data: {}
      });
      function pd(t) {
        return Bs(
          0,
          [
            (t()(),
            Ts(
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
            (t()(),
            Ts(
              1,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['class', 'slider-sm__img'],
                ['src', '../../../assets/img/Banner4.jpg']
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
      class gd {
        constructor() {}
        ngOnInit() {}
      }
      var fd = He({
        encapsulation: 0,
        styles: [
          [
            '*[_ngcontent-%COMP%]{box-sizing:border-box}.brands-sm[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto 20px}.title-wrapper[_ngcontent-%COMP%]{position:relative}.title-wrapper[_ngcontent-%COMP%]:after{content:"";background:#dcdcdc;position:absolute;left:0;top:50%;margin-top:-.5px;display:block;width:100%;height:1px;z-index:-1}.text[_ngcontent-%COMP%]{background:#fff;margin:15px 20px;padding:0 10px;display:inline-block;text-transform:uppercase;font-family:Arial,sans-serif;color:#494940}img[_ngcontent-%COMP%]{max-width:230px;width:100%}ul[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,auto);grid-gap:10px;padding:0 10px}@media (max-width:1200px){ul[_ngcontent-%COMP%]{grid-template-columns:repeat(3,auto)}}@media (max-width:800px){ul[_ngcontent-%COMP%]{grid-template-columns:repeat(2,auto)}}@media (max-width:560px){ul[_ngcontent-%COMP%]{grid-template-columns:repeat(1,auto);margin:0 auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:grid;align-content:center;padding:10px;background-color:#fafafa;border:1px solid #e0e0e0;box-shadow:inset 0 1px 1px #fff;border-radius:5px;-webkit-transition:.5s;transition:.5s}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{border:1px solid #ff4800;-webkit-transform:scale(1.03);transform:scale(1.03)}'
          ]
        ],
        data: {}
      });
      function md(t) {
        return Bs(
          0,
          [
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(2, 0, null, null, 2, 'h2', [['class', 'title']], null, null, null, null, null)),
            (t()(),
            Ts(3, 0, null, null, 1, 'span', [['class', 'text']], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, ['\u041d\u0430\u0448\u0438 \u0431\u0440\u0435\u043d\u0434\u044b'])),
            (t()(), Ts(5, 0, null, null, 24, 'ul', [], null, null, null, null, null)),
            (t()(), Ts(6, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (t()(), Ts(7, 0, null, null, 1, 'a', [['href', '']], null, null, null, null, null)),
            (t()(),
            Ts(
              8,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/brend/dahua_kaliningrad.png']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ts(9, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (t()(), Ts(10, 0, null, null, 1, 'a', [['href', '']], null, null, null, null, null)),
            (t()(),
            Ts(
              11,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/brend/el.png']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ts(12, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (t()(), Ts(13, 0, null, null, 1, 'a', [['href', '']], null, null, null, null, null)),
            (t()(),
            Ts(
              14,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/brend/ez_ip.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ts(15, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (t()(), Ts(16, 0, null, null, 1, 'a', [['href', '']], null, null, null, null, null)),
            (t()(),
            Ts(
              17,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/brend/hikvision_kaliningrad.png']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ts(18, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (t()(), Ts(19, 0, null, null, 1, 'a', [['href', '']], null, null, null, null, null)),
            (t()(),
            Ts(
              20,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/brend/hiwatch-kaliningrad.png']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ts(21, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (t()(), Ts(22, 0, null, null, 1, 'a', [['href', '']], null, null, null, null, null)),
            (t()(),
            Ts(
              23,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/brend/logo-CTV.png']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ts(24, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (t()(), Ts(25, 0, null, null, 1, 'a', [['href', '']], null, null, null, null, null)),
            (t()(),
            Ts(
              26,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/brend/optimus.png']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ts(27, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (t()(), Ts(28, 0, null, null, 1, 'a', [['href', '']], null, null, null, null, null)),
            (t()(),
            Ts(
              29,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/brend/tantos.png']
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
      class _d {
        constructor() {}
        ngOnInit() {}
      }
      var vd = He({
        encapsulation: 0,
        styles: [
          [
            '*[_ngcontent-%COMP%]{box-sizing:border-box}.about-company[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto 20px}.title-wrapper[_ngcontent-%COMP%]{position:relative}.title-wrapper[_ngcontent-%COMP%]:after{content:"";background:#dcdcdc;position:absolute;left:0;top:50%;margin-top:-.5px;display:block;width:100%;height:1px;z-index:-1}.title__text[_ngcontent-%COMP%]{background:#fff;margin:15px 20px;padding:0 10px;display:inline-block;text-transform:uppercase;font-family:Arial,sans-serif;color:#494940}.about-company__content[_ngcontent-%COMP%]{padding:0 10px;display:grid;grid-template-columns:repeat(2,auto)}.content__list[_ngcontent-%COMP%]{margin-left:40px;color:#525252;line-height:1.5;margin-bottom:10px;list-style-type:circle}.content__button[_ngcontent-%COMP%]{background:unset;border:0;font-size:16px;margin:0 0 0 20px;padding:0}@media (max-width:1200px){.content__img[_ngcontent-%COMP%]{display:none}}'
          ]
        ],
        data: {}
      });
      function yd(t) {
        return Bs(
          0,
          [
            (t()(), Ts(0, 0, null, null, 21, 'div', [], null, null, null, null, null)),
            (t()(), Ts(1, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              ' \u041f\u0440\u0435\u0436\u0434\u0435 \u0447\u0435\u043c \u043a\u0443\u043f\u0438\u0442\u044c \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f, \u0436\u0435\u043b\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u043f\u0440\u043e\u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0441\u043e \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u0430\u043c\u0438. \u0420\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0438 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 \u041e\u041e\u041e \xab\u0414\u041c\u0414 \u0441\u0438\u0441\u0442\u0435\u043c\u0441\xbb \u0434\u0430\u0434\u0443\u0442 \u0441\u043e\u0432\u0435\u0442\u044b \u0438 \u043f\u043e\u043c\u043e\u0433\u0443\u0442 \u043f\u043e\u0434\u043e\u0431\u0440\u0430\u0442\u044c \u0430\u043f\u043f\u0430\u0440\u0430\u0442\u0443\u0440\u0443. \u042d\u043a\u0441\u043f\u0435\u0440\u0442\u044b \u043f\u0440\u043e\u0434\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0438\u0440\u0443\u044e\u0442 \u0438\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u043e\u0434\u0445\u043e\u0434 \u043a \u043a\u0430\u0436\u0434\u043e\u043c\u0443 \u043a\u043b\u0438\u0435\u043d\u0442\u0443. '
            ])),
            (t()(), Ts(3, 0, null, null, 1, 'h3', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              ' \u0421\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u0447\u0430\u044f \u0441 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0435\u0439 \u041e\u041e\u041e \xab\u0414\u041c\u0414 \u0441\u0438\u0441\u0442\u0435\u043c\u0441\xbb, \u0432\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u0442\u0430\u043a\u0438\u0435 \u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430: '
            ])),
            (t()(),
            Ts(
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
            (t()(), Ts(6, 0, null, null, 1, 'li', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430;'
            ])),
            (t()(), Ts(8, 0, null, null, 1, 'li', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u043e\u0440\u0438\u0433\u0438\u043d\u0430\u043b\u044c\u043d\u043e\u0439 \u0442\u0435\u0445\u043d\u0438\u043a\u0438;'
            ])),
            (t()(), Ts(10, 0, null, null, 1, 'li', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u043d\u0435\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043d\u044b\u0439 \u0432\u044b\u0431\u043e\u0440 \u0430\u043f\u043f\u0430\u0440\u0430\u0442\u0443\u0440\u044b;'
            ])),
            (t()(), Ts(12, 0, null, null, 1, 'li', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u0433\u0430\u0440\u0430\u043d\u0442\u0438\u044f \u0438 \u0441\u0435\u0440\u0432\u0438\u0441.'
            ])),
            (t()(), Ts(14, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              ' \u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u043c\u043e\u0434\u0435\u043b\u0438 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f. \u041a\u043b\u0438\u0435\u043d\u0442\u0443 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0430\u0442 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438 \u0430\u043f\u043f\u0430\u0440\u0430\u0442\u0443\u0440\u0443, \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u0443\u044e \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0446\u0438\u0444\u0440\u043e\u0432\u044b\u0445 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439. '
            ])),
            (t()(), Ts(16, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              ' \u041e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u043b\u044f \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f \u043e\u0442\u043b\u0438\u0447\u0430\u0435\u0442\u0441\u044f \u043f\u0440\u043e\u0441\u0442\u043e\u0442\u043e\u0439 \u044d\u043a\u0441\u043f\u043b\u0443\u0430\u0442\u0430\u0446\u0438\u0438. \u0427\u0435\u043b\u043e\u0432\u0435\u043a\u0443 \u043d\u0435 \u043f\u043e\u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u043c\u043d\u043e\u0433\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438, \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u0443\u0447\u0438\u0442\u044c\u0441\u044f \u0435\u0433\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c. \u041a\u0430\u0436\u0434\u0430\u044f \u043a\u0430\u043c\u0435\u0440\u0430 \u0438\u043c\u0435\u0435\u0442 \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0443\u044e \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044e, \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u043d\u0443\u044e \u043d\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u043c \u044f\u0437\u044b\u043a\u0435. '
            ])),
            (t()(), Ts(18, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              ' \u0420\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0438 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 \u041e\u041e\u041e \xab\u0414\u041c\u0414 \u0441\u0438\u0441\u0442\u0435\u043c\u0441\xbb \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u044b \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442 \u043e\u0445\u0440\u0430\u043d\u043d\u043e\u0433\u043e \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u0430 \u0434\u043b\u044f \u043b\u044e\u0431\u043e\u0439 \u0442\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u0438. \u041f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0437\u0430\u0434\u0430\u043d\u0438\u044f \u043c\u0430\u0441\u0442\u0435\u0440\u0430 \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u044e\u0442 \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0443 \u043e\u0431\u044a\u0435\u043a\u0442\u0430. \u041d\u0430\u0448\u0438 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u044b \u043f\u043e\u0434\u0431\u0435\u0440\u0443\u0442 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0435\u0435 \u043c\u0435\u0441\u0442\u043e, \u0447\u0442\u043e\u0431\u044b \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0438\u0442\u044c \u043a\u0430\u043c\u0435\u0440\u044b. '
            ])),
            (t()(), Ts(20, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              ' \u0412\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0435 \u043f\u043e\u0434 \u043a\u043b\u044e\u0447 \u0443\u0434\u0438\u0432\u0438\u0442 \u0432\u0430\u0441 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u044c\u044e \u0446\u0435\u043d. '
            ]))
          ],
          null,
          null
        );
      }
      function wd(t) {
        return Bs(
          0,
          [
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(2, 0, null, null, 2, 'h2', [['class', 'title']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(), Hs(-1, null, ['\u041e \u041a\u043e\u043c\u043f\u0430\u043d\u0438\u0438'])),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(), Ts(7, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              ' \u041e\u041e\u041e "\u0414\u041c\u0414 \u0441\u0438\u0441\u0442\u0435\u043c\u044f" \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u043d\u043e \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u044e\u0449\u0430\u044f\u0441\u044f \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f. \u041c\u044b \u0440\u0430\u0434\u044b \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u0442\u044c \u0412\u0430\u043c \u0448\u0438\u0440\u043e\u043a\u0438\u0439 \u0441\u043f\u0435\u043a\u0442\u0440 \u043e\u0445\u0440\u0430\u043d\u043d\u044b\u0445 \u0441\u0438\u0441\u0442\u0435\u043c, \u0430 \u0442\u0430\u043a \u0436\u0435 \u0432\u0435\u0441\u044c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0439 \u043f\u0435\u0440\u0435\u0447\u0435\u043d\u044c \u0443\u0441\u043b\u0443\u0433. \u041f\u043e\u0437\u0432\u043e\u043d\u0438\u0432 \u043d\u0430\u043c \u0412\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0443\u044e \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u044e, \u0438\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u043e\u0434\u0445\u043e\u0434 \u0438 \u0433\u0438\u0431\u043a\u0443\u044e \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u0441\u043a\u0438\u0434\u043e\u043a. '
            ])),
            (t()(), Ts(9, 0, null, null, 1, 'h3', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u041f\u043e\u043a\u0443\u043f\u043a\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f \u0432 \u041c\u0438\u043d\u0441\u043a\u0435'
            ])),
            (t()(), Ts(11, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              ' \u0427\u0442\u043e\u0431\u044b \u043a\u0443\u043f\u0438\u0442\u044c \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0435 \u0432 \u041c\u0438\u043d\u0441\u043a\u0435, \u0433\u043e\u0440\u043e\u0436\u0430\u043d\u0435 \u043e\u0431\u0440\u0430\u0449\u0430\u044e\u0442\u0441\u044f \u043a \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043b\u044f\u043c \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 \u041e\u041e\u041e \xab\u0414\u041c\u0414 \u0441\u0438\u0441\u0442\u0435\u043c\u0441\xbb. \u0414\u0430\u043d\u043d\u0430\u044f \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0434\u0430\u0435\u0442 \u0438 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u0435\u0442 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438. \u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f \u041e\u041e\u041e \xab\u0414\u041c\u0414 \u0441\u0438\u0441\u0442\u0435\u043c\u0441\xbb \u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0431\u043e\u043b\u044c\u0448\u0438\u043c \u0443\u0432\u0430\u0436\u0435\u043d\u0438\u0435\u043c \u0441\u0442\u043e\u043b\u0438\u0447\u043d\u044b\u0445 \u0436\u0438\u0442\u0435\u043b\u0435\u0439. \u0411\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f \u0440\u0430\u0431\u043e\u0442\u0435 \u044d\u0442\u043e\u0439 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438, \u0443 \u043b\u044e\u0434\u0435\u0439 \u043f\u043e\u044f\u0432\u0438\u043b\u0441\u044f \u0448\u0430\u043d\u0441 \u0437\u0430\u0449\u0438\u0442\u0438\u0442\u044c \u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u043e \u043e\u0442 \u0437\u043b\u043e\u0443\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u0438\u043a\u043e\u0432. '
            ])),
            (t()(), Ts(13, 0, null, null, 1, 'h3', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              ' \u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0441\u0438\u0441\u0442\u0435\u043c \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f '
            ])),
            (t()(), Ts(15, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              ' \u0421\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430 \u0434\u043b\u044f \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u044e\u0442\u0441\u044f \u0432\u043e \u0432\u0441\u0435\u0445 \u0441\u0444\u0435\u0440\u0430\u0445 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438. \u041a\u0430\u043c\u0435\u0440\u044b \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u043d\u0430 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0445 \u0441\u0442\u043e\u044f\u043d\u043a\u0430\u0445 \u0438 \u0434\u0430\u0447\u043d\u044b\u0445 \u0443\u0447\u0430\u0441\u0442\u043a\u0430\u0445. \u042d\u0442\u043e \u043f\u043e\u043c\u043e\u0433\u0430\u0435\u0442 \u044d\u043a\u043e\u043d\u043e\u043c\u0438\u0442\u044c \u0434\u0435\u043d\u0435\u0436\u043d\u044b\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430. \u0412\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u044b \u0441\u0443\u043f\u0435\u0440\u043c\u0430\u0440\u043a\u0435\u0442\u043e\u0432 \u0443\u043c\u0435\u043d\u044c\u0448\u0430\u044e\u0442 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u043e\u0432 \u043f\u043e\u0441\u043b\u0435 \u043f\u043e\u043a\u0443\u043f\u043a\u0438 \u043e\u0445\u0440\u0430\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f. \u041f\u0440\u0435\u0434\u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u0435\u043b\u044f\u043c \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0435 \u043f\u0440\u0438\u0434\u0435\u0442\u0441\u044f \u043d\u0430\u0434\u0435\u044f\u0442\u044c\u0441\u044f \u043d\u0430 \u0447\u0435\u0441\u0442\u043d\u043e\u0441\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u043e\u0432. \u041a\u0430\u043c\u0435\u0440\u0430 \u0431\u0443\u0434\u0435\u0442 \u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u044f\u0449\u0438\u0435 \u043d\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f. \u041d\u0438 \u043e\u0434\u0438\u043d \u0447\u0435\u043b\u043e\u0432\u0435\u043a, \u043f\u0440\u043e\u043d\u0438\u043a\u0448\u0438\u0439 \u043d\u0430 \u043e\u0445\u0440\u0430\u043d\u044f\u0435\u043c\u0443\u044e \u0442\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u044e, \u043d\u0435 \u043e\u0441\u0442\u0430\u043d\u0435\u0442\u0441\u044f \u043d\u0435\u0437\u0430\u043c\u0435\u0447\u0435\u043d\u043d\u044b\u043c. ... '
            ])),
            (t()(), Ms(16777216, null, null, 1, null, yd)),
            Ql(18, 16384, null, 0, po, [Se, ke], { ngIf: [0, 'ngIf'] }, null),
            (t()(),
            Ts(
              19,
              0,
              null,
              null,
              1,
              'button',
              [['class', 'content__button']],
              null,
              [[null, 'click']],
              function(t, n, e) {
                var l = !0,
                  r = t.component;
                return 'click' === n && (l = 0 != (r.isVisible = !r.isVisible) && l), l;
              },
              null,
              null
            )),
            (t()(),
            Hs(-1, null, [
              '\u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c / \u0441\u043a\u0440\u044b\u0442\u044c'
            ])),
            (t()(),
            Ts(
              21,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['class', 'content__img'],
                ['src', '../../../assets/img/about-company/1.png']
              ],
              null,
              null,
              null,
              null,
              null
            ))
          ],
          function(t, n) {
            t(n, 18, 0, n.component.isVisible);
          },
          null
        );
      }
      class bd {
        constructor() {}
        ngOnInit() {}
      }
      var Cd = He({
        encapsulation: 0,
        styles: [
          [
            '*[_ngcontent-%COMP%]{box-sizing:border-box}.section[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto 20px}.title-wrapper[_ngcontent-%COMP%]{position:relative}.title-wrapper[_ngcontent-%COMP%]:after{content:"";background:#dcdcdc;position:absolute;left:0;top:50%;margin-top:-.5px;display:block;width:100%;height:1px;z-index:-1}.title__text[_ngcontent-%COMP%]{background:#fff;margin:15px 20px;padding:0 10px;display:inline-block;text-transform:uppercase;font-family:Arial,sans-serif;color:#494940}.content__list[_ngcontent-%COMP%]{padding:0 10px;display:grid;grid-template-columns:repeat(4,auto);-webkit-column-gap:10px;-moz-column-gap:10px;column-gap:10px}.item[_ngcontent-%COMP%]{text-align:center;display:grid;padding:20px 10px 0;border:1px solid #fff;border-radius:5px}.item[_ngcontent-%COMP%]   .item__title[_ngcontent-%COMP%]{grid-row:2;margin:20px 0 10px}.item[_ngcontent-%COMP%]   .item__svg[_ngcontent-%COMP%]{grid-row:1;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;width:124px;height:124px;border:2px solid #e9e9e9;border-radius:50%;margin:0 auto;background-color:#f4f4f4}.item[_ngcontent-%COMP%]   .svg[_ngcontent-%COMP%]{width:60px;height:60px;fill:#494940}.item[_ngcontent-%COMP%]:hover{-webkit-transition:1s;transition:1s;background-color:#fafafa;border:1px solid #e0e0e0}.item[_ngcontent-%COMP%]:hover   .item__svg[_ngcontent-%COMP%]{-webkit-transition:.25s;transition:.25s;background-color:#fff4ef;border:2px solid #ff8352}.item[_ngcontent-%COMP%]:hover   .svg[_ngcontent-%COMP%]{-webkit-transition:.25s;transition:.25s;fill:#c23801}'
          ]
        ],
        data: {}
      });
      function xd(t) {
        return Bs(
          0,
          [
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(2, 0, null, null, 2, 'h2', [['class', 'title']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Hs(-1, null, [
              '\u0421\u0438\u0441\u0442\u0435\u043c\u044b \u043e\u0445\u0440\u0430\u043d\u044b \u0438 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438'
            ])),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(8, 0, null, null, 7, 'li', [['class', 'item']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Hs(-1, null, [
              '\u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0430\u0441\u0441\u043e\u0440\u0442\u0438\u043c\u0435\u043d\u0442'
            ])),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(14, 0, null, null, 1, 'p', [['class', 'item__text']], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              ' \u041f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e\u0435 \u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u0448\u0438\u0440\u043e\u043a\u043e\u0433\u043e \u0430\u0441\u0441\u043e\u0440\u0442\u0438\u043c\u0435\u043d\u0442\u0430 \u043d\u0430 \u0441\u043a\u043b\u0430\u0434\u0435, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0441\u0432\u043e\u0435\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e \u043f\u043e\u0441\u0442\u0430\u0432\u043a\u0443 \u043f\u043e\u0434 \u0437\u0430\u043a\u0430\u0437. '
            ])),
            (t()(),
            Ts(16, 0, null, null, 7, 'li', [['class', 'item']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Hs(-1, null, [
              '\u0422\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430'
            ])),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(22, 0, null, null, 1, 'p', [['class', 'item__text']], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              ' \u041e\u043f\u0442\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u043f\u043e \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044e \u0441\u0438\u0441\u0442\u0435\u043c \u043e\u0445\u0440\u0430\u043d\u044b \u043d\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u0435 \u043b\u044e\u0431\u043e\u0439 \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u0438. '
            ])),
            (t()(),
            Ts(24, 0, null, null, 7, 'li', [['class', 'item']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Hs(-1, null, [
              '\u041a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u0438'
            ])),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(30, 0, null, null, 1, 'p', [['class', 'item__text']], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              ' \u0418\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u043e\u0434\u0445\u043e\u0434 \u0438 \u0434\u0435\u0442\u0430\u043b\u044c\u043d\u0443\u044e \u043f\u0440\u043e\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0437\u0430\u0434\u0430\u043d\u0438\u044f \u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u0430. '
            ])),
            (t()(),
            Ts(32, 0, null, null, 7, 'li', [['class', 'item']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Hs(-1, null, [
              '\u0413\u0430\u0440\u0430\u043d\u0442\u0438\u044f \u0438 \u0441\u0435\u0440\u0432\u0438\u0441'
            ])),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(38, 0, null, null, 1, 'p', [['class', 'item__text']], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              ' \u0421\u0435\u0440\u0432\u0438\u0441\u043d\u043e\u0435 \u0438 \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0439\u043d\u043e\u0435 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u0435 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f \u0434\u043b\u044f \u043e\u0445\u0440\u0430\u043d\u043d\u044b\u0445 \u0441\u0438\u0441\u0442\u0435\u043c. '
            ]))
          ],
          null,
          null
        );
      }
      class kd {
        constructor() {}
        ngOnInit() {}
      }
      var Ed = He({
        encapsulation: 0,
        styles: [
          [
            '[_nghost-%COMP%]{display:grid;-webkit-box-pack:center;justify-content:center;overflow:hidden}@media (max-width:1200px){[_nghost-%COMP%]{-webkit-box-pack:left;justify-content:left}}'
          ]
        ],
        data: {}
      });
      function Sd(t) {
        return Bs(
          0,
          [
            (t()(), Ts(0, 0, null, null, 8, null, null, null, null, null, null, null)),
            (t()(), Ts(1, 0, null, null, 1, 'app-slider-sm', [], null, null, null, pd, dd)),
            Ql(2, 114688, null, 0, hd, [], null, null),
            (t()(), Ts(3, 0, null, null, 1, 'app-brands-sm', [], null, null, null, md, fd)),
            Ql(4, 114688, null, 0, gd, [], null, null),
            (t()(), Ts(5, 0, null, null, 1, 'app-about-company', [], null, null, null, wd, vd)),
            Ql(6, 114688, null, 0, _d, [], null, null),
            (t()(),
            Ts(
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
              xd,
              Cd
            )),
            Ql(8, 114688, null, 0, bd, [], null, null)
          ],
          function(t, n) {
            t(n, 2, 0), t(n, 4, 0), t(n, 6, 0), t(n, 8, 0);
          },
          null
        );
      }
      function Od(t) {
        return Bs(
          0,
          [
            (t()(), Ts(0, 0, null, null, 1, 'app-page-home', [], null, null, null, Sd, Ed)),
            Ql(1, 114688, null, 0, kd, [], null, null)
          ],
          function(t, n) {
            t(n, 1, 0);
          },
          null
        );
      }
      var Pd = Sl('app-page-home', kd, Od, {}, {}, []);
      class Md {
        constructor() {}
        ngOnInit() {}
      }
      var Td = He({
        encapsulation: 0,
        styles: [
          [
            '*[_ngcontent-%COMP%]{box-sizing:border-box}.section[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto 20px}.title-wrapper[_ngcontent-%COMP%]{position:relative}.title-wrapper[_ngcontent-%COMP%]:after{content:"";background:#dcdcdc;position:absolute;left:0;top:50%;margin-top:-.5px;display:block;width:100%;height:1px;z-index:-1}.text[_ngcontent-%COMP%]{background:#fff;margin:15px 20px;padding:0 10px;display:inline-block;text-transform:uppercase;font-family:Arial,sans-serif;color:#494940}img[_ngcontent-%COMP%]{max-width:230px;width:100%}.catalog_list[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,auto);grid-gap:10px;padding:0 10px}@media (max-width:1200px){.catalog_list[_ngcontent-%COMP%]{grid-template-columns:repeat(3,auto)}}@media (max-width:800px){.catalog_list[_ngcontent-%COMP%]{grid-template-columns:repeat(2,auto)}}@media (max-width:560px){.catalog_list[_ngcontent-%COMP%]{grid-template-columns:repeat(1,auto);margin:0 auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}}.catalog_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{display:grid;padding:10px;background-color:#fafafa;border:1px solid #e0e0e0;box-shadow:inset 0 1px 1px #fff;border-radius:5px;-webkit-transition:.5s;transition:.5s}.catalog_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover{border:1px solid #ff4800;-webkit-transform:scale(1.03);transform:scale(1.03)}.catalog_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{display:grid;justify-items:center}.catalog_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{align-self:end;justify-self:center}.catalog_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{align-self:center}'
          ]
        ],
        data: {}
      });
      function Ad(t) {
        return Bs(
          0,
          [
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(2, 0, null, null, 2, 'h2', [['class', 'title']], null, null, null, null, null)),
            (t()(),
            Ts(3, 0, null, null, 1, 'span', [['class', 'text']], null, null, null, null, null)),
            (t()(), Hs(-1, null, ['\u041a\u0430\u0442\u0430\u043b\u043e\u0433'])),
            (t()(),
            Ts(
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
            (t()(),
            Ts(6, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
              8,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/catalog/cat1.png']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ts(9, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u0421\u0438\u0441\u0442\u0435\u043c\u044b \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f'
            ])),
            (t()(),
            Ts(11, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
              13,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/catalog/domofon.png']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ts(14, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u041a\u043e\u043d\u0442\u0440\u043e\u043b\u044c \u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043e\u043c'
            ])),
            (t()(),
            Ts(16, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
              18,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/catalog/videodomofon-monitor.png']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ts(19, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u0412\u0438\u0434\u0435\u043e\u0434\u043e\u043c\u043e\u0444\u043e\u043d\u044b'
            ])),
            (t()(),
            Ts(21, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
              23,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/catalog/cat4.png']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ts(24, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u0421\u0435\u0442\u0435\u0432\u043e\u0435 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435'
            ])),
            (t()(),
            Ts(26, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
              28,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/catalog/cat5.png']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ts(29, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0438 \u043f\u0438\u0442\u0430\u043d\u0438\u044f'
            ])),
            (t()(),
            Ts(31, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
              33,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/catalog/logo.png']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ts(34, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(), Hs(-1, null, ['\u0423\u043c\u043d\u044b\u0439 \u0434\u043e\u043c'])),
            (t()(),
            Ts(36, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
              38,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/catalog/gsm_signal_kateg.png']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ts(39, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              'GSM \u0441\u0438\u0433\u043d\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f'
            ])),
            (t()(),
            Ts(41, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
              43,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/catalog/rkit.png']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ts(44, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u0423\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430 \u0440\u0430\u0434\u0438\u043e\u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f'
            ])),
            (t()(),
            Ts(46, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
              48,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/catalog/photo.png']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ts(49, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u0410\u043a\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044b \u0438 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b'
            ]))
          ],
          null,
          null
        );
      }
      class Id {
        constructor() {}
        ngOnInit() {}
      }
      var Rd = He({ encapsulation: 0, styles: [['']], data: {} });
      function Nd(t) {
        return Bs(
          0,
          [
            (t()(), Ts(0, 0, null, null, 1, 'app-catalog', [], null, null, null, Ad, Td)),
            Ql(1, 114688, null, 0, Md, [], null, null)
          ],
          function(t, n) {
            t(n, 1, 0);
          },
          null
        );
      }
      function Vd(t) {
        return Bs(
          0,
          [
            (t()(), Ts(0, 0, null, null, 1, 'app-page-catalog', [], null, null, null, Nd, Rd)),
            Ql(1, 114688, null, 0, Id, [], null, null)
          ],
          function(t, n) {
            t(n, 1, 0);
          },
          null
        );
      }
      var Dd = Sl('app-page-catalog', Id, Vd, {}, {}, []);
      class Ld {
        constructor() {}
        ngOnInit() {}
      }
      var Ud = He({ encapsulation: 0, styles: [['']], data: {} });
      function jd(t) {
        return Bs(
          0,
          [
            (t()(), Ts(0, 0, null, null, 1, 'app-about-company', [], null, null, null, wd, vd)),
            Ql(1, 114688, null, 0, _d, [], null, null),
            (t()(),
            Ts(
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
              xd,
              Cd
            )),
            Ql(3, 114688, null, 0, bd, [], null, null)
          ],
          function(t, n) {
            t(n, 1, 0), t(n, 3, 0);
          },
          null
        );
      }
      function Fd(t) {
        return Bs(
          0,
          [
            (t()(), Ts(0, 0, null, null, 1, 'app-page-about', [], null, null, null, jd, Ud)),
            Ql(1, 114688, null, 0, Ld, [], null, null)
          ],
          function(t, n) {
            t(n, 1, 0);
          },
          null
        );
      }
      var $d = Sl('app-page-about', Ld, Fd, {}, {}, []);
      class Hd {
        constructor() {}
        ngOnInit() {}
      }
      var zd = He({
        encapsulation: 0,
        styles: [
          [
            '*[_ngcontent-%COMP%]{box-sizing:border-box}.section[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto 20px}.title-wrapper[_ngcontent-%COMP%]{position:relative}.title-wrapper[_ngcontent-%COMP%]:after{content:"";background:#dcdcdc;position:absolute;left:0;top:50%;margin-top:-.5px;display:block;width:100%;height:1px;z-index:-1}.text[_ngcontent-%COMP%]{background:#fff;margin:15px 20px;padding:0 10px;display:inline-block;text-transform:uppercase;font-family:Arial,sans-serif;color:#494940}img[_ngcontent-%COMP%]{max-width:230px;width:100%}.svg[_ngcontent-%COMP%]{margin:5px 10px;width:50px;height:50px;fill:currentColor}.catalog_list[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,auto);grid-gap:10px;padding:0 10px}@media (max-width:1200px){.catalog_list[_ngcontent-%COMP%]{grid-template-columns:repeat(3,auto)}}@media (max-width:800px){.catalog_list[_ngcontent-%COMP%]{grid-template-columns:repeat(2,auto)}}@media (max-width:560px){.catalog_list[_ngcontent-%COMP%]{grid-template-columns:repeat(1,auto);margin:0 auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}}.catalog_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{display:grid;padding:10px;background-color:#fafafa;border:1px solid #e0e0e0;box-shadow:inset 0 1px 1px #fff;border-radius:5px;-webkit-transition:.5s;transition:.5s}.catalog_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover{border:1px solid #ff4800;-webkit-transform:scale(1.03);transform:scale(1.03)}.catalog_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{display:grid;justify-items:center}.catalog_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{align-self:end;justify-self:center}.catalog_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{align-self:center}.box[_ngcontent-%COMP%]{padding:0 10px;display:grid;grid-template-columns:auto 300px}.box_guaranty[_ngcontent-%COMP%]{padding:0 10px;color:#525252}.list_options[_ngcontent-%COMP%]{display:-webkit-box;display:flex;flex-flow:wrap}.list_options[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:10px}.list_aside[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.list_aside[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}'
          ]
        ],
        data: {}
      });
      function qd(t) {
        return Bs(
          0,
          [
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(2, 0, null, null, 2, 'h2', [['class', 'title']], null, null, null, null, null)),
            (t()(),
            Ts(3, 0, null, null, 1, 'span', [['class', 'text']], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u0442\u0435\u0445.\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430'
            ])),
            (t()(),
            Ts(5, 0, null, null, 50, 'div', [['class', 'box']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(), Ts(7, 0, null, null, 5, 'li', [], null, null, null, null, null)),
            (t()(), Ts(8, 0, null, null, 4, 'a', [['href', '']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(), Ts(11, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u043f\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0435'
            ])),
            (t()(), Ts(13, 0, null, null, 5, 'li', [], null, null, null, null, null)),
            (t()(), Ts(14, 0, null, null, 4, 'a', [['href', '']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(), Ts(17, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u041f\u0440\u043e\u0448\u0438\u0432\u043a\u0438 \u0438 \u041f\u041e \u0441\u043a\u0430\u0447\u0430\u0442\u044c \u0441 FTP'
            ])),
            (t()(), Ts(19, 0, null, null, 5, 'li', [], null, null, null, null, null)),
            (t()(), Ts(20, 0, null, null, 4, 'a', [['href', '']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(), Ts(23, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u0413\u0430\u0440\u0430\u043d\u0442\u0438\u044f \u0438 \u0440\u0435\u043c\u043e\u043d\u0442'
            ])),
            (t()(), Ts(25, 0, null, null, 5, 'li', [], null, null, null, null, null)),
            (t()(), Ts(26, 0, null, null, 4, 'a', [['href', '']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(), Ts(29, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b \u0442\u0435\u0445\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438'
            ])),
            (t()(), Ts(31, 0, null, null, 5, 'li', [], null, null, null, null, null)),
            (t()(), Ts(32, 0, null, null, 4, 'a', [['href', '']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(), Ts(35, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u0414\u0435\u043a\u043b\u0430\u0440\u0430\u0446\u0438\u044f \u043e \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438'
            ])),
            (t()(),
            Ts(
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
            (t()(), Ts(38, 0, null, null, 5, 'li', [], null, null, null, null, null)),
            (t()(), Ts(39, 0, null, null, 4, 'a', [['href', '']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(), Ts(42, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440\u044b'
            ])),
            (t()(), Ts(44, 0, null, null, 5, 'li', [], null, null, null, null, null)),
            (t()(), Ts(45, 0, null, null, 4, 'a', [['href', '']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(), Ts(48, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u043a\u0430\u0442\u0430\u043b\u043e\u0433 \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u0438'
            ])),
            (t()(), Ts(50, 0, null, null, 5, 'li', [], null, null, null, null, null)),
            (t()(), Ts(51, 0, null, null, 4, 'a', [['href', '']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(), Ts(54, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u043f\u0440\u0430\u0439\u0441-\u043b\u0438\u0441\u0442'
            ])),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(58, 0, null, null, 2, 'h2', [['class', 'title']], null, null, null, null, null)),
            (t()(),
            Ts(59, 0, null, null, 1, 'span', [['class', 'text']], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u0413\u0430\u0440\u0430\u043d\u0442\u0438\u044f \u0438 \u0440\u0435\u043c\u043e\u043d\u0442'
            ])),
            (t()(),
            Ts(
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
            (t()(), Ts(62, 0, null, null, 1, 'h3', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u0432 \u0440\u0435\u043c\u043e\u043d\u0442'
            ])),
            (t()(), Ts(64, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              ' \u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f \u0432 \u0440\u0435\u043c\u043e\u043d\u0442 (\u0432 \u0442\u043e\u043c \u0447\u0438\u0441\u043b\u0435 \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0439\u043d\u044b\u0439) \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0437\u0430 \u0441\u0447\u0435\u0442 \u041a\u043b\u0438\u0435\u043d\u0442\u0430. \u041e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0437\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0443 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f \u0432 \u0421\u0435\u0440\u0432\u0438\u0441\u043d\u044b\u0439 \u0446\u0435\u043d\u0442\u0440 Optimus \u043d\u0435\u0441\u0435\u0442 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u0435\u043b\u044c. '
            ])),
            (t()(), Ts(66, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              ' \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0438 \u0432\u043b\u043e\u0436\u0438\u0442\u044c \u0410\u043a\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f \u0432 \u0440\u0435\u043c\u043e\u043d\u0442. '
            ])),
            (t()(), Ts(68, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              ' \u041e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442\u0441\u044f \u0432 \u0447\u0438\u0441\u0442\u043e\u043c \u0432\u0438\u0434\u0435 \u0441 \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u0435\u043c: '
            ])),
            (t()(), Ts(70, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              ' - \u0434\u0435\u0444\u0435\u043a\u0442\u043e\u0432 \u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u0439 \u0438\u0445 \u043f\u0440\u043e\u044f\u0432\u043b\u0435\u043d\u0438\u044f; '
            ])),
            (t()(), Ts(72, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              ' - \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0442\u043d\u043e\u0441\u0442\u044c \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f; '
            ])),
            (t()(), Ts(74, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              ' - \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u043e\u0435 \u043b\u0438\u0446\u043e \u0441 \u043d\u043e\u043c\u0435\u0440\u043e\u043c \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u043e\u0433\u043e \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430. '
            ])),
            (t()(), Ts(76, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              ' \u041f\u0440\u0438 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0438 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u0434\u0435\u0444\u0435\u043a\u0442\u0430\u0445 \u0422\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0426\u0435\u043d\u0442\u0440 \u0432\u043f\u0440\u0430\u0432\u0435 \u043e\u0442\u043a\u0430\u0437\u0430\u0442\u044c \u0432 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u0438 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f. \u0422\u0430\u043a\u0436\u0435 \u043d\u0435 \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0440\u0435\u043c\u043e\u043d\u0442 \u043d\u0435\u0438\u0441\u043f\u0440\u0430\u0432\u043d\u043e\u0441\u0442\u0435\u0439 \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0445 \u0432 \u0430\u043a\u0442\u0435. '
            ])),
            (t()(), Ts(78, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              ' \u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u0430 \u043a\u0430\u043a \u0447\u0435\u0440\u0435\u0437 \u0434\u0438\u043b\u0435\u0440\u0430, \u0443 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0431\u044b\u043b\u043e \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0442\u0435\u043d\u043e \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435, \u0442\u0430\u043a \u0438 \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e, \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0422\u041a. '
            ])),
            (t()(), Ts(80, 0, null, null, 1, 'h3', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e:'
            ])),
            (t()(), Ts(82, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              ' \u0413\u0430\u0440\u0430\u043d\u0442\u0438\u044f \u043d\u0430 \u0432\u0441\u0435 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435 Optimus 37 \u043c\u0435\u0441\u044f\u0446\u0435\u0432 '
            ])),
            (t()(), Ts(84, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              ' \u0420\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u0432 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0430\u0445 \u0442\u043e\u0432\u0430\u0440\u043e\u0432 \u043d\u0430 \u0432\u043a\u043b\u0430\u0434\u043a\u0435 \u0424\u0430\u0439\u043b\u044b \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f \u0432 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0435 \u0441\u0430\u0439\u0442\u0430 '
            ])),
            (t()(), Ts(86, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              ' \u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f \u0432 \u0440\u0435\u043c\u043e\u043d\u0442 (\u0432 \u0442\u043e\u043c \u0447\u0438\u0441\u043b\u0435 \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0439\u043d\u044b\u0439) \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0437\u0430 \u0441\u0447\u0435\u0442 \u041a\u043b\u0438\u0435\u043d\u0442\u0430. \u041e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0437\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0443 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f \u0432 \u0421\u0435\u0440\u0432\u0438\u0441\u043d\u044b\u0439 \u0446\u0435\u043d\u0442\u0440 Optimus \u043d\u0435\u0441\u0435\u0442 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u0435\u043b\u044c. '
            ])),
            (t()(), Ts(88, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              ' \u041f\u043e \u0432\u043e\u043f\u0440\u043e\u0441\u0430\u043c \u0440\u0435\u043c\u043e\u043d\u0442\u0430 (\u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430, \u043f\u0440\u043e\u0434\u0435\u043b\u0430\u043d\u043d\u043e\u0433\u043e \u0440\u0435\u043c\u043e\u043d\u0442\u0430) \u0438 \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0439\u043d\u043e\u0433\u043e \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u044f \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044c \u0432 \u0441\u0435\u0440\u0432\u0438\u0441\u043d\u044b\u0439 \u0446\u0435\u043d\u0442\u0440: '
            ])),
            (t()(), Ts(90, 0, null, null, 1, 'h3', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u041d\u0430 \u0442\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u0438 \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0438 \u0411\u0435\u043b\u0430\u0440\u0443\u0441\u044c:'
            ])),
            (t()(), Ts(92, 0, null, null, 1, 'strong', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u0427\u041f \u201c\u041c\u043e\u0431\u0438\u041b\u0410\u0411 \u0421\u0426\u201d, \u0433. \u041c\u0438\u043d\u0441\u043a'
            ])),
            (t()(), Ts(94, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(), Hs(-1, null, ['\u041f\u043e\u0447\u0442\u0430: info@mobilab.by'])),
            (t()(), Ts(96, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(), Hs(-1, null, ['\u0421\u0430\u0439\u0442: www.mobilab.by'])),
            (t()(), Ts(98, 0, null, null, 23, 'strong', [], null, null, null, null, null)),
            (t()(), Ts(99, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              ' \u0426\u0435\u043d\u0442\u0440 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u044f \u044e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043b\u0438\u0446 \u0438 \u0418\u041f(\u0442\u043e\u0440\u0433\u0443\u044e\u0449\u0438\u0435 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438) \u0422\u0435\u043b\u0435\u0444\u043e\u043d: '
            ])),
            (t()(), Ts(101, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(), Hs(-1, null, [' +375 (17) 362 76 84 (\u0433\u043e\u0440.) '])),
            (t()(), Hs(-1, null, [' +375 (33) 333 23 23 (\u041c\u0422\u0421) '])),
            (t()(), Ts(104, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(), Hs(-1, null, [' +375 (44) 7 751 751 (Velcom) '])),
            (t()(), Ts(106, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              ' \u0410\u0434\u0440\u0435\u0441: \u041c\u0438\u043d\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d \u041d\u043e\u0432\u043e\u0434\u0432\u043e\u0440\u0441\u043a\u0438\u0439 \u0441/\u0441 33/1-8, \u0440\u0430\u0439\u043e\u043d \u0434. \u0411\u043e\u043b\u044c\u0448\u043e\u0435 \u0421\u0442\u0438\u043a\u043b\u0435\u0432\u043e '
            ])),
            (t()(), Ts(108, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              ' \u0412\u0440\u0435\u043c\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 9 \u0434\u043e 18.30 \u043f\u043e \u043c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u043e\u043c\u0443 \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0432 \u0440\u0430\u0431\u043e\u0447\u0438\u0435 \u0434\u043d\u0438 '
            ])),
            (t()(), Ts(110, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              ' \u0426\u0435\u043d\u0442\u0440 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u044f \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043b\u0438\u0446(\u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u0438) '
            ])),
            (t()(), Ts(112, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(), Hs(-1, null, [' \u0422\u0435\u043b\u0435\u0444\u043e\u043d: '])),
            (t()(), Ts(114, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(), Hs(-1, null, [' +375 (29) 272 22 21 (\u041c\u0422\u0421) '])),
            (t()(), Ts(116, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(), Hs(-1, null, [' +375 (29) 136 66 69 (Velcom) '])),
            (t()(), Ts(118, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              ' \u0410\u0434\u0440\u0435\u0441: \u043f\u0440. \u041d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438, \u0434. 46 \u0411, \u043f\u043e\u043c. 1-\u041d '
            ])),
            (t()(), Ts(120, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              ' \u0412\u0440\u0435\u043c\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 10 \u0434\u043e 19 \u043f\u043e \u043c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u043e\u043c\u0443 \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0432 \u0440\u0430\u0431\u043e\u0447\u0438\u0435 \u0434\u043d\u0438 '
            ]))
          ],
          null,
          null
        );
      }
      function Bd(t) {
        return Bs(
          0,
          [
            (t()(), Ts(0, 0, null, null, 1, 'app-page-support', [], null, null, null, qd, zd)),
            Ql(1, 114688, null, 0, Hd, [], null, null)
          ],
          function(t, n) {
            t(n, 1, 0);
          },
          null
        );
      }
      var Gd = Sl('app-page-support', Hd, Bd, {}, {}, []);
      class Kd {
        constructor() {}
        ngOnInit() {}
      }
      var Wd = He({
        encapsulation: 0,
        styles: [
          [
            '*[_ngcontent-%COMP%]{box-sizing:border-box}.section[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto 20px}.title-wrapper[_ngcontent-%COMP%]{position:relative}.title-wrapper[_ngcontent-%COMP%]:after{content:"";background:#dcdcdc;position:absolute;left:0;top:50%;margin-top:-.5px;display:block;width:100%;height:1px;z-index:-1}.text[_ngcontent-%COMP%]{background:#fff;margin:15px 20px;padding:0 10px;display:inline-block;text-transform:uppercase;font-family:Arial,sans-serif;color:#494940}img[_ngcontent-%COMP%]{max-width:230px;width:100%}.catalog_list[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,auto);grid-gap:10px;padding:0 10px}@media (max-width:1200px){.catalog_list[_ngcontent-%COMP%]{grid-template-columns:repeat(3,auto)}}@media (max-width:800px){.catalog_list[_ngcontent-%COMP%]{grid-template-columns:repeat(2,auto)}}@media (max-width:560px){.catalog_list[_ngcontent-%COMP%]{grid-template-columns:repeat(1,auto);margin:0 auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}}.catalog_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{display:grid;padding:10px;background-color:#fafafa;border:1px solid #e0e0e0;box-shadow:inset 0 1px 1px #fff;border-radius:5px;-webkit-transition:.5s;transition:.5s}.catalog_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover{border:1px solid #ff4800;-webkit-transform:scale(1.03);transform:scale(1.03)}.catalog_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{display:grid;justify-items:center}.catalog_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{align-self:end;justify-self:center}.catalog_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{align-self:center}'
          ]
        ],
        data: {}
      });
      function Zd(t) {
        return Bs(
          0,
          [
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(2, 0, null, null, 2, 'h2', [['class', 'title']], null, null, null, null, null)),
            (t()(),
            Ts(3, 0, null, null, 1, 'span', [['class', 'text']], null, null, null, null, null)),
            (t()(), Hs(-1, null, ['\u041a\u043b\u0438\u0435\u043d\u0442\u044b'])),
            (t()(),
            Ts(
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
            (t()(),
            Ts(6, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
              8,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/customers/001.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ts(9, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(), Hs(-1, null, ['WebStudio MoonWay'])),
            (t()(),
            Ts(11, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
              13,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/customers/002.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ts(14, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u0422\u0438\u043f\u043e\u0433\u0440\u0430\u0444\u0438\u044f "\u0423\u0441\u043b\u0443\u0433\u0438"'
            ])),
            (t()(),
            Ts(16, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
              18,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/customers/003.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ts(19, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(), Hs(-1, null, ['ColoritPak'])),
            (t()(),
            Ts(21, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
              23,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/customers/004.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ts(24, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(), Hs(-1, null, ['Mercedes-Benz'])),
            (t()(),
            Ts(26, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
              28,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/customers/005.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ts(29, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(), Hs(-1, null, ['Natusana'])),
            (t()(),
            Ts(31, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
              33,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/customers/006.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ts(34, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u0422\u0426 "\u041d\u0430 \u0413\u043e\u043b\u043e\u0434\u0435\u0434\u0430"'
            ])),
            (t()(),
            Ts(36, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
              38,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/customers/007.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ts(39, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u041a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u0438\u0432\u0421\u0442\u0440\u043e\u0439'
            ])),
            (t()(),
            Ts(41, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
              43,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/customers/008.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ts(44, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, ['\u041e\u0442\u0435\u043b\u044c "\u041c\u0438\u043d\u0441\u043a"'])),
            (t()(),
            Ts(46, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
              48,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/customers/009.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ts(49, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(), Hs(-1, null, ['Natusana'])),
            (t()(),
            Ts(51, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
              53,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/customers/010.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ts(54, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u0422\u0426 "\u041d\u0430 \u0413\u043e\u043b\u043e\u0434\u0435\u0434\u0430"'
            ])),
            (t()(),
            Ts(56, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
              58,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/customers/011.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ts(59, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u041a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u0438\u0432\u0421\u0442\u0440\u043e\u0439'
            ])),
            (t()(),
            Ts(61, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
              63,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/customers/012.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ts(64, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, ['\u041e\u0442\u0435\u043b\u044c "\u041c\u0438\u043d\u0441\u043a"'])),
            (t()(),
            Ts(66, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
              68,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/customers/013.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ts(69, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, ['\u0410\u0442\u043b\u0430\u0441 \u0422\u0435\u0445\u043d\u043e'])),
            (t()(),
            Ts(71, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
              73,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/customers/014.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ts(74, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(), Hs(-1, null, ['\u0416\u0421\u041f\u041a \u2116832'])),
            (t()(),
            Ts(76, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
              78,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/customers/015.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ts(79, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u0416\u041a\u0425 \u0412\u0438\u0442\u0435\u0431\u0441\u043a\u043e\u0439 \u043e\u0431\u0441\u043b\u0430\u0441\u0442\u0438'
            ])),
            (t()(),
            Ts(81, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
              83,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/customers/016.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ts(84, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(), Hs(-1, null, ['\u0416\u0421\u041f\u041a \u2116648'])),
            (t()(),
            Ts(86, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
              88,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/customers/017.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ts(89, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u0417\u0430\u0432\u043e\u0434 \u0432\u0438\u043d\u043e\u0433\u0440\u0430\u0434\u043d\u044b\u0445 \u0432\u0438\u043d'
            ])),
            (t()(),
            Ts(91, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
              93,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/customers/018.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ts(94, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u041e\u0442\u0434\u0435\u043b \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u044f'
            ])),
            (t()(),
            Ts(96, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
              98,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/customers/019.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ts(99, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u0422\u0443\u0440\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u043f\u043e\u0440\u0442\u0430\u043b'
            ])),
            (t()(),
            Ts(101, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
              103,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/customers/020.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ts(104, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u041e\u041e\u041e "\u0412\u0438\u0432\u0430\u0421\u0442\u0440\u043e\u0439"'
            ])),
            (t()(),
            Ts(106, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
              108,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/customers/021.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ts(109, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, ['\u0416\u0421\u041f\u041a "\u041e\u0437\u0435\u0440\u0446\u043e"'])),
            (t()(),
            Ts(111, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
              113,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/customers/022.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ts(114, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(), Hs(-1, null, ['"\u0411\u0435\u043b\u0422\u0430\u043c\u043e"'])),
            (t()(),
            Ts(116, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
              118,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/customers/023.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ts(119, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442\u0438\u043b\u044c'
            ])),
            (t()(),
            Ts(121, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
              123,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/customers/024.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ts(124, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u0436\u0435\u043d\u0441\u043a\u0438\u0445 \u0441\u0443\u043e\u043c\u043a'
            ])),
            (t()(),
            Ts(126, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
              128,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/customers/025.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ts(129, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(), Hs(-1, null, ['\u0416\u0421\u041f\u041a'])),
            (t()(),
            Ts(131, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
              133,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/customers/026.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ts(134, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u0421\u0430\u043b\u043e\u043d \u043a\u0440\u0430\u0441\u043e\u0442\u044b'
            ])),
            (t()(),
            Ts(136, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
              138,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/customers/027.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ts(139, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u0412\u0438\u0442\u0430\u043c\u0438\u043d\u043d\u044b\u0439 \u0437\u0430\u0432\u043e\u0434'
            ])),
            (t()(),
            Ts(141, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
              143,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/customers/028.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ts(144, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b'
            ])),
            (t()(),
            Ts(146, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
              148,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/customers/029.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ts(149, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u0414\u0435\u043f\u0430\u0440\u0442\u0430\u043c\u0435\u043d\u0442 \u041e\u0445\u0440\u0430\u043d\u044b'
            ])),
            (t()(),
            Ts(151, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
              153,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/customers/030.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ts(154, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(), Hs(-1, null, ['\u0422\u0414 "\u042d\u043b\u0438\u0441"'])),
            (t()(),
            Ts(156, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
              158,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/customers/031.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ts(159, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(), Hs(-1, null, ['\u041c\u0438\u043d\u0441\u043a\u0442\u0440\u0430\u043d\u0441'])),
            (t()(),
            Ts(161, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
              163,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/customers/032.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ts(164, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(), Hs(-1, null, ['\u041e\u041e\u041e "\u0411\u0435\u043b\u041b\u041f\u0417"'])),
            (t()(),
            Ts(166, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
              168,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/customers/033.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), Ts(169, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(), Hs(-1, null, ['ADANI']))
          ],
          null,
          null
        );
      }
      class Qd {
        constructor() {}
        ngOnInit() {}
      }
      var Yd = He({ encapsulation: 0, styles: [['']], data: {} });
      function Jd(t) {
        return Bs(
          0,
          [
            (t()(), Ts(0, 0, null, null, 1, 'app-customers', [], null, null, null, Zd, Wd)),
            Ql(1, 114688, null, 0, Kd, [], null, null)
          ],
          function(t, n) {
            t(n, 1, 0);
          },
          null
        );
      }
      function Xd(t) {
        return Bs(
          0,
          [
            (t()(), Ts(0, 0, null, null, 1, 'app-page-clients', [], null, null, null, Jd, Yd)),
            Ql(1, 114688, null, 0, Qd, [], null, null)
          ],
          function(t, n) {
            t(n, 1, 0);
          },
          null
        );
      }
      var tp = Sl('app-page-clients', Qd, Xd, {}, {}, []);
      class np {
        constructor() {}
        ngOnInit() {}
      }
      var ep = He({
        encapsulation: 0,
        styles: [
          [
            '*[_ngcontent-%COMP%]{box-sizing:border-box}img[_ngcontent-%COMP%]{max-width:540px;width:100%}.article[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto 20px}.title_wrapper[_ngcontent-%COMP%]{position:relative}.title_wrapper[_ngcontent-%COMP%]:after{content:"";background:#dcdcdc;position:absolute;left:0;top:50%;margin-top:-.5px;display:block;width:100%;height:1px;z-index:-1}.text[_ngcontent-%COMP%]{background:#fff;margin:15px 20px;padding:0 10px;display:inline-block;text-transform:uppercase;font-family:Arial,sans-serif;color:#494940}.article_content[_ngcontent-%COMP%]{padding:0 10px}.article_title[_ngcontent-%COMP%], .button[_ngcontent-%COMP%]{cursor:pointer;white-space:pre;text-decoration:none;outline:0;color:#494940;-webkit-transition:.2s;transition:.2s;border:0;font-size:16px;border-radius:5px}.article_title[_ngcontent-%COMP%]:hover, .button[_ngcontent-%COMP%]:hover{color:#ff4800}.button[_ngcontent-%COMP%]{display:block;margin-left:auto}.button[_ngcontent-%COMP%]:hover{color:#fff;background:#444645}'
          ]
        ],
        data: {}
      });
      function lp(t) {
        return Bs(
          0,
          [
            (t()(), Ts(0, 0, null, null, 23, 'div', [], null, null, null, null, null)),
            (t()(), Ts(1, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              ' IP-\u0432\u0438\u0434\u0435\u043e\u043a\u0430\u043c\u0435\u0440\u0430 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0435\u0434\u0438\u043d\u044f\u044e\u0442\u0441\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043a\u0430\u043c\u0435\u0440\u044b \u0438 \u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u043e\u0433\u043e \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044f. \u0414\u0440\u0443\u0433\u0438\u043c\u0438 \u0441\u043b\u043e\u0432\u0430\u043c\u0438, \u044d\u0442\u043e \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0432\u0438\u0434\u0435\u043e\u043a\u0430\u043c\u0435\u0440\u044b \u0438 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0430. \u0412 \u0434\u0430\u043d\u043d\u044b\u0445 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430\u0445 \u043f\u043e\u0442\u043e\u043a \u0432\u0438\u0434\u0435\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0435\u0442\u0441\u044f \u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e IP-\u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0430 \u0432 \u0446\u0438\u0444\u0440\u043e\u0432\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435. \u0422\u0430\u043a \u043a\u0430\u043a \u0432 \u044d\u0442\u043e\u043c \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0441\u0435\u0442\u044c Ethernet, \u043a\u0430\u0436\u0434\u043e\u0439 \u043a\u0430\u043c\u0435\u0440\u0435 \u043f\u0440\u0438\u0441\u0432\u0430\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0430\u0434\u0440\u0435\u0441. \u0413\u043b\u0430\u0432\u043d\u043e\u0435 \u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u043e \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432 \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0442\u0438\u043f\u0430 \u2013 \u0432\u044b\u0441\u043e\u043a\u043e\u0435 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u0435\u0442\u0441\u044f \u043d\u0430 \u043c\u043e\u043d\u0438\u0442\u043e\u0440. '
            ])),
            (t()(), Ts(3, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              ' \u041d\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f\u0448\u043d\u0438\u0439 \u0434\u0435\u043d\u044c \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u0438 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432 \u0434\u043b\u044f \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u044e\u0442 \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u044f\u043c \u0431\u043e\u043b\u044c\u0448\u043e\u0435 \u0440\u0430\u0437\u043d\u043e\u043e\u0431\u0440\u0430\u0437\u0438\u0435 \u043a\u0430\u043c\u0435\u0440, \u0440\u0430\u0437\u043e\u0431\u0440\u0430\u0442\u044c\u0441\u044f \u0432 \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u044f\u0445 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043f\u043e\u0434 \u0441\u0438\u043b\u0443 \u043d\u0435 \u043a\u0430\u0436\u0434\u043e\u043c\u0443 \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0443. \u0421 \u0443\u0447\u0435\u0442\u043e\u043c \u0448\u0438\u0440\u043e\u043a\u043e\u0433\u043e \u0430\u0441\u0441\u043e\u0440\u0442\u0438\u043c\u0435\u043d\u0442\u0430 \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u0438 \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0432\u044b\u0434\u0435\u043b\u0438\u0442\u044c \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0443\u0436\u043d\u043e \u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0432 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u043f\u043e\u043a\u0443\u043f\u043e\u043a. '
            ])),
            (t()(), Ts(5, 0, null, null, 1, 'h3', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u0427\u0442\u043e \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0443\u0447\u0435\u0441\u0442\u044c \u043f\u0440\u0438 \u043f\u043e\u043a\u0443\u043f\u043a\u0435 \u043a\u0430\u043c\u0435\u0440\u044b?'
            ])),
            (t()(), Ts(7, 0, null, null, 3, 'p', [], null, null, null, null, null)),
            (t()(), Ts(8, 0, null, null, 1, 'strong', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u041f\u043e\u043a\u0443\u043f\u043a\u0430 IP-\u043a\u0430\u043c\u0435\u0440 \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f \u0432 \u041c\u0438\u043d\u0441\u043a\u0435'
            ])),
            (t()(),
            Hs(-1, null, [
              ' \u0434\u043e\u043b\u0436\u043d\u0430 \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0442\u044c\u0441\u044f \u0441 \u0443\u0447\u0435\u0442\u043e\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432: '
            ])),
            (t()(), Ts(11, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              ' \u0423\u0447\u0430\u0441\u0442\u043e\u043a, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043a\u0430\u043c\u0435\u0440\u0443 (\u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435 \u0438\u043b\u0438 \u043d\u0430\u0440\u0443\u0436\u043d\u043e\u0435 \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432 \u2013 \u043e\u0442 \u044d\u0442\u043e\u0433\u043e \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u044c \u0437\u0430\u0449\u0438\u0442\u044b \u043e\u0442 \u043c\u0435\u0445\u0430\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0438 \u043a\u043b\u0438\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043f\u043e\u0432\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u0439). \u041a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u0435\u0442\u0441\u044f \u043d\u0430 \u043c\u043e\u043d\u0438\u0442\u043e\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f. \u0417\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0437\u0430\u0434\u0430\u0447\u0438, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043d\u0430\u0446\u0435\u043b\u0435\u043d\u043e \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u043c\u043e\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e. \u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u044c \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f. '
            ])),
            (t()(), Ts(13, 0, null, null, 4, 'p', [], null, null, null, null, null)),
            (t()(), Hs(-1, null, [' \u0422\u0430\u043a\u0436\u0435 '])),
            (t()(), Ts(15, 0, null, null, 1, 'strong', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0442\u0435\u043d\u0438\u0435'
            ])),
            (t()(),
            Hs(-1, null, [
              ' \u043a\u0430\u043c\u0435\u0440 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441 \u0443\u0447\u0435\u0442\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f. \u042d\u0442\u043e \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0435 \u0444\u043e\u0440\u043c\u0430\u0442\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0436\u043d\u043e \u0440\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u0442\u044c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u043e\u0433\u043e \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044f. \u041d\u0435 \u043b\u0438\u0448\u043d\u0435\u0439 \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438 \u043a\u0430\u043c\u0435\u0440\u044b \u043d\u0430 \u043d\u0435\u0441\u0430\u043d\u043a\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0435 \u0432\u043c\u0435\u0448\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e \u043f\u043e\u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0445 \u043b\u0438\u0447\u043d\u043e\u0441\u0442\u0435\u0439. '
            ])),
            (t()(), Ts(18, 0, null, null, 3, 'p', [], null, null, null, null, null)),
            (t()(), Ts(19, 0, null, null, 1, 'strong', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f IP-\u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f'
            ])),
            (t()(),
            Hs(-1, null, [
              ' \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u0430 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u0438 \u043d\u0430\u0448\u0435\u0439 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438. \u0423 \u043d\u0430\u0441 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u0435\u043d\u043d\u044b\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430 \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0445 \u0431\u0440\u0435\u043d\u0434\u043e\u0432. '
            ])),
            (t()(),
            Ts(
              22,
              0,
              null,
              null,
              1,
              'button',
              [['class', 'button']],
              null,
              [[null, 'click']],
              function(t, n, e) {
                var l = !0,
                  r = t.component;
                return 'click' === n && (l = 0 != (r.show = !r.show) && l), l;
              },
              null,
              null
            )),
            (t()(), Hs(-1, null, ['\u0441\u043a\u0440\u044b\u0442\u044c']))
          ],
          null,
          null
        );
      }
      function rp(t) {
        return Bs(
          0,
          [
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(2, 0, null, null, 2, 'h2', [['class', 'title']], null, null, null, null, null)),
            (t()(),
            Ts(3, 0, null, null, 1, 'span', [['class', 'text']], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u041a\u0430\u043a \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u0432\u044b\u0431\u0440\u0430\u0442\u044c IP \u043a\u0430\u043c\u0435\u0440\u044b'
            ])),
            (t()(),
            Ts(
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
            (t()(), Ts(6, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              ' IP-\u0432\u0438\u0434\u0435\u043e\u043a\u0430\u043c\u0435\u0440\u0430 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0435\u0434\u0438\u043d\u044f\u044e\u0442\u0441\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043a\u0430\u043c\u0435\u0440\u044b \u0438 \u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u043e\u0433\u043e \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044f. '
            ])),
            (t()(),
            Ts(
              8,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/news/ip-video-1.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            Ts(
              9,
              0,
              null,
              null,
              1,
              'h3',
              [['class', 'article_title']],
              null,
              [[null, 'click']],
              function(t, n, e) {
                var l = !0,
                  r = t.component;
                return 'click' === n && (l = 0 != (r.show = !r.show) && l), l;
              },
              null,
              null
            )),
            (t()(),
            Hs(-1, null, [
              '\u041a\u0430\u043a \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u0432\u044b\u0431\u0440\u0430\u0442\u044c IP \u043a\u0430\u043c\u0435\u0440\u044b ...'
            ])),
            (t()(), Ms(16777216, null, null, 1, null, lp)),
            Ql(12, 16384, null, 0, po, [Se, ke], { ngIf: [0, 'ngIf'] }, null)
          ],
          function(t, n) {
            t(n, 12, 0, n.component.show);
          },
          null
        );
      }
      class sp {
        constructor() {}
        ngOnInit() {}
      }
      var ip = He({
        encapsulation: 0,
        styles: [
          [
            '*[_ngcontent-%COMP%]{box-sizing:border-box}img[_ngcontent-%COMP%]{max-width:540px;width:100%}.article[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto 20px}.title_wrapper[_ngcontent-%COMP%]{position:relative}.title_wrapper[_ngcontent-%COMP%]:after{content:"";background:#dcdcdc;position:absolute;left:0;top:50%;margin-top:-.5px;display:block;width:100%;height:1px;z-index:-1}.text[_ngcontent-%COMP%]{background:#fff;margin:15px 20px;padding:0 10px;display:inline-block;text-transform:uppercase;font-family:Arial,sans-serif;color:#494940}.article_content[_ngcontent-%COMP%]{padding:0 10px}.article_title[_ngcontent-%COMP%], .button[_ngcontent-%COMP%]{cursor:pointer;white-space:pre;text-decoration:none;outline:0;color:#494940;-webkit-transition:.2s;transition:.2s;border:0;font-size:16px;border-radius:5px}.article_title[_ngcontent-%COMP%]:hover, .button[_ngcontent-%COMP%]:hover{color:#ff4800}.button[_ngcontent-%COMP%]{display:block;margin-left:auto}.button[_ngcontent-%COMP%]:hover{color:#fff;background:#444645}'
          ]
        ],
        data: {}
      });
      function op(t) {
        return Bs(
          0,
          [
            (t()(), Ts(0, 0, null, null, 31, 'div', [], null, null, null, null, null)),
            (t()(), Ts(1, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              ' \u0423\u0447\u0438\u0442\u044b\u0432\u0430\u044f \u0442\u043e\u0442 \u0444\u0430\u043a\u0442, \u0447\u0442\u043e \u0434\u0430\u0447\u0430 \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0436\u0438\u0432\u0430\u043d\u0438\u044f, \u043f\u043e\u0434\u0431\u043e\u0440 \u0438 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0442\u0435\u043d\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0447\u0435\u043d\u044c \u0432\u0430\u0436\u043d\u043e\u0439 \u0437\u0430\u0434\u0430\u0447\u0435\u0439 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0430 \u0437\u0430\u0433\u043e\u0440\u043e\u0434\u043d\u043e\u0433\u043e \u0434\u043e\u043c\u0430. \u0427\u0430\u0449\u0435 \u0432\u0441\u0435\u0433\u043e \u043f\u043e\u0434\u0431\u0438\u0440\u0430\u0435\u0442\u0441\u044f \u0442\u043e\u0442 \u0432\u0430\u0440\u0438\u0430\u043d\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043f\u0440\u043e\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u0438 \u043f\u043e \u043f\u0440\u0438\u0435\u0437\u0434\u0435 \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0430 \u043d\u0430 \u0434\u0430\u0447\u0443. \u0411\u0435\u0437\u0443\u0441\u043b\u043e\u0432\u043d\u043e, \u0442\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c \u043d\u0435 \u0443\u0434\u0430\u0435\u0442\u0441\u044f \u043e\u0442\u0440\u0435\u0430\u0433\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u0430 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044e \u0432 \u0441\u0440\u043e\u0447\u043d\u043e\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u0435, \u043e\u0434\u043d\u0430\u043a\u043e \u043d\u0435\u043f\u0440\u0430\u0432\u043e\u043c\u0435\u0440\u043d\u044b\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043b\u044e\u0434\u0435\u0439 \u0431\u0443\u0434\u0443\u0442 \u0437\u0430\u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043a\u0430\u043c\u0435\u0440\u044b. '
            ])),
            (t()(), Ts(3, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              ' \u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0442 \u0434\u0440\u0443\u0433\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u0438\u0441\u0442\u0435\u043c, \u043f\u0440\u0435\u0434\u043f\u043e\u043b\u0430\u0433\u0430\u044e\u0449\u0438\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043c\u0433\u043d\u043e\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u0440\u0435\u0430\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043d\u0430 \u0432\u043e\u0437\u043d\u0438\u043a\u0430\u044e\u0449\u0438\u0435 \u043d\u0435\u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u044b\u0435 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438. \u0412 \u0434\u0430\u043d\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0441\u0440\u043e\u0447\u043d\u043e\u0441\u0442\u044c \u0440\u0435\u0430\u043a\u0446\u0438\u0438 \u0445\u043e\u0437\u044f\u0438\u043d\u0430 \u0434\u0430\u0447\u0438 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u0432\u0438\u0441\u0435\u0442\u044c \u0438\u0441\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u0434\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u0434\u043e \u0437\u0430\u0433\u043e\u0440\u043e\u0434\u043d\u043e\u0433\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0438 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u043f\u0440\u0438\u0431\u044b\u0442\u044c \u043d\u0430 \u043c\u0435\u0441\u0442\u043e \u0432 \u043b\u044e\u0431\u043e\u0435 \u0432\u0440\u0435\u043c\u044f. '
            ])),
            (t()(), Ts(5, 0, null, null, 1, 'h3', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u041d\u0430 \u0447\u0442\u043e \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u044c \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435 \u043f\u0440\u0438 \u0432\u044b\u0431\u043e\u0440\u0435 \u043a\u0430\u043c\u0435\u0440?'
            ])),
            (t()(), Ts(7, 0, null, null, 4, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              ' \u041f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u043f\u043e\u0434\u043e\u0431\u0440\u0430\u0442\u044c '
            ])),
            (t()(), Ts(9, 0, null, null, 1, 'strong', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u0438 \u0432\u0438\u0434\u0435\u043e\u043a\u0430\u043c\u0435\u0440\u044b'
            ])),
            (t()(),
            Hs(-1, null, [
              ' \u0434\u043b\u044f \u0434\u0430\u0447\u0438 \u043b\u0443\u0447\u0448\u0435 \u0432\u0441\u0435\u0433\u043e \u043e\u0442\u0434\u0430\u0432\u0430\u0442\u044c \u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0442\u0435\u043d\u0438\u0435 \u0433\u043e\u0442\u043e\u0432\u044b\u043c \u0440\u0435\u0448\u0435\u043d\u0438\u044f\u043c, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0442\u043b\u0438\u0447\u0430\u044e\u0442\u0441\u044f \u043f\u0440\u043e\u0441\u0442\u043e\u0442\u043e\u0439 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0438 \u0434\u0435\u043c\u043e\u043a\u0440\u0430\u0442\u0438\u0447\u043d\u043e\u0439 \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c\u044e. '
            ])),
            (t()(), Ts(12, 0, null, null, 3, 'p', [], null, null, null, null, null)),
            (t()(), Ts(13, 0, null, null, 1, 'strong', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u0412\u044b\u0431\u043e\u0440 \u0441\u0438\u0441\u0442\u0435\u043c \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0434\u0430\u0447\u0438'
            ])),
            (t()(),
            Hs(-1, null, [
              ' \u043a\u0440\u0430\u0439\u043d\u0435 \u0432\u0430\u0436\u043d\u043e \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0438\u0442\u044c \u0441 \u0443\u0447\u0435\u0442\u043e\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a: '
            ])),
            (t()(), Ts(16, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              ' - \u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u0430\u043d\u0442\u0438\u0432\u0430\u043d\u0434\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u043e\u043a\u0440\u044b\u0442\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0434\u0435\u043b\u0430\u0435\u0442 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u0443\u0441\u0442\u043e\u0439\u0447\u0438\u0432\u044b\u043c \u043a \u0432\u043d\u0435\u0448\u043d\u0438\u043c \u043f\u043e\u0432\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u044f\u043c; '
            ])),
            (t()(), Ts(18, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '- \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e, \u043f\u0440\u0435\u0434\u043e\u0442\u0432\u0440\u0430\u0449\u0430\u044e\u0449\u0435\u0435 \u0432\u043b\u0438\u044f\u043d\u0438\u0435 \u0431\u043b\u0438\u043a\u043e\u0432 \u043e\u0442 \u0441\u043e\u043b\u043d\u0446\u0430 \u043d\u0430 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f;'
            ])),
            (t()(), Ts(20, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '- \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0437\u0430\u043f\u0438\u0441\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0432 \u043d\u043e\u0447\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0441\u0443\u0442\u043e\u043a;'
            ])),
            (t()(), Ts(22, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              ' - \u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0433\u043e \u0443\u0433\u043b\u0430 \u043e\u0431\u0437\u043e\u0440\u0430 \u043a\u0430\u043c\u0435\u0440\u044b \u0438 \u043f\u043e\u0432\u043e\u0440\u043e\u0442\u043e\u0432 (\u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u0439 \u0437\u0430\u0434\u0430\u0447\u0438 \u0438 \u043f\u043b\u043e\u0449\u0430\u0434\u0438, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043e\u0445\u0432\u0430\u0442\u0438\u0442\u044c \u043f\u0440\u0438 \u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0438). '
            ])),
            (t()(), Ts(24, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              ' \u041a\u0440\u043e\u043c\u0435 \u0442\u043e\u0433\u043e, \u043f\u0440\u0438 \u043f\u043e\u043a\u0443\u043f\u043a\u0435 \u0442\u0430\u043a\u0438\u0445 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432 \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0431\u0443\u0434\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u0434\u043b\u044f \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430. \u0417\u0430 \u044d\u0442\u043e \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f (\u0430\u043d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0435 \u043b\u0438\u0431\u043e \u0446\u0438\u0444\u0440\u043e\u0432\u044b\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u043a\u0430\u043c\u0435\u0440). '
            ])),
            (t()(), Ts(26, 0, null, null, 3, 'p', [], null, null, null, null, null)),
            (t()(), Ts(27, 0, null, null, 1, 'strong', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u041f\u0440\u043e\u0434\u0430\u0436\u0430 \u043a\u0430\u043c\u0435\u0440 \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f \u0432 \u041c\u0438\u043d\u0441\u043a\u0435'
            ])),
            (t()(),
            Hs(-1, null, [
              ' \u2013 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0435 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u043d\u0430\u0448\u0435\u0439 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438. \u0423 \u043d\u0430\u0441 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u044b \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u0441\u0438\u0441\u0442\u0435\u043c, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u043f\u043e\u0442\u0440\u0435\u0431\u043d\u043e\u0441\u0442\u044f\u043c \u0432\u0441\u0435\u0445 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0439 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432. '
            ])),
            (t()(),
            Ts(
              30,
              0,
              null,
              null,
              1,
              'button',
              [['class', 'button']],
              null,
              [[null, 'click']],
              function(t, n, e) {
                var l = !0,
                  r = t.component;
                return 'click' === n && (l = 0 != (r.show = !r.show) && l), l;
              },
              null,
              null
            )),
            (t()(), Hs(-1, null, ['\u0441\u043a\u0440\u044b\u0442\u044c']))
          ],
          null,
          null
        );
      }
      function up(t) {
        return Bs(
          0,
          [
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(2, 0, null, null, 2, 'h2', [['class', 'title']], null, null, null, null, null)),
            (t()(),
            Ts(3, 0, null, null, 1, 'span', [['class', 'text']], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u041a\u0430\u043a \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0434\u0430\u0447\u0438'
            ])),
            (t()(),
            Ts(
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
            (t()(), Ts(6, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              ' \u0423\u0447\u0438\u0442\u044b\u0432\u0430\u044f \u0442\u043e\u0442 \u0444\u0430\u043a\u0442, \u0447\u0442\u043e \u0434\u0430\u0447\u0430 \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0436\u0438\u0432\u0430\u043d\u0438\u044f, \u043f\u043e\u0434\u0431\u043e\u0440 \u0438 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0442\u0435\u043d\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0447\u0435\u043d\u044c \u0432\u0430\u0436\u043d\u043e\u0439 \u0437\u0430\u0434\u0430\u0447\u0435\u0439 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0430 \u0437\u0430\u0433\u043e\u0440\u043e\u0434\u043d\u043e\u0433\u043e \u0434\u043e\u043c\u0430. '
            ])),
            (t()(),
            Ts(
              8,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/news/Screenshot_1.jpg']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            Ts(
              9,
              0,
              null,
              null,
              1,
              'h3',
              [['class', 'article_title']],
              null,
              [[null, 'click']],
              function(t, n, e) {
                var l = !0,
                  r = t.component;
                return 'click' === n && (l = 0 != (r.show = !r.show) && l), l;
              },
              null,
              null
            )),
            (t()(),
            Hs(-1, null, [
              ' \u041a\u0430\u043a \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0434\u0430\u0447\u0438 ... '
            ])),
            (t()(), Ms(16777216, null, null, 1, null, op)),
            Ql(12, 16384, null, 0, po, [Se, ke], { ngIf: [0, 'ngIf'] }, null)
          ],
          function(t, n) {
            t(n, 12, 0, n.component.show);
          },
          null
        );
      }
      class ap {
        constructor() {}
        ngOnInit() {}
      }
      var cp = He({ encapsulation: 0, styles: [['']], data: {} });
      function hp(t) {
        return Bs(
          0,
          [
            (t()(),
            Ts(
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
              rp,
              ep
            )),
            Ql(1, 114688, null, 0, np, [], null, null),
            (t()(),
            Ts(
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
              up,
              ip
            )),
            Ql(3, 114688, null, 0, sp, [], null, null)
          ],
          function(t, n) {
            t(n, 1, 0), t(n, 3, 0);
          },
          null
        );
      }
      function dp(t) {
        return Bs(
          0,
          [
            (t()(), Ts(0, 0, null, null, 1, 'app-page-articles', [], null, null, null, hp, cp)),
            Ql(1, 114688, null, 0, ap, [], null, null)
          ],
          function(t, n) {
            t(n, 1, 0);
          },
          null
        );
      }
      var pp = Sl('app-page-articles', ap, dp, {}, {}, []);
      class gp {
        constructor() {}
        ngOnInit() {}
      }
      var fp = He({ encapsulation: 0, styles: [['']], data: {} });
      function mp(t) {
        return Bs(
          0,
          [
            (t()(), Ts(0, 0, null, null, 1, 'app-brands-sm', [], null, null, null, md, fd)),
            Ql(1, 114688, null, 0, gd, [], null, null)
          ],
          function(t, n) {
            t(n, 1, 0);
          },
          null
        );
      }
      function _p(t) {
        return Bs(
          0,
          [
            (t()(), Ts(0, 0, null, null, 1, 'app-page-brands', [], null, null, null, mp, fp)),
            Ql(1, 114688, null, 0, gp, [], null, null)
          ],
          function(t, n) {
            t(n, 1, 0);
          },
          null
        );
      }
      var vp = Sl('app-page-brands', gp, _p, {}, {}, []);
      class yp {
        constructor() {
          (this.load = new _r()),
            (this.baloon = new _r()),
            (this.yaclick = new _r()),
            (this.drag = new _r()),
            (this.hint = new _r()),
            (this.mouse = new _r()),
            (this.multitouch = new _r());
        }
        ngOnInit() {
          this._logErrors();
        }
        _logErrors() {
          this.geometry ||
            (console.error('Placemark: geometry input is required.'), (this.geometry = []));
        }
        initPlacemark(t, n) {
          const e = new t.Placemark(this.geometry, this.properties, this.options);
          return n.geoObjects.add(e), this.emitEvents(t, e), e;
        }
        emitEvents(t, n) {
          this.load.emit({ ymaps: t, instance: n }),
            n.events.add(['balloonopen', 'balloonclose'], e =>
              this.baloon.emit({ ymaps: t, instance: n, type: e.originalEvent.type, event: e })
            ),
            n.events.add(['click', 'dblclick'], e =>
              this.yaclick.emit({ ymaps: t, instance: n, type: e.originalEvent.type, event: e })
            ),
            n.events.add(['dragstart', 'dragend'], e =>
              this.drag.emit({ ymaps: t, instance: n, type: e.originalEvent.type, event: e })
            ),
            n.events.add(['hintopen', 'hintclose'], e =>
              this.hint.emit({ ymaps: t, instance: n, type: e.originalEvent.type, event: e })
            ),
            n.events.add(['mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseup'], e =>
              this.mouse.emit({ ymaps: t, instance: n, type: e.originalEvent.type, event: e })
            ),
            n.events.add(['multitouchstart', 'multitouchmove', 'multitouchend'], e =>
              this.multitouch.emit({ ymaps: t, instance: n, type: e.originalEvent.type, event: e })
            );
        }
      }
      let wp = (() => {
        class t {
          constructor(t, n) {
            (this.document = n), (this._apiKey = t);
          }
          initScript() {
            if (!this._scriptYmaps) {
              const t = this.document.createElement('script');
              (t.src = `https://api-maps.yandex.ru/2.1/?apikey=${this._apiKey}&lang=ru_RU`),
                (this._scriptYmaps = this.document.body.appendChild(t));
            }
            return 'ymaps' in window
              ? G(ymaps.ready()).pipe(H(() => ymaps))
              : (function t(n, e, r, s) {
                  return (
                    l(r) && ((s = r), (r = void 0)),
                    s
                      ? t(n, e, r).pipe(H(t => (u(t) ? s(...t) : s(t))))
                      : new b(t => {
                          !(function t(n, e, l, r, s) {
                            let i;
                            if (
                              (function(t) {
                                return (
                                  t &&
                                  'function' == typeof t.addEventListener &&
                                  'function' == typeof t.removeEventListener
                                );
                              })(n)
                            ) {
                              const t = n;
                              n.addEventListener(e, l, s),
                                (i = () => t.removeEventListener(e, l, s));
                            } else if (
                              (function(t) {
                                return t && 'function' == typeof t.on && 'function' == typeof t.off;
                              })(n)
                            ) {
                              const t = n;
                              n.on(e, l), (i = () => t.off(e, l));
                            } else if (
                              (function(t) {
                                return (
                                  t &&
                                  'function' == typeof t.addListener &&
                                  'function' == typeof t.removeListener
                                );
                              })(n)
                            ) {
                              const t = n;
                              n.addListener(e, l), (i = () => t.removeListener(e, l));
                            } else {
                              if (!n || !n.length) throw new TypeError('Invalid event target');
                              for (let i = 0, o = n.length; i < o; i++) t(n[i], e, l, r, s);
                            }
                            r.add(i);
                          })(
                            n,
                            e,
                            function(n) {
                              t.next(
                                arguments.length > 1 ? Array.prototype.slice.call(arguments) : n
                              );
                            },
                            t,
                            r
                          );
                        })
                  );
                })(this._scriptYmaps, 'load').pipe(ru(() => G(ymaps.ready()).pipe(H(() => ymaps))));
          }
        }
        return (
          (t.ngInjectableDef = pt({
            factory: function() {
              return new t(Rt('API_KEY', 8), Rt(_o));
            },
            token: t,
            providedIn: 'root'
          })),
          t
        );
      })();
      class bp {
        constructor(t) {
          (this._yandexMapService = t),
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
        ngOnInit() {
          this._yandexMapService
            .initScript()
            .pipe(Jo(1))
            .subscribe(t => {
              if (this.onlyInstance) return void this.load.emit({ ymaps: t });
              this._logErrors();
              const n = this._createMap(t, `f${(~~(1e8 * Math.random())).toString(16)}`);
              this.emitEvents(t, n), this._addObjectsOnMap(t, n);
            });
        }
        _logErrors() {
          this.center || (console.error('Map: center input is required.'), (this.center = []));
        }
        _createMap(t, n) {
          return (
            this.mapContainer.nativeElement.setAttribute('id', n),
            new t.Map(
              n,
              Object.assign({}, this.state, { zoom: this.zoom, center: this.center }),
              this.options
            )
          );
        }
        _addObjectsOnMap(t, n) {
          const e = [];
          this.placemarks.forEach(l => {
            e.push(l.initPlacemark(t, n));
          }),
            this.clusterer && this._createClusterer(t, n, e),
            this.multiroutes.forEach(e => {
              e.initMultiroute(t, n);
            }),
            this.geoObjects.forEach(e => {
              e.initGeoObject(t, n);
            }),
            this.controls.forEach(e => {
              e.initControl(t, n);
            });
        }
        _createClusterer(t, n, e) {
          const l = new t.Clusterer(this.clusterer);
          l.add(e), n.geoObjects.add(l);
        }
        emitEvents(t, n) {
          this.load.emit({ ymaps: t, instance: n }),
            n.events.add(['actionbegin', 'actionend'], e =>
              this.action.emit({ ymaps: t, instance: n, type: e.originalEvent.type, event: e })
            ),
            n.events.add(['balloonopen', 'balloonclose'], e =>
              this.baloon.emit({ ymaps: t, instance: n, type: e.originalEvent.type, event: e })
            ),
            n.events.add(['click', 'dblclick'], e =>
              this.yaclick.emit({ ymaps: t, instance: n, type: e.originalEvent.type, event: e })
            ),
            n.events.add(['hintopen', 'hintclose'], e =>
              this.hint.emit({ ymaps: t, instance: n, type: e.originalEvent.type, event: e })
            ),
            n.events.add(['mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseup'], e =>
              this.mouse.emit({ ymaps: t, instance: n, type: e.originalEvent.type, event: e })
            ),
            n.events.add(['multitouchstart', 'multitouchmove', 'multitouchend'], e =>
              this.multitouch.emit({ ymaps: t, instance: n, type: e.originalEvent.type, event: e })
            );
        }
      }
      class Cp {
        static forRoot(t) {
          return { ngModule: Cp, providers: [{ provide: 'API_KEY', useValue: t }] };
        }
      }
      var xp = He({
        encapsulation: 0,
        styles: ['.container[_ngcontent-%COMP%]{width:100%;height:100%}'],
        data: {}
      });
      function kp(t) {
        return Bs(
          0,
          [
            Vs(402653184, 1, { mapContainer: 0 }),
            (t()(),
            Ts(
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
      var Ep = He({ encapsulation: 0, styles: [''], data: {} });
      function Sp(t) {
        return Bs(0, [], null, null);
      }
      class Op {
        constructor() {
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
        ngOnInit() {}
      }
      var Pp = He({
        encapsulation: 0,
        styles: [
          [
            '*[_ngcontent-%COMP%]{box-sizing:border-box}.section[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto 20px}.title-wrapper[_ngcontent-%COMP%]{position:relative}.title-wrapper[_ngcontent-%COMP%]:after{content:"";background:#dcdcdc;position:absolute;left:0;top:50%;margin-top:-.5px;display:block;width:100%;height:1px;z-index:-1}.text[_ngcontent-%COMP%]{background:#fff;margin:15px 20px;padding:0 10px;display:inline-block;text-transform:uppercase;font-family:Arial,sans-serif;color:#494940}.map_container[_ngcontent-%COMP%]{width:100%;height:500px}'
          ]
        ],
        data: {}
      });
      function Mp(t) {
        return Bs(
          0,
          [
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(2, 0, null, null, 2, 'h2', [['class', 'title']], null, null, null, null, null)),
            (t()(),
            Ts(3, 0, null, null, 1, 'span', [['class', 'text']], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u0421\u0445\u0435\u043c\u0430 \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044f'
            ])),
            (t()(),
            Ts(
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
            (t()(), Ts(6, 0, null, null, 12, 'angular-yandex-map', [], null, null, null, kp, xp)),
            Ql(
              7,
              114688,
              null,
              4,
              bp,
              [wp],
              { center: [0, 'center'], zoom: [1, 'zoom'], clusterer: [2, 'clusterer'] },
              null
            ),
            Vs(603979776, 1, { placemarks: 1 }),
            Vs(603979776, 2, { multiroutes: 1 }),
            Vs(603979776, 3, { geoObjects: 1 }),
            Vs(603979776, 4, { controls: 1 }),
            $s(12, 2),
            (t()(),
            Ts(13, 0, null, null, 2, 'angular-yandex-placemark', [], null, null, null, Sp, Ep)),
            Ql(
              14,
              114688,
              [[1, 4]],
              0,
              yp,
              [],
              { geometry: [0, 'geometry'], properties: [1, 'properties'], options: [2, 'options'] },
              null
            ),
            $s(15, 2),
            (t()(),
            Ts(16, 0, null, null, 2, 'angular-yandex-placemark', [], null, null, null, Sp, Ep)),
            Ql(
              17,
              114688,
              [[1, 4]],
              0,
              yp,
              [],
              { geometry: [0, 'geometry'], options: [1, 'options'] },
              null
            ),
            $s(18, 2)
          ],
          function(t, n) {
            var e = n.component,
              l = t(n, 12, 0, 55.178214, 30.234987);
            t(n, 7, 0, l, 16, e.clusterer);
            var r = t(n, 15, 0, 55.178214, 30.234987);
            t(n, 14, 0, r, e.placemarkPropertiesVSTU, e.placemarkOptions);
            var s = t(n, 18, 0, 53.915512, 27.513412);
            t(n, 17, 0, s, e.placemarkOptions);
          },
          null
        );
      }
      class Tp extends $ {
        constructor(t, n) {
          super(t), (this.sources = n), (this.completed = 0), (this.haveValues = 0);
          const e = n.length;
          this.values = new Array(e);
          for (let l = 0; l < e; l++) {
            const t = F(this, n[l], null, l);
            t && this.add(t);
          }
        }
        notifyNext(t, n, e, l, r) {
          (this.values[e] = n), r._hasValue || ((r._hasValue = !0), this.haveValues++);
        }
        notifyComplete(t) {
          const { destination: n, haveValues: e, values: l } = this,
            r = l.length;
          t._hasValue
            ? (this.completed++, this.completed === r && (e === r && n.next(l), n.complete()))
            : n.complete();
        }
      }
      const Ap = new Et('NgValueAccessor'),
        Ip = new Et('CompositionEventMode');
      class Rp {
        constructor(t, n, e) {
          (this._renderer = t),
            (this._elementRef = n),
            (this._compositionMode = e),
            (this.onChange = t => {}),
            (this.onTouched = () => {}),
            (this._composing = !1),
            null == this._compositionMode &&
              (this._compositionMode = !(function() {
                const t = gu() ? gu().getUserAgent() : '';
                return /android (\d+)/.test(t.toLowerCase());
              })());
        }
        writeValue(t) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'value', null == t ? '' : t);
        }
        registerOnChange(t) {
          this.onChange = t;
        }
        registerOnTouched(t) {
          this.onTouched = t;
        }
        setDisabledState(t) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', t);
        }
        _handleInput(t) {
          (!this._compositionMode || (this._compositionMode && !this._composing)) &&
            this.onChange(t);
        }
        _compositionStart() {
          this._composing = !0;
        }
        _compositionEnd(t) {
          (this._composing = !1), this._compositionMode && this.onChange(t);
        }
      }
      class Np {
        get value() {
          return this.control ? this.control.value : null;
        }
        get valid() {
          return this.control ? this.control.valid : null;
        }
        get invalid() {
          return this.control ? this.control.invalid : null;
        }
        get pending() {
          return this.control ? this.control.pending : null;
        }
        get disabled() {
          return this.control ? this.control.disabled : null;
        }
        get enabled() {
          return this.control ? this.control.enabled : null;
        }
        get errors() {
          return this.control ? this.control.errors : null;
        }
        get pristine() {
          return this.control ? this.control.pristine : null;
        }
        get dirty() {
          return this.control ? this.control.dirty : null;
        }
        get touched() {
          return this.control ? this.control.touched : null;
        }
        get status() {
          return this.control ? this.control.status : null;
        }
        get untouched() {
          return this.control ? this.control.untouched : null;
        }
        get statusChanges() {
          return this.control ? this.control.statusChanges : null;
        }
        get valueChanges() {
          return this.control ? this.control.valueChanges : null;
        }
        get path() {
          return null;
        }
        reset(t) {
          this.control && this.control.reset(t);
        }
        hasError(t, n) {
          return !!this.control && this.control.hasError(t, n);
        }
        getError(t, n) {
          return this.control ? this.control.getError(t, n) : null;
        }
      }
      class Vp extends Np {
        get formDirective() {
          return null;
        }
        get path() {
          return null;
        }
      }
      function Dp() {
        throw new Error('unimplemented');
      }
      class Lp extends Np {
        constructor() {
          super(...arguments),
            (this._parent = null),
            (this.name = null),
            (this.valueAccessor = null),
            (this._rawValidators = []),
            (this._rawAsyncValidators = []);
        }
        get validator() {
          return Dp();
        }
        get asyncValidator() {
          return Dp();
        }
      }
      class Up {
        constructor(t) {
          this._cd = t;
        }
        get ngClassUntouched() {
          return !!this._cd.control && this._cd.control.untouched;
        }
        get ngClassTouched() {
          return !!this._cd.control && this._cd.control.touched;
        }
        get ngClassPristine() {
          return !!this._cd.control && this._cd.control.pristine;
        }
        get ngClassDirty() {
          return !!this._cd.control && this._cd.control.dirty;
        }
        get ngClassValid() {
          return !!this._cd.control && this._cd.control.valid;
        }
        get ngClassInvalid() {
          return !!this._cd.control && this._cd.control.invalid;
        }
        get ngClassPending() {
          return !!this._cd.control && this._cd.control.pending;
        }
      }
      class jp extends Up {
        constructor(t) {
          super(t);
        }
      }
      class Fp extends Up {
        constructor(t) {
          super(t);
        }
      }
      function $p(t) {
        return null == t || 0 === t.length;
      }
      const Hp = new Et('NgValidators'),
        zp = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      class qp {
        static min(t) {
          return n => {
            if ($p(n.value) || $p(t)) return null;
            const e = parseFloat(n.value);
            return !isNaN(e) && e < t ? { min: { min: t, actual: n.value } } : null;
          };
        }
        static max(t) {
          return n => {
            if ($p(n.value) || $p(t)) return null;
            const e = parseFloat(n.value);
            return !isNaN(e) && e > t ? { max: { max: t, actual: n.value } } : null;
          };
        }
        static required(t) {
          return $p(t.value) ? { required: !0 } : null;
        }
        static requiredTrue(t) {
          return !0 === t.value ? null : { required: !0 };
        }
        static email(t) {
          return $p(t.value) ? null : zp.test(t.value) ? null : { email: !0 };
        }
        static minLength(t) {
          return n => {
            if ($p(n.value)) return null;
            const e = n.value ? n.value.length : 0;
            return e < t ? { minlength: { requiredLength: t, actualLength: e } } : null;
          };
        }
        static maxLength(t) {
          return n => {
            const e = n.value ? n.value.length : 0;
            return e > t ? { maxlength: { requiredLength: t, actualLength: e } } : null;
          };
        }
        static pattern(t) {
          if (!t) return qp.nullValidator;
          let n, e;
          return (
            'string' == typeof t
              ? ((e = ''),
                '^' !== t.charAt(0) && (e += '^'),
                (e += t),
                '$' !== t.charAt(t.length - 1) && (e += '$'),
                (n = new RegExp(e)))
              : ((e = t.toString()), (n = t)),
            t => {
              if ($p(t.value)) return null;
              const l = t.value;
              return n.test(l) ? null : { pattern: { requiredPattern: e, actualValue: l } };
            }
          );
        }
        static nullValidator(t) {
          return null;
        }
        static compose(t) {
          if (!t) return null;
          const n = t.filter(Bp);
          return 0 == n.length
            ? null
            : function(t) {
                return Kp(
                  (function(t, n) {
                    return n.map(n => n(t));
                  })(t, n)
                );
              };
        }
        static composeAsync(t) {
          if (!t) return null;
          const n = t.filter(Bp);
          return 0 == n.length
            ? null
            : function(t) {
                return (function t(...n) {
                  let e;
                  return (
                    'function' == typeof n[n.length - 1] && (e = n.pop()),
                    1 === n.length && u(n[0]) && (n = n[0]),
                    0 === n.length ? wo : e ? t(n).pipe(H(t => e(...t))) : new b(t => new Tp(t, n))
                  );
                })(
                  (function(t, n) {
                    return n.map(n => n(t));
                  })(t, n).map(Gp)
                ).pipe(H(Kp));
              };
        }
      }
      function Bp(t) {
        return null != t;
      }
      function Gp(t) {
        const n = zn(t) ? G(t) : t;
        if (!qn(n)) throw new Error('Expected validator to return Promise or Observable.');
        return n;
      }
      function Kp(t) {
        const n = t.reduce((t, n) => (null != n ? Object.assign({}, t, n) : t), {});
        return 0 === Object.keys(n).length ? null : n;
      }
      function Wp(t) {
        return t.validate ? n => t.validate(n) : t;
      }
      function Zp(t) {
        return t.validate ? n => t.validate(n) : t;
      }
      class Qp {
        constructor() {
          this._accessors = [];
        }
        add(t, n) {
          this._accessors.push([t, n]);
        }
        remove(t) {
          for (let n = this._accessors.length - 1; n >= 0; --n)
            if (this._accessors[n][1] === t) return void this._accessors.splice(n, 1);
        }
        select(t) {
          this._accessors.forEach(n => {
            this._isSameGroup(n, t) && n[1] !== t && n[1].fireUncheck(t.value);
          });
        }
        _isSameGroup(t, n) {
          return !!t[0].control && t[0]._parent === n._control._parent && t[1].name === n.name;
        }
      }
      const Yp =
          '\n    <div [formGroup]="myGroup">\n      <input formControlName="firstName">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });',
        Jp =
          '\n    <div [formGroup]="myGroup">\n       <div formGroupName="person">\n          <input formControlName="firstName">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });';
      class Xp {
        static controlParentException() {
          throw new Error(
            `formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ${Yp}`
          );
        }
        static ngModelGroupException() {
          throw new Error(
            `formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a "form" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        ${Jp}\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        \n    <form>\n       <div ngModelGroup="person">\n          <input [(ngModel)]="person.name" name="firstName">\n       </div>\n    </form>`
          );
        }
        static missingFormException() {
          throw new Error(
            `formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       ${Yp}`
          );
        }
        static groupParentException() {
          throw new Error(
            `formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ${Jp}`
          );
        }
        static arrayParentException() {
          throw new Error(
            'formArrayName must be used with a parent formGroup directive.  You\'ll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        \n    <div [formGroup]="myGroup">\n      <div formArrayName="cities">\n        <div *ngFor="let city of cityArray.controls; index as i">\n          <input [formControlName]="i">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl(\'SF\')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });'
          );
        }
        static disabledAttrWarning() {
          console.warn(
            "\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    "
          );
        }
        static ngModelWarning(t) {
          console.warn(
            `\n    It looks like you're using ngModel on the same form field as ${t}. \n    Support for using the ngModel input property and ngModelChange event with \n    reactive form directives has been deprecated in Angular v6 and will be removed \n    in Angular v7.\n    \n    For more information on this, see our API docs here:\n    https://angular.io/api/forms/${
              'formControl' === t ? 'FormControlDirective' : 'FormControlName'
            }#use-with-ngmodel\n    `
          );
        }
      }
      function tg(t, n) {
        return [...n.path, t];
      }
      function ng(t, n) {
        t || sg(n, 'Cannot find control with'),
          n.valueAccessor || sg(n, 'No value accessor for form control with'),
          (t.validator = qp.compose([t.validator, n.validator])),
          (t.asyncValidator = qp.composeAsync([t.asyncValidator, n.asyncValidator])),
          n.valueAccessor.writeValue(t.value),
          (function(t, n) {
            n.valueAccessor.registerOnChange(e => {
              (t._pendingValue = e),
                (t._pendingChange = !0),
                (t._pendingDirty = !0),
                'change' === t.updateOn && eg(t, n);
            });
          })(t, n),
          (function(t, n) {
            t.registerOnChange((t, e) => {
              n.valueAccessor.writeValue(t), e && n.viewToModelUpdate(t);
            });
          })(t, n),
          (function(t, n) {
            n.valueAccessor.registerOnTouched(() => {
              (t._pendingTouched = !0),
                'blur' === t.updateOn && t._pendingChange && eg(t, n),
                'submit' !== t.updateOn && t.markAsTouched();
            });
          })(t, n),
          n.valueAccessor.setDisabledState &&
            t.registerOnDisabledChange(t => {
              n.valueAccessor.setDisabledState(t);
            }),
          n._rawValidators.forEach(n => {
            n.registerOnValidatorChange &&
              n.registerOnValidatorChange(() => t.updateValueAndValidity());
          }),
          n._rawAsyncValidators.forEach(n => {
            n.registerOnValidatorChange &&
              n.registerOnValidatorChange(() => t.updateValueAndValidity());
          });
      }
      function eg(t, n) {
        t._pendingDirty && t.markAsDirty(),
          t.setValue(t._pendingValue, { emitModelToViewChange: !1 }),
          n.viewToModelUpdate(t._pendingValue),
          (t._pendingChange = !1);
      }
      function lg(t, n) {
        null == t && sg(n, 'Cannot find control with'),
          (t.validator = qp.compose([t.validator, n.validator])),
          (t.asyncValidator = qp.composeAsync([t.asyncValidator, n.asyncValidator]));
      }
      function rg(t) {
        return sg(t, 'There is no FormControl instance attached to form control element with');
      }
      function sg(t, n) {
        let e;
        throw ((e =
          t.path.length > 1
            ? `path: '${t.path.join(' -> ')}'`
            : t.path[0]
            ? `name: '${t.path}'`
            : 'unspecified name attribute'),
        new Error(`${n} ${e}`));
      }
      function ig(t) {
        return null != t ? qp.compose(t.map(Wp)) : null;
      }
      function og(t) {
        return null != t ? qp.composeAsync(t.map(Zp)) : null;
      }
      const ug = [
        class {
          constructor(t, n) {
            (this._renderer = t),
              (this._elementRef = n),
              (this.onChange = t => {}),
              (this.onTouched = () => {});
          }
          writeValue(t) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'checked', t);
          }
          registerOnChange(t) {
            this.onChange = t;
          }
          registerOnTouched(t) {
            this.onTouched = t;
          }
          setDisabledState(t) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', t);
          }
        },
        class {
          constructor(t, n) {
            (this._renderer = t),
              (this._elementRef = n),
              (this.onChange = t => {}),
              (this.onTouched = () => {});
          }
          writeValue(t) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'value', parseFloat(t));
          }
          registerOnChange(t) {
            this.onChange = n => {
              t('' == n ? null : parseFloat(n));
            };
          }
          registerOnTouched(t) {
            this.onTouched = t;
          }
          setDisabledState(t) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', t);
          }
        },
        class {
          constructor(t, n) {
            (this._renderer = t),
              (this._elementRef = n),
              (this.onChange = t => {}),
              (this.onTouched = () => {});
          }
          writeValue(t) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'value', null == t ? '' : t);
          }
          registerOnChange(t) {
            this.onChange = n => {
              t('' == n ? null : parseFloat(n));
            };
          }
          registerOnTouched(t) {
            this.onTouched = t;
          }
          setDisabledState(t) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', t);
          }
        },
        class {
          constructor(t, n) {
            (this._renderer = t),
              (this._elementRef = n),
              (this._optionMap = new Map()),
              (this._idCounter = 0),
              (this.onChange = t => {}),
              (this.onTouched = () => {}),
              (this._compareWith = Un);
          }
          set compareWith(t) {
            if ('function' != typeof t)
              throw new Error(`compareWith must be a function, but received ${JSON.stringify(t)}`);
            this._compareWith = t;
          }
          writeValue(t) {
            this.value = t;
            const n = this._getOptionId(t);
            null == n &&
              this._renderer.setProperty(this._elementRef.nativeElement, 'selectedIndex', -1);
            const e = (function(t, n) {
              return null == t
                ? `${n}`
                : (n && 'object' == typeof n && (n = 'Object'), `${t}: ${n}`.slice(0, 50));
            })(n, t);
            this._renderer.setProperty(this._elementRef.nativeElement, 'value', e);
          }
          registerOnChange(t) {
            this.onChange = n => {
              (this.value = this._getOptionValue(n)), t(this.value);
            };
          }
          registerOnTouched(t) {
            this.onTouched = t;
          }
          setDisabledState(t) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', t);
          }
          _registerOption() {
            return (this._idCounter++).toString();
          }
          _getOptionId(t) {
            for (const n of Array.from(this._optionMap.keys()))
              if (this._compareWith(this._optionMap.get(n), t)) return n;
            return null;
          }
          _getOptionValue(t) {
            const n = (function(t) {
              return t.split(':')[0];
            })(t);
            return this._optionMap.has(n) ? this._optionMap.get(n) : t;
          }
        },
        class {
          constructor(t, n) {
            (this._renderer = t),
              (this._elementRef = n),
              (this._optionMap = new Map()),
              (this._idCounter = 0),
              (this.onChange = t => {}),
              (this.onTouched = () => {}),
              (this._compareWith = Un);
          }
          set compareWith(t) {
            if ('function' != typeof t)
              throw new Error(`compareWith must be a function, but received ${JSON.stringify(t)}`);
            this._compareWith = t;
          }
          writeValue(t) {
            let n;
            if (((this.value = t), Array.isArray(t))) {
              const e = t.map(t => this._getOptionId(t));
              n = (t, n) => {
                t._setSelected(e.indexOf(n.toString()) > -1);
              };
            } else
              n = (t, n) => {
                t._setSelected(!1);
              };
            this._optionMap.forEach(n);
          }
          registerOnChange(t) {
            this.onChange = n => {
              const e = [];
              if (n.hasOwnProperty('selectedOptions')) {
                const t = n.selectedOptions;
                for (let n = 0; n < t.length; n++) {
                  const l = t.item(n),
                    r = this._getOptionValue(l.value);
                  e.push(r);
                }
              } else {
                const t = n.options;
                for (let n = 0; n < t.length; n++) {
                  const l = t.item(n);
                  if (l.selected) {
                    const t = this._getOptionValue(l.value);
                    e.push(t);
                  }
                }
              }
              (this.value = e), t(e);
            };
          }
          registerOnTouched(t) {
            this.onTouched = t;
          }
          setDisabledState(t) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', t);
          }
          _registerOption(t) {
            const n = (this._idCounter++).toString();
            return this._optionMap.set(n, t), n;
          }
          _getOptionId(t) {
            for (const n of Array.from(this._optionMap.keys()))
              if (this._compareWith(this._optionMap.get(n)._value, t)) return n;
            return null;
          }
          _getOptionValue(t) {
            const n = (function(t) {
              return t.split(':')[0];
            })(t);
            return this._optionMap.has(n) ? this._optionMap.get(n)._value : t;
          }
        },
        class {
          constructor(t, n, e, l) {
            (this._renderer = t),
              (this._elementRef = n),
              (this._registry = e),
              (this._injector = l),
              (this.onChange = () => {}),
              (this.onTouched = () => {});
          }
          ngOnInit() {
            (this._control = this._injector.get(Lp)),
              this._checkName(),
              this._registry.add(this._control, this);
          }
          ngOnDestroy() {
            this._registry.remove(this);
          }
          writeValue(t) {
            (this._state = t === this.value),
              this._renderer.setProperty(this._elementRef.nativeElement, 'checked', this._state);
          }
          registerOnChange(t) {
            (this._fn = t),
              (this.onChange = () => {
                t(this.value), this._registry.select(this);
              });
          }
          fireUncheck(t) {
            this.writeValue(t);
          }
          registerOnTouched(t) {
            this.onTouched = t;
          }
          setDisabledState(t) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', t);
          }
          _checkName() {
            this.name &&
              this.formControlName &&
              this.name !== this.formControlName &&
              this._throwNameError(),
              !this.name && this.formControlName && (this.name = this.formControlName);
          }
          _throwNameError() {
            throw new Error(
              '\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type="radio" formControlName="food" name="food">\n    '
            );
          }
        }
      ];
      function ag(t) {
        const n = hg(t) ? t.validators : t;
        return Array.isArray(n) ? ig(n) : n || null;
      }
      function cg(t, n) {
        const e = hg(n) ? n.asyncValidators : t;
        return Array.isArray(e) ? og(e) : e || null;
      }
      function hg(t) {
        return null != t && !Array.isArray(t) && 'object' == typeof t;
      }
      class dg {
        constructor(t, n) {
          (this.validator = t),
            (this.asyncValidator = n),
            (this._onCollectionChange = () => {}),
            (this.pristine = !0),
            (this.touched = !1),
            (this._onDisabledChange = []);
        }
        get parent() {
          return this._parent;
        }
        get valid() {
          return 'VALID' === this.status;
        }
        get invalid() {
          return 'INVALID' === this.status;
        }
        get pending() {
          return 'PENDING' == this.status;
        }
        get disabled() {
          return 'DISABLED' === this.status;
        }
        get enabled() {
          return 'DISABLED' !== this.status;
        }
        get dirty() {
          return !this.pristine;
        }
        get untouched() {
          return !this.touched;
        }
        get updateOn() {
          return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : 'change';
        }
        setValidators(t) {
          this.validator = ag(t);
        }
        setAsyncValidators(t) {
          this.asyncValidator = cg(t);
        }
        clearValidators() {
          this.validator = null;
        }
        clearAsyncValidators() {
          this.asyncValidator = null;
        }
        markAsTouched(t = {}) {
          (this.touched = !0), this._parent && !t.onlySelf && this._parent.markAsTouched(t);
        }
        markAllAsTouched() {
          this.markAsTouched({ onlySelf: !0 }), this._forEachChild(t => t.markAllAsTouched());
        }
        markAsUntouched(t = {}) {
          (this.touched = !1),
            (this._pendingTouched = !1),
            this._forEachChild(t => {
              t.markAsUntouched({ onlySelf: !0 });
            }),
            this._parent && !t.onlySelf && this._parent._updateTouched(t);
        }
        markAsDirty(t = {}) {
          (this.pristine = !1), this._parent && !t.onlySelf && this._parent.markAsDirty(t);
        }
        markAsPristine(t = {}) {
          (this.pristine = !0),
            (this._pendingDirty = !1),
            this._forEachChild(t => {
              t.markAsPristine({ onlySelf: !0 });
            }),
            this._parent && !t.onlySelf && this._parent._updatePristine(t);
        }
        markAsPending(t = {}) {
          (this.status = 'PENDING'),
            !1 !== t.emitEvent && this.statusChanges.emit(this.status),
            this._parent && !t.onlySelf && this._parent.markAsPending(t);
        }
        disable(t = {}) {
          const n = this._parentMarkedDirty(t.onlySelf);
          (this.status = 'DISABLED'),
            (this.errors = null),
            this._forEachChild(n => {
              n.disable(Object.assign({}, t, { onlySelf: !0 }));
            }),
            this._updateValue(),
            !1 !== t.emitEvent &&
              (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)),
            this._updateAncestors(Object.assign({}, t, { skipPristineCheck: n })),
            this._onDisabledChange.forEach(t => t(!0));
        }
        enable(t = {}) {
          const n = this._parentMarkedDirty(t.onlySelf);
          (this.status = 'VALID'),
            this._forEachChild(n => {
              n.enable(Object.assign({}, t, { onlySelf: !0 }));
            }),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: t.emitEvent }),
            this._updateAncestors(Object.assign({}, t, { skipPristineCheck: n })),
            this._onDisabledChange.forEach(t => t(!1));
        }
        _updateAncestors(t) {
          this._parent &&
            !t.onlySelf &&
            (this._parent.updateValueAndValidity(t),
            t.skipPristineCheck || this._parent._updatePristine(),
            this._parent._updateTouched());
        }
        setParent(t) {
          this._parent = t;
        }
        updateValueAndValidity(t = {}) {
          this._setInitialStatus(),
            this._updateValue(),
            this.enabled &&
              (this._cancelExistingSubscription(),
              (this.errors = this._runValidator()),
              (this.status = this._calculateStatus()),
              ('VALID' !== this.status && 'PENDING' !== this.status) ||
                this._runAsyncValidator(t.emitEvent)),
            !1 !== t.emitEvent &&
              (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)),
            this._parent && !t.onlySelf && this._parent.updateValueAndValidity(t);
        }
        _updateTreeValidity(t = { emitEvent: !0 }) {
          this._forEachChild(n => n._updateTreeValidity(t)),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: t.emitEvent });
        }
        _setInitialStatus() {
          this.status = this._allControlsDisabled() ? 'DISABLED' : 'VALID';
        }
        _runValidator() {
          return this.validator ? this.validator(this) : null;
        }
        _runAsyncValidator(t) {
          if (this.asyncValidator) {
            this.status = 'PENDING';
            const n = Gp(this.asyncValidator(this));
            this._asyncValidationSubscription = n.subscribe(n =>
              this.setErrors(n, { emitEvent: t })
            );
          }
        }
        _cancelExistingSubscription() {
          this._asyncValidationSubscription && this._asyncValidationSubscription.unsubscribe();
        }
        setErrors(t, n = {}) {
          (this.errors = t), this._updateControlsErrors(!1 !== n.emitEvent);
        }
        get(t) {
          return (function(t, n, e) {
            return null == n
              ? null
              : (n instanceof Array || (n = n.split('.')),
                n instanceof Array && 0 === n.length
                  ? null
                  : n.reduce(
                      (t, n) =>
                        t instanceof gg
                          ? t.controls.hasOwnProperty(n)
                            ? t.controls[n]
                            : null
                          : (t instanceof fg && t.at(n)) || null,
                      t
                    ));
          })(this, t);
        }
        getError(t, n) {
          const e = n ? this.get(n) : this;
          return e && e.errors ? e.errors[t] : null;
        }
        hasError(t, n) {
          return !!this.getError(t, n);
        }
        get root() {
          let t = this;
          for (; t._parent; ) t = t._parent;
          return t;
        }
        _updateControlsErrors(t) {
          (this.status = this._calculateStatus()),
            t && this.statusChanges.emit(this.status),
            this._parent && this._parent._updateControlsErrors(t);
        }
        _initObservables() {
          (this.valueChanges = new _r()), (this.statusChanges = new _r());
        }
        _calculateStatus() {
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
        _anyControlsHaveStatus(t) {
          return this._anyControls(n => n.status === t);
        }
        _anyControlsDirty() {
          return this._anyControls(t => t.dirty);
        }
        _anyControlsTouched() {
          return this._anyControls(t => t.touched);
        }
        _updatePristine(t = {}) {
          (this.pristine = !this._anyControlsDirty()),
            this._parent && !t.onlySelf && this._parent._updatePristine(t);
        }
        _updateTouched(t = {}) {
          (this.touched = this._anyControlsTouched()),
            this._parent && !t.onlySelf && this._parent._updateTouched(t);
        }
        _isBoxedValue(t) {
          return (
            'object' == typeof t &&
            null !== t &&
            2 === Object.keys(t).length &&
            'value' in t &&
            'disabled' in t
          );
        }
        _registerOnCollectionChange(t) {
          this._onCollectionChange = t;
        }
        _setUpdateStrategy(t) {
          hg(t) && null != t.updateOn && (this._updateOn = t.updateOn);
        }
        _parentMarkedDirty(t) {
          return !t && this._parent && this._parent.dirty && !this._parent._anyControlsDirty();
        }
      }
      class pg extends dg {
        constructor(t = null, n, e) {
          super(ag(n), cg(e, n)),
            (this._onChange = []),
            this._applyFormState(t),
            this._setUpdateStrategy(n),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 }),
            this._initObservables();
        }
        setValue(t, n = {}) {
          (this.value = this._pendingValue = t),
            this._onChange.length &&
              !1 !== n.emitModelToViewChange &&
              this._onChange.forEach(t => t(this.value, !1 !== n.emitViewToModelChange)),
            this.updateValueAndValidity(n);
        }
        patchValue(t, n = {}) {
          this.setValue(t, n);
        }
        reset(t = null, n = {}) {
          this._applyFormState(t),
            this.markAsPristine(n),
            this.markAsUntouched(n),
            this.setValue(this.value, n),
            (this._pendingChange = !1);
        }
        _updateValue() {}
        _anyControls(t) {
          return !1;
        }
        _allControlsDisabled() {
          return this.disabled;
        }
        registerOnChange(t) {
          this._onChange.push(t);
        }
        _clearChangeFns() {
          (this._onChange = []),
            (this._onDisabledChange = []),
            (this._onCollectionChange = () => {});
        }
        registerOnDisabledChange(t) {
          this._onDisabledChange.push(t);
        }
        _forEachChild(t) {}
        _syncPendingControls() {
          return !(
            'submit' !== this.updateOn ||
            (this._pendingDirty && this.markAsDirty(),
            this._pendingTouched && this.markAsTouched(),
            !this._pendingChange) ||
            (this.setValue(this._pendingValue, { onlySelf: !0, emitModelToViewChange: !1 }), 0)
          );
        }
        _applyFormState(t) {
          this._isBoxedValue(t)
            ? ((this.value = this._pendingValue = t.value),
              t.disabled
                ? this.disable({ onlySelf: !0, emitEvent: !1 })
                : this.enable({ onlySelf: !0, emitEvent: !1 }))
            : (this.value = this._pendingValue = t);
        }
      }
      class gg extends dg {
        constructor(t, n, e) {
          super(ag(n), cg(e, n)),
            (this.controls = t),
            this._initObservables(),
            this._setUpdateStrategy(n),
            this._setUpControls(),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 });
        }
        registerControl(t, n) {
          return this.controls[t]
            ? this.controls[t]
            : ((this.controls[t] = n),
              n.setParent(this),
              n._registerOnCollectionChange(this._onCollectionChange),
              n);
        }
        addControl(t, n) {
          this.registerControl(t, n), this.updateValueAndValidity(), this._onCollectionChange();
        }
        removeControl(t) {
          this.controls[t] && this.controls[t]._registerOnCollectionChange(() => {}),
            delete this.controls[t],
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        setControl(t, n) {
          this.controls[t] && this.controls[t]._registerOnCollectionChange(() => {}),
            delete this.controls[t],
            n && this.registerControl(t, n),
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        contains(t) {
          return this.controls.hasOwnProperty(t) && this.controls[t].enabled;
        }
        setValue(t, n = {}) {
          this._checkAllValuesPresent(t),
            Object.keys(t).forEach(e => {
              this._throwIfControlMissing(e),
                this.controls[e].setValue(t[e], { onlySelf: !0, emitEvent: n.emitEvent });
            }),
            this.updateValueAndValidity(n);
        }
        patchValue(t, n = {}) {
          Object.keys(t).forEach(e => {
            this.controls[e] &&
              this.controls[e].patchValue(t[e], { onlySelf: !0, emitEvent: n.emitEvent });
          }),
            this.updateValueAndValidity(n);
        }
        reset(t = {}, n = {}) {
          this._forEachChild((e, l) => {
            e.reset(t[l], { onlySelf: !0, emitEvent: n.emitEvent });
          }),
            this._updatePristine(n),
            this._updateTouched(n),
            this.updateValueAndValidity(n);
        }
        getRawValue() {
          return this._reduceChildren(
            {},
            (t, n, e) => ((t[e] = n instanceof pg ? n.value : n.getRawValue()), t)
          );
        }
        _syncPendingControls() {
          let t = this._reduceChildren(!1, (t, n) => !!n._syncPendingControls() || t);
          return t && this.updateValueAndValidity({ onlySelf: !0 }), t;
        }
        _throwIfControlMissing(t) {
          if (!Object.keys(this.controls).length)
            throw new Error(
              "\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "
            );
          if (!this.controls[t]) throw new Error(`Cannot find form control with name: ${t}.`);
        }
        _forEachChild(t) {
          Object.keys(this.controls).forEach(n => t(this.controls[n], n));
        }
        _setUpControls() {
          this._forEachChild(t => {
            t.setParent(this), t._registerOnCollectionChange(this._onCollectionChange);
          });
        }
        _updateValue() {
          this.value = this._reduceValue();
        }
        _anyControls(t) {
          let n = !1;
          return (
            this._forEachChild((e, l) => {
              n = n || (this.contains(l) && t(e));
            }),
            n
          );
        }
        _reduceValue() {
          return this._reduceChildren(
            {},
            (t, n, e) => ((n.enabled || this.disabled) && (t[e] = n.value), t)
          );
        }
        _reduceChildren(t, n) {
          let e = t;
          return (
            this._forEachChild((t, l) => {
              e = n(e, t, l);
            }),
            e
          );
        }
        _allControlsDisabled() {
          for (const t of Object.keys(this.controls)) if (this.controls[t].enabled) return !1;
          return Object.keys(this.controls).length > 0 || this.disabled;
        }
        _checkAllValuesPresent(t) {
          this._forEachChild((n, e) => {
            if (void 0 === t[e])
              throw new Error(`Must supply a value for form control with name: '${e}'.`);
          });
        }
      }
      class fg extends dg {
        constructor(t, n, e) {
          super(ag(n), cg(e, n)),
            (this.controls = t),
            this._initObservables(),
            this._setUpdateStrategy(n),
            this._setUpControls(),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 });
        }
        at(t) {
          return this.controls[t];
        }
        push(t) {
          this.controls.push(t),
            this._registerControl(t),
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        insert(t, n) {
          this.controls.splice(t, 0, n), this._registerControl(n), this.updateValueAndValidity();
        }
        removeAt(t) {
          this.controls[t] && this.controls[t]._registerOnCollectionChange(() => {}),
            this.controls.splice(t, 1),
            this.updateValueAndValidity();
        }
        setControl(t, n) {
          this.controls[t] && this.controls[t]._registerOnCollectionChange(() => {}),
            this.controls.splice(t, 1),
            n && (this.controls.splice(t, 0, n), this._registerControl(n)),
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        get length() {
          return this.controls.length;
        }
        setValue(t, n = {}) {
          this._checkAllValuesPresent(t),
            t.forEach((t, e) => {
              this._throwIfControlMissing(e),
                this.at(e).setValue(t, { onlySelf: !0, emitEvent: n.emitEvent });
            }),
            this.updateValueAndValidity(n);
        }
        patchValue(t, n = {}) {
          t.forEach((t, e) => {
            this.at(e) && this.at(e).patchValue(t, { onlySelf: !0, emitEvent: n.emitEvent });
          }),
            this.updateValueAndValidity(n);
        }
        reset(t = [], n = {}) {
          this._forEachChild((e, l) => {
            e.reset(t[l], { onlySelf: !0, emitEvent: n.emitEvent });
          }),
            this._updatePristine(n),
            this._updateTouched(n),
            this.updateValueAndValidity(n);
        }
        getRawValue() {
          return this.controls.map(t => (t instanceof pg ? t.value : t.getRawValue()));
        }
        clear() {
          this.controls.length < 1 ||
            (this._forEachChild(t => t._registerOnCollectionChange(() => {})),
            this.controls.splice(0),
            this.updateValueAndValidity());
        }
        _syncPendingControls() {
          let t = this.controls.reduce((t, n) => !!n._syncPendingControls() || t, !1);
          return t && this.updateValueAndValidity({ onlySelf: !0 }), t;
        }
        _throwIfControlMissing(t) {
          if (!this.controls.length)
            throw new Error(
              "\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "
            );
          if (!this.at(t)) throw new Error(`Cannot find form control at index ${t}`);
        }
        _forEachChild(t) {
          this.controls.forEach((n, e) => {
            t(n, e);
          });
        }
        _updateValue() {
          this.value = this.controls.filter(t => t.enabled || this.disabled).map(t => t.value);
        }
        _anyControls(t) {
          return this.controls.some(n => n.enabled && t(n));
        }
        _setUpControls() {
          this._forEachChild(t => this._registerControl(t));
        }
        _checkAllValuesPresent(t) {
          this._forEachChild((n, e) => {
            if (void 0 === t[e])
              throw new Error(`Must supply a value for form control at index: ${e}.`);
          });
        }
        _allControlsDisabled() {
          for (const t of this.controls) if (t.enabled) return !1;
          return this.controls.length > 0 || this.disabled;
        }
        _registerControl(t) {
          t.setParent(this), t._registerOnCollectionChange(this._onCollectionChange);
        }
      }
      const mg = new Et('NgFormSelectorWarning');
      class _g extends Vp {
        ngOnInit() {
          this._checkParentType(), this.formDirective.addFormGroup(this);
        }
        ngOnDestroy() {
          this.formDirective && this.formDirective.removeFormGroup(this);
        }
        get control() {
          return this.formDirective.getFormGroup(this);
        }
        get path() {
          return tg(this.name, this._parent);
        }
        get formDirective() {
          return this._parent ? this._parent.formDirective : null;
        }
        get validator() {
          return ig(this._validators);
        }
        get asyncValidator() {
          return og(this._asyncValidators);
        }
        _checkParentType() {}
      }
      class vg {}
      const yg = new Et('NgModelWithFormControlWarning');
      class wg extends Vp {
        constructor(t, n) {
          super(),
            (this._validators = t),
            (this._asyncValidators = n),
            (this.submitted = !1),
            (this.directives = []),
            (this.form = null),
            (this.ngSubmit = new _r());
        }
        ngOnChanges(t) {
          this._checkFormPresent(),
            t.hasOwnProperty('form') &&
              (this._updateValidators(), this._updateDomValue(), this._updateRegistrations());
        }
        get formDirective() {
          return this;
        }
        get control() {
          return this.form;
        }
        get path() {
          return [];
        }
        addControl(t) {
          const n = this.form.get(t.path);
          return ng(n, t), n.updateValueAndValidity({ emitEvent: !1 }), this.directives.push(t), n;
        }
        getControl(t) {
          return this.form.get(t.path);
        }
        removeControl(t) {
          !(function(t, n) {
            const e = t.indexOf(n);
            e > -1 && t.splice(e, 1);
          })(this.directives, t);
        }
        addFormGroup(t) {
          const n = this.form.get(t.path);
          lg(n, t), n.updateValueAndValidity({ emitEvent: !1 });
        }
        removeFormGroup(t) {}
        getFormGroup(t) {
          return this.form.get(t.path);
        }
        addFormArray(t) {
          const n = this.form.get(t.path);
          lg(n, t), n.updateValueAndValidity({ emitEvent: !1 });
        }
        removeFormArray(t) {}
        getFormArray(t) {
          return this.form.get(t.path);
        }
        updateModel(t, n) {
          this.form.get(t.path).setValue(n);
        }
        onSubmit(t) {
          return (
            (this.submitted = !0),
            (n = this.directives),
            this.form._syncPendingControls(),
            n.forEach(t => {
              const n = t.control;
              'submit' === n.updateOn &&
                n._pendingChange &&
                (t.viewToModelUpdate(n._pendingValue), (n._pendingChange = !1));
            }),
            this.ngSubmit.emit(t),
            !1
          );
          var n;
        }
        onReset() {
          this.resetForm();
        }
        resetForm(t) {
          this.form.reset(t), (this.submitted = !1);
        }
        _updateDomValue() {
          this.directives.forEach(t => {
            const n = this.form.get(t.path);
            t.control !== n &&
              ((function(t, n) {
                n.valueAccessor.registerOnChange(() => rg(n)),
                  n.valueAccessor.registerOnTouched(() => rg(n)),
                  n._rawValidators.forEach(t => {
                    t.registerOnValidatorChange && t.registerOnValidatorChange(null);
                  }),
                  n._rawAsyncValidators.forEach(t => {
                    t.registerOnValidatorChange && t.registerOnValidatorChange(null);
                  }),
                  t && t._clearChangeFns();
              })(t.control, t),
              n && ng(n, t),
              (t.control = n));
          }),
            this.form._updateTreeValidity({ emitEvent: !1 });
        }
        _updateRegistrations() {
          this.form._registerOnCollectionChange(() => this._updateDomValue()),
            this._oldForm && this._oldForm._registerOnCollectionChange(() => {}),
            (this._oldForm = this.form);
        }
        _updateValidators() {
          const t = ig(this._validators);
          this.form.validator = qp.compose([this.form.validator, t]);
          const n = og(this._asyncValidators);
          this.form.asyncValidator = qp.composeAsync([this.form.asyncValidator, n]);
        }
        _checkFormPresent() {
          this.form || Xp.missingFormException();
        }
      }
      class bg extends _g {
        constructor(t, n, e) {
          super(), (this._parent = t), (this._validators = n), (this._asyncValidators = e);
        }
        _checkParentType() {
          xg(this._parent) && Xp.groupParentException();
        }
      }
      class Cg extends Vp {
        constructor(t, n, e) {
          super(), (this._parent = t), (this._validators = n), (this._asyncValidators = e);
        }
        ngOnInit() {
          this._checkParentType(), this.formDirective.addFormArray(this);
        }
        ngOnDestroy() {
          this.formDirective && this.formDirective.removeFormArray(this);
        }
        get control() {
          return this.formDirective.getFormArray(this);
        }
        get formDirective() {
          return this._parent ? this._parent.formDirective : null;
        }
        get path() {
          return tg(this.name, this._parent);
        }
        get validator() {
          return ig(this._validators);
        }
        get asyncValidator() {
          return og(this._asyncValidators);
        }
        _checkParentType() {
          xg(this._parent) && Xp.arrayParentException();
        }
      }
      function xg(t) {
        return !(t instanceof bg || t instanceof wg || t instanceof Cg);
      }
      let kg = (() => {
        class t extends Lp {
          constructor(t, n, e, l, r) {
            super(),
              (this._ngModelWarningConfig = r),
              (this._added = !1),
              (this.update = new _r()),
              (this._ngModelWarningSent = !1),
              (this._parent = t),
              (this._rawValidators = n || []),
              (this._rawAsyncValidators = e || []),
              (this.valueAccessor = (function(t, n) {
                if (!n) return null;
                Array.isArray(n) ||
                  sg(t, 'Value accessor was not provided as an array for form control with');
                let e = void 0,
                  l = void 0,
                  r = void 0;
                return (
                  n.forEach(n => {
                    var s;
                    n.constructor === Rp
                      ? (e = n)
                      : ((s = n),
                        ug.some(t => s.constructor === t)
                          ? (l &&
                              sg(
                                t,
                                'More than one built-in value accessor matches form control with'
                              ),
                            (l = n))
                          : (r &&
                              sg(
                                t,
                                'More than one custom value accessor matches form control with'
                              ),
                            (r = n)));
                  }),
                  r || l || e || (sg(t, 'No valid value accessor for form control with'), null)
                );
              })(this, l));
          }
          set isDisabled(t) {
            Xp.disabledAttrWarning();
          }
          ngOnChanges(n) {
            var e, l;
            this._added || this._setUpControl(),
              (function(t, n) {
                if (!t.hasOwnProperty('model')) return !1;
                const e = t.model;
                return !!e.isFirstChange() || !Un(n, e.currentValue);
              })(n, this.viewModel) &&
                ('formControlName',
                (e = t),
                this,
                (l = this._ngModelWarningConfig),
                Wt() &&
                  'never' !== l &&
                  ((((null !== l && 'once' !== l) || e._ngModelWarningSentOnce) &&
                    ('always' !== l || this._ngModelWarningSent)) ||
                    (Xp.ngModelWarning('formControlName'),
                    (e._ngModelWarningSentOnce = !0),
                    (this._ngModelWarningSent = !0))),
                (this.viewModel = this.model),
                this.formDirective.updateModel(this, this.model));
          }
          ngOnDestroy() {
            this.formDirective && this.formDirective.removeControl(this);
          }
          viewToModelUpdate(t) {
            (this.viewModel = t), this.update.emit(t);
          }
          get path() {
            return tg(this.name, this._parent);
          }
          get formDirective() {
            return this._parent ? this._parent.formDirective : null;
          }
          get validator() {
            return ig(this._rawValidators);
          }
          get asyncValidator() {
            return og(this._rawAsyncValidators);
          }
          _checkParentType() {
            !(this._parent instanceof bg) && this._parent instanceof _g
              ? Xp.ngModelGroupException()
              : this._parent instanceof bg ||
                this._parent instanceof wg ||
                this._parent instanceof Cg ||
                Xp.controlParentException();
          }
          _setUpControl() {
            this._checkParentType(),
              (this.control = this.formDirective.addControl(this)),
              this.control.disabled &&
                this.valueAccessor.setDisabledState &&
                this.valueAccessor.setDisabledState(!0),
              (this._added = !0);
          }
        }
        return (t._ngModelWarningSentOnce = !1), t;
      })();
      class Eg {
        get required() {
          return this._required;
        }
        set required(t) {
          (this._required = null != t && !1 !== t && 'false' !== `${t}`),
            this._onChange && this._onChange();
        }
        validate(t) {
          return this.required ? qp.required(t) : null;
        }
        registerOnValidatorChange(t) {
          this._onChange = t;
        }
      }
      class Sg {}
      class Og {
        group(t, n = null) {
          const e = this._reduceControls(t);
          let l = null,
            r = null,
            s = void 0;
          return (
            null != n &&
              ((function(t) {
                return (
                  void 0 !== t.asyncValidators || void 0 !== t.validators || void 0 !== t.updateOn
                );
              })(n)
                ? ((l = null != n.validators ? n.validators : null),
                  (r = null != n.asyncValidators ? n.asyncValidators : null),
                  (s = null != n.updateOn ? n.updateOn : void 0))
                : ((l = null != n.validator ? n.validator : null),
                  (r = null != n.asyncValidator ? n.asyncValidator : null))),
            new gg(e, { asyncValidators: r, updateOn: s, validators: l })
          );
        }
        control(t, n, e) {
          return new pg(t, n, e);
        }
        array(t, n, e) {
          const l = t.map(t => this._createControl(t));
          return new fg(l, n, e);
        }
        _reduceControls(t) {
          const n = {};
          return (
            Object.keys(t).forEach(e => {
              n[e] = this._createControl(t[e]);
            }),
            n
          );
        }
        _createControl(t) {
          return t instanceof pg || t instanceof gg || t instanceof fg
            ? t
            : Array.isArray(t)
            ? this.control(t[0], t.length > 1 ? t[1] : null, t.length > 2 ? t[2] : null)
            : this.control(t);
        }
      }
      class Pg {
        static withConfig(t) {
          return {
            ngModule: Pg,
            providers: [{ provide: mg, useValue: t.warnOnDeprecatedNgFormSelector }]
          };
        }
      }
      class Mg {
        static withConfig(t) {
          return {
            ngModule: Mg,
            providers: [{ provide: yg, useValue: t.warnOnNgModelWithFormControl }]
          };
        }
      }
      class Tg {
        constructor() {}
        ngOnInit() {
          this.createForm();
        }
        createForm() {
          this.formQuestion = new gg({
            formName: new pg(null),
            formEmail: new pg(null),
            formTopic: new pg(null),
            formMessage: new pg(null)
          });
        }
      }
      var Ag = He({
        encapsulation: 0,
        styles: [
          [
            '.section[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto 20px}.title-wrapper[_ngcontent-%COMP%]{position:relative}.title-wrapper[_ngcontent-%COMP%]:after{content:"";background:#dcdcdc;position:absolute;left:0;top:50%;margin-top:-.5px;display:block;width:100%;height:1px;z-index:-1}.text[_ngcontent-%COMP%]{background:#fff;margin:15px 20px;padding:0 10px;display:inline-block;text-transform:uppercase;font-family:Arial,sans-serif;color:#494940}label[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;padding-right:10px}.textarea[_ngcontent-%COMP%]{resize:none;min-height:100px;border-radius:3px;margin-top:6px;padding:6px}.button[_ngcontent-%COMP%]{padding:10px 20px;margin:10px 0 5px;color:#fff;background-color:#444;border:0;border-radius:3px;text-transform:uppercase}.button[_ngcontent-%COMP%]:hover{background-color:#ff4800;color:#fff}.form[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);grid-column-gap:10px}.form[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{grid-column:1/span 2}.form[_ngcontent-%COMP%]   .item--fieldset[_ngcontent-%COMP%]{grid-column:1;display:grid;grid-template-columns:100px auto;padding-left:20px}.form[_ngcontent-%COMP%]   .item--message[_ngcontent-%COMP%]{grid-column:2;display:grid}input[_ngcontent-%COMP%]{outline:0;margin:5px 0;border-radius:3px;padding:0 10px;border:1px solid #a9a9a9}svg[_ngcontent-%COMP%]{margin:5px 10px;width:22px;height:22px;fill:#444}'
          ]
        ],
        data: {}
      });
      function Ig(t) {
        return Bs(
          0,
          [
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(2, 0, null, null, 2, 'h2', [['class', 'title']], null, null, null, null, null)),
            (t()(),
            Ts(3, 0, null, null, 1, 'span', [['class', 'text']], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u0417\u0410\u0414\u0410\u0419\u0422\u0415 \u0412\u041e\u041f\u0420\u041e\u0421\u042b'
            ])),
            (t()(),
            Ts(
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
              function(t, n, e) {
                var l = !0;
                return (
                  'submit' === n && (l = !1 !== Ll(t, 7).onSubmit(e) && l),
                  'reset' === n && (l = !1 !== Ll(t, 7).onReset() && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(6, 16384, null, 0, vg, [], null, null),
            Ql(
              7,
              540672,
              null,
              0,
              wg,
              [
                [8, null],
                [8, null]
              ],
              { form: [0, 'form'] },
              null
            ),
            Yl(2048, null, Vp, null, [wg]),
            Ql(9, 16384, null, 0, Fp, [[4, Vp]], null, null),
            (t()(),
            Ts(
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
            (t()(), Ts(11, 0, null, null, 3, 'label', [], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(), Hs(-1, null, [' \u0418\u043c\u044f '])),
            (t()(),
            Ts(
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
              function(t, n, e) {
                var l = !0;
                return (
                  'input' === n && (l = !1 !== Ll(t, 16)._handleInput(e.target.value) && l),
                  'blur' === n && (l = !1 !== Ll(t, 16).onTouched() && l),
                  'compositionstart' === n && (l = !1 !== Ll(t, 16)._compositionStart() && l),
                  'compositionend' === n &&
                    (l = !1 !== Ll(t, 16)._compositionEnd(e.target.value) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(16, 16384, null, 0, Rp, [se, te, [2, Ip]], null, null),
            Ql(17, 16384, null, 0, Eg, [], { required: [0, 'required'] }, null),
            Yl(
              1024,
              null,
              Hp,
              function(t) {
                return [t];
              },
              [Eg]
            ),
            Yl(
              1024,
              null,
              Ap,
              function(t) {
                return [t];
              },
              [Rp]
            ),
            Ql(
              20,
              671744,
              null,
              0,
              kg,
              [
                [3, Vp],
                [6, Hp],
                [8, null],
                [6, Ap],
                [2, yg]
              ],
              { name: [0, 'name'] },
              null
            ),
            Yl(2048, null, Lp, null, [kg]),
            Ql(22, 16384, null, 0, jp, [[4, Lp]], null, null),
            (t()(), Ts(23, 0, null, null, 3, 'label', [], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(), Hs(-1, null, [' Email '])),
            (t()(),
            Ts(
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
              function(t, n, e) {
                var l = !0;
                return (
                  'input' === n && (l = !1 !== Ll(t, 28)._handleInput(e.target.value) && l),
                  'blur' === n && (l = !1 !== Ll(t, 28).onTouched() && l),
                  'compositionstart' === n && (l = !1 !== Ll(t, 28)._compositionStart() && l),
                  'compositionend' === n &&
                    (l = !1 !== Ll(t, 28)._compositionEnd(e.target.value) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(28, 16384, null, 0, Rp, [se, te, [2, Ip]], null, null),
            Ql(29, 16384, null, 0, Eg, [], { required: [0, 'required'] }, null),
            Yl(
              1024,
              null,
              Hp,
              function(t) {
                return [t];
              },
              [Eg]
            ),
            Yl(
              1024,
              null,
              Ap,
              function(t) {
                return [t];
              },
              [Rp]
            ),
            Ql(
              32,
              671744,
              null,
              0,
              kg,
              [
                [3, Vp],
                [6, Hp],
                [8, null],
                [6, Ap],
                [2, yg]
              ],
              { name: [0, 'name'] },
              null
            ),
            Yl(2048, null, Lp, null, [kg]),
            Ql(34, 16384, null, 0, jp, [[4, Lp]], null, null),
            (t()(), Ts(35, 0, null, null, 3, 'label', [], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(), Hs(-1, null, [' \u0422\u0435\u043c\u0430 '])),
            (t()(),
            Ts(
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
              function(t, n, e) {
                var l = !0;
                return (
                  'input' === n && (l = !1 !== Ll(t, 40)._handleInput(e.target.value) && l),
                  'blur' === n && (l = !1 !== Ll(t, 40).onTouched() && l),
                  'compositionstart' === n && (l = !1 !== Ll(t, 40)._compositionStart() && l),
                  'compositionend' === n &&
                    (l = !1 !== Ll(t, 40)._compositionEnd(e.target.value) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(40, 16384, null, 0, Rp, [se, te, [2, Ip]], null, null),
            Ql(41, 16384, null, 0, Eg, [], { required: [0, 'required'] }, null),
            Yl(
              1024,
              null,
              Hp,
              function(t) {
                return [t];
              },
              [Eg]
            ),
            Yl(
              1024,
              null,
              Ap,
              function(t) {
                return [t];
              },
              [Rp]
            ),
            Ql(
              44,
              671744,
              null,
              0,
              kg,
              [
                [3, Vp],
                [6, Hp],
                [8, null],
                [6, Ap],
                [2, yg]
              ],
              { name: [0, 'name'] },
              null
            ),
            Yl(2048, null, Lp, null, [kg]),
            Ql(46, 16384, null, 0, jp, [[4, Lp]], null, null),
            (t()(),
            Ts(
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
            (t()(), Ts(48, 0, null, null, 1, 'label', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u0412\u0430\u0448\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435'
            ])),
            (t()(),
            Ts(
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
              function(t, n, e) {
                var l = !0;
                return (
                  'input' === n && (l = !1 !== Ll(t, 51)._handleInput(e.target.value) && l),
                  'blur' === n && (l = !1 !== Ll(t, 51).onTouched() && l),
                  'compositionstart' === n && (l = !1 !== Ll(t, 51)._compositionStart() && l),
                  'compositionend' === n &&
                    (l = !1 !== Ll(t, 51)._compositionEnd(e.target.value) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(51, 16384, null, 0, Rp, [se, te, [2, Ip]], null, null),
            Ql(52, 16384, null, 0, Eg, [], { required: [0, 'required'] }, null),
            Yl(
              1024,
              null,
              Hp,
              function(t) {
                return [t];
              },
              [Eg]
            ),
            Yl(
              1024,
              null,
              Ap,
              function(t) {
                return [t];
              },
              [Rp]
            ),
            Ql(
              55,
              671744,
              null,
              0,
              kg,
              [
                [3, Vp],
                [6, Hp],
                [8, null],
                [6, Ap],
                [2, yg]
              ],
              { name: [0, 'name'] },
              null
            ),
            Yl(2048, null, Lp, null, [kg]),
            Ql(57, 16384, null, 0, jp, [[4, Lp]], null, null),
            (t()(),
            Ts(
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
            (t()(), Hs(-1, null, ['\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c']))
          ],
          function(t, n) {
            t(n, 7, 0, n.component.formQuestion),
              t(n, 17, 0, ''),
              t(n, 20, 0, 'formName'),
              t(n, 29, 0, ''),
              t(n, 32, 0, 'formEmail'),
              t(n, 41, 0, ''),
              t(n, 44, 0, 'formTopic'),
              t(n, 52, 0, ''),
              t(n, 55, 0, 'formMessage');
          },
          function(t, n) {
            t(
              n,
              5,
              0,
              Ll(n, 9).ngClassUntouched,
              Ll(n, 9).ngClassTouched,
              Ll(n, 9).ngClassPristine,
              Ll(n, 9).ngClassDirty,
              Ll(n, 9).ngClassValid,
              Ll(n, 9).ngClassInvalid,
              Ll(n, 9).ngClassPending
            ),
              t(
                n,
                15,
                0,
                Ll(n, 17).required ? '' : null,
                Ll(n, 22).ngClassUntouched,
                Ll(n, 22).ngClassTouched,
                Ll(n, 22).ngClassPristine,
                Ll(n, 22).ngClassDirty,
                Ll(n, 22).ngClassValid,
                Ll(n, 22).ngClassInvalid,
                Ll(n, 22).ngClassPending
              ),
              t(
                n,
                27,
                0,
                Ll(n, 29).required ? '' : null,
                Ll(n, 34).ngClassUntouched,
                Ll(n, 34).ngClassTouched,
                Ll(n, 34).ngClassPristine,
                Ll(n, 34).ngClassDirty,
                Ll(n, 34).ngClassValid,
                Ll(n, 34).ngClassInvalid,
                Ll(n, 34).ngClassPending
              ),
              t(
                n,
                39,
                0,
                Ll(n, 41).required ? '' : null,
                Ll(n, 46).ngClassUntouched,
                Ll(n, 46).ngClassTouched,
                Ll(n, 46).ngClassPristine,
                Ll(n, 46).ngClassDirty,
                Ll(n, 46).ngClassValid,
                Ll(n, 46).ngClassInvalid,
                Ll(n, 46).ngClassPending
              ),
              t(
                n,
                50,
                0,
                Ll(n, 52).required ? '' : null,
                Ll(n, 57).ngClassUntouched,
                Ll(n, 57).ngClassTouched,
                Ll(n, 57).ngClassPristine,
                Ll(n, 57).ngClassDirty,
                Ll(n, 57).ngClassValid,
                Ll(n, 57).ngClassInvalid,
                Ll(n, 57).ngClassPending
              );
          }
        );
      }
      class Rg {
        constructor() {}
      }
      var Ng = He({
        encapsulation: 0,
        styles: [
          [
            '*[_ngcontent-%COMP%]{box-sizing:border-box}.section[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto 20px}.title-wrapper[_ngcontent-%COMP%]{position:relative}a[_ngcontent-%COMP%], li[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}a[_ngcontent-%COMP%]{padding:2px 0}.title-wrapper[_ngcontent-%COMP%]:after{content:"";background:#dcdcdc;position:absolute;left:0;top:50%;margin-top:-.5px;display:block;width:100%;height:1px;z-index:-1}.text[_ngcontent-%COMP%]{background:#fff;margin:15px 20px;padding:0 10px;display:inline-block;text-transform:uppercase;font-family:Arial,sans-serif;color:#494940}img[_ngcontent-%COMP%]{max-width:230px;width:100%}.svg[_ngcontent-%COMP%]{margin:5px 10px;width:22px;height:22px;fill:currentColor}.container__contacts[_ngcontent-%COMP%]{padding-left:20px}.catalog_list[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,auto);grid-gap:10px;padding:0 10px}.catalog_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{display:grid;padding:10px;background-color:#fafafa;border:1px solid #e0e0e0;box-shadow:inset 0 1px 1px #fff;border-radius:5px;-webkit-transition:.5s;transition:.5s}.catalog_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover{border:1px solid #ff4800;-webkit-transform:scale(1.03);transform:scale(1.03)}.catalog_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{display:grid;justify-items:center}.catalog_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{align-self:end;justify-self:center}.catalog_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{align-self:center}.box[_ngcontent-%COMP%]{padding:0 10px;display:grid;grid-template-columns:auto 300px}.box_guaranty[_ngcontent-%COMP%]{padding:0 10px;color:#525252}.list_options[_ngcontent-%COMP%]{display:-webkit-box;display:flex;flex-flow:wrap}.list_options[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:10px}.list_aside[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.list_aside[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}'
          ]
        ],
        data: {}
      });
      function Vg(t) {
        return Bs(
          0,
          [
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(2, 0, null, null, 2, 'h2', [['class', 'title']], null, null, null, null, null)),
            (t()(),
            Ts(3, 0, null, null, 1, 'span', [['class', 'text']], null, null, null, null, null)),
            (t()(), Hs(-1, null, ['\u041a\u041e\u041d\u0422\u0410\u041a\u0422\u042b'])),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(), Ts(10, 0, null, null, 6, 'ul', [], null, null, null, null, null)),
            (t()(), Ts(11, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(), Hs(-1, null, ['+375 17 241-08-08'])),
            (t()(), Ts(14, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(), Hs(-1, null, ['+375 17 337-08-08'])),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(), Ts(21, 0, null, null, 6, 'ul', [], null, null, null, null, null)),
            (t()(), Ts(22, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(), Hs(-1, null, ['+375 29 337-30-30'])),
            (t()(), Ts(25, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(), Hs(-1, null, ['+375 29 737-20-23'])),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(), Ts(32, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (t()(), Hs(-1, null, ['info@nabludenie.by'])),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(), Ts(38, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (t()(), Hs(-1, null, ['mihail.dam'])),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(), Ts(44, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u0443\u043b. \u0411\u0438\u0440\u044e\u0437\u043e\u0432\u0430 4, 3-\u0439 \u044d\u0442\u0430\u0436'
            ]))
          ],
          null,
          null
        );
      }
      class Dg {}
      var Lg = He({
        encapsulation: 0,
        styles: [
          [
            '[_nghost-%COMP%]{max-width:1200px;margin:0 auto 20px;display:grid;grid-template-columns:repeat(3,1fr);grid-column-gap:10px}app-map-yandex[_ngcontent-%COMP%]{grid-column:1/span 3}app-question-form[_ngcontent-%COMP%]{grid-column:1/span 2}app-contact-data[_ngcontent-%COMP%]{grid-column:3}'
          ]
        ],
        data: {}
      });
      function Ug(t) {
        return Bs(
          0,
          [
            (t()(), Ts(0, 0, null, null, 1, 'app-map-yandex', [], null, null, null, Mp, Pp)),
            Ql(1, 114688, null, 0, Op, [], null, null),
            (t()(), Ts(2, 0, null, null, 1, 'app-question-form', [], null, null, null, Ig, Ag)),
            Ql(3, 114688, null, 0, Tg, [], null, null),
            (t()(), Ts(4, 0, null, null, 1, 'app-contact-data', [], null, null, null, Vg, Ng)),
            Ql(5, 49152, null, 0, Rg, [], null, null)
          ],
          function(t, n) {
            t(n, 1, 0), t(n, 3, 0);
          },
          null
        );
      }
      function jg(t) {
        return Bs(
          0,
          [
            (t()(), Ts(0, 0, null, null, 1, 'app-page-contacts', [], null, null, null, Ug, Lg)),
            Ql(1, 49152, null, 0, Dg, [], null, null)
          ],
          null,
          null
        );
      }
      var Fg = Sl('app-page-contacts', Dg, jg, {}, {}, []);
      class $g {}
      var Hg = He({
        encapsulation: 0,
        styles: [
          [
            '.button[_ngcontent-%COMP%], a[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{cursor:pointer;display:inline-block;text-align:center;white-space:pre;text-decoration:none;outline:0;color:#494940;-webkit-transition:.2s;transition:.2s}.button[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:hover, button[_ngcontent-%COMP%]:hover{color:#ff4800}input[_ngcontent-%COMP%]{outline:0}[_nghost-%COMP%]{display:block}.svg[_ngcontent-%COMP%]{fill:#ff4800;width:22px;height:22px;-webkit-transition:.6s;transition:.6s}.address__link[_ngcontent-%COMP%], .telephones__link[_ngcontent-%COMP%]{color:#7f7d74;font-size:14px;line-height:18px}.header[_ngcontent-%COMP%]{padding-top:10px;border-top:4px solid #ff4800}.header__container__top[_ngcontent-%COMP%]{margin:0 auto;display:grid;grid-template-columns:repeat(3,1fr);place-items:center center;max-width:1200px;width:100%;height:100px}@media (max-width:760px){.header__container__top[_ngcontent-%COMP%]{grid-template-columns:auto}.header__container__top[_ngcontent-%COMP%]   .header__address[_ngcontent-%COMP%], .header__container__top[_ngcontent-%COMP%]   .header__telephones[_ngcontent-%COMP%]{display:none}}.header__telephones[_ngcontent-%COMP%]{display:grid;-webkit-box-align:end;align-items:end;grid-column-gap:10px;grid-template-columns:repeat(2,auto)}.telephones__link__svg[_ngcontent-%COMP%]   .svg[_ngcontent-%COMP%]{width:36px;height:36px;-webkit-transition:.6s;transition:.6s}.telephones__link__svg[_ngcontent-%COMP%]:hover   .svg[_ngcontent-%COMP%]{fill:#c23801}.header__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:255px}.header__address[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:22px;height:22px}.address__link[_ngcontent-%COMP%]{display:grid;-webkit-box-align:center;align-items:center;grid-column-gap:5px;margin:3px 0;grid-template-columns:repeat(2,-webkit-min-content);grid-template-columns:repeat(2,min-content)}.address__link[_ngcontent-%COMP%]:hover   .svg[_ngcontent-%COMP%]{fill:#c23801}.header__bottom_box[_ngcontent-%COMP%]{padding:10px 0;min-height:50px;box-shadow:0 -3px 7px -2px rgba(40,53,55,.3)}.header__container__bottom[_ngcontent-%COMP%]{display:-webkit-box;display:flex;padding:0 15px;margin:0 auto;max-width:1200px;width:100%;-webkit-box-align:center;align-items:center}.navigation__list[_ngcontent-%COMP%]{display:-webkit-box;display:flex;text-transform:uppercase}.navigation__links[_ngcontent-%COMP%]{font-size:13px;font-weight:600;padding:13px 10px}.header__button__price[_ngcontent-%COMP%]{margin:0 10px;border:1px dashed;text-transform:uppercase;color:#ff4800;background:#fff;font-size:18px;font-weight:600;padding:6px 20px;-webkit-transition:.6s;transition:.6s;outline:0}.header__button__price[_ngcontent-%COMP%]:hover{border:1px dashed #fff;color:#fff;font-size:18px;border-radius:10px;background:#ff4800}@media (max-width:860px){.header__container__bottom[_ngcontent-%COMP%]{-webkit-box-align:end;align-items:end}.navigation__list[_ngcontent-%COMP%]{flex-wrap:wrap}.header__button__price[_ngcontent-%COMP%]{display:none}}.header__form[_ngcontent-%COMP%]{margin-left:auto;display:-webkit-box;display:flex}.form__input[_ngcontent-%COMP%]{height:35px;padding:8px 15px;color:#363633;font-size:13px;line-height:20px;background-color:transparent;border:1px solid #e0e0e0;border-radius:0;box-shadow:none}.form__input[_ngcontent-%COMP%]::-webkit-input-placeholder{font-style:italic}.form__button[_ngcontent-%COMP%]{width:35px;height:35px;font-size:0;background-size:23px;background-repeat:no-repeat;background-position:center;background-color:#ff4800;border:none}.form__button[_ngcontent-%COMP%]   .svg[_ngcontent-%COMP%]{fill:#fff;-webkit-transition:.6s;transition:.6s}.form__button[_ngcontent-%COMP%]:hover{background-size:24px;background-color:#363633}.form__button[_ngcontent-%COMP%]:hover   .svg[_ngcontent-%COMP%]{fill:#ff4800}@media (max-width:1100px){.form__button[_ngcontent-%COMP%]{border-radius:3px}.form__input[_ngcontent-%COMP%]{display:none}}'
          ]
        ],
        data: {}
      });
      function zg(t) {
        return Bs(
          0,
          [
            (t()(),
            Ts(
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
            (t()(), Ts(1, 0, null, null, 1, 'h1', [['hidden', '']], null, null, null, null, null)),
            (t()(), Hs(-1, null, ['\u0414\u041c\u0414 C\u0438\u0441\u0442\u0435\u043c\u0441'])),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(), Ts(9, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(), Hs(-1, null, ['+375 29 337-30-30'])),
            (t()(), Ts(12, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(), Hs(-1, null, ['+375 29 737-20-23'])),
            (t()(), Ts(15, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(), Hs(-1, null, ['+375 17 241-08-08'])),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
              function(t, n, e) {
                var l = !0;
                return (
                  'click' === n &&
                    (l = !1 !== Ll(t, 20).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(20, 671744, null, 0, Vh, [Nh, kc, eo], { routerLink: [0, 'routerLink'] }, null),
            $s(21, 1),
            (t()(),
            Ts(
              22,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', '../../../assets/img/dmd-logo.png']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(), Ts(25, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(), Hs(-1, null, [' mihail.dam '])),
            (t()(), Ts(30, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(), Hs(-1, null, [' info@nabludenie.by '])),
            (t()(), Ts(35, 0, null, null, 6, 'li', [], null, null, null, null, null)),
            (t()(),
            Ts(
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
              function(t, n, e) {
                var l = !0;
                return (
                  'click' === n &&
                    (l = !1 !== Ll(t, 37).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(37, 671744, null, 0, Vh, [Nh, kc, eo], { routerLink: [0, 'routerLink'] }, null),
            $s(38, 1),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Hs(-1, null, [
              ' \u0443\u043b.\u0411\u0438\u0440\u044e\u0437\u043e\u0432\u0430 4, 3-\u0439 \u044d\u0442\u0430\u0436 '
            ])),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(), Ts(46, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (t()(),
            Ts(
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
              function(t, n, e) {
                var l = !0;
                return (
                  'click' === n &&
                    (l = !1 !== Ll(t, 48).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(48, 671744, null, 0, Vh, [Nh, kc, eo], { routerLink: [0, 'routerLink'] }, null),
            $s(49, 1),
            (t()(), Hs(-1, null, ['\u041a\u0410\u0422\u0410\u041b\u041e\u0413'])),
            (t()(), Ts(51, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (t()(),
            Ts(
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
              function(t, n, e) {
                var l = !0;
                return (
                  'click' === n &&
                    (l = !1 !== Ll(t, 53).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(53, 671744, null, 0, Vh, [Nh, kc, eo], { routerLink: [0, 'routerLink'] }, null),
            $s(54, 1),
            (t()(), Hs(-1, null, ['\u041e \u041a\u041e\u041c\u041f\u0410\u041d\u0418\u0418'])),
            (t()(), Ts(56, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (t()(),
            Ts(
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
              function(t, n, e) {
                var l = !0;
                return (
                  'click' === n &&
                    (l = !1 !== Ll(t, 58).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(58, 671744, null, 0, Vh, [Nh, kc, eo], { routerLink: [0, 'routerLink'] }, null),
            $s(59, 1),
            (t()(),
            Hs(-1, null, [
              '\u0422\u0415\u0425.\u041f\u041e\u0414\u0414\u0415\u0420\u0416\u041a\u0410'
            ])),
            (t()(), Ts(61, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (t()(),
            Ts(
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
              function(t, n, e) {
                var l = !0;
                return (
                  'click' === n &&
                    (l = !1 !== Ll(t, 63).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(63, 671744, null, 0, Vh, [Nh, kc, eo], { routerLink: [0, 'routerLink'] }, null),
            $s(64, 1),
            (t()(), Hs(-1, null, ['\u041a\u041b\u0418\u0415\u041d\u0422\u042b'])),
            (t()(), Ts(66, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (t()(),
            Ts(
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
              function(t, n, e) {
                var l = !0;
                return (
                  'click' === n &&
                    (l = !1 !== Ll(t, 68).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(68, 671744, null, 0, Vh, [Nh, kc, eo], { routerLink: [0, 'routerLink'] }, null),
            $s(69, 1),
            (t()(), Hs(-1, null, ['\u0421\u0422\u0410\u0422\u042c\u0418'])),
            (t()(), Ts(71, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (t()(),
            Ts(
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
              function(t, n, e) {
                var l = !0;
                return (
                  'click' === n &&
                    (l = !1 !== Ll(t, 73).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(73, 671744, null, 0, Vh, [Nh, kc, eo], { routerLink: [0, 'routerLink'] }, null),
            $s(74, 1),
            (t()(), Hs(-1, null, ['\u0411\u0420\u0415\u041d\u0414\u042b'])),
            (t()(), Ts(76, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (t()(),
            Ts(
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
              function(t, n, e) {
                var l = !0;
                return (
                  'click' === n &&
                    (l = !1 !== Ll(t, 78).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(78, 671744, null, 0, Vh, [Nh, kc, eo], { routerLink: [0, 'routerLink'] }, null),
            $s(79, 1),
            (t()(), Hs(-1, null, ['\u041a\u041e\u041d\u0422\u0410\u041a\u0422\u042b'])),
            (t()(),
            Ts(
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
            (t()(), Hs(-1, null, ['\u043f\u0440\u0430\u0439\u0441'])),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
          function(t, n) {
            var e = t(n, 21, 0, '/');
            t(n, 20, 0, e);
            var l = t(n, 38, 0, '/contacts');
            t(n, 37, 0, l);
            var r = t(n, 49, 0, '/catalog');
            t(n, 48, 0, r);
            var s = t(n, 54, 0, '/about');
            t(n, 53, 0, s);
            var i = t(n, 59, 0, '/support');
            t(n, 58, 0, i);
            var o = t(n, 64, 0, '/clients');
            t(n, 63, 0, o);
            var u = t(n, 69, 0, '/articles');
            t(n, 68, 0, u);
            var a = t(n, 74, 0, '/brands');
            t(n, 73, 0, a);
            var c = t(n, 79, 0, '/contacts');
            t(n, 78, 0, c);
          },
          function(t, n) {
            t(n, 19, 0, Ll(n, 20).target, Ll(n, 20).href),
              t(n, 36, 0, Ll(n, 37).target, Ll(n, 37).href),
              t(n, 47, 0, Ll(n, 48).target, Ll(n, 48).href),
              t(n, 52, 0, Ll(n, 53).target, Ll(n, 53).href),
              t(n, 57, 0, Ll(n, 58).target, Ll(n, 58).href),
              t(n, 62, 0, Ll(n, 63).target, Ll(n, 63).href),
              t(n, 67, 0, Ll(n, 68).target, Ll(n, 68).href),
              t(n, 72, 0, Ll(n, 73).target, Ll(n, 73).href),
              t(n, 77, 0, Ll(n, 78).target, Ll(n, 78).href);
          }
        );
      }
      class qg {
        constructor() {}
        ngOnInit() {}
      }
      var Bg = He({
        encapsulation: 0,
        styles: [
          [
            '[_nghost-%COMP%]{display:block}a[_ngcontent-%COMP%]{color:#fff;padding:5px 0}a[_ngcontent-%COMP%]:hover{color:#ff4800}li[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:end;align-items:flex-end}.svg[_ngcontent-%COMP%]{width:22px;height:22px;fill:#fff;margin-right:10px}.svg__letter[_ngcontent-%COMP%], .svg__location_pin[_ngcontent-%COMP%], .svg__skype_logo[_ngcontent-%COMP%]{height:17px}.item__svg_box[_ngcontent-%COMP%]{display:-webkit-box;display:flex}.footer__top_line[_ngcontent-%COMP%]{height:45px;background:#ff4800}.footer__container[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(20px,auto) minmax(230px,290px) minmax(230px,870px) minmax(20px,auto);background:#444645;padding:45px 0}.footer__container[_ngcontent-%COMP%]   .container__contacts[_ngcontent-%COMP%]{grid-column:2}.footer__container[_ngcontent-%COMP%]   .container__catalog_list[_ngcontent-%COMP%]{grid-column:3;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column wrap;height:100%;max-height:160px}.footer__container[_ngcontent-%COMP%]   .container__catalog_list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-right:10px}@media (max-width:950px){.footer__container[_ngcontent-%COMP%]   .container__catalog_list[_ngcontent-%COMP%]{max-height:220px}}@media (max-width:750px){.footer__container[_ngcontent-%COMP%]   .container__catalog_list[_ngcontent-%COMP%]{max-height:unset}}@media (max-width:540px){.footer__container[_ngcontent-%COMP%]{grid-template-columns:auto}.footer__container[_ngcontent-%COMP%]   .container__catalog_list[_ngcontent-%COMP%]{display:none}}.footer__bottom[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(20px,auto) minmax(auto,1170px) minmax(20px,auto);font-size:13px;padding:10px 0;color:#fff;background:#373737;border-top:1px solid #383938;box-shadow:inset 0 1px 0 rgba(255,255,255,.1)}.footer__bottom[_ngcontent-%COMP%]   .bottom__wrapper[_ngcontent-%COMP%]{grid-column:2}.footer__bottom[_ngcontent-%COMP%]   .bottom__text[_ngcontent-%COMP%]{color:#ccc;padding:0;margin:5px 0}'
          ]
        ],
        data: {}
      });
      function Gg(t) {
        return Bs(
          0,
          [
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(), Ts(8, 0, null, null, 6, 'ul', [], null, null, null, null, null)),
            (t()(), Ts(9, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(), Hs(-1, null, ['+375 17 241-08-08'])),
            (t()(), Ts(12, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(), Hs(-1, null, ['+375 17 337-08-08'])),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(), Ts(19, 0, null, null, 6, 'ul', [], null, null, null, null, null)),
            (t()(), Ts(20, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(), Hs(-1, null, ['+375 29 337-30-30'])),
            (t()(), Ts(23, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (t()(),
            Ts(
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
            (t()(), Hs(-1, null, ['+375 29 737-20-23'])),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(), Ts(30, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (t()(), Hs(-1, null, ['info@nabludenie.by'])),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(), Ts(36, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (t()(), Hs(-1, null, ['mihail.dam'])),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
              function(t, n, e) {
                var l = !0;
                return (
                  'click' === n &&
                    (l = !1 !== Ll(t, 40).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(40, 671744, null, 0, Vh, [Nh, kc, eo], { routerLink: [0, 'routerLink'] }, null),
            $s(41, 1),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(), Ts(44, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (t()(),
            Hs(-1, null, [
              '\u0443\u043b. \u0411\u0438\u0440\u044e\u0437\u043e\u0432\u0430 4, 3-\u0439 \u044d\u0442\u0430\u0436'
            ])),
            (t()(),
            Ts(
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
            (t()(), Ts(47, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (t()(),
            Ts(
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
              function(t, n, e) {
                var l = !0;
                return (
                  'click' === n &&
                    (l = !1 !== Ll(t, 49).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(49, 671744, null, 0, Vh, [Nh, kc, eo], { routerLink: [0, 'routerLink'] }, null),
            $s(50, 1),
            (t()(), Hs(-1, null, ['IP-\u043a\u0430\u043c\u0435\u0440\u044b'])),
            (t()(), Ts(52, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (t()(),
            Ts(
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
              function(t, n, e) {
                var l = !0;
                return (
                  'click' === n &&
                    (l = !1 !== Ll(t, 54).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(54, 671744, null, 0, Vh, [Nh, kc, eo], { routerLink: [0, 'routerLink'] }, null),
            $s(55, 1),
            (t()(), Hs(-1, null, ['AHD \u043a\u0430\u043c\u0435\u0440\u044b'])),
            (t()(), Ts(57, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (t()(),
            Ts(
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
              function(t, n, e) {
                var l = !0;
                return (
                  'click' === n &&
                    (l = !1 !== Ll(t, 59).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(59, 671744, null, 0, Vh, [Nh, kc, eo], { routerLink: [0, 'routerLink'] }, null),
            $s(60, 1),
            (t()(),
            Hs(-1, null, [
              '\u0412\u0438\u0434\u0435\u043e\u0434\u043e\u043c\u043e\u0444\u043e\u043d\u044b'
            ])),
            (t()(), Ts(62, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (t()(),
            Ts(
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
              function(t, n, e) {
                var l = !0;
                return (
                  'click' === n &&
                    (l = !1 !== Ll(t, 64).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(64, 671744, null, 0, Vh, [Nh, kc, eo], { routerLink: [0, 'routerLink'] }, null),
            $s(65, 1),
            (t()(), Hs(-1, null, ['\u0423\u0434\u043b\u0438\u043d\u0438\u0442\u0435\u043b\u0438'])),
            (t()(), Ts(67, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (t()(),
            Ts(
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
              function(t, n, e) {
                var l = !0;
                return (
                  'click' === n &&
                    (l = !1 !== Ll(t, 69).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(69, 671744, null, 0, Vh, [Nh, kc, eo], { routerLink: [0, 'routerLink'] }, null),
            $s(70, 1),
            (t()(), Hs(-1, null, ['\u0423\u043c\u043d\u044b\u0439 \u0434\u043e\u043c'])),
            (t()(), Ts(72, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (t()(),
            Ts(
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
              function(t, n, e) {
                var l = !0;
                return (
                  'click' === n &&
                    (l = !1 !== Ll(t, 74).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(74, 671744, null, 0, Vh, [Nh, kc, eo], { routerLink: [0, 'routerLink'] }, null),
            $s(75, 1),
            (t()(),
            Hs(-1, null, [
              '\u0411\u043b\u043e\u043a\u0438 \u043f\u0438\u0442\u0430\u043d\u0438\u044f'
            ])),
            (t()(), Ts(77, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (t()(),
            Ts(
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
              function(t, n, e) {
                var l = !0;
                return (
                  'click' === n &&
                    (l = !1 !== Ll(t, 79).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(79, 671744, null, 0, Vh, [Nh, kc, eo], { routerLink: [0, 'routerLink'] }, null),
            $s(80, 1),
            (t()(),
            Hs(-1, null, [
              '\u0410\u043a\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044b \u0421\u041a\u0423\u0414'
            ])),
            (t()(), Ts(82, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (t()(),
            Ts(
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
              function(t, n, e) {
                var l = !0;
                return (
                  'click' === n &&
                    (l = !1 !== Ll(t, 84).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(84, 671744, null, 0, Vh, [Nh, kc, eo], { routerLink: [0, 'routerLink'] }, null),
            $s(85, 1),
            (t()(),
            Hs(-1, null, [
              'GSM \u0441\u0438\u0433\u043d\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f'
            ])),
            (t()(), Ts(87, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (t()(),
            Ts(
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
              function(t, n, e) {
                var l = !0;
                return (
                  'click' === n &&
                    (l = !1 !== Ll(t, 89).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(89, 671744, null, 0, Vh, [Nh, kc, eo], { routerLink: [0, 'routerLink'] }, null),
            $s(90, 1),
            (t()(),
            Hs(-1, null, [
              '\u0420\u043e\u0415 \u043a\u043e\u043c\u043c\u0443\u0442\u0430\u0442\u043e\u0440\u044b'
            ])),
            (t()(), Ts(92, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (t()(),
            Ts(
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
              function(t, n, e) {
                var l = !0;
                return (
                  'click' === n &&
                    (l = !1 !== Ll(t, 94).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(94, 671744, null, 0, Vh, [Nh, kc, eo], { routerLink: [0, 'routerLink'] }, null),
            $s(95, 1),
            (t()(),
            Hs(-1, null, [
              'IP-\u0412\u0438\u0434\u0435\u043e\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u044b'
            ])),
            (t()(), Ts(97, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (t()(),
            Ts(
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
              function(t, n, e) {
                var l = !0;
                return (
                  'click' === n &&
                    (l = !1 !== Ll(t, 99).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(99, 671744, null, 0, Vh, [Nh, kc, eo], { routerLink: [0, 'routerLink'] }, null),
            $s(100, 1),
            (t()(),
            Hs(-1, null, [
              'AHD \u0432\u0438\u0434\u0435\u043e\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u044b'
            ])),
            (t()(), Ts(102, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (t()(),
            Ts(
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
              function(t, n, e) {
                var l = !0;
                return (
                  'click' === n &&
                    (l =
                      !1 !== Ll(t, 104).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(104, 671744, null, 0, Vh, [Nh, kc, eo], { routerLink: [0, 'routerLink'] }, null),
            $s(105, 1),
            (t()(),
            Hs(-1, null, [
              '\u0417\u0430\u043c\u043a\u0438, \u0437\u0430\u0449\u0435\u043b\u043a\u0438, \u0434\u043e\u0432\u043e\u0434\u0447\u0438\u043a\u0438'
            ])),
            (t()(), Ts(107, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (t()(),
            Ts(
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
              function(t, n, e) {
                var l = !0;
                return (
                  'click' === n &&
                    (l =
                      !1 !== Ll(t, 109).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(109, 671744, null, 0, Vh, [Nh, kc, eo], { routerLink: [0, 'routerLink'] }, null),
            $s(110, 1),
            (t()(),
            Hs(-1, null, [
              '\u0418\u043d\u0436\u0435\u043a\u0442\u043e\u0440\u044b \u0438 \u0441\u043f\u043b\u0438\u0442\u0442\u0435\u0440\u044b'
            ])),
            (t()(), Ts(112, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (t()(),
            Ts(
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
              function(t, n, e) {
                var l = !0;
                return (
                  'click' === n &&
                    (l =
                      !1 !== Ll(t, 114).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(114, 671744, null, 0, Vh, [Nh, kc, eo], { routerLink: [0, 'routerLink'] }, null),
            $s(115, 1),
            (t()(),
            Hs(-1, null, [
              '\u0410\u043a\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044b \u0438 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b'
            ])),
            (t()(), Ts(117, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (t()(),
            Ts(
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
              function(t, n, e) {
                var l = !0;
                return (
                  'click' === n &&
                    (l =
                      !1 !== Ll(t, 119).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(119, 671744, null, 0, Vh, [Nh, kc, eo], { routerLink: [0, 'routerLink'] }, null),
            $s(120, 1),
            (t()(),
            Hs(-1, null, [
              '\u0423\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430 \u0440\u0430\u0434\u0438\u043e\u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f'
            ])),
            (t()(), Ts(122, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (t()(),
            Ts(
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
              function(t, n, e) {
                var l = !0;
                return (
                  'click' === n &&
                    (l =
                      !1 !== Ll(t, 124).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(124, 671744, null, 0, Vh, [Nh, kc, eo], { routerLink: [0, 'routerLink'] }, null),
            $s(125, 1),
            (t()(), Hs(-1, null, ['\u0411\u0440\u0435\u043d\u0434\u044b'])),
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Ts(
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
            (t()(),
            Hs(-1, null, [
              '\xa9 2013- 2020. \u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 - free.'
            ])),
            (t()(),
            Ts(
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
            (t()(),
            Hs(-1, null, [
              '\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0441\u0430\u0439\u0442\u0430-\u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0430 \u2013 \u043e\u0431\u044b\u0447\u043d\u044b\u0439 \u043a\u0443\u0440\u0441\u043e\u0432\u043e\u0439 \u0438\u043b\u0438 \u0434\u0438\u043f\u043b\u043e\u043c\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442'
            ]))
          ],
          function(t, n) {
            var e = t(n, 41, 0, '/contacts');
            t(n, 40, 0, e);
            var l = t(n, 50, 0, '/catalog');
            t(n, 49, 0, l);
            var r = t(n, 55, 0, '/catalog');
            t(n, 54, 0, r);
            var s = t(n, 60, 0, '/catalog');
            t(n, 59, 0, s);
            var i = t(n, 65, 0, '/catalog');
            t(n, 64, 0, i);
            var o = t(n, 70, 0, '/catalog');
            t(n, 69, 0, o);
            var u = t(n, 75, 0, '/catalog');
            t(n, 74, 0, u);
            var a = t(n, 80, 0, '/catalog');
            t(n, 79, 0, a);
            var c = t(n, 85, 0, '/catalog');
            t(n, 84, 0, c);
            var h = t(n, 90, 0, '/catalog');
            t(n, 89, 0, h);
            var d = t(n, 95, 0, '/catalog');
            t(n, 94, 0, d);
            var p = t(n, 100, 0, '/catalog');
            t(n, 99, 0, p);
            var g = t(n, 105, 0, '/catalog');
            t(n, 104, 0, g);
            var f = t(n, 110, 0, '/catalog');
            t(n, 109, 0, f);
            var m = t(n, 115, 0, '/catalog');
            t(n, 114, 0, m);
            var _ = t(n, 120, 0, '/catalog');
            t(n, 119, 0, _);
            var v = t(n, 125, 0, '/catalog');
            t(n, 124, 0, v);
          },
          function(t, n) {
            t(n, 39, 0, Ll(n, 40).target, Ll(n, 40).href),
              t(n, 48, 0, Ll(n, 49).target, Ll(n, 49).href),
              t(n, 53, 0, Ll(n, 54).target, Ll(n, 54).href),
              t(n, 58, 0, Ll(n, 59).target, Ll(n, 59).href),
              t(n, 63, 0, Ll(n, 64).target, Ll(n, 64).href),
              t(n, 68, 0, Ll(n, 69).target, Ll(n, 69).href),
              t(n, 73, 0, Ll(n, 74).target, Ll(n, 74).href),
              t(n, 78, 0, Ll(n, 79).target, Ll(n, 79).href),
              t(n, 83, 0, Ll(n, 84).target, Ll(n, 84).href),
              t(n, 88, 0, Ll(n, 89).target, Ll(n, 89).href),
              t(n, 93, 0, Ll(n, 94).target, Ll(n, 94).href),
              t(n, 98, 0, Ll(n, 99).target, Ll(n, 99).href),
              t(n, 103, 0, Ll(n, 104).target, Ll(n, 104).href),
              t(n, 108, 0, Ll(n, 109).target, Ll(n, 109).href),
              t(n, 113, 0, Ll(n, 114).target, Ll(n, 114).href),
              t(n, 118, 0, Ll(n, 119).target, Ll(n, 119).href),
              t(n, 123, 0, Ll(n, 124).target, Ll(n, 124).href);
          }
        );
      }
      var Kg = He({
        encapsulation: 0,
        styles: [
          [
            '*[_ngcontent-%COMP%]{margin:0;padding:0}.content[_ngcontent-%COMP%]{min-height:calc(100vh - 411px)}'
          ]
        ],
        data: {}
      });
      function Wg(t) {
        return Bs(
          0,
          [
            (t()(),
            Ts(0, 0, null, null, 4, 'div', [['class', 'content']], null, null, null, null, null)),
            (t()(), Ts(1, 0, null, null, 1, 'app-header', [], null, null, null, zg, Hg)),
            Ql(2, 49152, null, 0, $g, [], null, null),
            (t()(),
            Ts(3, 16777216, null, null, 1, 'router-outlet', [], null, null, null, null, null)),
            Ql(4, 212992, null, 0, jh, [Uh, Se, Qn, [8, null], xn], null, null),
            (t()(), Ts(5, 0, null, null, 1, 'app-footer', [], null, null, null, Gg, Bg)),
            Ql(6, 114688, null, 0, qg, [], null, null)
          ],
          function(t, n) {
            t(n, 4, 0), t(n, 6, 0);
          },
          null
        );
      }
      function Zg(t) {
        return Bs(
          0,
          [
            (t()(), Ts(0, 0, null, null, 1, 'app-root', [], null, null, null, Wg, Kg)),
            Ql(1, 49152, null, 0, Xi, [], null, null)
          ],
          null,
          null
        );
      }
      var Qg = Sl('app-root', Xi, Zg, {}, {}, []);
      class Yg {}
      class Jg {}
      class Xg {}
      class tf {}
      class nf {}
      class ef {}
      class lf {}
      class rf {}
      class sf {}
      class of {}
      class uf {}
      class af {}
      class cf {}
      class hf {}
      class df {}
      class pf {}
      class gf {}
      class ff {}
      var mf = Qi(Ji, [Xi], function(t) {
        return (function(t) {
          const n = {},
            e = [];
          let l = !1;
          for (let r = 0; r < t.length; r++) {
            const s = t[r];
            s.token === En && !0 === s.value && (l = !0),
              1073741824 & s.flags && e.push(s.token),
              (s.index = r),
              (n[$e(s.token)] = s);
          }
          return { factory: null, providersByKey: n, providers: t, modules: e, isRoot: l };
        })([
          yl(512, Qn, Yn, [[8, [cd, Pd, Dd, $d, Gd, tp, pp, vp, Fg, Qg]], [3, Qn], Dt]),
          yl(5120, Mr, Ss, [[3, Mr]]),
          yl(4608, co, ho, [Mr, [2, ao]]),
          yl(5120, dr, Os, [Gr]),
          yl(5120, Cr, xr, []),
          yl(5120, ye, ks, []),
          yl(5120, we, Es, []),
          yl(4608, oa, ua, [_o]),
          yl(6144, vn, null, [oa]),
          yl(4608, ta, ea, []),
          yl(
            5120,
            Mu,
            function(t, n, e, l, r, s, i, o) {
              return [new Ju(t, n, e), new ia(l), new la(r, s, i, o)];
            },
            [_o, Gr, Sr, _o, _o, ta, Pr, [2, na]]
          ),
          yl(4608, Tu, Tu, [Mu, Gr]),
          yl(135680, Ru, Ru, [_o]),
          yl(4608, Uu, Uu, [Tu, Ru, Cr]),
          yl(6144, le, null, [Uu]),
          yl(6144, Iu, null, [Ru]),
          yl(4608, Xr, Xr, [Gr]),
          yl(5120, kc, ed, [Nh]),
          yl(4608, zh, zh, []),
          yl(6144, $h, null, [zh]),
          yl(135680, qh, qh, [Nh, ds, Vr, On, $h]),
          yl(4608, Hh, Hh, []),
          yl(5120, Bh, Yh, [Nh, vo, Gh]),
          yl(5120, id, sd, [ld]),
          yl(
            5120,
            Or,
            function(t) {
              return [t];
            },
            [id]
          ),
          yl(4608, Qp, Qp, []),
          yl(4608, Og, Og, []),
          yl(1073742336, mo, mo, []),
          yl(1024, Bt, ma, []),
          yl(
            1024,
            ss,
            function() {
              return [Zh()];
            },
            []
          ),
          yl(512, ld, ld, [On]),
          yl(
            1024,
            wr,
            function(t, n) {
              return [
                ((e = t),
                Su('probe', Pu),
                Su(
                  'coreTokens',
                  Object.assign(
                    {},
                    Ou,
                    (e || []).reduce((t, n) => ((t[n.name] = n.token), t), {})
                  )
                ),
                () => Pu),
                rd(n)
              ];
              var e;
            },
            [[2, ss], ld]
          ),
          yl(512, br, br, [[2, wr]]),
          yl(131584, cs, cs, [Gr, Pr, On, Bt, Qn, br]),
          yl(1073742336, Ps, Ps, [cs]),
          yl(1073742336, _a, _a, [[3, _a]]),
          yl(1024, Kh, Xh, [[3, Nh]]),
          yl(512, ec, lc, []),
          yl(512, Uh, Uh, []),
          yl(256, Gh, {}, []),
          yl(1024, eo, Jh, [to, [2, lo], Gh]),
          yl(512, ro, ro, [eo, to]),
          yl(512, Vr, Vr, []),
          yl(512, ds, fs, [Vr, [2, ps]]),
          yl(
            1024,
            Oh,
            function() {
              return [
                [
                  { path: '', component: kd },
                  { path: 'catalog', component: Id },
                  { path: 'about', component: Ld },
                  { path: 'support', component: Hd },
                  { path: 'clients', component: Qd },
                  { path: 'articles', component: ap },
                  { path: 'brands', component: gp },
                  { path: 'contacts', component: Dg }
                ]
              ];
            },
            []
          ),
          yl(1024, Nh, nd, [cs, ec, Uh, ro, On, ds, Vr, Oh, Gh, [2, Mh], [2, Eh]]),
          yl(1073742336, Qh, Qh, [
            [2, Kh],
            [2, Nh]
          ]),
          yl(1073742336, Yg, Yg, []),
          yl(1073742336, Cp, Cp, []),
          yl(1073742336, Jg, Jg, []),
          yl(1073742336, Xg, Xg, []),
          yl(1073742336, tf, tf, []),
          yl(1073742336, nf, nf, []),
          yl(1073742336, ef, ef, []),
          yl(1073742336, lf, lf, []),
          yl(1073742336, rf, rf, []),
          yl(1073742336, sf, sf, []),
          yl(1073742336, of, of, []),
          yl(1073742336, uf, uf, []),
          yl(1073742336, af, af, []),
          yl(1073742336, Sg, Sg, []),
          yl(1073742336, Pg, Pg, []),
          yl(1073742336, Mg, Mg, []),
          yl(1073742336, cf, cf, []),
          yl(1073742336, hf, hf, []),
          yl(1073742336, df, df, []),
          yl(1073742336, pf, pf, []),
          yl(1073742336, gf, gf, []),
          yl(1073742336, ff, ff, []),
          yl(1073742336, Ji, Ji, []),
          yl(256, En, !0, []),
          yl(256, 'API_KEY', '7f51d984-8723-4f7a-83a0-14ef48da9470', [])
        ]);
      });
      (function() {
        if (Kt) throw new Error('Cannot enable prod mode after platform setup.');
        Gt = !1;
      })(),
        fa()
          .bootstrapModuleFactory(mf)
          .catch(t => console.error(t));
    },
    zn8P: function(t, n) {
      function e(t) {
        return Promise.resolve().then(function() {
          var n = new Error("Cannot find module '" + t + "'");
          throw ((n.code = 'MODULE_NOT_FOUND'), n);
        });
      }
      (e.keys = function() {
        return [];
      }),
        (e.resolve = e),
        (t.exports = e),
        (e.id = 'zn8P');
    }
  },
  [[0, 0]]
]);
