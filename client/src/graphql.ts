import { gql } from "@apollo/client";

export const getTasks = gql`
    query getTasks {
        tasks {
            id
            description
            type
        }
    }
`;

export const createTask = gql`
    mutation createTask($NewTaskInput:NewTaskInput!){
        addTask(newTaskData:$NewTaskInput){
        id 
        description
        type
        }
    }
`;
