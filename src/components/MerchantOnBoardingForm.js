import React, { useState } from 'react';
import Stepper from './stepper';
import MerchantInfo from './MerchantInfo';
import BusinessInfo from './BusinessInfo';
import AddressInfo from './AddressInfo';
import OwnerInfo from './OwnerInfo';
import Review from './Review';
import { toast } from 'react-toastify';

const MerchantOnboardingForm = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    legal_name: '',
    merchant_type: 'INDIVIDUAL',
    mcc: '',
    email: '',
    website: '',
    phone_number: '',
    average_payment_amount: '',
    maximum_payment_amount: '',
    total_monthly_payments_amount: '',
    address_line_1: '',
    address_line_2: '',
    city: '',
    state: '',
    postal_code: '',
    owner_first_name: '',
    owner_last_name: '',
    owner_dob: '',
    owner_ssn_last_4: '',
    owner_email: '',
    owner_phone_number: '',
    owner_address_line_1: '',
    owner_address_line_2: '',
    owner_city: '',
    owner_state: '',
    owner_postal_code: ''
  });

  const steps = ['Merchant Info', 'Business Info', 'Address Info', 'Owner Info', 'Review'];

  const isFormComplete = () => {
    // Example logic to determine if the form is complete
    return Object.values(formData).every(value => value.trim() !== '');
  };

  const nextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length));
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (currentStep < steps.length) {
      nextStep();
    } else {
      // Final submission logic here
      console.log('Form submitted');
      console.log(formData);
      try {
        const response = await fetch('https://payment-task-backend.vercel.app/api/create-merchant', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        // Handle successful response
        const result = await response.json();
        console.log('Merchant created successfully:', result);
        if (result) {
          onClose();
          toast.success("Merchant created successfully!");
        }

      } catch (error) {
        toast.error("Merchant not created! There is a error in give values check that");
        console.error('Error creating merchant:', error);
      }
    }
  };

  const handleFormChange = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
  };

  return (
    <div className="form-container">
      <button className="button back-button" onClick={onClose}>Close</button>
      <Stepper steps={steps} currentStep={currentStep} />
      <div className="form-content">
        <form onSubmit={handleSubmit}>
          {currentStep === 1 && <MerchantInfo data={formData} onChange={handleFormChange} />}
          {currentStep === 2 && <BusinessInfo data={formData} onChange={handleFormChange} />}
          {currentStep === 3 && <AddressInfo data={formData} onChange={handleFormChange} />}
          {currentStep === 4 && <OwnerInfo data={formData} onChange={handleFormChange} />}
          {currentStep === 5 && <Review data={formData} canSubmit={isFormComplete()} />}

          <div className="button-group">
            {currentStep > 1 && <button type="button" className="back-button" onClick={prevStep}>Back</button>}
            <button
              type="submit"
              className="submit-button"
              disabled={currentStep === steps.length && !isFormComplete()}
            >
              {currentStep === steps.length ? 'Submit' : 'Next'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MerchantOnboardingForm;
