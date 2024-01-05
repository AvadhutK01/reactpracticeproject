import React from 'react';
import './DisplayList.css';

const DisplayList = (props) => {
    return (
        <div className='div-list'>
            {props.data.map(item => (
                <ul className='ul-css' key={item.id}>
                    <li className='li-css'>
                        {item.name} ({item.age} years old)
                        <button className='button-css' style={{ marginLeft: '20px' }} onClick={() => props.onDelete(item.id)}>Delete</button>
                    </li>
                </ul>
            ))}
        </div>
    )
}

export default DisplayList;
