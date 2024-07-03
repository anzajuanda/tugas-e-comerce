
import { Container, Row, Col } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Galery.css';

import painting1 from '../Images/g1.jpg' ;
import painting2 from '../Images/g2.jpg' ;
import painting3 from '../Images/g3.jpg' ;
import painting4 from '../Images/g4.jpg' ;
import painting5 from '../Images/g5.jpg' ;
import painting6 from '../Images/g6.jpg' ;
import painting7 from '../Images/g7.jpg' ;
import painting8 from '../Images/g8.jpg' ;
import painting9 from '../Images/g9.jpg' ;
import painting10 from '../Images/g10.jpg' ;
import painting11 from '../Images/g11.jpg' ;
import painting12 from '../Images/g12.jpg' ;
import painting13 from '../Images/g13.jpg' ;
import painting14 from '../Images/g14.jpg' ;
import painting15 from '../Images/g15.jpg' ;
import painting16 from '../Images/g16.jpg' ;
import painting17 from '../Images/g17.jpg' ;
import painting18 from '../Images/g18.jpg' ;
import painting19 from '../Images/g19.jpg' ;
import painting20 from '../Images/g20.jpg' ;
import painting21 from '../Images/g21.jpg' ;
import painting22 from '../Images/g22.jpg' ;
import painting23 from '../Images/g23.jpg' ;
import painting24 from '../Images/g24.jpg' ;
import painting25 from '../Images/g25.jpg' ;
import painting26 from '../Images/g26.jpg' ;
import painting27 from '../Images/g27.jpg' ;


const Gallery = () => {
  const paintings = [
    {
      id: 1,
      title: 'Queen Of south',
      image: painting1,
      artist: 'Acrylic on Canvas 30 x 30',
      
    },
    {
      id: 2,
      title: 'Split Head',
      image: painting2,
      artist: 'Acrylic on Canvas 40 x 40',
    },

    {
        id: 3,
        title: 'Funkies Girl',
        image: painting3,
        artist: 'Acrylic on canvas 30 x 25',
      },

      {
        id: 4,
        title: 'портал',
        image: painting4,
        artist: 'Paint On Wall',
      },

      {
        id: 5,
        title: 'Stay Awake',
        image: painting5,
        artist: 'Paint on Jeans Jacket',
      },

      {
        id: 6,
        title: 'Si Kopet',
        image: painting6,
        artist: 'Acrylic on canvas 20 x 20',
      },

      {
        id: 7,
        title: 'Joker',
        image: painting7,
        artist: 'Acrylic on canvas 40 x 30',
      },

      {
        id: 8,
        title: 'The Fourth Colour',
        image: painting8,
        artist: 'Acrylic on hexagon canvas 20 x 20',
      },

      {
        id: 9,
        title: 'Release Me',
        image: painting9,
        artist: 'Acrylic on canvas 40 x 30',
      },

      {
        id: 10,
        title: 'Εἰρήνη//Ëirene',
        image: painting10,
        artist: 'Acrylic on canvas 40 x 30',
      },

      {
        id: 11,
        title: 'Selene',
        image: painting11,
        artist: 'Acrylic on canvas 40 x 30',
      },

      {
        id: 12,
        title: 'уныние',
        image: painting12,
        artist: 'Acrylic on canvas 30 x 40',
      },

      {
        id: 13,
        title: ' K ',
        image: painting13,
        artist: 'Acrylic on round canvas',
      },

      {
        id: 14,
        title: 'Bananacle',
        image: painting14,
        artist: 'Acrylic on canvas 20 x 60',
      },

      {
        id: 15,
        title: 'σατανάς',
        image: painting15,
        artist: 'Painting In Sheet With Frame',
      },

      {
        id: 16,
        title: 'Flames Helmet',
        image: painting16,
        artist: 'Painting In Bogo Helmet',
      },

      {
        id: 17,
        title: 'Mooners',
        image: painting17,
        artist: 'Acrylic on canvas 30 x 40',
      },

      {
        id: 18,
        title: 'Ayang Nelepon',
        image: painting18,
        artist: 'Acrylic on canvas 30 x 25',
      },

      {
        id: 19,
        title: 'Playing God',
        image: painting19,
        artist: 'Acrylic on frame 30 x 25',
      },

      {
        id: 20,
        title: 'Dirty Mind',
        image: painting20,
        artist: 'Acrylic on canvas 40 x 30',
      },

      {
        id: 21,
        title: 'Sick Feeling',
        image: painting21,
        artist: 'Acrylic on canvas 25 x 25',
      },

       {
        id: 22,
        title: 'Old picture, and i draw you Dreamin',
        image: painting22,
        artist: 'Acrylic on Mahoni wood 30x40 with varnish',
      },

      {
        id: 23,
        title: 'Mars',
        image: painting23,
        artist: 'Acrylic on canvas 25 x 25',
      },

      {
        id: 24,
        title: 'Moon',
        image: painting24,
        artist: 'Acrylic on canvas 40 x 30',
      },

      {
        id: 25,
        title: 'MonaLisa',
        image: painting25,
        artist: 'Draw In sheet With Frame',
      },

      {
        id: 26,
        title: 'Straightout- Forsken Upon Nemesis',
        image: painting26,
        artist: 'Acrylic on canvas 60 x 40',
      },

      {
        id: 27,
        title: 'Melankolia',
        image: painting27,
        artist: 'Draw with hatch method in sheet',
      },

    

      

    // Add more painting objects here
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const paintingsPerPage = 9;
  const totalPages = Math.ceil(paintings.length / paintingsPerPage);

  const handleClickPrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleClickNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const indexOfLastPainting = currentPage * paintingsPerPage;
  const indexOfFirstPainting = indexOfLastPainting - paintingsPerPage;
  const currentPaintings = paintings.slice(indexOfFirstPainting, indexOfLastPainting);

  

  return (
    
    <section className="gallery-section">
      <Container>
        <h2 className="section-title">~Gallery~</h2>
        <Row>
        {currentPaintings.map((painting) => (
          
            <Col key={painting.id} md={4} className="painting-card">
              <fade>
              <img src={painting.image} alt={painting.title} className="painting-image" />
              <div className="painting-details">
                <h3 className="painting-title">{painting.title}</h3>
                <p className="painting-artist">~ {painting.artist}</p>
                <div className="order-button">
        <Link to="/Detail" className="pesan-sekarang-button">Pesan Sekarang</Link>
      </div>
              </div>
              </fade>
            </Col>
          ))}
        </Row>
        <div className="pagination">
          <button onClick={handleClickPrevious} disabled={currentPage === 1}>
            Previous
          </button>
          <button onClick={handleClickNext} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Gallery;
