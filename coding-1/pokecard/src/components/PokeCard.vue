<template>  
<div class="container">
  <b-form-input v-model="pokemonName" placeholder="Enter Pokemon name"></b-form-input>
  <b-button @click="getPokemon">Search</b-button>
  <b-card no-body class="overflow-hidden">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img :src="imageUrl + pokemon.id + '.png'" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6" v-if="pokemon">
        <b-card-body v-bind:title="pokemon.name">
          <b-card-text>
            <div class="d-flex justify-content-between">
              <div>
                <b>Type:</b>
                <span v-for="(typeObject, index) in pokemon.types" :key="'value'+index">
                  <span class="badge badge-primary">{{ typeObject.type.name}}</span>
                </span>
              </div>
              </div>
            <div class="d-flex justify-content-between">
              <div>
                <b>Height: </b>
                <span>{{ pokemon.height }} m</span>
              </div>
              <div>
                <b>Weight: </b>
                <span>{{ pokemon.weight }} kg</span>
              </div>
            </div>
            <!-- TODO: convert in a component -->
            <b-container class="bv-example-row mb-3 text-left">
              <b-row cols="2" v-for="(stat, index) in pokemon.stats" :key="'value'+index">
                <b-col>{{ stat.stat.name }}</b-col>
                <b-col>{{ stat.base_stat }}</b-col>
              </b-row>
            </b-container>
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</div>
</template>

<script>
export default {
  name: 'PokeCard',
  props: [
    'imageUrl',
    'pokemonUrl'
  ],
  data: () => {
    return {
      pokemons: [{
        id:''
      }],
      pokemonName: 'pikachu',
      pokemon: {
        id:'2',
      },
      nextUrl: '',
      currentUrl: ''
    }
  },
  methods: {
    getPokemon() {
      let request = new Request(this.pokemonUrl + this.pokemonName+'/');
      fetch(request)
        .then(response => response.json())
        .then(data => {
            this.pokemon = data;
            console.log(this.pokemon);
            if(this.pokemon.url!= '') {
              this.pokemon.id = this.pokemon.url.split('/').filter( function(part){
              return !!part}).pop();
            }
        })
        .catch(error => console.log(error));
    },
    setPokemonUrl(url) {
        this.$emit('setPokemonUrl', url);
      }
  },
  created() {
    this.getPokemon();
    console.log(this.pokemon);
  }
}
</script>

<style scoped>
</style>
