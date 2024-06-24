from sqlalchemy import Column, Integer, String, Text, ForeignKey
from sqlalchemy.orm import relationship
from database import Base

# Book model representing a book table
class Book(Base):
    __tablename__ = 'books'
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), index=True)
    author = Column(String(255), index=True)
    description = Column(Text)
    genre = Column(String(255))

    reviews = relationship("Review", back_populates="book")

# Review model representing a review table
class Review(Base):
    __tablename__ = 'reviews'
    id = Column(Integer, primary_key=True, index=True)
    book_id = Column(Integer, ForeignKey('books.id'))
    rating = Column(Integer)
    comment = Column(Text)
    
    book = relationship("Book", back_populates="reviews")
