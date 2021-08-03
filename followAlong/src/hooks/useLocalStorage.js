import { useState } from "react";
const useLocalStorage = (key, initialValue) => {
    //1. Setup useState. Get initial Value
    //2. CHeck to see if a value for the key exists in localStorage (LS)
    //3. if a value does exist in LS, put it into state
    //4. if a value does not exist in LS, put initialValue into LS

    const [value, setValue] = useState(() => {
        if (localStorage.getItem(key)) {
            return (JSON.parse(localStorage.getItem(key)));
        } else {
            localStorage.setItem(key, JSON.stringify(initialValue));
            return initialValue;
        }
    });
    //5. when setting state, also save value to LS
    const setStoredValue = (value) => {
        localStorage.setItem(key, JSON.stringify(value));
        setValue(value);
    }

    return ([value, setStoredValue]);
}
export default useLocalStorage;