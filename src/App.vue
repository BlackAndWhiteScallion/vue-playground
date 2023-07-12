<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div id="app">
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/blackjack">Blackjack</router-link>
          <router-link to="/twenty-four">24</router-link>
          <router-link to="/cards">Cards</router-link>
          <router-link to="/about">About</router-link>
        </nav>
    </header>
    <router-view />
  </div>
</template>

<style>
header {
  line-height: 1.5;
  margin-left: -10rem;
}

.logo {
  display: flex;
  position: fixed;
}

nav {
  position: fixed;
  font-size: 5rem;
  text-align: center;
  margin-top: 10rem;
  margin-right: 1rem;
  z-index: 1000;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: flex;
  padding: 0 1rem;
  border-top: 1px solid var(--color-border);
  font-size: 1.5rem;
  margin-top: 0.2em;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    place-items: center;
  }

  header .wrapper {
    place-items: center;
    flex-wrap: wrap;
  }

  nav {
    text-align: center;
    font-size: 1rem;
  }
}
</style>
