import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"

const theme = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            light: "#242D33",
            main: "#242D33",
            dark: "#1B2226"
        },
        secondary: {
            light: "#008CFF",
            main: "#008CFF",
            dark: "#00569c"
        },
        background: {
            default: "#1B2226"
        }
    }
})

ReactDOM.render( 
    <React.StrictMode>
        <MuiThemeProvider theme={theme}>
            <App />
        </MuiThemeProvider>
    </React.StrictMode>, 
    document.getElementById('root')
    );