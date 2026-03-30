function PokeSellCard({ nome, id, punteggio, peso, imgUrl }) {
  return (
        <>

          <div className="pokeCardContainer">

              <p>{nome}</p>
              <p>id : {id}</p>
              <p>punteggio: {punteggio}</p>
              <p>Kg: {peso / 100 }</p>
              {/* mantenere */}
              <img className="pokeCard" src={ imgUrl } alt="" /> 
              {/* <img className="pokeCard" src={ pokeInfo?.sprites.other.showdown.front_default } alt="" /> */}

          </div>
        </>
  )
}

export default PokeSellCard;