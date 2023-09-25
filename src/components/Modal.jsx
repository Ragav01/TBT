import React , { useState } from 'react'
import {IoCloseSharp} from 'react-icons/io5'
import {AiOutlineEye} from 'react-icons/ai'


export const Modal = (props) => {
    const [modal,setModal]= useState(false)

  return (
    <>
        <button onClick={()=> setModal(!modal)} className='mt-3 text-xl text-textColor-muted hover:text-textColor-base hover:bg-primary-100 p-1 rounded-md'>
         <AiOutlineEye/>
        </button>
        {modal && (
            <div className='bg-slate-900/80 backdrop-blur-sm fixed inset-0 h-full w-full z-[9999]'>
            <div className='relative max-w-3xl mx-auto mt-16 bg-surface-light-primary rounded-xl overflow-hidden'>
                <button onClick={()=> setModal(!modal)} className='absolute right-3 top-5 h-10 w-10 text-textColor-muted hover:text-textColor-base hover:bg-surface-light-secondary flex items-center justify-center rounded-lg'><IoCloseSharp size={24}/></button>
                {props.content} 
            </div>
        </div>
        )}
    </>
  )
}
