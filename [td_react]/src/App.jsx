import { useState } from 'react'
import reactLogo from './assets/react.svg'
import formationlogo from '../public/logo.png'
import viteLogo from '/vite.svg'
import './App.css'

function Header() {
    const titre = 'Introduction à React'
    const desc = 'A la découverte des premières notions de React'
    return (
        <header>
            <h1>Header</h1>
            <a href="" target="_blank">
                <img src={formationlogo} className="logo" alt="Vite logo"/>
            </a>
            <h1>{titre}</h1>
            <h2>{desc}</h2>
        </header>
    )
}

function App() {
    const [count, setCount] = useState(0)

  return (
    <>
        <div>
            <Header/>
            <a href="https://vite.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo"/>
            </a>
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo"/>
            </a>
        </div>

        <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
