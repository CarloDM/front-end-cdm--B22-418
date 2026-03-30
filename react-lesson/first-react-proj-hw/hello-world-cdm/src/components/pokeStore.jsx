import { useEffect, useState } from "react";  
import POKEMON_NAME_LIST from "../js/pokemonNameList"
import myMath from "../js/mathFunction"
import PokeSellCard from "./ui/PokeSellCard";
import axios from "axios";

//  esercizio
//  lista prodotti lista prezzo dei prodotti pokemon
//  creare popolare uno scontrino con id per ogni prodotto
//  subtotale e totale con l iva a 22%
//  calcolare il totale dei prezzi

// sotto 60 leggeri ; sotto 90 normali; sotto 110 forti; sotto 130 rari; sopra 130 speciali;

const PREZZI = [12.3 , 22, 46, 11.99, 7.49, 33, 55, 55.89, 99.90];


function PokeStore() {

  const [pokeInfo, setPokeInfo] = useState(null); 


    useEffect(() => {

      pokemonInfoGenerate(setPokeInfo)


    }, []);


  return (
    <>
      {/* <img className="pokeCard" src={ pokeInfo?.sprites.other.dream_world.front_default } alt="" />  */}
      {/* <img className="pokeCard" src={ pokeInfo?.sprites.other.showdown.front_default } alt="" /> */}

      <PokeSellCard
        nome=   { pokeInfo?.name }
        id=     { pokeInfo?.id }
        prezzo= { PREZZI[myMath.randomBetween(0, PREZZI.length - 1)] }
        imgUrl= { pokeInfo?.sprites.other.dream_world.front_default }
      />

      <button
        onClick={() => pokemonInfoGenerate(setPokeInfo)}
      >bottone</button>
    </>
  );

}//pokeStore

function pokemonInfoGenerate(setPokeInfo){

  let poke = {
    id: null,
    hp : null,
    attak : null,
    defense : null,
    specialAttack : null,
    specialDefence : null,
    speed : null,
    weight : null,

    score: null
  };
  
      async function fetchData() {

      try {
        
        const data = await callPokemonInfo(myMath.randomBetween(0, POKEMON_NAME_LIST.POKEMON_NAME_LIST.length - 1));
        //scrive

        poke.id =             data.id
        poke.hp =             data.stats[0].base_stat
        poke.attak =          data.stats[1].base_stat
        poke.defense =        data.stats[2].base_stat
        poke.specialAttack =  data.stats[3].base_stat
        poke.specialDefence = data.stats[4].base_stat
        poke.speed =          data.stats[5].base_stat
        poke.weight =         data.weight
        poke.score = scoreGen(poke);
        
        setPokeInfo(data);    
        console.log("poke obj", poke);

      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
}

function scoreGen(p){

    //score formula = hp + attak + defence + speed + (weight / 10)
    const score =  p.hp * 0.15 + 
                  (p.attak + p.specialAttack) * 0.2 +
                  (p.defense + p.specialDefence) * 0.2 +
                   p.speed * 0.1 +
                  (p.weight / 10) * 0.1 ;
    
    console.log('score: ' + score);
    

  return score;
}

async function callPokemonInfo(id) {

  const response = await axios.get(
    'https://pokeapi.co/api/v2/pokemon/' + id
  );

  return response.data;

}

function test() {
  console.log('click test')
}

export default PokeStore;