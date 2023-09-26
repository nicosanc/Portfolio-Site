import React from "react";

const ContactInfo = () => {
    return(
        <>
               <ul className="flex justify-between">
                <li className="flex flex-col justify-center items-start w-1/2 p-8">
                        <h1 className='mt-20 mb-10 mx-auto text-4xl text-blue-800 text-center font-segoe-medium'> Contact </h1>
                    </li>

                    <li className="flex flex-col justify-center w-1/2 items-end my-32 items-center">
                        <a href='https://www.linkedin.com/in/nicolas-sanchez-noguera-0792621a5/' className= "text-center bg-indigo-700 text-white rounded  py-2 px-3 opacity-90">LinkedIn Profile</a>
                        <a href='mailto:nicosanchez0411@gmail.com'  className= "text-center bg-indigo-700 text-white rounded  py-2 px-3 opacity-90 mt-10">nicosanchez0411@gmail.com</a>
                        <a href='tel:786-683-9388'  className= "text-center bg-indigo-700 text-white rounded  py-2 px-3 opacity-90 mt-10">786-683-9388</a>
                    </li>
                </ul>
        </>
    )
}

export default ContactInfo;