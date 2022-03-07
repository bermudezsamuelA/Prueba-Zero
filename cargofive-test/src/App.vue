<template>
  <v-app>
    <v-main>
      <TableContainer
      />
    </v-main>
  </v-app>
</template>

<script>
import TableContainer from './components/TableContainer.vue'
import usePortsTable from './modules/UsePortsTable'
import {provide} from 'vue'
export default {
  setup(){
    provide('usePortsTable',usePortsTable)
  },
  name: 'App',
  components: {
    TableContainer,
  },
}
</script>
