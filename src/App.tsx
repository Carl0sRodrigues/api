import React from 'react';
import './App.css';
import { ServiceListUser } from './services/user';

export default function App() {
  const listUsers = async () => {
    try {
      const response = await ServiceListUser();
      console.log(response);
    } catch (error) {
      console.log('error in list user: ');
    }
  }

  React.useEffect(() => {
    listUsers();
  }, []);

  return (
    <div className="api">
      <p className='text'> Testando API </p>
      <p className='user'> User </p>
      <button className='btn'>1</button>
      <button className='btn'>2</button>
      <br />
      <p className='user'> Restaurants </p>
      <button className='btn'>3</button>
      <button className='btn'>4</button>
      <br />
      <p className='user'> Meals </p>
      <button className='btn'>5</button>
      <button className='btn'>6</button>
    </div>
  );
}
