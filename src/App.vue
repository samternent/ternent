<template>
  <div id="app">
    <header id="header" class="fixed w-full z-10 top-0 bg-white border-b border-gray-400">
      <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-4">
        <div class="pl-4 flex items-center">
            <a class="text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl"  href="#">
              ST
            </a>
        </div>
        <div class="pl-4 flex items-center">
            <a class="text-gray-900 text-base no-underline hover:no-underline"  href="#">
              ST
            </a>
        </div>
      </div>
    </header>
    <nav class="w-full container flex flex-wrap border-b border-gray-400">

    </nav>
    <!--Container-->
    <div class="w-full container flex flex-wrap mx-auto px-2 pl-0 pt-20 mt-2">
      <nav>
        <ul class="flex">
          <li class="mr-6">
            <a class="text-blue-500 hover:text-blue-800" href="#">Home</a>
          </li>
          <li class="mr-6">
            <a class="text-blue-500 hover:text-blue-800" href="#">Timeline</a>
          </li>
          <li class="mr-6">
            <a class="text-blue-500 hover:text-blue-800" href="#">Photos</a>
          </li>
          <li class="mr-6">
            <a class="text-blue-500 hover:text-blue-800" href="#">Friends</a>
          </li>
          <li class="mr-6">
            <a class="text-blue-500 hover:text-blue-800" href="#">Business</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="w-full container flex flex-wrap mx-auto pt-6">
      <div class="w-full bg-gray-200 p-4 text-gray-800">
        <vue-markdown>i am a ~~tast~~ **test**.</vue-markdown>
      </div>
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';

export default {
  name: 'app',
  components: { VueMarkdown },
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
