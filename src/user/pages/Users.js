import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
const USERS = [
    {
        id: 'u1', 
        name: 'Max Schwarz', 
        image:'https://thumbs.dreamstime.com/b/yellow-crash-test-dummy-yellow-crash-test-dummy-car-seat-116968697.jpg',
        places: 3
    }];

    return <UsersList
    items={USERS}
    />
};

export default Users;