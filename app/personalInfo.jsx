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
                            Blockchain Enthusiast
                        </p>
                            <Image src= {profilePic} alt='my Linked in profile pic' width = '300' height="300" className='rounded-full mx-auto '/>
            </li >
            <li className="flex flex-col w-1/2 text-justify font-segoe mr-10 items-center">
                <p className='mt-24 text-sky-700 text-xl'>
                            I am a graduate from the University of Michigan&apos;s College of Engineering, where I majored in Data Science and minored in Mathematics. My academic focus was on computational programing, 
                            specifically Machine Learning and Statistical Programming. My range extends to Blockchain, Computer Security, and Web Systems. 
                </p>
                <p className='text-sky-700 text-xl mb-10 font-segoe'>
                I&apos;m highly proficient in Python given my extensive experience with libraries and frameworks such as Gymnasium, Numpy, Pandas, Sci-Kit Learn, and PyTorch.
                            I am also well versed in C++, R, SQL, and Cairo. I regularly develop my projects in Linux environments. In recent months, I&apos;ve gained extensive experience and knowledge in blockchain development, specializing in 
                            Cairo Smart Contract development on Starknet 
                </p>
                <ResumeDownload label={'Download Resume'} file="/NicolasSanchezNoguera_CV.pdf"  className='items-center'/>
            </li >

        </ul>
        </>
)}

export default PersonalInfo;
