import React from "react";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import { TaskProps } from "./TaskInterfaces";
import Task from "./Task";
import { TASK_TYPES_NAMES } from "../constants";

const style = {
  color: "#ffe807",
};

function Text({
  description,
  checked,
  id,
}: TaskProps): React.ReactElement {
  return (
    <Task
      description={description}
      checked={checked}
      taskType={TASK_TYPES_NAMES.TEXT}
      pin={
        <StarRoundedIcon style={style} />
      }
      id={id}
    />
  );
}

export default Text;
