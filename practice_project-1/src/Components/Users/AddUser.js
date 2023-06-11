import React, { useState, useRef} from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef=useRef();
  const ageInputRef=useRef();
  const collegeInputRef=useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    let enteredName = nameInputRef.current.value;
    let enteredUserAge = ageInputRef.current.value;
    let enteredCollegeName=collegeInputRef.current.value;
    console.log(collegeInputRef.current.value);

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please Enter a valid name and age and college name (non-empty values)",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0)",
      });
      return;
    }
    if(enteredCollegeName.trim().length===0){
      setError({
        title: "No college name entered",
        message: "Attend a college before filling up this form!!"
      })
    }
    props.onAddUser(enteredName, enteredUserAge, enteredCollegeName);
    nameInputRef.current.value="";
    ageInputRef.current.value="";
    collegeInputRef.current.value="";
  };

  const errorHandler=()=>{
    setError(null);
  }

  return (
    <div>
      {error && (
        <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          />
          <label htmlFor="college">College Name</label>
          <input 
          id="college"
          type="text"
          ref={collegeInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
