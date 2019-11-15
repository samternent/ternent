<template>
    <section class="sidebar">
        <ul>
            <li
            v-for="({ path, name }, i) in items"
            :key="`sidebar-item-${i}`">
            <router-link :to="path">{{ name }}</router-link>
            </li>
        </ul>
    </section>
</template>

<script>

export default {
  name: 'app-sidebar',
  data: () => ({
      items: [
        //   { name: 'Sheets', path: '/sheet', },
          { name: 'Play', path: '/play', },
      ],
  }),
}
</script>
<style lang="scss">

.sidebar {
    background-color: #f5f6f7;
    // border-right: 1px solid #B1C1C0;
    width: 350px;
    display: flex;
    flex-direction: column;

    ul {
        flex-direction: column;
        li {
            display: block;
            padding: 10px;
        }
    }
}
</style>
