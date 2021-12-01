<template>  
<div class="container">
  <b-form-input v-model="pokemonName" placeholder="Enter Pokemon name"></b-form-input>
  <b-button @click="getPokemon">Search</b-button>
  <b-card no-body class="overflow-hidden" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img :src="imageUrl + pokemon.id + '.png'" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body title="Pikachu">
          <b-card-text>
            {{pokemonName}}This is a wider card with supporting text as a natural lead-in to additional content.
            This content is a little bit longer.
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
      pokemonName: '',
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
