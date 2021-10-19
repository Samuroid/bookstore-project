import React from 'react';

export default class Book extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            book: props.book,
            id: props.id,
            isSelected: false
        };
    }

    handleClick = (e) =>{
        const element = e.target;
        element.classList.toggle("is-selected");
        this.setState(prevVal=>{
            return({
                ...prevVal,
                isSelected: (this.state.isSelected ? false : true)
            });
        })
    }

    render(){
                    return (
                        <article id={"book" + this.state.id} key={this.state.id} onClick={(event)=>{this.handleClick(event)}} className="book">
                        <a className="book-clickable" href={'/books/' + this.state.id}>
                            
                        </a>                     
                        <div className="bookcover">
                            <img src={ this.state.book.volumeInfo.imageLinks.smallThumbnail } alt={ this.state.book.volumeInfo.title } />
                        </div>

                        <div className="book-info" onClick={e=>{e.stopPropagation()}}>
                        <h2>{ this.state.book.volumeInfo.title }</h2>

                        { this.state.book.volumeInfo.authors.map((author, index) => { // Authors Render
                            return <p className="author">{ author }</p>
                        }) }

                        <p>{"Pages: " + this.state.book.volumeInfo.pageCount }</p>

                        <p className="book-desc">{ this.state.book.volumeInfo.description.substring(0, 140) + "..." }</p>
                        </div>
                    </article>
                )
    }
}