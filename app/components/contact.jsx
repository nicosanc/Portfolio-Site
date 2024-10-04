import React from "react";
import {SocialButton, EmailButton, CallButton} from "./buttons";

const ContactInfo = () => {
    return(
        <>
            <h1 className='mt-20 mb-10 mx-auto text-4xl text-teal-300 text-center font-segoe-medium'> Reach Me</h1>
            <ul className=" flex justify-between">
                <li className="items-center mx-auto mb-20">
                    <SocialButton className='mr-10' label={'LinkedIn Profile'} to={'https://www.linkedin.com/in/nicolas-sanchez-noguera-0792621a5/'}/>
                    <SocialButton label={'Github Profile'} to={'https://github.com/nicosanc'} />
                    <CallButton label={'Cell Phone'} phoneNumber={'7866839388'} />
                    <EmailButton label={'Email Address'} emailAddress={'nicosanchez0411@gmail.com'}/>
                    <SocialButton label="Blog Site" to="https://nicosanc.github.io/"/>
                </li>
            </ul>
        </>
    )
}

export default ContactInfo;