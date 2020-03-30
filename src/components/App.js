import React, { Component } from 'react';
import Axios from "axios";
import './App.css';
import Loader from "./Loader";
import ImageGallery from './ImageGallery'


export default class App extends Component {
    state = {
        images: [],
        loading: false
    };

    componentDidMount() {
        Axios
            .get(`https://pixabay.com/api/?q=yellow+flowers&page=1&key=15810105-9185c632070137508165f7ee5&image_type=photo&orientation=horizontal&per_page=12`)
            .then(response => {
                this.setState({
                    images: response.data.hits,
                })
            })
    }

    render() {
        return (
            <div className='App'>
                {this.state.loading && <Loader/>}
                {this.state.images && <ImageGallery gallery={this.state.images}/>}
            </div>
        );
    }
};
