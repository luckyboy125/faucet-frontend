import { createAsyncThunk } from "@reduxjs/toolkit";
import { faucetAPI, faucetAPI1 } from "./api/faucet";
const getFaucetUser = createAsyncThunk(
  "faucet/user",
  async (params: FormData) => {
    const response = await faucetAPI(params);
    return response.data;
  }
);

const getFaucetAllUser = createAsyncThunk("faucet/alluser", async () => {
  const response = await faucetAPI1();
  return response.data;
});

const updateErrorMsg = createAsyncThunk("faucet/error", async (msg: any) => {
  const payload = {
    message: msg.message,
    severity: msg.severity,
  };
  return payload;
});

export { getFaucetUser, getFaucetAllUser, updateErrorMsg };
