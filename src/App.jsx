import { useState } from 'react';
import './App.css';
import StudentCard from "./components/StudentCard";

import slimImg from './assets/licensed-image.webp';
import mariemImg from './assets/images.webp';
import ahmedImg from './assets/download.webp';

function App() {
  const [etudiants, setEtudiants] = useState([
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
  ]);


  const [filterText, setFilterText] = useState("");


  function ajouterEtudiant() {
    const nouvelEtudiant = {
      id: Date.now(),
      nom: "Ben Salem",
      prenom: "Yassine",
      email: "yassin.bensalem@gmail.com",
      telephone: "+216 44 444 444",
      filiere: "Génie Logiciel et Systèmes d'Information",
      anneeEtude: "2ème année",
      groupe: "GLSI 1",
      ville: "Sfax",
      image: slimImg,
    };
    setEtudiants([...etudiants, nouvelEtudiant]);
  }


  function supprimerEtudiant(id) {
    setEtudiants(etudiants.filter(e => e.id !== id));
  }

  
  function updatePrenom(id, newPrenom) {
    setEtudiants(
      etudiants.map(e => (e.id === id ? { ...e, prenom: newPrenom } : e))
    );
  }

  const etudiantsFiltres = etudiants.filter(e =>
    e.filiere.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="container">
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <input
          type="text"
          placeholder="Filtrer par filière..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          style={{ padding: '8px', width: '250px' }}
        />
      </div>

      {etudiantsFiltres.map((etudiant) => (
        <StudentCard
          key={etudiant.id}
          id={etudiant.id}
          prenom={etudiant.prenom}
          nom={etudiant.nom}
          email={etudiant.email}
          telephone={etudiant.telephone}
          filiere={etudiant.filiere}
          anneeEtude={etudiant.anneeEtude}
          groupe={etudiant.groupe}
          ville={etudiant.ville}
          image={etudiant.image}
          onDelete={supprimerEtudiant}
          onUpdatePrenom={updatePrenom}
        />
      ))}

      <div className="actions" style={{ textAlign: 'center', marginTop: '20px' }}>
        <button onClick={ajouterEtudiant}>+ ajouter un etudiant</button>
      </div>
    </div>
  );
}

export default App;