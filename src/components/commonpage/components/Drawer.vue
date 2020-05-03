<template>
    <v-navigation-drawer
    v-model="model"
    clipped="clipped"
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

            <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            >   
                <router-link to="/covid-bihar/about">
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
                </router-link>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'Drawer',
    props: ['model', 'clipped'],
    data() {
        return {
            items: [
                { icon: 'mdi-help-circle', title: 'About' } 
            ]
        }
    }
  }
</script>
