import React from "react";
import Image from 'next/image';
import profilePic from '../images/profPic.jpg'

const PersonalInfo = () => {
    return(
        <>
        <ul className="flex justify-between">
            <li  className="flex flex-col justify-center items-start w-1/2 p-8">
                         <h3 className='pt-20 pb-5 mx-auto text-5xl text-blue-800 text-justify font-segoe'>
                            Nicolas Sanchez Noguera
                        </h3>

                        <h4 className=' pb-10 text-2xl text-blue-800 text-center font-segoe-medium mx-auto'>
                            Data Scientist and Software Developer
                        </h4>
                            <Image src= {profilePic} alt='my Linked in profile pic' width = '300' height="300" className='rounded-full mx-auto mb-10'/>
            </li >
            <li className="flex flex-col justify-center w-1/2 p-8 items-end font-segoe">
            <p className='text-indigo-700 text-xl text-center'>
                        I am a recent graduate from the University of Michigan, where I majored in Data Science Engineering 
                        and minored in Mathematics. My development experience includes Web Systems, Robotics, Machine Learning, 
                        Statistical Analysis, and Computer Security. My mathematical training focused mainly on Calculus, Linear Algebra, 
                        Probability Theory, and Financial Engineering. I am primarily interested in working as an Applied Machine Learning Engineer 
                        but I am also open to software engineering opportunities. 
            </p>
            </li >
        </ul>
        </>
)}

export default PersonalInfo;