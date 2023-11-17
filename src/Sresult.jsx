import React from "react";

const Sresult=(props)=>{
    const img=`https://source.unsplash.com/random/300*300?${props.name}`;
    return(
        <>
        <div>
            <img src={img} alt="result" />
        </div>
        </>
    );
};
export default Sresult;