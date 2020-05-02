<template>
    <v-navigation-drawer
    v-model="model"
    clipped="clipped"
    app
    >
    </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'Drawer',
    props: ['model', 'clipped'],
  }
</script>
