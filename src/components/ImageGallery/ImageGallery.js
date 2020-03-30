import React from "react";
import './ImageGallery.css';

export default function ImageGallery ({gallery}) {
    // console.log(gallery);
    return (
        <ul className='ImageGallery'>
            {gallery.map(({id, webformatURL, largeImageURL}) => (
                <li className="ImageGalleryItem" key={id}>
                    <img src={webformatURL} alt="" className="ImageGalleryItem-image" />
                </li>
            ))}
        </ul>
    )
}