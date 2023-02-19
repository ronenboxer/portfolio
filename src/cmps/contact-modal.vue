<template>
    <section class="contact-modal absolute flex" :class="{ active: isActive }">
        <button class="close-btn absolute" v-icon="'close'" @click="onClose"></button>
        <div class="flex column form-container">
            <h2>Let's talk!</h2>
            <div ref="recaptchaRef"></div>
            <form class="flex column" action="https://formbold.com/s/oYqWL" method="POST">
                <label for="email">
                    <span class="uppercase">Email</span>
                    <input @input="onInput('email')" id="email" name="email" v-model="email" type="email"
                        placeholder="Required" required>
                </label>
                <label for="subject">
                    <span class="uppercase">Subject</span>
                    <input @input="onInput('subject')" id="subject" name="subject" v-model="subject" type="text"
                        placeholder="Optional">
                </label>
                <textarea @input="onInput('message')" name="message" v-model="message" rows="5" placeholder="Message"
                    required></textarea>
                <span class="words-left">{{ wordsLeft }}</span>
                <div class="submission flex between align-center">
                    <div class="g-recaptcha" :data-sitekey="key"></div>
                    <submit-button type="submit" :isValid="isValid" />
                    <a class="cv flex center" href="https://github.com/ronenboxer/portfolio/raw/main/src/assets/Ronen-Boxer-CV.pdf" download>CV</a>
                </div>
            </form>
            <div class="social flex center">
                <a target="_blank" class="inline-block contact" href="https://wa.me/972527735437" v-icon="'phone'"
                    title="052-773-5437"></a>
                <a target="_blank" class="inline-block contact" href="mailto:ronenboxer@gmail.com" v-icon="'email'"
                    title="Ronen.Boxer@gmail.com"></a>
                <a target="_blank" class="inline-block contact"
                    href="https://www.linkedin.com/in/ronen-boxer-471436203/" v-icon="'linkedin'"></a>
                <a target="_blank" class="inline-block contact" href="https://github.com/ronenboxer"
                    v-icon="'github'"></a>
            </div>
        </div>
        <div class="galaxy relative">
            <galaxy :isShown="false" />
            <p class="absolute center">Download my <a class="cv" href="https://github.com/ronenboxer/portfolio/raw/main/src/assets/Ronen-Boxer-CV.pdf" download>CV</a></p>
        </div>
    </section>
</template>

<script>
import galaxy from './galaxy.vue'
import Axios from 'axios'
import submitButton from './submit-button.vue'
// grecaptcha.enterprise.ready(function() {
//     grecaptcha.enterprise.execute('6LeDrZEkAAAAAMQnGTxvhHmdFe8XqxjPdGjGAh3k', {action: 'login'})
//     .then(function(token) {

//     })
// })
export default {
    name: '',
    props: { isActive: Boolean, closeModal: Function },
    emits: [],
    data() {
        return {
            subject: '',
            email: '',
            message: '',
            maxLength: {
                email: 50,
                subject: 50,
                message: 300
            },
            securityRegex: new RegExp(/(<[ \t\n]*script)|(<[ \t\n]*\/[ \t\n]*script[ \t\n]*>)/, 'ig'),
            key: import.meta.env.VITE_KEY
        }
    },
    created() {
    },
    mounted() {
        const recaptcha = document.createElement('script')
        recaptcha.setAttribute('src', 'https://www.google.com/recaptcha/enterprise.js?render=6LeDrZEkAAAAAMQnGTxvhHmdFe8XqxjPdGjGAh3k')
        recaptcha.setAttribute('async', 'true')
        recaptcha.setAttribute('defer', 'true')
        this.$refs.recaptchaRef.appendChild(recaptcha)
    },
    methods: {
        submit() {
            let { email, subject, message } = this
            email = email.trim().replace(this.securityRegex, 'sk/ri/pt')
            subject = subject.trim().replace(this.securityRegex, 'sk/ri/pt')
            message = message.trim().replace(this.securityRegex, 'sk/ri/pt')
            console.log(`message:`, message)
        },
        onInput(field) {
            if (!this[field]) return
            this[field] = this[field].replace(this.securityRegex, '[forbidden]')
            if (this[field].length > this.maxLength[field]) this[field] = this[field].slice(0, this.maxLength[field])
        },
        onClose(ev) {
            this.email = ''
            this.message = ''
            this.subject = ''
            this.closeModal(ev)
        }
    },
    computed: {
        wordsLeft() {
            return this.maxLength.message - this.message.length + ' / ' + this.maxLength.message
        },
        isValid() {
            if (!this.email.trim().length || !this.message.trim().length) return false
            return new RegExp('[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+').test(this.email)
        }
    },
    components: {
        galaxy,
        submitButton
    },
}
</script>