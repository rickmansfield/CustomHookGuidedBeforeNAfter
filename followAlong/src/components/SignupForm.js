import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import Button from "../theme/Button";

const useLocalStorage = (key, initialValue) => {
  //1. Setup useState.
  //2. CHeck to see if a value for the key exists in localStorage
  //3. if a value does exist in LS, put it into state
  //4. if a value does not exist in LS, put initialValue into LS
  //5. when setting state, also save value to LS
  const [value, setValue] = useState(() => {
    if (localStorage.getItem(key)) {
      return (JSON.parse(localStorage.getItem(key)));
    } else {
      localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    }
  });

  const setStoredValue = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setValue(value);
  }

  return ([value, setStoredValue]);
}

//1. create a useForm function.
//2. Identify all of the stateful logic in the component.
//3. Return the needed pieces of state/functions.
//4. Use useForm instead of hardcoded stateful logic.

const useForm = (initialState) => {
  const [values, setValues] = useLocalStorage('form', initialState);

  const handleChanges = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const clearForm = e => {
    e.preventDefault();
    setValues(initialState);
  };

  return ([values, handleChanges, clearForm]);
}

const initialState = {
  firstName: "",
  lastName: "",
  email: ""
}

export default function SignupForm() {
  const classes = useStyles();
  const [values, handleChanges, clearForm] = useForm(initialState);

  console.log('values: ', values);

  const handleSubmit = e => {
    e.preventDefault();
    alert(values.firstName + ' ' + values.lastName + ' ' + values.email);
  };

  return (
    <div p={2} className="form">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Add New Client</legend>
          <TextField
            id="outlined-name"
            label="First Name"
            className={classes.textField}
            name="firstName"
            value={values.firstName}
            onChange={handleChanges}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="Last Name"
            className={classes.textField}
            name="lastName"
            value={values.lastName}
            onChange={handleChanges}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="Email"
            className={classes.textField}
            name="email"
            value={values.email}
            onChange={handleChanges}
            margin="normal"
            variant="outlined"
          />
          <div className="flexer">
            <Button color="red" onClick={clearForm}>
              Clear
            </Button>
            <Button color="blue" type="submit">
              Submit
            </Button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  }
}));