import React, { useState } from 'react';

const AddressInfo = ({ data, onChange }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  return (
    <div>
      <h2>Address Info</h2>
      <label>
        Address Line 1:
        <input
          type="text"
          name="address_line_1"
          value={data.address_line_1}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Address Line 2:
        <input
          type="text"
          name="address_line_2"
          value={data.address_line_2}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        City:
        <input
          type="text"
          name="city"
          value={data.city}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        State:
        <input
          type="text"
          name="state"
          value={data.state}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        ZIP/Postal Code:
        <input
          type="text"
          name="postal_code"
          value={data.postal_code}
          onChange={handleInputChange}
        />
      </label>
      <br />
    </div>
  );
};

export default AddressInfo;