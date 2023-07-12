<script>
import card from "./card.vue";

export default {
  name: 'morearea',
  props: [],
  data() {
      return{
          dead: false,
          win: 0,
          cards: [
          ],
          oppo_cards:[
          ],
          oppo_hidden:[
          ],
          deck:[],
      }
  },

    components:{
        card
    },

  computed: {
    player_sum(){
        if (this.sum(this.cards) > 21) this.dead = true;
        return this.sum(this.cards);
    },
    oppo_sum(){
        return this.sum(this.oppo_cards);
    },
    probably_21(){
        var diff = 21 - this.sum(this.cards); 
        var goal = 0;
        if (diff > 11) return 0;
        for (var i in this.deck){
            if (this.deck[i].number == diff || this.deck[i].number == 1 && diff == 11 ||this.deck[i].number > 10 && diff == 10){
                goal = goal + 1;
            }
        }
        return Math.round(goal / this.deck.length * 100);
    },
    larger_21(){
        var diff = 21 - this.sum(this.cards);
        var goal = 0;
        if (diff > 10) return 0;
        for (var i in this.deck){
            if (this.deck[i].number > diff){
                goal = goal + 1;
            }
        }
        return Math.round(goal / this.deck.length * 100);
    },
  },

  created:function(){
      for (var i = 1; i < 14; i ++){
          this.deck.push({number: i, suit: "spades"});
          this.deck.push({number: i, suit: "hearts"});
          this.deck.push({number: i, suit: "diamonds"});
          this.deck.push({number: i, suit: "clubs"});
      }
  },

  methods: {
      clear(){
        this.deck.push(...this.cards);
        this.deck.push(...this.oppo_cards);
        this.deck.push(...this.oppo_hidden);
        this.cards = [];
        this.oppo_cards = [];
        this.oppo_hidden = [];
        this.dead = false;
        this.win = 0;
      },
      sum(cards){
            var s = 0;
            var ace = false;
            for (var i in cards){
                if (cards[i].number == 1){
                    ace = true;
                }
                if (cards[i].number > 10){
                    s = s + 10;
                } else {
                    s = s + cards[i].number;   
                }
            }
            if (ace && s + 10 < 21){
                s = s + 10;
            }
            return s;  
      },
      roll(p){
        var index = Math.floor(Math.random() * this.deck.length);
        if (p == 'player')
          this.cards.push(this.deck[index]);
        else if (p == 'oppo')
          this.oppo_cards.push(this.deck[index]);
        else{ 
          this.deck[index].invisible = true;
          this.oppo_hidden.push(this.deck[index]);
        }
          this.deck.splice(index, 1);
      },
      next(){
          for (var i = 0; i < this.oppo_hidden.length; i ++){
            this.oppo_hidden[i].invisible = false;
          }
          this.oppo_cards.push(...this.oppo_hidden);
          this.oppo_hidden = [];
          while (this.oppo_sum <= 17){
            this.roll('oppo');
          }
          if (this.oppo_sum > 21 || this.oppo_sum < this.player_sum){
            this.win = 2;
          } else {
            this.win = 1;
          }
      },
      start(){
        this.roll('player');
        this.roll('player');
        this.roll('oppo');
        this.roll('');
      },
  }
}
</script>

<template>
  <main>
    <div class = "board">
    <h1>Blackjack</h1>
    <div class = "game">
      <button v-on:click = 'start' v-if = "cards.length == 0">start</button>
      <div v-else>
        <div class="player_cards">
          <card v-for="item in oppo_cards" v-bind:item="item"> </card>
          <card v-for="item in oppo_hidden" v-bind:item="item"></card>
        </div>
        <p> opponent sum = {{ oppo_sum }} </p>
        <div class="player_cards">
          <card v-for="item in cards" v-bind:item="item"> </card>
        </div>
        <div> 
          <p>total sum = {{ player_sum }}</p> 
        </div>
        <div class="controls" v-if = "dead == false && win == 0">
          <button v-on:click = "roll('player')">draw</button>
          <button v-on:click = 'next'> pass </button>
        </div>
        <p v-else-if = "dead == true" > sum above 21, game over </p>
        <p v-if = "win == 1">You lose! </p>
        <p v-else-if = "win == 2">You win! </p>
        
        <button v-on:click = 'clear' v-if ="cards.length != 0"> reset </button>
      </div>
    <table v-if = "cards.length > 0">
        <thead>
            <tr>
            <th colspan = "2"> <h1>Probability Table (%) </h1> </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td> next draw > 21: </td>
                <td> {{ larger_21 }} </td>
            </tr>

            <tr>
                <td> next draw = 21: </td>
                <td> {{ probably_21 }} </td>
            </tr>
        </tbody>
    </table>
    </div>
  </div>
  </main>
</template>

<style scoped>
h1 {
  display: block;
  text-align: center;
}
.board{
    max-height: 100vh;
    padding-top: 3em;
    max-width: 90%;
    margin-left: 10%;
}
.game{
  display:flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.player_cards{
  display:block;
}
button{
  margin-top: 0.5em;
  padding: 0.5em 1em 0.5em 1em;
  font-size: 15px;
  background: transparent;
  color: green;
  border: solid;
  display: center;
}
button:active{
    box-shadow: 5px 5px 5px green;
}
table{
    min-width: 15em;
    max-height: 5em;
}
table, td{
    color:white;
    border: 1px solid white;
    padding: 5px;
}
td, tr{
    max-height: 20px;
}
</style>