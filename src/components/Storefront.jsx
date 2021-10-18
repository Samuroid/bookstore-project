import React from 'react';

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
            // console.log(e);
            this.setState({ loading:false });
        }
    }

    render() {
        function handleClick(e){
            const element = e.target;
            element.classList.toggle("is-selected");
        }

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
                    return <article id={"book" + index} key={index} onClick={(event)=>{handleClick(event)}} className="book">
                        <a className="book-clickable" href={'/books/' + index}>
                            
                        </a>
                        <div className="bookcover">
                            <img src={ book.volumeInfo.imageLinks.smallThumbnail } alt={ book.volumeInfo.title } />
                        </div>

                        <div className="book-info" onClick={e=>{e.stopPropagation()}}>
                        <h2>{ book.volumeInfo.title }</h2>

                        { book.volumeInfo.authors.map((author, index) => { // Authors Render
                            return <p className="author">{ author }</p>
                        }) }

                        <p>{"Pages: " + book.volumeInfo.pageCount }</p>

                        <p className="book-desc">{ book.volumeInfo.description.substring(0, 100) + "..." }</p>
                        </div>
                    </article>
                })}

            </section>

            <section className="featured-products">
            <h2>Featured</h2>
            {
                this.state.books.map( ( book, index ) => index < 2 && ( // limit number of book's to 2
                     <article className="book">
                        <div className="bookcover">
                            <img src={ book.volumeInfo.imageLinks.smallThumbnail } alt={ book.volumeInfo.title } />
                        </div>

                        <div className="book-info">
                        <h2>{ book.volumeInfo.title }</h2>

                        { book.volumeInfo.authors.map((author, index) => { // Authors Render
                            return <p className="author">{ author }</p>
                        }) }

                        <p>{"Pages: " + book.volumeInfo.pageCount }</p>

                        <p className="book-desc">{ book.volumeInfo.description.substring(0, 100) + "..." }</p>
                        </div>
                    </article>
                ))}
            </section>
            </main>
        )
    }  
}