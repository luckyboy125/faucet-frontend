import React from 'react';
import MainBody from './component/mainbody';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import { wsClient } from './config/config';
import useWSClientHandle from "./hooks/useWSClientHandle";



function App() {
  
  const { handleMessage, handleError, handleOpen, handleClose } = useWSClientHandle();
  
  
  React.useEffect(() => {
    wsClient.onopen = handleOpen
    wsClient.onerror = handleError
    wsClient.onmessage = handleMessage
    wsClient.onclose = handleClose
  }, [])

  return (
    <>
      <MainBody/>
    </>
  );
}

export default App;
