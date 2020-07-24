import React from "react";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import style from "./TaskStyle";
import { useMutation } from "@apollo/client";
import {
  deleteTask as DELETE_TASK,
  getTasks as GET_TASKS,
} from "./../../graphql";
import { TaskInterface } from "./TaskInterfaces";

export interface TaskProps {
  description: string;
  checked: boolean;
  taskType: string;
  pin: React.ReactElement;
  id: string;
}

function Task({
  description,
  checked,
  taskType,
  pin,
  id,
}: TaskProps): React.ReactElement {
  const classes = style();

  const [deleteTask] = useMutation(DELETE_TASK, {
    update(cache, { data }) {
      updateCache(cache, data);
    },
  });

  function updateCache(cache: any, data: any) {
    const tasksData = cache.readQuery({
      query: GET_TASKS,
    });
    cache.writeQuery({
      query: GET_TASKS,
      data: {
        tasks: tasksData.tasks.filter((task: TaskInterface) => task.id !== data.deleteTask.id),
      },
    });
  }

  function onDeletion() {
    deleteTask({
      variables: {
        id,
      }
    })
  }

  function onCheck() {
  }

  return (
    <Grid container item sm={12} className={classes.wrapperTask}>
      <Grid container item sm={12} justify="space-between">
        <Grid container item sm={1} justify="center" alignItems="center">
          {pin}
        </Grid>
        <Grid container item sm={1} justify="center" alignItems="center">
          <DeleteOutlineOutlinedIcon color="error" fontSize="small" onClick={onDeletion} className={classes.delete} />
        </Grid>
      </Grid>
      <Grid container item sm={12}>
        <Grid container item sm={2} alignItems="center" justify="center">
          <CheckCircleOutlineIcon fontSize="large" onClick={onCheck} className={checked ? classes.checked : classes.notChecked} />
        </Grid>
        <Grid container item sm={8}>
          <Typography variant="h5" color="textPrimary" className={classes.description}>{description}</Typography>
        </Grid>
      </Grid>
      <Grid container item sm={12} justify="center">
        <Grid container item sm={8} className={classes.wrapperType}>
          <Typography variant="body2" color="textPrimary">
            Type:
            {taskType}
          </Typography>
        </Grid>
      </Grid>

    </Grid>
  );
}

export default Task;
