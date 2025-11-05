import { FaEye, FaEyeSlash, FaArrowLeftLong } from "react-icons/fa6";
import { useState } from "react";
import { useAuth } from "../utils/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Spinner } from "flowbite-react";
import { toast } from "react-toastify";

const Login = () => {
  const [visible, setVisible] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const { setAuth } = useAuth();
  const url = `${import.meta.env.VITE_API_BASE_URL}/api/auth/login/`;

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

      const data = response.data

      localStorage.setItem("access_token", response.data.access_token);
      localStorage.setItem("refresh_token", response.data.refresh_token);
      
      // ✅ Set the auth state
      setAuth({
        isAuthenticated: true,
        user: {
          email: data.email,
          full_name: data.full_name,
          kyc_verified: data.kyc_verified,
          referral_code: data.referral_code,
        },
      });

      if (response.data.kyc_verified) {
        navigate('/vault');
      } else {
        toast.info("Please complete KYC to access the vault.");
      }


      navigate("/kyc/personal-info");
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
              <h1 className="md:text-2xl text-xl font-bold text-primary py-3">
                Login into your account
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
                required={true}
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
            <div className="flex flex-col py-4">
              <label
                className="text-sm font-semibold py-2 text-white"
                htmlFor="password"
                required={true}
              >
                Password
              </label>
              <div className="flex w-full bg-whyCard  hover:border-1 hover:border-primary rounded-xl pr-2 items-center">
                <input
                  placeholder="Enter your password"
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
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

              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password[0]}
                </p>
              )}

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

              <div className="flex w-full justify-end py-1.5">
                <button onClick={(e) => {e.preventDefault(); navigate('/auth/password-reset')}} className="text-sm font-semibold text-primary hover:text-primary/60 transition-colors duration-300 cursor-pointer">
                  forgot password?
                </button>
              </div>
            </div>

            {/* submit button */}
            <div className="py-8 w-full flex items-center justify-center">
              {loading ? (
                <Spinner color="warning" size="xl" />
              ) : (
                <button
                  type="submit"
                  className="w-full py-3 text-sm font-bold bg-primary text-black rounded-lg hover:transition-transform hover:scale-105 duration-300 cursor-pointer "
                >
                  Sign in
                </button>
              )}
            </div>

            <div className="flex gap-x-2 items-center justify-center text-sm font-light py-2">
              <span>Don't have an account? </span>
              <button
                onClick={() => navigate("/auth/signup")}
                className="text-primary cursor-pointer hover:text-primary/70"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
