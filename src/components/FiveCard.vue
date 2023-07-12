<script>
    import card from "../components/card.vue"
    
    export default{
        name:'cardview',
        data(){
            return{
                deck: [],
                cards: [],
                total: 0,
                tweenedNumber: 0,
                number: 0,
                action: '',
                usedcount: 0,
                win: false,
            }
        },
        components:{
            card
        },
        methods:{
            start:function(){
                for (var i = 0; i < 4; i ++){
                    var index = Math.floor(Math.random() * this.deck.length);
                    this.cards.push(this.deck[index]);
                    this.deck.splice(index, 1);
                }
            },
            update:function (card){
                var number = card.number;
                if (this.total == 0){
                    this.total += number;
                    card.selected = true;
                    this.usedcount += 1;
                } else {
                    if (this.action == "+"){
                        this.total += number;
                    } else if (this.action == "-"){
                        this.total -= number;
                    } else if (this.action == "x"){
                        this.total *= number;
                    } else if (this.action == "/"){
                        this.total = Math.floor(this.total / number);
                    }
                    if (this.action != ""){
                        card.selected = true;
                        this.usedcount += 1;
                        this.action = "";
                    }
                }          
                if (this.usedcount == 4 && this.total == 24){
                    this.win = true;
                }
               },
            plus:function(){
                this.action = "+";
            },
            minus:function(){
                this.action = "-";
            },
            multiply:function(){
                this.action = "x";
            },
            division:function(){
                this.action = "/";
            },
            reset:function(){
                this.number = 0;
                this.total = 0;
                this.action = "";
                this.usedcount = 0;
                this.win = false;
                for (var i in this.cards){
                    this.cards[i].selected = false;
                }
            },
            clear:function(){
                this.reset();
                this.deck.push(...this.cards);
                this.cards = [];
            }
        },
        created:function(){
            for (var i = 1; i < 14; i ++){
                this.deck.push({number: i, suit: "spades", selected: false});
                this.deck.push({number: i, suit: "hearts", selected: false});
                this.deck.push({number: i, suit: "diamonds", selected: false});
                this.deck.push({number: i, suit: "clubs", selected: false});
            }
        },
        computed:{
            animatedNumber: function(){
                return this.tweenedNumber.toFixed(0);
            }
        },
        watch:{
            total:function(newvalue){
                gsap.to(this.$data, {duration: 0.5, tweenedNumber: newvalue})
            }
        },
        setup(){

        },
    }
</script>

<template>
    <div class="board">
        <div>
        <h1>Game</h1>
            <button v-on:click="start" v-if = "cards.length == 0"> start </button>
            <div v-else>
                <card v-on:number-update="update" v-for="item in cards" v-bind:item="item"> </card>
            </div>
        </div>
        <div class="numbers" v-if = "cards.length > 0">
            <p class="formula">{{ animatedNumber }}</p>
            <p class="formula" v-if = "action.length > 0">{{ action }}</p>
            <transition name="fade">
                <p v-if = "win == true">You got 24, Congratulations! </p>
            </transition>
        </div>
        <div class="controls" v-if = "total > 0 && win != true">
            <button v-on:click="plus">+</button>
            <button v-on:click="minus">-</button>
            <button v-on:click="multiply">x</button>
            <button v-on:click="division">/</button>
        </div>
        <div class = "controls" v-if = "cards.length > 0 && win != true">
            <button v-on:click="reset">reset</button>
            <button v-on:click="clear">give up</button>
        </div>
        <div class = "controls" v-if = "win == true">
            <button v-on:click="clear">new game</button>
        </div>
    </div>
</template>

<style scoped>
h1 {
  display: block;
  text-align: center;
}
button{
  margin-top: 0.5em;
  margin-left: 0.5em;
  padding: 0.5em 1em 0.5em 1em;
  font-size: 15px;
  background: transparent;
  color: green;
  border: solid;
}
button:active{
    box-shadow: 5px 5px 5px green;
}
.formula{
    font-size: 3rem;
    display: inline-block;
}
.board{
    display:flex;
    flex-wrap: wrap;
    max-height: 100vh;
    padding-top: 3em;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 90%;
    margin-left: 10%;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    min-width: 80%;
    margin-left: 0%;
    display: flex;
    text-align: center;
    justify-content: space-evenly;
  }
}
</style>