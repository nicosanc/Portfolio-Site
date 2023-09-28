import React from "react";

const ContactInfo = () => {
    return(
        <>
            <h1 className='mt-20 mb-20 mx-auto text-4xl text-slate-800 text-center font-segoe-medium'> Contact Me</h1>
            <ul className=" flex justify-between">
                <li className="items-center mx-auto mb-20">
                    <a href='https://www.linkedin.com/in/nicolas-sanchez-noguera-0792621a5/' className= "bg-sky-500 text-white rounded  py-2 px-3 opacity-90 ">LinkedIn Profile</a>
                    <a href='mailto:nicosanchez0411@gmail.com'  className= " bg-sky-500 text-white rounded  py-2 px-3 opacity-90 mt-10 mx-10">nicosanchez0411@gmail.com</a>
                    <a href='tel:786-683-9388'  className= "bg-sky-500 text-white rounded  py-2 px-3 opacity-90 mt-10">786-683-9388</a>
                </li>
            </ul>
        </>
    )
}

export default ContactInfo;