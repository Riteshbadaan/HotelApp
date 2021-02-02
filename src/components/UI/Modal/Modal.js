import React from 'react';
import BackDrop from '../BackDrop/BackDrop';
import classes from './Modal.module.css';

const Modal = (args) =>{
    return(
        <div>
            <BackDrop cancel1={args.cancel}/>
            <div className={classes.Modal}>
                {args.children}
            </div>
        </div>
    )
}

export default Modal;