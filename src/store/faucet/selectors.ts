/** @format */

import type { RootState } from "../store";

export const faucetUser = (state: RootState) => state.faucet.faucetUser;
export const error = (state: RootState) => state.faucet.error;
