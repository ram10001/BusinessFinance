import React, { useState, useEffect } from 'react';
import { Link, useParams, } from 'react-router-dom';
import axios from 'axios';

export const ViewUser = () => {

  const [user, setUser] = useState({
    name: "",
    amount: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();

  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(result.data);
  };
  
  const { name, amount } = user;

  
  return (
    <div>
      <h1>view user</h1>

      <div className="container py-4">
      <Link className="btn btn-primary" to="/workers">
        back to Workers
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {user.name}</li>
        <li className="list-group-item">user name: {user.amount}</li>
        
      </ul>
    </div>
    </div>
  )
}
