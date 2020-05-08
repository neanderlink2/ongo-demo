import { createSlice } from "@reduxjs/toolkit";

const snackbarHandlerSlice = createSlice({
  name: "snackbar",
  initialState: {
    showSnackbar: false,
    actionColor: "#212121",
    duration: 0,
    message: "",
    actionText: "",
    onActionPress: () => {},
  },
  reducers: {
    showSnackbar: (state, action) => {
      state.showSnackbar = true;
      state.message = action.payload.message;
      state.duration = action.payload.duration;
      state.actionColor = action.payload.actionColor;
      state.actionText = action.payload.actionText;
      state.onActionPress = action.payload.onActionPress;
    },
    hideSnackbar: (state) => {
      state.showSnackbar = false;
      state.message = "";
      state.duration = 0;
      state.actionColor = "#212121";
      state.actionText = "";
      state.onActionPress = () => {};
    },
  },
});

export const { showSnackbar, hideSnackbar } = snackbarHandlerSlice.actions;
export default snackbarHandlerSlice.reducer;
