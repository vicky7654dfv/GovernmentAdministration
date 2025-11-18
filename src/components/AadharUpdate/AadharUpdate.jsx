import React, { useState } from 'react';
import Styles from "./AadharUpdate.module.css";

const AadharUpdate = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSendOtp = () => {
    if (phoneNumber.length === 10) {
      setShowOtpInput(true);
      setShowError(false);
    }
  };

  const handleVerifyOtp = () => {
    if (otp === '123456') {
      setOtpVerified(true);
      setTimeout(() => {
        window.location.href = '/Error';
      }, 1000);
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
          {!showOtpInput ? (
            <div className={Styles.phoneInputSection}>
              <label>Enter Registered Mobile Number</label>
              <input
                type="tel"
                placeholder="Enter 10-digit mobile number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                maxLength="10"
              />
              <button 
                className={Styles.btnPrimary}
                onClick={handleSendOtp}
                disabled={phoneNumber.length !== 10}
              >
                Send OTP
              </button>
            </div>
          ) : (
            <div className={Styles.otpInputSection}>
              <label>Enter OTP Sent to {phoneNumber}</label>
              <input
                type="text"
                placeholder="Enter 6-digit OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                maxLength="6"
              />
              <div className={Styles.otpButtons}>
                <button 
                  className={Styles.btnPrimary}
                  onClick={handleVerifyOtp}
                  disabled={otp.length !== 6}
                >
                  Verify OTP
                </button>
                <button 
                  className={Styles.btnSecondary}
                  onClick={() => setShowOtpInput(false)}
                >
                  Change Number
                </button>
              </div>
              {showError && (
                <div className={Styles.errorPopup}>
                  <span>✕</span>
                  Wrong OTP entered. Please try again.
                </div>
              )}
              {otpVerified && (
                <div className={Styles.successPopup}>
                  <span>✓</span>
                  OTP Verified Successfully! Redirecting...
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AadharUpdate;