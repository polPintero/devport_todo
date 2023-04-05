<template>
    <div class="todos__filters">
        <!-- <FavoriteIcon ></FavoriteIcon> -->
        <DropdownComp class="todos__by-user" :list="byUserList" label="By User" default-value="all" v-model="byUser" />
        <InputComp label="search by title" v-model="byTitle" />
        <DropdownComp class="todos__by-status" :list="statusList" label="By status" default-value="all"
            v-model="byStatus" />
    </div>

    <section class="todos">
        <div class="todos__row" v-for="(todoRow, userId) in currentViewList" :key="userId">
            <PlusIcon /> 
            <span class="todos__user">{{ listUsersById[userId].name }}</span>
            <div class="todos__item">
                <span v-if="todoRow.length === 0">No data</span>
                <span v-else class="todos__item__title" v-for="todo in todoRow" :key="todo.id" @click="settofavorite(todo)">
                    {{ todo.title }}
                    <span class="todos__item__title--icon">
                        <FavoriteIcon v-model="todo.favorite" />
                    </span>
                </span>
            </div>
        </div>
    </section>
</template>

<script>
import DropdownComp from '@/components/atoms/DropdownComp.vue'
import FavoriteIcon from '@/components/atoms/icons/FavoriteIcon.vue'
import InputComp from '@/components/atoms/InputComp.vue'
import getDataFromLocaleStore from '@/utils/getDataFromLocaleStore.js'
import PlusIcon from '@/components/atoms/icons/PlusIcon.vue'

export default {
    name: 'ToDoList',
    components: { DropdownComp, FavoriteIcon, InputComp, PlusIcon },
    data () {
        return {
            todos: this.$store.state.todos,
            byUser: null,
            byStatus: null,
            statusList: { completed: 'completed', uncompleted: 'uncompleted', favorites: 'favorites' },
            byTitle: ''
        }
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
            const { byUser, byStatus, listToDoByUserId, statusList, byTitle } = this
            const todoCopy = Object.assign({}, listToDoByUserId)
            let result = {}
            byUser === null ? result = todoCopy : result[byUser] = todoCopy[byUser]
            
            Object.keys(result).forEach(id => {
                const row = result[id]
                result[id] = row.filter(todoItem => {
                    const isSearch = todoItem.title.includes(byTitle)
                    if (byStatus === statusList.completed) return todoItem.completed && isSearch
                    if (byStatus === statusList.uncompleted) return !todoItem.completed && isSearch
                    if (byStatus === statusList.favorites) return todoItem.favorite && isSearch
                    return isSearch
                })
            })
            return result
        }
    },
    methods: {
        settofavorite (todo) {
            const data = getDataFromLocaleStore()
            if (todo.favorite) {
                data.push(todo.id)
            } else {
                const index = data.indexOf(todo.id)
                if (index !== -1) data.splice(index, 1);
            }
            this.saveDataToLocalStore(data)
        },
        saveDataToLocalStore (data) {
            window.localStorage.setItem('favorites', JSON.stringify(data))
        },
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
        position: relative;
        display: grid;
        grid-template-columns: min(150px, 25%) 1fr;
        gap: calc(var(--gap-double) * 2);
        border-bottom: 1px solid;
        padding: var(--gap-double);

        .plus-icon {
            position: absolute;
            top: var(--gap);
            right: var(--gap);
            cursor: pointer;
        }
    }

    &__user {
        display: flex;
        align-items: center;
    }

    &__item {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: calc(var(--gap-double) * 1);

        &__title {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            position: relative;
            padding: 5px 5px 0 25px;

            &--icon {
                position: absolute;
                display: none;
                top: 0;
                left: 2px;
            }

            &:hover {
                .todos__item__title--icon {
                    display: inline-block;
                }
            }
        }
    }

    &__filters {
        display: flex;
        justify-content: space-between;
        background: var(--bg-main);
        position: sticky;
        top: 0px;
        z-index: 1;
    }

    &__by-user {
        .dropdown__content__name {
            white-space: nowrap;
        }
    }
}
</style>
