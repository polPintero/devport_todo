<template>
    <LoginForm class="login-page" v-model:userName="userName" v-model:phoneNumber="phoneNumber"
        @autorizaition="autorizaition" />
</template>

<script>
import LoginForm from '@/components/organism/LoginForm.vue'

export default {
    components: {
        LoginForm
    },
    data () {
        return {
            userName: 'Bret',
            phoneNumber: '1-770-736-8031 x56442'
        }
    },
    methods: {
        async autorizaition () {
            const response = await this.$store.dispatch('getUsers')
            const user = this.findUser(response)
            if (user) {
                this.$store.commit('setUser', user)
                this.$router.push(this.$router.routeList.todo)
            }
        },
        findUser (arr) {
            return arr.find((i) => i.username === this.userName && i.phone === this.phoneNumber)
        }
    }
}
</script>

<style lang="scss">
.login-page {
    margin: auto;
    transform: translateY(-50%);
    box-shadow: 1.5px 1.5px 3px #0e0e0e, -1.5px -1.5px 3px rgb(95 94 94 / 25%), inset 0px 0px 0px #0e0e0e, inset 0px 0px 0px #5f5e5e;
    border-radius: 5px;
}
</style>
