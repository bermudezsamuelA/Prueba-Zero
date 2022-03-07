<template>
    <v-col
    cols=10
    :style="styles.tableCol"
    >
    <TableHeader/>
      <v-table
      :style="styles.table"
      >
          <thead >
            <tr>
              <th 
              v-for="(header,key) in usePorts.state.headers" 
              :key="key"
              :style="styles.columnTitle"
              >
                {{header.name}}
                <v-icon 
                large 
                :icon="header.name !=='Coordinates'?header.active? mdiMenuDown:mdiMenuUp: mdiMapMarker "
                @click="usePorts.loader.sortPorts(header.name)"
                />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="port in usePorts.state.paginationPorts[usePorts.state.pageOn-1]"
              :key="port.id"
            >
              <td :style="styles.cellContent">{{ port.name }}</td>
              <td :style="styles.cellContent">{{ port.country }}</td>
              <td :style="styles.cellContent">{{ port.continent }}</td>
              <td :style="styles.cellContent">{{ port.coordinates }}</td>
            </tr>
          </tbody>
      </v-table>
      <TablePagination />
  </v-col>
</template>

<script>
import { mdiMenuUp  } from '@mdi/js'; 
import { mdiMenuDown } from '@mdi/js'; 
import { mdiMapMarker } from '@mdi/js'; 
import TablePagination from './TablePagination.vue';
import TableHeader from './TableHeader.vue'
import {inject} from 'vue'

  export default {
    setup(){
      const usePorts = inject('usePortsTable')
       return {
         usePorts
         }
    },
    data: () => ({
      mdiMenuUp,
      mdiMenuDown,
      mdiMapMarker,
        styles:{
        tableCol:{
          padding: 0,
          margin: 0,
          height:  '80vh',
          width: '100%'
        },
        table:{
          height:  '80%',
          width: '100%'
        },
        columnTitle:{
          textAlign: 'left',
          fontSize: '1rem',
          width: '25%',
          color: '#031b4e'
        },
        cellContent:{
          width: '25%',
        },
      }
    }),
    methods:{
      async getTheCallings(){
        await this.usePorts.loader.getPorts()
      }
    },
      components:{
        TablePagination,
        TableHeader,
      },
      beforeMount() { 
        this.getTheCallings()
      },
  }
</script>