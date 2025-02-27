import React from 'react';
import { useParams } from 'react-router';
import './EntityDescription.css'

const EntityDescription = ({ getCategoryData }) => {
  const { entityName, category } = useParams();
  const entity = getCategoryData(category).find(entity => entity.name === entityName);
  console.log("entity",entity)
  const { img, level, description } = entity;
  console.log("img",img)
  console.log("level",level)
  console.log("description",description)
  

  return (
    <div className="desc-card">
      <img src={img} alt={entityName} />
      <h3>{entityName}</h3>
      <p className="desc-card-level">{level}</p>
      <p className="desc-card-description">{description}</p>
    </div>
  );
}

export default EntityDescription;
