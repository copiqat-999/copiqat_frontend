import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useState, useEffect } from "react";
// import { countryOptions, countryData } from "../utils/countries";
import { IoIosArrowDown } from "react-icons/io";
import { Spinner } from "flowbite-react";
import axios from "axios";
import { useAuth } from "../utils/AuthContext";
import { useNavigate, useSearchParams } from "react-router-dom";

const Signup = () => {
  const [visible, setVisible] = useState(false);
  const [errors, setErrors] = useState({});
  const [visible2, setVisible2] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    referal_code: "",
    password: "",
    password2: "",
  });
  const url = `${import.meta.env.VITE_API_BASE_URL}/api/auth/register/`;
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Extract referral code from URL
  useEffect(() => {
    const refCode = searchParams.get("ref");
    if (refCode) {
      setFormData((prev) => ({ ...prev, referral_code: refCode }));
    }
  }, [searchParams]);

  // const [country, setCountry] = useState("Liberia");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setErrors({});
      const response = await axios.post(url, formData);
      setAuth({ isAuthenticated: false, user: { email: formData.email } });
      console.log(response.data);
      setLoading(false);

      navigate("/auth/activate-account");
    } catch (error) {
      console.log(error.response);
      setErrors(error.response.data);
      setLoading(false);
    }
  };

  return (
    <section className="container mx-auto min-h-screen overflow-y-auto flex flex-col">
      <div className="w-full min-h-screen flex flex-col items-center justify-center py-8 my-auto px-2  ">
        {/* main form */}
        <div className="border-1 border-gray-500 w-full md:w-[60%] lg:w-[60%] xl:w-[40%] flex flex-col py-8 px-6 md:px-8 rounded-lg">
          <form onSubmit={handleSubmit}>
            <div className="flex w-full items-center justify-center">
              <h1 className="text-2xl font-bold text-primary py-2">
                Create an account
              </h1>
            </div>

            {/* first_name and last_name */}
            <div className="flex gap-x-3 py-4 w-full">
              <div className="flex flex-col ">
                <label
                  className="text-sm font-semibold py-2 text-white"
                  htmlFor="first_name"
                >
                  First name
                </label>
                <input
                  placeholder="Enter first name"
                  required={true}
                  onChange={(e) =>
                    setFormData({ ...formData, first_name: e.target.value })
                  }
                  className="py-3 px-4 w-full bg-whyCard hover:border-1 hover:border-primary placeholder:text-sm  focus focus:ring-0 focus:outline-0 rounded-xl"
                  type="first_name"
                  name="first_name"
                  id=""
                />
                {errors.first_name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.first_name[0]}
                  </p>
                )}
              </div>

              {/* lastName */}
              <div className="flex flex-col ">
                <label
                  className="text-sm font-semibold py-2 text-white"
                  htmlFor="last_name"
                >
                  Last Name
                </label>
                <input
                  placeholder="Enter last name"
                  required={true}
                  onChange={(e) =>
                    setFormData({ ...formData, last_name: e.target.value })
                  }
                  className="py-3 px-4 w-full bg-whyCard hover:border-1 hover:border-primary placeholder:text-sm  focus focus:ring-0 focus:outline-0 rounded-xl"
                  type="last_name"
                  name="last_name"
                  id=""
                />
                {errors.last_name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.last_name[0]}
                  </p>
                )}
              </div>
            </div>

            {/* email form */}
            <div className="flex flex-col ">
              <label
                className="text-sm font-semibold py-2 text-white"
                htmlFor="email"
                required={true}
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
                  placeholder="Enter your password"
                  required={true}
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
                  placeholder="Confirm password"
                  onChange={(e) =>
                    setFormData({ ...formData, password2: e.target.value })
                  }
                  className="py-3 px-4 w-full bg-whyCard border-none outline-0  focus:ring-0 rounded-xl"
                  type={visible2 ? "text" : "password"}
                  name="password"
                  id=""
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
              {errors.password2 && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password2[0]}
                </p>
              )}
            </div>

            {errors.non_field_errors && (
              <p className="text-red-500 text-sm mt-1">
                {errors.non_field_errors[0]}
              </p>
            )}
            {errors.referral_code && (
              <p className="text-red-500 text-sm mt-1">
                {errors.referral_code[0]}
              </p>
            )}

            {errors.detail && (
              <p className="text-red-500 text-sm mt-1">{errors.detail}</p>
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
                  Sign up
                </button>
              )}
            </div>

            <div className="flex gap-x-2 items-center justify-center text-sm font-light py-2">
              <span>Already have an account? </span>
              <button
                onClick={() => navigate("/auth/login")}
                className="text-primary cursor-pointer hover:text-primary/70 "
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
