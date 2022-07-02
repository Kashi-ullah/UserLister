import logo from './logo.svg';
import './App.css';
import AddUser from './Users/AddUser';
import UsersList from './Users/UsersList';
import { useState } from 'react';

function App() {
const[usersList, setUsersList]  = useState([]);
const addUserHandler =(uNAme, uAge)=>{
    setUsersList(((prevUsersList)=>{
      return [...prevUsersList,
      {
        id:Math.random().toString(),
        name:uNAme,
        age:uAge,
      }
      ]
    }))
}
  return (
    <div>
      <AddUser onAddUsers={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
