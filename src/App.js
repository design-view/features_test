import React ,{useState} from 'react';
import Main from './component/Main';
import About from './component/About';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import Facility from './component/Facility';
import Reservation from './component/Reservation';
import Rooms from './component/Rooms';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {
  // const[isOpen, setIsOpen] = useState(false)

  // const toggle =()=>{
  //   setIsOpen(!isOpen)
  // }
 
  return (
    <>
      {/* <GlobalStyle/>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Hero slides={SliderData}/>
      <InfoSection/> */}
      {/* <Select1 options={options} onChange={ onChange} defaultValue={options[0]}/> */}
   
      <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/facility" element={<Facility/>}/>
          <Route path="/rooms" element={<Rooms/>}/>
          <Route path="/reservation" element={<Reservation/>} />
      </Routes>
  
    
     
    </>
  );
}

export default App;
