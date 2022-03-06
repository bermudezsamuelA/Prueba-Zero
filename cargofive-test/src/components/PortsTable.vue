<template>
    <v-col
    cols=10
    >
      <v-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left" v-for="(title,key) in headers" :key="key">
                {{title}}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, key) in desserts"
              :key="key"
            >
              <td>{{ item.name }}</td>
              <td>{{ item.calories }}</td>
            </tr>
          </tbody>
        </template>
      </v-table>
  </v-col>
</template>

<script>
  export default {
    props:[ 'ports'],
    methods: {
      itemHeaders() {
        const keys = Object.keys(this.ports[0]).filter(item=> item !='id')
        this.headers= keys
      },
      separatedPorts(){
        this.ports.length
      }
    },
    data () {
      return {
        headers: [],
        paginationPorts:[],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          {
            name: 'Cupcake',
            calories: 305,
          },
          {
            name: 'Gingerbread',
            calories: 356,
          },
          {
            name: 'Jelly bean',
            calories: 375,
          },
          {
            name: 'Lollipop',
            calories: 392,
          },
          {
            name: 'Honeycomb',
            calories: 408,
          },
          {
            name: 'Donut',
            calories: 452,
          },
          {
            name: 'KitKat',
            calories: 518,
          },
        ],
      }
    },
    mounted() {
      console.log('aqui')
      console.log('this.ports', this.ports)
      console.log('this.ports.length',this.ports.length)
      this.itemHeaders()
      this.separatedPorts()
      console.log(this.headers)
            console.log(this.paginationPorts)

    }

  }
</script>