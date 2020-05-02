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
                <img src="https://randomuser.me/api/portraits/men/81.jpg">
                </v-list-item-avatar>
            </div>

            <v-divider></v-divider>

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
