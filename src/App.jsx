import { useState } from 'react'

import Banner from './components/Banner';
import "./style/style.css";
import Knowledge from './components/Knowledge';
import 'bootstrap/dist/css/bootstrap.min.css';
import Proficiency from './components/Proficiency';
import Education from './components/Education';
import Project from './components/Project';
import Contributions from './components/Contributions';


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

  const projectdetails =[
    {
      name:"JobSeeker" ,
      title : "🚀 Using Laravel and PHP, this full-stack project is developed based on the MVC (Model-View-Controller) architecture to build a complete web application." ,
      link: "https://github.com/AMMRISHA/JobSeeker_portal" ,

    },
    {
      name:"Portfolio" ,
      title :"🔹 React + JavaScript Based Interactive Portfolio " ,
      link : "https://github.com/AMMRISHA/My_PORTFOLIO" ,
    } ,
    {
      name : "WowFood",
      title :"Full-Stack Food Delivery Management App using PHP, MySQL, and JavaScript",
      link: "https://github.com/AMMRISHA/WowFood",
    }

  ];
  const contribute = [
    {
      project : "Fbaukltd" ,
      link : "https://github.com/santoshvee/fbaukltd" ,
    
    },
    {
      project : "Eductrldev" ,
      link : "https://github.com/santoshvee/eductrldev" ,
    } ,
    {
      project : "mdroverseas" ,
      link : "https://github.com/santoshvee/mdroverseas.com",
    }
  ];
  return (
    <>
    <div className="banner mx-auto">
   
          <Banner />
          <Knowledge />
          <Proficiency />
         <Education education={educationDetails} />
         <Project projectdetails={projectdetails} />
         <Contributions contribute ={contribute } />
         

    </div>
    
       
    </>
  )
}

export default App ;
