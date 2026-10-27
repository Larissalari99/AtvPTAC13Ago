# Exercícios fetch + useEffect (React + Vite)

## Como rodar
```bash
npm install
npm run dev
```

## Onde está cada exercício
| Exercício | Arquivo |
|-----------|---------|
| 1 | `src/exercicios/Exercicio1.jsx` |
| 2 | `src/exercicios/Exercicio2.jsx` |
| 3 | `src/exercicios/Exercicio3.jsx` |
| 4 | `src/exercicios/Exercicio4.jsx` |
| 5 | `src/StatusAPI.jsx` |

O `src/App.jsx` tem um seletor para escolher o exercício e um botão
"Desmontar componente" (usado para testar o Exercício 3).
Por padrão a página mostra o Exercício 5.

## Como testar
- **Ex. 1:** "Carregando..." aparece e depois a lista de 10 nomes.
- **Ex. 2:** troque `URL` no arquivo por `.../usuariosenterrado` e veja "Erro: HTTP 404".
- **Ex. 3:** abra o console, clique em "Desmontar componente" durante o carregamento
  (use a aba Network > Slow 3G para dar tempo). Aparece só o log de cancelamento, sem warnings.
- **Ex. 4:** comente a linha `const data = await resp.json()` e use `const data = []`.
- **Ex. 5:** use os 4 botões de cenário na página.