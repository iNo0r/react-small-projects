import { useEffect, useRef, useState } from "react";
import { FiEdit, FiDelete } from "react-icons/fi";

const App10 = () => {
  // const [todos, setTodos] = useState([{ todo: "hi", id: "test" }]);
  const [todos, setTodos] = useState([]);
  const isloaded = useRef(false);

  const [inputStatus, setInputStatus] = useState("new"); // new, edit

  const [todo, setTodo] = useState("");
  const temporaryId = useRef("");
  // const [todos, setTodos] = useState([]);

  const fetchLocalStorage = () => {
    let data = localStorage.getItem("todos");
    setTodos(JSON.parse(data));
    isloaded.current = true;
  };

  const updateLocalStorage = () => {
    let dataToAdd = JSON.stringify(todos);
    localStorage.setItem("todos", dataToAdd);
  };
  function addNewTodo(e) {
    e.preventDefault();
    if (todo) {
      let timeNow = new Date();
      setTodos((prev) => {
        let newArray = [...prev];
        newArray.push({ todo: todo, id: timeNow.getTime() });
        setTodo("");
        return newArray;
      });
    }
  }

  function deleteItem(itemId) {
    setTodos((prev) => {
      let prevTodos = [...prev];
      let toBeDeletedItemIndex = prevTodos.findIndex((item) => {
        return item.id === itemId;
      });
      prevTodos.splice(toBeDeletedItemIndex, 1);
      return prevTodos;
    });
  }

  function setEditSetteing(itemId) {
    setInputStatus("edit");
    let currentTodos = [...todos];
    let itemIndex = currentTodos.findIndex((item) => item.id === itemId);
    setTodo(currentTodos[itemIndex].todo);
    temporaryId.current = itemId;
  }

  function submitEditedTodo() {
    // console.log(temporaryId.current);
    setTodos((prev) => {
      let prevTodos = [...prev];
      let toBeDeletedItemIndex = prevTodos.findIndex((item) => {
        return item.id === temporaryId.current;
      });
      prevTodos.splice(toBeDeletedItemIndex, 1, {
        todo,
        id: temporaryId.current,
      });
      return prevTodos;
    });
    setInputStatus("new");
    setTodo("");
  }

  // useEffect(()=>{
  //   if(inputStatus === 'edit'){

  //   }

  // },[setInputStatus])

  useEffect(() => {
    // localStorage.setItem("todos", todos);
    // localStorage.clear();
    fetchLocalStorage();
    isloaded.current = true;
  }, []);
  // console.log(todos);
  useEffect(() => {
    if (isloaded.current) {
      updateLocalStorage();
    }
  }, [todos]);
  return (
    <div className="pn-app-container h-screen w-screen bg-stone-300 absolute top-0">
      <div className="pn-main-c p-8 bg-stone-200 shadow-md max-w-lg mt-28 mx-auto rounded flex flex-col gap-6 hover:shadow-xl transition-all">
        <h1 className=" capitalize text-3xl font-medium text-center ">
          list of things
        </h1>
        <form className="flex  justify-center">
          <input
            type="text"
            className=" rounded-l p-1 pl-3  w-[60%] outline-none text-sm "
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />

          {inputStatus === "new" && (
            <button
              className=" rounded-r bg-slate-400 text-white text-xs px-2"
              onClick={addNewTodo}
            >
              Add
            </button>
          )}
          {inputStatus === "edit" && (
            <button
              className=" rounded-r bg-slate-400 text-white text-xs px-2"
              onClick={submitEditedTodo}
            >
              Edit
            </button>
          )}
        </form>

        <div className="pn-things-list flex flex-col gap-y-4">
          {todos.map((item) => {
            return (
              <div
                className="pn-thing w-full  flex items-center gap-x-2"
                key={item.id}
              >
                <p className="w-full capitalize"> {item.todo} </p>
                <FiEdit
                  className=" hover:text-green-600 cursor-pointer "
                  onClick={() => setEditSetteing(item.id)}
                />
                <FiDelete
                  onClick={() => deleteItem(item.id)}
                  className=" hover:text-red-600 cursor-pointer "
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App10;
