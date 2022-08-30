import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const CartItem = ({ data, dispatch }) => {
  return (
    <article className="pn-device-item flex justify-between ">
      <div className="flex  gap-x-4">
        <div
          className="pn-device-img h-20 w-20 bg-center bg-cover "
          style={{
            backgroundImage: `url(${data.img})`,
          }}
        ></div>
        <div className="pn-device-info flex flex-col justify-between items-start">
          <h4 className="tracking-widest">{data.title}</h4>
          <h4 className="pn-device-price tracking-widest">${data.price}</h4>
          <button className="tracking-widest text-xs text-blue-500">
            remove
          </button>
        </div>
      </div>
      <div className="pn-items-count flex flex-col justify-between items-center justify-self-end ">
        <IoIosArrowUp
          onClick={() => dispatch({ type: "increaseAmount", itemId: data.id })}
          className="text-blue-500  cursor-pointer text-lg hover:text-blue-300"
        />
        <div>{data.amount}</div>
        <IoIosArrowDown
          onClick={() => dispatch({ type: "descreasAmount", itemId: data.id })}
          className="text-blue-500  cursor-pointer text-lg hover:text-blue-300 "
        />
      </div>
    </article>
  );
};

export default CartItem;
