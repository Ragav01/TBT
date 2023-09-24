import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {FiMoreHorizontal, FiChevronRight, FiUploadCloud} from 'react-icons/fi'
import {AiOutlineClose} from 'react-icons/ai'
import { Indicators } from '../components/TicketFilter'
import Texteditor from '../components/Texteditor'
import PDF from '../assets/icons/pdf.svg'
import DOCS from '../assets/icons/docs.svg'
import XSL from '../assets/icons/xsl.svg'

const AddCyberTicket = () => {
  const [ticketType,setTicketType] = useState('cyber');
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

      <div className='mt-3 flex items-center justify-between'>
        <p className='text-2xl font-semibold tracking-tighter'>Create New Ticket</p>
        <div className='flex gap-3'>
          <button className='h-10 px-4 rounded-md text-base font-medium border border-borderColor-secondary hover:bg-primary-100'>Save Draft</button>
          <button className='h-10 px-4 rounded-md text-base font-medium text-base-white  bg-primary-500'>Puplish Ticket</button>
        </div>
      </div>

      <div className='grid grid-cols-1 xl:grid-cols-2 gap-y-8 gap-x-16 mt-6 bg-surface-light-primary p-4 rounded-lg'>
        <div className='space-y-3'>
          <p className='text-sm uppercase font-semibold'>Select Ticket Type</p>
          <div className='flex gap-x-5'>
            <label htmlFor="helpdesk" className={`${ticketType === 'helpdesk' && 'bg-primary-100 border-primary-600'} h-12 w-full flex items-center gap-x-4 px-5 border border-borderColor-secondary cursor-pointer duration-100 rounded-lg`}>
              <input type="radio" name='type' value='helpdesk' id='helpdesk' checked={ticketType === 'helpdesk'} onChange={(e)=>{setTicketType(e.target.value)}}/>
              <p className='text-base font-medium'>Help Desk</p>
            </label>
            <label htmlFor="cyber" className={`${ticketType === 'cyber' && 'bg-primary-100 border-primary-600'} h-12 w-full flex items-center gap-x-4 px-5 border border-borderColor-secondary cursor-pointer duration-100 rounded-lg`}>
              <input type="radio" name='type' value='cyber'  id='cyber' checked={ticketType === 'cyber'} onChange={(e)=>{setTicketType(e.target.value)}} />
              <p className='text-base font-medium'>Cyber Security</p>
            </label>
          </div>
        </div>

        {ticketType === 'helpdesk' ? <HelpDeskFrom/> : <CyberFrom/>}
        
        
      </div>
    </>
  )
}

