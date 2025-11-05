
import { useEffect, useState } from "react"
import { IoIosArrowDown } from "react-icons/io";
// import person from '../assets/person.png'
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaCheck, FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const ContactInformation = () => {
    const [id, setId] = useState("Driver's License");
    const [preview, setPreview] = useState(null);
    const [preview2, setPreview2] = useState(null);
    const [formData, setFormData] = useState({
        phone : '',
        house_number : '',
        street_address : '',
        city : '',
        province : '',
        zip_code : '',
        id : '',
        id_front : null,
        id_back : null,
        
    })
    const navigate = useNavigate()

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith("image/")) {
        setPreview(URL.createObjectURL(file));
        setFormData({...formData, id_front:file})
        }
    };
    const handleFileChange2 = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith("image/")) {
        setPreview2(URL.createObjectURL(file));
        setFormData({...formData, id_back:file})
        }
    };
    const identification = [
        "Driver's License",
        "Passport",
        "National ID Card",
        "Social Security Card",
        "Permanent Resident Card",
        "Student ID Card",
        "Military ID Card",
        "State ID Card",
        "Health Insurance Card"
        ]

    
    const handleSubmit = (e) => {

        e.preventDefault();

        const isFilled = Object.values(formData).every((value) => {
            if (typeof value === 'string') {
            return value.trim() !== '';
            } else if (value instanceof File || value instanceof Blob) {
            return value !== null;
            } else if (Array.isArray(value)) {
            // for multiple image uploads
            return value.length > 0;
            }
            return value !== null && value !== undefined;
        });

        if (isFilled) {
            localStorage.setItem('is_contact_info_verified', 'true');
            navigate('/kyc/trading');
        } else {
            toast.error('Please fill out all fields to complete your KYC.');
        }
        };



    useEffect(() => {
    const is_personalInfoVerified = localStorage.getItem('is_personal_info_verified');

    if (!is_personalInfoVerified || is_personalInfoVerified !== 'true') {
        navigate('/kyc/personal-info');
    }

}, []); //  run only once on mount



    


  return (
    <section className='container mx-auto  mt-2 py-2 px-2 flex flex-col min-h-screen'>
        <div className="w-full flex flex-col gap-y-6 justify-end items-end py-2">
            {/* <img src={person} className="object-cover w-[40px]" alt="" />
            <button className="w-fit text-lg text-primary font-semibold flex gap-4 items-center">
                Skip <FaArrowRightLong className="text-2xl"/>
            </button> */}
        </div>
        <div className="flex flex-col md:flex-row gap-y-8 md:gap-y-0 md:gap-x-2 items-start justify-start">

            {/* side bar */}
            <div className='w-full md:w-[40%] lg:w-[30%] xl:w-[30%] 2xl:w-[20%] rounded-lg bg-whyCard p-3 md:p-6 lg:p-8 flex flex-col gap-y-8'>
                <h1 className='text-primary text-xl lg:text-2xl font-bold'>Verify Profile</h1>
                <ul className="flex flex-col gap-y-8 text-lg font-semibold text-white">
                    
                        <li className="flex gap-3 items-center">
                            <span className="text-2xl"><FaCheck className="text-lime-400"/></span>  Personal Information
                        </li>
                    
                        <li className="flex gap-3 items-center">
                            <span className="text-2xl text-white">--</span>  Contact Information
                        </li>
                    
                        <li className="flex gap-3 items-center">
                            <span className="text-2xl text-red-600">--</span>  Currency
                        </li>
                    
                        <li className="flex gap-3 items-center">
                            <span className="text-2xl text-red-600">--</span>  Client Declaration
                        </li>
                    
                </ul>
            </div>

            {/* personal info */}
            <div className="flex flex-col p-3 md:py-6 lg:p-8 gap-y-3 w-full md:w-[60%] lg:w-[70%] ">
                <h1 className="md:text-2xl font-bold text-white">Contact Information</h1>
                <div>
                    <div className="w-full flex justify-end">
                        <span className="text-sm font-semibold text-white">25%</span>
                    </div>
                    <div className="h-3 bg-primary/25 rounded-full w-full">
                        <div className="rounded-full bg-primary w-[25%] h-3"></div>
                    </div>
                </div>

                {/* why */}
                <div className="p-3 md:p-4 lg:p-6 flex flex-col gap-y-1.5 bg-primary/25 rounded-xl mt-4">
                    <h3 className="text-lg font-semibold text-primary">Why do I need to verify ?</h3>
                    <div className="px-3 md:px-6 w-full flex flex-col gap-y-2">
                        <div className="flex items-center gap-x-3">
                            <div className="rounded-full p-1 bg-primary"></div>
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
                <div className="flex flex-col w-full gap-y-6 py-3">
                    <div className="flex flex-col md:flex-row gap-y-6 lg:gap-y-0 md:gap-x-2 lg:gap-x-4">
                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-sm font-semibold" htmlFor="first name">House Number</label>
                            <input onChange={(e) => setFormData((prev) => ({...prev, house_number: e.target.value }))} placeholder="Enter house number" className="w-full px-3 py-2 text-sm text-white font-normal bg-deposit/25 rounded-lg border-none focus-within:ring-1  focus:ring-primary focus:outline-none" type="text" name="first name" id="" />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-sm font-semibold" htmlFor="last name">Street address</label>
                            <input onChange={(e) => setFormData((prev) => ({...prev, street_address: e.target.value }))} placeholder="Enter street address" className="w-full px-3 py-2 text-sm text-white font-normal bg-deposit/25 rounded-lg border-none focus-within:ring-1  focus:ring-primary focus:outline-none" type="text" name="first name" id="" />
                        </div>
                    </div>

                    
                    <div className="flex flex-col md:flex-row gap-y-6 lg:gap-y-0 md:gap-x-2 lg:gap-x-4">
                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-sm font-semibold" htmlFor="first name">City</label>
                            <input onChange={(e) => setFormData((prev) => ({...prev, city: e.target.value }))} placeholder="Enter your city" className="w-full px-3 py-2 text-sm text-white font-normal bg-deposit/25 rounded-lg border-none focus-within:ring-1  focus:ring-primary focus:outline-none" type="text" name="first name" id="" />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-sm font-semibold" htmlFor="last name">Province</label>
                            <input onChange={(e) => setFormData((prev) => ({...prev, province: e.target.value }))} placeholder="Enter your province" className="w-full px-3 py-2 text-sm text-white font-normal bg-deposit/25 rounded-lg border-none focus-within:ring-1  focus:ring-primary focus:outline-none" type="text" name="first name" id="" />
                        </div>
                    </div>


                    <div className="flex flex-col md:flex-row gap-y-6 lg:gap-y-0 md:gap-x-2 lg:gap-x-4">
                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-sm font-semibold" htmlFor="first name">Zip code</label>
                            <input onChange={(e) => setFormData((prev) => ({...prev, zip_code: e.target.value }))} placeholder="Enter zip code" className="w-full px-3 py-2 text-sm text-white font-normal bg-deposit/25 rounded-lg border-none focus-within:ring-1  focus:ring-primary focus:outline-none" type="text" name="first name" id="" />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-sm font-semibold" htmlFor="last name">Phone</label>
                            <div className="flex gap-1">
                                <input max={4} placeholder="+376" className="w-[20%] px-3 py-2 text-sm text-white font-normal bg-deposit/25 rounded-lg border-none focus-within:ring-1  focus:ring-primary focus:outline-none" type="tel" name="first name" id="" />
                                <input onChange={(e) => setFormData((prev) => ({...prev, phone: e.target.value }))} placeholder="000-000-000" className="w-[80%] px-3 py-2 text-sm text-white font-normal bg-deposit/25 rounded-lg border-none focus-within:ring-1  focus:ring-primary focus:outline-none" type="tel" name="first name" id="" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-y-6 lg:gap-y-0 md:gap-x-2 lg:gap-x-4">
                        
                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-sm font-semibold" htmlFor="id">ID type</label>
                            <div className="relative flex w-full lg:w-[50%] ">
                                <select
                                    value={id}
                                    onChange={(e) => {setId(e.target.value); setFormData((prev) => ({...prev, id: e.target.value}))}}
                                    className="w-full border-none rounded-lg bg-deposit/25 flex items-start justify-start px-3 text-sm text-gray-500 font-normal py-2 focus:outline-none focus:ring-1 focus:ring-primary appearance-none pr-8 "
                                >
                                    {identification.map((items) => (
                                    <option key={items} value={items}>{items}</option>
                                    ))}
                                </select>
                                <IoIosArrowDown
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white pointer-events-none"
                                    size={20}
                                />
                            </div>
                        </div>
                    </div>

                    {/* image fields */}
                    <div className="flex flex-col md:flex-row gap-y-6 lg:gap-y-0 md:gap-x-2 lg:gap-x-4">
                        <div className="w-full flex justify-start gap-2 flex-col">
                            <label
                                htmlFor="front-id-upload"
                                className="mt-2 flex flex-col items-center justify-center w-full px-4 py-6 bg-deposit/25 text-white rounded-xl cursor-pointer hover:border-primary border-2 border-dashed border-gray-400 transition duration-300"
                            >
                                <FaCloudUploadAlt className="text-3xl mb-2 text-blue-400" />
                                <span className="text-sm font-medium text-white">
                                    Click here to upload front of ID
                                </span>
                                <input
                                id="front-id-upload"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleFileChange}
                                />
                            </label>

                            {preview && (
                                <div className="w-[30px] h-[30px] mb-4">
                                    
                                    <img
                                        src={preview}
                                        alt="Uploaded ID"
                                        className="w-full max-h-60 object-cover rounded-sm border border-gray-500"
                                    />
                                </div>
                            )}
                        </div>
                        {/* image upload 2 */}
                        <div className="w-full flex justify-start gap-2 flex-col">
                            <label
                                htmlFor="back-id-upload"
                                className="mt-2 flex flex-col items-center justify-center w-full px-4 py-6 bg-deposit/25 text-white rounded-xl cursor-pointer hover:border-primary border-2 border-dashed border-gray-400 transition duration-300"
                            >
                                <FaCloudUploadAlt className="text-3xl mb-2 text-blue-400" />
                                <span className="text-sm font-medium">
                                Click here to upload back of ID
                                </span>
                                <input
                                id="back-id-upload"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleFileChange2}
                                />
                            </label>

                            {preview2 && (
                                <div className="w-[30px] h-[30px] mb-4">
                                    
                                    <img
                                        src={preview2}
                                        alt="Uploaded ID"
                                        className="w-full max-h-60 object-cover rounded-sm border border-gray-500"
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-row gap-x-4 md:gap-x-6 lg:gap-x-8 py-2 w-full">
                        <button onClick={() => navigate('/')} className="w-full py-3 rounded-lg border-1 border-primary bg-black text-primary text-sm font-semibold hover:transition-transform hover:scale-105 duration-300">
                            Skip
                        </button>
                        <button onClick={handleSubmit} className="w-full py-3 bg-primary text-black text-sm font-semibold rounded-lg hover:transition-transform hover:scale-105 duration-300">
                            Continue
                        </button>
                    </div>
                
                </div>



            </div>
        </div>
    </section>
  )
}

export default ContactInformation