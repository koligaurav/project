import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

function HouseholdForm() {
  const navigate = useNavigate(); // Initialize the navigate function
  const [dailyDeliveries, setDailyDeliveries] = useState('');
  const [otherDelivery, setOtherDelivery] = useState('');

  // Function to handle the daily deliveries selection
  const handleDeliveryChange = (e) => {
    setDailyDeliveries(e.target.value);
    if (e.target.value !== 'other') {
      setOtherDelivery(''); // Reset "Other" input when not selecting "Other"
    }
  };

  return (
    <form className="household-form" onSubmit={(e) => e.preventDefault()}>
      <h3>Household Information</h3>

      {/* Household Address */}
      <label htmlFor="address">Household Address:</label>
      <input type="text" id="address" placeholder="Enter your address" required />

      {/* Phone No. */}
      <label htmlFor="phone">Phone No.</label>
      <input type='number' id="phone" placeholder='99999999' required />

      {/* House Details */}
      <h4>House Details:</h4>
      <div className="house-details">
        <label htmlFor="type">Type:</label>
        <select id="type" required>
          <option value="">Select Type</option>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="condo">Condo</option>
          <option value="townhouse">Townhouse</option>
          <option value="duplex">Duplex</option>
        </select>

        <label htmlFor="ownership">Ownership:</label>
        <select id="ownership" required>
          <option value="">Select Ownership</option>
          <option value="owned">Owned</option>
          <option value="rented">Rented</option>
          <option value="mortgaged">Mortgaged</option>
          <option value="lease">Lease</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="size">Size:</label>
        <select id="size" required>
          <option value="">Select Size</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
          <option value="extra-large">Extra Large</option>
          <option value="huge">Huge</option>
        </select>
      </div>

      {/* Monthly Rental Value */}
      <label htmlFor="rental-value">Monthly Rental Value:</label>
      <input type="number" id="rental-value" placeholder="Enter value" required />

      {/* Number Of Persons Living In The House */}
      <h4>Number Of Persons Living In The House:</h4>
      <div className="person-details">
        <label htmlFor="total-persons">Total:</label>
        <select id="total-persons" required>
          <option value="">Select Total Persons</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <label htmlFor="gender">Gender:</label>
        <select id="gender" required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="non-binary">Non-binary</option>
          <option value="other">Other</option>
          <option value="prefer-not-to-say">Prefer Not to Say</option>
        </select>

        <label htmlFor="person-type">Person Type:</label>
        <select id="person-type" required>
          <option value="">Select Person Type</option>
          <option value="adult">Adult</option>
          <option value="child">Child</option>
          <option value="senior">Senior</option>
          <option value="disabled">Disabled</option>
          <option value="pet">Pet</option>
        </select>
      </div>

      {/* Persons needing support */}
      <label htmlFor="support-needs">No. of persons who need support for travel:</label>
      <input type="number" id="support-needs" placeholder='No. of persons who need support for travel' required />

      {/* New Fields */}
      <h4>4. Number Of Vehicles In The Household:</h4>
      <div className="vehicle-details">
        <label htmlFor="vehicle-count">Vehicle Type</label>
        <select id="vehicle-count" required>
          <option value="">Select Type of Vehicles</option>
          <option value="Car/Jeeps/SUVs/Vans used for personal-use">Car/Jeeps/SUVs/Vans used for personal-use</option>
          <option value="Two-wheelers">Two-wheelers</option>
          <option value="Auto-rickshaws">Auto-rickshaws</option>
          <option value="Others(please specify)">Others(please specify)</option>
          <option value="Bicycles">Bicycles</option>
        </select>
        
        <label htmlFor="fuel-type">Fuel Type</label>
        <select id="fuel-type" required>
          <option value="">Select Type of Fuel</option>
          <option value="Petrol/Diesel">Petrol/Diesel</option>
          <option value="CNG">CNG</option>
          <option value="Electric">Electric</option>
        </select>

        <label htmlFor="taxi-count">No. of vehicles used as Taxis/Cabs:</label>
        <input type="number" id="taxi-count" placeholder='No. of vehicles used as Taxis/Cabs' required />

        <label htmlFor="employer-vehicles">No. of employer provided vehicles:</label>
        <input type="number" id="employer-vehicles" placeholder='No. of employer provided vehicles:' required />
      </div>

      {/* Household Monthly Income */}
      <label htmlFor="monthly-income">5. Household Monthly Income From All Sources:</label>
      <select id="monthly-income" required>
          <option value="">Select</option>
          <option value="<=10,000">&lt;=10,000</option>
          <option value="10,001-25,000">10,001-25,000</option>
          <option value="25,001-50,000">25,001-50,000</option>
          <option value="50,001-1,00,000">50,001-1,00,000</option>
          <option value="1,00,001-2,00,000">1,00,001-2,00,000</option>
          <option value=">2 Lakh">&gt;2 Lakh</option>
      </select>

      {/* Daily Deliveries */}
      <label htmlFor="daily-deliveries">6. Things You Get Delivered To Your House On Daily Basis:</label>
      <select id="daily-deliveries" value={dailyDeliveries} onChange={handleDeliveryChange} required>
        <option value="">Select Deliveries</option>
        <option value="milk">Milk</option>
        <option value="newspaper">Newspaper</option>
        <option value="other">Other (please specify)</option>
      </select>

      {/* Conditional Input for "Other" */}
      {dailyDeliveries === 'other' && (
        <div>
          <label htmlFor="other-delivery">Please specify:</label>
          <input
            type="text"
            id="other-delivery"
            value={otherDelivery}
            onChange={(e) => setOtherDelivery(e.target.value)}
            placeholder="Enter other delivery item"
            required
          />
        </div>
      )}

      {/* Frequency Of E-Commerce Purchases */}
      <h4>7. Frequency Of E-Commerce Purchases (Including All Household Members):</h4>
      <div className="ecommerce-details">
        <label htmlFor="food-purchases">Food:</label>
        <select id="food-purchases" required>
          <option value="">Select Frequency</option>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="rarely">Rarely</option>
          <option value="never">Never</option>
        </select>

        <label htmlFor="grocery-purchases">Groceries:</label>
        <select id="grocery-purchases" required>
          <option value="">Select Frequency</option>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="rarely">Rarely</option>
          <option value="never">Never</option>
        </select>

        <label htmlFor="other-purchases">Other:</label>
        <select id="other-purchases" required>
          <option value="">Select Frequency</option>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="rarely">Rarely</option>
          <option value="never">Never</option>
        </select>
      </div>

      {/* Form Buttons */}
      <div className="form-buttons">
        <button type="button" onClick={() => navigate(-1)}>Previous</button>
        <button type="button" onClick={() => navigate('/Personal-Information')}>Continue</button>
      </div>
    </form>
  );
}

export default HouseholdForm;
