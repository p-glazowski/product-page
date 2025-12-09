import type { ReactNode } from "react";

interface PriceProps {
  children: ReactNode;
  discount: string;
}

export default function Price({ children, discount }: PriceProps) {
  const price = Number(children).toFixed(2);
  const reducedPrice = ((Number(children) * Number(discount)) / 100).toFixed(2);

  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-5">
        <p className="text-2xl font-bold">${reducedPrice}</p>
        <div className="bg-my-black rounded-md px-2 text-white">
          <p>{discount}%</p>
        </div>
      </div>
      <div className="relative">
        <p className="text-my-dark-grayish-blue font-bold">${price}</p>
        <div className="border-my-dark-grayish-blue absolute top-1/2 right-0 left-0 border"></div>
      </div>
    </div>
  );
}
