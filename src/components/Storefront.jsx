import React from 'react';

export default class Storefront extends React.Component{
    state = {
        loading: false
    }

    async componentDidMount() {
        const bookApiUrl = "https://www.googleapis.com/books/v1/volumes?q=HTML5";
      }
}