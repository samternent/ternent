<template>
    <div class="home">
        <app-header :nav="nav"/>
        <div class="w-full container flex flex-wrap mx-auto px-2 pl-0 pt-16 mt-5">
            <nav class="w-full flex justify-between">
                <div class="pl-4 flex items-center">
                <ul class="flex">
                    <li class="mr-6">
                        <router-link class="text-blue-500 hover:text-blue-800" to="create">Create</router-link>
                    </li>
                </ul>
                </div>
                <div class="pl-4 flex items-center">
                <ul class="flex">
                    <li class="mr-6">
                    <a class="text-blue-500 hover:text-blue-800" href="#">Work?</a>
                    </li>
                </ul>
                </div>
            </nav>
            <div class="w-full container flex flex-wrap mx-auto pt-6">
            <div class="w-full bg-gray-200 p-4 text-gray-800">
                <transition name="fade" mode="out-in">
                    <router-view/>
                </transition>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
import { routes } from '../router';

import AppHeader from '../components/AppHeader';

export default {
    name: 'home',
    components: { AppHeader },
    computed: {
        nav: () => routes.filter(({ meta }) => meta && meta.nav),
    },
}
</script>
<style lang="scss">

</style>
