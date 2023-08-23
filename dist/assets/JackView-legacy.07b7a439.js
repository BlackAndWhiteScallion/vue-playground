!function(){function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,r){if(!t)return;if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(t,r)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}System.register(["./index-legacy.3779cfe4.js","./card-legacy.33439fa7.js"],(function(e,r){"use strict";var n,a,s,i=document.createElement("style");return i.textContent="h1[data-v-7f2f2e79]{display:block;text-align:center}.board[data-v-7f2f2e79]{max-height:100vh;padding-top:3em;max-width:90%;margin-left:10%}.game[data-v-7f2f2e79]{display:flex;flex-wrap:wrap;justify-content:space-evenly}.player_cards[data-v-7f2f2e79]{display:block}button[data-v-7f2f2e79]{margin-top:.5em;padding:.5em 1em;font-size:15px;background:transparent;color:green;border:solid;display:center}button[data-v-7f2f2e79]:active{box-shadow:5px 5px 5px green}table[data-v-7f2f2e79]{min-width:15em;max-height:5em}table[data-v-7f2f2e79],td[data-v-7f2f2e79]{color:#fff;border:1px solid white;padding:5px}td[data-v-7f2f2e79],tr[data-v-7f2f2e79]{max-height:20px}\n",document.head.appendChild(i),{setters:[function(t){n=t.n,a=t.d},function(t){s=t.c}],execute:function(){var r=n({name:"morearea",props:[],data:function(){return{dead:!1,win:0,cards:[],oppo_cards:[],oppo_hidden:[],deck:[]}},components:{card:s},computed:{player_sum:function(){return this.sum(this.cards)>21&&(this.dead=!0),this.sum(this.cards)},oppo_sum:function(){return this.sum(this.oppo_cards)},probably_21:function(){var t=21-this.sum(this.cards),e=0;if(t>11)return 0;for(var r in this.deck)(this.deck[r].number==t||1==this.deck[r].number&&11==t||this.deck[r].number>10&&10==t)&&(e+=1);return Math.round(e/this.deck.length*100)},larger_21:function(){var t=21-this.sum(this.cards),e=0;if(t>10)return 0;for(var r in this.deck)this.deck[r].number>t&&(e+=1);return Math.round(e/this.deck.length*100)}},created:function(){for(var t=1;t<14;t++)this.deck.push({number:t,suit:"spades"}),this.deck.push({number:t,suit:"hearts"}),this.deck.push({number:t,suit:"diamonds"}),this.deck.push({number:t,suit:"clubs"})},methods:{clear:function(){var e,r,n;(e=this.deck).push.apply(e,t(this.cards)),(r=this.deck).push.apply(r,t(this.oppo_cards)),(n=this.deck).push.apply(n,t(this.oppo_hidden)),this.cards=[],this.oppo_cards=[],this.oppo_hidden=[],this.dead=!1,this.win=0},sum:function(t){var e=0,r=!1;for(var n in t)1==t[n].number&&(r=!0),t[n].number>10?e+=10:e+=t[n].number;return r&&e+10<21&&(e+=10),e},roll:function(t){var e=Math.floor(Math.random()*this.deck.length);"player"==t?this.cards.push(this.deck[e]):"oppo"==t?this.oppo_cards.push(this.deck[e]):(this.deck[e].invisible=!0,this.oppo_hidden.push(this.deck[e])),this.deck.splice(e,1)},next:function(){for(var e,r=0;r<this.oppo_hidden.length;r++)this.oppo_hidden[r].invisible=!1;for((e=this.oppo_cards).push.apply(e,t(this.oppo_hidden)),this.oppo_hidden=[];this.oppo_sum<=17;)this.roll("oppo");this.oppo_sum>21||this.oppo_sum<this.player_sum?this.win=2:this.win=1},start:function(){this.roll("player"),this.roll("player"),this.roll("oppo"),this.roll("")}}},(function(){var t=this,e=t._self._c;return e("main",[e("div",{staticClass:"board"},[e("h1",[t._v("Blackjack")]),e("div",{staticClass:"game"},[0==t.cards.length?e("button",{on:{click:t.start}},[t._v("start")]):e("div",[e("div",{staticClass:"player_cards"},[t._l(t.oppo_cards,(function(t){return e("card",{attrs:{item:t}})})),t._l(t.oppo_hidden,(function(t){return e("card",{attrs:{item:t}})}))],2),e("p",[t._v(" opponent sum = "+t._s(t.oppo_sum)+" ")]),e("div",{staticClass:"player_cards"},t._l(t.cards,(function(t){return e("card",{attrs:{item:t}})})),1),e("div",[e("p",[t._v("total sum = "+t._s(t.player_sum))])]),0==t.dead&&0==t.win?e("div",{staticClass:"controls"},[e("button",{on:{click:function(e){return t.roll("player")}}},[t._v("draw")]),e("button",{on:{click:t.next}},[t._v(" pass ")])]):1==t.dead?e("p",[t._v(" sum above 21, game over ")]):t._e(),1==t.win?e("p",[t._v("You lose! ")]):2==t.win?e("p",[t._v("You win! ")]):t._e(),0!=t.cards.length?e("button",{on:{click:t.clear}},[t._v(" reset ")]):t._e()]),t.cards.length>0?e("table",[t._m(0),e("tbody",[e("tr",[e("td",[t._v(" next draw > 21: ")]),e("td",[t._v(" "+t._s(t.larger_21)+" ")])]),e("tr",[e("td",[t._v(" next draw = 21: ")]),e("td",[t._v(" "+t._s(t.probably_21)+" ")])])])]):t._e()])])])}),[function(){var t=this._self._c;return t("thead",[t("tr",[t("th",{attrs:{colspan:"2"}},[t("h1",[this._v("Probability Table (%) ")])])])])}],!1,null,"7f2f2e79",null,null).exports;e("default",n(a({__name:"JackView",setup:function(t){return{__sfc:!0,morearea:r}}}),(function(){var t=this._self._c;return t("main",[t(this._self._setupProxy.morearea)],1)}),[],!1,null,null,null,null).exports)}}}))}();