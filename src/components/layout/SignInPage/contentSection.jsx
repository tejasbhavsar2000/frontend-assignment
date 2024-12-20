import Logo from '../../../assets/logo.svg'
import Pie from '../../../assets/piechart.svg'
import UpArrow from '../../../assets/uparrow.svg'
import BottomLogo from '../../../assets/codeant.svg'

const ContentSection = () =>{
    return (
        <div className="hidden  relative flex-1 md:flex w-full justify-center items-center">
                    <div className="hidden w-full md:block absolute bottom-0 left-0  h-1/3">
                            <img className='w-1/3 h-full' src={BottomLogo}/>
                    </div>
                    <div className="relative  flex w-[30rem] justify-center items-center h-80">
                        <div className="absolute flex flex-col top-0 left-0 font-[Inter]  w-[95%] shadow-[0_0_24px_0_#08173529] rounded-3xl">
                            <div className="flex items-center font-bold p-4 px-8 border-b-[#E6E8F0] border-b-2 gap-x-2 ">
                                <img src={Logo} width="28px"/>
                                <span className='text-lg'>AI to Detect & Autofix Bad Code</span>
                            </div>
                            <div className="flex justify-center  gap-x-4 p-4 px-8 items-center text-center w-full">
                                <p className="flex flex-1 flex-col m-0 py-2">
                                    <span className='text-lg font-bold'>30+</span> 
                                    <span className='whitespace-nowrap font-normal text-sm'>Language Support</span>
                                </p>
                                <p className="flex flex-1 flex-col m-0 py-2">
                                    <span className='text-lg font-bold'>10K+</span> 
                                    <span className='whitespace-nowrap font-normal text-sm'>Developers</span>
                                </p>
                                <p className="flex flex-1 flex-col m-0 py-2">
                                    <span className='text-lg font-bold'>100K%</span> 
                                    <span className='whitespace-nowrap font-normal text-sm'>Hours Saved</span>
                                </p>
                            </div>
                        </div>
                        <div className="flex opacity-100 bg-white flex-col absolute bottom-0 right-0 shadow-[0_0_24px_0_#08173529] rounded-3xl px-8 py-5 gap-4">
                            <div className="flex items-center gap-x-20">
                                <img className='w-14' src={Pie}/>
                                <div className='flex flex-col'>
                                    <div className='flex flex-row gap-2'>
                                        <img src={UpArrow} className='w-[0.646rem]'/>
                                        <span className='text-sm font-bold text-[#0049C6]'>14%</span>
                                    </div>
                                    <span className='text-xs font-normal'>This week</span>
                                </div>
                            </div>
                            <div>
                                <div className='flex flex-col gap-4'>
                                    <span className='text-sm font-bold'>
                                        Issues Fixed
                                    </span>
                                    <span className='text-[2rem] font-bold'>
                                        500K+
                                    </span>
                                </div>
                            </div>   
                        </div>
                    </div>
                    
                </div>
    )
}


export default ContentSection;