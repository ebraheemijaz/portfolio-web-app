import React from 'react'
export default function FormField({
    label,
    placeholder,
    inputType,
    name,
    isTextArea=false,
    register
}) {
  return (
    <>
        <label className='flex-1 w-full flex flex-col'>
            {label && (
                <span className='font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]' >{label}</span>
            )}
            {isTextArea ? (
                <textarea 
                    required
                    placeholder={placeholder}
                    rows={10}
                    className="py-[15px] sm:px-[25px] 
                        outline-none px-[15px] border-[1px] border-[#3a3a43] 
                        bg-transparent font-epilogue text-white text-[14px]
                        placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]
                    "
                    {...register(name)} 
                />
            ) : (
                <input
                    required
                    placeholder={placeholder}
                    type={inputType}
                    className="py-[15px] sm:px-[25px] 
                        outline-none px-[15px] border-[1px] border-[#3a3a43] 
                        bg-transparent font-epilogue text-white text-[14px]
                        placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]
                    "
                    {...register(name)} 
                />
            )}
        </label>
    </>
  )
}
