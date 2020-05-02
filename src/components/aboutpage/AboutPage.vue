<template>
    <div class="aboutpage">
        <div>
            <about-card />
        </div>
    </div>
</template>


<script>
import AboutCard from './components/AboutCard.vue'
export default {
    name: 'aboutpage',
    components: {
        AboutCard
    },
    data() {
        return {

        }
    }
}
</script>