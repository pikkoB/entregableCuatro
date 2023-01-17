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
            <ul className='user-card'>
                {
                    userList.map(user => (
                        <li className='items-card' key={user.id}>
                            <h4>{user.first_name}, {user.last_name}</h4>
                            <ul>
                                <li className='none'><b>Email:</b>{user.email} </li>
                                <li><b>Birthday:</b>{user.birthday} </li>
                            </ul>
                            <button onClick={() => deleteUser(user)}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAQdJREFUSEvtltEVATEQRe9WoAUl6AAd0AEV0AE6oAJKoAJ0oAQlUAHnHbIn1maTLM76yHxuJrmTN5OdyWjIsoa4xIKnQMsR7AVYhV4kBrwEJp6DBVZwXgsFj4C197SHwxjY+HyL4B6w922qud4HDmbv34DbgGT9hUn+s+vGNrBTUcGhgV2BU5lzVXEpH91QgsPvCKhu3iyBbUmKUi+ei5KumAJJap7KzDrkK1KbtMwB+3BxFJS+y24J/GlVJ6ltBVNxGTXSO87rIqZJmC6jfl3s2eq1ZtzJpwzgK1LX6ZCNgXfAIPbPFTNZutQYAttYsPw1/pRGHKC7cm3n+2VL6FwdwIlzaQx8B11gWB9Vh+zeAAAAAElFTkSuQmCC"/></button>
                            <button onClick={() => selectUser(user)}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAARNJREFUSEvN1mENAjEMBeB3CkACEpAASgAFSACcgAIkYAEpOIC8ZEuW3drrtpK7/SPk9tHXrceAmdYwkwtveB0K+UwV5AkTfQVwD0DFveCIbgP8BqDiXvAVwCWLV8W9YJp3AIcMvwHgjxqtHpjxngFw87hS/AHgKB2yVjjtKbFThvOjiPLLFjg/SDHmFJ+6TdVwCU1jNuM1FWsocbWneQRW2BW19tgdtcCcRE8AG+G0VMWb7qFFTZSzNw7+3G5GtYr/imow3ywr73gtUX8FlPeUk6p7ST0uwW6oFnUOu6IavEuyZL/5bnVd1snliloGiDsYN1xcxdJ1ak1gVGDNdWpFiy2V4OIftA55tN/ietxRnO3RH63uLh+7k92sAAAAAElFTkSuQmCC"/></button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default UsersList;