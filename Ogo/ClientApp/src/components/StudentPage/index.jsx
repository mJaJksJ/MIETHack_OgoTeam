import React, {useEffect, useState} from 'react';
import {useParams, Link} from "react-router-dom";
import {fetchStudentInfo} from "../../responses/help";
import {Avatar, Button, Card, CardActions, CardContent, TextField} from "@mui/material";
import Loading from "../Loading";
import classes from './style.module.css'
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";


const StudentPage = () => {
    const {id} = useParams();
    const [student, setStudent] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const [editMode, setEditMode] = useState(false)

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
            <div style={{display: "flex", justifyContent: "center"}}>
                <Card className={classes.root}>
                    <Button variant="outlined" startIcon={<ArrowBackOutlinedIcon/>} component={Link} to="/students">
                        Вернуться к студентам
                    </Button>
                    <CardContent style={{display: "flex", flexDirection: "column"}}>
                        <img style={{width: "100px", alignSelf: "left", vspace: "5", hspace: "5"}}
                             src="/images/костя.jpg" alt="Костя"/>
                        <TextField
                            font
                            variant="standard"
                            margin="dense"
                            label="ФИО"
                            defaultValue={student.fullName}
                            className={classes.fullName}
                            InputProps={{
                                readOnly: !editMode
                            }}
                        />
                        <TextField
                            variant="standard"
                            margin="dense"
                            type="number"
                            label="Номер студенсческого билета"
                            defaultValue={student.number}
                            className={classes.number}
                            InputProps={{
                                readOnly: !editMode,
                                inputProps: {min: "0"}
                            }}
                        />
                        <TextField
                            id="birthDay"
                            variant="standard"
                            margin="dense"
                            type="date"
                            label="Дата рождения"
                            defaultValue={student.birthDay.split(" ")[0]}
                            className={classes.date}
                            InputProps={{
                                readOnly: !editMode
                            }}
                        />
                        <TextField
                            id="birthPlace"
                            variant="standard"
                            margin="dense"
                            type="text"
                            label="Место рождения"
                            defaultValue={student.placeOfBirth}
                            className={classes.fullName}
                            InputProps={{
                                readOnly: !editMode
                            }}
                        />
                        <TextField
                            id="numberOfOrderOfEnrollment"
                            variant="standard"
                            margin="dense"
                            label="Приказ о зачислении"
                            defaultValue={student.numberOfOrderOfEnrollment}
                            className={classes.fullName}
                            InputProps={{
                                readOnly: !editMode
                            }}
                        />
                        <TextField
                            id="numberOfOrderOfHostel"
                            variant="standard"
                            margin="dense"
                            label="Приказ о заселении в общежитие"
                            defaultValue={student.numberOfOrderOfHostel}
                            className={classes.fullName}
                            InputProps={{
                                readOnly: !editMode
                            }}
                        />
                        <TextField
                            id="dateOfEnrollment"
                            variant="standard"
                            margin="dense"
                            type="date"
                            label="Дата заселения"
                            defaultValue={student.dateOfEnrollment.split(" ")[0]}
                            className={classes.date}
                            InputProps={{
                                readOnly: !editMode
                            }}
                        />
                        <TextField
                            variant="standard"
                            margin="dense"
                            type="number"
                            label="Корпус"
                            defaultValue={student.numberOfHousing}
                            className={classes.number}
                            InputProps={{
                                readOnly: !editMode,
                                inputProps: {min: "0"}
                            }}
                        />
                        <TextField
                            variant="standard"
                            margin="dense"
                            type="number"
                            label="Комната"
                            defaultValue={student.numberOfRoom}
                            className={classes.number}
                            InputProps={{
                                readOnly: !editMode,
                                inputProps: {min: "0"}
                            }}
                        />
                    </CardContent>
                    <CardActions style={{display: "flex", justifyContent: "space-between"}}>
                        <div>
                            {editMode == false
                                ? <Button onClick={() => setEditMode(true)}>
                                    Редактировать
                                </Button>
                                : <Button onClick={() => setEditMode(false)}>
                                    Отменить
                                </Button>
                            }
                        </div>
                        <div>
                            <Button style={{marginRight: "20px"}} disabled={!editMode} variant="contained"
                                    color="primary"
                                    onClick={() => console.log("save")}>Сохранить</Button>
                            <Button variant={"contained"} color={"error"}>Удалить</Button>
                        </div>
                    </CardActions>
                </Card>
            </div>
    );
};

export default StudentPage;