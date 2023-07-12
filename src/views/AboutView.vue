<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style scoped>
h1 {
  text-align: left;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    min-width: 100%;
    display: flex;
    flex-wrap: warp;
    justify-content: center;
  }
}
</style>