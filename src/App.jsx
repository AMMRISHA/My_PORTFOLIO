import { useState } from 'react'

import Banner from './components/Banner';
import "./style/style.css";
import Knowledge from './components/Knowledge';
import 'bootstrap/dist/css/bootstrap.min.css';
import Proficiency from './components/Proficiency';
import Education from './components/Education';


function App() {
  const [count, setCount] = useState(0)
 const educationDetails = [
    {
      degree: "Master Of Computer Application ",
      institution: "Kalyani University",
      year: "2022 - 2024",
      logo:"/kalyani_university.png" ,
    },
    {
      degree: "Bachelor Of Computer Science",
      institution: "Netaji Nagar Day College",
      year: "2019 - 2022",
      logo:"/netaji_nagar.png",
    }
  ];
  return (
    <>
    <div className="banner mx-auto">
   
          <Banner />
          <Knowledge />
          <Proficiency />
         <Education education={educationDetails} />
    </div>
    
       
    </>
  )
}

export default App ;
