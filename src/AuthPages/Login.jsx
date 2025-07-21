import { FaEye, FaEyeSlash, FaArrowLeftLong } from "react-icons/fa6";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

const Login = () => {
  const [visible, setVisible] = useState(false);

  return (
    <section className="container mx-auto min-h-screen overflow-y-auto flex flex-col">
      <div className="w-full min-h-screen flex flex-col items-center justify-center py-4 my-auto px-2  ">
        {/* main form */}
        <div className="border-1 border-gray-500 w-full md:w-[60%] lg:w-[60%] xl:w-[40%] flex flex-col py-12 px-6 md:px-8 rounded-lg">
          <form>
            <div className="flex w-full items-center justify-center">
              <h1 className="text-2xl font-bold text-primary py-3">
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
                className="py-3 px-4 w-full bg-whyCard hover:border-1 hover:border-primary  focus focus:ring-0 focus:outline-0 rounded-xl"
                type="email"
                name="email"
                id=""
              />
            </div>
            {/* email password */}
            <div className="flex flex-col py-4">
              <label
                className="text-sm font-semibold py-2 text-white"
                htmlFor="password"
              >
                Password
              </label>
              <div className="flex w-full bg-whyCard  hover:border-1 hover:border-primary rounded-xl pr-2 items-center">
                <input
                  placeholder="Enter your password"
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
              <div className="flex w-full justify-end py-1.5">
                <button className="text-sm font-semibold text-primary hover:text-primary/60 transition-colors duration-300">
                  forgot password?
                </button>
              </div>
            </div>

            {/* submit button */}
            <div className="py-8">
              <button className="w-full py-3 text-sm font-bold bg-primary text-black rounded-lg ">
                Login
              </button>
            </div>

            <div className="flex gap-x-2 items-center justify-center text-sm font-light py-2">
              <span>Don't have an account? </span>
              <button className="text-primary cursor-pointer hover:text-primary/70">
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
