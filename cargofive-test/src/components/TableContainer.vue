<template>
  <v-container fluid class="grey lighten-5">
    <v-row
      justify="center"
      no-gutters
      key='header'
    >
      <HeaderView/>
    </v-row>

     <v-row
      class="mb-6"
      justify="center"
      no-gutters
      key='table'

    >
    <PortsTable
    />
    </v-row>

  </v-container>
</template>

<script>
import HeaderView from './HeaderView.vue'
import PortsTable from './PortsTable.vue'
  export default {
    components:{
      HeaderView,
      PortsTable,
    },
  }
</script>