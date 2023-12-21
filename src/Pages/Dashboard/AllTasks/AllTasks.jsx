import { useContext } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import DrgDrpContext from "../../../Provider/DragDropProvider/DragDropProvider";
import Column from "../../../Components/Dashboard/AllTasks/Column";

const AllTasks = () => {
  const { state, onDragEnd } = useContext(DrgDrpContext);
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="section bg-full">
        <div className="container bg-blue">
          <div className="columns is-multiline is-mobile">
            {state.columnsOrder.map((columnId, index) => {
              const column = state.columns[columnId];
              const isEditing = column.isEditing;
              const task = column.tasksOrder.map(
                (taskId) => state.tasks[taskId]
              );
              return (
                <Column
                  key={column.id}
                  tasks={task}
                  index={index}
                  column={column}
                  isEditing={isEditing}
                />
              );
            })}
          </div>
        </div>
      </div>
    </DragDropContext>
  );
};

export default AllTasks;
