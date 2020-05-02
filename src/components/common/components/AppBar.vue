<template>
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
        <div class="pt-4">
            <v-img :src="require('@/assets/logo.png')" height="60" width= "190"/>
        </div>  
        <v-spacer />
        <v-switch
        v-model="$vuetify.theme.dark"
        class="mt-5"
        />
        <span>
            Dark
        </span>
    </v-app-bar>
</template>

<script>
  export default {
    name: 'AppBar',
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
