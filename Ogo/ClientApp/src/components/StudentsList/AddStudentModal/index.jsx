import React, {useState} from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle, FormControl, FormControlLabel, Input, InputAdornment, InputLabel,
    MenuItem,
    TextField,
    Typography
} from "@mui/material";
import {default as axios} from "axios";
import Checkbox from "@mui/material/Checkbox";
import {postStudent} from "../../../responses/help";

const housings = [
    {
        value: '7',
        label: '7',
    },
    {
        value: '9',
        label: '9',
    },
    {
        value: '11',
        label: '11',
    },
    {
        value: '13',
        label: '13',
    },
    {
        value: '15',
        label: '15',
    },
];

const AddStudentModal = ({open, close}) => {
    const [fullName, setFullName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [birthPlace, setBirthPlace] = useState('');
    const [studentNumber, setStudentNumber] = useState('');
    const [group, setGroup] = useState('');
    const [image, setImage] = useState('');
    const [isNeededRoom, setIsNeededRoom] = useState('');
    const [dateOrderEnrollment, setDateOrderEnrollment] = useState('');
    const [numberOrderEnrollment, setNumberOrderEnrollment] = useState('');
    const [responseStatus, setResponseStatus] = useState(true);

    const changeFullName = (event) => {
        setFullName(event.target.value);
    };
    const changeBirthday = (event) => {
        setBirthday(event.target.value);
    };
    const changeBirthPlace = (event) => {
        setBirthPlace(event.target.value);
    };
    const changeImage = (event) => {
        setImage(event.target.value);
    };

    async function loadStudent() {
        let form = new FormData();
        form.append("number", studentNumber);
        form.append("fullName", fullName);
        form.append("groupName", group);
        form.append("birthday", birthday);
        let img = document.getElementById("image").files[0];
        form.append("image", img);
        form.append("isNeededRoom", isNeededRoom);
        form.append("numberOfOrderOfEnrollment", numberOrderEnrollment);
        form.append("dateOfEnrollment", dateOrderEnrollment);
        form.append("placeOfBirth", birthPlace);

        let response = await postStudent(form);

        if (response.status == "200") {
            close();
        } else {
            setResponseStatus(false)
        }
    }

    return (
        <div>
            <Dialog open={open}>
                <DialogTitle>Добавить студента</DialogTitle>
                <DialogContent>
                    <label style={{display: "flex", justifyContent: "space-between"}}>
                        <Typography variant="standard">
                            Фото студента
                        </Typography>
                        <input
                            required
                            id="image"
                            name="Image"
                            value={image}
                            onChange={changeImage}
                            type="file"
                            accept=".jpg, .jpeg, .png"
                        />
                    </label>
                    <TextField
                        required
                        value={fullName}
                        onChange={changeFullName}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="ФИО"
                        type="name"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        required
                        value={birthday}
                        onChange={changeBirthday}
                        InputLabelProps={{shrink: true}}
                        margin="dense"
                        id="name"
                        label="Дата рождения"
                        type="date"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        required
                        value={birthPlace}
                        onChange={changeBirthPlace}
                        autoFocus
                        margin="dense"
                        id="birthPlace"
                        label="Место рождения"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        required
                        value={dateOrderEnrollment}
                        onChange={evt => setDateOrderEnrollment(evt.target.value)}
                        id="dateOrderEnrollment"
                        InputLabelProps={{shrink: true}}
                        margin="dense"
                        label="Дата зачисления"
                        type="date"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        required
                        value={numberOrderEnrollment}
                        onChange={evt => setNumberOrderEnrollment(evt.target.value)}
                        id="numberOrderEnrollment"
                        margin="dense"
                        label="Номер приказа о зачислении"
                        InputProps={{ inputProps: { min: "0" } }}
                        type="number"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        required
                        value={studentNumber}
                        onChange={evt => setStudentNumber(evt.target.value)}
                        autoFocus
                        margin="dense"
                        id="number"
                        label="Студенческий билет"
                        InputProps={{ inputProps: { min: "0" } }}
                        type="number"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        required
                        value={group}
                        onChange={(evt) =>
                            setGroup(evt.target.value)}
                        autoFocus
                        margin="dense"
                        id="group"
                        label="Группа"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <FormControlLabel
                        componentsProps={{typography: {variant: 'standart'}}}
                        control={<Checkbox
                            value={isNeededRoom}
                            onChange={evt => setIsNeededRoom(evt.target.value)}
                        />}
                        label="Нуждается в общежитии"
                    />
                </DialogContent>
                <DialogActions style={{display: "flex", justifyContent: "start", alignItems: "center"}}>
                    <div>
                        <Button onClick={() => {
                            setResponseStatus(true);
                            close()
                        }}>Отменить</Button>
                        <Button onClick={loadStudent}>Добавить</Button>
                    </div>
                    <Typography
                        style={{color: "red"}}
                        hidden={responseStatus}
                        variant="subtitle1"
                        component="div"
                    >
                        Проверьте корректность введеных данных
                    </Typography>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default AddStudentModal;