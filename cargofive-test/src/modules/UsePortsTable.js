import { reactive } from "vue";
import axios from "axios";

const state = reactive({
  ports: [],
  sortedPorts:[],
  headers:[],
  paginationPorts:[],
  pageOn: 1,
  pages:0,
  filter:'',
})

const loader ={

  async getPorts(){
    try{
      const {data:{data}} = await axios.get()
      state.ports = data
      loader.itemHeaders()
    }catch(e){
      console.log('error',e)
    }
  },

  itemHeaders() {
    const keys = state.ports[0]? Object.keys(state.ports[0]).filter(item=> item !='id'): '';
    const keysCapitalized = keys.map( key => ({ name: key.charAt(0).toUpperCase() + key.slice(1), active: key==='name'?true:false}))
    state.headers= keysCapitalized
    loader.sortPorts('Name')
  },

  separatedPorts(portsToSeparate = state.sortedPorts){
    let chunks = [],
        i = 0,
        n = portsToSeparate.length;

    while (i < n) {
      chunks.push(portsToSeparate.slice(i, i += 10));
    }
     const paginationNumber = chunks.length

    state.paginationPorts = chunks
    state.pages = paginationNumber
    state.pageOn=1;
  },

  clearMessage(){
    state.filter = ''
    loader.separatedPorts()
  },

  filterData(){
    if (state.filter){
      const portsFiltred = state.sortedPorts.filter(port =>{
        let included = false
        state.headers.forEach(key => {
          const keyLowerCase = key.name.toLowerCase()
          if(port[keyLowerCase]){
            if(port[keyLowerCase].toLowerCase() === state.filter.toLowerCase()) included = true
          }
        })
        return included
      })
      state.pageOn=1;
      loader.separatedPorts(portsFiltred);
    }
  },

  sortPorts( orderBy ){
    if( orderBy !== 'Coordinates'){
      const sortedPorts = state.ports.sort((portA,portB)=>{
          return portA[orderBy.toLowerCase()].toLowerCase() > portB[orderBy.toLowerCase()].toLowerCase()? 1: portA[orderBy.toLowerCase()].toLowerCase() < portB[orderBy.toLowerCase()].toLowerCase()? -1:0
        })
      state.headers = state.headers.map( header =>({
        ...header,
        active: header.name === orderBy? true:false
      }))
      state.sortedPorts = sortedPorts
      if (state.filter) loader.filterData()
      else loader.separatedPorts()
    }
  }
}
export default ({
  state,
  loader
})