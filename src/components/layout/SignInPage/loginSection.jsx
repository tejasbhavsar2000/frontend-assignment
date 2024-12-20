import { useState } from "react";
import Logo from "../../../assets/logo.svg";
import { SAAS_SignInOptions, SelfHosted_SignInOptions } from "../../../constants/SignInOptions";
import SignInOptionCard from "../../ui/signInOptionCard";


const LoginSection = () => {
    const [curTab, setCurTab] = useState("SAAS");

    const onClick = (e) => {
        console.log(e.target.value)
        setCurTab(e.target.value)
    }

  return (
    <div className="flex-1 bg-[#FAFAFA] flex flex-col items-center justify-center">
      <div className="flex flex-col items-center bg-white max-w-2xl w-11/12 shadow-[0_1px_2px_0_#0A0D120D] justify-center border border-[#E9EAEB] rounded-xl">
        <div className=" flex flex-col w-full items-center gap-6 justify-center p-4  border-b border-b-[#D5D7DA]">
          <span className="flex items-center gap-2 pt-4 font-[Satoshi] text-3xl font-normal ">
            <img src={Logo} className="w-7" />
            CodeAnt AI
          </span>
          <p className=" font-[Inter] font-semibold text-xl  ">
            Welcome to CodeAnt AI
          </p>
          <div className="flex bg-[#FAFAFA] rounded-md w-full border border-[#E9EAEB] font-[Inter] font-semibold text-base">
            <button onClick={onClick}
              className={
                `flex-1  p-2 ${curTab == "SAAS" ? `bg-[#1570EF]   shadow-[0_1px_2px_0px_#0A0D120D]   rounded-md  text-white` : ''}`
              }
              value={'SAAS'}
            >
              SAAS
            </button>
            <button onClick={onClick} value={'Self'} className={`flex-1 p-2 ${curTab == "Self" ? `bg-[#1570EF]  shadow-[0_1px_2px_0px_#0A0D120D]   rounded-md  text-white` : ''}`}>Self Hosted</button>
          </div>
        </div>
        <div className="flex min-h-72 flex-col items-center w-full flex-grow gap-2 py-5 ">
           {
            curTab == "SAAS" ?
            SAAS_SignInOptions.map((option,id) =>{
                return(<SignInOptionCard name={option.name} logo={option.logo} key={`${option.name}+${id}`}/>)
            })
            :
            SelfHosted_SignInOptions.map((option,id) =>{
                return(<SignInOptionCard name={option.name} logo={option.logo} key={`${option.name}+${id}`}/>)
            })
           }
        </div>
      </div>
      <p className="Font-[Inter] text-xs p-5">By signing up you agree to the 
        <span className="font-bold"> Privacy Policy.</span>
        </p>
    </div>
  );
};

export default LoginSection;
