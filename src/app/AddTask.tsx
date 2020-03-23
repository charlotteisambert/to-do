import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddTaskStyle from "./AddTaskStyle";
import { TaskInterface } from "./TaskInterfaces";
import { TASK_TYPES } from "./constants";

interface AddTaskrops {
  handleTaskAdd: (task: TaskInterface) => void
}

function AddTask({
  handleTaskAdd,
}: AddTaskrops): React.ReactElement {
  const [description, setDescription] = useState<string>("");
  const [type, setType] = useState<string>("text");
  const [error, setError] = useState<string | null>();
  const classes = AddTaskStyle();

  function handleTaskTypeChange(event: React.ChangeEvent<HTMLSelectElement>): void {
    setType(event.currentTarget.value);
    setDescription("");
  }

  function onTaskAdd() {
    if (!description) {
      setError("Please add a description to your to-do");
      return;
    }
    handleTaskAdd({
      description,
      id: generateId(),
      type,
      checked: false,
    });
    setDescription("");
    if (error) {
      setError(null);
    }
  }

  function generateId(): string {
    const key = new Date().valueOf();
    return key.toString();
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
    case TASK_TYPES.MULTILINE:
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
              <option value={TASK_TYPES.TEXT}>Small text</option>
              <option value={TASK_TYPES.MULTILINE}>Big text</option>
              <option value={TASK_TYPES.NUMBER}>Number</option>
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