const HelpDeskFrom = () => {
  const uploadDoc = [
    {title: 'Document title', size: 'XSL, 35KB', img: XSL, uploding: false},
    {title: 'Document title', size: 'PDF, 578KP', img: PDF, uploding: false},
    {title: 'Document title', size: 'JPG 578KP', img: DOCS, uploding: true},
  ]
  return (
    <>
     <div className='space-y-3'>
        <p className='text-sm uppercase font-semibold'>Ticket Heading</p>
        <input type="text" placeholder='Add Heading' className='h-12 w-full px-4 text-base outline-none border border-borderColor-secondary focus:border-primary-500 rounded-lg bg-transparent' />
      </div>

      <div className='space-y-3'>
        <p className='text-sm uppercase font-semibold'>Phone Number</p>
        <input type="text" placeholder='Add Heading' className='h-12 w-full px-4 text-base outline-none border border-borderColor-secondary focus:border-primary-500 rounded-lg bg-transparent' />
      </div>

      <div className='space-y-3'>
        <p className='text-sm uppercase font-semibold'>Application</p>
        <select name="" id="" className='h-12 w-full px-4 text-base outline-none appearance-none border border-borderColor-secondary focus:border-primary-500 rounded-lg bg-transparent'>
          <option value="" disabled selected hidden>Select Application</option>
          <option value="">Device_au</option>
          <option value="">Device_au</option>
          <option value="">Device_au</option>
        </select>
      </div>

      <div className='space-y-6'>
        <p className='text-sm uppercase font-semibold'>Select Priority</p>
        <div className="flex gap-x-16">
          <label htmlFor="Low" className='flex items-center gap-x-2 cursor-pointer'>
            <input type="radio" name='priority' value='Low' id='Low'/>
            <p className='font-semibold'>Low</p>
          </label>
          <label htmlFor="Medium" className='flex items-center gap-x-2 cursor-pointer'>
            <input type="radio" name='priority' value='Medium' id='Medium'/>
            <p className='font-semibold'>Medium</p>
          </label>
          <label htmlFor="High" className='flex items-center gap-x-2 cursor-pointer'>
            <input type="radio" name='priority' checked value='High' id='High'/>
            <p className='font-semibold'>High</p>
          </label>
          <label htmlFor="Critical" className='flex items-center gap-x-2 cursor-pointer'>
            <input type="radio" name='priority' value='Critical' id='Critical'/>
            <p className='font-semibold'>Critical</p>
          </label>
        </div>
      </div>

      <div className='space-y-3'>
        <p className='text-sm uppercase font-semibold'>Agent</p>
        <select name="" id="" className='h-12 w-full px-4 text-base outline-none appearance-none border border-borderColor-secondary focus:border-primary-500 rounded-lg bg-transparent'>
          <option value="" disabled selected hidden>Select Assignee</option>
          <option value="">Ronald Richards</option>
          <option value="">Darlene Robertson</option>
        </select>
      </div>

      <div>
        <p className='text-sm uppercase font-semibold'>upload files</p>
        <label htmlFor="dropzone">
          <input type="file" id='dropzone' className='hidden' />
          <div className='p-2 mt-3 bg-[#f5faff] w-full h-[220px] rounded-2xl'>
            <div className='relative h-full flex flex-col justify-center items-center border border-dashed border-borderColor-secondary rounded-xl'>
                <FiUploadCloud className='text-4xl text-primary-500'/>
                <p>Drag and drop files here or</p>
                <div className='my-6 space-x-3'>
                  <button className='h-8 px-3 rounded-md text-sm border border-borderColor-primary'>Recent Upload</button>
                  <button className='h-8 px-3 rounded-md text-sm text-base-white  bg-primary-500'>Browse</button>
                </div>
                <p className='text-xs text-center text-textColor-muted'>Accepted file type: Zip, PDF, DOC, JPJ , PNG</p>
                <p className='text-xs text-center text-textColor-muted'>Max file size 100MB</p>
            </div>
          </div>
        </label>
      </div>
      
      <div>
        <div className='space-y-3 mt-8'>
          {uploadDoc.map((item,key) =>(
            <div key={key} className="flex justify-between items-center gap-5 border border-borderColor-secondary p-2 pr-5 rounded-lg">
              <div className='flex items-center w-full gap-3'>
                <img src={item.img} alt="" className='h-10 w-10'/>
                <div className='space-y-1 w-full'>
                  <p className='font-semibold text-info-500'>{item.title}</p>
                  {
                    item.uploding 
                    ? 
                    <div className='w-full h-2 bg-surface-light-secondary rounded-full overflow-hidden'>
                      <span className='h-full w-1/4 bg-primary-500 block'></span>
                    </div>
                    : 
                    <p className='text-sm text-textColor-muted'>{item.size}</p>
                  }
                </div>
              </div>
              <span><AiOutlineClose/></span>
            </div>
          ))}
        </div>
      </div>

      <div className='col-span-2 space-y-3'>
        <p className='text-sm uppercase font-semibold'>Description</p>
        <Texteditor/>
      </div>
      
      <div className='col-span-2 flex justify-end gap-3'>
        <button className='h-10 px-4 rounded-md text-base font-medium border border-borderColor-secondary hover:bg-primary-100'>Save Draft</button>
        <button className='h-10 px-4 rounded-md text-base font-medium text-base-white  bg-primary-500'>Puplish Ticket</button>
      </div>
    </>
  )
}

