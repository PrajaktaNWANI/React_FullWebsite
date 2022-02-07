
import web from '../Images/PageAboutUs.jpg';
import Common from './Common';

const Aboutus = () => {

    return(
        <div>
        <div>
            <Common
                h1_name="Want to know more About"
                btn_link="/contact"
                btn_text="Contact Now"
                img_src={web}
                img_alttext="About Us Page Image"
            />
        </div>
        </div>
    )

}
export default Aboutus;