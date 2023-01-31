/** @format */

import { createAsyncThunk } from '@reduxjs/toolkit'
import { Code } from '../../config/constants'
import { wsClient } from '../../config/config'

var pingData = {
  code: Code.CODE_PING,
  data: {
    userid: '5',
    pingmsg: 'ping test from client',
  },
}

const sendPingMessage = createAsyncThunk('get/pongMessage', async () => {
  wsClient.send(JSON.stringify(pingData))
})

export default sendPingMessage
