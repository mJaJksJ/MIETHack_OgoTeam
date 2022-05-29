import React, {useState} from 'react';
import Dormitory from "./Dormitory/Dormitory";
import Housing from "./Housing/Housing";
import Housing11 from "./Housing/Housing11";

function DormitoryScheme() {
    const [showDormitory, setShowDormitory] = useState(true);
    const [housingNum, setHousingNum] = useState(0);
    const [floor, setFloor] = useState(0);



    return (
        <>
            <div style={{textAlign: 'center'}}>
                <h1>{showDormitory ? 'Выберите корпус и этаж' : `Корпус ${housingNum} этаж ${floor}`}</h1>
            </div>
            {showDormitory ? <Dormitory choiseHousing={(num, floorNum) => {
                setShowDormitory(false);
                setHousingNum(num);
                setFloor(floorNum);
            }}/> : housingNum === 11
                ? <Housing11 backToDormitory={() => setShowDormitory(true)} housingNum={housingNum} floor={floor}/>
                : <Housing backToDormitory={() => setShowDormitory(true)} housingNum={housingNum} floor={floor}/>
            }
        </>
    );
};

export default DormitoryScheme;