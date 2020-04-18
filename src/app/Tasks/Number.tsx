import React from "react";
import { TaskProps } from "./TaskInterfaces";
import Task from "./Task"
import StopRoundedIcon from '@material-ui/icons/StopRounded';
import { TASK_TYPES_NAMES } from "./../constants";

const style = {
  color: "#bd3e5e",
}

function Number({
  description,
  onDeletion,
  checked,
  onCheck,
}: TaskProps): React.ReactElement {

  return (
    <Task
      description={"Your number is : " + description}
      onDeletion={onDeletion}
      checked={checked}
      onCheck={onCheck}
      taskType={TASK_TYPES_NAMES.NUMBER}
      pin={
        <StopRoundedIcon style={style} />
      }
    />
  );
}

export default Number;
