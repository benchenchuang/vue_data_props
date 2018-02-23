<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
    <!-- <data-new :news="new_year" v-on:getData="val=>sendData(val)"></data-new> -->
    <data-new :news="new_year" @getData="sendData"></data-new>
    <h1>Store Data</h1>
    <h2>{{count}}</h2>
    <p>过滤的数据是：{{getData}}</p>
    <div>
      <button @click="increate">increate按钮1</button>
      <button @click="increment({count:4})">increment按钮2</button>

      <button @click="addCount">increate按钮3</button>
      <button @click="addCrement(5)">increment按钮4</button>

      <button @click="addincreate">increate按钮5</button>
      <button @click="addincrement({count:3})">increment按钮6</button>

      <button @click="actionCrement({count:3})">increment按钮7</button>
    </div>

    <router-link to="count">查看数据</router-link>

    <router-link :to="{name:'count',params:{id:123},query:{num:2}}">跳转数据</router-link>
  </div>
  
</template>

<script>
import dataNew from './new'
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
  name: 'HelloWorld',
  components:{
    dataNew
  },
  data () {
    return {
      new_year:[
        {
          id:0,
          name:'2016'
        },
        {
          id:1,
          name:'2017'
        },{
          id:2,
          name:'2018'
        }
      ],
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
    ...mapGetters({
      getData:'getTodo',
      count:'count'
    })
    // getData(){
    //   return this.$store.getters.getTodo
    // }
  },
  methods:{
    sendData(val){
      alert(val)
    },
    addCount(){
      this.$store.commit('increate')
    },
    addCrement(count){
      this.$store.commit('increment',{count:count})
    },
    actionCrement(count){
      this.$store.dispatch('addincrement',count)
    },
    ...mapMutations([
      'increate',
      'increment'
    ]),
    ...mapActions([
      'addincreate',
      'addincrement'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
