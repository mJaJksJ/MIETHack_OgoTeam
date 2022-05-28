import React from 'react';
import styleClasses from './Room.module.css';

function Room() {
    return (
        <>
            <button className={styleClasses.room}>326<br/>2/4</button>
            </>
    );
}

export default Room;