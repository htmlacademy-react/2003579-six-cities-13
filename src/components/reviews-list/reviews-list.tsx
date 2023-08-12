import ReviewForm from '../review-form/review-form';
import { ReviewItemType } from '../../types/review-item';
import ReviewItem from '../review-item/review-item';

// type ReviewsListProps = {
//   id: string;
// }

type ReviewsListProps = {
  reviewsArr: ReviewItemType[];
}

function ReviewsList({reviewsArr} : ReviewsListProps): JSX.Element | undefined {

  // function findReviewById(review: ReviewItemType) {
  //   if (id != undefined && review.id != undefined) {
  //     return review.id === id;
  //   }
  // }

  //const reviewsArr: ReviewItemType[] | undefined = generatedReviews.find(findReviewById);

  if (reviewsArr !== undefined && reviewsArr.length > 0) {
    return (
      <section className="offer__reviews reviews">
        <h2 className="reviews__title">
          Reviews · <span className="reviews__amount">{reviewsArr.length}</span>
        </h2>
        <ul className="reviews__list">
          {reviewsArr.map((review) => (
            <ReviewItem key={review.id} {...review}/>
          ))}
        </ul>
        <ReviewForm />
      </section>

    );
  }
  return undefined;
}

export default ReviewsList;
