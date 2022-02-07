
const Card = (props) => {
    return (
        <div className="col-md-4 col-10 mx-auto">
            
                <div className="card card-animate">
                     <img src={props.imgsrc} className="card-img-top h-100" alt={props.imgsrc} />
                    <div className="card-body display-to-bottom">
                        <h5 className="card-title">{props.title}</h5>
                    </div>
               
            </div>
        </div>
    )
}

export default Card;