import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
/**
 * paperComponent
 */

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      //   display: "flex",
      //   flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(1),
        width: theme.spacing(90),
        height: theme.spacing(25),
      },
    },
  })
);
export const PaperWapper = () => {
  const classes = useStyles();
  const display: boolean = true;

  return (
    <>
      {display && (
        <div className="paperwapper">
          <div className={classes.root}>
            <Paper elevation={3}>test</Paper>
          </div>
        </div>
      )}
    </>
  );
};
