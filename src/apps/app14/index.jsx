import { BsHandbagFill } from "react-icons/bs";

import initialData from "./data";
import { useMemo, useReducer } from "react";
import CartItem from "./cartItem";

const cartReducer = (state, action) => {
  let currentState = [...state];
  let itemId = action.itemId;
  let itemdIndex = currentState.findIndex((item) => item.id === itemId);
  switch (action.type) {
    case "increaseAmount":
      currentState[itemdIndex].amount = currentState[itemdIndex].amount + 1;
      return currentState;
    case "descreasAmount":
      currentState[itemdIndex].amount = currentState[itemdIndex].amount - 1;
      if (currentState[itemdIndex].amount === 0) {
        return currentState.filter((item) => item.id !== itemId);
      }
      return currentState;
    case "removeItem":
      let updatedState = currentState.filter((item) => item.id !== itemId);
      return updatedState;
    case "clearList":
      return [];
  }
};

const App14 = () => {
  const [cartData, dispatch] = useReducer(cartReducer, initialData);

  const totalAmount = useMemo(() => {
    const total = cartData.reduce((prev, current) => {
      return prev + current.amount / 10;
    }, 0);
    return total * 10;
  }, [cartData]);

  const totalPrice = useMemo(() => {
    const total = cartData.reduce((prev, current) => {
      console.log(current);
      return prev + current.amount * current.price;
    }, 0);

    return total;
  }, [cartData]);

  const isEmpty = useMemo(() => {
    if (totalPrice) return false;
    return true;
  }, [totalPrice]);

  return (
    <div className="pn-app-c w-screen h-screen   ">
      <div className="pn-nav  w-full bg-blue-600  flex justify-center px-4 ">
        <div className="pn-nav-inner-c w-full max-w-3xl flex justify-between items-center py-4 ">
          <h1 className=" text-4xl font-semibold text-white"> useReducer</h1>
          <div className="pn-car-icon  h-full w-10 flex justify-center items-center relative">
            <BsHandbagFill className=" text-4xl text-white" />
            <div className="pn-items-count  absolute h-6 w-6 rounded-full bg-blue-300 text-white flex justify-center items-center -top-2 -right-1 ">
              {totalAmount}
            </div>
          </div>
        </div>
      </div>

      <div className="pn-content-c w-full max-w-2xl mt-20 mx-auto">
        <header className=" uppercase text-4xl tracking-widest font-bold text-center mb-8">
          your bag
        </header>
        <div className="pn-cart-items-list flex flex-col gap-y-8 mb-8 ">
          {isEmpty
            ? "no items"
            : cartData.map((item) => (
                <CartItem data={item} dispatch={dispatch} key={item.id} />
              ))}
        </div>
        <div className="pn-list-bottom flex flex-col items-center">
          <div className=" border-t-[1px] border-slate-200 w-full"></div>
          <div className="pn-total flex justify-between w-full pt-4 mb-8 font-semibold">
            <p>Total</p>
            <p>${totalPrice}</p>
          </div>
          <button
            className=" uppercase px-7 py-2 border border-red-500 font-light text-red-500 rounded transition-all hover:bg-red-200 "
            onClick={() => dispatch({ type: "clearList" })}
          >
            clear cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default App14;
