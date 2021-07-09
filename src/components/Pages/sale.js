import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './sales.css';

export const Sales = () => {

    const [sales, setsales] = useState([]);

    useEffect(() => {
        lodeUsers();
    }, []);

    const lodeUsers = async () => {
        const result = await axios.get("http://localhost:3003/saler");
        setsales(result.data.reverse());
    };

    const deleteSaler = async id => {
        await axios.delete(`http://localhost:3003/saler/${id}`);
        lodeUsers();
     }

    return (
        <div>
            <h1>MAnge your sale</h1>

            <div>
                <h1>your salers</h1>

                <div className="d-grid gap-2">

                    <Link className="btn btn-primary btn-lg" to="/addsaler">
                        Add items
                    </Link>
                </div>

                <div className="cards">{  sales.map((sales, index) => (
                    <Card style={{ width: '18rem' }}>
                        <Card.Header>Saler {index + 1} </Card.Header>
                        <Card.Body>
                            <Card.Title>{sales.name}</Card.Title>
                            <Card.Text>
                                Due Amount 
                                {sales.amount}
                            </Card.Text>
                            <Link className="btn btn-outline-primary mr-2" to={`/salerHist/${sales.id}`}>History</Link>
                            <Button variant="primary mr-2" onClick={()=>deleteSaler(sales.id)}>Delet</Button>
                        </Card.Body>
                    </Card>
                ))}
                </div>

            </div>

        </div >
    )
};
