
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Link, useParams } from 'react-router-dom';




export const SalerHist = () => {

    const [saler, setsaler] = useState({
        "name": "",
        "amount": "",
        "tran": [
            {
                "date": "today",
                "credit": 0,
                "debit": 0,
                "bill": 0
            }
        ]
    });


    const { id } = useParams();


    useEffect(() => {
        lodesaler();
    }, []);

    const lodesaler = async () => {
        const result = await axios.get(`http://localhost:3003/saler/${id}`);
        setsaler(result.data);
    };

    const trans = saler.tran;





    return (
        <div>
            <h1>your stocke</h1>

            <div className="d-grid gap-2">

                <Link className="btn btn-primary btn-lg" to="/addinven">
                    Add Transection
                </Link>
            </div>



            <Table striped responsive bordered hover size="sm" >
                <thead>
                    <tr>
                        <th>#</th>
                        <th> Date</th>
                        <th>Credit</th>
                        <th>Dedit</th>
                        <th>Bill</th>

                    </tr>
                </thead>
                <tbody>

                    { trans ? trans.map((trans, index) => (
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{trans.date}</td>
                            <td>{trans.credit}</td>
                            <td>{trans.debit}</td>
                            <td>{trans.bill}</td>

                        </tr>
                    )) : "loding"
                    };


                </tbody>
            </Table>
        </div>
    )
};
