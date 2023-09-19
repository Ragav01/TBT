import { useState } from 'react'


import logo from '../assets/brand/logo.png'

export default function Navbar() {
  const [open, setOpen] = useState(true);  
  const Menus = [
    {title: 'Dashbaord', icon: 'dashboard'},
    {title: 'Tickets', icon: 'local_activity'},
    {title: 'Applications', icon: 'folder_open'},
    {title: 'Agents', icon: 'admin_panel_settings'},
    {title: 'Customers', icon: 'group'},
    {title: 'Inventory', icon: 'inventory_2', subItems: [{subTitle: 'Items'},{subTitle: 'Brand'},{subTitle: 'Categories'},{subTitle: 'Locations'}]},
    {title: 'Messages', icon: 'mail'}
  ]
  const Teams = [
    {title: 'Event Checkin', color: '#C084FC'},
    {title: 'MDI DEV', color: '#22C55E'},
  ]
  return (
    <div className={`${open ? 'w-[240px]': 'w-[64px]'} h-screen duration-300 bg-surface-dark-primary text-textColor-base`}>
        {/* Header - Logo */}
        <div className='w-full h-16 px-3 flex justify-between items-center border-b border-[#161A2B]'>
            <img className={`${open ? 'block': 'hidden'}`} src={logo} alt="Logo" />
            <div className='flex items-center justify-center h-[28px] w-[28px] cursor-pointer text-white bg-secondary-400 rounded-full' onClick={() => setOpen(!open)}> 
                {
                open ?
                <span class="material-symbols-outlined"> chevron_left </span>
                : 
                <span class="material-symbols-outlined"> chevron_right </span>  
                } 
            </div>
        </div>
        {/* Body - Menu */}
        <ul>
            <li className={`${!open && 'text-center'} text-xs text-base-white uppercase px-3 mt-5`}>
                menu
            </li>
            {Menus.map((menu, key)=>(
                <li key={key} className='mx-3 mt-2 px-2 py-1  rounded-md cursor-pointer duration-200 text-textColor-muted hover:text-base-white hover:bg-secondary-500'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-x-3'>
                            <span className="material-symbols-outlined text-2xl">{menu.icon}</span>
                            <span className='text-sm'>{open && menu.title}</span>
                        </div>
                        {'subItems' in menu && <span class="material-symbols-outlined"> expand_more </span>}
                    </div>
                </li>
            ))}
        </ul>
        {/* Body - Teams */}
        <ul className='mt-5 border-t border-[#161A2B]'>
            <li className={`${!open && 'text-center'} text-xs text-base-white uppercase px-3 mt-5`}>
                Teams
            </li>
            <li>
            {Teams.map((teams, key)=>(
                <li key={key} className={`${open && 'gap-x-3'} flex items-center mx-3 mt-2 px-3 py-2  rounded-md cursor-pointer duration-200 text-textColor-muted hover:text-base-white hover:bg-secondary-500`}>
                    <span className='h-3 w-3 rounded-md' style={{backgroundColor: teams.color}}></span>
                    <span className='text-sm text-textColor-muted'>{open && teams.title}</span>
                </li>
            ))}
            </li>
        </ul>
    </div>
  )
}
