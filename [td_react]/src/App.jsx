import { useState, useEffect } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
} from '@mui/material';
import { School, People, Book, Info } from '@mui/icons-material';
import './App.css';
import formationlogo from '../public/logo.png';
import data from '../../data.json';

// Composants individuels
const Notes = () => (
    <TableContainer component={Paper} className="table-container">
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Course</TableCell>
                    <TableCell>Grade</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((item, index) => (
                    <TableRow
                        key={item.unique_id}
                        className={index % 2 === 0 ? 'table-row-even' : 'table-row-odd'}
                    >
                        <TableCell>{item.unique_id}</TableCell>
                        <TableCell>{item.course}</TableCell>
                        <TableCell>{item.grade}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);

const Etudiants = () => (
    <TableContainer component={Paper} className="table-container">
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((item, index) => (
                    <TableRow
                        key={item.student.id}
                        className={index % 2 === 0 ? 'table-row-even' : 'table-row-odd'}
                    >
                        <TableCell>{item.student.id}</TableCell>
                        <TableCell>{item.student.firstname}</TableCell>
                        <TableCell>{item.student.lastname}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);

const Matieres = () => (
    <TableContainer component={Paper} className="table-container">
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Course</TableCell>
                    <TableCell>Date</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((item, index) => (
                    <TableRow
                        key={item.unique_id}
                        className={index % 2 === 0 ? 'table-row-even' : 'table-row-odd'}
                    >
                        <TableCell>{item.course}</TableCell>
                        <TableCell>{item.date}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);

const APropos = () => (
    <div className="about-container">
        <h2>À propos</h2>
        <p>
            Ce projet est une démonstration des capacités de React <br/>
            et Material UI pour créer des interfaces utilisateur <br/>
            dynamiques et interactives.
        </p>
    </div>
);

// Composant Menu
const Menu = ({ menuItems, onMenuClick, activeItem }) => (
    <nav className="menu">
        <img src={formationlogo} alt="Logo" className="menu-logo-img" />
        <ul>
            {menuItems.map((item) => (
                <li
                    key={item.name}
                    className={activeItem === item.name ? 'active' : ''}
                    onClick={() => onMenuClick(item.name)}
                >
                    <span className="menu-icon">{item.icon}</span>
                    {item.label}
                </li>
            ))}
        </ul>
    </nav>
);

// Composants Header, Footer, MainContent
const Header = () => (
    <header>
        <h1>Université Côte d'Azur</h1>
        <h2>Bienvenue sur le compte universitaire</h2>
    </header>
);

const MainContent = () => {
    const [dateTimeMessage, setDateTimeMessage] = useState('');

    useEffect(() => {
        const updateDateTimeMessage = () => {
            const now = new Date();
            const days = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
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

            const message = `Bonjour, on est le ${days[now.getDay()]}, ${now.getDate()} ${
                months[now.getMonth()]
            } ${now.getFullYear()} et il est ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
            setDateTimeMessage(message);
        };

        const intervalId = setInterval(updateDateTimeMessage, 1000);
        updateDateTimeMessage();

        return () => clearInterval(intervalId);
    }, []);

    return <div className="date"><h3>{dateTimeMessage}</h3></div>;
};

const Footer = () => {
    const prenom = "Fatima Zahra";
    const nom = "Elkihel";
    const now = new Date();
    const year = now.getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© {year} - {prenom}.{nom}, Tous droits réservés.</p>
                <p>Créé avec ❤ en React et Material UI.</p>
            </div>
        </footer>
    );
};

// Composant Principal
const Appli = () => {
    const [activeMenu, setActiveMenu] = useState("Notes");

    const menuItems = [
        { name: "Notes", label: "Notes", icon: <School />, component: <Notes /> },
        { name: "Etudiants", label: "Étudiants", icon: <People />, component: <Etudiants /> },
        { name: "Matieres", label: "Matières", icon: <Book />, component: <Matieres /> },
        { name: "APropos", label: "À propos", icon: <Info />, component: <APropos /> },
    ];

    const activeComponent = menuItems.find((item) => item.name === activeMenu)?.component;

    return (
        <>
            <Menu
                menuItems={menuItems}
                onMenuClick={setActiveMenu}
                activeItem={activeMenu}
            />
            <div>
                <Header />
                <MainContent />
                <main>{activeComponent}</main>
            </div>
            <Footer />
        </>
    );
};

export default Appli;
