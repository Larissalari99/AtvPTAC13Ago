import { useState } from 'react'
import Exercicio1 from './exercicios/Exercicio1.jsx'
import Exercicio2 from './exercicios/Exercicio2.jsx'
import Exercicio3 from './exercicios/Exercicio3.jsx'
import Exercicio4 from './exercicios/Exercicio4.jsx'
import StatusAPI from './StatusAPI.jsx'

const URL_REAL = 'https://jsonplaceholder.typicode.com/users'

// Cenários para testar o Exercício 5.
const CENARIOS = {
  sucesso: { rotulo: 'Sucesso (API real)', props: { url: URL_REAL } },
  carregando: { rotulo: 'Carregando (latência 4s)', props: { url: URL_REAL, atrasoMs: 4000 } },
  erro: {
    rotulo: 'Erro (URL errada)',
    props: { url: 'https://jsonplaceholder.typicode.com/usuariosenterrado' },
  },
  vazio: { rotulo: 'Vazio ([])', props: { url: URL_REAL, vazio: true } },
}

export default function App() {
  const [exercicio, setExercicio] = useState('5')
  const [montado, setMontado] = useState(true) // para testar o Exercício 3
  const [cenario, setCenario] = useState('sucesso')

  function renderExercicio() {
    switch (exercicio) {
      case '1': return <Exercicio1 />
      case '2': return <Exercicio2 />
      case '3': return <Exercicio3 />
      case '4': return <Exercicio4 />
      default:
        return (
          <>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}>
              {Object.entries(CENARIOS).map(([chave, c]) => (
                <button
                  key={chave}
                  onClick={() => setCenario(chave)}
                  disabled={cenario === chave}
                >
                  {c.rotulo}
                </button>
              ))}
            </div>
            <StatusAPI key={cenario} {...CENARIOS[cenario].props} />
          </>
        )
    }
  }

  return (
    <div style={{ fontFamily: 'sans-serif', padding: 24 }}>
      <h1>Exercícios fetch + useEffect</h1>

      <label>
        Exercício:{' '}
        <select value={exercicio} onChange={(e) => setExercicio(e.target.value)}>
          <option value="1">1 - Carregando</option>
          <option value="2">2 - Erro</option>
          <option value="3">3 - AbortController</option>
          <option value="4">4 - Lista vazia</option>
          <option value="5">5 - StatusAPI</option>
        </select>
      </label>{' '}
      <button onClick={() => setMontado((m) => !m)}>
        {montado ? 'Desmontar componente' : 'Montar componente'}
      </button>

      <hr />
      {montado && renderExercicio()}
    </div>
  )
}