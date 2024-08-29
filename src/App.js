import React, { useState } from 'react';
import MerchantTable from './components/MerchantList'; // Ensure correct import
import MerchantOnboardingForm from './components/MerchantOnBoardingForm'; // Ensure correct import
import RainforestMerchantOnboarding from './components/RainforestMerchantOnboarding ';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [selectedMerchantId, setSelectedMerchantId] = useState(null);
  const [selectedApplicationId, setSelectedApplicationId] = useState(null);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);

  const handlePendingClick = (merchant) => {
    setSelectedMerchantId(merchant.merchant_id);
    setSelectedApplicationId(merchant.latest_merchant_application.merchant_application_id);
    setShowOnboarding(true);
  };

  const handleBack = () => {
    setShowOnboarding(false);
    setSelectedMerchantId(null);
    setSelectedApplicationId(null);
  };

  const handleCreateClick = () => {
    setShowCreateForm(true);
  };

  const handleCloseForm = () => {
    setShowCreateForm(false);
  };

  return (
    <div className="app-container">
       <ToastContainer />
      <header className="header">
        <h1>Merchant Page</h1>
      </header>

      {showCreateForm ? (
        <div className="overlay">
          <div className="form-modal">
            <MerchantOnboardingForm onClose={handleCloseForm} />
          </div>
        </div>
      ) : showOnboarding ? (
        <div className="overlay">
          <div className="form-modal">
            <RainforestMerchantOnboarding
              merchantId={selectedMerchantId}
              applicationId={selectedApplicationId}
              onBack={handleBack}
            />
          </div>
        </div>
      ) : (
        <div>
          <button className="create-button" onClick={handleCreateClick}>Create Merchant</button>
          <MerchantTable onPendingClick={handlePendingClick} />
        </div>
      )}
    </div>
  );
};

export default App;
