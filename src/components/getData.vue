<template>
  <div>
      <h2>{{count}}</h2>
      <h3>id:{{id}}</h3>
      <h3>num:{{num}}</h3>
  </div>
</template>
<script>
import {state,mapGetters} from 'vuex'
export default {
  computed:{
      count(){
          return this.$store.state.count
      },
      id(){
          return this.$route.params.id
      },
      num(){
         return this.$route.query.num 
      }
  }
}
</script>

