<template>
    <article class="project-preview flex-center relative">
        <label :for="'card' + id" class='s_round absolute' :class="{ s_round_click: isRoundClicked }" aria-hidden="true"
            @click="jump">
            <div class='b_round absolute' :class="{ b_round_back_hover: isRoundBackHover }"></div>
            <div class='s_arrow flex center' :class="{ s_arrow_rotate: isRotate }" v-icon="'arrow'"></div>
        </label>
        <input type="checkbox" :id="'card' + id" class="more" aria-hidden="true">
        <div class="content">
            <div class="front flex center">
                <div class="inner flex column">
                    <a :href="proj.page" target="_blank">
                        <div v-if="isLoading" class="relative img-skeleton"></div>
                        <img v-show="!isLoading" :src="getImageUrl" alt="hi" @error="handleError" @load="handleLoad">
                    </a>
                    <a :href="proj.page" target="_blank">
                        <h2 class="capitalize proj-title">{{ proj.title }}</h2>
                    </a>
                    <h3 class="proj-subtitle">{{ proj.subtitle }}</h3>
                    <div class="techs-container">
                        <span class="tech-logo" v-for="tech in proj.techs" :key="tech" v-icon="tech"></span>
                    </div>
                    <!-- <label :for="'card'+id" class="button" aria-hidden="true" @click="jump">
                        Details
                    </label> -->

                </div>
            </div>
            <div class="back">
                <div class="inner">
                    <h2>Git repository</h2>
                    <ul class="clean-list">
                        <li v-for="repo in proj.repo" key="repo">
                            <a class="capitalize" 
                                :href="`https://github.com/ronenboxer/${repo}`" target="_blank">
                                {{ repo.split('-').join(' ') }}
                            </a>
                        </li>
                    </ul>
                    <h2>About the project</h2>
                    <p v-for="p in proj.about" key="Math.random()">{{ p }}</p>
                    <!-- <label :for="'card'+id" class="button return" aria-hidden="true" @click="jump">
                        <i class="fas fa-arrow-left">back</i>
                    </label> -->
                </div>
            </div>
        </div>

    </article>
</template>

<script>
export default {
    name: 'work-preview',
    props: {
        proj: Object,
        id: {
            type: [String, Number],
            required: true
        }
    },
    emits: [],
    data() {
        return {
            isRoundClicked: false,
            isRotate: false,
            isRoundBackHover: false,
            isLoading: true,
            url: '',
            idxMap: {
                about: 0,
                projects: 1,
                technologies: 2,
                contact: 3
            }
        }
    },
    created() {
        setTimeout(() => {
            this.url = new URL(`../assets/imgs/projects/${this.proj.imgName}`, import.meta.url).href
        }, 3000);
    },
    methods: {
        jump() {
            this.isRoundClicked = true
            this.isRotate = !this.isRotate
            this.isRoundBackHover = true

            setTimeout(() => {
                this.isRoundClicked = false
                this.isRoundBackHover = false

            }, 300);
        },
        handleError() {
            console.log(`123:`, 123)
            this.isLoading = true
        },
        handleLoad() {
            this.isLoading = false
        }
    },
    computed: {
        getImageUrl() {
            return new URL(`../assets/imgs/projects/${this.proj.imgName}`, import.meta.url).href
        },
    },
    components: {
    },
}
</script>