import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Detail/Detail.css';
import { Link } from 'react-router-dom';
import paintingImage1 from '../Images/g1.jpg';
import paintingImage2 from '../Images/g36.jpg';
import paintingImage3 from '../Images/g35.jpg';
import thumbnailImage1 from '../Images/g1.jpg';
import thumbnailImage2 from '../Images/g36.jpg';
import thumbnailImage3 from '../Images/g35.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const DetailPage = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [title, setTitle] = useState('Daughter Queen of South');
  const [category, setCategory] = useState('Canvas');
  const [size, setSize] = useState('40x60 cm');
  const [price, setPrice] = useState('$99.99');

  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current.slickNext();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <button className="slick-next" aria-label="Next" />,
    prevArrow: <button className="slick-prev" aria-label="Previous" />,
    afterChange: (current) => setCurrentSlide(current),
  };

  const thumbnailImages = [thumbnailImage1, thumbnailImage2, thumbnailImage3];

  const handleThumbnailClick = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  const createWhatsAppMessage = () => {
    const message = `Title: ${title}%0ACategory: ${category}%0ASize: ${size}%0APrice: ${price}`;
    const phoneNumber = '6283146267242';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    return whatsappURL;
  };

  return (
    <div className="detail-container">
      <div className="detail-slider">
        <Slider ref={sliderRef} {...sliderSettings}>
          <div className="slider-item">
            <img src={paintingImage1} alt="Product" />
          </div>
          <div className="slider-item">
            <img src={paintingImage2} alt="Product" />
          </div>
          <div className="slider-item">
            <img src={paintingImage3} alt="Product" />
          </div>
        </Slider>
      </div>
      <div className="detail-thumbnails">
        {thumbnailImages.map((thumbnail, index) => (
          <img
            key={index}
            src={thumbnail}
            alt={`Thumbnail ${index}`}
            className={`thumbnail-item ${currentSlide === index ? 'active' : ''}`}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
      <div className="detail-content">
        <h2 className="detail-title">{title}</h2>
        <div className="separator"></div>
        <p className="detail-category">Category: {category}</p>
        <p className="detail-size">Size: {size}</p>
        <p className="detail-price">Price: {price}</p>
        <div className="separator"></div>
        <p className="detail-description">
          The Daughter Queen of South is a captivating artwork that portrays strength, elegance, and grace. It showcases the beauty and power of femininity, with intricate details and vibrant colors. This masterpiece will add a touch of sophistication to any space, making it a perfect choice for art enthusiasts and collectors alike.
        </p>
        <div className="separator"></div>
        <Link to={createWhatsAppMessage()} className="detail-button">
          <FontAwesomeIcon icon={faShoppingCart} className="button-icon" />
          Order Now
        </Link>
      </div>
    </div>
  );
};

export default DetailPage;
