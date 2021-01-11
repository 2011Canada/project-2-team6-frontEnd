import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from "react-router-dom";
import { bookAuthors } from '../utils/authorLogic';
import { FancyBorder } from './fancy-border/FancyBorder';

const Book = ({ book }) => {
    return (
        <div>
            <FancyBorder>
                <div style={{
                    alignItems: "center",
                    marginTop: "2em",
                    marginLeft: "34%",
                    width: 300,
                }}>
                    <img alt={`${book.volumeInfo.title} book`} src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} />
                    <div>
                        <h3>{book.volumeInfo.title}</h3>
                        <p>{bookAuthors(book.volumeInfo.authors)}</p>
                        <p>{book.volumeInfo.publishedDate}</p>

                        <Link to={`/book/${book.id}`} style={{ textDecoration: 'none' }}>
                            <Button variant="outlined" color="primary">
                                Show Details
                            </Button>
                        </Link>
                    </div>
                </div>
            </FancyBorder>
        </div>
    )
};

const BooksList = ({ books }) => {
    return (
        <ul>
            {
                books.items.map((book, index) => {
                    return (
                        <Book book={book} key={index} />
                    );
                })
            }
        </ul>
    );
};

export default BooksList;