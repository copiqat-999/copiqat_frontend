import OTPInput from "../utils/OTPInput";
import { useState, useEffect } from "react";
import { useAuth } from "../utils/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Spinner } from "flowbite-react";
import { toast } from "react-toastify";

const ActivateAccount = () => {
  const [otp, setOtp] = useState("");
  const { auth } = useAuth();
  const [errors, setErrors] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [timer, setTimer] = useState(0); // ⏳ timer state
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (otp.length === 6) {
      const url = `${import.meta.env.VITE_API_BASE_URL}/api/auth/verify-otp/`;
      try {
        setIsOpen(true);
        const response = await axios.post(url, {
          otp: otp,
          email: auth.user.email,
        });

        setErrors({}); // clear old errors if success

        if (response.status == 200) {
          navigate("/auth/login");
        }
      } catch (error) {
        setIsOpen(false);
        console.log(error.response);
        setErrors(error.response.data);
      }
    }
  };

  // run handleSubmit whenever OTP changes
  useEffect(() => {
    handleSubmit();
  }, [otp]);

  // countdown effect
  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  // handle resend OTP
  const handleResendOTP = async () => {
    setLoading(true);
    try {
      const url = `${import.meta.env.VITE_API_BASE_URL}/api/auth/request-otp/`;
      await axios.post(url, { email: auth.user.email });
      setLoading(false);
      setTimer(30); // start 30s cooldown
      toast.success("An OTP has been sent to your email");
    } catch (error) {
      console.log(error.response);
      toast.error("An error occured trying to send OTP");
      setLoading(false);
    }
  };

  return (
    <section className="container mx-auto py-8 px-2 h-screen sm:min-h-screen flex items-start justify-center">
      <div className="flex flex-col border-1 border-gray-500 py-8 px-2 md:px-4 rounded-xl w-full md:w-[50%] lg:w-[40%] xl:w-[35%] h-full">
        <div className="flex flex-col py-4 w-full items-center justify-center text-center ">
          <h1 className="text-primary font-bold text-2xl">
            Activate Your Account
          </h1>
          <span className="text-sm font-light text-white py-2 w-full md:w-[300px]">
            An OTP was sent to your email use it to activate your account
          </span>
        </div>

        <div className="flex justify-between gap-x-2 mb-2">
          {/* otp field */}
          <div className="flex flex-col items-center w-full ">
            <OTPInput length={6} onChange={setOtp} />
            {errors.error && (
              <p className="text-red-500 text-sm mt-2">{errors.error}</p>
            )}
          </div>
        </div>

        {/* Request OTP button */}
        <div className="flex flex-col w-full items-center justify-center mt-6 py-4 px-4">
          {loading ? (
            <Spinner color="warning" />
          ) : (
            <button
              onClick={handleResendOTP}
              disabled={timer > 0}
              className={`px-3 py-2 w-full rounded-lg font-bold hover:transition-transform hover:scale-105 duration-300 cursor-pointer 
              ${
                timer > 0
                  ? "bg-gray-500 text-gray-300 cursor-not-allowed"
                  : "bg-primary text-black"
              }`}
            >
              {timer > 0 ? `Resend OTP in ${timer}s` : "Resend OTP"}
            </button>
          )}
        </div>

        {/* pop up */}
        {isOpen && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-600 opacity-50">
            <span>
              <Spinner color="warning" aria-label="warning example" size="xl" />
            </span>
          </div>
        )}
      </div>
    </section>
  );
};

export default ActivateAccount;
