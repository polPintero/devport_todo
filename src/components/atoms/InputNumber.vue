<template>
  <InputComp :label="label" v-model="value" :modifyValue="modifyValue" />
</template>

<script>
import InputComp from './InputComp.vue'

export default {
  name: 'InputNumber',
  components: { InputComp },
  emits: ['update:modelValue'],
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    }
  },
  data () {
    return {
      value: this.modelValue
    }
  },
  methods: {
    modifyValue (newValue, oldValue) {
      if (newValue === '') return newValue
      const pattern = /[0-9 \s-()]$/gi
      const isMatch = pattern.test(newValue)
      return isMatch ? newValue : oldValue
    }
  },
  watch: {
    value (e) {
      this.$emit('update:modelValue', e)
    }
  }
}
</script>

<style lang="scss"></style>
