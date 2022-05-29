import React from 'react';
import styleClasses from './Dormitory.module.css';

function Dormitory(props) {
    return (
        <>
            <div className={styleClasses.backgroundScheme}>
                <button className={`${styleClasses.Housing} ${styleClasses.Housing7} ${styleClasses.Floor1}`} onClick={() => props.choiseHousing(9, 1)}>1</button>
                <button className={`${styleClasses.Housing} ${styleClasses.Housing7} ${styleClasses.Floor2}`} onClick={() => props.choiseHousing(9, 2)}>2</button>
                <button className={`${styleClasses.Housing} ${styleClasses.Housing7} ${styleClasses.Floor3}`} onClick={() => props.choiseHousing(9, 3)}>3</button>
                <button className={`${styleClasses.Housing} ${styleClasses.Housing7} ${styleClasses.Floor4}`} onClick={() => props.choiseHousing(9, 4)}>4</button>
                <button className={`${styleClasses.Housing} ${styleClasses.Housing7} ${styleClasses.Floor5}`} onClick={() => props.choiseHousing(9, 5)}>5</button>

                <button className={`${styleClasses.Housing} ${styleClasses.Housing9} ${styleClasses.Floor1}`} onClick={() => props.choiseHousing(7, 1)}>1</button>
                <button className={`${styleClasses.Housing} ${styleClasses.Housing9} ${styleClasses.Floor2}`} onClick={() => props.choiseHousing(7, 2)}>2</button>
                <button className={`${styleClasses.Housing} ${styleClasses.Housing9} ${styleClasses.Floor3}`} onClick={() => props.choiseHousing(7, 3)}>3</button>
                <button className={`${styleClasses.Housing} ${styleClasses.Housing9} ${styleClasses.Floor4}`} onClick={() => props.choiseHousing(7, 4)}>4</button>
                <button className={`${styleClasses.Housing} ${styleClasses.Housing9} ${styleClasses.Floor5}`} onClick={() => props.choiseHousing(7, 5)}>5</button>

                <button className={`${styleClasses.Housing} ${styleClasses.Housing11} ${styleClasses.Floor4}`} onClick={() => props.choiseHousing(11, 4)}>4</button>
                <button className={`${styleClasses.Housing} ${styleClasses.Housing11} ${styleClasses.Floor5}`} onClick={() => props.choiseHousing(11, 5)}>5</button>
                <button className={`${styleClasses.Housing} ${styleClasses.Housing11} ${styleClasses.Floor6}`} onClick={() => props.choiseHousing(11, 6)}>6</button>
                <button className={`${styleClasses.Housing} ${styleClasses.Housing11} ${styleClasses.Floor7}`} onClick={() => props.choiseHousing(11, 7)}>7</button>
                <button className={`${styleClasses.Housing} ${styleClasses.Housing11} ${styleClasses.Floor8}`} onClick={() => props.choiseHousing(11, 8)}>8</button>
                <button className={`${styleClasses.Housing} ${styleClasses.Housing11} ${styleClasses.Floor9}`} onClick={() => props.choiseHousing(11, 9)}>9</button>
                <button className={`${styleClasses.Housing} ${styleClasses.Housing11} ${styleClasses.Floor10}`} onClick={() => props.choiseHousing(11, 10)}>10</button>
                <button className={`${styleClasses.Housing} ${styleClasses.Housing11} ${styleClasses.Floor11}`} onClick={() => props.choiseHousing(11, 11)}>11</button>

                <button className={`${styleClasses.Housing} ${styleClasses.Housing13} ${styleClasses.Floor1}`} onClick={() => props.choiseHousing(13, 1)}>1</button>
                <button className={`${styleClasses.Housing} ${styleClasses.Housing13} ${styleClasses.Floor2}`} onClick={() => props.choiseHousing(13, 2)}>2</button>
                <button className={`${styleClasses.Housing} ${styleClasses.Housing13} ${styleClasses.Floor3}`} onClick={() => props.choiseHousing(13, 3)}>3</button>
                <button className={`${styleClasses.Housing} ${styleClasses.Housing13} ${styleClasses.Floor4}`} onClick={() => props.choiseHousing(13, 4)}>4</button>
                <button className={`${styleClasses.Housing} ${styleClasses.Housing13} ${styleClasses.Floor5}`} onClick={() => props.choiseHousing(13, 5)}>5</button>

                <button className={`${styleClasses.Housing} ${styleClasses.Housing15} ${styleClasses.Floor1}`} onClick={() => props.choiseHousing(15, 1)}>1</button>
                <button className={`${styleClasses.Housing} ${styleClasses.Housing15} ${styleClasses.Floor2}`} onClick={() => props.choiseHousing(15, 2)}>2</button>
                <button className={`${styleClasses.Housing} ${styleClasses.Housing15} ${styleClasses.Floor3}`} onClick={() => props.choiseHousing(15, 3)}>3</button>
                <button className={`${styleClasses.Housing} ${styleClasses.Housing15} ${styleClasses.Floor4}`} onClick={() => props.choiseHousing(15, 4)}>4</button>
                <button className={`${styleClasses.Housing} ${styleClasses.Housing15} ${styleClasses.Floor5}`} onClick={() => props.choiseHousing(15, 5)}>5</button>
            </div>
        </>
    );
}

export default Dormitory;