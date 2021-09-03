<template>
    <div class="todo-container">
        <header>TODO</header>
        <div class="todo-input-container">
            <input @keyup.enter="addTodoList()" type="text" v-model="state.msg">
            <button @click="addTodoList()"><font-awesome-icon :icon="['far', 'edit']"/></button>
        </div>
        <div class="todo-list">
            <div class="todo-element" v-for="todo in state.todoList" :key="todo">
                <input type="checkbox" v-model="todo.isFinished"><div :class="{'finished-task': todo.isFinished}">{{ todo.name }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue'

export default {
    name: 'todoList',

    setup(){
        const state = reactive({
            msg: '',
            todoList : [],
        })

        const addTodoList = () => {
            const todo = {
                name: state.msg,
                isFinished: false
            }
            state.todoList.push(todo)
            state.msg = ''
        }

        return { state, addTodoList }
    }
}
</script>

<style>
    @import url('./todo-list.css');
</style>