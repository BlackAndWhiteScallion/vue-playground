!function(){function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return e(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}System.register(["./index-legacy.3787cde1.js","./card-legacy.c4403a85.js"],(function(e,n){"use strict";var i,a,s,r=document.createElement("style");return r.textContent="h1[data-v-49e44027]{display:block;text-align:center}button[data-v-49e44027]{margin-top:.5em;margin-left:.5em;padding:.5em 1em;font-size:15px;background:transparent;color:green;border:solid}button[data-v-49e44027]:active{box-shadow:5px 5px 5px green}.formula[data-v-49e44027]{font-size:3rem;display:inline-block}.board[data-v-49e44027]{display:flex;flex-wrap:wrap;max-height:100vh;padding-top:3em;justify-content:center;align-items:center;flex-direction:column;max-width:90%;margin-left:10%}.fade-enter-active[data-v-49e44027],.fade-leave-active[data-v-49e44027]{transition:opacity .5s}.fade-enter[data-v-49e44027],.fade-leave-to[data-v-49e44027]{opacity:0}@media (min-width: 1024px){.about[data-v-49e44027]{min-height:100vh;min-width:80%;margin-left:0%;display:flex;text-align:center;justify-content:space-evenly}}\n",document.head.appendChild(r),{setters:[function(t){i=t.n,a=t.d},function(t){s=t.c}],execute:function(){var n={name:"cardview",data:function(){return{deck:[],cards:[],total:0,tweenedNumber:0,number:0,action:"",usedcount:0,win:!1}},components:{card:s},methods:{start:function(){for(var t=0;t<4;t++){var e=Math.floor(Math.random()*this.deck.length);this.cards.push(this.deck[e]),this.deck.splice(e,1)}},update:function(t){var e=t.number;0==this.total?(this.total+=e,t.selected=!0,this.usedcount+=1):("+"==this.action?this.total+=e:"-"==this.action?this.total-=e:"x"==this.action?this.total*=e:"/"==this.action&&(this.total=Math.floor(this.total/e)),""!=this.action&&(t.selected=!0,this.usedcount+=1,this.action="")),4==this.usedcount&&24==this.total&&(this.win=!0)},plus:function(){this.action="+"},minus:function(){this.action="-"},multiply:function(){this.action="x"},division:function(){this.action="/"},reset:function(){for(var t in this.number=0,this.total=0,this.action="",this.usedcount=0,this.win=!1,this.cards)this.cards[t].selected=!1},clear:function(){var e;this.reset(),(e=this.deck).push.apply(e,t(this.cards)),this.cards=[]}},created:function(){for(var t=1;t<14;t++)this.deck.push({number:t,suit:"spades",selected:!1}),this.deck.push({number:t,suit:"hearts",selected:!1}),this.deck.push({number:t,suit:"diamonds",selected:!1}),this.deck.push({number:t,suit:"clubs",selected:!1})},computed:{animatedNumber:function(){return this.tweenedNumber.toFixed(0)}},watch:{total:function(t){gsap.to(this.$data,{duration:.5,tweenedNumber:t})}},setup:function(){}},r=i(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"board"},[e("div",[e("h1",[t._v("Game")]),0==t.cards.length?e("button",{on:{click:t.start}},[t._v(" start ")]):e("div",t._l(t.cards,(function(n){return e("card",{attrs:{item:n},on:{"number-update":t.update}})})),1)]),t.cards.length>0?e("div",{staticClass:"numbers"},[e("p",{staticClass:"formula"},[t._v(t._s(t.animatedNumber))]),t.action.length>0?e("p",{staticClass:"formula"},[t._v(t._s(t.action))]):t._e(),e("transition",{attrs:{name:"fade"}},[1==t.win?e("p",[t._v("You got 24, Congratulations! ")]):t._e()])],1):t._e(),t.total>0&&1!=t.win?e("div",{staticClass:"controls"},[e("button",{on:{click:t.plus}},[t._v("+")]),e("button",{on:{click:t.minus}},[t._v("-")]),e("button",{on:{click:t.multiply}},[t._v("x")]),e("button",{on:{click:t.division}},[t._v("/")])]):t._e(),t.cards.length>0&&1!=t.win?e("div",{staticClass:"controls"},[e("button",{on:{click:t.reset}},[t._v("reset")]),e("button",{on:{click:t.clear}},[t._v("give up")])]):t._e(),1==t.win?e("div",{staticClass:"controls"},[e("button",{on:{click:t.clear}},[t._v("new game")])]):t._e()])}),[],!1,null,"49e44027",null,null).exports;e("default",i(a({__name:"FiveView",setup:function(t){return{__sfc:!0,fivecard:r}}}),(function(){var t=this._self._c;return t("main",[t(this._self._setupProxy.fivecard)],1)}),[],!1,null,null,null,null).exports)}}}))}();
