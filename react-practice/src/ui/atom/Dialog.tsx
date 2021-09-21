import React from "react";

import Dialog from "@mui/material/Dialog";

import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";
import { DialogState } from "store/dialogState";

export interface DialogWapperInterface {
  dialogState: DialogState;
}

export const DialogWapper = (props: DialogWapperInterface) => {
  const open = props.dialogState.dialogState.state;

  return (
    <>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Backdrop open={open}>
          <CircularProgress />
        </Backdrop>
      </Dialog>
    </>
  );
};
