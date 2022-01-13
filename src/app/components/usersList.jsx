import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { paginate } from "../utils/paginate";
import Pagination from "./pagination";
import UserTable from "./usersTable";
import GroupList from "./groupList";
import api from "../api";
import SearchStatus from "./searchStatus";
import _ from "lodash";
const Users = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfessions] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const [sortBy, setSortBy] = useState({ iter: "name", order: "asc" });
    const [users, setUsers] = useState();
    const [search, setSearch] = useState("");
    const pageSize = 8;
    const loading = (
        <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    );
    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);

    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };
    console.log(users);
    const handleToggleBookMark = (id) => {
        setUsers(
            users.map((user) => {
                if (user._id === id) {
                    return { ...user, bookmark: !user.bookmark };
                }
                return user;
            })
        );
    };

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data));
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };
    console.log(search);

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const handleProfessionSelect = (item) => {
        if (search !== "") {
            setSearch("");
        }
        setSelectedProf(item);
    };

    const handleSort = (item) => {
        setSortBy(item);
    };

    if (users) {
        const filteredUsers = search
            ? users.filter((user) =>
                  user.name.toLowerCase().includes(search.toLowerCase())
              )
            : selectedProf
            ? users.filter((user) => user.profession._id === selectedProf._id)
            : users;

        const count = filteredUsers.length;

        const sortedUsers = _.orderBy(
            filteredUsers,
            [sortBy.path],
            [sortBy.order]
        );

        const usersCrop = paginate(sortedUsers, currentPage, pageSize);

        const clearFilter = () => {
            setSelectedProf();
        };

        return (
            <div className="d-flex">
                {professions && (
                    <div className="d-flex flex-column flex-shrink- 0 p-3">
                        <GroupList
                            items={professions}
                            selectedItem={selectedProf}
                            onItemSelect={handleProfessionSelect}
                        />
                        <button
                            className="btn btn-secondary m-2"
                            onClick={clearFilter}
                        >
                            Отменить
                        </button>
                    </div>
                )}
                <div className="d-flex flex-column">
                    <SearchStatus length={count} />
                    <input
                        type="search"
                        placeholder="Search..."
                        className="w-100"
                        onChange={handleSearch}
                        value={search}
                    />

                    {count > 0 && (
                        <UserTable
                            users={usersCrop}
                            onSort={handleSort}
                            selectedSort={sortBy}
                            onDelete={handleDelete}
                            onToggleBookMark={handleToggleBookMark}
                        />
                    )}
                    <div className="d-flex justify-content-center">
                        <Pagination
                            itemsCount={count}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>
        );
    }
    return loading;
};
Users.propTypes = {
    users: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default Users;
