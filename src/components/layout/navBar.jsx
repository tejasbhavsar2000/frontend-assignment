import Logo from '../../assets/logo.svg'
import Hamburger from '../../assets/hamburger.svg'
import ChevronDown from '../../assets/chevron-down.svg'
import { NavItems } from '../../constants/NavItem'
import NavItem from '../ui/navItem'
import { useState } from 'react'
const NavBar = () =>{
    const [active ,setActive] = useState(false);
    const onClick = (e)=>{
        setActive(!active);
    }
    return (
        <nav className="w-full  absolute  h-full flex flex-col bg-white  ">
            <div className={`flex w-full bg-white z-50 justify-between p-4 md:shadow-none   ${active ? '' :' shadow-[0_0_0_1px_#E9EAEB]'}`}>  
                    <div className="text-[1.5rem] leading-[1.65rem] font-normal flex items-center gap-2">
                        <img className='w-7' src={Logo}/>
                        <span>CodeAnt AI</span>
                    </div>
                    <img className='md:hidden w-6' onClick={onClick} src={Hamburger}></img>
                    
            </div>
            <div className={`flex flex-col   bg-white  p-4 text-base font-semibold gap-4 transition-all  ${active ? ' -translate-y-0 ' :  '-translate-y-full '}`}>
                <div className='flex font-normal border border-[#D5D7DA]  shadow-[0px_1px_2px_0_#0A0D120D] p-2 rounded-lg justify-between'>
                    <span>UtkarshDhairyaPanwar</span>
                    <img src={ChevronDown}></img>
                </div>
                <ul className='flex flex-col font-semibold gap-1 text-[#414651]'>
                    {
                        NavItems.map((item) =>{
                            return (
                                <NavItem name={item.name} logo={item.logo}></NavItem>
                            )
                        })
                    }
                </ul>
            </div>
            <div className={`flex-1  bg-[#6C6C6C4D]   ${active ? '' : 'hidden'}`}/>
        </nav>
    )
}

export default NavBar;