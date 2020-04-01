import React, { Component } from 'react';
import './Modal.css';
import PropTypes from 'prop-types';

export default class Modal extends Component {
  static propTypes = {
    selectLinkImage: PropTypes.string.isRequired,
    onCloseModal: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  render() {
    return (
      <div className="Overlay">
        <div className="Modal">
          <img src={this.props.selectLinkImage} alt="" />
        </div>
      </div>
    );
  }
}
