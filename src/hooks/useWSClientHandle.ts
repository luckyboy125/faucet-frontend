/** @format */

import { useAppDispatch } from "../store/hooks";
import { getFaucetAllUser } from "../store/faucet";
import useHandleMessage from "./useHandleMessage";

const useWSClientHandle = () => {
  const dispatch = useAppDispatch();
  const { onParseMessage } = useHandleMessage();

  const handleOpen = () => {
    console.log("ws connection opened");
    localStorage.setItem("webSocketDisConnectState", "connect");
    dispatch(getFaucetAllUser());
  };

  const handleError = (error: any) => {
    console.error("ws error", error);
    handleClose();
  };

  const handleClose = () => {
    console.log("ws connection closed");
    localStorage.setItem("webSocketDisConnectState", "disconnect");
  };

  const handleMessage = (event: any) => {
    const message = JSON.parse(event.data);
    onParseMessage(message);
  };

  return {
    handleMessage: handleMessage,
    handleClose: handleClose,
    handleError: handleError,
    handleOpen: handleOpen,
  };
};

export default useWSClientHandle;
