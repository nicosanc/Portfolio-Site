import React from "react";
import Image from 'next/image';
import profilePic from '../images/profPic.jpg'
import { ResumeDownload } from "./buttons";

const PersonalInfo = () => {
    return(
        <>
        <ul className="flex justify-between">
            <li  className="flex flex-col justify-center items-start w-1/2">
                         <p className='pt-20 pb-5 mx-auto text-5xl text-slate-800 text-justify font-segoe'>
                            Nicolas Sanchez Noguera
                        </p>

                        <p className=' pb-10 text-2xl text-slate-600 text-center font-segoe mx-auto'>
                            CS and Math Enthusiast
                        </p>
                            <Image src= {profilePic} alt='my Linked in profile pic' width = '300' height="300" className='rounded-full mx-auto '/>
            </li >
            <li className="flex flex-col w-1/2 text-justify font-segoe mr-10 items-center">
                <p className='mt-24 text-sky-700 text-xl'>
                            I am a recent graduate from the University of Michigan, where I majored in Data Science Engineering 
                            and minored in Mathematics. My development experience includes Web Systems, Robotics, Machine Learning, 
                            Statistical Analysis, and Computer Security. I have a strong understanding of Data Structures and Algorithms.
                </p>
                <p className='text-sky-700 text-xl mb-10 font-segoe'>

                My mathematical training focused mainly on Calculus, Linear Algebra, 
                            Probability Theory, and Financial Engineering.

                </p>
                <ResumeDownload label={'Download Resume'} file="/NicolasSanchezNoguera_ML.pdf"  className='items-center'/>
            </li >

        </ul>
        </>
)}

export default PersonalInfo;
