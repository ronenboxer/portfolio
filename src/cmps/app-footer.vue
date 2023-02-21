<template>
    <footer class="app-footer fixed" :style="{ opacity: getOpacity }">
        <div class="modal-container flex column center">
            <button ref="contactBtnRef" class="contact-button" :class="{ active: !isActive }"
                @click="() => isActive = true">Contact</button>
            <contact-modal :isActive="isActive" :closeModal="closeModal" v-clickOutside="closeModal" />
        </div>
        <div class="screen full fixed" :class="{ active: isActive }"></div>
    </footer>
</template>

<script>
import contactModal from '../cmps/contact-modal.vue'
import { eventBus } from '../services/event-bus.js'
export default {
    name: 'app-footer',
    data() {
        return {
            isActive: false,
            elContactBtn: null,
            onContactListenerRemove: null,
            onWindowScrollListenerRemove: null,
            headerPosition: Infinity
        }
    },
    created() {
    },
    mounted() {
        this.elContactBtn = this.$refs.contactBtnRef
        this.onContactListenerRemove = eventBus.on('onContact', () => {
            document.querySelector('body').scrollTo(0,1000)
            setTimeout(() => {
                this.isActive = true
            }, 200);
        })
        this.onWindowScrollListenerRemove = eventBus.on('onWindowScroll', (y) => { this.headerPosition = y })
    },
    unmounted(){
        this.onContactListenerRemove()
        this.onWindowScrollListenerRemove()
    },
    methods: {
        openModal() {
            this.isActive = true
        },
        closeModal(ev) {
            if (!this.elContactBtn || ev.target === this.elContactBtn) return
            this.isActive = false
        }
    },
    computed: {
        getOpacity() {
            if (this.headerPosition >= 100) return 0
            return (100 - this.headerPosition) / 100
        }
    },
    components: {
        contactModal
    },
}
</script>