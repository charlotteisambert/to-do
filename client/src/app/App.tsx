import React from "react";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import AppStyle from "./AppStyle";
import ToDoList from "./ToDoList";

function App(): React.ReactElement {
  const classes = AppStyle();

  return (
    <Grid container justify="center">
      <Grid container item sm={5} className={classes.wrapperApp}>
        <Grid item sm={12} className={classes.wrapperTitle}>
          <Typography variant="h3" color="textPrimary" align="center" className={classes.title}>To-do list</Typography>
        </Grid>
        <Grid item container sm={12}>
          <ToDoList />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
