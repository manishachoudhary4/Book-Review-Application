import React, { useState } from 'react';

const ReviewForm = ({ bookId }) => {
    const [rating, setRating] = useState(1);
    const [comment, setComment] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(`/books/${bookId}/reviews/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ rating, comment }),
        });

        if (response.ok) {
            setRating(1);
            setComment('');
            // Optionally refresh the book details to show the new review
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Rating</label>
                <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div>
                <label>Comment</label>
                <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
            </div>
            <button type="submit">Submit Review</button>
        </form>
    );
};

export default ReviewForm;
