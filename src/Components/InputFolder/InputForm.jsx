import React, { useState } from 'react'
import './InputForm.css';

const InputForm = (props) => {
    let [name, setName] = useState('');
    let [age, setAge] = useState('');

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setAge(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        return props.onSubmit(name, age);
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <input type='text' placeholder='Enter a name' onChange={nameChangeHandler} />
                <input type='number' placeholder='Enter age' onChange={ageChangeHandler} />
                <button type='submit'>Submit</button>
            </div>
        </form>
    )
}

export default InputForm