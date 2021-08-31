import { useState } from 'react';
import useLocalStorage from './useLocalStorage';
const initialState = {
    firstName: "",
    lastName: "",
    email: ""
}
const useForm = (initialState) => {
    // const [values, setValues] = useState(initialValues)
    const [values, setValues] = useLocalStorage('form', initialState);
    console.log('useForm.js values: ', values);
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



export default useForm;

//See SignupForm.js
