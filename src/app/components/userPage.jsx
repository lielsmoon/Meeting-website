import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import api from "../api";
import { useHistory } from "react-router-dom";
import Loader from "./loader";
const UserPage = ({ id }) => {
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(id).then((data) => setUser(data));
    }, []);
    const history = useHistory();
    const handleRetern = () => {
        history.replace("/users");
    };
    const handleUsers = (user) => {
        return (
            <div>
                <h1>{user.name}</h1>
                <div>{`Профессия: ${user.profession.name}`}</div>
                <p>
                    {user.qualities.map((quality) => (
                        <span
                            className={`badge m-1 bg-${quality.color}`}
                            key={quality._id}
                        >
                            {quality.name}
                        </span>
                    ))}
                </p>
                <p>{`Количество встреч: ${user.completedMeetings}`}</p>
                <p>{`Оценка: ${user.rate}`}</p>
                <button onClick={handleRetern}>Все пользователи</button>
            </div>
        );
    };
    return <>{user ? handleUsers(user) : <Loader />}</>;
};
UserPage.propTypes = {
    id: PropTypes.string
};
export default UserPage;
