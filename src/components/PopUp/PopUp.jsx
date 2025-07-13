import React from "react";
import "./PopUp.css";

function PopUp({ onConfirm, onCancel }) {
  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <p>
          Você está <span className="highlight">excluindo</span> um Projeto.
          <br />
          Essa ação será <span className="highlight">permanente</span>.
        </p>
        <p className="confirm-text">Deseja continuar?</p>
        <div className="popup-buttons">
          <button className="btn btn-confirm" onClick={onConfirm}>
            SIM
          </button>
          <button className="btn btn-cancel" onClick={onCancel}>
            NÃO
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopUp;