<template>
    <div class="signup">
        <section class="signup__form">
            <h3>Signup</h3>
            <input type="email" placeholder="Email" v-model="email"/>
            <input type="password" placeholder="Password" v-model="password"/>

            <div>
                <button @click="submit">Signup</button>
            </div>

            <router-link to="login">Login</router-link>
        </section>
        <div class="logo">Poker.</div>
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
            const { user } = await firebase.auth().createUserWithEmailAndPassword(this.email, this.password);
            this.$store.dispatch('user/login', user);
            this.$router.replace('/');
        },
    },
}
</script>
<style lang="scss">
.signup {
    display: flex;
    flex-direction: row;
    background-color: #3943B7;
    height: 100vh;
}
.logo {
    text-align: center;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    font-weight: 600;
    font-size: 2em;
}
input {
    width: 300px;
}
.signup__form {
    background-color: #fff;
    width: 50vw;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}
</style>
