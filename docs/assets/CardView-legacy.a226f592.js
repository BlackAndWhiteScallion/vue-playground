System.register(["./index-legacy.95931897.js","./card-legacy.81934f45.js"],(function(e,t){"use strict";var n,i,s,r=document.createElement("style");return r.textContent="h1[data-v-cb7f1e7f]{display:block;text-align:center}@media (min-width: 1024px){.about[data-v-cb7f1e7f]{min-height:100vh;min-width:90%;margin-left:10%;padding-top:5%;display:flex;text-align:center;justify-content:space-evenly;flex-wrap:wrap}}\n",document.head.appendChild(r),{setters:[function(e){n=e.n,i=e.d},function(e){s=e.c}],execute:function(){var t=n({name:"cardview",props:[],data:function(){return{deck:[]}},components:{card:s},computed:{},methods:{},created:function(){for(var e=1;e<14;e++)this.deck.push({number:e,suit:"hearts"}),this.deck.push({number:e,suit:"spades"}),this.deck.push({number:e,suit:"diamonds"}),this.deck.push({number:e,suit:"clubs"})}},(function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v(" Poker Cards ")]),t("div",{staticClass:"about"},e._l(e.deck,(function(n){return t("card",{attrs:{item:n},on:{click:function(t){return e.alert("hi")}}})})),1)])}),[],!1,null,"cb7f1e7f",null,null).exports;e("default",n(i({__name:"CardView",setup:function(e){return{__sfc:!0,display:t}}}),(function(){var e=this._self._c;return e("main",[e(this._self._setupProxy.display)],1)}),[],!1,null,null,null,null).exports)}}}));