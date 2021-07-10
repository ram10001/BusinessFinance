import React, { useState , useEffect} from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';


export const Workers = () => {

    const [users, setUser] = useState([]);

    useEffect(() =>{
        lodeUsers();
    },[]);

    const lodeUsers = async () => {
        const result = await axios.get("http://localhost:3003/users");
        setUser(result.data.reverse());
    };

    const deleteUser = async id => {
       await axios.delete(`http://localhost:3003/users/${id}`);
       lodeUsers();
    }

    return (
        <div>
            <h1>manege workers</h1>

            <div className="d-grid gap-2">

            <Link className="btn btn-primary btn-lg" to="/adduser">
               Add User
            </Link>
            </div>

            <Table striped responsive bordered hover size="sm" >
                <thead>
                    <tr>
                        <th>#</th>
                        <th> Name</th>
                        <th>Amount</th>
                        <th>Active</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.amount}</td>
                            <td>
                                <Link class="btn btn-primary mr-2" to={`/viewuser/${user.id}`}>view</Link>
                                <Link class="btn btn-outline-primary mr-2" to={`/edituser/${user.id}`} >edit</Link>
                                <Link class="btn btn-danger" onClick={()=>deleteUser(user.id)}>Delete</Link>
                            </td>

                        </tr>
                    ))}

                </tbody>
            </Table>

        </div>
    )
}
