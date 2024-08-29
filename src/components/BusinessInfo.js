import React, { useState } from 'react';

const BusinessInfo = ({ data, onChange }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  return (
    <div>
      <h2>Business Info</h2>
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
        Average Payment Amount:
        <input
          type="number"
          name="average_payment_amount"
          value={data.average_payment_amount}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Maximum Payment Amount:
        <input
          type="number"
          name="maximum_payment_amount"
          value={data.maximum_payment_amount}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Total Monthly Payments Amount:
        <input
          type="number"
          name="total_monthly_payments_amount"
          value={data.total_monthly_payments_amount}
          onChange={handleInputChange}
        />
      </label>
      <br />
    </div>
  );
};

export default BusinessInfo;
