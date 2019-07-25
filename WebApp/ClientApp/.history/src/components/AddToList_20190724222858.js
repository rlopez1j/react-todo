import React, { useState } from 'react';
import {Dialog, DialogTitle, DialogContent, 
    TextField, DialogActions, Button } from '@material-ui/core';
import { useSnackbar } from 'notistack';

let id = 2;

const [addButton, enableAddButton] = useState(false)
const { enqueueSnackbar, closeSnackbar } = useSnackbar()
const [item, setItem] = useState({ val: '' })

const closeAddDialog = () => {
    openAddDialog(false)
}

const addToList = () => {
    const newTodos = [...todos];
    id += 1;
    newTodos.push({ id, text: item.val });
    setTodos(newTodos);
    setItem({ val: '' });
    openAddDialog(false)
    enableAddButton(false)
    enqueueSnackbar('You have added an item!', { variant: 'success' })
}

const AddToList = (props)=>{
    return(<>
        <Dialog open={openDialog} onClose={closeAddDialog}>
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
                <Button onClick={closeAddDialog}>
                    Cancel
                </Button>
                <Button disabled={!addButton} onClick={addToList}>
                    Add
                </Button>
            </DialogActions>
        </Dialog>    
    </>)
}

export default AddToList;