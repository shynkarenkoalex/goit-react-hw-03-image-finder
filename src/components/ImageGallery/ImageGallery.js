import React from 'react';
import './ImageGallery.css';
import ImageGalleryItem from '../ImageGalleryItem';
import PropTypes from 'prop-types';

export default function ImageGallery({ gallery, onViewLargeImage }) {
  return (
    <ul className="ImageGallery">
      {gallery.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          imgUrl={webformatURL}
          key={id}
          altName={tags}
          largeImageUrl={largeImageURL}
          onSelectImage={onViewLargeImage}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(Object).isRequired,
  onViewLargeImage: PropTypes.func.isRequired,
};
