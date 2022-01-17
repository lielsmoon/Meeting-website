import React from "react";
import { useParams } from "react-router-dom";
import UsersListPage from "../components/page/usersListPage";
import UserPage from "../components/page/userPage";

const UserPages = () => {
    const { userId } = useParams();
    return <>{userId ? <UserPage id={userId} /> : <UsersListPage />}</>;
};

export default UserPages;
