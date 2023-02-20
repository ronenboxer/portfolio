<template>
    <section class="projects">
        <h1 class="capitalize main-layout">Selected projects</h1>
        <div class="project-list main-layout">
            <project-preview v-for="proj in projects" :key="Math.random()" :proj="proj" :id="Math.random()"
                :techs="proj.techs" />
        </div>
    </section>
</template>

<script>
import projectPreview from '../cmps/project-preview.vue'
import projects from '../data/projects.json' assert {type: 'json'}
export default {
    name: 'projects',
    props: {},
    emits: [],
    data() {
        return {
            projects: projects
        }
    },
    created() {
    },
    methods: {
    },
    computed: {
    },
    components: {
        projectPreview
    },
}
</script>