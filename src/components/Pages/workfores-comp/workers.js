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
        console.log("IS THIS IT");
        const result = await axios.get("/showWorker");
        console.log("Result");
        console.log(result);
        setUser(result.data.reverse());
    };

    const deleteUser = async _id => {
       await axios.delete(`/deleteWorker/${_id}`);
       console.log("DELETED");
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
                        <tr key={user._id}>
                            <th scope="row">{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.amount}</td>
                            <td>
                                <Link className="btn btn-primary mr-2" to={`/viewuser/${user._id}`}>view</Link>
                                <Link className="btn btn-outline-primary mr-2" to={`/edituser/${user._id}`} >edit</Link>
                                <Link className="btn btn-danger" to="/#" onClick={()=>deleteUser(user._id)}>Delete</Link>
                            </td>

                        </tr>
                    ))}

                </tbody>
            </Table>

        </div>
    )
}
