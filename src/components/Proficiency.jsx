import "../style/style.css";

function Proficiency (){
    return <>
    <div className="container">
       <div className="row justify-content-between align-items-center mx-auto">
            <h1 className="heading">Proficiency</h1>

            <div className="col-md-6 my-5">
                <h5>Frontend Development</h5>
                    <div className="col-md-12 my-3" style={{borderRadius:"10px" ,backgroundColor:"#f3efef" }}>
                    
                        <span style={{ width: "90%", height: "15px",borderTopLeftRadius: "10px",
                            borderBottomLeftRadius: "10px", backgroundColor: "rgb(65 123 126)", display: "block", marginBottom: "10px" }}></span>
                    </div>
                    <h5>Backend Development</h5>
                    <div className="col-md-12  my-2"style={{borderRadius:"10px" , backgroundColor:"#f3efef"}}>
                        <span style={{ width: "80%",borderTopLeftRadius: "10px",
                            borderBottomLeftRadius: "10px" , height: "15px", backgroundColor: "rgb(65 123 126)", display: "block", marginBottom: "10px" }}></span>
                    </div>
                    <h5>Programming</h5>
                    <div className="col-md-12  my-2" style={{borderRadius:"10px" , backgroundColor:"#f3efef"}}>
                        <span style={{ width: "70%",borderTopLeftRadius: "10px",
                            borderBottomLeftRadius: "10px", height: "15px", backgroundColor: "rgb(65 123 126)", display: "block", marginBottom: "10px" }}></span>
                    </div>
                    
            </div>
            <div className="col-md-6 responsive justify-content-center align-items-center">
             
                 <video
            src="/efficiency.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "90%", height: "auto" }}
          />
            </div>
         
        </div> 
    </div>
    </>
}

export default Proficiency;