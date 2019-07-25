import React, { useState } from 'react';
import { Fab, Dialog, DialogTitle, DialogContent, 
    TextField, DialogActions, Button } from '@material-ui/core';
import 'typeface-roboto';
import DeleteIcon from '@material-ui/icons/Delete'
import { useSnackbar } from 'notistack';
import AddToListButton from './AddToListButton';

let id = 2;

// hooks
const [item, setItem] = useState({ val: '' })
const [addButton, enableAdd] = useState(false)
const { enqueueSnackbar, closeSnackbar } = useSnackbar()


const handleClose = () => {
    setOpen(false)
}

const addToList = () => {
    const newTodos = [...todos];
    id += 1;
    newTodos.push({ id, text: item.val });
    setTodos(newTodos);
    setItem({ val: '' });
    setOpen(false)
    enableAdd(false)
    enqueueSnackbar('You have added an item!', { variant: 'success' })
}

// figure out what i was using this for
const handleChange = (event) => {
    enableAdd(true)
    setItem({ val: event.target.value })
}

const TodoActions = (props)=>{
    const classes = useStyles();

    return(<>
        <AddToListButton />
        <Fab disabled={!hasSelectedIds}>
            <DeleteIcon />
        </Fab>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>
                Add item to Todo list
            </DialogTitle>
            <DialogContent>
                <TextField onChange={handleChange}
                    autoFocus
                    placeholder="Item"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>
                    Cancel
                </Button>
                <Button disabled={!addButton} onClick={addToList}>
                    Add
                </Button>
            </DialogActions>
        </Dialog>
    </>)
}

export default TodoActions;