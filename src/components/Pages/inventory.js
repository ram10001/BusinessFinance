
import React, { useState , useEffect} from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';



export const Inventory = () => {
    const [inven, setinven] = useState([]);

    useEffect(() =>{
        lodeUsers();
    },[]);

    const lodeUsers = async () => {
        const result = await axios.get("http://localhost:3003/inven");
        setinven(result.data.reverse());
    };

    return (
        <div>
            <h1>your stocke</h1>

            

            <Table striped responsive bordered hover size="sm" >
                <thead>
                    <tr>
                        <th>#</th>
                        <th> Item</th>
                        <th>Quntity</th>
                        <th>Active</th>
                    </tr>
                </thead>
                <tbody>
                    {inven.map((inven, index) => (
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{inven.item}</td>
                            <td>{inven.quant}</td>
                            <td>
                               
                                <Link class="btn btn-outline-primary mr-2" to={`/editinven/${inven.id}`} >edit</Link>
                            </td>

                        </tr>
                    ))}

                </tbody>
            </Table>
        </div>
    )
};
