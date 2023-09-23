import React from 'react'
import exl from '../assets/exl.svg'
import { TicketFilter } from '../components/TicketFilter'
import { Table } from '../components/TicketTable'
import { NavLink } from 'react-router-dom'

const Tickets = () => {
  return (
    <>
     <p className='Text-xl font-semibold'>All Tickets (1,614)</p>
     <div className='flex justify-between mt-4'>
        {/* Filters */}
        <div className='flex flex-wrap max-w-7/12 gap-2'> 
            <TicketFilter/> 
        </div>
        {/* CTA */}
        <div className='flex justify-end w-5/12 gap-x-3'>
            <button className='h-10 rounded-md px-3 flex items-center gap-x-2 text-sm font-semibold text-base-black border border-borderColor-secondary hover:bg-primary-100'>
                <img src={exl} alt="" />
                Export Tickets
            </button>
            <NavLink to={'addcyberticket'} className='h-10 rounded-md px-3 flex items-center gap-x-1 text-sm text-base-white bg-secondary-500 hover:bg-secondary-600'>
                <span class="material-symbols-outlined"> add </span>
                Add New Tickets
            </NavLink>
        </div>
     </div>
     <Table/>
    </>
  )
}

export default Tickets