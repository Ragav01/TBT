import React from 'react'
import { useState} from 'react'

import Datepicker from "react-tailwindcss-datepicker";
import {IoIosArrowDown} from 'react-icons/io'
import {IoCloseOutline} from 'react-icons/io5'
import {FiSearch} from 'react-icons/fi'

export const TicketFilter = () => {
  const [reporter, setReporter] = useState(false);
  const [priority, setPriority] = useState(false);
  const [device, setDevice] = useState(false);
  const [assignee, setAssignee] = useState(false);
  const [incident, setIncident] = useState(false);
  const [indicators, setindicators] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <> 
       <DropDown 
        title='Ticket Type' 
        placeholder='Find ticket'
        items= {[{value: 'Cyber'},{value: 'Help Desk'}]}
       />

        <DropDownOrganization/>

        <DateRangePicker/>

        { priority && <DropDown title='Select Priority' placeholder='Find Priority' items= {[{value: 'Low'},{value: 'Medium'},{value: 'High'},{value: 'Critical'}]} /> }
        { device && <DropDown title='Asset / Device' placeholder='Find Asset/Device' items= {[{value: 'Server'},{value: 'PC'},{value: 'Router'},{value: 'Tablet'},{value: 'Mobile'}]} /> }
        { reporter && <DropDown title='Reporter' placeholder='Find Reporter' items= {[{value: 'Jacob Jones'},{value: 'Ronald Richards'},{value: 'Dianne Russell'},{value: 'Floyd Miles'}]} /> }
        { assignee && <DropDown title='Select Assignee' placeholder='Find Reporter' items= {[{value: 'Jacob Jones'},{value: 'Ronald Richards'},{value: 'Dianne Russell'},{value: 'Floyd Miles'}]} /> }
        { incident && <DropDown title='Incident Type' placeholder='Find Incident Type' items= {[{value: 'Malware Attack'},{value: 'Brute Force'}]} /> }
        { indicators && <Indicators/> }
        
        <div className='relative'>
            <button onClick={() => setActive(!active)} className={`${active && 'bg-primary-100'} h-10 px-3 flex items-center gap-x-1 hover:bg-primary-100 duration-200 text-primary-600 text-sm font-semibold rounded-md`}>
                <span class="material-symbols-outlined"> add </span>
                Add New Ticket
            </button>
            {
                active &&
                <ul className='absolute w-full z-20  mt-1 rounded-md overflow-hidden border-2 border-surface-light-primary bg-surface-light-primary shadow-lg shadow-primary-100 duration-300'>
                    <li>
                        <button onClick={() => setPriority(!priority)} htmlFor='Assets' className='w-full outline-none flex items-center gap-x-3 pl-2.5 h-10 cursor-pointer hover:bg-primary-100'>
                            <input type="checkbox" checked={priority}   id='Assets'/>
                            <p className='text-sm font-medium'>Priority</p>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => setDevice(!device)} htmlFor='Assets' className='w-full outline-none flex items-center gap-x-3 pl-2.5 h-10 cursor-pointer hover:bg-primary-100'>
                            <input type="checkbox" checked={device}   id='Assets'/>
                            <p className='text-sm font-medium'>Assets / Device</p>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => setReporter(!reporter)}   htmlFor='Reporter' className='w-full outline-none flex items-center gap-x-3 pl-2.5 h-10 cursor-pointer hover:bg-primary-100'>
                            <input type="checkbox" checked={reporter} id='Reporter'/>
                            <p className='text-sm font-medium'>Reporter</p>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => setAssignee(!assignee)}   htmlFor='Assigned' className='w-full outline-none flex items-center gap-x-3 pl-2.5 h-10 cursor-pointer hover:bg-primary-100'>
                            <input type="checkbox" checked={assignee} id='Assigned'/>
                            <p className='text-sm font-medium'>Assigned to</p>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => setIncident(!incident)} htmlFor='Incident' className='w-full outline-none flex items-center gap-x-3 pl-2.5 h-10 cursor-pointer hover:bg-primary-100'>
                            <input type="checkbox" checked={incident} id='Incident'/>
                            <p className='text-sm font-medium'>Incident Type</p>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => setindicators(!indicators)}  htmlFor='Indicators' className='w-full outline-none flex items-center gap-x-3 pl-2.5 h-10 cursor-pointer hover:bg-primary-100'>
                            <input type="checkbox" checked={indicators} id='Indicators'/>
                            <p className='text-sm font-medium'>Indicators</p>
                        </button>
                    </li>
                </ul>
            }
        </div>
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
          <ul className='absolute z-10 mt-1 rounded-md overflow-hidden border-2 border-surface-light-primary bg-surface-light-primary shadow-lg shadow-primary-100 duration-300'>
              <li className='relative'>
                  <input type="text" placeholder={props.placeholder} className='max-w-min outline-none text-sm h-8 pl-8 bg-surface-light-secondary' />
                  <span className='absolute left-2 top-2 text-textColor-muted'><FiSearch/></span>
              </li>
              {
                props.items.map((item, key)=>(
                    <li key={key}>
                        <label  htmlFor={item.value} className='flex items-center gap-x-3 pl-2.5 h-10 cursor-pointer hover:bg-primary-100'>
                            <input type="checkbox" id={item.value}/>
                            <p className='text-sm font-medium'>{item.value}</p>
                        </label>
                    </li>
                ))
              }
          </ul>
         }
      </div>
    )
}


