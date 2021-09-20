import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import store from "store/store";
import { closeDialog, DialogState } from "store/dialogState";

export interface DialogWapperInterface {
  dialogState: DialogState;
}

export const DialogWapper = (props: DialogWapperInterface) => {
  const open = props.dialogState.dialogState.state;
  // const [open, setOpen] = React.useState(props.dialogState);

  const handleClickOpen = () => {
    store.dispatch(closeDialog({ state: false }));
    // setOpen(true);
  };

  const handleClose = () => {
    store.dispatch(closeDialog({ state: false }));
    // setOpen(false);
  };
  return (
    <>
      <div>dialog</div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
