<template>
  <div id="app">
    <router-view/>

  </div>
</template>

<script>

export default {
  name: 'app',
  data: () => ({
    selected: 1
  }),
  methods: {
    select(i) {
      this.selected = i;
    }
  }
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Alata&display=swap');

body {
  font-family: 'Alata', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
