import React from 'react';
import './ImageGalleryItem.css';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({
  imgUrl,
  altName,
  largeImageUrl,
  onSelectImage,
}) {
  return (
    <li className="ImageGalleryItem">
      <img
        src={imgUrl}
        alt={altName}
        className="ImageGalleryItem-image"
        data-large-image-url={largeImageUrl}
        onClick={onSelectImage}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  altName: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string,
  onSelectImage: PropTypes.func.isRequired,
};
