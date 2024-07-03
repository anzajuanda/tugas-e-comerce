import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import '../Master-Data/Master.css';

const Order = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [canvasType, setCanvasType] = useState('');
  const [canvasSize, setCanvasSize] = useState('');
  const [additionalItem, setAdditionalItem] = useState('');
  const [additionalMessage, setAdditionalMessage] = useState('');

  const handleWhatsAppOrder = () => {
    const phoneNumber = '628558530861'; // Ganti dengan nomor telepon Anda
    const message = `
    Halo, saya ingin melakukan pemesanan.
    Service: ${selectedService}
    Name: ${name}
    Address: ${address}
    Canvas Type: ${canvasType}
    Canvas Size: ${canvasSize}
    Additional Item: ${additionalItem}
    Additional Message: ${additionalMessage}
  `;
  
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleCanvasTypeChange = (e) => {
    setCanvasType(e.target.value);
  };

  const handleCanvasSizeChange = (e) => {
    setCanvasSize(e.target.value);
  };

  const handleAdditionalItemChange = (e) => {
    setAdditionalItem(e.target.value);
  };

  const handleAdditionalMessageChange = (e) => {
    setAdditionalMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan pengiriman pesanan atau tindakan lain yang diinginkan
    console.log('Service:', selectedService);
    console.log('Image:', selectedImage);
    console.log('Name:', name);
    console.log('Address:', address);
    console.log('Canvas Type:', canvasType);
    console.log('Canvas Size:', canvasSize);
    console.log('Additional Item:', additionalItem);
    console.log('Additional Message:', additionalMessage);
    // Reset form setelah pengiriman pesanan
    setSelectedService('');
    setSelectedImage(null);
    setName('');
    setAddress('');
    setCanvasType('');
    setCanvasSize('');
    setAdditionalItem('');
    setAdditionalMessage('');
  };

  return (
    <Fade>
      <section className="order-section">
        <div className="order-content">
          <h2 className="order-title">Order Services</h2>
          <form className="order-form" onSubmit={handleSubmit}>
            <div className="order-input-group">
              <label htmlFor="service" className="order-label">
                Choose a Service:
              </label>
              <select
                id="service"
                className="order-select"
                value={selectedService}
                onChange={handleServiceChange}
                required
              >
                <option value="">Select a Service</option>
                <option value="Custom Painting">Custom Painting</option>
                <option value="Wall Painting">Wall Painting</option>
                <option value="Custom Helmet">Custom Helmet</option>
                <option value="Restoration Helmet">Restoration Painting</option>
                <option value="Custom Jacket and Shoe">Custom Jacket and Shoe</option>
              </select>
            </div>
            {selectedService === 'Custom Painting' && (
              <>
                <div className="order-input-group">
                  <label htmlFor="name" className="order-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="order-input"
                    value={name}
                    onChange={handleNameChange}
                    required
                  />
                </div>
                <div className="order-input-group">
                  <label htmlFor="address" className="order-label">
                    Address:
                  </label>
                  <textarea
                    id="address"
                    className="order-input"
                    value={address}
                    onChange={handleAddressChange}
                    required
                  ></textarea>
                </div>
                <div className="order-input-group">
                  <label htmlFor="canvasType" className="order-label">
                    Canvas Type:
                  </label>
                  <select
                    id="canvasType"
                    className="order-select"
                    value={canvasType}
                    onChange={handleCanvasTypeChange}
                    required
                  >
                    <option value="">Select a Canvas Type</option>
                    <option value="Canvas">Canvas</option>
                    <option value="Paper">Paper</option>
                  </select>
                </div>
                <div className="order-input-group">
                  <label htmlFor="canvasSize" className="order-label">
                    Canvas Size (in cm):
                  </label>
                  <input
                    type="number"
                    id="canvasSize"
                    className="order-input"
                    value={canvasSize}
                    onChange={handleCanvasSizeChange}
                    required
                  />
                </div>
                <div className="order-input-group">
                  <label htmlFor="additionalItem" className="order-label">
                    Additional Item:
                  </label>
                  <select
                    id="additionalItem"
                    className="order-select"
                    value={additionalItem}
                    onChange={handleAdditionalItemChange}
                    required
                  >
                    <option value="">Select an Additional Item</option>
                    <option value="Glass Frame">Glass Frame</option>
                    <option value="Wooden Frame">Wooden Frame</option>
                  </select>
                </div>
                <div className="order-input-group">
                  <label htmlFor="additionalMessage" className="order-label">
                    Additional Message:
                  </label>
                  <textarea
                    id="additionalMessage"
                    className="order-input"
                    value={additionalMessage}
                    onChange={handleAdditionalMessageChange}
                  ></textarea>
                </div>
              </>
            )}
            <div className="order-input-group">
              <label htmlFor="image" className="order-label">
                Upload Image:
              </label>
              <input
                type="file"
                id="image"
                className="order-file"
                accept="image/*"
                onChange={handleImageChange}
                required
              />
            </div>
            <button className="order-button" type="submit" onClick={handleWhatsAppOrder}>
     Submit Order 
  </button>
            {selectedService === 'Custom Painting' && (
              <div className="order-note">
                <p>
                  <strong>Service Description:</strong> Our custom painting service offers personalized artwork on
                  canvas or paper. You can choose the canvas type, canvas size, and additional items like a glass frame or
                  wooden frame. Feel free to add any additional message for us. We will create a unique painting based on
                  your preferences.
                </p>
              </div>
            )}
          </form>
        </div>
      </section>
    </Fade>
  );
};

export default Order;
