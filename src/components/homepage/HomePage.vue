<template>
    <div class="homepage">
        <v-app id="covid">
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
            <!-- homepage content -->
            <v-content>
                <v-container
                class="fill-height"
                >
                    <v-row 
                    align="center"
                    justify="center">
                        <v-col sm="12" class="pb-0 pt-2">
                            <div class="text-right body-2">अंतिम अपडेट: {{utime}}</div>
                        </v-col>
                        <v-col cols="12">
                            <v-row>
                                <v-col sm="4" v-for="(data,index) in covidData" :key="'data_' + data + `${index}`">
                                    <main-card :covid-data="data"></main-card>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col sm="12" class="text-center">
                                        <div id="holder">
                                        <div class="mapHolder">
                                            <tooltip
                                                v-if="currentState"
                                                :title="currentState.district"
                                                :description="currentStateDescription"
                                            />
                                            <us-map
                                                v-on:stateSelected="onStateSelected"
                                                v-on:stateDeselected="onStateDeselected"
                                            />
                                        </div>
                                    </div>
                                </v-col>
                            </v-row>
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

            <!-- footer component -->
            <footer-card />
        </v-app>
    </div>
</template>

<script>
import AppBar from './../common/components/AppBar.vue';
// import Drawer from './../common/components/Drawer.vue';
import MainCard from './components/MainCard.vue';
import TableCard from './components/TableCard.vue';
import serviceData from './../../services/index.js';
import FooterCard from './../common/components/FooterCard.vue';
// import DailyBasisDataChart from './components/DailyBasisDataChart.vue';
const map = require('./../mapbuild/map').default;
const tooltip = require('./../mapbuild/tooltip').default;

export default {
    name: 'HomePage',
    components: {
        AppBar,
        // Drawer,
        TableCard,
        MainCard,
        usMap: map,
        tooltip: tooltip,
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
            fab: false,
            utime: '',
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
            this.statesData = {};

            for(var i=0;i<this.districtData.length;i++){
                this.statesData[this.districtData[i].district] = this.districtData[i];
            }
        })

        serviceData.getIndiaData()
        .then(res => {
            this.indiaData = res;
            this.utime = res[13].lastupdatedtime;
        })

        serviceData.getWorldData()
        .then(res => {
            res.pop()
            this.worldData = res;
        })

        serviceData.getDistrictZones()
        .then(res => {
            return res;
        })
    },
    computed: {
        currentStateDescription: function() {
        return "कुल संक्रमित: " + this.currentState.totalT;
        }
    },
    methods: {
        onStateSelected: function(stateCode) {
        this.currentState = this.statesData[stateCode];
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
