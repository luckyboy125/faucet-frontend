/** @format */

import axios from "axios";
import { REQUEST_API_URL } from "../../../../config/config";

export const faucetAPI = async (params: FormData) =>
  axios.post(`${REQUEST_API_URL}/coin/send`, params);

export const faucetAPI1 = async () =>
  axios.post(`${REQUEST_API_URL}/coin/sendalldata`);
