import React, { useState } from 'react';

function Setting() {
  const [emailProduct, setEmailProduct] = useState(true);
  const [emailSecurity, setEmailSecurity] = useState(false);
  const [phoneEmail, setPhoneEmail] = useState(true);
  const [phoneSecurity, setPhoneSecurity] = useState(false);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordUpdate = () => {
    if (!password || !confirmPassword) {
      alert('Please enter both passwords');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    alert('Password updated successfully');
  };

  return (
    <div className="settings-page">

      {/* PAGE TITLE */}
      <div className="settings-header">
        <h1>Settings</h1>
      </div>

      {/* NOTIFICATIONS */}
      <div className="settings-card">

        <div className="settings-card-header">
          <h2>Notifications</h2>
          <p>Manage the notifications</p>
        </div>

        <div className="notification-content">

          <div className="notification-column">
            <h3>Email</h3>

            <label>
              <input
                type="checkbox"
                checked={emailProduct}
                onChange={(e) => setEmailProduct(e.target.checked)}
              />
              Product updates
            </label>

            <label>
              <input
                type="checkbox"
                checked={emailSecurity}
                onChange={(e) => setEmailSecurity(e.target.checked)}
              />
              Security updates
            </label>
          </div>

          <div className="notification-column">
            <h3>Phone</h3>

            <label>
              <input
                type="checkbox"
                checked={phoneEmail}
                onChange={(e) => setPhoneEmail(e.target.checked)}
              />
              Email
            </label>

            <label>
              <input
                type="checkbox"
                checked={phoneSecurity}
                onChange={(e) => setPhoneSecurity(e.target.checked)}
              />
              Security updates
            </label>
          </div>

        </div>

        <div className="settings-footer">
          <button className="save-btn">
            Save changes
          </button>
        </div>

      </div>

      {/* PASSWORD */}
      <div className="settings-card password-card">

        <div className="settings-card-header">
          <h2>Password</h2>
          <p>Update password</p>
        </div>

        <div className="password-content">

          <div className="password-input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

        </div>

        <div className="settings-footer">
          <button
            className="save-btn"
            onClick={handlePasswordUpdate}
          >
            Update
          </button>
        </div>

      </div>

    </div>
  );
}

export default Setting;