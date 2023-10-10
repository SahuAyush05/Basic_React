import React,{useState} from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';

const AddUser = (props) => {
    const [enteredUserName,SetenteredUserName]=useState('');
    const [enteredAge,SetenteredAge]=useState('');
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUserName,enteredAge);
  };

  const usernameChangeHandler=(event)=>{
     SetenteredUserName(event.target.value);
  }
  const ageChangeHandler=(event)=>{
    SetenteredAge(event.target.value);
 }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text"  onChange={usernameChangeHandler}/>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" onChange={ageChangeHandler}/>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;