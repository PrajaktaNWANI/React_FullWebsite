
import Card from "./Card";
import Servicedata from "./Servicedata";

const Service = () => {

    return (
        <div>
            <div className="my-3">
                <h1 className="text-center">Our Services</h1>
            </div>

            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className="row gy-4">
                            {
                                Servicedata.map((val,ind) => {
                                   return <Card key={ind}
                                      imgsrc={val.imgsrc}
                                      title={val.title}
                                    />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Service;