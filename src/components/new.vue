<template>
  <div>
      <div v-for="item in news" :key="item.id" @click="itemClick(item.name)">
          <span>{{item.id}}</span><h2>{{item.name}}</h2>
      </div>
  </div>
</template>
<script>
export default {
  props:['news'],
  methods:{
      itemClick(txt){
          this.$emit('getData',txt)
      }
  }
}
</script>

