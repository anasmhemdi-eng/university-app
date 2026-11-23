import { useState } from 'react';

function StudentForm({ onAjouter, etudiantAModifier, onModifierEtudiant, onAnnulerModification }) {
  const [nom, setNom] = useState(etudiantAModifier?.nom || '');
  const [prenom, setPrenom] = useState(etudiantAModifier?.prenom || '');
  const [email, setEmail] = useState(etudiantAModifier?.email || '');
  const [telephone, setTelephone] = useState(etudiantAModifier?.telephone || '');
  const [filiere, setFiliere] = useState(etudiantAModifier?.filiere || '');
  const [anneeEtude, setAnneeEtude] = useState(etudiantAModifier?.anneeEtude || '');
  const [groupe, setGroupe] = useState(etudiantAModifier?.groupe || '');
  const [ville, setVille] = useState(etudiantAModifier?.ville || '');
  const [image, setImage] = useState(etudiantAModifier?.image || '');

  function resetForm() {
    setNom('');
    setPrenom('');
    setEmail('');
    setTelephone('');
    setFiliere('');
    setAnneeEtude('');
    setGroupe('');
    setVille('');
    setImage('');
  }

  function handleSubmit(e) {
    e.preventDefault();

    const donneesEtudiant = {
      nom,
      prenom,
      email,
      telephone,
      filiere,
      anneeEtude,
      groupe,
      ville,
      image,
    };

    if (etudiantAModifier) {
      onModifierEtudiant({
        ...etudiantAModifier,
        ...donneesEtudiant,
      });
    } else {
      onAjouter(donneesEtudiant);
      resetForm();
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>
        {etudiantAModifier ? "Modifier l'étudiant" : 'Ajouter un étudiant'}
      </h2>

      <label>Nom :</label>
      <input
        type="text"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        required
      />

      <label>Prénom :</label>
      <input
        type="text"
        value={prenom}
        onChange={(e) => setPrenom(e.target.value)}
        required
      />

      <label>Email :</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Téléphone :</label>
      <input
        type="tel"
        value={telephone}
        onChange={(e) => setTelephone(e.target.value)}
      />

      <label>Filière :</label>
      <select value={filiere} onChange={(e) => setFiliere(e.target.value)}>
        <option value="">Choisir une filière</option>
        <option value="Génie Logiciel et Systèmes d'Information">GLSI</option>
        <option value="DSI">DSI</option>
        <option value="RSI">RSI</option>
      </select>

      <label>Année d'étude :</label>
      <input
        type="text"
        value={anneeEtude}
        onChange={(e) => setAnneeEtude(e.target.value)}
      />

      <label>Groupe :</label>
      <input
        type="text"
        value={groupe}
        onChange={(e) => setGroupe(e.target.value)}
      />

      <label>Ville :</label>
      <input
        type="text"
        value={ville}
        onChange={(e) => setVille(e.target.value)}
      />

      <label>Image :</label>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          const fichier = e.target.files?.[0];
          if (fichier) {
            setImage(URL.createObjectURL(fichier));
          }
        }}
      />

      <button type="submit" className="btn-submit">
        {etudiantAModifier ? 'Modifier' : 'Ajouter'}
      </button>

      {etudiantAModifier && (
        <button type="button" onClick={onAnnulerModification}>
          Annuler
        </button>
      )}
    </form>
  );
}

export default StudentForm;