<template>
  <div class="login-form--wrap">
    <form class="login-form" @submit.prevent>
      <h4 class="login-form__title">Login</h4>
      <InputComp label="username" v-model="nameUser" />
      <InputNumber label="phone" v-model="phone" />
      <ButtonComp label="login" @click="$emit('autorizaition')">
        <template #after v-if="isLoading">
          <span class="login-form__loader">
            <LoaderIcon></LoaderIcon>
          </span>
        </template>
      </ButtonComp>
    </form>
  </div>
</template>

<script>
import InputComp from '@/components/atoms/InputComp.vue'
import InputNumber from '@/components/atoms/InputNumber.vue'
import ButtonComp from '@/components/atoms/ButtonComp.vue'
import LoaderIcon from '../atoms/icons/LoaderIcon.vue'

export default {
  name: 'LoginForm',
  components: {
    InputComp,
    InputNumber,
    ButtonComp,
    LoaderIcon
  },
  emits: ['update:phoneNumber', 'update:userName', 'autorizaition'],
  props: {
    phoneNumber: {
      type: [String, Number],
      default: ''
    },
    userName: {
      type: String,
      default: ''
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      nameUser: this.userName,
      phone: this.phoneNumber,
    }
  },
  watch: {
    nameUser (e) {
      this.$emit('update:userName', e)
    },
    phone (e) {
      this.$emit('update:phoneNumber', e)
    }
  },

}
</script>

<style lang="scss">
.login-form--wrap {
  max-width: 400px;
  background-image: var(--bg-primary);
  margin: 30px auto;
  border-radius: var(--radius-main);
  transition: all .2s;
  box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
}

.login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: calc(var(--gap) * 3);
  padding: calc(var(--gap) * 3);
  background: var(--bg-main);
  transform: scale(0.99);
  border-radius: var(--radius-main);


  &__title {
    text-align: center;
    font-weight: 700;
    font-size: 2em;
    margin: 0;
  }

  &__loader {
    svg {
      animation: rotating 1s linear infinite;
    }
  }
}

@keyframes rotating {
  0% {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(1turn);
  }
}
</style>
