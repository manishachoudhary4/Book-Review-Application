import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('/books')
            .then(response => response.json())
            .then(data => setBooks(data));
    }, []);

    return (
        <div className="book-list">
            {books.map(book => (
                <BookCard key={book.id} book={book} />
            ))}
        </div>
    );
};

export default BookList;
