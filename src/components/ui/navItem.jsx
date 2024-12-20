const NavItem = ({logo, name}) =>{
    return(
        <li className="flex p-2 gap-1 items-center hover:border">
            <span className="w-[10%]"><img src={logo}/></span>
            <span className="w-11/12">{name}</span>
        </li>
    )
}

export default NavItem;