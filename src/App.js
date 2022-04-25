import React, { useState } from "react";
import Todolist from "./components/Todolist";
import { v4 as uuidv4 } from "uuid";
import AddTodo from "./components/AddTodo";
import EditModal from "./components/EditModal";

function App() {
  const [items, setItems] = useState([]);

  //ADD TODO
  const [text, setText] = useState("");

  //EDIT TODO
  const [editModal, setEditModal] = useState(false);
  const [editId, setEditId] = useState("");
  const [editText, setEditText] = useState("");

  const editModalUI = (id) => {
    setEditModal(true);
    setEditId(id);
  };

  const closeModal = () => {
    setEditModal(false);
  };

  const handleChangeText = (e) => {
    setText(e);
  };

  // MARK AS DONE
  const onItemClick = (passedObject, onItemClick) => {
    console.log("onItemClick", onItemClick);
    alert(JSON.stringify(passedObject));

    const markDone = items.map((doneItems) => {
      return doneItems.id === passedObject.id
        ? { ...doneItems, done: true }
        : { ...doneItems };
    });

    setItems(markDone);
  };

  //CREATE NEW TODO
  const addTodo = () => {
    if (text === "") {
      alert("Input is required");
    } else {
      setText("");
      setItems([
        ...items,
        {
          id: uuidv4(),
          text: text,
          done: false,
        },
      ]);
    }
  };

  //DELETE TODO
  const deleteItems = (id) => {
    const newList = items.filter((todo) => {
      return todo.id !== id;
    });
    setItems(newList);
  };

  // //UPDATE TODO
  const editTodo = () => {
    const updatedItems = items.map((todo) => {
      if (todo.id === editId) {
        if (editText !== "") {
          todo.text = editText;
          setEditModal(false);
          setEditText("");
        }
      }
      return todo;
    });

    setItems(updatedItems);
  };

  return (
    <div>
      <AddTodo
        handleChangeText={handleChangeText}
        addTodo={addTodo}
        text={text}
      />
      <Todolist
        items={items}
        onItemClick={onItemClick}
        deleteItems={deleteItems}
        editModalUI={editModalUI}
      />
      {editModal ? (
        <EditModal
          closeModal={closeModal}
          editTodo={editTodo}
          setEditText={setEditText}
          editText={editText}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
