import { FaEye, FaEyeSlash} from "react-icons/fa6";
import { useEffect, useState } from "react";
// import { countryOptions, countryData } from "../utils/countries";
import { IoIosArrowDown } from "react-icons/io";
import { Spinner } from "flowbite-react";
import axios from "axios";
import { useAuth } from "../utils/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const [visible, setVisible] = useState(false);
  const [errors, setErrors] = useState({});
  const { setAuth, auth } = useAuth();
  const [visible2, setVisible2] = useState(false);
  const [loading, setLoading] = useState(false);
  const email = auth.user.email
  const [formData, setFormData] = useState({
    
    email: email,
    otp: "",
    new_password: "",
    confirm_password: "",
  });
  const url = `${import.meta.env.VITE_API_BASE_URL}/api/auth/reset-password-confirm/`;
  
  const navigate = useNavigate()

  // const [country, setCountry] = useState("Liberia");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setErrors({});
      const response = await axios.post(url, formData);
      setAuth({ isAuthenticated: false, user: {} });
      console.log(response.data);
      setLoading(false);
      toast.success('password reset succesful')

      navigate('/auth/login')
    } catch (error) {
      console.log(error.response);
      setErrors(error.response.data);
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(formData)
    console.log(auth.user.email)
  })

  return (
    <section className="container mx-auto min-h-screen overflow-y-auto flex flex-col">
      <div className="w-full min-h-screen flex flex-col items-center justify-center py-8 my-auto px-2  ">
        {/* main form */}
        <div className="border-1 border-gray-500 w-full md:w-[60%] lg:w-[60%] xl:w-[40%] flex flex-col py-8 px-6 md:px-8 rounded-lg">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col w-full items-center justify-center py-2 text-center">
              <h1 className="text-lg md:text-xl font-bold text-primary py-2">
                Reset Your Password
              </h1>
              <span className="text-sm font-normal text-white">An OTP code was sent to your email, use it to reset your password</span>
            </div>

            {/* email form */}
            {/* <div className="flex flex-col ">
              <label
                className="text-sm font-semibold py-2 text-white"
                htmlFor="email"
              >
                Email
              </label>
              <input
                value={formData.email}
                placeholder="Enter your email"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="py-3 px-4 w-full bg-whyCard hover:border-1 hover:border-primary  focus focus:ring-0 focus:outline-0 rounded-xl"
                type="email"
                name="email"
                id=""
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email[0]}</p>
              )}
            </div> */}
            {/* otp code */}
            <div className="flex flex-col ">
              <label
                className="text-sm font-semibold py-2 text-white"
                htmlFor="referral"
              >
                OTP
              </label>
              <input
                placeholder="Enter your OTP"
                value={formData.otp}
                onChange={(e) =>
                  setFormData({ ...formData, otp: e.target.value })
                }
                className="py-3 px-4 w-full bg-whyCard hover:border-1 hover:border-primary  focus focus:ring-0 focus:outline-0 rounded-xl"
                type="text"
                name="referral"
                id=""
              />
              {errors.otp && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.otp[0]}
                </p>
              )}
            </div>


            {/* password */}
            <div className="flex flex-col pt-4">
              <label
                className="text-sm font-semibold py-2 text-white"
                htmlFor="password"
              >
                Password
              </label>
              <div className="flex w-full bg-whyCard  hover:border-1 hover:border-primary rounded-xl pr-2 items-center">
                <input
                  placeholder="Enter your new password"
                  value={formData.new_password}
                  onChange={(e) =>
                    setFormData({ ...formData, new_password: e.target.value })
                  }
                  className="py-3 px-4 w-full bg-whyCard border-none outline-0  focus:ring-0 rounded-xl"
                  type={visible ? "text" : "password"}
                  name="password"
                  id=""
                />

                <div className="flex items-center">
                  {visible ? (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setVisible(!visible);
                      }}
                    >
                      <FaEyeSlash className="text-lg text-white" />
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setVisible(!visible);
                      }}
                    >
                      <FaEye className="text-lg text-white" />
                    </button>
                  )}
                </div>
              </div>
              {errors.new_password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.new_password[0]}
                </p>
              )}
            </div>
            {/*confirm password */}
            <div className="flex flex-col py-4">
              <label
                className="text-sm font-semibold py-2 text-white"
                htmlFor="password"
              >
                Confirm password
              </label>
              <div className="flex w-full bg-whyCard  hover:border-1 hover:border-primary rounded-xl pr-2 items-center">
                <input
                  placeholder="Confirm your new password"
                  id='confirm password'
                  value={formData.confirm_password}
                  onChange={(e) =>
                    setFormData({ ...formData, confirm_password: e.target.value })
                  }
                  className="py-3 px-4 w-full bg-whyCard border-none outline-0  focus:ring-0 rounded-xl"
                  type={visible2 ? "text" : "password"}
                  name="password"
                  
                />

                <div className="flex items-center">
                  {visible2 ? (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setVisible2(!visible2);
                      }}
                    >
                      <FaEyeSlash className="text-lg text-white" />
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setVisible2(!visible2);
                      }}
                    >
                      <FaEye className="text-lg text-white" />
                    </button>
                  )}
                </div>
              </div>
              {errors.confirm_password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirm_password[0]}
                </p>
              )}
            </div>

            {errors.non_field_errors && (
              <p className="text-red-500 text-sm mt-1">
                {errors.non_field_errors[0]}
              </p>
            )}
            {errors.detail && (
              <p className="text-red-500 text-sm mt-1">
                {errors.detail}
              </p>
            )}
            {errors.error && (
              <p className="text-red-500 text-sm mt-1">
                {errors.error}
              </p>
            )}

            {/* submit button */}
            <div className="py-8 flex items-center justify-center w-full">
              {loading ? (
                <Spinner color="warning" size="xl" />
              ) : (
                <button
                  type="submit"
                  className="w-full py-3 text-sm font-bold bg-primary text-black rounded-lg hover:transition-transform hover:scale-105 duration-300 cursor-pointer "
                >
                  Reset Password
                </button>
              )}
            </div>

            
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
