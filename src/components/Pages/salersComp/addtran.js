
import axios from "axios";
import React, { useState } from "react";
import { useHistory  } from "react-router";
import { useParams } from 'react-router-dom';

export const Addtran = () => {
    

    let history = useHistory() ;

    const { id } = useParams();

    const [saler, setsaler] = useState({
        name: "",
        amount: "",
        tran: [
            {
                date: "",
                credit : 0,
                debit : 0,
                bill : 0
            }
        ]
      });


    //   const [tran , settran] = useState({

    //     date: "today",
    //     credit : null,
    //     debit : null,
    //     bill : null

    //   });

    

      const { name, amount , tran } = saler;

      const { date , credit , debit , bill } = saler.tran;

    //   const { date , credit , debit , bill }= tran;



      const onInputChange = e =>{
          setsaler ({...saler,[e.target.name]:e.target.value});

      };

    
      const onSubmit = async e  =>{
          e.preventDefault();
          await axios.post(`http://localhost:3003/saler/${id}`,saler);

          history.push("/salerHist/:id" );
          
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
                                placeholder="Enter Your date"
                                name="date"
                                value={tran.date}
                                onChange={e => onInputChange(e)}

                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="number"
                                className="form-control form-control-lg"
                                placeholder="enter amount credited"
                                name="credit"
                                value={tran.credit}
                                onChange={e => onInputChange(e)}

                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="number"
                                className="form-control form-control-lg"
                                placeholder="enter amount debited"
                                name="debit"
                                value={tran.debit}
                                onChange={e => onInputChange(e)}

                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="number"
                                className="form-control form-control-lg"
                                placeholder="enter bill"
                                name="bill"
                                value={tran.bill}
                                onChange={e => onInputChange(e)}

                            />
                        </div>


                        <button className="btn btn-primary btn-block">Add saler</button>
                    </form>
                </div>
            </div>
            );
        </div>
    )
};

