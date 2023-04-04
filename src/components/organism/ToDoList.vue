<template>
    <section class="todos">
        <div class="todos__row" v-for="(todoRow, userId) in listToDoByUserId" :key="userId">
            <span class="todos__user">{{ listUsersById[userId].name }}</span>
            <div class="todos__item">
                <span class="todos__item__title" v-for="todo in todoRow" :key="todo.id">{{ todo.title }}</span>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ToDoList',
    data () {
        return {
            todos: this.$store.state.todos,
        }
    },
    created () {
        console.log(this.listToDoByUserId[1])
        console.log(this.listUsersById)
    },
    computed: {
        listToDoByUserId () {
            return this.$store.state.listToDoByUserId
        },
        listUsersById () {
            return this.$store.state.listUsersById
        },

    },

}
</script>

<style lang="scss">
.todos {
    display: grid;
    grid-template-rows: repeat(auto-fit, minmax(50px, 1fr));
    width: 100%;
    gap: var(--gap);

    &__row {
        display: grid;
        grid-template-columns: min(100px, 20%) 1fr;
        gap: var(--gap-double);
        border-bottom: 1px solid;
        padding: var(--gap-double);
    }

    &__user {
        display: flex;
        align-items: center;
    }

    &__item {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: calc(var(--gap-double) * 2);


        &__title {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
}
</style>