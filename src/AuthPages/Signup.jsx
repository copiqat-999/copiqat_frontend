import { FaEye, FaEyeSlash, FaArrowLeftLong } from "react-icons/fa6";
import { useEffect, useState } from "react";
// import { countryOptions, countryData } from "../utils/countries";
import { IoIosArrowDown } from "react-icons/io";
import { Spinner } from "flowbite-react";

const Signup = () => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password2: "",
  });
  // const [country, setCountry] = useState("Liberia");

  useEffect(() => {
    console.log(formData);
  });

  return (
    <section className="container mx-auto min-h-screen overflow-y-auto flex flex-col">
      <div className="w-full min-h-screen flex flex-col items-center justify-center py-8 my-auto px-2  ">
        {/* main form */}
        <div className="border-1 border-gray-500 w-full md:w-[60%] lg:w-[60%] xl:w-[40%] flex flex-col py-8 px-6 md:px-8 rounded-lg">
          <form>
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
                  onChange={(e) =>
                    setFormData({ ...formData, first_name: e.target.value })
                  }
                  className="py-3 px-4 w-full bg-whyCard hover:border-1 hover:border-primary placeholder:text-sm  focus focus:ring-0 focus:outline-0 rounded-xl"
                  type="first_name"
                  name="first_name"
                  id=""
                />
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
                  onChange={(e) =>
                    setFormData({ ...formData, last_name: e.target.value })
                  }
                  className="py-3 px-4 w-full bg-whyCard hover:border-1 hover:border-primary placeholder:text-sm  focus focus:ring-0 focus:outline-0 rounded-xl"
                  type="last_name"
                  name="last_name"
                  id=""
                />
              </div>
            </div>

            {/* email form */}
            <div className="flex flex-col ">
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
            </div>

            {/* country form */}
            {/* <div className="flex flex-col w-full pt-4">
              <label
                className="text-sm font-semibold py-2 text-white"
                htmlFor="email"
              >
                Country
              </label>
              <div className="relative flex w-full ">
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full border-none rounded-lg bg-whyCard flex items-start justify-start px-2 text-sm text-white font-semibold py-3 focus:outline-none focus:ring-2 focus:ring-primary appearance-none pr-8"
                >
                  {countryOptions.map((countries) => (
                    <option value={countries.label}>{countries.label}</option>
                  ))}
                </select>
                <IoIosArrowDown
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white pointer-events-none"
                  size={20}
                />
              </div>
            </div> */}
            {/* phone form */}
            {/* <div className="flex flex-col w-full pt-4">
              <label
                className="text-sm font-semibold py-2 text-white"
                htmlFor="phone"
              >
                Phone
              </label>
              <div className="flex w-full gap-x-1">
                <div className="relative flex w-[30%] md:w-[20%] ">
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full border-none rounded-lg bg-whyCard flex items-start justify-start px-2 text-sm text-white font-semibold py-3 focus:outline-none focus:ring-2 focus:ring-primary appearance-none pr-8"
                  >
                    {countryData.map((countries) => (
                      <option value={countries.code}>{countries.code}</option>
                    ))}
                  </select>
                  <IoIosArrowDown
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white pointer-events-none"
                    size={15}
                  />
                </div>
                
                <input
                  placeholder="000-000-000"
                  className="py-3 px-4 w-[80%] text-sm bg-whyCard hover:border-1 hover:border-primary  focus focus:ring-0 focus:outline-0 rounded-xl"
                  type="tel"
                  name="phone"
                  id=""
                />
              </div>
            </div> */}

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
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="py-3 px-4 w-full bg-whyCard border-none outline-0  focus:ring-0 rounded-xl"
                  type={visible ? "text" : "password"}
                  name="password"
                  id=""
                />

                <button className="flex items-center">
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
                </button>
              </div>
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

                <button className="flex items-center">
                  {visible2 ? (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setVisible2(!visible);
                      }}
                    >
                      <FaEyeSlash className="text-lg text-white" />
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setVisible2(!visible);
                      }}
                    >
                      <FaEye className="text-lg text-white" />
                    </button>
                  )}
                </button>
              </div>
            </div>

            {/* submit button */}
            <div className="py-8">
              {loading ? (
                <Spinner color="success" size="xl" />
              ) : (
                <button
                  type="submit"
                  className="w-full py-3 text-sm font-bold bg-primary text-black rounded-lg "
                >
                  Sign up
                </button>
              )}
            </div>

            <div className="flex gap-x-2 items-center justify-center text-sm font-light py-2">
              <span>Already have an account? </span>
              <button className="text-primary cursor-pointer hover:text-primary/70">
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
