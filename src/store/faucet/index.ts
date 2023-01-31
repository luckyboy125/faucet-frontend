import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getFaucetUser, getFaucetAllUser, updateErrorMsg } from "./action";
import type { faucetState } from "./types";

const PREFIX = "faucet";
const initialState: faucetState = {
  faucetUser: [],
  error: "",
};

const setFaucetUser = (state: faucetState, res: any) => {
  if (res.Success === false) {
    state.error = res.Error.Msg;
  }
};
const setFaucetAllUser = (state: faucetState, res: any) => {
  if (res.Success === true) {
    state.faucetUser = [...res.Data];
  } else {
    state.error = res.Error.Msg;
  }
};

export const faucetReducer = createSlice({
  name: PREFIX,
  initialState,
  reducers: {
    updateFaucetCoin: (state: faucetState, action: PayloadAction<any>) => {
      if (action.payload !== null) {
        state.faucetUser.push(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        getFaucetUser.fulfilled.type,
        (state: faucetState, action: PayloadAction<any>) => {
          setFaucetUser(state, action.payload);
        }
      )
      .addCase(
        getFaucetAllUser.fulfilled.type,
        (state: faucetState, action: PayloadAction<any>) => {
          setFaucetAllUser(state, action.payload);
        }
      )
      .addCase(
        updateErrorMsg.fulfilled.type,
        (state: faucetState, action: PayloadAction<any>) => {
          state.error = action.payload.message;
        }
      );
  },
});

export const { updateFaucetCoin } = faucetReducer.actions;

export { getFaucetUser, getFaucetAllUser, updateErrorMsg };

export default faucetReducer.reducer;
