<template>
  <div id="app">
    <h1>ternent.dev</h1>
    <p>domained</p>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
@font-face {
  font-family: 'Noah';
  src:
      url('./assets/fonts/Noah/Noah-Regular.eot'),
      url('./assets/fonts/Noah/Noah-Regular.woff2') format('woff2'),
      url('./assets/fonts/Noah/Noah-Regular.woff') format('woff'),
      url('./assets/fonts/Noah/Noah-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Noah Bold';
  src:
      url('./assets/fonts/Noah/Noah-Bold.eot'),
      url('./assets/fonts/Noah/Noah-Bold.woff2') format('woff2'),
      url('./assets/fonts/Noah/Noah-Bold.woff') format('woff'),
      url('./assets/fonts/Noah/Noah-Bold.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

h1 {
  font-family: 'Noah Bold';
  font-weight: bold;
}
</style>
