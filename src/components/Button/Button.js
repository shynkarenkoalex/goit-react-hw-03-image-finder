import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

export default function Button({ onFetchNextImages }) {
  return (
    <button type="button" className="Button" onClick={onFetchNextImages}>
      Loard more
    </button>
  );
}

Button.propTypes = {
  onFetchNextImages: PropTypes.func.isRequired,
};
