import React, { useState , useEffect} from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

export const Purchase = () => {

    const [rawm, setrawm] = useState([]);

    useEffect(() =>{
        lodeUsers();
    },[]);

    const lodeUsers = async () => {
        const result = await axios.get("http://localhost:3003/rawm");
        setrawm(result.data.reverse());
    };

    return (
        <div>
            <h1>want to buy</h1>

            <div>
                <h1>your purchase</h1>

                <div className="d-grid gap-2">

                    <Link className="btn btn-primary btn-lg" to="/addrawm">
                        Add items
                    </Link>
                </div>



                <Table striped responsive bordered hover size="sm" >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th> Item</th>
                            <th>Last Date of Order</th>
                            <th>Cost</th>
                            <th>Amount</th>
                            <th>Remaing Amount</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rawm.map((rawm, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{rawm.item}</td>
                                <td>{rawm.lod}</td>
                                <td>{rawm.cost}</td>
                                <td>{rawm.amount}</td>
                                <td>{rawm.ramount}</td>
                                <td>

                                    <Link class="btn btn-outline-primary mr-2" to={`/editraw/${rawm.id}`} >edit</Link>
                                </td>

                            </tr>
                        ))}

                    </tbody>
                </Table>
            </div>
            
        </div>
    )
};
