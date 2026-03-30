import axios from "axios";
import { useEffect, useState } from "react";  
import POKEMON_NAME_LIST from "../js/pokemonNameList"
import myMath from "../js/mathFunction"

//  esercizio
//  lista prodotti lista prezzo dei prodotti pokemon
//  creare popolare uno scontrino con id per ogni prodotto
//  subtotale e totale con l iva a 22%
//  calcolare il totale dei prezzi

const PREZZI = [12.3 , 22, 46, 11.99, 7.49, 33, 55, 55.89, 99.90];


function PokeStore() {

  const [pokeInfo, setPokeInfo] = useState(null); 

    useEffect(() => {
    async function fetchData() {
      try {
        const data = await callPokemonInfo(myMath.randomBetween(0, POKEMON_NAME_LIST.POKEMON_NAME_LIST.length - 1));
        setPokeInfo(data);    
        console.log("poke info", data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);


  return (
    <>
      <h1>PokeStore</h1>
      <p>{pokeInfo?.name}</p>
      <p>id : {pokeInfo?.id}</p>
      <p>prezzo: {PREZZI[myMath.randomBetween(0, PREZZI.length - 1)]}</p>
      <img className="pokeCard" src={ pokeInfo?.sprites.other.dream_world.front_default } alt="" />
    </>
  );

}//pokeStore

async function callPokemonInfo(id) {

  const response = await axios.get(
    'https://pokeapi.co/api/v2/pokemon/' + id
  );

  return response.data;

}

export default PokeStore;