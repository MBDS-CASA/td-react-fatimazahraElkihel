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
function MainContent(){
    let content = "Ici, nous afficherons des informations interessantes :)"
    return (
        <div>
            <h3>{content}</h3>
        </div>
    )
}
function Footer(){
    let footer = "Tous droits réservés - ELKIHEL Fatima Zahra"
    return (
        <footer className={ "footer"}>
            <h3>{footer}</h3>
        </footer>
    )
}
function App() {
    const [count, setCount] = useState(0)

  return (
    <>
        <div>
            <Header/>
            <MainContent/>
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
        <Footer/>
    </>
  )
}

export default App
