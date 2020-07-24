import React from "react";
import StopRoundedIcon from "@material-ui/icons/StopRounded";
import { TaskProps } from "./TaskInterfaces";
import Task from "./Task";
import { TASK_TYPES_NAMES } from "../constants";

const style = {
  color: "#bd3e5e",
};

function Number({
  description,
  checked,
  id,
}: TaskProps): React.ReactElement {
  return (
    <Task
      description={`Your number is : ${description}`}
      checked={checked}
      taskType={TASK_TYPES_NAMES.NUMBER}
      pin={
        <StopRoundedIcon style={style} />
      }
      id={id}
    />
  );
}

export default Number;
