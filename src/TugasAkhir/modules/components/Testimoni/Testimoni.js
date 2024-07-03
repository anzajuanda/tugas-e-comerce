import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Rating from 'react-rating-stars-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import ModalImage from 'react-modal-image';
import Modal from 'react-modal';
import './Ts.css';

const Testimoni = () => {
  const [testimonies, setTestimonies] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [uploadedImage, setUploadedImage] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedModalImage, setSelectedModalImage] = useState('');
  const [filterRating, setFilterRating] = useState(0);

  useEffect(() => {
    fetchTestimonies();
  }, []);

  const fetchTestimonies = async () => {
    try {
      const response = await axios.get('/api/testimonies');
      setTestimonies(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddTestimoni = async (e) => {
    e.preventDefault();

    if (!name || !message || rating === 0) {
      alert('Nama, pesan, dan rating harus diisi');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('message', message);
      formData.append('rating', rating);
      formData.append('image', selectedImage);
      formData.append('video', selectedVideo);

      const response = await axios.post('/api/testimonies', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setUploadedImage(response.data.image);

      fetchTestimonies();
      setName('');
      setMessage('');
      setRating(0);
      setSelectedImage(null);
      setSelectedVideo(null);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteTestimoni = async (id) => {
    try {
      await axios.delete(`/api/testimonies/${id}`);
      fetchTestimonies();
    } catch (error) {
      console.log(error);
    }
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleVideoChange = (e) => {
    setSelectedVideo(e.target.files[0]);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleFilterRating = (newRating) => {
    setFilterRating(newRating);
  };

  const filteredTestimonies = testimonies.filter((testimony) => {
    if (filterRating === 0) {
      return true;
    }
    return testimony.rating === filterRating;
  });

  const itemsPerPage = 2;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedTestimonies = filteredTestimonies.slice(startIndex, endIndex);
  const showPreviousButton = currentPage > 1;
  const showNextButton = endIndex < filteredTestimonies.length;

  const openModal = (image) => {
    setSelectedModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="testimoni-container">
      <div className="testimoni-form-container">
        <h2 className="form-title">Add Testimonials</h2>
        <form onSubmit={handleAddTestimoni} className="testimoni-form">
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
          </div>
          <div className="rating-label">
            <label>Rating:</label>
            <Rating
              count={5}
              size={24}
              activeColor="#ffd700"
              onChange={handleRatingChange}
              value={rating}
              classNames="rating-stars"
              filledIcon={<FontAwesomeIcon icon={faStar} />}
              emptyIcon={<FontAwesomeIcon icon={faStar} />}
            />
          </div>
          <div>
            <label htmlFor="image">Image:</label>
            <input type="file" id="image" onChange={handleImageChange} accept="image/*" />
          </div>
          <div>
            <label htmlFor="video">Video:</label>
            <input type="file" id="video" onChange={handleVideoChange} accept="video/*" />
          </div>
          <button type="submit">Add Testimony</button>
        </form>
      </div>
      <div className="testimoni-separator"></div>
      <div className="testimoni-list-container">
        <h2 className="list-title">Testimonials List</h2>
        <div className="filter-container">
          <label htmlFor="filter-rating">Filter by Rating:</label>
          <Rating
            count={5}
            size={24}
            activeColor="#ffd700"
            onChange={handleFilterRating}
            value={filterRating}
            classNames="filter-rating"
            filledIcon={<FontAwesomeIcon icon={faStar} />}
            emptyIcon={<FontAwesomeIcon icon={faStar} />}
          />
        </div>
        <ul className="testimoni-list">
          {displayedTestimonies.length > 0 ? (
            displayedTestimonies.map((testimony) => (
              <li key={testimony.id}>
                <div className="testimoni-content">
                  <div className="testimoni-info">
                    <p className="testimoni-name">
                      <strong>Name:</strong> {testimony.name}
                    </p>
                    <p className="testimoni-rating">
                      <strong>Rating:</strong>{' '}
                      <Rating
                        count={5}
                        size={24}
                        value={testimony.rating}
                        edit={false}
                        activeColor="#ffd700"
                        filledIcon={<FontAwesomeIcon icon={faStar} />}
                        emptyIcon={<FontAwesomeIcon icon={faStar} />}
                      />
                    </p>
                    <p className="testimoni-message">
                      <strong>Message:</strong> {testimony.message}
                    </p>
                    <button className="delete-button"
                      onClick={() => handleDeleteTestimoni(testimony.id)}
                    >
                      Delete
                    </button>
                  </div>
                  {testimony.image && (
                    <div className="testimoni-image">
                      <ModalImage
                        small={testimony.image}
                        large={testimony.image}
                        alt="Testimony"
                        className="testimoni-img"
                      />
                    </div>
                  )}
                  {testimony.video && (
                    <div className="testimoni-video">
                      <video src={testimony.video} controls className="testimoni-video" />
                    </div>
                  )}
                </div>
                <div className="testimoni-separator"></div>
              </li>
            ))
          ) : (
            <li className="no-testimony">Belum ada testimoni</li>
          )}
        </ul>
        <div className="pagination-container">
          {showPreviousButton && (
            <button className="pagination-button" onClick={handlePrevPage}>
              Previous
            </button>
          )}
          {showNextButton && (
            <button className="pagination-button" onClick={handleNextPage}>
              Next
            </button>
          )}
        </div>
      </div>

      {/* Image Modal */}
      <Modal isOpen={isModalOpen} onRequestClose={closeModal} className="modal" overlayClassName="modal-overlay">
        <div className="modal-content">
          <img src={selectedModalImage} alt="Testimony" className="modal-img" />
        </div>
        <button className="modal-close" onClick={closeModal}>
          Close
        </button>
      </Modal>
    </div>
  );
};

export default Testimoni;
