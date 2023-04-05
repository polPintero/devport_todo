<template>
    <modal-comp :show="modelValue" @close="closeModal" class="add-card">
        <template #header>
            <span>Add ToDo for {{ userName }}</span>
        </template>
        <template #body>
            <InputComp label="input title todo" v-model="todoTitle"></InputComp>
        </template>
        <template #footer>
            <ButtonComp label="add todo" @click="addTodo" :disabled="!todoTitle"/>
        </template>
    </modal-comp>
</template>

<script>
import ModalComp from '@/components/atoms/ModalComp.vue'
import InputComp from '@/components/atoms/InputComp.vue'
import ButtonComp from '@/components/atoms/ButtonComp.vue'

export default {
    name: 'AddCard',
    components: { ModalComp, InputComp, ButtonComp },
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
    data () {
        return {
            todoTitle: ''
        }
    },

    methods: {
        addTodo () {
            this.$emit('addTodo', { title: this.todoTitle })
            this.closeModal()
        },
        closeModal () {
            this.$emit('update:modelValue', false)
            this.todoTitle = ''
        }
    },
}
</script>

<style lang="scss"> .add-card {
     .modal-container {
         display: flex;
         flex-direction: column;
         gap: var(--gap-double);
         border-radius: 10px;
     }

     .modal-body {
         input {
             width: 100%;
             box-sizing: border-box;
         }
     }

     .modal-footer {
         display: flex;
         justify-content: flex-end;
     }
 }
</style>