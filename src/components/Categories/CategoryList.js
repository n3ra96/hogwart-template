import React from 'react';
import CategoryCard from './CategoryCard';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const CategoryList = ({ categories }) => {
  return (
    <div className="category-list">
        {/* add link to each of these */}
        <Link to="/wiki/potions">
        <CategoryCard id="potions" categoryData={categories[0]} />
        </Link>
        <Link to="/wiki/charms">
        <CategoryCard id="charms" categoryData={categories[1]} /> 
        </Link>

      {categories.slice(2).map(category => (
          <CategoryCard categoryData={category} />
        ))}
        
    </div>
  );
}

export default CategoryList;
