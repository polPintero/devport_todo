<template>
    <div class="todos__filters">
        <DropdownComp class="todos__by-user" :list="byUserList" label="By User" default-value="all" v-model="byUser" />
        <DropdownComp class="todos__by-status" :list="statusList" label="By status" default-value="all" v-model="byStatus" />
    </div>

    <section class="todos">
        <div class="todos__row" v-for="(todoRow, userId) in currentViewList" :key="userId">
            <span class="todos__user">{{ listUsersById[userId].name }}</span>
            <div class="todos__item">
                <span class="todos__item__title" v-for="todo in todoRow" :key="todo.id">{{
                    todo.title
                }}</span>
            </div>
        </div>
    </section>
</template>

<script>
import DropdownComp from '@/components/atoms/DropdownComp.vue'

export default {
    name: 'ToDoList',
    components: { DropdownComp },
    data () {
        return {
            todos: this.$store.state.todos,
            byUser: null,
            statusList: { completed: 'completed', uncompleted: 'uncompleted', favorites: 'favorites' },
            byStatus: null
        }
    },
    created () {
        console.log(this.listToDoByUserId[1][0])
    },
    computed: {
        listToDoByUserId () {
            return this.$store.state.listToDoByUserId
        },
        listUsersById () {
            return this.$store.state.listUsersById
        },
        byUserList () {
            const list = {}
            Object.values(this.listUsersById).forEach((user) => {
                list[user.id] = user.name
            })
            return list
        },
        currentViewList () {
            const { byUser, byStatus, listToDoByUserId, statusList } = this
            const todoCopy = JSON.parse(JSON.stringify(listToDoByUserId))
            let result = {}
            byUser === null ? result = todoCopy : result[byUser] = todoCopy[byUser]
            if (byStatus === null) return result
            console.log(byStatus)
            Object.keys(result).forEach(id => {
                const row = result[id]
                result[id] = row.filter(todoItem => {
                    if (byStatus === statusList.completed) return todoItem.completed
                    if (byStatus === statusList.uncompleted) return !todoItem.completed
                    if (byStatus === statusList.favorites) return todoItem.favorites
                })
            })
            return result
        }
    },
    watch: {
        byStatus (e) {
            console.log(e)
        }
    },
    methods: {
        createByUserList () {
            this.listToDoByUserId()
        }
    }
}
</script>

<style lang="scss">
.todos {
    display: grid;
    grid-template-rows: repeat(auto-fit, minmax(50px, 1fr));
    width: 100%;
    gap: var(--gap);
    box-shadow: 1.5px 1.5px 3px #0e0e0e, -1.5px -1.5px 3px rgb(95 94 94 / 25%),
        inset 0px 0px 0px #0e0e0e, inset 0px 0px 0px #5f5e5e;
    margin-block-start: var(--gap-double);

    &__row {
        display: grid;
        grid-template-columns: min(100px, 20%) 1fr;
        gap: calc(var(--gap-double) * 2);
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

    &__filters {
        display: flex;
        justify-content: space-between;
    }

    &__by-user {
        .dropdown__content__name {
            white-space: nowrap;
        }
    }
}
</style>
