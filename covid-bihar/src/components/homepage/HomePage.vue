<template>
    <div class="homepage">
        <main-card></main-card>
        <table-card></table-card>
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