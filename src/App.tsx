import CartProvider from "./comps/CartProvider";
import DataProvider from "./comps/DataProvider";
import Header from "./comps/Header";
import Product from "./comps/Product/Product";

export default function App() {
  return (
    <>
      <DataProvider>
        <CartProvider>
          <Header />
          <Product />
        </CartProvider>
      </DataProvider>
    </>
  );
}
