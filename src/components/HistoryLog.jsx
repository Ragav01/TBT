import React, { useState } from 'react'
import dateFormat from 'dateformat';  
import {IoCloseSharp} from 'react-icons/io5'
import historyLog from '../data/historyLog'

export const HistoryLog = () => {
  const [drawer,setDrawer]= useState()
  
  function getFirtsLetters(str){
    const firstLetter = str
    .split(' ')
    .map(word => word.charAt(0))
    .join('');
    return firstLetter
  }
  
  return (
    <>
        <button onClick={()=> setDrawer(!drawer)} className='h-10 rounded-md px-3 flex items-center gap-x-2 text-sm font-semibold text-base-black border border-borderColor-secondary hover:bg-primary-100'>
            Tickets History
        </button>
        {
          drawer && 
            <div className='bg-slate-900/80 backdrop-blur-sm fixed inset-0 h-full w-full z-[9999]'>
                <div className='fixed -top-10 right-5 w-[720px] h-[95%] mt-16 bg-surface-light-primary rounded-xl overflow-auto'>
                    <div className='sticky top-0 px-5 py-3 bg-surface-light-secondary flex justify-between items-center'>
                        <h2 className='text-2xl font-semibold tracking-tight'>Ticket History </h2>
                        <button onClick={()=> setDrawer(!drawer)} className='h-10 w-10 text-textColor-muted hover:text-textColor-base hover:bg-surface-light-secondary flex items-center justify-center rounded-lg'><IoCloseSharp size={24}/></button>
                    </div>

                    <div className='mt-5 px-5 py-3'>
                            {historyLog.map((history, key)=>(
                                <div key={key} >
                                <div className='flex gap-3'>
                                    <div className='w-[84px]'>
                                        <p> {dateFormat(history.createdAt, "mmmm")} </p>
                                        <p className='text-2xl font-semibold'> {dateFormat(history.createdAt, "dd")} </p>
                                    </div>
                                    <div className='w-full space-y-2'>
                                        <span className='block h-0.5 mt-3 my-5 w-full bg-surface-light-quaternary'></span>
                                        {
                                            history.data.map((data, key)=>(
                                                <div key={key} className='flex gap-4 p-3 rounded-lg cursor-pointer hover:bg-surface-light-secondary'>
                                                    <p className='text-xs whitespace-nowrap font-semibold text-textColor-muted pt-3'>{data.time}</p>
                                                    <div className={`${data.color} flex justify-center items-center h-10 min-w-[40px] text-base-white uppercase rounded-full`}>
                                                        {getFirtsLetters(data.username)}
                                                    </div>
                                                    <div className='space-y-2'>
                                                        {
                                                            data.type === 'comment' ?
                                                            <>
                                                                <p className='mt-2.5 text-sm whitespace-nowrap font-medium text-textColor-muted'>
                                                                    Comments
                                                                </p>
                                                                <p className='text-textColor-muted leading-7'>
                                                                    <span className='text-info-500 tracking-tight'> {data.username} </span> 
                                                                    {data.action ==='add' ? 'Added a comment: ': data.action ==='edit' ? 'Edited a comment' : data.action ==='delete' ? 'Deleted a comment':''}
                                                                    <span className='block text-textColor-base tracking-tight'> "{data.text}" </span>
                                                                </p>
                                                            </>

                                                            :data.type === 'title' ?
                                                            <>
                                                                <p className='mt-2.5 text-sm whitespace-nowrap font-medium text-textColor-muted'>
                                                                    Ticket Title Changes
                                                                </p>
                                                                <p className='text-textColor-muted leading-7'>
                                                                    <span className='text-info-500 tracking-tight'> {data.username} </span> 
                                                                    Changed the ticket title from 
                                                                    <span className='text-textColor-base tracking-tight'> {data.prestate} </span>
                                                                    to
                                                                    <span className='text-textColor-base tracking-tight'> {data.newstate} </span>
                                                                </p>
                                                            </>
                                                        
                                                            : data.type === 'organization' ?
                                                            <>
                                                                <p className='mt-2.5 text-sm whitespace-nowrap font-medium text-textColor-muted'>
                                                                    Organization Changes
                                                                </p>
                                                                <p className='text-textColor-muted leading-7'>
                                                                    <span className='text-info-500 tracking-tight'> {data.username} </span> 
                                                                    Changed the organization from 
                                                                    <span className='text-textColor-base tracking-tight'> {data.prestate} </span>
                                                                    to
                                                                    <span className='text-textColor-base tracking-tight'> {data.newstate} </span>
                                                                </p>
                                                            </>
                                                            : data.type === 'device' ?
                                                            <>
                                                                <p className='mt-2.5 text-sm whitespace-nowrap font-medium text-textColor-muted'>
                                                                    Device/Assets Changes
                                                                </p>
                                                                <p className='text-textColor-muted leading-7'>
                                                                    <span className='text-info-500 tracking-tight'> {data.username} </span> 
                                                                    Updated the device details for this ticket. The previous device was
                                                                    <span className='text-textColor-base tracking-tight'> {data.prestate} </span>
                                                                    and the new device is
                                                                    <span className='text-textColor-base tracking-tight'> {data.newstate} </span>
                                                                </p>
                                                            </>
                                                            : data.type === 'indicators' ?
                                                            <>
                                                                <p className='mt-2.5 text-sm whitespace-nowrap font-medium text-textColor-muted'>
                                                                    {data.action === 'add' ? 'Added':data.action === 'remove' ? 'Removed':null} Indicators
                                                                </p>
                                                                <p className='text-textColor-muted leading-7'>
                                                                    <span className='text-info-500 tracking-tight'> {data.username} </span> 
                                                                    {data.action === 'add' ? 'Added':data.action === 'remove' ? 'Removed':null}
                                                                    <span className='text-textColor-base tracking-tight'> {data.number} </span>
                                                                    {data.number > 1 ?'Indicators':'Indicator' } to the ticket.
                                                                </p>
                                                            </>
                                                            : data.type === 'assignee' ?
                                                            <>
                                                                <p className='mt-2.5 text-sm whitespace-nowrap font-medium text-textColor-muted'>
                                                                    Assignee Chenge
                                                                </p>
                                                                <p className='text-textColor-muted leading-7'>
                                                                    <span className='text-info-500 tracking-tight'> {data.username} </span> 
                                                                    Changed the assignee from
                                                                    <span className='text-textColor-base tracking-tight'> {data.prestate} </span>
                                                                    to
                                                                    <span className='text-textColor-base tracking-tight'> {data.newstate} </span>
                                                                </p>
                                                            </>
                                                            : data.type === 'priority' ?
                                                            <>
                                                                <p className='mt-2.5 text-sm whitespace-nowrap font-medium text-textColor-muted'>
                                                                Priority Chenge
                                                                </p>
                                                                <p className='text-textColor-muted leading-7'>
                                                                    <span className='text-info-500 tracking-tight'> {data.username} </span> 
                                                                    Changed the priority from
                                                                    <span className='text-textColor-base tracking-tight'> {data.prestate} </span>
                                                                    to
                                                                    <span className='text-textColor-base tracking-tight'> {data.newstate} </span>
                                                                </p>
                                                            </>
                                                            : data.type === 'file' ?
                                                            <>
                                                                <p className='mt-2.5 text-sm whitespace-nowrap font-medium text-textColor-muted'>
                                                                {data.action === 'add' ? 'Upload Attachment':data.action === 'remove' ? 'Removed File':null} 
                                                                </p>
                                                                <p className='text-textColor-muted leading-7'>
                                                                    <span className='text-info-500 tracking-tight'> {data.username} </span> 
                                                                    Added a new file
                                                                    <span className='text-textColor-base tracking-tight'> {data.filename} </span>
                                                                </p>
                                                            </>
                                                            : null
                                                        }
                                                        
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                
                                </div>

                                </div>
                            ))}
                    </div>
                </div>
            </div>
        }
    </>
  )
}
