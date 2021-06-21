<template>
  <main id="app">
    <router-view/>
  </main>
</template>

<style lang="scss">
@import './styles/main.scss';

#app {
  background-color: $gray;
  color: $black;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 12px;
}
</style>
