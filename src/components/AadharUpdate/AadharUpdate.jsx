import React, { useState } from 'react';
import Styles from "./AadharUpdate.module.css";

const AadharUpdate = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showError, setShowError] = useState(false);

  const handleUpdate = () => {
    if (phoneNumber.length === 10) {
      window.location.href = '#/Error';
    } else {
      setShowError(true);
    }
  };

  return (
    <div className={Styles.aadharUpdateComponent}>
      <div className={Styles.aadharContainer}>
        <h2>Aadhar Information Update</h2>
        <p>Update your Aadhar details using your registered mobile number</p>
        
        <div className={Styles.aadharForm}>
          <div className={Styles.phoneInputSection}>
            <label>Enter Registered Mobile Number</label>
            <input
              type="tel"
              placeholder="Enter 10-digit mobile number"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10));
                setShowError(false);
              }}
              maxLength="10"
            />
            <button 
              className={Styles.btnPrimary}
              onClick={handleUpdate}
              disabled={phoneNumber.length !== 10}
            >
              Update
            </button>
            {showError && (
              <div className={Styles.errorPopup}>
                <span>✕</span>
                Please enter a valid 10-digit mobile number.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AadharUpdate;