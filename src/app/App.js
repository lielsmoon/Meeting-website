import React from "react";
import NavBar from "./components/navBar";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./layouts/login";
import Main from "./layouts/main";
import UserPages from "./layouts/users";

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/users/:userId?" component={UserPages} />
                <Route path="/" component={Main} />
                <Redirect to="/" />
            </Switch>
        </div>
    );
}

export default App;
