import { makeStyles } from "@material-ui/core";

const TextStyle = makeStyles(() => ({
  wrapperTask: {
    border: "2px solid teal",
    backgroundColor: "#CBEEE7",
    borderRadius: "1rem",
    minHeight: "7rem",
    "&:hover": {
      backgroundColor: "#83FADE",
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
    color: "teal",
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

export default TextStyle;
