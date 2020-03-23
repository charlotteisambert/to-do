export interface TaskProps {
    description: string;
    handleDeletion: () => void;
    checked: boolean;
    onCheck:()=>void;
}

export interface TaskInterface {
    description: string;
    id: string;
    type: string;
    checked: boolean;
}
