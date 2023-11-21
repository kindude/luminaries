import React from "react";
import { Link } from "react-router-dom";
import { Review } from "../../types/Review";
import { Book } from "../../types/Book";

interface Props {
  reviews: Review[];
}

const ReviewCard: React.FC<Props> = ({ reviews }) => {


  if (!reviews || reviews.length === 0) {
    return <div>No review available</div>;
  }

  const review = reviews[0];

  if (!review || !review.book) {
    return <div>No review details available</div>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-4">
      <h2 className="text-3xl font-bold mb-4 text-center">Last Month's Review</h2>
      <div className="text-gray-700 text-center mb-6">
        <img
          src={require("../../assets/banner.jpg")}
          alt="banner"
          style={{ width: "100%", height: "20rem" }}
        />
      </div>
      <div className="flex items-center justify-center">
        <img
          src={review.book.cover_url}
          alt="book"
          className="w-1/4 h-40 mr-8"
        />
        <p>{review.description} by {review.user.username}</p>
        

      </div>
      <div className="flex items-center justify-center mt-4">
      
        <Link
          to="/last-month-review"
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default ReviewCard;
