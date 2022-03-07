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
      <v-col
      cols=1
      :style="styles.sideCol"
      >
        <v-img
        :style="styles.sideImg"
        src="side.png"
        ></v-img> 
      </v-col>
      <PortsTable/>
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
    data:()=>({
      styles:{
        sideImg:{
          height: '100%',
        },
        sideCol:{
          padding: 0,
          margin: 0,
          paddingTop: '2rem',
          height:  '81vh',
          width: '2vw',
        }
      }
    })
  }
</script>