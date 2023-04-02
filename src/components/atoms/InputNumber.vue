<template>
  <InputComp :label="label" />
</template>

<script>
import InputComp from './InputComp.vue'

export default {
  name: 'InputNumber',
  components: { InputComp },
  props: {
    label: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss"></style>
