import { useState } from "react";
import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import contactAnimation from "./../../animation/animationContact.json";

export default function Contact() {
    const [state, handleSubmit] = useForm("mayregkj");
    const [showAlert, setShowAlert] = useState(false);

    const handleAlert = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 5000);
    };
    return (
        <section className="contact-us">
            <h1 className="title">
                <span className="icon-envelope"> </span>
                Contact us
            </h1>
            <p className="sub-title">
                Contact us for more information and Get notified when I publish
                something new.
            </p>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="email">
                        <label htmlFor="email">Email Address:</label>
                        <input autoComplete="off" required type="email" name="email" id="email" />
                    </div>
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <div className="message" style={{ marginTop: "24px" }}>
                        <label htmlFor="message">Your message:</label>
                        <textarea
                            required
                            name="message"
                            id="message"
                        ></textarea>
                    </div>
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <button
                        type="submit"
                        disabled={state.submitting}
                        className="submit"
                        onClick={handleAlert}
                    >
                        {state.submitting ? "Submitting .." : "Submit"}
                    </button>
                </form>
                {showAlert && (
                    <div className="alert" onClick={() => setShowAlert(false)}>
                        <span>Send Email Has Been Succeeded</span>
                    </div>
                )}
                <div className="border animation"><Lottie animationData={contactAnimation} style={{height:"355px"}} className="contactAnimation"/></div>
            </div>
        </section>
    );
}