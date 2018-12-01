<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <draggable v-model="vlist" @start="drag=true" @end="drag=false">
	   <div v-for="row in vlist" :key="row.id">{{row.name}}</div>
	</draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'HelloWorld',
  components: {
	draggable
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){
	console.log(this.$store.getters.lists)
  },
  
  computed:{
	vlist:{
		get(){
			return this.$store.getters.lists
		},
		set(val){
			this.$store.commit('setList',val)
		}
	}
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
