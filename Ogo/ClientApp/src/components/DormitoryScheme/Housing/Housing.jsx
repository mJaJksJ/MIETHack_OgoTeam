import React, {useEffect, useState} from 'react';
import styleClasses from './Housing.module.css';
import Room from "./Room/Room";
import {fetchGetStudentsShort, fetchRooms} from "../../../responses/help";
import {Button} from "@mui/material";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

function Housing(props) {
    const [selectedRoom, setSelectedRoom] = useState({id: 0, housing: 0, number: 0, realStudentsCount: 0, countOfPossibleStudents: 0});

    const roomsList = fetchRooms(props.housingNum, props.floor);

    return (
        <div>

            <Button variant="outlined" startIcon={<ArrowBackOutlinedIcon />} onClick={props.backToDormitory}>К схеме общежития</Button>

            <div className={styleClasses.backgroundScheme}>
                <Room onClick={(rm) => {setSelectedRoom(rm)}} rooms={roomsList} num={2} style={{top: '5.35%', left: '8.6%'}}/>
                <Room rooms={roomsList} num={4} style={{top: '5.35%', left: '12.6%'}}/>
                <Room rooms={roomsList} num={6} style={{top: '5.35%', left: '16.7%'}}/><Room
                rooms={roomsList} num={8} style={{top: '5.35%', left: '20.8%'}}/><Room rooms={roomsList} num={10} style={{top: '5.35%', left: '24.9%'}}/><Room
                rooms={roomsList} num={12} style={{top: '5.35%', left: '28.9%'}}/><Room rooms={roomsList} num={14} style={{top: '5.35%', left: '33%'}}/>
                <Room rooms={roomsList} num={16} style={{top: '5.35%', left: '37.1%'}}/><Room
                rooms={roomsList} num={18} style={{top: '5.35%', left: '41.2%'}}/>
                <Room rooms={roomsList} num={20} style={{top: '5.35%', left: '45.2%'}}/>
                <Room rooms={roomsList} num={37} style={{top: '5.35%', left: '49.3%'}}/><Room
                rooms={roomsList} num={38} style={{top: '5.35%', left: '53.4%'}}/>
                <Room rooms={roomsList} num={22} style={{top: '5.35%', left: '57.45%'}}/>
                <Room rooms={roomsList} num={24} style={{top: '5.35%', left: '61.55%'}}/><Room
                rooms={roomsList} num={26} style={{top: '5.35%', left: '65.6%'}}/><Room rooms={roomsList} num={28} style={{top: '5.35%', left: '69.7%'}}/>
                <Room rooms={roomsList} num={30} style={{top: '5.35%', left: '73.7%'}}/><Room
                rooms={roomsList} num={32} style={{top: '5.35%', left: '77.8%'}}/><Room rooms={roomsList} num={34} style={{top: '5.35%', left: '81.9%'}}/>
                <Room rooms={roomsList} num={36} style={{top: '5.35%', left: '86%'}}/>
                <br/>
                <br/>
                <Room rooms={roomsList} num={1} style={{top: '51.55%', left: '4.5%'}}/>
                <Room rooms={roomsList} num={3} style={{top: '51.55%', left: '8.6%'}}/>
                <Room rooms={roomsList} num={5} style={{top: '51.55%', left: '12.6%'}}/>
                <Room rooms={roomsList} num={7} style={{top: '51.55%', left: '16.7%'}}/><Room
                rooms={roomsList} num={9} style={{top: '51.55%', left: '20.8%'}}/>
                <Room rooms={roomsList} num={11} style={{top: '51.55%', left: '33%'}}/>
                <Room rooms={roomsList} num={13} style={{top: '51.55%', left: '37.1%'}}/><Room
                rooms={roomsList} num={15} style={{top: '51.55%', left: '41.2%'}}/>
                <Room rooms={roomsList} num={17} style={{top: '51.55%', left: '45.2%'}}/>
                <Room rooms={roomsList} num={19} style={{top: '51.55%', left: '49.3%'}}/><Room
                rooms={roomsList} num={21} style={{top: '51.55%', left: '53.4%'}}/>
                <Room rooms={roomsList} num={23} style={{top: '51.55%', left: '57.5%'}}/>
                <Room rooms={roomsList} num={25} style={{top: '51.55%', left: '61.55%'}}/><Room
                rooms={roomsList} num={27} style={{top: '51.55%', left: '65.6%'}}/><Room
                rooms={roomsList} num={29} style={{top: '51.55%', left: '77.8%'}}/>
                <Room rooms={roomsList} num={31} style={{top: '51.55%', left: '81.9%'}}/>
                <Room rooms={roomsList} num={33} style={{top: '51.55%', left: '86%'}}/>
                <Room rooms={roomsList} num={35} style={{top: '51.55%', left: '90.05%'}}/>
                <br/>
            </div>

            <br/>
<div>{selectedRoom.id}</div>
        </div>
    );
}

export default Housing;