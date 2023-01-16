import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios';
import UsersForm from './components/UsersForm';
import UsersList from './components/UsersList';

function App() {
  const [userList, SetUserList] = useState([]);
  const[userSelected, SetUserSelected] = useState(null)

  useEffect(() => {
    axios.get('https://users-crud.academlo.tech/users/')
    .then(res => SetUserList(res.data));
  },[])

 const getUser = () => {
  axios.get('https://users-crud.academlo.tech/users/')
    .then(res => SetUserList(res.data));
 }
 const selectUser = (user) => {
  SetUserSelected(user)
 }


  return (
    <div className="App">
      <h1>Users</h1>
      < UsersForm getUser= {getUser} 
      userSelected={userSelected}
      selectUser={selectUser}
       />
      <UsersList userList={userList}
       selectUser={selectUser}
       getUser={getUser}
       />
    </div>
  )
}

export default App
