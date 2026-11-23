import { useEffect, useState } from 'react';
import './StudentCard.css';

function StudentCard({ etudiant, onDelete, onModifier, onUpdatePrenom }) {
  const [visibility, setVisibility] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [prenom, setPrenom] = useState(etudiant.prenom);

  useEffect(() => {
    setPrenom(etudiant.prenom);
  }, [etudiant.prenom]);

  const handleSave = () => {
    onUpdatePrenom(etudiant.id, prenom);
    setIsEditing(false);
  };

  return (
    <div className="card" style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <img src={etudiant.image} alt={`${etudiant.prenom} ${etudiant.nom}`} width="120" />
      <h2>Fiche étudiant</h2>

      {isEditing ? (
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
          />
          <button type="button" onClick={handleSave}>Enregistrer</button>
          <button
            type="button"
            onClick={() => {
              setPrenom(etudiant.prenom);
              setIsEditing(false);
            }}
          >
            Annuler
          </button>
        </div>
      ) : (
        <p>
          <strong>Nom & Prénom : </strong> {etudiant.prenom} {etudiant.nom}
        </p>
      )}

      {visibility && (
        <>
          <p>
            <strong>Email : </strong>
            <a href={`mailto:${etudiant.email}`}>{etudiant.email}</a>
          </p>
          <p><strong>Téléphone : </strong> {etudiant.telephone}</p>
        </>
      )}

      <p><strong>Filière : </strong> {etudiant.filiere}</p>
      <p><strong>Année : </strong> {etudiant.anneeEtude}</p>
      <p><strong>Groupe : </strong> {etudiant.groupe}</p>
      <p><strong>Ville : </strong> {etudiant.ville}</p>

      <div style={{ marginTop: '15px', display: 'flex', gap: '8px', justifyContent: 'center' }}>
        <button type="button" onClick={() => setVisibility((v) => !v)}>
          {visibility ? 'Masquer les coordonnées' : 'Afficher les coordonnées'}
        </button>

        <button type="button" onClick={() => onModifier(etudiant)}>
          Modifier
        </button>

        <button type="button" onClick={() => onDelete(etudiant.id)}>
          Supprimer
        </button>
      </div>
    </div>
  );
}

export default StudentCard;