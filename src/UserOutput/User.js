import React from 'react';
import './User.css';

const User = props => {
    return (
        <div className='user-div'>
            {props.username} ({props.age} years old)
        </div>
    )
}

export default User;