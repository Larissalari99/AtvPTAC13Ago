import { useEffect, useState } from 'react'
import ListaUsuarios from './ListaUsuarios.jsx'

// Exercício 5: o App guarda o estado e faz o fetch (uma única vez).
// O ListaUsuarios só recebe por props e faz o map.
function App() {
  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    async function buscarUsuarios() {
      const resposta = await fetch('https://jsonplaceholder.typicode.com/users')
      const dados = await resposta.json()
      setUsuarios(dados)
    }
    buscarUsuarios()
  }, [])

  return (
    <div>
      <h1>Usuários</h1>
      <ListaUsuarios usuarios={usuarios} />
    </div>
  )
}

export default App
