<template>
    <section class="specs tech-list">
        <h1 class="main-layout capitalize">Hard skills</h1>
        <div class="tech-container main-layout">
            <article class="tech-logo flex center" v-for="skill in hardSkills" v-icon="skill"></article>
        </div>

        <h1 class="main-layout capitalize">Soft skills</h1>
        <ul class="soft-skills clean-list main-layout">
            <li v-for="{ title, description } in softSkills">
                <h2>{{ title }}</h2>
                <p v-for="d in description">{{ d }}</p>
            </li>
        </ul>
    </section>
</template>

<script>
import softSkills from '../data/soft-skills.json'
export default {
    name: 'skills-page',
    data() {
        return {
            softSkills,
            hardSkills: ['html', 'js', 'es6', 'ts', 'css', 'sass', 'nodejs', 'express', 'vue', 'react', 'redux', 'angular', 'axios', 'git', 'jquery', 'bootstrap', 'npm', 'socket', 'mongo', 'sql', 'postman']
        }
    },
}
</script>