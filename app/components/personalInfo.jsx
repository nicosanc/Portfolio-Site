import React from "react";
import Image from 'next/image';
import profilePic from '../../images/profPic.jpg'
import { ResumeDownload } from "./buttons";
import Rectangle from "./shapes"


const PersonalInfo = () => {
    return(
        <div className=''>
            <Rectangle />
            <ul className="flex justify-between mb-20">
                <li  className="flex flex-col justify-center items-start w-1/2">
                            <p className='pt-20 pb-5 mx-auto text-6xl text-slate-800 text-justify'>
                                Nicolas Sanchez Noguera
                            </p>

                            <p className=' pb-10 text-3xl text-slate-600 text-center mx-auto p-4'>
                                Data Driven | Blockchain Enthusiast | Quantitative Thinker
                            </p>
                                
                </li >
                <li className="flex flex-col w-1/2 text-justify mr-10 items-center">
                <Image src= {profilePic} alt='my Linked in profile pic' width = '500' height="500" className='rounded-full mx-auto mt-20'/>
                    {/* <p className='mt-24 text-sky-500 text-xl text-center pb-6'>
                                Graduate from the University of Michigan&apos;s College of Engineering, where I majored in Data Science and minored in Mathematics. My academic focus was on computational programing, 
                                specifically Machine Learning and Statistical Programming. 
                    </p>
                    <p className='text-sky-500 text-xl mb-10'>
                    I&apos;m highly proficient in Python given my extensive experience with libraries and frameworks such as Gymnasium, Numpy, Pandas, Sci-Kit Learn, and PyTorch.
                                I am also well versed in C++, R, SQL, and Cairo. I regularly develop my projects in Linux environments. In recent months, I&apos;ve gained extensive experience and knowledge in blockchain development, specializing in 
                                Cairo Smart Contract development on Starknet 
                    </p>
                    <ResumeDownload label={'Download Resume'} file="/NicolasSanchezNoguera_CV.pdf"  className='items-center'/> */}
                </li >
            </ul>
            <div className='justify-center mx-80 '>
                <p className='text-teal-200 text-xl text-justify'>
                        Graduate from the University of Michigan&apos;s College of Engineering, where I majored in Data Science and minored in Mathematics. My academic focus was on computational programing, 
                        specifically Machine Learning and Statistical Programming. 
                </p>
                <p className='mt-5 text-teal-200 text-xl text-justify'>
                        I&apos;m highly proficient in Python given my extensive experience with libraries and frameworks such as Gymnasium, Numpy, Pandas, Sci-Kit Learn, and PyTorch.
                        I am also well versed in C++, R, SQL, and Cairo. I regularly develop my projects in Linux environments. In recent months, I&apos;ve gained extensive experience and knowledge in blockchain development, specializing in 
                        Cairo Smart Contract development on Starknet 
                </p>
            </div>
        </div>
)}

export default PersonalInfo;
