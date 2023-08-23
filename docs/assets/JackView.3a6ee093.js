import{n as a,d as i}from"./index.d8037255.js";import{c as n}from"./card.0710c8f2.js";const o={name:"morearea",props:[],data(){return{dead:!1,win:0,cards:[],oppo_cards:[],oppo_hidden:[],deck:[]}},components:{card:n},computed:{player_sum(){return this.sum(this.cards)>21&&(this.dead=!0),this.sum(this.cards)},oppo_sum(){return this.sum(this.oppo_cards)},probably_21(){var e=21-this.sum(this.cards),s=0;if(e>11)return 0;for(var t in this.deck)(this.deck[t].number==e||this.deck[t].number==1&&e==11||this.deck[t].number>10&&e==10)&&(s=s+1);return Math.round(s/this.deck.length*100)},larger_21(){var e=21-this.sum(this.cards),s=0;if(e>10)return 0;for(var t in this.deck)this.deck[t].number>e&&(s=s+1);return Math.round(s/this.deck.length*100)}},created:function(){for(var e=1;e<14;e++)this.deck.push({number:e,suit:"spades"}),this.deck.push({number:e,suit:"hearts"}),this.deck.push({number:e,suit:"diamonds"}),this.deck.push({number:e,suit:"clubs"})},methods:{clear(){this.deck.push(...this.cards),this.deck.push(...this.oppo_cards),this.deck.push(...this.oppo_hidden),this.cards=[],this.oppo_cards=[],this.oppo_hidden=[],this.dead=!1,this.win=0},sum(e){var s=0,t=!1;for(var r in e)e[r].number==1&&(t=!0),e[r].number>10?s=s+10:s=s+e[r].number;return t&&s+10<21&&(s=s+10),s},roll(e){var s=Math.floor(Math.random()*this.deck.length);e=="player"?this.cards.push(this.deck[s]):e=="oppo"?this.oppo_cards.push(this.deck[s]):(this.deck[s].invisible=!0,this.oppo_hidden.push(this.deck[s])),this.deck.splice(s,1)},next(){for(var e=0;e<this.oppo_hidden.length;e++)this.oppo_hidden[e].invisible=!1;for(this.oppo_cards.push(...this.oppo_hidden),this.oppo_hidden=[];this.oppo_sum<=17;)this.roll("oppo");this.oppo_sum>21||this.oppo_sum<this.player_sum?this.win=2:this.win=1},start(){this.roll("player"),this.roll("player"),this.roll("oppo"),this.roll("")}}};var d=function(){var s=this,t=s._self._c;return t("main",[t("div",{staticClass:"board"},[t("h1",[s._v("Blackjack")]),t("div",{staticClass:"game"},[s.cards.length==0?t("button",{on:{click:s.start}},[s._v("start")]):t("div",[t("div",{staticClass:"player_cards"},[s._l(s.oppo_cards,function(r){return t("card",{attrs:{item:r}})}),s._l(s.oppo_hidden,function(r){return t("card",{attrs:{item:r}})})],2),t("p",[s._v(" opponent sum = "+s._s(s.oppo_sum)+" ")]),t("div",{staticClass:"player_cards"},s._l(s.cards,function(r){return t("card",{attrs:{item:r}})}),1),t("div",[t("p",[s._v("total sum = "+s._s(s.player_sum))])]),s.dead==!1&&s.win==0?t("div",{staticClass:"controls"},[t("button",{on:{click:function(r){return s.roll("player")}}},[s._v("draw")]),t("button",{on:{click:s.next}},[s._v(" pass ")])]):s.dead==!0?t("p",[s._v(" sum above 21, game over ")]):s._e(),s.win==1?t("p",[s._v("You lose! ")]):s.win==2?t("p",[s._v("You win! ")]):s._e(),s.cards.length!=0?t("button",{on:{click:s.clear}},[s._v(" reset ")]):s._e()]),s.cards.length>0?t("table",[s._m(0),t("tbody",[t("tr",[t("td",[s._v(" next draw > 21: ")]),t("td",[s._v(" "+s._s(s.larger_21)+" ")])]),t("tr",[t("td",[s._v(" next draw = 21: ")]),t("td",[s._v(" "+s._s(s.probably_21)+" ")])])])]):s._e()])])])},_=[function(){var e=this,s=e._self._c;return s("thead",[s("tr",[s("th",{attrs:{colspan:"2"}},[s("h1",[e._v("Probability Table (%) ")])])])])}],c=a(o,d,_,!1,null,"9bf9cd46",null,null);const h=c.exports,p=i({__name:"JackView",setup(e){return{__sfc:!0,morearea:h}}});var l=function(){var s=this,t=s._self._c,r=s._self._setupProxy;return t("main",[t(r.morearea)],1)},u=[],m=a(p,l,u,!1,null,null,null,null);const b=m.exports;export{b as default};
