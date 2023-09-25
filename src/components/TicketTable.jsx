import React from 'react'
import {FiSearch} from 'react-icons/fi'
import {BiEditAlt} from 'react-icons/bi'
import {AiOutlineEye} from 'react-icons/ai'
import {GoDownload} from 'react-icons/go'
import cyberTickets from '../data/cyberTickets'
import helpDeskTickets from '../data/helpDeskTable'
import { NavLink } from 'react-router-dom'
import { Modal } from '../components/Modal'
import docs from '../assets/icons/docs.svg'
import xsl from '../assets/icons/xsl.svg'
import zip from '../assets/icons/zip.svg'
export const Table = (props) => {
    return (
    <div className='mt-6 bg-surface-light-primary overflow-hidden h-full rounded-md border border-borderColor-secondary'>
        <div className='p-4 flex justify-between items-center gap-2'>
            <div className='relative'>
                <FiSearch className='text-2xl text-textColor-muted absolute top-2 left-2'/>
                <input type="text" placeholder='Search by any ticket details...' className='outline-none border border-borderColor-secondary rounded-md pl-10 pr-4 h-10 w-[532px]' />
            </div>
            <div className='flex items-center gap-x-2 text-sm font-medium'>
              <p>Showing</p>
              <select name="" id="" className='p-1 pr-4 border rounded-md outline-none appearance-none bg-surface-light-secondary'>
                <option value="">10</option>
                <option value="">20</option>
                <option value="">30</option>
                <option value="">40</option>
                <option value="">50</option>
              </select>
              <p>of  1,647 of Results</p>
            </div>
        </div>
        <div className='mt-2 overflow-hidden'>
            {
                props.ticket === 'Cyber Security' 
                ?<CyberTable/>
                :<HelpDeskTable/>
            }
        </div>
    </div>
  )
}


const CyberTable = () => {
  const tableHead= ['Date Created','Priority','Organization','Ticket type','Assets','Incident type','Indicators','Reporter','Assignee','Action'];
  return (
    <table className='table-auto w-full'>
        <thead>
                {tableHead.map((title,key)=>(
                    <th key={key} className={`${title === 'Assets' && 'hidden 2xl:table-cell'}`}>{title}</th>
                ))}
        </thead>
        <tbody>
            {
                cyberTickets.map((item,key)=>(
                    <tr key={key}>
                        <td>{item.dateCreated}</td>
                        <td>
                            {
                                item.priority === 1 
                                ? <span className='priority-chip priority-low'>Low</span> 
                                : item.priority === 2 
                                ? <span className='priority-chip priority-medium'>Medium</span> 
                                : item.priority === 3 
                                ? <span className='priority-chip priority-high'>High</span>
                                : item.priority === 4
                                ? <span className='priority-chip priority-critical'>Critical</span>
                                : '-'
                            }
                        </td>
                        <td className='max-w-[100px] 2xl:max-w-[250px]'>{item.organization} - {item.location}</td>
                        <td>{item.ticketType}</td>
                        <td className='hidden 2xl:table-cell'>{item.assetsDevice}</td>
                        <td className=' max-w-[200px] space-x-1'>
                            {item.incidentType.map((chip,key)=>(
                                <span key={key} className='chip'>{chip}</span>
                            )) }
                        </td>
                        <td className='max-w-[200px] 2xl:max-w-[240px] space-x-1'>
                            {item.indicators.map((chip,key)=>(
                                <span key={key} className='chip'>{chip}</span>
                            )) }
                        </td>
                        <td>{item.reporter}</td>
                        <td>{item.assignee}</td>
                        <td className='flex gap-x-2'>
                            <NavLink to={'editticket'} className='mt-3 text-xl text-textColor-muted hover:text-textColor-base hover:bg-primary-100 p-1 rounded-md'>
                              <BiEditAlt/>
                            </NavLink>
                            <NavLink to={'viewticket'} className='mt-3 text-xl text-textColor-muted hover:text-textColor-base hover:bg-primary-100 p-1 rounded-md'>
                              <AiOutlineEye/>
                            </NavLink>
                        </td>
                    </tr>
                ))
            }
        </tbody>
    </table>
  )
}

