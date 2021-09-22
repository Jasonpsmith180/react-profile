import React from 'react';

function Modal({ onClose, currentProject}) {

    const {name, description, url, github, index} = currentProject

    return (
        <div className='modalBackdrop'>
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img 
                    alt="current category"
                    src={require(`../../assets/small/${index}.jpg`).default}/>
                <p>
                    {description} <br />
                    published at: <a href={url} target="_blank" rel="noreferrer">{url}</a> <br />
                    github: <a href={github} target="_blank" rel="noreferrer">{github}</a>
                </p>
                <button type='button' onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
}

export default Modal;