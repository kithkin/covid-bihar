<template>
    <div>
        <v-card class="mx-auto pa-2" raised>
            <v-data-table
                :headers="headers"
                :items="desserts"
                class="elevation-1"
            >
                <template v-slot:item.newcases="{ item }">
                <v-chip :color="getColor(item.newcases)" dark>{{ item.newcases }}</v-chip>
                </template>
            </v-data-table>
    






        <!-- <table class="table table-bordered table-hover table-responsive my-table">
            <thead>
                <tr class="my-th"> 
                    <th class="th-sm my-vert-align">DISTRICT&nbsp;<i class="fa fa-sort"></i></th>
                    <th class="th-sm"><span class="vetrical-text"><span class="vertical-rotate">TOTAL<br>CASES&nbsp;</span><i class="fa fa-sort"></i></span></th>
                    <th class="th-sm"><span class="vetrical-text"><span class="vertical-rotate">ACTIVE<br>CASES&nbsp;</span><i class="fa fa-sort"></i></span></th>
                    <th class="th-sm"><span class="vetrical-text"><span class="vertical-rotate">NEW<br> CASES&nbsp;</span><i class="fa fa-sort"></i></span></th>
                    <th class="th-sm my-vert-align"><span class="vetrical-text"><span class="vertical-rotate">RECOVERED&nbsp;</span><i class="fa fa-sort"></i></span></th>
                    <th class="th-sm"><span class="vetrical-text"><span class="vertical-rotate">NEW<br>RECOVERED&nbsp;</span><i class="fa fa-sort"></i></span></th>
                    <th class="th-sm"><span class="vetrical-text"><span class="vertical-rotate">DEATH<br>CASES&nbsp;</span><i class="fa fa-sort"></i></span></th>
                    <th class="th-sm"><span class="vetrical-text"><span class="vertical-rotate">NEW<br>DEATH&nbsp;</span><i class="fa fa-sort"></i></span></th>
                </tr>
            </thead>
            <tbody>
                <tr class="my-td" v-for="(data, dIndex) in this.districtData" :key="dIndex">
                    <td >{{data.district}}</td>
                    <td >{{data.confirmed}}</td>
                    <td >{{data.active}}</td>
                    <td :class="{'covid-bg-blue':data.delta.confirmed > 0}">{{data.delta.confirmed > 0 ? `+ ` + data.delta.confirmed : ''}}</td>
                    <td >{{data.recovered > 0 ? data.recovered : ''}}</td>
                    <td :class="{'covid-bg-green':data.delta.recovered > 0}">{{data.delta.recovered > 0 ? `+ ` + data.delta.recovered : ''}}</td>
                    <td :class="{'covid-text-red':data.deceased > 0}">{{data.deceased > 0 ? data.deceased : ''}}</td>
                    <td :class="{'covid-bg-red':data.delta.deceased > 0}">{{data.delta.deceased > 0 ? `+ ` + data.delta.deceased : ''}}</td>
                </tr>                                                
            </tbody>
        </table> -->
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
            headers: [
                {
                    text: 'District',
                    align: 'start',
                    sortable: false,
                    value: 'district',
                    class: 'blue lighten 2 white--text subtitle-2'
                },
                { text: 'Total', value: 'confirmed', class: 'blue lighten 2 white--text subtitle-2' },
                { text: 'New Cases', value: 'newcases', class: 'blue lighten 2 white--text subtitle-2' },
                { text: 'Active', value: 'active', class: 'blue lighten 2 white--text subtitle-2' },
                { text: 'Recovered', value: 'recovered', class: 'blue lighten 2 white--text subtitle-2' },
                { text: 'New Recovered', value: 'newrecovered', class: 'blue lighten 2 white--text subtitle-2' },
                { text: 'Death', value: 'deceased', class: 'blue lighten 2 white--text subtitle-2' },
                { text: 'New Death', value: 'newdeceased', class: 'blue lighten 2 white--text subtitle-2' },
            ],
            desserts: [
                {
                    district: 'Munger',
                    confirmed: 95,
                    newcases: 3,
                    active: 77,
                    recovered: 17,
                    newrecovered: 6,
                    deceased: 1,
                    newdeceased: 0
                },
                {
                    district: 'Patna',
                    confirmed: 44,
                    newcases: 0,
                    active: 38,
                    recovered: 6,
                    newrecovered: 1,
                    deceased: 0,
                    newdeceased: 0
                },
                {
                    district: 'Rohtas',
                    confirmed: 45,
                    newcases: 11,
                    active: 45,
                    recovered: 0,
                    newrecovered: 0,
                    deceased: 0,
                    newdeceased: 0
                },
            ],
            
        }
    },
    methods: {
      getColor (newcases) {
          if(newcases >= 0) {
            if (newcases > 0) return 'blue lighten-3'
            // else if (newcases > 10 && newcases <= 50) return 'orange'
            else return 'no-data-text'
          }
      },
    },

    mounted() {

    }
}
</script>

<style>
    .covid-bg-red {
        background-color: #f9e4e5;
        color: #e43e33;
    }
    .covid-bg-blue {
        background-color: #e5f2fd;
        color: #4296f3;
    }
    .covid-bg-green {
        background-color: #e6f5ea;
        color: #5faf50;
    }
    .covid-text-red {
        color: #e43e33;
    }
    .covid-text-blue {
        color: #4296f3;
    }
    .covid-text-green {
        color: #5faf50;
    }
    .my-th {
        font-size: 14px;
        background-color: #4296f3;
        color: white;
    }
    .my-td {
        font-size: 12px;
        font-weight: 500;
    }
    .my-table {
        margin-bottom: 0rem !important;
    }
    .table-responsive {
        display: inline-table !important;
    }
    .my-vert-align {
        vertical-align: middle !important;
    }
    @media only screen and (max-width: 768px) {
        .table-responsive {
            display: block !important;
        }
        .vetrical-text {
            writing-mode: vertical-rl;
            white-space: nowrap;
        }
        .vetrical-text br {
            content:' ';
        }
        .vetrical-text br:after {
            content:' ';
        }
        .vertical-rotate {
            display: inline-block;
            transform: rotate(-180deg);
        }
        .my-vert-align {
            vertical-align: bottom !important;
        }
    }

</style>