import React from 'react';
import styleClasses from './Housing.module.css';
import WatterRoom from "./WaterRoom/WaterRoom";
import Room from "./Room/Room";
import ToiletRoom from "./ToiletRoom/ToiletRoom";
import StairsRoom from "./StairsRoom/StairsRoom";
import KitchenRoom from "./KitchenRoom/KitchenRoom";
import axios from "axios";

function Housing(props) {
    

    return (
        <>
            <h1>{`Корпус ${props.housingNum} этаж ${props.floor}`}</h1>
            <div style={{whiteSpace: 'nowrap', overflowX: 'scroll'}}>
                <WatterRoom/><Room/><Room/><Room/><Room/><Room/><Room/><Room/><Room/><Room/><Room/><Room/><Room/><Room/><Room/><Room/><Room/><Room/><Room/><Room/><Room/><WatterRoom/>
                <br/>
                <br/>
                <ToiletRoom/><Room/><Room/><Room/><Room/><Room/><StairsRoom/><KitchenRoom/><Room/><Room/><Room/><Room/><Room/><Room/><Room/><Room/><StairsRoom/><KitchenRoom/><Room/><Room/><Room/><Room/><Room/><ToiletRoom/>
                <br/>
            </div>

            <br/>
            <button onClick={props.backToDormitory}>назад</button>
        </>
    );
}

export default Housing;