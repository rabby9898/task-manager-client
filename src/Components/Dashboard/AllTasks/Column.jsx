/* eslint-disable react/display-name */
import React from "react";
import AllTasks from "./AllTasks";
import AddTask from "./AddTask";
import { Droppable } from "react-beautiful-dnd";

const Column = React.memo(({ tasks, column, isEditing }) => {
  return (
    <div className="column is-marginless">
      <div className="card card-radius ">
        <div className="card-content">
          <p className="title is-5 has-text-white">{column.title}</p>
          <Droppable droppableId={column.id}>
            {(provided) => (
              <div
                className="list is-hoverable"
                {...provided.droppableProps}
                ref={provided.innerRef}
                // isDraggingOver={snapshot.isDraggingOver}
              >
                <AllTasks tasks={tasks} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
        <AddTask columnId={column.id} isEditing={isEditing} />
      </div>
    </div>
  );
});

export default Column;
