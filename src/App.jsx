import { useState } from 'react';
import './App.css';
import StudentCard from "./components/StudentCard";


import slimImg from './assets/licensed-image.webp';
import mariemImg from './assets/images.webp';
import ahmedImg from './assets/download.webp';

const etudiants = [
  {
    prenom: "Slim",
    nom: "Boubaker",
    email: "slimboubaker@gmail.com",
    telephone: "+216 99 999 999",
    filiere: "Génie Logiciel et Systèmes d'Information",
    anneeEtude: "2ème année",
    groupe: "GLSI 2",
    ville: "Mahdia",
    image: slimImg,
  },
  {
    prenom: "ahmed",
    nom: "Trabelsi",
    email: "ahmed.trabelsi@gmail.com",
    telephone: "+216 22 345 678",
    filiere: "Génie Logiciel et Systèmes d'Information",
    anneeEtude: "2ème année",
    groupe: "GLSI 1",
    ville: "Sousse",
    image: ahmedImg,
  },
  {
    prenom: "Mariem",
    nom: "Khalfallah",
    email: "mariem.khalfallah@gmail.com",
    telephone: "+216 27 567 890",
    filiere: "Génie Logiciel et Systèmes d'Information",
    anneeEtude: "2ème année",
    groupe: "GLSI 2",
    ville: "Mahdia",
    image: mariemImg,
  }
];


function App() {
  return (
    <div className="container">
      {etudiants.map((etudiant, index) => (
        <StudentCard 
          key={index}
          prenom={etudiant.prenom}
          nom={etudiant.nom}
          email={etudiant.email}
          telephone={etudiant.telephone}
          filiere={etudiant.filiere}
          anneeEtude={etudiant.anneeEtude}
          groupe={etudiant.groupe}
          ville={etudiant.ville}
          image={etudiant.image}
        />
      ))}
    </div>
  );
}

export default App;