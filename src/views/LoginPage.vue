<template>
    <LoginForm class="login-page" v-model:userName="userName" v-model:phoneNumber="phoneNumber"
        @autorizaition="autorizaition" :is-loading="isLoading" />
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
            phoneNumber: '1-770-736-8031 x56442',
            isLoading: false
        }
    },
    methods: {
        async autorizaition () {
            this.isLoading = true
            const response = await this.$store.dispatch('getUsers')
            this.isLoading = false
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
    transform: translateY(50%);
}
</style>
