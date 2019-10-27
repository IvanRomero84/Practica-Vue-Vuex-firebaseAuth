import axios from 'axios'


const initialState = {
    loading: false,
    pokemon: [],
};

const actions = {
    traerPokemons({ commit }) {
        commit('startLoad');
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(request => {
                console.log(request)
                commit('guardarPokemons', request.data.results)

            })
            .catch(() => {
                console.log('Ha fallado la carga')
            })
            .finally(() => {
                commit('endLoad');
            })
    },
    traerPokemon({ commit }, nombre) {
        commit('startLoad');
        return axios.get('https://pokeapi.co/api/v2/pokemon/' + nombre)
            .then((response) => {
                commit('guardarPokemonInfo', response.data)
                return response.data
            })
            .catch(() => {
                console.log('Ha fallado la carga')
            })
            .finally(() => {
                commit('endLoad');
            })
    },
};

const mutations = {
    startLoad(state) {
        state.loading = true
    },
    endLoad(state) {
        state.loading = false
    },
    guardarPokemons(state, lista) {
        state.lista = lista
    },
    guardarPokemonInfo(state, datos) {
        console.log(datos)
        for (let i = 0; i < state.lista.length; i += 1) {
            if (state.lista[i].name == datos.name) {
                state.lista[i].info = datos;
                break;
            }
        }
    }
};

const getters = {
    getPokemonByName(state) {

        //return 'Hola mundo' + state.loading
        return (nombre) => {
            // return 'Hola ' + nombre + ' - ' + state.loading
            return state.lista.filter(item => {
                return item.name == nombre
            })
        }
    }

};


export default {
    namespaced: true,
    state: initialState,
    getters,
    actions,
    mutations,
};