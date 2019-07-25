import React, { useState } from 'react';
import {Dialog, DialogTitle, DialogContent, 
    TextField, DialogActions, Button } from '@material-ui/core';
import { useSnackbar } from 'notistack';

let id = 2;

const [addButtonEnabled, enableAddButton] = useState(false)
const { enqueueSnackbar, closeSnackbar } = useSnackbar()
const [item, setItem] = useState({ val: '' })

const closeAddDialog = () => {
    openAddDialog(false)
}

const addItemToList = () => {
    const newTodos = [...todos]; // get from parent(?)
    id += 1;
    newTodos.push({ id, text: item.val });
    setTodos(newTodos); // get from parent(?)
    setItem({ val: '' });
    openAddDialog(false) // get from parent(?)
    enableAddButton(false)
    enqueueSnackbar('You have added an item!', { variant: 'success' })
}

const AddToList = (props)=>{
    return(<>
        <Dialog open={openDialog} onClose={closeAddDialog}> {/* get from parent(?) */}
            <DialogTitle>
                Add item to Todo list
            </DialogTitle>
            <DialogContent>
                <TextField onChange={onCheckboxChanged} // get from [arent(?)
                    autoFocus
                    placeholder="Item"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={closeAddDialog}>
                    Cancel
                </Button>
                <Button disabled={!addButtonEnabled} onClick={addItemToList}>
                    Add
                </Button>
            </DialogActions>
        </Dialog>    
    </>)
}

export default AddToList;