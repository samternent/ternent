<template>
    <nav>
      <ul>
        <li
          v-for="{ path, meta } in items"
          :key="path">
          <router-link :to="path">{{ meta.nav }}</router-link>
        </li>
      </ul>
    </nav>
</template>
<script>
export default {
  name: 'app-header-nav',
  props: {
    items: { type: Array, default: () => [] },
  },
}
</script>
<style scoped lang="scss">
nav {
  display: flex;
  justify-content: space-between;
}
</style>
