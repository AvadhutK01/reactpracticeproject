import React from 'react';
import './DisplayList.css';

const DisplayList = (props) => {
    return (
        <div>
            {props.data.map(item => (
                <ul key={item.id}>
                    <li>
                        {item.name} ({item.age} years old)
                        <button style={{ marginLeft: '20px' }} onClick={() => props.onDelete(item.id)}>Delete</button>
                    </li>
                </ul>
            ))}
        </div>
    )
}

export default DisplayList;
