<template>
  <router-link :to="'/detalle/' + name" tag="div" class="list-item">{{name}}</router-link>
</template>

<script>
export default {
  name: "PokemonListItem",
  props: {
    name: String
  }
};
</script>

<style scoped>
.list-item {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  font-weight: bold;
  color: #2c3e50;
  padding: 8px 16px;
  margin: 4px auto;
  cursor: pointer;
  border: 2px solid black;
  border-radius: 5px;
  background-color: #42b983;
}
</style>