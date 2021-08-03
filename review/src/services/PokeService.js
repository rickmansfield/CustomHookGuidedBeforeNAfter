import axios from 'axios';
import data from './../../data.js';

export const getPokemen = () => {
  return (data);
}

export const getPokemon = (id) => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => {
      return (res.data);
    })
}