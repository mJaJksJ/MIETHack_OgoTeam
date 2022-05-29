import React, {useEffect, useState} from 'react';
import styleClasses from './Housing.module.css';
import Room from "./Room/Room";
import {fetchStudentsShort, fetchRooms} from "../../../responses/help";
import {Button} from "@mui/material";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import RoomInfo from "./RoomInfo/RoomInfo";

function Housing(props) {
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [addingRoomInfoPr, setAddingRoomInfoPr] = useState(null)
    const [addingRoomInfo, setAddingRoomInfo] = useState(null);
    const [locker, setLocker] = useState([-1])
    const [lockerLock, setLockerLock] = useState(true)
    const roomsList = fetchRooms(props.housingNum, props.floor);

    async function loadRoomInfo() {
        if(addingRoomInfoPr){
            console.log(addingRoomInfoPr)
            addingRoomInfoPr.then(rm => {
                setAddingRoomInfo(rm);
                if(lockerLock){
                    setLocker([locker+1]);
                    setLockerLock(false);
                }

                console.log(addingRoomInfo)
            });
        }
    }

    useEffect(() => setLockerLock(true), [])

    useEffect(() => {
        loadRoomInfo();

    }, locker)

    return (
        <div>

            <Button variant="outlined" startIcon={<ArrowBackOutlinedIcon />} onClick={props.backToDormitory}>К схеме общежития</Button>

            <div className={styleClasses.backgroundScheme}>
                <Room onClick={(rm, info) => {setSelectedRoom(rm); setAddingRoomInfoPr(info); setLocker([locker+1]);}} rooms={roomsList} num={2} floor={props.floor} style={{top: '5.35%', left: '8.6%'}}/>
                <Room onClick={(rm, info) => {setSelectedRoom(rm); setAddingRoomInfoPr(info); setLocker([locker+1]);}}rooms={roomsList} num={4} floor={props.floor} style={{top: '5.35%', left: '12.6%'}}/>
                <Room onClick={(rm, info) => {setSelectedRoom(rm); setAddingRoomInfoPr(info); setLocker([locker+1]);}}rooms={roomsList} num={6} floor={props.floor} style={{top: '5.35%', left: '16.7%'}}/><Room
                rooms={roomsList} num={8} floor={props.floor} style={{top: '5.35%', left: '20.8%'}}/><Room onClick={(rm, info) => {setSelectedRoom(rm); setAddingRoomInfoPr(info); setLocker([locker+1]);}}rooms={roomsList} num={10} floor={props.floor} style={{top: '5.35%', left: '24.9%'}}/><Room
                rooms={roomsList} num={12} floor={props.floor} style={{top: '5.35%', left: '28.9%'}}/><Room onClick={(rm, info) => {setSelectedRoom(rm); setAddingRoomInfoPr(info); setLocker([locker+1]);}}rooms={roomsList} num={14} floor={props.floor} style={{top: '5.35%', left: '33%'}}/>
                <Room onClick={(rm, info) => {setSelectedRoom(rm); setAddingRoomInfoPr(info); setLocker([locker+1]);}}rooms={roomsList} num={16} floor={props.floor} style={{top: '5.35%', left: '37.1%'}}/><Room
                rooms={roomsList} num={18} floor={props.floor} style={{top: '5.35%', left: '41.2%'}}/>
                <Room onClick={(rm, info) => {setSelectedRoom(rm); setAddingRoomInfoPr(info); setLocker([locker+1]);}}rooms={roomsList} num={20} floor={props.floor} style={{top: '5.35%', left: '45.2%'}}/>
                <Room onClick={(rm, info) => {setSelectedRoom(rm); setAddingRoomInfoPr(info); setLocker([locker+1]);}}rooms={roomsList} num={37} floor={props.floor} style={{top: '5.35%', left: '49.3%'}}/><Room
                rooms={roomsList} num={38} floor={props.floor} style={{top: '5.35%', left: '53.4%'}}/>
                <Room onClick={(rm, info) => {setSelectedRoom(rm); setAddingRoomInfoPr(info); setLocker([locker+1]);}}rooms={roomsList} num={22} floor={props.floor} style={{top: '5.35%', left: '57.45%'}}/>
                <Room onClick={(rm, info) => {setSelectedRoom(rm); setAddingRoomInfoPr(info); setLocker([locker+1]);}}rooms={roomsList} num={24} floor={props.floor} style={{top: '5.35%', left: '61.55%'}}/><Room
                rooms={roomsList} num={26} floor={props.floor} style={{top: '5.35%', left: '65.6%'}}/><Room onClick={(rm, info) => {setSelectedRoom(rm); setAddingRoomInfoPr(info); setLocker([locker+1]);}}rooms={roomsList} num={28} floor={props.floor} style={{top: '5.35%', left: '69.7%'}}/>
                <Room onClick={(rm, info) => {setSelectedRoom(rm); setAddingRoomInfoPr(info); setLocker([locker+1]);}}rooms={roomsList} num={30} floor={props.floor} style={{top: '5.35%', left: '73.7%'}}/><Room
                rooms={roomsList} num={32} floor={props.floor} style={{top: '5.35%', left: '77.8%'}}/><Room onClick={(rm, info) => {setSelectedRoom(rm); setAddingRoomInfoPr(info); setLocker([locker+1]);}}rooms={roomsList} num={34} floor={props.floor} style={{top: '5.35%', left: '81.9%'}}/>
                <Room onClick={(rm, info) => {setSelectedRoom(rm); setAddingRoomInfoPr(info); setLocker([locker+1]);}}rooms={roomsList} num={36} floor={props.floor} style={{top: '5.35%', left: '86%'}}/>
                <br/>
                <br/>
                <Room onClick={(rm, info) => {setSelectedRoom(rm); setAddingRoomInfoPr(info); setLocker([locker+1]);}}rooms={roomsList} num={1} floor={props.floor} style={{top: '51.55%', left: '4.5%'}}/>
                <Room onClick={(rm, info) => {setSelectedRoom(rm); setAddingRoomInfoPr(info); setLocker([locker+1]);}}rooms={roomsList} num={3} floor={props.floor} style={{top: '51.55%', left: '8.6%'}}/>
                <Room onClick={(rm, info) => {setSelectedRoom(rm); setAddingRoomInfoPr(info); setLocker([locker+1]);}}rooms={roomsList} num={5} floor={props.floor} style={{top: '51.55%', left: '12.6%'}}/>
                <Room onClick={(rm, info) => {setSelectedRoom(rm); setAddingRoomInfoPr(info); setLocker([locker+1]);}}rooms={roomsList} num={7} floor={props.floor} style={{top: '51.55%', left: '16.7%'}}/><Room
                rooms={roomsList} num={9} floor={props.floor} style={{top: '51.55%', left: '20.8%'}}/>
                <Room onClick={(rm, info) => {setSelectedRoom(rm); setAddingRoomInfoPr(info); setLocker([locker+1]);}}rooms={roomsList} num={11} floor={props.floor} style={{top: '51.55%', left: '33%'}}/>
                <Room onClick={(rm, info) => {setSelectedRoom(rm); setAddingRoomInfoPr(info); setLocker([locker+1]);}}rooms={roomsList} num={13} floor={props.floor} style={{top: '51.55%', left: '37.1%'}}/><Room
                rooms={roomsList} num={15} floor={props.floor} style={{top: '51.55%', left: '41.2%'}}/>
                <Room onClick={(rm, info) => {setSelectedRoom(rm); setAddingRoomInfoPr(info); setLocker([locker+1]);}}rooms={roomsList} num={17} floor={props.floor} style={{top: '51.55%', left: '45.2%'}}/>
                <Room onClick={(rm, info) => {setSelectedRoom(rm); setAddingRoomInfoPr(info); setLocker([locker+1]);}}rooms={roomsList} num={19} floor={props.floor} style={{top: '51.55%', left: '49.3%'}}/><Room
                rooms={roomsList} num={21} floor={props.floor} style={{top: '51.55%', left: '53.4%'}}/>
                <Room onClick={(rm, info) => {setSelectedRoom(rm); setAddingRoomInfoPr(info); setLocker([locker+1]);}}rooms={roomsList} num={23} floor={props.floor} style={{top: '51.55%', left: '57.5%'}}/>
                <Room onClick={(rm, info) => {setSelectedRoom(rm); setAddingRoomInfoPr(info); setLocker([locker+1]);}}rooms={roomsList} num={25} floor={props.floor} style={{top: '51.55%', left: '61.55%'}}/><Room
                rooms={roomsList} num={27} floor={props.floor} style={{top: '51.55%', left: '65.6%'}}/><Room
                rooms={roomsList} num={29} floor={props.floor} style={{top: '51.55%', left: '77.8%'}}/>
                <Room onClick={(rm, info) => {setSelectedRoom(rm); setAddingRoomInfoPr(info); setLocker([locker+1]);}}rooms={roomsList} num={31} floor={props.floor} style={{top: '51.55%', left: '81.9%'}}/>
                <Room onClick={(rm, info) => {setSelectedRoom(rm); setAddingRoomInfoPr(info); setLocker([locker+1]);}}rooms={roomsList} num={33} floor={props.floor} style={{top: '51.55%', left: '86%'}}/>
                <Room onClick={(rm, info) => {setSelectedRoom(rm); setAddingRoomInfoPr(info); setLocker([locker+1]);}}rooms={roomsList} num={35} floor={props.floor} style={{top: '51.55%', left: '90.05%'}}/>
                <br/>
            </div>

            <br/>
            {addingRoomInfo && selectedRoom ? <RoomInfo floor={selectedRoom.number} room={selectedRoom} info={addingRoomInfo}/> : <div></div>}
        </div>
    );
}

export default Housing;