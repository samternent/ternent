<template>
    <div>
        <div v-if="!loading" class="sheet">
            <h1>{{ sheet.title }}</h1>
            <!-- {{ sheet }} -->
            <!-- <p><strong>{{ sheet.created_at.fromNow() }}</strong> - <em>{{ createdDate.format('LLL') }}</em></p> -->
            <p><strong>{{ sheet.created_at }}</strong></p>
            <p>by {{ sheet.created_by }}</p>
            <p v-html="sheet.info"/>
            <div v-for="(task, i) in sheet.tasks" :key="`task${i}`">
                <p>{{ task.name }} {{ task.completed }}</p>
            </div>
        </div>
        <div v-if="loading" class="lds-circle"><div></div></div>
    </div>
</template>
<script>
// import moment from 'moment';
// import VueMarkdown from 'vue-markdown';

export default {
    // components: { VueMarkdown },
    data: () => ({
        sheet: {},
        loading: true,
    }),
    computed: {
        // createdDate: (vm) => moment.unix(vm.sheet.created_at),
    },
    async mounted() {
        const slug = this.$route.params.slug;
        this.$database.ref('chunk')
            .orderByChild('slug')
            .equalTo(slug)
            .on('child_added', (child) => {
                this.sheet = child.val();
                Object.keys(this.sheet.tasks).forEach(async (taskId) => {
                    // eslint-disable-next-line no-console
                    const task = await this.$database.ref(`task/${taskId}`).once('value');
                    // eslint-disable-next-line no-console
                    this.sheet.tasks[taskId] = task.val();
                });
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
