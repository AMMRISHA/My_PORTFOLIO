import { useState } from 'react'

import Banner from './components/Banner';
import "./style/style.css";
import Knowledge from './components/Knowledge';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainHeading from './components/MainHeading';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="banner mx-auto">
   
           <Banner />
           <Knowledge />
          <div style={{ height: "150vh", paddingTop: "50px" }}>
            <MainHeading />
          </div>
    </div>
    
       
    </>
  )
}

export default App ;
