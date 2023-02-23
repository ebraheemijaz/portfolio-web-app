import React from 'react'
import { daysLeft } from '../utils'
import { FaSearch, FaUserCircle, FaFolderOpen, FaCreativeCommonsNc } from 'react-icons/fa';

export default function CampaignCard({
    owner,
    title,
    story,
    goal,
    deadline,
    amountCollected,
    image,
    pId,
    onClick
}) {
    const remaingDays = daysLeft(deadline);
    return (
        <div className='sm:w-[288px] w-full rounded-[15px] bg-[#1c1c24] cursor-pointer mr-2' onClick={onClick}>
            <img src={image} className='w-full h-[158px] object-cover rounded-[15px]' />
            <div className='flex flex-col p-4'>
                <div className='flex flex-row items-center mb-[18px]'>
                    <FaFolderOpen className='w-[20px] h-[20px] object-contain text-[#808191] mr-[5px]' />
                    <p className='font-epilogue font-medium text-[12px] text-[#808191]'>{title}</p>
                </div>
                <div className='block'>
                    <h3 className='font-epilogue font-semibold text-[16px] text-white text-left leading-[26px] truncate'>{title}</h3>
                    <p className='mt-[5px] font-epilogue font-normal text-[#808191] text-left leading-[18px] truncate'>{story}</p>
                </div>
                <div className='flex justify-between flex-wrap mt-[15px] gap-2'>
                    <div className='flex flex-col'>
                        <h4 className='font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]'>
                            {amountCollected}
                        </h4>
                        <p className='mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate'>Raised of {goal}</p>
                    </div>
                    <div className='flex flex-col'>
                        <h4 className='font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]'>
                            {remaingDays}
                        </h4>
                        <p className='mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate'>
                            Days Left
                        </p>
                    </div>
                </div>
                <div className='flex items-center mt-[20px] gap-[12px]'>
                    <div className='w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#13131a]'>
                        <FaCreativeCommonsNc className='w-1/2 h-1/2 object-contain text-[#808191]' />
                    </div>
                    <p className='flex-1 font-epilogue font-normal text-[12px] text-[#808191] truncate'>
                        by <span className='text-[#b2b3bd]'>{owner}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
