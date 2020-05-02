<template>
    <v-navigation-drawer
    v-model="primaryDrawer.model"
    :clipped="primaryDrawer.clipped"
    app
    >
    </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'Drawer',
    data() {
        return {
            primaryDrawer: {
                model: false,
                type: 'default (no property)',
                clipped: true,
            }
        }
    },
  }
</script>
