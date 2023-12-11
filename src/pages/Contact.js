function Contact()
{
    return (
        <div className="container-custom"> 
            <div className="center">
                <form className="form-custom">
                    <div>
                        <h1 className="h1-custom">Contact Us</h1>
                    </div>

                    <div>
                        <p className="p-custom"><b>Email Address: </b><a href="mailto:contact@website.com">contact@website.com</a> </p>
                    </div>

                    <div>
                        <p className="p-custom"><b>Location: </b>Building 1234 Road 5678 Block 910, Riffa, Kingdom of Bahrain</p>
                    </div>

                    <div>
                        <p className="p-custom"><b>Telephone Number: </b>+973 1234 5678</p>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Contact;