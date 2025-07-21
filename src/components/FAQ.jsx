import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";

const faq = [
  {
    header: "What is copy trading and how does it work?",
    body: "Copy trading allows you to automatically replicate the trades of experienced traders. Once you choose a trader to follow, all their trades will be mirrored in your account based on your seleceted investment amount and risk level. ",
  },
  {
    header: "Do I need trading experience to use this platform?",
    body: "Not at all! Our platform is beginner-friendly. You can start by simply selecting a trader whose strategy matches your goals. No prior trading knowledge needed.",
  },
  {
    header: "How do I choose the trader to copy?",
    body: "You can browse through our marketplace of verified traders, filter by performance, risk level, and trading history, and view detailed stats to help you choose a trader that fits your strategy",
  },
  {
    header: "Can I stop copying a Trader anytime?",
    body: "Yes. You have full control over your account. You can stop copying a trader, withdraw funds, or switch to another trader anytime instanty without penalties",
  },
  {
    header: "Is my money safe on this platform?",
    body: "We use secure wallet infrastructure and advanced encryption to protect your funds. Your vault remain in your control. The platform or any external party cannot and does not have a way to take custody of your money. ",
  },
];

const FAQ = () => {
  return (
    <section className="container mx-auto py-12 flex px-2 mb-8">
      <div className="flex flex-col w-full justify-center items-center gap-8">
        <div className="flex items-center justify-center text-center">
          <h1 className="text-3xl font-bold text-primary">
            Frequently Asked Questions
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-x-8 place-content-center h-fit  w-full">
          {faq.map((items) => (
            <div className="w-full  divide-y divide-black rounded-xl bg-whyCard flex flex-col justify-center  h-fit ">
              <Disclosure as="div" className="px-6 py-8" defaultOpen={false}>
                <DisclosureButton className="group flex w-full items-start justify-between  shadow-2xl">
                  <span className="md:text-lg px-2 text-sm text-start  font-bold text-primary group-data-hover:text-primary/80">
                    {items.header}
                  </span>
                  <IoIosArrowDown className="text-lg  fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 text-sm text-white py-6 ">
                  {items.body}
                </DisclosurePanel>
              </Disclosure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
