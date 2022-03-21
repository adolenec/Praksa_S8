import React, { useState } from 'react';
import './UserForm.css';

const UserForm = (props) => {

    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');

    const getUsername = e =>{
        setUserName(e.target.value);
    }

    const getAge = e =>{
        setUserAge(e.target.value);
    }

    const submitFormHandler = e =>{
        e.preventDefault();
        
        const userData = {
            name: userName,
            age: userAge
        }
        props.onSendUserData(userData);
        setUserName('');
        setUserAge('');
    }

    return (
        <form onSubmit={submitFormHandler}>
            <div className='form-inputs'>
                <div className='form-input'>
                    <label htmlFor='username'>Username</label>
                    <input type='text' value={userName} id='username' onChange={getUsername}/>
                </div>
                <div className='form-input'>
                    <label htmlFor='age'>Age (Years)</label>
                    <input type='number' value={userAge} id='age' onChange={getAge}/>
                </div>
                <div>
                    <button type='submit'>Add User</button>
                </div>
            </div>
        </form>
    );
}

export default UserForm;