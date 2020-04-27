<template>
    <div class="homepage">
        <v-container>
            <v-row>
                <v-col cols="12" sm="9" md="9">
                    <v-row>
                        <v-col sm="4">
                            <main-card></main-card>
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
    </div>
</template>

<script>
import MainCard from './components/MainCard.vue'
import TableCard from './components/TableCard.vue'

export default {
    name: 'HomePage',
    components: {
        TableCard,
        MainCard
    },
    data() {
        return {

        }
    }
}
</script>