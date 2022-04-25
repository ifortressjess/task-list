import React from "react";

function Todolist({ items, onItemClick, deleteItems, editModalUI }) {
  return (
    <div>
      <h2 className="text-center text-4xl pb-5">Todo Checklist</h2>
      <div>
        <div>
          {items && items.length < 0 && (
            <div className="text-center py-20 text-3xl text-gray-200">
              No Todos to show
            </div>
          )}
        </div>
        <div>
          {items && items.length > 0 ? (
            <div className="grid grid-cols-4 gap-4">
              {items &&
                items.map((todo) => {
                  const passedObject = {
                    id: todo.id,
                    text: todo.text,
                    done: todo.done,
                  };
                  return (
                    <div
                      key={todo.id}
                      className="border-gray-200 border-2 shadow-xl m-4 p-3 h-32 rounded-lg relative"
                    >
                      <div>
                        {/* HOVER OPTIONS */}
                        <div
                          className={`cursor-pointer absolute inset-0 z-10 ${
                            todo.done ? "bg-[#2cc2a5]" : "bg-[#dbe9fd]"
                          } text-center flex flex-col items-center h-full justify-center opacity-0 hover:opacity-100 bg-opacity-100 duration-300`}
                        >
                          <div className="flex">
                            <div className="pr-5">
                              <button
                                onClick={() => editModalUI(todo.id)}
                                className="px-4 py-2 text-white bg-[#0243eb] rounded-md hover:bg-blue-900"
                              >
                                Edit
                              </button>
                            </div>
                            <div>
                              <button
                                onClick={() => deleteItems(todo.id)}
                                className="px-4 py-2 text-white bg-[#0243eb] rounded-md hover:bg-red-900"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                          {todo.done ? (
                            <></>
                          ) : (
                            <div className="flex mt-5">
                              <button
                                onClick={() =>
                                  onItemClick(passedObject, onItemClick)
                                }
                                className="border rounded-md bg-[#0243eb] text-white text-center font-bold border-[#0243eb] py-1 px-10"
                              >
                                Mark as done
                              </button>
                            </div>
                          )}
                        </div>
                        <div>
                          <h1 className="text-2xl font-bold">{todo.text}</h1>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          ) : (
            <div className="text-center py-20 text-3xl text-gray-200">
              <i className="fa fa-calendar-check pr-2"></i>No Todos to show
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Todolist;
