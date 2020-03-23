import { makeStyles } from "@material-ui/core";

const NumberStyle = makeStyles(() => ({
    wrapperTask: {
        border: "2px solid orange",
        backgroundColor: "#F9EDDD",
        borderRadius: "1rem",
        minHeight: "7rem",
        "&:hover": {
            backgroundColor: "#F7CD94",
        },
    },
    wrapperChecked: {
        height: "100%",
        padding: "0rem 1rem",
    },
    wrapperDescription: {
        height: "100%",
        padding: "1rem 0",
        overflow: "hidden",
    },
    description: {
        wordBreak: "break-word",
    },
    wrapperUpDown: {
        height: "100%",
    },
    delete: {
        cursor: "pointer",
        padding: ".6rem",
        "&:hover": {
            transform: "scale(1.2)",
        },
    },
    checked: {
        cursor: "pointer",
        color: "orange",
        "&:hover": {
            transform: "scale(1.2)",
        },
    },
    notChecked: {
        cursor: "pointer",
        color: "#B5B1B1",
        "&:hover": {
            transform: "scale(1.2)",
        },
    },
}));

export default NumberStyle;
