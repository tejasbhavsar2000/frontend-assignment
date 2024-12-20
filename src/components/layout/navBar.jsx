import Logo from '../../assets/logo.svg'
import Close from '../../assets/close.svg'
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
        <div className="w-full md:w-[15.125rem] md:max-h-screen sticky top-0 md:justify-center md:border-r md:border-r-[#E9EAEB]  flex  flex-col bg-white  ">
            <div className={`flex w-full bg-white z-50 md:p-5  justify-between p-4 md:shadow-none   ${active ? '' :' shadow-[0_0_0_1px_#E9EAEB]'}`}>  
                    <div className="text-[1.5rem] leading-[1.65rem] font-[Satoshi] font-normal flex  items-center gap-2">
                        <img className='w-7' src={Logo}/>
                        <span>CodeAnt AI</span>
                    </div>
                    {
                        active ? 
                        <img className='md:hidden w-4' onClick={onClick} src={Close}></img>:

                        <img className='md:hidden w-6' onClick={onClick} src={Hamburger}></img>

                    }
                    
            </div>
            <div className='flex-1  relative font-[Inter]'>
                <div className={`md:h-full md:static md:translate-y-0 md:gap-6 flex flex-col absolute z-20  w-full   bg-white  p-4 text-base font-semibold gap-4 transition-all  ${active ? ' -translate-y-0 ' :  '-translate-y-full '}`}>
                    <div className='flex relative font-normal border border-[#D5D7DA] gap-2  shadow-[0px_1px_2px_0_#0A0D120D] p-2 rounded-lg justify-between'>
                        <span className=' line-clamp-1'>UtkarshDhairyaPanwar</span>
                        <img className='' src={ChevronDown}></img>
                    </div>
                    <nav className='flex flex-1 flex-col md:justify-between font-semibold gap-1 text-[#414651]'>
                        <div>
                            {
                                NavItems.map((item, id) =>{
                                    return (
                                        <NavItem className={`md:${id == 5 || id == 6 ? 'hidden' : ''}`} aria-checked={id==0 ? true : false} name={item.name} logo={item.logo} key={item.name} id={id} ></NavItem>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <NavItem logo={NavItems[5].logo} name={NavItems[5].name}/>
                            <NavItem logo={NavItems[6].logo} name={NavItems[6].name}/>
                        </div>
                    </nav>
                </div>
            </div>
            
            <div className={`absolute h-screen w-screen bg-[#6C6C6C4D] z-10  ${active ? '' : 'hidden'}`}/>
                        
        </div>
    )
}

export default NavBar;