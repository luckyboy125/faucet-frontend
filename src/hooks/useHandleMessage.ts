/** @format */

import { useAppDispatch } from "../store/hooks";
import { updateFaucetCoin } from "../store/faucet";
import { updatePongMessageReceived } from "../store/pong";
import { Code } from "../config/constants";

const useHandleMessage = () => {
  const dispatch = useAppDispatch();

  const parseMessage = (message: any) => {
    if (message.Code === Code.CODE_FAUCET_COIN) {
      handleFaucetAddressCode(message);
    } else if (message.Code === Code.CODE_PING) {
      handlePongMessageReceived(message);
    }
  };

  const handleFaucetAddressCode = (message: any) => {
    const Data = {
      Address: message.Data.Address,
      Status: message.Data.Status,
    };
    dispatch(updateFaucetCoin(Data));
  };

  const handlePongMessageReceived = (message: any) => {
    const Data = {
      time: Date.now(),
    };
    dispatch(updatePongMessageReceived(Data));
  };

  return { onParseMessage: parseMessage };
};

export default useHandleMessage;
