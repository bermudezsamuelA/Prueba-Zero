<template>
    <v-col
    cols=10
    >
    <TableHeader/>
      <v-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left" v-for="(header,key) in usePorts.state.headers" :key="key">
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
              <td>{{ port.name }}</td>
              <td>{{ port.country }}</td>
              <td>{{ port.continent }}</td>
              <td>{{ port.coordinates }}</td>
            </tr>
          </tbody>
        </template>
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