<template>
    <div class="w-full container flex flex-wrap mx-auto pt-6 items-center">
        <form style="display: block">
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                    Name
                </label>
                </div>
                <div class="md:w-2/3">
                <input
                    v-model="email"
                    placeholder="email"
                    class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    type="text">
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-username">
                    Password
                </label>
                </div>
                <div class="md:w-2/3">
                <input
                    v-model="password"
                    placeholder="password"
                    class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="password">
                </div>
            </div>
            <div class="md:flex md:items-center">
                <div class="md:w-1/3"></div>
                <div class="md:w-2/3">
                <button @click.prevent="submit" class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                    Login
                </button>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
import firebase from 'firebase';

export default {
    name: "signup",
    data: () => ({
        email: '',
        password: '',
    }),
    methods: {
        async submit() {
            const { user } = await firebase.auth().signInWithEmailAndPassword(this.email, this.password);
            this.$store.dispatch('user/login', user);
            this.$router.replace('/');
        },
    },
}
</script>
<style lang="scss" scoped>
</style>
