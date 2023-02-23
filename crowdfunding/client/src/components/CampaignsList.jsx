import React from 'react'
import { useNavigate } from 'react-router-dom'
import CampaignCard from './CampaignCard'
import Loader from './Loader'

export default function CampaignsList({ title, data, loading }) {
    const navigate = useNavigate();

    const handleClick = (campaign) => {
        navigate(`/campaign-details/${campaign.title}`, { state: campaign })
    }
    return (
        <div>
            {loading ? (
                <div className='flex flex-wrap mt-[20px] gap-[26px] justify-center items-center bg-[#f5f5dc0d] h-[200px] '>
                    <Loader />
                </div>
            ) : (
                <>
                    <h1 className='font-epilogue font-semibold text-[18px] text-white text-left'
                    >
                        {title} ({data.length})
                    </h1>
                    {data.length === 0 ? (<>
                        <p className='font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]'>You have not created any campigns yet.</p>
                    </>) : (
                        <div className="flex flex-wrap mt-2">
                            {data.map(eachCampaign => (
                                <CampaignCard key={eachCampaign.pId} {...eachCampaign} onClick={() => handleClick(eachCampaign)} />
                            ))}
                        </div>
                    )}
                </>
            )}
        </div>
    )
}