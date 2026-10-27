import { useEffect, useState } from 'react'

const URL = 'https://jsonplaceholder.typicode.com/users'

// Exercício 1: estado de carregamento.
export default function Exercicio1() {
  const [usuarios, setUsuarios] = useState([])
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    async function carregar() {
      const resp = await fetch(URL)
      const data = await resp.json()
      setUsuarios(data)
      setCarregando(false)
    }
    carregar()
  }, [])

  if (carregando) return <p>Carregando...</p>

  return (
    <ul>
      {usuarios.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  )
}