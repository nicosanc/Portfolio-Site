import React from "react";
import {FaPython, FaRProject, FaDocker, FaGit, FaAws} from 'react-icons/fa';
import {TbBrandCpp, TbSql, TbBrandCSharp, TbBrandVscode} from 'react-icons/tb'
import {IoLogoJavascript} from 'react-icons/io'
import {VscTerminalBash} from 'react-icons/vsc'
import {SiJupyter, SiVmware, SiWireshark} from 'react-icons/si'

const LanguagesIcons = () => {
    return(
        <div className=''>
            <h3 className='text-4xl text-teal-300 mb-10 text-center'>
                Languages
            </h3>
            <div className='slide-window'>
                <div className='continuous-slide mb-10'>
                    <VscTerminalBash className='text-4xl text-white mx-4 flex-shrink-0' />
                    <TbBrandCpp className='text-4xl text-white mx-4 flex-shrink-0' />
                    <TbBrandCSharp className='text-4xl text-white mx-4 flex-shrink-0' />
                    <IoLogoJavascript className='text-4xl text-white mx-4 flex-shrink-0' />
                    <FaPython className='text-4xl text-white mx-4 flex-shrink-0' />
                    <FaRProject className='text-4xl text-white mx-4 flex-shrink-0' />
                    <TbSql className='text-4xl text-white mx-4 flex-shrink-0' />
                </div>
            </div>
            <h3 className='text-4xl text-teal-300 mb-10 mt-10 text-center'>
                Technologies + Platforms
            </h3>            
            <div className='slide-window'>
                <div className='continuous-slide'>
                    <FaAws className='text-4xl text-white mx-4 flex-shrink-0' />
                    <FaDocker className='text-4xl text-white mx-4 flex-shrink-0' />
                    <FaGit className='text-4xl text-white mx-4 flex-shrink-0' />
                    <SiJupyter className='text-4xl text-white mx-4 flex-shrink-0' />
                    <SiVmware className='text-4xl text-white mx-4 flex-shrink-0' />
                    <TbBrandVscode className='text-4xl text-white mx-4 flex-shrink-0' />
                    <SiWireshark className='text-4xl text-white mx-4 flex-shrink-0' />
                </div>
            </div>
        </div>
    )
}

export default LanguagesIcons;
