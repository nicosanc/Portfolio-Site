import React from "react";
import { SocialButton } from "./buttons";

const PersonalProject = () => {
    return(
        <>
            <h1 className='text-4xl text-slate-800 font-segoe flex justify-center mt-40 mb-10'> Personal Projects </h1>
            <ul className="flex justify-between">
                <li className="flex flex-col w-1/2 px-24">
                    <p className='text-sky-800 text-xl font-segoe text-justify '>
                        With the growth of technology in climate and environmental sciences, the need for innovative Machine Learning solutions for remotely sensed imaging has become paramount. I began exploring the world of
                        satellite imaging on <a href="https://developers.planet.com/planetschool/" className="underline" target="_blank">Planet School</a> and decided to fuse my experience with Convolutional Neural Networks for image classification with this 
                        field. I designed a shallow CNN using PyTorch to explore classification for Land Use and Land Cover using the EuroSAT dataset, which was monumental when it released. The dataset was the first of its kind,
                        offering 27000 images in both RGB and Multi-Band Tiff format. This offers enough training and evaluation material to effectively train a model to generalize on this type of environmental imaging. This project took a few weeks 
                        to ensure an in depth exploration on not only working with this data format, but also working with more advanced techniques in computer vision. I decided to write a comprehensive report to document my journey learning about
                        Land Use and Land Cover Classification and to showcase my understanding of relevant machine learning (specifically Computer Vision) techniques and python tools. The codebase, Google Colab Notebook, and report can be found
                        on my Github link below. 
                    </p>   
                </li>
                <li className="flex flex-col w-1/2 px-24">
                    <p className='text-sky-800 text-xl font-segoe text-justify '>
                        I competed in Starknet's StarkHack hackathon, which went on from June 13 - June 26, 2024. The hackathon tasked those competing to create
                        an MVP for a dApp built on Starknet, using Starknet's official language Cairo. My partner and I worked on a decentralized event management system, where we used 
                        Cairo smart contracts as our backend to create and manage events published by users. Our intention was to promote a stake-to-attend principle on our site to ensure 
                        registered users were more incentivized to attend an event. If they showed up, they would have their stake returned in full. Else, the stake was kept and split between the site
                        and the event organizer. My partner and I were complete beginners building Starknet projects so we were able to complete a basic implementation that handled the creation of events
                        by the hackathon deadline. We faced major difficulties connecting our front end template to our smart contracts, and even more difficulty sending event data to our Pinata file system. 
                        We are currently still working on the project, aiming to expand the backend to a stake-to-attend focused system. We are also chipping away at the front end trying to maximize user
                        retention on the site. 
                    </p>
                </li>
            </ul>
            <ul className="flex justify-between">
                <li className="flex flex-col w-1/2 p-8 items-center">
                    <SocialButton label={'EuroSAT Exploration and Classification Repository'} to={'https://github.com/nicosanc/PyTorch-Img-Classifier.git'} className='about-project-button' />    
                </li>
                <li className="flex flex-col w-1/2 p-8 items-center">
                    <SocialButton label={'Github Starknet Eventoors Repository'} to={'https://github.com/Band-of-Buidlers/Starknet-Eventoors'} className='about-project-button'  />
                </li>

            </ul>
        </>
    )
}

export default PersonalProject;