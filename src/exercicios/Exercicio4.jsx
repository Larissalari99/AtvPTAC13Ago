import { useEffect, useState } from 'react'

function Exercicio4() {
  const [usuario, setUsuario] = useState(null)

  useEffect(() => {
    async function buscarUsuario() {
      const resposta = await fetch('https://jsonplaceholder.typicode.com/users/5')
      const dados = await resposta.json()
      setUsuario(dados)
    }
    buscarUsuario()
  }, [])

  // Enquanto usuario for null, não tentamos ler usuario.name
  if (usuario === null) {
    return <p>Carregando...</p>
  }

  return (
    <div>
      <h1>{usuario.name}</h1>
      <p>{usuario.email}</p>
    </div>
  )
}

export default Exercicio4
