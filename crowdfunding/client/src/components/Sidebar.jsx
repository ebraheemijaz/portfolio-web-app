import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaBeer,FaCreativeCommonsNc,FaHome,FaPlusCircle,FaEthereum,FaGripHorizontal } from 'react-icons/fa';

const Icon = ({styles, name, icon, isActive, disabled, handleClick}) => (
    <div onClick={handleClick} className={`
        w-[48px] h-[48px] rounded-[10px] 
        ${isActive  && 'bg-[#2c2f32] text-[#4acd8d]'}
        flex justify-center items-center
        ${!disabled && 'cursor-pointer'} ${styles}
    `}>
        {name === "logo" && <FaCreativeCommonsNc className={`w-1/2 h-1/2 ${name!==isActive && 'grayscale'}`} />}
        {name === "home" && <FaHome className={`w-1/2 h-1/2 ${name!==isActive && 'grayscale'}`} />}
        {name === "create" && <FaPlusCircle className={`w-1/2 h-1/2 ${name!==isActive && 'grayscale'}`} />}
        {name === "payment" && <FaEthereum className={`w-1/2 h-1/2 ${name!==isActive && 'grayscale'}`} />}
        {name === "settings" && <FaGripHorizontal className={`w-1/2 h-1/2 ${name!==isActive && 'grayscale'}`} />}
    </div>
)

export const NAVLINKS = [
    {name:"home", link: '/'},
    {name:"create", link: '/create'},
    {name:"payment", link: '/payment'},
]

export default function Sidebar() {
    const navigate  =useNavigate();
    const [isActive, setIsActive] = useState('home')
    
    return (
        <div className='flex justify-between items-center flex-col sticky top-5 h-[93vh]'>
            <Link to="/">
                <Icon styles="w-[52px] h-[52px] bg-[#2c2f32]" isActive="logo" name="logo"  />
            </Link>
            <div className='flex-1 flex flex-col justify-between items-center bg-[#1c1c24] rounded-[20px] w-[76px] py-4 mt-12'>
                <div className='flex flex-col justify-center items-center gap-3'>
                    {NAVLINKS.map((each, index)=> (
                        <Icon key={index} styles="w-[52px] h-[52px] bg-[#2c2f32]" isActive={isActive} name={each.name} handleClick={()=>{
                            setIsActive(each.name);
                            navigate(each.link)
                        }} />
                    ))}
                </div>
                <Icon styles=" bg-[#1c1c24] shadow-secondary" isActive="settings" name="settings"  />
            </div>
        </div>
    )
}
