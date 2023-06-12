import React from "react";
import ReactDOM from "react-dom";

function OverlayLoading({ children }: any) {
  return ReactDOM.createPortal(
    <div id="modal-wrapper">{children}</div>,
    document.querySelector("body") as Element
  );
}

export default OverlayLoading;
