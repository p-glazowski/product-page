import { useCartContext } from "./CartProvider";
import SingleCartItem from "./SingleCartItem";

export default function Cart() {
  const { cart } = useCartContext();

  return (
    <div className="absolute top-23 right-3 left-3 z-10 rounded-md bg-white">
      <div className="p-5">
        <h3 className="font-bold">Cart</h3>
      </div>
      <div className="w-full border-b border-slate-200"></div>
      <div className="flex h-full items-center justify-center p-5">
        {cart?.length === 0 ? (
          <p className="text-my-dark-grayish-blue font-bold">
            Your cart is empty
          </p>
        ) : (
          cart?.map((item) => (
            <SingleCartItem
              key={item.id}
              id={item.id}
              quantity={item.quantity}
            />
          ))
        )}
      </div>
      <div className="p-5">
        <button className="bg-my-orange text-my-very-dark-blue w-full rounded-md p-4 font-bold">
          Checkout
        </button>
      </div>
    </div>
  );
}
