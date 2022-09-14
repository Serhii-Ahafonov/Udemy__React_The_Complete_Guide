import React, {useState} from 'react';
import AddUser from "./Users/AddUser";
import UsersList from "./Users/UsersList";


function App() {
    const [usersList, setUsersList] = useState([]);

    const onAddUserHandler = (uName, uAge) => {
        setUsersList((prevUserList) => {
            return [...prevUserList, {name: uName, age: uAge, id: Math.random().toString()}];
        })
    };

    return (
        <div>
            <AddUser onAddUser={onAddUserHandler}/>
            <UsersList users={usersList}/>
        </div>
    );
}

export default App;
