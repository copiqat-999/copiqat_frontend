import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
// import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
// import { FaArrowDown } from "react-icons/fa";
import clsx from "clsx";
import { useState } from "react";
import { FaArrowDown, FaCheck } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const time = [
  { id: 1, name: "1 Hour" },
  { id: 2, name: "2 Hours" },
  { id: 3, name: "3 Hours" },
  { id: 4, name: "4 Hours" },
  { id: 5, name: "5 Hours" },
];

const Timeframe = () => {
  const [selected, setSelected] = useState(time[1]);
  return (
    <div>
      <Listbox value={selected} onChange={setSelected}>
        <ListboxButton
          className={clsx(
            "flex justify-between items-center bg-whyCard px-2 w-full rounded-lg py-3 "
          )}
        >
          {selected.name}
          <IoIosArrowDown className="text-xl text-white" />
        </ListboxButton>
        <ListboxOptions
          anchor="bottom start"
          transition
          className={clsx(
            "w-(--button-width) rounded-xl border border-white/5 bg-whyCard p-1 [--anchor-gap:--spacing(1)] focus:outline-none",
            "transition duration-100 ease-in data-leave:data-closed:opacity-0"
          )}
        >
          {time.map((person) => (
            <ListboxOption
              key={person.name}
              value={person}
              className="group flex cursor-default items-center gap-2 rounded-lg px-3 py-1.5 select-none data-focus:bg-white/10"
            >
              <FaCheck />
              <div className="text-sm/6 text-white">{person.name}</div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
};

export default Timeframe;
