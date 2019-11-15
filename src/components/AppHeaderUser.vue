<template>
    <div
        class="text-gray-800 text-base no-underline hover:no-underline font-extrathin text-xs"
        :style="{ backgroundImage: avatarUrl }">
        <icon-user/>
    </div>
</template>
<script>
import firebase from 'firebase';
import { mapState } from 'vuex';

import IconUser from '@/assets/heroicons-ui-master/svg/icon-user.svg'

export default {
    computed: {
        ...mapState('user', ['user']),
        avatarUrl: (vm) => vm.user.photoURL,
    },
    components: {
        IconUser,
    },
    methods: {
        async logout() {
            await firebase.auth().signOut();
            this.$router.replace('login');
        },
    },
}
</script>

<style lang="scss">

</style>
