import { useState } from 'react'
import reactLogo from './assets/react.svg'
import formationlogo from '../public/logo.png'
import viteLogo from '/vite.svg'
import './App.css'
import React, {  useEffect } from 'react';



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

function MainContent() {
    const [dateTimeMessage, setDateTimeMessage] = useState('');

    useEffect(() => {
        const days = [
            'dimanche',
            'lundi',
            'mardi',
            'mercredi',
            'jeudi',
            'vendredi',
            'samedi',
        ];
        const months = [
            'janvier',
            'février',
            'mars',
            'avril',
            'mai',
            'juin',
            'juillet',
            'août',
            'septembre',
            'octobre',
            'novembre',
            'décembre',
        ];

        const updateDateTimeMessage = () => {
            const now = new Date();

            // Récupérer les différentes parties de la date et de l'heure
            const dayName = days[now.getDay()];
            const day = now.getDate();
            const monthName = months[now.getMonth()];
            const year = now.getFullYear();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');

            // Construire le message
            const message = `Bonjour, on est le ${dayName}, ${day} ${monthName} ${year} et il est ${hours}:${minutes}:${seconds}`;
            setDateTimeMessage(message);
        };

        // Mettre à jour le message toutes les secondes
        const intervalId = setInterval(updateDateTimeMessage, 1000);

        // Mettre à jour immédiatement sans attendre une seconde
        updateDateTimeMessage();

        // Nettoyer l'intervalle au démontage du composant
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="date">
            <h3>{dateTimeMessage}</h3>
        </div>
    );
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
