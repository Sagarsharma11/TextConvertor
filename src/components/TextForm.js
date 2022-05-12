import React, { useState } from "react";



export default function TextForm(props) {

    const [text, setText] = useState("");
    const [col, setColor] = useState("white");
    const [txtstyle, setStyle] = useState("");

    const selectStyle = (event) =>{
        console.log("Change .. . .. .. ..");
        setStyle(event.target.value);

    }



    const [myStyle, setStyle2] = useState({
        color: 'black',
        backgroundColor: 'white',

    });
    const [btntxt, changeBtn] = useState("Enable Dark Mode");



    const mystyle = () => {
        if (myStyle.color === 'black') {
            setStyle2({
                color: 'white',
                backgroundColor: '#1f1f1f',

            });
        } else {
            setStyle2({
                color: 'black',
                backgroundColor: 'white',

            });
        }
        if(btntxt === 'Enable Dark Mode')
            changeBtn("Enable Light Mode");
        else   
            changeBtn("Enable Dark Mode"); 
    }

    const clearText = ()=>
    {
        setText("");
    }
    const copyTxt = () =>
    {
        
           
            var copyText = document.getElementById("exampleFormControlTextarea1");
          
          
            copyText.select();
            
            navigator.clipboard.writeText(copyText.value);
          
         
          
    }

    function Listening(event) {
        console.log("Listening .. . .. .. ..");

        setText(event.target.value);


    }

    const colorchange = (event) => {
        console.log("color changing");
        setColor(event.target.value);


    }

    const btnClick = () => {
        console.log("function clicked", text);

        setText(text.toUpperCase());
    }
    const btnClick2 = () => {
        console.log("function clicked", text);

        setText(text.toLowerCase());
    }

    return (
        <>
            <div className="container my-3 py-3 rounded" style={myStyle}>

                <div className="mb-3">

                    <label style={myStyle} htmlFor="exampleFormControlTextarea1" className="form-label h1 my-4"> {props.title} </label>
                    <textarea onChange={Listening} className={`form-control `}  id="exampleFormControlTextarea1" value={text} rows="5">



                    </textarea>
                   

                    <div className="col-1">
                    <select defaultValue={'default'} onChange={selectStyle} className="mt-3 " aria-label="Default select example">
                        <option value="DEFAULT" >Select Style</option>
                        <option value="fst-italic">Italic</option>
                        <option value="fw-bold">Bold</option>
                        <option value="h1">h1</option>
                        <option value="h2">h2</option>
                        <option value="h3">h3</option>
                        <option value="h4">h4</option>
                        <option value="h5">h5</option>
                        <option value="h6">h6</option>
                       
                    </select>
                    </div>
                    <input className="mt-2 " onChange={colorchange} type="color" />

                    


                </div>
                <div style={myStyle}>

                    <button className="btn btn-primary fw-bold" onClick={btnClick} >
                        {props.btn}
                    </button>
                    <button className="btn btn-secondary fw-bold mx-2" onClick={btnClick2} >
                        {props.btn2}
                    </button>
                    <button className="btn btn-warning fw-bold text-light mx-2" onClick={copyTxt} >
                        copy text
                    </button>
                    <button className="btn btn-danger fw-bold mx-2" onClick={clearText} >
                        clear text
                    </button>
                    <div className="form-check form-switch my-3">
                    <input onClick={mystyle} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> {btntxt} </label>
                </div>
                </div>
            </div>

            <div style={myStyle} className="container rounded my-2 py-4" >
        
                <p>


                    No Of Words : {text.split(" ").length - 1} and character : {text.length}
                </p>
                <p>
                    Time : {text.split(' ').length * 0.8}
                </p>
            </div>

            <div className="container rounded border py-4 px-4 my-3 bg-dark" >
                <h2 className="text-light">
                    Preview
                </h2>

                <p style={{ color: `${col}` }  } className={txtstyle}  >
                    {text}
                </p>
            </div>




        </>
    );
}

