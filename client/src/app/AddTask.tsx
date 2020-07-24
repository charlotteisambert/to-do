import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useMutation } from "@apollo/client";
import AddTaskStyle from "./AddTaskStyle";
import { TASK_TYPES, TASK_TYPES_NAMES } from "./constants";
import {
  getTasks as GET_TASKS,
  createTask as CREATE_TASK,
} from "../graphql";

function AddTask(): React.ReactElement {
  const [description, setDescription] = useState<string>("");
  const [type, setType] = useState<string>(TASK_TYPES.TEXT);
  const [error, setError] = useState<string | null>();
  const classes = AddTaskStyle();
  const [addTask] = useMutation(CREATE_TASK, {
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
        tasks: [...tasksData.tasks, data.addTask],
      },
    });
  }

  function handleTaskTypeChange(event: React.ChangeEvent<HTMLSelectElement>): void {
    setType(event.currentTarget.value);
    setDescription("");
  }

  function handleTaskAdd(description: string, type: string) {
    addTask({
      variables: {
        NewTaskInput: {
          description,
          type,
        },
      },
    });
  }

  function onTaskAdd() {
    if (!description) {
      setError("Add a description to your to-do");
      return;
    }
    handleTaskAdd(description, type);
    // handleTaskAdd({
    //   description,
    //   id: generateId(),
    //   type,
    //   checked: false,
    // });
    setDescription("");
    if (error) {
      setError(null);
    }
  }

  function renderInput(type: string) {
    switch (type) {
    case TASK_TYPES.NUMBER:
      return (
        <TextField
          type={type}
          value={description}
          onChange={(event) => setDescription(event.currentTarget.value)}
          error={!!error}
        />
      );
    case TASK_TYPES.TEXT_MULTILINE:
      return (
        <TextField
          type={type}
          value={description}
          onChange={(event) => setDescription(event.currentTarget.value)}
          error={!!error}
          multiline
          rows="4"
          inputProps={{ maxLength: 200 }}
        />
      );
    case TASK_TYPES.TEXT:
    default:
      return (
        <TextField
          type={type}
          value={description}
          onChange={(event) => setDescription(event.currentTarget.value)}
          error={!!error}
          inputProps={{ maxLength: 40 }}
        />
      );
    }
  }

  return (
    <Grid container item sm={12} className={classes.wrapperAddTAsk}>
      <Grid container item sm={12}>
        <Typography variant="h5" color="textPrimary">Add a to-do: </Typography>
      </Grid>
      <Grid container item sm={12} className={classes.wrapperDescription}>
        <Grid container item sm={3}>
          <Typography variant="body1" color="textPrimary">Description: </Typography>
        </Grid>
        <Grid container item sm={8}>
          {renderInput(type)}
        </Grid>
      </Grid>
      <Grid container item sm={12} className={classes.wrapperType} alignItems="center">
        <Grid container item sm={3}>
          <Typography variant="body1" color="textPrimary">Type: </Typography>
        </Grid>
        <Grid container item sm={4}>
          <FormControl color="primary">
            <NativeSelect
              value={type}
              onChange={handleTaskTypeChange}
              name="type"
            >
              <option value={TASK_TYPES.TEXT}>
                {" "}
                {TASK_TYPES_NAMES.TEXT}
                {" "}
              </option>
              <option value={TASK_TYPES.TEXT_MULTILINE}>
                {" "}
                {TASK_TYPES_NAMES.TEXT_MULTILINE}
                {" "}
              </option>
              <option value={TASK_TYPES.NUMBER}>
                {" "}
                {TASK_TYPES_NAMES.NUMBER}
                {" "}
              </option>
            </NativeSelect>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container item sm={12} justify="center" alignItems="center" className={classes.wrapperError}>
        <Grid container item sm={10} justify="center" alignItems="center">
          <Typography variant="body1" color="error">
            {error}
          </Typography>
        </Grid>
        <Grid container item sm={2} justify="flex-end">
          <Button variant="outlined" size="medium" color="primary" onClick={onTaskAdd}>
            Add
          </Button>
        </Grid>
      </Grid>
    </Grid>

  );
}

export default AddTask;
