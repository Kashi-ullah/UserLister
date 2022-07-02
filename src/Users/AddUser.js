import React, { useState } from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModel from '../UI/ErrorModel';
import classes from './AddUser.module.css';

const AddUser = (props) => {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error ,setError] = useState('');

    const userNameChangeHandler=(event)=>{
        setEnteredUserName(event.target.value);
    };
    const ageChangeHandler=(event)=>{
      setEnteredAge(event.target.value);
      
  };
  const errorHandler=()=>{
    setError(null);
  }

    const addUserHandler=(event)=>{
        event.preventDefault();
        if(enteredUserName.trim().length ===0 || enteredAge.trim().length ===0){
          
          setError({
            title:'Invalid input',
            message:'Please enter valid Name and Age'
          })
          return;//function exection stop here
        }
        if(+enteredAge < 1){

          setError({
            title:'Invalid age',
            message:'Please enter valid Age (>0)'
          })
          return;//function exection stop here
        }
        props.onAddUsers(enteredUserName, enteredAge);
          setEnteredUserName('')
          setEnteredAge('')
    }
  return (
    <div>
{error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModel>}
<Card className={classes.input}>
      
      <form onSubmit={addUserHandler}>
      <label htmlFor='username'>User Name</label>
      <input type='text' id='username' value={enteredUserName} onChange={userNameChangeHandler}/>
      <label htmlFor='age'>Age (Yeaars)</label>
      <input type='number' id='age' value={enteredAge} onChange={ageChangeHandler}/>

      <Button type='submit'>Submit</Button>
      </form>
      
  </Card>
    </div> 
  )
}

export default AddUser