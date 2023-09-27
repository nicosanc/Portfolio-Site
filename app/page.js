import Image from 'next/image';
import Head from 'next/head';
import React from 'react';
import Script from 'next/script'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dracula} from 'react-syntax-highlighter/dist/esm/styles/prism'
import LanguagesIcons from './language-icons';
import profilePic from '../images/profPic.jpg'
import ContactInfo from './contact';
import PersonalInfo from './personalInfo';
import PersonalProject from './personalProj';
import AboutMe from './aboutMe';

export default function Home() {
  return (
    
      <div  className='bg-gradient-radial from-blue-300 to-amber-100 h-full'>
        <Head>
            <title>
                Nico Portfolio
            </title>
            <meta property = "My title" content='A title that says nicos portfolio' key = 'title'/>
            <link rel='icon' href='/favicon.ico' sizes='any'/>
        </Head>
       
        
        <div>
            <PersonalInfo />
                
                <div >
                    
                <PersonalProject />
                <AboutMe />
               
                </div>
                <div>
                <LanguagesIcons />

                </div>

               <ContactInfo />
       
            </div>
           
      </div>
    
  )
}


