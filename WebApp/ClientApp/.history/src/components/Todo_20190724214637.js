import React, { useState } from 'react';
import { Container, Typography, CssBaseline,
     AppBar, Toolbar, Box } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import TodoList from './TodoListList'
import TodoActions from './TodoActions';


let id = 2;

const Todo = (props) => {
    // hooks
    const [open, setOpen] = useState(false)

    const [checkedIds, setCheckedIds] = useState([]);
    const [item, setItem] = useState({ val: '' })
    const [addButton, enableAdd] = useState(false)
    const { enqueueSnackbar, closeSnackbar } = useSnackbar()

    const hasSelectedIds = checkedIds.length > 0;

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

    return (
        <>
            <CssBaseline />
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant="h4" color="inherit">
                        Todo
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container>
                <Box>
                    <TodoList />
                    <Box>
                       <TodoActions />
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default Todo;