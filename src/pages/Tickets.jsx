import React from 'react'
import { useState} from 'react'
import exl from '../assets/exl.svg'
import { CyberFilter, HelpDeskFilter } from '../components/TicketFilter'
import { Table } from '../components/TicketTable'
import { NavLink } from 'react-router-dom'
import {IoIosArrowDown} from 'react-icons/io'

const Tickets = () => {
  const [ticketType,setTicketType] = useState('Cyber Security');
  const [open, setOpen] = useState(false);

  return (
    <>
     <p className='text-2xl font-semibold tracking-tighter'>All Tickets (1,614)</p>
     <div className='flex justify-between mt-4'>
        {/* Filters */}
        <div className='flex flex-wrap max-w-7/12 gap-2'> 
        <div className='relative'>
          <button onClick={() => setOpen(!open)} className={`${open && 'bg-primary-100'} h-10 w-[180px] flex items-center justify-between gap-x-3 px-3 bg-surface-light-primary hover:bg-primary-100 duration-200 outline-none rounded-md`}>
            <p className='text-sm font-medium'> {ticketType} </p>
            <IoIosArrowDown className={`${open && 'rotate-180'} text-textColor-muted duration-200`}/>
          </button>
          {
            open &&
            <ul className='absolute w-full z-10 mt-1 rounded-md overflow-hidden border-2 border-surface-light-primary bg-surface-light-primary shadow-lg shadow-primary-100 duration-300'>
              <li>
                  <label  htmlFor="cyber" className='flex items-center gap-x-3 pl-2.5 h-10 cursor-pointer hover:bg-primary-100'>
                      <input type="radio" name='type' id="cyber" value='Cyber Security' checked={ticketType === 'Cyber Security'} onChange={(e)=>{setTicketType(e.target.value)}}/>
                      <p className='text-sm font-medium'>Cyber Security</p>
                  </label>
                  <label  htmlFor="helpDesk" className='flex items-center gap-x-3 pl-2.5 h-10 cursor-pointer hover:bg-primary-100'>
                      <input type="radio" name='type' id="helpDesk" value='Help Desk'  checked={ticketType === 'Help Desk'}  onChange={(e)=>{setTicketType(e.target.value)}}/>
                      <p className='text-sm font-medium'>Help Desk</p>
                  </label>
              </li>
            </ul>
          }
         </div>
          {
            ticketType === 'Cyber Security' 
            ?<CyberFilter/>
            :<HelpDeskFilter/>
          }
        </div>
        {/* CTA */}
        <div className='flex justify-end w-5/12 gap-x-3'>
            <button className='h-10 rounded-md px-3 flex items-center gap-x-2 text-sm font-semibold text-base-black border border-borderColor-secondary hover:bg-primary-100'>
                <img src={exl} alt="" />
                Export Tickets
            </button>
            <NavLink to={'addticket'} className='h-10 rounded-md px-3 flex items-center gap-x-1 text-sm text-base-white bg-secondary-500 hover:bg-secondary-600'>
                <span class="material-symbols-outlined"> add </span>
                Add New Tickets
            </NavLink>
        </div>
     </div>
     <Table ticket={ticketType}/>
    </>
  )
}

export default Tickets