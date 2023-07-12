<script>
export default {
  name: 'board-area',
  props: {
    type: String,
  },

  data () {
    return{
      msg: '555'
    }
  },

  computed: {
  },

  watch: {
  },

  methods: {
    reverseMessage(){
        this.msg = this.msg.split("").reverse("").join("");
    },
    clear(){
      this.msg = '';
    }
  }
}
</script>

<template>
  <main>
    <input type="textarea" id="name" name="name" required v-model="msg">
    <p>{{ msg }}</p>
    <button v-on:click = 'reverseMessage()'>Reverse Message</button>
    <button v-on:click = 'clear'>Clear</button>
  </main>
</template>