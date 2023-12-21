import React, { useEffect } from "react";
import Task from "./Task";

// eslint-disable-next-line react/display-name
const AllTasks = React.memo(({ tasks }) => {
  useEffect(() => {}, [tasks]);
  return tasks.map((task, index) => (
    <Task key={task.id} task={task} index={index} />
  ));
});

export default AllTasks;
