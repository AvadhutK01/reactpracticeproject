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
        props.onSubmit(name, age);
        setName('');
        setAge('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='div-css'>
                <input className='input-css' type='text' placeholder='Enter a name' value={name} onChange={nameChangeHandler} />
                <input className='input-css' type='number' placeholder='Enter age' value={age} onChange={ageChangeHandler} />
                <button className='button-css' type='submit'>Submit</button>
            </div>
        </form>
    )
}

export default InputForm