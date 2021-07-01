
import axios from "axios";
import React, { useState , useEffect } from "react";
import { useHistory ,useParams } from "react-router";

export const EditUser = () => {
    const {id} = useParams();
    

    let history = useHistory() ;

    const [user, setUser] = useState({
        name: "",
        amount: "",
      });

      const { name, amount } = user;

      const onInputChange = e =>{
          setUser ({...user,[e.target.name]:e.target.value});
      };

      useEffect (()=>{
          loadUser()
      }, []);

      const onSubmit = async e  =>{
          e.preventDefault();
          await axios.put("http://localhost:3003/users",user);
          history.push("/workers");
      };

      const loadUser = async () => {
          const result =await axios.get(`http://localhost:3003/users/${id}`);
          setUser(result.data);
      }


    return (
        <div>
            
            (
            <div className="container">
                <div className="w-75 mx-auto shadow p-5">
                    <h2 className="text-center mb-4">Edit A User</h2>
                    <form onSubmit={e=> onSubmit(e)} >
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Your Name"
                                name="name"
                                value={name}
                                onChange={e => onInputChange(e)}

                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="enter amount"
                                name="amount"
                                value={amount}
                                onChange={e => onInputChange(e)}

                            />
                        </div>


                        <button className="btn btn-primary btn-block">Edit User</button>
                    </form>
                </div>
            </div>
            );
        </div>
    )
};

