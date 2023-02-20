<template>
    <section class="specs tech-list">
        <h1 class="main-layout capitalize">Hard skills</h1>
        <div class="tech-container main-layout">
            <article class="tech-logo flex center" v-icon="'html'"></article>
            <article class="tech-logo flex center" v-icon="'js'"></article>
            <article class="tech-logo flex center" v-icon="'es6'"></article>
            <article class="tech-logo flex center" v-icon="'ts'"></article>
            <article class="tech-logo flex center" v-icon="'css'"></article>
            <article class="tech-logo flex center" v-icon="'sass'"></article>
            <article class="tech-logo flex center" v-icon="'nodejs'"></article>
            <article class="tech-logo flex center" v-icon="'express'"></article>
            <article class="tech-logo flex center" v-icon="'vue'"></article>
            <article class="tech-logo flex center" v-icon="'react'"></article>
            <article class="tech-logo flex center" v-icon="'redux'"></article>
            <article class="tech-logo flex center" v-icon="'angular'"></article>
            <article class="tech-logo flex center" v-icon="'axios'"></article>
            <article class="tech-logo flex center" v-icon="'git'"></article>
            <article class="tech-logo flex center" v-icon="'jquery'"></article>
            <article class="tech-logo flex center" v-icon="'bootstrap'"></article>
            <article class="tech-logo flex center" v-icon="'npm'"></article>
            <article class="tech-logo flex center" v-icon="'socket'"></article>
            <article class="tech-logo flex center" v-icon="'mongo'"></article>
            <article class="tech-logo flex center" v-icon="'sql'"></article>
            <article class="tech-logo flex center" v-icon="'postman'"></article>
        </div>


        <h1 class="main-layout capitalize">Soft skills</h1>
        <ul class="soft-skills clean-list main-layout">
            <li v-for="{title, description} in softSkills">
                <h2>{{ title }}</h2>
                <p v-for="d in description">{{ d }}</p>
            </li>
        </ul>
    </section>
</template>

<script>
import softSkills from '../data/soft-skills.json'
export default {
    name: '',
    props: {},
    emits: [],
    data() {
        return {
            softSkills
        }
    },
    created() {
    },
    methods: {
    },
    computed: {
    },
    components: {
    },
}
</script>