import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import FormField from '../components/FormField';
import { FaCommentDollar } from 'react-icons/fa';
import { CustomButton, Loader } from '../components';
import { useStateContext } from '../context';
import { ethers } from 'ethers';
import { checkIfImage } from '../utils';
import { useNavigate } from 'react-router-dom'

export default function CreateCampaign() {
  const [loading, setLoading] = useState(false)
  const { register, control, handleSubmit, setValue } = useForm({
    defaultValues: {
      name: "",
      title: "",
      story: "",
      goal: "",
      enddate: "",
      image: ""
    }
  });
  const { createCampaign } = useStateContext();
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    setLoading(true)
    if (!await checkIfImage(data.image)) {
      alert("image error")
      setValue("image", "")
      return
    } else {
      await createCampaign({ ...data, target: data.goal })
      navigate('/')
    }
    setLoading(false)
  };
  return (
    <div
      className='bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4'
    >
      {loading ? <Loader /> : (
        <>
          <div className='flex justify-center items-center p-[16px] sm:min-w-[280px] bg-[#3a
      a43] rounded-[10px]'>
            <h1 className='font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white'>
              Start a Campaign
            </h1>
          </div>
          <form className='w-full mt-[65px] flex flex-col gap-[30px] ' onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-wrap gap-[40px]'>
              <FormField label="Name" placeholder="Enter Name" inputType="text" name="name" register={register} />
              <FormField label="Title" placeholder="Enter Title" inputType="text" name="title" register={register} />
            </div>
            <FormField
              isTextArea
              label="Story" placeholder="write your Story" name="story" register={register} />
            <div className='w-full flex justify-start items-center p-4 bg-[#8c6dfd]  rounded-[10px]'>
              <FaCommentDollar className={`w-[40px] h-[40px] text-white object-contain`} />
              <h4 className='font-epilogue font-bold text-[25px] text-white ml-[20px]'>You get 100% of the donated amount</h4>
            </div>
            <div className='flex flex-wrap gap-[40px]'>
              <FormField label="Goal" placeholder="ETH 0.50" inputType="number" name="goal" register={register} />
              <FormField label="End Date" placeholder="End Date" inputType="date" name="enddate" register={register} />
            </div>
            <FormField label="Image" placeholder="Enter Image Url" inputType="text" name="image" register={register} />
            <div className='flex justify-center items-center mt-[40px]'>
              <CustomButton
                btnType={'submit'}
                styles={'bg-[#1dc071]'}
                title="Submit New campaign"
              />
            </div>
          </form>
        </>
      )}
    </div>
  )
}
