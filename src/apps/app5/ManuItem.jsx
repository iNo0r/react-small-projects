const ManuItem = ({ item }) => {
  return (
    <article className="pn-list-item flex flex-col gap-y-4 md:gap-x-4 md:flex-row max-w-[400px] md:max-w-xl xl:w-1/2  ">
      <div
        className="  h-[12.5rem] bg-yellow-200 bg-clip-padding bg-cover p-[10px] border-[4px] border-yellow-500 md:w-1/3 md:min-w-[225px]"
        style={{ backgroundImage: `url(${item.img})` }}
      ></div>
      <div className="pn-details flex flex-col gap-y-3">
        <header className="flex justify-between border-b-[1px] border-dotted border-b-neutral-500 pb-1">
          <h4 className=" font-medium capitalize "> {item.title} </h4>{" "}
          <h4 className=" text-yellow-500"> $ {item.price}</h4>
        </header>
        <p className=" text-gray-400 text-xs">{item.desc}</p>
      </div>
    </article>
  );
};

export default ManuItem;
