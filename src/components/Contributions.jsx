import '../style/style.css';


function Contributions({contribute}){
    return <>
    <div className="container-fluid">
        <div className="row col-12">
            <h2 className="h2">Contributions</h2>
            {contribute.map((item , index)=>(
                <div className="col-sm-12 col-md-6 col-4 my-2" key={index}>
                    <div className="card">
                    <div className="card-body">
                    <h2>{item.project}</h2>
                    </div>
</div>
                </div>
            ))};
        </div>
    </div>
    
    </>
}

export default Contributions;