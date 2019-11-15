<template>
    <div>
        <div v-if="!loading" class="sheet">
            <h1>{{ sheet.title }}</h1>
            <p><strong>{{ createdDate.fromNow() }}</strong> - <em>{{ createdDate.format('LLL') }}</em></p>
            <p>by {{ sheet.created_by }}</p>
            <p v-html="sheet.content"/>
        </div>
        <div v-if="loading" class="lds-circle"><div></div></div>
    </div>
</template>
<script>
import moment from 'moment';

export default {
    data: () => ({
        sheet: {},
        loading: true,
    }),
    computed: {
        createdDate: (vm) => moment.unix(vm.sheet.created_at),
    },
    async mounted() {
        const slug = this.$route.params.slug;
        this.$database.ref('sheet')
            .orderByChild('slug')
            .equalTo(slug)
            .on('child_added', (child) => {
                this.sheet = child.val();
                this.loading = false;
            });
    },
}
</script>
<style lang="scss">
.sheet {
    padding: 10px;
}
</style>
