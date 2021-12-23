import React from "react";
import { useParams } from "react-router-dom";
import Users from "../components/users";
import UserPage from "../components/userPage";

const UserPages = () => {
    const params = useParams();
    const { userId } = params;
    console.log(userId);
    return <>{userId ? <UserPage id={userId} /> : <Users />}</>;
};

export default UserPages;
