<script>
export default{
    name: 'card',
    props: {
      'item':{
        type: Object,
        default:{
          suit: 0,
          number: 0,
          selected: false,
          invisible: false,
        },
        required: true,
      },
    },
    computed:{

    },
    data (){
      return {
      }
    },
    methods:{
      calc(){
        this.$emit('number-update', this.item);
      },
    },
}
</script>

<template>
    <div v-on:click = "calc" class = "card" v-bind:class="{selected:item.selected, invisible:item.invisible}">
      <div v-bind:class="{red: (item.suit=='diamonds' || item.suit=='hearts')}" v-if="!item.invisible">
        <img v-if="item.suit=='diamonds'" alt="diamonds" class="suit" src="@/assets/diamonds.png" width="25" height="25" />
        <img v-else-if="item.suit == 'spades'" alt="spades" class="suit" src="@/assets/spades.png" width="25" height="25" />
        <img v-else-if="item.suit == 'clubs'" alt="clubs" class="suit" src="@/assets/clubs.png" width="25" height="25" />
        <img v-else alt="hearts" class="suit" src="@/assets/hearts.png" width="25" height="25" />
        <p class = "number" v-if = "item.number == 13"> K </p>
        <p class = "number" v-else-if = "item.number == 12"> Q </p>
        <p class = "number" v-else-if = "item.number == 11"> J </p>
        <p class = "number ten" v-else-if = "item.number == 10"> 10 </p>
        <p class = "number" v-else-if = "item.number == 1"> A </p>
        <p class = "number" v-else> {{item.number}} </p>
      </div>
    </div>
</template>

<style scoped>
.suit{
  position: absolute;
  margin-left: 0.5em;
  margin-top: 0.5em;
}
.card{
  display: inline-flex;
  border: 2px solid dimgray;
  background-color: white;
  color: black;
  width: 7rem;
  height: 9rem;
  transition: 0.5s ease-in-out;
}
.card:hover{
  translate: 0px -20px;
}
.card:active{
  background-color: beige;
}
.selected{
  pointer-events: none;
  background-color: dimgrey;
}
.invisible{
  pointer-events: none;
  background-color: black;
  border-color: white;
  margin-bottom: -0.1em;
}
.number{
  margin-left: 0.4em;
  margin-top: 0.2em;
  font-size: 5rem;
  position: absolute;
}
.ten{
  margin-left: 0.2em;
  letter-spacing: -0.1em;
}
.red{
  color: red;
}
</style>