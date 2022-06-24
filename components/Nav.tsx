import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuAlt3Icon, XIcon } from "@heroicons/react/outline";
import Logo from "../assets/logo.svg";

const navigation = [
  { name: "Features", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Help", href: "#" },
  { name: "Log In", href: "#" },
];

export default function Nav(): React.ReactElement {
  return (
    <Popover>
      {({ open }) => (
        <nav className="container mx-auto  flex h-16 text-gray-800 items-center px-4 sm:px-0 pt-6 md:pt-0">
          <a
          className="flex items-center mr-auto pr-4 hover:bg-gray-100 rounded-md focus:outline-none focus:ring-2 ring-gray-700"
          href="#"
        >
          <Logo className="h-12 w-12" />
            <span className="font-semibold text-2xl uppercase text-gray-800">Logo</span>
        </a>
        <div className="hidden md:block md:space-x-4 lg:space-x-8">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="p-3 align-middle inline-block font-semibold hover:text-blue-700 hover:bg-gray-100 rounded-md focus:outline-none focus:ring-2 ring-gray-700"
          >
            {item.name}
          </a>
        ))}
        <a
          className="py-3 px-8 align-middle inline-block font-semibold bg-blue-300 text-gray-900 rounded-md focus:outline-none focus:ring-2 ring-gray-700"
          href="#"
        >
          Get Started
        </a>
      </div>
      <Popover.Button className="bg-block md:hidden white  rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 ring-gray-700">
      <span className="sr-only">Close main menu</span>
        <MenuAlt3Icon className="h-6 w-6" aria-hidden="true" />
      </Popover.Button>

}