export const DropDownOrganization = () => {
  const [open, setOpen] = useState(false);
    const Organization = [
        {
            organization:'WCMC', 
            locations: [
                {
                    value: 'Upper West Side - New York',
                    address: [
                        { value:'Weill Cornell Medicine Primary Care - East 72nd St' },
                        { value:'Weill Cornell Medicine Primary Care - East Side' },
                        { value:'Weill Cornell Medicine Primary Care - Health Center' },
                    ]
                },
                {
                    value: 'Upper East Side - New York',
                    address: [
                        { value:'Weill Cornell Medicine Primary Care - East 72nd St' },
                        { value:'Weill Cornell Medicine Primary Care - East Side' },
                        { value:'Weill Cornell Medicine Primary Care - Iris Cantor' },
                    ]
                }
            ]
        },
        {organization:'Dell'},
        {organization:'LADMC'},
        {organization:'McDonald’s'},
        {organization:'Starbucks'},
        {organization:'Subway'},
    ]
  return (
    <div>
        <div className='relative'>
         <button onClick={() => setOpen(!open)} className={`${open && 'bg-primary-100'} h-10 flex items-center justify-between gap-x-3 px-3 bg-surface-light-primary hover:bg-primary-100 duration-200 outline-none rounded-md`}>
          <p className='text-sm font-medium'>Select Organization & location </p>
          <IoIosArrowDown className={`${open && 'rotate-180'} text-textColor-muted duration-200`}/>
         </button>
         {
          open &&
          <ul className='absolute w-[440px] z-10 mt-1 rounded-md overflow-hidden border-2 border-surface-light-primary bg-surface-light-primary shadow-lg shadow-primary-100 duration-300'>
              <li className='relative'>
                  <input type="text" placeholder='Find Organization'  className='w-full outline-none text-sm h-8 pl-8 bg-surface-light-secondary' />
                  <span className='absolute left-2 top-2 text-textColor-muted'><FiSearch/></span>
              </li>
              {
                Organization.map((item, key)=>(
                    <li key={key}  className='w-full'>
                        <label htmlFor={item.organization} className='flex items-center gap-x-3 pl-2.5 h-10 cursor-pointer hover:bg-primary-100'>
                            <input type="checkbox" id={item.organization} />
                            <p className='text-sm font-medium'>{item.organization}</p>
                        </label>
                        
                        <ul className='ml-4 w-full'>
                        { item.locations &&
                            item.locations.map((location, key)=>(
                                    <li key={key} className='w-full'>
                                        <label htmlFor={location.value} className='flex w-full items-center gap-x-3 px-4 h-10 cursor-pointer hover:bg-primary-100'>
                                            <input type="checkbox" id={location.value}/>
                                            <p className='text-sm font-medium'>{location.value}</p>
                                        </label>
                                        <ul className='ml-4 w-full'>
                                        {
                                            location.address.map((address, key)=>(
                                                <li key={key} className='w-full pr-4'>
                                                    <label htmlFor={address.value} className='flex w-full items-center gap-x-3 px-4 h-10 cursor-pointer hover:bg-primary-100'>
                                                        <input type="checkbox" id={address.value}/>
                                                        <p className='text-sm text-textColor-muted font-medium'>{address.value}</p>
                                                    </label>
                                                </li>
                                            ))
                                        }
                                        </ul>
                                    </li>
                            ))
                        }
                        </ul>
                    </li>
                ))
              }
          </ul>
         }
      </div>
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


export const Indicators = () => {
    const [chip, setChip] = useState(['192.168.177.54','191.168.173.5']);
    const addChips = (e) =>{
        if(e.key === 'Enter'){
            setChip([...chip, e.target.value]);
            e.target.value = '';
        }
    }
    const removeChip = keyToRemove =>{
        setChip(chip.filter((_, key) => key !== keyToRemove));
    }
  return (
    <div className='h-10 min-w-[280px] flex items-center gap-x-2 px-2 bg-surface-light-primary duration-200 outline-none rounded-md'>
        <ul className='flex items-center gap-2'>
            {
                chip.map((chip,key)=>(
                    <li key={key} className='text-sm font-semibold flex items-center gap-x-1 h-7 px-2 bg-primary-100 hover:text-primary-600 rounded-md'>
                        {chip}
                        <span onClick={() => removeChip(key)} className='cursor-pointer text-base'> <IoCloseOutline/> </span>
                    </li>
                ))
            }
        </ul>
        <input type="text" onKeyUp={addChips} className='text-sm outline-none bg-transparent' placeholder='Add Indicators' />
    </div>
  )
}
