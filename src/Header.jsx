import React from "react";

 const Header=()=>{
    const img=`https://tse2.mm.bing.net/th?id=OIP.B8F9g5lnefXyCcbDjhA58wHaFj&pid=Api&P=0&h=180`;
    return(<>
    <div>
    <img src={img} alt="header" width="70" height="50" />
    <h1>Important note</h1>
    </div>
    </>
    );
 }
 export default Header;