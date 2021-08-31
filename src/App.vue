<template>
  <div id="app">
    <MenuBar/>
    <div class="main-container">
      <Header/>
      <div class="content">
        <div class="corrent">
          <router-view/>
        </div>
        <RightBar/>
      </div>
    </div>
  </div>
</template>
<script>
import MenuBar from '@/views/menu-bar/menu-bar'
import Header from '@/views/header/header'
import RightBar from '@/views/right-bar/right-bar'

export default ({
  
  components: {
    MenuBar,
    Header,
    RightBar
  },

  setup() {
    
  },
})
</script>
<style>
  @import url('./App.css');
</style>