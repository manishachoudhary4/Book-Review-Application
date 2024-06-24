from pydantic import BaseModel
from typing import List

# Base schema for Review
class ReviewBase(BaseModel):
    rating: int
    comment: str

# Schema for creating a new Review
class ReviewCreate(ReviewBase):
    pass

# Schema for reading Review data
class Review(ReviewBase):
    id: int
    book_id: int

    class Config:
        orm_mode = True

# Base schema for Book
class BookBase(BaseModel):
    title: str
    author: str
    description: str
    genre: str

# Schema for creating a new Book
class BookCreate(BookBase):
    pass

# Schema for reading Book data including reviews
class Book(BookBase):
    id: int
    reviews: List[Review] = []

    class Config:
        orm_mode = True
