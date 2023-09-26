import React from "react";
import {FaPython, FaRProject, FaDocker, FaGit, FaAws} from 'react-icons/fa';
import {TbBrandCpp, TbSql, TbBrandCSharp, TbBrandVscode} from 'react-icons/tb'
import {IoLogoJavascript} from 'react-icons/io'
import {VscTerminalBash} from 'react-icons/vsc'
import {SiJupyter, SiVmware, SiWireshark} from 'react-icons/si'

const LanguagesIcons = () => {
    return(
        <>
        <ul className="flex justify-between">
            <li  className="flex flex-col justify-center items-start w-1/2">
            <h3 className='font-segoe-medium text-4xl text-blue-800  mx-auto mt-20'>
                Languages
            </h3>

            </li>
            <li className="flex flex-col justify-center w-1/2 items-end mt-20">
                <ul className='flex justify-between mx-auto'>
                    <li className=' text-center'>
                        <VscTerminalBash className='text-4xl' />
                    </li>
                    <li className=' text-center ml-10'>
                        <TbBrandCpp className='text-4xl' />
                    </li>
                    <li className=' text-center ml-10'>
                        <TbBrandCSharp className='text-4xl' />
                    </li>
                    <li className=' text-center ml-10'>
                        <IoLogoJavascript className='text-4xl' />
                    </li>
                    <li className=' text-center ml-10'>
                        <FaPython className='text-4xl' />
                    </li>
                    <li className=' text-center ml-10'>
                        <FaRProject className='text-4xl' />
                    </li>
                    <li className=' text-center ml-10'>
                        <TbSql className='text-4xl' />
                    </li>
                </ul>
            </li>
        
        </ul>
        
        <ul className="flex justify-between">
            <li  className="flex flex-col justify-center items-start w-1/2">
            <h3 className='font-segoe-medium text-4xl text-blue-800  mx-auto mt-20'>
                Technologies + Platforms
            </h3>

            </li>
            <li className="flex flex-col justify-center w-1/2 items-end mt-20">
                <ul className='flex justify-between mx-auto'>
                 <li className=' text-center'>
                        <FaAws className='text-4xl' />
                    </li>
                    <li className=' text-center ml-10'>
                        <FaDocker className='text-4xl' />
                    </li>
                    <li className=' text-center ml-10'>
                        <FaGit className='text-4xl' />
                    </li>
                    <li className=' text-center ml-10'>
                        <SiJupyter className='text-4xl' />
                    </li>
                    <li className=' text-center ml-10'>
                        <SiVmware className='text-4xl' />
                    </li>
                    <li className=' text-center ml-10'>
                        <TbBrandVscode className='text-4xl' />
                    </li>
                    <li className=' text-center ml-10'>
                        <SiWireshark className='text-4xl' />
                    </li>
                </ul>
            </li>
        
        </ul>        
        </>
    )
}

export default LanguagesIcons;