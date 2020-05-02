<template>
    <div class="homepage">
        
            <div>
                <v-app id="covid">
                    <v-navigation-drawer
                        v-model="primaryDrawer.model"
                        :clipped="primaryDrawer.clipped"
                        app
                        />

                        <v-app-bar
                        :clipped-left="primaryDrawer.clipped"
                        color="blue lighten-2"
                        dark
                        app
                        >
                            <v-app-bar-nav-icon
                            @click.stop="primaryDrawer.model = !primaryDrawer.model"
                            class="ml-1"
                            />
                            <div class="pt-4">
                                <v-img :src="require('@/assets/logo.png')" height="60" width= "190"/>
                            </div>  
                            <v-spacer />
                            <v-switch
                            v-model="$vuetify.theme.dark"
                            class="mt-5"
                            />
                            <span>
                                Dark
                            </span>
                        </v-app-bar>
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
                    <v-content>
                        <v-container
                        class="fill-height"
                        >
                            <v-row 
                            align="center"
                            justify="center">
                                <v-col cols="12">
                                    <v-row>
                                        <v-col sm="4" v-for="(data,index) in covidData" :key="'data_' + data + `${index}`">
                                            <main-card :covid-data="data"></main-card>
                                        </v-col>
                                    </v-row>
                                    <!-- <v-row>
                                        <v-col sm="12" class="text-center">
                                             <div id="holder">
                                                <div class="mapHolder">
                                                    <tooltip
                                                        v-if="currentState"
                                                        :title="currentState.Name"
                                                        :description="currentStateDescription"
                                                    />
                                                    <us-map
                                                        v-on:stateSelected="onStateSelected"
                                                        v-on:stateDeselected="onStateDeselected"
                                                    />
                                                </div>
                                            </div>
                                        </v-col>
                                    </v-row> -->
                                    <v-row>
                                        <v-col sm="12">
                                            <table-card :districtData="districtData" :loadingTable="loadingTable" :indiaData="indiaData" :worldData="worldData"></table-card>
                                        </v-col>
                                    </v-row>
                                    <!-- <v-row>
                                        <v-col>
                                            <daily-basis-data-chart />
                                        </v-col>
                                    </v-row> -->
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-content>
                    <footer-card />
                </v-app>
            </div>
    </div>
</template>

<script>
import MainCard from './components/MainCard.vue';
import TableCard from './components/TableCard.vue';
import serviceData from './../../services/index.js';
import FooterCard from './../common/components/FooterCard.vue';
// import DailyBasisDataChart from './components/DailyBasisDataChart.vue';
// const map = require('./../mapbuild/map').default;
// const tooltip = require('./../mapbuild/tooltip').default;

export default {
    name: 'HomePage',
    components: {
        TableCard,
        MainCard,
        // usMap: map,
        // tooltip: tooltip,
        FooterCard,
        // DailyBasisDataChart
    },
    data() {
        return {
            primaryDrawer: {
                model: false,
                type: 'default (no property)',
                clipped: true,
            },
            covidData: [],
            statesData: undefined,
            currentState: undefined,
            districtData: [],
            indiaData: [],
            worldData: [],
            loadingTable: true,
            fab: false
        }
    },
    mounted() {
        serviceData.getAllData()
        .then(res => {
            this.covidData = res;
        })

        // serviceData.getDistrictData()
        // .then(res => {
        //     console.log(res);
        //     // this.districtData = res;
        // })

        serviceData.getBiharData()
        .then(res => {
            this.districtData = res.tableData;
            this.loadingTable = res.loading;
        })

        serviceData.getIndiaData()
        .then(res => {
            this.indiaData = res;
        })

        serviceData.getWorldData()
        .then(res => {
            res.pop()
            this.worldData = res;
        })

        serviceData.getDistrictZones()
        .then(res => {
            console.log(res);
        })
    },
    computed: {
        currentStateDescription: function() {
        return "District: " + this.currentState;
        }
    },
    methods: {
        onStateSelected: function(stateCode) {
        this.currentState = stateCode;
        },
        onStateDeselected: function(stateCode) {
        this.currentState = stateCode;
        this.currentState = undefined;
        },
        onScroll (e) {
            if (typeof window === 'undefined') return
            const top = window.pageYOffset ||   e.target.scrollTop || 0
            this.fab = top > 20
        },
        toTop () {
            this.$vuetify.goTo(0);
        }
    }
}
</script>

<style scoped>
#holder {
  position: relative;
  height: auto;
  width: 50%;
  margin: auto;
}
.mapHolder {
  position: relative;
  margin: auto;
}
</style>
