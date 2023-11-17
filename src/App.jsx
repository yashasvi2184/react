/*import React from "react";
import { Routes, Route } from 'react-router-dom';
import About from "./About";
import Contact from "./Contact";
import Menu from "./Menu";
import Services from "./Services";
import User from "./User";
//import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
const App = () => {
  return (
    <>
      <Menu />
      
      <Routes>
        <Routes exact path="/service" element={<Services/>}   //render={()=><Services />
        />
        <Routes exact path="/user/:fname/:lname" element={<User/>}   
        />
        <Route path="/" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        </Routes>
      
    </>
  );
};
export default App;
*/
import React from 'react';
import { Routes, Route, Redirect } from 'react-router-dom';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Error from './Error.jsx';
import Menu from './Menu.jsx';
//import Name from './Name';
import Services from './Services';
import User from './User';
import Home from './Home';
import Search from './Search.jsx';

const App = () => {
  return (
  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:fname/:lname" element={<User />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact name="contact" />} />
      <Route path="/services" element={<Services />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/img" element={<Search />} />
     
    <Route path="*" element={<Error />} />
    
    </Routes>
    
  );
};

export default App;




































































































/*const [num,setnum]=useState(0);
  useEffect(()=>{
    document.title=`you click ${num} time`
  })
  return(
    <>
    <button onClick={()=>{
      setnum(num+1);
    }}>click me</button>
    </>
  ); */


/*import TodoList from "./TodoList";
const Uname=createContext();
const Key=createContext();
 const App=()=>{
  return(
<>
<Uname.Provider value={"yashasvi"}>
  <Key.Provider value={"123"}>
    <TodoList/>
  </Key.Provider>
</Uname.Provider>

</>
  );
 }
export default App;
export {Uname,Key};

*/
























































































/*import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
const App=()=>{
  return(<>
  <Clock />
  
  </>
);
}
export default App;
*/
/*
const App=()=>{
return(
  <>
  <h1 class="text-center text-danger text-capitalize mt-5">hellow welcome to animal word</h1>
  <div class="container text-center">
  <div class="row">
    <div className="col">
    <div class="card">
  <img src="https://picsum.photos/200/300
" class="card-img-top" alt="..." height="200" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   
  </div>
</div>
    </div>
    <div className="col">
    <div class="card">
  <img src="https://picsum.photos/200/300
" class="card-img-top" alt="..." height="200"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   
  </div>
</div>
    </div>
    <div className="col">
    <div class="card">
  <img src="https://picsum.photos/200/300
" class="card-img-top" alt="..." height="200" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
  </div>
</div>
    </div>
  </div>
</div>
  </>
);
}
export default App;
*/



















































































