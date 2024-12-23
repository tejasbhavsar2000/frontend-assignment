const SignInOptionCard = ({ name, logo }) => {
  return (
    <a
      href="/dashboard"
      className="flex cursor-pointer flex-row  font-semibold text-[#171717] border justify-center rounded-lg  border-[#D8DAE5] items-center gap-2 max-w-[28rem] w-11/12 px-4 py-3"
    >
      <img src={logo} alt={`${name} logo`} className="w-6" />
      Sign in with {name}
    </a>
  );
};

export default SignInOptionCard;
