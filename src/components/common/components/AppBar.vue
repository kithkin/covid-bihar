<template>
    <div>
        <v-navigation-drawer
        v-model="primaryDrawer.model"
        :clipped="primaryDrawer.clipped"
        width="140"
        app
        >
            <v-list 
            dense
            nav
            >
                <div class="text-center">
                    <v-list-item-avatar>
                    <img src="./../../../assets/favicon.png">
                    </v-list-item-avatar>
                </div>

                <v-divider></v-divider>
                <router-link to="/covid-bihar/about" style="text-decoration: none;">
                <v-list-item
                v-for="item in items"
                :key="item.title"
                link
                >
                    
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                   

                </v-list-item>
                </router-link>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar
        :clipped-left="primaryDrawer.clipped"
        color="blue lighten-2"
        dark
        app
        >
            <v-app-bar-nav-icon
            @click.stop="primaryDrawer.model = !primaryDrawer.model"
            class="ml-1"
            />
            <div class="pt-2">
                <v-img :src="require('@/assets/logoHi.png')" height="136" width= "136"/>
            </div>  
            <v-spacer />
            <v-switch
            v-model="$vuetify.theme.dark"
            class="mt-5"
            />
            <span>
                डार्क मोड
            </span>
        </v-app-bar>
    </div>
</template>

<script>
//   import Drawer from './Drawer.vue'

  export default {
    name: 'AppBar',
    components: {
        // Drawer
    },
    data() {
        return {
            primaryDrawer: {
                model: false,
                type: 'default (no property)',
                clipped: true,
            },
            items: [
                { icon: 'mdi-help-circle', title: 'हमारे बारे में' } 
            ]
        }
    },
  }
</script>
