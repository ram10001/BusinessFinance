
import axios from "axios";
import React, { useState , useEffect } from "react";
import { useHistory ,useParams } from "react-router";

export const Editrawm = () => {

    const {id} = useParams();


    let history = useHistory();

    const [ rawm, setrawm] = useState({
        item: "",
        lod: "",
        cost: "",
        amount: "",
        ramount: ""
    });

    const { item , lod , cost , amount , ramount } = rawm;

    useEffect (()=>{
        Loadrawm();
    }, []);

    const Loadrawm = async () => {
        const result =await axios.get(`http://localhost:3003/rawm/${id}`);
        setrawm(result.data);
    };

    const onInputChange = e => {
        setrawm({ ...rawm, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3003/rawm/${id}`, rawm);
        history.push("/purchase");
    };

     

    return (
        <div>


            (
            <div className="container">
                <div className="w-75 mx-auto shadow p-5">
                    <h2 className="text-center mb-4">Add A item</h2>
                    <form onSubmit={e => onSubmit(e)} >
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Your item"
                                name="item"
                                value={item}
                                onChange={e => onInputChange(e)}

                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Your date"
                                name="lod"
                                value={lod}
                                onChange={e => onInputChange(e)}

                            />
                        </div>


                        <div className="form-group">
                            <input
                                type="number"
                                className="form-control form-control-lg"
                                placeholder="enter cost"
                                name="cost"
                                value={cost}
                                onChange={e => onInputChange(e)}

                            />
                        </div>


                        <div className="form-group">
                            <input
                                type="number"
                                className="form-control form-control-lg"
                                placeholder="enter amount"
                                name="amount"
                                value={amount}
                                onChange={e => onInputChange(e)}

                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="number"
                                className="form-control form-control-lg"
                                placeholder="enter remaing amount"
                                name="ramount"
                                value={ramount}
                                onChange={e => onInputChange(e)}

                            />
                        </div>


                        <button className="btn btn-primary btn-block">edit item</button>
                    </form>
                </div>
            </div>
            );
        </div>
    )
};

