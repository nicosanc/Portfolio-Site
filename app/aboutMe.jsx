import React from "react";

const AboutMe = () => {
    return(
        <>
           <ul className="flex justify-between">
                <li className="flex flex-col justify-center items-start w-1/2 p-8">
                    <h1 className='text-4xl text-blue-800 font-segoe-medium mx-auto'> About Me </h1>
                </li>
                <li className="flex flex-col justify-center w-1/2 p-8 items-end mt-20">
                <p className='text-center text-indigo-700 text-xl font-segoe'>
                        My parents left Colombia 23 years ago and 
                        started a new life in Miami, Florida where I was born and raised. I attended international magnet schools where I studied French from 1st to 8th grade, surrounded by students from all over the world.
                       
                    </p>
                    <p className= 'text-center text-indigo-700 text-xl font-segoe mt-5'>
                        I&apos;ve grown up playing soccer and tennis. I love the outdoors so I&apos;m a major fan of runs, hikes, and ocean related activities. I am a sociable person and I pride myself in my communication skills. I believe it
                        originates from my exposure to very different people at a young age. 
                    </p>
                    <p className= 'text-center text-indigo-700 text-xl font-segoe mt-5'>
                        I love collaborative team projects where I can learn from other engineers with different expertises. I value hard work and discipline. I am a strong believer that doing difficult things every day is what keeps us
                        grounded and feeling alive. Most importantly, I believe in keeping an open mind to the things in life I don&apos;t understand. This helps with connecting with others, and connecting with myself. It&apos;s especially helpful for learning new technically challenging topics. 
                    </p>
                </li>
            </ul>
        </>
    )
}

export default AboutMe;