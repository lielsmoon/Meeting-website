import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import api from "../api";
import { useHistory } from "react-router-dom";
import QualitiesList from "./qualitiesList";

const UserPage = ({ id }) => {
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(id).then((data) => setUser(data));
    }, []);
    const history = useHistory();
    const handleRetern = () => {
        history.replace("/users");
    };

    if (user) {
        return (
            <div>
                <h1>{user.name}</h1>
                <div>{`Профессия: ${user.profession.name}`}</div>
                <QualitiesList qualities={user.qualities} />
                <p>{`Количество встреч: ${user.completedMeetings}`}</p>
                <p>{`Оценка: ${user.rate}`}</p>
                <button onClick={handleRetern}>Все пользователи</button>
            </div>
        );
    } else {
        return <h1>Loading</h1>;
    }
};
UserPage.propTypes = {
    id: PropTypes.string
};
export default UserPage;
