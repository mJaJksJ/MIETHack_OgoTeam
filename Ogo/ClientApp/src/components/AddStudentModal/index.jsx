import React from 'react';
import style from './index.modal.css'

const AddStudentModal = ({children}) => {
    return (
        <div className={style.root}>
            {children}
        </div>
    );
};

export default AddStudentModal;