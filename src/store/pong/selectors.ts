/** @format */

import type { RootState } from "../store";

// Other code such as selectors can use the imported `RootState` type
export const pongReceiveTime = (state: RootState) => state.pong.pongReceiveTime;
