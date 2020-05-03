<template>
    <div class="aboutpage">
        <v-app id="aboutpage">
            <!-- drawer component -->
            <!-- <drawer></drawer> -->

            <!-- app bar component -->
            <app-bar></app-bar>

            <!-- back to top component -->
            <v-btn
                v-scroll="onScroll"
                v-show="fab"
                fab
                dark
                fixed
                bottom
                right
                color="primary"
                @click="toTop"
            >
                <v-icon>keyboard_arrow_up</v-icon>
            </v-btn>
            <div>
                <about-card :aboutQA="aboutQA" />
            </div>
            <footer-card />
        </v-app>
    </div>
</template>


<script>
import serviceData from './../../services/index.js';
import AppBar from './../common/components/AppBar.vue';
import AboutCard from './components/AboutCard.vue';
import FooterCard from './../common/components/FooterCard.vue';
export default {
    name: 'aboutpage',
    components: {
        AppBar,
        AboutCard,
        FooterCard
    },
    data() {
        return {
            aboutQA: []
        }
    },
    methods: {

    },
    mounted() {
        serviceData.getQA()
        .then(res => {
            console.log("Here: ",res);
            this.aboutQA = res
        })
    }
}
</script>