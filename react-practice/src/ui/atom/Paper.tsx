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
        height: theme.spacing(50),
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
            <Paper elevation={3}>
              <p>取得結果</p>
              <div className="getweatherinfo">
                <p>都市名:</p>
                <p>気温:</p>
                <p>体感気温:</p>
                <p>最高気温:</p>
                <p>最低気温:</p>
              </div>
            </Paper>
          </div>
        </div>
      )}
    </>
  );
};
