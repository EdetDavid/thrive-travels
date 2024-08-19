import React from 'react';
import PropTypes from 'prop-types';
import './Home.css'; // Make sure to create and import this CSS file for custom styles

const Images = ({ image, caption }) => (
  <div className="d-block w-100" style={{ backgroundImage: `url(${image})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="caption">{caption}</div>
  </div>
);

Images.propTypes = {
  image: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};

export default Images;
