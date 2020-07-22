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
      taskType={TASK_TYPES_NAMES.MULTILINE}
      pin={
        <FiberManualRecordRoundedIcon style={style} />
      }
    />
  );
}

export default TextMultiline;
