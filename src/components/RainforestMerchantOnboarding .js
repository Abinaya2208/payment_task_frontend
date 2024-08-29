import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const RainforestMerchantOnboarding = ({ merchantId, applicationId, onBack }) => {
  const [sessionKey, setSessionKey] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch session key from API
    fetchSessionKey();
  }, []);

  const fetchSessionKey = async () => {
    try {
      const response = await axios.post('https://payment-task-backend.vercel.app/api/create-session');
      setSessionKey(response.data.data.data.session_key); // Adjust based on the actual response structure
      toast.success("Session key successfully fetched!");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (sessionKey) {
      const component = document.querySelector('rainforest-merchant-onboarding');
      if (component) {
        const handleFormSubmission = (event) => {
          onBack(); // Go back to the list page
          toast.success("Merchant successfully onboarded!");
        };

        component.addEventListener('submitted', handleFormSubmission);

        // Cleanup to avoid memory leaks
        return () => {
          component.removeEventListener('submitted', handleFormSubmission);
        };
      }
    }
  }, [sessionKey, onBack]);

  if (loading) return <div className="loading">Loading session key...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  console.log("applicationId",applicationId)
  return (
    <div className="onboarding-container">
      <button className="button back-button" onClick={onBack}>Back to List</button>
      {sessionKey ? (
        <rainforest-merchant-onboarding
          session-key={sessionKey}
          merchant-id={merchantId}
          merchant-application-id={applicationId}
        ></rainforest-merchant-onboarding>
      ) : (
        <div className="loading">Loading session key...</div>
      )}
    </div>
  );
};

export default RainforestMerchantOnboarding;
