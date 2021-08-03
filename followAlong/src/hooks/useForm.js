import { useState } from 'react';

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

export default useForm;