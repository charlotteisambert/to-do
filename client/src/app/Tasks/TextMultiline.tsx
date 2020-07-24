import React from "react";
import FiberManualRecordRoundedIcon from "@material-ui/icons/FiberManualRecordRounded";
import { TaskProps } from "./TaskInterfaces";
import Task from "./Task";
import { TASK_TYPES_NAMES } from "../constants";

const style = {
  color: "#7b188d",
};

function TextMultiline({
  description,
  checked,
  id,
}: TaskProps): React.ReactElement {
  return (
    <Task
      description={description}
      checked={checked}
      taskType={TASK_TYPES_NAMES.TEXT_MULTILINE}
      pin={
        <FiberManualRecordRoundedIcon style={style} />
      }
      id={id}
    />
  );
}

export default TextMultiline;
