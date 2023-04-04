<template>
  <form class="login-form" @submit.prevent>
    <h4 class="login-form__title">Login</h4>
    <InputComp label="username" />
    <InputNumber label="phone" />
    <ButtonComp label="login" />
  </form>
</template>

<script>
import InputComp from '@/components/atoms/InputComp.vue'
import InputNumber from '@/components/atoms/InputNumber.vue'
import ButtonComp from '@/components/atoms/ButtonComp.vue'

export default {
  name: 'LoginForm',
  components: {
    InputComp,
    InputNumber,
    ButtonComp
  }
}
</script>

<style lang="scss">
.login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 20px;

  &__title {
    text-align: center;
    font-weight: 700;
    font-size: 2em;
    margin: 0;
  }
}
</style>
