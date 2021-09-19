import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

/**
 * paperComponent
 */

export const PaperWapper = () => {
  const display: boolean = true;

  return (
    <>
      {display && (
        <div className="paperwapper">
          <Box
            sx={{
              // display: "flex",
              // flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: 1000,
                // height: 128,
              },
            }}
          >
            <Paper elevation={3}>
              <br />
              <p>取得結果</p>
              <div className="getweatherinfo">
                <p>都市名:</p>
                <p>気温:</p>
                <p>体感気温:</p>
                <p>最高気温:</p>
                <p>最低気温:</p>
                <p>最低気温:</p>
                <p>最低気温:</p>
                <p>最低気温:</p>
                <p>最低気温:</p>
                <p>最低気温:</p>
                <p>最低気温:</p>
                <p>最低気温:</p>
                <p>最低気温:</p>
                <p>最低気温:</p>
                <p>最低気温:</p>
                <br />
              </div>
            </Paper>
          </Box>
        </div>
      )}
    </>
  );
};
