import React from 'react'
import { useState} from 'react'
import Datepicker from "react-tailwindcss-datepicker";

import {IoIosArrowDown} from 'react-icons/io'
import {FiSearch} from 'react-icons/fi'
export const TicketFilter = () => {
//   const [ticketType, setTicketType] = useState(true);
//   const [organization, setOrganization] = useState(true);
//   const [dateRange, setDateRange] = useState(true);
//   const [asset, setAssets] = useState(true);
//   const [reporter, setReporter] = useState(true);
//   const [assignee, setAssignee] = useState(true);
//   const [incident, setIncident] = useState(true);
//   const [indicators, setindicators] = useState(true);

  return (
    <> 
       <DropDown 
        title='Ticket Type' 
        placeholder='Find ticket'
        items= {[{value: 'Cyber'},{value: 'Help Desk'}]}
       />

        <DropDownOrganization/>

        <DateRangePicker/>

       <DropDown 
        title='Reporter' 
        placeholder='Find Reporter'
        items= {[{value: 'Jacob Jones'},{value: 'Ronald Richards'},{value: 'Dianne Russell'},{value: 'Floyd Miles'}]}
       />

       <DropDown 
        title='Select Priority' 
        placeholder='Find Priority'
        items= {[{value: 'Low'},{value: 'Medium'},{value: 'High'},{value: 'Critical'}]}
       />

       <DropDown 
        title='Asset / Device' 
        placeholder='Find Asset/Device'
        items= {[{value: 'Server'},{value: 'PC'},{value: 'Router'},{value: 'Tablet'},{value: 'Mobile'}]}
       />

       <DropDown 
        title='Select Assignee' 
        placeholder='Find Reporter'
        items= {[{value: 'Jacob Jones'},{value: 'Ronald Richards'},{value: 'Dianne Russell'},{value: 'Floyd Miles'}]}
       />

       <DropDown 
        title='Incident Type' 
        placeholder='Find Incident Type'
        items= {[{value: 'Malware Attack'},{value: 'Brute Force'}]}
       />
    </>
  )
}



export const DropDown = (props) => {

    const [open, setOpen] = useState(false);
    
    return (
      <div className='relative'>
         <button onClick={() => setOpen(!open)} className={`${open && 'bg-primary-100'} h-10 flex items-center justify-between gap-x-3 px-3 bg-surface-light-primary hover:bg-primary-100 duration-200 outline-none rounded-md`}>
          <p className='text-sm font-medium'>{props.title}</p>
          <IoIosArrowDown className={`${open && 'rotate-180'} text-textColor-muted duration-200`}/>
         </button>
         {
          open &&
          <ul className='absolute mt-1 rounded-md overflow-hidden border-2 border-surface-light-primary bg-surface-light-primary shadow-lg shadow-primary-100 duration-300'>
              <li className='relative'>
                  <input type="text" placeholder={props.placeholder} className='max-w-min outline-none text-sm h-8 pl-8 bg-surface-light-secondary' />
                  <span className='absolute left-2 top-2 text-textColor-muted'><FiSearch/></span>
              </li>
              {
                props.items.map((item, key)=>(
                    <li key={key} onClick={() => setOpen(!open)} className='flex items-center gap-x-3 pl-2.5 h-10 cursor-pointer hover:bg-primary-100'>
                        <input type="checkbox" />
                        <p className='text-sm font-medium'>{item.value}</p>
                    </li>
                ))
              }
          </ul>
         }
      </div>
    )
}


export const DropDownOrganization = () => {
  return (
    <div>

    </div>
  )
}


export const DateRangePicker = () => {
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11)
    });
    const handleValueChange = newValue => {
        console.log("newValue:", newValue);
        setValue(newValue);
    };
    return (
        <div>
            <Datepicker placeholder='Incident Timestamp' inputClassName={'text-sm font-medium placeholder-black h-10 px-3 pr-8 outline-none rounded-md hover:bg-primary-100 cursor-pointer'} value={value} onChange={handleValueChange} />
        </div>
    )
}

