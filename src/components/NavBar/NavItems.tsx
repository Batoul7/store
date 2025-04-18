import { Dispatch, SetStateAction } from 'react';
import {  NavLink } from 'react-router-dom'

interface NavProps {
  items:Item[],
  show: Dispatch<SetStateAction<boolean>>;
}
interface Item {
  name:string;
  path:string
}
export default function NavItems({items,show}: NavProps) {
  
  return (
    <>
       <ul className='flex flex-col md:flex-row md:items-center  gap-2 md:gap-0'>
            {items?.map((item: Item,index) => {
                return (
                    <li key={index} 
                    className='flex items-center capitalize '
                    onClick={() => show(prev => !prev)}>
                      <NavLink 
                          to={item.path}   
                          className={({ isActive }) => 
                            `text-lg md:text-xl font-normal py-1 md:py-3 md:px-3.5 transition-colors duration-300  w-full
                            ${isActive ? 'bg-white text-blue-400' : 'text-white'} 
                            hover:bg-white hover:text-blue-400`
                          }
                        >
                          {item.name}
                        </NavLink>
                      
                    </li>
                )
            })}
        </ul>
       
         
    </>
  )
}
