import React from "react";
import { SocialButton } from "./buttons";

const PersonalProject = () => {
    return(
        <>
            <h1 className='text-4xl text-teal-300 flex justify-center mt-20 mb-10'> Personal Projects </h1>
            <ul className="flex justify-between">
                <li className="flex flex-col w-1/2 px-24">
                    <p className='text-teal-200 text-xl text-justify '>
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
                    <p className='text-teal-200 text-xl text-justify '>
                    I competed in Starknet's StarkHack hackathon from June 13 to June 26, 2024. 
                    The challenge was to create an MVP dApp on Starknet within 10 days, using its official language, Cairo. 
                    My partner and I developed a decentralized event management system, with Cairo smart contracts as the backend to create and manage user-generated events. 
                    Our concept focused on a stake-to-attend model, incentivizing registered users to attend by returning their stake if they showed up, and retaining the stake for no-shows. 
                    Despite facing difficulties—particularly in connecting the frontend to the smart contracts—we successfully implemented two smart contracts.
                    One smart contract managed the event registry and the other handled individual event creation.
                  
                    </p>
                </li>
            </ul>
            <ul className="flex justify-between mb-20">
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