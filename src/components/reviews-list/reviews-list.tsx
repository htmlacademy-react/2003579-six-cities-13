import ReviewForm from '../review-form/review-form';
import { ReviewItemType } from '../../types/review-item';
import ReviewItem from '../review-item/review-item';
import { getMostRecentReviews } from '../../utils';

type ReviewsListProps = {
  reviewsArr: ReviewItemType[];
  offerId?: string;
}

function ReviewsList({reviewsArr, offerId} : ReviewsListProps): JSX.Element | undefined {

  let sortedByDateReviewsArr = getMostRecentReviews(reviewsArr);

  if(sortedByDateReviewsArr.length > 10) {
    sortedByDateReviewsArr = sortedByDateReviewsArr.slice(0, 10);
  }

  if (sortedByDateReviewsArr !== undefined && sortedByDateReviewsArr.length > 0) {
    return (
      <section className="offer__reviews reviews">
        <h2 className="reviews__title">
          Reviews · <span className="reviews__amount">{sortedByDateReviewsArr.length}</span>
        </h2>
        <ul className="reviews__list">
          {sortedByDateReviewsArr.map((review) => (
            <ReviewItem key={review.id} {...review}/>
          ))}
        </ul>
        {offerId && <ReviewForm offerId={offerId}/>}
      </section>
    );
  }
  return undefined;
}

export default ReviewsList;
