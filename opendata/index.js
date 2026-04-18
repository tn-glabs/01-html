! function() {
  "use strict";
  var t = {
      917: function(t, e, r) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var n = r(635),
          o = /\ud83c[\udffb-\udfff](?=\ud83c[\udffb-\udfff])|(?:[^\ud800-\udfff][\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]?|[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?)*/g,
          a = function() {
            function t(t) {
              if ("string" != typeof t) throw new Error("Input must be a string");
              this._string = t, this._match = t.match(o) || []
            }
            return Object.defineProperty(t.prototype, "length", {
              get: function() {
                return this._match.length
              },
              enumerable: !1,
              configurable: !0
            }), t.prototype.reverse = function() {
              return this._match.reverse().join("")
            }, t.prototype.substring = function(t, e) {
              var r;
              void 0 === t && (t = 0);
              var o, a = this.length,
                i = (parseInt(t, 10) || 0) < 0 ? 0 : parseInt(t, 10) || 0;
              return i > a && (i = a), (o = void 0 === e ? a : (parseInt(e, 10) || 0) < 0 ? 0 : parseInt(e, 10) || 0) > a && (o = a), i > o && (i = (r = n.__read([o, i], 2))[0], o = r[1]), this._match.slice(i, o).join("")
            }, t.prototype.substr = function(t, e) {
              void 0 === t && (t = 0);
              var r, n = this.length,
                o = parseInt(t, 10) || 0;
              return o >= n || e <= 0 ? "" : (o < 0 && (o = Math.max(0, o + n)), r = void 0 === e ? n : o + (parseInt(e, 10) || 0), this._match.slice(o, r).join(""))
            }, t
          }();
        e.default = a
      },
      767: function(t, e, r) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.openDataUtils = e.EXPERT_KEY_DIVIDE = void 0;
        var n = r(635),
          o = "cscore";
        e.EXPERT_KEY_DIVIDE = 50;
        var a = new(function() {
          function t() {
            this.friendScores = null, this.lastGetTime = 0, this.scoreKey = "score", this.expertKey = "expert-score", this.myOpenId = -1, this.myUserInfo = null, this.myName = "", this.myAvatar = "", this.myRankCenterScore = -1, this.expertFloors = [], this.myScore = -1, this.expertScores = [], this.openIdMap = {}
          }
          return t.prototype.loadMyUserInfo = function() {
            var t = this;
            wx.getUserInfo({
              openIdList: ["selfOpenId"],
              success: function(e) {
                e.data && e.data.length > 0 && (t.myUserInfo = e.data[0], t.myOpenId = t.myUserInfo.openId, t.myName = t.myUserInfo.nickName, t.myAvatar = t.myUserInfo.avatarUrl)
              }
            })
          }, t.prototype.getMyUserInfo = function() {
            return this.myUserInfo
          }, t.prototype.getMyOpenId = function() {
            return this.myOpenId
          }, t.prototype.getMyName = function() {
            return this.myName
          }, t.prototype.getMyAvatar = function() {
            return this.myAvatar
          }, t.prototype.setScoreKey = function(t, e, r) {
            this.scoreKey = t, this.expertKey = e, this.expertFloors = r, console.log("---opendata key---:", this.scoreKey, this.expertKey)
          }, t.prototype.canSaveGameCenter = function(t) {
            return 0 === t && "score" === this.scoreKey
          }, t.prototype.getScoreKey = function(t) {
            return 0 !== t ? this.scoreKey + t : this.scoreKey
          }, t.prototype.getExpertKey = function(t) {
            var r = Math.ceil(t / e.EXPERT_KEY_DIVIDE);
            return this.expertKey + r
          }, t.prototype.getExpertArrayIndex = function(t) {
            var r = t % e.EXPERT_KEY_DIVIDE;
            return 0 === r ? r = e.EXPERT_KEY_DIVIDE - 1 : r -= 1, r
          }, t.prototype.getDefaultExpertKey = function() {
            return this.expertKey
          }, t.prototype.getMyScore = function() {
            return n.__awaiter(this, void 0, void 0, (function() {
              var t, e, r = this;
              return n.__generator(this, (function(n) {
                return this.myScore >= 0 ? [2, this.myScore] : (0, t = this.getScoreKey(0), e = [t], this.canSaveGameCenter(0) && e.push(o), [2, new Promise((function(t) {
                  wx.getUserCloudStorage({
                    keyList: e,
                    success: function(e) {
                      r.myScore = 0;
                      var n = e.KVDataList;
                      if (n && n.length > 0 && (r.myScore = Number(n[0].value), n.length >= 2)) try {
                        var o = JSON.parse(n[1].value);
                        o && o.wxgame && o.wxgame.score && (r.myRankCenterScore = Number(o.wxgame.score))
                      } catch (t) {
                        r.myRankCenterScore = -1
                      }
                      t(r.myScore)
                    },
                    fail: function(e) {
                      r.myScore = 0, t(r.myScore)
                    }
                  })
                }))])
              }))
            }))
          }, t.prototype.checkBestScore = function(t) {
            var e = this;
            this.getMyScore().then((function(r) {
              t > r && e.setMyScore(t), e.myRankCenterScore < t && e.canSaveGameCenter(0) && e.saveRankCenterScore(t)
            })).catch((function(t) {
              console.error("opendata getMyScore err:" + t)
            }))
          }, t.prototype.setServerExpertFloors = function(t) {
            this.expertScores = [];
            for (var r = [], n = [], o = 1; o < t.length; o++) {
              var a = t[o] || 0;
              n[s = Math.ceil(o / e.EXPERT_KEY_DIVIDE)] || (r.push(s), n[s] = !0), this.expertScores[s] || (this.expertScores[s] = []);
              var i = this.getExpertArrayIndex(o);
              this.expertScores[s][i] = a
            }
            for (var c = 0; c < r.length; c++) {
              var s = r[c];
              this.saveExpertScores(s, this.expertScores[s])
            }
          }, t.prototype.saveExpertScores = function(t, r) {
            for (var n = [], o = 0; o < e.EXPERT_KEY_DIVIDE; o++) o >= r.length || null == r[o] ? n[o] = 0 : n[o] = Number(r[o]) || 0;
            var a = JSON.stringify(n),
              i = this.expertKey + t;
            wx.setUserCloudStorage({
              KVDataList: [{
                key: i,
                value: a
              }],
              success: function(t) {
                console.log("saveExpertScores succ:", JSON.stringify(t))
              },
              fail: function(t) {
                console.log("saveExpertScores fail:", JSON.stringify(t))
              }
            })
          }, t.prototype.getGroupScore = function(t, e) {
            wx.getGroupCloudStorage({
              shareTicket: t,
              keyList: [this.scoreKey],
              success: function(t) {
                e(t.data || [])
              },
              fail: function(t) {
                e([])
              }
            })
          }, t.prototype.getExpertRanks = function(t) {
            return n.__awaiter(this, void 0, void 0, (function() {
              var e, r, o, i, c, s, u, f, l, h, d, p, v;
              return n.__generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return e = this.getExpertKey(t), r = [e], [4, new Promise((function(t) {
                      wx.getFriendCloudStorage({
                        keyList: r,
                        success: function(e) {
                          t(e.data || [])
                        },
                        fail: function(e) {
                          t([])
                        }
                      })
                    }))];
                  case 1:
                    for (o = n.sent(), i = [], v = 0; v < o.length; v++)
                      if (c = o[v], (s = c.KVDataList) && 0 !== s.length) {
                        for (u = {}, f = 0; f < s.length; f++) l = s[f], u[l.key] = l.value;
                        if (h = 0, u[e]) try {
                          d = JSON.parse(u[e]), p = a.getExpertArrayIndex(t), h = d[p]
                        } catch (t) {
                          h = 0
                        }
                        isNaN(h) || h <= 0 || i.push({
                          avatar: c.avatarUrl,
                          name: c.nickname,
                          score: h,
                          rank: -1
                        })
                      } for (i.sort((function(t, e) {
                        return e.score - t.score
                      })), v = 0; v < i.length; v++) i[v].rank = v;
                    return [2, i]
                }
              }))
            }))
          }, t.prototype.getMultiExpertRanks = function(t) {
            return n.__awaiter(this, void 0, void 0, (function() {
              var e, r, o, i, c, s, u, f, l, h, d, p, v, y, m, _;
              return n.__generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    for (e = 0, r = [], o = [], m = 0; m < t.length; m++) i = t[m], d = this.getExpertKey(i), o.indexOf(d) < 0 && o.push(d), i > e && (e = i), r[m] = [];
                    return [4, new Promise((function(t) {
                      wx.getFriendCloudStorage({
                        keyList: o,
                        success: function(e) {
                          t(e.data || [])
                        },
                        fail: function(e) {
                          t([])
                        }
                      })
                    }))];
                  case 1:
                    for (c = n.sent(), m = 0; m < c.length; m++)
                      if (s = c[m], (u = s.KVDataList) && 0 !== u.length) {
                        for (f = {}, _ = 0; _ < u.length; _++) {
                          l = u[_];
                          try {
                            f[l.key] = JSON.parse(l.value)
                          } catch (t) {}
                        }
                        for (h = e; h >= 1; h--) d = a.getExpertKey(h), p = 0, f[d] && (v = f[d], y = a.getExpertArrayIndex(h), p = v[y]), isNaN(p) || p <= 0 || (1 === h || s.nickname !== this.myName && (a.expertFloors[h] > 0 ? p / a.expertFloors[h] : 0) >= 1) && r[h - 1].push({
                          avatar: s.avatarUrl,
                          name: s.nickname,
                          score: p,
                          rank: -1
                        })
                      } for (m = 0; m < r.length; m++)
                      if (r[m])
                        for (r[m].sort((function(t, e) {
                            return e.score - t.score
                          })), _ = 0; _ < r[m].length; _++) r[m][_].rank = _;
                    return [2, r]
                }
              }))
            }))
          }, t.prototype.getFriendScores = function(t) {
            return n.__awaiter(this, void 0, void 0, (function() {
              var e = this;
              return n.__generator(this, (function(r) {
                return t && (this.friendScores = null), !this.friendScores || 0 === this.friendScores.length || Date.now() - this.lastGetTime > 18e4 ? (this.lastGetTime = Date.now(), [2, new Promise((function(t) {
                  wx.getFriendCloudStorage({
                    keyList: [e.getScoreKey(0)],
                    success: function(r) {
                      e.friendScores = r.data || [], t(e.friendScores)
                    },
                    fail: function(r) {
                      e.friendScores = [], t(e.friendScores)
                    }
                  })
                }))]) : [2, this.friendScores]
              }))
            }))
          }, t.prototype.saveRankCenterScore = function(t) {
            if ((t = Number(t)) > 0 && t > this.myRankCenterScore) {
              this.myRankCenterScore = t;
              var e = {
                  wxgame: {
                    score: this.myRankCenterScore,
                    update_time: Math.floor(Date.now() / 1e3)
                  }
                },
                r = JSON.stringify(e);
              wx.setUserCloudStorage({
                KVDataList: [{
                  key: o,
                  value: r
                }],
                success: function(t) {},
                fail: function(t) {}
              })
            }
          }, t.prototype.setMyScore = function(t) {
            t = Number(t);
            var e = Math.max(this.myScore, t);
            if (this.myRankCenterScore < 0 && e > 0 && this.canSaveGameCenter(0) && this.saveRankCenterScore(e), !(t < this.myScore)) {
              this.myScore = t, this.friendScores = null, this.lastGetTime = 0;
              var r = this.getScoreKey(0);
              wx.setUserCloudStorage({
                KVDataList: [{
                  key: r,
                  value: this.myScore + ""
                }],
                success: function(t) {},
                fail: function(t) {},
                complete: function() {}
              }), this.canSaveGameCenter(0) && this.saveRankCenterScore(this.myScore)
            }
          }, t.prototype.getMyExpertScore = function(t) {
            return n.__awaiter(this, void 0, void 0, (function() {
              var r, o = this;
              return n.__generator(this, (function(n) {
                return r = Math.ceil(t / e.EXPERT_KEY_DIVIDE), this.expertScores && this.expertScores[r] ? [2, this.expertScores[r]] : [2, new Promise((function(r) {
                  wx.getUserCloudStorage({
                    keyList: [o.getExpertKey(t)],
                    success: function(t) {
                      var n = [],
                        o = t.KVDataList;
                      if (o && o.length > 0) {
                        var a = o[0];
                        try {
                          n = JSON.parse(a.value)
                        } catch (t) {
                          n = [];
                          for (var i = 0; i < e.EXPERT_KEY_DIVIDE; i++) n[i] = 0
                        }
                      }
                      n.length < e.EXPERT_KEY_DIVIDE && (n.length = e.EXPERT_KEY_DIVIDE), r(n)
                    },
                    fail: function(t) {
                      for (var n = [], o = 0; o < e.EXPERT_KEY_DIVIDE; o++) n[o] = 0;
                      r(n)
                    }
                  })
                }))]
              }))
            }))
          }, t.prototype.setExpertScore = function(t, r) {
            if (!(t < 1)) {
              var n = Math.ceil(t / e.EXPERT_KEY_DIVIDE);
              r && n > 0 && (this.expertScores[n] = r);
              var o = this.getExpertKey(t),
                a = JSON.stringify(r);
              wx.setUserCloudStorage({
                KVDataList: [{
                  key: o,
                  value: a
                }],
                success: function(t) {},
                fail: function(t) {}
              })
            }
          }, t.prototype.setOpenUserInfo = function(t, e) {
            this.openIdMap[t] = {
              openId: t,
              nickname: e.nickname || e.nickName,
              image: e.avatarUrl
            }
          }, t.prototype.getOpenUserInfo = function(t) {
            return this.openIdMap[t]
          }, t.prototype.hasOpenUserInfo = function(t) {
            return !!this.openIdMap[t]
          }, t
        }());
        e.openDataUtils = a
      },
      626: function(t, e, r) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.updateXY = e.removeTouchCancel = e.addTouchCancel = e.removeTouchEnd = e.addTouchEnd = e.removeTouchMove = e.addTouchMove = e.removeTouchStart = e.addTouchStart = void 0;
        var n = r(524);
        e.addTouchStart = function(t) {
          f.add(t)
        }, e.removeTouchStart = function(t) {
          f.delete(t)
        }, e.addTouchMove = function(t) {
          l.add(t)
        }, e.removeTouchMove = function(t) {
          l.delete(t)
        }, e.addTouchEnd = function(t) {
          h.add(t)
        }, e.removeTouchEnd = function(t) {
          h.delete(t)
        }, e.addTouchCancel = function(t) {
          d.add(t)
        }, e.removeTouchCancel = function(t) {
          d.delete(t)
        };
        var o = 0,
          a = 0,
          i = 1,
          c = 1;
        e.updateXY = function(t) {
          o = t.screenX, a = t.screenY, i = n.sharedCanvas.width / u, c = n.sharedCanvas.height / u
        };
        var s = wx.getSystemInfoSync(),
          u = 750 / s.screenWidth,
          f = (s.screenHeight, new Set),
          l = new Set,
          h = new Set,
          d = new Set;
        wx.onTouchStart((function(t) {
          var e = t.changedTouches[0],
            r = e.clientX - o;
          if (r < 0 || r > i) return;
          var n = e.clientY - a;
          if (n < 0 || n > c) return;
          p = !0, f.forEach((function(t) {
            t(r * u, n * u)
          }))
        })), wx.onTouchMove((function(t) {
          if (!p) return;
          var e = t.changedTouches[0],
            r = e.clientX - o,
            n = e.clientY - a;
          l.forEach((function(t) {
            t(r * u, n * u)
          }))
        })), wx.onTouchEnd((function(t) {
          if (!p) return;
          p = !1;
          var e = t.changedTouches[0],
            r = e.clientX - o,
            n = e.clientY - a;
          h.forEach((function(t) {
            t(r * u, n * u)
          }))
        })), wx.onTouchCancel((function(t) {
          if (!p) return;
          p = !1;
          var e = t.changedTouches[0],
            r = e.clientX - o,
            n = e.clientY - a;
          d.forEach((function(t) {
            t(r * u, n * u)
          }))
        }));
        var p = !1
      },
      948: function(t, e) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var r = [1, 1.33, 1.66, 2],
          n = .02,
          o = .998,
          a = Math.log(o);
        var i = function() {
          function t(t) {
            this.target = t, this.$scrollFactor = 1, this.previousTime = 0, this.velocity = 0, this.previousVelocity = [], this.currentPosition = 0, this.previousPosition = 0, this.lastPoint = 0, this.started = !0
          }
          return t.prototype.start = function(t) {
            this.started = !0, this.velocity = 0, this.previousVelocity.length = 0, this.previousPosition = this.currentPosition = t, this.lastPoint = t, this.animation = void 0
          }, t.prototype.update = function(t) {
            this.currentPosition = t;
            var e = this.lastPoint - t,
              r = e + this.target.scrollV;
            this.lastPoint = t, (r < 0 || r > this.target.maxScrollV) && (r -= .5 * e), this.target.scrollV = r
          }, t.prototype.finish = function() {
            var t = this.target,
              e = t.scrollV,
              i = t.maxScrollV;
            this.started = !1;
            for (var c = 2.33 * this.velocity, s = this.previousVelocity, u = s.length, f = 2.33, l = 0; l < u; l++) {
              var h = r[l];
              c += s[0] * h, f += h
            }
            var d = c / f,
              p = Math.abs(d);
            if (p > n) {
              var v = 0,
                y = e + (d - n) / a * 2 * this.$scrollFactor;
              if (y < 0 || y > i)
                for (y = e; Math.abs(d) > n;) d *= (y -= d) < 0 || y > i ? .95 * o : o, v++;
              else v = Math.log(n / p) / a;
              this.throwTo(y, v)
            } else this.checkScroll()
          }, t.prototype.checkScroll = function() {
            var t = this.target,
              e = t.scrollV,
              r = t.maxScrollV;
            e < 0 ? this.throwTo(0, 300) : e > r && this.throwTo(r, 300)
          }, t.prototype.onTick = function(t) {
            var e = t - this.previousTime;
            if (this.previousTime = t, this.started) {
              var r = this.previousVelocity;
              r.length >= 4 && r.shift(), this.velocity = (this.currentPosition - this.previousPosition) / e, r.push(this.velocity), this.previousPosition = this.currentPosition
            }
            this.animation && (this.animation.update(e), this.target.scrollV = this.animation.value, this.animation.isEnd && (this.animation = void 0, this.checkScroll()))
          }, t.prototype.throwToTop = function() {
            this.throwTo(0, 300)
          }, t.prototype.throwTo = function(t, e) {
            var r = this.target.scrollV;
            r !== t && (this.animation = new c(r, t, e))
          }, t
        }();
        e.default = i;
        var c = function() {
          function t(t, e, r) {
            this.from = t, this.to = e, this.duration = r, this.pass = 0, this.value = 0, this.isEnd = !1, this.distance = e - t, this.value = t
          }
          return t.prototype.update = function(t) {
            var e, r;
            this.pass += t, this.pass > this.duration ? (this.value = this.to, this.isEnd = !0) : this.value = (e = this.pass / this.duration, ((r = e - 1) * r * r + 1) * this.distance + this.from)
          }, t
        }()
      },
      524: function(t, e) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.context = e.sharedCanvas = e.hasSharedCanvas = void 0, e.hasSharedCanvas = void 0 !== wx.getSharedCanvas, e.sharedCanvas = void 0 !== wx.getSharedCanvas ? wx.getSharedCanvas() : wx.createCanvas(), e.context = e.sharedCanvas.getContext("2d")
      },
      959: function(t, e, r) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.convertKVDataJson = e.convertKVData = e.fitNameString = void 0;
        var n = r(635).__importDefault(r(917));
        e.fitNameString = function(t, e, r, o) {
          void 0 === o && (o = "...");
          var a = t.measureText(e);
          if (!a) return e;
          var i = a.width;
          if (i > r) {
            var c = new n.default(e),
              s = c.length;
            do {
              if (s <= 0) {
                e = "";
                break
              }
              e = c.substr(0, --s), i = t.measureText(e + o).width
            } while (i > r);
            e += o
          }
          return e
        }, e.convertKVData = function(t) {
          var e = {};
          return t.forEach((function(t) {
            return e[t.key] = Number(t.value)
          })), e
        }, e.convertKVDataJson = function(t) {
          var e = {};
          return t.forEach((function(t) {
            try {
              e[t.key] = JSON.parse(t.value)
            } catch (r) {
              e[t.key] = {}
            }
          })), e
        }
      },
      994: function(t, e, r) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var n = r(524),
          o = r(959),
          a = r(767),
          i = {},
          c = function() {
            function t(t) {
              var e = this;
              this.type = "exceeded", this.data = [], this.lastScore = 0, this.currentScore = 0, this._isDisposed = !1, n.context.clearRect(0, 0, 230, 80), this.lastScore = t.score, a.openDataUtils.getFriendScores().then((function(t) {
                if (!e._isDisposed) {
                  var r = t.map((function(t) {
                    var e = (0, o.convertKVData)(t.KVDataList);
                    return {
                      rank: 0,
                      avatar: t.avatarUrl,
                      name: t.nickname,
                      score: e[a.openDataUtils.getScoreKey(0)] || 0
                    }
                  })).filter((function(t) {
                    return t.score > 0
                  }));
                  r.sort((function(t, e) {
                    return e.score - t.score
                  })), r.forEach((function(t, e) {
                    return t.rank = e + 1
                  })), e.data = r
                }
              })).catch((function(t) {
                return console.error(t)
              }))
            }
            return t.prototype.update = function(t) {
              this.currentScore = t.score, this._update(), this.lastScore = this.currentScore
            }, t.prototype._update = function() {
              n.context.clearRect(0, 0, 230, 80);
              for (var t = this.data, e = t.length - 1; e >= 0; e--)
                if (t[e].score <= this.lastScore) t.pop();
                else if (t[e].score < this.currentScore) {
                this.draw(t[e]);
                break
              }
            }, t.prototype.draw = function(t) {
              var e = this,
                r = i[t.avatar];
              r ? (n.context.drawImage(r, 130, 0, 80, 80), this.drawText()) : ((r = i[t.avatar] = wx.createImage()).src = t.avatar, r.onload = function() {
                e._isDisposed || (n.context.drawImage(r, 130, 0, 80, 80), e.drawText())
              })
            }, t.prototype.drawText = function() {
              n.context.fillStyle = "#46494b", n.context.font = "".concat(50, "px simHei"), n.context.textAlign = "left", n.context.fillText("超越", 0, 55)
            }, t.prototype.dispose = function() {
              this._isDisposed = !0
            }, t
          }();
        e.default = c
      },
      443: function(t, e, r) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var n = r(524),
          o = r(767),
          a = 186,
          i = wx.getSystemInfoSync().model.includes("iPhone X") ? 42 : 15,
          c = 70,
          s = 130,
          u = function() {
            function t(t) {
              var e = this;
              this.data = [], this.avatars = {}, this.render = function(t) {
                if (!e._isDisposed) {
                  if (e._dirty) {
                    e._dirty = !1, n.context.clearRect(0, 0, n.sharedCanvas.width, n.sharedCanvas.height);
                    for (var r = 0, o = e.data.length - 1; o > 0; o--) {
                      var a = e.data[o];
                      a && (e.drawItem(o, a, r), r++)
                    }
                  }
                  requestAnimationFrame(e.render)
                }
              }, this._scrollV = 0, this.maxScrollV = 0, this._dirty = !0, this._isDisposed = !1, this.type = t.type, this.maxMapId = t.maxMapId, this.mapIds = [];
              for (var r = this.maxMapId; r >= 1; r--) this.mapIds.push(r);
              n.context.clearRect(0, 0, n.sharedCanvas.width, n.sharedCanvas.height), o.openDataUtils.getMultiExpertRanks(this.mapIds).then((function(t) {
                e._isDisposed || (e.data = t, e.maxScrollV = Math.max(0, e.data.length * a - n.sharedCanvas.height + 15 + i), requestAnimationFrame((function(t) {
                  requestAnimationFrame(e.render)
                })))
              })).catch((function(t) {
                return console.error(t)
              }))
            }
            return t.prototype.update = function(t) {
              this.maxScrollV = Math.max(0, this.data.length * a - n.sharedCanvas.height + 15 + i), this.scrollV = t.offset, this._dirty = !0
            }, Object.defineProperty(t.prototype, "scrollV", {
              get: function() {
                return this._scrollV
              },
              set: function(t) {
                this._scrollV = t, this._dirty || (this._dirty = !0)
              },
              enumerable: !1,
              configurable: !0
            }), t.prototype.dispose = function() {
              this._isDisposed = !0, this.avatars = {}
            }, t.prototype.drawItem = function(t, e, r) {
              var o = this,
                i = -this._scrollV + 206 * r + 15;
              if (!(i > n.sharedCanvas.height || i + a < 0)) {
                var u = Math.min(3, e.length);
                if (1 !== t) {
                  var f = 400;
                  3 === u ? f = 140 : 2 === u ? f = 220 : 1 === u && (f = 300);
                  for (h = 0; h < u; h++) {
                    p = e[h];
                    (d = this.avatars[p.avatar]) || ((d = this.avatars[p.avatar] = wx.createImage()).src = p.avatar, d.onload = function() {
                      o._isDisposed || o._dirty || (o._dirty = !0)
                    }), n.context.drawImage(d, f, 85 + i, c, c), f += 80
                  }
                  n.context.font = "".concat(30, "px simHei"), n.context.textAlign = "left", n.context.lineWidth = 3, n.context.strokeStyle = "#000000", u > 0 ? n.context.strokeText("等".concat(u, "个好友已完成"), f, s + i) : n.context.strokeText("还没有好友完成", f, s + i), n.context.fillStyle = "#FFFF00", u > 0 ? n.context.fillText("等".concat(u, "个好友已完成"), f, s + i) : n.context.fillText("还没有好友完成", f, s + i)
                } else {
                  var l = 390;
                  3 === u ? l = 390 : 2 === u ? l = 470 : 1 === u && (l = 550);
                  for (var h = 0; h < u; h++) {
                    var d, p = e[h];
                    (d = this.avatars[p.avatar]) || ((d = this.avatars[p.avatar] = wx.createImage()).src = p.avatar, d.onload = function() {
                      o._isDisposed || o._dirty || (o._dirty = !0)
                    }), n.context.drawImage(d, l, 85 + i, c, c), l += 80
                  }
                }
              }
            }, t
          }();
        e.default = u
      },
      535: function(t, e, r) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        for (var n = r(524), o = r(959), a = r(767), i = 680 / 3, c = 100, s = i, u = {}, f = function(t) {
            var e = wx.createImage();
            e.src = "res/opendata/rank_h_".concat(t, ".png"), e.onload = function() {
              return u[t] = e
            }
          }, l = 1; l <= 3; l++) f(l);
        var h = function() {
          function t(t) {
            var e = this;
            this.type = "expertNearRank", this._isDisposed = !1, n.context.clearRect(0, 0, 680, 340), a.openDataUtils.getExpertRanks(t.mapId).then((function(t) {
              if (!e._isDisposed) {
                var r = t;
                n.context.clearRect(0, 0, 680, 340);
                for (var o = 0; o < Math.min(3, r.length); o++) e.draw(r[o], 0 * (o + 1) + o * i)
              }
            }))
          }
          return t.prototype.draw = function(t, e) {
            var r = this;
            if (t) {
              var f = e + i / 2,
                l = t.avatar === a.openDataUtils.getMyAvatar() && t.name === a.openDataUtils.getMyName() ? "#00ff00" : "#ffffff",
                h = u[t.rank];
              n.context.drawImage(h, f - h.width / 2, 40), n.context.strokeStyle = "#000000", n.context.strokeRect(f - 50 + 1, 86, 98, 98);
              var d = wx.createImage();
              d.src = t.avatar, d.onload = function() {
                r._isDisposed || n.context.drawImage(d, f - 50, 85, c, c)
              }, n.context.fillStyle = l, n.context.font = "".concat(30, "px simHei"), n.context.textAlign = "center", n.context.fillText((0, o.fitNameString)(n.context, t.name, s), f, 240), n.context.fillStyle = l, n.context.font = "".concat(30, "px simHei"), n.context.textAlign = "center", n.context.fillText(t.score.toString(), f, 290)
            }
          }, t.prototype.update = function(t) {}, t.prototype.dispose = function() {
            this._isDisposed = !0
          }, t
        }();
        e.default = h
      },
      16: function(t, e, r) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        for (var n = r(524), o = r(959), a = r(767), i = 680, c = i / 3, s = 100, u = c, f = {}, l = function(t) {
            var e = wx.createImage();
            e.src = "res/opendata/rank_h_".concat(t, ".png"), e.onload = function() {
              return f[t] = e
            }
          }, h = 1; h <= 3; h++) l(h);
        var d = function() {
          function t(t) {
            var e = this;
            this.type = "nearRank", this._isDisposed = !1, n.context.clearRect(0, 0, i, 340), a.openDataUtils.getFriendScores(t.refresh).then((function(t) {
              if (!e._isDisposed) {
                var r = t.map((function(t) {
                  var e = (0, o.convertKVData)(t.KVDataList);
                  return {
                    rank: 0,
                    avatar: t.avatarUrl,
                    name: t.nickname,
                    score: e[a.openDataUtils.getScoreKey(0)] || 0
                  }
                })).filter((function(t) {
                  return t.score > 0
                }));
                r.sort((function(t, e) {
                  return e.score - t.score
                })), r.forEach((function(t, e) {
                  return t.rank = e + 1
                }));
                var s = r.findIndex((function(t) {
                  return t.avatar === a.openDataUtils.getMyAvatar() && t.name === a.openDataUtils.getMyName()
                }));
                n.context.clearRect(0, 0, i, 340), 0 === s ? (e.draw(r[0], 0), e.draw(r[1], 0 + c), e.draw(r[2], 453.3333333333333)) : s > 0 ? s === r.length - 1 && r.length > 2 ? (e.draw(r[s - 2], 0), e.draw(r[s - 1], 0 + c), e.draw(r[s], 453.3333333333333)) : (e.draw(r[s - 1], 0), e.draw(r[s], 0 + c), e.draw(r[s + 1], 453.3333333333333)) : console.warn("好友排行榜数据中没有自己")
              }
            })).catch((function(t) {
              return console.error(t)
            }))
          }
          return t.prototype.draw = function(t, e) {
            var r = this;
            if (t) {
              var i = e + c / 2,
                l = t.avatar === a.openDataUtils.getMyAvatar() && t.name === a.openDataUtils.getMyName() ? "#00ff00" : "#ffffff",
                h = f[t.rank];
              h ? n.context.drawImage(h, i - h.width / 2, 40) : (n.context.fillStyle = l, n.context.font = "".concat(32, "px simHei"), n.context.textAlign = "center", n.context.fillText(t.rank.toString(), i, 60)), n.context.strokeStyle = "#000000", n.context.strokeRect(i - 50 + 1, 86, 98, 98);
              var d = wx.createImage();
              d.src = t.avatar, d.onload = function() {
                r._isDisposed || n.context.drawImage(d, i - 50, 85, s, s)
              }, n.context.fillStyle = l, n.context.font = "".concat(30, "px simHei"), n.context.textAlign = "center", n.context.fillText((0, o.fitNameString)(n.context, t.name, u), i, 240), n.context.fillStyle = l, n.context.font = "".concat(30, "px simHei"), n.context.textAlign = "center", n.context.fillText(t.score.toString(), i, 290)
            }
          }, t.prototype.update = function(t) {
            var e = this;
            a.openDataUtils.getFriendScores(t.refresh).then((function(t) {
              if (!e._isDisposed) {
                var r = t.map((function(t) {
                  var e = (0, o.convertKVData)(t.KVDataList);
                  return {
                    rank: 0,
                    avatar: t.avatarUrl,
                    name: t.nickname,
                    score: e[a.openDataUtils.getScoreKey(0)] || 0
                  }
                })).filter((function(t) {
                  return t.score > 0
                }));
                r.sort((function(t, e) {
                  return e.score - t.score
                })), r.forEach((function(t, e) {
                  return t.rank = e + 1
                }));
                var s = r.findIndex((function(t) {
                  return t.avatar === a.openDataUtils.getMyAvatar() && t.name === a.openDataUtils.getMyName()
                }));
                n.context.clearRect(0, 0, i, 340), 0 === s ? (e.draw(r[0], 0), e.draw(r[1], 0 + c), e.draw(r[2], 453.3333333333333)) : s > 0 ? s === r.length - 1 && r.length > 2 ? (e.draw(r[s - 2], 0), e.draw(r[s - 1], 0 + c), e.draw(r[s], 453.3333333333333)) : (e.draw(r[s - 1], 0), e.draw(r[s], 0 + c), e.draw(r[s + 1], 453.3333333333333)) : console.warn("好友排行榜数据中没有自己", r)
              }
            })).catch((function(t) {
              return console.error(t)
            }))
          }, t.prototype.dispose = function() {
            this._isDisposed = !0
          }, t
        }();
        e.default = d
      },
      554: function(t, e, r) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var n = r(524),
          o = r(959),
          a = r(767),
          i = {},
          c = wx.createImage();
        c.src = "res/opendata/label_soon_exceed.png", c.onload = function() {
          return i.bg = c
        };
        var s = function() {
          function t(t) {
            var e = this;
            this.type = "nextExceed", this._isDisposed = !1, n.context.clearRect(0, 0, 624, 93), a.openDataUtils.getFriendScores().then((function(r) {
              if (!e._isDisposed) {
                var n = r.map((function(t) {
                  var e = (0, o.convertKVData)(t.KVDataList);
                  return {
                    rank: 0,
                    avatar: t.avatarUrl,
                    name: t.nickname,
                    score: e[a.openDataUtils.getScoreKey(0)] || 0
                  }
                })).filter((function(t) {
                  return t.score > 0
                }));
                n.sort((function(t, e) {
                  return e.score - t.score
                }));
                for (var i = n.length - 1; i >= 0; i--)
                  if (n[i].score > t.score) {
                    e.draw(n[i]);
                    break
                  }
              }
            })).catch((function(t) {
              return console.error(t)
            }))
          }
          return t.prototype.update = function() {}, t.prototype.draw = function(t) {
            var e = this;
            n.context.clearRect(0, 0, 624, 93), i.bg ? n.context.drawImage(i.bg, 0, 0) : c.onload = function() {
              e._isDisposed || (i.bg = c, n.context.drawImage(i.bg, 0, 0))
            };
            var r = wx.createImage();
            r.src = t.avatar, r.onload = function() {
              e._isDisposed || n.context.drawImage(r, 321, 7, 80, 80)
            }, n.context.fillStyle = "#FFFFFF", n.context.font = "".concat(50, "px simHei"), n.context.textAlign = "left", n.context.fillText(t.score.toString(), 470, 65)
          }, t.prototype.dispose = function() {
            this._isDisposed = !0
          }, t
        }();
        e.default = s
      },
      117: function(t, e, r) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        for (var n = r(635), o = r(524), a = r(626), i = n.__importDefault(r(948)), c = r(959), s = r(767), u = 120, f = wx.getSystemInfoSync().model.includes("iPhone X") ? 42 : 15, l = ["#262525", "#303030"], h = {}, d = function(t) {
            var e = wx.createImage();
            e.src = "res/opendata/rank_v_".concat(t, ".png"), e.onload = function() {
              return h[t] = e
            }
          }, p = 1; p <= 3; p++) d(p);
        var v = function() {
          function t(t) {
            var e, r = this;
            this.data = [], this.totalData = [], this.touchScroll = new i.default(this), this.avatars = {}, this.dataKey = "score", this.render = function(t) {
              if (!r._isDisposed) {
                if (r.touchScroll.onTick(t), r._dirty) {
                  r._dirty = !1, o.context.clearRect(0, 0, o.sharedCanvas.width, o.sharedCanvas.height);
                  for (var e = 0, n = r.data.length; e < n; e++) r.drawItem(e)
                }
                requestAnimationFrame(r.render)
              }
            }, this._scrollV = 0, this.maxScrollV = 0, this._dirty = !0, this.onTouchStart = function(t, e) {
              r.touchScroll.start(e)
            }, this.onTouchMove = function(t, e) {
              r.touchScroll.update(e)
            }, this.onTouchEnd = function(t, e) {
              r.touchScroll.finish()
            }, this._isDisposed = !1, this.type = t.type, o.context.clearRect(0, 0, o.sharedCanvas.width, o.sharedCanvas.height), e = "rank" === t.type ? s.openDataUtils.getFriendScores(t.refresh) : new Promise((function(e, r) {
              wx.getGroupCloudStorage({
                shareTicket: t.shareTicket,
                keyList: [s.openDataUtils.getScoreKey(0)],
                success: function(t) {
                  return e(t.data)
                },
                fail: function(t) {
                  return r(t.errMsg)
                }
              })
            })), Promise.all([e]).then((function(t) {
              var e = n.__read(t, 1)[0];
              if (!r._isDisposed) {
                var i = r.totalData = e.map((function(t) {
                  var e = (0, c.convertKVData)(t.KVDataList);
                  return {
                    rank: 0,
                    name: t.nickname,
                    avatar: t.avatarUrl,
                    score: e[s.openDataUtils.getScoreKey(0)] || 0
                  }
                }));
                (i = i.filter((function(t) {
                  return t.score > 0
                }))).sort((function(t, e) {
                  return e.score - t.score
                })), i.forEach((function(t, e) {
                  return t.rank = e + 1
                })), r.dataKey = "score", r.data = i, (0, a.addTouchStart)(r.onTouchStart), (0, a.addTouchMove)(r.onTouchMove), (0, a.addTouchEnd)(r.onTouchEnd), (0, a.addTouchCancel)(r.onTouchEnd), r.maxScrollV = Math.max(0, r.data.length * u - o.sharedCanvas.height + 15 + f), requestAnimationFrame((function(t) {
                  r.touchScroll.previousTime = t, requestAnimationFrame(r.render)
                }))
              }
            })).catch((function(t) {
              return console.error(t)
            }))
          }
          return t.prototype.update = function(t) {
            var e = this.totalData;
            (e = e.filter((function(t) {
              return t.score > 0
            }))).sort((function(t, e) {
              return e.score - t.score
            })), this.dataKey = "score", e.forEach((function(t, e) {
              return t.rank = e + 1
            })), this.data = e, this.maxScrollV = Math.max(0, this.data.length * u - o.sharedCanvas.height + 15 + f), this.touchScroll.throwToTop(), this._dirty = !0
          }, Object.defineProperty(t.prototype, "scrollV", {
            get: function() {
              return this._scrollV
            },
            set: function(t) {
              this._scrollV = t, this._dirty || (this._dirty = !0)
            },
            enumerable: !1,
            configurable: !0
          }), t.prototype.dispose = function() {
            this._isDisposed = !0, this.avatars = {}, (0, a.removeTouchStart)(this.onTouchStart), (0, a.removeTouchMove)(this.onTouchMove), (0, a.removeTouchEnd)(this.onTouchEnd), (0, a.removeTouchCancel)(this.onTouchEnd)
          }, t.prototype.drawItem = function(t) {
            var e = this,
              r = -this._scrollV + t * u + 15;
            if (!(r > o.sharedCanvas.height || r + u < 0)) {
              var n = this.data[t],
                a = n.avatar === s.openDataUtils.getMyAvatar() && n.name === s.openDataUtils.getMyName() ? "#00ff00" : "#ffffff";
              o.context.fillStyle = l[t % 2], o.context.fillRect(0, r, 680, u), h[n.rank] ? o.context.drawImage(h[n.rank], 14, 20 + r) : (o.context.fillStyle = a, o.context.font = "".concat(40, "px simHei"), o.context.textAlign = "center", o.context.fillText(n.rank.toString(), 44, 80 + r)), o.context.strokeStyle = "#000000", o.context.strokeRect(109, 15 + r + 1, 88, 88);
              var i = this.avatars[n.avatar];
              i || ((i = this.avatars[n.avatar] = wx.createImage()).src = n.avatar, i.onload = function() {
                e._isDisposed || e._dirty || (e._dirty = !0)
              }), o.context.drawImage(i, 108, 15 + r, 90, 90), o.context.fillStyle = a, o.context.font = "".concat(30, "px simHei"), o.context.textAlign = "left", o.context.fillText((0, c.fitNameString)(o.context, n.name, 300), 220, 70 + r), o.context.fillStyle = a, o.context.font = "".concat(40, "px simHei"), o.context.textAlign = "left", o.context.fillText(n[this.dataKey].toString(), 540, 76 + r)
            }
          }, t
        }();
        e.default = v
      },
      84: function(t, e, r) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var n = r(524),
          o = r(959),
          a = r(767),
          i = {},
          c = wx.createImage();
        c.src = "res/opendata/label_soon_exceed.png", c.onload = function() {
          return i.bg = c
        };
        var s = function() {
          function t(t) {
            var e = this;
            this.type = "soonExceed", this.data = [], this.avatars = {}, this._isDisposed = !1, n.context.clearRect(0, 0, 624, 93), this.currentScore = t.score, a.openDataUtils.getFriendScores().then((function(t) {
              if (!e._isDisposed) {
                var r = t.map((function(t) {
                  var e = (0, o.convertKVData)(t.KVDataList);
                  return {
                    rank: 0,
                    avatar: t.avatarUrl,
                    name: t.nickname,
                    score: e[a.openDataUtils.getScoreKey(0)] || 0
                  }
                })).filter((function(t) {
                  return t.score > 0
                }));
                r.sort((function(t, e) {
                  return e.score - t.score
                })), r.forEach((function(t, e) {
                  return t.rank = e + 1
                })), e.data = r, e._update()
              }
            })).catch((function(t) {
              return console.error(t)
            }))
          }
          return t.prototype.update = function(t) {
            this.currentScore = t.score, this._update()
          }, t.prototype._update = function() {
            n.context.clearRect(0, 0, 624, 93);
            for (var t = this.data, e = t.length - 1; e >= 0; e--) {
              if (!(t[e].score <= this.currentScore)) {
                this.draw(t[e]);
                break
              }
              t.pop()
            }
          }, t.prototype.draw = function(t) {
            var e = this;
            i.bg && n.context.drawImage(i.bg, 0, 0);
            var r = this.avatars[t.avatar];
            r ? n.context.drawImage(r, 321, 7, 80, 80) : ((r = this.avatars[t.avatar] = wx.createImage()).src = t.avatar, r.onload = function() {
              e._isDisposed || n.context.drawImage(r, 321, 7, 80, 80)
            }), n.context.fillStyle = "#FFFFFF", n.context.font = "".concat(50, "px simHei"), n.context.textAlign = "left", n.context.fillText(t.score.toString(), 470, 65)
          }, t.prototype.dispose = function() {
            this._isDisposed = !0
          }, t
        }();
        e.default = s
      },
      635: function(t, e, r) {
        r.r(e), r.d(e, {
          __addDisposableResource: function() {
            return C
          },
          __assign: function() {
            return a
          },
          __asyncDelegator: function() {
            return E
          },
          __asyncGenerator: function() {
            return D
          },
          __asyncValues: function() {
            return I
          },
          __await: function() {
            return b
          },
          __awaiter: function() {
            return p
          },
          __classPrivateFieldGet: function() {
            return M
          },
          __classPrivateFieldIn: function() {
            return V
          },
          __classPrivateFieldSet: function() {
            return K
          },
          __createBinding: function() {
            return y
          },
          __decorate: function() {
            return c
          },
          __disposeResources: function() {
            return U
          },
          __esDecorate: function() {
            return u
          },
          __exportStar: function() {
            return m
          },
          __extends: function() {
            return o
          },
          __generator: function() {
            return v
          },
          __importDefault: function() {
            return O
          },
          __importStar: function() {
            return P
          },
          __makeTemplateObject: function() {
            return k
          },
          __metadata: function() {
            return d
          },
          __param: function() {
            return s
          },
          __propKey: function() {
            return l
          },
          __read: function() {
            return g
          },
          __rest: function() {
            return i
          },
          __runInitializers: function() {
            return f
          },
          __setFunctionName: function() {
            return h
          },
          __spread: function() {
            return x
          },
          __spreadArray: function() {
            return w
          },
          __spreadArrays: function() {
            return S
          },
          __values: function() {
            return _
          }
        });
        var n = function(t, e) {
          return n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(t, e) {
            t.__proto__ = e
          } || function(t, e) {
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
          }, n(t, e)
        };

        function o(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

          function r() {
            this.constructor = t
          }
          n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        }
        var a = function() {
          return a = Object.assign || function(t) {
            for (var e, r = 1, n = arguments.length; r < n; r++)
              for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t
          }, a.apply(this, arguments)
        };

        function i(t, e) {
          var r = {};
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
          if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (n = Object.getOwnPropertySymbols(t); o < n.length; o++) e.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[o]) && (r[n[o]] = t[n[o]])
          }
          return r
        }

        function c(t, e, r, n) {
          var o, a = arguments.length,
            i = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, r) : n;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, n);
          else
            for (var c = t.length - 1; c >= 0; c--)(o = t[c]) && (i = (a < 3 ? o(i) : a > 3 ? o(e, r, i) : o(e, r)) || i);
          return a > 3 && i && Object.defineProperty(e, r, i), i
        }

        function s(t, e) {
          return function(r, n) {
            e(r, n, t)
          }
        }

        function u(t, e, r, n, o, a) {
          function i(t) {
            if (void 0 !== t && "function" != typeof t) throw new TypeError("Function expected");
            return t
          }
          for (var c, s = n.kind, u = "getter" === s ? "get" : "setter" === s ? "set" : "value", f = !e && t ? n.static ? t : t.prototype : null, l = e || (f ? Object.getOwnPropertyDescriptor(f, n.name) : {}), h = !1, d = r.length - 1; d >= 0; d--) {
            var p = {};
            for (var v in n) p[v] = "access" === v ? {} : n[v];
            for (var v in n.access) p.access[v] = n.access[v];
            p.addInitializer = function(t) {
              if (h) throw new TypeError("Cannot add initializers after decoration has completed");
              a.push(i(t || null))
            };
            var y = (0, r[d])("accessor" === s ? {
              get: l.get,
              set: l.set
            } : l[u], p);
            if ("accessor" === s) {
              if (void 0 === y) continue;
              if (null === y || "object" != typeof y) throw new TypeError("Object expected");
              (c = i(y.get)) && (l.get = c), (c = i(y.set)) && (l.set = c), (c = i(y.init)) && o.unshift(c)
            } else(c = i(y)) && ("field" === s ? o.unshift(c) : l[u] = c)
          }
          f && Object.defineProperty(f, n.name, l), h = !0
        }

        function f(t, e, r) {
          for (var n = arguments.length > 2, o = 0; o < e.length; o++) r = n ? e[o].call(t, r) : e[o].call(t);
          return n ? r : void 0
        }

        function l(t) {
          return "symbol" == typeof t ? t : "".concat(t)
        }

        function h(t, e, r) {
          return "symbol" == typeof e && (e = e.description ? "[".concat(e.description, "]") : ""), Object.defineProperty(t, "name", {
            configurable: !0,
            value: r ? "".concat(r, " ", e) : e
          })
        }

        function d(t, e) {
          if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
        }

        function p(t, e, r, n) {
          return new(r || (r = Promise))((function(o, a) {
            function i(t) {
              try {
                s(n.next(t))
              } catch (t) {
                a(t)
              }
            }

            function c(t) {
              try {
                s(n.throw(t))
              } catch (t) {
                a(t)
              }
            }

            function s(t) {
              var e;
              t.done ? o(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                t(e)
              }))).then(i, c)
            }
            s((n = n.apply(t, e || [])).next())
          }))
        }

        function v(t, e) {
          var r, n, o, a, i = {
            label: 0,
            sent: function() {
              if (1 & o[0]) throw o[1];
              return o[1]
            },
            trys: [],
            ops: []
          };
          return a = {
            next: c(0),
            throw: c(1),
            return: c(2)
          }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
          }), a;

          function c(c) {
            return function(s) {
              return function(c) {
                if (r) throw new TypeError("Generator is already executing.");
                for (; a && (a = 0, c[0] && (i = 0)), i;) try {
                  if (r = 1, n && (o = 2 & c[0] ? n.return : c[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, c[1])).done) return o;
                  switch (n = 0, o && (c = [2 & c[0], o.value]), c[0]) {
                    case 0:
                    case 1:
                      o = c;
                      break;
                    case 4:
                      return i.label++, {
                        value: c[1],
                        done: !1
                      };
                    case 5:
                      i.label++, n = c[1], c = [0];
                      continue;
                    case 7:
                      c = i.ops.pop(), i.trys.pop();
                      continue;
                    default:
                      if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                        i = 0;
                        continue
                      }
                      if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                        i.label = c[1];
                        break
                      }
                      if (6 === c[0] && i.label < o[1]) {
                        i.label = o[1], o = c;
                        break
                      }
                      if (o && i.label < o[2]) {
                        i.label = o[2], i.ops.push(c);
                        break
                      }
                      o[2] && i.ops.pop(), i.trys.pop();
                      continue
                  }
                  c = e.call(t, i)
                } catch (t) {
                  c = [6, t], n = 0
                } finally {
                  r = o = 0
                }
                if (5 & c[0]) throw c[1];
                return {
                  value: c[0] ? c[1] : void 0,
                  done: !0
                }
              }([c, s])
            }
          }
        }
        var y = Object.create ? function(t, e, r, n) {
          void 0 === n && (n = r);
          var o = Object.getOwnPropertyDescriptor(e, r);
          o && !("get" in o ? !e.__esModule : o.writable || o.configurable) || (o = {
            enumerable: !0,
            get: function() {
              return e[r]
            }
          }), Object.defineProperty(t, n, o)
        } : function(t, e, r, n) {
          void 0 === n && (n = r), t[n] = e[r]
        };

        function m(t, e) {
          for (var r in t) "default" === r || Object.prototype.hasOwnProperty.call(e, r) || y(e, t, r)
        }

        function _(t) {
          var e = "function" == typeof Symbol && Symbol.iterator,
            r = e && t[e],
            n = 0;
          if (r) return r.call(t);
          if (t && "number" == typeof t.length) return {
            next: function() {
              return t && n >= t.length && (t = void 0), {
                value: t && t[n++],
                done: !t
              }
            }
          };
          throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }

        function g(t, e) {
          var r = "function" == typeof Symbol && t[Symbol.iterator];
          if (!r) return t;
          var n, o, a = r.call(t),
            i = [];
          try {
            for (;
              (void 0 === e || e-- > 0) && !(n = a.next()).done;) i.push(n.value)
          } catch (t) {
            o = {
              error: t
            }
          } finally {
            try {
              n && !n.done && (r = a.return) && r.call(a)
            } finally {
              if (o) throw o.error
            }
          }
          return i
        }

        function x() {
          for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(g(arguments[e]));
          return t
        }

        function S() {
          for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
          var n = Array(t),
            o = 0;
          for (e = 0; e < r; e++)
            for (var a = arguments[e], i = 0, c = a.length; i < c; i++, o++) n[o] = a[i];
          return n
        }

        function w(t, e, r) {
          if (r || 2 === arguments.length)
            for (var n, o = 0, a = e.length; o < a; o++) !n && o in e || (n || (n = Array.prototype.slice.call(e, 0, o)), n[o] = e[o]);
          return t.concat(n || Array.prototype.slice.call(e))
        }

        function b(t) {
          return this instanceof b ? (this.v = t, this) : new b(t)
        }

        function D(t, e, r) {
          if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
          var n, o = r.apply(t, e || []),
            a = [];
          return n = {}, i("next"), i("throw"), i("return"), n[Symbol.asyncIterator] = function() {
            return this
          }, n;

          function i(t) {
            o[t] && (n[t] = function(e) {
              return new Promise((function(r, n) {
                a.push([t, e, r, n]) > 1 || c(t, e)
              }))
            })
          }

          function c(t, e) {
            try {
              (r = o[t](e)).value instanceof b ? Promise.resolve(r.value.v).then(s, u) : f(a[0][2], r)
            } catch (t) {
              f(a[0][3], t)
            }
            var r
          }

          function s(t) {
            c("next", t)
          }

          function u(t) {
            c("throw", t)
          }

          function f(t, e) {
            t(e), a.shift(), a.length && c(a[0][0], a[0][1])
          }
        }

        function E(t) {
          var e, r;
          return e = {}, n("next"), n("throw", (function(t) {
            throw t
          })), n("return"), e[Symbol.iterator] = function() {
            return this
          }, e;

          function n(n, o) {
            e[n] = t[n] ? function(e) {
              return (r = !r) ? {
                value: b(t[n](e)),
                done: !1
              } : o ? o(e) : e
            } : o
          }
        }

        function I(t) {
          if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
          var e, r = t[Symbol.asyncIterator];
          return r ? r.call(t) : (t = _(t), e = {}, n("next"), n("throw"), n("return"), e[Symbol.asyncIterator] = function() {
            return this
          }, e);

          function n(r) {
            e[r] = t[r] && function(e) {
              return new Promise((function(n, o) {
                (function(t, e, r, n) {
                  Promise.resolve(n).then((function(e) {
                    t({
                      value: e,
                      done: r
                    })
                  }), e)
                })(n, o, (e = t[r](e)).done, e.value)
              }))
            }
          }
        }

        function k(t, e) {
          return Object.defineProperty ? Object.defineProperty(t, "raw", {
            value: e
          }) : t.raw = e, t
        }
        var T = Object.create ? function(t, e) {
          Object.defineProperty(t, "default", {
            enumerable: !0,
            value: e
          })
        } : function(t, e) {
          t.default = e
        };

        function P(t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var r in t) "default" !== r && Object.prototype.hasOwnProperty.call(t, r) && y(e, t, r);
          return T(e, t), e
        }

        function O(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }

        function M(t, e, r, n) {
          if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
          if ("function" == typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return "m" === r ? n : "a" === r ? n.call(t) : n ? n.value : e.get(t)
        }

        function K(t, e, r, n, o) {
          if ("m" === n) throw new TypeError("Private method is not writable");
          if ("a" === n && !o) throw new TypeError("Private accessor was defined without a setter");
          if ("function" == typeof e ? t !== e || !o : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return "a" === n ? o.call(t, r) : o ? o.value = r : e.set(t, r), r
        }

        function V(t, e) {
          if (null === e || "object" != typeof e && "function" != typeof e) throw new TypeError("Cannot use 'in' operator on non-object");
          return "function" == typeof t ? e === t : t.has(e)
        }

        function C(t, e, r) {
          if (null != e) {
            if ("object" != typeof e && "function" != typeof e) throw new TypeError("Object expected.");
            var n;
            if (r) {
              if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
              n = e[Symbol.asyncDispose]
            }
            if (void 0 === n) {
              if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
              n = e[Symbol.dispose]
            }
            if ("function" != typeof n) throw new TypeError("Object not disposable.");
            t.stack.push({
              value: e,
              dispose: n,
              async: r
            })
          } else r && t.stack.push({
            async: !0
          });
          return e
        }
        var R = "function" == typeof SuppressedError ? SuppressedError : function(t, e, r) {
          var n = new Error(r);
          return n.name = "SuppressedError", n.error = t, n.suppressed = e, n
        };

        function U(t) {
          function e(e) {
            t.error = t.hasError ? new R(e, t.error, "An error was suppressed during disposal.") : e, t.hasError = !0
          }
          return function r() {
            for (; t.stack.length;) {
              var n = t.stack.pop();
              try {
                var o = n.dispose && n.dispose.call(n.value);
                if (n.async) return Promise.resolve(o).then(r, (function(t) {
                  return e(t), r()
                }))
              } catch (t) {
                e(t)
              }
            }
            if (t.hasError) throw t.error
          }()
        }
        e.default = {
          __extends: o,
          __assign: a,
          __rest: i,
          __decorate: c,
          __param: s,
          __metadata: d,
          __awaiter: p,
          __generator: v,
          __createBinding: y,
          __exportStar: m,
          __values: _,
          __read: g,
          __spread: x,
          __spreadArrays: S,
          __spreadArray: w,
          __await: b,
          __asyncGenerator: D,
          __asyncDelegator: E,
          __asyncValues: I,
          __makeTemplateObject: k,
          __importStar: P,
          __importDefault: O,
          __classPrivateFieldGet: M,
          __classPrivateFieldSet: K,
          __classPrivateFieldIn: V,
          __addDisposableResource: C,
          __disposeResources: U
        }
      }
    },
    e = {};

  function r(n) {
    var o = e[n];
    if (void 0 !== o) return o.exports;
    var a = e[n] = {
      exports: {}
    };
    return t[n](a, a.exports, r), a.exports
  }
  r.d = function(t, e) {
    for (var n in e) r.o(e, n) && !r.o(t, n) && Object.defineProperty(t, n, {
      enumerable: !0,
      get: e[n]
    })
  }, r.o = function(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, r.r = function(t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    })
  };
  var n, o, a, i, c, s, u, f, l, h, d, p;
  o = r(635), a = o.__importDefault(r(117)), i = r(626), c = o.__importDefault(r(16)), s = o.__importDefault(r(84)), u = o.__importDefault(r(994)), f = o.__importDefault(r(554)), l = r(524), h = o.__importDefault(r(443)), d = o.__importDefault(r(535)), p = r(767), wx.onMessage((function(t) {
    if (l.hasSharedCanvas)
      if ("initScoreKey" !== t.type)
        if ("checkBestScore" !== t.type)
          if ("updateExpertScores" !== t.type)
            if ("updateMyInfo" !== t.type) {
              if ("setExpertMapScore" === t.type) return e = Number(t.mapId), r = Number(t.score), void p.openDataUtils.getMyExpertScore(e).then((function(t) {
                var n = 0,
                  o = p.openDataUtils.getExpertArrayIndex(e);
                t && o < t.length && (n = t[o] || 0), r > n && (t[o] = r, p.openDataUtils.setExpertScore(e, t))
              }));
              var e, r;
              if ("hide" !== t.type)
                if (n && n.type === t.type) n.update(t);
                else switch (n && n.dispose(), t.type) {
                  case "nextExceed":
                    n = new f.default(t);
                    break;
                  case "soonExceed":
                    n = new s.default(t);
                    break;
                  case "exceeded":
                    n = new u.default(t);
                    break;
                  case "rank":
                  case "groupRank":
                    (0, i.updateXY)(t), n = new a.default(t);
                    break;
                  case "nearRank":
                    n = new c.default(t);
                    break;
                  case "expertRank":
                    (0, i.updateXY)(t), n = new h.default(t);
                    break;
                  case "expertNearRank":
                    n = new d.default(t);
                    break;
                  default:
                    console.warn("未知的message类型", t)
                } else n && (n.dispose(), n = void 0)
            } else p.openDataUtils.loadMyUserInfo();
    else p.openDataUtils.setServerExpertFloors(JSON.parse(t.maps));
    else p.openDataUtils.checkBestScore(Number(t.score));
    else p.openDataUtils.setScoreKey(String(t.scoreKey), String(t.expertKey), JSON.parse(t.finishFloors))
  }))
}();