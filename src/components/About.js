
import React, { useState } from 'react';



export default function About(props) {


    const [myStyle, setStyle] = useState({
        color: 'black',
        backgroundColor: 'white',

    });
    const [btntxt, changeBtn] = useState("Enable Dark Mode");



    const mystyle = () => {
        if (myStyle.color === 'black') {
            setStyle({
                color: 'white',
                backgroundColor: '#1f1f1f',

            });
        } else {
            setStyle({
                color: 'black',
                backgroundColor: 'white',

            });
        }
        if(btntxt === 'Enable Dark Mode')
            changeBtn("Enable Light Mode");
        else   
            changeBtn("Enable Dark Mode"); 
    }

    return (
        <>
            <div style={myStyle} className="container rounded shadow my-4">
                <div className="accordion py-3" id="accordionExample " >
                    <div className="accordion-item " >
                        <h2 className="accordion-header" id="headingOne" >
                            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="collapseOne" style={myStyle} className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div  style={myStyle} className="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div  style={myStyle} className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>

                <div className="form-check form-switch my-3">
                    <input onClick={mystyle} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> {btntxt} </label>
                </div>
            </div>
        </div>
        </>
    );
}
