import ItemHello from "./hello/ItemHello";
import axios from "axios";
import POKEMON_NAME_LIST from "../js/pokemonNameList"

import myMath from "../js/mathFunction"

const TESTA = 'stringa test';
let chiamata = {};



console.log(POKEMON_NAME_LIST.POKEMON_NAME_LIST.length)
console.log(myMath.randomBetween(0, 1300))

  await axios.get('https://pokeapi.co/api/v2/pokemon/' + 3)
  .then(response => {

    chiamata = response.data;

    console.log(chiamata);
    console.log(chiamata.sprites.other );

  })
  .catch(error =>{
    console.log(error);
  });


// Componente funzionale base
function Hello() {

  // puoi mettere logica qui
  const nome = "Utente";

  return (

    <header className="hello-box">

      <img src={ chiamata.sprites.other.dream_world.front_default } alt="" />

      <h1>Ciao, {nome} 👋</h1>
      <p>{TESTA}</p>
      <p>Prima componente React funzionante.</p>


      <button 
          className="counter my-hw"
          onClick={() => console.log('Ciao! : ' +  nome)}
      >

          ciao {nome};

          <code>  
            onClick=() = console.log(ciao + nome)
          </code>

      </button>

      <p>Aggiungere componente a componente</p>

      <ItemHello />

    </header>


  );
}

// esportazione per usarla altrove
export default Hello;