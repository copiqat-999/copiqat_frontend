import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <section className="container mx-auto flex flex-col gap-y-3 px-2 py-8 mt-2 items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8">
        {/* logo div */}
        <div className="w-full flex flex-col gap-y-2 md:w-[300px] items-center justify-center text-center">
          <img src={logo} className="object-cover" alt="" />
          <span className="text-lg font-semibold">
            The leading copy trading platform for smart investors.
          </span>
        </div>

        {/* Shortcuts */}
        <div className="flex flex-row g py-6 items-start justify-around w-full md:justify-around">
          <div className="text-sm text-white font-normal flex flex-col gap-y-4 w-fit">
            <h3 className="text-xl font-semibold text-primary">Platform</h3>
            <span>Features</span>
            <span>Security</span>
          </div>
          <div className="text-sm text-white font-normal flex flex-col gap-y-4 w-fit">
            <h3 className="text-xl font-semibold text-primary">Resources</h3>
            <span>Documentation</span>
            <span>Tutorials</span>
            <span>Blog</span>
          </div>
          <div className="text-sm text-white font-normal flex flex-col gap-y-4 w-fit">
            <h3 className="text-xl font-semibold text-primary">Support</h3>
            <span>Help Center</span>
            <span>Contact Us</span>
            <span>Legal</span>
          </div>
        </div>
      </div>

      {/* copyrights */}
      <div className="flex items-center justify-center mt-4 py-3">
        <span>© 2024 CopyTrade. All rights reserved.</span>
      </div>
    </section>
  );
};

export default Footer;
