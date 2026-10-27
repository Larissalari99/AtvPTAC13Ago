import { useEffect, useState } from 'react'

function Exercicio2() {
  const [comentarios, setComentarios] = useState([])

  useEffect(() => {
    async function buscarComentarios() {
      const resposta = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
      const dados = await resposta.json()
      setComentarios(dados)
    }
    buscarComentarios()
  }, [])

  return (
    <div>
      <h1>Comentários do post 1</h1>
      <ul>
        {comentarios.map((c) => (
          <li key={c.id}>
            {c.name} - {c.email}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Exercicio2
