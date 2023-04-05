<template>
    <modal-comp :show="modelValue" @close="closeModal">
        <template #header>
            <span>add ToDo for {{ userName }}</span>
        </template>
        <template #body>

        </template>
        <template #footer>
            <!-- <button-comp label="Ok" @click="closeModalWindow"></button-comp> -->
        </template>
    </modal-comp>
</template>

<script>
import ModalComp from '../atoms/ModalComp.vue'

export default {
    name: 'AddCard',
    components: { ModalComp },
    emits: ['update:modelValue'],
    props: {
        modelValue: {
            type: Boolean,
            default: false
        },
        userName: {
            type: String,
            default: ''
        }
    },

    methods: {
        closeModal () {
            this.$emit('update:modelValue', false)
        }
    },
    watch: {
        modelValue (e) {
            console.log(e)
        }
    }

}
</script>

<style></style>