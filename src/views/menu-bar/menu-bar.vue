<template>
    <div class="menu-bar">
        <li class="menu-list">
            <ul class="menu-item"><router-link to="/">Home</router-link></ul>
            <ul class="menu-item"><router-link to="/dashboard">Dashboard</router-link></ul>
            <ul class="menu-item"><router-link to="/reward">Reward</router-link></ul>
        </li>
    </div>
</template>

<script>
export default {
    name: 'menuBar'
}
</script>

<style>
    @import url('./menu-bar.css');
</style>