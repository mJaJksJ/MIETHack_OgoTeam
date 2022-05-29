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

    function FloorString(floorNum, room){
        const rmNum = `${room}`.length === 1 ? `0${room}` : room;
        return `${floorNum}${rmNum}`;
    }

    function styleBackground(){
        let styleBack = 'styleClasses.room33';
        switch (room.countOfPossibleStudents){
            case 4:
                switch (room.realStudentsCount){
                    case 0:
                        styleBack = styleClasses.room0;
                        break;

                    case 1:
                        styleBack = styleClasses.room25;
                        break;

                    case 2:
                        styleBack = styleClasses.room50;
                        break;

                    case 3:
                        styleBack = styleClasses.room75;
                        break;

                    case 4:
                        styleBack = styleClasses.room100;
                        break;
                }
                break;

            case 3:
                switch (room.realStudentsCount){
                    case 0:
                        styleBack = styleClasses.room0;
                        break;

                    case 1:
                        styleBack = styleClasses.room33;
                        break;

                    case 2:
                        styleBack = styleClasses.room66;
                        break;

                    case 3:
                        styleBack = styleClasses.room100;
                        break;
                }
                break;

            case 2:
                switch (room.realStudentsCount){
                    case 0:
                        styleBack = styleClasses.room0;
                        break;

                    case 1:
                        styleBack = styleClasses.room50;
                        break;

                    case 2:
                        styleBack = styleClasses.room100;
                        break;
                }
                break;

            default:
                styleBack = styleClasses.room0;
                break;
        }
return styleBack;
    }

    return (
        <>
            <button onClick={() => {
                console.log(room);
                const data = fetchAddingRoomInfo(room.id);
                console.log(data);
                props.onClick(room, data);
            }} className={`${styleClasses.room} ${styleBackground()}`}
                    style={props.style}>{FloorString(props.floor, props.num)}<br/>{room.realStudentsCount}/{room.countOfPossibleStudents}</button>
        </>
    );
}

export default Room;