const CyberFrom = () => {
  return (
    <>
        <div className='space-y-3'>
          <p className='text-sm uppercase font-semibold'>Ticket Heading</p>
          <input type="text" placeholder='Add Heading' className='h-12 w-full px-4 text-base outline-none border border-borderColor-secondary focus:border-primary-500 rounded-lg bg-transparent' />
        </div>

        <div className='space-y-3'>
          <p className='text-sm uppercase font-semibold'>Organization</p>
          <select name="" id="" className='h-12 w-full px-4 text-base outline-none appearance-none border border-borderColor-secondary focus:border-primary-500 rounded-lg bg-transparent'>
            <option value="" disabled selected hidden>Select Organization</option>
            <option value="">MDI Dev</option>
            <option value="">KFC</option>
            <option value="">Dell</option>
          </select>
        </div>

        <div className='space-y-3'>
          <p className='text-sm uppercase font-semibold'>Location</p>
          <select name="" id="" className='h-12 w-full px-4 text-base outline-none appearance-none border border-borderColor-secondary focus:border-primary-500 rounded-lg bg-transparent'>
            <option value="" disabled selected hidden>Select Location</option>
            <option value="">Weill Cornell Medicine Primary Care - East 72nd St </option>
            <option value="">Weill Cornell Medicine Primary Care - North 73nd St </option>
            <option value="">Weill Cornell Medicine Primary Care - East 74nd St </option>
          </select>
        </div>

        <div className='space-y-3'>
          <p className='text-sm uppercase font-semibold'>Assets / Device</p>
          <select name="" id="" className='h-12 w-full px-4 text-base outline-none appearance-none border border-borderColor-secondary focus:border-primary-500 rounded-lg bg-transparent'>
            <option value="" disabled selected hidden>Select Device</option>
            <option value="">Device_au</option>
            <option value="">Device_au</option>
            <option value="">Device_au</option>
          </select>
        </div>
        
        <div className='space-y-3'>
          <p className='text-sm uppercase font-semibold'>Indicators</p>
          <div className='border border-borderColor-secondary h-12 flex items-center rounded-lg'>
            <Indicators value={['192.168.177.54','191.168.173.5']} placeholder='Add Indicators'/>
          </div>
        </div>

        <div className='space-y-3'>
          <p className='text-sm uppercase font-semibold'>Incident Type</p>
          <div className='border border-borderColor-secondary h-12 flex items-center rounded-lg'>
            <Indicators value={['Malicious Attack','Brute Force']} placeholder='Add Incidents'/>
          </div>
        </div>

        <div className='space-y-3'>
          <p className='text-sm uppercase font-semibold'>Reporter</p>
          <select name="" id="" className='h-12 w-full px-4 text-base outline-none appearance-none border border-borderColor-secondary focus:border-primary-500 rounded-lg bg-transparent'>
            <option value="" disabled selected hidden>Select Reporter</option>
            <option value="">Ronald Richards</option>
            <option value="">Darlene Robertson</option>
          </select>
        </div>

        <div className='space-y-6'>
          <p className='text-sm uppercase font-semibold'>Select Priority</p>
          <div className="flex gap-x-16">
            <label htmlFor="Low" className='flex items-center gap-x-2 cursor-pointer'>
              <input type="radio" name='priority' value='Low' id='Low'/>
              <p className='font-semibold'>Low</p>
            </label>
            <label htmlFor="Medium" className='flex items-center gap-x-2 cursor-pointer'>
              <input type="radio" name='priority' value='Medium' id='Medium'/>
              <p className='font-semibold'>Medium</p>
            </label>
            <label htmlFor="High" className='flex items-center gap-x-2 cursor-pointer'>
              <input type="radio" name='priority' checked value='High' id='High'/>
              <p className='font-semibold'>High</p>
            </label>
            <label htmlFor="Critical" className='flex items-center gap-x-2 cursor-pointer'>
              <input type="radio" name='priority' value='Critical' id='Critical'/>
              <p className='font-semibold'>Critical</p>
            </label>
          </div>
        </div>

        <div className='space-y-3'>
          <p className='text-sm uppercase font-semibold'>Assignee</p>
          <select name="" id="" className='h-12 w-full px-4 text-base outline-none appearance-none border border-borderColor-secondary focus:border-primary-500 rounded-lg bg-transparent'>
            <option value="" disabled selected hidden>Select Assignee</option>
            <option value="">Ronald Richards</option>
            <option value="">Darlene Robertson</option>
          </select>
        </div>

        <div>
          <p className='text-sm uppercase font-semibold'>upload files</p>
          <label htmlFor="dropzone">
            <input type="file" id='dropzone' className='hidden' />
            <div className='p-2 mt-3 bg-[#f5faff] w-full h-[280px] rounded-2xl'>
              <div className='relative h-full flex flex-col justify-center items-center border border-dashed border-borderColor-secondary rounded-xl'>
                  <FiUploadCloud className='text-4xl text-primary-500'/>
                  <p>Drag and drop files here or</p>
                  <div className='my-6 space-x-3'>
                    <button className='h-8 px-3 rounded-md text-sm border border-borderColor-primary'>Recent Upload</button>
                    <button className='h-8 px-3 rounded-md text-sm text-base-white  bg-primary-500'>Browse</button>
                  </div>
                  <p className='text-xs text-center text-textColor-muted'>Accepted file type: Zip, PDF, DOC, JPJ , PNG</p>
                  <p className='text-xs text-center text-textColor-muted'>Max file size 100MB</p>
              </div>
            </div>
          </label>
        </div>

        <div className='space-y-3'>
          <p className='text-sm uppercase font-semibold'>Notes</p>
          <Texteditor/>
        </div>

        <div className='col-span-2 space-y-3'>
          <p className='text-sm uppercase font-semibold'>Description</p>
          <Texteditor/>
        </div>

        <div className='col-span-2 flex justify-end gap-3'>
          <button className='h-10 px-4 rounded-md text-base font-medium border border-borderColor-secondary hover:bg-primary-100'>Save Draft</button>
          <button className='h-10 px-4 rounded-md text-base font-medium text-base-white  bg-primary-500'>Puplish Ticket</button>
        </div>
    </>
  )
}


export default AddCyberTicket
