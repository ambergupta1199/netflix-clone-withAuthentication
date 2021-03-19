import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './Nav.css';
function Nav() {
    const[show,handleShow]=useState(false);
    const history=useHistory();
    useEffect(()=>{
window.addEventListener("scroll",()=>{
if(window.scrollY>100){
handleShow(true);
}
else{
    handleShow(false);
};
});

    },[]);
    return (
        <div className={`nav ${show && "nav__black"}`}>
        <img onClick={()=>history.push("/")} className="nav__logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
       alt="Netflix Logo" ></img>
          <img onClick={()=>history.push("/profile")} className="nav__avatar" src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
       alt="Netflix Logo" ></img>  
        </div>
    )
}

export default Nav;
