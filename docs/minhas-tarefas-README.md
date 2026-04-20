# ✅ Minhas Tarefas

> Aplicação de gestão de tarefas construída com React, TypeScript e Redux Toolkit — com persistência automática no localStorage.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://typescriptlang.org/)
[![Redux](https://img.shields.io/badge/Redux_Toolkit-764ABC?logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?logo=vercel)](https://minhas-tarefas-ivory.vercel.app/)

**🌐 [minhas-tarefas-ivory.vercel.app](https://minhas-tarefas-ivory.vercel.app/)**

---

## Sobre

Aplicação de to-do list desenvolvida para consolidar o uso de **Redux Toolkit** com **TypeScript** em React. Permite criar, concluir, reabrir e remover tarefas, com estado persistido via `redux-persist` no `localStorage` — as tarefas continuam disponíveis após o reload da página.

---

## Funcionalidades

- **Adicionar tarefas** — campo de texto + submit
- **Concluir / reabrir tarefas** — toggle de estado com alteração visual (riscado)
- **Remover tarefas** — eliminação individual
- **Persistência automática** — estado salvo no localStorage via `redux-persist`
- **Tipagem forte** — todos os slices e selectors tipados com TypeScript

---

## Tech Stack

| Camada | Tecnologia |
|--------|-----------|
| **UI** | React 19 |
| **Linguagem** | TypeScript |
| **Estado** | Redux Toolkit + redux-persist |
| **Deploy** | Vercel |

---

## Estrutura do Projeto

```
src/
├── components/        # Componentes reutilizáveis (TaskForm, TaskList, TaskItem)
├── store/
│   ├── reducers/      # Slices Redux (tasks)
│   └── index.ts       # Store + redux-persist config
└── types/             # Tipos TypeScript (Task)
```

---

## Como Executar

```bash
# Clone o repositório
git clone https://github.com/viniciussilva2504/minhas-tarefas.git
cd minhas-tarefas

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm start
```

Acesse [http://localhost:3000](http://localhost:3000) no browser.

---

## Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm start` | Servidor de desenvolvimento |
| `npm test` | Executar testes |
| `npm run build` | Build de produção |

---

## Conceitos Demonstrados

Este projeto faz parte da formação Full-Stack (Módulo 31) e demonstra:

- **Redux Toolkit** — `createSlice`, `createAction`, `configureStore`
- **redux-persist** — serialização e rehydration automática do estado
- **TypeScript com Redux** — tipagem de actions, reducers e selectors
- **Estado derivado** — filtragem de tarefas concluídas/pendentes com selectors

---

## Autor

**Vinicius Silva** — Frontend Developer · Porto, Portugal

- [LinkedIn](https://www.linkedin.com/in/vjsilva2504/)
- [GitHub](https://github.com/viniciussilva2504)
- [Portfolio](https://portfolio-ebon-nine-95.vercel.app/)
