<template>
    <div class="dashboard">
        <h3>Sheets</h3>
        <ul class="sheets-list">
            <li v-for="(sheet, i) in sheets" :key="`${sheet.slug}${i}`">
                <router-link :to="`sheet/${sheet.slug}`">{{ sheet.title }}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data: () => ({
        sheets: [],
    }),
    async mounted() {
        const sheets = await this.$database.ref('sheet').once('value');
        this.sheets = sheets.val();
    },
}
</script>
<style lang="scss">
.dashboard {
    padding: 10px;
}
.sheets-list {
    list-style-type: none;
    padding: 0;
    li {
        display: block;
        border: 1px solid #eee;
        border-radius: 5px;
        padding: 10px 15px;
        margin: 5px auto;

        a {
            text-decoration: none;
            color: #333;
        }
    }
}
</style>
