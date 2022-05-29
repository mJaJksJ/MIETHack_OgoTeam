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
    const [numberOrderHostel, setNumberOrderHostel] = useState('');
    const [studentNumber, setStudentNumber] = useState('');
    const [group, setGroup] = useState('');
    const [image, setImage] = useState('');
    const [isNeededRoom, setIsNeededRoom] = useState('');
    const [dateOrderEnrollment, setDateOrderEnrollment] = useState('');
    const [numberOrderEnrollment, setNumberOrderEnrollment] = useState('');

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


        let response;
        try {
            response = (await axios.post('https://localhost:7076/api/AddStudent/', form, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            }));
            console.log(response);
        } catch (error) {
            console.error(error);
        }


        console.log(response);
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
                            id="image"
                            name="Image"
                            value={image}
                            onChange={changeImage}
                            type="file"
                            accept=".jpg, .jpeg, .png"
                        />
                    </label>
                    <TextField
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
                        value={numberOrderEnrollment}
                        onChange={evt => setNumberOrderEnrollment(evt.target.value)}
                        id="numberOrderEnrollment"
                        margin="dense"
                        label="Номер приказа о зачислении"
                        type="number"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        value={studentNumber}
                        onChange={evt => setStudentNumber(evt.target.value)}
                        autoFocus
                        margin="dense"
                        id="number"
                        label="Студенческий билет"
                        type="number"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
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
                        componentsProps={{ typography: { variant: 'standart' } }}
                        control={<Checkbox
                            value={isNeededRoom}
                            onChange={evt => setIsNeededRoom(evt.target.value)}
                            defaultChecked
                        />}
                        label="Нуждается в общежитии"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={close}>Отменить</Button>
                    <Button onClick={loadStudent}>Добавить</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default AddStudentModal;