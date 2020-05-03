<template>
    <div>
        <v-card
            class="mt-4 mx-auto"
            max-width="900"
            v-for="(data, dIndex) in aboutQA" :key="dIndex"
        >
            <v-sheet 
            >
                <v-card class="mx-auto blue lighten-2" raised>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="title">{{data.question}}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
            </v-sheet>

            <v-card-text>
                <div class="subtitle-2 font-weight-light grey--text">{{data.ans}}</div>
            </v-card-text>
        </v-card>  
    </div>
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