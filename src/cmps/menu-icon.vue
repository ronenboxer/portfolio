<template>
    <div class="menu-icon absolute">
        <button class="menu-btn flex center" :class="{opened :isMenuActive}" @click="toggleIcon" aria-label="Main Menu"
            :aria-expanded="isMenuActive ? true : false" v-icon="'hamburger-menu'">
        </button>
    </div>
</template>

<script>
export default {
    name: '',
    props: {
        isMenuActive: {
            type: Boolean,
        },
    },
    emits: ['toggleMenuActive'],
    data() {
        return {
        }
    },
    created() {
    },
    methods: {
        toggleIcon() {
            this.$emit('toggleMenuActive')
        }
    },
    computed: {
    },
    components: {
    },
}
</script>