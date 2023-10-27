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
                    satellite imaging on <a href="https://developers.planet.com/planetschool/">Planet School</a> and decided to fuse my experience with Convolutional Neural Networks for image classification with this 
                    field. I designed a shallow CNN using PyTorch to explore classification for Land Use and Land Cover using the EuroSAT dataset, which was monumental when it released. The dataset was the first of its kind,
                    offering 27000 images in both RGB and Multi-Band Tiff format. This offers enough training and evaluation material to effectively train a model to generalize on this type of environmental imaging. This project took a few weeks 
                    to ensure an in depth exploration on not only working with this data format, but also working with more advanced techniques in computer vision. I decided to write a comprehensive report to document my journey learning about
                    Land Use and Land Cover Classification and to showcase my understanding of relevant machine learning (specifically Computer Vision) techniques and python tools. The codebase, Google Colab Notebook, and report can be found
                    on my Github link below. 
                </p>
                                 
                </li>
                <li className="flex flex-col w-1/2 px-24">
                    <p className='text-sky-800 text-xl font-segoe text-justify '>
                        I built and published my own python library as part of a side project I am currently contributing to. The python library takes in any datetime object, converts it into an Arrow (a versatile python
                        datetime library) object, converts the new object to UTC timezone, then outputs the difference in time. The specific use case for this functionality is to produce simple, human readable time differences such as &quot;1h&quot; or &quot;25d&quot; for one hour ago and 25 days ago, respectively.
                        The project I created it for is using its functionality to show how long a notification has been pending. I plan on expanding this library&apos;s methods as I discover more helpful use cases.
                    </p>
                </li>
            </ul>
            <ul className="flex justify-between">
                <li className="flex flex-col w-1/2 p-8 items-center">
                    <SocialButton label={'EuroSAT Exploration and Classification Repository'} to={'https://github.com/nicosanc/PyTorch-Img-Classifier.git'} className='about-project-button' />    
                </li>
                <li className="flex flex-col w-1/2 p-8 items-center">
                    <SocialButton label={'Github Simple_Notifs Repository'} to={'https://github.com/nicosanc/simple_notifs.git'} className='about-project-button'  />
                </li>

            </ul>
        </>
    )
}

export default PersonalProject;