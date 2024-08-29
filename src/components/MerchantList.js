import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';


const MerchantTable = ({ onPendingClick }) => {
  const [merchants, setMerchants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch merchant data
    if(!merchants.length){
      fetchMerchants();
    }
  }, []);

  const fetchMerchants = async () => {
    try {
      const response = await axios.get('https://payment-task-backend.vercel.app/api/merchants'); 
      setMerchants(response.data.data.data.results); 
      toast.dismiss()
      toast.success("Merchants fetched successfully !");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <>
  <div className="message-section">
        <p>
          <i
            className="fa fa-exclamation-circle"
            style={{ color: 'orange', marginRight: '8px' }}
          ></i>
          To initiate a new merchant profile, click the 'Create Merchant' button.
        </p>
        <p>
          <i
            className="fa fa-exclamation-circle"
            style={{ color: 'orange', marginRight: '8px' }}
          ></i>
          To proceed with merchant onboarding, select the 'ON BOARD MERCHANT' option within the table.
        </p>
      </div>

    <div className="merchant-table-container">
      <h1>Merchant List</h1>
      <table className="merchant-table">
        <thead>
          <tr>
            <th>Merchant Name</th>
            <th>Billing Profile Name</th>
            <th>Billing Frequency</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {merchants && merchants.map((merchant, index) => (
            <tr key={index}>
              <td>{merchant.name}</td>
              <td>{merchant.billing_profile.name}</td>
              <td>{merchant.billing_frequency}</td>
              <td>
                {
                    merchant.status === 'PENDING' ?
                <>
                <span
                  className={`status-${merchant.status.toLowerCase()}`}
                >
                  {merchant.status}
                </span>
                <button
                  className= 'create-button'
                  onClick={() =>
                    merchant.status === 'PENDING' &&
                    onPendingClick(merchant)
                  }
                  style={{  marginLeft: '20px' ,marginBottom: '20px',
                    marginBottom: '0px',
                    padding: '6px 10px'}}
                >
                  ON BOARD MERCHANT
                </button>
                </>
                    :
                <span
                  className={`status-${merchant.status.toLowerCase()}`}
                >
                  {merchant.status}
                </span>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default MerchantTable;
