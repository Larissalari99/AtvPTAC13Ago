import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Para testar outro exercício, troque o import acima por, por exemplo:
// import App from './exercicios/Exercicio1.jsx'
// StrictMode foi removido de propósito: em modo dev ele roda o useEffect
// duas vezes e a requisição apareceria duplicada no Network.
createRoot(document.getElementById('root')).render(<App />)
