import '../Contact/Contact.css';
import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleTopicChange = (e) => {
    setTopic(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = '6283146267242'; // Ganti dengan nomor telepon yang sesuai
    const messageText = `Halo, saya ${firstName} ${lastName}. Topik: ${topic}. Email: ${email}. Pesan: ${message}`; // Pesan yang ingin dikirim

    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      messageText
    )}`;

    window.open(whatsappURL, '_blank');

    setFirstName('');
    setLastName('');
    setEmail('');
    setTopic('');
    setMessage('');
  };

  return (
    <Fade>
      <section className="contact-section">
        <div className="contact-content">
          <div className="contact-left">
            <h2 className="contact-title">Contact Us</h2>
            <p className="contact-description">Having trouble or any feedback? Send us a message:</p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-input-group">
              <input
                type="text"
                className="contact-input"
                placeholder="First Name"
                value={firstName}
                onChange={handleFirstNameChange}
                required
              />
              <input
                type="text"
                className="contact-input"
                placeholder="Last Name"
                value={lastName}
                onChange={handleLastNameChange}
                required
              />
            </div>
            <div className="contact-input-groupz">
              <input
                type="email"
                className="contact-input"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="contact-input-group">
              <select className="contact-input" value={topic} onChange={handleTopicChange} required>
                <option value="">Select Topic</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="My Order">My Order</option>
                <option value="Request Collaboration">Request Collaboration</option>
              </select>
            </div>
            <textarea
              className="contact-input contact-message"
              placeholder="Message"
              value={message}
              onChange={handleMessageChange}
              required
            ></textarea>
            <button className="contact-button" type="submit">
              Send Message
            </button>
          </form>
          <div className="contact-info">
            <div className="contact-info-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126997.19399212164!2d106.77111948672916!3d-6.595017246606177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f40aeb0437d5%3A0x8c65d511e82ae33a!2sBogor%2C%20Kota%20Bogor%2C%20Jawa%20Barat!5e0!3m2!1sen!2sid!4v1561019720543!5m2!1sen!2sid"
                width="150%"
                height="350"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                title="Map"
              ></iframe>
            </div>
            <div className="contact-info-address">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-info-icon" />
              Need Some Wine, Bogor, Indonesia
            </div>
            <div className="contact-info-email">
              <FontAwesomeIcon icon={faEnvelope} className="contact-info-icon" />
              Email: NeedSomeWine@gmail.com
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default ContactUs;
