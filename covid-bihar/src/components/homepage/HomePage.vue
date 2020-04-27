<template>
    <div class="homepage">
        <v-container fluid>
            <main-card></main-card>
            <table-card></table-card>
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