import Image from 'next/image';
import Head from 'next/head';
import React from 'react';
import Script from 'next/script'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dracula} from 'react-syntax-highlighter/dist/esm/styles/prism'
import LanguagesIcons from './components/language-icons';
import profilePic from '../images/profPic.jpg'
import ContactInfo from './components/contact';
import PersonalInfo from './components/personalInfo';
import PersonalProject from './components/personalProj';
import AboutMe from './components/aboutMe';
import Navbar from './components/navbar';

export default function Home() {
  return (
    
      <div  className=''>
        <Navbar />
        <Head>
            <title>
                Nico Portfolio
            </title>
            <meta property = "My title" content='A title that says nicos portfolio' key = 'title'/>
            <link rel='icon' href='/favicon.ico' sizes='any'/>
        </Head>
       
        <div id='top'>
          <PersonalInfo />
        </div>
        <div id='contact' >
            <ContactInfo />
            <LanguagesIcons />
        </div>
        <div id='about me' className=''>
            <AboutMe />
        </div>
        <div id='projects' >
            <PersonalProject />
        </div>
      </div>
  )
}


