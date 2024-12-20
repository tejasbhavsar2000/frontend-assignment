const NavItem = ({logo, name, className, ...props}) =>{
    return(
        <a className={`flex p-2 rounded-lg md:aria-checked:bg-[#1570EF] md:aria-checked:text-white md:p-2 md:gap-2 gap-1 items-center text-[1rem] leading-6 ${className}`} {...props}>
            <span className="w-5"><img className="" src={logo}/></span>
            <span className="w-11/12">{name}</span>
        </a>
    )
}

export default NavItem;