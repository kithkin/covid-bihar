<template>
    <div class="homepage">
        <!-- homepage content -->
        <v-content>
            <v-container class="fill-height">
                <v-row align="center" justify="center">
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
                                    <tooltip
                                            v-if="currentState"
                                            :title="currentState.districtHi"
                                            :description="currentStateDescription"
                                    />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col sm="12" class="text-center">
                                    <div id="holder">
                                    <div class="mapHolder">
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
                                <table-card :districtData="districtData" :loadingTable="loadingTable" :stateData="stateData" :countryData="countryData"></table-card>
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
    </div>
</template>

<script>
import MainCard from './components/MainCard.vue';
import TableCard from './components/TableCard.vue';
import serviceData from './../../services/index.js';
// import DailyBasisDataChart from './components/DailyBasisDataChart.vue';
const map = require('./../mapbuild/map').default;
const tooltip = require('./../mapbuild/tooltip').default;

export default {
    name: 'HomePage',
    components: {
        MainCard,
        TableCard,
        usMap: map,
        tooltip: tooltip,
        // DailyBasisDataChart
    },
    data() {
        return {
            covidData: [],
            statesData: undefined,
            currentState: undefined,
            districtData: [],
            stateData: [],
            countryData: [],
            loadingTable: true,
            utime: ''
        }
    },
    mounted() {

        // serviceData.getBiharDaily()
        // .then(res => {
        //     console.log(res);
        // })

        serviceData.getHomepageData()
        .then(res => {
            this.utime = res.updatedTime
            this.covidData = res.cardData
            this.districtData = res.biharTableData.tableData
            this.loadingTable = res.loading
            this.stateData = res.indiaTableData.tableData
            this.countryData = res.worldTableData
            this.statesData = {};

            for(var i=0;i<this.districtData.length;i++){
                this.statesData[this.districtData[i].district] = this.districtData[i];
            }
        })

        serviceData.getDistrictZones()
        .then(res => {
            return res;
        })
    },

    computed: {
        currentStateDescription: function() {
            const description = {
                active: "सक्रिय : " + this.currentState.active,
                confirmed: "कुल संक्रमित : " + this.currentState.confirmed,
                recovered: "कुल स्वस्थ : " + this.currentState.recovered,
                deaths: "कुल मृत्यु : " + this.currentState.deaths
            }
            return description;
        }
    },

    methods: {
        onStateSelected: function(stateCode) {
        this.currentState = this.statesData[stateCode];
        },
        onStateDeselected: function(stateCode) {
        this.currentState = stateCode;
        this.currentState = undefined;
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
