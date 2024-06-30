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
    
      <div  className=''>
        <div class="navbar">
            <a href="#contact">Contact</a>
            <a href="#about me">About Me</a>
            <a href="#projects">Personal Projects</a>
            <a href="#top" className='left'>Top </a>
        </div>
        <Head>
            <title>
                Nico Portfolio
            </title>
            <meta property = "My title" content='A title that says nicos portfolio' key = 'title'/>
            <link rel='icon' href='/favicon.ico' sizes='any'/>
        </Head>
       
        <div className="">
            <div id='top'>
              <PersonalInfo />
            </div>
                <div id='projects' >
                    <PersonalProject />
                </div>
                <div id='about me' className=''>
                    <AboutMe />
                </div>
               
                <div id='contact' >
                    <LanguagesIcons />
                    <ContactInfo />
                </div>
            </div>         
      </div>
  )
}


