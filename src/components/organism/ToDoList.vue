<template>
    <div class="todos__filters">
        <DropdownComp class="todos__by-user" :list="byUserList" label="By User" default-value="all" v-model="byUser" />
        <InputComp label="search by title" v-model="byTitle" />
        <DropdownComp class="todos__by-status" :list="statusList" label="By status" default-value="all"
            v-model="byStatus" />
    </div>

    <section class="todos">
        <div class="todos__row" v-for="(todoRow, userId) in currentViewList" :key="userId">
            <PlusIcon @click="openModal(userId)" />
            <span class="todos__user">{{ listUsersById[userId].name }}</span>
            <div class="todos__item">
                <span v-if="todoRow.length === 0">No data</span>
                <span v-else class="todos__item__title" v-for="todo in todoRow" :key="todo.id">
                    {{ todo.title }}
                    <span class="todos__item__title--icon">
                        <FavoriteIcon v-model="todo.favorite" @click="settofavorite(todo)" />
                    </span>
                </span>
            </div>
        </div>
    </section>
    <AddCard v-model="showModal" :user-name="currentUser.name" @add-todo="addTodo" />
</template>

<script>
import DropdownComp from '@/components/atoms/DropdownComp.vue'
import FavoriteIcon from '@/components/atoms/icons/FavoriteIcon.vue'
import InputComp from '@/components/atoms/InputComp.vue'
import getDataFromLocaleStore from '@/utils/getDataFromLocaleStore.js'
import PlusIcon from '@/components/atoms/icons/PlusIcon.vue'
import AddCard from '@/components/organism/AddCard.vue'

export default {
    name: 'ToDoList',
    components: { DropdownComp, FavoriteIcon, InputComp, PlusIcon, AddCard },
    data () {
        return {
            todos: this.$store.state.todos,
            byUser: null,
            byStatus: null,
            statusList: { completed: 'completed', uncompleted: 'uncompleted', favorites: 'favorites' },
            byTitle: '',
            showModal: false,
            currentUser: ''
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
        addTodo (ev) {
            const template = {
                completed: false,
                favorite: false,
                id: null,
                title: ev.title,
                userId: this.currentUser.id
            }
            const maxId = getMaxIdTodo(this.todos)
            template.id = maxId + 1

            this.$store.commit('addNewToDo', template)
            function getMaxIdTodo (arr) {
                return Math.max(...arr.map(i => i.id))
            }
        },
        openModal (userId) {
            this.currentUser = this.listUsersById[userId]
            this.showModal = true
        },
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
    box-shadow: var(--shadow-main), var(--shadow-main-inset);
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

        .input-comp {
            align-self: center;
        }
    }

    &__by-user {
        .dropdown__content__name {
            white-space: nowrap;
        }
    }

    &__by-status {
        .dropdown__content {
            right: 0;
            left: unset;
        }
    }
}
</style>
