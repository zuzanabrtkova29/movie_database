"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const SearchPage_1 = __importDefault(require("./pages/SearchPage"));
const MovieDetailPage_1 = __importDefault(require("./pages/MovieDetailPage"));
const FavoriteMoviesPage_1 = __importDefault(require("./pages/FavoriteMoviesPage"));
function App() {
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement(react_router_dom_1.Routes, null,
            react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(SearchPage_1.default, null) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/detail", element: react_1.default.createElement(MovieDetailPage_1.default, null) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/favorites", element: react_1.default.createElement(FavoriteMoviesPage_1.default, null) }))));
}
exports.default = App;
//# sourceMappingURL=App.js.map