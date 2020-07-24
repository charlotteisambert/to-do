import React from "react";
import Number from "./Tasks/Number";
import Text from "./Tasks/Text";
import TextMultiline from "./Tasks/TextMultiline";
import { TaskInterface } from "./Tasks/TaskInterfaces";
import { TASK_TYPES } from "./constants";
import { useQuery } from "@apollo/client";

interface TaskProps {
    task: TaskInterface;
}

function Task({ task }: TaskProps): React.ReactElement {
    function renderTask(task: TaskInterface) {
        switch (task.type) {
            case TASK_TYPES.NUMBER:
                return (
                    <Number
                        description={task.description}
                        onDeletion={() => handleDeletion(task.id)}
                        checked={task.checked}
                        onCheck={() => handleCheck(task.id)}
                    />
                );
            case TASK_TYPES.MULTILINE:
                return (
                    <TextMultiline
                        description={task.description}
                        onDeletion={() => handleDeletion(task.id)}
                        checked={task.checked}
                        onCheck={() => handleCheck(task.id)}
                    />
                );
            case TASK_TYPES.TEXT:
            default:
                return (
                    <Text
                        description={task.description}
                        onDeletion={() => handleDeletion(task.id)}
                        checked={task.checked}
                        onCheck={() => handleCheck(task.id)}
                    />
                );
        }
    }

    function handleDeletion(id: string): void {
    }

    function handleCheck(id: string): void {
    }

    return renderTask(task);
}

export default Task;
