<template>
    <div>
      <input type="text" required v-model="FormData.name" placeholder="Nombres" class="input-class" />
      <input type="text" required v-model="FormData.lastname" placeholder="Apellidos" class="input-class" />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
       FormData:{
        name: '',
        lastname: '',
       }
      }
    },
      watch:{
        FormData:{
          handler(newVal){
            this.$emit("data",newVal)
          },
          deep:true
        }
    }
  }
  </script>
  