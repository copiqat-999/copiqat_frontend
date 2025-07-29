import { Link } from "react-router-dom"
import { IoIosArrowDown } from "react-icons/io";
import person from '../assets/person.png'
import { FaArrowRightLong, FaCheck } from "react-icons/fa6";


const Declaration = () => {
    
  return (
    <section className='container mx-auto  mt-2 py-2 px-2 flex flex-col min-h-screen'>
        <div className="w-full flex flex-col gap-y-6 justify-end items-end py-2">
            <img src={person} className="object-cover w-[40px]" alt="" />
            <button className="w-fit text-lg text-primary font-semibold flex gap-4 items-center">
                Skip <FaArrowRightLong className="text-2xl"/>
            </button>
        </div>
        <div className="flex flex-col md:flex-row gap-y-8 md:gap-y-0 md:gap-x-2 items-start justify-start">

        {/* side bar */}
        <div className='w-full md:w-[40%] lg:w-[30%] xl:w-[30%] 2xl:w-[20%] rounded-lg bg-whyCard p-3 md:p-6 lg:p-8 flex flex-col gap-y-8'>
            <h1 className='text-primary text-xl lg:text-2xl font-bold'>Verify Profile</h1>
            <ul className="flex flex-col gap-y-8 text-lg font-semibold text-white">
                <Link to={'/kyc/personal-info'} >
                    <li className="flex gap-3 items-center">
                        <span className="text-2xl"><FaCheck className="text-lime-400"/></span>  Personal Information
                    </li>
                </Link>
                <Link to={'/kyc/contact-info'} >
                    <li className="flex gap-3 items-center">
                        <span className="text-2xl text-red-600"><FaCheck className="text-lime-400"/></span>  Contact Information
                    </li>
                </Link>
                <Link to={'/kyc/trading'} >
                    <li className="flex items-center gap-3">
                        <span className="text-2xl text-red-600"><FaCheck className="text-lime-400"/></span>  Currency
                    </li>
                </Link>
                <Link to={'/kyc/declaration'} >
                    <li className="flex gap-3 items-center">
                        <span className="text-2xl text-white">--</span>  Client Declaration
                    </li>
                </Link>
            </ul>
        </div>

        {/* personal info */}
        <div className="flex flex-col p-3 md:py-6 lg:p-8 gap-y-3 w-full md:w-[60%] lg:w-[70%] ">
            <h1 className="md:text-2xl font-bold text-white">Declaration</h1>
            <div>
                <div className="w-full flex justify-end">
                    <span className="text-sm font-semibold text-white">75%</span>
                </div>
                <div className="h-3 bg-primary/25 rounded-full w-full">
                    <div className="rounded-full bg-primary w-[75%] h-3"></div>
                </div>
            </div>

            {/* why */}
            <div className="p-3 md:p-4 lg:p-6 flex flex-col gap-y-1.5 bg-primary/25 rounded-xl mt-4">
                <h3 className="text-lg font-semibold text-primary">Why do I need to verify ?</h3>
                <div className="px-3 md:px-6 w-full flex flex-col gap-y-2">
                    <div className="flex items-center gap-x-3">
                        <div className="rounded-full p-1 bg-primary ">
                            
                        </div>
                        <span className="text-sm font-semibold text-primary">You will be limited to only 50k in volume (this includes deposit and withdrawal)</span>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <div className="rounded-full p-1 bg-primary"></div>
                        <span className="text-sm font-semibold text-primary">Verification allows you to list your trades on the market so users can copy </span>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <div className="rounded-full p-1 bg-primary"></div>
                        <span className="text-sm font-semibold text-primary">Gives full access to the platforms and services </span>
                    </div>
                </div>
                
            </div>

            <h2 className="text-sm font-semibold text-primary py-3">Note: This process can be skipped and done later</h2>

            {/* form */}
            <div className="flex flex-col w-full gap-y-6 py-2">
                <div>
                    <span className="text-sm font-normal text-white text-pretty">
                        By  clicking the ‘submit’  button below, I hereby confirm and acknowledge 
                        that the information provided are correct and I am responsible for 
                        management of my funds. Copiqat will not be held responsible for my 
                        trades and the risks i take.
                    </span>
                </div>


                <div className="flex flex-row gap-x-4 md:gap-x-6 lg:gap-x-8 py-2 w-full">
                    <button className="w-full py-3 rounded-lg border-1 border-primary bg-black text-primary text-sm font-semibold hover:transition-transform hover:scale-105 duration-300">
                        Skip
                    </button>
                    <button className="w-full py-3 bg-primary text-black text-sm font-semibold rounded-lg hover:transition-transform hover:scale-105 duration-300">
                        Continue
                    </button>
                </div>
            </div>
            



        </div>
        </div>
    </section>
  )
}

export default Declaration