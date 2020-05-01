<template>
    <div class="homepage">
        <div id="holder">
            <div class="mapHolder">
                <us-map
                    v-on:stateSelected="onStateSelected"
                    v-on:stateDeselected="onStateDeselected"
                />
            </div>
                <tooltip
                    v-if="currentState"
                    :title="currentState.Name"
                    :description="currentStateDescription"
                />
        </div>
            <div>
                <v-app id="covid">
                    <v-navigation-drawer
                        v-model="primaryDrawer.model"
                        :clipped="primaryDrawer.clipped"
                        app
                        />

                        <v-app-bar
                        :clipped-left="primaryDrawer.clipped"
                        app
                        >
                            <v-app-bar-nav-icon
                            @click.stop="primaryDrawer.model = !primaryDrawer.model"
                            />
                            <v-toolbar-title>COVID19</v-toolbar-title>
                            <v-spacer />
                            <v-switch
                            v-model="$vuetify.theme.dark"
                            primary
                            label="Dark"
                            align="center"
                            />
                        </v-app-bar>
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
    </div>
</template>

<script>
import MainCard from './components/MainCard.vue';
import TableCard from './components/TableCard.vue';
import serviceData from './../../services/index.js';
const map = require('./../mapbuild/map').default;
const tooltip = require('./../mapbuild/tooltip').default;

export default {
    name: 'HomePage',
    components: {
        TableCard,
        MainCard,
        usMap: map,
        tooltip: tooltip
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
            currentState: undefined
        }
    },
    mounted() {
        serviceData.getAllData()
        .then(res => {
            this.covidData = res;
        })
    },
    methods: {
        onStateSelected: function(stateCode) {
        this.currentState = this.statesData[stateCode];
        },
        onStateDeselected: function(stateCode) {
        this.currentState = this.statesData[stateCode];
        this.currentState = undefined;
        }
    }
}
</script>

<style scoped>
#holder {
  position: relative;
  height: 300px;
  width: 500px;
  margin: auto;
}
.mapHolder {
  position: absolute;
  margin: auto;
}
</style>
