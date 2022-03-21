import React, { useState } from 'react';
import UserInput from './UserInput/UserInput';
import Users from './UserOutput/Users';
import InvalidInput from './InvalidInput/InvalidInput';

function App() {

  const [users, setUsers] = useState([]);
  const [isInvalid, setIsInvalid] = useState(false)
  const [invalidInputs, setInvalidInputs] = useState('');
  
  const addUser = user => {
    if(user.name.trim().length === 0 || user.age.length === 0) {
      setInvalidInputs("Please enter a valid name and age (non-empty values)");
      showInvalidModal();
    }else if(parseInt(user.age) < 0){
        setInvalidInputs("Please enter a valid age (age > 0)");
        showInvalidModal();
      }
    else{
      setUsers((prevState) => {
        return [user, ...prevState]
      })
    }
  }

  const showInvalidModal = () =>{
    setIsInvalid(true);
  }

  const closeInvalidModal = () =>{
    setIsInvalid(false);
  }

  return (
    <div>
      <UserInput onAddUser={addUser}/>
      {users.length > 0 && <Users userArray={users}/>}
      {isInvalid && <InvalidInput onCloseModal={closeInvalidModal} onErrorMessage={invalidInputs}/>}
    </div>
  );
}

export default App;
