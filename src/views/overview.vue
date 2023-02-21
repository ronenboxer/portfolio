<template>
    <section class="overview page">
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
            <li v-for="{icon, description} in overview" class="honeycomb-cell">
                <div class="honeycomb-cell__image flex center" v-icon="icon"></div>
                <div class="honeycomb-cell__title">
                    <small>{{ description }}</small>
                </div>
            </li>
            <li class="honeycomb-cell empty"></li>
        </ul>
    </section>

</template>

<script>
import overview from '../data/overview.json' assert {type: 'json'}
export default {
    name: 'overview-page',
    emits: ['scrollTo'],
    data() {
        return {
            overview
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
}
</script>