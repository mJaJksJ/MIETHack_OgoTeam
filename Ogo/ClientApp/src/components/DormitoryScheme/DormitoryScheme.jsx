import React, {useState} from 'react';
import Dormitory from "./Dormitory/Dormitory";
import Housing from "./Housing/Housing";

function DormitoryScheme() {
    const [showDormitory, setShowDormitory] = useState(true);
    const [housingNum, setHousingNum] = useState(0);
    const [floor, setFloor] = useState(0);

    return (
        <>
            {showDormitory ? <Dormitory choiseHousing={(num, floorNum) => {
                setShowDormitory(false);
                setHousingNum(num);
                setFloor(floorNum);
            }}/> : <Housing backToDormitory={() => setShowDormitory(true)} housingNum={housingNum} floor={floor}/>}
        </>
    );
};

export default DormitoryScheme;