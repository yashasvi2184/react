
const Cards=(p)=>{
    let {x,y,z}=p;
  if(x===y && y===z){
    return(
      <>
      <div className="slot_inner">
        <h1>
          {x} {y} {z}
        </h1>
        <h1>this is maching </h1>
          <hr/>
        
      </div>
      </>
    );
  }else{
    return(
      <>
      <div className="slot_inner">
        <h1>
          {x} {y} {z}
        </h1>
        <h1>this is not maching</h1>
          <hr/>
        
      </div>
      </>
    );
  }
  }
export default Cards;




























/*import React from "react";
import Sdata from "./Sdata";
function Cards(props){
    return(
 <>
 <div className="cards">
    <div className="card">
    <img src={props.imgsrc} alt="mypic" className="cards_img"/>
    <div className="cards_info">
        <h3 className="cards_title">{props.sname}</h3>
        <a href={props.links} target="_blank">
            <button>go</button>

        </a>
    </div>
    </div>
 </div>
 </>
    );
}
export default Cards;*/