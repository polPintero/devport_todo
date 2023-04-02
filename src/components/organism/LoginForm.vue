<template>
  <InputComp label="username" />
  <InputNumber label="phone" />
</template>

<script>
import InputComp from '@/components/atoms/InputComp.vue'
import InputNumber from '@/components/atoms/InputNumber.vue'
export default {
  name: 'LoginForm',
  components: {
    InputComp,
    InputNumber
  }
}
</script>

<style></style>
