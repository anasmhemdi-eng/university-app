import React, { useState } from 'react';

function StudentCard(props) {
  const [showDetails, setShowDetails] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [prenom, setPrenom] = useState(props.prenom);

  const handleSave = () => {
    props.onUpdatePrenom(props.id, prenom);
    setIsEditing(false);
  };

  return (
    <div className="card" style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <img src={props.image} alt="Student Profile" width="120" />
      <h1>Fiche étudiant</h1>

      {isEditing ? (
        <div style={{ marginBottom: '10px' }}>
          <input 
            type="text" 
            value={prenom} 
            onChange={(e) => setPrenom(e.target.value)} 
          />
          <button onClick={handleSave}>Enregistrer</button>
        </div>
      ) : (
        <p>
          <strong>Nom & Prénom : </strong> {props.prenom} {props.nom}
        </p>
      )}

      {showDetails && (
        <>
          <p>
            <strong>Email : </strong>
            <a href={`mailto:${props.email}`}>{props.email}</a>
          </p>
          <p><strong>Téléphone : </strong> {props.telephone}</p>
        </>
      )}

      <p><strong>Filière : </strong> {props.filiere}</p>
      <p><strong>Année : </strong> {props.anneeEtude}</p>
      <p><strong>Groupe : </strong> {props.groupe}</p>
      <p><strong>Ville : </strong> {props.ville}</p>

      <div style={{ marginTop: '15px', display: 'flex', gap: '8px', justifyContent: 'center' }}>
        <button onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? 'Masquer les coordonnées' : 'Afficher les coordonnées'}
        </button>

        <button onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? 'Annuler' : 'Modifier'}
        </button>

        <button onClick={() => props.onDelete(props.id)} style={{ color: 'red' }}>
          Supprimer
        </button>
      </div>
    </div>
  );
}

export default StudentCard;