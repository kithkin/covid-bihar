<template>
    <div class="aboutpage">
        <v-content>
            <v-container
            >
                <v-row 
                align="center"
                justify="center">
                    <v-col sm="12">
                        <about-card :aboutQA="aboutQA" />
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </div>
</template>

<script>
import serviceData from './../../services/index.js';
import AboutCard from './components/AboutCard.vue';

export default {
    name: 'aboutpage',
    components: {
        AboutCard
    },
    data() {
        return {
            aboutQA: []
        }
    },
    mounted() {
        serviceData.getQA()
        .then(res => {
            this.aboutQA = res
        })
    }
}
</script>