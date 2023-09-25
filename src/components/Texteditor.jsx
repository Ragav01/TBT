import React from 'react'
import {AiOutlineBold, AiOutlineUnderline, AiOutlineStrikethrough, AiOutlineUnorderedList, AiOutlineOrderedList, AiOutlineAlignRight, AiOutlineLink,} from 'react-icons/ai'
import {BsTypeItalic, BsCodeSlash} from 'react-icons/bs'
import {IoVideocamOutline} from 'react-icons/io5'
import {GoImage} from 'react-icons/go'
import {HiOutlineChevronDown} from 'react-icons/hi'

const Texteditor = () => {
    const textStyle = [
        {icon: <AiOutlineBold/>, active: true},
        {icon: <AiOutlineUnderline/>},
        {icon: <BsTypeItalic/>},
        {icon: <AiOutlineStrikethrough/>},
        {icon: <BsCodeSlash/>},
    ]
    const alignStyle = [
        {icon: <AiOutlineUnorderedList/>},
        {icon: <AiOutlineOrderedList/>},
        {icon: <AiOutlineAlignRight/>},
    ]
    const attachment = [
        {icon: <AiOutlineLink/>},
        {icon: <GoImage/>},
        {icon: <IoVideocamOutline/>},
    ]
  return (
    <div className='w-full h-[280px] border border-borderColor-secondary rounded-xl overflow-hidden'>
        {/* Editbar */}
        <div className='w-full flex gap-2 p-1 bg-surface-light-secondary'>
            {/* TextStyle */}
            <div className='inline-flex p-1 rounded-lg bg-surface-light-primary'>
                {
                    textStyle.map((item,key)=>(
                         <button key={key} className='h-8 w-8 flex items-center justify-center text-textColor-muted hover:text-textColor-base hover:bg-surface-light-tertiary rounded-md'>
                            <span className='text-xl'>{item.icon}</span>
                        </button>
                    ))
                }
            </div>

            {/* ColorStyle */}
            <div className='inline-flex items-center gap-x-2 p-1 rounded-lg bg-surface-light-primary'>
                <div className='h-8 w-8 bg-black rounded-md'></div>
                <HiOutlineChevronDown/>
            </div>
            {/* AlignStyle */}
            <div className='inline-flex p-1 rounded-lg bg-surface-light-primary'>
                {
                    alignStyle.map((item,key)=>(
                         <button key={key} className='h-8 w-8 flex items-center justify-center text-textColor-muted hover:text-textColor-base hover:bg-surface-light-tertiary rounded-md'>
                            <span className='text-xl'>{item.icon}</span>
                        </button>
                    ))
                }
            </div>

            {/* Attachment */}
            <div className='inline-flex p-1 rounded-lg bg-surface-light-primary'>
                {
                    attachment.map((item,key)=>(
                         <button key={key} className='h-8 w-8 flex items-center justify-center text-textColor-muted hover:text-textColor-base hover:bg-surface-light-tertiary rounded-md'>
                            <span className='text-xl'>{item.icon}</span>
                        </button>
                    ))
                }
            </div>
        </div>

        <textarea name="" id="" className='w-full h-full outline-none p-5' placeholder='Type @ to mention and notify someone'></textarea>
    </div>
  )
}

export default Texteditor