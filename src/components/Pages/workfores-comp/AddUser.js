
import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";

export const AddUser = () => {

    let history = useHistory();

    const [user, setUser] = useState({
        name: "",
        amount: "",
    });

    const { name, amount } = user;

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    };

    const onSubmit = async e => {
        console.log("ADDD USER PAGE RAN");
        e.preventDefault();
        await axios.post("/addWorker", user);
    //     axios.post("/addWorker",JSON.stringify(user))
    //     .then(response =>{
    //         console.log(response)
    //     })
    //     .catch(error =>{
    //         console.log(error.response)
    //     })
    //     console.log(JSON.stringify(user))
        history.push("/workers");
    };


    return (
        <div>

            (
            <div className="container">
                <div className="w-75 mx-auto shadow p-5">
                    <h2 className="text-center mb-4">Add A User</h2>
                    <form onSubmit={e => onSubmit(e)} >
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


                        <button className="btn btn-primary btn-block">Add User</button>
                    </form>
                </div>
            </div>
            );
        </div>
    )
};

