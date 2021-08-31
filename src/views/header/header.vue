<template>
    <div class="header">
        <div class="title">{{ state.title }}</div>
        <div class="btn-grp">
            <div class="search-input" @click="state.isInputClicked = true">
                <input type="text" placeholder="type here">
                <font-awesome-icon icon="search"/>
            </div>
            <font-awesome-icon :icon="['far', 'envelope']"/>
            <font-awesome-icon :icon="['far', 'bell']"/>
        </div>
    </div>
</template>

<script>
import { reactive, computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
    name: 'header',

    setup(){
        const route = useRoute()

        const state = reactive({
            title: computed(() => route.name), // computed해야 반응형으로 바로 변경됨
            isInputClicked: false
        })

        return { state }
    }
}
</script>

<style>
    @import url('./header.css');
</style>