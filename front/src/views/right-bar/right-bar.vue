<template>
    <div class="right-bar">
        <Section>
            section1
        </Section>

        <Section>
            section2
        </Section>
    </div>
</template>

<script>
import Section from '@/views/common/section'

export default {
    name: 'rightBar',

    components: {
        Section
    }
}
</script>

<style>
    @import url('./right-bar.css');
</style>
