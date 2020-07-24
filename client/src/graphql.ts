import { gql } from "@apollo/client";

export const getTasks = gql`
    query getTasks {
        tasks {
            id
            description
            type
            checked
        }
    }
`;

export const createTask = gql`
    mutation createTask($NewTaskInput:NewTaskInput!){
        addTask(newTaskData:$NewTaskInput){
            id 
            description
            type
            checked
        }
    }
`;

export const deleteTask = gql`
    mutation deleteTask($id: String!) {
        deleteTask(id: $id) {
            id
        }
    }
`;

