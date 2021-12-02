<template>  
<div class="container">
  <b-container class="p-2">
    <b-row no-gutters cols="2" class="p-1">
      <b-col md="10"><b-form-input v-model="pokemonName" placeholder="Enter Pokemon name"></b-form-input></b-col>
      <b-col md="2"><b-button block @click="getPokemon" variant="primary">Search</b-button></b-col>
    </b-row>
    <b-alert 
      :show="dismissCountDown"
      dismissible
      variant="warning"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
      >Pokemon not Found
      <b-progress
        variant="warning"
        :max="dismissSecs"
        :value="dismissCountDown"
        height="4px"
      ></b-progress></b-alert>
  </b-container>
  <b-card no-body class="overflow-hidden">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img :src="imageUrl + pokemon.id + '.png'" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6" v-if="pokemon.id != 0">
        <b-card-body v-bind:title="pokemon.name">
          <b-card-text>
            <div class="d-flex justify-content-between">
              <div>
                <b>Type:</b>
                <span v-for="(typeObject, index) in pokemon.types" :key="'value'+index">
                  <span class="m-1 badge badge-primary">{{ typeObject.type.name}}</span>
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
            <b-container class="m-3 text-left">
              <b-row cols="2" v-for="(stat, index) in pokemon.stats" :key="'value'+index">
                <b-col>{{ stat.stat.name }}</b-col>
                <b-col>{{ stat.base_stat }}</b-col>
              </b-row>
            </b-container>
          </b-card-text>
        </b-card-body>
      </b-col>
      <b-col md="6" v-if="pokemon.id == 0">
        <b-card-body>
          <b-card-text>
            <div class="d-flex justify-content-center">
              <div>
                <p>Pokemon not found</p>
                <b>Enter a valid Pokemon Name</b>
              </div>
            </div>
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
      pokemonName: '',
      pokemon: null,
      dismissSecs: 5,
      dismissCountDown: 0,
      showDismissibleAlert: false
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
            if(this.pokemon.url) {
              this.pokemon.id = this.pokemon.url.split('/').filter( function(part){
              return !!part}).pop();
            }
        })
        .catch(error => {
          console.error(error);
           this.dismissCountDown = this.dismissSecs
        });
    },
    setDefault() {
      this.pokemon = {
        id:'0',
      };
    },
    countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
    } 
  },
  created() {
    this.setDefault();
    console.log(this.pokemon);
  }
}
</script>

<style scoped>
</style>
