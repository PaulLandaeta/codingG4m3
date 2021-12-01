<template>
  <div id="app">
    <PokeCard 
      :imageUrl="imageUrl" 
      :pokemonUrl="pokemonUrl"/>
  </div>
</template>

<script>
import PokeCard from './components/PokeCard.vue'

export default {
  name: 'App',
  data: () => {
      return {
        imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/',
        pokemonUrl: 'https://pokeapi.co/api/v2/pokemon/',
        showDetail: false
      }
    },
  components: {
    PokeCard
  }
}
</script>

<style lang="scss">
@import "~@/assets/scss/vendors/bootstrap-vue/index";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
