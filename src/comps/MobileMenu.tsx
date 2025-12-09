import burger from "/icon-menu.svg";
import close from "/icon-close.svg";
import { useState } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      {isOpen && (
        <div className="absolute top-0 right-0 left-0 z-20 h-full bg-black opacity-30"></div>
      )}
      <button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <img src={burger} alt="Burger icon" />
      </button>
      {isOpen && (
        <div className="absolute top-0 left-0 z-20 flex h-full w-[65%] flex-col gap-8 bg-white p-8">
          <button
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <img src={close} alt="" />
          </button>
          <ul className="flex flex-col gap-6 font-bold">
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
}
