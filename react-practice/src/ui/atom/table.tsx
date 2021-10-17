import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { threeHourForecast, threeHourListData } from "store/threeHourForecast";

import {
  convertTimeFromUnix,
  convertCelsiusFromKelvin,
} from "container/ThridPageContainer";

export interface tableWapperInterface {
  threeHourForecast?: threeHourForecast;
}

export const TableWapper = (props: tableWapperInterface) => {
  const list = props.threeHourForecast?.threeHourForecastData?.list;

  //リスト表示
  const createRowData = (list: threeHourListData[] | undefined) => {
    const itemlist =
      list &&
      list.map((item, index) => {
        return (
          <>
            <TableRow
              key={index}
              onClick={() => {
                console.log("click");
              }}
            >
              <TableCell component="th" scope="row">
                {convertTimeFromUnix(item.dt)}
              </TableCell>
              <TableCell align="right">
                <img
                  src={`${process.env.REACT_APP_WEATHER_ICON_API_URL}${item.weather[0].icon}.png`}
                  alt=""
                  width="50"
                  height="50"
                ></img>
              </TableCell>
              <TableCell align="right">
                {convertCelsiusFromKelvin(item.main.temp)}
              </TableCell>
            </TableRow>
          </>
        );
      });
    return <>{itemlist}</>;
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow
            onClick={() => {
              console.log("click");
            }}
          >
            <TableCell>日付</TableCell>
            <TableCell align="right">天気</TableCell>
            <TableCell align="right">気温</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{createRowData(list)}</TableBody>
      </Table>
    </TableContainer>
  );
};
