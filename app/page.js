import Image from 'next/image';
import Head from 'next/head';
import React from 'react';
import Script from 'next/script'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dracula} from 'react-syntax-highlighter/dist/esm/styles/prism'
import LanguagesIcons from './language-icons';
import profilePic from '../images/profPic.jpg'

export default function Home() {
  return (
    
      <div  className='bg-blue-200 h-full'>
        <Head>
            <title>
                Nico's Portfolio
            </title>
            <meta property = "My title" content='A title that says nicos portfolio' key = 'title'/>
            <link rel='icon' href='/favicon.ico' />
        </Head>
       
        
        <div>
                <h3 className='pt-20 pb-10 text-4xl text-indigo-700 text-center font-medium'>
                    Nicolas Sanchez Noguera
                </h3>
                <div className='relative rounded'>
                    <Image src= {profilePic} 
                    alt='my Linked in profile pic' width = '250' height="250"
                    className='rounded mx-auto pb-10 '/>
                </div>
                <div >
                    <p className='text-center mx-32 text-lg'>
                        I am a recent graduate from the University of Michigan, where I majored in Data Science Engineering 
                        and minored in Mathematics. My development experience includes Web Systems, Robotics, Machine Learning, 
                        Statistical Analysis, and Computer Security. My mathematical training focused mainly on Calculus, Linear Algebra, 
                        Probability Theory, and Financial Engineering. I am primarily interested in working as an Applied Machine Learning Engineer 
                        but I am also open to software engineering opportunities. 
                    </p>
                    <p className='text-center mx-32 text-lg mt-5'>
                    My focus for this next stage in my life &#40;my first years as a professional&#41; is to absorb as much information as I can. I am currently reading through the textbook Deep Learning by
                        Ian Goodfellow to resharpen my understanding of linear algebra and probability, and their applications in Neural Networks. The other book 
                        I am reading is Machine Learning Engineering by Andriy Burkov, which gives a breakdown of the project cycle from data preparation up until 
                        model deployment and maintenance. 
                        <br></br>
                        As for building experience in developing software systems, I decided to build this portfolio site using Next.JS. I've also began studying for the AWS Associate Developer Certification. This will allow me to hone relevant 
                        industry skills in cloud development, as well as proper CI/CD and version control etiquette.
                    </p>

                <h1 className='mt-20 mb-10 mx-auto text-4xl text-indigo-700 text-center font-medium'> Personal Project </h1>
                    <p className='text-center mt-10 mx-32 text-lg'>
                    To showcase my understanding of a popular Deep Learning framework and the Deep Learning Basics,
                    I decided on building a Convolutional Neural Network to classify images, using PyTorch. I trained and tested the model 
                    on the CIFAR10 dataset offered by torchvision.datasets. The model was trained several times with different 
                    data augmentations to try and improve the model's robustness. It was tested against unshuffled, un-augmented validation and test 
                    sets. The code and plots are included in the notebook file present on in the link below. 
                    A python file and requirements text file are also included in the
                    the project directory. I plan on expanding my github with more personal mini projects
                    </p>

                <a href="https://github.com/nicosanc/Portfolio-Site.git" className=' flex justify-center text-xl text-blue-500 mt-10' > Click Me - Github Repository </a>

                <h1 className='mt-20 mb-10 mx-auto text-4xl text-indigo-700 text-center font-medium'>A Bit About Who I Am </h1>
                    <p className='text-center mt-10 mx-32 text-lg'>
                        I come from a Colombian family. My parents left Colombia 23 years ago and 
                        started a new life in Miami, Florida where I was born and raised. I was fortunate enough to grow up in a highly diverse city with friends from all over the world. This was partly thanks to the Elementary and
                        Middle schools I attended, which were international magnet programs focused on advanced language learning. I studied French for 8 years in a heavily diverse environment of European, South American, and Caribbean students. <br></br>
                        Outside of academics, I played and still play soccer and tennis on a regular basis. I am an extremely outdoors oriented person so I enjoy runs, hikes, and ocean related activities. I am very sociable person and I pride myself in my communication skills. I believe it
                        originates from exposure to very different people at a young age. <br></br> I love collaborative team projects where I can wear multiple hats to tackle different challenges. I value hard work and discipline. I am a strong believer that doing difficult things every day is what keeps us
                        grounded and feeling alive. I am looking to challenge myself professionally. 
                    </p>
                <h1 className='mt-20 mb-10 mx-auto text-4xl text-indigo-700 text-center font-medium'> Where To Reach Me</h1>
                <ul  className='flex justify-center mx-auto text-blue-500'>
                    <li className=' text-center'>
                        <a href='https://www.linkedin.com/in/nicolas-sanchez-noguera-0792621a5/'>LinkedIn Profile</a>
                    </li>
                    <li className=' text-center ml-10'>
                        <a href='mailto:nicosanchez0411@gmail.com'>Personal Email</a>
                    </li>
                    <li className=' text-center ml-10'>
                        <a href='tel:786-683-9388'>Personal Cell</a>
                    </li>
                </ul>
                </div>
                <div>
                <LanguagesIcons />

                </div>
      
       
            </div>
           
      </div>
    
  )
}


