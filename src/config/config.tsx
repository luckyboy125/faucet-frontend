/** @format */

import ReconnectingWebSocket from "reconnecting-websocket";

export const API_URL = "http://127.0.0.1:8001";
export const REQUEST_API_URL = `${API_URL}/api/v1`;
export const WEB_SOCKET_URL = "ws://127.0.0.1:8002";
export const wsClient = new ReconnectingWebSocket(WEB_SOCKET_URL);
