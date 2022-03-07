<style scoped>
  .texfieldEdit{
          color: #031b4e !important
  }
  .texfieldEdit >>> .v-icon {  
    color:#031b4e !important;
    cursor: pointer !important;
  }
</style>

<template>
  <v-banner
  width="100%"
  >
    <v-row
    no-gutters
    justify="space-between"
    align="baseline"
    >

    <v-avatar :style="styles.avatar">
        <v-icon large :icon="mdiViewList"/>
    </v-avatar>
    <span :style="styles.tableTitle">
      Lista de puertos
    </span>
    <v-col cols="3" >
      <v-text-field
          class="texfieldEdit"
          v-model="usePorts.state.filter"
          single-line
          variant="underlined"
          label="Buscar"
          :append-icon="mdiMagnify"
          :clear-icon="mdiCloseBox"
          clearable
          @click:append="usePorts.loader.filterData"
          @click:clear="usePorts.loader.clearMessage"
          @keyup.enter="usePorts.loader.filterData"
        ></v-text-field>
    </v-col>
    </v-row>
  </v-banner>
</template>

<script>
import {inject} from 'vue'
import { mdiViewList } from '@mdi/js'; 
import { mdiMagnify } from '@mdi/js';
import { mdiCloseBox } from '@mdi/js';

  export default {
    setup(){
      const usePorts = inject('usePortsTable')
       return {
         usePorts
         }
    },
    data: () => ({
      mdiViewList,
      mdiMagnify,
      mdiCloseBox,
       styles:{
        avatar:{
          color: '#031b4e',
          fontSize: '1.1rem',
        },
        tableTitle:{
          fontSize: '2rem',
          weight: 'bold',
          color: '#031b4e',
        },
      }
    }),
  }
</script>

