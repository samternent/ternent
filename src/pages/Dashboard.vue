<template>
    <div class="dashboard">
        <ul class="chunks-list">
            <li v-for="(chunk, i) in chunks" :key="`${chunk.slug}${i}`">
                <router-link :to="`chunk/${chunk.slug}`">{{ chunk.title }}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data: () => ({
        chunks: [],
    }),
    async mounted() {
        const chunks = await this.$database.ref('chunk').once('value');
        this.chunks = chunks.val();
    },
}
</script>
<style lang="scss">

</style>
