import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})


Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		hellow: "hellow",
		lists: [
			{name: 'foo1',id: 1},
			{name: 'foo2',id: 2},
			{name: 'foo3',id: 3}
		]
	},
	mutations:{
		setList(state,val){ // set title to vuex state
		  state.lists = val;
		}
	},
	actions:{},
	getters:{
		lists: state => state.lists
	},
	computed:{},
	modules:{},
	plugins: [vuexLocal.plugin]
})