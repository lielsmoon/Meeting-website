import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import api from "../../../api";
import { useParams, Link } from "react-router-dom";
import Qualities from "../../ui/qualities";

const UserPage = ({ id }) => {
    const { userId } = useParams();
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(id).then((data) => setUser(data));
    }, []);
    // const history = useHistory();
    // const handleRetern = () => {
    //     history.replace("/users");
    // };

    if (user) {
        console.log(user.qualities);
        return (
            <div>
                <h1>{user.name}</h1>
                <div>{`Профессия: ${user.profession.name}`}</div>
                <Qualities qualities={user.qualities} />
                <p>{`Количество встреч: ${user.completedMeetings}`}</p>
                <p>{`Оценка: ${user.rate}`}</p>
                <Link to={`/users/${userId}/edit`}>
                    <button>Изменить</button>
                </Link>
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
