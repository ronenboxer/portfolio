<template>
    <section class="galaxy-bg universe relative" aria-hidden="true">
        <section v-if="isShown" class="welcome-sign absolute align-center">
            <h1>Hello, I'm <span class="brand">Ronen Boxer</span>.</h1>
            <h1>I'm an <span class="brand">aspiring</span> full-stack web developer.</h1>
            <button class="btn relative" @click.native="slideTo('projects')">
                <span class="flex center">
                    View my work <svg xmlns="http://www.w3.org/2000/svg" style="vertical-align: -0.125em;" width="1em"
                        height="1em" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M9.4 18L8 16.6l4.6-4.6L8 7.4L9.4 6l6 6Z" />
                    </svg>
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
    name: 'galaxy111',
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
    created() {
    },
    methods: {
        slideTo(target) {
            this.$emit('slideTo', target)
        }
    },
    computed: {
    },
    components: {
    },
}
</script>