import React, { useState } from "react";
import {
  Grid,
} from "@material-ui/core";
import AddTask from "./AddTask";
import Number from "./Tasks/Number";
import Text from "./Tasks/Text";
import TextMultiline from "./Tasks/TextMultiline";
import { TaskInterface } from "./Tasks/TaskInterfaces";
import ToDoListStyle from "./ToDoListStyle";
import { TASK_TYPES } from "./constants";

function ToDoList(): React.ReactElement {
  const classes = ToDoListStyle();
  const [tasks, setTasks] = useState<TaskInterface[]>([]);

  function renderTask(task: TaskInterface) {
    switch (task.type) {
    case TASK_TYPES.NUMBER:
      return (
        <Number
          description={task.description}
          onDeletion={() => handleDeletion(task.id)}
          checked={task.checked}
          onCheck={() => handleCheck(task.id)}
        />
      );
    case TASK_TYPES.MULTILINE:
      return (
        <TextMultiline
          description={task.description}
          onDeletion={() => handleDeletion(task.id)}
          checked={task.checked}
          onCheck={() => handleCheck(task.id)}
        />
      );
    case TASK_TYPES.TEXT:
    default:
      return (
        <Text
          description={task.description}
          onDeletion={() => handleDeletion(task.id)}
          checked={task.checked}
          onCheck={() => handleCheck(task.id)}
        />
      );
    }
  }

  function handleTaskAdd(newTask: TaskInterface): void {
    const newTasks: TaskInterface[] = [...tasks, newTask];
    setTasks(newTasks);
  }
  function handleDeletion(id: string): void {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }

  function handleCheck(id: string): void {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return ({
          ...task,
          checked: !task.checked,
        });
      }
      return task;
    });
    setTasks(newTasks);
  }

  return (
    <Grid container>
      <Grid container item sm={12}>
        <AddTask handleTaskAdd={handleTaskAdd} />
      </Grid>
      <Grid container item sm={12} justify="center" className={classes.wrapperTasks}>
        {tasks.map((task) => (
          <Grid container item sm={12} key={task.id} className={classes.wrapperTask}>
            {renderTask(task)}
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default ToDoList;
