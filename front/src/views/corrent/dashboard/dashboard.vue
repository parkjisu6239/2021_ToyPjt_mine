<template>
  <div class="dashboard">
    <div class="content-list">
      <Section>
        section1
      </Section>

      <Section>
        section2
      </Section>

      <Section>
        section3
      </Section>
    </div>
    <RightBar/>
  </div>
</template>

<script>
import Section from '@/views/common/section'
import RightBar from './right-bar/right-bar'

export default {
  name: 'dashboard',

  components: {
    Section,
    RightBar,
  }
}
</script>

<style>
  @import url('./dashboard.css');
</style>