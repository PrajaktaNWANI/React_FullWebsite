
import web from "../Images/PageHome.jpg";
import Common from './Common';

const Home = () => {

    return (
        <div>
            <Common
                h1_name="Grow your business with"
                btn_link="/service"
                btn_text="Get Started"
                img_src={web}
                img_alttext="Home Page Image"
            />
        </div>
    )

}
export default Home;