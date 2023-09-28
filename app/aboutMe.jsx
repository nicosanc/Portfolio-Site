import React from "react";

const AboutMe = () => {
    return(
        <>
           <h1 className='text-4xl text-slate-800 font-segoe-medium mt-40 flex justify-center mb-10'> About Me </h1>
           <ul className="flex justify-between">
                <li className="flex flex-col w-1/2 px-24">
                    <p className= 'text-justify text-sky-700 text-xl font-segoe'>
                        I like to lead a very active lifestyle. This means regularly participating in sports like soccer or tennis, and spending plenty of time outside going on runs or bike rides. When I&apos;m home in Miami, I make sure to spend plenty of time near the ocean. When I was in Michigan, even on the coldest days,
                        I still embraced the outdoors and would go on daily walks to keep my mind fresh. This commitment came from reading about the Norweigan word friluftsliv. Living this kind of lifestyle has instilled a sense of commitment to my life. In the simplest terms, being fully committed to all aspects of my 
                        lifestyle helped me fortify a self identity, especially a self identity of being disciplined. 
                    </p>
                </li>
                <li className="flex flex-col w-1/2 px-24 items-end">
                    <p className= 'text-justify text-sky-700 text-xl font-segoe'>
                    This translated into my professional life, which is why I have committed myself to deeply learn the topics relevant to the career I want to pursue. Cal Newton, an author and Computer Science professor at
                        Georgetown University, has a great Google Talk called &quot;So Good They Can&apos;t Ignore You&quot; that emphasizes this idea of committing yourself to crafting and mastering a unique and valuable skill. In my case, the two unique and valuable skills I am actively sharpening are my mathematics (specifically calculus,
                        linear algebra, and probability & statistics) and my software development skills. My professional goal is to be so knowledgable on these topics and to build such a substantial repetoir of experience, that I can create a career for myself that I can truly feel passionate about. 
                    </p>
                </li>
            </ul>
            <ul className="flex justify-between mb-10">
                <li className="flex flex-col justify-center w-1/2 p-8 items-end">
                    <a href="https://www.youtube.com/watch?v=qwOdU02SE0w" className='bg-sky-500 text-white rounded py-2 px-3 mx-auto mt-10 opacity-90'>So Good They Can&apos;t Ignore You</a>
                </li>
                <li className="flex flex-col justify-center w-1/2 p-8 items-end">
                    <a href="https://www.youtube.com/watch?v=xmYekD6-PZ8" className='bg-sky-500 text-white rounded py-2 px-3 mx-auto mt-10 opacity-90'>Runnin&apos; Down A Dream - Bill Gurley</a>
                </li>
            </ul>
        </>
    )
}

export default AboutMe;