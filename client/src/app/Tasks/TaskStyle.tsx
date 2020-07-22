import { makeStyles, Theme } from "@material-ui/core";

const TaskStyle = makeStyles((theme: Theme) => ({
  wrapperTask: {
    border: `2px solid ${theme.palette.primary.main}`,
    backgroundColor: "#f9fbfd",
    borderRadius: "1rem",
    minHeight: "7rem",
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
  description: {
    wordBreak: "break-word",
  },
  wrapperType: {
    padding: "1rem 0",
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
    color: theme.palette.primary.main,
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

export default TaskStyle;
