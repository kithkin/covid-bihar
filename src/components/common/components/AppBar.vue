<template>
    <div>
        <v-navigation-drawer
        v-model="primaryDrawer.model"
        :clipped="primaryDrawer.clipped"
        width="90"
        app
        >
            <v-list 
            dense
            nav
            >
                <div class="pl-3">
                    <v-list-item-avatar>
                    <img src="./../../../assets/favicon.png">
                    </v-list-item-avatar>
                </div>

                <v-divider></v-divider>
                
                <v-list-item
                v-for="item in items"
                :key="item.title"
                link
                >
                    <router-link :to="item.link" style="text-decoration: none;">
                    
                    <v-list-item-icon :class="item.iconClass">
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title :class="item.textClass">{{ item.title }}</v-list-item-title>
                    </v-list-item-content>

                    </router-link>
                   

                </v-list-item>
                
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
            />
            <div class="pt-2">
                <router-link to="/covid-bihar">
                <v-img :src="require('@/assets/logoHi.png')" height="136" width= "136"/>
                </router-link>
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
                { icon: 'mdi-home-circle', iconClass: 'pl-4', title: 'मुख्य पृष्ठ', link: '/covid-bihar', textClass: 'font-weight-bold pl-1' },
                { icon: 'mdi-help-circle', iconClass: 'pl-4', title: 'हमारे बारे में', link: '/covid-bihar/about', textClass: 'font-weight-bold' },
            ]
        }
    },
  }
</script>
