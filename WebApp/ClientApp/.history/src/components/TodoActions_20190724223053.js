import React, { useState } from 'react';
import { Fab } from '@material-ui/core';
import 'typeface-roboto';
import DeleteIcon from '@material-ui/icons/Delete'
import AddToListButton from './AddToListButton';
import addToList from './AddToList'

const TodoActions = (props)=>{
    return(<>
        <AddToListButton />
        <Fab disabled={!hasSelectedIds}>
            <DeleteIcon />
        </Fab>
        <addToList />
    </>)
}

export default TodoActions;