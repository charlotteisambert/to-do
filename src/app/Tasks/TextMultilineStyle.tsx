import { makeStyles } from "@material-ui/core";

const TextMultilineStyle = makeStyles(() => ({
  wrapperTask: {
    border: "2px solid purple",
    backgroundColor: "#EBDDF9",
    borderRadius: "1rem",
    minHeight: "7rem",
    "&:hover": {
      backgroundColor: "#DEB4F3",
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
    color: "purple",
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

export default TextMultilineStyle;
