import React from 'react';

const Review = ({ data, canSubmit }) => {
  const requiredFields = [
    'name', 'legal_name', 'merchant_type', 'mcc', 'email', 'website', 'phone_number',
    'average_payment_amount', 'maximum_payment_amount', 'total_monthly_payments_amount',
    'address_line_1', 'address_line_2', 'city', 'state', 'postal_code',
    'owner_first_name', 'owner_last_name', 'owner_dob', 'owner_ssn_last_4', 'owner_email',
    'owner_phone_number', 'owner_address_line_1', 'owner_address_line_2', 'owner_city', 'owner_state', 'owner_postal_code'
  ];

  const isFieldMissing = (field) => {
    return requiredFields.includes(field) && !data[field];
  };

  const missingFields = requiredFields.filter(field => isFieldMissing(field));

  return (
    <div>
      <h2>Review</h2>
      <h3>Merchant Info</h3>
      <p><strong>First Name:</strong> {data.name} {isFieldMissing('name') && <span className="error-icon">*</span>}</p>
      <p><strong>Legal Name:</strong> {data.legal_name} {isFieldMissing('legal_name') && <span className="error-icon">*</span>}</p>
      <p><strong>Merchant Type:</strong> {data.merchant_type} {isFieldMissing('merchant_type') && <span className="error-icon">*</span>}</p>
      <p><strong>MCC:</strong> {data.mcc} {isFieldMissing('mcc') && <span className="error-icon">*</span>}</p>
      <p><strong>Email:</strong> {data.email} {isFieldMissing('email') && <span className="error-icon">*</span>}</p>
      <p><strong>Website:</strong> {data.website} {isFieldMissing('website') && <span className="error-icon">*</span>}</p>
      <p><strong>Phone Number:</strong> {data.phone_number} {isFieldMissing('phone_number') && <span className="error-icon">*</span>}</p>

      ---------------------------------------------------------------------------------------------------------------

      <h3>Business Info</h3>
      <p><strong>Average Payment Amount:</strong> {data.average_payment_amount} {isFieldMissing('average_payment_amount') && <span className="error-icon">*</span>}</p>
      <p><strong>Maximum Payment Amount:</strong> {data.maximum_payment_amount} {isFieldMissing('maximum_payment_amount') && <span className="error-icon">*</span>}</p>
      <p><strong>Total Monthly Payments Amount:</strong> {data.total_monthly_payments_amount} {isFieldMissing('total_monthly_payments_amount') && <span className="error-icon">*</span>}</p>

      ----------------------------------------------------------------------------------------------------------------

      <h3>Address Info</h3>
      <p><strong>Address Line 1:</strong> {data.address_line_1} {isFieldMissing('address_line_1') && <span className="error-icon">*</span>}</p>
      <p><strong>Address Line 2:</strong> {data.address_line_2} {isFieldMissing('address_line_2') && <span className="error-icon">*</span>}</p>
      <p><strong>City:</strong> {data.city} {isFieldMissing('city') && <span className="error-icon">*</span>}</p>
      <p><strong>State:</strong> {data.state} {isFieldMissing('state') && <span className="error-icon">*</span>}</p>
      <p><strong>ZIP/Postal Code:</strong> {data.postal_code} {isFieldMissing('postal_code') && <span className="error-icon">*</span>}</p>

      -----------------------------------------------------------------------------------------------------------------

      <h3>Owner Info</h3>
      <p><strong>First Name:</strong> {data.owner_first_name} {isFieldMissing('owner_first_name') && <span className="error-icon">*</span>}</p>
      <p><strong>Last Name:</strong> {data.owner_last_name} {isFieldMissing('owner_last_name') && <span className="error-icon">*</span>}</p>
      <p><strong>Date of Birth:</strong> {data.owner_dob} {isFieldMissing('owner_dob') && <span className="error-icon">*</span>}</p>
      <p><strong>Social Security Number (Last 4 Digits):</strong> {data.owner_ssn_last_4} {isFieldMissing('owner_ssn_last_4') && <span className="error-icon">*</span>}</p>
      <p><strong>Email:</strong> {data.owner_email} {isFieldMissing('owner_email') && <span className="error-icon">*</span>}</p>
      <p><strong>Phone Number:</strong> {data.owner_phone_number} {isFieldMissing('owner_phone_number') && <span className="error-icon">*</span>}</p>
      <p><strong>Address Line 1:</strong> {data.owner_address_line_1} {isFieldMissing('owner_address_line_1') && <span className="error-icon">*</span>}</p>
      <p><strong>Address Line 2:</strong> {data.owner_address_line_2} {isFieldMissing('owner_address_line_2') && <span className="error-icon">*</span>}</p>
      <p><strong>City:</strong> {data.owner_city} {isFieldMissing('owner_city') && <span className="error-icon">*</span>}</p>
      <p><strong>State:</strong> {data.owner_state} {isFieldMissing('owner_state') && <span className="error-icon">*</span>}</p>
      <p><strong>ZIP/Postal Code:</strong> {data.owner_postal_code} {isFieldMissing('owner_postal_code') && <span className="error-icon">*</span>}</p>

      ---------------------------------------------------------------------------------------------------------------------------

      {!canSubmit && <p className="error-message">Please fill out all required fields.</p>}
    </div>
  );
};

export default Review;
