<script>
    import card from "../components/card.vue"
    
    export default{
        name:'cardview',
        props:[],
        data(){
            return{
                deck:[],
            }
        },
        components:{
            card
        },
        computed:{

        },
        methods:{
            
        },
        created:function(){
            for (var i = 1; i < 14; i ++){
                this.deck.push({number: i, suit: "hearts"});
                this.deck.push({number: i, suit: "spades"});
                this.deck.push({number: i, suit: "diamonds"});
                this.deck.push({number: i, suit: "clubs"});
            }
        },
    }
</script>

<template>
    <div>
        <h1> Poker Cards </h1>
        <div class="about">
            <card v-for="item in deck" v-bind:item="item" v-on:click = "alert('hi')"> </card>
        </div> 
    </div>
</template>

<style scoped>
h1 {
  display: block;
  text-align: center;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    min-width: 90%;
    margin-left: 10%;
    padding-top: 5%;
    display: flex;
    text-align: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
}
</style>