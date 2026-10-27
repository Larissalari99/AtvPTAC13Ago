import { useEffect, useState } from 'react'

const URL = 'https://jsonplaceholder.typicode.com/users'

// Exercício 3: AbortController.
// Ao desmontar o componente, o cleanup do useEffect cancela a requisição.
export default function Exercicio3() {
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
        setUsuarios(data)
      } catch (err) {
        // Cancelar lança AbortError. Não é erro de verdade:
        // o componente já saiu da tela, então não atualizamos o estado.
        if (err.name === 'AbortError') {
          console.log('Requisição cancelada (AbortError)')
          return
        }
        setErro(err.message)
      } finally {
        if (!controller.signal.aborted) setCarregando(false)
      }
    }
    carregar()

    // Cleanup: roda ao desmontar (e antes de o efeito rodar de novo).
    return () => controller.abort()
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