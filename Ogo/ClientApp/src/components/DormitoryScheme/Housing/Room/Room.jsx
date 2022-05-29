import React, {useEffect, useState} from 'react';
import styleClasses from './Room.module.css';
import {fetchAddingRoomInfo} from "../../../../responses/help";

function Room(props) {
    const [room, setRoom] = useState({id: 0, housing: 0, number: 0, realStudentsCount: 0, countOfPossibleStudents: 0});
    const [addingRoomInfo, setAddingRoomInfo] = useState({
        id: 0,
        number: 0,
        fullName: "",
        numberOfRoom: 0,
        numberOfHousing: 0,
        groupName: ""
    });

    async function loadRooms() {
        props.rooms.then(rms => {
            setRoom(rms.find(r => r.number % 100 === props.num) || {
                id: 0,
                housing: 0,
                number: 0,
                realStudentsCount: 0,
                countOfPossibleStudents: 0
            });
        });
    }

    async function loadRoomInfo() {
        fetchAddingRoomInfo(room.id).then(r => {
            console.log(r);
            setAddingRoomInfo(r);

        })
    }

    useEffect(() => {
        loadRooms();
    }, [])

    return (
        <>
            <button onClick={() => {
                loadRoomInfo().then(r => {
                    props.onClick(room, addingRoomInfo);
                    console.log(addingRoomInfo)
                })

            }} className={styleClasses.room}
                    style={props.style}>{props.num}<br/>{room.realStudentsCount}/{room.countOfPossibleStudents}</button>
        </>
    );
}

export default Room;