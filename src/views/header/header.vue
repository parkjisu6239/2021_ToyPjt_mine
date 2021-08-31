<template>
    <div class="header">
        <div>{{ state.title }}</div>
        <div class="btn-grp">
            
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
            title: computed(() => route.name) // computed해야 반응형으로 바로 변경됨
        })

        return { state }
    }
}
</script>

<style>
    @import url('./header.css');
</style>