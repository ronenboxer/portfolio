<template>
    <section class="galaxy-bg universe relative" aria-hidden="true">
        <section v-if="isShown" class="welcome-sign absolute align-center">
            <h1>Hello, I'm <span class="brand">Ronen Boxer</span>.</h1>
            <h1>I'm an <span class="brand">aspiring</span> full-stack web developer.</h1>
            <button class="btn relative" @click.native="slideTo('projects')">
                <span class="flex center">
                    View my work
                </span>
            </button>
        </section>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
    </section>
</template>

<script>
export default {
    name: 'galaxy',
    props: { isShown:{
        required: false,
        default: true,
        type: Boolean
    }},
    emits: ['slideTo'],
    data() {
        return {
        }
    },
    methods: {
        slideTo(target) {
            this.$emit('slideTo', target)
        }
    }
}
</script>