import React, { useState } from "react";



export default function LoveCalculator() {
    
    const [love, setLove] = useState();



    const makeLove =(e) =>{

        var his =document.getElementById("exampleInputEmail1").value
        var her = document.getElementById("exampleInputPassword1").value
        if( his.toLowerCase() === 'sagar' )
        {
            setLove("99.99%")
        }else 
        {
            setLove(Math.floor(Math.random() * 60)+"%")
        }
   
    
       
    }

  
    return (
        
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 mx-auto my-4">
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label bg-primary rounded py-2 px-2 text-light fw-bold">Enter His Name : </label>
                            <input type="text"  className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label bg-secondary rounded py-2 px-2 text-light fw-bold ">Enter Her Name : </label>
                            <input type="text"  className="form-control" id="exampleInputPassword1" />
                        </div>

                        <button type="submit" onClick={makeLove}  className="btn btn-warning text-success">Love</button>
                    </div>

                </div>



                <div className="row">
                    <div className="col-sm-1 rounded mx-auto bg-dark text-light">
                        <p className=" h1 text-center my-3 ">
                            {love}
                        </p>
                    </div>
                </div>

            </div>

        </>
    );
}
