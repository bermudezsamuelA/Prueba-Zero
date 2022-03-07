<template>
  <v-banner
  width="100%"
  >
    <v-row
    no-gutters
    justify="space-between"
    align="baseline"
    >

    <v-avatar size="40">
        <v-icon large :icon="mdiViewList"/>
    </v-avatar>
    <span>
      Lista de puertos
    </span>
    <v-col cols="3" >
      <v-text-field
          v-model="usePorts.state.filter"
          single-line
          variant="underlined"
          label="Buscar"
          :prepend-inner-icon="mdiMagnify"
          :clear-icon="mdiCloseBox"
          clearable
          @click:prepend-inner="usePorts.loader.filterData"
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
    }),
  }
</script>