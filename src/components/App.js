import React, { Component } from 'react';
import './App.css';
import Loader from './Loader';
import ImageGallery from './ImageGallery';
import Searchbar from './Searchbar';
import Button from './Button';
import Modal from './Modal';
import galleryApi from './services/galleryApi';

export default class App extends Component {
  state = {
    images: [],
    loading: false,
    searchQuery: '',
    error: null,
    page: 1,
    total: 0,
    linkLargeImage: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    const prevPage = prevState.page;
    const nextPage = this.state.page;
    if (prevQuery !== nextQuery) {
      this.fetchGallery();
    }
    if (prevPage !== nextPage) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  fetchGallery = () => {
    const { searchQuery, page } = this.state;
    this.setState({ loading: true });
    galleryApi
      .fetchGalleryWithQuery(searchQuery, page)
      .then(({ images, totalImages }) =>
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
          total: totalImages,
        })),
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearchBarSubmit = searchQuery => {
    this.setState({ searchQuery, images: [], page: 1 });
  };

  handleShowModal = e =>
    this.setState({ linkLargeImage: e.target.dataset.largeImageUrl });

  handleCloseModal = e => this.setState({ linkLargeImage: '' });

  render() {
    const { images, loading, error, total, linkLargeImage } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearchBarSubmit} />
        {loading && <Loader />}
        {images.length > 0 && (
          <ImageGallery
            gallery={images}
            onViewLargeImage={this.handleShowModal}
          />
        )}
        {images.length > 0 && !loading && total !== images.length && (
          <Button onFetchNextImages={this.fetchGallery} />
        )}
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {linkLargeImage && (
          <Modal
            selectLinkImage={linkLargeImage}
            onCloseModal={this.handleCloseModal}
          />
        )}
      </div>
    );
  }
}
