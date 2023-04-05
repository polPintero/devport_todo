<template>
  <button class="btn-comp" :disabled="disabled">{{ label }} </button>
</template>

<script>
export default {
  name: 'ButtonComp',
  props: {
    label: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.btn-comp {
  background-color: transparent;
  color: inherit;
  padding: var(--gap) var(--gap-double);
  font-size: 1rem;
  border-radius: 5px;
  text-transform: capitalize;
  border: none;
  outline: none;
  cursor: pointer;
  transition: box-shadow ease 0.1s;
  box-shadow: var(--shadow-main),
    inset 0px 0px 0px #0e0e0e, inset 0px -0px 0px #5f5e5e;

  &:active {
    box-shadow: 0px 0px 0px #0e0e0e, 0px 0px 0px rgb(95 94 94 / 25%), inset 3px 3px 4px #0e0e0e,
      inset -3px -3px 4px #5f5e5e;
  }
  &:disabled{
    pointer-events: none;
  }
}
</style>
