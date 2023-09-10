import React from "react";
import {FaPython, FaRProject, FaDocker, FaGit, FaAws} from 'react-icons/fa';
import {TbBrandCpp, TbSql, TbBrandCSharp, TbBrandVscode} from 'react-icons/tb'
import {IoLogoJavascript} from 'react-icons/io'
import {VscTerminalBash} from 'react-icons/vsc'
import {SiJupyter, SiVmware, SiWireshark} from 'react-icons/si'

const LanguagesIcons = () => {
    return(
        <><div className='text-center pt-24'>
            <h3 className='font-medium text-3xl text-indigo-700'>
                Languages
            </h3>
        </div>
        <div className='pt-10 flex justify-between'>
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
        </div>
        <div className='text-center pt-24'>
            <h3 className='font-medium text-3xl text-indigo-700'>
                Technologies + Platforms
            </h3>
        </div>
        <div className='py-10 flex justify-between ' >
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
            </div>           
            </>
    )
}

export default LanguagesIcons;