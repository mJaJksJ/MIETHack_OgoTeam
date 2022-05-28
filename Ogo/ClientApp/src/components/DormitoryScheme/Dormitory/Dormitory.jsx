import React from 'react';
import styleClasses from './Dormitory.module.css';

function Dormitory(props) {
    return (
        <>
            <div className={styleClasses.backgroundScheme}>
                <button className={styleClasses.topHousing} onClick={props.choiseHousing}>11</button>
                <button className={styleClasses.bottomHousing} style={{left: '5%'}} onClick={() => props.choiseHousing(7, 1)}>7</button>
                <button className={styleClasses.bottomHousing} style={{left: '30%'}} onClick={() => props.choiseHousing(9, 1)}>9</button>
                <button className={styleClasses.bottomHousing} style={{right: '30%'}} onClick={() => props.choiseHousing(13, 1)}>13</button>
                <button className={styleClasses.bottomHousing} style={{right: '5%'}} onClick={() => props.choiseHousing(15, 4)}>15</button>
            </div>
        </>
    );
}

export default Dormitory;