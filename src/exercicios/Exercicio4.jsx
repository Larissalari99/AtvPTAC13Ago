import { useEffect, useState } from 'react'

const URL = 'https://jsonplaceholder.typicode.com/users'

// Exercício 4: estado de lista vazia.
export default function Exercicio4() {
  const [usuarios, setUsuarios] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    async function carregar() {
      try {
        const resp = await fetch(URL, { signal: controller.signal })
        if (!resp.ok) throw new Error(`HTTP ${resp.status}`)

        const data = await resp.json()
        // Para simular resposta vazia, comente a linha acima e use esta:
        // const data = []

        setUsuarios(data)
      } catch (err) {
        if (err.name === 'AbortError') return
        setErro(err.message)
      } finally {
        if (!controller.signal.aborted) setCarregando(false)
      }
    }
    carregar()

    return () => controller.abort()
  }, [])

  if (carregando) return <p>Carregando...</p>
  if (erro) return <p>Erro: {erro}</p>
  if (usuarios.length === 0) return <p>Nenhum usuário encontrado.</p>

  return (
    <ul>
      {usuarios.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  )
}