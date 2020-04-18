import React from "react";
import style from "./TaskStyle";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

export interface TaskProps {
    description: string;
    onDeletion: () => void;
    checked: boolean;
    onCheck: () => void;
    taskType: string;
    pin: React.ReactElement;
}

function Text({
    description,
    onDeletion,
    checked,
    onCheck,
    taskType,
    pin,
}: TaskProps): React.ReactElement {
    const classes = style();
    return (
        <Grid container item sm={12} className={classes.wrapperTask}>
            <Grid container item sm={12} justify="space-between">
                <Grid container item sm={1} justify="center" alignItems="center">
                    {pin}
                </Grid>
                <Grid container item sm={1} justify="center" alignItems="center">
                    <DeleteOutlineOutlinedIcon color="error" fontSize="small" onClick={onDeletion} className={classes.delete} />
                </Grid>
            </Grid>
            <Grid container item sm={12}>
                <Grid container item sm={2} alignItems="center" justify="center">
                    <CheckCircleOutlineIcon fontSize="large" onClick={onCheck} className={checked ? classes.checked : classes.notChecked} />
                </Grid>
                <Grid container item sm={8}>
                    <Typography variant="h5" color="textPrimary" className={classes.description}>{description}</Typography>
                </Grid>
            </Grid>
            <Grid container item sm={12} justify="center">
                <Grid container item sm={8} className={classes.wrapperType}>
                    <Typography variant="body2" color="textPrimary">Type: {taskType}</Typography>
                </Grid>
            </Grid>

        </Grid>
    );
}

export default Text;
