(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    0: function(n, t, e) {
      n.exports = e('zUnb');
    },
    zUnb: function(n, t, e) {
      'use strict';
      function l(n) {
        return 'function' == typeof n;
      }
      e.r(t);
      let r = !1;
      const s = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(n) {
          if (n) {
            const n = new Error();
            console.warn(
              'DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' +
                n.stack
            );
          } else r && console.log('RxJS: Back to a better error behavior. Thank you. <3');
          r = n;
        },
        get useDeprecatedSynchronousErrorHandling() {
          return r;
        }
      };
      function i(n) {
        setTimeout(() => {
          throw n;
        });
      }
      const o = {
          closed: !0,
          next(n) {},
          error(n) {
            if (s.useDeprecatedSynchronousErrorHandling) throw n;
            i(n);
          },
          complete() {}
        },
        u = Array.isArray || (n => n && 'number' == typeof n.length);
      function a(n) {
        return null !== n && 'object' == typeof n;
      }
      function c(n) {
        return (
          Error.call(this),
          (this.message = n
            ? `${n.length} errors occurred during unsubscription:\n${n
                .map((n, t) => `${t + 1}) ${n.toString()}`)
                .join('\n  ')}`
            : ''),
          (this.name = 'UnsubscriptionError'),
          (this.errors = n),
          this
        );
      }
      c.prototype = Object.create(Error.prototype);
      const h = c;
      let d = (() => {
        class n {
          constructor(n) {
            (this.closed = !1),
              (this._parent = null),
              (this._parents = null),
              (this._subscriptions = null),
              n && (this._unsubscribe = n);
          }
          unsubscribe() {
            let n,
              t = !1;
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
                (t = !0), (n = d instanceof h ? p(d.errors) : [d]);
              }
            if (u(i))
              for (o = -1, c = i.length; ++o < c; ) {
                const e = i[o];
                if (a(e))
                  try {
                    e.unsubscribe();
                  } catch (d) {
                    (t = !0),
                      (n = n || []),
                      d instanceof h ? (n = n.concat(p(d.errors))) : n.push(d);
                  }
              }
            if (t) throw new h(n);
          }
          add(t) {
            let e = t;
            switch (typeof t) {
              case 'function':
                e = new n(t);
              case 'object':
                if (e === this || e.closed || 'function' != typeof e.unsubscribe) return e;
                if (this.closed) return e.unsubscribe(), e;
                if (!(e instanceof n)) {
                  const t = e;
                  (e = new n()), (e._subscriptions = [t]);
                }
                break;
              default:
                if (!t) return n.EMPTY;
                throw new Error('unrecognized teardown ' + t + ' added to Subscription.');
            }
            if (e._addParent(this)) {
              const n = this._subscriptions;
              n ? n.push(e) : (this._subscriptions = [e]);
            }
            return e;
          }
          remove(n) {
            const t = this._subscriptions;
            if (t) {
              const e = t.indexOf(n);
              -1 !== e && t.splice(e, 1);
            }
          }
          _addParent(n) {
            let { _parent: t, _parents: e } = this;
            return (
              t !== n &&
              (t
                ? e
                  ? -1 === e.indexOf(n) && (e.push(n), !0)
                  : ((this._parents = [n]), !0)
                : ((this._parent = n), !0))
            );
          }
        }
        return (
          (n.EMPTY = (function(n) {
            return (n.closed = !0), n;
          })(new n())),
          n
        );
      })();
      function p(n) {
        return n.reduce((n, t) => n.concat(t instanceof h ? t.errors : t), []);
      }
      const g =
        'function' == typeof Symbol ? Symbol('rxSubscriber') : '@@rxSubscriber_' + Math.random();
      class f extends d {
        constructor(n, t, e) {
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
              if (!n) {
                this.destination = o;
                break;
              }
              if ('object' == typeof n) {
                n instanceof f
                  ? ((this.syncErrorThrowable = n.syncErrorThrowable),
                    (this.destination = n),
                    n.add(this))
                  : ((this.syncErrorThrowable = !0), (this.destination = new m(this, n)));
                break;
              }
            default:
              (this.syncErrorThrowable = !0), (this.destination = new m(this, n, t, e));
          }
        }
        [g]() {
          return this;
        }
        static create(n, t, e) {
          const l = new f(n, t, e);
          return (l.syncErrorThrowable = !1), l;
        }
        next(n) {
          this.isStopped || this._next(n);
        }
        error(n) {
          this.isStopped || ((this.isStopped = !0), this._error(n));
        }
        complete() {
          this.isStopped || ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed || ((this.isStopped = !0), super.unsubscribe());
        }
        _next(n) {
          this.destination.next(n);
        }
        _error(n) {
          this.destination.error(n), this.unsubscribe();
        }
        _complete() {
          this.destination.complete(), this.unsubscribe();
        }
        _unsubscribeAndRecycle() {
          const { _parent: n, _parents: t } = this;
          return (
            (this._parent = null),
            (this._parents = null),
            this.unsubscribe(),
            (this.closed = !1),
            (this.isStopped = !1),
            (this._parent = n),
            (this._parents = t),
            this
          );
        }
      }
      class m extends f {
        constructor(n, t, e, r) {
          let s;
          super(), (this._parentSubscriber = n);
          let i = this;
          l(t)
            ? (s = t)
            : t &&
              ((s = t.next),
              (e = t.error),
              (r = t.complete),
              t !== o &&
                ((i = Object.create(t)),
                l(i.unsubscribe) && this.add(i.unsubscribe.bind(i)),
                (i.unsubscribe = this.unsubscribe.bind(this)))),
            (this._context = i),
            (this._next = s),
            (this._error = e),
            (this._complete = r);
        }
        next(n) {
          if (!this.isStopped && this._next) {
            const { _parentSubscriber: t } = this;
            s.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable
              ? this.__tryOrSetError(t, this._next, n) && this.unsubscribe()
              : this.__tryOrUnsub(this._next, n);
          }
        }
        error(n) {
          if (!this.isStopped) {
            const { _parentSubscriber: t } = this,
              { useDeprecatedSynchronousErrorHandling: e } = s;
            if (this._error)
              e && t.syncErrorThrowable
                ? (this.__tryOrSetError(t, this._error, n), this.unsubscribe())
                : (this.__tryOrUnsub(this._error, n), this.unsubscribe());
            else if (t.syncErrorThrowable)
              e ? ((t.syncErrorValue = n), (t.syncErrorThrown = !0)) : i(n), this.unsubscribe();
            else {
              if ((this.unsubscribe(), e)) throw n;
              i(n);
            }
          }
        }
        complete() {
          if (!this.isStopped) {
            const { _parentSubscriber: n } = this;
            if (this._complete) {
              const t = () => this._complete.call(this._context);
              s.useDeprecatedSynchronousErrorHandling && n.syncErrorThrowable
                ? (this.__tryOrSetError(n, t), this.unsubscribe())
                : (this.__tryOrUnsub(t), this.unsubscribe());
            } else this.unsubscribe();
          }
        }
        __tryOrUnsub(n, t) {
          try {
            n.call(this._context, t);
          } catch (e) {
            if ((this.unsubscribe(), s.useDeprecatedSynchronousErrorHandling)) throw e;
            i(e);
          }
        }
        __tryOrSetError(n, t, e) {
          if (!s.useDeprecatedSynchronousErrorHandling) throw new Error('bad call');
          try {
            t.call(this._context, e);
          } catch (l) {
            return s.useDeprecatedSynchronousErrorHandling
              ? ((n.syncErrorValue = l), (n.syncErrorThrown = !0), !0)
              : (i(l), !0);
          }
          return !1;
        }
        _unsubscribe() {
          const { _parentSubscriber: n } = this;
          (this._context = null), (this._parentSubscriber = null), n.unsubscribe();
        }
      }
      const _ = ('function' == typeof Symbol && Symbol.observable) || '@@observable';
      function v() {}
      function y(...n) {
        return w(n);
      }
      function w(n) {
        return n
          ? 1 === n.length
            ? n[0]
            : function(t) {
                return n.reduce((n, t) => t(n), t);
              }
          : v;
      }
      let b = (() => {
        class n {
          constructor(n) {
            (this._isScalar = !1), n && (this._subscribe = n);
          }
          lift(t) {
            const e = new n();
            return (e.source = this), (e.operator = t), e;
          }
          subscribe(n, t, e) {
            const { operator: l } = this,
              r = (function(n, t, e) {
                if (n) {
                  if (n instanceof f) return n;
                  if (n[g]) return n[g]();
                }
                return n || t || e ? new f(n, t, e) : new f(o);
              })(n, t, e);
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
          _trySubscribe(n) {
            try {
              return this._subscribe(n);
            } catch (t) {
              s.useDeprecatedSynchronousErrorHandling &&
                ((n.syncErrorThrown = !0), (n.syncErrorValue = t)),
                (function(n) {
                  for (; n; ) {
                    const { closed: t, destination: e, isStopped: l } = n;
                    if (t || l) return !1;
                    n = e && e instanceof f ? e : null;
                  }
                  return !0;
                })(n)
                  ? n.error(t)
                  : console.warn(t);
            }
          }
          forEach(n, t) {
            return new (t = C(t))((t, e) => {
              let l;
              l = this.subscribe(
                t => {
                  try {
                    n(t);
                  } catch (r) {
                    e(r), l && l.unsubscribe();
                  }
                },
                e,
                t
              );
            });
          }
          _subscribe(n) {
            const { source: t } = this;
            return t && t.subscribe(n);
          }
          [_]() {
            return this;
          }
          pipe(...n) {
            return 0 === n.length ? this : w(n)(this);
          }
          toPromise(n) {
            return new (n = C(n))((n, t) => {
              let e;
              this.subscribe(
                n => (e = n),
                n => t(n),
                () => n(e)
              );
            });
          }
        }
        return (n.create = t => new n(t)), n;
      })();
      function C(n) {
        if ((n || (n = s.Promise || Promise), !n)) throw new Error('no Promise impl found');
        return n;
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
        constructor(n, t) {
          super(), (this.subject = n), (this.subscriber = t), (this.closed = !1);
        }
        unsubscribe() {
          if (this.closed) return;
          this.closed = !0;
          const n = this.subject,
            t = n.observers;
          if (((this.subject = null), !t || 0 === t.length || n.isStopped || n.closed)) return;
          const e = t.indexOf(this.subscriber);
          -1 !== e && t.splice(e, 1);
        }
      }
      class S extends f {
        constructor(n) {
          super(n), (this.destination = n);
        }
      }
      let O = (() => {
        class n extends b {
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
          lift(n) {
            const t = new P(this, this);
            return (t.operator = n), t;
          }
          next(n) {
            if (this.closed) throw new k();
            if (!this.isStopped) {
              const { observers: t } = this,
                e = t.length,
                l = t.slice();
              for (let r = 0; r < e; r++) l[r].next(n);
            }
          }
          error(n) {
            if (this.closed) throw new k();
            (this.hasError = !0), (this.thrownError = n), (this.isStopped = !0);
            const { observers: t } = this,
              e = t.length,
              l = t.slice();
            for (let r = 0; r < e; r++) l[r].error(n);
            this.observers.length = 0;
          }
          complete() {
            if (this.closed) throw new k();
            this.isStopped = !0;
            const { observers: n } = this,
              t = n.length,
              e = n.slice();
            for (let l = 0; l < t; l++) e[l].complete();
            this.observers.length = 0;
          }
          unsubscribe() {
            (this.isStopped = !0), (this.closed = !0), (this.observers = null);
          }
          _trySubscribe(n) {
            if (this.closed) throw new k();
            return super._trySubscribe(n);
          }
          _subscribe(n) {
            if (this.closed) throw new k();
            return this.hasError
              ? (n.error(this.thrownError), d.EMPTY)
              : this.isStopped
              ? (n.complete(), d.EMPTY)
              : (this.observers.push(n), new E(this, n));
          }
          asObservable() {
            const n = new b();
            return (n.source = this), n;
          }
        }
        return (n.create = (n, t) => new P(n, t)), n;
      })();
      class P extends O {
        constructor(n, t) {
          super(), (this.destination = n), (this.source = t);
        }
        next(n) {
          const { destination: t } = this;
          t && t.next && t.next(n);
        }
        error(n) {
          const { destination: t } = this;
          t && t.error && this.destination.error(n);
        }
        complete() {
          const { destination: n } = this;
          n && n.complete && this.destination.complete();
        }
        _subscribe(n) {
          const { source: t } = this;
          return t ? this.source.subscribe(n) : d.EMPTY;
        }
      }
      function M(n) {
        return n && 'function' == typeof n.schedule;
      }
      class T extends f {
        constructor(n, t, e) {
          super(),
            (this.parent = n),
            (this.outerValue = t),
            (this.outerIndex = e),
            (this.index = 0);
        }
        _next(n) {
          this.parent.notifyNext(this.outerValue, n, this.outerIndex, this.index++, this);
        }
        _error(n) {
          this.parent.notifyError(n, this), this.unsubscribe();
        }
        _complete() {
          this.parent.notifyComplete(this), this.unsubscribe();
        }
      }
      const A = n => t => {
          for (let e = 0, l = n.length; e < l && !t.closed; e++) t.next(n[e]);
          t.closed || t.complete();
        },
        I = n => t => (
          n
            .then(
              n => {
                t.closed || (t.next(n), t.complete());
              },
              n => t.error(n)
            )
            .then(null, i),
          t
        );
      function R() {
        return 'function' == typeof Symbol && Symbol.iterator ? Symbol.iterator : '@@iterator';
      }
      const N = R(),
        V = n => t => {
          const e = n[N]();
          for (;;) {
            const n = e.next();
            if (n.done) {
              t.complete();
              break;
            }
            if ((t.next(n.value), t.closed)) break;
          }
          return (
            'function' == typeof e.return &&
              t.add(() => {
                e.return && e.return();
              }),
            t
          );
        },
        D = n => t => {
          const e = n[_]();
          if ('function' != typeof e.subscribe)
            throw new TypeError('Provided object does not correctly implement Symbol.observable');
          return e.subscribe(t);
        },
        L = n => n && 'number' == typeof n.length && 'function' != typeof n;
      function U(n) {
        return !!n && 'function' != typeof n.subscribe && 'function' == typeof n.then;
      }
      const j = n => {
        if (n instanceof b)
          return t => (n._isScalar ? (t.next(n.value), void t.complete()) : n.subscribe(t));
        if (n && 'function' == typeof n[_]) return D(n);
        if (L(n)) return A(n);
        if (U(n)) return I(n);
        if (n && 'function' == typeof n[N]) return V(n);
        {
          const t = a(n) ? 'an invalid object' : `'${n}'`;
          throw new TypeError(
            `You provided ${t} where a stream was expected.` +
              ' You can provide an Observable, Promise, Array, or Iterable.'
          );
        }
      };
      function F(n, t, e, l, r = new T(n, e, l)) {
        if (!r.closed) return j(t)(r);
      }
      class $ extends f {
        notifyNext(n, t, e, l, r) {
          this.destination.next(t);
        }
        notifyError(n, t) {
          this.destination.error(n);
        }
        notifyComplete(n) {
          this.destination.complete();
        }
      }
      function H(n, t) {
        return function(e) {
          if ('function' != typeof n)
            throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
          return e.lift(new z(n, t));
        };
      }
      class z {
        constructor(n, t) {
          (this.project = n), (this.thisArg = t);
        }
        call(n, t) {
          return t.subscribe(new q(n, this.project, this.thisArg));
        }
      }
      class q extends f {
        constructor(n, t, e) {
          super(n), (this.project = t), (this.count = 0), (this.thisArg = e || this);
        }
        _next(n) {
          let t;
          try {
            t = this.project.call(this.thisArg, n, this.count++);
          } catch (e) {
            return void this.destination.error(e);
          }
          this.destination.next(t);
        }
      }
      function B(n, t) {
        return new b(
          t
            ? e => {
                const l = new d();
                let r = 0;
                return (
                  l.add(
                    t.schedule(function() {
                      r !== n.length
                        ? (e.next(n[r++]), e.closed || l.add(this.schedule()))
                        : e.complete();
                    })
                  ),
                  l
                );
              }
            : A(n)
        );
      }
      function G(n, t) {
        if (!t) return n instanceof b ? n : new b(j(n));
        if (null != n) {
          if (
            (function(n) {
              return n && 'function' == typeof n[_];
            })(n)
          )
            return (function(n, t) {
              return new b(
                t
                  ? e => {
                      const l = new d();
                      return (
                        l.add(
                          t.schedule(() => {
                            const r = n[_]();
                            l.add(
                              r.subscribe({
                                next(n) {
                                  l.add(t.schedule(() => e.next(n)));
                                },
                                error(n) {
                                  l.add(t.schedule(() => e.error(n)));
                                },
                                complete() {
                                  l.add(t.schedule(() => e.complete()));
                                }
                              })
                            );
                          })
                        ),
                        l
                      );
                    }
                  : D(n)
              );
            })(n, t);
          if (U(n))
            return (function(n, t) {
              return new b(
                t
                  ? e => {
                      const l = new d();
                      return (
                        l.add(
                          t.schedule(() =>
                            n.then(
                              n => {
                                l.add(
                                  t.schedule(() => {
                                    e.next(n), l.add(t.schedule(() => e.complete()));
                                  })
                                );
                              },
                              n => {
                                l.add(t.schedule(() => e.error(n)));
                              }
                            )
                          )
                        ),
                        l
                      );
                    }
                  : I(n)
              );
            })(n, t);
          if (L(n)) return B(n, t);
          if (
            (function(n) {
              return n && 'function' == typeof n[N];
            })(n) ||
            'string' == typeof n
          )
            return (function(n, t) {
              if (!n) throw new Error('Iterable cannot be null');
              return new b(
                t
                  ? e => {
                      const l = new d();
                      let r;
                      return (
                        l.add(() => {
                          r && 'function' == typeof r.return && r.return();
                        }),
                        l.add(
                          t.schedule(() => {
                            (r = n[N]()),
                              l.add(
                                t.schedule(function() {
                                  if (e.closed) return;
                                  let n, t;
                                  try {
                                    const e = r.next();
                                    (n = e.value), (t = e.done);
                                  } catch (l) {
                                    return void e.error(l);
                                  }
                                  t ? e.complete() : (e.next(n), this.schedule());
                                })
                              );
                          })
                        ),
                        l
                      );
                    }
                  : V(n)
              );
            })(n, t);
        }
        throw new TypeError(((null !== n && typeof n) || n) + ' is not observable');
      }
      function K(n, t, e = Number.POSITIVE_INFINITY) {
        return 'function' == typeof t
          ? l => l.pipe(K((e, l) => G(n(e, l)).pipe(H((n, r) => t(e, n, l, r))), e))
          : ('number' == typeof t && (e = t), t => t.lift(new W(n, e)));
      }
      class W {
        constructor(n, t = Number.POSITIVE_INFINITY) {
          (this.project = n), (this.concurrent = t);
        }
        call(n, t) {
          return t.subscribe(new Z(n, this.project, this.concurrent));
        }
      }
      class Z extends $ {
        constructor(n, t, e = Number.POSITIVE_INFINITY) {
          super(n),
            (this.project = t),
            (this.concurrent = e),
            (this.hasCompleted = !1),
            (this.buffer = []),
            (this.active = 0),
            (this.index = 0);
        }
        _next(n) {
          this.active < this.concurrent ? this._tryNext(n) : this.buffer.push(n);
        }
        _tryNext(n) {
          let t;
          const e = this.index++;
          try {
            t = this.project(n, e);
          } catch (l) {
            return void this.destination.error(l);
          }
          this.active++, this._innerSub(t, n, e);
        }
        _innerSub(n, t, e) {
          const l = new T(this, void 0, void 0);
          this.destination.add(l), F(this, n, t, e, l);
        }
        _complete() {
          (this.hasCompleted = !0),
            0 === this.active && 0 === this.buffer.length && this.destination.complete(),
            this.unsubscribe();
        }
        notifyNext(n, t, e, l, r) {
          this.destination.next(t);
        }
        notifyComplete(n) {
          const t = this.buffer;
          this.remove(n),
            this.active--,
            t.length > 0
              ? this._next(t.shift())
              : 0 === this.active && this.hasCompleted && this.destination.complete();
        }
      }
      function Q(n) {
        return n;
      }
      function Y(n = Number.POSITIVE_INFINITY) {
        return K(Q, n);
      }
      function J() {
        return function(n) {
          return n.lift(new X(n));
        };
      }
      class X {
        constructor(n) {
          this.connectable = n;
        }
        call(n, t) {
          const { connectable: e } = this;
          e._refCount++;
          const l = new nn(n, e),
            r = t.subscribe(l);
          return l.closed || (l.connection = e.connect()), r;
        }
      }
      class nn extends f {
        constructor(n, t) {
          super(n), (this.connectable = t);
        }
        _unsubscribe() {
          const { connectable: n } = this;
          if (!n) return void (this.connection = null);
          this.connectable = null;
          const t = n._refCount;
          if (t <= 0) return void (this.connection = null);
          if (((n._refCount = t - 1), t > 1)) return void (this.connection = null);
          const { connection: e } = this,
            l = n._connection;
          (this.connection = null), !l || (e && l !== e) || l.unsubscribe();
        }
      }
      const tn = class extends b {
          constructor(n, t) {
            super(),
              (this.source = n),
              (this.subjectFactory = t),
              (this._refCount = 0),
              (this._isComplete = !1);
          }
          _subscribe(n) {
            return this.getSubject().subscribe(n);
          }
          getSubject() {
            const n = this._subject;
            return (n && !n.isStopped) || (this._subject = this.subjectFactory()), this._subject;
          }
          connect() {
            let n = this._connection;
            return (
              n ||
                ((this._isComplete = !1),
                (n = this._connection = new d()),
                n.add(this.source.subscribe(new ln(this.getSubject(), this))),
                n.closed ? ((this._connection = null), (n = d.EMPTY)) : (this._connection = n)),
              n
            );
          }
          refCount() {
            return J()(this);
          }
        }.prototype,
        en = {
          operator: { value: null },
          _refCount: { value: 0, writable: !0 },
          _subject: { value: null, writable: !0 },
          _connection: { value: null, writable: !0 },
          _subscribe: { value: tn._subscribe },
          _isComplete: { value: tn._isComplete, writable: !0 },
          getSubject: { value: tn.getSubject },
          connect: { value: tn.connect },
          refCount: { value: tn.refCount }
        };
      class ln extends S {
        constructor(n, t) {
          super(n), (this.connectable = t);
        }
        _error(n) {
          this._unsubscribe(), super._error(n);
        }
        _complete() {
          (this.connectable._isComplete = !0), this._unsubscribe(), super._complete();
        }
        _unsubscribe() {
          const n = this.connectable;
          if (n) {
            this.connectable = null;
            const t = n._connection;
            (n._refCount = 0), (n._subject = null), (n._connection = null), t && t.unsubscribe();
          }
        }
      }
      function rn() {
        return new O();
      }
      function sn(n, t, e) {
        const l = (function(n) {
          return function(...t) {
            if (n) {
              const e = n(...t);
              for (const n in e) this[n] = e[n];
            }
          };
        })(t);
        function r(...n) {
          if (this instanceof r) return l.apply(this, n), this;
          const t = new r(...n);
          return (e.annotation = t), e;
          function e(n, e, l) {
            const r = n.hasOwnProperty('__parameters__')
              ? n.__parameters__
              : Object.defineProperty(n, '__parameters__', { value: [] }).__parameters__;
            for (; r.length <= l; ) r.push(null);
            return (r[l] = r[l] || []).push(t), n;
          }
        }
        return (
          e && (r.prototype = Object.create(e.prototype)),
          (r.prototype.ngMetadataName = n),
          (r.annotationCls = r),
          r
        );
      }
      const on = sn('Inject', n => ({ token: n })),
        un = sn('Optional'),
        an = sn('Self'),
        cn = sn('SkipSelf');
      var hn = (function(n) {
        return (
          (n[(n.Default = 0)] = 'Default'),
          (n[(n.Host = 1)] = 'Host'),
          (n[(n.Self = 2)] = 'Self'),
          (n[(n.SkipSelf = 4)] = 'SkipSelf'),
          (n[(n.Optional = 8)] = 'Optional'),
          n
        );
      })({});
      function dn(n) {
        for (let t in n) if (n[t] === dn) return t;
        throw Error('Could not find renamed property on target object.');
      }
      function pn(n) {
        return {
          token: n.token,
          providedIn: n.providedIn || null,
          factory: n.factory,
          value: void 0
        };
      }
      const gn = pn;
      function fn(n) {
        const t = n[mn];
        return t && t.token === n ? t : null;
      }
      const mn = dn({ ngInjectableDef: dn });
      function _n(n) {
        if ('string' == typeof n) return n;
        if (n instanceof Array) return '[' + n.map(_n).join(', ') + ']';
        if (null == n) return '' + n;
        if (n.overriddenName) return `${n.overriddenName}`;
        if (n.name) return `${n.name}`;
        const t = n.toString();
        if (null == t) return '' + t;
        const e = t.indexOf('\n');
        return -1 === e ? t : t.substring(0, e);
      }
      const vn = dn({ __forward_ref__: dn });
      function yn(n) {
        return (
          (n.__forward_ref__ = yn),
          (n.toString = function() {
            return _n(this());
          }),
          n
        );
      }
      function wn(n) {
        const t = n;
        return 'function' == typeof t && t.hasOwnProperty(vn) && t.__forward_ref__ === yn ? t() : n;
      }
      const bn = 'undefined' != typeof globalThis && globalThis,
        Cn = 'undefined' != typeof window && window,
        xn =
          'undefined' != typeof self &&
          'undefined' != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          self,
        kn = 'undefined' != typeof global && global,
        En = bn || kn || Cn || xn;
      class Sn {
        constructor(n, t) {
          (this._desc = n),
            (this.ngMetadataName = 'InjectionToken'),
            (this.ngInjectableDef = void 0),
            'number' == typeof t
              ? (this.__NG_ELEMENT_ID__ = t)
              : void 0 !== t &&
                (this.ngInjectableDef = pn({
                  token: this,
                  providedIn: t.providedIn || 'root',
                  factory: t.factory
                }));
        }
        toString() {
          return `InjectionToken ${this._desc}`;
        }
      }
      const On = new Sn('INJECTOR', -1),
        Pn = new Object(),
        Mn = /\n/gm,
        Tn = dn({ provide: String, useValue: dn });
      let An = void 0;
      function In(n) {
        const t = An;
        return (An = n), t;
      }
      function Rn(n, t = hn.Default) {
        return (function(n, t = hn.Default) {
          if (void 0 === An) throw new Error('inject() must be called from an injection context');
          return null === An
            ? (function(n, t, e) {
                const l = fn(n);
                if (l && 'root' == l.providedIn)
                  return void 0 === l.value ? (l.value = l.factory()) : l.value;
                if (e & hn.Optional) return null;
                throw new Error(`Injector: NOT_FOUND [${_n(n)}]`);
              })(n, 0, t)
            : An.get(n, t & hn.Optional ? null : void 0, t);
        })(n, t);
      }
      const Nn = Rn;
      class Vn {
        get(n, t = Pn) {
          if (t === Pn) {
            const t = new Error(`NullInjectorError: No provider for ${_n(n)}!`);
            throw ((t.name = 'NullInjectorError'), t);
          }
          return t;
        }
      }
      function Dn(n, t, e, l = null) {
        n = n && '\n' === n.charAt(0) && '\u0275' == n.charAt(1) ? n.substr(2) : n;
        let r = _n(t);
        if (t instanceof Array) r = t.map(_n).join(' -> ');
        else if ('object' == typeof t) {
          let n = [];
          for (let e in t)
            if (t.hasOwnProperty(e)) {
              let l = t[e];
              n.push(e + ':' + ('string' == typeof l ? JSON.stringify(l) : _n(l)));
            }
          r = `{${n.join(', ')}}`;
        }
        return `${e}${l ? '(' + l + ')' : ''}[${r}]: ${n.replace(Mn, '\n  ')}`;
      }
      class Ln {}
      class Un {}
      function jn(n, t, e) {
        t >= n.length ? n.push(e) : n.splice(t, 0, e);
      }
      function Fn(n, t) {
        return t >= n.length - 1 ? n.pop() : n.splice(t, 1)[0];
      }
      const $n = (function() {
          var n = { Emulated: 0, Native: 1, None: 2, ShadowDom: 3 };
          return (
            (n[n.Emulated] = 'Emulated'),
            (n[n.Native] = 'Native'),
            (n[n.None] = 'None'),
            (n[n.ShadowDom] = 'ShadowDom'),
            n
          );
        })(),
        Hn = (() =>
          (
            ('undefined' != typeof requestAnimationFrame && requestAnimationFrame) ||
            setTimeout
          ).bind(En))();
      function zn(n) {
        return n.ngDebugContext;
      }
      function qn(n) {
        return n.ngOriginalError;
      }
      function Bn(n, ...t) {
        n.error(...t);
      }
      class Gn {
        constructor() {
          this._console = console;
        }
        handleError(n) {
          const t = this._findOriginalError(n),
            e = this._findContext(n),
            l = (function(n) {
              return n.ngErrorLogger || Bn;
            })(n);
          l(this._console, 'ERROR', n),
            t && l(this._console, 'ORIGINAL ERROR', t),
            e && l(this._console, 'ERROR CONTEXT', e);
        }
        _findContext(n) {
          return n ? (zn(n) ? zn(n) : this._findContext(qn(n))) : null;
        }
        _findOriginalError(n) {
          let t = qn(n);
          for (; t && qn(t); ) t = qn(t);
          return t;
        }
      }
      let Kn = !0,
        Wn = !1;
      function Zn() {
        return (Wn = !0), Kn;
      }
      class Qn {
        constructor(n) {
          if (
            ((this.defaultDoc = n),
            (this.inertDocument = this.defaultDoc.implementation.createHTMLDocument(
              'sanitization-inert'
            )),
            (this.inertBodyElement = this.inertDocument.body),
            null == this.inertBodyElement)
          ) {
            const n = this.inertDocument.createElement('html');
            this.inertDocument.appendChild(n),
              (this.inertBodyElement = this.inertDocument.createElement('body')),
              n.appendChild(this.inertBodyElement);
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
        getInertBodyElement_XHR(n) {
          n = '<body><remove></remove>' + n + '</body>';
          try {
            n = encodeURI(n);
          } catch (l) {
            return null;
          }
          const t = new XMLHttpRequest();
          (t.responseType = 'document'),
            t.open('GET', 'data:text/html;charset=utf-8,' + n, !1),
            t.send(void 0);
          const e = t.response.body;
          return e.removeChild(e.firstChild), e;
        }
        getInertBodyElement_DOMParser(n) {
          n = '<body><remove></remove>' + n + '</body>';
          try {
            const t = new window.DOMParser().parseFromString(n, 'text/html').body;
            return t.removeChild(t.firstChild), t;
          } catch (t) {
            return null;
          }
        }
        getInertBodyElement_InertDocument(n) {
          const t = this.inertDocument.createElement('template');
          return 'content' in t
            ? ((t.innerHTML = n), t)
            : ((this.inertBodyElement.innerHTML = n),
              this.defaultDoc.documentMode && this.stripCustomNsAttrs(this.inertBodyElement),
              this.inertBodyElement);
        }
        stripCustomNsAttrs(n) {
          const t = n.attributes;
          for (let l = t.length - 1; 0 < l; l--) {
            const e = t.item(l).name;
            ('xmlns:ns1' !== e && 0 !== e.indexOf('ns1:')) || n.removeAttribute(e);
          }
          let e = n.firstChild;
          for (; e; )
            e.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(e), (e = e.nextSibling);
        }
      }
      const Yn = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        Jn = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
      function Xn(n) {
        return (n = String(n)).match(Yn) || n.match(Jn)
          ? n
          : (Zn() &&
              console.warn(
                `WARNING: sanitizing unsafe URL value ${n} (see http://g.co/ng/security#xss)`
              ),
            'unsafe:' + n);
      }
      function nt(n) {
        const t = {};
        for (const e of n.split(',')) t[e] = !0;
        return t;
      }
      function tt(...n) {
        const t = {};
        for (const e of n) for (const n in e) e.hasOwnProperty(n) && (t[n] = !0);
        return t;
      }
      const et = nt('area,br,col,hr,img,wbr'),
        lt = nt('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr'),
        rt = nt('rp,rt'),
        st = tt(rt, lt),
        it = tt(
          et,
          tt(
            lt,
            nt(
              'address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul'
            )
          ),
          tt(
            rt,
            nt(
              'a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video'
            )
          ),
          st
        ),
        ot = nt('background,cite,href,itemtype,longdesc,poster,src,xlink:href'),
        ut = nt('srcset'),
        at = tt(
          ot,
          ut,
          nt(
            'abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width'
          ),
          nt(
            'aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext'
          )
        ),
        ct = nt('script,style,template');
      class ht {
        constructor() {
          (this.sanitizedSomething = !1), (this.buf = []);
        }
        sanitizeChildren(n) {
          let t = n.firstChild,
            e = !0;
          for (; t; )
            if (
              (t.nodeType === Node.ELEMENT_NODE
                ? (e = this.startElement(t))
                : t.nodeType === Node.TEXT_NODE
                ? this.chars(t.nodeValue)
                : (this.sanitizedSomething = !0),
              e && t.firstChild)
            )
              t = t.firstChild;
            else
              for (; t; ) {
                t.nodeType === Node.ELEMENT_NODE && this.endElement(t);
                let n = this.checkClobberedElement(t, t.nextSibling);
                if (n) {
                  t = n;
                  break;
                }
                t = this.checkClobberedElement(t, t.parentNode);
              }
          return this.buf.join('');
        }
        startElement(n) {
          const t = n.nodeName.toLowerCase();
          if (!it.hasOwnProperty(t)) return (this.sanitizedSomething = !0), !ct.hasOwnProperty(t);
          this.buf.push('<'), this.buf.push(t);
          const e = n.attributes;
          for (let r = 0; r < e.length; r++) {
            const n = e.item(r),
              t = n.name,
              s = t.toLowerCase();
            if (!at.hasOwnProperty(s)) {
              this.sanitizedSomething = !0;
              continue;
            }
            let i = n.value;
            ot[s] && (i = Xn(i)),
              ut[s] &&
                ((l = i),
                (i = (l = String(l))
                  .split(',')
                  .map(n => Xn(n.trim()))
                  .join(', '))),
              this.buf.push(' ', t, '="', gt(i), '"');
          }
          var l;
          return this.buf.push('>'), !0;
        }
        endElement(n) {
          const t = n.nodeName.toLowerCase();
          it.hasOwnProperty(t) &&
            !et.hasOwnProperty(t) &&
            (this.buf.push('</'), this.buf.push(t), this.buf.push('>'));
        }
        chars(n) {
          this.buf.push(gt(n));
        }
        checkClobberedElement(n, t) {
          if (
            t &&
            (n.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) ===
              Node.DOCUMENT_POSITION_CONTAINED_BY
          )
            throw new Error(
              `Failed to sanitize html because the element is clobbered: ${n.outerHTML}`
            );
          return t;
        }
      }
      const dt = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        pt = /([^\#-~ |!])/g;
      function gt(n) {
        return n
          .replace(/&/g, '&amp;')
          .replace(dt, function(n) {
            return (
              '&#' + (1024 * (n.charCodeAt(0) - 55296) + (n.charCodeAt(1) - 56320) + 65536) + ';'
            );
          })
          .replace(pt, function(n) {
            return '&#' + n.charCodeAt(0) + ';';
          })
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
      }
      let ft;
      function mt(n) {
        return 'content' in n &&
          (function(n) {
            return n.nodeType === Node.ELEMENT_NODE && 'TEMPLATE' === n.nodeName;
          })(n)
          ? n.content
          : null;
      }
      const _t = (function() {
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
      })();
      class vt {}
      const yt = new RegExp(
          '^([-,."\'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|Z|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$',
          'g'
        ),
        wt = /^url\(([^)]+)\)$/,
        bt = /([A-Z])/g;
      function Ct(n) {
        try {
          return null != n ? n.toString().slice(0, 30) : n;
        } catch (t) {
          return '[ERROR] Exception while trying to serialize the value';
        }
      }
      let xt = (() => {
        class n {}
        return (n.__NG_ELEMENT_ID__ = () => kt()), n;
      })();
      const kt = (...n) => {},
        Et = new Sn('The presence of this token marks an injector as being the root injector.'),
        St = function(n, t, e) {
          return new It(n, t, e);
        };
      let Ot = (() => {
        class n {
          static create(n, t) {
            return Array.isArray(n) ? St(n, t, '') : St(n.providers, n.parent, n.name || '');
          }
        }
        return (
          (n.THROW_IF_NOT_FOUND = Pn),
          (n.NULL = new Vn()),
          (n.ngInjectableDef = pn({ token: n, providedIn: 'any', factory: () => Rn(On) })),
          (n.__NG_ELEMENT_ID__ = -1),
          n
        );
      })();
      const Pt = function(n) {
          return n;
        },
        Mt = [],
        Tt = Pt,
        At = function() {
          return Array.prototype.slice.call(arguments);
        };
      class It {
        constructor(n, t = Ot.NULL, e = null) {
          (this.parent = t), (this.source = e);
          const l = (this._records = new Map());
          l.set(Ot, { token: Ot, fn: Pt, deps: Mt, value: this, useNew: !1 }),
            l.set(On, { token: On, fn: Pt, deps: Mt, value: this, useNew: !1 }),
            (function n(t, e) {
              if (e)
                if ((e = wn(e)) instanceof Array) for (let l = 0; l < e.length; l++) n(t, e[l]);
                else {
                  if ('function' == typeof e) throw Nt('Function/Class not supported', e);
                  if (!e || 'object' != typeof e || !e.provide) throw Nt('Unexpected provider', e);
                  {
                    let n = wn(e.provide);
                    const l = (function(n) {
                      const t = (function(n) {
                        let t = Mt;
                        const e = n.deps;
                        if (e && e.length) {
                          t = [];
                          for (let n = 0; n < e.length; n++) {
                            let l = 6,
                              r = wn(e[n]);
                            if (r instanceof Array)
                              for (let n = 0, t = r; n < t.length; n++) {
                                const e = t[n];
                                e instanceof un || e == un
                                  ? (l |= 1)
                                  : e instanceof cn || e == cn
                                  ? (l &= -3)
                                  : e instanceof an || e == an
                                  ? (l &= -5)
                                  : (r = e instanceof on ? e.token : wn(e));
                              }
                            t.push({ token: r, options: l });
                          }
                        } else if (n.useExisting) t = [{ token: wn(n.useExisting), options: 6 }];
                        else if (!(e || Tn in n)) throw Nt("'deps' required", n);
                        return t;
                      })(n);
                      let e = Pt,
                        l = Mt,
                        r = !1,
                        s = wn(n.provide);
                      if (Tn in n) l = n.useValue;
                      else if (n.useFactory) e = n.useFactory;
                      else if (n.useExisting);
                      else if (n.useClass) (r = !0), (e = wn(n.useClass));
                      else {
                        if ('function' != typeof s)
                          throw Nt(
                            'StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable',
                            n
                          );
                        (r = !0), (e = s);
                      }
                      return { deps: t, fn: e, useNew: r, value: l };
                    })(e);
                    if (!0 === e.multi) {
                      let l = t.get(n);
                      if (l) {
                        if (l.fn !== At) throw Rt(n);
                      } else
                        t.set(
                          n,
                          (l = { token: e.provide, deps: [], useNew: !1, fn: At, value: Mt })
                        );
                      (n = e), l.deps.push({ token: n, options: 6 });
                    }
                    const r = t.get(n);
                    if (r && r.fn == At) throw Rt(n);
                    t.set(n, l);
                  }
                }
            })(l, n);
        }
        get(n, t, e = hn.Default) {
          const l = this._records.get(n);
          try {
            return (function n(t, e, l, r, s, i) {
              try {
                return (function(t, e, l, r, s, i) {
                  let o;
                  if (!e || i & hn.SkipSelf) i & hn.Self || (o = r.get(t, s, hn.Default));
                  else {
                    if (((o = e.value), o == Tt)) throw Error('\u0275Circular dependency');
                    if (o === Mt) {
                      e.value = Tt;
                      let t = void 0,
                        s = e.useNew,
                        i = e.fn,
                        u = e.deps,
                        a = Mt;
                      if (u.length) {
                        a = [];
                        for (let t = 0; t < u.length; t++) {
                          const e = u[t],
                            s = e.options,
                            i = 2 & s ? l.get(e.token) : void 0;
                          a.push(
                            n(
                              e.token,
                              i,
                              l,
                              i || 4 & s ? r : Ot.NULL,
                              1 & s ? null : Ot.THROW_IF_NOT_FOUND,
                              hn.Default
                            )
                          );
                        }
                      }
                      e.value = o = s ? new i(...a) : i.apply(t, a);
                    }
                  }
                  return o;
                })(t, e, l, r, s, i);
              } catch (o) {
                throw (o instanceof Error || (o = new Error(o)),
                (o.ngTempTokenPath = o.ngTempTokenPath || []).unshift(t),
                e && e.value == Tt && (e.value = Mt),
                o);
              }
            })(n, l, this._records, this.parent, t, e);
          } catch (r) {
            return (function(n, t, e, l) {
              const r = n.ngTempTokenPath;
              throw (t.__source && r.unshift(t.__source),
              (n.message = Dn('\n' + n.message, r, 'StaticInjectorError', l)),
              (n.ngTokenPath = r),
              (n.ngTempTokenPath = null),
              n);
            })(r, n, 0, this.source);
          }
        }
        toString() {
          const n = [];
          return this._records.forEach((t, e) => n.push(_n(e))), `StaticInjector[${n.join(', ')}]`;
        }
      }
      function Rt(n) {
        return Nt('Cannot mix multi providers and regular providers', n);
      }
      function Nt(n, t) {
        return new Error(Dn(n, t, 'StaticInjectorError'));
      }
      const Vt = new Sn('AnalyzeForEntryComponents');
      let Dt = null;
      function Lt() {
        if (!Dt) {
          const n = En.Symbol;
          if (n && n.iterator) Dt = n.iterator;
          else {
            const n = Object.getOwnPropertyNames(Map.prototype);
            for (let t = 0; t < n.length; ++t) {
              const e = n[t];
              'entries' !== e &&
                'size' !== e &&
                Map.prototype[e] === Map.prototype.entries &&
                (Dt = e);
            }
          }
        }
        return Dt;
      }
      function Ut(n, t) {
        return n === t || ('number' == typeof n && 'number' == typeof t && isNaN(n) && isNaN(t));
      }
      function jt(n, t) {
        const e = $t(n),
          l = $t(t);
        if (e && l)
          return (function(n, t, e) {
            const l = n[Lt()](),
              r = t[Lt()]();
            for (;;) {
              const n = l.next(),
                t = r.next();
              if (n.done && t.done) return !0;
              if (n.done || t.done) return !1;
              if (!e(n.value, t.value)) return !1;
            }
          })(n, t, jt);
        {
          const r = n && ('object' == typeof n || 'function' == typeof n),
            s = t && ('object' == typeof t || 'function' == typeof t);
          return !(e || !r || l || !s) || Ut(n, t);
        }
      }
      class Ft {
        constructor(n) {
          this.wrapped = n;
        }
        static wrap(n) {
          return new Ft(n);
        }
        static unwrap(n) {
          return Ft.isWrapped(n) ? n.wrapped : n;
        }
        static isWrapped(n) {
          return n instanceof Ft;
        }
      }
      function $t(n) {
        return !!Ht(n) && (Array.isArray(n) || (!(n instanceof Map) && Lt() in n));
      }
      function Ht(n) {
        return null !== n && ('function' == typeof n || 'object' == typeof n);
      }
      function zt(n) {
        return !!n && 'function' == typeof n.then;
      }
      function qt(n) {
        return !!n && 'function' == typeof n.subscribe;
      }
      class Bt {
        constructor(n, t, e) {
          (this.previousValue = n), (this.currentValue = t), (this.firstChange = e);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      class Gt {}
      function Kt(n) {
        const t = Error(
          `No component factory found for ${_n(n)}. Did you add it to @NgModule.entryComponents?`
        );
        return (t[Wt] = n), t;
      }
      const Wt = 'ngComponent';
      class Zt {
        resolveComponentFactory(n) {
          throw Kt(n);
        }
      }
      let Qt = (() => {
        class n {}
        return (n.NULL = new Zt()), n;
      })();
      class Yt {
        constructor(n, t, e) {
          (this._parent = t), (this._ngModule = e), (this._factories = new Map());
          for (let l = 0; l < n.length; l++) {
            const t = n[l];
            this._factories.set(t.componentType, t);
          }
        }
        resolveComponentFactory(n) {
          let t = this._factories.get(n);
          if ((!t && this._parent && (t = this._parent.resolveComponentFactory(n)), !t))
            throw Kt(n);
          return new Jt(t, this._ngModule);
        }
      }
      class Jt extends Gt {
        constructor(n, t) {
          super(),
            (this.factory = n),
            (this.ngModule = t),
            (this.selector = n.selector),
            (this.componentType = n.componentType),
            (this.ngContentSelectors = n.ngContentSelectors),
            (this.inputs = n.inputs),
            (this.outputs = n.outputs);
        }
        create(n, t, e, l) {
          return this.factory.create(n, t, e, l || this.ngModule);
        }
      }
      function Xt(...n) {}
      let ne = (() => {
        class n {
          constructor(n) {
            this.nativeElement = n;
          }
        }
        return (n.__NG_ELEMENT_ID__ = () => te(n)), n;
      })();
      const te = Xt;
      class ee {}
      class le {}
      const re = (function() {
        var n = { Important: 1, DashCase: 2 };
        return (n[n.Important] = 'Important'), (n[n.DashCase] = 'DashCase'), n;
      })();
      let se = (() => {
        class n {}
        return (n.__NG_ELEMENT_ID__ = () => ie()), n;
      })();
      const ie = Xt;
      class oe {
        constructor(n) {
          (this.full = n),
            (this.major = n.split('.')[0]),
            (this.minor = n.split('.')[1]),
            (this.patch = n
              .split('.')
              .slice(2)
              .join('.'));
        }
      }
      const ue = new oe('8.2.14');
      class ae {
        constructor() {}
        supports(n) {
          return $t(n);
        }
        create(n) {
          return new he(n);
        }
      }
      const ce = (n, t) => t;
      class he {
        constructor(n) {
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
            (this._trackByFn = n || ce);
        }
        forEachItem(n) {
          let t;
          for (t = this._itHead; null !== t; t = t._next) n(t);
        }
        forEachOperation(n) {
          let t = this._itHead,
            e = this._removalsHead,
            l = 0,
            r = null;
          for (; t || e; ) {
            const s = !e || (t && t.currentIndex < fe(e, l, r)) ? t : e,
              i = fe(s, l, r),
              o = s.currentIndex;
            if (s === e) l--, (e = e._nextRemoved);
            else if (((t = t._next), null == s.previousIndex)) l++;
            else {
              r || (r = []);
              const n = i - l,
                t = o - l;
              if (n != t) {
                for (let e = 0; e < n; e++) {
                  const l = e < r.length ? r[e] : (r[e] = 0),
                    s = l + e;
                  t <= s && s < n && (r[e] = l + 1);
                }
                r[s.previousIndex] = t - n;
              }
            }
            i !== o && n(s, i, o);
          }
        }
        forEachPreviousItem(n) {
          let t;
          for (t = this._previousItHead; null !== t; t = t._nextPrevious) n(t);
        }
        forEachAddedItem(n) {
          let t;
          for (t = this._additionsHead; null !== t; t = t._nextAdded) n(t);
        }
        forEachMovedItem(n) {
          let t;
          for (t = this._movesHead; null !== t; t = t._nextMoved) n(t);
        }
        forEachRemovedItem(n) {
          let t;
          for (t = this._removalsHead; null !== t; t = t._nextRemoved) n(t);
        }
        forEachIdentityChange(n) {
          let t;
          for (t = this._identityChangesHead; null !== t; t = t._nextIdentityChange) n(t);
        }
        diff(n) {
          if ((null == n && (n = []), !$t(n)))
            throw new Error(
              `Error trying to diff '${_n(n)}'. Only arrays and iterables are allowed`
            );
          return this.check(n) ? this : null;
        }
        onDestroy() {}
        check(n) {
          this._reset();
          let t,
            e,
            l,
            r = this._itHead,
            s = !1;
          if (Array.isArray(n)) {
            this.length = n.length;
            for (let t = 0; t < this.length; t++)
              (e = n[t]),
                (l = this._trackByFn(t, e)),
                null !== r && Ut(r.trackById, l)
                  ? (s && (r = this._verifyReinsertion(r, e, l, t)),
                    Ut(r.item, e) || this._addIdentityChange(r, e))
                  : ((r = this._mismatch(r, e, l, t)), (s = !0)),
                (r = r._next);
          } else
            (t = 0),
              (function(n, t) {
                if (Array.isArray(n)) for (let e = 0; e < n.length; e++) t(n[e]);
                else {
                  const e = n[Lt()]();
                  let l;
                  for (; !(l = e.next()).done; ) t(l.value);
                }
              })(n, n => {
                (l = this._trackByFn(t, n)),
                  null !== r && Ut(r.trackById, l)
                    ? (s && (r = this._verifyReinsertion(r, n, l, t)),
                      Ut(r.item, n) || this._addIdentityChange(r, n))
                    : ((r = this._mismatch(r, n, l, t)), (s = !0)),
                  (r = r._next),
                  t++;
              }),
              (this.length = t);
          return this._truncate(r), (this.collection = n), this.isDirty;
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
            let n, t;
            for (n = this._previousItHead = this._itHead; null !== n; n = n._next)
              n._nextPrevious = n._next;
            for (n = this._additionsHead; null !== n; n = n._nextAdded)
              n.previousIndex = n.currentIndex;
            for (
              this._additionsHead = this._additionsTail = null, n = this._movesHead;
              null !== n;
              n = t
            )
              (n.previousIndex = n.currentIndex), (t = n._nextMoved);
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(n, t, e, l) {
          let r;
          return (
            null === n ? (r = this._itTail) : ((r = n._prev), this._remove(n)),
            null !== (n = null === this._linkedRecords ? null : this._linkedRecords.get(e, l))
              ? (Ut(n.item, t) || this._addIdentityChange(n, t), this._moveAfter(n, r, l))
              : null !==
                (n = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(e, null))
              ? (Ut(n.item, t) || this._addIdentityChange(n, t), this._reinsertAfter(n, r, l))
              : (n = this._addAfter(new de(t, e), r, l)),
            n
          );
        }
        _verifyReinsertion(n, t, e, l) {
          let r = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(e, null);
          return (
            null !== r
              ? (n = this._reinsertAfter(r, n._prev, l))
              : n.currentIndex != l && ((n.currentIndex = l), this._addToMoves(n, l)),
            n
          );
        }
        _truncate(n) {
          for (; null !== n; ) {
            const t = n._next;
            this._addToRemovals(this._unlink(n)), (n = t);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail && (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail && (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail &&
              (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(n, t, e) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(n);
          const l = n._prevRemoved,
            r = n._nextRemoved;
          return (
            null === l ? (this._removalsHead = r) : (l._nextRemoved = r),
            null === r ? (this._removalsTail = l) : (r._prevRemoved = l),
            this._insertAfter(n, t, e),
            this._addToMoves(n, e),
            n
          );
        }
        _moveAfter(n, t, e) {
          return this._unlink(n), this._insertAfter(n, t, e), this._addToMoves(n, e), n;
        }
        _addAfter(n, t, e) {
          return (
            this._insertAfter(n, t, e),
            (this._additionsTail =
              null === this._additionsTail
                ? (this._additionsHead = n)
                : (this._additionsTail._nextAdded = n)),
            n
          );
        }
        _insertAfter(n, t, e) {
          const l = null === t ? this._itHead : t._next;
          return (
            (n._next = l),
            (n._prev = t),
            null === l ? (this._itTail = n) : (l._prev = n),
            null === t ? (this._itHead = n) : (t._next = n),
            null === this._linkedRecords && (this._linkedRecords = new ge()),
            this._linkedRecords.put(n),
            (n.currentIndex = e),
            n
          );
        }
        _remove(n) {
          return this._addToRemovals(this._unlink(n));
        }
        _unlink(n) {
          null !== this._linkedRecords && this._linkedRecords.remove(n);
          const t = n._prev,
            e = n._next;
          return (
            null === t ? (this._itHead = e) : (t._next = e),
            null === e ? (this._itTail = t) : (e._prev = t),
            n
          );
        }
        _addToMoves(n, t) {
          return n.previousIndex === t
            ? n
            : ((this._movesTail =
                null === this._movesTail
                  ? (this._movesHead = n)
                  : (this._movesTail._nextMoved = n)),
              n);
        }
        _addToRemovals(n) {
          return (
            null === this._unlinkedRecords && (this._unlinkedRecords = new ge()),
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
        _addIdentityChange(n, t) {
          return (
            (n.item = t),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = n)
                : (this._identityChangesTail._nextIdentityChange = n)),
            n
          );
        }
      }
      class de {
        constructor(n, t) {
          (this.item = n),
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
        }
      }
      class pe {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(n) {
          null === this._head
            ? ((this._head = this._tail = n), (n._nextDup = null), (n._prevDup = null))
            : ((this._tail._nextDup = n),
              (n._prevDup = this._tail),
              (n._nextDup = null),
              (this._tail = n));
        }
        get(n, t) {
          let e;
          for (e = this._head; null !== e; e = e._nextDup)
            if ((null === t || t <= e.currentIndex) && Ut(e.trackById, n)) return e;
          return null;
        }
        remove(n) {
          const t = n._prevDup,
            e = n._nextDup;
          return (
            null === t ? (this._head = e) : (t._nextDup = e),
            null === e ? (this._tail = t) : (e._prevDup = t),
            null === this._head
          );
        }
      }
      class ge {
        constructor() {
          this.map = new Map();
        }
        put(n) {
          const t = n.trackById;
          let e = this.map.get(t);
          e || ((e = new pe()), this.map.set(t, e)), e.add(n);
        }
        get(n, t) {
          const e = this.map.get(n);
          return e ? e.get(n, t) : null;
        }
        remove(n) {
          const t = n.trackById;
          return this.map.get(t).remove(n) && this.map.delete(t), n;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function fe(n, t, e) {
        const l = n.previousIndex;
        if (null === l) return l;
        let r = 0;
        return e && l < e.length && (r = e[l]), l + t + r;
      }
      class me {
        constructor() {}
        supports(n) {
          return n instanceof Map || Ht(n);
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
        forEachItem(n) {
          let t;
          for (t = this._mapHead; null !== t; t = t._next) n(t);
        }
        forEachPreviousItem(n) {
          let t;
          for (t = this._previousMapHead; null !== t; t = t._nextPrevious) n(t);
        }
        forEachChangedItem(n) {
          let t;
          for (t = this._changesHead; null !== t; t = t._nextChanged) n(t);
        }
        forEachAddedItem(n) {
          let t;
          for (t = this._additionsHead; null !== t; t = t._nextAdded) n(t);
        }
        forEachRemovedItem(n) {
          let t;
          for (t = this._removalsHead; null !== t; t = t._nextRemoved) n(t);
        }
        diff(n) {
          if (n) {
            if (!(n instanceof Map || Ht(n)))
              throw new Error(`Error trying to diff '${_n(n)}'. Only maps and objects are allowed`);
          } else n = new Map();
          return this.check(n) ? this : null;
        }
        onDestroy() {}
        check(n) {
          this._reset();
          let t = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(n, (n, e) => {
              if (t && t.key === e)
                this._maybeAddToChanges(t, n), (this._appendAfter = t), (t = t._next);
              else {
                const l = this._getOrCreateRecordForKey(e, n);
                t = this._insertBeforeOrAppend(t, l);
              }
            }),
            t)
          ) {
            t._prev && (t._prev._next = null), (this._removalsHead = t);
            for (let n = t; null !== n; n = n._nextRemoved)
              n === this._mapHead && (this._mapHead = null),
                this._records.delete(n.key),
                (n._nextRemoved = n._next),
                (n.previousValue = n.currentValue),
                (n.currentValue = null),
                (n._prev = null),
                (n._next = null);
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(n, t) {
          if (n) {
            const e = n._prev;
            return (
              (t._next = n),
              (t._prev = e),
              (n._prev = t),
              e && (e._next = t),
              n === this._mapHead && (this._mapHead = t),
              (this._appendAfter = n),
              n
            );
          }
          return (
            this._appendAfter
              ? ((this._appendAfter._next = t), (t._prev = this._appendAfter))
              : (this._mapHead = t),
            (this._appendAfter = t),
            null
          );
        }
        _getOrCreateRecordForKey(n, t) {
          if (this._records.has(n)) {
            const e = this._records.get(n);
            this._maybeAddToChanges(e, t);
            const l = e._prev,
              r = e._next;
            return l && (l._next = r), r && (r._prev = l), (e._next = null), (e._prev = null), e;
          }
          const e = new ve(n);
          return this._records.set(n, e), (e.currentValue = t), this._addToAdditions(e), e;
        }
        _reset() {
          if (this.isDirty) {
            let n;
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
        _maybeAddToChanges(n, t) {
          Ut(t, n.currentValue) ||
            ((n.previousValue = n.currentValue), (n.currentValue = t), this._addToChanges(n));
        }
        _addToAdditions(n) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = n)
            : ((this._additionsTail._nextAdded = n), (this._additionsTail = n));
        }
        _addToChanges(n) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = n)
            : ((this._changesTail._nextChanged = n), (this._changesTail = n));
        }
        _forEach(n, t) {
          n instanceof Map ? n.forEach(t) : Object.keys(n).forEach(e => t(n[e], e));
        }
      }
      class ve {
        constructor(n) {
          (this.key = n),
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
          class n {
            constructor(n) {
              this.factories = n;
            }
            static create(t, e) {
              if (null != e) {
                const n = e.factories.slice();
                t = t.concat(n);
              }
              return new n(t);
            }
            static extend(t) {
              return {
                provide: n,
                useFactory: e => {
                  if (!e)
                    throw new Error('Cannot extend IterableDiffers without a parent injector');
                  return n.create(t, e);
                },
                deps: [[n, new cn(), new un()]]
              };
            }
            find(n) {
              const t = this.factories.find(t => t.supports(n));
              if (null != t) return t;
              throw new Error(
                `Cannot find a differ supporting object '${n}' of type '${((e = n),
                e.name || typeof e)}'`
              );
              var e;
            }
          }
          return (
            (n.ngInjectableDef = pn({
              token: n,
              providedIn: 'root',
              factory: () => new n([new ae()])
            })),
            n
          );
        })(),
        we = (() => {
          class n {
            constructor(n) {
              this.factories = n;
            }
            static create(t, e) {
              if (e) {
                const n = e.factories.slice();
                t = t.concat(n);
              }
              return new n(t);
            }
            static extend(t) {
              return {
                provide: n,
                useFactory: e => {
                  if (!e)
                    throw new Error('Cannot extend KeyValueDiffers without a parent injector');
                  return n.create(t, e);
                },
                deps: [[n, new cn(), new un()]]
              };
            }
            find(n) {
              const t = this.factories.find(t => t.supports(n));
              if (t) return t;
              throw new Error(`Cannot find a differ supporting object '${n}'`);
            }
          }
          return (
            (n.ngInjectableDef = pn({
              token: n,
              providedIn: 'root',
              factory: () => new n([new me()])
            })),
            n
          );
        })();
      const be = [new me()],
        Ce = new ye([new ae()]),
        xe = new we(be);
      let ke = (() => {
        class n {}
        return (n.__NG_ELEMENT_ID__ = () => Ee(n, ne)), n;
      })();
      const Ee = Xt;
      let Se = (() => {
        class n {}
        return (n.__NG_ELEMENT_ID__ = () => Oe(n, ne)), n;
      })();
      const Oe = Xt;
      function Pe(n, t, e, l) {
        let r = `ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '${t}'. Current value: '${e}'.`;
        return (
          l &&
            (r +=
              ' It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?'),
          (function(n, t) {
            const e = new Error(n);
            return Me(e, t), e;
          })(r, n)
        );
      }
      function Me(n, t) {
        (n.ngDebugContext = t), (n.ngErrorLogger = t.logError.bind(t));
      }
      function Te(n) {
        return new Error(`ViewDestroyedError: Attempt to use a destroyed view: ${n}`);
      }
      function Ae(n, t, e) {
        const l = n.state,
          r = 1792 & l;
        return r === t ? ((n.state = (-1793 & l) | e), (n.initIndex = -1), !0) : r === e;
      }
      function Ie(n, t, e) {
        return (1792 & n.state) === t && n.initIndex <= e && ((n.initIndex = e + 1), !0);
      }
      function Re(n, t) {
        return n.nodes[t];
      }
      function Ne(n, t) {
        return n.nodes[t];
      }
      function Ve(n, t) {
        return n.nodes[t];
      }
      function De(n, t) {
        return n.nodes[t];
      }
      function Le(n, t) {
        return n.nodes[t];
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
      function $e(n) {
        let t = Fe.get(n);
        return t || ((t = _n(n) + '_' + Fe.size), Fe.set(n, t)), t;
      }
      function He(n) {
        return {
          id: '$$undefined',
          styles: n.styles,
          encapsulation: n.encapsulation,
          data: n.data
        };
      }
      let ze = 0;
      function qe(n, t, e, l) {
        return !(!(2 & n.state) && Ut(n.oldValues[t.bindingIndex + e], l));
      }
      function Be(n, t, e, l) {
        return !!qe(n, t, e, l) && ((n.oldValues[t.bindingIndex + e] = l), !0);
      }
      function Ge(n, t, e, l) {
        const r = n.oldValues[t.bindingIndex + e];
        if (1 & n.state || !jt(r, l)) {
          const s = t.bindings[e].name;
          throw Pe(
            Ue.createDebugContext(n, t.nodeIndex),
            `${s}: ${r}`,
            `${s}: ${l}`,
            0 != (1 & n.state)
          );
        }
      }
      function Ke(n) {
        let t = n;
        for (; t; ) 2 & t.def.flags && (t.state |= 8), (t = t.viewContainerParent || t.parent);
      }
      function We(n, t) {
        let e = n;
        for (; e && e !== t; ) (e.state |= 64), (e = e.viewContainerParent || e.parent);
      }
      function Ze(n, t, e, l) {
        try {
          return (
            Ke(33554432 & n.def.nodes[t].flags ? Ne(n, t).componentView : n),
            Ue.handleEvent(n, t, e, l)
          );
        } catch (r) {
          n.root.errorHandler.handleError(r);
        }
      }
      function Qe(n) {
        return n.parent ? Ne(n.parent, n.parentNodeDef.nodeIndex) : null;
      }
      function Ye(n) {
        return n.parent ? n.parentNodeDef.parent : null;
      }
      function Je(n, t) {
        switch (201347067 & t.flags) {
          case 1:
            return Ne(n, t.nodeIndex).renderElement;
          case 2:
            return Re(n, t.nodeIndex).renderText;
        }
      }
      function Xe(n) {
        return !!n.parent && !!(32768 & n.parentNodeDef.flags);
      }
      function nl(n) {
        return !(!n.parent || 32768 & n.parentNodeDef.flags);
      }
      function tl(n) {
        return 1 << n % 32;
      }
      function el(n) {
        const t = {};
        let e = 0;
        const l = {};
        return (
          n &&
            n.forEach(([n, r]) => {
              'number' == typeof n ? ((t[n] = r), (e |= tl(n))) : (l[n] = r);
            }),
          { matchedQueries: t, references: l, matchedQueryIds: e }
        );
      }
      function ll(n, t) {
        return n.map(n => {
          let e, l;
          return (
            Array.isArray(n) ? ([l, e] = n) : ((l = 0), (e = n)),
            e &&
              ('function' == typeof e || 'object' == typeof e) &&
              t &&
              Object.defineProperty(e, '__source', { value: t, configurable: !0 }),
            { flags: l, token: e, tokenKey: $e(e) }
          );
        });
      }
      function rl(n, t, e) {
        let l = e.renderParent;
        return l
          ? 0 == (1 & l.flags) ||
            0 == (33554432 & l.flags) ||
            (l.element.componentRendererType &&
              l.element.componentRendererType.encapsulation === $n.Native)
            ? Ne(n, e.renderParent.nodeIndex).renderElement
            : void 0
          : t;
      }
      const sl = new WeakMap();
      function il(n) {
        let t = sl.get(n);
        return t || ((t = n(() => je)), (t.factory = n), sl.set(n, t)), t;
      }
      function ol(n, t, e, l, r) {
        3 === t && (e = n.renderer.parentNode(Je(n, n.def.lastRenderRootNode))),
          ul(n, t, 0, n.def.nodes.length - 1, e, l, r);
      }
      function ul(n, t, e, l, r, s, i) {
        for (let o = e; o <= l; o++) {
          const e = n.def.nodes[o];
          11 & e.flags && cl(n, e, t, r, s, i), (o += e.childCount);
        }
      }
      function al(n, t, e, l, r, s) {
        let i = n;
        for (; i && !Xe(i); ) i = i.parent;
        const o = i.parent,
          u = Ye(i),
          a = u.nodeIndex + u.childCount;
        for (let c = u.nodeIndex + 1; c <= a; c++) {
          const n = o.def.nodes[c];
          n.ngContentIndex === t && cl(o, n, e, l, r, s), (c += n.childCount);
        }
        if (!o.parent) {
          const i = n.root.projectableNodes[t];
          if (i) for (let t = 0; t < i.length; t++) hl(n, i[t], e, l, r, s);
        }
      }
      function cl(n, t, e, l, r, s) {
        if (8 & t.flags) al(n, t.ngContent.index, e, l, r, s);
        else {
          const i = Je(n, t);
          if (
            (3 === e && 33554432 & t.flags && 48 & t.bindingFlags
              ? (16 & t.bindingFlags && hl(n, i, e, l, r, s),
                32 & t.bindingFlags && hl(Ne(n, t.nodeIndex).componentView, i, e, l, r, s))
              : hl(n, i, e, l, r, s),
            16777216 & t.flags)
          ) {
            const i = Ne(n, t.nodeIndex).viewContainer._embeddedViews;
            for (let n = 0; n < i.length; n++) ol(i[n], e, l, r, s);
          }
          1 & t.flags &&
            !t.element.name &&
            ul(n, e, t.nodeIndex + 1, t.nodeIndex + t.childCount, l, r, s);
        }
      }
      function hl(n, t, e, l, r, s) {
        const i = n.renderer;
        switch (e) {
          case 1:
            i.appendChild(l, t);
            break;
          case 2:
            i.insertBefore(l, t, r);
            break;
          case 3:
            i.removeChild(l, t);
            break;
          case 0:
            s.push(t);
        }
      }
      const dl = /^:([^:]+):(.+)$/;
      function pl(n) {
        if (':' === n[0]) {
          const t = n.match(dl);
          return [t[1], t[2]];
        }
        return ['', n];
      }
      function gl(n) {
        let t = 0;
        for (let e = 0; e < n.length; e++) t |= n[e].flags;
        return t;
      }
      const fl = new Object(),
        ml = $e(Ot),
        _l = $e(On),
        vl = $e(Ln);
      function yl(n, t, e, l) {
        return (e = wn(e)), { index: -1, deps: ll(l, _n(t)), flags: n, token: t, value: e };
      }
      function wl(n, t, e = Ot.THROW_IF_NOT_FOUND) {
        const l = In(n);
        try {
          if (8 & t.flags) return t.token;
          if ((2 & t.flags && (e = null), 1 & t.flags)) return n._parent.get(t.token, e);
          const i = t.tokenKey;
          switch (i) {
            case ml:
            case _l:
            case vl:
              return n;
          }
          const o = n._def.providersByKey[i];
          let u;
          if (o) {
            let t = n._providers[o.index];
            return void 0 === t && (t = n._providers[o.index] = bl(n, o)), t === fl ? void 0 : t;
          }
          if (
            (u = fn(t.token)) &&
            ((r = n),
            null != (s = u).providedIn &&
              ((function(n, t) {
                return n._def.modules.indexOf(t) > -1;
              })(r, s.providedIn) ||
                ('root' === s.providedIn && r._def.isRoot)))
          ) {
            const e = n._providers.length;
            return (
              (n._def.providers[e] = n._def.providersByKey[t.tokenKey] = {
                flags: 5120,
                value: u.factory,
                deps: [],
                index: e,
                token: t.token
              }),
              (n._providers[e] = fl),
              (n._providers[e] = bl(n, n._def.providersByKey[t.tokenKey]))
            );
          }
          return 4 & t.flags ? e : n._parent.get(t.token, e);
        } finally {
          In(l);
        }
        var r, s;
      }
      function bl(n, t) {
        let e;
        switch (201347067 & t.flags) {
          case 512:
            e = (function(n, t, e) {
              const l = e.length;
              switch (l) {
                case 0:
                  return new t();
                case 1:
                  return new t(wl(n, e[0]));
                case 2:
                  return new t(wl(n, e[0]), wl(n, e[1]));
                case 3:
                  return new t(wl(n, e[0]), wl(n, e[1]), wl(n, e[2]));
                default:
                  const r = new Array(l);
                  for (let t = 0; t < l; t++) r[t] = wl(n, e[t]);
                  return new t(...r);
              }
            })(n, t.value, t.deps);
            break;
          case 1024:
            e = (function(n, t, e) {
              const l = e.length;
              switch (l) {
                case 0:
                  return t();
                case 1:
                  return t(wl(n, e[0]));
                case 2:
                  return t(wl(n, e[0]), wl(n, e[1]));
                case 3:
                  return t(wl(n, e[0]), wl(n, e[1]), wl(n, e[2]));
                default:
                  const r = Array(l);
                  for (let t = 0; t < l; t++) r[t] = wl(n, e[t]);
                  return t(...r);
              }
            })(n, t.value, t.deps);
            break;
          case 2048:
            e = wl(n, t.deps[0]);
            break;
          case 256:
            e = t.value;
        }
        return (
          e === fl ||
            null === e ||
            'object' != typeof e ||
            131072 & t.flags ||
            'function' != typeof e.ngOnDestroy ||
            (t.flags |= 131072),
          void 0 === e ? fl : e
        );
      }
      function Cl(n, t) {
        const e = n.viewContainer._embeddedViews;
        if (((null == t || t >= e.length) && (t = e.length - 1), t < 0)) return null;
        const l = e[t];
        return (l.viewContainerParent = null), Fn(e, t), Ue.dirtyParentQueries(l), kl(l), l;
      }
      function xl(n, t, e) {
        const l = t ? Je(t, t.def.lastRenderRootNode) : n.renderElement,
          r = e.renderer.parentNode(l),
          s = e.renderer.nextSibling(l);
        ol(e, 2, r, s, void 0);
      }
      function kl(n) {
        ol(n, 3, null, null, void 0);
      }
      const El = new Object();
      function Sl(n, t, e, l, r, s) {
        return new Ol(n, t, e, l, r, s);
      }
      class Ol extends Gt {
        constructor(n, t, e, l, r, s) {
          super(),
            (this.selector = n),
            (this.componentType = t),
            (this._inputs = l),
            (this._outputs = r),
            (this.ngContentSelectors = s),
            (this.viewDefFactory = e);
        }
        get inputs() {
          const n = [],
            t = this._inputs;
          for (let e in t) n.push({ propName: e, templateName: t[e] });
          return n;
        }
        get outputs() {
          const n = [];
          for (let t in this._outputs) n.push({ propName: t, templateName: this._outputs[t] });
          return n;
        }
        create(n, t, e, l) {
          if (!l) throw new Error('ngModule should be provided');
          const r = il(this.viewDefFactory),
            s = r.nodes[0].element.componentProvider.nodeIndex,
            i = Ue.createRootView(n, t || [], e, r, l, El),
            o = Ve(i, s).instance;
          return (
            e && i.renderer.setAttribute(Ne(i, 0).renderElement, 'ng-version', ue.full),
            new Pl(i, new Il(i), o)
          );
        }
      }
      class Pl extends class {} {
        constructor(n, t, e) {
          super(),
            (this._view = n),
            (this._viewRef = t),
            (this._component = e),
            (this._elDef = this._view.def.nodes[0]),
            (this.hostView = t),
            (this.changeDetectorRef = t),
            (this.instance = e);
        }
        get location() {
          return new ne(Ne(this._view, this._elDef.nodeIndex).renderElement);
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
        onDestroy(n) {
          this._viewRef.onDestroy(n);
        }
      }
      function Ml(n, t, e) {
        return new Tl(n, t, e);
      }
      class Tl {
        constructor(n, t, e) {
          (this._view = n), (this._elDef = t), (this._data = e), (this._embeddedViews = []);
        }
        get element() {
          return new ne(this._data.renderElement);
        }
        get injector() {
          return new Dl(this._view, this._elDef);
        }
        get parentInjector() {
          let n = this._view,
            t = this._elDef.parent;
          for (; !t && n; ) (t = Ye(n)), (n = n.parent);
          return n ? new Dl(n, t) : new Dl(this._view, null);
        }
        clear() {
          for (let n = this._embeddedViews.length - 1; n >= 0; n--) {
            const t = Cl(this._data, n);
            Ue.destroyView(t);
          }
        }
        get(n) {
          const t = this._embeddedViews[n];
          if (t) {
            const n = new Il(t);
            return n.attachToViewContainerRef(this), n;
          }
          return null;
        }
        get length() {
          return this._embeddedViews.length;
        }
        createEmbeddedView(n, t, e) {
          const l = n.createEmbeddedView(t || {});
          return this.insert(l, e), l;
        }
        createComponent(n, t, e, l, r) {
          const s = e || this.parentInjector;
          r || n instanceof Jt || (r = s.get(Ln));
          const i = n.create(s, l, void 0, r);
          return this.insert(i.hostView, t), i;
        }
        insert(n, t) {
          if (n.destroyed) throw new Error('Cannot insert a destroyed View in a ViewContainer!');
          const e = n;
          return (
            (function(n, t, e, l) {
              let r = t.viewContainer._embeddedViews;
              null == e && (e = r.length),
                (l.viewContainerParent = n),
                jn(r, e, l),
                (function(n, t) {
                  const e = Qe(t);
                  if (!e || e === n || 16 & t.state) return;
                  t.state |= 16;
                  let l = e.template._projectedViews;
                  l || (l = e.template._projectedViews = []),
                    l.push(t),
                    (function(n, t) {
                      if (4 & t.flags) return;
                      (n.nodeFlags |= 4), (t.flags |= 4);
                      let e = t.parent;
                      for (; e; ) (e.childFlags |= 4), (e = e.parent);
                    })(t.parent.def, t.parentNodeDef);
                })(t, l),
                Ue.dirtyParentQueries(l),
                xl(t, e > 0 ? r[e - 1] : null, l);
            })(this._view, this._data, t, e._view),
            e.attachToViewContainerRef(this),
            n
          );
        }
        move(n, t) {
          if (n.destroyed) throw new Error('Cannot move a destroyed View in a ViewContainer!');
          const e = this._embeddedViews.indexOf(n._view);
          return (
            (function(n, t, e) {
              const l = n.viewContainer._embeddedViews,
                r = l[t];
              Fn(l, t),
                null == e && (e = l.length),
                jn(l, e, r),
                Ue.dirtyParentQueries(r),
                kl(r),
                xl(n, e > 0 ? l[e - 1] : null, r);
            })(this._data, e, t),
            n
          );
        }
        indexOf(n) {
          return this._embeddedViews.indexOf(n._view);
        }
        remove(n) {
          const t = Cl(this._data, n);
          t && Ue.destroyView(t);
        }
        detach(n) {
          const t = Cl(this._data, n);
          return t ? new Il(t) : null;
        }
      }
      function Al(n) {
        return new Il(n);
      }
      class Il {
        constructor(n) {
          (this._view = n), (this._viewContainerRef = null), (this._appRef = null);
        }
        get rootNodes() {
          return (function(n) {
            const t = [];
            return ol(n, 0, void 0, void 0, t), t;
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
          const n = this._view.root.rendererFactory;
          n.begin && n.begin();
          try {
            Ue.checkAndUpdateView(this._view);
          } finally {
            n.end && n.end();
          }
        }
        checkNoChanges() {
          Ue.checkNoChangesView(this._view);
        }
        reattach() {
          this._view.state |= 4;
        }
        onDestroy(n) {
          this._view.disposables || (this._view.disposables = []), this._view.disposables.push(n);
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
        attachToAppRef(n) {
          if (this._viewContainerRef)
            throw new Error('This view is already attached to a ViewContainer!');
          this._appRef = n;
        }
        attachToViewContainerRef(n) {
          if (this._appRef)
            throw new Error('This view is already attached directly to the ApplicationRef!');
          this._viewContainerRef = n;
        }
      }
      function Rl(n, t) {
        return new Nl(n, t);
      }
      class Nl extends ke {
        constructor(n, t) {
          super(), (this._parentView = n), (this._def = t);
        }
        createEmbeddedView(n) {
          return new Il(
            Ue.createEmbeddedView(this._parentView, this._def, this._def.element.template, n)
          );
        }
        get elementRef() {
          return new ne(Ne(this._parentView, this._def.nodeIndex).renderElement);
        }
      }
      function Vl(n, t) {
        return new Dl(n, t);
      }
      class Dl {
        constructor(n, t) {
          (this.view = n), (this.elDef = t);
        }
        get(n, t = Ot.THROW_IF_NOT_FOUND) {
          return Ue.resolveDep(
            this.view,
            this.elDef,
            !!this.elDef && 0 != (33554432 & this.elDef.flags),
            { flags: 0, token: n, tokenKey: $e(n) },
            t
          );
        }
      }
      function Ll(n, t) {
        const e = n.def.nodes[t];
        if (1 & e.flags) {
          const t = Ne(n, e.nodeIndex);
          return e.element.template ? t.template : t.renderElement;
        }
        if (2 & e.flags) return Re(n, e.nodeIndex).renderText;
        if (20240 & e.flags) return Ve(n, e.nodeIndex).instance;
        throw new Error(`Illegal state: read nodeValue for node index ${t}`);
      }
      function Ul(n) {
        return new jl(n.renderer);
      }
      class jl {
        constructor(n) {
          this.delegate = n;
        }
        selectRootElement(n) {
          return this.delegate.selectRootElement(n);
        }
        createElement(n, t) {
          const [e, l] = pl(t),
            r = this.delegate.createElement(l, e);
          return n && this.delegate.appendChild(n, r), r;
        }
        createViewRoot(n) {
          return n;
        }
        createTemplateAnchor(n) {
          const t = this.delegate.createComment('');
          return n && this.delegate.appendChild(n, t), t;
        }
        createText(n, t) {
          const e = this.delegate.createText(t);
          return n && this.delegate.appendChild(n, e), e;
        }
        projectNodes(n, t) {
          for (let e = 0; e < t.length; e++) this.delegate.appendChild(n, t[e]);
        }
        attachViewAfter(n, t) {
          const e = this.delegate.parentNode(n),
            l = this.delegate.nextSibling(n);
          for (let r = 0; r < t.length; r++) this.delegate.insertBefore(e, t[r], l);
        }
        detachView(n) {
          for (let t = 0; t < n.length; t++) {
            const e = n[t],
              l = this.delegate.parentNode(e);
            this.delegate.removeChild(l, e);
          }
        }
        destroyView(n, t) {
          for (let e = 0; e < t.length; e++) this.delegate.destroyNode(t[e]);
        }
        listen(n, t, e) {
          return this.delegate.listen(n, t, e);
        }
        listenGlobal(n, t, e) {
          return this.delegate.listen(n, t, e);
        }
        setElementProperty(n, t, e) {
          this.delegate.setProperty(n, t, e);
        }
        setElementAttribute(n, t, e) {
          const [l, r] = pl(t);
          null != e
            ? this.delegate.setAttribute(n, r, e, l)
            : this.delegate.removeAttribute(n, r, l);
        }
        setBindingDebugInfo(n, t, e) {}
        setElementClass(n, t, e) {
          e ? this.delegate.addClass(n, t) : this.delegate.removeClass(n, t);
        }
        setElementStyle(n, t, e) {
          null != e ? this.delegate.setStyle(n, t, e) : this.delegate.removeStyle(n, t);
        }
        invokeElementMethod(n, t, e) {
          n[t].apply(n, e);
        }
        setText(n, t) {
          this.delegate.setValue(n, t);
        }
        animate() {
          throw new Error('Renderer.animate is no longer supported!');
        }
      }
      function Fl(n, t, e, l) {
        return new $l(n, t, e, l);
      }
      class $l {
        constructor(n, t, e, l) {
          (this._moduleType = n),
            (this._parent = t),
            (this._bootstrapComponents = e),
            (this._def = l),
            (this._destroyListeners = []),
            (this._destroyed = !1),
            (this.injector = this),
            (function(n) {
              const t = n._def,
                e = (n._providers = new Array(t.providers.length));
              for (let l = 0; l < t.providers.length; l++) {
                const r = t.providers[l];
                4096 & r.flags || (void 0 === e[l] && (e[l] = bl(n, r)));
              }
            })(this);
        }
        get(n, t = Ot.THROW_IF_NOT_FOUND, e = hn.Default) {
          let l = 0;
          return (
            e & hn.SkipSelf ? (l |= 1) : e & hn.Self && (l |= 4),
            wl(this, { token: n, tokenKey: $e(n), flags: l }, t)
          );
        }
        get instance() {
          return this.get(this._moduleType);
        }
        get componentFactoryResolver() {
          return this.get(Qt);
        }
        destroy() {
          if (this._destroyed)
            throw new Error(
              `The ng module ${_n(this.instance.constructor)} has already been destroyed.`
            );
          (this._destroyed = !0),
            (function(n, t) {
              const e = n._def,
                l = new Set();
              for (let r = 0; r < e.providers.length; r++)
                if (131072 & e.providers[r].flags) {
                  const t = n._providers[r];
                  if (t && t !== fl) {
                    const n = t.ngOnDestroy;
                    'function' != typeof n || l.has(t) || (n.apply(t), l.add(t));
                  }
                }
            })(this),
            this._destroyListeners.forEach(n => n());
        }
        onDestroy(n) {
          this._destroyListeners.push(n);
        }
      }
      const Hl = $e(ee),
        zl = $e(se),
        ql = $e(ne),
        Bl = $e(Se),
        Gl = $e(ke),
        Kl = $e(xt),
        Wl = $e(Ot),
        Zl = $e(On);
      function Ql(n, t, e, l, r, s, i, o) {
        const u = [];
        if (i)
          for (let c in i) {
            const [n, t] = i[c];
            u[n] = {
              flags: 8,
              name: c,
              nonMinifiedName: t,
              ns: null,
              securityContext: null,
              suffix: null
            };
          }
        const a = [];
        if (o) for (let c in o) a.push({ type: 1, propName: c, target: null, eventName: o[c] });
        return Jl(n, (t |= 16384), e, l, r, r, s, u, a);
      }
      function Yl(n, t, e, l, r) {
        return Jl(-1, n, t, 0, e, l, r);
      }
      function Jl(n, t, e, l, r, s, i, o, u) {
        const { matchedQueries: a, references: c, matchedQueryIds: h } = el(e);
        u || (u = []), o || (o = []), (s = wn(s));
        const d = ll(i, _n(r));
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: n,
          flags: t,
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
      function Xl(n, t) {
        return lr(n, t);
      }
      function nr(n, t) {
        let e = n;
        for (; e.parent && !Xe(e); ) e = e.parent;
        return rr(e.parent, Ye(e), !0, t.provider.value, t.provider.deps);
      }
      function tr(n, t) {
        const e = rr(n, t.parent, (32768 & t.flags) > 0, t.provider.value, t.provider.deps);
        if (t.outputs.length)
          for (let l = 0; l < t.outputs.length; l++) {
            const r = t.outputs[l],
              s = e[r.propName];
            if (!qt(s))
              throw new Error(`@Output ${r.propName} not initialized in '${e.constructor.name}'.`);
            {
              const e = s.subscribe(er(n, t.parent.nodeIndex, r.eventName));
              n.disposables[t.outputIndex + l] = e.unsubscribe.bind(e);
            }
          }
        return e;
      }
      function er(n, t, e) {
        return l => Ze(n, t, e, l);
      }
      function lr(n, t) {
        const e = (8192 & t.flags) > 0,
          l = t.provider;
        switch (201347067 & t.flags) {
          case 512:
            return rr(n, t.parent, e, l.value, l.deps);
          case 1024:
            return (function(n, t, e, l, r) {
              const s = r.length;
              switch (s) {
                case 0:
                  return l();
                case 1:
                  return l(ir(n, t, e, r[0]));
                case 2:
                  return l(ir(n, t, e, r[0]), ir(n, t, e, r[1]));
                case 3:
                  return l(ir(n, t, e, r[0]), ir(n, t, e, r[1]), ir(n, t, e, r[2]));
                default:
                  const i = Array(s);
                  for (let l = 0; l < s; l++) i[l] = ir(n, t, e, r[l]);
                  return l(...i);
              }
            })(n, t.parent, e, l.value, l.deps);
          case 2048:
            return ir(n, t.parent, e, l.deps[0]);
          case 256:
            return l.value;
        }
      }
      function rr(n, t, e, l, r) {
        const s = r.length;
        switch (s) {
          case 0:
            return new l();
          case 1:
            return new l(ir(n, t, e, r[0]));
          case 2:
            return new l(ir(n, t, e, r[0]), ir(n, t, e, r[1]));
          case 3:
            return new l(ir(n, t, e, r[0]), ir(n, t, e, r[1]), ir(n, t, e, r[2]));
          default:
            const i = new Array(s);
            for (let l = 0; l < s; l++) i[l] = ir(n, t, e, r[l]);
            return new l(...i);
        }
      }
      const sr = {};
      function ir(n, t, e, l, r = Ot.THROW_IF_NOT_FOUND) {
        if (8 & l.flags) return l.token;
        const s = n;
        2 & l.flags && (r = null);
        const i = l.tokenKey;
        i === Kl && (e = !(!t || !t.element.componentView)),
          t && 1 & l.flags && ((e = !1), (t = t.parent));
        let o = n;
        for (; o; ) {
          if (t)
            switch (i) {
              case Hl:
                return Ul(or(o, t, e));
              case zl:
                return or(o, t, e).renderer;
              case ql:
                return new ne(Ne(o, t.nodeIndex).renderElement);
              case Bl:
                return Ne(o, t.nodeIndex).viewContainer;
              case Gl:
                if (t.element.template) return Ne(o, t.nodeIndex).template;
                break;
              case Kl:
                return Al(or(o, t, e));
              case Wl:
              case Zl:
                return Vl(o, t);
              default:
                const n = (e ? t.element.allProviders : t.element.publicProviders)[i];
                if (n) {
                  let t = Ve(o, n.nodeIndex);
                  return (
                    t || ((t = { instance: lr(o, n) }), (o.nodes[n.nodeIndex] = t)), t.instance
                  );
                }
            }
          (e = Xe(o)), (t = Ye(o)), (o = o.parent), 4 & l.flags && (o = null);
        }
        const u = s.root.injector.get(l.token, sr);
        return u !== sr || r === sr ? u : s.root.ngModule.injector.get(l.token, r);
      }
      function or(n, t, e) {
        let l;
        if (e) l = Ne(n, t.nodeIndex).componentView;
        else for (l = n; l.parent && !Xe(l); ) l = l.parent;
        return l;
      }
      function ur(n, t, e, l, r, s) {
        if (32768 & e.flags) {
          const t = Ne(n, e.parent.nodeIndex).componentView;
          2 & t.def.flags && (t.state |= 8);
        }
        if (((t.instance[e.bindings[l].name] = r), 524288 & e.flags)) {
          s = s || {};
          const t = Ft.unwrap(n.oldValues[e.bindingIndex + l]);
          s[e.bindings[l].nonMinifiedName] = new Bt(t, r, 0 != (2 & n.state));
        }
        return (n.oldValues[e.bindingIndex + l] = r), s;
      }
      function ar(n, t) {
        if (!(n.def.nodeFlags & t)) return;
        const e = n.def.nodes;
        let l = 0;
        for (let r = 0; r < e.length; r++) {
          const s = e[r];
          let i = s.parent;
          for (
            !i && s.flags & t && hr(n, r, s.flags & t, l++),
              0 == (s.childFlags & t) && (r += s.childCount);
            i && 1 & i.flags && r === i.nodeIndex + i.childCount;

          )
            i.directChildFlags & t && (l = cr(n, i, t, l)), (i = i.parent);
        }
      }
      function cr(n, t, e, l) {
        for (let r = t.nodeIndex + 1; r <= t.nodeIndex + t.childCount; r++) {
          const t = n.def.nodes[r];
          t.flags & e && hr(n, r, t.flags & e, l++), (r += t.childCount);
        }
        return l;
      }
      function hr(n, t, e, l) {
        const r = Ve(n, t);
        if (!r) return;
        const s = r.instance;
        s &&
          (Ue.setCurrentNode(n, t),
          1048576 & e && Ie(n, 512, l) && s.ngAfterContentInit(),
          2097152 & e && s.ngAfterContentChecked(),
          4194304 & e && Ie(n, 768, l) && s.ngAfterViewInit(),
          8388608 & e && s.ngAfterViewChecked(),
          131072 & e && s.ngOnDestroy());
      }
      const dr = new Sn('SCHEDULER_TOKEN', { providedIn: 'root', factory: () => Hn }),
        pr = {},
        gr = (function() {
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
        function(n) {
          let t = Math.floor(Math.abs(n)),
            e = n.toString().replace(/^[^.]*\.?/, '').length;
          return 1 === t && 0 === e ? 1 : 5;
        }
      ];
      class _r extends O {
        constructor(n = !1) {
          super(), (this.__isAsync = n);
        }
        emit(n) {
          super.next(n);
        }
        subscribe(n, t, e) {
          let l,
            r = n => null,
            s = () => null;
          n && 'object' == typeof n
            ? ((l = this.__isAsync
                ? t => {
                    setTimeout(() => n.next(t));
                  }
                : t => {
                    n.next(t);
                  }),
              n.error &&
                (r = this.__isAsync
                  ? t => {
                      setTimeout(() => n.error(t));
                    }
                  : t => {
                      n.error(t);
                    }),
              n.complete &&
                (s = this.__isAsync
                  ? () => {
                      setTimeout(() => n.complete());
                    }
                  : () => {
                      n.complete();
                    }))
            : ((l = this.__isAsync
                ? t => {
                    setTimeout(() => n(t));
                  }
                : t => {
                    n(t);
                  }),
              t &&
                (r = this.__isAsync
                  ? n => {
                      setTimeout(() => t(n));
                    }
                  : n => {
                      t(n);
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
          return n instanceof d && n.add(i), i;
        }
      }
      function vr() {
        return this._results[Lt()]();
      }
      class yr {
        constructor() {
          (this.dirty = !0), (this._results = []), (this.changes = new _r()), (this.length = 0);
          const n = Lt(),
            t = yr.prototype;
          t[n] || (t[n] = vr);
        }
        map(n) {
          return this._results.map(n);
        }
        filter(n) {
          return this._results.filter(n);
        }
        find(n) {
          return this._results.find(n);
        }
        reduce(n, t) {
          return this._results.reduce(n, t);
        }
        forEach(n) {
          this._results.forEach(n);
        }
        some(n) {
          return this._results.some(n);
        }
        toArray() {
          return this._results.slice();
        }
        toString() {
          return this._results.toString();
        }
        reset(n) {
          (this._results = (function n(t, e) {
            void 0 === e && (e = t);
            for (let l = 0; l < t.length; l++) {
              let r = t[l];
              Array.isArray(r) ? (e === t && (e = t.slice(0, l)), n(r, e)) : e !== t && e.push(r);
            }
            return e;
          })(n)),
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
      const wr = new Sn('Application Initializer');
      class br {
        constructor(n) {
          (this.appInits = n),
            (this.initialized = !1),
            (this.done = !1),
            (this.donePromise = new Promise((n, t) => {
              (this.resolve = n), (this.reject = t);
            }));
        }
        runInitializers() {
          if (this.initialized) return;
          const n = [],
            t = () => {
              (this.done = !0), this.resolve();
            };
          if (this.appInits)
            for (let e = 0; e < this.appInits.length; e++) {
              const t = this.appInits[e]();
              zt(t) && n.push(t);
            }
          Promise.all(n)
            .then(() => {
              t();
            })
            .catch(n => {
              this.reject(n);
            }),
            0 === n.length && t(),
            (this.initialized = !0);
        }
      }
      const Cr = new Sn('AppId');
      function xr() {
        return `${kr()}${kr()}${kr()}`;
      }
      function kr() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      const Er = new Sn('Platform Initializer'),
        Sr = new Sn('Platform ID'),
        Or = new Sn('appBootstrapListener');
      class Pr {
        log(n) {
          console.log(n);
        }
        warn(n) {
          console.warn(n);
        }
      }
      const Mr = new Sn('LocaleId');
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
        clearCacheFor(n) {}
        getModuleId(n) {}
      }
      class Dr {}
      let Lr, Ur;
      function jr() {
        const n = En.wtf;
        return !(!n || ((Lr = n.trace), !Lr) || ((Ur = Lr.events), 0));
      }
      const Fr = jr();
      function $r(n, t) {
        return null;
      }
      const Hr = Fr
          ? function(n, t = null) {
              return Ur.createScope(n, t);
            }
          : (n, t) => $r,
        zr = Fr
          ? function(n, t) {
              return Lr.leaveScope(n, t), t;
            }
          : (n, t) => t,
        qr = (() => Promise.resolve(0))();
      function Br(n) {
        'undefined' == typeof Zone
          ? qr.then(() => {
              n && n.apply(null, null);
            })
          : Zone.current.scheduleMicroTask('scheduleMicrotask', n);
      }
      class Gr {
        constructor({ enableLongStackTrace: n = !1 }) {
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
          var t;
          Zone.assertZonePatched(),
            (this._nesting = 0),
            (this._outer = this._inner = Zone.current),
            Zone.wtfZoneSpec && (this._inner = this._inner.fork(Zone.wtfZoneSpec)),
            Zone.TaskTrackingZoneSpec &&
              (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec())),
            n &&
              Zone.longStackTraceZoneSpec &&
              (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)),
            ((t = this)._inner = t._inner.fork({
              name: 'angular',
              properties: { isAngularZone: !0 },
              onInvokeTask: (n, e, l, r, s, i) => {
                try {
                  return Qr(t), n.invokeTask(l, r, s, i);
                } finally {
                  Yr(t);
                }
              },
              onInvoke: (n, e, l, r, s, i, o) => {
                try {
                  return Qr(t), n.invoke(l, r, s, i, o);
                } finally {
                  Yr(t);
                }
              },
              onHasTask: (n, e, l, r) => {
                n.hasTask(l, r),
                  e === l &&
                    ('microTask' == r.change
                      ? ((t.hasPendingMicrotasks = r.microTask), Zr(t))
                      : 'macroTask' == r.change && (t.hasPendingMacrotasks = r.macroTask));
              },
              onHandleError: (n, e, l, r) => (
                n.handleError(l, r), t.runOutsideAngular(() => t.onError.emit(r)), !1
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
        run(n, t, e) {
          return this._inner.run(n, t, e);
        }
        runTask(n, t, e, l) {
          const r = this._inner,
            s = r.scheduleEventTask('NgZoneEvent: ' + l, n, Wr, Kr, Kr);
          try {
            return r.runTask(s, t, e);
          } finally {
            r.cancelTask(s);
          }
        }
        runGuarded(n, t, e) {
          return this._inner.runGuarded(n, t, e);
        }
        runOutsideAngular(n) {
          return this._outer.run(n);
        }
      }
      function Kr() {}
      const Wr = {};
      function Zr(n) {
        if (0 == n._nesting && !n.hasPendingMicrotasks && !n.isStable)
          try {
            n._nesting++, n.onMicrotaskEmpty.emit(null);
          } finally {
            if ((n._nesting--, !n.hasPendingMicrotasks))
              try {
                n.runOutsideAngular(() => n.onStable.emit(null));
              } finally {
                n.isStable = !0;
              }
          }
      }
      function Qr(n) {
        n._nesting++, n.isStable && ((n.isStable = !1), n.onUnstable.emit(null));
      }
      function Yr(n) {
        n._nesting--, Zr(n);
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
        run(n) {
          return n();
        }
        runGuarded(n) {
          return n();
        }
        runOutsideAngular(n) {
          return n();
        }
        runTask(n) {
          return n();
        }
      }
      class Xr {
        constructor(n) {
          (this._ngZone = n),
            (this._pendingCount = 0),
            (this._isZoneStable = !0),
            (this._didWork = !1),
            (this._callbacks = []),
            (this.taskTrackingZone = null),
            this._watchAngularEvents(),
            n.run(() => {
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
                let n = this._callbacks.pop();
                clearTimeout(n.timeoutId), n.doneCb(this._didWork);
              }
              this._didWork = !1;
            });
          else {
            let n = this.getPendingTasks();
            (this._callbacks = this._callbacks.filter(
              t => !t.updateCb || !t.updateCb(n) || (clearTimeout(t.timeoutId), !1)
            )),
              (this._didWork = !0);
          }
        }
        getPendingTasks() {
          return this.taskTrackingZone
            ? this.taskTrackingZone.macroTasks.map(n => ({
                source: n.source,
                creationLocation: n.creationLocation,
                data: n.data
              }))
            : [];
        }
        addCallback(n, t, e) {
          let l = -1;
          t &&
            t > 0 &&
            (l = setTimeout(() => {
              (this._callbacks = this._callbacks.filter(n => n.timeoutId !== l)),
                n(this._didWork, this.getPendingTasks());
            }, t)),
            this._callbacks.push({ doneCb: n, timeoutId: l, updateCb: e });
        }
        whenStable(n, t, e) {
          if (e && !this.taskTrackingZone)
            throw new Error(
              'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?'
            );
          this.addCallback(n, t, e), this._runCallbacksIfReady();
        }
        getPendingRequestCount() {
          return this._pendingCount;
        }
        findProviders(n, t, e) {
          return [];
        }
      }
      class ns {
        constructor() {
          (this._applications = new Map()), ls.addToWindow(this);
        }
        registerApplication(n, t) {
          this._applications.set(n, t);
        }
        unregisterApplication(n) {
          this._applications.delete(n);
        }
        unregisterAllApplications() {
          this._applications.clear();
        }
        getTestability(n) {
          return this._applications.get(n) || null;
        }
        getAllTestabilities() {
          return Array.from(this._applications.values());
        }
        getAllRootElements() {
          return Array.from(this._applications.keys());
        }
        findTestabilityInTree(n, t = !0) {
          return ls.findTestabilityInTree(this, n, t);
        }
      }
      class ts {
        addToWindow(n) {}
        findTestabilityInTree(n, t, e) {
          return null;
        }
      }
      let es,
        ls = new ts();
      const rs = new Sn('AllowMultipleToken');
      class ss {
        constructor(n, t) {
          (this.name = n), (this.token = t);
        }
      }
      function is(n, t, e = []) {
        const l = `Platform: ${t}`,
          r = new Sn(l);
        return (t = []) => {
          let s = os();
          if (!s || s.injector.get(rs, !1))
            if (n) n(e.concat(t).concat({ provide: r, useValue: !0 }));
            else {
              const n = e.concat(t).concat({ provide: r, useValue: !0 });
              !(function(n) {
                if (es && !es.destroyed && !es.injector.get(rs, !1))
                  throw new Error(
                    'There can be only one platform. Destroy the previous one to create a new one.'
                  );
                es = n.get(us);
                const t = n.get(Er, null);
                t && t.forEach(n => n());
              })(Ot.create({ providers: n, name: l }));
            }
          return (function(n) {
            const t = os();
            if (!t) throw new Error('No platform exists!');
            if (!t.injector.get(n, null))
              throw new Error(
                'A platform with a different configuration has been created. Please destroy it first.'
              );
            return t;
          })(r);
        };
      }
      function os() {
        return es && !es.destroyed ? es : null;
      }
      class us {
        constructor(n) {
          (this._injector = n),
            (this._modules = []),
            (this._destroyListeners = []),
            (this._destroyed = !1);
        }
        bootstrapModuleFactory(n, t) {
          const e = (function(n) {
              let t;
              return (
                (t =
                  'noop' === n
                    ? new Jr()
                    : ('zone.js' === n ? void 0 : n) || new Gr({ enableLongStackTrace: Zn() })),
                t
              );
            })(t ? t.ngZone : void 0),
            l = [{ provide: Gr, useValue: e }];
          return e.run(() => {
            const t = Ot.create({ providers: l, parent: this.injector, name: n.moduleType.name }),
              r = n.create(t),
              s = r.injector.get(Gn, null);
            if (!s)
              throw new Error('No ErrorHandler. Is platform module (BrowserModule) included?');
            return (
              r.onDestroy(() => hs(this._modules, r)),
              e.runOutsideAngular(() =>
                e.onError.subscribe({
                  next: n => {
                    s.handleError(n);
                  }
                })
              ),
              (function(n, t, e) {
                try {
                  const l = e();
                  return zt(l)
                    ? l.catch(e => {
                        throw (t.runOutsideAngular(() => n.handleError(e)), e);
                      })
                    : l;
                } catch (l) {
                  throw (t.runOutsideAngular(() => n.handleError(l)), l);
                }
              })(s, e, () => {
                const n = r.injector.get(br);
                return (
                  n.runInitializers(), n.donePromise.then(() => (this._moduleDoBootstrap(r), r))
                );
              })
            );
          });
        }
        bootstrapModule(n, t = []) {
          const e = as({}, t);
          return (function(n, t, e) {
            return n
              .get(Dr)
              .createCompiler([t])
              .compileModuleAsync(e);
          })(this.injector, e, n).then(n => this.bootstrapModuleFactory(n, e));
        }
        _moduleDoBootstrap(n) {
          const t = n.injector.get(cs);
          if (n._bootstrapComponents.length > 0)
            n._bootstrapComponents.forEach(n => t.bootstrap(n));
          else {
            if (!n.instance.ngDoBootstrap)
              throw new Error(
                `The module ${_n(
                  n.instance.constructor
                )} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. ` +
                  'Please define one of these.'
              );
            n.instance.ngDoBootstrap(t);
          }
          this._modules.push(n);
        }
        onDestroy(n) {
          this._destroyListeners.push(n);
        }
        get injector() {
          return this._injector;
        }
        destroy() {
          if (this._destroyed) throw new Error('The platform has already been destroyed!');
          this._modules.slice().forEach(n => n.destroy()),
            this._destroyListeners.forEach(n => n()),
            (this._destroyed = !0);
        }
        get destroyed() {
          return this._destroyed;
        }
      }
      function as(n, t) {
        return Array.isArray(t) ? t.reduce(as, n) : Object.assign({}, n, t);
      }
      let cs = (() => {
        class n {
          constructor(n, t, e, l, r, s) {
            (this._zone = n),
              (this._console = t),
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
              (this._enforceNoNewChanges = Zn()),
              this._zone.onMicrotaskEmpty.subscribe({
                next: () => {
                  this._zone.run(() => {
                    this.tick();
                  });
                }
              });
            const i = new b(n => {
                (this._stable =
                  this._zone.isStable &&
                  !this._zone.hasPendingMacrotasks &&
                  !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    n.next(this._stable), n.complete();
                  });
              }),
              o = new b(n => {
                let t;
                this._zone.runOutsideAngular(() => {
                  t = this._zone.onStable.subscribe(() => {
                    Gr.assertNotInAngularZone(),
                      Br(() => {
                        this._stable ||
                          this._zone.hasPendingMacrotasks ||
                          this._zone.hasPendingMicrotasks ||
                          ((this._stable = !0), n.next(!0));
                      });
                  });
                });
                const e = this._zone.onUnstable.subscribe(() => {
                  Gr.assertInAngularZone(),
                    this._stable &&
                      ((this._stable = !1),
                      this._zone.runOutsideAngular(() => {
                        n.next(!1);
                      }));
                });
                return () => {
                  t.unsubscribe(), e.unsubscribe();
                };
              });
            this.isStable = (function(...n) {
              let t = Number.POSITIVE_INFINITY,
                e = null,
                l = n[n.length - 1];
              return (
                M(l)
                  ? ((e = n.pop()),
                    n.length > 1 && 'number' == typeof n[n.length - 1] && (t = n.pop()))
                  : 'number' == typeof l && (t = n.pop()),
                null === e && 1 === n.length && n[0] instanceof b ? n[0] : Y(t)(B(n, e))
              );
            })(
              i,
              o.pipe(n => {
                return J()(
                  ((t = rn),
                  function(n) {
                    let e;
                    e =
                      'function' == typeof t
                        ? t
                        : function() {
                            return t;
                          };
                    const l = Object.create(n, en);
                    return (l.source = n), (l.subjectFactory = e), l;
                  })(n)
                );
                var t;
              })
            );
          }
          bootstrap(n, t) {
            if (!this._initStatus.done)
              throw new Error(
                'Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.'
              );
            let e;
            (e = n instanceof Gt ? n : this._componentFactoryResolver.resolveComponentFactory(n)),
              this.componentTypes.push(e.componentType);
            const l = e instanceof Jt ? null : this._injector.get(Ln),
              r = e.create(Ot.NULL, [], t || e.selector, l);
            r.onDestroy(() => {
              this._unloadComponent(r);
            });
            const s = r.injector.get(Xr, null);
            return (
              s && r.injector.get(ns).registerApplication(r.location.nativeElement, s),
              this._loadComponent(r),
              Zn() &&
                this._console.log(
                  'Angular is running in the development mode. Call enableProdMode() to enable the production mode.'
                ),
              r
            );
          }
          tick() {
            if (this._runningTick) throw new Error('ApplicationRef.tick is called recursively');
            const t = n._tickScope();
            try {
              this._runningTick = !0;
              for (let n of this._views) n.detectChanges();
              if (this._enforceNoNewChanges) for (let n of this._views) n.checkNoChanges();
            } catch (e) {
              this._zone.runOutsideAngular(() => this._exceptionHandler.handleError(e));
            } finally {
              (this._runningTick = !1), zr(t);
            }
          }
          attachView(n) {
            const t = n;
            this._views.push(t), t.attachToAppRef(this);
          }
          detachView(n) {
            const t = n;
            hs(this._views, t), t.detachFromAppRef();
          }
          _loadComponent(n) {
            this.attachView(n.hostView),
              this.tick(),
              this.components.push(n),
              this._injector
                .get(Or, [])
                .concat(this._bootstrapListeners)
                .forEach(t => t(n));
          }
          _unloadComponent(n) {
            this.detachView(n.hostView), hs(this.components, n);
          }
          ngOnDestroy() {
            this._views.slice().forEach(n => n.destroy());
          }
          get viewCount() {
            return this._views.length;
          }
        }
        return (n._tickScope = Hr('ApplicationRef#tick()')), n;
      })();
      function hs(n, t) {
        const e = n.indexOf(t);
        e > -1 && n.splice(e, 1);
      }
      class ds {}
      class ps {}
      const gs = { factoryPathPrefix: '', factoryPathSuffix: '.ngfactory' };
      class fs {
        constructor(n, t) {
          (this._compiler = n), (this._config = t || gs);
        }
        load(n) {
          return this._compiler instanceof Vr ? this.loadFactory(n) : this.loadAndCompile(n);
        }
        loadAndCompile(n) {
          let [t, l] = n.split('#');
          return (
            void 0 === l && (l = 'default'),
            e('zn8P')(t)
              .then(n => n[l])
              .then(n => ms(n, t, l))
              .then(n => this._compiler.compileModuleAsync(n))
          );
        }
        loadFactory(n) {
          let [t, l] = n.split('#'),
            r = 'NgFactory';
          return (
            void 0 === l && ((l = 'default'), (r = '')),
            e('zn8P')(this._config.factoryPathPrefix + t + this._config.factoryPathSuffix)
              .then(n => n[l + r])
              .then(n => ms(n, t, l))
          );
        }
      }
      function ms(n, t, e) {
        if (!n) throw new Error(`Cannot find '${e}' in '${t}'`);
        return n;
      }
      class _s {
        constructor(n, t) {
          (this.name = n), (this.callback = t);
        }
      }
      class vs {
        constructor(n, t, e) {
          (this.listeners = []),
            (this.parent = null),
            (this._debugContext = e),
            (this.nativeNode = n),
            t && t instanceof ys && t.addChild(this);
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
        constructor(n, t, e) {
          super(n, t, e),
            (this.properties = {}),
            (this.attributes = {}),
            (this.classes = {}),
            (this.styles = {}),
            (this.childNodes = []),
            (this.nativeElement = n);
        }
        addChild(n) {
          n && (this.childNodes.push(n), (n.parent = this));
        }
        removeChild(n) {
          const t = this.childNodes.indexOf(n);
          -1 !== t && ((n.parent = null), this.childNodes.splice(t, 1));
        }
        insertChildrenAfter(n, t) {
          const e = this.childNodes.indexOf(n);
          -1 !== e &&
            (this.childNodes.splice(e + 1, 0, ...t),
            t.forEach(t => {
              t.parent && t.parent.removeChild(t), (n.parent = this);
            }));
        }
        insertBefore(n, t) {
          const e = this.childNodes.indexOf(n);
          -1 === e
            ? this.addChild(t)
            : (t.parent && t.parent.removeChild(t),
              (t.parent = this),
              this.childNodes.splice(e, 0, t));
        }
        query(n) {
          return this.queryAll(n)[0] || null;
        }
        queryAll(n) {
          const t = [];
          return (
            (function n(t, e, l) {
              t.childNodes.forEach(t => {
                t instanceof ys && (e(t) && l.push(t), n(t, e, l));
              });
            })(this, n, t),
            t
          );
        }
        queryAllNodes(n) {
          const t = [];
          return (
            (function n(t, e, l) {
              t instanceof ys &&
                t.childNodes.forEach(t => {
                  e(t) && l.push(t), t instanceof ys && n(t, e, l);
                });
            })(this, n, t),
            t
          );
        }
        get children() {
          return this.childNodes.filter(n => n instanceof ys);
        }
        triggerEventHandler(n, t) {
          this.listeners.forEach(e => {
            e.name == n && e.callback(t);
          });
        }
      }
      const ws = new Map(),
        bs = function(n) {
          return ws.get(n) || null;
        };
      function Cs(n) {
        ws.set(n.nativeNode, n);
      }
      const xs = is(null, 'core', [
        { provide: Sr, useValue: 'unknown' },
        { provide: us, deps: [Ot] },
        { provide: ns, deps: [] },
        { provide: Pr, deps: [] }
      ]);
      function ks() {
        return Ce;
      }
      function Es() {
        return xe;
      }
      function Ss(n) {
        return n || 'en-US';
      }
      function Os(n) {
        let t = [];
        return (
          n.onStable.subscribe(() => {
            for (; t.length; ) t.pop()();
          }),
          function(n) {
            t.push(n);
          }
        );
      }
      class Ps {
        constructor(n) {}
      }
      function Ms(n, t, e, l, r, s) {
        n |= 1;
        const { matchedQueries: i, references: o, matchedQueryIds: u } = el(t);
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
      function Ts(n, t, e, l, r, s, i = [], o, u, a, c, h) {
        a || (a = je);
        const { matchedQueries: d, references: p, matchedQueryIds: g } = el(e);
        let f = null,
          m = null;
        s && ([f, m] = pl(s)), (o = o || []);
        const _ = new Array(o.length);
        for (let w = 0; w < o.length; w++) {
          const [n, t, e] = o[w],
            [l, r] = pl(t);
          let s = void 0,
            i = void 0;
          switch (15 & n) {
            case 4:
              i = e;
              break;
            case 1:
            case 8:
              s = e;
          }
          _[w] = { flags: n, ns: l, name: r, nonMinifiedName: r, securityContext: s, suffix: i };
        }
        u = u || [];
        const v = new Array(u.length);
        for (let w = 0; w < u.length; w++) {
          const [n, t] = u[w];
          v[w] = { type: 0, target: n, eventName: t, propName: null };
        }
        const y = (i = i || []).map(([n, t]) => {
          const [e, l] = pl(n);
          return [e, l, t];
        });
        return (
          (h = (function(n) {
            if (n && '$$undefined' === n.id) {
              const t =
                (null != n.encapsulation && n.encapsulation !== $n.None) ||
                n.styles.length ||
                Object.keys(n.data).length;
              n.id = t ? `c${ze++}` : '$$empty';
            }
            return n && '$$empty' === n.id && (n = null), n || null;
          })(h)),
          c && (t |= 33554432),
          {
            nodeIndex: -1,
            parent: null,
            renderParent: null,
            bindingIndex: -1,
            outputIndex: -1,
            checkIndex: n,
            flags: (t |= 1),
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
      function As(n, t, e) {
        const l = e.element,
          r = n.root.selectorOrNode,
          s = n.renderer;
        let i;
        if (n.parent || !r) {
          i = l.name ? s.createElement(l.name, l.ns) : s.createComment('');
          const r = rl(n, t, e);
          r && s.appendChild(r, i);
        } else
          i = s.selectRootElement(
            r,
            !!l.componentRendererType && l.componentRendererType.encapsulation === $n.ShadowDom
          );
        if (l.attrs)
          for (let o = 0; o < l.attrs.length; o++) {
            const [n, t, e] = l.attrs[o];
            s.setAttribute(i, t, e, n);
          }
        return i;
      }
      function Is(n, t, e, l) {
        for (let i = 0; i < e.outputs.length; i++) {
          const o = e.outputs[i],
            u = Rs(n, e.nodeIndex, ((s = o.eventName), (r = o.target) ? `${r}:${s}` : s));
          let a = o.target,
            c = n;
          'component' === o.target && ((a = null), (c = t));
          const h = c.renderer.listen(a || l, o.eventName, u);
          n.disposables[e.outputIndex + i] = h;
        }
        var r, s;
      }
      function Rs(n, t, e) {
        return l => Ze(n, t, e, l);
      }
      function Ns(n, t, e, l) {
        if (!Be(n, t, e, l)) return !1;
        const r = t.bindings[e],
          s = Ne(n, t.nodeIndex),
          i = s.renderElement,
          o = r.name;
        switch (15 & r.flags) {
          case 1:
            !(function(n, t, e, l, r, s) {
              const i = t.securityContext;
              let o = i ? n.root.sanitizer.sanitize(i, s) : s;
              o = null != o ? o.toString() : null;
              const u = n.renderer;
              null != s ? u.setAttribute(e, r, o, l) : u.removeAttribute(e, r, l);
            })(n, r, i, r.ns, o, l);
            break;
          case 2:
            !(function(n, t, e, l) {
              const r = n.renderer;
              l ? r.addClass(t, e) : r.removeClass(t, e);
            })(n, i, o, l);
            break;
          case 4:
            !(function(n, t, e, l, r) {
              let s = n.root.sanitizer.sanitize(_t.STYLE, r);
              if (null != s) {
                s = s.toString();
                const n = t.suffix;
                null != n && (s += n);
              } else s = null;
              const i = n.renderer;
              null != s ? i.setStyle(e, l, s) : i.removeStyle(e, l);
            })(n, r, i, o, l);
            break;
          case 8:
            !(function(n, t, e, l, r) {
              const s = t.securityContext;
              let i = s ? n.root.sanitizer.sanitize(s, r) : r;
              n.renderer.setProperty(e, l, i);
            })(33554432 & t.flags && 32 & r.flags ? s.componentView : n, r, i, o, l);
        }
        return !0;
      }
      function Vs(n, t, e) {
        let l = [];
        for (let r in e) l.push({ propName: r, bindingType: e[r] });
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
          query: { id: t, filterId: tl(t), bindings: l },
          ngContent: null
        };
      }
      function Ds(n) {
        const t = n.def.nodeMatchedQueries;
        for (; n.parent && nl(n); ) {
          let e = n.parentNodeDef;
          n = n.parent;
          const l = e.nodeIndex + e.childCount;
          for (let r = 0; r <= l; r++) {
            const l = n.def.nodes[r];
            67108864 & l.flags &&
              536870912 & l.flags &&
              (l.query.filterId & t) === l.query.filterId &&
              Le(n, r).setDirty(),
              (!(1 & l.flags && r + l.childCount < e.nodeIndex) &&
                67108864 & l.childFlags &&
                536870912 & l.childFlags) ||
                (r += l.childCount);
          }
        }
        if (134217728 & n.def.nodeFlags)
          for (let e = 0; e < n.def.nodes.length; e++) {
            const t = n.def.nodes[e];
            134217728 & t.flags && 536870912 & t.flags && Le(n, e).setDirty(), (e += t.childCount);
          }
      }
      function Ls(n, t) {
        const e = Le(n, t.nodeIndex);
        if (!e.dirty) return;
        let l,
          r = void 0;
        if (67108864 & t.flags) {
          const e = t.parent.parent;
          (r = Us(n, e.nodeIndex, e.nodeIndex + e.childCount, t.query, [])),
            (l = Ve(n, t.parent.nodeIndex).instance);
        } else
          134217728 & t.flags &&
            ((r = Us(n, 0, n.def.nodes.length - 1, t.query, [])), (l = n.component));
        e.reset(r);
        const s = t.query.bindings;
        let i = !1;
        for (let o = 0; o < s.length; o++) {
          const n = s[o];
          let t;
          switch (n.bindingType) {
            case 0:
              t = e.first;
              break;
            case 1:
              (t = e), (i = !0);
          }
          l[n.propName] = t;
        }
        i && e.notifyOnChanges();
      }
      function Us(n, t, e, l, r) {
        for (let s = t; s <= e; s++) {
          const t = n.def.nodes[s],
            e = t.matchedQueries[l.id];
          if (
            (null != e && r.push(js(n, t, e)),
            1 & t.flags &&
              t.element.template &&
              (t.element.template.nodeMatchedQueries & l.filterId) === l.filterId)
          ) {
            const e = Ne(n, s);
            if (
              ((t.childMatchedQueries & l.filterId) === l.filterId &&
                (Us(n, s + 1, s + t.childCount, l, r), (s += t.childCount)),
              16777216 & t.flags)
            ) {
              const n = e.viewContainer._embeddedViews;
              for (let t = 0; t < n.length; t++) {
                const s = n[t],
                  i = Qe(s);
                i && i === e && Us(s, 0, s.def.nodes.length - 1, l, r);
              }
            }
            const i = e.template._projectedViews;
            if (i)
              for (let n = 0; n < i.length; n++) {
                const t = i[n];
                Us(t, 0, t.def.nodes.length - 1, l, r);
              }
          }
          (t.childMatchedQueries & l.filterId) !== l.filterId && (s += t.childCount);
        }
        return r;
      }
      function js(n, t, e) {
        if (null != e)
          switch (e) {
            case 1:
              return Ne(n, t.nodeIndex).renderElement;
            case 0:
              return new ne(Ne(n, t.nodeIndex).renderElement);
            case 2:
              return Ne(n, t.nodeIndex).template;
            case 3:
              return Ne(n, t.nodeIndex).viewContainer;
            case 4:
              return Ve(n, t.nodeIndex).instance;
          }
      }
      function Fs(n, t, e) {
        const l = rl(n, t, e);
        l && al(n, e.ngContent.index, 1, l, null, void 0);
      }
      function $s(n, t) {
        return (function(n, t, e) {
          const l = new Array(e.length);
          for (let r = 0; r < e.length; r++) {
            const n = e[r];
            l[r] = {
              flags: 8,
              name: n,
              ns: null,
              nonMinifiedName: n,
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
            checkIndex: t,
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
        })(0, n, new Array(t));
      }
      function Hs(n, t, e) {
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
          checkIndex: n,
          flags: 2,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: {},
          matchedQueryIds: 0,
          references: {},
          ngContentIndex: t,
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
      function zs(n, t, e) {
        let l;
        const r = n.renderer;
        l = r.createText(e.text.prefix);
        const s = rl(n, t, e);
        return s && r.appendChild(s, l), { renderText: l };
      }
      function qs(n, t) {
        return (null != n ? n.toString() : '') + t.suffix;
      }
      function Bs(n, t, e, l) {
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
        for (let g = 0; g < t.length; g++) {
          const n = t[g];
          if (
            ((n.nodeIndex = g),
            (n.parent = a),
            (n.bindingIndex = r),
            (n.outputIndex = s),
            (n.renderParent = c),
            (i |= n.flags),
            (u |= n.matchedQueryIds),
            n.element)
          ) {
            const t = n.element;
            (t.publicProviders = a ? a.element.publicProviders : Object.create(null)),
              (t.allProviders = t.publicProviders),
              (h = !1),
              (d = !1),
              n.element.template && (u |= n.element.template.nodeMatchedQueries);
          }
          if (
            (Ks(a, n, t.length),
            (r += n.bindings.length),
            (s += n.outputs.length),
            !c && 3 & n.flags && (p = n),
            20224 & n.flags)
          ) {
            h ||
              ((h = !0),
              (a.element.publicProviders = Object.create(a.element.publicProviders)),
              (a.element.allProviders = a.element.publicProviders));
            const t = 0 != (32768 & n.flags);
            0 == (8192 & n.flags) || t
              ? (a.element.publicProviders[$e(n.provider.token)] = n)
              : (d ||
                  ((d = !0), (a.element.allProviders = Object.create(a.element.publicProviders))),
                (a.element.allProviders[$e(n.provider.token)] = n)),
              t && (a.element.componentProvider = n);
          }
          if (
            (a
              ? ((a.childFlags |= n.flags),
                (a.directChildFlags |= n.flags),
                (a.childMatchedQueries |= n.matchedQueryIds),
                n.element &&
                  n.element.template &&
                  (a.childMatchedQueries |= n.element.template.nodeMatchedQueries))
              : (o |= n.flags),
            n.childCount > 0)
          )
            (a = n), Gs(n) || (c = n);
          else
            for (; a && g === a.nodeIndex + a.childCount; ) {
              const n = a.parent;
              n &&
                ((n.childFlags |= a.childFlags), (n.childMatchedQueries |= a.childMatchedQueries)),
                (a = n),
                (c = a && Gs(a) ? a.renderParent : a);
            }
        }
        return {
          factory: null,
          nodeFlags: i,
          rootNodeFlags: o,
          nodeMatchedQueries: u,
          flags: n,
          nodes: t,
          updateDirectives: e || je,
          updateRenderer: l || je,
          handleEvent: (n, e, l, r) => t[e].element.handleEvent(n, l, r),
          bindingCount: r,
          outputCount: s,
          lastRenderRootNode: p
        };
      }
      function Gs(n) {
        return 0 != (1 & n.flags) && null === n.element.name;
      }
      function Ks(n, t, e) {
        const l = t.element && t.element.template;
        if (l) {
          if (!l.lastRenderRootNode)
            throw new Error('Illegal State: Embedded templates without nodes are not allowed!');
          if (l.lastRenderRootNode && 16777216 & l.lastRenderRootNode.flags)
            throw new Error(
              `Illegal State: Last root node of a template can't have embedded views, at index ${t.nodeIndex}!`
            );
        }
        if (20224 & t.flags && 0 == (1 & (n ? n.flags : 0)))
          throw new Error(
            `Illegal State: StaticProvider/Directive nodes need to be children of elements or anchors, at index ${t.nodeIndex}!`
          );
        if (t.query) {
          if (67108864 & t.flags && (!n || 0 == (16384 & n.flags)))
            throw new Error(
              `Illegal State: Content Query nodes need to be children of directives, at index ${t.nodeIndex}!`
            );
          if (134217728 & t.flags && n)
            throw new Error(
              `Illegal State: View Query nodes have to be top level nodes, at index ${t.nodeIndex}!`
            );
        }
        if (t.childCount) {
          const l = n ? n.nodeIndex + n.childCount : e - 1;
          if (t.nodeIndex <= l && t.nodeIndex + t.childCount > l)
            throw new Error(
              `Illegal State: childCount of node leads outside of parent, at index ${t.nodeIndex}!`
            );
        }
      }
      function Ws(n, t, e, l) {
        const r = Ys(n.root, n.renderer, n, t, e);
        return Js(r, n.component, l), Xs(r), r;
      }
      function Zs(n, t, e) {
        const l = Ys(n, n.renderer, null, null, t);
        return Js(l, e, e), Xs(l), l;
      }
      function Qs(n, t, e, l) {
        const r = t.element.componentRendererType;
        let s;
        return (
          (s = r ? n.root.rendererFactory.createRenderer(l, r) : n.root.renderer),
          Ys(n.root, s, n, t.element.componentProvider, e)
        );
      }
      function Ys(n, t, e, l, r) {
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
          root: n,
          renderer: t,
          oldValues: new Array(r.bindingCount),
          disposables: i,
          initIndex: -1
        };
      }
      function Js(n, t, e) {
        (n.component = t), (n.context = e);
      }
      function Xs(n) {
        let t;
        Xe(n) && (t = Ne(n.parent, n.parentNodeDef.parent.nodeIndex).renderElement);
        const e = n.def,
          l = n.nodes;
        for (let r = 0; r < e.nodes.length; r++) {
          const s = e.nodes[r];
          let i;
          switch ((Ue.setCurrentNode(n, r), 201347067 & s.flags)) {
            case 1:
              const e = As(n, t, s);
              let o = void 0;
              if (33554432 & s.flags) {
                const t = il(s.element.componentView);
                o = Ue.createComponentView(n, s, t, e);
              }
              Is(n, o, s, e),
                (i = {
                  renderElement: e,
                  componentView: o,
                  viewContainer: null,
                  template: s.element.template ? Rl(n, s) : void 0
                }),
                16777216 & s.flags && (i.viewContainer = Ml(n, s, i));
              break;
            case 2:
              i = zs(n, t, s);
              break;
            case 512:
            case 1024:
            case 2048:
            case 256:
              (i = l[r]), i || 4096 & s.flags || (i = { instance: Xl(n, s) });
              break;
            case 16:
              i = { instance: nr(n, s) };
              break;
            case 16384:
              (i = l[r]),
                i || (i = { instance: tr(n, s) }),
                32768 & s.flags &&
                  Js(Ne(n, s.parent.nodeIndex).componentView, i.instance, i.instance);
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
              Fs(n, t, s), (i = void 0);
          }
          l[r] = i;
        }
        ui(n, oi.CreateViewNodes), di(n, 201326592, 268435456, 0);
      }
      function ni(n) {
        li(n),
          Ue.updateDirectives(n, 1),
          ai(n, oi.CheckNoChanges),
          Ue.updateRenderer(n, 1),
          ui(n, oi.CheckNoChanges),
          (n.state &= -97);
      }
      function ti(n) {
        1 & n.state ? ((n.state &= -2), (n.state |= 2)) : (n.state &= -3),
          Ae(n, 0, 256),
          li(n),
          Ue.updateDirectives(n, 0),
          ai(n, oi.CheckAndUpdate),
          di(n, 67108864, 536870912, 0);
        let t = Ae(n, 256, 512);
        ar(n, 2097152 | (t ? 1048576 : 0)),
          Ue.updateRenderer(n, 0),
          ui(n, oi.CheckAndUpdate),
          di(n, 134217728, 536870912, 0),
          (t = Ae(n, 512, 768)),
          ar(n, 8388608 | (t ? 4194304 : 0)),
          2 & n.def.flags && (n.state &= -9),
          (n.state &= -97),
          Ae(n, 768, 1024);
      }
      function ei(n, t, e, l, r, s, i, o, u, a, c, h, d) {
        return 0 === e
          ? (function(n, t, e, l, r, s, i, o, u, a, c, h) {
              switch (201347067 & t.flags) {
                case 1:
                  return (function(n, t, e, l, r, s, i, o, u, a, c, h) {
                    const d = t.bindings.length;
                    let p = !1;
                    return (
                      d > 0 && Ns(n, t, 0, e) && (p = !0),
                      d > 1 && Ns(n, t, 1, l) && (p = !0),
                      d > 2 && Ns(n, t, 2, r) && (p = !0),
                      d > 3 && Ns(n, t, 3, s) && (p = !0),
                      d > 4 && Ns(n, t, 4, i) && (p = !0),
                      d > 5 && Ns(n, t, 5, o) && (p = !0),
                      d > 6 && Ns(n, t, 6, u) && (p = !0),
                      d > 7 && Ns(n, t, 7, a) && (p = !0),
                      d > 8 && Ns(n, t, 8, c) && (p = !0),
                      d > 9 && Ns(n, t, 9, h) && (p = !0),
                      p
                    );
                  })(n, t, e, l, r, s, i, o, u, a, c, h);
                case 2:
                  return (function(n, t, e, l, r, s, i, o, u, a, c, h) {
                    let d = !1;
                    const p = t.bindings,
                      g = p.length;
                    if (
                      (g > 0 && Be(n, t, 0, e) && (d = !0),
                      g > 1 && Be(n, t, 1, l) && (d = !0),
                      g > 2 && Be(n, t, 2, r) && (d = !0),
                      g > 3 && Be(n, t, 3, s) && (d = !0),
                      g > 4 && Be(n, t, 4, i) && (d = !0),
                      g > 5 && Be(n, t, 5, o) && (d = !0),
                      g > 6 && Be(n, t, 6, u) && (d = !0),
                      g > 7 && Be(n, t, 7, a) && (d = !0),
                      g > 8 && Be(n, t, 8, c) && (d = !0),
                      g > 9 && Be(n, t, 9, h) && (d = !0),
                      d)
                    ) {
                      let d = t.text.prefix;
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
                      const f = Re(n, t.nodeIndex).renderText;
                      n.renderer.setValue(f, d);
                    }
                    return d;
                  })(n, t, e, l, r, s, i, o, u, a, c, h);
                case 16384:
                  return (function(n, t, e, l, r, s, i, o, u, a, c, h) {
                    const d = Ve(n, t.nodeIndex),
                      p = d.instance;
                    let g = !1,
                      f = void 0;
                    const m = t.bindings.length;
                    return (
                      m > 0 && qe(n, t, 0, e) && ((g = !0), (f = ur(n, d, t, 0, e, f))),
                      m > 1 && qe(n, t, 1, l) && ((g = !0), (f = ur(n, d, t, 1, l, f))),
                      m > 2 && qe(n, t, 2, r) && ((g = !0), (f = ur(n, d, t, 2, r, f))),
                      m > 3 && qe(n, t, 3, s) && ((g = !0), (f = ur(n, d, t, 3, s, f))),
                      m > 4 && qe(n, t, 4, i) && ((g = !0), (f = ur(n, d, t, 4, i, f))),
                      m > 5 && qe(n, t, 5, o) && ((g = !0), (f = ur(n, d, t, 5, o, f))),
                      m > 6 && qe(n, t, 6, u) && ((g = !0), (f = ur(n, d, t, 6, u, f))),
                      m > 7 && qe(n, t, 7, a) && ((g = !0), (f = ur(n, d, t, 7, a, f))),
                      m > 8 && qe(n, t, 8, c) && ((g = !0), (f = ur(n, d, t, 8, c, f))),
                      m > 9 && qe(n, t, 9, h) && ((g = !0), (f = ur(n, d, t, 9, h, f))),
                      f && p.ngOnChanges(f),
                      65536 & t.flags && Ie(n, 256, t.nodeIndex) && p.ngOnInit(),
                      262144 & t.flags && p.ngDoCheck(),
                      g
                    );
                  })(n, t, e, l, r, s, i, o, u, a, c, h);
                case 32:
                case 64:
                case 128:
                  return (function(n, t, e, l, r, s, i, o, u, a, c, h) {
                    const d = t.bindings;
                    let p = !1;
                    const g = d.length;
                    if (
                      (g > 0 && Be(n, t, 0, e) && (p = !0),
                      g > 1 && Be(n, t, 1, l) && (p = !0),
                      g > 2 && Be(n, t, 2, r) && (p = !0),
                      g > 3 && Be(n, t, 3, s) && (p = !0),
                      g > 4 && Be(n, t, 4, i) && (p = !0),
                      g > 5 && Be(n, t, 5, o) && (p = !0),
                      g > 6 && Be(n, t, 6, u) && (p = !0),
                      g > 7 && Be(n, t, 7, a) && (p = !0),
                      g > 8 && Be(n, t, 8, c) && (p = !0),
                      g > 9 && Be(n, t, 9, h) && (p = !0),
                      p)
                    ) {
                      const p = De(n, t.nodeIndex);
                      let f;
                      switch (201347067 & t.flags) {
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
                          const n = e;
                          switch (g) {
                            case 1:
                              f = n.transform(e);
                              break;
                            case 2:
                              f = n.transform(l);
                              break;
                            case 3:
                              f = n.transform(l, r);
                              break;
                            case 4:
                              f = n.transform(l, r, s);
                              break;
                            case 5:
                              f = n.transform(l, r, s, i);
                              break;
                            case 6:
                              f = n.transform(l, r, s, i, o);
                              break;
                            case 7:
                              f = n.transform(l, r, s, i, o, u);
                              break;
                            case 8:
                              f = n.transform(l, r, s, i, o, u, a);
                              break;
                            case 9:
                              f = n.transform(l, r, s, i, o, u, a, c);
                              break;
                            case 10:
                              f = n.transform(l, r, s, i, o, u, a, c, h);
                          }
                      }
                      p.value = f;
                    }
                    return p;
                  })(n, t, e, l, r, s, i, o, u, a, c, h);
                default:
                  throw 'unreachable';
              }
            })(n, t, l, r, s, i, o, u, a, c, h, d)
          : (function(n, t, e) {
              switch (201347067 & t.flags) {
                case 1:
                  return (function(n, t, e) {
                    let l = !1;
                    for (let r = 0; r < e.length; r++) Ns(n, t, r, e[r]) && (l = !0);
                    return l;
                  })(n, t, e);
                case 2:
                  return (function(n, t, e) {
                    const l = t.bindings;
                    let r = !1;
                    for (let s = 0; s < e.length; s++) Be(n, t, s, e[s]) && (r = !0);
                    if (r) {
                      let r = '';
                      for (let n = 0; n < e.length; n++) r += qs(e[n], l[n]);
                      r = t.text.prefix + r;
                      const s = Re(n, t.nodeIndex).renderText;
                      n.renderer.setValue(s, r);
                    }
                    return r;
                  })(n, t, e);
                case 16384:
                  return (function(n, t, e) {
                    const l = Ve(n, t.nodeIndex),
                      r = l.instance;
                    let s = !1,
                      i = void 0;
                    for (let o = 0; o < e.length; o++)
                      qe(n, t, o, e[o]) && ((s = !0), (i = ur(n, l, t, o, e[o], i)));
                    return (
                      i && r.ngOnChanges(i),
                      65536 & t.flags && Ie(n, 256, t.nodeIndex) && r.ngOnInit(),
                      262144 & t.flags && r.ngDoCheck(),
                      s
                    );
                  })(n, t, e);
                case 32:
                case 64:
                case 128:
                  return (function(n, t, e) {
                    const l = t.bindings;
                    let r = !1;
                    for (let s = 0; s < e.length; s++) Be(n, t, s, e[s]) && (r = !0);
                    if (r) {
                      const r = De(n, t.nodeIndex);
                      let s;
                      switch (201347067 & t.flags) {
                        case 32:
                          s = e;
                          break;
                        case 64:
                          s = {};
                          for (let r = 0; r < e.length; r++) s[l[r].name] = e[r];
                          break;
                        case 128:
                          const n = e[0],
                            t = e.slice(1);
                          s = n.transform(...t);
                      }
                      r.value = s;
                    }
                    return r;
                  })(n, t, e);
                default:
                  throw 'unreachable';
              }
            })(n, t, l);
      }
      function li(n) {
        const t = n.def;
        if (4 & t.nodeFlags)
          for (let e = 0; e < t.nodes.length; e++) {
            const l = t.nodes[e];
            if (4 & l.flags) {
              const t = Ne(n, e).template._projectedViews;
              if (t)
                for (let e = 0; e < t.length; e++) {
                  const l = t[e];
                  (l.state |= 32), We(l, n);
                }
            } else 0 == (4 & l.childFlags) && (e += l.childCount);
          }
      }
      function ri(n, t, e, l, r, s, i, o, u, a, c, h, d) {
        return (
          0 === e
            ? (function(n, t, e, l, r, s, i, o, u, a, c, h) {
                const d = t.bindings.length;
                d > 0 && Ge(n, t, 0, e),
                  d > 1 && Ge(n, t, 1, l),
                  d > 2 && Ge(n, t, 2, r),
                  d > 3 && Ge(n, t, 3, s),
                  d > 4 && Ge(n, t, 4, i),
                  d > 5 && Ge(n, t, 5, o),
                  d > 6 && Ge(n, t, 6, u),
                  d > 7 && Ge(n, t, 7, a),
                  d > 8 && Ge(n, t, 8, c),
                  d > 9 && Ge(n, t, 9, h);
              })(n, t, l, r, s, i, o, u, a, c, h, d)
            : (function(n, t, e) {
                for (let l = 0; l < e.length; l++) Ge(n, t, l, e[l]);
              })(n, t, l),
          !1
        );
      }
      function si(n, t) {
        if (Le(n, t.nodeIndex).dirty)
          throw Pe(
            Ue.createDebugContext(n, t.nodeIndex),
            `Query ${t.query.id} not dirty`,
            `Query ${t.query.id} dirty`,
            0 != (1 & n.state)
          );
      }
      function ii(n) {
        if (!(128 & n.state)) {
          if ((ai(n, oi.Destroy), ui(n, oi.Destroy), ar(n, 131072), n.disposables))
            for (let t = 0; t < n.disposables.length; t++) n.disposables[t]();
          !(function(n) {
            if (!(16 & n.state)) return;
            const t = Qe(n);
            if (t) {
              const e = t.template._projectedViews;
              e && (Fn(e, e.indexOf(n)), Ue.dirtyParentQueries(n));
            }
          })(n),
            n.renderer.destroyNode &&
              (function(n) {
                const t = n.def.nodes.length;
                for (let e = 0; e < t; e++) {
                  const t = n.def.nodes[e];
                  1 & t.flags
                    ? n.renderer.destroyNode(Ne(n, e).renderElement)
                    : 2 & t.flags
                    ? n.renderer.destroyNode(Re(n, e).renderText)
                    : (67108864 & t.flags || 134217728 & t.flags) && Le(n, e).destroy();
                }
              })(n),
            Xe(n) && n.renderer.destroy(),
            (n.state |= 128);
        }
      }
      const oi = (function() {
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
      function ui(n, t) {
        const e = n.def;
        if (33554432 & e.nodeFlags)
          for (let l = 0; l < e.nodes.length; l++) {
            const r = e.nodes[l];
            33554432 & r.flags
              ? ci(Ne(n, l).componentView, t)
              : 0 == (33554432 & r.childFlags) && (l += r.childCount);
          }
      }
      function ai(n, t) {
        const e = n.def;
        if (16777216 & e.nodeFlags)
          for (let l = 0; l < e.nodes.length; l++) {
            const r = e.nodes[l];
            if (16777216 & r.flags) {
              const e = Ne(n, l).viewContainer._embeddedViews;
              for (let n = 0; n < e.length; n++) ci(e[n], t);
            } else 0 == (16777216 & r.childFlags) && (l += r.childCount);
          }
      }
      function ci(n, t) {
        const e = n.state;
        switch (t) {
          case oi.CheckNoChanges:
            0 == (128 & e) &&
              (12 == (12 & e) ? ni(n) : 64 & e && hi(n, oi.CheckNoChangesProjectedViews));
            break;
          case oi.CheckNoChangesProjectedViews:
            0 == (128 & e) && (32 & e ? ni(n) : 64 & e && hi(n, t));
            break;
          case oi.CheckAndUpdate:
            0 == (128 & e) &&
              (12 == (12 & e) ? ti(n) : 64 & e && hi(n, oi.CheckAndUpdateProjectedViews));
            break;
          case oi.CheckAndUpdateProjectedViews:
            0 == (128 & e) && (32 & e ? ti(n) : 64 & e && hi(n, t));
            break;
          case oi.Destroy:
            ii(n);
            break;
          case oi.CreateViewNodes:
            Xs(n);
        }
      }
      function hi(n, t) {
        ai(n, t), ui(n, t);
      }
      function di(n, t, e, l) {
        if (!(n.def.nodeFlags & t && n.def.nodeFlags & e)) return;
        const r = n.def.nodes.length;
        for (let s = 0; s < r; s++) {
          const r = n.def.nodes[s];
          if (r.flags & t && r.flags & e)
            switch ((Ue.setCurrentNode(n, r.nodeIndex), l)) {
              case 0:
                Ls(n, r);
                break;
              case 1:
                si(n, r);
            }
          (r.childFlags & t && r.childFlags & e) || (s += r.childCount);
        }
      }
      let pi = !1;
      function gi(n, t, e, l, r, s) {
        const i = r.injector.get(le);
        return Zs(mi(n, r, i, t, e), l, s);
      }
      function fi(n, t, e, l, r, s) {
        const i = r.injector.get(le),
          o = mi(n, r, new Wi(i), t, e),
          u = Si(l);
        return Gi(Ii.create, Zs, null, [o, u, s]);
      }
      function mi(n, t, e, l, r) {
        const s = t.injector.get(vt),
          i = t.injector.get(Gn),
          o = e.createRenderer(null, null);
        return {
          ngModule: t,
          injector: n,
          projectableNodes: l,
          selectorOrNode: r,
          sanitizer: s,
          rendererFactory: e,
          renderer: o,
          errorHandler: i
        };
      }
      function _i(n, t, e, l) {
        const r = Si(e);
        return Gi(Ii.create, Ws, null, [n, t, r, l]);
      }
      function vi(n, t, e, l) {
        return (
          (e = Ci.get(t.element.componentProvider.provider.token) || Si(e)),
          Gi(Ii.create, Qs, null, [n, t, e, l])
        );
      }
      function yi(n, t, e, l) {
        return Fl(
          n,
          t,
          e,
          (function(n) {
            const { hasOverrides: t, hasDeprecatedOverrides: e } = (function(n) {
              let t = !1,
                e = !1;
              return 0 === wi.size
                ? { hasOverrides: t, hasDeprecatedOverrides: e }
                : (n.providers.forEach(n => {
                    const l = wi.get(n.token);
                    3840 & n.flags && l && ((t = !0), (e = e || l.deprecatedBehavior));
                  }),
                  n.modules.forEach(n => {
                    bi.forEach((l, r) => {
                      fn(r).providedIn === n && ((t = !0), (e = e || l.deprecatedBehavior));
                    });
                  }),
                  { hasOverrides: t, hasDeprecatedOverrides: e });
            })(n);
            return t
              ? ((function(n) {
                  for (let t = 0; t < n.providers.length; t++) {
                    const l = n.providers[t];
                    e && (l.flags |= 4096);
                    const r = wi.get(l.token);
                    r &&
                      ((l.flags = (-3841 & l.flags) | r.flags),
                      (l.deps = ll(r.deps)),
                      (l.value = r.value));
                  }
                  if (bi.size > 0) {
                    let t = new Set(n.modules);
                    bi.forEach((l, r) => {
                      if (t.has(fn(r).providedIn)) {
                        let t = {
                          token: r,
                          flags: l.flags | (e ? 4096 : 0),
                          deps: ll(l.deps),
                          value: l.value,
                          index: n.providers.length
                        };
                        n.providers.push(t), (n.providersByKey[$e(r)] = t);
                      }
                    });
                  }
                })((n = n.factory(() => je))),
                n)
              : n;
          })(l)
        );
      }
      const wi = new Map(),
        bi = new Map(),
        Ci = new Map();
      function xi(n) {
        let t;
        wi.set(n.token, n),
          'function' == typeof n.token &&
            (t = fn(n.token)) &&
            'function' == typeof t.providedIn &&
            bi.set(n.token, n);
      }
      function ki(n, t) {
        const e = il(t.viewDefFactory),
          l = il(e.nodes[0].element.componentView);
        Ci.set(n, l);
      }
      function Ei() {
        wi.clear(), bi.clear(), Ci.clear();
      }
      function Si(n) {
        if (0 === wi.size) return n;
        const t = (function(n) {
          const t = [];
          let e = null;
          for (let l = 0; l < n.nodes.length; l++) {
            const r = n.nodes[l];
            1 & r.flags && (e = r),
              e && 3840 & r.flags && wi.has(r.provider.token) && (t.push(e.nodeIndex), (e = null));
          }
          return t;
        })(n);
        if (0 === t.length) return n;
        n = n.factory(() => je);
        for (let l = 0; l < t.length; l++) e(n, t[l]);
        return n;
        function e(n, t) {
          for (let e = t + 1; e < n.nodes.length; e++) {
            const t = n.nodes[e];
            if (1 & t.flags) return;
            if (3840 & t.flags) {
              const n = t.provider,
                e = wi.get(n.token);
              e &&
                ((t.flags = (-3841 & t.flags) | e.flags),
                (n.deps = ll(e.deps)),
                (n.value = e.value));
            }
          }
        }
      }
      function Oi(n, t, e, l, r, s, i, o, u, a, c, h, d) {
        const p = n.def.nodes[t];
        return ei(n, p, e, l, r, s, i, o, u, a, c, h, d), 224 & p.flags ? De(n, t).value : void 0;
      }
      function Pi(n, t, e, l, r, s, i, o, u, a, c, h, d) {
        const p = n.def.nodes[t];
        return ri(n, p, e, l, r, s, i, o, u, a, c, h, d), 224 & p.flags ? De(n, t).value : void 0;
      }
      function Mi(n) {
        return Gi(Ii.detectChanges, ti, null, [n]);
      }
      function Ti(n) {
        return Gi(Ii.checkNoChanges, ni, null, [n]);
      }
      function Ai(n) {
        return Gi(Ii.destroy, ii, null, [n]);
      }
      const Ii = (function() {
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
      let Ri, Ni, Vi;
      function Di(n, t) {
        (Ni = n), (Vi = t);
      }
      function Li(n, t, e, l) {
        return Di(n, t), Gi(Ii.handleEvent, n.def.handleEvent, null, [n, t, e, l]);
      }
      function Ui(n, t) {
        if (128 & n.state) throw Te(Ii[Ri]);
        return (
          Di(n, Hi(n, 0)),
          n.def.updateDirectives(function(n, e, l, ...r) {
            const s = n.def.nodes[e];
            return (
              0 === t ? Fi(n, s, l, r) : $i(n, s, l, r),
              16384 & s.flags && Di(n, Hi(n, e)),
              224 & s.flags ? De(n, s.nodeIndex).value : void 0
            );
          }, n)
        );
      }
      function ji(n, t) {
        if (128 & n.state) throw Te(Ii[Ri]);
        return (
          Di(n, zi(n, 0)),
          n.def.updateRenderer(function(n, e, l, ...r) {
            const s = n.def.nodes[e];
            return (
              0 === t ? Fi(n, s, l, r) : $i(n, s, l, r),
              3 & s.flags && Di(n, zi(n, e)),
              224 & s.flags ? De(n, s.nodeIndex).value : void 0
            );
          }, n)
        );
      }
      function Fi(n, t, e, l) {
        if (ei(n, t, e, ...l)) {
          const i = 1 === e ? l[0] : l;
          if (16384 & t.flags) {
            const e = {};
            for (let n = 0; n < t.bindings.length; n++) {
              const l = t.bindings[n],
                o = i[n];
              8 & l.flags &&
                (e[
                  ((r = l.nonMinifiedName),
                  (s = void 0),
                  (s = r.replace(/[$@]/g, '_')),
                  `ng-reflect-${(r = s.replace(bt, (...n) => '-' + n[1].toLowerCase()))}`)
                ] = Ct(o));
            }
            const l = t.parent,
              o = Ne(n, l.nodeIndex).renderElement;
            if (l.element.name)
              for (let t in e) {
                const l = e[t];
                null != l ? n.renderer.setAttribute(o, t, l) : n.renderer.removeAttribute(o, t);
              }
            else n.renderer.setValue(o, `bindings=${JSON.stringify(e, null, 2)}`);
          }
        }
        var r, s;
      }
      function $i(n, t, e, l) {
        ri(n, t, e, ...l);
      }
      function Hi(n, t) {
        for (let e = t; e < n.def.nodes.length; e++) {
          const t = n.def.nodes[e];
          if (16384 & t.flags && t.bindings && t.bindings.length) return e;
        }
        return null;
      }
      function zi(n, t) {
        for (let e = t; e < n.def.nodes.length; e++) {
          const t = n.def.nodes[e];
          if (3 & t.flags && t.bindings && t.bindings.length) return e;
        }
        return null;
      }
      class qi {
        constructor(n, t) {
          (this.view = n),
            (this.nodeIndex = t),
            null == t && (this.nodeIndex = t = 0),
            (this.nodeDef = n.def.nodes[t]);
          let e = this.nodeDef,
            l = n;
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
          const n = [];
          if (this.elDef)
            for (
              let t = this.elDef.nodeIndex + 1;
              t <= this.elDef.nodeIndex + this.elDef.childCount;
              t++
            ) {
              const e = this.elView.def.nodes[t];
              20224 & e.flags && n.push(e.provider.token), (t += e.childCount);
            }
          return n;
        }
        get references() {
          const n = {};
          if (this.elDef) {
            Bi(this.elView, this.elDef, n);
            for (
              let t = this.elDef.nodeIndex + 1;
              t <= this.elDef.nodeIndex + this.elDef.childCount;
              t++
            ) {
              const e = this.elView.def.nodes[t];
              20224 & e.flags && Bi(this.elView, e, n), (t += e.childCount);
            }
          }
          return n;
        }
        get componentRenderElement() {
          const n = (function(n) {
            for (; n && !Xe(n); ) n = n.parent;
            return n.parent ? Ne(n.parent, Ye(n).nodeIndex) : null;
          })(this.elOrCompView);
          return n ? n.renderElement : void 0;
        }
        get renderNode() {
          return 2 & this.nodeDef.flags ? Je(this.view, this.nodeDef) : Je(this.elView, this.elDef);
        }
        logError(n, ...t) {
          let e, l;
          2 & this.nodeDef.flags
            ? ((e = this.view.def), (l = this.nodeDef.nodeIndex))
            : ((e = this.elView.def), (l = this.elDef.nodeIndex));
          const r = (function(n, t) {
            let e = -1;
            for (let l = 0; l <= t; l++) 3 & n.nodes[l].flags && e++;
            return e;
          })(e, l);
          let s = -1;
          e.factory(() => (s++, s === r ? n.error.bind(n, ...t) : je)),
            s < r &&
              (n.error('Illegal state: the ViewDefinitionFactory did not call the logger!'),
              n.error(...t));
        }
      }
      function Bi(n, t, e) {
        for (let l in t.references) e[l] = js(n, t, t.references[l]);
      }
      function Gi(n, t, e, l) {
        const r = Ri,
          s = Ni,
          i = Vi;
        try {
          Ri = n;
          const o = t.apply(e, l);
          return (Ni = s), (Vi = i), (Ri = r), o;
        } catch (o) {
          if (zn(o) || !Ni) throw o;
          throw (function(n, t) {
            return n instanceof Error || (n = new Error(n.toString())), Me(n, t), n;
          })(o, Ki());
        }
      }
      function Ki() {
        return Ni ? new qi(Ni, Vi) : null;
      }
      class Wi {
        constructor(n) {
          this.delegate = n;
        }
        createRenderer(n, t) {
          return new Zi(this.delegate.createRenderer(n, t));
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
        constructor(n) {
          (this.delegate = n), (this.debugContextFactory = Ki), (this.data = this.delegate.data);
        }
        createDebugContext(n) {
          return this.debugContextFactory(n);
        }
        destroyNode(n) {
          const t = bs(n);
          !(function(n) {
            ws.delete(n.nativeNode);
          })(t),
            t instanceof vs && (t.listeners.length = 0),
            this.delegate.destroyNode && this.delegate.destroyNode(n);
        }
        destroy() {
          this.delegate.destroy();
        }
        createElement(n, t) {
          const e = this.delegate.createElement(n, t),
            l = this.createDebugContext(e);
          if (l) {
            const t = new ys(e, null, l);
            (t.name = n), Cs(t);
          }
          return e;
        }
        createComment(n) {
          const t = this.delegate.createComment(n),
            e = this.createDebugContext(t);
          return e && Cs(new vs(t, null, e)), t;
        }
        createText(n) {
          const t = this.delegate.createText(n),
            e = this.createDebugContext(t);
          return e && Cs(new vs(t, null, e)), t;
        }
        appendChild(n, t) {
          const e = bs(n),
            l = bs(t);
          e && l && e instanceof ys && e.addChild(l), this.delegate.appendChild(n, t);
        }
        insertBefore(n, t, e) {
          const l = bs(n),
            r = bs(t),
            s = bs(e);
          l && r && l instanceof ys && l.insertBefore(s, r), this.delegate.insertBefore(n, t, e);
        }
        removeChild(n, t) {
          const e = bs(n),
            l = bs(t);
          e && l && e instanceof ys && e.removeChild(l), this.delegate.removeChild(n, t);
        }
        selectRootElement(n, t) {
          const e = this.delegate.selectRootElement(n, t),
            l = Ki();
          return l && Cs(new ys(e, null, l)), e;
        }
        setAttribute(n, t, e, l) {
          const r = bs(n);
          r && r instanceof ys && (r.attributes[l ? l + ':' + t : t] = e),
            this.delegate.setAttribute(n, t, e, l);
        }
        removeAttribute(n, t, e) {
          const l = bs(n);
          l && l instanceof ys && (l.attributes[e ? e + ':' + t : t] = null),
            this.delegate.removeAttribute(n, t, e);
        }
        addClass(n, t) {
          const e = bs(n);
          e && e instanceof ys && (e.classes[t] = !0), this.delegate.addClass(n, t);
        }
        removeClass(n, t) {
          const e = bs(n);
          e && e instanceof ys && (e.classes[t] = !1), this.delegate.removeClass(n, t);
        }
        setStyle(n, t, e, l) {
          const r = bs(n);
          r && r instanceof ys && (r.styles[t] = e), this.delegate.setStyle(n, t, e, l);
        }
        removeStyle(n, t, e) {
          const l = bs(n);
          l && l instanceof ys && (l.styles[t] = null), this.delegate.removeStyle(n, t, e);
        }
        setProperty(n, t, e) {
          const l = bs(n);
          l && l instanceof ys && (l.properties[t] = e), this.delegate.setProperty(n, t, e);
        }
        listen(n, t, e) {
          if ('string' != typeof n) {
            const l = bs(n);
            l && l.listeners.push(new _s(t, e));
          }
          return this.delegate.listen(n, t, e);
        }
        parentNode(n) {
          return this.delegate.parentNode(n);
        }
        nextSibling(n) {
          return this.delegate.nextSibling(n);
        }
        setValue(n, t) {
          return this.delegate.setValue(n, t);
        }
      }
      function Qi(n, t, e) {
        return new Yi(n, t, e);
      }
      class Yi extends Un {
        constructor(n, t, e) {
          super(),
            (this.moduleType = n),
            (this._bootstrapComponents = t),
            (this._ngModuleDefFactory = e);
        }
        create(n) {
          !(function() {
            if (pi) return;
            pi = !0;
            const n = Zn()
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
                  createDebugContext: (n, t) => new qi(n, t),
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
                  checkAndUpdateView: ti,
                  checkNoChangesView: ni,
                  destroyView: ii,
                  createDebugContext: (n, t) => new qi(n, t),
                  handleEvent: (n, t, e, l) => n.def.handleEvent(n, t, e, l),
                  updateDirectives: (n, t) => n.def.updateDirectives(0 === t ? Oi : Pi, n),
                  updateRenderer: (n, t) => n.def.updateRenderer(0 === t ? Oi : Pi, n)
                };
            (Ue.setCurrentNode = n.setCurrentNode),
              (Ue.createRootView = n.createRootView),
              (Ue.createEmbeddedView = n.createEmbeddedView),
              (Ue.createComponentView = n.createComponentView),
              (Ue.createNgModuleRef = n.createNgModuleRef),
              (Ue.overrideProvider = n.overrideProvider),
              (Ue.overrideComponentView = n.overrideComponentView),
              (Ue.clearOverrides = n.clearOverrides),
              (Ue.checkAndUpdateView = n.checkAndUpdateView),
              (Ue.checkNoChangesView = n.checkNoChangesView),
              (Ue.destroyView = n.destroyView),
              (Ue.resolveDep = ir),
              (Ue.createDebugContext = n.createDebugContext),
              (Ue.handleEvent = n.handleEvent),
              (Ue.updateDirectives = n.updateDirectives),
              (Ue.updateRenderer = n.updateRenderer),
              (Ue.dirtyParentQueries = Ds);
          })();
          const t = (function(n) {
            const t = Array.from(n.providers),
              e = Array.from(n.modules),
              l = {};
            for (const r in n.providersByKey) l[r] = n.providersByKey[r];
            return {
              factory: n.factory,
              isRoot: n.isRoot,
              providers: t,
              modules: e,
              providersByKey: l
            };
          })(il(this._ngModuleDefFactory));
          return Ue.createNgModuleRef(this.moduleType, n || Ot.NULL, this._bootstrapComponents, t);
        }
      }
      class Ji {}
      class Xi {
        constructor() {
          this.title = 'angular-nabludenie-by';
        }
      }
      class no {}
      const to = new Sn('Location Initialized');
      class eo {}
      const lo = new Sn('appBaseHref');
      class ro {
        constructor(n, t) {
          (this._subject = new _r()), (this._urlChangeListeners = []), (this._platformStrategy = n);
          const e = this._platformStrategy.getBaseHref();
          (this._platformLocation = t),
            (this._baseHref = ro.stripTrailingSlash(so(e))),
            this._platformStrategy.onPopState(n => {
              this._subject.emit({ url: this.path(!0), pop: !0, state: n.state, type: n.type });
            });
        }
        path(n = !1) {
          return this.normalize(this._platformStrategy.path(n));
        }
        getState() {
          return this._platformLocation.getState();
        }
        isCurrentPathEqualTo(n, t = '') {
          return this.path() == this.normalize(n + ro.normalizeQueryParams(t));
        }
        normalize(n) {
          return ro.stripTrailingSlash(
            (function(n, t) {
              return n && t.startsWith(n) ? t.substring(n.length) : t;
            })(this._baseHref, so(n))
          );
        }
        prepareExternalUrl(n) {
          return n && '/' !== n[0] && (n = '/' + n), this._platformStrategy.prepareExternalUrl(n);
        }
        go(n, t = '', e = null) {
          this._platformStrategy.pushState(e, '', n, t),
            this._notifyUrlChangeListeners(
              this.prepareExternalUrl(n + ro.normalizeQueryParams(t)),
              e
            );
        }
        replaceState(n, t = '', e = null) {
          this._platformStrategy.replaceState(e, '', n, t),
            this._notifyUrlChangeListeners(
              this.prepareExternalUrl(n + ro.normalizeQueryParams(t)),
              e
            );
        }
        forward() {
          this._platformStrategy.forward();
        }
        back() {
          this._platformStrategy.back();
        }
        onUrlChange(n) {
          this._urlChangeListeners.push(n),
            this.subscribe(n => {
              this._notifyUrlChangeListeners(n.url, n.state);
            });
        }
        _notifyUrlChangeListeners(n = '', t) {
          this._urlChangeListeners.forEach(e => e(n, t));
        }
        subscribe(n, t, e) {
          return this._subject.subscribe({ next: n, error: t, complete: e });
        }
        static normalizeQueryParams(n) {
          return n && '?' !== n[0] ? '?' + n : n;
        }
        static joinWithSlash(n, t) {
          if (0 == n.length) return t;
          if (0 == t.length) return n;
          let e = 0;
          return (
            n.endsWith('/') && e++,
            t.startsWith('/') && e++,
            2 == e ? n + t.substring(1) : 1 == e ? n + t : n + '/' + t
          );
        }
        static stripTrailingSlash(n) {
          const t = n.match(/#|\?|$/),
            e = (t && t.index) || n.length;
          return n.slice(0, e - ('/' === n[e - 1] ? 1 : 0)) + n.slice(e);
        }
      }
      function so(n) {
        return n.replace(/\/index.html$/, '');
      }
      class io extends eo {
        constructor(n, t) {
          super(),
            (this._platformLocation = n),
            (this._baseHref = ''),
            null != t && (this._baseHref = t);
        }
        onPopState(n) {
          this._platformLocation.onPopState(n), this._platformLocation.onHashChange(n);
        }
        getBaseHref() {
          return this._baseHref;
        }
        path(n = !1) {
          let t = this._platformLocation.hash;
          return null == t && (t = '#'), t.length > 0 ? t.substring(1) : t;
        }
        prepareExternalUrl(n) {
          const t = ro.joinWithSlash(this._baseHref, n);
          return t.length > 0 ? '#' + t : t;
        }
        pushState(n, t, e, l) {
          let r = this.prepareExternalUrl(e + ro.normalizeQueryParams(l));
          0 == r.length && (r = this._platformLocation.pathname),
            this._platformLocation.pushState(n, t, r);
        }
        replaceState(n, t, e, l) {
          let r = this.prepareExternalUrl(e + ro.normalizeQueryParams(l));
          0 == r.length && (r = this._platformLocation.pathname),
            this._platformLocation.replaceState(n, t, r);
        }
        forward() {
          this._platformLocation.forward();
        }
        back() {
          this._platformLocation.back();
        }
      }
      class oo extends eo {
        constructor(n, t) {
          if (
            (super(),
            (this._platformLocation = n),
            null == t && (t = this._platformLocation.getBaseHrefFromDOM()),
            null == t)
          )
            throw new Error(
              'No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.'
            );
          this._baseHref = t;
        }
        onPopState(n) {
          this._platformLocation.onPopState(n), this._platformLocation.onHashChange(n);
        }
        getBaseHref() {
          return this._baseHref;
        }
        prepareExternalUrl(n) {
          return ro.joinWithSlash(this._baseHref, n);
        }
        path(n = !1) {
          const t =
              this._platformLocation.pathname +
              ro.normalizeQueryParams(this._platformLocation.search),
            e = this._platformLocation.hash;
          return e && n ? `${t}${e}` : t;
        }
        pushState(n, t, e, l) {
          const r = this.prepareExternalUrl(e + ro.normalizeQueryParams(l));
          this._platformLocation.pushState(n, t, r);
        }
        replaceState(n, t, e, l) {
          const r = this.prepareExternalUrl(e + ro.normalizeQueryParams(l));
          this._platformLocation.replaceState(n, t, r);
        }
        forward() {
          this._platformLocation.forward();
        }
        back() {
          this._platformLocation.back();
        }
      }
      const uo = (function() {
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
        ao = new Sn('UseV4Plurals');
      class co {}
      class ho extends co {
        constructor(n, t) {
          super(), (this.locale = n), (this.deprecatedPluralFn = t);
        }
        getPluralCategory(n, t) {
          switch (
            this.deprecatedPluralFn
              ? this.deprecatedPluralFn(t || this.locale, n)
              : (function(n) {
                  return (function(n) {
                    const t = n.toLowerCase().replace(/_/g, '-');
                    let e = pr[t];
                    if (e) return e;
                    const l = t.split('-')[0];
                    if (((e = pr[l]), e)) return e;
                    if ('en' === l) return mr;
                    throw new Error(`Missing locale data for the locale "${n}".`);
                  })(n)[gr.PluralCase];
                })(t || this.locale)(n)
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
        constructor(n, t) {
          (this._viewContainer = n),
            (this._context = new go()),
            (this._thenTemplateRef = null),
            (this._elseTemplateRef = null),
            (this._thenViewRef = null),
            (this._elseViewRef = null),
            (this._thenTemplateRef = t);
        }
        set ngIf(n) {
          (this._context.$implicit = this._context.ngIf = n), this._updateView();
        }
        set ngIfThen(n) {
          fo('ngIfThen', n),
            (this._thenTemplateRef = n),
            (this._thenViewRef = null),
            this._updateView();
        }
        set ngIfElse(n) {
          fo('ngIfElse', n),
            (this._elseTemplateRef = n),
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
      function fo(n, t) {
        if (t && !t.createEmbeddedView)
          throw new Error(`${n} must be a TemplateRef, but received '${_n(t)}'.`);
      }
      class mo {}
      const _o = new Sn('DocumentToken');
      let vo = (() => {
        class n {}
        return (
          (n.ngInjectableDef = pn({
            token: n,
            providedIn: 'root',
            factory: () => new yo(Rn(_o), window, Rn(Gn))
          })),
          n
        );
      })();
      class yo {
        constructor(n, t, e) {
          (this.document = n),
            (this.window = t),
            (this.errorHandler = e),
            (this.offset = () => [0, 0]);
        }
        setOffset(n) {
          this.offset = Array.isArray(n) ? () => n : n;
        }
        getScrollPosition() {
          return this.supportScrollRestoration()
            ? [this.window.scrollX, this.window.scrollY]
            : [0, 0];
        }
        scrollToPosition(n) {
          this.supportScrollRestoration() && this.window.scrollTo(n[0], n[1]);
        }
        scrollToAnchor(n) {
          if (this.supportScrollRestoration()) {
            n =
              this.window.CSS && this.window.CSS.escape
                ? this.window.CSS.escape(n)
                : n.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g, '\\$1');
            try {
              const t = this.document.querySelector(`#${n}`);
              if (t) return void this.scrollToElement(t);
              const e = this.document.querySelector(`[name='${n}']`);
              if (e) return void this.scrollToElement(e);
            } catch (t) {
              this.errorHandler.handleError(t);
            }
          }
        }
        setHistoryScrollRestoration(n) {
          if (this.supportScrollRestoration()) {
            const t = this.window.history;
            t && t.scrollRestoration && (t.scrollRestoration = n);
          }
        }
        scrollToElement(n) {
          const t = n.getBoundingClientRect(),
            e = t.left + this.window.pageXOffset,
            l = t.top + this.window.pageYOffset,
            r = this.offset();
          this.window.scrollTo(e - r[0], l - r[1]);
        }
        supportScrollRestoration() {
          try {
            return !!this.window && !!this.window.scrollTo;
          } catch (n) {
            return !1;
          }
        }
      }
      const wo = new b(n => n.complete());
      function bo(n) {
        return n
          ? (function(n) {
              return new b(t => n.schedule(() => t.complete()));
            })(n)
          : wo;
      }
      function Co(n) {
        const t = new b(t => {
          t.next(n), t.complete();
        });
        return (t._isScalar = !0), (t.value = n), t;
      }
      function xo(...n) {
        let t = n[n.length - 1];
        switch ((M(t) ? n.pop() : (t = void 0), n.length)) {
          case 0:
            return bo(t);
          case 1:
            return t ? B(n, t) : Co(n[0]);
          default:
            return B(n, t);
        }
      }
      class ko extends O {
        constructor(n) {
          super(), (this._value = n);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(n) {
          const t = super._subscribe(n);
          return t && !t.closed && n.next(this._value), t;
        }
        getValue() {
          if (this.hasError) throw this.thrownError;
          if (this.closed) throw new k();
          return this._value;
        }
        next(n) {
          super.next((this._value = n));
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
        constructor(n) {
          this.resultSelector = n;
        }
        call(n, t) {
          return t.subscribe(new Mo(n, this.resultSelector));
        }
      }
      class Mo extends $ {
        constructor(n, t) {
          super(n),
            (this.resultSelector = t),
            (this.active = 0),
            (this.values = []),
            (this.observables = []);
        }
        _next(n) {
          this.values.push(Oo), this.observables.push(n);
        }
        _complete() {
          const n = this.observables,
            t = n.length;
          if (0 === t) this.destination.complete();
          else {
            (this.active = t), (this.toRespond = t);
            for (let e = 0; e < t; e++) {
              const t = n[e];
              this.add(F(this, t, t, e));
            }
          }
        }
        notifyComplete(n) {
          0 == (this.active -= 1) && this.destination.complete();
        }
        notifyNext(n, t, e, l, r) {
          const s = this.values,
            i = this.toRespond ? (s[e] === Oo ? --this.toRespond : this.toRespond) : 0;
          (s[e] = t),
            0 === i &&
              (this.resultSelector ? this._tryResultSelector(s) : this.destination.next(s.slice()));
        }
        _tryResultSelector(n) {
          let t;
          try {
            t = this.resultSelector.apply(this, n);
          } catch (e) {
            return void this.destination.error(e);
          }
          this.destination.next(t);
        }
      }
      function To(n) {
        return new b(t => {
          let e;
          try {
            e = n();
          } catch (l) {
            return void t.error(l);
          }
          return (e ? G(e) : bo()).subscribe(t);
        });
      }
      function Ao() {
        return Y(1);
      }
      function Io(n, t) {
        return function(e) {
          return e.lift(new Ro(n, t));
        };
      }
      class Ro {
        constructor(n, t) {
          (this.predicate = n), (this.thisArg = t);
        }
        call(n, t) {
          return t.subscribe(new No(n, this.predicate, this.thisArg));
        }
      }
      class No extends f {
        constructor(n, t, e) {
          super(n), (this.predicate = t), (this.thisArg = e), (this.count = 0);
        }
        _next(n) {
          let t;
          try {
            t = this.predicate.call(this.thisArg, n, this.count++);
          } catch (e) {
            return void this.destination.error(e);
          }
          t && this.destination.next(n);
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
      function Lo(n) {
        return function(t) {
          return 0 === n ? bo() : t.lift(new Uo(n));
        };
      }
      class Uo {
        constructor(n) {
          if (((this.total = n), this.total < 0)) throw new Do();
        }
        call(n, t) {
          return t.subscribe(new jo(n, this.total));
        }
      }
      class jo extends f {
        constructor(n, t) {
          super(n), (this.total = t), (this.ring = new Array()), (this.count = 0);
        }
        _next(n) {
          const t = this.ring,
            e = this.total,
            l = this.count++;
          t.length < e ? t.push(n) : (t[l % e] = n);
        }
        _complete() {
          const n = this.destination;
          let t = this.count;
          if (t > 0) {
            const e = this.count >= this.total ? this.total : this.count,
              l = this.ring;
            for (let r = 0; r < e; r++) {
              const r = t++ % e;
              n.next(l[r]);
            }
          }
          n.complete();
        }
      }
      function Fo(n, t, e) {
        return function(l) {
          return l.lift(new $o(n, t, e));
        };
      }
      class $o {
        constructor(n, t, e) {
          (this.nextOrObserver = n), (this.error = t), (this.complete = e);
        }
        call(n, t) {
          return t.subscribe(new Ho(n, this.nextOrObserver, this.error, this.complete));
        }
      }
      class Ho extends f {
        constructor(n, t, e, r) {
          super(n),
            (this._tapNext = v),
            (this._tapError = v),
            (this._tapComplete = v),
            (this._tapError = e || v),
            (this._tapComplete = r || v),
            l(t)
              ? ((this._context = this), (this._tapNext = t))
              : t &&
                ((this._context = t),
                (this._tapNext = t.next || v),
                (this._tapError = t.error || v),
                (this._tapComplete = t.complete || v));
        }
        _next(n) {
          try {
            this._tapNext.call(this._context, n);
          } catch (t) {
            return void this.destination.error(t);
          }
          this.destination.next(n);
        }
        _error(n) {
          try {
            this._tapError.call(this._context, n);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.error(n);
        }
        _complete() {
          try {
            this._tapComplete.call(this._context);
          } catch (n) {
            return void this.destination.error(n);
          }
          return this.destination.complete();
        }
      }
      const zo = (n = qo) =>
        Fo({
          hasValue: !1,
          next() {
            this.hasValue = !0;
          },
          complete() {
            if (!this.hasValue) throw n();
          }
        });
      function qo() {
        return new So();
      }
      function Bo(n = null) {
        return t => t.lift(new Go(n));
      }
      class Go {
        constructor(n) {
          this.defaultValue = n;
        }
        call(n, t) {
          return t.subscribe(new Ko(n, this.defaultValue));
        }
      }
      class Ko extends f {
        constructor(n, t) {
          super(n), (this.defaultValue = t), (this.isEmpty = !0);
        }
        _next(n) {
          (this.isEmpty = !1), this.destination.next(n);
        }
        _complete() {
          this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete();
        }
      }
      function Wo(n, t) {
        const e = arguments.length >= 2;
        return l => l.pipe(n ? Io((t, e) => n(t, e, l)) : Q, Lo(1), e ? Bo(t) : zo(() => new So()));
      }
      function Zo(n) {
        return function(t) {
          const e = new Qo(n),
            l = t.lift(e);
          return (e.caught = l);
        };
      }
      class Qo {
        constructor(n) {
          this.selector = n;
        }
        call(n, t) {
          return t.subscribe(new Yo(n, this.selector, this.caught));
        }
      }
      class Yo extends $ {
        constructor(n, t, e) {
          super(n), (this.selector = t), (this.caught = e);
        }
        error(n) {
          if (!this.isStopped) {
            let e;
            try {
              e = this.selector(n, this.caught);
            } catch (t) {
              return void super.error(t);
            }
            this._unsubscribeAndRecycle();
            const l = new T(this, void 0, void 0);
            this.add(l), F(this, e, void 0, void 0, l);
          }
        }
      }
      function Jo(n) {
        return t => (0 === n ? bo() : t.lift(new Xo(n)));
      }
      class Xo {
        constructor(n) {
          if (((this.total = n), this.total < 0)) throw new Do();
        }
        call(n, t) {
          return t.subscribe(new nu(n, this.total));
        }
      }
      class nu extends f {
        constructor(n, t) {
          super(n), (this.total = t), (this.count = 0);
        }
        _next(n) {
          const t = this.total,
            e = ++this.count;
          e <= t &&
            (this.destination.next(n),
            e === t && (this.destination.complete(), this.unsubscribe()));
        }
      }
      function tu(n, t) {
        const e = arguments.length >= 2;
        return l => l.pipe(n ? Io((t, e) => n(t, e, l)) : Q, Jo(1), e ? Bo(t) : zo(() => new So()));
      }
      class eu {
        constructor(n, t, e) {
          (this.predicate = n), (this.thisArg = t), (this.source = e);
        }
        call(n, t) {
          return t.subscribe(new lu(n, this.predicate, this.thisArg, this.source));
        }
      }
      class lu extends f {
        constructor(n, t, e, l) {
          super(n),
            (this.predicate = t),
            (this.thisArg = e),
            (this.source = l),
            (this.index = 0),
            (this.thisArg = e || this);
        }
        notifyComplete(n) {
          this.destination.next(n), this.destination.complete();
        }
        _next(n) {
          let t = !1;
          try {
            t = this.predicate.call(this.thisArg, n, this.index++, this.source);
          } catch (e) {
            return void this.destination.error(e);
          }
          t || this.notifyComplete(!1);
        }
        _complete() {
          this.notifyComplete(!0);
        }
      }
      function ru(n, t) {
        return 'function' == typeof t
          ? e => e.pipe(ru((e, l) => G(n(e, l)).pipe(H((n, r) => t(e, n, l, r)))))
          : t => t.lift(new su(n));
      }
      class su {
        constructor(n) {
          this.project = n;
        }
        call(n, t) {
          return t.subscribe(new iu(n, this.project));
        }
      }
      class iu extends $ {
        constructor(n, t) {
          super(n), (this.project = t), (this.index = 0);
        }
        _next(n) {
          let t;
          const e = this.index++;
          try {
            t = this.project(n, e);
          } catch (l) {
            return void this.destination.error(l);
          }
          this._innerSub(t, n, e);
        }
        _innerSub(n, t, e) {
          const l = this.innerSubscription;
          l && l.unsubscribe();
          const r = new T(this, void 0, void 0);
          this.destination.add(r), (this.innerSubscription = F(this, n, t, e, r));
        }
        _complete() {
          const { innerSubscription: n } = this;
          (n && !n.closed) || super._complete(), this.unsubscribe();
        }
        _unsubscribe() {
          this.innerSubscription = null;
        }
        notifyComplete(n) {
          this.destination.remove(n),
            (this.innerSubscription = null),
            this.isStopped && super._complete();
        }
        notifyNext(n, t, e, l, r) {
          this.destination.next(t);
        }
      }
      function ou(n, t) {
        let e = !1;
        return (
          arguments.length >= 2 && (e = !0),
          function(l) {
            return l.lift(new uu(n, t, e));
          }
        );
      }
      class uu {
        constructor(n, t, e = !1) {
          (this.accumulator = n), (this.seed = t), (this.hasSeed = e);
        }
        call(n, t) {
          return t.subscribe(new au(n, this.accumulator, this.seed, this.hasSeed));
        }
      }
      class au extends f {
        constructor(n, t, e, l) {
          super(n), (this.accumulator = t), (this._seed = e), (this.hasSeed = l), (this.index = 0);
        }
        get seed() {
          return this._seed;
        }
        set seed(n) {
          (this.hasSeed = !0), (this._seed = n);
        }
        _next(n) {
          if (this.hasSeed) return this._tryNext(n);
          (this.seed = n), this.destination.next(n);
        }
        _tryNext(n) {
          const t = this.index++;
          let e;
          try {
            e = this.accumulator(this.seed, n, t);
          } catch (l) {
            this.destination.error(l);
          }
          (this.seed = e), this.destination.next(e);
        }
      }
      function cu(n, t) {
        return K(n, t, 1);
      }
      class hu {
        constructor(n) {
          this.callback = n;
        }
        call(n, t) {
          return t.subscribe(new du(n, this.callback));
        }
      }
      class du extends f {
        constructor(n, t) {
          super(n), this.add(new d(t));
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
          if (En.Node)
            return (
              En.Node.prototype.contains ||
              function(n) {
                return !!(16 & this.compareDocumentPosition(n));
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
        set attrToPropMap(n) {
          this._attrToPropMap = n;
        }
      } {
        constructor() {
          super(), (this._animationPrefix = null), (this._transitionEnd = null);
          try {
            const n = this.createElement('div', document);
            if (null != this.getStyle(n, 'animationName')) this._animationPrefix = '';
            else {
              const t = ['Webkit', 'Moz', 'O', 'ms'];
              for (let e = 0; e < t.length; e++)
                if (null != this.getStyle(n, t[e] + 'AnimationName')) {
                  this._animationPrefix = '-' + t[e].toLowerCase() + '-';
                  break;
                }
            }
            const t = {
              WebkitTransition: 'webkitTransitionEnd',
              MozTransition: 'transitionend',
              OTransition: 'oTransitionEnd otransitionend',
              transition: 'transitionend'
            };
            Object.keys(t).forEach(e => {
              null != this.getStyle(n, e) && (this._transitionEnd = t[e]);
            });
          } catch (n) {
            (this._animationPrefix = null), (this._transitionEnd = null);
          }
        }
        getDistributedNodes(n) {
          return n.getDistributedNodes();
        }
        resolveAndSetHref(n, t, e) {
          n.href = null == e ? t : t + '/../' + e;
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
        parse(n) {
          throw new Error('parse not implemented');
        }
        static makeCurrent() {
          var n;
          (n = new yu()), pu || (pu = n);
        }
        hasProperty(n, t) {
          return t in n;
        }
        setProperty(n, t, e) {
          n[t] = e;
        }
        getProperty(n, t) {
          return n[t];
        }
        invoke(n, t, e) {
          n[t](...e);
        }
        logError(n) {
          window.console && (console.error ? console.error(n) : console.log(n));
        }
        log(n) {
          window.console && window.console.log && window.console.log(n);
        }
        logGroup(n) {
          window.console && window.console.group && window.console.group(n);
        }
        logGroupEnd() {
          window.console && window.console.groupEnd && window.console.groupEnd();
        }
        get attrToPropMap() {
          return fu;
        }
        contains(n, t) {
          return vu.call(n, t);
        }
        querySelector(n, t) {
          return n.querySelector(t);
        }
        querySelectorAll(n, t) {
          return n.querySelectorAll(t);
        }
        on(n, t, e) {
          n.addEventListener(t, e, !1);
        }
        onAndCancel(n, t, e) {
          return (
            n.addEventListener(t, e, !1),
            () => {
              n.removeEventListener(t, e, !1);
            }
          );
        }
        dispatchEvent(n, t) {
          n.dispatchEvent(t);
        }
        createMouseEvent(n) {
          const t = this.getDefaultDocument().createEvent('MouseEvent');
          return t.initEvent(n, !0, !0), t;
        }
        createEvent(n) {
          const t = this.getDefaultDocument().createEvent('Event');
          return t.initEvent(n, !0, !0), t;
        }
        preventDefault(n) {
          n.preventDefault(), (n.returnValue = !1);
        }
        isPrevented(n) {
          return n.defaultPrevented || (null != n.returnValue && !n.returnValue);
        }
        getInnerHTML(n) {
          return n.innerHTML;
        }
        getTemplateContent(n) {
          return 'content' in n && this.isTemplateElement(n) ? n.content : null;
        }
        getOuterHTML(n) {
          return n.outerHTML;
        }
        nodeName(n) {
          return n.nodeName;
        }
        nodeValue(n) {
          return n.nodeValue;
        }
        type(n) {
          return n.type;
        }
        content(n) {
          return this.hasProperty(n, 'content') ? n.content : n;
        }
        firstChild(n) {
          return n.firstChild;
        }
        nextSibling(n) {
          return n.nextSibling;
        }
        parentElement(n) {
          return n.parentNode;
        }
        childNodes(n) {
          return n.childNodes;
        }
        childNodesAsList(n) {
          const t = n.childNodes,
            e = new Array(t.length);
          for (let l = 0; l < t.length; l++) e[l] = t[l];
          return e;
        }
        clearNodes(n) {
          for (; n.firstChild; ) n.removeChild(n.firstChild);
        }
        appendChild(n, t) {
          n.appendChild(t);
        }
        removeChild(n, t) {
          n.removeChild(t);
        }
        replaceChild(n, t, e) {
          n.replaceChild(t, e);
        }
        remove(n) {
          return n.parentNode && n.parentNode.removeChild(n), n;
        }
        insertBefore(n, t, e) {
          n.insertBefore(e, t);
        }
        insertAllBefore(n, t, e) {
          e.forEach(e => n.insertBefore(e, t));
        }
        insertAfter(n, t, e) {
          n.insertBefore(e, t.nextSibling);
        }
        setInnerHTML(n, t) {
          n.innerHTML = t;
        }
        getText(n) {
          return n.textContent;
        }
        setText(n, t) {
          n.textContent = t;
        }
        getValue(n) {
          return n.value;
        }
        setValue(n, t) {
          n.value = t;
        }
        getChecked(n) {
          return n.checked;
        }
        setChecked(n, t) {
          n.checked = t;
        }
        createComment(n) {
          return this.getDefaultDocument().createComment(n);
        }
        createTemplate(n) {
          const t = this.getDefaultDocument().createElement('template');
          return (t.innerHTML = n), t;
        }
        createElement(n, t) {
          return (t = t || this.getDefaultDocument()).createElement(n);
        }
        createElementNS(n, t, e) {
          return (e = e || this.getDefaultDocument()).createElementNS(n, t);
        }
        createTextNode(n, t) {
          return (t = t || this.getDefaultDocument()).createTextNode(n);
        }
        createScriptTag(n, t, e) {
          const l = (e = e || this.getDefaultDocument()).createElement('SCRIPT');
          return l.setAttribute(n, t), l;
        }
        createStyleElement(n, t) {
          const e = (t = t || this.getDefaultDocument()).createElement('style');
          return this.appendChild(e, this.createTextNode(n, t)), e;
        }
        createShadowRoot(n) {
          return n.createShadowRoot();
        }
        getShadowRoot(n) {
          return n.shadowRoot;
        }
        getHost(n) {
          return n.host;
        }
        clone(n) {
          return n.cloneNode(!0);
        }
        getElementsByClassName(n, t) {
          return n.getElementsByClassName(t);
        }
        getElementsByTagName(n, t) {
          return n.getElementsByTagName(t);
        }
        classList(n) {
          return Array.prototype.slice.call(n.classList, 0);
        }
        addClass(n, t) {
          n.classList.add(t);
        }
        removeClass(n, t) {
          n.classList.remove(t);
        }
        hasClass(n, t) {
          return n.classList.contains(t);
        }
        setStyle(n, t, e) {
          n.style[t] = e;
        }
        removeStyle(n, t) {
          n.style[t] = '';
        }
        getStyle(n, t) {
          return n.style[t];
        }
        hasStyle(n, t, e) {
          const l = this.getStyle(n, t) || '';
          return e ? l == e : l.length > 0;
        }
        tagName(n) {
          return n.tagName;
        }
        attributeMap(n) {
          const t = new Map(),
            e = n.attributes;
          for (let l = 0; l < e.length; l++) {
            const n = e.item(l);
            t.set(n.name, n.value);
          }
          return t;
        }
        hasAttribute(n, t) {
          return n.hasAttribute(t);
        }
        hasAttributeNS(n, t, e) {
          return n.hasAttributeNS(t, e);
        }
        getAttribute(n, t) {
          return n.getAttribute(t);
        }
        getAttributeNS(n, t, e) {
          return n.getAttributeNS(t, e);
        }
        setAttribute(n, t, e) {
          n.setAttribute(t, e);
        }
        setAttributeNS(n, t, e, l) {
          n.setAttributeNS(t, e, l);
        }
        removeAttribute(n, t) {
          n.removeAttribute(t);
        }
        removeAttributeNS(n, t, e) {
          n.removeAttributeNS(t, e);
        }
        templateAwareRoot(n) {
          return this.isTemplateElement(n) ? this.content(n) : n;
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument('fakeTitle');
        }
        getDefaultDocument() {
          return document;
        }
        getBoundingClientRect(n) {
          try {
            return n.getBoundingClientRect();
          } catch (t) {
            return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
          }
        }
        getTitle(n) {
          return n.title;
        }
        setTitle(n, t) {
          n.title = t || '';
        }
        elementMatches(n, t) {
          return (
            !!this.isElementNode(n) &&
            ((n.matches && n.matches(t)) ||
              (n.msMatchesSelector && n.msMatchesSelector(t)) ||
              (n.webkitMatchesSelector && n.webkitMatchesSelector(t)))
          );
        }
        isTemplateElement(n) {
          return this.isElementNode(n) && 'TEMPLATE' === n.nodeName;
        }
        isTextNode(n) {
          return n.nodeType === Node.TEXT_NODE;
        }
        isCommentNode(n) {
          return n.nodeType === Node.COMMENT_NODE;
        }
        isElementNode(n) {
          return n.nodeType === Node.ELEMENT_NODE;
        }
        hasShadowRoot(n) {
          return null != n.shadowRoot && n instanceof HTMLElement;
        }
        isShadowRoot(n) {
          return n instanceof DocumentFragment;
        }
        importIntoDoc(n) {
          return document.importNode(this.templateAwareRoot(n), !0);
        }
        adoptNode(n) {
          return document.adoptNode(n);
        }
        getHref(n) {
          return n.getAttribute('href');
        }
        getEventKey(n) {
          let t = n.key;
          if (null == t) {
            if (((t = n.keyIdentifier), null == t)) return 'Unidentified';
            t.startsWith('U+') &&
              ((t = String.fromCharCode(parseInt(t.substring(2), 16))),
              3 === n.location && _u.hasOwnProperty(t) && (t = _u[t]));
          }
          return mu[t] || t;
        }
        getGlobalEventTarget(n, t) {
          return 'window' === t ? window : 'document' === t ? n : 'body' === t ? n.body : null;
        }
        getHistory() {
          return window.history;
        }
        getLocation() {
          return window.location;
        }
        getBaseHref(n) {
          const t =
            bu || ((bu = document.querySelector('base')), bu) ? bu.getAttribute('href') : null;
          return null == t
            ? null
            : ((e = t),
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
        setData(n, t, e) {
          this.setAttribute(n, 'data-' + t, e);
        }
        getData(n, t) {
          return this.getAttribute(n, 'data-' + t);
        }
        getComputedStyle(n) {
          return getComputedStyle(n);
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
        getCookie(n) {
          return (function(n, t) {
            t = encodeURIComponent(t);
            for (const e of n.split(';')) {
              const n = e.indexOf('='),
                [l, r] = -1 == n ? [e, ''] : [e.slice(0, n), e.slice(n + 1)];
              if (l.trim() === t) return decodeURIComponent(r);
            }
            return null;
          })(document.cookie, n);
        }
        setCookie(n, t) {
          document.cookie = encodeURIComponent(n) + '=' + encodeURIComponent(t);
        }
      }
      let wu,
        bu = null;
      function Cu() {
        return !!window.history.pushState;
      }
      const xu = new Sn('TRANSITION_ID'),
        ku = [
          {
            provide: wr,
            useFactory: function(n, t, e) {
              return () => {
                e.get(br).donePromise.then(() => {
                  const e = gu();
                  Array.prototype.slice
                    .apply(e.querySelectorAll(t, 'style[ng-transition]'))
                    .filter(t => e.getAttribute(t, 'ng-transition') === n)
                    .forEach(n => e.remove(n));
                });
              };
            },
            deps: [xu, _o, Ot],
            multi: !0
          }
        ];
      class Eu {
        static init() {
          var n;
          (n = new Eu()), (ls = n);
        }
        addToWindow(n) {
          (En.getAngularTestability = (t, e = !0) => {
            const l = n.findTestabilityInTree(t, e);
            if (null == l) throw new Error('Could not find testability for element.');
            return l;
          }),
            (En.getAllAngularTestabilities = () => n.getAllTestabilities()),
            (En.getAllAngularRootElements = () => n.getAllRootElements()),
            En.frameworkStabilizers || (En.frameworkStabilizers = []),
            En.frameworkStabilizers.push(n => {
              const t = En.getAllAngularTestabilities();
              let e = t.length,
                l = !1;
              const r = function(t) {
                (l = l || t), e--, 0 == e && n(l);
              };
              t.forEach(function(n) {
                n.whenStable(r);
              });
            });
        }
        findTestabilityInTree(n, t, e) {
          if (null == t) return null;
          const l = n.getTestability(t);
          return null != l
            ? l
            : e
            ? gu().isShadowRoot(t)
              ? this.findTestabilityInTree(n, gu().getHost(t), !0)
              : this.findTestabilityInTree(n, gu().parentElement(t), !0)
            : null;
        }
      }
      function Su(n, t) {
        ('undefined' != typeof COMPILED && COMPILED) || ((En.ng = En.ng || {})[n] = t);
      }
      const Ou = (() => ({ ApplicationRef: cs, NgZone: Gr }))();
      function Pu(n) {
        return bs(n);
      }
      const Mu = new Sn('EventManagerPlugins');
      class Tu {
        constructor(n, t) {
          (this._zone = t),
            (this._eventNameToPlugin = new Map()),
            n.forEach(n => (n.manager = this)),
            (this._plugins = n.slice().reverse());
        }
        addEventListener(n, t, e) {
          return this._findPluginFor(t).addEventListener(n, t, e);
        }
        addGlobalEventListener(n, t, e) {
          return this._findPluginFor(t).addGlobalEventListener(n, t, e);
        }
        getZone() {
          return this._zone;
        }
        _findPluginFor(n) {
          const t = this._eventNameToPlugin.get(n);
          if (t) return t;
          const e = this._plugins;
          for (let l = 0; l < e.length; l++) {
            const t = e[l];
            if (t.supports(n)) return this._eventNameToPlugin.set(n, t), t;
          }
          throw new Error(`No event manager plugin found for event ${n}`);
        }
      }
      class Au {
        constructor(n) {
          this._doc = n;
        }
        addGlobalEventListener(n, t, e) {
          const l = gu().getGlobalEventTarget(this._doc, n);
          if (!l) throw new Error(`Unsupported event target ${l} for event ${t}`);
          return this.addEventListener(l, t, e);
        }
      }
      class Iu {
        constructor() {
          this._stylesSet = new Set();
        }
        addStyles(n) {
          const t = new Set();
          n.forEach(n => {
            this._stylesSet.has(n) || (this._stylesSet.add(n), t.add(n));
          }),
            this.onStylesAdded(t);
        }
        onStylesAdded(n) {}
        getAllStyles() {
          return Array.from(this._stylesSet);
        }
      }
      class Ru extends Iu {
        constructor(n) {
          super(),
            (this._doc = n),
            (this._hostNodes = new Set()),
            (this._styleNodes = new Set()),
            this._hostNodes.add(n.head);
        }
        _addStylesToHost(n, t) {
          n.forEach(n => {
            const e = this._doc.createElement('style');
            (e.textContent = n), this._styleNodes.add(t.appendChild(e));
          });
        }
        addHost(n) {
          this._addStylesToHost(this._stylesSet, n), this._hostNodes.add(n);
        }
        removeHost(n) {
          this._hostNodes.delete(n);
        }
        onStylesAdded(n) {
          this._hostNodes.forEach(t => this._addStylesToHost(n, t));
        }
        ngOnDestroy() {
          this._styleNodes.forEach(n => gu().remove(n));
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
      function Du(n, t, e) {
        for (let l = 0; l < t.length; l++) {
          let r = t[l];
          Array.isArray(r) ? Du(n, r, e) : ((r = r.replace(Vu, n)), e.push(r));
        }
        return e;
      }
      function Lu(n) {
        return t => {
          !1 === n(t) && (t.preventDefault(), (t.returnValue = !1));
        };
      }
      class Uu {
        constructor(n, t, e) {
          (this.eventManager = n),
            (this.sharedStylesHost = t),
            (this.appId = e),
            (this.rendererByCompId = new Map()),
            (this.defaultRenderer = new ju(n));
        }
        createRenderer(n, t) {
          if (!n || !t) return this.defaultRenderer;
          switch (t.encapsulation) {
            case $n.Emulated: {
              let e = this.rendererByCompId.get(t.id);
              return (
                e ||
                  ((e = new Hu(this.eventManager, this.sharedStylesHost, t, this.appId)),
                  this.rendererByCompId.set(t.id, e)),
                e.applyToHost(n),
                e
              );
            }
            case $n.Native:
            case $n.ShadowDom:
              return new zu(this.eventManager, this.sharedStylesHost, n, t);
            default:
              if (!this.rendererByCompId.has(t.id)) {
                const n = Du(t.id, t.styles, []);
                this.sharedStylesHost.addStyles(n),
                  this.rendererByCompId.set(t.id, this.defaultRenderer);
              }
              return this.defaultRenderer;
          }
        }
        begin() {}
        end() {}
      }
      class ju {
        constructor(n) {
          (this.eventManager = n), (this.data = Object.create(null));
        }
        destroy() {}
        createElement(n, t) {
          return t ? document.createElementNS(Nu[t] || t, n) : document.createElement(n);
        }
        createComment(n) {
          return document.createComment(n);
        }
        createText(n) {
          return document.createTextNode(n);
        }
        appendChild(n, t) {
          n.appendChild(t);
        }
        insertBefore(n, t, e) {
          n && n.insertBefore(t, e);
        }
        removeChild(n, t) {
          n && n.removeChild(t);
        }
        selectRootElement(n, t) {
          let e = 'string' == typeof n ? document.querySelector(n) : n;
          if (!e) throw new Error(`The selector "${n}" did not match any elements`);
          return t || (e.textContent = ''), e;
        }
        parentNode(n) {
          return n.parentNode;
        }
        nextSibling(n) {
          return n.nextSibling;
        }
        setAttribute(n, t, e, l) {
          if (l) {
            t = l + ':' + t;
            const r = Nu[l];
            r ? n.setAttributeNS(r, t, e) : n.setAttribute(t, e);
          } else n.setAttribute(t, e);
        }
        removeAttribute(n, t, e) {
          if (e) {
            const l = Nu[e];
            l ? n.removeAttributeNS(l, t) : n.removeAttribute(`${e}:${t}`);
          } else n.removeAttribute(t);
        }
        addClass(n, t) {
          n.classList.add(t);
        }
        removeClass(n, t) {
          n.classList.remove(t);
        }
        setStyle(n, t, e, l) {
          l & re.DashCase
            ? n.style.setProperty(t, e, l & re.Important ? 'important' : '')
            : (n.style[t] = e);
        }
        removeStyle(n, t, e) {
          e & re.DashCase ? n.style.removeProperty(t) : (n.style[t] = '');
        }
        setProperty(n, t, e) {
          $u(t, 'property'), (n[t] = e);
        }
        setValue(n, t) {
          n.nodeValue = t;
        }
        listen(n, t, e) {
          return (
            $u(t, 'listener'),
            'string' == typeof n
              ? this.eventManager.addGlobalEventListener(n, t, Lu(e))
              : this.eventManager.addEventListener(n, t, Lu(e))
          );
        }
      }
      const Fu = (() => '@'.charCodeAt(0))();
      function $u(n, t) {
        if (n.charCodeAt(0) === Fu)
          throw new Error(
            `Found the synthetic ${t} ${n}. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.`
          );
      }
      class Hu extends ju {
        constructor(n, t, e, l) {
          super(n), (this.component = e);
          const r = Du(l + '-' + e.id, e.styles, []);
          t.addStyles(r),
            (this.contentAttr = '_ngcontent-%COMP%'.replace(Vu, l + '-' + e.id)),
            (this.hostAttr = (function(n) {
              return '_nghost-%COMP%'.replace(Vu, n);
            })(l + '-' + e.id));
        }
        applyToHost(n) {
          super.setAttribute(n, this.hostAttr, '');
        }
        createElement(n, t) {
          const e = super.createElement(n, t);
          return super.setAttribute(e, this.contentAttr, ''), e;
        }
      }
      class zu extends ju {
        constructor(n, t, e, l) {
          super(n),
            (this.sharedStylesHost = t),
            (this.hostEl = e),
            (this.component = l),
            (this.shadowRoot =
              l.encapsulation === $n.ShadowDom
                ? e.attachShadow({ mode: 'open' })
                : e.createShadowRoot()),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const r = Du(l.id, l.styles, []);
          for (let s = 0; s < r.length; s++) {
            const n = document.createElement('style');
            (n.textContent = r[s]), this.shadowRoot.appendChild(n);
          }
        }
        nodeOrShadowRoot(n) {
          return n === this.hostEl ? this.shadowRoot : n;
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
        appendChild(n, t) {
          return super.appendChild(this.nodeOrShadowRoot(n), t);
        }
        insertBefore(n, t, e) {
          return super.insertBefore(this.nodeOrShadowRoot(n), t, e);
        }
        removeChild(n, t) {
          return super.removeChild(this.nodeOrShadowRoot(n), t);
        }
        parentNode(n) {
          return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)));
        }
      }
      const qu = (() =>
          ('undefined' != typeof Zone && Zone.__symbol__) ||
          function(n) {
            return '__zone_symbol__' + n;
          })(),
        Bu = qu('addEventListener'),
        Gu = qu('removeEventListener'),
        Ku = {},
        Wu = '__zone_symbol__propagationStopped',
        Zu = (() => {
          const n = 'undefined' != typeof Zone && Zone[qu('BLACK_LISTED_EVENTS')];
          if (n) {
            const t = {};
            return (
              n.forEach(n => {
                t[n] = n;
              }),
              t
            );
          }
        })(),
        Qu = function(n) {
          return !!Zu && Zu.hasOwnProperty(n);
        },
        Yu = function(n) {
          const t = Ku[n.type];
          if (!t) return;
          const e = this[t];
          if (!e) return;
          const l = [n];
          if (1 === e.length) {
            const n = e[0];
            return n.zone !== Zone.current
              ? n.zone.run(n.handler, this, l)
              : n.handler.apply(this, l);
          }
          {
            const t = e.slice();
            for (let e = 0; e < t.length && !0 !== n[Wu]; e++) {
              const n = t[e];
              n.zone !== Zone.current ? n.zone.run(n.handler, this, l) : n.handler.apply(this, l);
            }
          }
        };
      class Ju extends Au {
        constructor(n, t, e) {
          super(n),
            (this.ngZone = t),
            (e &&
              (function(n) {
                return 'server' === n;
              })(e)) ||
              this.patchEvent();
        }
        patchEvent() {
          if ('undefined' == typeof Event || !Event || !Event.prototype) return;
          if (Event.prototype.__zone_symbol__stopImmediatePropagation) return;
          const n = (Event.prototype.__zone_symbol__stopImmediatePropagation =
            Event.prototype.stopImmediatePropagation);
          Event.prototype.stopImmediatePropagation = function() {
            this && (this[Wu] = !0), n && n.apply(this, arguments);
          };
        }
        supports(n) {
          return !0;
        }
        addEventListener(n, t, e) {
          let l = e;
          if (!n[Bu] || (Gr.isInAngularZone() && !Qu(t))) n.addEventListener(t, l, !1);
          else {
            let e = Ku[t];
            e || (e = Ku[t] = qu('ANGULAR' + t + 'FALSE'));
            let r = n[e];
            const s = r && r.length > 0;
            r || (r = n[e] = []);
            const i = Qu(t) ? Zone.root : Zone.current;
            if (0 === r.length) r.push({ zone: i, handler: l });
            else {
              let n = !1;
              for (let t = 0; t < r.length; t++)
                if (r[t].handler === l) {
                  n = !0;
                  break;
                }
              n || r.push({ zone: i, handler: l });
            }
            s || n[Bu](t, Yu, !1);
          }
          return () => this.removeEventListener(n, t, l);
        }
        removeEventListener(n, t, e) {
          let l = n[Gu];
          if (!l) return n.removeEventListener.apply(n, [t, e, !1]);
          let r = Ku[t],
            s = r && n[r];
          if (!s) return n.removeEventListener.apply(n, [t, e, !1]);
          let i = !1;
          for (let o = 0; o < s.length; o++)
            if (s[o].handler === e) {
              (i = !0), s.splice(o, 1);
              break;
            }
          i
            ? 0 === s.length && l.apply(n, [t, Yu, !1])
            : n.removeEventListener.apply(n, [t, e, !1]);
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
        na = new Sn('HammerGestureConfig'),
        ta = new Sn('HammerLoader');
      class ea {
        constructor() {
          (this.events = []), (this.overrides = {});
        }
        buildHammer(n) {
          const t = new Hammer(n, this.options);
          t.get('pinch').set({ enable: !0 }), t.get('rotate').set({ enable: !0 });
          for (const e in this.overrides) t.get(e).set(this.overrides[e]);
          return t;
        }
      }
      class la extends Au {
        constructor(n, t, e, l) {
          super(n), (this._config = t), (this.console = e), (this.loader = l);
        }
        supports(n) {
          return !(
            (!Xu.hasOwnProperty(n.toLowerCase()) && !this.isCustomEvent(n)) ||
            (!window.Hammer &&
              !this.loader &&
              (this.console.warn(
                `The "${n}" event cannot be bound because Hammer.JS is not ` +
                  'loaded and no custom loader has been specified.'
              ),
              1))
          );
        }
        addEventListener(n, t, e) {
          const l = this.manager.getZone();
          if (((t = t.toLowerCase()), !window.Hammer && this.loader)) {
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
                  l || (r = this.addEventListener(n, t, e));
                })
                .catch(() => {
                  this.console.warn(
                    `The "${t}" event cannot be bound because the custom ` +
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
            const r = this._config.buildHammer(n),
              s = function(n) {
                l.runGuarded(function() {
                  e(n);
                });
              };
            return (
              r.on(t, s),
              () => {
                r.off(t, s), 'function' == typeof r.destroy && r.destroy();
              }
            );
          });
        }
        isCustomEvent(n) {
          return this._config.events.indexOf(n) > -1;
        }
      }
      const ra = ['alt', 'control', 'meta', 'shift'],
        sa = {
          alt: n => n.altKey,
          control: n => n.ctrlKey,
          meta: n => n.metaKey,
          shift: n => n.shiftKey
        };
      class ia extends Au {
        constructor(n) {
          super(n);
        }
        supports(n) {
          return null != ia.parseEventName(n);
        }
        addEventListener(n, t, e) {
          const l = ia.parseEventName(t),
            r = ia.eventCallback(l.fullKey, e, this.manager.getZone());
          return this.manager
            .getZone()
            .runOutsideAngular(() => gu().onAndCancel(n, l.domEventName, r));
        }
        static parseEventName(n) {
          const t = n.toLowerCase().split('.'),
            e = t.shift();
          if (0 === t.length || ('keydown' !== e && 'keyup' !== e)) return null;
          const l = ia._normalizeKey(t.pop());
          let r = '';
          if (
            (ra.forEach(n => {
              const e = t.indexOf(n);
              e > -1 && (t.splice(e, 1), (r += n + '.'));
            }),
            (r += l),
            0 != t.length || 0 === l.length)
          )
            return null;
          const s = {};
          return (s.domEventName = e), (s.fullKey = r), s;
        }
        static getEventFullKey(n) {
          let t = '',
            e = gu().getEventKey(n);
          return (
            (e = e.toLowerCase()),
            ' ' === e ? (e = 'space') : '.' === e && (e = 'dot'),
            ra.forEach(l => {
              l != e && (0, sa[l])(n) && (t += l + '.');
            }),
            (t += e),
            t
          );
        }
        static eventCallback(n, t, e) {
          return l => {
            ia.getEventFullKey(l) === n && e.runGuarded(() => t(l));
          };
        }
        static _normalizeKey(n) {
          switch (n) {
            case 'esc':
              return 'escape';
            default:
              return n;
          }
        }
      }
      class oa {}
      class ua extends oa {
        constructor(n) {
          super(), (this._doc = n);
        }
        sanitize(n, t) {
          if (null == t) return null;
          switch (n) {
            case _t.NONE:
              return t;
            case _t.HTML:
              return t instanceof ca
                ? t.changingThisBreaksApplicationSecurity
                : (this.checkNotSafeValue(t, 'HTML'),
                  (function(n, t) {
                    let e = null;
                    try {
                      ft = ft || new Qn(n);
                      let l = t ? String(t) : '';
                      e = ft.getInertBodyElement(l);
                      let r = 5,
                        s = l;
                      do {
                        if (0 === r)
                          throw new Error('Failed to sanitize html because the input is unstable');
                        r--, (l = s), (s = e.innerHTML), (e = ft.getInertBodyElement(l));
                      } while (l !== s);
                      const i = new ht(),
                        o = i.sanitizeChildren(mt(e) || e);
                      return (
                        Zn() &&
                          i.sanitizedSomething &&
                          console.warn(
                            'WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss'
                          ),
                        o
                      );
                    } finally {
                      if (e) {
                        const n = mt(e) || e;
                        for (; n.firstChild; ) n.removeChild(n.firstChild);
                      }
                    }
                  })(this._doc, String(t)));
            case _t.STYLE:
              return t instanceof ha
                ? t.changingThisBreaksApplicationSecurity
                : (this.checkNotSafeValue(t, 'Style'),
                  (function(n) {
                    if (!(n = String(n).trim())) return '';
                    const t = n.match(wt);
                    return (t && Xn(t[1]) === t[1]) ||
                      (n.match(yt) &&
                        (function(n) {
                          let t = !0,
                            e = !0;
                          for (let l = 0; l < n.length; l++) {
                            const r = n.charAt(l);
                            "'" === r && e ? (t = !t) : '"' === r && t && (e = !e);
                          }
                          return t && e;
                        })(n))
                      ? n
                      : (Zn() &&
                          console.warn(
                            `WARNING: sanitizing unsafe style value ${n} (see http://g.co/ng/security#xss).`
                          ),
                        'unsafe');
                  })(t));
            case _t.SCRIPT:
              if (t instanceof da) return t.changingThisBreaksApplicationSecurity;
              throw (this.checkNotSafeValue(t, 'Script'),
              new Error('unsafe value used in a script context'));
            case _t.URL:
              return t instanceof ga || t instanceof pa
                ? t.changingThisBreaksApplicationSecurity
                : (this.checkNotSafeValue(t, 'URL'), Xn(String(t)));
            case _t.RESOURCE_URL:
              if (t instanceof ga) return t.changingThisBreaksApplicationSecurity;
              throw (this.checkNotSafeValue(t, 'ResourceURL'),
              new Error(
                'unsafe value used in a resource URL context (see http://g.co/ng/security#xss)'
              ));
            default:
              throw new Error(`Unexpected SecurityContext ${n} (see http://g.co/ng/security#xss)`);
          }
        }
        checkNotSafeValue(n, t) {
          if (n instanceof aa)
            throw new Error(
              `Required a safe ${t}, got a ${n.getTypeName()} ` +
                '(see http://g.co/ng/security#xss)'
            );
        }
        bypassSecurityTrustHtml(n) {
          return new ca(n);
        }
        bypassSecurityTrustStyle(n) {
          return new ha(n);
        }
        bypassSecurityTrustScript(n) {
          return new da(n);
        }
        bypassSecurityTrustUrl(n) {
          return new pa(n);
        }
        bypassSecurityTrustResourceUrl(n) {
          return new ga(n);
        }
      }
      class aa {
        constructor(n) {
          this.changingThisBreaksApplicationSecurity = n;
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
          provide: no,
          useClass: class extends no {
            constructor(n) {
              super(), (this._doc = n), this._init();
            }
            _init() {
              (this.location = gu().getLocation()), (this._history = gu().getHistory());
            }
            getBaseHrefFromDOM() {
              return gu().getBaseHref(this._doc);
            }
            onPopState(n) {
              gu()
                .getGlobalEventTarget(this._doc, 'window')
                .addEventListener('popstate', n, !1);
            }
            onHashChange(n) {
              gu()
                .getGlobalEventTarget(this._doc, 'window')
                .addEventListener('hashchange', n, !1);
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
            set pathname(n) {
              this.location.pathname = n;
            }
            pushState(n, t, e) {
              Cu() ? this._history.pushState(n, t, e) : (this.location.hash = e);
            }
            replaceState(n, t, e) {
              Cu() ? this._history.replaceState(n, t, e) : (this.location.hash = e);
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
        return new Gn();
      }
      class _a {
        constructor(n) {
          if (n)
            throw new Error(
              'BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.'
            );
        }
        static withServerTransition(n) {
          return {
            ngModule: _a,
            providers: [{ provide: Cr, useValue: n.appId }, { provide: xu, useExisting: Cr }, ku]
          };
        }
      }
      'undefined' != typeof window && window;
      class va {
        constructor(n, t) {
          (this.id = n), (this.url = t);
        }
      }
      class ya extends va {
        constructor(n, t, e = 'imperative', l = null) {
          super(n, t), (this.navigationTrigger = e), (this.restoredState = l);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class wa extends va {
        constructor(n, t, e) {
          super(n, t), (this.urlAfterRedirects = e);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      class ba extends va {
        constructor(n, t, e) {
          super(n, t), (this.reason = e);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class Ca extends va {
        constructor(n, t, e) {
          super(n, t), (this.error = e);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class xa extends va {
        constructor(n, t, e, l) {
          super(n, t), (this.urlAfterRedirects = e), (this.state = l);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class ka extends va {
        constructor(n, t, e, l) {
          super(n, t), (this.urlAfterRedirects = e), (this.state = l);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Ea extends va {
        constructor(n, t, e, l, r) {
          super(n, t), (this.urlAfterRedirects = e), (this.state = l), (this.shouldActivate = r);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class Sa extends va {
        constructor(n, t, e, l) {
          super(n, t), (this.urlAfterRedirects = e), (this.state = l);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Oa extends va {
        constructor(n, t, e, l) {
          super(n, t), (this.urlAfterRedirects = e), (this.state = l);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Pa {
        constructor(n) {
          this.route = n;
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class Ma {
        constructor(n) {
          this.route = n;
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class Ta {
        constructor(n) {
          this.snapshot = n;
        }
        toString() {
          return `ChildActivationStart(path: '${(this.snapshot.routeConfig &&
            this.snapshot.routeConfig.path) ||
            ''}')`;
        }
      }
      class Aa {
        constructor(n) {
          this.snapshot = n;
        }
        toString() {
          return `ChildActivationEnd(path: '${(this.snapshot.routeConfig &&
            this.snapshot.routeConfig.path) ||
            ''}')`;
        }
      }
      class Ia {
        constructor(n) {
          this.snapshot = n;
        }
        toString() {
          return `ActivationStart(path: '${(this.snapshot.routeConfig &&
            this.snapshot.routeConfig.path) ||
            ''}')`;
        }
      }
      class Ra {
        constructor(n) {
          this.snapshot = n;
        }
        toString() {
          return `ActivationEnd(path: '${(this.snapshot.routeConfig &&
            this.snapshot.routeConfig.path) ||
            ''}')`;
        }
      }
      class Na {
        constructor(n, t, e) {
          (this.routerEvent = n), (this.position = t), (this.anchor = e);
        }
        toString() {
          return `Scroll(anchor: '${this.anchor}', position: '${
            this.position ? `${this.position[0]}, ${this.position[1]}` : null
          }')`;
        }
      }
      class Va {}
      class Da {
        constructor(n) {
          this.params = n || {};
        }
        has(n) {
          return this.params.hasOwnProperty(n);
        }
        get(n) {
          if (this.has(n)) {
            const t = this.params[n];
            return Array.isArray(t) ? t[0] : t;
          }
          return null;
        }
        getAll(n) {
          if (this.has(n)) {
            const t = this.params[n];
            return Array.isArray(t) ? t : [t];
          }
          return [];
        }
        get keys() {
          return Object.keys(this.params);
        }
      }
      function La(n) {
        return new Da(n);
      }
      function Ua(n) {
        const t = Error('NavigationCancelingError: ' + n);
        return (t.ngNavigationCancelingError = !0), t;
      }
      function ja(n, t, e) {
        const l = e.path.split('/');
        if (l.length > n.length) return null;
        if ('full' === e.pathMatch && (t.hasChildren() || l.length < n.length)) return null;
        const r = {};
        for (let s = 0; s < l.length; s++) {
          const t = l[s],
            e = n[s];
          if (t.startsWith(':')) r[t.substring(1)] = e;
          else if (t !== e.path) return null;
        }
        return { consumed: n.slice(0, l.length), posParams: r };
      }
      class Fa {
        constructor(n, t) {
          (this.routes = n), (this.module = t);
        }
      }
      function $a(n, t = '') {
        for (let e = 0; e < n.length; e++) {
          const l = n[e];
          Ha(l, za(t, l));
        }
      }
      function Ha(n, t) {
        if (!n)
          throw new Error(
            `\n      Invalid configuration of route '${t}': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    `
          );
        if (Array.isArray(n))
          throw new Error(`Invalid configuration of route '${t}': Array cannot be specified`);
        if (!n.component && !n.children && !n.loadChildren && n.outlet && 'primary' !== n.outlet)
          throw new Error(
            `Invalid configuration of route '${t}': a componentless route without children or loadChildren cannot have a named outlet set`
          );
        if (n.redirectTo && n.children)
          throw new Error(
            `Invalid configuration of route '${t}': redirectTo and children cannot be used together`
          );
        if (n.redirectTo && n.loadChildren)
          throw new Error(
            `Invalid configuration of route '${t}': redirectTo and loadChildren cannot be used together`
          );
        if (n.children && n.loadChildren)
          throw new Error(
            `Invalid configuration of route '${t}': children and loadChildren cannot be used together`
          );
        if (n.redirectTo && n.component)
          throw new Error(
            `Invalid configuration of route '${t}': redirectTo and component cannot be used together`
          );
        if (n.path && n.matcher)
          throw new Error(
            `Invalid configuration of route '${t}': path and matcher cannot be used together`
          );
        if (void 0 === n.redirectTo && !n.component && !n.children && !n.loadChildren)
          throw new Error(
            `Invalid configuration of route '${t}'. One of the following must be provided: component, redirectTo, children or loadChildren`
          );
        if (void 0 === n.path && void 0 === n.matcher)
          throw new Error(
            `Invalid configuration of route '${t}': routes must have either a path or a matcher specified`
          );
        if ('string' == typeof n.path && '/' === n.path.charAt(0))
          throw new Error(`Invalid configuration of route '${t}': path cannot start with a slash`);
        if ('' === n.path && void 0 !== n.redirectTo && void 0 === n.pathMatch)
          throw new Error(
            `Invalid configuration of route '{path: "${t}", redirectTo: "${n.redirectTo}"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.`
          );
        if (void 0 !== n.pathMatch && 'full' !== n.pathMatch && 'prefix' !== n.pathMatch)
          throw new Error(
            `Invalid configuration of route '${t}': pathMatch can only be set to 'prefix' or 'full'`
          );
        n.children && $a(n.children, t);
      }
      function za(n, t) {
        return t
          ? n || t.path
            ? n && !t.path
              ? `${n}/`
              : !n && t.path
              ? t.path
              : `${n}/${t.path}`
            : ''
          : n;
      }
      function qa(n) {
        const t = n.children && n.children.map(qa),
          e = t ? Object.assign({}, n, { children: t }) : Object.assign({}, n);
        return (
          !e.component &&
            (t || e.loadChildren) &&
            e.outlet &&
            'primary' !== e.outlet &&
            (e.component = Va),
          e
        );
      }
      function Ba(n, t) {
        const e = Object.keys(n),
          l = Object.keys(t);
        if (!e || !l || e.length != l.length) return !1;
        let r;
        for (let s = 0; s < e.length; s++) if (((r = e[s]), n[r] !== t[r])) return !1;
        return !0;
      }
      function Ga(n) {
        return Array.prototype.concat.apply([], n);
      }
      function Ka(n) {
        return n.length > 0 ? n[n.length - 1] : null;
      }
      function Wa(n, t) {
        for (const e in n) n.hasOwnProperty(e) && t(n[e], e);
      }
      function Za(n) {
        return qt(n) ? n : zt(n) ? G(Promise.resolve(n)) : xo(n);
      }
      function Qa(n, t, e) {
        return e
          ? (function(n, t) {
              return Ba(n, t);
            })(n.queryParams, t.queryParams) &&
              (function n(t, e) {
                if (!nc(t.segments, e.segments)) return !1;
                if (t.numberOfChildren !== e.numberOfChildren) return !1;
                for (const l in e.children) {
                  if (!t.children[l]) return !1;
                  if (!n(t.children[l], e.children[l])) return !1;
                }
                return !0;
              })(n.root, t.root)
          : (function(n, t) {
              return (
                Object.keys(t).length <= Object.keys(n).length &&
                Object.keys(t).every(e => t[e] === n[e])
              );
            })(n.queryParams, t.queryParams) &&
              (function n(t, e) {
                return (function t(e, l, r) {
                  if (e.segments.length > r.length)
                    return !!nc(e.segments.slice(0, r.length), r) && !l.hasChildren();
                  if (e.segments.length === r.length) {
                    if (!nc(e.segments, r)) return !1;
                    for (const t in l.children) {
                      if (!e.children[t]) return !1;
                      if (!n(e.children[t], l.children[t])) return !1;
                    }
                    return !0;
                  }
                  {
                    const n = r.slice(0, e.segments.length),
                      s = r.slice(e.segments.length);
                    return (
                      !!nc(e.segments, n) && !!e.children.primary && t(e.children.primary, l, s)
                    );
                  }
                })(t, e, e.segments);
              })(n.root, t.root);
      }
      class Ya {
        constructor(n, t, e) {
          (this.root = n), (this.queryParams = t), (this.fragment = e);
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
        constructor(n, t) {
          (this.segments = n),
            (this.children = t),
            (this.parent = null),
            Wa(t, (n, t) => (n.parent = this));
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
        constructor(n, t) {
          (this.path = n), (this.parameters = t);
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
      function nc(n, t) {
        return n.length === t.length && n.every((n, e) => n.path === t[e].path);
      }
      function tc(n, t) {
        let e = [];
        return (
          Wa(n.children, (n, l) => {
            'primary' === l && (e = e.concat(t(n, l)));
          }),
          Wa(n.children, (n, l) => {
            'primary' !== l && (e = e.concat(t(n, l)));
          }),
          e
        );
      }
      class ec {}
      class lc {
        parse(n) {
          const t = new mc(n);
          return new Ya(t.parseRootSegment(), t.parseQueryParams(), t.parseFragment());
        }
        serialize(n) {
          var t;
          return `${`/${(function n(t, e) {
            if (!t.hasChildren()) return sc(t);
            if (e) {
              const e = t.children.primary ? n(t.children.primary, !1) : '',
                l = [];
              return (
                Wa(t.children, (t, e) => {
                  'primary' !== e && l.push(`${e}:${n(t, !1)}`);
                }),
                l.length > 0 ? `${e}(${l.join('//')})` : e
              );
            }
            {
              const e = tc(t, (e, l) =>
                'primary' === l ? [n(t.children.primary, !1)] : [`${l}:${n(e, !1)}`]
              );
              return `${sc(t)}/(${e.join('//')})`;
            }
          })(n.root, !0)}`}${(function(n) {
            const t = Object.keys(n).map(t => {
              const e = n[t];
              return Array.isArray(e)
                ? e.map(n => `${oc(t)}=${oc(n)}`).join('&')
                : `${oc(t)}=${oc(e)}`;
            });
            return t.length ? `?${t.join('&')}` : '';
          })(n.queryParams)}${
            'string' == typeof n.fragment ? `#${((t = n.fragment), encodeURI(t))}` : ''
          }`;
        }
      }
      const rc = new lc();
      function sc(n) {
        return n.segments.map(n => hc(n)).join('/');
      }
      function ic(n) {
        return encodeURIComponent(n)
          .replace(/%40/g, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',');
      }
      function oc(n) {
        return ic(n).replace(/%3B/gi, ';');
      }
      function uc(n) {
        return ic(n)
          .replace(/\(/g, '%28')
          .replace(/\)/g, '%29')
          .replace(/%26/gi, '&');
      }
      function ac(n) {
        return decodeURIComponent(n);
      }
      function cc(n) {
        return ac(n.replace(/\+/g, '%20'));
      }
      function hc(n) {
        return `${uc(n.path)}${((t = n.parameters),
        Object.keys(t)
          .map(n => `;${uc(n)}=${uc(t[n])}`)
          .join(''))}`;
        var t;
      }
      const dc = /^[^\/()?;=#]+/;
      function pc(n) {
        const t = n.match(dc);
        return t ? t[0] : '';
      }
      const gc = /^[^=?&#]+/,
        fc = /^[^?&#]+/;
      class mc {
        constructor(n) {
          (this.url = n), (this.remaining = n);
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
          const n = {};
          if (this.consumeOptional('?'))
            do {
              this.parseQueryParam(n);
            } while (this.consumeOptional('&'));
          return n;
        }
        parseFragment() {
          return this.consumeOptional('#') ? decodeURIComponent(this.remaining) : null;
        }
        parseChildren() {
          if ('' === this.remaining) return {};
          this.consumeOptional('/');
          const n = [];
          for (
            this.peekStartsWith('(') || n.push(this.parseSegment());
            this.peekStartsWith('/') && !this.peekStartsWith('//') && !this.peekStartsWith('/(');

          )
            this.capture('/'), n.push(this.parseSegment());
          let t = {};
          this.peekStartsWith('/(') && (this.capture('/'), (t = this.parseParens(!0)));
          let e = {};
          return (
            this.peekStartsWith('(') && (e = this.parseParens(!1)),
            (n.length > 0 || Object.keys(t).length > 0) && (e.primary = new Ja(n, t)),
            e
          );
        }
        parseSegment() {
          const n = pc(this.remaining);
          if ('' === n && this.peekStartsWith(';'))
            throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);
          return this.capture(n), new Xa(ac(n), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const n = {};
          for (; this.consumeOptional(';'); ) this.parseParam(n);
          return n;
        }
        parseParam(n) {
          const t = pc(this.remaining);
          if (!t) return;
          this.capture(t);
          let e = '';
          if (this.consumeOptional('=')) {
            const n = pc(this.remaining);
            n && ((e = n), this.capture(e));
          }
          n[ac(t)] = ac(e);
        }
        parseQueryParam(n) {
          const t = (function(n) {
            const t = n.match(gc);
            return t ? t[0] : '';
          })(this.remaining);
          if (!t) return;
          this.capture(t);
          let e = '';
          if (this.consumeOptional('=')) {
            const n = (function(n) {
              const t = n.match(fc);
              return t ? t[0] : '';
            })(this.remaining);
            n && ((e = n), this.capture(e));
          }
          const l = cc(t),
            r = cc(e);
          if (n.hasOwnProperty(l)) {
            let t = n[l];
            Array.isArray(t) || ((t = [t]), (n[l] = t)), t.push(r);
          } else n[l] = r;
        }
        parseParens(n) {
          const t = {};
          for (this.capture('('); !this.consumeOptional(')') && this.remaining.length > 0; ) {
            const e = pc(this.remaining),
              l = this.remaining[e.length];
            if ('/' !== l && ')' !== l && ';' !== l)
              throw new Error(`Cannot parse url '${this.url}'`);
            let r = void 0;
            e.indexOf(':') > -1
              ? ((r = e.substr(0, e.indexOf(':'))), this.capture(r), this.capture(':'))
              : n && (r = 'primary');
            const s = this.parseChildren();
            (t[r] = 1 === Object.keys(s).length ? s.primary : new Ja([], s)),
              this.consumeOptional('//');
          }
          return t;
        }
        peekStartsWith(n) {
          return this.remaining.startsWith(n);
        }
        consumeOptional(n) {
          return (
            !!this.peekStartsWith(n) && ((this.remaining = this.remaining.substring(n.length)), !0)
          );
        }
        capture(n) {
          if (!this.consumeOptional(n)) throw new Error(`Expected "${n}".`);
        }
      }
      class _c {
        constructor(n) {
          this._root = n;
        }
        get root() {
          return this._root.value;
        }
        parent(n) {
          const t = this.pathFromRoot(n);
          return t.length > 1 ? t[t.length - 2] : null;
        }
        children(n) {
          const t = vc(n, this._root);
          return t ? t.children.map(n => n.value) : [];
        }
        firstChild(n) {
          const t = vc(n, this._root);
          return t && t.children.length > 0 ? t.children[0].value : null;
        }
        siblings(n) {
          const t = yc(n, this._root);
          return t.length < 2
            ? []
            : t[t.length - 2].children.map(n => n.value).filter(t => t !== n);
        }
        pathFromRoot(n) {
          return yc(n, this._root).map(n => n.value);
        }
      }
      function vc(n, t) {
        if (n === t.value) return t;
        for (const e of t.children) {
          const t = vc(n, e);
          if (t) return t;
        }
        return null;
      }
      function yc(n, t) {
        if (n === t.value) return [t];
        for (const e of t.children) {
          const l = yc(n, e);
          if (l.length) return l.unshift(t), l;
        }
        return [];
      }
      class wc {
        constructor(n, t) {
          (this.value = n), (this.children = t);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function bc(n) {
        const t = {};
        return n && n.children.forEach(n => (t[n.value.outlet] = n)), t;
      }
      class Cc extends _c {
        constructor(n, t) {
          super(n), (this.snapshot = t), Pc(this, n);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function xc(n, t) {
        const e = (function(n, t) {
            const e = new Sc([], {}, {}, '', {}, 'primary', t, null, n.root, -1, {});
            return new Oc('', new wc(e, []));
          })(n, t),
          l = new ko([new Xa('', {})]),
          r = new ko({}),
          s = new ko({}),
          i = new ko({}),
          o = new ko(''),
          u = new kc(l, r, i, o, s, 'primary', t, e.root);
        return (u.snapshot = e.root), new Cc(new wc(u, []), e);
      }
      class kc {
        constructor(n, t, e, l, r, s, i, o) {
          (this.url = n),
            (this.params = t),
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
            this._paramMap || (this._paramMap = this.params.pipe(H(n => La(n)))), this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = this.queryParams.pipe(H(n => La(n)))),
            this._queryParamMap
          );
        }
        toString() {
          return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`;
        }
      }
      function Ec(n, t = 'emptyOnly') {
        const e = n.pathFromRoot;
        let l = 0;
        if ('always' !== t)
          for (l = e.length - 1; l >= 1; ) {
            const n = e[l],
              t = e[l - 1];
            if (n.routeConfig && '' === n.routeConfig.path) l--;
            else {
              if (t.component) break;
              l--;
            }
          }
        return (function(n) {
          return n.reduce(
            (n, t) => ({
              params: Object.assign({}, n.params, t.params),
              data: Object.assign({}, n.data, t.data),
              resolve: Object.assign({}, n.resolve, t._resolvedData)
            }),
            { params: {}, data: {}, resolve: {} }
          );
        })(e.slice(l));
      }
      class Sc {
        constructor(n, t, e, l, r, s, i, o, u, a, c) {
          (this.url = n),
            (this.params = t),
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
          return `Route(url:'${this.url.map(n => n.toString()).join('/')}', path:'${
            this.routeConfig ? this.routeConfig.path : ''
          }')`;
        }
      }
      class Oc extends _c {
        constructor(n, t) {
          super(t), (this.url = n), Pc(this, t);
        }
        toString() {
          return Mc(this._root);
        }
      }
      function Pc(n, t) {
        (t.value._routerState = n), t.children.forEach(t => Pc(n, t));
      }
      function Mc(n) {
        const t = n.children.length > 0 ? ` { ${n.children.map(Mc).join(', ')} } ` : '';
        return `${n.value}${t}`;
      }
      function Tc(n) {
        if (n.snapshot) {
          const t = n.snapshot,
            e = n._futureSnapshot;
          (n.snapshot = e),
            Ba(t.queryParams, e.queryParams) || n.queryParams.next(e.queryParams),
            t.fragment !== e.fragment && n.fragment.next(e.fragment),
            Ba(t.params, e.params) || n.params.next(e.params),
            (function(n, t) {
              if (n.length !== t.length) return !1;
              for (let e = 0; e < n.length; ++e) if (!Ba(n[e], t[e])) return !1;
              return !0;
            })(t.url, e.url) || n.url.next(e.url),
            Ba(t.data, e.data) || n.data.next(e.data);
        } else (n.snapshot = n._futureSnapshot), n.data.next(n._futureSnapshot.data);
      }
      function Ac(n, t) {
        var e, l;
        return (
          Ba(n.params, t.params) &&
          nc((e = n.url), (l = t.url)) &&
          e.every((n, t) => Ba(n.parameters, l[t].parameters)) &&
          !(!n.parent != !t.parent) &&
          (!n.parent || Ac(n.parent, t.parent))
        );
      }
      function Ic(n) {
        return 'object' == typeof n && null != n && !n.outlets && !n.segmentPath;
      }
      function Rc(n, t, e, l, r) {
        let s = {};
        return (
          l &&
            Wa(l, (n, t) => {
              s[t] = Array.isArray(n) ? n.map(n => `${n}`) : `${n}`;
            }),
          new Ya(
            e.root === n
              ? t
              : (function n(t, e, l) {
                  const r = {};
                  return (
                    Wa(t.children, (t, s) => {
                      r[s] = t === e ? l : n(t, e, l);
                    }),
                    new Ja(t.segments, r)
                  );
                })(e.root, n, t),
            s,
            r
          )
        );
      }
      class Nc {
        constructor(n, t, e) {
          if (
            ((this.isAbsolute = n),
            (this.numberOfDoubleDots = t),
            (this.commands = e),
            n && e.length > 0 && Ic(e[0]))
          )
            throw new Error('Root segment cannot have matrix parameters');
          const l = e.find(n => 'object' == typeof n && null != n && n.outlets);
          if (l && l !== Ka(e)) throw new Error('{outlets:{}} has to be the last command');
        }
        toRoot() {
          return this.isAbsolute && 1 === this.commands.length && '/' == this.commands[0];
        }
      }
      class Vc {
        constructor(n, t, e) {
          (this.segmentGroup = n), (this.processChildren = t), (this.index = e);
        }
      }
      function Dc(n) {
        return 'object' == typeof n && null != n && n.outlets ? n.outlets.primary : `${n}`;
      }
      function Lc(n, t, e) {
        if ((n || (n = new Ja([], {})), 0 === n.segments.length && n.hasChildren()))
          return Uc(n, t, e);
        const l = (function(n, t, e) {
            let l = 0,
              r = t;
            const s = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; r < n.segments.length; ) {
              if (l >= e.length) return s;
              const t = n.segments[r],
                i = Dc(e[l]),
                o = l < e.length - 1 ? e[l + 1] : null;
              if (r > 0 && void 0 === i) break;
              if (i && o && 'object' == typeof o && void 0 === o.outlets) {
                if (!Hc(i, o, t)) return s;
                l += 2;
              } else {
                if (!Hc(i, {}, t)) return s;
                l++;
              }
              r++;
            }
            return { match: !0, pathIndex: r, commandIndex: l };
          })(n, t, e),
          r = e.slice(l.commandIndex);
        if (l.match && l.pathIndex < n.segments.length) {
          const t = new Ja(n.segments.slice(0, l.pathIndex), {});
          return (
            (t.children.primary = new Ja(n.segments.slice(l.pathIndex), n.children)), Uc(t, 0, r)
          );
        }
        return l.match && 0 === r.length
          ? new Ja(n.segments, {})
          : l.match && !n.hasChildren()
          ? jc(n, t, e)
          : l.match
          ? Uc(n, 0, r)
          : jc(n, t, e);
      }
      function Uc(n, t, e) {
        if (0 === e.length) return new Ja(n.segments, {});
        {
          const l = (function(n) {
              return 'object' != typeof n[0]
                ? { primary: n }
                : void 0 === n[0].outlets
                ? { primary: n }
                : n[0].outlets;
            })(e),
            r = {};
          return (
            Wa(l, (e, l) => {
              null !== e && (r[l] = Lc(n.children[l], t, e));
            }),
            Wa(n.children, (n, t) => {
              void 0 === l[t] && (r[t] = n);
            }),
            new Ja(n.segments, r)
          );
        }
      }
      function jc(n, t, e) {
        const l = n.segments.slice(0, t);
        let r = 0;
        for (; r < e.length; ) {
          if ('object' == typeof e[r] && void 0 !== e[r].outlets) {
            const n = Fc(e[r].outlets);
            return new Ja(l, n);
          }
          if (0 === r && Ic(e[0])) {
            l.push(new Xa(n.segments[t].path, e[0])), r++;
            continue;
          }
          const s = Dc(e[r]),
            i = r < e.length - 1 ? e[r + 1] : null;
          s && i && Ic(i) ? (l.push(new Xa(s, $c(i))), (r += 2)) : (l.push(new Xa(s, {})), r++);
        }
        return new Ja(l, {});
      }
      function Fc(n) {
        const t = {};
        return (
          Wa(n, (n, e) => {
            null !== n && (t[e] = jc(new Ja([], {}), 0, n));
          }),
          t
        );
      }
      function $c(n) {
        const t = {};
        return Wa(n, (n, e) => (t[e] = `${n}`)), t;
      }
      function Hc(n, t, e) {
        return n == e.path && Ba(t, e.parameters);
      }
      class zc {
        constructor(n, t, e, l) {
          (this.routeReuseStrategy = n),
            (this.futureState = t),
            (this.currState = e),
            (this.forwardEvent = l);
        }
        activate(n) {
          const t = this.futureState._root,
            e = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(t, e, n),
            Tc(this.futureState.root),
            this.activateChildRoutes(t, e, n);
        }
        deactivateChildRoutes(n, t, e) {
          const l = bc(t);
          n.children.forEach(n => {
            const t = n.value.outlet;
            this.deactivateRoutes(n, l[t], e), delete l[t];
          }),
            Wa(l, (n, t) => {
              this.deactivateRouteAndItsChildren(n, e);
            });
        }
        deactivateRoutes(n, t, e) {
          const l = n.value,
            r = t ? t.value : null;
          if (l === r)
            if (l.component) {
              const r = e.getContext(l.outlet);
              r && this.deactivateChildRoutes(n, t, r.children);
            } else this.deactivateChildRoutes(n, t, e);
          else r && this.deactivateRouteAndItsChildren(t, e);
        }
        deactivateRouteAndItsChildren(n, t) {
          this.routeReuseStrategy.shouldDetach(n.value.snapshot)
            ? this.detachAndStoreRouteSubtree(n, t)
            : this.deactivateRouteAndOutlet(n, t);
        }
        detachAndStoreRouteSubtree(n, t) {
          const e = t.getContext(n.value.outlet);
          if (e && e.outlet) {
            const t = e.outlet.detach(),
              l = e.children.onOutletDeactivated();
            this.routeReuseStrategy.store(n.value.snapshot, {
              componentRef: t,
              route: n,
              contexts: l
            });
          }
        }
        deactivateRouteAndOutlet(n, t) {
          const e = t.getContext(n.value.outlet);
          if (e) {
            const l = bc(n),
              r = n.value.component ? e.children : t;
            Wa(l, (n, t) => this.deactivateRouteAndItsChildren(n, r)),
              e.outlet && (e.outlet.deactivate(), e.children.onOutletDeactivated());
          }
        }
        activateChildRoutes(n, t, e) {
          const l = bc(t);
          n.children.forEach(n => {
            this.activateRoutes(n, l[n.value.outlet], e),
              this.forwardEvent(new Ra(n.value.snapshot));
          }),
            n.children.length && this.forwardEvent(new Aa(n.value.snapshot));
        }
        activateRoutes(n, t, e) {
          const l = n.value,
            r = t ? t.value : null;
          if ((Tc(l), l === r))
            if (l.component) {
              const r = e.getOrCreateContext(l.outlet);
              this.activateChildRoutes(n, t, r.children);
            } else this.activateChildRoutes(n, t, e);
          else if (l.component) {
            const t = e.getOrCreateContext(l.outlet);
            if (this.routeReuseStrategy.shouldAttach(l.snapshot)) {
              const n = this.routeReuseStrategy.retrieve(l.snapshot);
              this.routeReuseStrategy.store(l.snapshot, null),
                t.children.onOutletReAttached(n.contexts),
                (t.attachRef = n.componentRef),
                (t.route = n.route.value),
                t.outlet && t.outlet.attach(n.componentRef, n.route.value),
                qc(n.route);
            } else {
              const e = (function(n) {
                  for (let t = n.parent; t; t = t.parent) {
                    const n = t.routeConfig;
                    if (n && n._loadedConfig) return n._loadedConfig;
                    if (n && n.component) return null;
                  }
                  return null;
                })(l.snapshot),
                r = e ? e.module.componentFactoryResolver : null;
              (t.attachRef = null),
                (t.route = l),
                (t.resolver = r),
                t.outlet && t.outlet.activateWith(l, r),
                this.activateChildRoutes(n, null, t.children);
            }
          } else this.activateChildRoutes(n, null, e);
        }
      }
      function qc(n) {
        Tc(n.value), n.children.forEach(qc);
      }
      function Bc(n) {
        return 'function' == typeof n;
      }
      function Gc(n) {
        return n instanceof Ya;
      }
      class Kc {
        constructor(n) {
          this.segmentGroup = n || null;
        }
      }
      class Wc {
        constructor(n) {
          this.urlTree = n;
        }
      }
      function Zc(n) {
        return new b(t => t.error(new Kc(n)));
      }
      function Qc(n) {
        return new b(t => t.error(new Wc(n)));
      }
      function Yc(n) {
        return new b(t =>
          t.error(new Error(`Only absolute redirects can have named outlets. redirectTo: '${n}'`))
        );
      }
      class Jc {
        constructor(n, t, e, l, r) {
          (this.configLoader = t),
            (this.urlSerializer = e),
            (this.urlTree = l),
            (this.config = r),
            (this.allowRedirects = !0),
            (this.ngModule = n.get(Ln));
        }
        apply() {
          return this.expandSegmentGroup(this.ngModule, this.config, this.urlTree.root, 'primary')
            .pipe(H(n => this.createUrlTree(n, this.urlTree.queryParams, this.urlTree.fragment)))
            .pipe(
              Zo(n => {
                if (n instanceof Wc) return (this.allowRedirects = !1), this.match(n.urlTree);
                if (n instanceof Kc) throw this.noMatchError(n);
                throw n;
              })
            );
        }
        match(n) {
          return this.expandSegmentGroup(this.ngModule, this.config, n.root, 'primary')
            .pipe(H(t => this.createUrlTree(t, n.queryParams, n.fragment)))
            .pipe(
              Zo(n => {
                if (n instanceof Kc) throw this.noMatchError(n);
                throw n;
              })
            );
        }
        noMatchError(n) {
          return new Error(`Cannot match any routes. URL Segment: '${n.segmentGroup}'`);
        }
        createUrlTree(n, t, e) {
          const l = n.segments.length > 0 ? new Ja([], { primary: n }) : n;
          return new Ya(l, t, e);
        }
        expandSegmentGroup(n, t, e, l) {
          return 0 === e.segments.length && e.hasChildren()
            ? this.expandChildren(n, t, e).pipe(H(n => new Ja([], n)))
            : this.expandSegment(n, e, t, e.segments, l, !0);
        }
        expandChildren(n, t, e) {
          return (function(n, t) {
            if (0 === Object.keys(n).length) return xo({});
            const e = [],
              l = [],
              r = {};
            return (
              Wa(n, (n, s) => {
                const i = t(s, n).pipe(H(n => (r[s] = n)));
                'primary' === s ? e.push(i) : l.push(i);
              }),
              xo.apply(null, e.concat(l)).pipe(
                Ao(),
                Wo(),
                H(() => r)
              )
            );
          })(e.children, (e, l) => this.expandSegmentGroup(n, t, l, e));
        }
        expandSegment(n, t, e, l, r, s) {
          return xo(...e).pipe(
            H(i =>
              this.expandSegmentAgainstRoute(n, t, e, i, l, r, s).pipe(
                Zo(n => {
                  if (n instanceof Kc) return xo(null);
                  throw n;
                })
              )
            ),
            Ao(),
            tu(n => !!n),
            Zo((n, e) => {
              if (n instanceof So || 'EmptyError' === n.name) {
                if (this.noLeftoversInUrl(t, l, r)) return xo(new Ja([], {}));
                throw new Kc(t);
              }
              throw n;
            })
          );
        }
        noLeftoversInUrl(n, t, e) {
          return 0 === t.length && !n.children[e];
        }
        expandSegmentAgainstRoute(n, t, e, l, r, s, i) {
          return eh(l) !== s
            ? Zc(t)
            : void 0 === l.redirectTo
            ? this.matchSegmentAgainstRoute(n, t, l, r)
            : i && this.allowRedirects
            ? this.expandSegmentAgainstRouteUsingRedirect(n, t, e, l, r, s)
            : Zc(t);
        }
        expandSegmentAgainstRouteUsingRedirect(n, t, e, l, r, s) {
          return '**' === l.path
            ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(n, e, l, s)
            : this.expandRegularSegmentAgainstRouteUsingRedirect(n, t, e, l, r, s);
        }
        expandWildCardWithParamsAgainstRouteUsingRedirect(n, t, e, l) {
          const r = this.applyRedirectCommands([], e.redirectTo, {});
          return e.redirectTo.startsWith('/')
            ? Qc(r)
            : this.lineralizeSegments(e, r).pipe(
                K(e => {
                  const r = new Ja(e, {});
                  return this.expandSegment(n, r, t, e, l, !1);
                })
              );
        }
        expandRegularSegmentAgainstRouteUsingRedirect(n, t, e, l, r, s) {
          const { matched: i, consumedSegments: o, lastChild: u, positionalParamSegments: a } = Xc(
            t,
            l,
            r
          );
          if (!i) return Zc(t);
          const c = this.applyRedirectCommands(o, l.redirectTo, a);
          return l.redirectTo.startsWith('/')
            ? Qc(c)
            : this.lineralizeSegments(l, c).pipe(
                K(l => this.expandSegment(n, t, e, l.concat(r.slice(u)), s, !1))
              );
        }
        matchSegmentAgainstRoute(n, t, e, l) {
          if ('**' === e.path)
            return e.loadChildren
              ? this.configLoader
                  .load(n.injector, e)
                  .pipe(H(n => ((e._loadedConfig = n), new Ja(l, {}))))
              : xo(new Ja(l, {}));
          const { matched: r, consumedSegments: s, lastChild: i } = Xc(t, e, l);
          if (!r) return Zc(t);
          const o = l.slice(i);
          return this.getChildConfig(n, e, l).pipe(
            K(n => {
              const e = n.module,
                l = n.routes,
                { segmentGroup: r, slicedSegments: i } = (function(n, t, e, l) {
                  return e.length > 0 &&
                    (function(n, t, e) {
                      return e.some(e => th(n, t, e) && 'primary' !== eh(e));
                    })(n, e, l)
                    ? {
                        segmentGroup: nh(
                          new Ja(
                            t,
                            (function(n, t) {
                              const e = {};
                              e.primary = t;
                              for (const l of n)
                                '' === l.path && 'primary' !== eh(l) && (e[eh(l)] = new Ja([], {}));
                              return e;
                            })(l, new Ja(e, n.children))
                          )
                        ),
                        slicedSegments: []
                      }
                    : 0 === e.length &&
                      (function(n, t, e) {
                        return e.some(e => th(n, t, e));
                      })(n, e, l)
                    ? {
                        segmentGroup: nh(
                          new Ja(
                            n.segments,
                            (function(n, t, e, l) {
                              const r = {};
                              for (const s of e)
                                th(n, t, s) && !l[eh(s)] && (r[eh(s)] = new Ja([], {}));
                              return Object.assign({}, l, r);
                            })(n, e, l, n.children)
                          )
                        ),
                        slicedSegments: e
                      }
                    : { segmentGroup: n, slicedSegments: e };
                })(t, s, o, l);
              return 0 === i.length && r.hasChildren()
                ? this.expandChildren(e, l, r).pipe(H(n => new Ja(s, n)))
                : 0 === l.length && 0 === i.length
                ? xo(new Ja(s, {}))
                : this.expandSegment(e, r, l, i, 'primary', !0).pipe(
                    H(n => new Ja(s.concat(n.segments), n.children))
                  );
            })
          );
        }
        getChildConfig(n, t, e) {
          return t.children
            ? xo(new Fa(t.children, n))
            : t.loadChildren
            ? void 0 !== t._loadedConfig
              ? xo(t._loadedConfig)
              : (function(n, t, e) {
                  const l = t.canLoad;
                  return l && 0 !== l.length
                    ? G(l)
                        .pipe(
                          H(l => {
                            const r = n.get(l);
                            let s;
                            if (
                              (function(n) {
                                return n && Bc(n.canLoad);
                              })(r)
                            )
                              s = r.canLoad(t, e);
                            else {
                              if (!Bc(r)) throw new Error('Invalid CanLoad guard');
                              s = r(t, e);
                            }
                            return Za(s);
                          })
                        )
                        .pipe(Ao(), ((r = n => !0 === n), n => n.lift(new eu(r, void 0, n))))
                    : xo(!0);
                  var r;
                })(n.injector, t, e).pipe(
                  K(e =>
                    e
                      ? this.configLoader
                          .load(n.injector, t)
                          .pipe(H(n => ((t._loadedConfig = n), n)))
                      : (function(n) {
                          return new b(t =>
                            t.error(
                              Ua(
                                `Cannot load children because the guard of the route "path: '${n.path}'" returned false`
                              )
                            )
                          );
                        })(t)
                  )
                )
            : xo(new Fa([], n));
        }
        lineralizeSegments(n, t) {
          let e = [],
            l = t.root;
          for (;;) {
            if (((e = e.concat(l.segments)), 0 === l.numberOfChildren)) return xo(e);
            if (l.numberOfChildren > 1 || !l.children.primary) return Yc(n.redirectTo);
            l = l.children.primary;
          }
        }
        applyRedirectCommands(n, t, e) {
          return this.applyRedirectCreatreUrlTree(t, this.urlSerializer.parse(t), n, e);
        }
        applyRedirectCreatreUrlTree(n, t, e, l) {
          const r = this.createSegmentGroup(n, t.root, e, l);
          return new Ya(
            r,
            this.createQueryParams(t.queryParams, this.urlTree.queryParams),
            t.fragment
          );
        }
        createQueryParams(n, t) {
          const e = {};
          return (
            Wa(n, (n, l) => {
              if ('string' == typeof n && n.startsWith(':')) {
                const r = n.substring(1);
                e[l] = t[r];
              } else e[l] = n;
            }),
            e
          );
        }
        createSegmentGroup(n, t, e, l) {
          const r = this.createSegments(n, t.segments, e, l);
          let s = {};
          return (
            Wa(t.children, (t, r) => {
              s[r] = this.createSegmentGroup(n, t, e, l);
            }),
            new Ja(r, s)
          );
        }
        createSegments(n, t, e, l) {
          return t.map(t =>
            t.path.startsWith(':') ? this.findPosParam(n, t, l) : this.findOrReturn(t, e)
          );
        }
        findPosParam(n, t, e) {
          const l = e[t.path.substring(1)];
          if (!l) throw new Error(`Cannot redirect to '${n}'. Cannot find '${t.path}'.`);
          return l;
        }
        findOrReturn(n, t) {
          let e = 0;
          for (const l of t) {
            if (l.path === n.path) return t.splice(e), l;
            e++;
          }
          return n;
        }
      }
      function Xc(n, t, e) {
        if ('' === t.path)
          return 'full' === t.pathMatch && (n.hasChildren() || e.length > 0)
            ? { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} }
            : { matched: !0, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
        const l = (t.matcher || ja)(e, n, t);
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
          const t = n.children.primary;
          return new Ja(n.segments.concat(t.segments), t.children);
        }
        return n;
      }
      function th(n, t, e) {
        return (
          (!(n.hasChildren() || t.length > 0) || 'full' !== e.pathMatch) &&
          '' === e.path &&
          void 0 !== e.redirectTo
        );
      }
      function eh(n) {
        return n.outlet || 'primary';
      }
      class lh {
        constructor(n) {
          (this.path = n), (this.route = this.path[this.path.length - 1]);
        }
      }
      class rh {
        constructor(n, t) {
          (this.component = n), (this.route = t);
        }
      }
      function sh(n, t, e) {
        const l = n._root;
        return (function n(t, e, l, r, s = { canDeactivateChecks: [], canActivateChecks: [] }) {
          const i = bc(e);
          return (
            t.children.forEach(t => {
              !(function(t, e, l, r, s = { canDeactivateChecks: [], canActivateChecks: [] }) {
                const i = t.value,
                  o = e ? e.value : null,
                  u = l ? l.getContext(t.value.outlet) : null;
                if (o && i.routeConfig === o.routeConfig) {
                  const a = (function(n, t, e) {
                    if ('function' == typeof e) return e(n, t);
                    switch (e) {
                      case 'pathParamsChange':
                        return !nc(n.url, t.url);
                      case 'pathParamsOrQueryParamsChange':
                        return !nc(n.url, t.url) || !Ba(n.queryParams, t.queryParams);
                      case 'always':
                        return !0;
                      case 'paramsOrQueryParamsChange':
                        return !Ac(n, t) || !Ba(n.queryParams, t.queryParams);
                      case 'paramsChange':
                      default:
                        return !Ac(n, t);
                    }
                  })(o, i, i.routeConfig.runGuardsAndResolvers);
                  a
                    ? s.canActivateChecks.push(new lh(r))
                    : ((i.data = o.data), (i._resolvedData = o._resolvedData)),
                    n(t, e, i.component ? (u ? u.children : null) : l, r, s),
                    a &&
                      s.canDeactivateChecks.push(
                        new rh((u && u.outlet && u.outlet.component) || null, o)
                      );
                } else
                  o && oh(e, u, s),
                    s.canActivateChecks.push(new lh(r)),
                    n(t, null, i.component ? (u ? u.children : null) : l, r, s);
              })(t, i[t.value.outlet], l, r.concat([t.value]), s),
                delete i[t.value.outlet];
            }),
            Wa(i, (n, t) => oh(n, l.getContext(t), s)),
            s
          );
        })(l, t ? t._root : null, e, [l.value]);
      }
      function ih(n, t, e) {
        const l = (function(n) {
          if (!n) return null;
          for (let t = n.parent; t; t = t.parent) {
            const n = t.routeConfig;
            if (n && n._loadedConfig) return n._loadedConfig;
          }
          return null;
        })(t);
        return (l ? l.module.injector : e).get(n);
      }
      function oh(n, t, e) {
        const l = bc(n),
          r = n.value;
        Wa(l, (n, l) => {
          oh(n, r.component ? (t ? t.children.getContext(l) : null) : t, e);
        }),
          e.canDeactivateChecks.push(
            new rh(
              r.component && t && t.outlet && t.outlet.isActivated ? t.outlet.component : null,
              r
            )
          );
      }
      const uh = Symbol('INITIAL_VALUE');
      function ah() {
        return ru(n =>
          (function(...n) {
            let t = null,
              e = null;
            return (
              M(n[n.length - 1]) && (e = n.pop()),
              'function' == typeof n[n.length - 1] && (t = n.pop()),
              1 === n.length && u(n[0]) && (n = n[0]),
              B(n, e).lift(new Po(t))
            );
          })(
            ...n.map(n =>
              n.pipe(
                Jo(1),
                (function(...n) {
                  return t => {
                    let e = n[n.length - 1];
                    M(e) ? n.pop() : (e = null);
                    const l = n.length;
                    return (function(...n) {
                      return Ao()(xo(...n));
                    })(1 !== l || e ? (l > 0 ? B(n, e) : bo(e)) : Co(n[0]), t);
                  };
                })(uh)
              )
            )
          ).pipe(
            ou((n, t) => {
              let e = !1;
              return t.reduce((n, l, r) => {
                if (n !== uh) return n;
                if ((l === uh && (e = !0), !e)) {
                  if (!1 === l) return l;
                  if (r === t.length - 1 || Gc(l)) return l;
                }
                return n;
              }, n);
            }, uh),
            Io(n => n !== uh),
            H(n => (Gc(n) ? n : !0 === n)),
            Jo(1)
          )
        );
      }
      function ch(n, t) {
        return null !== n && t && t(new Ia(n)), xo(!0);
      }
      function hh(n, t) {
        return null !== n && t && t(new Ta(n)), xo(!0);
      }
      function dh(n, t, e) {
        const l = t.routeConfig ? t.routeConfig.canActivate : null;
        return l && 0 !== l.length
          ? xo(
              l.map(l =>
                To(() => {
                  const r = ih(l, t, e);
                  let s;
                  if (
                    (function(n) {
                      return n && Bc(n.canActivate);
                    })(r)
                  )
                    s = Za(r.canActivate(t, n));
                  else {
                    if (!Bc(r)) throw new Error('Invalid CanActivate guard');
                    s = Za(r(t, n));
                  }
                  return s.pipe(tu());
                })
              )
            ).pipe(ah())
          : xo(!0);
      }
      function ph(n, t, e) {
        const l = t[t.length - 1],
          r = t
            .slice(0, t.length - 1)
            .reverse()
            .map(n =>
              (function(n) {
                const t = n.routeConfig ? n.routeConfig.canActivateChild : null;
                return t && 0 !== t.length ? { node: n, guards: t } : null;
              })(n)
            )
            .filter(n => null !== n)
            .map(t =>
              To(() =>
                xo(
                  t.guards.map(r => {
                    const s = ih(r, t.node, e);
                    let i;
                    if (
                      (function(n) {
                        return n && Bc(n.canActivateChild);
                      })(s)
                    )
                      i = Za(s.canActivateChild(l, n));
                    else {
                      if (!Bc(s)) throw new Error('Invalid CanActivateChild guard');
                      i = Za(s(l, n));
                    }
                    return i.pipe(tu());
                  })
                ).pipe(ah())
              )
            );
        return xo(r).pipe(ah());
      }
      class gh {}
      class fh {
        constructor(n, t, e, l, r, s) {
          (this.rootComponentType = n),
            (this.config = t),
            (this.urlTree = e),
            (this.url = l),
            (this.paramsInheritanceStrategy = r),
            (this.relativeLinkResolution = s);
        }
        recognize() {
          try {
            const n = vh(this.urlTree.root, [], [], this.config, this.relativeLinkResolution)
                .segmentGroup,
              t = this.processSegmentGroup(this.config, n, 'primary'),
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
              l = new wc(e, t),
              r = new Oc(this.url, l);
            return this.inheritParamsAndData(r._root), xo(r);
          } catch (n) {
            return new b(t => t.error(n));
          }
        }
        inheritParamsAndData(n) {
          const t = n.value,
            e = Ec(t, this.paramsInheritanceStrategy);
          (t.params = Object.freeze(e.params)),
            (t.data = Object.freeze(e.data)),
            n.children.forEach(n => this.inheritParamsAndData(n));
        }
        processSegmentGroup(n, t, e) {
          return 0 === t.segments.length && t.hasChildren()
            ? this.processChildren(n, t)
            : this.processSegment(n, t, t.segments, e);
        }
        processChildren(n, t) {
          const e = tc(t, (t, e) => this.processSegmentGroup(n, t, e));
          return (
            (function(n) {
              const t = {};
              n.forEach(n => {
                const e = t[n.value.outlet];
                if (e) {
                  const t = e.url.map(n => n.toString()).join('/'),
                    l = n.value.url.map(n => n.toString()).join('/');
                  throw new Error(
                    `Two segments cannot have the same outlet name: '${t}' and '${l}'.`
                  );
                }
                t[n.value.outlet] = n.value;
              });
            })(e),
            e.sort((n, t) =>
              'primary' === n.value.outlet
                ? -1
                : 'primary' === t.value.outlet
                ? 1
                : n.value.outlet.localeCompare(t.value.outlet)
            ),
            e
          );
        }
        processSegment(n, t, e, l) {
          for (const s of n)
            try {
              return this.processSegmentAgainstRoute(s, t, e, l);
            } catch (r) {
              if (!(r instanceof gh)) throw r;
            }
          if (this.noLeftoversInUrl(t, e, l)) return [];
          throw new gh();
        }
        noLeftoversInUrl(n, t, e) {
          return 0 === t.length && !n.children[e];
        }
        processSegmentAgainstRoute(n, t, e, l) {
          if (n.redirectTo) throw new gh();
          if ((n.outlet || 'primary') !== l) throw new gh();
          let r,
            s = [],
            i = [];
          if ('**' === n.path) {
            const s = e.length > 0 ? Ka(e).parameters : {};
            r = new Sc(
              e,
              s,
              Object.freeze(Object.assign({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              bh(n),
              l,
              n.component,
              n,
              mh(t),
              _h(t) + e.length,
              Ch(n)
            );
          } else {
            const o = (function(n, t, e) {
              if ('' === t.path) {
                if ('full' === t.pathMatch && (n.hasChildren() || e.length > 0)) throw new gh();
                return { consumedSegments: [], lastChild: 0, parameters: {} };
              }
              const l = (t.matcher || ja)(e, n, t);
              if (!l) throw new gh();
              const r = {};
              Wa(l.posParams, (n, t) => {
                r[t] = n.path;
              });
              const s =
                l.consumed.length > 0
                  ? Object.assign({}, r, l.consumed[l.consumed.length - 1].parameters)
                  : r;
              return { consumedSegments: l.consumed, lastChild: l.consumed.length, parameters: s };
            })(t, n, e);
            (s = o.consumedSegments),
              (i = e.slice(o.lastChild)),
              (r = new Sc(
                s,
                o.parameters,
                Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                this.urlTree.fragment,
                bh(n),
                l,
                n.component,
                n,
                mh(t),
                _h(t) + s.length,
                Ch(n)
              ));
          }
          const o = (function(n) {
              return n.children ? n.children : n.loadChildren ? n._loadedConfig.routes : [];
            })(n),
            { segmentGroup: u, slicedSegments: a } = vh(t, s, i, o, this.relativeLinkResolution);
          if (0 === a.length && u.hasChildren()) {
            const n = this.processChildren(o, u);
            return [new wc(r, n)];
          }
          if (0 === o.length && 0 === a.length) return [new wc(r, [])];
          const c = this.processSegment(o, u, a, 'primary');
          return [new wc(r, c)];
        }
      }
      function mh(n) {
        let t = n;
        for (; t._sourceSegment; ) t = t._sourceSegment;
        return t;
      }
      function _h(n) {
        let t = n,
          e = t._segmentIndexShift ? t._segmentIndexShift : 0;
        for (; t._sourceSegment; )
          (t = t._sourceSegment), (e += t._segmentIndexShift ? t._segmentIndexShift : 0);
        return e - 1;
      }
      function vh(n, t, e, l, r) {
        if (
          e.length > 0 &&
          (function(n, t, e) {
            return e.some(e => yh(n, t, e) && 'primary' !== wh(e));
          })(n, e, l)
        ) {
          const r = new Ja(
            t,
            (function(n, t, e, l) {
              const r = {};
              (r.primary = l), (l._sourceSegment = n), (l._segmentIndexShift = t.length);
              for (const s of e)
                if ('' === s.path && 'primary' !== wh(s)) {
                  const e = new Ja([], {});
                  (e._sourceSegment = n), (e._segmentIndexShift = t.length), (r[wh(s)] = e);
                }
              return r;
            })(n, t, l, new Ja(e, n.children))
          );
          return (
            (r._sourceSegment = n),
            (r._segmentIndexShift = t.length),
            { segmentGroup: r, slicedSegments: [] }
          );
        }
        if (
          0 === e.length &&
          (function(n, t, e) {
            return e.some(e => yh(n, t, e));
          })(n, e, l)
        ) {
          const s = new Ja(
            n.segments,
            (function(n, t, e, l, r, s) {
              const i = {};
              for (const o of l)
                if (yh(n, e, o) && !r[wh(o)]) {
                  const e = new Ja([], {});
                  (e._sourceSegment = n),
                    (e._segmentIndexShift = 'legacy' === s ? n.segments.length : t.length),
                    (i[wh(o)] = e);
                }
              return Object.assign({}, r, i);
            })(n, t, e, l, n.children, r)
          );
          return (
            (s._sourceSegment = n),
            (s._segmentIndexShift = t.length),
            { segmentGroup: s, slicedSegments: e }
          );
        }
        const s = new Ja(n.segments, n.children);
        return (
          (s._sourceSegment = n),
          (s._segmentIndexShift = t.length),
          { segmentGroup: s, slicedSegments: e }
        );
      }
      function yh(n, t, e) {
        return (
          (!(n.hasChildren() || t.length > 0) || 'full' !== e.pathMatch) &&
          '' === e.path &&
          void 0 === e.redirectTo
        );
      }
      function wh(n) {
        return n.outlet || 'primary';
      }
      function bh(n) {
        return n.data || {};
      }
      function Ch(n) {
        return n.resolve || {};
      }
      function xh(n, t, e, l) {
        const r = ih(n, t, l);
        return Za(r.resolve ? r.resolve(t, e) : r(t, e));
      }
      function kh(n) {
        return function(t) {
          return t.pipe(
            ru(t => {
              const e = n(t);
              return e ? G(e).pipe(H(() => t)) : G([t]);
            })
          );
        };
      }
      class Eh {}
      class Sh {
        shouldDetach(n) {
          return !1;
        }
        store(n, t) {}
        shouldAttach(n) {
          return !1;
        }
        retrieve(n) {
          return null;
        }
        shouldReuseRoute(n, t) {
          return n.routeConfig === t.routeConfig;
        }
      }
      const Oh = new Sn('ROUTES');
      class Ph {
        constructor(n, t, e, l) {
          (this.loader = n),
            (this.compiler = t),
            (this.onLoadStartListener = e),
            (this.onLoadEndListener = l);
        }
        load(n, t) {
          return (
            this.onLoadStartListener && this.onLoadStartListener(t),
            this.loadModuleFactory(t.loadChildren).pipe(
              H(e => {
                this.onLoadEndListener && this.onLoadEndListener(t);
                const l = e.create(n);
                return new Fa(Ga(l.injector.get(Oh)).map(qa), l);
              })
            )
          );
        }
        loadModuleFactory(n) {
          return 'string' == typeof n
            ? G(this.loader.load(n))
            : Za(n()).pipe(
                K(n => (n instanceof Un ? xo(n) : G(this.compiler.compileModuleAsync(n))))
              );
        }
      }
      class Mh {}
      class Th {
        shouldProcessUrl(n) {
          return !0;
        }
        extract(n) {
          return n;
        }
        merge(n, t) {
          return n;
        }
      }
      function Ah(n) {
        throw n;
      }
      function Ih(n, t, e) {
        return t.parse('/');
      }
      function Rh(n, t) {
        return xo(null);
      }
      class Nh {
        constructor(n, t, e, l, r, s, i, o) {
          (this.rootComponentType = n),
            (this.urlSerializer = t),
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
            (this.ngModule = r.get(Ln)),
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
              n => this.triggerEvent(new Pa(n)),
              n => this.triggerEvent(new Ma(n))
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
        setupNavigations(n) {
          const t = this.events;
          return n.pipe(
            Io(n => 0 !== n.id),
            H(n =>
              Object.assign({}, n, { extractedUrl: this.urlHandlingStrategy.extract(n.rawUrl) })
            ),
            ru(n => {
              let e = !1,
                l = !1;
              return xo(n).pipe(
                Fo(n => {
                  this.currentNavigation = {
                    id: n.id,
                    initialUrl: n.currentRawUrl,
                    extractedUrl: n.extractedUrl,
                    trigger: n.source,
                    extras: n.extras,
                    previousNavigation: this.lastSuccessfulNavigation
                      ? Object.assign({}, this.lastSuccessfulNavigation, {
                          previousNavigation: null
                        })
                      : null
                  };
                }),
                ru(n => {
                  const e =
                    !this.navigated || n.extractedUrl.toString() !== this.browserUrlTree.toString();
                  if (
                    ('reload' === this.onSameUrlNavigation || e) &&
                    this.urlHandlingStrategy.shouldProcessUrl(n.rawUrl)
                  )
                    return xo(n).pipe(
                      ru(n => {
                        const e = this.transitions.getValue();
                        return (
                          t.next(
                            new ya(
                              n.id,
                              this.serializeUrl(n.extractedUrl),
                              n.source,
                              n.restoredState
                            )
                          ),
                          e !== this.transitions.getValue() ? wo : [n]
                        );
                      }),
                      ru(n => Promise.resolve(n)),
                      ((l = this.ngModule.injector),
                      (r = this.configLoader),
                      (s = this.urlSerializer),
                      (i = this.config),
                      function(n) {
                        return n.pipe(
                          ru(n =>
                            (function(n, t, e, l, r) {
                              return new Jc(n, t, e, l, r).apply();
                            })(l, r, s, n.extractedUrl, i).pipe(
                              H(t => Object.assign({}, n, { urlAfterRedirects: t }))
                            )
                          )
                        );
                      }),
                      Fo(n => {
                        this.currentNavigation = Object.assign({}, this.currentNavigation, {
                          finalUrl: n.urlAfterRedirects
                        });
                      }),
                      (function(n, t, e, l, r) {
                        return function(s) {
                          return s.pipe(
                            K(s =>
                              (function(n, t, e, l, r = 'emptyOnly', s = 'legacy') {
                                return new fh(n, t, e, l, r, s).recognize();
                              })(n, t, s.urlAfterRedirects, e(s.urlAfterRedirects), l, r).pipe(
                                H(n => Object.assign({}, s, { targetSnapshot: n }))
                              )
                            )
                          );
                        };
                      })(
                        this.rootComponentType,
                        this.config,
                        n => this.serializeUrl(n),
                        this.paramsInheritanceStrategy,
                        this.relativeLinkResolution
                      ),
                      Fo(n => {
                        'eager' === this.urlUpdateStrategy &&
                          (n.extras.skipLocationChange ||
                            this.setBrowserUrl(
                              n.urlAfterRedirects,
                              !!n.extras.replaceUrl,
                              n.id,
                              n.extras.state
                            ),
                          (this.browserUrlTree = n.urlAfterRedirects));
                      }),
                      Fo(n => {
                        const e = new xa(
                          n.id,
                          this.serializeUrl(n.extractedUrl),
                          this.serializeUrl(n.urlAfterRedirects),
                          n.targetSnapshot
                        );
                        t.next(e);
                      })
                    );
                  var l, r, s, i;
                  if (
                    e &&
                    this.rawUrlTree &&
                    this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)
                  ) {
                    const { id: e, extractedUrl: l, source: r, restoredState: s, extras: i } = n,
                      o = new ya(e, this.serializeUrl(l), r, s);
                    t.next(o);
                    const u = xc(l, this.rootComponentType).snapshot;
                    return xo(
                      Object.assign({}, n, {
                        targetSnapshot: u,
                        urlAfterRedirects: l,
                        extras: Object.assign({}, i, { skipLocationChange: !1, replaceUrl: !1 })
                      })
                    );
                  }
                  return (
                    (this.rawUrlTree = n.rawUrl),
                    (this.browserUrlTree = n.urlAfterRedirects),
                    n.resolve(null),
                    wo
                  );
                }),
                kh(n => {
                  const {
                    targetSnapshot: t,
                    id: e,
                    extractedUrl: l,
                    rawUrl: r,
                    extras: { skipLocationChange: s, replaceUrl: i }
                  } = n;
                  return this.hooks.beforePreactivation(t, {
                    navigationId: e,
                    appliedUrlTree: l,
                    rawUrlTree: r,
                    skipLocationChange: !!s,
                    replaceUrl: !!i
                  });
                }),
                Fo(n => {
                  const t = new ka(
                    n.id,
                    this.serializeUrl(n.extractedUrl),
                    this.serializeUrl(n.urlAfterRedirects),
                    n.targetSnapshot
                  );
                  this.triggerEvent(t);
                }),
                H(n =>
                  Object.assign({}, n, {
                    guards: sh(n.targetSnapshot, n.currentSnapshot, this.rootContexts)
                  })
                ),
                (function(n, t) {
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
                          : (function(n, t, e, l) {
                              return G(n).pipe(
                                K(n =>
                                  (function(n, t, e, l, r) {
                                    const s =
                                      t && t.routeConfig ? t.routeConfig.canDeactivate : null;
                                    return s && 0 !== s.length
                                      ? xo(
                                          s.map(s => {
                                            const i = ih(s, t, r);
                                            let o;
                                            if (
                                              (function(n) {
                                                return n && Bc(n.canDeactivate);
                                              })(i)
                                            )
                                              o = Za(i.canDeactivate(n, t, e, l));
                                            else {
                                              if (!Bc(i))
                                                throw new Error('Invalid CanDeactivate guard');
                                              o = Za(i(n, t, e, l));
                                            }
                                            return o.pipe(tu());
                                          })
                                        ).pipe(ah())
                                      : xo(!0);
                                  })(n.component, n.route, e, t, l)
                                ),
                                tu(n => !0 !== n, !0)
                              );
                            })(i, l, r, n).pipe(
                              K(e =>
                                e && 'boolean' == typeof e
                                  ? (function(n, t, e, l) {
                                      return G(t).pipe(
                                        cu(t =>
                                          G([
                                            hh(t.route.parent, l),
                                            ch(t.route, l),
                                            ph(n, t.path, e),
                                            dh(n, t.route, e)
                                          ]).pipe(
                                            Ao(),
                                            tu(n => !0 !== n, !0)
                                          )
                                        ),
                                        tu(n => !0 !== n, !0)
                                      );
                                    })(l, s, n, t)
                                  : xo(e)
                              ),
                              H(n => Object.assign({}, e, { guardsResult: n }))
                            );
                      })
                    );
                  };
                })(this.ngModule.injector, n => this.triggerEvent(n)),
                Fo(n => {
                  if (Gc(n.guardsResult)) {
                    const t = Ua(`Redirecting to "${this.serializeUrl(n.guardsResult)}"`);
                    throw ((t.url = n.guardsResult), t);
                  }
                }),
                Fo(n => {
                  const t = new Ea(
                    n.id,
                    this.serializeUrl(n.extractedUrl),
                    this.serializeUrl(n.urlAfterRedirects),
                    n.targetSnapshot,
                    !!n.guardsResult
                  );
                  this.triggerEvent(t);
                }),
                Io(n => {
                  if (!n.guardsResult) {
                    this.resetUrlToCurrentUrlTree();
                    const e = new ba(n.id, this.serializeUrl(n.extractedUrl), '');
                    return t.next(e), n.resolve(!1), !1;
                  }
                  return !0;
                }),
                kh(n => {
                  if (n.guards.canActivateChecks.length)
                    return xo(n).pipe(
                      Fo(n => {
                        const t = new Sa(
                          n.id,
                          this.serializeUrl(n.extractedUrl),
                          this.serializeUrl(n.urlAfterRedirects),
                          n.targetSnapshot
                        );
                        this.triggerEvent(t);
                      }),
                      ((t = this.paramsInheritanceStrategy),
                      (e = this.ngModule.injector),
                      function(n) {
                        return n.pipe(
                          K(n => {
                            const {
                              targetSnapshot: l,
                              guards: { canActivateChecks: r }
                            } = n;
                            return r.length
                              ? G(r).pipe(
                                  cu(n =>
                                    (function(n, t, e, l) {
                                      return (function(n, t, e, l) {
                                        const r = Object.keys(n);
                                        if (0 === r.length) return xo({});
                                        if (1 === r.length) {
                                          const s = r[0];
                                          return xh(n[s], t, e, l).pipe(H(n => ({ [s]: n })));
                                        }
                                        const s = {};
                                        return G(r)
                                          .pipe(
                                            K(r => xh(n[r], t, e, l).pipe(H(n => ((s[r] = n), n))))
                                          )
                                          .pipe(
                                            Wo(),
                                            H(() => s)
                                          );
                                      })(n._resolve, n, t, l).pipe(
                                        H(
                                          t => (
                                            (n._resolvedData = t),
                                            (n.data = Object.assign({}, n.data, Ec(n, e).resolve)),
                                            null
                                          )
                                        )
                                      );
                                    })(n.route, l, t, e)
                                  ),
                                  (function(n, t) {
                                    return arguments.length >= 2
                                      ? function(e) {
                                          return y(ou(n, t), Lo(1), Bo(t))(e);
                                        }
                                      : function(t) {
                                          return y(
                                            ou((t, e, l) => n(t, e, l + 1)),
                                            Lo(1)
                                          )(t);
                                        };
                                  })((n, t) => n),
                                  H(t => n)
                                )
                              : xo(n);
                          })
                        );
                      }),
                      Fo(n => {
                        const t = new Oa(
                          n.id,
                          this.serializeUrl(n.extractedUrl),
                          this.serializeUrl(n.urlAfterRedirects),
                          n.targetSnapshot
                        );
                        this.triggerEvent(t);
                      })
                    );
                  var t, e;
                }),
                kh(n => {
                  const {
                    targetSnapshot: t,
                    id: e,
                    extractedUrl: l,
                    rawUrl: r,
                    extras: { skipLocationChange: s, replaceUrl: i }
                  } = n;
                  return this.hooks.afterPreactivation(t, {
                    navigationId: e,
                    appliedUrlTree: l,
                    rawUrlTree: r,
                    skipLocationChange: !!s,
                    replaceUrl: !!i
                  });
                }),
                H(n => {
                  const t = (function(n, t, e) {
                    const l = (function n(t, e, l) {
                      if (l && t.shouldReuseRoute(e.value, l.value.snapshot)) {
                        const r = l.value;
                        r._futureSnapshot = e.value;
                        const s = (function(t, e, l) {
                          return e.children.map(e => {
                            for (const r of l.children)
                              if (t.shouldReuseRoute(r.value.snapshot, e.value)) return n(t, e, r);
                            return n(t, e);
                          });
                        })(t, e, l);
                        return new wc(r, s);
                      }
                      {
                        const l = t.retrieve(e.value);
                        if (l) {
                          const n = l.route;
                          return (
                            (function n(t, e) {
                              if (t.value.routeConfig !== e.value.routeConfig)
                                throw new Error(
                                  'Cannot reattach ActivatedRouteSnapshot created from a different route'
                                );
                              if (t.children.length !== e.children.length)
                                throw new Error(
                                  'Cannot reattach ActivatedRouteSnapshot with a different number of children'
                                );
                              e.value._futureSnapshot = t.value;
                              for (let l = 0; l < t.children.length; ++l)
                                n(t.children[l], e.children[l]);
                            })(e, n),
                            n
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
                            s = e.children.map(e => n(t, e));
                          return new wc(l, s);
                        }
                      }
                      var r;
                    })(n, t._root, e ? e._root : void 0);
                    return new Cc(l, t);
                  })(this.routeReuseStrategy, n.targetSnapshot, n.currentRouterState);
                  return Object.assign({}, n, { targetRouterState: t });
                }),
                Fo(n => {
                  (this.currentUrlTree = n.urlAfterRedirects),
                    (this.rawUrlTree = this.urlHandlingStrategy.merge(
                      this.currentUrlTree,
                      n.rawUrl
                    )),
                    (this.routerState = n.targetRouterState),
                    'deferred' === this.urlUpdateStrategy &&
                      (n.extras.skipLocationChange ||
                        this.setBrowserUrl(
                          this.rawUrlTree,
                          !!n.extras.replaceUrl,
                          n.id,
                          n.extras.state
                        ),
                      (this.browserUrlTree = n.urlAfterRedirects));
                }),
                ((s = this.rootContexts),
                (i = this.routeReuseStrategy),
                (o = n => this.triggerEvent(n)),
                H(n => (new zc(i, n.targetRouterState, n.currentRouterState, o).activate(s), n))),
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
                      n.id,
                      this.serializeUrl(n.extractedUrl),
                      `Navigation ID ${n.id} is not equal to the current navigation id ${this.navigationId}`
                    );
                    t.next(e), n.resolve(!1);
                  }
                  this.currentNavigation = null;
                }),
                n => n.lift(new hu(r))),
                Zo(e => {
                  if (((l = !0), (r = e) && r.ngNavigationCancelingError)) {
                    const l = Gc(e.url);
                    l ||
                      ((this.navigated = !0),
                      this.resetStateAndUrl(n.currentRouterState, n.currentUrlTree, n.rawUrl));
                    const r = new ba(n.id, this.serializeUrl(n.extractedUrl), e.message);
                    t.next(r), n.resolve(!1), l && this.navigateByUrl(e.url);
                  } else {
                    this.resetStateAndUrl(n.currentRouterState, n.currentUrlTree, n.rawUrl);
                    const l = new Ca(n.id, this.serializeUrl(n.extractedUrl), e);
                    t.next(l);
                    try {
                      n.resolve(this.errorHandler(e));
                    } catch (s) {
                      n.reject(s);
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
        resetRootComponentType(n) {
          (this.rootComponentType = n), (this.routerState.root.component = this.rootComponentType);
        }
        getTransition() {
          const n = this.transitions.value;
          return (n.urlAfterRedirects = this.browserUrlTree), n;
        }
        setTransition(n) {
          this.transitions.next(Object.assign({}, this.getTransition(), n));
        }
        initialNavigation() {
          this.setUpLocationChangeListener(),
            0 === this.navigationId &&
              this.navigateByUrl(this.location.path(!0), { replaceUrl: !0 });
        }
        setUpLocationChangeListener() {
          this.locationSubscription ||
            (this.locationSubscription = this.location.subscribe(n => {
              let t = this.parseUrl(n.url);
              const e = 'popstate' === n.type ? 'popstate' : 'hashchange',
                l = n.state && n.state.navigationId ? n.state : null;
              setTimeout(() => {
                this.scheduleNavigation(t, e, l, { replaceUrl: !0 });
              }, 0);
            }));
        }
        get url() {
          return this.serializeUrl(this.currentUrlTree);
        }
        getCurrentNavigation() {
          return this.currentNavigation;
        }
        triggerEvent(n) {
          this.events.next(n);
        }
        resetConfig(n) {
          $a(n), (this.config = n.map(qa)), (this.navigated = !1), (this.lastSuccessfulId = -1);
        }
        ngOnDestroy() {
          this.dispose();
        }
        dispose() {
          this.locationSubscription &&
            (this.locationSubscription.unsubscribe(), (this.locationSubscription = null));
        }
        createUrlTree(n, t = {}) {
          const {
            relativeTo: e,
            queryParams: l,
            fragment: r,
            preserveQueryParams: s,
            queryParamsHandling: i,
            preserveFragment: o
          } = t;
          Zn() &&
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
            (function(n, t, e, l, r) {
              if (0 === e.length) return Rc(t.root, t.root, t, l, r);
              const s = (function(n) {
                if ('string' == typeof n[0] && 1 === n.length && '/' === n[0])
                  return new Nc(!0, 0, n);
                let t = 0,
                  e = !1;
                const l = n.reduce((n, l, r) => {
                  if ('object' == typeof l && null != l) {
                    if (l.outlets) {
                      const t = {};
                      return (
                        Wa(l.outlets, (n, e) => {
                          t[e] = 'string' == typeof n ? n.split('/') : n;
                        }),
                        [...n, { outlets: t }]
                      );
                    }
                    if (l.segmentPath) return [...n, l.segmentPath];
                  }
                  return 'string' != typeof l
                    ? [...n, l]
                    : 0 === r
                    ? (l.split('/').forEach((l, r) => {
                        (0 == r && '.' === l) ||
                          (0 == r && '' === l ? (e = !0) : '..' === l ? t++ : '' != l && n.push(l));
                      }),
                      n)
                    : [...n, l];
                }, []);
                return new Nc(e, t, l);
              })(e);
              if (s.toRoot()) return Rc(t.root, new Ja([], {}), t, l, r);
              const i = (function(n, t, e) {
                  if (n.isAbsolute) return new Vc(t.root, !0, 0);
                  if (-1 === e.snapshot._lastPathIndex)
                    return new Vc(e.snapshot._urlSegment, !0, 0);
                  const l = Ic(n.commands[0]) ? 0 : 1;
                  return (function(n, t, e) {
                    let l = n,
                      r = t,
                      s = e;
                    for (; s > r; ) {
                      if (((s -= r), (l = l.parent), !l))
                        throw new Error("Invalid number of '../'");
                      r = l.segments.length;
                    }
                    return new Vc(l, !1, r - s);
                  })(e.snapshot._urlSegment, e.snapshot._lastPathIndex + l, n.numberOfDoubleDots);
                })(s, t, n),
                o = i.processChildren
                  ? Uc(i.segmentGroup, i.index, s.commands)
                  : Lc(i.segmentGroup, i.index, s.commands);
              return Rc(i.segmentGroup, o, t, l, r);
            })(u, this.currentUrlTree, n, c, a)
          );
        }
        navigateByUrl(n, t = { skipLocationChange: !1 }) {
          Zn() &&
            this.isNgZoneEnabled &&
            !Gr.isInAngularZone() &&
            this.console.warn(
              "Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?"
            );
          const e = Gc(n) ? n : this.parseUrl(n),
            l = this.urlHandlingStrategy.merge(e, this.rawUrlTree);
          return this.scheduleNavigation(l, 'imperative', null, t);
        }
        navigate(n, t = { skipLocationChange: !1 }) {
          return (
            (function(n) {
              for (let t = 0; t < n.length; t++) {
                const e = n[t];
                if (null == e)
                  throw new Error(`The requested path contains ${e} segment at index ${t}`);
              }
            })(n),
            this.navigateByUrl(this.createUrlTree(n, t), t)
          );
        }
        serializeUrl(n) {
          return this.urlSerializer.serialize(n);
        }
        parseUrl(n) {
          let t;
          try {
            t = this.urlSerializer.parse(n);
          } catch (e) {
            t = this.malformedUriErrorHandler(e, this.urlSerializer, n);
          }
          return t;
        }
        isActive(n, t) {
          if (Gc(n)) return Qa(this.currentUrlTree, n, t);
          const e = this.parseUrl(n);
          return Qa(this.currentUrlTree, e, t);
        }
        removeEmptyProps(n) {
          return Object.keys(n).reduce((t, e) => {
            const l = n[e];
            return null != l && (t[e] = l), t;
          }, {});
        }
        processNavigations() {
          this.navigations.subscribe(
            n => {
              (this.navigated = !0),
                (this.lastSuccessfulId = n.id),
                this.events.next(
                  new wa(
                    n.id,
                    this.serializeUrl(n.extractedUrl),
                    this.serializeUrl(this.currentUrlTree)
                  )
                ),
                (this.lastSuccessfulNavigation = this.currentNavigation),
                (this.currentNavigation = null),
                n.resolve(!0);
            },
            n => {
              this.console.warn('Unhandled Navigation Error: ');
            }
          );
        }
        scheduleNavigation(n, t, e, l) {
          const r = this.getTransition();
          if (
            r &&
            'imperative' !== t &&
            'imperative' === r.source &&
            r.rawUrl.toString() === n.toString()
          )
            return Promise.resolve(!0);
          if (
            r &&
            'hashchange' == t &&
            'popstate' === r.source &&
            r.rawUrl.toString() === n.toString()
          )
            return Promise.resolve(!0);
          if (
            r &&
            'popstate' == t &&
            'hashchange' === r.source &&
            r.rawUrl.toString() === n.toString()
          )
            return Promise.resolve(!0);
          let s = null,
            i = null;
          const o = new Promise((n, t) => {
              (s = n), (i = t);
            }),
            u = ++this.navigationId;
          return (
            this.setTransition({
              id: u,
              source: t,
              restoredState: e,
              currentUrlTree: this.currentUrlTree,
              currentRawUrl: this.rawUrlTree,
              rawUrl: n,
              extras: l,
              resolve: s,
              reject: i,
              promise: o,
              currentSnapshot: this.routerState.snapshot,
              currentRouterState: this.routerState
            }),
            o.catch(n => Promise.reject(n))
          );
        }
        setBrowserUrl(n, t, e, l) {
          const r = this.urlSerializer.serialize(n);
          (l = l || {}),
            this.location.isCurrentPathEqualTo(r) || t
              ? this.location.replaceState(r, '', Object.assign({}, l, { navigationId: e }))
              : this.location.go(r, '', Object.assign({}, l, { navigationId: e }));
        }
        resetStateAndUrl(n, t, e) {
          (this.routerState = n),
            (this.currentUrlTree = t),
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
        constructor(n, t, e) {
          (this.router = n),
            (this.route = t),
            (this.locationStrategy = e),
            (this.commands = []),
            (this.subscription = n.events.subscribe(n => {
              n instanceof wa && this.updateTargetUrlAndHref();
            }));
        }
        set routerLink(n) {
          this.commands = null != n ? (Array.isArray(n) ? n : [n]) : [];
        }
        set preserveQueryParams(n) {
          Zn() &&
            console &&
            console.warn &&
            console.warn('preserveQueryParams is deprecated, use queryParamsHandling instead.'),
            (this.preserve = n);
        }
        ngOnChanges(n) {
          this.updateTargetUrlAndHref();
        }
        ngOnDestroy() {
          this.subscription.unsubscribe();
        }
        onClick(n, t, e, l) {
          if (0 !== n || t || e || l) return !0;
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
      function Dh(n) {
        return '' === n || !!n;
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
        onChildOutletCreated(n, t) {
          const e = this.getOrCreateContext(n);
          (e.outlet = t), this.contexts.set(n, e);
        }
        onChildOutletDestroyed(n) {
          const t = this.getContext(n);
          t && (t.outlet = null);
        }
        onOutletDeactivated() {
          const n = this.contexts;
          return (this.contexts = new Map()), n;
        }
        onOutletReAttached(n) {
          this.contexts = n;
        }
        getOrCreateContext(n) {
          let t = this.getContext(n);
          return t || ((t = new Lh()), this.contexts.set(n, t)), t;
        }
        getContext(n) {
          return this.contexts.get(n) || null;
        }
      }
      class jh {
        constructor(n, t, e, l, r) {
          (this.parentContexts = n),
            (this.location = t),
            (this.resolver = e),
            (this.changeDetector = r),
            (this.activated = null),
            (this._activatedRoute = null),
            (this.activateEvents = new _r()),
            (this.deactivateEvents = new _r()),
            (this.name = l || 'primary'),
            n.onChildOutletCreated(this.name, this);
        }
        ngOnDestroy() {
          this.parentContexts.onChildOutletDestroyed(this.name);
        }
        ngOnInit() {
          if (!this.activated) {
            const n = this.parentContexts.getContext(this.name);
            n &&
              n.route &&
              (n.attachRef
                ? this.attach(n.attachRef, n.route)
                : this.activateWith(n.route, n.resolver || null));
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
          const n = this.activated;
          return (this.activated = null), (this._activatedRoute = null), n;
        }
        attach(n, t) {
          (this.activated = n), (this._activatedRoute = t), this.location.insert(n.hostView);
        }
        deactivate() {
          if (this.activated) {
            const n = this.component;
            this.activated.destroy(),
              (this.activated = null),
              (this._activatedRoute = null),
              this.deactivateEvents.emit(n);
          }
        }
        activateWith(n, t) {
          if (this.isActivated) throw new Error('Cannot activate an already activated outlet');
          this._activatedRoute = n;
          const e = (t = t || this.resolver).resolveComponentFactory(
              n._futureSnapshot.routeConfig.component
            ),
            l = this.parentContexts.getOrCreateContext(this.name).children,
            r = new Fh(n, l, this.location.injector);
          (this.activated = this.location.createComponent(e, this.location.length, r)),
            this.changeDetector.markForCheck(),
            this.activateEvents.emit(this.activated.instance);
        }
      }
      class Fh {
        constructor(n, t, e) {
          (this.route = n), (this.childContexts = t), (this.parent = e);
        }
        get(n, t) {
          return n === kc ? this.route : n === Uh ? this.childContexts : this.parent.get(n, t);
        }
      }
      class $h {}
      class Hh {
        preload(n, t) {
          return t().pipe(Zo(() => xo(null)));
        }
      }
      class zh {
        preload(n, t) {
          return xo(null);
        }
      }
      class qh {
        constructor(n, t, e, l, r) {
          (this.router = n),
            (this.injector = l),
            (this.preloadingStrategy = r),
            (this.loader = new Ph(
              t,
              e,
              t => n.triggerEvent(new Pa(t)),
              t => n.triggerEvent(new Ma(t))
            ));
        }
        setUpPreloading() {
          this.subscription = this.router.events
            .pipe(
              Io(n => n instanceof wa),
              cu(() => this.preload())
            )
            .subscribe(() => {});
        }
        preload() {
          const n = this.injector.get(Ln);
          return this.processRoutes(n, this.router.config);
        }
        ngOnDestroy() {
          this.subscription.unsubscribe();
        }
        processRoutes(n, t) {
          const e = [];
          for (const l of t)
            if (l.loadChildren && !l.canLoad && l._loadedConfig) {
              const n = l._loadedConfig;
              e.push(this.processRoutes(n.module, n.routes));
            } else
              l.loadChildren && !l.canLoad
                ? e.push(this.preloadConfig(n, l))
                : l.children && e.push(this.processRoutes(n, l.children));
          return G(e).pipe(
            Y(),
            H(n => {})
          );
        }
        preloadConfig(n, t) {
          return this.preloadingStrategy.preload(t, () =>
            this.loader
              .load(n.injector, t)
              .pipe(K(n => ((t._loadedConfig = n), this.processRoutes(n.module, n.routes))))
          );
        }
      }
      class Bh {
        constructor(n, t, e = {}) {
          (this.router = n),
            (this.viewportScroller = t),
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
          return this.router.events.subscribe(n => {
            n instanceof ya
              ? ((this.store[this.lastId] = this.viewportScroller.getScrollPosition()),
                (this.lastSource = n.navigationTrigger),
                (this.restoredId = n.restoredState ? n.restoredState.navigationId : 0))
              : n instanceof wa &&
                ((this.lastId = n.id),
                this.scheduleScrollEvent(n, this.router.parseUrl(n.urlAfterRedirects).fragment));
          });
        }
        consumeScrollEvents() {
          return this.router.events.subscribe(n => {
            n instanceof Na &&
              (n.position
                ? 'top' === this.options.scrollPositionRestoration
                  ? this.viewportScroller.scrollToPosition([0, 0])
                  : 'enabled' === this.options.scrollPositionRestoration &&
                    this.viewportScroller.scrollToPosition(n.position)
                : n.anchor && 'enabled' === this.options.anchorScrolling
                ? this.viewportScroller.scrollToAnchor(n.anchor)
                : 'disabled' !== this.options.scrollPositionRestoration &&
                  this.viewportScroller.scrollToPosition([0, 0]));
          });
        }
        scheduleScrollEvent(n, t) {
          this.router.triggerEvent(
            new Na(n, 'popstate' === this.lastSource ? this.store[this.restoredId] : null, t)
          );
        }
        ngOnDestroy() {
          this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(),
            this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe();
        }
      }
      const Gh = new Sn('ROUTER_CONFIGURATION'),
        Kh = new Sn('ROUTER_FORROOT_GUARD'),
        Wh = [
          ro,
          { provide: ec, useClass: lc },
          {
            provide: Nh,
            useFactory: td,
            deps: [cs, ec, Uh, ro, Ot, ds, Vr, Oh, Gh, [Mh, new un()], [Eh, new un()]]
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
        constructor(n, t) {}
        static forRoot(n, t) {
          return {
            ngModule: Qh,
            providers: [
              Wh,
              nd(n),
              { provide: Kh, useFactory: Xh, deps: [[Nh, new un(), new cn()]] },
              { provide: Gh, useValue: t || {} },
              { provide: eo, useFactory: Jh, deps: [no, [new on(lo), new un()], Gh] },
              { provide: Bh, useFactory: Yh, deps: [Nh, vo, Gh] },
              { provide: $h, useExisting: t && t.preloadingStrategy ? t.preloadingStrategy : zh },
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
        static forChild(n) {
          return { ngModule: Qh, providers: [nd(n)] };
        }
      }
      function Yh(n, t, e) {
        return e.scrollOffset && t.setOffset(e.scrollOffset), new Bh(n, t, e);
      }
      function Jh(n, t, e = {}) {
        return e.useHash ? new io(n, t) : new oo(n, t);
      }
      function Xh(n) {
        if (n)
          throw new Error(
            'RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.'
          );
        return 'guarded';
      }
      function nd(n) {
        return [
          { provide: Vt, multi: !0, useValue: n },
          { provide: Oh, multi: !0, useValue: n }
        ];
      }
      function td(n, t, e, l, r, s, i, o, u = {}, a, c) {
        const h = new Nh(null, t, e, l, r, s, i, Ga(o));
        if (
          (a && (h.urlHandlingStrategy = a),
          c && (h.routeReuseStrategy = c),
          u.errorHandler && (h.errorHandler = u.errorHandler),
          u.malformedUriErrorHandler && (h.malformedUriErrorHandler = u.malformedUriErrorHandler),
          u.enableTracing)
        ) {
          const n = gu();
          h.events.subscribe(t => {
            n.logGroup(`Router Event: ${t.constructor.name}`),
              n.log(t.toString()),
              n.log(t),
              n.logGroupEnd();
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
      function ed(n) {
        return n.routerState.root;
      }
      class ld {
        constructor(n) {
          (this.injector = n),
            (this.initNavigation = !1),
            (this.resultOfPreactivationDone = new O());
        }
        appInitializer() {
          return this.injector.get(to, Promise.resolve(null)).then(() => {
            let n = null;
            const t = new Promise(t => (n = t)),
              e = this.injector.get(Nh),
              l = this.injector.get(Gh);
            if (this.isLegacyDisabled(l) || this.isLegacyEnabled(l)) n(!0);
            else if ('disabled' === l.initialNavigation) e.setUpLocationChangeListener(), n(!0);
            else {
              if ('enabled' !== l.initialNavigation)
                throw new Error(`Invalid initialNavigation options: '${l.initialNavigation}'`);
              (e.hooks.afterPreactivation = () =>
                this.initNavigation
                  ? xo(null)
                  : ((this.initNavigation = !0), n(!0), this.resultOfPreactivationDone)),
                e.initialNavigation();
            }
            return t;
          });
        }
        bootstrapListener(n) {
          const t = this.injector.get(Gh),
            e = this.injector.get(qh),
            l = this.injector.get(Bh),
            r = this.injector.get(Nh),
            s = this.injector.get(cs);
          n === s.components[0] &&
            (this.isLegacyEnabled(t)
              ? r.initialNavigation()
              : this.isLegacyDisabled(t) && r.setUpLocationChangeListener(),
            e.setUpPreloading(),
            l.init(),
            r.resetRootComponentType(s.componentTypes[0]),
            this.resultOfPreactivationDone.next(null),
            this.resultOfPreactivationDone.complete());
        }
        isLegacyEnabled(n) {
          return (
            'legacy_enabled' === n.initialNavigation ||
            !0 === n.initialNavigation ||
            void 0 === n.initialNavigation
          );
        }
        isLegacyDisabled(n) {
          return 'legacy_disabled' === n.initialNavigation || !1 === n.initialNavigation;
        }
      }
      function rd(n) {
        return n.appInitializer.bind(n);
      }
      function sd(n) {
        return n.bootstrapListener.bind(n);
      }
      const id = new Sn('Router Initializer');
      var od = He({ encapsulation: 2, styles: [], data: {} });
      function ud(n) {
        return Bs(
          0,
          [
            (n()(),
            Ts(0, 16777216, null, null, 1, 'router-outlet', [], null, null, null, null, null)),
            Ql(1, 212992, null, 0, jh, [Uh, Se, Qt, [8, null], xt], null, null)
          ],
          function(n, t) {
            n(t, 1, 0);
          },
          null
        );
      }
      function ad(n) {
        return Bs(
          0,
          [
            (n()(), Ts(0, 0, null, null, 1, 'ng-component', [], null, null, null, ud, od)),
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
            '[_nghost-%COMP%]{overflow:hidden;padding:0 10px}.slider-sm[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto 20px;text-align:center;overflow:hidden}.slider-sm__img[_ngcontent-%COMP%]{max-width:100%}@media (max-width:540px){.slider-sm__img[_ngcontent-%COMP%]{max-width:unset;height:200px}}'
          ]
        ],
        data: {}
      });
      function pd(n) {
        return Bs(
          0,
          [
            (n()(),
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
            (n()(),
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
      class gd {
        constructor() {}
        ngOnInit() {}
      }
      var fd = He({
        encapsulation: 0,
        styles: [
          [
            '*[_ngcontent-%COMP%]{box-sizing:border-box}.brands-sm[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto 20px}.title-wrapper[_ngcontent-%COMP%]{position:relative}.title-wrapper[_ngcontent-%COMP%]:after{content:"";background:#dcdcdc;position:absolute;left:0;top:50%;margin-top:-.5px;display:block;width:100%;height:1px;z-index:-1}.text[_ngcontent-%COMP%]{background:#fff;margin:15px 20px;padding:0 10px;display:inline-block;text-transform:uppercase;font-family:Arial,sans-serif;color:#494940}img[_ngcontent-%COMP%]{max-width:230px;width:100%}ul[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,auto);grid-gap:10px;padding:0 10px}@media (max-width:1200px){ul[_ngcontent-%COMP%]{grid-template-columns:repeat(3,auto)}}@media (max-width:800px){ul[_ngcontent-%COMP%]{grid-template-columns:repeat(2,auto)}}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:grid;align-content:center;padding:10px;background-color:#fafafa;border:1px solid #e0e0e0;box-shadow:inset 0 1px 1px #fff;border-radius:5px;-webkit-transition:.5s;transition:.5s}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{border:1px solid #ff4800;-webkit-transform:scale(1.03);transform:scale(1.03)}'
          ]
        ],
        data: {}
      });
      function md(n) {
        return Bs(
          0,
          [
            (n()(),
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
            (n()(),
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
            (n()(),
            Ts(2, 0, null, null, 2, 'h2', [['class', 'title']], null, null, null, null, null)),
            (n()(),
            Ts(3, 0, null, null, 1, 'span', [['class', 'text']], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, ['\u041d\u0430\u0448\u0438 \u0431\u0440\u0435\u043d\u0434\u044b'])),
            (n()(), Ts(5, 0, null, null, 24, 'ul', [], null, null, null, null, null)),
            (n()(), Ts(6, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (n()(), Ts(7, 0, null, null, 1, 'a', [['href', '']], null, null, null, null, null)),
            (n()(),
            Ts(
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
            (n()(), Ts(9, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (n()(), Ts(10, 0, null, null, 1, 'a', [['href', '']], null, null, null, null, null)),
            (n()(),
            Ts(
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
            (n()(), Ts(12, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (n()(), Ts(13, 0, null, null, 1, 'a', [['href', '']], null, null, null, null, null)),
            (n()(),
            Ts(
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
            (n()(), Ts(15, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (n()(), Ts(16, 0, null, null, 1, 'a', [['href', '']], null, null, null, null, null)),
            (n()(),
            Ts(
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
            (n()(), Ts(18, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (n()(), Ts(19, 0, null, null, 1, 'a', [['href', '']], null, null, null, null, null)),
            (n()(),
            Ts(
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
            (n()(), Ts(21, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (n()(), Ts(22, 0, null, null, 1, 'a', [['href', '']], null, null, null, null, null)),
            (n()(),
            Ts(
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
            (n()(), Ts(24, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (n()(), Ts(25, 0, null, null, 1, 'a', [['href', '']], null, null, null, null, null)),
            (n()(),
            Ts(
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
            (n()(), Ts(27, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (n()(), Ts(28, 0, null, null, 1, 'a', [['href', '']], null, null, null, null, null)),
            (n()(),
            Ts(
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
      function yd(n) {
        return Bs(
          0,
          [
            (n()(), Ts(0, 0, null, null, 21, 'div', [], null, null, null, null, null)),
            (n()(), Ts(1, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              ' \u041f\u0440\u0435\u0436\u0434\u0435 \u0447\u0435\u043c \u043a\u0443\u043f\u0438\u0442\u044c \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f, \u0436\u0435\u043b\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u043f\u0440\u043e\u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0441\u043e \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u0430\u043c\u0438. \u0420\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0438 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 \u041e\u041e\u041e \xab\u0414\u041c\u0414 \u0441\u0438\u0441\u0442\u0435\u043c\u0441\xbb \u0434\u0430\u0434\u0443\u0442 \u0441\u043e\u0432\u0435\u0442\u044b \u0438 \u043f\u043e\u043c\u043e\u0433\u0443\u0442 \u043f\u043e\u0434\u043e\u0431\u0440\u0430\u0442\u044c \u0430\u043f\u043f\u0430\u0440\u0430\u0442\u0443\u0440\u0443. \u042d\u043a\u0441\u043f\u0435\u0440\u0442\u044b \u043f\u0440\u043e\u0434\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0438\u0440\u0443\u044e\u0442 \u0438\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u043e\u0434\u0445\u043e\u0434 \u043a \u043a\u0430\u0436\u0434\u043e\u043c\u0443 \u043a\u043b\u0438\u0435\u043d\u0442\u0443. '
            ])),
            (n()(), Ts(3, 0, null, null, 1, 'h3', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              ' \u0421\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u0447\u0430\u044f \u0441 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0435\u0439 \u041e\u041e\u041e \xab\u0414\u041c\u0414 \u0441\u0438\u0441\u0442\u0435\u043c\u0441\xbb, \u0432\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u0442\u0430\u043a\u0438\u0435 \u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430: '
            ])),
            (n()(),
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
            (n()(), Ts(6, 0, null, null, 1, 'li', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430;'
            ])),
            (n()(), Ts(8, 0, null, null, 1, 'li', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u043e\u0440\u0438\u0433\u0438\u043d\u0430\u043b\u044c\u043d\u043e\u0439 \u0442\u0435\u0445\u043d\u0438\u043a\u0438;'
            ])),
            (n()(), Ts(10, 0, null, null, 1, 'li', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u043d\u0435\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043d\u044b\u0439 \u0432\u044b\u0431\u043e\u0440 \u0430\u043f\u043f\u0430\u0440\u0430\u0442\u0443\u0440\u044b;'
            ])),
            (n()(), Ts(12, 0, null, null, 1, 'li', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u0433\u0430\u0440\u0430\u043d\u0442\u0438\u044f \u0438 \u0441\u0435\u0440\u0432\u0438\u0441.'
            ])),
            (n()(), Ts(14, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              ' \u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u043c\u043e\u0434\u0435\u043b\u0438 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f. \u041a\u043b\u0438\u0435\u043d\u0442\u0443 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0430\u0442 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438 \u0430\u043f\u043f\u0430\u0440\u0430\u0442\u0443\u0440\u0443, \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u0443\u044e \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0446\u0438\u0444\u0440\u043e\u0432\u044b\u0445 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439. '
            ])),
            (n()(), Ts(16, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              ' \u041e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u043b\u044f \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f \u043e\u0442\u043b\u0438\u0447\u0430\u0435\u0442\u0441\u044f \u043f\u0440\u043e\u0441\u0442\u043e\u0442\u043e\u0439 \u044d\u043a\u0441\u043f\u043b\u0443\u0430\u0442\u0430\u0446\u0438\u0438. \u0427\u0435\u043b\u043e\u0432\u0435\u043a\u0443 \u043d\u0435 \u043f\u043e\u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u043c\u043d\u043e\u0433\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438, \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u0443\u0447\u0438\u0442\u044c\u0441\u044f \u0435\u0433\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c. \u041a\u0430\u0436\u0434\u0430\u044f \u043a\u0430\u043c\u0435\u0440\u0430 \u0438\u043c\u0435\u0435\u0442 \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0443\u044e \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044e, \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u043d\u0443\u044e \u043d\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u043c \u044f\u0437\u044b\u043a\u0435. '
            ])),
            (n()(), Ts(18, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              ' \u0420\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0438 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 \u041e\u041e\u041e \xab\u0414\u041c\u0414 \u0441\u0438\u0441\u0442\u0435\u043c\u0441\xbb \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u044b \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442 \u043e\u0445\u0440\u0430\u043d\u043d\u043e\u0433\u043e \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u0430 \u0434\u043b\u044f \u043b\u044e\u0431\u043e\u0439 \u0442\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u0438. \u041f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0437\u0430\u0434\u0430\u043d\u0438\u044f \u043c\u0430\u0441\u0442\u0435\u0440\u0430 \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u044e\u0442 \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0443 \u043e\u0431\u044a\u0435\u043a\u0442\u0430. \u041d\u0430\u0448\u0438 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u044b \u043f\u043e\u0434\u0431\u0435\u0440\u0443\u0442 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0435\u0435 \u043c\u0435\u0441\u0442\u043e, \u0447\u0442\u043e\u0431\u044b \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0438\u0442\u044c \u043a\u0430\u043c\u0435\u0440\u044b. '
            ])),
            (n()(), Ts(20, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              ' \u0412\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0435 \u043f\u043e\u0434 \u043a\u043b\u044e\u0447 \u0443\u0434\u0438\u0432\u0438\u0442 \u0432\u0430\u0441 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u044c\u044e \u0446\u0435\u043d. '
            ]))
          ],
          null,
          null
        );
      }
      function wd(n) {
        return Bs(
          0,
          [
            (n()(),
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
            (n()(),
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
            (n()(),
            Ts(2, 0, null, null, 2, 'h2', [['class', 'title']], null, null, null, null, null)),
            (n()(),
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
            (n()(), Hs(-1, null, ['\u041e \u041a\u043e\u043c\u043f\u0430\u043d\u0438\u0438'])),
            (n()(),
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
            (n()(),
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
            (n()(), Ts(7, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              ' \u041e\u041e\u041e "\u0414\u041c\u0414 \u0441\u0438\u0441\u0442\u0435\u043c\u044f" \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u043d\u043e \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u044e\u0449\u0430\u044f\u0441\u044f \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f. \u041c\u044b \u0440\u0430\u0434\u044b \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u0442\u044c \u0412\u0430\u043c \u0448\u0438\u0440\u043e\u043a\u0438\u0439 \u0441\u043f\u0435\u043a\u0442\u0440 \u043e\u0445\u0440\u0430\u043d\u043d\u044b\u0445 \u0441\u0438\u0441\u0442\u0435\u043c, \u0430 \u0442\u0430\u043a \u0436\u0435 \u0432\u0435\u0441\u044c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0439 \u043f\u0435\u0440\u0435\u0447\u0435\u043d\u044c \u0443\u0441\u043b\u0443\u0433. \u041f\u043e\u0437\u0432\u043e\u043d\u0438\u0432 \u043d\u0430\u043c \u0412\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0443\u044e \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u044e, \u0438\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u043e\u0434\u0445\u043e\u0434 \u0438 \u0433\u0438\u0431\u043a\u0443\u044e \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u0441\u043a\u0438\u0434\u043e\u043a. '
            ])),
            (n()(), Ts(9, 0, null, null, 1, 'h3', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u041f\u043e\u043a\u0443\u043f\u043a\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f \u0432 \u041c\u0438\u043d\u0441\u043a\u0435'
            ])),
            (n()(), Ts(11, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              ' \u0427\u0442\u043e\u0431\u044b \u043a\u0443\u043f\u0438\u0442\u044c \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0435 \u0432 \u041c\u0438\u043d\u0441\u043a\u0435, \u0433\u043e\u0440\u043e\u0436\u0430\u043d\u0435 \u043e\u0431\u0440\u0430\u0449\u0430\u044e\u0442\u0441\u044f \u043a \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043b\u044f\u043c \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 \u041e\u041e\u041e \xab\u0414\u041c\u0414 \u0441\u0438\u0441\u0442\u0435\u043c\u0441\xbb. \u0414\u0430\u043d\u043d\u0430\u044f \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0434\u0430\u0435\u0442 \u0438 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u0435\u0442 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438. \u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f \u041e\u041e\u041e \xab\u0414\u041c\u0414 \u0441\u0438\u0441\u0442\u0435\u043c\u0441\xbb \u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0431\u043e\u043b\u044c\u0448\u0438\u043c \u0443\u0432\u0430\u0436\u0435\u043d\u0438\u0435\u043c \u0441\u0442\u043e\u043b\u0438\u0447\u043d\u044b\u0445 \u0436\u0438\u0442\u0435\u043b\u0435\u0439. \u0411\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f \u0440\u0430\u0431\u043e\u0442\u0435 \u044d\u0442\u043e\u0439 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438, \u0443 \u043b\u044e\u0434\u0435\u0439 \u043f\u043e\u044f\u0432\u0438\u043b\u0441\u044f \u0448\u0430\u043d\u0441 \u0437\u0430\u0449\u0438\u0442\u0438\u0442\u044c \u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u043e \u043e\u0442 \u0437\u043b\u043e\u0443\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u0438\u043a\u043e\u0432. '
            ])),
            (n()(), Ts(13, 0, null, null, 1, 'h3', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              ' \u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0441\u0438\u0441\u0442\u0435\u043c \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f '
            ])),
            (n()(), Ts(15, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              ' \u0421\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430 \u0434\u043b\u044f \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u044e\u0442\u0441\u044f \u0432\u043e \u0432\u0441\u0435\u0445 \u0441\u0444\u0435\u0440\u0430\u0445 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438. \u041a\u0430\u043c\u0435\u0440\u044b \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u043d\u0430 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0445 \u0441\u0442\u043e\u044f\u043d\u043a\u0430\u0445 \u0438 \u0434\u0430\u0447\u043d\u044b\u0445 \u0443\u0447\u0430\u0441\u0442\u043a\u0430\u0445. \u042d\u0442\u043e \u043f\u043e\u043c\u043e\u0433\u0430\u0435\u0442 \u044d\u043a\u043e\u043d\u043e\u043c\u0438\u0442\u044c \u0434\u0435\u043d\u0435\u0436\u043d\u044b\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430. \u0412\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u044b \u0441\u0443\u043f\u0435\u0440\u043c\u0430\u0440\u043a\u0435\u0442\u043e\u0432 \u0443\u043c\u0435\u043d\u044c\u0448\u0430\u044e\u0442 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u043e\u0432 \u043f\u043e\u0441\u043b\u0435 \u043f\u043e\u043a\u0443\u043f\u043a\u0438 \u043e\u0445\u0440\u0430\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f. \u041f\u0440\u0435\u0434\u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u0435\u043b\u044f\u043c \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0435 \u043f\u0440\u0438\u0434\u0435\u0442\u0441\u044f \u043d\u0430\u0434\u0435\u044f\u0442\u044c\u0441\u044f \u043d\u0430 \u0447\u0435\u0441\u0442\u043d\u043e\u0441\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u043e\u0432. \u041a\u0430\u043c\u0435\u0440\u0430 \u0431\u0443\u0434\u0435\u0442 \u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u044f\u0449\u0438\u0435 \u043d\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f. \u041d\u0438 \u043e\u0434\u0438\u043d \u0447\u0435\u043b\u043e\u0432\u0435\u043a, \u043f\u0440\u043e\u043d\u0438\u043a\u0448\u0438\u0439 \u043d\u0430 \u043e\u0445\u0440\u0430\u043d\u044f\u0435\u043c\u0443\u044e \u0442\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u044e, \u043d\u0435 \u043e\u0441\u0442\u0430\u043d\u0435\u0442\u0441\u044f \u043d\u0435\u0437\u0430\u043c\u0435\u0447\u0435\u043d\u043d\u044b\u043c. ... '
            ])),
            (n()(), Ms(16777216, null, null, 1, null, yd)),
            Ql(18, 16384, null, 0, po, [Se, ke], { ngIf: [0, 'ngIf'] }, null),
            (n()(),
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
              function(n, t, e) {
                var l = !0,
                  r = n.component;
                return 'click' === t && (l = 0 != (r.isVisible = !r.isVisible) && l), l;
              },
              null,
              null
            )),
            (n()(),
            Hs(-1, null, [
              '\u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c / \u0441\u043a\u0440\u044b\u0442\u044c'
            ])),
            (n()(),
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
                ['src', 'assets/img/about-company/1.png']
              ],
              null,
              null,
              null,
              null,
              null
            ))
          ],
          function(n, t) {
            n(t, 18, 0, t.component.isVisible);
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
            '*[_ngcontent-%COMP%]{box-sizing:border-box}.section[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto 20px}.title-wrapper[_ngcontent-%COMP%]{position:relative}.title-wrapper[_ngcontent-%COMP%]:after{content:"";background:#dcdcdc;position:absolute;left:0;top:50%;margin-top:-.5px;display:block;width:100%;height:1px;z-index:-1}.title__text[_ngcontent-%COMP%]{background:#fff;margin:15px 20px;padding:0 10px;display:inline-block;text-transform:uppercase;font-family:Arial,sans-serif;color:#494940}.content__list[_ngcontent-%COMP%]{padding:0 10px;display:grid;grid-template-columns:repeat(4,auto);-webkit-column-gap:10px;-moz-column-gap:10px;column-gap:10px}@media (max-width:760px){.content__list[_ngcontent-%COMP%]{grid-template-columns:repeat(2,auto)}}@media (max-width:450px){.content__list[_ngcontent-%COMP%]{grid-template-columns:1fr}}.item[_ngcontent-%COMP%]{text-align:center;display:grid;padding:20px 10px 0;border:1px solid #fff;border-radius:5px}.item[_ngcontent-%COMP%]   .item__title[_ngcontent-%COMP%]{grid-row:2;margin:20px 0 10px}.item[_ngcontent-%COMP%]   .item__svg[_ngcontent-%COMP%]{grid-row:1;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;width:124px;height:124px;border:2px solid #e9e9e9;border-radius:50%;margin:0 auto;background-color:#f4f4f4}.item[_ngcontent-%COMP%]   .svg[_ngcontent-%COMP%]{width:60px;height:60px;fill:#494940}.item[_ngcontent-%COMP%]:hover{-webkit-transition:1s;transition:1s;background-color:#fafafa;border:1px solid #e0e0e0}.item[_ngcontent-%COMP%]:hover   .item__svg[_ngcontent-%COMP%]{-webkit-transition:.25s;transition:.25s;background-color:#fff4ef;border:2px solid #ff8352}.item[_ngcontent-%COMP%]:hover   .svg[_ngcontent-%COMP%]{-webkit-transition:.25s;transition:.25s;fill:#c23801}'
          ]
        ],
        data: {}
      });
      function xd(n) {
        return Bs(
          0,
          [
            (n()(),
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
            (n()(),
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
            (n()(),
            Ts(2, 0, null, null, 2, 'h2', [['class', 'title']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
            Hs(-1, null, [
              '\u0421\u0438\u0441\u0442\u0435\u043c\u044b \u043e\u0445\u0440\u0430\u043d\u044b \u0438 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438'
            ])),
            (n()(),
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
            (n()(),
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
            (n()(),
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
            (n()(),
            Ts(8, 0, null, null, 7, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
            Hs(-1, null, [
              '\u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0430\u0441\u0441\u043e\u0440\u0442\u0438\u043c\u0435\u043d\u0442'
            ])),
            (n()(),
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
            (n()(),
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
            (n()(),
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
            (n()(),
            Ts(14, 0, null, null, 1, 'p', [['class', 'item__text']], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              ' \u041f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e\u0435 \u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u0448\u0438\u0440\u043e\u043a\u043e\u0433\u043e \u0430\u0441\u0441\u043e\u0440\u0442\u0438\u043c\u0435\u043d\u0442\u0430 \u043d\u0430 \u0441\u043a\u043b\u0430\u0434\u0435, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0441\u0432\u043e\u0435\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e \u043f\u043e\u0441\u0442\u0430\u0432\u043a\u0443 \u043f\u043e\u0434 \u0437\u0430\u043a\u0430\u0437. '
            ])),
            (n()(),
            Ts(16, 0, null, null, 7, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
            Hs(-1, null, [
              '\u0422\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430'
            ])),
            (n()(),
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
            (n()(),
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
            (n()(),
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
            (n()(),
            Ts(22, 0, null, null, 1, 'p', [['class', 'item__text']], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              ' \u041e\u043f\u0442\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u043f\u043e \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044e \u0441\u0438\u0441\u0442\u0435\u043c \u043e\u0445\u0440\u0430\u043d\u044b \u043d\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u0435 \u043b\u044e\u0431\u043e\u0439 \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u0438. '
            ])),
            (n()(),
            Ts(24, 0, null, null, 7, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
            Hs(-1, null, [
              '\u041a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u0438'
            ])),
            (n()(),
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
            (n()(),
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
            (n()(),
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
            (n()(),
            Ts(30, 0, null, null, 1, 'p', [['class', 'item__text']], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              ' \u0418\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u043e\u0434\u0445\u043e\u0434 \u0438 \u0434\u0435\u0442\u0430\u043b\u044c\u043d\u0443\u044e \u043f\u0440\u043e\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0437\u0430\u0434\u0430\u043d\u0438\u044f \u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u0430. '
            ])),
            (n()(),
            Ts(32, 0, null, null, 7, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
            Hs(-1, null, [
              '\u0413\u0430\u0440\u0430\u043d\u0442\u0438\u044f \u0438 \u0441\u0435\u0440\u0432\u0438\u0441'
            ])),
            (n()(),
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
            (n()(),
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
            (n()(),
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
            (n()(),
            Ts(38, 0, null, null, 1, 'p', [['class', 'item__text']], null, null, null, null, null)),
            (n()(),
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
      function Sd(n) {
        return Bs(
          0,
          [
            (n()(), Ts(0, 0, null, null, 8, null, null, null, null, null, null, null)),
            (n()(), Ts(1, 0, null, null, 1, 'app-slider-sm', [], null, null, null, pd, dd)),
            Ql(2, 114688, null, 0, hd, [], null, null),
            (n()(), Ts(3, 0, null, null, 1, 'app-brands-sm', [], null, null, null, md, fd)),
            Ql(4, 114688, null, 0, gd, [], null, null),
            (n()(), Ts(5, 0, null, null, 1, 'app-about-company', [], null, null, null, wd, vd)),
            Ql(6, 114688, null, 0, _d, [], null, null),
            (n()(),
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
          function(n, t) {
            n(t, 2, 0), n(t, 4, 0), n(t, 6, 0), n(t, 8, 0);
          },
          null
        );
      }
      function Od(n) {
        return Bs(
          0,
          [
            (n()(), Ts(0, 0, null, null, 1, 'app-page-home', [], null, null, null, Sd, Ed)),
            Ql(1, 114688, null, 0, kd, [], null, null)
          ],
          function(n, t) {
            n(t, 1, 0);
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
      function Ad(n) {
        return Bs(
          0,
          [
            (n()(),
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
            (n()(),
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
            (n()(),
            Ts(2, 0, null, null, 2, 'h2', [['class', 'title']], null, null, null, null, null)),
            (n()(),
            Ts(3, 0, null, null, 1, 'span', [['class', 'text']], null, null, null, null, null)),
            (n()(), Hs(-1, null, ['\u041a\u0430\u0442\u0430\u043b\u043e\u0433'])),
            (n()(),
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
            (n()(),
            Ts(6, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
            Ts(
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
            (n()(), Ts(9, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u0421\u0438\u0441\u0442\u0435\u043c\u044b \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f'
            ])),
            (n()(),
            Ts(11, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
            Ts(
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
            (n()(), Ts(14, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u041a\u043e\u043d\u0442\u0440\u043e\u043b\u044c \u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043e\u043c'
            ])),
            (n()(),
            Ts(16, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
            Ts(
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
            (n()(), Ts(19, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u0412\u0438\u0434\u0435\u043e\u0434\u043e\u043c\u043e\u0444\u043e\u043d\u044b'
            ])),
            (n()(),
            Ts(21, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
            Ts(
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
            (n()(), Ts(24, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u0421\u0435\u0442\u0435\u0432\u043e\u0435 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435'
            ])),
            (n()(),
            Ts(26, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
            Ts(
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
            (n()(), Ts(29, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0438 \u043f\u0438\u0442\u0430\u043d\u0438\u044f'
            ])),
            (n()(),
            Ts(31, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
            Ts(
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
            (n()(), Ts(34, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), Hs(-1, null, ['\u0423\u043c\u043d\u044b\u0439 \u0434\u043e\u043c'])),
            (n()(),
            Ts(36, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
            Ts(
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
            (n()(), Ts(39, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              'GSM \u0441\u0438\u0433\u043d\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f'
            ])),
            (n()(),
            Ts(41, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
            Ts(
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
            (n()(), Ts(44, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u0423\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430 \u0440\u0430\u0434\u0438\u043e\u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f'
            ])),
            (n()(),
            Ts(46, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
            Ts(
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
            (n()(), Ts(49, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
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
      function Nd(n) {
        return Bs(
          0,
          [
            (n()(), Ts(0, 0, null, null, 1, 'app-catalog', [], null, null, null, Ad, Td)),
            Ql(1, 114688, null, 0, Md, [], null, null)
          ],
          function(n, t) {
            n(t, 1, 0);
          },
          null
        );
      }
      function Vd(n) {
        return Bs(
          0,
          [
            (n()(), Ts(0, 0, null, null, 1, 'app-page-catalog', [], null, null, null, Nd, Rd)),
            Ql(1, 114688, null, 0, Id, [], null, null)
          ],
          function(n, t) {
            n(t, 1, 0);
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
      function jd(n) {
        return Bs(
          0,
          [
            (n()(), Ts(0, 0, null, null, 1, 'app-about-company', [], null, null, null, wd, vd)),
            Ql(1, 114688, null, 0, _d, [], null, null),
            (n()(),
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
          function(n, t) {
            n(t, 1, 0), n(t, 3, 0);
          },
          null
        );
      }
      function Fd(n) {
        return Bs(
          0,
          [
            (n()(), Ts(0, 0, null, null, 1, 'app-page-about', [], null, null, null, jd, Ud)),
            Ql(1, 114688, null, 0, Ld, [], null, null)
          ],
          function(n, t) {
            n(t, 1, 0);
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
            '.section[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto 20px}.title-wrapper[_ngcontent-%COMP%]{position:relative}.title-wrapper[_ngcontent-%COMP%]:after{content:"";background:#dcdcdc;position:absolute;left:0;top:50%;margin-top:-.5px;display:block;width:100%;height:1px;z-index:-1}.text[_ngcontent-%COMP%]{background:#fff;margin:15px 20px;padding:0 10px;display:inline-block;text-transform:uppercase;font-family:Arial,sans-serif;color:#494940}img[_ngcontent-%COMP%]{max-width:230px;width:100%}.svg[_ngcontent-%COMP%]{margin:5px 10px;width:50px;height:50px;fill:currentColor}.catalog_list[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,auto);grid-gap:10px;padding:0 10px}.catalog_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{display:grid;padding:10px;background-color:#fafafa;border:1px solid #e0e0e0;box-shadow:inset 0 1px 1px #fff;border-radius:5px;-webkit-transition:.5s;transition:.5s}.catalog_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover{border:1px solid #ff4800;-webkit-transform:scale(1.03);transform:scale(1.03)}.catalog_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{display:grid;justify-items:center}.catalog_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{align-self:end;justify-self:center}.catalog_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{align-self:center}.box[_ngcontent-%COMP%]{padding:0 10px;display:grid;grid-template-columns:auto 300px}@media (max-width:600px){.box[_ngcontent-%COMP%]{grid-template-columns:auto}}.box_guaranty[_ngcontent-%COMP%]{padding:0 10px;color:#525252}.list_options[_ngcontent-%COMP%]{display:-webkit-box;display:flex;flex-flow:wrap}.list_options[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:10px}@media (max-width:800px){.list_options[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center}}.list_aside[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.list_aside[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}@media (max-width:800px){.list_aside[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center}.list_aside[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}}'
          ]
        ],
        data: {}
      });
      function qd(n) {
        return Bs(
          0,
          [
            (n()(),
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
            (n()(),
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
            (n()(),
            Ts(2, 0, null, null, 2, 'h2', [['class', 'title']], null, null, null, null, null)),
            (n()(),
            Ts(3, 0, null, null, 1, 'span', [['class', 'text']], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u0442\u0435\u0445.\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430'
            ])),
            (n()(),
            Ts(5, 0, null, null, 50, 'div', [['class', 'box']], null, null, null, null, null)),
            (n()(),
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
            (n()(), Ts(7, 0, null, null, 5, 'li', [], null, null, null, null, null)),
            (n()(), Ts(8, 0, null, null, 4, 'a', [['href', '']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
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
            (n()(), Ts(11, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u043f\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0435'
            ])),
            (n()(), Ts(13, 0, null, null, 5, 'li', [], null, null, null, null, null)),
            (n()(), Ts(14, 0, null, null, 4, 'a', [['href', '']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
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
            (n()(), Ts(17, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u041f\u0440\u043e\u0448\u0438\u0432\u043a\u0438 \u0438 \u041f\u041e \u0441\u043a\u0430\u0447\u0430\u0442\u044c \u0441 FTP'
            ])),
            (n()(), Ts(19, 0, null, null, 5, 'li', [], null, null, null, null, null)),
            (n()(), Ts(20, 0, null, null, 4, 'a', [['href', '']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
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
            (n()(), Ts(23, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u0413\u0430\u0440\u0430\u043d\u0442\u0438\u044f \u0438 \u0440\u0435\u043c\u043e\u043d\u0442'
            ])),
            (n()(), Ts(25, 0, null, null, 5, 'li', [], null, null, null, null, null)),
            (n()(), Ts(26, 0, null, null, 4, 'a', [['href', '']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
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
            (n()(), Ts(29, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b \u0442\u0435\u0445\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438'
            ])),
            (n()(), Ts(31, 0, null, null, 5, 'li', [], null, null, null, null, null)),
            (n()(), Ts(32, 0, null, null, 4, 'a', [['href', '']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
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
            (n()(), Ts(35, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u0414\u0435\u043a\u043b\u0430\u0440\u0430\u0446\u0438\u044f \u043e \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438'
            ])),
            (n()(),
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
            (n()(), Ts(38, 0, null, null, 5, 'li', [], null, null, null, null, null)),
            (n()(), Ts(39, 0, null, null, 4, 'a', [['href', '']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
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
            (n()(), Ts(42, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440\u044b'
            ])),
            (n()(), Ts(44, 0, null, null, 5, 'li', [], null, null, null, null, null)),
            (n()(), Ts(45, 0, null, null, 4, 'a', [['href', '']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
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
            (n()(), Ts(48, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u043a\u0430\u0442\u0430\u043b\u043e\u0433 \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u0438'
            ])),
            (n()(), Ts(50, 0, null, null, 5, 'li', [], null, null, null, null, null)),
            (n()(), Ts(51, 0, null, null, 4, 'a', [['href', '']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
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
            (n()(), Ts(54, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u043f\u0440\u0430\u0439\u0441-\u043b\u0438\u0441\u0442'
            ])),
            (n()(),
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
            (n()(),
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
            (n()(),
            Ts(58, 0, null, null, 2, 'h2', [['class', 'title']], null, null, null, null, null)),
            (n()(),
            Ts(59, 0, null, null, 1, 'span', [['class', 'text']], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u0413\u0430\u0440\u0430\u043d\u0442\u0438\u044f \u0438 \u0440\u0435\u043c\u043e\u043d\u0442'
            ])),
            (n()(),
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
            (n()(), Ts(62, 0, null, null, 1, 'h3', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u0432 \u0440\u0435\u043c\u043e\u043d\u0442'
            ])),
            (n()(), Ts(64, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              ' \u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f \u0432 \u0440\u0435\u043c\u043e\u043d\u0442 (\u0432 \u0442\u043e\u043c \u0447\u0438\u0441\u043b\u0435 \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0439\u043d\u044b\u0439) \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0437\u0430 \u0441\u0447\u0435\u0442 \u041a\u043b\u0438\u0435\u043d\u0442\u0430. \u041e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0437\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0443 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f \u0432 \u0421\u0435\u0440\u0432\u0438\u0441\u043d\u044b\u0439 \u0446\u0435\u043d\u0442\u0440 Optimus \u043d\u0435\u0441\u0435\u0442 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u0435\u043b\u044c. '
            ])),
            (n()(), Ts(66, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              ' \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0438 \u0432\u043b\u043e\u0436\u0438\u0442\u044c \u0410\u043a\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f \u0432 \u0440\u0435\u043c\u043e\u043d\u0442. '
            ])),
            (n()(), Ts(68, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              ' \u041e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442\u0441\u044f \u0432 \u0447\u0438\u0441\u0442\u043e\u043c \u0432\u0438\u0434\u0435 \u0441 \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u0435\u043c: '
            ])),
            (n()(), Ts(70, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              ' - \u0434\u0435\u0444\u0435\u043a\u0442\u043e\u0432 \u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u0439 \u0438\u0445 \u043f\u0440\u043e\u044f\u0432\u043b\u0435\u043d\u0438\u044f; '
            ])),
            (n()(), Ts(72, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              ' - \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0442\u043d\u043e\u0441\u0442\u044c \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f; '
            ])),
            (n()(), Ts(74, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              ' - \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u043e\u0435 \u043b\u0438\u0446\u043e \u0441 \u043d\u043e\u043c\u0435\u0440\u043e\u043c \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u043e\u0433\u043e \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430. '
            ])),
            (n()(), Ts(76, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              ' \u041f\u0440\u0438 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0438 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u0434\u0435\u0444\u0435\u043a\u0442\u0430\u0445 \u0422\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0426\u0435\u043d\u0442\u0440 \u0432\u043f\u0440\u0430\u0432\u0435 \u043e\u0442\u043a\u0430\u0437\u0430\u0442\u044c \u0432 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u0438 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f. \u0422\u0430\u043a\u0436\u0435 \u043d\u0435 \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0440\u0435\u043c\u043e\u043d\u0442 \u043d\u0435\u0438\u0441\u043f\u0440\u0430\u0432\u043d\u043e\u0441\u0442\u0435\u0439 \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0445 \u0432 \u0430\u043a\u0442\u0435. '
            ])),
            (n()(), Ts(78, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              ' \u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u0430 \u043a\u0430\u043a \u0447\u0435\u0440\u0435\u0437 \u0434\u0438\u043b\u0435\u0440\u0430, \u0443 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0431\u044b\u043b\u043e \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0442\u0435\u043d\u043e \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435, \u0442\u0430\u043a \u0438 \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e, \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0422\u041a. '
            ])),
            (n()(), Ts(80, 0, null, null, 1, 'h3', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e:'
            ])),
            (n()(), Ts(82, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              ' \u0413\u0430\u0440\u0430\u043d\u0442\u0438\u044f \u043d\u0430 \u0432\u0441\u0435 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435 Optimus 37 \u043c\u0435\u0441\u044f\u0446\u0435\u0432 '
            ])),
            (n()(), Ts(84, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              ' \u0420\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u0432 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0430\u0445 \u0442\u043e\u0432\u0430\u0440\u043e\u0432 \u043d\u0430 \u0432\u043a\u043b\u0430\u0434\u043a\u0435 \u0424\u0430\u0439\u043b\u044b \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f \u0432 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0435 \u0441\u0430\u0439\u0442\u0430 '
            ])),
            (n()(), Ts(86, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              ' \u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f \u0432 \u0440\u0435\u043c\u043e\u043d\u0442 (\u0432 \u0442\u043e\u043c \u0447\u0438\u0441\u043b\u0435 \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0439\u043d\u044b\u0439) \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0437\u0430 \u0441\u0447\u0435\u0442 \u041a\u043b\u0438\u0435\u043d\u0442\u0430. \u041e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0437\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0443 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f \u0432 \u0421\u0435\u0440\u0432\u0438\u0441\u043d\u044b\u0439 \u0446\u0435\u043d\u0442\u0440 Optimus \u043d\u0435\u0441\u0435\u0442 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u0435\u043b\u044c. '
            ])),
            (n()(), Ts(88, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              ' \u041f\u043e \u0432\u043e\u043f\u0440\u043e\u0441\u0430\u043c \u0440\u0435\u043c\u043e\u043d\u0442\u0430 (\u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430, \u043f\u0440\u043e\u0434\u0435\u043b\u0430\u043d\u043d\u043e\u0433\u043e \u0440\u0435\u043c\u043e\u043d\u0442\u0430) \u0438 \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0439\u043d\u043e\u0433\u043e \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u044f \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044c \u0432 \u0441\u0435\u0440\u0432\u0438\u0441\u043d\u044b\u0439 \u0446\u0435\u043d\u0442\u0440: '
            ])),
            (n()(), Ts(90, 0, null, null, 1, 'h3', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u041d\u0430 \u0442\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u0438 \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0438 \u0411\u0435\u043b\u0430\u0440\u0443\u0441\u044c:'
            ])),
            (n()(), Ts(92, 0, null, null, 1, 'strong', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u0427\u041f \u201c\u041c\u043e\u0431\u0438\u041b\u0410\u0411 \u0421\u0426\u201d, \u0433. \u041c\u0438\u043d\u0441\u043a'
            ])),
            (n()(), Ts(94, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), Hs(-1, null, ['\u041f\u043e\u0447\u0442\u0430: info@mobilab.by'])),
            (n()(), Ts(96, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), Hs(-1, null, ['\u0421\u0430\u0439\u0442: www.mobilab.by'])),
            (n()(), Ts(98, 0, null, null, 23, 'strong', [], null, null, null, null, null)),
            (n()(), Ts(99, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              ' \u0426\u0435\u043d\u0442\u0440 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u044f \u044e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043b\u0438\u0446 \u0438 \u0418\u041f(\u0442\u043e\u0440\u0433\u0443\u044e\u0449\u0438\u0435 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438) \u0422\u0435\u043b\u0435\u0444\u043e\u043d: '
            ])),
            (n()(), Ts(101, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), Hs(-1, null, [' +375 (17) 362 76 84 (\u0433\u043e\u0440.) '])),
            (n()(), Hs(-1, null, [' +375 (33) 333 23 23 (\u041c\u0422\u0421) '])),
            (n()(), Ts(104, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), Hs(-1, null, [' +375 (44) 7 751 751 (Velcom) '])),
            (n()(), Ts(106, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              ' \u0410\u0434\u0440\u0435\u0441: \u041c\u0438\u043d\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d \u041d\u043e\u0432\u043e\u0434\u0432\u043e\u0440\u0441\u043a\u0438\u0439 \u0441/\u0441 33/1-8, \u0440\u0430\u0439\u043e\u043d \u0434. \u0411\u043e\u043b\u044c\u0448\u043e\u0435 \u0421\u0442\u0438\u043a\u043b\u0435\u0432\u043e '
            ])),
            (n()(), Ts(108, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              ' \u0412\u0440\u0435\u043c\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 9 \u0434\u043e 18.30 \u043f\u043e \u043c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u043e\u043c\u0443 \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0432 \u0440\u0430\u0431\u043e\u0447\u0438\u0435 \u0434\u043d\u0438 '
            ])),
            (n()(), Ts(110, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              ' \u0426\u0435\u043d\u0442\u0440 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u044f \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043b\u0438\u0446(\u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u0438) '
            ])),
            (n()(), Ts(112, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), Hs(-1, null, [' \u0422\u0435\u043b\u0435\u0444\u043e\u043d: '])),
            (n()(), Ts(114, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), Hs(-1, null, [' +375 (29) 272 22 21 (\u041c\u0422\u0421) '])),
            (n()(), Ts(116, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), Hs(-1, null, [' +375 (29) 136 66 69 (Velcom) '])),
            (n()(), Ts(118, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              ' \u0410\u0434\u0440\u0435\u0441: \u043f\u0440. \u041d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438, \u0434. 46 \u0411, \u043f\u043e\u043c. 1-\u041d '
            ])),
            (n()(), Ts(120, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              ' \u0412\u0440\u0435\u043c\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 10 \u0434\u043e 19 \u043f\u043e \u043c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u043e\u043c\u0443 \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0432 \u0440\u0430\u0431\u043e\u0447\u0438\u0435 \u0434\u043d\u0438 '
            ]))
          ],
          null,
          null
        );
      }
      function Bd(n) {
        return Bs(
          0,
          [
            (n()(), Ts(0, 0, null, null, 1, 'app-page-support', [], null, null, null, qd, zd)),
            Ql(1, 114688, null, 0, Hd, [], null, null)
          ],
          function(n, t) {
            n(t, 1, 0);
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
      function Zd(n) {
        return Bs(
          0,
          [
            (n()(),
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
            (n()(),
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
            (n()(),
            Ts(2, 0, null, null, 2, 'h2', [['class', 'title']], null, null, null, null, null)),
            (n()(),
            Ts(3, 0, null, null, 1, 'span', [['class', 'text']], null, null, null, null, null)),
            (n()(), Hs(-1, null, ['\u041a\u043b\u0438\u0435\u043d\u0442\u044b'])),
            (n()(),
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
            (n()(),
            Ts(6, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
            Ts(
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
            (n()(), Ts(9, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), Hs(-1, null, ['WebStudio MoonWay'])),
            (n()(),
            Ts(11, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
            Ts(
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
            (n()(), Ts(14, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u0422\u0438\u043f\u043e\u0433\u0440\u0430\u0444\u0438\u044f "\u0423\u0441\u043b\u0443\u0433\u0438"'
            ])),
            (n()(),
            Ts(16, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
            Ts(
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
            (n()(), Ts(19, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), Hs(-1, null, ['ColoritPak'])),
            (n()(),
            Ts(21, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
            Ts(
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
            (n()(), Ts(24, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), Hs(-1, null, ['Mercedes-Benz'])),
            (n()(),
            Ts(26, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
            Ts(
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
            (n()(), Ts(29, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), Hs(-1, null, ['Natusana'])),
            (n()(),
            Ts(31, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
            Ts(
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
            (n()(), Ts(34, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u0422\u0426 "\u041d\u0430 \u0413\u043e\u043b\u043e\u0434\u0435\u0434\u0430"'
            ])),
            (n()(),
            Ts(36, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
            Ts(
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
            (n()(), Ts(39, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u041a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u0438\u0432\u0421\u0442\u0440\u043e\u0439'
            ])),
            (n()(),
            Ts(41, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
            Ts(
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
            (n()(), Ts(44, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, ['\u041e\u0442\u0435\u043b\u044c "\u041c\u0438\u043d\u0441\u043a"'])),
            (n()(),
            Ts(46, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
            Ts(
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
            (n()(), Ts(49, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), Hs(-1, null, ['Natusana'])),
            (n()(),
            Ts(51, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
            Ts(
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
            (n()(), Ts(54, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u0422\u0426 "\u041d\u0430 \u0413\u043e\u043b\u043e\u0434\u0435\u0434\u0430"'
            ])),
            (n()(),
            Ts(56, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
            Ts(
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
            (n()(), Ts(59, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u041a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u0438\u0432\u0421\u0442\u0440\u043e\u0439'
            ])),
            (n()(),
            Ts(61, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
            Ts(
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
            (n()(), Ts(64, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, ['\u041e\u0442\u0435\u043b\u044c "\u041c\u0438\u043d\u0441\u043a"'])),
            (n()(),
            Ts(66, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
            Ts(
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
            (n()(), Ts(69, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, ['\u0410\u0442\u043b\u0430\u0441 \u0422\u0435\u0445\u043d\u043e'])),
            (n()(),
            Ts(71, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
            Ts(
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
            (n()(), Ts(74, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), Hs(-1, null, ['\u0416\u0421\u041f\u041a \u2116832'])),
            (n()(),
            Ts(76, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
            Ts(
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
            (n()(), Ts(79, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u0416\u041a\u0425 \u0412\u0438\u0442\u0435\u0431\u0441\u043a\u043e\u0439 \u043e\u0431\u0441\u043b\u0430\u0441\u0442\u0438'
            ])),
            (n()(),
            Ts(81, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
            Ts(
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
            (n()(), Ts(84, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), Hs(-1, null, ['\u0416\u0421\u041f\u041a \u2116648'])),
            (n()(),
            Ts(86, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
            Ts(
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
            (n()(), Ts(89, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u0417\u0430\u0432\u043e\u0434 \u0432\u0438\u043d\u043e\u0433\u0440\u0430\u0434\u043d\u044b\u0445 \u0432\u0438\u043d'
            ])),
            (n()(),
            Ts(91, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
            Ts(
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
            (n()(), Ts(94, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u041e\u0442\u0434\u0435\u043b \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u044f'
            ])),
            (n()(),
            Ts(96, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
            Ts(
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
            (n()(), Ts(99, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u0422\u0443\u0440\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u043f\u043e\u0440\u0442\u0430\u043b'
            ])),
            (n()(),
            Ts(101, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
            Ts(
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
            (n()(), Ts(104, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u041e\u041e\u041e "\u0412\u0438\u0432\u0430\u0421\u0442\u0440\u043e\u0439"'
            ])),
            (n()(),
            Ts(106, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
            Ts(
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
            (n()(), Ts(109, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, ['\u0416\u0421\u041f\u041a "\u041e\u0437\u0435\u0440\u0446\u043e"'])),
            (n()(),
            Ts(111, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
            Ts(
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
            (n()(), Ts(114, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), Hs(-1, null, ['"\u0411\u0435\u043b\u0422\u0430\u043c\u043e"'])),
            (n()(),
            Ts(116, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
            Ts(
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
            (n()(), Ts(119, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442\u0438\u043b\u044c'
            ])),
            (n()(),
            Ts(121, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
            Ts(
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
            (n()(), Ts(124, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u0436\u0435\u043d\u0441\u043a\u0438\u0445 \u0441\u0443\u043e\u043c\u043a'
            ])),
            (n()(),
            Ts(126, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
            Ts(
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
            (n()(), Ts(129, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), Hs(-1, null, ['\u0416\u0421\u041f\u041a'])),
            (n()(),
            Ts(131, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
            Ts(
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
            (n()(), Ts(134, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u0421\u0430\u043b\u043e\u043d \u043a\u0440\u0430\u0441\u043e\u0442\u044b'
            ])),
            (n()(),
            Ts(136, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
            Ts(
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
            (n()(), Ts(139, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u0412\u0438\u0442\u0430\u043c\u0438\u043d\u043d\u044b\u0439 \u0437\u0430\u0432\u043e\u0434'
            ])),
            (n()(),
            Ts(141, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
            Ts(
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
            (n()(), Ts(144, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b'
            ])),
            (n()(),
            Ts(146, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
            Ts(
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
            (n()(), Ts(149, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u0414\u0435\u043f\u0430\u0440\u0442\u0430\u043c\u0435\u043d\u0442 \u041e\u0445\u0440\u0430\u043d\u044b'
            ])),
            (n()(),
            Ts(151, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
            Ts(
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
            (n()(), Ts(154, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), Hs(-1, null, ['\u0422\u0414 "\u042d\u043b\u0438\u0441"'])),
            (n()(),
            Ts(156, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
            Ts(
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
            (n()(), Ts(159, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), Hs(-1, null, ['\u041c\u0438\u043d\u0441\u043a\u0442\u0440\u0430\u043d\u0441'])),
            (n()(),
            Ts(161, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
            Ts(
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
            (n()(), Ts(164, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), Hs(-1, null, ['\u041e\u041e\u041e "\u0411\u0435\u043b\u041b\u041f\u0417"'])),
            (n()(),
            Ts(166, 0, null, null, 4, 'li', [['class', 'item']], null, null, null, null, null)),
            (n()(),
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
            (n()(),
            Ts(
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
            (n()(), Ts(169, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), Hs(-1, null, ['ADANI']))
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
      function Jd(n) {
        return Bs(
          0,
          [
            (n()(), Ts(0, 0, null, null, 1, 'app-customers', [], null, null, null, Zd, Wd)),
            Ql(1, 114688, null, 0, Kd, [], null, null)
          ],
          function(n, t) {
            n(t, 1, 0);
          },
          null
        );
      }
      function Xd(n) {
        return Bs(
          0,
          [
            (n()(), Ts(0, 0, null, null, 1, 'app-page-clients', [], null, null, null, Jd, Yd)),
            Ql(1, 114688, null, 0, Qd, [], null, null)
          ],
          function(n, t) {
            n(t, 1, 0);
          },
          null
        );
      }
      var np = Sl('app-page-clients', Qd, Xd, {}, {}, []);
      class tp {}
      var ep = He({
        encapsulation: 0,
        styles: [
          [
            '*[_ngcontent-%COMP%]{box-sizing:border-box}img[_ngcontent-%COMP%]{max-width:540px;width:100%}.article[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto 20px}.title_wrapper[_ngcontent-%COMP%]{position:relative}.title_wrapper[_ngcontent-%COMP%]:after{content:"";background:#dcdcdc;position:absolute;left:0;top:50%;margin-top:-.5px;display:block;width:100%;height:1px;z-index:-1}.text[_ngcontent-%COMP%]{background:#fff;margin:15px 20px;padding:0 10px;display:inline-block;text-transform:uppercase;font-family:Arial,sans-serif;color:#494940}.article_content[_ngcontent-%COMP%]{padding:0 10px}.article_title[_ngcontent-%COMP%], .button[_ngcontent-%COMP%]{cursor:pointer;text-decoration:none;outline:0;color:#494940;-webkit-transition:.2s;transition:.2s;border:0;font-size:16px;border-radius:5px}.article_title[_ngcontent-%COMP%]:hover, .button[_ngcontent-%COMP%]:hover{color:#ff4800}.button[_ngcontent-%COMP%]{display:block;margin-left:auto}.button[_ngcontent-%COMP%]:hover{color:#fff;background:#444645}'
          ]
        ],
        data: {}
      });
      function lp(n) {
        return Bs(
          0,
          [
            (n()(), Ts(0, 0, null, null, 23, 'div', [], null, null, null, null, null)),
            (n()(), Ts(1, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              ' IP-\u0432\u0438\u0434\u0435\u043e\u043a\u0430\u043c\u0435\u0440\u0430 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0435\u0434\u0438\u043d\u044f\u044e\u0442\u0441\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043a\u0430\u043c\u0435\u0440\u044b \u0438 \u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u043e\u0433\u043e \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044f. \u0414\u0440\u0443\u0433\u0438\u043c\u0438 \u0441\u043b\u043e\u0432\u0430\u043c\u0438, \u044d\u0442\u043e \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0432\u0438\u0434\u0435\u043e\u043a\u0430\u043c\u0435\u0440\u044b \u0438 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0430. \u0412 \u0434\u0430\u043d\u043d\u044b\u0445 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430\u0445 \u043f\u043e\u0442\u043e\u043a \u0432\u0438\u0434\u0435\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0435\u0442\u0441\u044f \u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e IP-\u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0430 \u0432 \u0446\u0438\u0444\u0440\u043e\u0432\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435. \u0422\u0430\u043a \u043a\u0430\u043a \u0432 \u044d\u0442\u043e\u043c \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0441\u0435\u0442\u044c Ethernet, \u043a\u0430\u0436\u0434\u043e\u0439 \u043a\u0430\u043c\u0435\u0440\u0435 \u043f\u0440\u0438\u0441\u0432\u0430\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0430\u0434\u0440\u0435\u0441. \u0413\u043b\u0430\u0432\u043d\u043e\u0435 \u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u043e \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432 \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0442\u0438\u043f\u0430 \u2013 \u0432\u044b\u0441\u043e\u043a\u043e\u0435 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u0435\u0442\u0441\u044f \u043d\u0430 \u043c\u043e\u043d\u0438\u0442\u043e\u0440. '
            ])),
            (n()(), Ts(3, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              ' \u041d\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f\u0448\u043d\u0438\u0439 \u0434\u0435\u043d\u044c \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u0438 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432 \u0434\u043b\u044f \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u044e\u0442 \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u044f\u043c \u0431\u043e\u043b\u044c\u0448\u043e\u0435 \u0440\u0430\u0437\u043d\u043e\u043e\u0431\u0440\u0430\u0437\u0438\u0435 \u043a\u0430\u043c\u0435\u0440, \u0440\u0430\u0437\u043e\u0431\u0440\u0430\u0442\u044c\u0441\u044f \u0432 \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u044f\u0445 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043f\u043e\u0434 \u0441\u0438\u043b\u0443 \u043d\u0435 \u043a\u0430\u0436\u0434\u043e\u043c\u0443 \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0443. \u0421 \u0443\u0447\u0435\u0442\u043e\u043c \u0448\u0438\u0440\u043e\u043a\u043e\u0433\u043e \u0430\u0441\u0441\u043e\u0440\u0442\u0438\u043c\u0435\u043d\u0442\u0430 \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u0438 \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0432\u044b\u0434\u0435\u043b\u0438\u0442\u044c \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0443\u0436\u043d\u043e \u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0432 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u043f\u043e\u043a\u0443\u043f\u043e\u043a. '
            ])),
            (n()(), Ts(5, 0, null, null, 1, 'h3', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u0427\u0442\u043e \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0443\u0447\u0435\u0441\u0442\u044c \u043f\u0440\u0438 \u043f\u043e\u043a\u0443\u043f\u043a\u0435 \u043a\u0430\u043c\u0435\u0440\u044b?'
            ])),
            (n()(), Ts(7, 0, null, null, 3, 'p', [], null, null, null, null, null)),
            (n()(), Ts(8, 0, null, null, 1, 'strong', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u041f\u043e\u043a\u0443\u043f\u043a\u0430 IP-\u043a\u0430\u043c\u0435\u0440 \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f \u0432 \u041c\u0438\u043d\u0441\u043a\u0435'
            ])),
            (n()(),
            Hs(-1, null, [
              ' \u0434\u043e\u043b\u0436\u043d\u0430 \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0442\u044c\u0441\u044f \u0441 \u0443\u0447\u0435\u0442\u043e\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432: '
            ])),
            (n()(), Ts(11, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              ' \u0423\u0447\u0430\u0441\u0442\u043e\u043a, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043a\u0430\u043c\u0435\u0440\u0443 (\u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435 \u0438\u043b\u0438 \u043d\u0430\u0440\u0443\u0436\u043d\u043e\u0435 \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432 \u2013 \u043e\u0442 \u044d\u0442\u043e\u0433\u043e \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u044c \u0437\u0430\u0449\u0438\u0442\u044b \u043e\u0442 \u043c\u0435\u0445\u0430\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0438 \u043a\u043b\u0438\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043f\u043e\u0432\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u0439). \u041a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u0435\u0442\u0441\u044f \u043d\u0430 \u043c\u043e\u043d\u0438\u0442\u043e\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f. \u0417\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0437\u0430\u0434\u0430\u0447\u0438, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043d\u0430\u0446\u0435\u043b\u0435\u043d\u043e \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u043c\u043e\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e. \u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u044c \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f. '
            ])),
            (n()(), Ts(13, 0, null, null, 4, 'p', [], null, null, null, null, null)),
            (n()(), Hs(-1, null, [' \u0422\u0430\u043a\u0436\u0435 '])),
            (n()(), Ts(15, 0, null, null, 1, 'strong', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0442\u0435\u043d\u0438\u0435'
            ])),
            (n()(),
            Hs(-1, null, [
              ' \u043a\u0430\u043c\u0435\u0440 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441 \u0443\u0447\u0435\u0442\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f. \u042d\u0442\u043e \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0435 \u0444\u043e\u0440\u043c\u0430\u0442\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0436\u043d\u043e \u0440\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u0442\u044c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u043e\u0433\u043e \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044f. \u041d\u0435 \u043b\u0438\u0448\u043d\u0435\u0439 \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438 \u043a\u0430\u043c\u0435\u0440\u044b \u043d\u0430 \u043d\u0435\u0441\u0430\u043d\u043a\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0435 \u0432\u043c\u0435\u0448\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e \u043f\u043e\u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0445 \u043b\u0438\u0447\u043d\u043e\u0441\u0442\u0435\u0439. '
            ])),
            (n()(), Ts(18, 0, null, null, 3, 'p', [], null, null, null, null, null)),
            (n()(), Ts(19, 0, null, null, 1, 'strong', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f IP-\u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f'
            ])),
            (n()(),
            Hs(-1, null, [
              ' \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u0430 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u0438 \u043d\u0430\u0448\u0435\u0439 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438. \u0423 \u043d\u0430\u0441 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u0435\u043d\u043d\u044b\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430 \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0445 \u0431\u0440\u0435\u043d\u0434\u043e\u0432. '
            ])),
            (n()(),
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
              function(n, t, e) {
                var l = !0,
                  r = n.component;
                return 'click' === t && (l = 0 != (r.show = !r.show) && l), l;
              },
              null,
              null
            )),
            (n()(), Hs(-1, null, ['\u0441\u043a\u0440\u044b\u0442\u044c']))
          ],
          null,
          null
        );
      }
      function rp(n) {
        return Bs(
          0,
          [
            (n()(),
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
            (n()(),
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
            (n()(),
            Ts(2, 0, null, null, 2, 'h2', [['class', 'title']], null, null, null, null, null)),
            (n()(),
            Ts(3, 0, null, null, 1, 'span', [['class', 'text']], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u041a\u0430\u043a \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u0432\u044b\u0431\u0440\u0430\u0442\u044c IP \u043a\u0430\u043c\u0435\u0440\u044b'
            ])),
            (n()(),
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
            (n()(), Ts(6, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              ' IP-\u0432\u0438\u0434\u0435\u043e\u043a\u0430\u043c\u0435\u0440\u0430 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0435\u0434\u0438\u043d\u044f\u044e\u0442\u0441\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043a\u0430\u043c\u0435\u0440\u044b \u0438 \u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u043e\u0433\u043e \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044f. '
            ])),
            (n()(),
            Ts(
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
              function(n, t, e) {
                var l = !0,
                  r = n.component;
                return 'click' === t && (l = 0 != (r.show = !r.show) && l), l;
              },
              null,
              null
            )),
            (n()(),
            Hs(-1, null, [
              '\u041a\u0430\u043a \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u0432\u044b\u0431\u0440\u0430\u0442\u044c IP \u043a\u0430\u043c\u0435\u0440\u044b ...'
            ])),
            (n()(), Ms(16777216, null, null, 1, null, lp)),
            Ql(12, 16384, null, 0, po, [Se, ke], { ngIf: [0, 'ngIf'] }, null)
          ],
          function(n, t) {
            n(t, 12, 0, t.component.show);
          },
          null
        );
      }
      class sp {}
      var ip = He({
        encapsulation: 0,
        styles: [
          [
            '*[_ngcontent-%COMP%]{box-sizing:border-box}img[_ngcontent-%COMP%]{max-width:540px;width:100%}.article[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto 20px}.title_wrapper[_ngcontent-%COMP%]{position:relative}.title_wrapper[_ngcontent-%COMP%]:after{content:"";background:#dcdcdc;position:absolute;left:0;top:50%;margin-top:-.5px;display:block;width:100%;height:1px;z-index:-1}.text[_ngcontent-%COMP%]{background:#fff;margin:15px 20px;padding:0 10px;display:inline-block;text-transform:uppercase;font-family:Arial,sans-serif;color:#494940}.article_content[_ngcontent-%COMP%]{padding:0 10px}.article_title[_ngcontent-%COMP%], .button[_ngcontent-%COMP%]{cursor:pointer;text-decoration:none;outline:0;color:#494940;-webkit-transition:.2s;transition:.2s;border:0;font-size:16px;border-radius:5px}.article_title[_ngcontent-%COMP%]:hover, .button[_ngcontent-%COMP%]:hover{color:#ff4800}.button[_ngcontent-%COMP%]{display:block;margin-left:auto}.button[_ngcontent-%COMP%]:hover{color:#fff;background:#444645}'
          ]
        ],
        data: {}
      });
      function op(n) {
        return Bs(
          0,
          [
            (n()(), Ts(0, 0, null, null, 31, 'div', [], null, null, null, null, null)),
            (n()(), Ts(1, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              ' \u0423\u0447\u0438\u0442\u044b\u0432\u0430\u044f \u0442\u043e\u0442 \u0444\u0430\u043a\u0442, \u0447\u0442\u043e \u0434\u0430\u0447\u0430 \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0436\u0438\u0432\u0430\u043d\u0438\u044f, \u043f\u043e\u0434\u0431\u043e\u0440 \u0438 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0442\u0435\u043d\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0447\u0435\u043d\u044c \u0432\u0430\u0436\u043d\u043e\u0439 \u0437\u0430\u0434\u0430\u0447\u0435\u0439 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0430 \u0437\u0430\u0433\u043e\u0440\u043e\u0434\u043d\u043e\u0433\u043e \u0434\u043e\u043c\u0430. \u0427\u0430\u0449\u0435 \u0432\u0441\u0435\u0433\u043e \u043f\u043e\u0434\u0431\u0438\u0440\u0430\u0435\u0442\u0441\u044f \u0442\u043e\u0442 \u0432\u0430\u0440\u0438\u0430\u043d\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043f\u0440\u043e\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u0438 \u043f\u043e \u043f\u0440\u0438\u0435\u0437\u0434\u0435 \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0430 \u043d\u0430 \u0434\u0430\u0447\u0443. \u0411\u0435\u0437\u0443\u0441\u043b\u043e\u0432\u043d\u043e, \u0442\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c \u043d\u0435 \u0443\u0434\u0430\u0435\u0442\u0441\u044f \u043e\u0442\u0440\u0435\u0430\u0433\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u0430 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044e \u0432 \u0441\u0440\u043e\u0447\u043d\u043e\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u0435, \u043e\u0434\u043d\u0430\u043a\u043e \u043d\u0435\u043f\u0440\u0430\u0432\u043e\u043c\u0435\u0440\u043d\u044b\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043b\u044e\u0434\u0435\u0439 \u0431\u0443\u0434\u0443\u0442 \u0437\u0430\u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043a\u0430\u043c\u0435\u0440\u044b. '
            ])),
            (n()(), Ts(3, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              ' \u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0442 \u0434\u0440\u0443\u0433\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u0438\u0441\u0442\u0435\u043c, \u043f\u0440\u0435\u0434\u043f\u043e\u043b\u0430\u0433\u0430\u044e\u0449\u0438\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043c\u0433\u043d\u043e\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u0440\u0435\u0430\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043d\u0430 \u0432\u043e\u0437\u043d\u0438\u043a\u0430\u044e\u0449\u0438\u0435 \u043d\u0435\u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u044b\u0435 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438. \u0412 \u0434\u0430\u043d\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0441\u0440\u043e\u0447\u043d\u043e\u0441\u0442\u044c \u0440\u0435\u0430\u043a\u0446\u0438\u0438 \u0445\u043e\u0437\u044f\u0438\u043d\u0430 \u0434\u0430\u0447\u0438 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u0432\u0438\u0441\u0435\u0442\u044c \u0438\u0441\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u0434\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u0434\u043e \u0437\u0430\u0433\u043e\u0440\u043e\u0434\u043d\u043e\u0433\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0438 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u043f\u0440\u0438\u0431\u044b\u0442\u044c \u043d\u0430 \u043c\u0435\u0441\u0442\u043e \u0432 \u043b\u044e\u0431\u043e\u0435 \u0432\u0440\u0435\u043c\u044f. '
            ])),
            (n()(), Ts(5, 0, null, null, 1, 'h3', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u041d\u0430 \u0447\u0442\u043e \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u044c \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435 \u043f\u0440\u0438 \u0432\u044b\u0431\u043e\u0440\u0435 \u043a\u0430\u043c\u0435\u0440?'
            ])),
            (n()(), Ts(7, 0, null, null, 4, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              ' \u041f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u043f\u043e\u0434\u043e\u0431\u0440\u0430\u0442\u044c '
            ])),
            (n()(), Ts(9, 0, null, null, 1, 'strong', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u0438 \u0432\u0438\u0434\u0435\u043e\u043a\u0430\u043c\u0435\u0440\u044b'
            ])),
            (n()(),
            Hs(-1, null, [
              ' \u0434\u043b\u044f \u0434\u0430\u0447\u0438 \u043b\u0443\u0447\u0448\u0435 \u0432\u0441\u0435\u0433\u043e \u043e\u0442\u0434\u0430\u0432\u0430\u0442\u044c \u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0442\u0435\u043d\u0438\u0435 \u0433\u043e\u0442\u043e\u0432\u044b\u043c \u0440\u0435\u0448\u0435\u043d\u0438\u044f\u043c, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0442\u043b\u0438\u0447\u0430\u044e\u0442\u0441\u044f \u043f\u0440\u043e\u0441\u0442\u043e\u0442\u043e\u0439 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0438 \u0434\u0435\u043c\u043e\u043a\u0440\u0430\u0442\u0438\u0447\u043d\u043e\u0439 \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c\u044e. '
            ])),
            (n()(), Ts(12, 0, null, null, 3, 'p', [], null, null, null, null, null)),
            (n()(), Ts(13, 0, null, null, 1, 'strong', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u0412\u044b\u0431\u043e\u0440 \u0441\u0438\u0441\u0442\u0435\u043c \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0434\u0430\u0447\u0438'
            ])),
            (n()(),
            Hs(-1, null, [
              ' \u043a\u0440\u0430\u0439\u043d\u0435 \u0432\u0430\u0436\u043d\u043e \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0438\u0442\u044c \u0441 \u0443\u0447\u0435\u0442\u043e\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a: '
            ])),
            (n()(), Ts(16, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              ' - \u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u0430\u043d\u0442\u0438\u0432\u0430\u043d\u0434\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u043e\u043a\u0440\u044b\u0442\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0434\u0435\u043b\u0430\u0435\u0442 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u0443\u0441\u0442\u043e\u0439\u0447\u0438\u0432\u044b\u043c \u043a \u0432\u043d\u0435\u0448\u043d\u0438\u043c \u043f\u043e\u0432\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u044f\u043c; '
            ])),
            (n()(), Ts(18, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '- \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e, \u043f\u0440\u0435\u0434\u043e\u0442\u0432\u0440\u0430\u0449\u0430\u044e\u0449\u0435\u0435 \u0432\u043b\u0438\u044f\u043d\u0438\u0435 \u0431\u043b\u0438\u043a\u043e\u0432 \u043e\u0442 \u0441\u043e\u043b\u043d\u0446\u0430 \u043d\u0430 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f;'
            ])),
            (n()(), Ts(20, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '- \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0437\u0430\u043f\u0438\u0441\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0432 \u043d\u043e\u0447\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0441\u0443\u0442\u043e\u043a;'
            ])),
            (n()(), Ts(22, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              ' - \u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0433\u043e \u0443\u0433\u043b\u0430 \u043e\u0431\u0437\u043e\u0440\u0430 \u043a\u0430\u043c\u0435\u0440\u044b \u0438 \u043f\u043e\u0432\u043e\u0440\u043e\u0442\u043e\u0432 (\u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u0439 \u0437\u0430\u0434\u0430\u0447\u0438 \u0438 \u043f\u043b\u043e\u0449\u0430\u0434\u0438, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043e\u0445\u0432\u0430\u0442\u0438\u0442\u044c \u043f\u0440\u0438 \u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0438). '
            ])),
            (n()(), Ts(24, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              ' \u041a\u0440\u043e\u043c\u0435 \u0442\u043e\u0433\u043e, \u043f\u0440\u0438 \u043f\u043e\u043a\u0443\u043f\u043a\u0435 \u0442\u0430\u043a\u0438\u0445 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432 \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0431\u0443\u0434\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u0434\u043b\u044f \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430. \u0417\u0430 \u044d\u0442\u043e \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f (\u0430\u043d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0435 \u043b\u0438\u0431\u043e \u0446\u0438\u0444\u0440\u043e\u0432\u044b\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u043a\u0430\u043c\u0435\u0440). '
            ])),
            (n()(), Ts(26, 0, null, null, 3, 'p', [], null, null, null, null, null)),
            (n()(), Ts(27, 0, null, null, 1, 'strong', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u041f\u0440\u043e\u0434\u0430\u0436\u0430 \u043a\u0430\u043c\u0435\u0440 \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f \u0432 \u041c\u0438\u043d\u0441\u043a\u0435'
            ])),
            (n()(),
            Hs(-1, null, [
              ' \u2013 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0435 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u043d\u0430\u0448\u0435\u0439 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438. \u0423 \u043d\u0430\u0441 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u044b \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u0441\u0438\u0441\u0442\u0435\u043c, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u043f\u043e\u0442\u0440\u0435\u0431\u043d\u043e\u0441\u0442\u044f\u043c \u0432\u0441\u0435\u0445 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0439 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432. '
            ])),
            (n()(),
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
              function(n, t, e) {
                var l = !0,
                  r = n.component;
                return 'click' === t && (l = 0 != (r.show = !r.show) && l), l;
              },
              null,
              null
            )),
            (n()(), Hs(-1, null, ['\u0441\u043a\u0440\u044b\u0442\u044c']))
          ],
          null,
          null
        );
      }
      function up(n) {
        return Bs(
          0,
          [
            (n()(),
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
            (n()(),
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
            (n()(),
            Ts(2, 0, null, null, 2, 'h2', [['class', 'title']], null, null, null, null, null)),
            (n()(),
            Ts(3, 0, null, null, 1, 'span', [['class', 'text']], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u041a\u0430\u043a \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0434\u0430\u0447\u0438'
            ])),
            (n()(),
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
            (n()(), Ts(6, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              ' \u0423\u0447\u0438\u0442\u044b\u0432\u0430\u044f \u0442\u043e\u0442 \u0444\u0430\u043a\u0442, \u0447\u0442\u043e \u0434\u0430\u0447\u0430 \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0436\u0438\u0432\u0430\u043d\u0438\u044f, \u043f\u043e\u0434\u0431\u043e\u0440 \u0438 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0442\u0435\u043d\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0447\u0435\u043d\u044c \u0432\u0430\u0436\u043d\u043e\u0439 \u0437\u0430\u0434\u0430\u0447\u0435\u0439 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0430 \u0437\u0430\u0433\u043e\u0440\u043e\u0434\u043d\u043e\u0433\u043e \u0434\u043e\u043c\u0430. '
            ])),
            (n()(),
            Ts(
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
              function(n, t, e) {
                var l = !0,
                  r = n.component;
                return 'click' === t && (l = 0 != (r.show = !r.show) && l), l;
              },
              null,
              null
            )),
            (n()(),
            Hs(-1, null, [
              ' \u041a\u0430\u043a \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0434\u0430\u0447\u0438 ... '
            ])),
            (n()(), Ms(16777216, null, null, 1, null, op)),
            Ql(12, 16384, null, 0, po, [Se, ke], { ngIf: [0, 'ngIf'] }, null)
          ],
          function(n, t) {
            n(t, 12, 0, t.component.show);
          },
          null
        );
      }
      class ap {
        constructor() {}
        ngOnInit() {}
      }
      var cp = He({ encapsulation: 0, styles: [['']], data: {} });
      function hp(n) {
        return Bs(
          0,
          [
            (n()(),
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
            Ql(1, 49152, null, 0, tp, [], null, null),
            (n()(),
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
            Ql(3, 49152, null, 0, sp, [], null, null)
          ],
          null,
          null
        );
      }
      function dp(n) {
        return Bs(
          0,
          [
            (n()(), Ts(0, 0, null, null, 1, 'app-page-articles', [], null, null, null, hp, cp)),
            Ql(1, 114688, null, 0, ap, [], null, null)
          ],
          function(n, t) {
            n(t, 1, 0);
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
      function mp(n) {
        return Bs(
          0,
          [
            (n()(), Ts(0, 0, null, null, 1, 'app-brands-sm', [], null, null, null, md, fd)),
            Ql(1, 114688, null, 0, gd, [], null, null)
          ],
          function(n, t) {
            n(t, 1, 0);
          },
          null
        );
      }
      function _p(n) {
        return Bs(
          0,
          [
            (n()(), Ts(0, 0, null, null, 1, 'app-page-brands', [], null, null, null, mp, fp)),
            Ql(1, 114688, null, 0, gp, [], null, null)
          ],
          function(n, t) {
            n(t, 1, 0);
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
        initPlacemark(n, t) {
          const e = new n.Placemark(this.geometry, this.properties, this.options);
          return t.geoObjects.add(e), this.emitEvents(n, e), e;
        }
        emitEvents(n, t) {
          this.load.emit({ ymaps: n, instance: t }),
            t.events.add(['balloonopen', 'balloonclose'], e =>
              this.baloon.emit({ ymaps: n, instance: t, type: e.originalEvent.type, event: e })
            ),
            t.events.add(['click', 'dblclick'], e =>
              this.yaclick.emit({ ymaps: n, instance: t, type: e.originalEvent.type, event: e })
            ),
            t.events.add(['dragstart', 'dragend'], e =>
              this.drag.emit({ ymaps: n, instance: t, type: e.originalEvent.type, event: e })
            ),
            t.events.add(['hintopen', 'hintclose'], e =>
              this.hint.emit({ ymaps: n, instance: t, type: e.originalEvent.type, event: e })
            ),
            t.events.add(['mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseup'], e =>
              this.mouse.emit({ ymaps: n, instance: t, type: e.originalEvent.type, event: e })
            ),
            t.events.add(['multitouchstart', 'multitouchmove', 'multitouchend'], e =>
              this.multitouch.emit({ ymaps: n, instance: t, type: e.originalEvent.type, event: e })
            );
        }
      }
      let wp = (() => {
        class n {
          constructor(n, t) {
            (this.document = t), (this._apiKey = n);
          }
          initScript() {
            if (!this._scriptYmaps) {
              const n = this.document.createElement('script');
              (n.src = `https://api-maps.yandex.ru/2.1/?apikey=${this._apiKey}&lang=ru_RU`),
                (this._scriptYmaps = this.document.body.appendChild(n));
            }
            return 'ymaps' in window
              ? G(ymaps.ready()).pipe(H(() => ymaps))
              : (function n(t, e, r, s) {
                  return (
                    l(r) && ((s = r), (r = void 0)),
                    s
                      ? n(t, e, r).pipe(H(n => (u(n) ? s(...n) : s(n))))
                      : new b(n => {
                          !(function n(t, e, l, r, s) {
                            let i;
                            if (
                              (function(n) {
                                return (
                                  n &&
                                  'function' == typeof n.addEventListener &&
                                  'function' == typeof n.removeEventListener
                                );
                              })(t)
                            ) {
                              const n = t;
                              t.addEventListener(e, l, s),
                                (i = () => n.removeEventListener(e, l, s));
                            } else if (
                              (function(n) {
                                return n && 'function' == typeof n.on && 'function' == typeof n.off;
                              })(t)
                            ) {
                              const n = t;
                              t.on(e, l), (i = () => n.off(e, l));
                            } else if (
                              (function(n) {
                                return (
                                  n &&
                                  'function' == typeof n.addListener &&
                                  'function' == typeof n.removeListener
                                );
                              })(t)
                            ) {
                              const n = t;
                              t.addListener(e, l), (i = () => n.removeListener(e, l));
                            } else {
                              if (!t || !t.length) throw new TypeError('Invalid event target');
                              for (let i = 0, o = t.length; i < o; i++) n(t[i], e, l, r, s);
                            }
                            r.add(i);
                          })(
                            t,
                            e,
                            function(t) {
                              n.next(
                                arguments.length > 1 ? Array.prototype.slice.call(arguments) : t
                              );
                            },
                            n,
                            r
                          );
                        })
                  );
                })(this._scriptYmaps, 'load').pipe(ru(() => G(ymaps.ready()).pipe(H(() => ymaps))));
          }
        }
        return (
          (n.ngInjectableDef = gn({
            factory: function() {
              return new n(Nn('API_KEY', 8), Nn(_o));
            },
            token: n,
            providedIn: 'root'
          })),
          n
        );
      })();
      class bp {
        constructor(n) {
          (this._yandexMapService = n),
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
            .subscribe(n => {
              if (this.onlyInstance) return void this.load.emit({ ymaps: n });
              this._logErrors();
              const t = this._createMap(n, `f${(~~(1e8 * Math.random())).toString(16)}`);
              this.emitEvents(n, t), this._addObjectsOnMap(n, t);
            });
        }
        _logErrors() {
          this.center || (console.error('Map: center input is required.'), (this.center = []));
        }
        _createMap(n, t) {
          return (
            this.mapContainer.nativeElement.setAttribute('id', t),
            new n.Map(
              t,
              Object.assign({}, this.state, { zoom: this.zoom, center: this.center }),
              this.options
            )
          );
        }
        _addObjectsOnMap(n, t) {
          const e = [];
          this.placemarks.forEach(l => {
            e.push(l.initPlacemark(n, t));
          }),
            this.clusterer && this._createClusterer(n, t, e),
            this.multiroutes.forEach(e => {
              e.initMultiroute(n, t);
            }),
            this.geoObjects.forEach(e => {
              e.initGeoObject(n, t);
            }),
            this.controls.forEach(e => {
              e.initControl(n, t);
            });
        }
        _createClusterer(n, t, e) {
          const l = new n.Clusterer(this.clusterer);
          l.add(e), t.geoObjects.add(l);
        }
        emitEvents(n, t) {
          this.load.emit({ ymaps: n, instance: t }),
            t.events.add(['actionbegin', 'actionend'], e =>
              this.action.emit({ ymaps: n, instance: t, type: e.originalEvent.type, event: e })
            ),
            t.events.add(['balloonopen', 'balloonclose'], e =>
              this.baloon.emit({ ymaps: n, instance: t, type: e.originalEvent.type, event: e })
            ),
            t.events.add(['click', 'dblclick'], e =>
              this.yaclick.emit({ ymaps: n, instance: t, type: e.originalEvent.type, event: e })
            ),
            t.events.add(['hintopen', 'hintclose'], e =>
              this.hint.emit({ ymaps: n, instance: t, type: e.originalEvent.type, event: e })
            ),
            t.events.add(['mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseup'], e =>
              this.mouse.emit({ ymaps: n, instance: t, type: e.originalEvent.type, event: e })
            ),
            t.events.add(['multitouchstart', 'multitouchmove', 'multitouchend'], e =>
              this.multitouch.emit({ ymaps: n, instance: t, type: e.originalEvent.type, event: e })
            );
        }
      }
      class Cp {
        static forRoot(n) {
          return { ngModule: Cp, providers: [{ provide: 'API_KEY', useValue: n }] };
        }
      }
      var xp = He({
        encapsulation: 0,
        styles: ['.container[_ngcontent-%COMP%]{width:100%;height:100%}'],
        data: {}
      });
      function kp(n) {
        return Bs(
          0,
          [
            Vs(402653184, 1, { mapContainer: 0 }),
            (n()(),
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
      function Sp(n) {
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
            '*[_ngcontent-%COMP%]{box-sizing:border-box}.section[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto 20px}.title-wrapper[_ngcontent-%COMP%]{position:relative}.title-wrapper[_ngcontent-%COMP%]:after{content:"";background:#dcdcdc;position:absolute;left:0;top:50%;margin-top:-.5px;display:block;width:100%;height:1px;z-index:-1}.text[_ngcontent-%COMP%]{background:#fff;margin:15px 20px;padding:0 10px;display:inline-block;text-transform:uppercase;font-family:Arial,sans-serif;color:#494940}.map_container[_ngcontent-%COMP%]{width:100%;height:500px}@media (max-width:960px){.map_container[_ngcontent-%COMP%]{height:400px}}@media (max-width:720px){.map_container[_ngcontent-%COMP%]{height:350px}}@media (max-width:600px){.map_container[_ngcontent-%COMP%]{height:320px}}'
          ]
        ],
        data: {}
      });
      function Mp(n) {
        return Bs(
          0,
          [
            (n()(),
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
            (n()(),
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
            (n()(),
            Ts(2, 0, null, null, 2, 'h2', [['class', 'title']], null, null, null, null, null)),
            (n()(),
            Ts(3, 0, null, null, 1, 'span', [['class', 'text']], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u0421\u0445\u0435\u043c\u0430 \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044f'
            ])),
            (n()(),
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
            (n()(), Ts(6, 0, null, null, 12, 'angular-yandex-map', [], null, null, null, kp, xp)),
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
            (n()(),
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
            (n()(),
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
          function(n, t) {
            var e = t.component,
              l = n(t, 12, 0, 55.178214, 30.234987);
            n(t, 7, 0, l, 16, e.clusterer);
            var r = n(t, 15, 0, 55.178214, 30.234987);
            n(t, 14, 0, r, e.placemarkPropertiesVSTU, e.placemarkOptions);
            var s = n(t, 18, 0, 53.915512, 27.513412);
            n(t, 17, 0, s, e.placemarkOptions);
          },
          null
        );
      }
      class Tp extends $ {
        constructor(n, t) {
          super(n), (this.sources = t), (this.completed = 0), (this.haveValues = 0);
          const e = t.length;
          this.values = new Array(e);
          for (let l = 0; l < e; l++) {
            const n = F(this, t[l], null, l);
            n && this.add(n);
          }
        }
        notifyNext(n, t, e, l, r) {
          (this.values[e] = t), r._hasValue || ((r._hasValue = !0), this.haveValues++);
        }
        notifyComplete(n) {
          const { destination: t, haveValues: e, values: l } = this,
            r = l.length;
          n._hasValue
            ? (this.completed++, this.completed === r && (e === r && t.next(l), t.complete()))
            : t.complete();
        }
      }
      const Ap = new Sn('NgValueAccessor'),
        Ip = new Sn('CompositionEventMode');
      class Rp {
        constructor(n, t, e) {
          (this._renderer = n),
            (this._elementRef = t),
            (this._compositionMode = e),
            (this.onChange = n => {}),
            (this.onTouched = () => {}),
            (this._composing = !1),
            null == this._compositionMode &&
              (this._compositionMode = !(function() {
                const n = gu() ? gu().getUserAgent() : '';
                return /android (\d+)/.test(n.toLowerCase());
              })());
        }
        writeValue(n) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'value', null == n ? '' : n);
        }
        registerOnChange(n) {
          this.onChange = n;
        }
        registerOnTouched(n) {
          this.onTouched = n;
        }
        setDisabledState(n) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', n);
        }
        _handleInput(n) {
          (!this._compositionMode || (this._compositionMode && !this._composing)) &&
            this.onChange(n);
        }
        _compositionStart() {
          this._composing = !0;
        }
        _compositionEnd(n) {
          (this._composing = !1), this._compositionMode && this.onChange(n);
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
        reset(n) {
          this.control && this.control.reset(n);
        }
        hasError(n, t) {
          return !!this.control && this.control.hasError(n, t);
        }
        getError(n, t) {
          return this.control ? this.control.getError(n, t) : null;
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
        constructor(n) {
          this._cd = n;
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
        constructor(n) {
          super(n);
        }
      }
      class Fp extends Up {
        constructor(n) {
          super(n);
        }
      }
      function $p(n) {
        return null == n || 0 === n.length;
      }
      const Hp = new Sn('NgValidators'),
        zp = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      class qp {
        static min(n) {
          return t => {
            if ($p(t.value) || $p(n)) return null;
            const e = parseFloat(t.value);
            return !isNaN(e) && e < n ? { min: { min: n, actual: t.value } } : null;
          };
        }
        static max(n) {
          return t => {
            if ($p(t.value) || $p(n)) return null;
            const e = parseFloat(t.value);
            return !isNaN(e) && e > n ? { max: { max: n, actual: t.value } } : null;
          };
        }
        static required(n) {
          return $p(n.value) ? { required: !0 } : null;
        }
        static requiredTrue(n) {
          return !0 === n.value ? null : { required: !0 };
        }
        static email(n) {
          return $p(n.value) ? null : zp.test(n.value) ? null : { email: !0 };
        }
        static minLength(n) {
          return t => {
            if ($p(t.value)) return null;
            const e = t.value ? t.value.length : 0;
            return e < n ? { minlength: { requiredLength: n, actualLength: e } } : null;
          };
        }
        static maxLength(n) {
          return t => {
            const e = t.value ? t.value.length : 0;
            return e > n ? { maxlength: { requiredLength: n, actualLength: e } } : null;
          };
        }
        static pattern(n) {
          if (!n) return qp.nullValidator;
          let t, e;
          return (
            'string' == typeof n
              ? ((e = ''),
                '^' !== n.charAt(0) && (e += '^'),
                (e += n),
                '$' !== n.charAt(n.length - 1) && (e += '$'),
                (t = new RegExp(e)))
              : ((e = n.toString()), (t = n)),
            n => {
              if ($p(n.value)) return null;
              const l = n.value;
              return t.test(l) ? null : { pattern: { requiredPattern: e, actualValue: l } };
            }
          );
        }
        static nullValidator(n) {
          return null;
        }
        static compose(n) {
          if (!n) return null;
          const t = n.filter(Bp);
          return 0 == t.length
            ? null
            : function(n) {
                return Kp(
                  (function(n, t) {
                    return t.map(t => t(n));
                  })(n, t)
                );
              };
        }
        static composeAsync(n) {
          if (!n) return null;
          const t = n.filter(Bp);
          return 0 == t.length
            ? null
            : function(n) {
                return (function n(...t) {
                  let e;
                  return (
                    'function' == typeof t[t.length - 1] && (e = t.pop()),
                    1 === t.length && u(t[0]) && (t = t[0]),
                    0 === t.length ? wo : e ? n(t).pipe(H(n => e(...n))) : new b(n => new Tp(n, t))
                  );
                })(
                  (function(n, t) {
                    return t.map(t => t(n));
                  })(n, t).map(Gp)
                ).pipe(H(Kp));
              };
        }
      }
      function Bp(n) {
        return null != n;
      }
      function Gp(n) {
        const t = zt(n) ? G(n) : n;
        if (!qt(t)) throw new Error('Expected validator to return Promise or Observable.');
        return t;
      }
      function Kp(n) {
        const t = n.reduce((n, t) => (null != t ? Object.assign({}, n, t) : n), {});
        return 0 === Object.keys(t).length ? null : t;
      }
      function Wp(n) {
        return n.validate ? t => n.validate(t) : n;
      }
      function Zp(n) {
        return n.validate ? t => n.validate(t) : n;
      }
      class Qp {
        constructor() {
          this._accessors = [];
        }
        add(n, t) {
          this._accessors.push([n, t]);
        }
        remove(n) {
          for (let t = this._accessors.length - 1; t >= 0; --t)
            if (this._accessors[t][1] === n) return void this._accessors.splice(t, 1);
        }
        select(n) {
          this._accessors.forEach(t => {
            this._isSameGroup(t, n) && t[1] !== n && t[1].fireUncheck(n.value);
          });
        }
        _isSameGroup(n, t) {
          return !!n[0].control && n[0]._parent === t._control._parent && n[1].name === t.name;
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
        static ngModelWarning(n) {
          console.warn(
            `\n    It looks like you're using ngModel on the same form field as ${n}. \n    Support for using the ngModel input property and ngModelChange event with \n    reactive form directives has been deprecated in Angular v6 and will be removed \n    in Angular v7.\n    \n    For more information on this, see our API docs here:\n    https://angular.io/api/forms/${
              'formControl' === n ? 'FormControlDirective' : 'FormControlName'
            }#use-with-ngmodel\n    `
          );
        }
      }
      function ng(n, t) {
        return [...t.path, n];
      }
      function tg(n, t) {
        n || sg(t, 'Cannot find control with'),
          t.valueAccessor || sg(t, 'No value accessor for form control with'),
          (n.validator = qp.compose([n.validator, t.validator])),
          (n.asyncValidator = qp.composeAsync([n.asyncValidator, t.asyncValidator])),
          t.valueAccessor.writeValue(n.value),
          (function(n, t) {
            t.valueAccessor.registerOnChange(e => {
              (n._pendingValue = e),
                (n._pendingChange = !0),
                (n._pendingDirty = !0),
                'change' === n.updateOn && eg(n, t);
            });
          })(n, t),
          (function(n, t) {
            n.registerOnChange((n, e) => {
              t.valueAccessor.writeValue(n), e && t.viewToModelUpdate(n);
            });
          })(n, t),
          (function(n, t) {
            t.valueAccessor.registerOnTouched(() => {
              (n._pendingTouched = !0),
                'blur' === n.updateOn && n._pendingChange && eg(n, t),
                'submit' !== n.updateOn && n.markAsTouched();
            });
          })(n, t),
          t.valueAccessor.setDisabledState &&
            n.registerOnDisabledChange(n => {
              t.valueAccessor.setDisabledState(n);
            }),
          t._rawValidators.forEach(t => {
            t.registerOnValidatorChange &&
              t.registerOnValidatorChange(() => n.updateValueAndValidity());
          }),
          t._rawAsyncValidators.forEach(t => {
            t.registerOnValidatorChange &&
              t.registerOnValidatorChange(() => n.updateValueAndValidity());
          });
      }
      function eg(n, t) {
        n._pendingDirty && n.markAsDirty(),
          n.setValue(n._pendingValue, { emitModelToViewChange: !1 }),
          t.viewToModelUpdate(n._pendingValue),
          (n._pendingChange = !1);
      }
      function lg(n, t) {
        null == n && sg(t, 'Cannot find control with'),
          (n.validator = qp.compose([n.validator, t.validator])),
          (n.asyncValidator = qp.composeAsync([n.asyncValidator, t.asyncValidator]));
      }
      function rg(n) {
        return sg(n, 'There is no FormControl instance attached to form control element with');
      }
      function sg(n, t) {
        let e;
        throw ((e =
          n.path.length > 1
            ? `path: '${n.path.join(' -> ')}'`
            : n.path[0]
            ? `name: '${n.path}'`
            : 'unspecified name attribute'),
        new Error(`${t} ${e}`));
      }
      function ig(n) {
        return null != n ? qp.compose(n.map(Wp)) : null;
      }
      function og(n) {
        return null != n ? qp.composeAsync(n.map(Zp)) : null;
      }
      const ug = [
        class {
          constructor(n, t) {
            (this._renderer = n),
              (this._elementRef = t),
              (this.onChange = n => {}),
              (this.onTouched = () => {});
          }
          writeValue(n) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'checked', n);
          }
          registerOnChange(n) {
            this.onChange = n;
          }
          registerOnTouched(n) {
            this.onTouched = n;
          }
          setDisabledState(n) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', n);
          }
        },
        class {
          constructor(n, t) {
            (this._renderer = n),
              (this._elementRef = t),
              (this.onChange = n => {}),
              (this.onTouched = () => {});
          }
          writeValue(n) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'value', parseFloat(n));
          }
          registerOnChange(n) {
            this.onChange = t => {
              n('' == t ? null : parseFloat(t));
            };
          }
          registerOnTouched(n) {
            this.onTouched = n;
          }
          setDisabledState(n) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', n);
          }
        },
        class {
          constructor(n, t) {
            (this._renderer = n),
              (this._elementRef = t),
              (this.onChange = n => {}),
              (this.onTouched = () => {});
          }
          writeValue(n) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'value', null == n ? '' : n);
          }
          registerOnChange(n) {
            this.onChange = t => {
              n('' == t ? null : parseFloat(t));
            };
          }
          registerOnTouched(n) {
            this.onTouched = n;
          }
          setDisabledState(n) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', n);
          }
        },
        class {
          constructor(n, t) {
            (this._renderer = n),
              (this._elementRef = t),
              (this._optionMap = new Map()),
              (this._idCounter = 0),
              (this.onChange = n => {}),
              (this.onTouched = () => {}),
              (this._compareWith = Ut);
          }
          set compareWith(n) {
            if ('function' != typeof n)
              throw new Error(`compareWith must be a function, but received ${JSON.stringify(n)}`);
            this._compareWith = n;
          }
          writeValue(n) {
            this.value = n;
            const t = this._getOptionId(n);
            null == t &&
              this._renderer.setProperty(this._elementRef.nativeElement, 'selectedIndex', -1);
            const e = (function(n, t) {
              return null == n
                ? `${t}`
                : (t && 'object' == typeof t && (t = 'Object'), `${n}: ${t}`.slice(0, 50));
            })(t, n);
            this._renderer.setProperty(this._elementRef.nativeElement, 'value', e);
          }
          registerOnChange(n) {
            this.onChange = t => {
              (this.value = this._getOptionValue(t)), n(this.value);
            };
          }
          registerOnTouched(n) {
            this.onTouched = n;
          }
          setDisabledState(n) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', n);
          }
          _registerOption() {
            return (this._idCounter++).toString();
          }
          _getOptionId(n) {
            for (const t of Array.from(this._optionMap.keys()))
              if (this._compareWith(this._optionMap.get(t), n)) return t;
            return null;
          }
          _getOptionValue(n) {
            const t = (function(n) {
              return n.split(':')[0];
            })(n);
            return this._optionMap.has(t) ? this._optionMap.get(t) : n;
          }
        },
        class {
          constructor(n, t) {
            (this._renderer = n),
              (this._elementRef = t),
              (this._optionMap = new Map()),
              (this._idCounter = 0),
              (this.onChange = n => {}),
              (this.onTouched = () => {}),
              (this._compareWith = Ut);
          }
          set compareWith(n) {
            if ('function' != typeof n)
              throw new Error(`compareWith must be a function, but received ${JSON.stringify(n)}`);
            this._compareWith = n;
          }
          writeValue(n) {
            let t;
            if (((this.value = n), Array.isArray(n))) {
              const e = n.map(n => this._getOptionId(n));
              t = (n, t) => {
                n._setSelected(e.indexOf(t.toString()) > -1);
              };
            } else
              t = (n, t) => {
                n._setSelected(!1);
              };
            this._optionMap.forEach(t);
          }
          registerOnChange(n) {
            this.onChange = t => {
              const e = [];
              if (t.hasOwnProperty('selectedOptions')) {
                const n = t.selectedOptions;
                for (let t = 0; t < n.length; t++) {
                  const l = n.item(t),
                    r = this._getOptionValue(l.value);
                  e.push(r);
                }
              } else {
                const n = t.options;
                for (let t = 0; t < n.length; t++) {
                  const l = n.item(t);
                  if (l.selected) {
                    const n = this._getOptionValue(l.value);
                    e.push(n);
                  }
                }
              }
              (this.value = e), n(e);
            };
          }
          registerOnTouched(n) {
            this.onTouched = n;
          }
          setDisabledState(n) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', n);
          }
          _registerOption(n) {
            const t = (this._idCounter++).toString();
            return this._optionMap.set(t, n), t;
          }
          _getOptionId(n) {
            for (const t of Array.from(this._optionMap.keys()))
              if (this._compareWith(this._optionMap.get(t)._value, n)) return t;
            return null;
          }
          _getOptionValue(n) {
            const t = (function(n) {
              return n.split(':')[0];
            })(n);
            return this._optionMap.has(t) ? this._optionMap.get(t)._value : n;
          }
        },
        class {
          constructor(n, t, e, l) {
            (this._renderer = n),
              (this._elementRef = t),
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
          writeValue(n) {
            (this._state = n === this.value),
              this._renderer.setProperty(this._elementRef.nativeElement, 'checked', this._state);
          }
          registerOnChange(n) {
            (this._fn = n),
              (this.onChange = () => {
                n(this.value), this._registry.select(this);
              });
          }
          fireUncheck(n) {
            this.writeValue(n);
          }
          registerOnTouched(n) {
            this.onTouched = n;
          }
          setDisabledState(n) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', n);
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
      function ag(n) {
        const t = hg(n) ? n.validators : n;
        return Array.isArray(t) ? ig(t) : t || null;
      }
      function cg(n, t) {
        const e = hg(t) ? t.asyncValidators : n;
        return Array.isArray(e) ? og(e) : e || null;
      }
      function hg(n) {
        return null != n && !Array.isArray(n) && 'object' == typeof n;
      }
      class dg {
        constructor(n, t) {
          (this.validator = n),
            (this.asyncValidator = t),
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
        setValidators(n) {
          this.validator = ag(n);
        }
        setAsyncValidators(n) {
          this.asyncValidator = cg(n);
        }
        clearValidators() {
          this.validator = null;
        }
        clearAsyncValidators() {
          this.asyncValidator = null;
        }
        markAsTouched(n = {}) {
          (this.touched = !0), this._parent && !n.onlySelf && this._parent.markAsTouched(n);
        }
        markAllAsTouched() {
          this.markAsTouched({ onlySelf: !0 }), this._forEachChild(n => n.markAllAsTouched());
        }
        markAsUntouched(n = {}) {
          (this.touched = !1),
            (this._pendingTouched = !1),
            this._forEachChild(n => {
              n.markAsUntouched({ onlySelf: !0 });
            }),
            this._parent && !n.onlySelf && this._parent._updateTouched(n);
        }
        markAsDirty(n = {}) {
          (this.pristine = !1), this._parent && !n.onlySelf && this._parent.markAsDirty(n);
        }
        markAsPristine(n = {}) {
          (this.pristine = !0),
            (this._pendingDirty = !1),
            this._forEachChild(n => {
              n.markAsPristine({ onlySelf: !0 });
            }),
            this._parent && !n.onlySelf && this._parent._updatePristine(n);
        }
        markAsPending(n = {}) {
          (this.status = 'PENDING'),
            !1 !== n.emitEvent && this.statusChanges.emit(this.status),
            this._parent && !n.onlySelf && this._parent.markAsPending(n);
        }
        disable(n = {}) {
          const t = this._parentMarkedDirty(n.onlySelf);
          (this.status = 'DISABLED'),
            (this.errors = null),
            this._forEachChild(t => {
              t.disable(Object.assign({}, n, { onlySelf: !0 }));
            }),
            this._updateValue(),
            !1 !== n.emitEvent &&
              (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)),
            this._updateAncestors(Object.assign({}, n, { skipPristineCheck: t })),
            this._onDisabledChange.forEach(n => n(!0));
        }
        enable(n = {}) {
          const t = this._parentMarkedDirty(n.onlySelf);
          (this.status = 'VALID'),
            this._forEachChild(t => {
              t.enable(Object.assign({}, n, { onlySelf: !0 }));
            }),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: n.emitEvent }),
            this._updateAncestors(Object.assign({}, n, { skipPristineCheck: t })),
            this._onDisabledChange.forEach(n => n(!1));
        }
        _updateAncestors(n) {
          this._parent &&
            !n.onlySelf &&
            (this._parent.updateValueAndValidity(n),
            n.skipPristineCheck || this._parent._updatePristine(),
            this._parent._updateTouched());
        }
        setParent(n) {
          this._parent = n;
        }
        updateValueAndValidity(n = {}) {
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
        _updateTreeValidity(n = { emitEvent: !0 }) {
          this._forEachChild(t => t._updateTreeValidity(n)),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: n.emitEvent });
        }
        _setInitialStatus() {
          this.status = this._allControlsDisabled() ? 'DISABLED' : 'VALID';
        }
        _runValidator() {
          return this.validator ? this.validator(this) : null;
        }
        _runAsyncValidator(n) {
          if (this.asyncValidator) {
            this.status = 'PENDING';
            const t = Gp(this.asyncValidator(this));
            this._asyncValidationSubscription = t.subscribe(t =>
              this.setErrors(t, { emitEvent: n })
            );
          }
        }
        _cancelExistingSubscription() {
          this._asyncValidationSubscription && this._asyncValidationSubscription.unsubscribe();
        }
        setErrors(n, t = {}) {
          (this.errors = n), this._updateControlsErrors(!1 !== t.emitEvent);
        }
        get(n) {
          return (function(n, t, e) {
            return null == t
              ? null
              : (t instanceof Array || (t = t.split('.')),
                t instanceof Array && 0 === t.length
                  ? null
                  : t.reduce(
                      (n, t) =>
                        n instanceof gg
                          ? n.controls.hasOwnProperty(t)
                            ? n.controls[t]
                            : null
                          : (n instanceof fg && n.at(t)) || null,
                      n
                    ));
          })(this, n);
        }
        getError(n, t) {
          const e = t ? this.get(t) : this;
          return e && e.errors ? e.errors[n] : null;
        }
        hasError(n, t) {
          return !!this.getError(n, t);
        }
        get root() {
          let n = this;
          for (; n._parent; ) n = n._parent;
          return n;
        }
        _updateControlsErrors(n) {
          (this.status = this._calculateStatus()),
            n && this.statusChanges.emit(this.status),
            this._parent && this._parent._updateControlsErrors(n);
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
        _anyControlsHaveStatus(n) {
          return this._anyControls(t => t.status === n);
        }
        _anyControlsDirty() {
          return this._anyControls(n => n.dirty);
        }
        _anyControlsTouched() {
          return this._anyControls(n => n.touched);
        }
        _updatePristine(n = {}) {
          (this.pristine = !this._anyControlsDirty()),
            this._parent && !n.onlySelf && this._parent._updatePristine(n);
        }
        _updateTouched(n = {}) {
          (this.touched = this._anyControlsTouched()),
            this._parent && !n.onlySelf && this._parent._updateTouched(n);
        }
        _isBoxedValue(n) {
          return (
            'object' == typeof n &&
            null !== n &&
            2 === Object.keys(n).length &&
            'value' in n &&
            'disabled' in n
          );
        }
        _registerOnCollectionChange(n) {
          this._onCollectionChange = n;
        }
        _setUpdateStrategy(n) {
          hg(n) && null != n.updateOn && (this._updateOn = n.updateOn);
        }
        _parentMarkedDirty(n) {
          return !n && this._parent && this._parent.dirty && !this._parent._anyControlsDirty();
        }
      }
      class pg extends dg {
        constructor(n = null, t, e) {
          super(ag(t), cg(e, t)),
            (this._onChange = []),
            this._applyFormState(n),
            this._setUpdateStrategy(t),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 }),
            this._initObservables();
        }
        setValue(n, t = {}) {
          (this.value = this._pendingValue = n),
            this._onChange.length &&
              !1 !== t.emitModelToViewChange &&
              this._onChange.forEach(n => n(this.value, !1 !== t.emitViewToModelChange)),
            this.updateValueAndValidity(t);
        }
        patchValue(n, t = {}) {
          this.setValue(n, t);
        }
        reset(n = null, t = {}) {
          this._applyFormState(n),
            this.markAsPristine(t),
            this.markAsUntouched(t),
            this.setValue(this.value, t),
            (this._pendingChange = !1);
        }
        _updateValue() {}
        _anyControls(n) {
          return !1;
        }
        _allControlsDisabled() {
          return this.disabled;
        }
        registerOnChange(n) {
          this._onChange.push(n);
        }
        _clearChangeFns() {
          (this._onChange = []),
            (this._onDisabledChange = []),
            (this._onCollectionChange = () => {});
        }
        registerOnDisabledChange(n) {
          this._onDisabledChange.push(n);
        }
        _forEachChild(n) {}
        _syncPendingControls() {
          return !(
            'submit' !== this.updateOn ||
            (this._pendingDirty && this.markAsDirty(),
            this._pendingTouched && this.markAsTouched(),
            !this._pendingChange) ||
            (this.setValue(this._pendingValue, { onlySelf: !0, emitModelToViewChange: !1 }), 0)
          );
        }
        _applyFormState(n) {
          this._isBoxedValue(n)
            ? ((this.value = this._pendingValue = n.value),
              n.disabled
                ? this.disable({ onlySelf: !0, emitEvent: !1 })
                : this.enable({ onlySelf: !0, emitEvent: !1 }))
            : (this.value = this._pendingValue = n);
        }
      }
      class gg extends dg {
        constructor(n, t, e) {
          super(ag(t), cg(e, t)),
            (this.controls = n),
            this._initObservables(),
            this._setUpdateStrategy(t),
            this._setUpControls(),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 });
        }
        registerControl(n, t) {
          return this.controls[n]
            ? this.controls[n]
            : ((this.controls[n] = t),
              t.setParent(this),
              t._registerOnCollectionChange(this._onCollectionChange),
              t);
        }
        addControl(n, t) {
          this.registerControl(n, t), this.updateValueAndValidity(), this._onCollectionChange();
        }
        removeControl(n) {
          this.controls[n] && this.controls[n]._registerOnCollectionChange(() => {}),
            delete this.controls[n],
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        setControl(n, t) {
          this.controls[n] && this.controls[n]._registerOnCollectionChange(() => {}),
            delete this.controls[n],
            t && this.registerControl(n, t),
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        contains(n) {
          return this.controls.hasOwnProperty(n) && this.controls[n].enabled;
        }
        setValue(n, t = {}) {
          this._checkAllValuesPresent(n),
            Object.keys(n).forEach(e => {
              this._throwIfControlMissing(e),
                this.controls[e].setValue(n[e], { onlySelf: !0, emitEvent: t.emitEvent });
            }),
            this.updateValueAndValidity(t);
        }
        patchValue(n, t = {}) {
          Object.keys(n).forEach(e => {
            this.controls[e] &&
              this.controls[e].patchValue(n[e], { onlySelf: !0, emitEvent: t.emitEvent });
          }),
            this.updateValueAndValidity(t);
        }
        reset(n = {}, t = {}) {
          this._forEachChild((e, l) => {
            e.reset(n[l], { onlySelf: !0, emitEvent: t.emitEvent });
          }),
            this._updatePristine(t),
            this._updateTouched(t),
            this.updateValueAndValidity(t);
        }
        getRawValue() {
          return this._reduceChildren(
            {},
            (n, t, e) => ((n[e] = t instanceof pg ? t.value : t.getRawValue()), n)
          );
        }
        _syncPendingControls() {
          let n = this._reduceChildren(!1, (n, t) => !!t._syncPendingControls() || n);
          return n && this.updateValueAndValidity({ onlySelf: !0 }), n;
        }
        _throwIfControlMissing(n) {
          if (!Object.keys(this.controls).length)
            throw new Error(
              "\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "
            );
          if (!this.controls[n]) throw new Error(`Cannot find form control with name: ${n}.`);
        }
        _forEachChild(n) {
          Object.keys(this.controls).forEach(t => n(this.controls[t], t));
        }
        _setUpControls() {
          this._forEachChild(n => {
            n.setParent(this), n._registerOnCollectionChange(this._onCollectionChange);
          });
        }
        _updateValue() {
          this.value = this._reduceValue();
        }
        _anyControls(n) {
          let t = !1;
          return (
            this._forEachChild((e, l) => {
              t = t || (this.contains(l) && n(e));
            }),
            t
          );
        }
        _reduceValue() {
          return this._reduceChildren(
            {},
            (n, t, e) => ((t.enabled || this.disabled) && (n[e] = t.value), n)
          );
        }
        _reduceChildren(n, t) {
          let e = n;
          return (
            this._forEachChild((n, l) => {
              e = t(e, n, l);
            }),
            e
          );
        }
        _allControlsDisabled() {
          for (const n of Object.keys(this.controls)) if (this.controls[n].enabled) return !1;
          return Object.keys(this.controls).length > 0 || this.disabled;
        }
        _checkAllValuesPresent(n) {
          this._forEachChild((t, e) => {
            if (void 0 === n[e])
              throw new Error(`Must supply a value for form control with name: '${e}'.`);
          });
        }
      }
      class fg extends dg {
        constructor(n, t, e) {
          super(ag(t), cg(e, t)),
            (this.controls = n),
            this._initObservables(),
            this._setUpdateStrategy(t),
            this._setUpControls(),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 });
        }
        at(n) {
          return this.controls[n];
        }
        push(n) {
          this.controls.push(n),
            this._registerControl(n),
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        insert(n, t) {
          this.controls.splice(n, 0, t), this._registerControl(t), this.updateValueAndValidity();
        }
        removeAt(n) {
          this.controls[n] && this.controls[n]._registerOnCollectionChange(() => {}),
            this.controls.splice(n, 1),
            this.updateValueAndValidity();
        }
        setControl(n, t) {
          this.controls[n] && this.controls[n]._registerOnCollectionChange(() => {}),
            this.controls.splice(n, 1),
            t && (this.controls.splice(n, 0, t), this._registerControl(t)),
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        get length() {
          return this.controls.length;
        }
        setValue(n, t = {}) {
          this._checkAllValuesPresent(n),
            n.forEach((n, e) => {
              this._throwIfControlMissing(e),
                this.at(e).setValue(n, { onlySelf: !0, emitEvent: t.emitEvent });
            }),
            this.updateValueAndValidity(t);
        }
        patchValue(n, t = {}) {
          n.forEach((n, e) => {
            this.at(e) && this.at(e).patchValue(n, { onlySelf: !0, emitEvent: t.emitEvent });
          }),
            this.updateValueAndValidity(t);
        }
        reset(n = [], t = {}) {
          this._forEachChild((e, l) => {
            e.reset(n[l], { onlySelf: !0, emitEvent: t.emitEvent });
          }),
            this._updatePristine(t),
            this._updateTouched(t),
            this.updateValueAndValidity(t);
        }
        getRawValue() {
          return this.controls.map(n => (n instanceof pg ? n.value : n.getRawValue()));
        }
        clear() {
          this.controls.length < 1 ||
            (this._forEachChild(n => n._registerOnCollectionChange(() => {})),
            this.controls.splice(0),
            this.updateValueAndValidity());
        }
        _syncPendingControls() {
          let n = this.controls.reduce((n, t) => !!t._syncPendingControls() || n, !1);
          return n && this.updateValueAndValidity({ onlySelf: !0 }), n;
        }
        _throwIfControlMissing(n) {
          if (!this.controls.length)
            throw new Error(
              "\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "
            );
          if (!this.at(n)) throw new Error(`Cannot find form control at index ${n}`);
        }
        _forEachChild(n) {
          this.controls.forEach((t, e) => {
            n(t, e);
          });
        }
        _updateValue() {
          this.value = this.controls.filter(n => n.enabled || this.disabled).map(n => n.value);
        }
        _anyControls(n) {
          return this.controls.some(t => t.enabled && n(t));
        }
        _setUpControls() {
          this._forEachChild(n => this._registerControl(n));
        }
        _checkAllValuesPresent(n) {
          this._forEachChild((t, e) => {
            if (void 0 === n[e])
              throw new Error(`Must supply a value for form control at index: ${e}.`);
          });
        }
        _allControlsDisabled() {
          for (const n of this.controls) if (n.enabled) return !1;
          return this.controls.length > 0 || this.disabled;
        }
        _registerControl(n) {
          n.setParent(this), n._registerOnCollectionChange(this._onCollectionChange);
        }
      }
      const mg = new Sn('NgFormSelectorWarning');
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
          return ng(this.name, this._parent);
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
      const yg = new Sn('NgModelWithFormControlWarning');
      class wg extends Vp {
        constructor(n, t) {
          super(),
            (this._validators = n),
            (this._asyncValidators = t),
            (this.submitted = !1),
            (this.directives = []),
            (this.form = null),
            (this.ngSubmit = new _r());
        }
        ngOnChanges(n) {
          this._checkFormPresent(),
            n.hasOwnProperty('form') &&
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
        addControl(n) {
          const t = this.form.get(n.path);
          return tg(t, n), t.updateValueAndValidity({ emitEvent: !1 }), this.directives.push(n), t;
        }
        getControl(n) {
          return this.form.get(n.path);
        }
        removeControl(n) {
          !(function(n, t) {
            const e = n.indexOf(t);
            e > -1 && n.splice(e, 1);
          })(this.directives, n);
        }
        addFormGroup(n) {
          const t = this.form.get(n.path);
          lg(t, n), t.updateValueAndValidity({ emitEvent: !1 });
        }
        removeFormGroup(n) {}
        getFormGroup(n) {
          return this.form.get(n.path);
        }
        addFormArray(n) {
          const t = this.form.get(n.path);
          lg(t, n), t.updateValueAndValidity({ emitEvent: !1 });
        }
        removeFormArray(n) {}
        getFormArray(n) {
          return this.form.get(n.path);
        }
        updateModel(n, t) {
          this.form.get(n.path).setValue(t);
        }
        onSubmit(n) {
          return (
            (this.submitted = !0),
            (t = this.directives),
            this.form._syncPendingControls(),
            t.forEach(n => {
              const t = n.control;
              'submit' === t.updateOn &&
                t._pendingChange &&
                (n.viewToModelUpdate(t._pendingValue), (t._pendingChange = !1));
            }),
            this.ngSubmit.emit(n),
            !1
          );
          var t;
        }
        onReset() {
          this.resetForm();
        }
        resetForm(n) {
          this.form.reset(n), (this.submitted = !1);
        }
        _updateDomValue() {
          this.directives.forEach(n => {
            const t = this.form.get(n.path);
            n.control !== t &&
              ((function(n, t) {
                t.valueAccessor.registerOnChange(() => rg(t)),
                  t.valueAccessor.registerOnTouched(() => rg(t)),
                  t._rawValidators.forEach(n => {
                    n.registerOnValidatorChange && n.registerOnValidatorChange(null);
                  }),
                  t._rawAsyncValidators.forEach(n => {
                    n.registerOnValidatorChange && n.registerOnValidatorChange(null);
                  }),
                  n && n._clearChangeFns();
              })(n.control, n),
              t && tg(t, n),
              (n.control = t));
          }),
            this.form._updateTreeValidity({ emitEvent: !1 });
        }
        _updateRegistrations() {
          this.form._registerOnCollectionChange(() => this._updateDomValue()),
            this._oldForm && this._oldForm._registerOnCollectionChange(() => {}),
            (this._oldForm = this.form);
        }
        _updateValidators() {
          const n = ig(this._validators);
          this.form.validator = qp.compose([this.form.validator, n]);
          const t = og(this._asyncValidators);
          this.form.asyncValidator = qp.composeAsync([this.form.asyncValidator, t]);
        }
        _checkFormPresent() {
          this.form || Xp.missingFormException();
        }
      }
      class bg extends _g {
        constructor(n, t, e) {
          super(), (this._parent = n), (this._validators = t), (this._asyncValidators = e);
        }
        _checkParentType() {
          xg(this._parent) && Xp.groupParentException();
        }
      }
      class Cg extends Vp {
        constructor(n, t, e) {
          super(), (this._parent = n), (this._validators = t), (this._asyncValidators = e);
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
          return ng(this.name, this._parent);
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
      function xg(n) {
        return !(n instanceof bg || n instanceof wg || n instanceof Cg);
      }
      let kg = (() => {
        class n extends Lp {
          constructor(n, t, e, l, r) {
            super(),
              (this._ngModelWarningConfig = r),
              (this._added = !1),
              (this.update = new _r()),
              (this._ngModelWarningSent = !1),
              (this._parent = n),
              (this._rawValidators = t || []),
              (this._rawAsyncValidators = e || []),
              (this.valueAccessor = (function(n, t) {
                if (!t) return null;
                Array.isArray(t) ||
                  sg(n, 'Value accessor was not provided as an array for form control with');
                let e = void 0,
                  l = void 0,
                  r = void 0;
                return (
                  t.forEach(t => {
                    var s;
                    t.constructor === Rp
                      ? (e = t)
                      : ((s = t),
                        ug.some(n => s.constructor === n)
                          ? (l &&
                              sg(
                                n,
                                'More than one built-in value accessor matches form control with'
                              ),
                            (l = t))
                          : (r &&
                              sg(
                                n,
                                'More than one custom value accessor matches form control with'
                              ),
                            (r = t)));
                  }),
                  r || l || e || (sg(n, 'No valid value accessor for form control with'), null)
                );
              })(this, l));
          }
          set isDisabled(n) {
            Xp.disabledAttrWarning();
          }
          ngOnChanges(t) {
            var e, l;
            this._added || this._setUpControl(),
              (function(n, t) {
                if (!n.hasOwnProperty('model')) return !1;
                const e = n.model;
                return !!e.isFirstChange() || !Ut(t, e.currentValue);
              })(t, this.viewModel) &&
                ('formControlName',
                (e = n),
                this,
                (l = this._ngModelWarningConfig),
                Zn() &&
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
          viewToModelUpdate(n) {
            (this.viewModel = n), this.update.emit(n);
          }
          get path() {
            return ng(this.name, this._parent);
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
        return (n._ngModelWarningSentOnce = !1), n;
      })();
      class Eg {
        get required() {
          return this._required;
        }
        set required(n) {
          (this._required = null != n && !1 !== n && 'false' !== `${n}`),
            this._onChange && this._onChange();
        }
        validate(n) {
          return this.required ? qp.required(n) : null;
        }
        registerOnValidatorChange(n) {
          this._onChange = n;
        }
      }
      class Sg {}
      class Og {
        group(n, t = null) {
          const e = this._reduceControls(n);
          let l = null,
            r = null,
            s = void 0;
          return (
            null != t &&
              ((function(n) {
                return (
                  void 0 !== n.asyncValidators || void 0 !== n.validators || void 0 !== n.updateOn
                );
              })(t)
                ? ((l = null != t.validators ? t.validators : null),
                  (r = null != t.asyncValidators ? t.asyncValidators : null),
                  (s = null != t.updateOn ? t.updateOn : void 0))
                : ((l = null != t.validator ? t.validator : null),
                  (r = null != t.asyncValidator ? t.asyncValidator : null))),
            new gg(e, { asyncValidators: r, updateOn: s, validators: l })
          );
        }
        control(n, t, e) {
          return new pg(n, t, e);
        }
        array(n, t, e) {
          const l = n.map(n => this._createControl(n));
          return new fg(l, t, e);
        }
        _reduceControls(n) {
          const t = {};
          return (
            Object.keys(n).forEach(e => {
              t[e] = this._createControl(n[e]);
            }),
            t
          );
        }
        _createControl(n) {
          return n instanceof pg || n instanceof gg || n instanceof fg
            ? n
            : Array.isArray(n)
            ? this.control(n[0], n.length > 1 ? n[1] : null, n.length > 2 ? n[2] : null)
            : this.control(n);
        }
      }
      class Pg {
        static withConfig(n) {
          return {
            ngModule: Pg,
            providers: [{ provide: mg, useValue: n.warnOnDeprecatedNgFormSelector }]
          };
        }
      }
      class Mg {
        static withConfig(n) {
          return {
            ngModule: Mg,
            providers: [{ provide: yg, useValue: n.warnOnNgModelWithFormControl }]
          };
        }
      }
      class Tg {
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
            '.section[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto 20px}@media (max-width:540px){.section[_ngcontent-%COMP%]{margin:0}}.title-wrapper[_ngcontent-%COMP%]{position:relative}.title-wrapper[_ngcontent-%COMP%]:after{content:"";background:#dcdcdc;position:absolute;left:0;top:50%;margin-top:-.5px;display:block;width:100%;height:1px;z-index:-1}.text[_ngcontent-%COMP%]{background:#fff;margin:15px 20px;padding:0 10px;display:inline-block;text-transform:uppercase;font-family:Arial,sans-serif;color:#494940}label[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;padding-right:10px}.textarea[_ngcontent-%COMP%]{resize:none;min-height:100px;border-radius:3px;margin-top:6px;padding:6px}.button[_ngcontent-%COMP%]{padding:10px 20px;margin:10px 0 5px;color:#fff;background-color:#444;border:0;border-radius:3px;text-transform:uppercase}.button[_ngcontent-%COMP%]:hover{background-color:#ff4800;color:#fff}.form[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);grid-column-gap:10px}.form[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{grid-column:1/span 2}.form[_ngcontent-%COMP%]   .item--fieldset[_ngcontent-%COMP%]{grid-column:1;display:grid;grid-template-columns:100px auto;padding-left:20px}.form[_ngcontent-%COMP%]   .item--message[_ngcontent-%COMP%]{grid-column:2;display:grid}@media (max-width:850px){.form[_ngcontent-%COMP%]{grid-template-columns:1fr 2fr;padding:0 10px}.form[_ngcontent-%COMP%]   .item--fieldset[_ngcontent-%COMP%]{grid-template-columns:auto;padding:0}.form[_ngcontent-%COMP%]   .form__label[_ngcontent-%COMP%]{display:none}}@media (max-width:480px){.form[_ngcontent-%COMP%]{grid-template-columns:auto}.form[_ngcontent-%COMP%]   .item--fieldset[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   .item--message[_ngcontent-%COMP%]{grid-column:1}.form[_ngcontent-%COMP%]   .form__input[_ngcontent-%COMP%]{padding:10px 6px}}input[_ngcontent-%COMP%]{outline:0;margin:5px 0;border-radius:3px;padding:0 10px;border:1px solid #a9a9a9}svg[_ngcontent-%COMP%]{margin:5px 10px;width:22px;height:22px;fill:#444}'
          ]
        ],
        data: {}
      });
      function Ig(n) {
        return Bs(
          0,
          [
            (n()(),
            Ts(
              0,
              0,
              null,
              null,
              62,
              'section',
              [['class', 'section']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
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
            (n()(),
            Ts(2, 0, null, null, 2, 'h2', [['class', 'title']], null, null, null, null, null)),
            (n()(),
            Ts(3, 0, null, null, 1, 'span', [['class', 'text']], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u0417\u0410\u0414\u0410\u0419\u0422\u0415 \u0412\u041e\u041f\u0420\u041e\u0421\u042b'
            ])),
            (n()(),
            Ts(
              5,
              0,
              null,
              null,
              57,
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
              function(n, t, e) {
                var l = !0;
                return (
                  'submit' === t && (l = !1 !== Ll(n, 7).onSubmit(e) && l),
                  'reset' === t && (l = !1 !== Ll(n, 7).onReset() && l),
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
            (n()(),
            Ts(
              10,
              0,
              null,
              null,
              39,
              'div',
              [['class', 'form__item item item--fieldset']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Ts(
              11,
              0,
              null,
              null,
              4,
              'label',
              [['class', 'form__label label']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Ts(
              12,
              0,
              null,
              null,
              1,
              ':svg:svg',
              [['class', 'label__svg svg__user svg']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
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
            (n()(),
            Ts(
              14,
              0,
              null,
              null,
              1,
              'span',
              [['class', 'label__text']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Hs(-1, null, ['\u0418\u043c\u044f'])),
            (n()(),
            Ts(
              16,
              0,
              null,
              null,
              7,
              'input',
              [
                ['class', 'form__input input'],
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
              function(n, t, e) {
                var l = !0;
                return (
                  'input' === t && (l = !1 !== Ll(n, 17)._handleInput(e.target.value) && l),
                  'blur' === t && (l = !1 !== Ll(n, 17).onTouched() && l),
                  'compositionstart' === t && (l = !1 !== Ll(n, 17)._compositionStart() && l),
                  'compositionend' === t &&
                    (l = !1 !== Ll(n, 17)._compositionEnd(e.target.value) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(17, 16384, null, 0, Rp, [se, ne, [2, Ip]], null, null),
            Ql(18, 16384, null, 0, Eg, [], { required: [0, 'required'] }, null),
            Yl(
              1024,
              null,
              Hp,
              function(n) {
                return [n];
              },
              [Eg]
            ),
            Yl(
              1024,
              null,
              Ap,
              function(n) {
                return [n];
              },
              [Rp]
            ),
            Ql(
              21,
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
            Ql(23, 16384, null, 0, jp, [[4, Lp]], null, null),
            (n()(),
            Ts(
              24,
              0,
              null,
              null,
              4,
              'label',
              [['class', 'form__label label']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Ts(
              25,
              0,
              null,
              null,
              1,
              ':svg:svg',
              [['class', 'label__svg svg__letter svg']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Ts(
              26,
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
            (n()(),
            Ts(
              27,
              0,
              null,
              null,
              1,
              'span',
              [['class', 'label__text']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Hs(-1, null, ['Email'])),
            (n()(),
            Ts(
              29,
              0,
              null,
              null,
              7,
              'input',
              [
                ['class', 'form__input input'],
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
              function(n, t, e) {
                var l = !0;
                return (
                  'input' === t && (l = !1 !== Ll(n, 30)._handleInput(e.target.value) && l),
                  'blur' === t && (l = !1 !== Ll(n, 30).onTouched() && l),
                  'compositionstart' === t && (l = !1 !== Ll(n, 30)._compositionStart() && l),
                  'compositionend' === t &&
                    (l = !1 !== Ll(n, 30)._compositionEnd(e.target.value) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(30, 16384, null, 0, Rp, [se, ne, [2, Ip]], null, null),
            Ql(31, 16384, null, 0, Eg, [], { required: [0, 'required'] }, null),
            Yl(
              1024,
              null,
              Hp,
              function(n) {
                return [n];
              },
              [Eg]
            ),
            Yl(
              1024,
              null,
              Ap,
              function(n) {
                return [n];
              },
              [Rp]
            ),
            Ql(
              34,
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
            Ql(36, 16384, null, 0, jp, [[4, Lp]], null, null),
            (n()(),
            Ts(
              37,
              0,
              null,
              null,
              4,
              'label',
              [['class', 'form__label label']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Ts(
              38,
              0,
              null,
              null,
              1,
              ':svg:svg',
              [['class', 'label__svg svg__newspaper svg']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Ts(
              39,
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
            (n()(),
            Ts(
              40,
              0,
              null,
              null,
              1,
              'span',
              [['class', 'label__text']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), Hs(-1, null, ['\u0422\u0435\u043c\u0430'])),
            (n()(),
            Ts(
              42,
              0,
              null,
              null,
              7,
              'input',
              [
                ['class', 'form__input input'],
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
              function(n, t, e) {
                var l = !0;
                return (
                  'input' === t && (l = !1 !== Ll(n, 43)._handleInput(e.target.value) && l),
                  'blur' === t && (l = !1 !== Ll(n, 43).onTouched() && l),
                  'compositionstart' === t && (l = !1 !== Ll(n, 43)._compositionStart() && l),
                  'compositionend' === t &&
                    (l = !1 !== Ll(n, 43)._compositionEnd(e.target.value) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(43, 16384, null, 0, Rp, [se, ne, [2, Ip]], null, null),
            Ql(44, 16384, null, 0, Eg, [], { required: [0, 'required'] }, null),
            Yl(
              1024,
              null,
              Hp,
              function(n) {
                return [n];
              },
              [Eg]
            ),
            Yl(
              1024,
              null,
              Ap,
              function(n) {
                return [n];
              },
              [Rp]
            ),
            Ql(
              47,
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
            Ql(49, 16384, null, 0, jp, [[4, Lp]], null, null),
            (n()(),
            Ts(
              50,
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
            (n()(),
            Ts(
              51,
              0,
              null,
              null,
              1,
              'label',
              [['class', 'form__label label']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(),
            Hs(-1, null, [
              '\u0412\u0430\u0448\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435'
            ])),
            (n()(),
            Ts(
              53,
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
              function(n, t, e) {
                var l = !0;
                return (
                  'input' === t && (l = !1 !== Ll(n, 54)._handleInput(e.target.value) && l),
                  'blur' === t && (l = !1 !== Ll(n, 54).onTouched() && l),
                  'compositionstart' === t && (l = !1 !== Ll(n, 54)._compositionStart() && l),
                  'compositionend' === t &&
                    (l = !1 !== Ll(n, 54)._compositionEnd(e.target.value) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(54, 16384, null, 0, Rp, [se, ne, [2, Ip]], null, null),
            Ql(55, 16384, null, 0, Eg, [], { required: [0, 'required'] }, null),
            Yl(
              1024,
              null,
              Hp,
              function(n) {
                return [n];
              },
              [Eg]
            ),
            Yl(
              1024,
              null,
              Ap,
              function(n) {
                return [n];
              },
              [Rp]
            ),
            Ql(
              58,
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
            Ql(60, 16384, null, 0, jp, [[4, Lp]], null, null),
            (n()(),
            Ts(
              61,
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
            (n()(), Hs(-1, null, ['\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c']))
          ],
          function(n, t) {
            n(t, 7, 0, t.component.formQuestion),
              n(t, 18, 0, ''),
              n(t, 21, 0, 'formName'),
              n(t, 31, 0, ''),
              n(t, 34, 0, 'formEmail'),
              n(t, 44, 0, ''),
              n(t, 47, 0, 'formTopic'),
              n(t, 55, 0, ''),
              n(t, 58, 0, 'formMessage');
          },
          function(n, t) {
            n(
              t,
              5,
              0,
              Ll(t, 9).ngClassUntouched,
              Ll(t, 9).ngClassTouched,
              Ll(t, 9).ngClassPristine,
              Ll(t, 9).ngClassDirty,
              Ll(t, 9).ngClassValid,
              Ll(t, 9).ngClassInvalid,
              Ll(t, 9).ngClassPending
            ),
              n(
                t,
                16,
                0,
                Ll(t, 18).required ? '' : null,
                Ll(t, 23).ngClassUntouched,
                Ll(t, 23).ngClassTouched,
                Ll(t, 23).ngClassPristine,
                Ll(t, 23).ngClassDirty,
                Ll(t, 23).ngClassValid,
                Ll(t, 23).ngClassInvalid,
                Ll(t, 23).ngClassPending
              ),
              n(
                t,
                29,
                0,
                Ll(t, 31).required ? '' : null,
                Ll(t, 36).ngClassUntouched,
                Ll(t, 36).ngClassTouched,
                Ll(t, 36).ngClassPristine,
                Ll(t, 36).ngClassDirty,
                Ll(t, 36).ngClassValid,
                Ll(t, 36).ngClassInvalid,
                Ll(t, 36).ngClassPending
              ),
              n(
                t,
                42,
                0,
                Ll(t, 44).required ? '' : null,
                Ll(t, 49).ngClassUntouched,
                Ll(t, 49).ngClassTouched,
                Ll(t, 49).ngClassPristine,
                Ll(t, 49).ngClassDirty,
                Ll(t, 49).ngClassValid,
                Ll(t, 49).ngClassInvalid,
                Ll(t, 49).ngClassPending
              ),
              n(
                t,
                53,
                0,
                Ll(t, 55).required ? '' : null,
                Ll(t, 60).ngClassUntouched,
                Ll(t, 60).ngClassTouched,
                Ll(t, 60).ngClassPristine,
                Ll(t, 60).ngClassDirty,
                Ll(t, 60).ngClassValid,
                Ll(t, 60).ngClassInvalid,
                Ll(t, 60).ngClassPending
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
            '*[_ngcontent-%COMP%]{box-sizing:border-box}.section[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto 20px}.title-wrapper[_ngcontent-%COMP%]{position:relative}a[_ngcontent-%COMP%], li[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}a[_ngcontent-%COMP%]{padding:2px 0}.title-wrapper[_ngcontent-%COMP%]:after{content:"";background:#dcdcdc;position:absolute;left:0;top:50%;margin-top:-.5px;display:block;width:100%;height:1px;z-index:-1}.text[_ngcontent-%COMP%]{background:#fff;margin:15px 20px;padding:0 10px;display:inline-block;text-transform:uppercase;font-family:Arial,sans-serif;color:#494940}img[_ngcontent-%COMP%]{max-width:230px;width:100%}.svg[_ngcontent-%COMP%]{margin:5px 10px;width:22px;height:22px;fill:currentColor}.container__contacts[_ngcontent-%COMP%]{padding:0 0 0 20px}@media (max-width:850px){.container__contacts[_ngcontent-%COMP%]{padding:0 10px}}.catalog_list[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,auto);grid-gap:10px;padding:0 10px}.catalog_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{display:grid;padding:10px;background-color:#fafafa;border:1px solid #e0e0e0;box-shadow:inset 0 1px 1px #fff;border-radius:5px;-webkit-transition:.5s;transition:.5s}.catalog_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover{border:1px solid #ff4800;-webkit-transform:scale(1.03);transform:scale(1.03)}.catalog_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{display:grid;justify-items:center}.catalog_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{align-self:end;justify-self:center}.catalog_list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{align-self:center}.box[_ngcontent-%COMP%]{padding:0 10px;display:grid;grid-template-columns:auto 300px}.box_guaranty[_ngcontent-%COMP%]{padding:0 10px;color:#525252}.list_options[_ngcontent-%COMP%]{display:-webkit-box;display:flex;flex-flow:wrap}.list_options[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:10px}.list_aside[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.list_aside[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}'
          ]
        ],
        data: {}
      });
      function Vg(n) {
        return Bs(
          0,
          [
            (n()(),
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
            (n()(),
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
            (n()(),
            Ts(2, 0, null, null, 2, 'h2', [['class', 'title']], null, null, null, null, null)),
            (n()(),
            Ts(3, 0, null, null, 1, 'span', [['class', 'text']], null, null, null, null, null)),
            (n()(), Hs(-1, null, ['\u041a\u041e\u041d\u0422\u0410\u041a\u0422\u042b'])),
            (n()(),
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
            (n()(),
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
            (n()(),
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
            (n()(),
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
            (n()(),
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
            (n()(), Ts(10, 0, null, null, 6, 'ul', [], null, null, null, null, null)),
            (n()(), Ts(11, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (n()(),
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
            (n()(), Hs(-1, null, ['+375 17 241-08-08'])),
            (n()(), Ts(14, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (n()(),
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
            (n()(), Hs(-1, null, ['+375 17 337-08-08'])),
            (n()(),
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
            (n()(),
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
            (n()(),
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
            (n()(),
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
            (n()(), Ts(21, 0, null, null, 6, 'ul', [], null, null, null, null, null)),
            (n()(), Ts(22, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (n()(),
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
            (n()(), Hs(-1, null, ['+375 29 337-30-30'])),
            (n()(), Ts(25, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (n()(),
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
            (n()(), Hs(-1, null, ['+375 29 737-20-23'])),
            (n()(),
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
            (n()(),
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
            (n()(),
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
            (n()(),
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
            (n()(), Ts(32, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (n()(), Hs(-1, null, ['info@nabludenie.by'])),
            (n()(),
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
            (n()(),
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
            (n()(),
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
            (n()(),
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
            (n()(), Ts(38, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (n()(), Hs(-1, null, ['mihail.dam'])),
            (n()(),
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
            (n()(),
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
            (n()(),
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
            (n()(),
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
            (n()(), Ts(44, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (n()(),
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
            '[_nghost-%COMP%]{max-width:1200px;margin:0 auto 20px;display:grid;grid-template-columns:repeat(3,1fr);grid-column-gap:10px}app-map-yandex[_ngcontent-%COMP%]{grid-column:1/span 3}app-question-form[_ngcontent-%COMP%]{grid-column:1/span 2}app-contact-data[_ngcontent-%COMP%]{grid-column:3}@media (max-width:850px){app-contact-data[_ngcontent-%COMP%]{display:none}app-question-form[_ngcontent-%COMP%]{grid-column:1/span 3}}'
          ]
        ],
        data: {}
      });
      function Ug(n) {
        return Bs(
          0,
          [
            (n()(), Ts(0, 0, null, null, 1, 'app-map-yandex', [], null, null, null, Mp, Pp)),
            Ql(1, 114688, null, 0, Op, [], null, null),
            (n()(), Ts(2, 0, null, null, 1, 'app-question-form', [], null, null, null, Ig, Ag)),
            Ql(3, 114688, null, 0, Tg, [], null, null),
            (n()(), Ts(4, 0, null, null, 1, 'app-contact-data', [], null, null, null, Vg, Ng)),
            Ql(5, 49152, null, 0, Rg, [], null, null)
          ],
          function(n, t) {
            n(t, 1, 0), n(t, 3, 0);
          },
          null
        );
      }
      function jg(n) {
        return Bs(
          0,
          [
            (n()(), Ts(0, 0, null, null, 1, 'app-page-contacts', [], null, null, null, Ug, Lg)),
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
      function zg(n) {
        return Bs(
          0,
          [
            (n()(),
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
            (n()(), Ts(1, 0, null, null, 1, 'h1', [['hidden', '']], null, null, null, null, null)),
            (n()(), Hs(-1, null, ['\u0414\u041c\u0414 C\u0438\u0441\u0442\u0435\u043c\u0441'])),
            (n()(),
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
            (n()(),
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
            (n()(),
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
            (n()(),
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
            (n()(),
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
            (n()(),
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
            (n()(), Ts(9, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (n()(),
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
            (n()(), Hs(-1, null, ['+375 29 337-30-30'])),
            (n()(), Ts(12, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (n()(),
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
            (n()(), Hs(-1, null, ['+375 29 737-20-23'])),
            (n()(), Ts(15, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (n()(),
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
            (n()(), Hs(-1, null, ['+375 17 241-08-08'])),
            (n()(),
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
            (n()(),
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
              function(n, t, e) {
                var l = !0;
                return (
                  'click' === t &&
                    (l = !1 !== Ll(n, 20).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(20, 671744, null, 0, Vh, [Nh, kc, eo], { routerLink: [0, 'routerLink'] }, null),
            $s(21, 1),
            (n()(),
            Ts(
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
            (n()(),
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
            (n()(), Ts(25, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (n()(),
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
            (n()(),
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
            (n()(),
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
            (n()(), Hs(-1, null, [' mihail.dam '])),
            (n()(), Ts(30, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (n()(),
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
            (n()(),
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
            (n()(),
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
            (n()(), Hs(-1, null, [' info@nabludenie.by '])),
            (n()(), Ts(35, 0, null, null, 6, 'li', [], null, null, null, null, null)),
            (n()(),
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
              function(n, t, e) {
                var l = !0;
                return (
                  'click' === t &&
                    (l = !1 !== Ll(n, 37).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(37, 671744, null, 0, Vh, [Nh, kc, eo], { routerLink: [0, 'routerLink'] }, null),
            $s(38, 1),
            (n()(),
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
            (n()(),
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
            (n()(),
            Hs(-1, null, [
              ' \u0443\u043b.\u0411\u0438\u0440\u044e\u0437\u043e\u0432\u0430 4, 3-\u0439 \u044d\u0442\u0430\u0436 '
            ])),
            (n()(),
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
            (n()(),
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
            (n()(),
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
            (n()(),
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
            (n()(), Ts(46, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (n()(),
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
              function(n, t, e) {
                var l = !0;
                return (
                  'click' === t &&
                    (l = !1 !== Ll(n, 48).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(48, 671744, null, 0, Vh, [Nh, kc, eo], { routerLink: [0, 'routerLink'] }, null),
            $s(49, 1),
            (n()(), Hs(-1, null, ['\u041a\u0410\u0422\u0410\u041b\u041e\u0413'])),
            (n()(), Ts(51, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (n()(),
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
              function(n, t, e) {
                var l = !0;
                return (
                  'click' === t &&
                    (l = !1 !== Ll(n, 53).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(53, 671744, null, 0, Vh, [Nh, kc, eo], { routerLink: [0, 'routerLink'] }, null),
            $s(54, 1),
            (n()(), Hs(-1, null, ['\u041e \u041a\u041e\u041c\u041f\u0410\u041d\u0418\u0418'])),
            (n()(), Ts(56, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (n()(),
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
              function(n, t, e) {
                var l = !0;
                return (
                  'click' === t &&
                    (l = !1 !== Ll(n, 58).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(58, 671744, null, 0, Vh, [Nh, kc, eo], { routerLink: [0, 'routerLink'] }, null),
            $s(59, 1),
            (n()(),
            Hs(-1, null, [
              '\u0422\u0415\u0425.\u041f\u041e\u0414\u0414\u0415\u0420\u0416\u041a\u0410'
            ])),
            (n()(), Ts(61, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (n()(),
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
              function(n, t, e) {
                var l = !0;
                return (
                  'click' === t &&
                    (l = !1 !== Ll(n, 63).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(63, 671744, null, 0, Vh, [Nh, kc, eo], { routerLink: [0, 'routerLink'] }, null),
            $s(64, 1),
            (n()(), Hs(-1, null, ['\u041a\u041b\u0418\u0415\u041d\u0422\u042b'])),
            (n()(), Ts(66, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (n()(),
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
              function(n, t, e) {
                var l = !0;
                return (
                  'click' === t &&
                    (l = !1 !== Ll(n, 68).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(68, 671744, null, 0, Vh, [Nh, kc, eo], { routerLink: [0, 'routerLink'] }, null),
            $s(69, 1),
            (n()(), Hs(-1, null, ['\u0421\u0422\u0410\u0422\u042c\u0418'])),
            (n()(), Ts(71, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (n()(),
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
              function(n, t, e) {
                var l = !0;
                return (
                  'click' === t &&
                    (l = !1 !== Ll(n, 73).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(73, 671744, null, 0, Vh, [Nh, kc, eo], { routerLink: [0, 'routerLink'] }, null),
            $s(74, 1),
            (n()(), Hs(-1, null, ['\u0411\u0420\u0415\u041d\u0414\u042b'])),
            (n()(), Ts(76, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (n()(),
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
              function(n, t, e) {
                var l = !0;
                return (
                  'click' === t &&
                    (l = !1 !== Ll(n, 78).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(78, 671744, null, 0, Vh, [Nh, kc, eo], { routerLink: [0, 'routerLink'] }, null),
            $s(79, 1),
            (n()(), Hs(-1, null, ['\u041a\u041e\u041d\u0422\u0410\u041a\u0422\u042b'])),
            (n()(),
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
            (n()(), Hs(-1, null, ['\u043f\u0440\u0430\u0439\u0441'])),
            (n()(),
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
            (n()(),
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
            (n()(),
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
            (n()(),
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
            (n()(),
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
          function(n, t) {
            var e = n(t, 21, 0, '/');
            n(t, 20, 0, e);
            var l = n(t, 38, 0, '/contacts');
            n(t, 37, 0, l);
            var r = n(t, 49, 0, '/catalog');
            n(t, 48, 0, r);
            var s = n(t, 54, 0, '/about');
            n(t, 53, 0, s);
            var i = n(t, 59, 0, '/support');
            n(t, 58, 0, i);
            var o = n(t, 64, 0, '/clients');
            n(t, 63, 0, o);
            var u = n(t, 69, 0, '/articles');
            n(t, 68, 0, u);
            var a = n(t, 74, 0, '/brands');
            n(t, 73, 0, a);
            var c = n(t, 79, 0, '/contacts');
            n(t, 78, 0, c);
          },
          function(n, t) {
            n(t, 19, 0, Ll(t, 20).target, Ll(t, 20).href),
              n(t, 36, 0, Ll(t, 37).target, Ll(t, 37).href),
              n(t, 47, 0, Ll(t, 48).target, Ll(t, 48).href),
              n(t, 52, 0, Ll(t, 53).target, Ll(t, 53).href),
              n(t, 57, 0, Ll(t, 58).target, Ll(t, 58).href),
              n(t, 62, 0, Ll(t, 63).target, Ll(t, 63).href),
              n(t, 67, 0, Ll(t, 68).target, Ll(t, 68).href),
              n(t, 72, 0, Ll(t, 73).target, Ll(t, 73).href),
              n(t, 77, 0, Ll(t, 78).target, Ll(t, 78).href);
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
            '[_nghost-%COMP%]{display:block}a[_ngcontent-%COMP%]{color:#fff;padding:5px 0}a[_ngcontent-%COMP%]:hover{color:#ff4800}li[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:end;align-items:flex-end}.svg[_ngcontent-%COMP%]{width:22px;height:22px;fill:#fff;margin-right:10px}.svg__letter[_ngcontent-%COMP%], .svg__location_pin[_ngcontent-%COMP%], .svg__skype_logo[_ngcontent-%COMP%]{height:17px}.item__svg_box[_ngcontent-%COMP%]{display:-webkit-box;display:flex}.footer__top_line[_ngcontent-%COMP%]{height:45px;background:#ff4800}@media (max-width:540px){.footer__top_line[_ngcontent-%COMP%]{display:none}}.footer__container[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(20px,auto) minmax(230px,290px) minmax(230px,870px) minmax(20px,auto);background:#444645;padding:45px 0}.footer__container[_ngcontent-%COMP%]   .container__contacts[_ngcontent-%COMP%]{grid-column:2}.footer__container[_ngcontent-%COMP%]   .container__catalog_list[_ngcontent-%COMP%]{grid-column:3;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column wrap;height:100%;max-height:160px}.footer__container[_ngcontent-%COMP%]   .container__catalog_list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-right:10px}@media (max-width:950px){.footer__top_line[_ngcontent-%COMP%]{height:5px}.footer__container[_ngcontent-%COMP%]   .container__catalog_list[_ngcontent-%COMP%]{max-height:220px}}@media (max-width:750px){.footer__container[_ngcontent-%COMP%]   .container__catalog_list[_ngcontent-%COMP%]{max-height:unset}}@media (max-width:540px){.footer__container[_ngcontent-%COMP%]{grid-template-columns:auto}.footer__container[_ngcontent-%COMP%]   .container__catalog_list[_ngcontent-%COMP%]{display:none}}.footer__bottom[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(20px,auto) minmax(auto,1170px) minmax(20px,auto);font-size:13px;padding:10px 0;color:#fff;background:#373737;border-top:1px solid #383938;box-shadow:inset 0 1px 0 rgba(255,255,255,.1)}.footer__bottom[_ngcontent-%COMP%]   .bottom__wrapper[_ngcontent-%COMP%]{grid-column:2}.footer__bottom[_ngcontent-%COMP%]   .bottom__text[_ngcontent-%COMP%]{color:#ccc;padding:0;margin:5px 0}'
          ]
        ],
        data: {}
      });
      function Gg(n) {
        return Bs(
          0,
          [
            (n()(),
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
            (n()(),
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
            (n()(),
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
            (n()(),
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
            (n()(),
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
            (n()(),
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
            (n()(),
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
            (n()(),
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
            (n()(), Ts(8, 0, null, null, 6, 'ul', [], null, null, null, null, null)),
            (n()(), Ts(9, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (n()(),
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
            (n()(), Hs(-1, null, ['+375 17 241-08-08'])),
            (n()(), Ts(12, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (n()(),
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
            (n()(), Hs(-1, null, ['+375 17 337-08-08'])),
            (n()(),
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
            (n()(),
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
            (n()(),
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
            (n()(),
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
            (n()(), Ts(19, 0, null, null, 6, 'ul', [], null, null, null, null, null)),
            (n()(), Ts(20, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (n()(),
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
            (n()(), Hs(-1, null, ['+375 29 337-30-30'])),
            (n()(), Ts(23, 0, null, null, 2, 'li', [], null, null, null, null, null)),
            (n()(),
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
            (n()(), Hs(-1, null, ['+375 29 737-20-23'])),
            (n()(),
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
            (n()(),
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
            (n()(),
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
            (n()(),
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
            (n()(), Ts(30, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (n()(), Hs(-1, null, ['info@nabludenie.by'])),
            (n()(),
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
            (n()(),
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
            (n()(),
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
            (n()(),
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
            (n()(), Ts(36, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (n()(), Hs(-1, null, ['mihail.dam'])),
            (n()(),
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
            (n()(),
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
              function(n, t, e) {
                var l = !0;
                return (
                  'click' === t &&
                    (l = !1 !== Ll(n, 40).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(40, 671744, null, 0, Vh, [Nh, kc, eo], { routerLink: [0, 'routerLink'] }, null),
            $s(41, 1),
            (n()(),
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
            (n()(),
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
            (n()(), Ts(44, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (n()(),
            Hs(-1, null, [
              '\u0443\u043b. \u0411\u0438\u0440\u044e\u0437\u043e\u0432\u0430 4, 3-\u0439 \u044d\u0442\u0430\u0436'
            ])),
            (n()(),
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
            (n()(), Ts(47, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (n()(),
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
              function(n, t, e) {
                var l = !0;
                return (
                  'click' === t &&
                    (l = !1 !== Ll(n, 49).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(49, 671744, null, 0, Vh, [Nh, kc, eo], { routerLink: [0, 'routerLink'] }, null),
            $s(50, 1),
            (n()(), Hs(-1, null, ['IP-\u043a\u0430\u043c\u0435\u0440\u044b'])),
            (n()(), Ts(52, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (n()(),
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
              function(n, t, e) {
                var l = !0;
                return (
                  'click' === t &&
                    (l = !1 !== Ll(n, 54).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(54, 671744, null, 0, Vh, [Nh, kc, eo], { routerLink: [0, 'routerLink'] }, null),
            $s(55, 1),
            (n()(), Hs(-1, null, ['AHD \u043a\u0430\u043c\u0435\u0440\u044b'])),
            (n()(), Ts(57, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (n()(),
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
              function(n, t, e) {
                var l = !0;
                return (
                  'click' === t &&
                    (l = !1 !== Ll(n, 59).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(59, 671744, null, 0, Vh, [Nh, kc, eo], { routerLink: [0, 'routerLink'] }, null),
            $s(60, 1),
            (n()(),
            Hs(-1, null, [
              '\u0412\u0438\u0434\u0435\u043e\u0434\u043e\u043c\u043e\u0444\u043e\u043d\u044b'
            ])),
            (n()(), Ts(62, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (n()(),
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
              function(n, t, e) {
                var l = !0;
                return (
                  'click' === t &&
                    (l = !1 !== Ll(n, 64).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(64, 671744, null, 0, Vh, [Nh, kc, eo], { routerLink: [0, 'routerLink'] }, null),
            $s(65, 1),
            (n()(), Hs(-1, null, ['\u0423\u0434\u043b\u0438\u043d\u0438\u0442\u0435\u043b\u0438'])),
            (n()(), Ts(67, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (n()(),
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
              function(n, t, e) {
                var l = !0;
                return (
                  'click' === t &&
                    (l = !1 !== Ll(n, 69).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(69, 671744, null, 0, Vh, [Nh, kc, eo], { routerLink: [0, 'routerLink'] }, null),
            $s(70, 1),
            (n()(), Hs(-1, null, ['\u0423\u043c\u043d\u044b\u0439 \u0434\u043e\u043c'])),
            (n()(), Ts(72, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (n()(),
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
              function(n, t, e) {
                var l = !0;
                return (
                  'click' === t &&
                    (l = !1 !== Ll(n, 74).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(74, 671744, null, 0, Vh, [Nh, kc, eo], { routerLink: [0, 'routerLink'] }, null),
            $s(75, 1),
            (n()(),
            Hs(-1, null, [
              '\u0411\u043b\u043e\u043a\u0438 \u043f\u0438\u0442\u0430\u043d\u0438\u044f'
            ])),
            (n()(), Ts(77, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (n()(),
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
              function(n, t, e) {
                var l = !0;
                return (
                  'click' === t &&
                    (l = !1 !== Ll(n, 79).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(79, 671744, null, 0, Vh, [Nh, kc, eo], { routerLink: [0, 'routerLink'] }, null),
            $s(80, 1),
            (n()(),
            Hs(-1, null, [
              '\u0410\u043a\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044b \u0421\u041a\u0423\u0414'
            ])),
            (n()(), Ts(82, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (n()(),
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
              function(n, t, e) {
                var l = !0;
                return (
                  'click' === t &&
                    (l = !1 !== Ll(n, 84).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(84, 671744, null, 0, Vh, [Nh, kc, eo], { routerLink: [0, 'routerLink'] }, null),
            $s(85, 1),
            (n()(),
            Hs(-1, null, [
              'GSM \u0441\u0438\u0433\u043d\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f'
            ])),
            (n()(), Ts(87, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (n()(),
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
              function(n, t, e) {
                var l = !0;
                return (
                  'click' === t &&
                    (l = !1 !== Ll(n, 89).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(89, 671744, null, 0, Vh, [Nh, kc, eo], { routerLink: [0, 'routerLink'] }, null),
            $s(90, 1),
            (n()(),
            Hs(-1, null, [
              '\u0420\u043e\u0415 \u043a\u043e\u043c\u043c\u0443\u0442\u0430\u0442\u043e\u0440\u044b'
            ])),
            (n()(), Ts(92, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (n()(),
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
              function(n, t, e) {
                var l = !0;
                return (
                  'click' === t &&
                    (l = !1 !== Ll(n, 94).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(94, 671744, null, 0, Vh, [Nh, kc, eo], { routerLink: [0, 'routerLink'] }, null),
            $s(95, 1),
            (n()(),
            Hs(-1, null, [
              'IP-\u0412\u0438\u0434\u0435\u043e\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u044b'
            ])),
            (n()(), Ts(97, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (n()(),
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
              function(n, t, e) {
                var l = !0;
                return (
                  'click' === t &&
                    (l = !1 !== Ll(n, 99).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(99, 671744, null, 0, Vh, [Nh, kc, eo], { routerLink: [0, 'routerLink'] }, null),
            $s(100, 1),
            (n()(),
            Hs(-1, null, [
              'AHD \u0432\u0438\u0434\u0435\u043e\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u044b'
            ])),
            (n()(), Ts(102, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (n()(),
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
              function(n, t, e) {
                var l = !0;
                return (
                  'click' === t &&
                    (l =
                      !1 !== Ll(n, 104).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(104, 671744, null, 0, Vh, [Nh, kc, eo], { routerLink: [0, 'routerLink'] }, null),
            $s(105, 1),
            (n()(),
            Hs(-1, null, [
              '\u0417\u0430\u043c\u043a\u0438, \u0437\u0430\u0449\u0435\u043b\u043a\u0438, \u0434\u043e\u0432\u043e\u0434\u0447\u0438\u043a\u0438'
            ])),
            (n()(), Ts(107, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (n()(),
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
              function(n, t, e) {
                var l = !0;
                return (
                  'click' === t &&
                    (l =
                      !1 !== Ll(n, 109).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(109, 671744, null, 0, Vh, [Nh, kc, eo], { routerLink: [0, 'routerLink'] }, null),
            $s(110, 1),
            (n()(),
            Hs(-1, null, [
              '\u0418\u043d\u0436\u0435\u043a\u0442\u043e\u0440\u044b \u0438 \u0441\u043f\u043b\u0438\u0442\u0442\u0435\u0440\u044b'
            ])),
            (n()(), Ts(112, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (n()(),
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
              function(n, t, e) {
                var l = !0;
                return (
                  'click' === t &&
                    (l =
                      !1 !== Ll(n, 114).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(114, 671744, null, 0, Vh, [Nh, kc, eo], { routerLink: [0, 'routerLink'] }, null),
            $s(115, 1),
            (n()(),
            Hs(-1, null, [
              '\u0410\u043a\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044b \u0438 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b'
            ])),
            (n()(), Ts(117, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (n()(),
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
              function(n, t, e) {
                var l = !0;
                return (
                  'click' === t &&
                    (l =
                      !1 !== Ll(n, 119).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(119, 671744, null, 0, Vh, [Nh, kc, eo], { routerLink: [0, 'routerLink'] }, null),
            $s(120, 1),
            (n()(),
            Hs(-1, null, [
              '\u0423\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430 \u0440\u0430\u0434\u0438\u043e\u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f'
            ])),
            (n()(), Ts(122, 0, null, null, 4, 'li', [], null, null, null, null, null)),
            (n()(),
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
              function(n, t, e) {
                var l = !0;
                return (
                  'click' === t &&
                    (l =
                      !1 !== Ll(n, 124).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && l),
                  l
                );
              },
              null,
              null
            )),
            Ql(124, 671744, null, 0, Vh, [Nh, kc, eo], { routerLink: [0, 'routerLink'] }, null),
            $s(125, 1),
            (n()(), Hs(-1, null, ['\u0411\u0440\u0435\u043d\u0434\u044b'])),
            (n()(),
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
            (n()(),
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
            (n()(),
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
            (n()(),
            Hs(-1, null, [
              '\xa9 2013- 2020. \u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 - free.'
            ])),
            (n()(),
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
            (n()(),
            Hs(-1, null, [
              '\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0441\u0430\u0439\u0442\u0430-\u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0430 \u2013 \u043e\u0431\u044b\u0447\u043d\u044b\u0439 \u043a\u0443\u0440\u0441\u043e\u0432\u043e\u0439 \u0438\u043b\u0438 \u0434\u0438\u043f\u043b\u043e\u043c\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442'
            ]))
          ],
          function(n, t) {
            var e = n(t, 41, 0, '/contacts');
            n(t, 40, 0, e);
            var l = n(t, 50, 0, '/catalog');
            n(t, 49, 0, l);
            var r = n(t, 55, 0, '/catalog');
            n(t, 54, 0, r);
            var s = n(t, 60, 0, '/catalog');
            n(t, 59, 0, s);
            var i = n(t, 65, 0, '/catalog');
            n(t, 64, 0, i);
            var o = n(t, 70, 0, '/catalog');
            n(t, 69, 0, o);
            var u = n(t, 75, 0, '/catalog');
            n(t, 74, 0, u);
            var a = n(t, 80, 0, '/catalog');
            n(t, 79, 0, a);
            var c = n(t, 85, 0, '/catalog');
            n(t, 84, 0, c);
            var h = n(t, 90, 0, '/catalog');
            n(t, 89, 0, h);
            var d = n(t, 95, 0, '/catalog');
            n(t, 94, 0, d);
            var p = n(t, 100, 0, '/catalog');
            n(t, 99, 0, p);
            var g = n(t, 105, 0, '/catalog');
            n(t, 104, 0, g);
            var f = n(t, 110, 0, '/catalog');
            n(t, 109, 0, f);
            var m = n(t, 115, 0, '/catalog');
            n(t, 114, 0, m);
            var _ = n(t, 120, 0, '/catalog');
            n(t, 119, 0, _);
            var v = n(t, 125, 0, '/catalog');
            n(t, 124, 0, v);
          },
          function(n, t) {
            n(t, 39, 0, Ll(t, 40).target, Ll(t, 40).href),
              n(t, 48, 0, Ll(t, 49).target, Ll(t, 49).href),
              n(t, 53, 0, Ll(t, 54).target, Ll(t, 54).href),
              n(t, 58, 0, Ll(t, 59).target, Ll(t, 59).href),
              n(t, 63, 0, Ll(t, 64).target, Ll(t, 64).href),
              n(t, 68, 0, Ll(t, 69).target, Ll(t, 69).href),
              n(t, 73, 0, Ll(t, 74).target, Ll(t, 74).href),
              n(t, 78, 0, Ll(t, 79).target, Ll(t, 79).href),
              n(t, 83, 0, Ll(t, 84).target, Ll(t, 84).href),
              n(t, 88, 0, Ll(t, 89).target, Ll(t, 89).href),
              n(t, 93, 0, Ll(t, 94).target, Ll(t, 94).href),
              n(t, 98, 0, Ll(t, 99).target, Ll(t, 99).href),
              n(t, 103, 0, Ll(t, 104).target, Ll(t, 104).href),
              n(t, 108, 0, Ll(t, 109).target, Ll(t, 109).href),
              n(t, 113, 0, Ll(t, 114).target, Ll(t, 114).href),
              n(t, 118, 0, Ll(t, 119).target, Ll(t, 119).href),
              n(t, 123, 0, Ll(t, 124).target, Ll(t, 124).href);
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
      function Wg(n) {
        return Bs(
          0,
          [
            (n()(),
            Ts(0, 0, null, null, 4, 'div', [['class', 'content']], null, null, null, null, null)),
            (n()(), Ts(1, 0, null, null, 1, 'app-header', [], null, null, null, zg, Hg)),
            Ql(2, 49152, null, 0, $g, [], null, null),
            (n()(),
            Ts(3, 16777216, null, null, 1, 'router-outlet', [], null, null, null, null, null)),
            Ql(4, 212992, null, 0, jh, [Uh, Se, Qt, [8, null], xt], null, null),
            (n()(), Ts(5, 0, null, null, 1, 'app-footer', [], null, null, null, Gg, Bg)),
            Ql(6, 114688, null, 0, qg, [], null, null)
          ],
          function(n, t) {
            n(t, 4, 0), n(t, 6, 0);
          },
          null
        );
      }
      function Zg(n) {
        return Bs(
          0,
          [
            (n()(), Ts(0, 0, null, null, 1, 'app-root', [], null, null, null, Wg, Kg)),
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
      class nf {}
      class tf {}
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
      var mf = Qi(Ji, [Xi], function(n) {
        return (function(n) {
          const t = {},
            e = [];
          let l = !1;
          for (let r = 0; r < n.length; r++) {
            const s = n[r];
            s.token === Et && !0 === s.value && (l = !0),
              1073741824 & s.flags && e.push(s.token),
              (s.index = r),
              (t[$e(s.token)] = s);
          }
          return { factory: null, providersByKey: t, providers: n, modules: e, isRoot: l };
        })([
          yl(512, Qt, Yt, [[8, [cd, Pd, Dd, $d, Gd, np, pp, vp, Fg, Qg]], [3, Qt], Ln]),
          yl(5120, Mr, Ss, [[3, Mr]]),
          yl(4608, co, ho, [Mr, [2, ao]]),
          yl(5120, dr, Os, [Gr]),
          yl(5120, Cr, xr, []),
          yl(5120, ye, ks, []),
          yl(5120, we, Es, []),
          yl(4608, oa, ua, [_o]),
          yl(6144, vt, null, [oa]),
          yl(4608, na, ea, []),
          yl(
            5120,
            Mu,
            function(n, t, e, l, r, s, i, o) {
              return [new Ju(n, t, e), new ia(l), new la(r, s, i, o)];
            },
            [_o, Gr, Sr, _o, _o, na, Pr, [2, ta]]
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
          yl(135680, qh, qh, [Nh, ds, Vr, Ot, $h]),
          yl(4608, Hh, Hh, []),
          yl(5120, Bh, Yh, [Nh, vo, Gh]),
          yl(5120, id, sd, [ld]),
          yl(
            5120,
            Or,
            function(n) {
              return [n];
            },
            [id]
          ),
          yl(4608, Qp, Qp, []),
          yl(4608, Og, Og, []),
          yl(1073742336, mo, mo, []),
          yl(1024, Gn, ma, []),
          yl(
            1024,
            ss,
            function() {
              return [Zh()];
            },
            []
          ),
          yl(512, ld, ld, [Ot]),
          yl(
            1024,
            wr,
            function(n, t) {
              return [
                ((e = n),
                Su('probe', Pu),
                Su(
                  'coreTokens',
                  Object.assign(
                    {},
                    Ou,
                    (e || []).reduce((n, t) => ((n[t.name] = t.token), n), {})
                  )
                ),
                () => Pu),
                rd(t)
              ];
              var e;
            },
            [[2, ss], ld]
          ),
          yl(512, br, br, [[2, wr]]),
          yl(131584, cs, cs, [Gr, Pr, Ot, Gn, Qt, br]),
          yl(1073742336, Ps, Ps, [cs]),
          yl(1073742336, _a, _a, [[3, _a]]),
          yl(1024, Kh, Xh, [[3, Nh]]),
          yl(512, ec, lc, []),
          yl(512, Uh, Uh, []),
          yl(256, Gh, {}, []),
          yl(1024, eo, Jh, [no, [2, lo], Gh]),
          yl(512, ro, ro, [eo, no]),
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
          yl(1024, Nh, td, [cs, ec, Uh, ro, Ot, ds, Vr, Oh, Gh, [2, Mh], [2, Eh]]),
          yl(1073742336, Qh, Qh, [
            [2, Kh],
            [2, Nh]
          ]),
          yl(1073742336, Yg, Yg, []),
          yl(1073742336, Cp, Cp, []),
          yl(1073742336, Jg, Jg, []),
          yl(1073742336, Xg, Xg, []),
          yl(1073742336, nf, nf, []),
          yl(1073742336, tf, tf, []),
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
          yl(256, Et, !0, []),
          yl(256, 'API_KEY', '7f51d984-8723-4f7a-83a0-14ef48da9470', [])
        ]);
      });
      (function() {
        if (Wn) throw new Error('Cannot enable prod mode after platform setup.');
        Kn = !1;
      })(),
        fa()
          .bootstrapModuleFactory(mf)
          .catch(n => console.error(n));
    },
    zn8P: function(n, t) {
      function e(n) {
        return Promise.resolve().then(function() {
          var t = new Error("Cannot find module '" + n + "'");
          throw ((t.code = 'MODULE_NOT_FOUND'), t);
        });
      }
      (e.keys = function() {
        return [];
      }),
        (e.resolve = e),
        (n.exports = e),
        (e.id = 'zn8P');
    }
  },
  [[0, 0]]
]);
