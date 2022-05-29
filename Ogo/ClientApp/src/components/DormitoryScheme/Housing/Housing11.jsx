import React, {useEffect, useState} from 'react';
import {Button} from "@mui/material";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import styleClasses from "./Housing.module.css";


function Housing(props) {

    return (
        <div>
            <Button variant="outlined" startIcon={<ArrowBackOutlinedIcon />} onClick={props.backToDormitory}>К схеме общежития</Button>
            <div className={styleClasses.backgroundScheme11}/>
        </div>

    );
}

export default Housing;