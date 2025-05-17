// components/Education.jsx
function Education({ education }) {
  return (
    <div>
      <h2>Education</h2>
      {education.map((item, index) => (
        <div className="row my-5 d-flex" key={index}>
            <div className="col-md-2">
                    <img src={item.logo} alt="" style={{ width: "100%",}} />
            </div>
            <div className="col-md-8">
                <h4>{item.institution}</h4>
            <h6>{item.degree} — {item.year}</h6>
            
            </div>
         
        </div>
      ))}
    </div>
  );
}

export default Education;
