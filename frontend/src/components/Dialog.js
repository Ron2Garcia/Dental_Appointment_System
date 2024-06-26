import React from 'react';
import '../styles/Dialog.css'; // Import CSS for styling

const Dialog = ({ title, isOpen, onClose, children }) => {
  // Render nothing if dialog is not open
  if (!isOpen) return null;

  return (
    <div className="dialog-overlay">
      <div className="dialog">
        <div className="dialog-header">
          <h2>{title}</h2>
          <button className="close-button" onClick={onClose}>
            X
          </button>
        </div>
        <div className="dialog-content">{children}</div>
      </div>
    </div>
  );
};

export default Dialog;