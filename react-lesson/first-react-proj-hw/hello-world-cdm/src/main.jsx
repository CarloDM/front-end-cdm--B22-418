// Importa StrictMode da React.
// Serve SOLO in sviluppo per segnalare pratiche sbagliate o potenziali bug.
// Non ha effetto in produzione.
import { StrictMode } from 'react'

// Importa createRoot da react-dom/client.
// È il nuovo sistema di rendering introdotto da React 18 (più moderno e performante).
import { createRoot } from 'react-dom/client'

// Importa il file CSS globale dell'app.
// Qui dentro di solito metti reset, stili base, bootstrap ecc.
import './index.scss'

// Importa il componente principale dell'app.
// App è il "contenitore root" di tutti gli altri componenti.
import App from './App.jsx'

// Trova nel DOM reale (HTML) l'elemento con id="root"
// e crea una "radice React" dentro cui verrà montata l'app.
createRoot(document.getElementById('root')).render(

  // StrictMode avvolge l'app per controlli extra in sviluppo.
  // Esempio: rileva effetti collaterali, doppie esecuzioni, API deprecate.
  <StrictMode>

    {/* App è il componente principale che verrà renderizzato */}
    <App />

  </StrictMode>,

)
