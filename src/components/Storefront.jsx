import React from 'react';
import Book from './Book.jsx'

export default class Storefront extends React.Component{
    state = {
        loading: true,
        books: []
    }

    async componentDidMount() {
        const bookApiUrl = "https://www.googleapis.com/books/v1/volumes?q=HTML5";
        let response, data;
        try{
            response = await fetch(bookApiUrl);
            data = await response.json();
            this.setState({
                loading: false,
                books: data.items
            });
        }
        catch(e){
            console.log(e);
            this.setState({ loading:false });
        }
    }

    render() {
        if(this.state.loading){ // render the loading screen
            return (<p>Loading...</p>);
        }

        if(!this.state.books.length){
            return (<p>No books found.</p>)
        }

        return(
            <main className="storefront">
            <section className="main-products">

                {
                this.state.books.map((book, index) => {
                    return <Book book={book} id={index} key={index} />
                })}

            </section>

            <section className="featured-products">
            <h2>Featured</h2>
            {
                this.state.books.map( ( book, index ) => index > this.state.books.length - 3 && ( // limit number of book's to 2
                     <Book key={index} id={index} book={book} />
                ))
            }
            </section>
            </main>
        )
    }  
}