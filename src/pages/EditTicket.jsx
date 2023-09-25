import React from 'react'
import { useNavigate } from 'react-router-dom'
import {FiMoreHorizontal, FiChevronRight, FiUploadCloud} from 'react-icons/fi'

export const EditTicket = () => {
  const navigate = useNavigate();

  return (
    <>
        <div className="flex items-center gap-x-1 text-sm font-medium ">
            <span className='bg-primary-100 px-1 rounded'><FiMoreHorizontal/></span>
            <span className='text-textColor-muted'><FiChevronRight/></span>
            <span onClick={() => navigate(-1)} className='cursor-pointer text-textColor-muted hover:text-primary-600'>Tickets</span>
            <span className='text-textColor-muted'><FiChevronRight/></span>
            <span className='text-textColor-base cursor-default'>Add Ticket</span>
        </div>
    </>
  )
}
