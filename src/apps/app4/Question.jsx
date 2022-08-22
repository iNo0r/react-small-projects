import { useState } from "react";

const Question = ({ item }) => {
  const [isText, setIsText] = useState(false);

  //   const item = {
  //     id: 1,
  //     title: "Do I have to allow the use of cookies?",
  //     info: "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
  //   };

  return (
    <article className=" flex flex-col space-y-4 shadow-md shadow-slate-300 px-5 py-2 rounded-sm transition-all  duration-1000">
      <header className=" flex  justify-between items-center">
        <h3 className=" font-medium  ">{item.title}</h3>
        <button
          className=" h-8 w-8 rounded-full text-red-900 flex justify-center items-center bg-slate-300"
          onClick={() => setIsText(!isText)}
        >
          {isText ? "-" : "+"}
        </button>
      </header>

      {isText && (
        <p className=" text-sm text-gray-500 transition-all  duration-1000">
          {item.info}
        </p>
      )}
    </article>
  );
};

export default Question;
