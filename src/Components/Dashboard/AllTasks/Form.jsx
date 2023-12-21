import { useContext, useRef } from "react";
import DrgDrpContext from "../../../Provider/DragDropProvider/DragDropProvider";

const Form = ({ columnId }) => {
  const { addData, endEditing } = useContext(DrgDrpContext);
  let newTask = useRef(null);
  const handleAddClick = () => {
    endEditing(columnId);
    if (newTask.value === "") {
      alert("Task cannot be empty!");
    } else {
      addData(columnId, newTask.value);
    }
  };

  return (
    <form className="card-content bg-form swing-in-bottom-bck">
      <input
        autoFocus
        className="input"
        type="text"
        placeholder="Enter your task here..."
        ref={(val) => (newTask = val)}
        defaultValue=""
        minLength="2"
        maxLength="60"
      />
      <button
        type="button"
        className="button has-text-white swing-in-bottom-bck"
        onClick={handleAddClick}
      >
        Add Task
      </button>
    </form>
  );
};

export default Form;
