import React from "react";

function AddTodo({ handleChangeText, text, addTodo }) {
  return (
    <div className="flex justify-between m-5">
      <div className="w-1/2">
        <label className="text-[#2e384] text-lg">Todo: </label>
        <input
          className="border-b-2 border-blue-300 w-full outline-none pt-4"
          placeholder="Todo name ..."
          onChange={(e) => handleChangeText(e.target.value)}
          value={text}
          type="text"
        />
      </div>
      <div className="w-1/2 flex justify-end items-center pt-4">
        <button
          onClick={() => addTodo()}
          className="border rounded-md bg-[#0243eb] text-white text-center font-bold border-[#0243eb] py-1 px-10"
        >
          Add Todo
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
