import React, {useEffect, useState} from 'react';
import styleClasses from './RoomInfo.module.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {Link} from "react-router-dom";

function RoomInfo(props) {
    class ArrEmpties extends React.Component {
        render() {
            const final = [];

            for (let  i = 0; i < props.room.countOfPossibleStudents - props.room.realStudentsCount; i++) {
                final.push(<ListItem
                    key={i}
                    secondaryAction={
                        <IconButton edge="end" aria-label="comments">
                            <AddCircleOutlineIcon />
                        </IconButton>
                    }
                    disablePadding
                >
                    <ListItemButton  dense>
                        <ListItemText primary={'Добавить студента'} />
                    </ListItemButton>
                </ListItem>);
            }

            return <>{final}</>
        }
    }

    console.log(props)

    return (
        <>
            <h3>Комната {props.floor}</h3>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {props.info.map(info => {
                    return (
                        <ListItem
                            key={-1}
                            secondaryAction={
                                <IconButton edge="end" aria-label="comments">
                                    <DeleteIcon />
                                </IconButton>
                            }
                            disablePadding
                        >
                            <ListItemButton onClick={()=>{console.log(props.info)}} component={Link} to={`/students/${info.id}`} dense>
                                <ListItemText primary={`${info.fullName}`} />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
                <ArrEmpties/>
            </List>
        </>

    );
}

export default RoomInfo;