<template>
    <section class="overview">
        <h1 class="main-layout">Overview</h1>
        <ul class="honeycomb" lang="en">
            <li class="honeycomb-cell avatar">
                <img class="honeycomb-cell__image flex center" src="../assets/imgs/moi.jpg" />
                <div class="honeycomb-cell__title">
                    <h3>Let's talk business</h3>
                    <small class="grid">
                        <a target="_blank" class="inline-block contact" href="https://wa.me/972527735437"
                            v-icon="'phone'" title="052-773-5437"></a>
                        <a target="_blank" class="inline-block contact" href="mailto:ronenboxer@gmail.com"
                            v-icon="'email'" title="Ronen.Boxer@gmail.com"></a>
                        <a target="_blank" class="inline-block contact"
                            href="https://www.linkedin.com/in/ronen-boxer-471436203/" v-icon="'linkedin'"></a>
                        <a target="_blank" class="inline-block contact" href="https://github.com/ronenboxer"
                            v-icon="'github'"></a>
                    </small>
                </div>
            </li>
            <li class="honeycomb-cell">
                <div class="honeycomb-cell__image flex center">{{ getAge }}</div>
                <div class="honeycomb-cell__title">
                    <small>Born and raised in Ness Ziona. It's okay if you have'nt heard about it.</small>
                </div>
            </li>
            <li class="honeycomb-cell">
                <div class="honeycomb-cell__image flex center" v-icon="'puzzle'"></div>
                <div class="honeycomb-cell__title"><small>I'm into riddles and puzzles. Wether numerical, logical or
                        lexical, If it's challenging - I'm game.</small></div>
            </li>
            <li class="honeycomb-cell">
                <div class="honeycomb-cell__image flex center" v-icon="'piano'"></div>
                <div class="honeycomb-cell__title"><small>A trained musician. I bring passion and creativity (and perhaps pretentiousness).</small></div>
            </li>
            <li class="honeycomb-cell">
                <div class="honeycomb-cell__image flex center" v-icon="'plant'"></div>
                <div class="honeycomb-cell__title"><small>An ideal space is packed with leaves. Ask me about my home.</small></div>
            </li>
            <li class="honeycomb-cell">
                <div class="honeycomb-cell__image flex center" v-icon="'coffee'"></div>
                <div class="honeycomb-cell__title"><small>I mean...</small></div>
            </li>

            <li class="honeycomb-cell">
                <div class="honeycomb-cell__image flex center" v-icon="'ocd'"></div>
                <div class="honeycomb-cell__title"><small>Highly logical, absurdly organized. "A place for everything and everything in its place".</small>
                </div>
            </li>
            <li class="honeycomb-cell">
                <div class="honeycomb-cell__image flex center" v-icon="'paws'"></div>
                <div class="honeycomb-cell__title"><small>Specifically, soft spot for 4 legged and furry. Generally nothing with more than 2 eyes. No sea creatures.</small></div>
            </li>
            <li class="honeycomb-cell empty"></li>
        </ul>
    </section>

</template>

<script>
export default {
    name: 'about',
    props: {},
    emits: ['scrollTo'],
    data() {
        return {
        }
    },
    created() {
    },
    methods: {
        scrollTo(target) {
            this.$emit('scrollTo', target)
        }
    },
    computed: {
        getAge() {
            const now = new Date()
            const year = now.getFullYear() - 1993
            return (now.getMonth >= 8)
                ? year
                : year - 1
        }
    },
    components: {
    },
}
</script>