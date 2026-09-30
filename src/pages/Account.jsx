import React, { useState } from 'react';

function Account() {
  const [firstName, setFirstName] = useState('Amit');
  const [lastName, setLastName] = useState('Vaishnav');
  const [email, setEmail] = useState('amit@gmail.com');
  const [phone, setPhone] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');

  const handleSave = () => {
    alert('Profile details saved!');
  };

  return (
    <div className="account-page">

      {/* TITLE */}
      <h1>Account</h1>

      <div className="account-layout">

        {/* LEFT PROFILE CARD */}
        <div className="profile-card">

          <div className="profile-info">

            <div className="account-avatar">
              A
            </div>

            <h2>Amit Vaishnav</h2>

            <p>Jaipur</p>
    

          </div>

          <button className="upload-btn">
            Upload picture
          </button>

        </div>

        {/* RIGHT PROFILE FORM */}
        <div className="account-form-card">

          <div className="account-form-header">
            <h2>Profile</h2>
            <p>The information can be edited</p>
          </div>

          <div className="account-form">

            <div className="form-row">

              <div className="account-field">
                <label>First name *</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="account-field">
                <label>Last name *</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

            </div>

            <div className="form-row">

              <div className="account-field">
                <label>Email address *</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="account-field">
                <input
                  type="text"
                  placeholder="Phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

            </div>

            <div className="form-row">

              <div className="account-field">
                <label>State</label>
                <select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                >
                  <option value=""></option>
                  <option value="California">California</option>
                  <option value="Texas">Texas</option>
                  <option value="New York">New York</option>
                </select>
              </div>

              <div className="account-field">
                <input
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>

            </div>

          </div>

          <div className="account-footer">
            <button
              className="save-details-btn"
              onClick={handleSave}
            >
              Save details
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Account;
