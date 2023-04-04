<template>
    <LoginForm v-model:userName="userName" v-model:phoneNumber="phoneNumber" @autorizaition="autorizaition" />
</template>

<script>
import LoginForm from '@/components/organism/LoginForm.vue'

export default {
    components: {
        LoginForm
    },
    data () {
        return {
            userName: 'Leanne Graham',
            phoneNumber: '1-770-736-8031 x56442'
        }
    },
    methods: {
        async autorizaition () {
            const response = await this.$store.dispatch('getUsers')
            const isUser = this.checkUser(response)
            if (isUser) {
                this.$router.push(this.$router.routeList.todo)
            }

        },
        checkUser (arr) {
            return !!arr.find(i => i.name === this.userName && i.phone === this.phoneNumber)
        }
    }
}
</script>

<style lang="scss"></style>
