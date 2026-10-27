import { useEffect, useState } from 'react'

const URL_REAL = 'https://jsonplaceholder.typicode.com/users'


function esperar(ms, signal) {
  return new Promise((resolve, reject) => {
    const id = setTimeout(resolve, ms)
    signal.addEventListener('abort', () => {
      clearTimeout(id)
      reject(new DOMException('Abortado', 'AbortError'))
    })
  })
}


export default function StatusAPI({ url = URL_REAL, atrasoMs = 0, vazio = false }) {
  const [dados, setDados] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    async function carregar() {
      try {
        setCarregando(true)
        setErro(null)

        if (atrasoMs > 0) await esperar(atrasoMs, controller.signal)

        const resp = await fetch(url, { signal: controller.signal })
        if (!resp.ok) throw new Error(`HTTP ${resp.status}`)

        const data = vazio ? [] : await resp.json()
        setDados(data)
      } catch (err) {
        if (err.name === 'AbortError') return
        setErro(err.message)
      } finally {
        if (!controller.signal.aborted) setCarregando(false)
      }
    }
    carregar()

    return () => controller.abort()
  }, [url, atrasoMs, vazio])

  if (carregando) return <p>Carregando...</p>
  if (erro) return <p>Erro: {erro}</p>
  if (dados.length === 0) return <p>Nenhum item encontrado.</p>
  return <p>Sucesso: {dados.length} itens carregados.</p>
}