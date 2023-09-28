import React from "react";
import Image from 'next/image';
import profilePic from '../images/profPic.jpg'

const PersonalInfo = () => {
    return(
        <>
        <ul className="flex justify-between">
            <li  className="flex flex-col justify-center items-start w-1/2">
                         <p className='pt-20 pb-5 mx-auto text-5xl text-slate-800 text-justify font-segoe'>
                            Nicolas Sanchez Noguera
                        </p>

                        <p className=' pb-10 text-2xl text-slate-600 text-center font-segoe-medium mx-auto'>
                            Data Scientist and Software Developer
                        </p>
                            <Image src= {profilePic} alt='my Linked in profile pic' width = '300' height="300" className='rounded-full mx-auto '/>
            </li >
            <li className="flex flex-col w-1/2 text-justify font-segoe mr-10 ">
                <p className='mt-24 text-sky-700 text-xl'>
                            I am a recent graduate from the University of Michigan, where I majored in Data Science Engineering 
                            and minored in Mathematics. My development experience includes Web Systems, Robotics, Machine Learning, 
                            Statistical Analysis, and Computer Security. I have a strong understanding of Data Structures and Algorithms and have mainly tailored my development
                            to Object Oriented Programming. 
                </p>
                <p className='text-sky-700 text-xl'>

                My mathematical training focused mainly on Calculus, Linear Algebra, 
                            Probability Theory, and Financial Engineering. I am primarily interested in working as an Applied Machine Learning Engineer or Software Engineer.
                </p>
                <a href="/NicolasSanchezNoguera_CV.pdf"  className="bg-sky-500 text-white rounded py-2 px-3  opacity-90 mx-auto mt-10"   download="NicolasSanchezNoguera_CV">Download Resume</a>
            </li >

        </ul>
        </>
)}

export default PersonalInfo;