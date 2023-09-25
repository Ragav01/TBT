import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {FiMoreHorizontal, FiChevronRight} from 'react-icons/fi'
import {GoDownload} from 'react-icons/go'
import {BiEditAlt} from 'react-icons/bi'
import {BsSortDownAlt} from 'react-icons/bs'
import pdf from '../assets/icons/pdf.svg'
import docs from '../assets/icons/docs.svg'
import xsl from '../assets/icons/xsl.svg'
import zip from '../assets/icons/zip.svg'
import jpgsample from '../assets/jpgsample.jpg'
import pngsample from '../assets/pngsample.jpg'
import avatar from '../assets/avatar-image.jpg'
import Texteditor from '../components/Texteditor'

export const ViewTicket = () => {
  const navigate = useNavigate();
  const [internalComment,setInternalComment] = useState(false)
  const attamentfiles = [
    {title: 'Document Title', size: 'JPG, 32KB', img: jpgsample, frame: true},
    {title: 'Document Title', size: 'JPG, 72KB', img: pngsample, frame: true},
    {title: 'Document Title', size: 'XSL, 12KB', img: xsl, frame: false},
    {title: 'Document Title', size: 'DOCS, 18KB', img: docs, frame: false},
    {title: 'Document Title', size: 'PDF, 58KB', img: pdf, frame: false},
    {title: 'Document Title', size: 'ZIP, 74MB', img: zip, frame: false},
  ]
  return (
    <>
      <div className='flex justify-between items-start'>
        <div className="flex items-center gap-x-1 text-sm font-medium ">
          <span className='bg-primary-100 px-1 rounded'><FiMoreHorizontal/></span>
          <span className='text-textColor-muted'><FiChevronRight/></span>
          <span onClick={() => navigate(-1)} className='cursor-pointer text-textColor-muted hover:text-primary-600'>Tickets</span>
          <span className='text-textColor-muted'><FiChevronRight/></span>
          <span className='text-textColor-base cursor-default'>Add Ticket</span>
        </div>
        <div className='flex gap-x-3'>
            <button className='h-10 rounded-md px-3 flex items-center gap-x-1 text-sm text-base-white bg-secondary-500 hover:bg-secondary-600'>
                <BiEditAlt className='text-lg'/>
                Edit Tickets
            </button>
            <button className='h-10 rounded-md px-3 flex items-center gap-x-2 text-sm font-semibold text-base-black border border-borderColor-secondary hover:bg-primary-100'>
              Tickets History
            </button>
        </div>
      </div>
      
      <div className='p-4 pt-8 mt-6 bg-surface-light-primary border border-borderColor-secondary rounded-lg'>
        <div className='space-y-2'>
          <div className='flex items-center gap-2'>
            <h2 className='text-2xl font-semibold pr-3'>Ticket Title</h2>
            <span className='h-6 text-sm  px-2 bg-[#F97316] text-base-white inline-flex items-center rounded-md'>In-Progress</span>
            <span className='h-6 text-sm  px-2 bg-success-100 text-success-600 border border-success-600 inline-flex items-center rounded-md'>Low</span>
          </div>
          <p className='text-sm font-medium'>WCMC - Weill Cornell Medicine Primary Care - East 72nd St </p>
        </div>
        <div className='mt-10 flex flex-wrap gap-x-14 gap-y-8 2xl:gap-x-24 2xl:gap-y-10'>
          <div className='space-y-3'>
            <p className='text-xs uppercase font-semibold'>Ticket Type:</p>
            <p className='font-medium'>Cyber Security</p>
          </div>
          <div className='space-y-3'>
            <p className='text-xs uppercase font-semibold'>Assets /Device:</p>
            <p className='font-medium'>Application-e8</p>
          </div>
          <div className='space-y-3'>
            <p className='text-xs uppercase font-semibold'>Assignee:</p>
            <div className="flex items-center justify-center gap-x-3">
              <span className='h-6 w-6 text-xs flex items-center justify-center bg-primary-500 text-base-white rounded-full'>RR</span>
              <p className='font-medium'>Ronald Richards</p>
            </div>
          </div>
          <div className='space-y-3'>
            <p className='text-xs uppercase font-semibold'>Reporter:</p>
            <div className="flex items-center justify-center gap-x-3">
              <span className='h-6 w-6 text-xs flex items-center justify-center bg-warning-500 text-base-black rounded-full'>DR</span>
              <p className='font-medium'>Darlene Robertson</p>
            </div>
          </div>
          <div className='space-y-3'>
            <p className='text-xs uppercase font-semibold'>Indicators:</p>
            <div className="flex flex-wrap max-w-[500px] items-center justify-start gap-1">
              <span className='text-sm font-medium py-0.5 px-2 bg-primary-100 rounded border border-primary-500'>192.168.177.54</span>
              <span className='text-sm font-medium py-0.5 px-2 bg-primary-100 rounded border border-primary-500'>WCMCDC</span>
              <span className='text-sm font-medium py-0.5 px-2 bg-primary-100 rounded border border-primary-500'>User_78</span>
              <span className='text-sm font-medium py-0.5 px-2 bg-primary-100 rounded border border-primary-500'>192.168.173.14</span>
            </div>
          </div>
          <div className='space-y-3'>
            <p className='text-xs uppercase font-semibold'>Indicators:</p>
            <div className="flex flex-wrap max-w-[450px] items-center justify-start gap-1">
              <span className='text-sm font-medium py-0.5 px-2 bg-primary-100 rounded border border-primary-500'>192.168.177.54</span>
              <span className='text-sm font-medium py-0.5 px-2 bg-primary-100 rounded border border-primary-500'>WCMCDC</span>
              <span className='text-sm font-medium py-0.5 px-2 bg-primary-100 rounded border border-primary-500'>User_78</span>
              <span className='text-sm font-medium py-0.5 px-2 bg-primary-100 rounded border border-primary-500'>192.168.173.14</span>
              <span className='text-sm font-medium py-0.5 px-2 bg-primary-100 rounded border border-primary-500'>User_78</span>
              <span className='text-sm font-medium py-0.5 px-2 bg-primary-100 rounded border border-primary-500'>User_09</span>
            </div>
          </div>
          <div className='space-y-3 md:w-1/2 2xl:max-w-[450px]'>
            <p className='text-xs uppercase font-semibold'>Description:</p>
            <p className='text-sm font-medium'>Lorem Ipsum is simply dummy text of the industry. Lorem Ipsum dummy text ever and typesetting industry and typesetting industry since the 1500s</p>
          </div>
          <div className='space-y-3 md:w-1/2 2xl:max-w-[450px]'>
            <p className='text-xs uppercase font-semibold'>Note:</p>
            <p className='text-sm font-medium'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>
        </div>
        <div className='mt-14 space-y-3'>
          <p className='text-xs uppercase font-semibold'>Attachments:</p>
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
          </div>
        </div>
        <div className='mt-16'>
          <div className="flex justify-between">
            <div className='bg-surface-light-secondary p-1 rounded-lg'>
              <button className='px-3 py-2 bg-surface-light-primary text-sm font-semibold text-textColor-base rounded-md shadow-md'>All Comments</button>
              <button className='px-3 py-2 text-sm font-semibold text-textColor-base'>Internal Comments</button>
            </div>
            <button className='h-10 px-3 flex items-center gap-2 text-sm font-medium text-textColor-muted hover:text-textColor-base hover:bg-primary-100 rounded-md'>
              <span>Newest First</span>
              <BsSortDownAlt/>
            </button>
          </div>
        </div>
        <div className='mt-8 space-y-8'>
          <div className='flex gap-5'>
            <div className='rounded-full h-10 w-10 overflow-hidden'>
              <img src={avatar} alt="" />
            </div>
            {
              internalComment 
              ?
              <div className='w-full space-y-4'>
                <Texteditor/>
                <div className='flex gap-x-3'>
                    <button className='h-8 rounded-md px-3 flex items-center gap-x-1 text-sm text-base-white bg-secondary-500 hover:bg-secondary-600'>
                      Submit
                    </button>
                    <button onClick={()=> setInternalComment(!internalComment)} className='h-8 rounded-md px-3 flex items-center gap-x-2 text-sm font-semibold text-base-black border border-borderColor-secondary hover:bg-primary-100'>
                      Cancel
                    </button>
                </div>
              </div>
              :
              <button onClick={()=> setInternalComment(!internalComment)} className='border p-4 w-full text-start text-textColor-muted bg-surface-light-secondary rounded-lg'>
                Add Comment Here
              </button>
            }
          </div>

          <div className="flex gap-5">
            <div className='flex items-center justify-center text-base bg-yellow-400 font-semibold rounded-full h-10 w-10 overflow-hidden'>
                DR
            </div>
            <div className='space-y-3 max-w-[880px]'>
              <div className="flex items-center gap-6">
                <p className='font-semibold'>Darlene Robertson</p>
                <p className='text-sm text-textColor-muted'>14 Second ago</p>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos velit dolorem maiores obcaecati amet? Maxime velit sunt esse quisquam deleniti.</p>
              <div className="flex items-center gap-x-2">
                <button className='text-sm text-textColor-muted hover:text-textColor-base'>Edit</button>
                <span className='block h-1 w-1 bg-surface-light-quaternary rounded-full'></span>
                <button className='text-sm text-textColor-muted hover:text-textColor-base'>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
