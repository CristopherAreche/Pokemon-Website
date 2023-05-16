import axios from "axios";
import swal from "sweetalert";

// const API_URL = "https://pokemon-backend-6ohr.onrender.com";
const API_URL = "https://pokemon-backend-hnwn.onrender.com";

export const GET_POKEMONS = "GET_POKEMONS";
export const getAllPokemon = () => {
  return async function (dispatch) {
    const apiData = await axios.get(`${API_URL}/pokemons`);
    return dispatch({ type: GET_POKEMONS, payload: apiData.data });
  };
};

export const GET_POKEMON = "GET_POKEMON";
export const getPokemon = (id) => {
  return async function (dispatch) {
    const apiData = await axios.get(`${API_URL}/pokemons/${id}`);
    return dispatch({ type: GET_POKEMON, payload: apiData.data });
  };
};

export const GET_TYPES = "GET_TYPES";
export const getTypes = () => {
  return async function (dispatch) {
    const apiDataTypes = await axios.get(`${API_URL}/types`);
    const types = apiDataTypes.data;

    dispatch({ type: GET_TYPES, payload: types });
  };
};

export const SET_FILTERED_POKEMONS = "SET_FILTERED_POKEMONS";
export const setFilteredPokemons = (filteredPokemons) => ({
  type: SET_FILTERED_POKEMONS,
  payload: filteredPokemons,
});

export const FILTER_BY_TYPE = "FILTER_BY_TYPE";
export const getFilterType = (type) => async (dispatch) => {
  const apiDataTypes = await axios.get(`${API_URL}/pokemons`);
  const data = apiDataTypes.data;
  const response = data?.filter((e) => e.type?.includes(type));
  if (response) {
    return dispatch({
      type: FILTER_BY_TYPE,
      payload: response,
    });
  } else {
    alert("This Pokemon type is not on the list");
    return dispatch({
      type: FILTER_BY_TYPE,
      payload: data,
    });
  }
};

export const ORDER_DAMAGE = "ORDER_DAMAGE";
export const damageOrder = (damageOrder) => {
  return {
    type: ORDER_DAMAGE,
    payload: damageOrder,
  };
};

export const ORDER = "ORDER";
export const pokemonOrder = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};

export const GET_NAME = "GET_NAME";
export const getPokemonByName = (name) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${API_URL}/pokemons`);
      const apiDataTypes = response.data;
      const pokeFilter = apiDataTypes.filter((e) =>
        e.name.toLowerCase().includes(name.toLowerCase())
      );
      if (!pokeFilter.length) {
        swal("Pokemon not found");
      } else {
        dispatch({
          type: GET_NAME,
          payload: { pokeFilter, length: pokeFilter.length },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
