<template>
  <!-- <span class="btn-comp"> -->
    <button class="btn-comp" :disabled="disabled" :class="{ 'btn-comp__with-after': $slots.after }">{{ label }} 
      <span v-if="$slots.after" class="btn-comp--after">
      <slot name="after"></slot>
    </span> 
  </button>
    <!-- <span class="btn-comp--after" v-if="$slots.after">
      
    </span> -->
  <!-- </span> -->
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
    },
  }
}
</script>

<style lang="scss">
.btn-comp {
  position: relative;
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

  &:disabled {
    pointer-events: none;
  }

  &__with-after{
    padding-right: calc(var(--gap-double) + var(--gap-double));
  }

  &--after{
    position: absolute;
    top: 57%;
    right: var(--gap);
    transform: translateY(-50%);
  }
}
</style>
