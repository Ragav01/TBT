import React from 'react'
import {IoSettingsOutline, IoNotificationsOutline} from 'react-icons/io5'
import search from '../assets/icons/search.svg'
import avatar from '../assets/avatar-image.jpg'
export const Appbar = () => {
  return (
    <div className='h-16 px-4 sticky top-0 z-30 bg-white flex items-center justify-between'>
        <div className='relative'>
            <img src={search} className='absolute top-2.5 left-3' alt="" />
            <input type="text" placeholder='Search menus, Tickets, Etc' className='outline-none border border-borderColor-secondary rounded-md pl-10 pr-4 h-10 w-[532px]' />
            <div className='absolute top-1.5 right-3 font-medium text-textColor-muted flex gap-x-1 bg-surface-light-secondary p-0.5 px-1.5 rounded'>
                <span class="material-symbols-outlined"> keyboard_command_key </span>
                <p>P</p>
            </div>
        </div>
        <div className='flex gap-x-4'>
            <button className='h-10 px-4 flex items-center gap-x-2 bg-primary-500 hover:bg-primary-600 text-base font-medium text-base-white rounded-md'>
                <span class="material-symbols-outlined"> add </span>
                Add New Ticket
            </button>
            <button className='relative h-10 w-10 text-textColor-base flex justify-center items-center rounded-md hover:bg-primary-100 hover:shadow-lg'>
                <IoNotificationsOutline size={24}/>
                <span className='absolute top-2 right-2 h-2.5 w-2.5 rounded-full bg-danger-600'></span>
            </button>
            <button className='h-10 w-10 text-textColor-base flex justify-center items-center rounded-md hover:bg-primary-100 hover:shadow-lg'>
                <IoSettingsOutline size={24}/>
            </button>
            <button className='cursor-pointer h-10 w-10 rounded-full'>
                <img src={avatar} alt="" />
            </button>
        </div>
    </div>
  )
}
