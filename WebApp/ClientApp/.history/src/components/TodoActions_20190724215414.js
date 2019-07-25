import React, { useState } from 'react';
import { Fab, Dialog, DialogTitle, DialogContent, 
    TextField, DialogActions, Button } from '@material-ui/core';
import 'typeface-roboto';
import { makeStyles } from '@material-ui/styles';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete'

const useStyles = makeStyles(theme => {
    return {
        fab: {
            position: "fixed",
            bottom: 1,
            right: 1
        }
    }
});

// hooks
const [open, setOpen] = useState(false)
const [item, setItem] = useState({ val: '' })
const [addButton, enableAdd] = useState(false)
const { enqueueSnackbar, closeSnackbar } = useSnackbar()

const handleDialog = () => {
    setOpen(true);
}

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
        <Fab color="secondary" className={classes.fab} onClick={handleDialog}>
            <AddIcon />
        </Fab>
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