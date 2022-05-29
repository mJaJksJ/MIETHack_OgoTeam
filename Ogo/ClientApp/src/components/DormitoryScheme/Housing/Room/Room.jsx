import React, {useEffect, useState} from 'react';
import styleClasses from './Room.module.css';
import {fetchAddingRoomInfo} from "../../../../responses/help";

function Room(props) {
    const [room, setRoom] = useState({id: 0, housing: 0, number: 0, realStudentsCount: 0, countOfPossibleStudents: 0});

    async function loadRooms() {
        props.rooms.then(rms => {
            console.log(rms)
            setRoom(rms.find(r => r.number % 100 === props.num) || {
                id: 0,
                housing: 0,
                number: 0,
                realStudentsCount: 0,
                countOfPossibleStudents: 0
            });
        });
    }

    useEffect(() => {
        loadRooms();
    }, [])

    return (
        <>
            <button onClick={() => {
                console.log(room);
                const data = fetchAddingRoomInfo(room.id);
                console.log(data);
                props.onClick(room, data);
            }} className={styleClasses.room}
                    style={props.style}>{props.num}<br/>{room.realStudentsCount}/{room.countOfPossibleStudents}</button>
        </>
    );
}

export default Room;