import { makeStyles, Theme } from "@material-ui/core";

const AddTaskStyle = makeStyles((theme: Theme) => ({
  wrapperAddTAsk: {
    background: theme.palette.primary.light,
    border: `2px solid ${theme.palette.primary.main}`,
    padding: "1rem",
    borderRadius: "1rem",
  },
  wrapperDescription: {
    padding: "1rem 0 1rem .5rem",
  },
  wrapperType: {
    paddingLeft: "2rem",
  },
  wrapperError: {
    padding: "1rem 1rem 0 1rem",
  },
}));

export default AddTaskStyle;
