
import axios from "axios";
import React, { useState } from "react";
import { useHistory  } from "react-router";

export const Addsaler = () => {
    

    let history = useHistory() ;

    const [saler, setsaler] = useState({
        name: "",
        amount: "",
        tran:""
      });

      const { name, amount } = saler;

      const onInputChange = e =>{
          setsaler ({...saler,[e.target.name]:e.target.value});
      };

    
      const onSubmit = async e  =>{
          e.preventDefault();
          await axios.post(`http://localhost:3003/saler`,saler);
          history.push("/sales" );
      };

  


    return (
        <div>

            
            (
            <div className="container">
                <div className="w-75 mx-auto shadow p-5">
                    <h2 className="text-center mb-4">Add A item</h2>
                    <form onSubmit={e=> onSubmit(e)} >
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Your name"
                                name="name"
                                value={name}
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


                        <button className="btn btn-primary btn-block">Add item</button>
                    </form>
                </div>
            </div>
            );
        </div>
    )
};

