import React, {useState} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import {DatePicker} from '@mui/x-date-pickers/DatePicker';

const AddStudentModal = ({open, close}) => {
    const [birthday, setBirthday] = useState(null);
    const [fullName, setFullName] = useState(null);
    const [studentNumber, setStudentNumber] = useState(null);
    const [group, setGroup] = useState(null);

    return (
        <div>
            <Dialog open={open} onClose={close}>
                <DialogTitle>Добавить студента</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="ФИО"
                        type="name"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Студенческий билет"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Группа"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Комната"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={close}>Отменить</Button>
                    <Button onClick={close}>Добавить</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default AddStudentModal;