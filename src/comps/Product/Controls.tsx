import { useCartContext } from "../CartProvider";
import minus from "/icon-minus.svg";
import plus from "/icon-plus.svg";

export default function Controls() {
  const { cart, handleCart } = useCartContext();
  const id = 1;
  const itemInCart = cart?.find((item) => item.id === id);
  console.log(cart);

  return (
    <div className="flex flex-col gap-3">
      <div className="bg-my-light-grayish-blue flex flex-row items-center justify-between rounded-md px-3 py-4">
        <button
          onClick={() => {
            handleCart(id, "minus");
          }}
        >
          <img src={minus} alt="Minus icon" />
        </button>
        <p className="font-bold">{itemInCart ? itemInCart.quantity : "0"}</p>
        <button
          onClick={() => {
            handleCart(id, "plus");
          }}
        >
          <img src={plus} alt="Plus icon" />
        </button>
      </div>
      <button className="bg-my-orange text-my-very-dark-blue shadow-my-light-orange flex w-full flex-row items-center justify-center gap-3 rounded-md p-3 font-bold shadow-[0px_10px_15px_0px]">
        Add to cart
      </button>
    </div>
  );
}
