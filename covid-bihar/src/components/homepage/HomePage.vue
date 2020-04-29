<template>
    <div class="homepage">
        <v-app id="covid">
            <v-content>
                <v-container
                class="fill-height"
                >
                    <v-row>
                        <v-col cols="12" sm="9" md="9">
                            <v-row>
                                <v-col sm="4" v-for="(data,index) in covidData" :key="'data_' + data + `${index}`">
                                    <main-card :covid-data="data"></main-card>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col sm="12">
                                    <table-card></table-card>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="12" sm="3" md="3">

                        </v-col>
                    </v-row>
                </v-container>
            </v-content>
        </v-app>
    </div>
</template>

<script>
import MainCard from './components/MainCard.vue';
import TableCard from './components/TableCard.vue';
import serviceData from './../../services/index.js';

export default {
    name: 'HomePage',
    components: {
        TableCard,
        MainCard
    },
    data() {
        return {
            covidData: [],
        }
    },
    mounted() {
        serviceData.getAllData()
        .then(res => {
            this.covidData = res;
        })
    }
}
</script>