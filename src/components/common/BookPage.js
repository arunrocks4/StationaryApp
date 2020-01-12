import React from 'react';

class Book extends React.component {
    constructor(props){
        super(props);
    }


    render(){
        let tileInput;
        return(
            <div>
                <h3>
                    Books
                </h3>
                <ui>
                    {this.props.books.map((b,i) => <li key={i}>b.title</li>)}
                </ui>
                <div>
                    <h3>Book Forms</h3>
                    <form onSubmit={e => {
                        e.preventDefault();
                        var input = {title: tileInput.value};
                        this.submitBook(input);
                        e.target.reset();
                    }} >
                    <input type="text" name="title" ref={node => titleInput = node} />
                    <input type="submit" />
                    </form>
                </div>
            </div>

        );
    }
}

export default Book;
