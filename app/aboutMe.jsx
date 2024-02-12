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
                        lifestyle helped me fortify a disciplined self identity. 
                    </p>
                </li>
                <li className="flex flex-col w-1/2 px-24 items-end">
                    <p className= 'text-justify text-sky-800 text-xl font-segoe'>
                    This translated into my professional life, which is why I have committed myself to deeply learn the topics relevant to the career I want to pursue. Author Cal Newport has a great Google Talk called &quot;So Good They Can&apos;t Ignore You&quot; that emphasizes this idea of committing yourself to crafting a unique and valuable skill. 
                        Bill Gurley&apos;s talk Runnin Down a Dream reiterates this concept. In my case, I am actively sharpening my technical ability to solve complex problems using software and data. 
                        I am passionate about Artificial Intelligence and Machine Learning. 
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
