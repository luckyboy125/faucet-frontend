/** @format */

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { number } from 'prop-types'
import sendPingMessage from './action'
import type { PongState } from './types'

const PREFIX = 'notification'

const initialState: PongState = {
  pongReceiveTime: Date.now(),
}

export const pongMessageSlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {
    updatePongMessageReceived: (state: PongState, action: PayloadAction<any>) => {
      if (action.payload !== null) {
        state.pongReceiveTime = action.payload.time
      }
    },
  },
})

export const { updatePongMessageReceived } = pongMessageSlice.actions

export { sendPingMessage }
export default pongMessageSlice.reducer
