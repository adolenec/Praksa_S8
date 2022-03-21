import React from 'react';
import User from './User';
import './Users.css';

const Users = props => {
    return (
        <div className='users-div'>
            {props.userArray.map(user => (
                <User key={user.id} username={user.name} age={user.age}/>
            ))}
        </div>
    )
}

export default Users;