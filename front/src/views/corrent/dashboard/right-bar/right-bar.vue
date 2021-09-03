<template>
    <div class="right-bar">
        <Section>
            section1
        </Section>

        <Section>
            <TodoList/>
        </Section>
    </div>
</template>

<script>
import Section from '@/views/common/section'
import TodoList from '../todo-list/todo-list'

export default {
    name: 'rightBar',

    components: {
        Section,
        TodoList,
    }
}
</script>

<style>
    @import url('./right-bar.css');
</style>
