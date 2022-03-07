<template>
    <v-col
    cols=11
    align-self='end'
    :style="styles.colHeader"
    >
         <v-img
            :aspect-ratio="16/9"
            :width="180"
            src="https://cargofive.com/wp-content/uploads/2018/07/logo.svg"
            ></v-img>        
    </v-col>
</template>

<script>
  export default {
    data: () => ({
       styles:{
        colHeader:{
          paddingLeft: '2rem'
        }
      }
    }),
  }
</script>