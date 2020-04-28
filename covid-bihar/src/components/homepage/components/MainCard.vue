<template>
    <v-card class="mx-auto" raised>
        <p class="display-4 font-weight-bold">BIHAR</p>
        <v-list-item-group v-model="item">
            <v-list dense>
                <v-list-item
                v-for="(item, i) in items"
                :key="i"
                >
                    <v-list-item-icon>
                        <v-icon v-if="item.icon" color="pink">{{item.icon}}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title class="text-left">{{item.text}}</v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-action>
                        <p class="text-right">
                            {{ item.case }}
                        </p>
                    </v-list-item-action>
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
            { text: 'Total Case', icon: 'fas fa-user-md', color: '', case: '12'},
            { text: 'Active', icon: 'fas fa-hospital', color: '', case: '10'},
            { text: 'Recovered', icon: 'fa fa-heartbeat', color: '', case: '20'},
            { text: 'Death', icon: 'fas fa-ambulance', color: '', case: '30'},
        ],
      }
  }
}
</script>

<style scoped>

</style>
