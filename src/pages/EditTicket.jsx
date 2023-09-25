import React from 'react'
import { useNavigate } from 'react-router-dom'
import {FiMoreHorizontal, FiChevronRight, FiUploadCloud} from 'react-icons/fi'
import {GoDownload} from 'react-icons/go'
import {IoAddSharp} from 'react-icons/io5'
import { Indicators } from '../components/TicketFilter'
import xsl from '../assets/icons/xsl.svg'
import zip from '../assets/icons/zip.svg'
import jpgsample from '../assets/jpgsample.jpg'
import pngsample from '../assets/pngsample.jpg'
import Texteditor from '../components/Texteditor'
export const EditTicket = () => {
  const navigate = useNavigate();
  const attamentfiles = [
    {title: 'Document Title', size: 'JPG, 32KB', img: jpgsample, frame: true},
    {title: 'Document Title', size: 'JPG, 72KB', img: pngsample, frame: true},
    {title: 'Document Title', size: 'XSL, 12KB', img: xsl, frame: false},
    {title: 'Document Title', size: 'ZIP, 74MB', img: zip, frame: false},
  ]
  return (
    <>
        <div className="flex items-center gap-x-1 text-sm font-medium ">
            <span className='bg-primary-100 px-1 rounded'><FiMoreHorizontal/></span>
            <span className='text-textColor-muted'><FiChevronRight/></span>
            <span onClick={() => navigate(-1)} className='cursor-pointer text-textColor-muted hover:text-primary-600'>Tickets</span>
            <span className='text-textColor-muted'><FiChevronRight/></span>
            <span className='text-textColor-base cursor-default'>Edit Ticket</span>
        </div>

        <div className='mt-3 flex items-center justify-between'>
        <p className='text-2xl font-semibold tracking-tighter'>Edit Ticket</p>
        <div className='flex gap-3'>
          <button onClick={() => navigate(-1)} className='h-10 px-4 rounded-md text-base font-medium border border-borderColor-secondary hover:bg-primary-100'>Cancel</button>
          <button onClick={() => navigate(-1)} className='h-10 px-4 rounded-md text-base font-medium text-base-white  bg-primary-500'>Save Changes</button>
        </div>
      </div>

      <div className='grid grid-cols-1 xl:grid-cols-2 gap-y-8 gap-x-16 mt-6 bg-surface-light-primary p-4 pt-8 border border-borderColor-secondary rounded-lg'>
        <div className='space-y-3'>
          <p className='text-sm uppercase font-semibold'>Ticket Heading</p>
          <input type="text" value='Ticket Title' placeholder='Add Heading' className='h-12 w-full px-4 text-base outline-none border border-borderColor-secondary focus:border-primary-500 rounded-lg bg-transparent' />
        </div>

        <div className='space-y-3'>
          <p className='text-sm uppercase font-semibold'>Organization</p>
          <select name="" id="" className='h-12 w-full px-4 text-base outline-none appearance-none border border-borderColor-secondary focus:border-primary-500 rounded-lg bg-transparent'>
            <option value="" disabled selected hidden>Select Organization</option>
            <option value="" selected>MDI Dev</option>
            <option value="">KFC</option>
            <option value="">Dell</option>
          </select>
        </div>

        <div className='space-y-3'>
          <p className='text-sm uppercase font-semibold'>Location</p>
          <select name="" id="" className='h-12 w-full px-4 text-base outline-none appearance-none border border-borderColor-secondary focus:border-primary-500 rounded-lg bg-transparent'>
            <option value="" disabled hidden>Select Location</option>
            <option value="" selected>Weill Cornell Medicine Primary Care - East 72nd St </option>
            <option value="">Weill Cornell Medicine Primary Care - North 73nd St </option>
            <option value="">Weill Cornell Medicine Primary Care - East 74nd St </option>
          </select>
        </div>

        <div className='space-y-3'>
          <p className='text-sm uppercase font-semibold'>Assets / Device</p>
          <select name="" id="" className='h-12 w-full px-4 text-base outline-none appearance-none border border-borderColor-secondary focus:border-primary-500 rounded-lg bg-transparent'>
            <option value="" disabled hidden>Select Device</option>
            <option value="" selected>Device_au</option>
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
            <option value="" disabled hidden>Select Reporter</option>
            <option value="" selected>Ronald Richards</option>
            <option value="">Darlene Robertson</option>
          </select>
        </div>
        
        <div className='space-y-3'>
          <p className='text-sm uppercase font-semibold'>Assignee</p>
          <select name="" id="" className='h-12 w-full px-4 text-base outline-none appearance-none border border-borderColor-secondary focus:border-primary-500 rounded-lg bg-transparent'>
            <option value="" disabled hidden>Select Assignee</option>
            <option value="">Ronald Richards</option>
            <option value="" selected>Darlene Robertson</option>
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

        <div className='col-span-2 space-y-3'>
          <p className='text-sm uppercase font-semibold'>Attachments:</p>
          <div className='flex flex-wrap gap-4'>
              {attamentfiles.map((item,key)=>(
                  <div key={key} className='relative h-[184px] w-[176px] flex justify-center bg-surface-light-secondary rounded-lg overflow-hidden'>
                    <img src={item.img} className={`${item.frame ? 'w-full h-full': 'h-[65px] w-[52px] absolute top-10'} `} alt="" />
                    <div className='w-[166px] h-[40px] absolute bottom-[5px] flex items-center justify-between px-2 bg-surface-light-primary  rounded-md'>
                      <div className=''>
                        <p className='text-xs text-info-500 font-semibold'>{item.title}</p>
                        <p className='text-[10px] text-textColor-muted font-medium'>{item.size}</p>
                      </div>
                      <button className='text-sm p-1 rounded-full text-textColor-muted hover:text-primary-600 hover:bg-primary-100 '>
                      <GoDownload/>
                      </button>
                    </div>
                  </div>
              )) }
                  <label htmlFor="dropzone">
                    <input type="file" id='dropzone' className='hidden' />
                    <div className='p-2 bg-[#f5faff] h-[184px] w-[176px] rounded-2xl cursor-pointer'>
                      <div className='h-full flex flex-col justify-center items-center gap-3 border border-dashed border-borderColor-secondary rounded-xl'>
                            <span className='text-xl p-1 rounded-full text-primary-500 bg-primary-100'><IoAddSharp /></span>
                            <span className='text-xs font-medium text-primary-500'>Add New File</span>
                      </div>
                    </div>
                  </label>
          </div>
        </div>

        <div className='space-y-3'>
          <p className='text-sm uppercase font-semibold'>Notes</p>
          <Texteditor/>
        </div>

        <div className='space-y-3'>
          <p className='text-sm uppercase font-semibold'>Description</p>
          <Texteditor/>
        </div>
        
        <div className='col-span-2 flex justify-end gap-3'>
          <button onClick={() => navigate(-1)} className='h-10 px-4 rounded-md text-base font-medium border border-borderColor-secondary hover:bg-primary-100'>Cancel</button>
          <button onClick={() => navigate(-1)} className='h-10 px-4 rounded-md text-base font-medium text-base-white  bg-primary-500'>Save Changes</button>
        </div>
      </div>
    </>
  )
}
