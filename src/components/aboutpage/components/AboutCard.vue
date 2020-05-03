<template>
    <v-content>
        <v-container class="fill-height">
            <v-card class="mx-auto mb-3 mt-8" raised v-for="(data, dIndex) in aboutQA" :key="dIndex">
                <v-list-item three-line>
                    <v-list-item-content>
                        <!-- <div class="overline mb-4">OVERLINE</div> -->
                        <v-list-item-title class="headline mb-1">{{data.question}}</v-list-item-title>
                        <v-list-item-subtitle>{{data.ans}}</v-list-item-subtitle>
                    </v-list-item-content>

                    <!-- <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar> -->
                </v-list-item>
            </v-card>
        </v-container>
    </v-content>
</template>

<script>
export default {
  name: 'AboutCard',
  props: ['aboutQA'],
  data() {
    return {
    
    }
  }
}
</script>