
import axios from "axios";
import React, { useState , useEffect } from "react";
import { useHistory ,useParams } from "react-router";

export const Editinven = () => {
    const {id} = useParams();
    

    let history = useHistory() ;

    const [inven, setinven] = useState({
        item: "",
        quant: "",
      });

      const { item, quant } = inven;

      const onInputChange = e =>{
          setinven ({...inven,[e.target.name]:e.target.value});
      };

      useEffect (()=>{
          Loadinven();
      }, []);

      const onSubmit = async e  =>{
          e.preventDefault();
          await axios.put(`http://localhost:3003/inven/${id}`,inven);
          history.push("/inventory" );
      };

      const Loadinven = async () => {
          const result =await axios.get(`http://localhost:3003/inven/${id}`);
          setinven(result.data);
      };


    return (
        <div>
            
            (
            <div className="container">
                <div className="w-75 mx-auto shadow p-5">
                    <h2 className="text-center mb-4">Edit A item</h2>
                    <form onSubmit={e=> onSubmit(e)} >
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
                                type="number"
                                className="form-control form-control-lg"
                                placeholder="enter amount"
                                name="quant"
                                value={quant}
                                onChange={e => onInputChange(e)}

                            />
                        </div>


                        <button className="btn btn-primary btn-block">Edit item</button>
                    </form>
                </div>
            </div>
            );
        </div>
    )
};

