import React from 'react';
import Login from './Loging';
import { useNavigate } from 'react-router-dom';

const Book = () => {
  const navigate = useNavigate ()

  const Books = [
    { id: 1, index:'002', name: 'Gamperaliya' },
    { id: 2, index:'005', name: 'Madoldoowa' },
    
  ];

  const handleButtonClick = () => {
    navigate('/');
  };

  return (
    <div>
       <div className='flex flex-row justify-between pr-12'>
    <h3 className='font-semibold text-lg mb-4'>Books</h3>
    <button onClick={handleButtonClick} class="bg-red-800 hover:bg-red-500 text-white font-bold py-2 px-4 rounded">
      Logout
    </button>
    </div>

      <div className=' mt-2 rounded-md h-10 w-[95%] bg-gray-600 pt-2 pl-10 pr-10 justify-between flex-row flex'>
          <h1 className='text-white font-semibold '>Book Id</h1>
          <h1 className='text-white font-semibold '>Book Name</h1>
        </div>

      <ul >
        {Books.map((user) => (
          <li key={user.id}>
            <div className='rounded-md h-10 w-[95%] bg-gray-200 pt-2 mt-2 pl-10 pr-10 justify-between flex-row flex'>
              <div>{user.index} </div>
              <div> {user.name}</div>
              
            </div>
            
          </li>


       

        ))}
      </ul>
    </div>
  );
};

export default Book;
