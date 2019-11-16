<template>
    <div class="create">
        <section class="create__toolbar">
            {{ url }}
        </section>
        <section class="create__content">
            <input class="title" type="text" placeholder="Title" v-model.trim="title"/>
            <ckeditor :editor="editor" v-model="info"></ckeditor>
        </section>
    </div>
</template>
<script>
import firebase from 'firebase';
import Editor from '@ckeditor/ckeditor5-build-classic';

export default {
    data: () => ({
        title: '',
        editor: Editor,
        info: '',
        tasks: {},
    }),
    computed: {
        slug: (vm) => vm.title.replace(/\s/g, "-").replace(/[^a-zA-Z0-9 -]/g, "").toLowerCase(),
        url: (vm) => `${window.location.origin}/sheet/${vm.slug}`,
    },
    methods: {
        async createTask() {
            const nextRef = this.$database.ref('task').push();
            await nextRef.set({
                completed: false,
                completed_at: '',
                info: "Holding a toy spider will help you",
                name: "Hold a toy spider",
                created_at: Math.floor(Date.now() / 1000),
                created_by: firebase.auth().currentUser.email,
                userId: firebase.auth().currentUser.uid,
            });
            this.tasks[nextRef.ref.key] = true;
        },
        async save() {
            const { slug, title, info, tasks } = this;
            const nextRef = this.$database.ref('chunk').push();
            await nextRef.set({
                slug,
                title,
                info,
                created_at: Math.floor(Date.now() / 1000),
                created_by: firebase.auth().currentUser.email,
                userId: firebase.auth().currentUser.uid,
                tasks,
            });
            // this.$router.replace(`sheet/${slug}`);
        }
    },
}
</script>
<style lang="scss" scoped>
.create__toolbar {
    // background-color: #07A0C3;
    background-color: #f5f6f7;
    // color: #fff;
}
.create__toolbar,
.create__content {
    padding: 10px;
    width: 100%;
}

.title {
    border: 0;
    font-size: 2em;
    width: 100%;
    display: block;
    margin: 10px 0;
}
</style>
