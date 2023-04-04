<template>
  <div class="input-comp">
    <input class="input" type="text" v-model="value" :class="{ 'input-comp--notEmpty': !!value }" />
    <label class="label">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: 'InputComp',
  emits: ['update:modelValue'],
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    modifyValue: {
      type: Function,
      default: (e) => e
    }
  },
  data () {
    return {
      value: this.modelValue
    }
  },
  watch: {
    value (newValue, oldValue) {
      const v = this.modifyValue(newValue, oldValue)
      this.value = v
      this.$emit('update:modelValue', v)
    }
  }
}
</script>

<style lang="scss">
.input-comp {
  position: relative;
  overflow: hidden;

  .label {
    position: absolute;
    top: 50%;
    left: 10px;
    transition: transform ease 0.2s;
    transform: translate(0%, -50%);
    font-size: 0.75em;
    user-select: none;
    pointer-events: none;
    color: #b0b0b0;
    text-transform: capitalize;
  }

  input {
    background-color: transparent;
    border: none;
    outline: none;
    color: inherit;
    padding: 0.5rem;
    font-size: 0.75rem;
    border-radius: 5px;
    transition: box-shadow ease 0.2s;
    box-shadow: 0px 0px 0px #0e0e0e, 0px 0px 0px rgb(95 94 94 / 25%), inset 1.5px 1.5px 3px #0e0e0e,
      inset -1.5px -1.5px 3px #5f5e5e;

    &:focus,
    &.input-comp--notEmpty {
      box-shadow: 0px 0px 0px #0e0e0e, 0px 0px 0px rgb(95 94 94 / 25%), inset 3px 3px 4px #0e0e0e,
        inset -3px -3px 4px #5f5e5e;

      &+.label {
        transform: translate(-150%, -50%);
      }
    }
  }
}
</style>
