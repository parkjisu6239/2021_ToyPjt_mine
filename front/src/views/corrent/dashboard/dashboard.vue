<template>
  <div class="dashboard">
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
</template>

<script>
import Section from '@/views/common/section'

export default {
  name: 'dashboard',

  components: {
    Section,
  }
}
</script>

<style>
  @import url('./dashboard.css');
</style>