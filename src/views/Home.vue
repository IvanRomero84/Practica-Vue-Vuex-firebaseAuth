<template>
  <div class="home">
    <h1 v-if="$store.state.pokemon.loading">Cargando...</h1>
    <hr />
    <PokemonListItem v-for="elm in $store.state.pokemon.lista" :key="elm.numero" :name="elm.name" />
  </div>
</template>

<script>
// @ is an alias to /src
import PokemonListItem from "@/components/PokemonListItem.vue";

export default {
  name: "home",
  components: {
    PokemonListItem
  },
  created() {
    this.$store.dispatch("pokemon/traerPokemons");
  }
};
</script>
