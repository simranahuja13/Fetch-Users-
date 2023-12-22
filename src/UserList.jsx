
import React, { useState} from 'react';
import axios from 'axios';


function UserList() {
    const [users, setUsers] = useState("");
    const getUsers = () => {
        axios.get("https://reqres.in/api/users")
            .then(res => setUsers(res.data.data))
            .catch(err => console.log(err))
    }
    return (
        <>
            <div className='black-bg'> <span>Tap on the button to get the Users</span>
                <button onClick={getUsers}> Get Users </button>
            </div>
            <div>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col"> First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Avatar</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        users.length > 0 ? (
                            users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.first_name} </td>
                                    <td>{user.last_name} </td>
                                    <td>{user.email} </td>
                                    <td><img src={user.avatar} alt={user.first_name + " " + user.last_name} style={{width:"50px" , borderRadius:"50%"}} /></td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td>No Data Found to Display 😑</td>
                            </tr>
                        )
                    }
                </tbody>
                </table>
            </div>
        </>
    )
}

export default UserList