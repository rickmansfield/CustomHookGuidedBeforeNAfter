import axios from 'axios';
import data from './../../data.js';

export const getPokemen = () => {
  return (data);
}// this one gets all of them

export const getPokemon = (id) => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => {
      return (res.data);
    })
}// this one gets just one of them and we can map over it to extrac key:value pairs. 
