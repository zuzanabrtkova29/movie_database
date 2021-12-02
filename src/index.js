"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
require("./index.css");
const App_1 = __importDefault(require("./App"));
const react_redux_1 = require("react-redux");
const store_1 = require("./redux/store");
const react_router_dom_1 = require("react-router-dom");
const defaultTheme_1 = require("./styles/defaultTheme");
const core_1 = require("@material-ui/core");
react_dom_1.default.render(react_1.default.createElement(react_1.default.StrictMode, null,
    react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(react_redux_1.Provider, { store: store_1.store },
            react_1.default.createElement(core_1.MuiThemeProvider, { theme: defaultTheme_1.defaultTheme },
                react_1.default.createElement(App_1.default, null))))), document.getElementById('root'));
//# sourceMappingURL=index.js.map