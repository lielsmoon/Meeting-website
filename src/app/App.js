import React from "react";
import NavBar from "./components/ui/navBar";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./layouts/login";
import Main from "./layouts/main";
import UserPages from "./layouts/users";
import EditUserPage from "./layouts/editUserPage";

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/users/:userId/edit" component={EditUserPage} />
                <Route path="/users/:userId?" component={UserPages} />
                <Route path="/login/:type?" component={Login} />
                <Route path="/" component={Main} />
                <Redirect to="/" />
            </Switch>
        </div>
    );
}

export default App;
