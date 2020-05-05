<template>
    <v-card class="mx-auto" raised>
        <div class="text-center headline pa-4 white--text" :class="covidData.header_color">{{covidData.name}}</div>
        <v-list-item-group v-model="item">
            <v-list dense>
                <v-list-item
                color="orange"
                >
                    <v-list-item-icon>
                        <v-icon color="orange">fas fa-user-md</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title class="text-left font-weight-medium">संक्रमित</v-list-item-title>
                    </v-list-item-content>
                    <div v-if="covidData.total">
                        {{ covidData.total }} (<span style="color: orange;">{{covidData.new > 0 ? '+' + covidData.new : 'अनुपलब्ध'}}</span>)
                    </div>
                </v-list-item>
                <v-list-item
                color="blue"
                >
                    <v-list-item-icon>
                        <v-icon color="blue">fas fa-hospital</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title class="text-left font-weight-medium">सक्रिय</v-list-item-title>
                    </v-list-item-content>
                    <div v-if="covidData.active">
                        {{ covidData.active }} (<span style="color: #4599f3">{{covidData.active_new == 0 ? 'अनुपलब्ध' : covidData.active_new > 0 ? '+' + covidData.active_new : '-' + covidData.active_new}}</span>)
                    </div>
                </v-list-item>
                <v-list-item
                color="green"
                >
                    <v-list-item-icon>
                        <v-icon color="green">fa fa-heartbeat</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title class="text-left font-weight-medium">स्वस्थ</v-list-item-title>
                    </v-list-item-content>
                    <div v-if="covidData.recovered">
                        {{ covidData.recovered }} (<span style="color: green;">{{covidData.recovered_new > 0 ? '+' + covidData.recovered_new : 'अनुपलब्ध'}}</span>)
                    </div>
                </v-list-item>
                <v-list-item
                color="red"
                >
                    <v-list-item-icon>
                        <v-icon color="red">fas fa-heart-broken</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title class="text-left font-weight-medium">मृत्यु</v-list-item-title>
                    </v-list-item-content>
                    <div v-if="covidData.death">
                        {{ covidData.death }} (<span style="color: red;">{{covidData.death_new > 0 ? '+' + covidData.death_new : 'अनुपलब्ध'}}</span>)
                    </div>
                </v-list-item>
            </v-list>
        </v-list-item-group>
    </v-card>
</template>
<script>

export default {
  name: 'MainCard',
  props: ['indiaStats', 'worldStats', 'biharStats'],
  data() {
      return {
        item: 1,
        covidData: []
      }
  },
  mounted() {
      this.covidData.push()
  }
}
</script>