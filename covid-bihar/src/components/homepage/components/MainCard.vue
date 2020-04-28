<template>
    <v-card class="mx-auto" raised>
        <div class="text-center headline pa-4 blue lighten-2 white--text">BIHAR</div>
        <v-list-item-group v-model="item">
            <v-list dense>
                <v-list-item
                v-for="(item, i) in items"
                :key="i"
                :color="item.color"
                >
                    <v-list-item-icon>
                        <v-icon v-if="item.icon" :color="item.color">{{item.icon}}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title class="text-left font-weight-medium">{{item.text}}</v-list-item-title>
                    </v-list-item-content>
                    <div>
                        {{ item.case }}
                    </div>
                </v-list-item>
            </v-list>
        </v-list-item-group>
    </v-card>
</template>
<script>
export default {
  name: 'MainCard',
  data() {
      return {
        item: 1,
        items: [
            { text: 'Total Case', icon: 'fas fa-user-md', color: 'grey', case: '12'},
            { text: 'Active', icon: 'fas fa-hospital', color: 'blue', case: '10'},
            { text: 'Recovered', icon: 'fa fa-heartbeat', color: 'green', case: '20'},
            { text: 'Death', icon: 'fas fa-ambulance', color: 'red', case: '30'},
        ],
      }
  }
}
</script>

<style scoped>

</style>
