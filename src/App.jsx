import { useState } from 'react';
import './App.css';
import StudentCard from './components/StudentCard';
import StudentForm from './components/StudentForm';

import slimImg from './assets/licensed-image.webp';
import mariemImg from './assets/images.webp';
import ahmedImg from './assets/download.webp';

function App() {
  const [etudiants, setEtudiants] = useState([
    {
      id: 1,
      prenom: 'Slim',
      nom: 'Boubaker',
      email: 'slimboubaker@gmail.com',
      telephone: '+216 99 999 999',
      filiere: "Génie Logiciel et Systèmes d'Information",
      anneeEtude: '2ème année',
      groupe: 'GLSI 2',
      ville: 'Mahdia',
      image: slimImg,
    },
    {
      id: 2,
      prenom: 'Ahmed',
      nom: 'Trabelsi',
      email: 'ahmed.trabelsi@gmail.com',
      telephone: '+216 22 345 678',
      filiere: "Génie Logiciel et Systèmes d'Information",
      anneeEtude: '2ème année',
      groupe: 'GLSI 1',
      ville: 'Sousse',
      image: ahmedImg,
    },
    {
      id: 3,
      prenom: 'Mariem',
      nom: 'Khalfallah',
      email: 'mariem.khalfallah@gmail.com',
      telephone: '+216 27 567 890',
      filiere: "Génie Logiciel et Systèmes d'Information",
      anneeEtude: '2ème année',
      groupe: 'GLSI 2',
      ville: 'Mahdia',
      image: mariemImg,
    },
  ]);

  const [filterText, setFilterText] = useState('');
  const [etudiantAModifier, setEtudiantAModifier] = useState(null);

  function ajouterEtudiant(nouvelEtudiant) {
    const etudiantAvecId = {
      ...nouvelEtudiant,
      id: Date.now(),
      image: nouvelEtudiant.image || slimImg,
    };
    setEtudiants((anciensEtudiants) => [...anciensEtudiants, etudiantAvecId]);
  }

  function enregistrerModification(etudiantModifie) {
    setEtudiants((anciensEtudiants) =>
      anciensEtudiants.map((e) =>
        e.id === etudiantModifie.id ? { ...e, ...etudiantModifie } : e
      )
    );
    setEtudiantAModifier(null);
  }

  function supprimerEtudiant(id) {
    setEtudiants((anciensEtudiants) => anciensEtudiants.filter((e) => e.id !== id));
    if (etudiantAModifier?.id === id) {
      setEtudiantAModifier(null);
    }
  }

  function modifierEtudiant(etudiant) {
    setEtudiantAModifier(etudiant);
  }

  function mettreAJourPrenom(id, nouveauPrenom) {
    setEtudiants((anciensEtudiants) =>
      anciensEtudiants.map((e) => (e.id === id ? { ...e, prenom: nouveauPrenom } : e))
    );
  }

  const etudiantsFiltres = etudiants.filter((e) =>
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

      <StudentForm
        key={etudiantAModifier ? etudiantAModifier.id : 'nouveau'}
        onAjouter={ajouterEtudiant}
        etudiantAModifier={etudiantAModifier}
        onModifierEtudiant={enregistrerModification}
        onAnnulerModification={() => setEtudiantAModifier(null)}
      />

      {etudiantsFiltres.map((etudiant) => (
        <StudentCard
          key={etudiant.id}
          etudiant={etudiant}
          onDelete={supprimerEtudiant}
          onModifier={modifierEtudiant}
          onUpdatePrenom={mettreAJourPrenom}
        />
      ))}
    </div>
  );
}

export default App;