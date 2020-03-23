import React from "react";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { TaskProps } from "../TaskInterfaces";
import style from "./TextStyle";

function Text({
  description,
  handleDeletion,
  checked,
  onCheck,
}: TaskProps): React.ReactElement {
  const classes = style();

  return (
    <Grid container item sm={12} className={classes.wrapperTask}>
      <Grid container item sm={2} alignItems="center" justify="center" className={classes.wrapperChecked}>
        <CheckCircleOutlineIcon fontSize="large" onClick={onCheck} className={checked ? classes.checked : classes.notChecked} />
      </Grid>
      <Grid container item sm={9} direction="column" justify="space-between" className={classes.wrapperDescription}>
        <Grid container item>
          <Typography variant="h5" color="textPrimary" className={classes.description}>{description}</Typography>
        </Grid>
        <Grid container item>
          <Typography variant="body2" color="textPrimary">Type: Small text</Typography>
        </Grid>
      </Grid>
      <Grid container item sm={1} direction="column" alignItems="flex-end">
        <DeleteOutlineOutlinedIcon color="error" fontSize="small" onClick={handleDeletion} className={classes.delete} />
      </Grid>
    </Grid>
  );
}

export default Text;
