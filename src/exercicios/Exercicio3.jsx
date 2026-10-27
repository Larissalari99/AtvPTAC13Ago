import { useEffect, useState } from 'react'

function Exercicio3() {
  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    async function buscarUsuarios() {
      const resposta = await fetch('https://reqres.in/api/users?page=2', {
        // O reqres.in passou a exigir uma chave. Se der 401, gere uma
        // chave grátis no site e troque o valor abaixo.
        headers: { 'x-api-key': 'reqres-free-v1' },
      })
      const dados = await resposta.json()
      // A resposta é { page, per_page, total, total_pages, data: [...] }
      // então a lista de usuários está em dados.data
      setUsuarios(dados.data)
    }
    buscarUsuarios()
  }, [])

  return (
    <div>
      <h1>Usuários (página 2)</h1>
      <ul>
        {usuarios.map((u) => (
          <li key={u.id}>
            {u.first_name} {u.last_name} - {u.email}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Exercicio3
