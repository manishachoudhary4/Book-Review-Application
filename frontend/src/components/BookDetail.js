import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewForm from './ReviewForm';

const BookDetail = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        fetch(`/books/${id}`)
            .then(response => response.json())
            .then(data => setBook(data));
    }, [id]);

    if (!book) return <div>Loading...</div>;

    return (
        <div className="book-detail">
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.description}</p>
            <div className="reviews">
                <h3>Reviews</h3>
                {book.reviews.map(review => (
                    <div key={review.id}>
                        <strong>{review.rating} stars</strong>
                        <p>{review.comment}</p>
                    </div>
                ))}
            </div>
            <ReviewForm bookId={id} />
        </div>
    );
};

export default BookDetail;
