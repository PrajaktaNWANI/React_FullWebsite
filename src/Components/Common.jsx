
import { NavLink } from "react-router-dom";

const Common = (props) => {

    return(

        <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                        {/* Column For Text */}
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <h1> {props.h1_name}<strong className="brand-name">Company Name</strong></h1>
                            <h2 className="my-2">We are the team of talented individuals</h2>
                            <div className="mt-3">
                                <NavLink to={props.btn_link} className="btn-get-started">{props.btn_text}</NavLink>
                            </div>
                        </div>
                        {/* End Column For Text */}
                        {/*  Column For Image */}
                        <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-2 header-img">
                            <img src={props.img_src} className="img-fluid animated" alt={props.img_alttext}></img>
                        </div>
                        {/*  End Column For Image */}
                    </div>
                </div>
            </div>
        </div>
    </section>

    )

}

export default Common;