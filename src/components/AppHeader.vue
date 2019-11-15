<template>
  <header class="fixed w-full z-10 top-0 bg-white border-b border-gray-400">
    <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-4">
      <div class="pl-4 flex items-center ">
        <router-link class="text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl" to="/">CBT.</router-link>
      </div>
      <div class="pr-4 flex items-center">
        <app-header-user/>
      </div>
    </div>
  </header>
</template>

<script>
import AppHeaderUser from './AppHeaderUser';

export default {
  name: 'app-header',
  components: { AppHeaderUser },
  props: {
    nav: { type: Array, default: () => [] },
  },
  computed: {
      isCreate: (vm) => vm.$route.name === 'new-game'
  },
}
</script>
<style lang="scss" scoped>
// .header {
//   // background-color: #20A4F3;
//   background-color: #3943B7;
//   // border-bottom: 1px solid #B1C1C0;
//   display: flex;

//   justify-content: space-between;
//   z-index: 10;
// }
// .left {
//   display: flex;
//   justify-content: flex-start;
// }
// .right {
//   display: flex;
//   justify-content: flex-end;
// }
// .app-name {
//   margin: 0 20px;
//   text-decoration: none;
//   color: #fff;
//   font-weight: 600;
//   line-height: 50px;
// }
</style>
