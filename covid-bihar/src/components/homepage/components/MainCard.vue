<template>
    <v-card class="mx-auto" raised>
        <div class="text-center headline pa-4 white--text" :class="covidData.header_color">{{covidData.name}}</div>
        <v-list-item-group v-model="item">
            <v-list dense>
                <v-list-item
                color="grey"
                >
                    <v-list-item-icon>
                        <v-icon color="grey">fas fa-user-md</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title class="text-left font-weight-medium">Total Case</v-list-item-title>
                    </v-list-item-content>
                    <div v-if="covidData.total">
                        {{ covidData.total }}
                    </div>
                </v-list-item>
                <v-list-item
                color="blue"
                >
                    <v-list-item-icon>
                        <v-icon color="blue">fas fa-hospital</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title class="text-left font-weight-medium">Active</v-list-item-title>
                    </v-list-item-content>
                    <div v-if="covidData.active">
                        {{ covidData.active }}
                    </div>
                </v-list-item>
                <v-list-item
                color="green"
                >
                    <v-list-item-icon>
                        <v-icon color="green">fa fa-heartbeat</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title class="text-left font-weight-medium">Recovered</v-list-item-title>
                    </v-list-item-content>
                    <div v-if="covidData.recovered">
                        {{ covidData.recovered }}
                    </div>
                </v-list-item>
                <v-list-item
                color="red"
                >
                    <v-list-item-icon>
                        <v-icon color="red">fas fa-heart-broken</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title class="text-left font-weight-medium">Death</v-list-item-title>
                    </v-list-item-content>
                    <div v-if="covidData.death">
                        {{ covidData.death }}
                    </div>
                </v-list-item>
            </v-list>
        </v-list-item-group>
    </v-card>
</template>
<script>

export default {
  name: 'MainCard',
  props: ['covidData'],
  data() {
      return {
        item: 1,
      }
  }
}
</script>

<style scoped>

</style>
