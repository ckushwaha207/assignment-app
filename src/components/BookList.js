import React, { Component } from "react";
import Book from "./Book";
import BookDetails from "./BookDetails";

import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router-dom";

const BOOK_FEED_QUERY = gql`
  {
    bookFeed {
      books {
        id
        name
        description
        publisher
        paperback
        languages
        isbn_10
        isbn_13
        price
        specifications {
          id
          title
          description
          image
        }
      }
    }
  }
`;

class BookList extends Component {
  constructor(props) {
    super(props);
    this.updateCartAfterAddToCart = this.updateCartAfterAddToCart.bind(this);
  }

  updateCartAfterAddToCart(store, cart) {
    console.log("Cart: ", cart);
    console.log("Store: ", store);
    this.props.updateCartListener(cart);
  }

  render() {
    let bookId = this.props && this.props.match && this.props.match.params.id;
    console.log(this.props);

    return (
      <Query query={BOOK_FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>;
          if (error) return <div>Error</div>;

          const booksToRender = data.bookFeed.books;
          const bookIndex = data.bookFeed.books.findIndex(b => b.id === bookId);
          const selectedBook = data.bookFeed.books[bookIndex];
          const bookDetails = selectedBook ? (
            <BookDetails
              key={selectedBook.id}
              book={selectedBook}
              updateCartAfterAddToCart={this.updateCartAfterAddToCart}
            />
          ) : null;

          return (
            <div className="container" id="product-list">
              {bookDetails}
              {booksToRender.map(book => (
                <Link
                  key={book.id}
                  to={{
                    pathname: `/books/${book.id}`
                  }}
                >
                  <Book key={book.id} book={book} />
                </Link>
              ))}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default BookList;
