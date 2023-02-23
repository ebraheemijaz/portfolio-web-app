import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaUserCircle,FaGripVertical,FaCreativeCommonsNc } from 'react-icons/fa';
import { FaHome,FaPlusCircle,FaEthereum } from 'react-icons/fa';
import { CustomButton } from '.';
import { NAVLINKS } from './Sidebar';
import { useStateContext } from '../context';

export default function Navbar() {
  const navigate  =useNavigate();
  const [isActive, setIsActive] = useState('home')
  const [openDrawer, setOpenDrawer] = useState(false)
  const  {connect, address} = useStateContext()

  // const address = "0x86"

  return (
    <div className='flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6'>
      <div className='lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24] rounded-[100px]'>
        <input type='text' placeholder='Search...' 
          className='flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264]
          text-white bg-transparent outline-none ' />
        <div className='w-[72px] h-full rounded-[20px] bg-[#4acd8d] flex justify-center items-center cursor-pointer'>
          <FaSearch className='object-contain w-[15px] h-[15px] text-white' />
        </div>
      </div>
      <div className='sm:flex hidden flex-row justify-end gap-4'>
        <CustomButton
          btnType="button"
          title={address ? 'Create Campaign' : 'Connect'}
          styles={address? 'bg-[#1dc071]': 'bg-[#8c6dfd]'}
          onClick={()=>{
            if(address) navigate('create')
            else connect()
          }}
        />

        <Link to="/profile">
          <div className='w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer'>
            <FaUserCircle className='object-contain w-5/6 h-5/6 text-[#4acd8d]' />
          </div>
        </Link>
      </div>


      <div className='sm:hidden flex justify-between items-center relative'>
        <div className='w-[40px] h-[40px] rounded-[10px] bg-[#2c2f32] flex justify-center items-center cursor-pointer'>
            <FaCreativeCommonsNc className={`w-1/2 h-1/2 text-[#4acd8d]`} />
        </div>
        <div className='w-[40px] h-[40px] rounded-[10px] bg-[#2c2f32] flex justify-center items-center cursor-pointer'
          onClick={()=>{setOpenDrawer(!openDrawer)}}
          >
            <FaGripVertical className={`w-1/2 h-1/2 text-[#4acd8d]`} />
        </div>
        <div className={`absolute top-[60px] right-0 left-0 bg-[#1c1c24] z-10 shadow-secondary py-4
            ${!openDrawer ? '-translate-y-[100vh]' : '-translate-y-0'} transition-all duration-700 
        `}>
          <ul className='mb-4'>
            {NAVLINKS.map((each, index)=>(
              <li 
                key={index}
                className={`flex p-4 items-center  ${isActive === each.name && 'bg-[#3a3a43] text-[#4acd8d]' } `}
                onClick={()=>{
                  setIsActive(each.name);
                  navigate(each.link);
                  setOpenDrawer(false)
                }}
              >
                {each.name === "home" && <FaHome className={`w-[24px] h-[24px]`}  />}
                {each.name === "create" && <FaPlusCircle className={`w-[24px] h-[24px]`}  />}
                {each.name === "payment" && <FaEthereum className={`w-[24px] h-[24px]`}  />}
                <p className={`ml-[20px] font-epilogue font-semibold text-[14px] ${isActive === each.name ? 'text-[#4acd8d]' : 'text-[#808181]'} `}>
                  {each.name}
                </p>
              </li>
            ))}
          </ul>
          <div className='px-4'>
            <CustomButton
              btnType="button"
              title={address ? 'Create Campaign' : 'Connect'}
              styles={address? 'bg-[#1dc071] w-full': 'bg-[#8c6dfd] w-full'}
              onClick={()=>{
                if(address) navigate('create')
                else {
                  connect()
                }
                setOpenDrawer(false)
              }}
            />
          </div>
        </div>
      </div>
    </div>
  ) 
}
