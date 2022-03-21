import React from 'react';

import './InvalidInput.css';

const InvalidInput = (props) => {


    return (
        <div className='overlay' onClick={props.onCloseModal}>
            <div className='invalid-modal'>
                <div className='invalid-header'>Invalid input</div>
                <div className='invalid-body'>{props.onErrorMessage}</div>
                <div className='invalid-button'>
                    <button type="button" onClick={props.onCloseModal}>Okay</button>
                </div>
            </div>
        </div>
    )
}

export default InvalidInput;