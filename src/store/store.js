import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const store=new Vuex.Store({
    state:{
        count:0,
        todos:[
            {id:1,text:'First txt',done:true},
            {id:2,text:'Second txt',done:false}
        ]
    },
    getters:{
        getTodo:state=>{
            return state.todos.filter(todo=>todo.done)
        },
        count:state=>{
            return state.count;
        }
    },
    mutations:{
        increate(state){
            state.count++;
        },
        increment(state,payload){
            state.count+=payload.count
        }
    },
    actions:{
        addincreate(context){
            context.commit('increate')
        },
        addincrement({commit},payload){
            commit('increment',payload)
        }
    }
})