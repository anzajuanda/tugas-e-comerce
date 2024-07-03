import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Homes/Home.css';

import customPaintingImage from '../Images/g1.jpg';
import wallPaintingImage from '../Images/g4.jpg';
import customHelmetImage from '../Images/g16.jpg';
import artConsultationImage from '../Images/g6.jpg';
import restorationImage from '../Images/g25.jpg';
import customJacketShoeImage from '../Images/g5.jpg';

const HomePage = () => {
  const serviceCards = [
    {
      id: 1,
      title: 'Collection Painting',
      description: 'We create unique and personalized paintings for your specific needs.',
      icon: 'bi-palette',
      image: customPaintingImage,
      link: '/Galery'
    },
    {
      id: 2,
      title: 'Wall Painting',
      description: 'Transform your space with our stunning wall paintings.',
      icon: 'bi-brush',
      image: wallPaintingImage,
      link: '/Master-Data'
    },
    {
      id: 3,
      title: 'Custom Helmet',
      description: 'Get a customized helmet that reflects your style and personality.',
      icon: 'bi-helmet',
      image: customHelmetImage,
      link: '/Master-Data'
    },
    {
      id: 4,
      title: 'Art Consultation',
      description: 'Expert advice and guidance on art selection and curation.',
      icon: 'bi-chat-dots',
      image: artConsultationImage,
      link: 'https://api.whatsapp.com/send?phone=628558530861&text=Hello,%20I%20would%20like%20to%20get%20art%20consultation.%20Please%20assist%20me.',
    },
    {
      id: 5,
      title: 'Restoration',
      description: 'Restore and preserve your valuable artworks with our professional services.',
      icon: 'bi-tools',
      image: restorationImage,
      link: '/Master-Data'
    },
    {
      id: 6,
      title: 'Custom Jacket & Shoe',
      description: 'Stand out from the crowd with custom-designed jackets and shoes.',
      icon: 'bi-tshirt',
      image: customJacketShoeImage,
      link: '/Master-Data'
    },
  ];

  useEffect(() => {
    const taglineContent = document.querySelector('.tagline-content');
    taglineContent.classList.add('animate');
  }, []);

  return (
    <div className="home-container">
      <section className="tagline-section">
        
          <div className="tagline-content">
            <h1 className="title">Welcome to Need Some Wine</h1>
            <p className="tagline">Discover the Beauty of Art</p>
          </div>
        
      </section>

      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {serviceCards.map((service) => (
              <div className="col" key={service.id}>
                <div className="card">
                  <img src={service.image} className="card-img-top" alt={service.title} />
                  <div className="card-body">
                    <i className={`service-icon bi ${service.icon}`}></i>
                    <h3 className="card-title">{service.title}</h3>
                    <p className="card-text">{service.description}</p>
                    <Link to={service.link} className="btn btn-primary">Learn More</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
