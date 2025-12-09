import logo from "/logo.svg";
import cart from "/icon-cart.svg";
import avatar from "/image-avatar.png";
import MobileMenu from "./MobileMenu";
import Cart from "./Cart";
import { useState } from "react";

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <div className="border">
      <header className="bg-my-white flex flex-row items-center justify-between p-6">
        <div className="flex flex-row items-center gap-4">
          <MobileMenu />
          <div>
            <img src={logo} alt="Logo of the company" />
          </div>
        </div>
        <div className="flex flex-row items-center gap-4">
          <button
            onClick={() => {
              setIsCartOpen((pS) => !pS);
            }}
          >
            <img src={cart} alt="Cart logo" />
          </button>
          <div className="w-8">
            <img src={avatar} alt="Avatar of the user" />
          </div>
        </div>
      </header>
      {isCartOpen && <Cart />}
    </div>
  );
}
