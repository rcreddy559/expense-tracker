import {useState} from 'react'

export const useInput = (initialState, placeholder) => {
    const [value, setValue] = useState(initialState);
    const reset = () => setValue(initialState)

    const bind =  {
         value,
         placeholder,
         onChange: e => setValue(e.target.value)
    }
    return [value, bind, reset]
}
