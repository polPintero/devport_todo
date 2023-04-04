<template>
    <div class="todo-page">
        <UserCard />
        <ToDoList />
    </div> 
</template>

<script>
import UserCard from '@/components/organism/UserCard.vue'
import ToDoList from '@/components/organism/ToDoList.vue'

export default {
    name: 'ToDoPage',
    components:{
        UserCard,
        ToDoList
    },
}
</script>

<style lang="scss">
.todo-page {
    width: 100%;
}
</style>
