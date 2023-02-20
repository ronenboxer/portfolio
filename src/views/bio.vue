<template>
    <section class="bio biography">
        <h1 class="main-layout">Biography</h1>
        <div class="timeline">

            <div class="row flex column" v-for="({ date, title, description }, idx) in bio">
                <div class="content flex center relative">
                    <div class="line absolute" :class="{ first: idx === 0, last: idx === bio.length - 1 }"></div>
                    <div class="circle relative flex center">{{ date }}</div>
                    <div class="text">
                        <h2>{{ title }}</h2>
                        <p>{{ description }}</p>
                    </div>
                </div>
                <div v-if="idx < bio.length - 1" class="border top" :class="{ flip: idx % 2 }"></div>
                <div v-if="idx < bio.length - 1" class="border bottom relative" :class="{ flip: idx % 2 }"></div>
            </div>
        </div>


    </section>
</template>

<script>
import bio from '../data/bio.json' assert {type: 'json'}
export default {
    name: '',
    props: {},
    emits: [],
    data() {
        return {
            bio
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