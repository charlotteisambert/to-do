import React from "react";
import {
  Grid, Typography,
} from "@material-ui/core";
import AddTask from "./AddTask";
import ToDoListStyle from "./ToDoListStyle";
import { useQuery } from "@apollo/client";
import { getTasks as GET_TASKS } from "./../graphql";
import CircularProgress from '@material-ui/core/CircularProgress';
import Task from "./Task";

function ToDoList(): React.ReactElement {
  const classes = ToDoListStyle();
  const { loading, error, data } = useQuery(GET_TASKS);

  return (
    <Grid container>
      <Grid container item sm={12}>
        <AddTask />
      </Grid>
      <Grid container item sm={12} justify="center" className={classes.wrapperTasks}>
        {error && <Typography variant="body1" color="textPrimary" >error</Typography>}
        {loading && <CircularProgress />}
        {data && data.tasks.map((task: any) => (
          <Grid container item sm={12} key={task.id} className={classes.wrapperTask}>
            <Task task={task} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default ToDoList;
