import { use, useState } from "react";
import "./App.css";
import { addtodo, editTodo, deleteTodo } from "./Slice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [task, setTask] = useState("");
  const [save, setsave] = useState(false);
  const [editId, setEditId] = useState(null);
  const [text, settext] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todo.list);

  return (
    <>
      <div>
        <div>
          <input
            type="text"
            value={task}
            placeholder="Enter Your Task"
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />{" "}
          <button
            style={{ display: save ? "block" : "none" }}
            className="save"
            onClick={() => {
              dispatch(editTodo({ id: editId, text: task }));
              setsave(false);
            }}
          >
            save Changes
          </button>
          <button
            onClick={() => {
              dispatch(addtodo(task));
              setTask("");
            }}
          >
            Add new Task
          </button>
        </div>

        <div>
          {list.map((todo) => {
            return (
              <div key={todo.id} className="list">
                <h2>{todo.text}</h2>
                <button
                  onClick={() => {
                    setTask(todo.text), setsave(true);
                    setTask(todo.text);
                    setEditId(todo.id);
                  }}
                >
                  Edit
                </button>{" "}
                <button onClick={() => dispatch(deleteTodo(todo.id))}>
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
