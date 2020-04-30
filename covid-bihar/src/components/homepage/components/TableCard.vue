<template>
    <div>
        <v-card class="mx-auto" raised>
        <table class="table table-bordered table-hover">
            <thead>
                <tr> 
                    <th class="th-sm">DISTRICT&nbsp;<i ></i></th>
                    <th class="th-sm">TOTAL&nbsp;<i ></i></th>
                    <th class="th-sm">ACTIVE&nbsp;<i ></i></th>
                    <th class="th-sm">NEW CASES&nbsp;<i ></i></th>
                    <th class="th-sm">DEATH&nbsp;<i ></i></th>
                    <th class="th-sm">NEW DEATH&nbsp;<i ></i></th>
                    <th class="th-sm">RECOVERED&nbsp;<i ></i></th>
                    <th class="th-sm">NEW RECOVERED&nbsp;<i ></i></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(data, dIndex) in this.districtData" :key="dIndex">
                    <td >{{data.district}}</td>
                    <td >{{data.confirmed}}</td>
                    <td >{{data.active}}</td>
                    <td class="covid-bg-yellow">{{data.delta.confirmed}}</td>
                    <td >{{data.deceased}}</td>
                    <td class="covid-bg-red">{{data.delta.deceased}}</td>
                    <td >{{data.recovered}}</td>
                    <td >{{data.delta.recovered}}</td>
                </tr>                                                
            </tbody>
        </table>
        </v-card>
    </div>
</template>

<script>

export default {
    name: 'tablecard',
    props: ['districtData'],
    component: {

    },
    data () {
        return {

        }
    }
}
</script>

<style>
    .covid-bg-red {
        background-color: red;
        color: white;
    }
    .covid-bg-yellow {
        background-color: #FFEEAA;
    }

</style>