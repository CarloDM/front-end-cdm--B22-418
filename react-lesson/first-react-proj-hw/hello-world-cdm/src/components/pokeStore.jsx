import { useEffect, useState } from "react";  
import POKEMON_NAME_LIST from "../js/pokemonNameList"
import myMath from "../js/mathFunction"
import PokeSellCard from "./ui/PokeSellCard";
import axios from "axios";

//  esercizio
//  lista prodotti lista prezzo dei prodotti pokemon
//  creare popolare uno scontrino con id per ogni prodotto
//  subtotale e totale con l iva a 22%
//  calcolare il totale dei PREZZI

// sotto 50 leggeri ; sotto 90 normali; sotto 110 forti; sotto 130 rari; sopra 130 speciali;

const FASCEPREZZI = [20, 40, 80, 160, 320];


function PokeStore() {

  const [pokeInfo, setPokeInfo] = useState(null); 


    useEffect(() => {

      pokemonInfoGenerate(setPokeInfo)
      
    }, []);

    // logga(pokeInfo)


  return (
    <>
      {/* <img className="pokeCard" src={ pokeInfo?.sprites.other.dream_world.front_default } alt="" />  */}
      {/* <img className="pokeCard" src={ pokeInfo?.sprites.other.showdown.front_default } alt="" /> */}

      <PokeSellCard
        nome=   { pokeInfo?.nome }
        id=     { pokeInfo?.id }
        punteggio= { pokeInfo?.score }
        // prezzo= { FASCEPREZZI[myMath.randomBetween(0, FASCEPREZZI.length - 1)] }
        imgUrl= { pokeInfo?.imgUrlSvg }
      />

      <button
        onClick={() => pokemonInfoGenerate(setPokeInfo)}
      >bottone</button>
    </>
  );

}//pokeStore

function pokemonInfoGenerate(setPokeInfo){

  let poke = {
    nome: null,
    id: null,
    hp : null,
    attak : null,
    defense : null,
    specialAttack : null,
    specialDefence : null,
    speed : null,
    weight : null,

    imgUrlSvg : null,
    score: null
  };
  
      async function fetchData() {

      try {
        
        const data = await callPokemonInfo(myMath.randomBetween(0, POKEMON_NAME_LIST.POKEMON_NAME_LIST.length - 1));
        //scrive
        poke.nome =           data.name
        poke.id =             data.id
        poke.hp =             data.stats[0].base_stat
        poke.attak =          data.stats[1].base_stat
        poke.defense =        data.stats[2].base_stat
        poke.specialAttack =  data.stats[3].base_stat
        poke.specialDefence = data.stats[4].base_stat
        poke.speed =          data.stats[5].base_stat
        poke.weight =         data.weight
        poke.imgUrlSvg =      data.sprites.other.dream_world.front_default

        poke.score = scoreGen(poke);

        setPokeInfo(poke);    
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

function logga (param) {
  console.log('logga:::::' ,  param)
}

async function callPokemonInfo(id) {

  const response = await axios.get(
    'https://pokeapi.co/api/v2/pokemon/' + id
  );

  return response.data;

}

export default PokeStore;