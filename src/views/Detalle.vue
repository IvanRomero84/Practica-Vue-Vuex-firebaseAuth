<template>
  <div class="detalle">
    <div class="peticion">
      <input type="text" v-model="pokemon" />
      <button @click="http()">Hacer petición</button>
    </div>

    <div v-if="error">No hemos podido encontrar el pokemon</div>

    <div class="pokemon">
      <h1>{{name}}</h1>
      <img :src="image" class="card" alt width="50%" />
    </div>
  </div>
</template>

<script>
export default {
  name: "detalle",
  data: () => ({
    name: "",
    error: false,
    image: "",
    pokemon: ""
  }),
  methods: {
    http() {
      const pokemonInfo = this.$store.getters["pokemon/getPokemonByName"](
        this.pokemon
      );

      console.log(pokemonInfo);

      if (pokemonInfo.length === 0 || !pokemonInfo[0].info) {
        this.$store
          .dispatch("pokemon/traerPokemon", this.pokemon)
          .then(datos => {
            this.pintarPokemon(datos);
          });
      } else {
        console.log("Ya tenemos la info", pokemonInfo[0].info);
        this.pintarPokemon(pokemonInfo[0].info);
      }
      // this.$store.dispatch('traerPokemon', this.pokemon)
    },
    pintarPokemon(datos) {
      this.error = false;
      this.name = datos.name;
      this.image = datos.sprites.front_default;
    }
  },
  created() {
    this.pokemon = this.$route.params.pokemon || "3";
    this.http();
  }
};
</script>







<style scoped>
.pokemon {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  font-weight: bold;
  color: white;
  padding: 8px 16px;
  margin: 20px auto;
  cursor: pointer;
  border: 2px solid black;
  border-radius: 5px;
  background-color: #42b983;
}
.card {
  background-color: white;
  border: 2px solid black;
  border-radius: 5px;
}
.peticion button {
  background-color: #42b983;
  color: #2c3e50;
  border: 2px solid #2c3e50;
  border-radius: 5px;
  display: block;
  font-weight: bold;
  padding: 1% 10%;
  margin: 5% 34%;
}
.peticion input {
  border: 1px solid #2c3e50;
  border-radius: 5px;
  padding: 5px;
  font-weight: bold;
}
</style>
