import { useState } from 'react'


import Banner from './components/Banner';
import "./style/style.css";
import Knowledge from './components/Knowledge';
import 'bootstrap/dist/css/bootstrap.min.css';
import Proficiency from './components/Proficiency';
import Education from './components/Education';
import Project from './components/Project';
import Contributions from './components/Contributions';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)
 const educationDetails = [
    {
      degree: "Master Of Computer Application ",
      institution: "Kalyani University",
      year: "Nov 2022 - Jul 2024",
      logo:"/kalyani_university.png" ,
      cgpa : 'CGPA : 8.06' ,

    },
    {
      degree: "Bachelor Of Computer Science",
      institution: "Netaji Nagar Day College , University Of Calcutta",
      year: "Jun 2019 - Aug 2022",
      logo:"/netaji_nagar.png",
      cgpa : 'CGPA : 8.2',
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
      title :"🚀 React + JavaScript Based Interactive Portfolio " ,
      link : "https://github.com/AMMRISHA/My_PORTFOLIO" ,
    } ,
    {
      name : "WowFood",
      title :"🚀 Full-Stack Food Delivery Management App using PHP, MySQL, and JavaScript",
      link: "https://github.com/AMMRISHA/WowFood",
    }

  ];
  const contribute = [
    {
      project : "Fbaukltd" ,
      task : [
        "Handle staff management page according to the the authentication like without authrization staff cannot edit other staff's profile" , "Authentic staff can handle also edit other staff details" , " Authentic staff can unlock someone's profile so that that person unable to edit their profile" , "Documents expiry notification to be send to the paricular staff and authorized staff also like passport , visa expiry" , "Build search button for the all notification page " , "created notification email templates"
        ],
      link : "https://github.com/santoshvee/fbaukltd" ,
    
    },
    {
      project : "Eductrldev" ,
      task :[
         "Created profile page and edit page for staff" , "Work on the staff management page for the getting each staff details properly using dataTable" 
     
      ],
      link : "https://github.com/santoshvee/eductrldev" ,
    } ,
    {
      project : "mdroverseas" ,
      task :[
        "Build full blog features like create , edit , delete , serach blog ." ,"Created blog UI for the user ." ,
      ],
      link : "https://github.com/santoshvee/mdroverseas.com",
    }
  ];

  const experience =[
    {
      company:"Sash Info Services Pvt. Ltd.",
      profile : "Full Stack Developer - Internship" ,
      startdate : "Feb 2025" ,
      enddate : "May 2025" ,
      type : "Hybrid" ,
    } ,
    {
      company:"HossainInterior",
      profile : "Full Stack Developer - Freelancing" ,
      startdate : "March 2024" ,
      enddate : "August 2024" ,
      type : "Remote" ,
    }
  ];

  const skills =[
     {
        category: 'Frontend',
        technologies: ['HTML & CSS', 'JavaScript', 'React', 'Bootstrap', 'FontAwesome']
    },
    {
    category: 'Backend',
    technologies: ['Laravel' , 'Php & Mysql' , 'Node' , 'MongoDb' , 'Ajax' , 'json']
  },
  {
    category: 'Programming Language',
    technologies: ['C/C++' , 'Python' , 'Javascript']
  },
  {
    category: 'Version Control',
    technologies: ['Git' , 'Github']
  },
  {
    category: 'Hosting Knowledge',
    technologies: ['Bigrock' , 'Godddy']
  },
  {
    category: 'Others',
    technologies: ['Photoshop'  , 'Ms-Excel' , 'Ms-Office' ,'Canva' , 'Powerpoint']
  }
  
  
    ];
  return (
    <>
    <div className="banner mx-auto">
        <Navbar />
         <div id="banner"><Banner /></div>
        <div id="knowledge"><Knowledge /></div>
        <div id="proficiency"><Proficiency /></div>
        <div id="education"><Education education={educationDetails} /></div>
        <div id="projects"><Project projectdetails={projectdetails} /></div>
        <div id="contributions"><Contributions contribute={contribute} /></div>
        <div id="experience"><Experience experience={experience} /></div>
        <div id="skills"><Skills skills={skills} /></div>
        <div id="contact"><Contact /></div>


    </div>
    
       
    </>
  )
}

export default App ;
