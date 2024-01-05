import React, { useState } from 'react';
import './MainComponent.css';
import InputForm from '../InputFolder/InputForm';
import DisplayList from '../DisplayFolder/DisplayList';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainComponent = () => {
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const [validation, setValidation] = useState('');

    const handleClose = () => setShow(false);

    const onSubmit = (name, age) => {
        if (name === '' || age === '') {
            setValidation('Please enter a name and age');
            setShow(true);
            return;
        }
        if (age < 0 || age > 100) {
            setValidation('Please enter a valid age between 0 and 100');
            setShow(true);
            return;
        }
        const obj = {
            name: name,
            age: age,
            id: Math.floor(Math.random() * new Date())
        };
        setData((prevData) => [...prevData, obj]);
    }

    const onDelete = (id) => {
        setData((prevData) => prevData.filter((item) => item.id !== id));
    }

    return (
        <>
            <Modal show={show} onHide={handleClose} className="bootstrap-override">
                <Modal.Body>
                    {validation}
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
                </Modal.Footer>
            </Modal>
            <div className='div-style'>
                <InputForm onSubmit={onSubmit} />
                <DisplayList data={data} onDelete={onDelete} />
            </div>
        </>
    )
}

export default MainComponent;
