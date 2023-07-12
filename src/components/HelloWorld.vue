<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>

    <p> This is a set of poker games I recreated for demonstration purposes. Enjoy! </p>

    <h3>Blackjack</h3>
    <h3>24</h3>

  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  text-align: center;
}

h3 {
  font-size: 1.2rem;
}

.greetings{
  padding-top: 5%;
}
.greetings h1,
.greetings h3,
.greetings p{
  text-align: center;
  align-items: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    display: block;
  }
}
</style>
