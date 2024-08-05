// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

const Switcher11 = () => {
    const [isChecked, setIsChecked] = useState(false)

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked)
    }

    return (
        <div className={"flex items-center justify-center"}>
            <label className='shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-md bg-white p-1'>
                <input
                    type='checkbox'
                    className='sr-only'
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                <span
                    className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
                        !isChecked ? 'text-primary bg-black text-white' : 'text-body-color'
                    }`}>
                      Unfinished
                    </span>
                <span
                    className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
                        isChecked ? 'text-primary bg-black text-white' : 'text-body-color'
                    }`}>
                  Finished
                </span>

            </label>
        </div>
    )
}

export default Switcher11
