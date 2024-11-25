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
                    
                </li >
            </ul>
            <div className='justify-center mx-80 '>
                <h2 className="mt-5 text-teal-100 text-2xl" >Overview</h2>
                <p className='text-teal-200 text-xl text-justify'>
                As a prompt engineer for over a year, I train AI models in advanced mathematics and programming. 
                High level topics like Linear Algebra, Calculus, and Probability are the focal point of my mathematics training. 
                I test these complex problems to induce models to think abstractly, derive theoretical context, and apply the correct computation to achieve sensible results.
                In programming, I specialize in crafting challenges that leverage Pandas, PyTorch, and scikit-learn. 
                These tasks push AI systems to analyze data, model relationships, and deliver meaningful insights. 
                This independent, research-intensive work has refined my technical expertise and ability to solve complex problems effectively.
                </p>
              
                <h2 className="mt-5 text-teal-100 text-2xl">Data</h2>
                <p className='text-teal-200 text-xl text-justify'>
                My proficiency in Python has been honed through both my academic curriculum and my role as a prompt engineer. 
                I specialize in libraries like Pandas and Sci-Kit Learn for tasks like data cleaning, computational analysis, and visualization. 
                In addition, I have a deep understanding of Spark and SQL, gained through my Databricks Data Engineer certification. 
                I fruther bosletered my foundation with the Apache Kafka Accreditation, learning how to implement effective event streams.
                This expertise enables me to efficiently handle large datasets, optimize query performance, and build scalable data pipelines.
                </p>
                
                <h3 className="mt-5 text-teal-100 text-2xl">Full Stack</h3>
                <p className='text-teal-200 text-xl text-justify'>
                Currently, I&apos;m completing the University of Helsinki&apos;s FullStackOpen course, which is expanding my experience with React, Node.js, Express, GraphQL, and containerization. 
                This course complements my academic background in Computer Security and Web Systems, where I gained foundational knowledge in securing applications and developing robust web architectures. 
                Combining these skills with real-world project experience, I&apos;m strengthening my ability to build scalable and secure full-stack applications.
                </p>
                
                <h3 className="mt-5 text-teal-100 text-2xl">Blockchain</h3>
                <p className='text-teal-200 text-xl text-justify'>
                My journey into full-stack development has been driven by my passion for building decentralized applications (dApps). 
                This has led me to explore Ethereum and Solana, where I&apos;ve applied my full-stack skills in real-world projects. 
                I completed a StarkNet bootcamp and participated in two hackathons, honing my ability to develop dApps on Ethereum&apos;s Layer 2 network. 
                More recently, I completed a bootcamp focused on building Solana dApps using the Rust-based Anchor framework. 
                This hands-on experience has not only deepened my technical expertise but also fueled my drive to create efficient and secure blockchain-based applications
                </p>

            </div>
        </div>
)}

export default PersonalInfo;
