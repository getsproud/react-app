import React from 'react'
import { createPortal } from 'react-dom'

export default function Modal({ children, close }) {
  return createPortal(
    <div className="modal is-active">
      <div className="modal-background" onClick={() => close()}></div>
      <div className="modal-content">
        <div className="box">
          { children }
        </div>
      </div>
      <button className="modal-close is-large" aria-label="close" onClick={() => close()}></button>
    </div>,
    document.getElementById("modal_root")
  );
}
