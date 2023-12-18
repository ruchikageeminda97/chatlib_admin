import React, { useState } from 'react';
import './App.css';
import Users from './Users';
import Requests from './Requests';
import Book from './Book';


const Sidebar = ({ activeCategory, onCategoryChange }) => {

  const categories = ['Users', 'Books', 'Requests'];

  return (
    <div className="sidebar" >
      <h2 className='font-semibold text-yellow-500 text-2xl'>ChatLib</h2>
      
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            className={activeCategory === category ? 'active' : ''}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </li>
        ))}
      </ul>

      




    </div>
  );
};

const Content = ({ activeCategory }) => {
  let categoryComponent;

  switch (activeCategory) {
    case 'Users':
      categoryComponent = <Users />;
      break;
    case 'Books':
      categoryComponent = <Book/>;
      break;
    case 'Requests':
      categoryComponent = <Requests />;
      break;
    default:
      categoryComponent = null;
  }

  return (
    <div className="content">
      {categoryComponent}
    </div>
  );
};

function Dashboard() {
  const [activeCategory, setActiveCategory] = useState('Users');

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="app">
      <Sidebar
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />
      <Content activeCategory={activeCategory} />
    </div>
  );
}

export default Dashboard;
