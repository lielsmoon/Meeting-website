import React from "react";
import { useParams } from "react-router-dom";
import UsersList from "../components/usersList";
import UserPage from "../components/userPage";

const UserPages = () => {
    const params = useParams();
    const { userId } = params;
    return <>{userId ? <UserPage id={userId} /> : <UsersList />}</>;
};

export default UserPages;
