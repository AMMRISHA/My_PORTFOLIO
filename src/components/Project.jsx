// components/Education.jsx
import '../style/style.css';

function Project({ projectdetails}) {
  return (
    <div>
      <h2>Education</h2>
      <div className="row d-flex my-5">
      { projectdetails.map((item, index) => (
      

       
         
        <div className="col-sm-12 col-md-6 col-4  my-2" key={index}>
            <a href={item.link} target="_blank">
                <div className="card">
                    <div className="card-body">
                        <h4>{item.name}</h4>
                        <h6>{item.title}</h6>
                        
                    </div>
                </div>
            </a>
        </div>
         

      
       
      ))}

      </div>
    </div>
  );
}

export default Project;
