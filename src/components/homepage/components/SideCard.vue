<template>
    <v-card
    class="mx-auto"
    raised
  >
    <v-sheet class="pa-4 blue lighten 2">
        <v-autocomplete
        v-model="select"
        :loading="loading"
        :items="items"
        :search-input.sync="search"
        cache-items
        dark
        flat
        hide-no-data
        hide-details
        clearable
        clear-icon="mdi-close-circle-outline"
        label="e.g: Patna"
        solo-inverted
        >
        </v-autocomplete>
    </v-sheet>
    <v-card-text 
      id="scroll-target"
      style="max-height: 400px"
      class="overflow-y-auto"
    >
      <v-row
        v-scroll:#scroll-target="onScroll"
        align="center"
        justify="center"
      >
      <v-col>
            <v-list shaped>
          <!-- <v-subheader>REPORTS</v-subheader> -->
          <v-list-item-group v-model="item" color="primary">
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
            >
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
           <v-subheader>BLOCK WISE DATA</v-subheader>
        </v-list>
      </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>

export default {
    name: 'SideCard',

    data() {
        return {
            offsetTop: 0,
            loading: false,
            item: 1,
            items: [
              { text: 'संक्रमित', icon: 'mdi-clock' },
              { text: 'सक्रिय', icon: 'mdi-account' },
              { text: 'स्वस्थ', icon: 'mdi-flag' },
              { text: 'मृत्यु', icon: 'mdi-flag' },
            ],
            // items: [],
            search: null,
            select: null,
            districts: [
            'Alabama',
            'Alaska',
            'American Samoa',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'District of Columbia',
            'Federated States of Micronesia',
            'Florida',
            'Georgia',
            'Guam',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Marshall Islands',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Carolina',
            'North Dakota',
            'Northern Mariana Islands',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Palau',
            'Pennsylvania',
            'Puerto Rico',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virgin Island',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming',
            ],
        }
    },
    watch: {
      search (val) {
        val && val !== this.select && this.querySelections(val)
      },
    },
    methods: {
      querySelections (v) {
        this.loading = true
        setTimeout(() => {
          this.items = this.districts.filter(e => {
            return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
          })
          this.loading = false
        }, 500)
      },
      onScroll (e) {
        this.offsetTop = e.target.scrollTop
      },
    }
}
</script>