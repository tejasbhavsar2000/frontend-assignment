const Button = ({ children, className }) => {
  return (
    <button
      className={`cursor-pointer flex items-center justify-center gap-1 flex-grow text-nowrap text-[0.875rem] leading-5 w-fit py-2 px-4  rounded-md shadow-[0px_1px_2px_0_#0A0D120D] ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