const HelpDeskTable = () => {
    const tableHead= ['Date Created','Priority','Ticket Id','Application','Phone Number','Agent','Description','Action'];
    return(
        <table className='table-auto w-full'>
        <thead>
                {tableHead.map((title,key)=>(
                    <th key={key} className={`${title === 'Assets' && 'hidden 2xl:table-cell'}`}>{title}</th>
                ))}
        </thead>
        <tbody>
            {
                helpDeskTickets.map((item,key)=>(
                    <tr key={key}>
                        <td className='p-2'>{item.dateCreated}</td>
                        <td className='p-2'>
                            {
                                item.priority === 1 
                                ? <span className='priority-chip priority-low'>Low</span> 
                                : item.priority === 2 
                                ? <span className='priority-chip priority-medium'>Medium</span> 
                                : item.priority === 3 
                                ? <span className='priority-chip priority-high'>High</span>
                                : item.priority === 4
                                ? <span className='priority-chip priority-critical'>Critical</span>
                                : '-'
                            }
                        </td>
                        <td>{item.ticketId}</td>
                        <td>{item.application}</td>
                        <td>{item.phoneNumber}</td>
                        <td>{item.agent}</td>
                        <td className='max-w-[360px] pr-4'>{item.description}</td>
                        <td className='flex gap-x-2'>
                            <Modal content={<ModalContent/>} />
                        </td>
                    </tr>
                ))
            }
        </tbody>
    </table>
    )
}


const ModalContent = () => {
    const attamentfiles = [
        {title: 'Document Title', size: 'XSL, 32KB', img: xsl, frame: false},
        {title: 'Document Title', size: 'DOCS, 18KB', img: docs, frame: false},
        {title: 'Document Title', size: 'ZIP, 74MB', img: zip, frame: false},
      ]
  return (
    <div className='p-5'>
        <div className='space-y-2'>
          <div className='flex items-center gap-2'>
            <h2 className='text-2xl font-semibold pr-3'>Ticket Title</h2>
            <span className='h-6 text-sm  px-2 bg-[#F97316] text-base-white inline-flex items-center rounded-md'>In-Progress</span>
            <span className='h-6 text-sm  px-2 bg-success-100 text-success-600 border border-success-600 inline-flex items-center rounded-md'>Low</span>
          </div>
        </div>
      <div className='mt-10 flex flex-wrap gap-x-14 gap-y-8 '>
        <div className='space-y-3'>
            <p className='text-xs uppercase font-semibold'>Ticket Type:</p>
            <p className='text-base font-medium'>Help Desk</p>
        </div>
        <div className='space-y-3'>
            <p className='text-xs uppercase font-semibold'>Application:</p>
            <p className='text-base font-medium'>Application-e8</p>
        </div>
        <div className='space-y-3'>
            <p className='text-xs uppercase font-semibold'>Phone number:</p>
            <p className='text-base font-medium'>+61 234 6783 453 </p>
        </div>
        <div className='space-y-3'>
            <p className='text-xs uppercase font-semibold'>Agent:</p>
            <div className="flex items-center justify-center gap-x-3">
              <span className='h-6 w-6 text-xs flex items-center justify-center bg-primary-500 text-base-white rounded-full'>RR</span>
              <p className='text-base font-medium'>Ronald Richards</p>
            </div>
        </div>
        <div className='space-y-3'>
            <p className='text-xs uppercase font-semibold'>Description </p>
            <p className='text-base font-medium whitespace-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis autem asperiores assumenda sunt consequuntur esse non error ea, earum enim. Sed fugit ad a vitae. </p>
        </div>

        <div className='mt-4 space-y-3'>
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
      </div>

    </div>
  )
}
