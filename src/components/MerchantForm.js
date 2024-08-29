import React, { useState } from 'react';
import axios from 'axios';

const MerchantForm = ({ onMerchantCreated }) => {
  const [merchantData, setMerchantData] = useState({
    businessName: '',
    address: '',
    contactInfo: '',
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    setMerchantData({ ...merchantData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/onboard', merchantData);
      setResponseMessage({ text: 'Merchant onboarded successfully!', success: true });
      onMerchantCreated(response.data); // Notify parent component
    } catch (error) {
      setResponseMessage({ text: `Error: ${error.response?.data.error || 'Something went wrong'}`, success: false });
    }
  };

  return (
    <div className="container">
      <h1>Merchant Onboarding</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="businessName">Business Name</label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            value={merchantData.businessName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={merchantData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactInfo">Contact Information</label>
          <input
            type="text"
            id="contactInfo"
            name="contactInfo"
            value={merchantData.contactInfo}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Onboard Merchant</button>
      </form>
      {responseMessage && (
        <p className={`message ${responseMessage.success ? 'success' : 'error'}`}>
          {responseMessage.text}
        </p>
      )}
    </div>
  );
};

export default MerchantForm;