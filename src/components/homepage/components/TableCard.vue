<template>
    <div>
        <v-card class="mx-auto" raised>
            <v-tabs
            v-model="tab"
            >
                <v-tab
                    class="font-weight-medium"
                    v-for="item in items"
                    :key="item.tab"
                >
                    {{ item.tab }}
                </v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
                <v-tab-item>
                    <v-card flat>
                        <v-data-table
                        :headers="biharHeaders"
                        :items="districtData"
                        class="elevation-1 pt-2"
                        :sort-by="['newC']"
                        :sort-desc="[true]"
                        :loading ="loadingTable" 
                        mobile-breakpoint="300"
                        loading-text="प्रकिरिया में... कृपया प्रतीक्षा कीजिये!"
                        >
                            <template v-slot:item.newC="{ item }">
                                <div v-if="item.newC > 0">
                                    <v-chip :color="getColorT(item.newC)">+ {{ item.newC }}</v-chip>
                                </div>
                            </template>
                            <template v-slot:item.newR="{ item }">
                                <div v-if="item.newR > 0">
                                    <v-chip :color="getColorR(item.newR)">+ {{ item.newR }}</v-chip>
                                </div>
                            </template>
                            <template v-slot:item.newD="{ item }">
                                <div v-if="item.newD > 0">
                                    <v-chip :color="getColorD(item.newD)">+ {{ item.newD }}</v-chip>
                                </div>
                            </template>
                        </v-data-table>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card flat>
                        <v-data-table
                        :headers="indiaHeaders"
                        :items="indiaData"
                        class="elevation-1 pt-2"
                        :sort-by="['deltaconfirmed']"
                        :sort-desc="[true]"
                        :loading ="loadingTable"
                        mobile-breakpoint="300"  
                        loading-text="प्रकिरिया में... कृपया प्रतीक्षा कीजिये!"
                        >
                            <template v-slot:item.deltaconfirmed="{ item }">
                                <div v-if="item.deltaconfirmed > 0">
                                    <v-chip :color="getColorT(item.deltaconfirmed)">+ {{ item.deltaconfirmed }}</v-chip>
                                </div>
                            </template>
                            <template v-slot:item.deltarecovered="{ item }">
                                <div v-if="item.deltarecovered > 0">
                                    <v-chip :color="getColorR(item.deltarecovered)">+ {{ item.deltarecovered }}</v-chip>
                                </div>
                            </template>
                            <template v-slot:item.deltadeaths="{ item }">
                                <div v-if="item.deltadeaths > 0">
                                    <v-chip :color="getColorD(item.deltadeaths)">+ {{ item.deltadeaths }}</v-chip>
                                </div>
                            </template>
                        </v-data-table>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card flat>
                        <v-data-table
                        :headers="worldHeaders"
                        :items="worldData"
                        class="elevation-1 pt-2"
                        :sort-by="['rank']"
                        :sort-desc="[false]"
                        :loading ="loadingTable"  
                        loading-text="प्रकिरिया में... कृपया प्रतीक्षा कीजिये!"
                        >
                            <template v-slot:item.deltaconfirmed="{ item }">
                                <div v-if="item.deltaconfirmed > 0">
                                    <v-chip :color="getColorT(item.deltaconfirmed)">+ {{ item.deltaconfirmed }}</v-chip>
                                </div>
                            </template>
                            <template v-slot:item.deltarecovered="{ item }">
                                <div v-if="item.deltarecovered > 0">
                                    <v-chip :color="getColorR(item.deltarecovered)">+ {{ item.deltarecovered }}</v-chip>
                                </div>
                            </template>
                            <template v-slot:item.deltadeaths="{ item }">
                                <div v-if="item.deltadeaths > 0">
                                    <v-chip :color="getColorD(item.deltadeaths)">+ {{ item.deltadeaths }}</v-chip>
                                </div>
                            </template>
                        </v-data-table>
                    </v-card>
                </v-tab-item>
            </v-tabs-items>
    


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
    props: ['districtData', 'loadingTable', 'indiaData', 'worldData'],
    component: {

    },
    data () {
        return {
            biharHeaders: [
                {
                    text: 'जिला',
                    align: 'start',
                    sortable: false,
                    value: 'districtHi',
                    class: 'blue lighten 2 white--text subtitle-2'
                },
                { text: 'संक्रमित (कुल)', value: 'totalT', class: 'blue lighten 2 white--text subtitle-2', align: 'center' },
                { text: 'संक्रमित (आज)', value: 'newC', class: 'blue lighten 2 white--text subtitle-2', align: 'center' },
                { text: 'सक्रिय', value: 'active', class: 'blue lighten 2 white--text subtitle-2', align: 'center' },
                { text: 'स्वस्थ हुए (कुल)', value: 'totalR', class: 'blue lighten 2 white--text subtitle-2', align: 'center' },
                { text: 'स्वस्थ हुए (आज)', value: 'newR', class: 'blue lighten 2 white--text subtitle-2', align: 'center' },
                { text: 'मृत्यु (कुल)', value: 'totalD', class: 'blue lighten 2 white--text subtitle-2', align: 'center' },
                { text: 'मृत्यु (आज)', value: 'newD', class: 'blue lighten 2 white--text subtitle-2', align: 'center' },
            ],
            indiaHeaders: [
                {
                    text: 'राज्य',
                    align: 'start',
                    sortable: false,
                    value: 'stateHi',
                    class: 'blue lighten 2 white--text subtitle-2'
                },
                { text: 'संक्रमित (कुल)', value: 'confirmed', class: 'blue lighten 2 white--text subtitle-2' },
                { text: 'संक्रमित (आज)', value: 'deltaconfirmed', class: 'blue lighten 2 white--text subtitle-2' },
                { text: 'सक्रिय', value: 'active', class: 'blue lighten 2 white--text subtitle-2' },
                { text: 'स्वस्थ हुए (कुल)', value: 'recovered', class: 'blue lighten 2 white--text subtitle-2' },
                { text: 'स्वस्थ हुए (आज)', value: 'deltarecovered', class: 'blue lighten 2 white--text subtitle-2' },
                { text: 'मृत्यु (कुल)', value: 'deaths', class: 'blue lighten 2 white--text subtitle-2' },
                { text: 'मृत्यु (आज)', value: 'deltadeaths', class: 'blue lighten 2 white--text subtitle-2' },
            ],
            worldHeaders: [
                {
                    text: 'सूचीबद्ध (शीर्ष 9 संक्रमित देश)',
                    align: 'start',
                    sortable: false,
                    value: 'stateHi',
                    class: 'blue lighten 2 white--text subtitle-2'
                },
                { text: 'संक्रमित (कुल)',sortable: false, value: 'confirmed', class: 'blue lighten 2 white--text subtitle-2' },
                { text: 'संक्रमित (आज)',sortable: false, value: 'deltaconfirmed', class: 'blue lighten 2 white--text subtitle-2' },
                { text: 'सक्रिय',sortable: false, value: 'active', class: 'blue lighten 2 white--text subtitle-2' },
                { text: 'स्वस्थ हुए (कुल)',sortable: false, value: 'recovered', class: 'blue lighten 2 white--text subtitle-2' },
                { text: 'स्वस्थ हुए (आज)',sortable: false, value: 'deltarecovered', class: 'blue lighten 2 white--text subtitle-2' },
                { text: 'मृत्यु (कुल)',sortable: false, value: 'deaths', class: 'blue lighten 2 white--text subtitle-2' },
                { text: 'मृत्यु (आज)',sortable: false, value: 'deltadeaths', class: 'blue lighten 2 white--text subtitle-2' },
            ],
            tab: null,
            items: [
                { tab: 'बिहार'},
                { tab: 'भारत'},
                { tab: 'विश्व'},
            ],
        }
    },
    methods: {
      getColorT (newC) {
        if (newC > 0) return 'orange lighten-3';
      },
      getColorR (newR) {
        if (newR > 0) return 'green lighten-3';
      },
      getColorD (newD) {
        if (newD > 0) return 'red lighten-3';
      },
      getColorTIW (deltaconfirmed) {
        if (deltaconfirmed > 0) return 'orange lighten-3';
      },
      getColorRIW (deltarecovered) {
        if (deltarecovered > 0) return 'green lighten-3';
      },
      getColorDIW (deltadeaths) {
        if (deltadeaths > 0) return 'red lighten-3';
      },
    },

    mounted() {
        // this.desserts = this.districtData;
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