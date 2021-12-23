import React from "react";
import NavBar from "./components/navBar";
import { Route } from "react-router-dom";
import Login from "./layouts/login";
import Main from "./layouts/main";
import UserPages from "./layouts/users";

function App() {
    return (
        <div>
            <NavBar />
            <Route path="/login" component={Login} />
            <Route path="/main" component={Main} />
            <Route path="/users/:userId?" component={UserPages} />
        </div>
    );
}

export default App;
