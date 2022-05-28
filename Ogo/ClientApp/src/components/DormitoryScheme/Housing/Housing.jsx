import React, {useEffect, useState} from 'react';
import styleClasses from './Housing.module.css';
import WatterRoom from "./WaterRoom/WaterRoom";
import Room from "./Room/Room";
import ToiletRoom from "./ToiletRoom/ToiletRoom";
import StairsRoom from "./StairsRoom/StairsRoom";
import KitchenRoom from "./KitchenRoom/KitchenRoom";
import {fetchGetStudentsShort, fetchRooms} from "../../../responses/help";

function Housing(props) {
    const roomsList = fetchRooms(props.housingNum, props.floor);

    return (
        <div>
            <h1>{`Корпус ${props.housingNum} этаж ${props.floor}`}</h1>
            <div style={{whiteSpace: 'nowrap', overflowX: 'scroll'}}>
                <WatterRoom/><Room rooms={roomsList} num={2}/>
                <Room rooms={roomsList} num={4}/>
                <Room rooms={roomsList} num={6}/><Room
                rooms={roomsList} num={8}/><Room rooms={roomsList} num={10}/><Room
                rooms={roomsList} num={12}/><Room rooms={roomsList} num={14}/><Room rooms={roomsList} num={16}/><Room
                rooms={roomsList} num={18}/><Room rooms={roomsList} num={20}/><Room rooms={roomsList} num={37}/><Room
                rooms={roomsList} num={38}/><Room rooms={roomsList} num={22}/><Room rooms={roomsList} num={24}/><Room
                rooms={roomsList} num={26}/><Room rooms={roomsList} num={28}/><Room rooms={roomsList} num={30}/><Room
                rooms={roomsList} num={32}/><Room rooms={roomsList} num={34}/><Room rooms={roomsList} num={36}/><WatterRoom/>
                <br/>
                <br/>
                <ToiletRoom/><Room rooms={roomsList} num={2}/><Room rooms={roomsList} num={2}/><Room rooms={roomsList}
                                                                                                     num={2}/><Room
                rooms={roomsList} num={2}/><Room rooms={roomsList} num={2}/><StairsRoom/><KitchenRoom/><Room
                rooms={roomsList} num={2}/><Room rooms={roomsList} num={2}/><Room rooms={roomsList} num={2}/><Room
                rooms={roomsList} num={2}/><Room rooms={roomsList} num={2}/><Room rooms={roomsList} num={2}/><Room
                rooms={roomsList} num={2}/><Room rooms={roomsList} num={2}/><StairsRoom/><KitchenRoom/><Room
                rooms={roomsList} num={2}/><Room rooms={roomsList} num={2}/><Room rooms={roomsList} num={2}/><Room
                rooms={roomsList} num={2}/><Room rooms={roomsList} num={2}/><ToiletRoom/>
                <br/>
            </div>

            <br/>
            <button onClick={props.backToDormitory}>назад</button>
        </div>
    );
}

export default Housing;