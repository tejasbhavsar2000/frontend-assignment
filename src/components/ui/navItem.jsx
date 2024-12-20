const NavItem = ({ logo, name, className, id, ...props }) => {
  return (
    <a
      className={`cursor-pointer  flex p-2 rounded-lg md:aria-checked:bg-[#1570EF] md:aria-checked:text-white  md:p-2 md:gap-2 gap-1 items-center text-[1rem] leading-6 ${className}`}
      {...props}
    >
      <span
        className={`${
          id == 0
            ? " w-1/12 md:w-6 md:invert-[100%] md:sepia-[0%] md:saturate-[100%] md:hue-rotate-[354deg] md:brightness-[0%]  md:contrast-[103%]"
            : ""
        } w-5`}
      >
        <img className="" src={logo} />
      </span>
      <span className="w-11/12">{name}</span>
    </a>
  );
};

export default NavItem;
