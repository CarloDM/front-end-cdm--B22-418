import ItemHello from "./hello/ItemHello";


// Componente funzionale base
function Hello() {

  // puoi mettere logica qui
  const nome = "Utente";

  return (
    <header className="hello-box">

      <h1>Ciao, {nome} 👋</h1>
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