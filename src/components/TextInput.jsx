import React from 'react'
import { useAppContext } from '../layout/Layout'

const TextInput = ({ texarea, label, type, name, placeholder, value, onChange, required }) => {
    const { toggleDarkMode } = useAppContext();
    return (
        <div className='flex flex-col flex-1 mx-4 my-3'>
            {texarea ? (
                <>
                    <label className='text-lg font-semibold ' htmlFor={name}>{label}*</label>
                    <textarea name={name} placeholder={placeholder}
                        value={value}
                        onChange={onChange} className={`${toggleDarkMode ? 'bg-[#111b21]' : 'bg-white'}  rounded-md py-3 px-4 h-32 mt-2 focus:outline-none`}></textarea>
                </>
            ) : (
                <>
                    <label className='text-lg font-semibold' htmlFor={name}>{label + (required ? '*' : '')}</label>
                    <input
                        type={type ? type : 'text'}
                        name={name}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        className={`${toggleDarkMode ? 'bg-[#111b21]' : 'bg-white'} py-2 px-4 w-full mt-2 border-blue-600 rounded-md focus:outline-none`}
                    />
                </>
            )}
        </div>
    )
}

export default TextInput