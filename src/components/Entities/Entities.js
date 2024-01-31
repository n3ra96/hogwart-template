import React from 'react';
import Entity from './Entity';
import './Entities.css';
import { useParams } from 'react-router';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Entities = ({ getCategoryData }) => {
  const { category  } = useParams();
  

  return (
    <div className="entity-list">
      {getCategoryData(category).map((entity, i) =>  (
        
        <Entity key={i} category={category} name={entity.name} img={entity.img} level={entity.level} />
        
      ))}
    </div>
  );
}

export default Entities;
