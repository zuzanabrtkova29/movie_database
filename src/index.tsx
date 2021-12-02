import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {store} from './redux/store'
import {BrowserRouter} from 'react-router-dom'
import {defaultTheme} from './styles/defaultTheme'
import {MuiThemeProvider} from '@material-ui/core'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <MuiThemeProvider theme={defaultTheme}>
                    <App/>
                </MuiThemeProvider>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)