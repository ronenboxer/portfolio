<template>
    <div class="menu-icon main-layout absolute">
        <button class="menu-btn flex center" :class="{opened :isMenuActive}" @click="toggleIcon" aria-label="Main Menu"
            :aria-expanded="isMenuActive ? true : false" v-icon="'hamburger-menu'">
        </button>
    </div>
</template>

<script>
export default {
    name: 'menu-icon',
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
    methods: {
        toggleIcon() {
            this.$emit('toggleMenuActive')
        }
    },
}
</script>