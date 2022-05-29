import React, {useEffect} from 'react';
import style from './style.module.css'
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

function createData(address, countRooms, countPlaces, emptyRooms, emptyPlaces) {
    return {address, countRooms, countPlaces, emptyRooms, emptyPlaces};
}

const rows = [
    createData('Зеленоград, ул. Юности , д.7', 157, 436, 12, 34),
    createData('Зеленоград, ул. Юности , д.9', 174, 482, 11, 44),
    createData('Зеленоград, ул. Юности , д.11', 134, 216, 12, 23),
    createData('Зеленоград, ул. Юности , д.13', 176, 464, 28, 23),
    createData('Зеленоград, ул. Юности , д.15', 177, 476, 23, 23),
];


const MainPage = () => {


    return (
        <div>
            <div className={style.image}>
            </div>
            <div className={style.root}>
                <div style={{display: "flex", justifyContent: "center", flexDirection: "row"}}>
                    <TableContainer style={{marginTop: "20px", width: "max-content"}} component={Paper}>
                        <Table sx={{minWidth: 650}} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Адреса общежитий университета</TableCell>
                                    <TableCell>Количество жилых комнат</TableCell>
                                    <TableCell>Количество занятых мест</TableCell>
                                    <TableCell>Количество пустых комнат</TableCell>
                                    <TableCell>Количество свободных мест</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                    >
                                        <TableCell align="left">{row.address}</TableCell>
                                        <TableCell align="left">{row.countRooms}</TableCell>
                                        <TableCell align="left">{row.countPlaces}</TableCell>
                                        <TableCell align="left">{row.emptyRooms}</TableCell>
                                        <TableCell align="left">{row.emptyPlaces}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>


    );
};

export default MainPage;