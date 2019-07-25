import React, { useState } from 'react';
import { Container, Typography, CssBaseline,
     AppBar, Toolbar, Box } from '@material-ui/core';
import TodoList from './TodoListList'
import TodoActions from './TodoActions';

const Todo = (props) => {
    // hooks
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