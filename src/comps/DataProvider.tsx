import imageOne from "/image-product-1.jpg";
import imageTwo from "/image-product-2.jpg";
import imageThree from "/image-product-3.jpg";
import imageFour from "/image-product-4.jpg";
import { createContext, useContext, type ReactNode } from "react";

interface DataProviderProps {
  children: ReactNode;
}

interface DataProps {
  id: number;
  type: string;
  title: string;
  info: string;
  price: string;
  discount: string;
  img: {
    one: string;
    two: string;
    three: string;
    four: string;
  };
}

interface ContextProps {
  data: DataProps[];
}

const DataContext = createContext<ContextProps | undefined>(undefined);
export { DataContext };

export default function DataProvider({ children }: DataProviderProps) {
  const data: DataProps[] = [
    {
      id: 1,
      type: "sneaker company",
      title: "fall limited edition sneakers",
      info: `          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.`,
      price: "250",
      discount: "50",
      img: {
        one: imageOne,
        two: imageTwo,
        three: imageThree,
        four: imageFour,
      },
    },
  ];

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
}

export function useDataContext() {
  const dataContext = useContext(DataContext);
  if (!dataContext)
    throw new Error("This component needs a DataContext Provider!");

  return dataContext;
}
