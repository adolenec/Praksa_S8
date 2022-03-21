import React from 'react';
import UserForm from './UserForm';
import './UserInput.css';

const UserInput = (props) => {

    const newUser = (enteredUserData) => {
        const newUserData = {
            ...enteredUserData,
            id: Math.random().toString()
        }
        props.onAddUser(newUserData);
    }

    return (
        <div className='form-container'>
            <UserForm onSendUserData={newUser}/>
        </div>
    )
}
export default UserInput;