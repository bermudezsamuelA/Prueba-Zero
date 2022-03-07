import { reactive } from "vue";
import axios from "axios";

// valores de estado
const state = reactive({
  // ports es para guardar los puertos "en bruto"
  ports: [],
  // sortedPorts es los puertos ordenados
  sortedPorts:[],
  headers:[],
  // este es el array que se usa en la tabla, es un array de arrays de objetos
  paginationPorts:[],
  pageOn: 1,
  pages:0,
  filter:'',
})

const loader ={
  // funcion para consumir la api y guardarlo en ports
  async getPorts(){
    try{
      const {data:{data}} = await axios.get()
      state.ports = data
      loader.itemHeaders()
    }catch(e){
      console.log('error',e)
    }
  },
  // funcion para obtener el titulo de las columnas de la tabla
  itemHeaders() {
    const keys = state.ports[0]? Object.keys(state.ports[0]).filter(item=> item !='id'): '';
    const keysCapitalized = keys.map( key => ({ name: key.charAt(0).toUpperCase() + key.slice(1), active: key==='name'?true:false}))
    state.headers= keysCapitalized
    loader.sortPorts('Name')
  },
  // funcion para separar los el array de los puertos ordenas y/o filtrados
  // en partes iguales para la paginacion
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

  // funcion en caso de que se borre el mensaje del filtro
  clearMessage(){
    state.filter = ''
    loader.separatedPorts()
  },

  // funcion para filtrar el array de puertos ordenados
  // revisa en todas las columnas que valor es igual al escrito en el filtro
  // y devuelve un array filtrado para ser separado
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
    } else {
      loader.separatedPorts()
    }
  },

  // siempre se ordenan los puertos, en este caso siempre se ordena primeramente por el Nombre
  // pero nunca se ordena por coordenadas
  // como estableces un orden para las coordenadas?
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