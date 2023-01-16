import axios from 'axios';
import React from 'react';

const UsersList = ({ userList, selectUser, getUser }) => {
    // userList.sort((a,b) => a.first_name.localeCompare(b.first_name))

    const deleteUser = (user) => {
        axios.delete(`https://users-crud.academlo.tech/users/${user.id}/`)
            .then(() => getUser())
    }

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {
                    userList.map(user => (
                        <li key={user.id}>
                            <h4>{user.first_name}, {user.last_name}</h4>
                            <ul>
                                <li><b>Email:</b>{user.email} </li>
                                <li><b>Birthday:</b>{user.birthday} </li>
                            </ul>
                            <button onClick={() => deleteUser(user)}>Delete</button>
                            <button onClick={() => selectUser(user)}>Select</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default UsersList;