import React, { setState, useEffect } from 'react';


export default class Book extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            book: props.book,
            id: props.id,
            isSelected: false,
            hasError: false
        };
        this.localStorageKey = "bookState";
    }

    /**
     * Handles the on click event for a book article
     * Toggles a css style class that indicates to the users which books are selected.
     * Updates the state isSelected variable.
     * Finally updates the localStorage saves the book, book id and isSelected value.
     */
    handleClick = (e) =>{
        const element = e.target;
        element.classList.toggle("is-selected");
        // set the localStorage state
    }

    /**
     * Responsible for saving the book state to storage.
     * 
     */
    saveToLocalStorage = () => {
        const jsonBook = JSON.stringify(this.book);
        // check the state of isSelected and save its value
        localStorage.setItem(this.localStorageKey, this.state.isSelected);
        // console.log('saved to local store');
        // console.log(localStorage.getItem(this.localStorageKey));
    }

    async componentDidMount() {
        // console.log('### -> component did mount');
    }

    componentDidCatch(error, info) {
        // Display fallback UI
        setState({ hasError: true });
        // log the error to console
        console.log('#error: ' + error + ' || errorInfo: ' + info);
    }
      
    // useEffect(() => {
    //     console.log("useEffect");
    //     let buildBookClassNames = "book ";
        
    //     if( localStorage.getItem(this.localStorageKey) ){ // if we have a saved state set the class to its is-selected state 
    //         buildBookClassNames = buildBookClassNames.concat('is-selected')
    //         console.log(buildBookClassNames);
    //         // console.log('saved state is= ' + localStorage.getItem(this.localStorageKey) );
    //         setState(prevVal => {
    //             return{
    //                 ...prevVal,
    //                 isSelected: localStorage.getItem(this.localStorageKey)
    //             }
    //         });
    //         // console.log('this state is= ' + this.state.isSelected );
    //     }

    //   }, [] )


    render(){
        if(this.state.hasError){
            return <h1>Has error</h1>
        }
        else{
            return (
                <article id={"book" + this.state.id} onClick={(event)=>{this.handleClick(event)}} className="book">                    
                    <div className="bookcover" style={{pointerEvents: 'none'}}>
                        <img style={{pointerEvents: 'none'}} src={ this.state.book.volumeInfo.imageLinks.smallThumbnail } alt={ this.state.book.volumeInfo.title } />
                    </div>

                    <div style={{pointerEvents: 'none'}} className="book-info">
                    <h2>{ this.state.book.volumeInfo.title || '' }</h2>

                    { this.state.book.volumeInfo.authors && this.state.book.volumeInfo.authors.map((author, index) => { // Authors Render
                        return <p className="author" key={index}>{ author }</p>
                    }) }

                    <p>{"Pages: " + this.state.book.volumeInfo.pageCount || '' }</p>

                    <p className="book-desc">{ this.state.book.volumeInfo.description && this.state.book.volumeInfo.description.substring(0, 140) + "..." }</p>
                </div> 
                </article>
            )
        }
    }
}