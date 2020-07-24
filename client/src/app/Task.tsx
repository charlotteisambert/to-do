import React from "react";
import Number from "./Tasks/Number";
import Text from "./Tasks/Text";
import TextMultiline from "./Tasks/TextMultiline";
import { TaskInterface } from "./Tasks/TaskInterfaces";
import { TASK_TYPES } from "./constants";

interface TaskProps {
    task: TaskInterface;
}

function Task({ task }: TaskProps): React.ReactElement {
  function renderTask(task: TaskInterface) {
    switch (task.type) {
    case TASK_TYPES.NUMBER:
      return (
        <Number
          description={task.description}
          checked={task.checked}
          id={task.id}
        />
      );
    case TASK_TYPES.TEXT_MULTILINE:
      return (
        <TextMultiline
          description={task.description}
          checked={task.checked}
          id={task.id}
        />
      );
    case TASK_TYPES.TEXT:
    default:
      return (
        <Text
          description={task.description}
          checked={task.checked}
          id={task.id}
        />
      );
    }
  }

  return renderTask(task);
}

export default Task;
