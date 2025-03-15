import React from 'react';
import './Services.css'; // Import the CSS file

function Services() {
  return (
    <div className="services-container">
      <div className="services-header">
        <h1>Post-Harvest Manager Services</h1>
        <p>Let's manager your storage and meet the buyer on time at the affordable price.</p>
        <p>It is time to embrace Modern Agriculture in all ways and ensure food security on time. We can't allow Harvest spoilage</p>
      </div>

      <div className="services-grid">
        <div className="service-item">
          <img src="/images/agriculture products.jpg" alt="Agriculture Products" className="service-icon" />
          <h3>Agriculture Products</h3>
          <p>Evaluates vast a real proven works discount secure care. This Market is awesome.</p>
          <button className="service-button">SEE MORE</button>
        </div>

        <div className="service-item">
          <img src="/images/Farmer and buyers.jpg" alt="Fresh Vegetables" className="service-icon" />
          <h3>Connecting Farmers & Buyers</h3>
          <p>Meet your client and exchange desired value.</p>
          <button className="service-button">SEE MORE</button>
        </div>

        <div className="service-item">
          <img src="/images/storage.jpg" alt="Different Livestock" className="service-icon" />
          <h3>Storage</h3>
          <p> The storage should not be a problem if you've big harvest, there are more storage facilities to help you.</p>
          <button className="service-button">SEE MORE</button>
        </div>

        <div className="service-item">
          <img src="/images/transport .jpg" alt="Farm Factory" className="service-icon" />
          <h3>Transport</h3>
          <p>Depending on the agreement between the two, we help you in transport.</p>
          <button className="service-button">SEE MORE</button>
        </div>
      </div>
    </div>
  );
}

export default Services;

