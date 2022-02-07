import { useState } from "react";
const Contact = () => {

    const [fullname, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [mobilenumber, setMobileNumber] = useState("");
    const [message, setMessage] = useState("");

    const submitForm = (e) => {
        e.preventDefault();
        alert(`My Name is : ${fullname} , My Email Id is : ${email} , 
                My Mobile Number Is : ${mobilenumber} , My Message is : ${message}`);

    }

    return (
        <div>
            <div className="my-4">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form action="" onSubmit={submitForm}>
                            <div className="mb-3">
                                <label htmlFor="fullname" className="form-label">Full Name</label>
                                <input name="fullname" value={fullname} onChange={(e) => setFullName(e.target.value)} type="text" className="form-control" placeholder="Full Name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="mobileno" className="form-label">Mobile No</label>
                                <input name="mobileno" value={mobilenumber} onChange={(e) => setMobileNumber(e.target.value)} type="tel" className="form-control" placeholder="Mobile No" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} className="form-control" rows="3"></textarea>
                            </div>
                            <div className="mb-3">
                                <button className="btn btn-outline-primary" type="submit">Submit Form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Contact;