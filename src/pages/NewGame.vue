<template>
    <div class="create">
        <section class="create__toolbar">
        </section>
        <section class="create__content">
            <input class="title" type="text" placeholder="Title" v-model.trim="title"/>
        </section>
        <button class="btn" @click="save">Save</button>
    </div>
</template>
<script>
import firebase from 'firebase';
import Editor from '@ckeditor/ckeditor5-build-classic';

export default {
    data: () => ({
        title: '',
        editor: Editor,
        content: '',
    }),
    computed: {
        slug: (vm) => vm.title.replace(/\s/g, "-").replace(/[^a-zA-Z0-9 -]/g, "").toLowerCase(),
        url: (vm) => `${window.location.origin}/sheet/${vm.slug}`,
    },
    methods: {
        async save() {
            const { slug, title, content } = this;
            const nextRef = this.$database.ref('sheet').push();
            await nextRef.set({
                slug,
                title,
                content,
                created_at: Math.floor(Date.now() / 1000),
                created_by: firebase.auth().currentUser.email,
                userId: firebase.auth().currentUser.uid,
            });
            this.$router.replace(`sheet/${slug}`);
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
