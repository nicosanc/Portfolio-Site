import React from "react";
import link from 'react-dom'

export function SocialButton({ label, to}){
    return(
        <a href={to} className="social-button" target='_blank'>
            {label}
       </a>
    );
}

export function EmailButton({label, emailAddress}){
    return(
        <a href={'mailto:${emailAddress}'} className="social-button">
            {label}
        </a>
    );
}

export function CallButton({label, phoneNumber}) {
    return(
        <a href={'tel:${phoneNumber}'} className="social-button">
            {label}
        </a>
    )
}

export function ResumeDownload({label, file}) {
    return(
        <a href={file} download className="about-project-button">
            {label}
        </a>
    )
}