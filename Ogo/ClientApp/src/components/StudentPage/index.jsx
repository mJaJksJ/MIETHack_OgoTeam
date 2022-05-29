import React, {useEffect, useState} from 'react';
import {useParams, Link} from "react-router-dom";
import {fetchStudentInfo} from "../../responses/help";
import {Button, Card, CardActions, CardContent, TextField} from "@mui/material";
import Loading from "../Loading";
import classes from './style.module.css'
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";


const StudentPage = () => {
    const {id} = useParams();
    const [student, setStudent] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const [editMode, setEditMode] = useState(true)
    async function loadStudent() {
        const data = await fetchStudentInfo(id);
        console.log(data);

        if (data) {
            setStudent(data);
            setIsLoading(false);
        }
    }
    useEffect(() =>
            loadStudent(id),
        []);


    return (isLoading ? <Loading/> :
            <Card className={classes.root}>
                <Button variant="outlined" startIcon={<ArrowBackOutlinedIcon/>} component={Link} to="/students">
                    Вернуться к студентам
                </Button>
                <CardContent>
                    <TextField
                        font
                        variant="standard"
                        margin="dense"
                        label="ФИО"
                        defaultValue={student.fullName}
                        className={classes.fullName}
                        InputProps={{
                            readOnly: true
                        }}
                    />
                    <br/>
                    <TextField
                        variant="standard"
                        margin="dense"
                        type="number"
                        label="Номер студенсческого билета"
                        defaultValue={student.number}
                        className={classes.number}
                        InputProps={{
                            readOnly: true
                        }}
                    />
                    <br/>
                    <TextField
                        id="birthDay"
                        variant="standard"
                        margin="dense"
                        type="date"
                        label="Дата рождения"
                        defaultValue={student.birthDay.split(" ")[0]}
                        className={classes.date}
                        InputProps={{
                            readOnly: true
                        }}
                    />
                    <br/>
                    <TextField
                        id="birthPlace"
                        variant="standard"
                        margin="dense"
                        type="text"
                        label="Место рождения"
                        defaultValue={student.placeOfBirth}
                        className={classes.fullName}
                        InputProps={{
                            readOnly: true
                        }}
                    />
                    <br/>
                    <TextField
                        id="numberOfOrderOfEnrollment"
                        variant="standard"
                        margin="dense"
                        label="Приказ о зачислении"
                        defaultValue={student.numberOfOrderOfEnrollment}
                        className={classes.fullName}
                        InputProps={{
                            readOnly: true
                        }}
                    />
                    <br/>
                    <TextField
                        id="numberOfOrderOfHostel"
                        variant="standard"
                        margin="dense"
                        label="Приказ о заселении в общежитие"
                        defaultValue={student.numberOfOrderOfHostel}
                        className={classes.fullName}
                        InputProps={{
                            readOnly: true
                        }}
                    />
                    <br/>
                    <TextField
                        id="dateOfEnrollment"
                        variant="standard"
                        margin="dense"
                        type="date"
                        label="Дата заселения"
                        defaultValue={student.dateOfEnrollment.split(" ")[0]}
                        className={classes.date}
                        InputProps={{
                            readOnly: true
                        }}
                    />
                    <br/>
                    <TextField
                        variant="standard"
                        margin="dense"
                        type="number"
                        label="Корпус"
                        defaultValue={student.numberOfHousing}
                        className={classes.number}
                        InputProps={{
                            readOnly: true
                        }}
                    />
                    <br/>
                    <TextField
                        variant="standard"
                        margin="dense"
                        type="number"
                        label="Комната"
                        defaultValue={student.numberOfRoom}
                        className={classes.number}
                        InputProps={{
                            readOnly: true
                        }}
                    />
                    <br/>
                </CardContent>
                <CardActions style={{display: "flex", justifyContent: "space-between"}}>
                    <div>
                        {editMode ? <Button onClick={() => setEditMode(true)}>Редактировать</Button>:}

                        <Button onClick={}>Отменить</Button>
                        <Button onClick={}>Сохранить</Button>
                    </div>
                    <Button variant={"contained"} color={"error"}>Удалить</Button>
                </CardActions>
            </Card>
    );
};

export default StudentPage;