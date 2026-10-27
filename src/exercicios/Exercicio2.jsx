import { useEffect, useState } from 'react'

// Para testar o erro, troque por:
// 'https://jsonplaceholder.typicode.com/usuariosenterrado'
const URL = 'https://jsonplaceholder.typicode.com/users'

// Exercício 2: estado de erro com try/catch.
export default function Exercicio2() {
  const [usuarios, setUsuarios] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState(null)

  useEffect(() => {
    async function carregar() {
      try {
        const resp = await fetch(URL)
        if (!resp.ok) throw new Error(`HTTP ${resp.status}`)
        const data = await resp.json()
        setUsuarios(data)
      } catch (err) {
        setErro(err.message)
      } finally {
        setCarregando(false)
      }
    }
    carregar()
  }, [])

  if (carregando) return <p>Carregando...</p>
  if (erro) return <p>Erro: {erro}</p>

  return (
    <ul>
      {usuarios.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  )
}