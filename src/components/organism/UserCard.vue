<template>
    <section class="user-card">
        <h5 class="user-card__name">{{ user.name }}</h5>
        <span class="user-card__address">{{ getAdress() }}</span>
        <section class="user-card__contacts">
            <span v-for="(value, key) in createContacts()" class="user-card__contacts--elem" :key="key">
                <img :src="icons[key]">
            </span>
        </section>
    </section>
</template>

<script>
import emailIcon from '@/assets/emailIcon.svg'
import phoneIcon from '@/assets/phoneIcon.svg'
import websiteIcon from '@/assets/websiteIcon.svg'

export default {
    name: 'UserCard',
    data () {
        return {
            icons: {
                email: emailIcon,
                phone: phoneIcon,
                website: websiteIcon
            },
            user: this.$store.state.user,
        }
    },
    created () {
        console.log(this.user)
    },
    methods: {
        getAdress () {
            const a = this.user.address
            return `${a.city} ${a.street} ${a.suite} ${a.zipcode}`
        },
        createContacts () {
            const { user } = this
            const template = {
                phone: user.phone,
                website: user.website,
                email: user.email
            }
            return template
        }

    }

}
</script>

<style lang="scss">
.user-card {

    &__address {
        font-size: 0.8rem;

    }

    &__contacts {
        &--elem {
            img {
                width: 15px;
                color: white
            }
        }
    }
}
</style>