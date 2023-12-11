/* Import Media */
import logo from "../media/logo.png"

function Landing()
{
    return (
        <div className="container-custom"> 
            <div className="center">
                <form className="form-custom">
                    
                    <div>
                        <img className="image-custom" src={logo} alt="Website Logo" fill/>
                    </div>

                    <div>
                        <p className="p-custom">A web-based platform for engineering professionals & students to showcase their projects and recieve feedback.</p>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Landing;