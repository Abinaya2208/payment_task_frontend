import React, { useState } from 'react';

const MerchantInfo = ({ data, onChange }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  return (
    <div>
      <h2>Merchant Info</h2>
      <label>
        First Name:
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Legal Name:
        <input
          type="text"
          name="legal_name"
          value={data.legal_name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Merchant Type:
        <select
          name="merchant_type"
          value={data.merchant_type}
          onChange={handleInputChange}
        >
           <option value="">Select Merchant Type</option>
              <option value="INDIVIDUAL">INDIVIDUAL</option>
              <option value="LLC">LLC</option>
              <option value="LLP">LLP</option>
              <option value="PARTNERSHIP">PARTNERSHIP</option>
              <option value="PRIVATE_CORPORATION">PRIVATE CORPORATION</option>
              <option value="PUBLIC_CORPORATION">PUBLIC CORPORATION</option>
              <option value="NON_PROFIT_ORG">NON-PROFIT ORGANIZATION</option>
              <option value="GOVERNMENT">GOVERNMENT</option>
        </select>
      </label>
      <br />
      <label>
        MCC:
        <input
          type="text"
          name="mcc"
          value={data.mcc}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Website:
        <input
          type="url"
          name="website"
          value={data.website}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Phone Number:
        <input
          type="tel"
          name="phone_number"
          value={data.phone_number}
          onChange={handleInputChange}
        />
      </label>
      <br />
    </div>
  );
};

export default MerchantInfo;