import React, {useEffect, useState} from 'react';
import styleClasses from './Room.module.css';

function Room(props) {
    const [room, setRoom] = useState({Number: 0, RealStudentsCount: 0, CountOfPossibleStudents: 0});

    async function loadRooms() {
        props.rooms.then(rms => {
                setRoom(rms.find(r => r.number % 100 === props.num) || {Number: 0, RealStudentsCount: 0, CountOfPossibleStudents: 0});
        });
    }

    useEffect(() => {
        loadRooms();
    }, [])


    return (
        <>
            <button className={styleClasses.room} style={props.style}>{props.num}<br/>{room.realStudentsCount}/{room.countOfPossibleStudents}</button>
            </>
    );
}

export default Room;