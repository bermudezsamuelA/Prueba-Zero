<template>
  <div class="text-center">
    <v-pagination
      v-model="usePorts.state.pageOn"
      :length="usePorts.state.pages"
      :style="styles.pagination"
    ></v-pagination>
  </div>
</template>

<script>
import {inject} from 'vue'

  export default {
    setup(){
      const usePorts = inject('usePortsTable')
       return {
         usePorts
         }
    },
    data: () => ({
        styles:{  
        pagination:{
          color: '#031b4e'
        },
      }
    }),
  }
</script>