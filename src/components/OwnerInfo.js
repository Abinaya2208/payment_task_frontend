import React, { useState } from 'react';

const OwnerInfo = ({ data, onChange }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  return (
    <div>
      <h2>Owner Info</h2>
      <label>
        First Name:
        <input
          type="text"
          name="owner_first_name"
          value={data.owner_first_name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          name="owner_last_name"
          value={data.owner_last_name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Date of Birth:
        <input
          type="date"
          name="owner_dob"
          value={data.owner_dob}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Social Security Number (Last 4 Digits):
        <input
          type="text"
          name="owner_ssn_last_4"
          value={data.owner_ssn_last_4}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="owner_email"
          value={data.owner_email}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Phone Number:
        <input
          type="tel"
          name="owner_phone_number"
          value={data.owner_phone_number}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Address Line 1:
        <input
          type="text"
          name="owner_address_line_1"
          value={data.owner_address_line_1}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Address Line 2:
        <input
          type="text"
          name="owner_address_line_2"
          value={data.owner_address_line_2}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        City:
        <input
          type="text"
          name="owner_city"
          value={data.owner_city}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        State:
        <input
          type="text"
          name="owner_state"
          value={data.owner_state}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        ZIP/Postal Code:
        <input
          type="text"
          name="owner_postal_code"
          value={data.owner_postal_code}
          onChange={handleInputChange}
        />
      </label>
      <br />
    </div>
  );
};

export default OwnerInfo;