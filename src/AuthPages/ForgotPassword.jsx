import { FaEye, FaEyeSlash, FaArrowLeftLong } from "react-icons/fa6";
import { useState } from "react";
import { useAuth } from "../utils/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Spinner } from "flowbite-react";

const ForgotPassword = () => {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
  });
  const navigate = useNavigate();

  const { setAuth } = useAuth();
  const url = `${import.meta.env.VITE_API_BASE_URL}/api/auth/reset-password/`;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      console.log(response)

      
      setAuth({ isAuthenticated: false, user: { email: formData.email } });

      navigate("/auth/password-reset-confirm");
    } catch (error) {
      console.log(error.response);
      setErrors(error.response.data);
      setLoading(false);
    }
  };

  return (
    <section className="container mx-auto min-h-screen overflow-y-auto flex flex-col">
      <div className="w-full min-h-screen flex flex-col items-center justify-center py-4 my-auto px-2  ">
        {/* main form */}
        <div className="border-1 border-gray-500 w-full md:w-[60%] lg:w-[60%] xl:w-[40%] flex flex-col py-12 px-6 md:px-8 rounded-lg">
          <form onSubmit={handleSubmit}>
            <div className="flex w-full items-center justify-center">
              <h1 className="md:text-2xl text-lg font-bold text-primary py-3">
                Enter your email to reset your password
              </h1>
            </div>
            {/* email form */}
            <div className="flex flex-col pt-8">
              <label
                className="text-sm font-semibold py-2 text-white"
                htmlFor="email"
              >
                Email
              </label>
              <input
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
            </div>
            {/* email password */}
            
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

            {/* submit button */}
            <div className="py-8 w-full flex items-center justify-center">
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

export default ForgotPassword;
