import React from "react";
import { TaskProps } from "./TaskInterfaces";
import Task from "./Task"
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import { TASK_TYPES_NAMES } from "./../constants";

const style = {
  color: "#ffe807",
}

function Text({
  description,
  onDeletion,
  checked,
  onCheck,
}: TaskProps): React.ReactElement {

  return (
    <Task
      description={description}
      onDeletion={onDeletion}
      checked={checked}
      onCheck={onCheck}
      taskType={TASK_TYPES_NAMES.TEXT}
      pin={
        <StarRoundedIcon style={style} />
      }
    />
  );
}

export default Text;
