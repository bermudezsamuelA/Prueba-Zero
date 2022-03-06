<template>
  <v-app>
    <v-main>
      <TableContainer
      :ports="ports"
      />
    </v-main>
  </v-app>
</template>

<script>
import TableContainer from './components/TableContainer.vue'
export default {
  name: 'App',

   methods: {
    async getPorts() {
      try{
        const {data:{data}} = await this.axios.get()
        this.ports = data
      }catch(e){
        console.log('error',e)
      }
      },
   },
  data(){
    return{
      ports: []
    }
  },
  components: {
    TableContainer,
  },
  beforeMount() { 
    this.getPorts()
  },


}
</script>
