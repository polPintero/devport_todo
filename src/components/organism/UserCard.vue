<template>
    <div class="user-card--wrap">
        <section class="user-card">
            <h5 class="user-card__name">{{ user.name }}</h5>
            <span class="user-card__address">{{ getAdress() }}</span>
            <span class="user-card__company">{{ user.company.name }}</span>
            <section class="user-card__contacts">
                <span v-for="(value, key) in createContacts()" class="user-card__contacts--elem" :key="key" :title="value">
                    <img :src="icons[key]">
                </span>
            </section>
        </section>
    </div>
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
.user-card--wrap {
    background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
    margin: 30px auto;
    border-radius: 10px;
    transition: all .2s;
    box-shadow: 1.5px 1.5px 3px #0e0e0e, -1.5px -1.5px 3px rgb(95 94 94 / 25%), inset 0px 0px 0px #0e0e0e, inset 0px 0px 0px #5f5e5e;

    &:hover {
        box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);

        .user-card {
            transform: scale(0.98);
        }
    }
}

.user-card {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px;
    border-radius: 10px;
    transition: all .2s;
    background: #212121;
    text-align: center;

    &__name {
        margin-block-start: 0;
        margin-block-end: 10px;
        font-size: 1.5rem;
    }

    &__address {
        font-size: 0.8rem;
        font-style: italic;
    }

    &__contacts {
        display: flex;
        justify-content: center;
        gap: 20px;

        &--elem {
            cursor: pointer;

            img {
                width: 15px;
                color: white
            }
        }
    }
}</style>