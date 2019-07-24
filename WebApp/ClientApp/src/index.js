import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import { SnackbarProvider } from 'notistack';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <SnackbarProvider>
            <App />
        </SnackbarProvider>
    </ThemeProvider>
    , document.getElementById('root'));