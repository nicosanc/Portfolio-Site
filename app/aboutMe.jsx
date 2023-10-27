import React from "react";
import { SocialButton } from "./buttons";

const AboutMe = () => {
    return(
        <>
        <div className="mt-40">

           <h1 className='text-4xl text-slate-800 font-segoe-medium  flex justify-center mb-10'> About Me </h1>
           <ul className="flex justify-between">
                <li className="flex flex-col w-1/2 px-24">
                    <p className= 'text-justify text-sky-800 text-xl font-segoe'>
                        I like to lead a very active lifestyle. This means regularly participating in sports like soccer or tennis, and spending plenty of time outside going on runs or bike rides. When I&apos;m home in Miami, I make sure to spend plenty of time near the ocean. When I was in Michigan, even on the coldest days,
                        I still embraced the outdoors and would go on daily walks to keep my mind fresh. This commitment came from reading about the Norweigan word friluftsliv. Living this kind of lifestyle has instilled a sense of commitment to my life. In the simplest terms, being fully committed to all aspects of my 
                        lifestyle helped me fortify a self identity, especially a self identity of being disciplined. 
                    </p>
                </li>
                <li className="flex flex-col w-1/2 px-24 items-end">
                    <p className= 'text-justify text-sky-800 text-xl font-segoe'>
                    This translated into my professional life, which is why I have committed myself to deeply learn the topics relevant to the career I want to pursue. Cal Newton, an author and Computer Science professor at
                        Georgetown University, has a great Google Talk called &quot;So Good They Can&apos;t Ignore You&quot; that emphasizes this idea of committing yourself to crafting and mastering a unique and valuable skill. In my case, the two unique and valuable skills I am actively sharpening are my mathematics (specifically calculus,
                        linear algebra, and probability & statistics) and my development skills. I am passionate about learning about Artificial Intelligence and Machine Learning not only because of the boundless opportunities available for innovation,
                        but also because I've noticed many overlaps with my own personal journey of learning about myself. My professional goal is to be so knowledgable on these topics and to build such a substantial repetoir of experience, that I can create a career for myself that I can truly feel passionate about. 
                    </p>
                </li>
            </ul>
            <ul className="flex justify-between mb-10">
                <li className="flex flex-col mx-auto w-1/2 p-8 items-center">
                    <SocialButton label={'So Good They Can\'t Ignore You'} to={"https://www.youtube.com/watch?v=qwOdU02SE0w"} className="about-project-button "/>
                    
                </li>
                <li className="flex flex-col items-center w-1/2 p-8">
                    <SocialButton label={'Runnin Down A Dream - Bill Gurley'} to={"https://www.youtube.com/watch?v=xmYekD6-PZ8"} className="about-project-button "/>
                </li>
            </ul>
        </div>
        </>
    )
}

export default AboutMe;