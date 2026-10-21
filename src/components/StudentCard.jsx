import React from 'react';

function StudentCard(props) {
  return (
    <div className="card" style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <img src={props.image} alt="Student Profile" width="120" />
      <h1>Fiche étudiant</h1>
      
      <p><strong>Nom & Prénom : </strong> {props.prenom} {props.nom}</p>
      <p>
        <strong>Email : </strong> 
        <a href={`mailto:${props.email}`}>{props.email}</a>
      </p>
      <p><strong>Téléphone : </strong> {props.telephone}</p>
      <p><strong>Filière : </strong> {props.filiere}</p>
      <p><strong>Année : </strong> {props.anneeEtude}</p>
      <p><strong>Groupe : </strong> {props.groupe}</p>
      <p><strong>Ville : </strong> {props.ville}</p>
    </div>
  );
}

export default StudentCard;