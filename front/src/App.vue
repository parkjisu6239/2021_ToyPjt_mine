<template>
  <div id="app">
    <MenuBar/>
    <div class="main-container">
      <Header/>
      <div class="content">
        <div class="corrent">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MenuBar from '@/views/menu-bar/menu-bar'
import Header from '@/views/header/header'

export default ({
  
  components: {
    MenuBar,
    Header,
  },

  setup() {
    
  },
})
</script>
<style>
  @import url('./App.css');
</style>