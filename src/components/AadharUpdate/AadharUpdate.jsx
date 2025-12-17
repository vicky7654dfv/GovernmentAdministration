import React, { useState } from 'react';
import Styles from "./AadharUpdate.module.css";

const AadharUpdate = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showError, setShowError] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

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
        {/* Decorational Elements for Tech Feel */}
        <div className={Styles.cornerTL}></div>
        <div className={Styles.cornerBR}></div>
        
        <div className={Styles.headerSection}>
            <h2>Aadhar Update Portal</h2>
            <div className={Styles.separator}></div>
            <p>Secure verification via registered mobile</p>
        </div>
        
        <div className={Styles.aadharForm}>
          <div className={Styles.phoneInputSection}>
            <label className={isFocused || phoneNumber ? Styles.activeLabel : ''}>
                REGISTERED MOBILE NUMBER
            </label>
            
            <div className={Styles.inputWrapper}>
                <input
                  type="tel"
                  placeholder="XXXXXXXXXX"
                  value={phoneNumber}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10));
                    setShowError(false);
                  }}
                  maxLength="10"
                />
                <div className={Styles.scanLine}></div>
            </div>

            <button 
              className={Styles.btnPrimary}
              onClick={handleUpdate}
              disabled={phoneNumber.length !== 10}
            >
              <span className={Styles.btnText}>INITIATE UPDATE</span>
              <span className={Styles.btnGlow}></span>
            </button>

            {showError && (
              <div className={Styles.errorPopup}>
                <span className={Styles.errorIcon}>!</span>
                <span>Invalid Entry. 10 digits required.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AadharUpdate;