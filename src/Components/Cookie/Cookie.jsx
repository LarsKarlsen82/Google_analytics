import React, { useState } from 'react';
import './Cookie.css';


const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(true);

  const handleAccept = () => {
    // Set a cookie or perform any necessary actions when the user accepts
    // In this example, we use localStorage to store the user's preference
    localStorage.setItem('cookieConsent', 'accepted');
    setShowConsent(false);
  };

  const handleDecline = () => {
    // Perform any necessary actions when the user declines
    // In this example, we simply hide the consent banner
    setShowConsent(false);
  };

  // Check if the user has already accepted the cookie
  const isConsentAccepted = localStorage.getItem('cookieConsent') === 'accepted';

  if (isConsentAccepted || !showConsent) {
    return null; // Do not render the consent banner if already accepted or declined
  }

  return (
    <div className="cookie-banner">
      <div className="cookie-content">
        <div className="cookie-message">
          <p>ACCEPTER MINE BETINGELSER</p>
        </div>
        <div className="cookie-buttons">
          <button className="cookie-button" onClick={handleAccept}>
            Accept
          </button>
          <button className="cookie-button" onClick={handleDecline}>
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};


export default CookieConsent;
