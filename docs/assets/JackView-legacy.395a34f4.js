!function(){function t(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}System.register(["./index-legacy.95931897.js","./card-legacy.81934f45.js"],(function(r,e){"use strict";var n,a,s,i=document.createElement("style");return i.textContent="h1[data-v-9bf9cd46]{display:block;text-align:center}.board[data-v-9bf9cd46]{max-height:100vh;padding-top:3em;max-width:90%;margin-left:10%}.game[data-v-9bf9cd46]{display:flex;flex-wrap:wrap;justify-content:space-evenly}.player_cards[data-v-9bf9cd46]{display:block}button[data-v-9bf9cd46]{margin-top:.5em;padding:.5em 1em;font-size:15px;background:transparent;color:green;border:solid;display:center}button[data-v-9bf9cd46]:active{box-shadow:5px 5px 5px green}table[data-v-9bf9cd46]{min-width:15em;max-height:5em}table[data-v-9bf9cd46],td[data-v-9bf9cd46]{color:#fff;border:1px solid white;padding:5px}td[data-v-9bf9cd46],tr[data-v-9bf9cd46]{max-height:20px}\n",document.head.appendChild(i),{setters:[function(t){n=t.n,a=t.d},function(t){s=t.c}],execute:function(){var e=n({name:"morearea",props:[],data:function(){return{dead:!1,win:0,cards:[],oppo_cards:[],oppo_hidden:[],deck:[]}},components:{card:s},computed:{player_sum:function(){return this.sum(this.cards)>21&&(this.dead=!0),this.sum(this.cards)},oppo_sum:function(){return this.sum(this.oppo_cards)},probably_21:function(){var t=21-this.sum(this.cards),r=0;if(t>11)return 0;for(var e in this.deck)(this.deck[e].number==t||1==this.deck[e].number&&11==t||this.deck[e].number>10&&10==t)&&(r+=1);return Math.round(r/this.deck.length*100)},larger_21:function(){var t=21-this.sum(this.cards),r=0;if(t>10)return 0;for(var e in this.deck)this.deck[e].number>t&&(r+=1);return Math.round(r/this.deck.length*100)}},created:function(){for(var t=1;t<14;t++)this.deck.push({number:t,suit:"spades"}),this.deck.push({number:t,suit:"hearts"}),this.deck.push({number:t,suit:"diamonds"}),this.deck.push({number:t,suit:"clubs"})},methods:{clear:function(){var r,e,n;(r=this.deck).push.apply(r,t(this.cards)),(e=this.deck).push.apply(e,t(this.oppo_cards)),(n=this.deck).push.apply(n,t(this.oppo_hidden)),this.cards=[],this.oppo_cards=[],this.oppo_hidden=[],this.dead=!1,this.win=0},sum:function(t){var r=0,e=!1;for(var n in t)1==t[n].number&&(e=!0),t[n].number>10?r+=10:r+=t[n].number;return e&&r+10<21&&(r+=10),r},roll:function(t){var r=Math.floor(Math.random()*this.deck.length);"player"==t?this.cards.push(this.deck[r]):"oppo"==t?this.oppo_cards.push(this.deck[r]):(this.deck[r].invisible=!0,this.oppo_hidden.push(this.deck[r])),this.deck.splice(r,1)},next:function(){for(var r,e=0;e<this.oppo_hidden.length;e++)this.oppo_hidden[e].invisible=!1;for((r=this.oppo_cards).push.apply(r,t(this.oppo_hidden)),this.oppo_hidden=[];this.oppo_sum<=17;)this.roll("oppo");this.oppo_sum>21||this.oppo_sum<this.player_sum?this.win=2:this.win=1},start:function(){this.roll("player"),this.roll("player"),this.roll("oppo"),this.roll("")}}},(function(){var t=this,r=t._self._c;return r("main",[r("div",{staticClass:"board"},[r("h1",[t._v("Blackjack")]),r("div",{staticClass:"game"},[0==t.cards.length?r("button",{on:{click:t.start}},[t._v("start")]):r("div",[r("div",{staticClass:"player_cards"},[t._l(t.oppo_cards,(function(t){return r("card",{attrs:{item:t}})})),t._l(t.oppo_hidden,(function(t){return r("card",{attrs:{item:t}})}))],2),r("p",[t._v(" opponent sum = "+t._s(t.oppo_sum)+" ")]),r("div",{staticClass:"player_cards"},t._l(t.cards,(function(t){return r("card",{attrs:{item:t}})})),1),r("div",[r("p",[t._v("total sum = "+t._s(t.player_sum))])]),0==t.dead&&0==t.win?r("div",{staticClass:"controls"},[r("button",{on:{click:function(r){return t.roll("player")}}},[t._v("draw")]),r("button",{on:{click:t.next}},[t._v(" pass ")])]):1==t.dead?r("p",[t._v(" sum above 21, game over ")]):t._e(),1==t.win?r("p",[t._v("You lose! ")]):2==t.win?r("p",[t._v("You win! ")]):t._e(),0!=t.cards.length?r("button",{on:{click:t.clear}},[t._v(" reset ")]):t._e()]),t.cards.length>0?r("table",[t._m(0),r("tbody",[r("tr",[r("td",[t._v(" next draw > 21: ")]),r("td",[t._v(" "+t._s(t.larger_21)+" ")])]),r("tr",[r("td",[t._v(" next draw = 21: ")]),r("td",[t._v(" "+t._s(t.probably_21)+" ")])])])]):t._e()])])])}),[function(){var t=this._self._c;return t("thead",[t("tr",[t("th",{attrs:{colspan:"2"}},[t("h1",[this._v("Probability Table (%) ")])])])])}],!1,null,"9bf9cd46",null,null).exports;r("default",n(a({__name:"JackView",setup:function(t){return{__sfc:!0,morearea:e}}}),(function(){var t=this._self._c;return t("main",[t(this._self._setupProxy.morearea)],1)}),[],!1,null,null,null,null).exports)}}}))}();