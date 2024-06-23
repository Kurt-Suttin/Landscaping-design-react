import React, {useRef, useState} from 'react';
import '../assets/css/Contact.css';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();
    const [showSuccess, setShowSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_szpnc1b', 'template_o1vdt9f', form.current, '4ODZvlFvJhZT5bOXY')
            .then((result) => {
                console.log('Email successfully sent!', result.text);
                setShowSuccess(true);
                setTimeout(() => setShowSuccess(false), 4000); // Hide after 4 seconds
            }, (error) => {
                console.error('Failed to send email:', error.text);
            });

        form.current.reset();
    };

    return (
        <div className="contact-container">
            <div className="justify-content-end">
                {/*Email success message */}
                {showSuccess && (
                    <div className="success">
                        <div className="success__icon">
                            <svg fill="none" height="24" viewBox="0 0 24 24" width="24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path clip-rule="evenodd"
                                      d="m12 1c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11zm4.768 9.14c.0878-.1004.1546-.21726.1966-.34383.0419-.12657.0581-.26026.0477-.39319-.0105-.13293-.0475-.26242-.1087-.38085-.0613-.11844-.1456-.22342-.2481-.30879-.1024-.08536-.2209-.14938-.3484-.18828s-.2616-.0519-.3942-.03823c-.1327.01366-.2612.05372-.3782.1178-.1169.06409-.2198.15091-.3027.25537l-4.3 5.159-2.225-2.226c-.1886-.1822-.4412-.283-.7034-.2807s-.51301.1075-.69842.2929-.29058.4362-.29285.6984c-.00228.2622.09851.5148.28067.7034l3 3c.0983.0982.2159.1748.3454.2251.1295.0502.2681.0729.4069.0665.1387-.0063.2747-.0414.3991-.1032.1244-.0617.2347-.1487.3236-.2554z"
                                      fill="#393a37" fill-rule="evenodd"></path>
                            </svg>
                        </div>
                        <div className="success__title">
                            Email successfully sent!
                        </div>
                        <div className="success__close">
                            <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
                                    fill="#393a37"></path>
                            </svg>
                        </div>
                    </div>
                )}
            </div>
            <h1 className="contact-header">Contact Us</h1>
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
                <div className="form-group">
                    <label>Name</label>
                    <input required={true} type="text" name="user_name"/>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input required={true} type="email" name="user_email"/>
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea required={true} name="message"/>
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Contact;
