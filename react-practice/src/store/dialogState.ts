import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

//dialogのstore
export type DataType = {
  state: boolean;
};

export type DialogState = {
  dialogState: DataType;
};

const initialState: DialogState = {
  dialogState: { state: false },
};

export const dialogStateSlice = createSlice({
  name: "dialogState",
  initialState,
  reducers: {
    openDialog: (state = initialState, action: PayloadAction<DataType>) => ({
      ...state,
      dialogState: action.payload,
    }),
    closeDialog: (state: DialogState, action: PayloadAction<DataType>) => ({
      ...state,
      dialogState: action.payload,
    }),
  },
});

export const { openDialog, closeDialog } = dialogStateSlice.actions;

export const selectDialogState = (state: RootState) => state.dialogState;
