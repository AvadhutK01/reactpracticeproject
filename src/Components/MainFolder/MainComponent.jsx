import React from 'react';
import './MainComponent.css';
import InputForm from '../InputFolder/InputForm';
import DisplayList from '../DisplayFolder/DisplayList';

const MainComponent = () => {
    return (
        <div>
            <InputForm />
            <DisplayList />
        </div>
    )
}

export default MainComponent