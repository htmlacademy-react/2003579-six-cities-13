import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { sendReviewAction } from '../../store/api-actions';
import { getUserReviewSendingErrorStatus, getUserReviewSendingStatus } from '../../store/reviews-process/reviews-process.selector';

type ReviewFormProps ={
  offerId: string;
}

function ReviewForm({offerId}: ReviewFormProps): JSX.Element {
  const isReviewSending = useAppSelector(getUserReviewSendingStatus);
  const hasSendingError = useAppSelector(getUserReviewSendingErrorStatus);

  const [reviewFormData, setReviewFormData] = useState({
    rating: 0,
    review: ''
  });

  const dispatch = useAppDispatch();

  let isSubmittingDisabled : boolean;

  if(!isReviewSending || !hasSendingError || reviewFormData.rating === 0 || reviewFormData.review === '') {
    isSubmittingDisabled = false;
  } else {
    isSubmittingDisabled = true;
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setReviewFormData((prevValues) => ({ ...prevValues, [name]: value }));
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const rating = reviewFormData.rating;
    const review = reviewFormData.review;
    const id = offerId;

    if (rating !== null && review !== null) {
      dispatch(sendReviewAction({rating, review,id, cb: () => {
        setReviewFormData({
          rating: 0,
          review: '',
        });
      }}));
    }
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value={reviewFormData.rating}
          id="5-stars"
          type="radio"
          disabled={isReviewSending}
          onChange={handleInputChange}
        />
        <label
          htmlFor="5-stars"
          className="reviews__rating-label form__rating-label"
          title="perfect"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value={reviewFormData.rating}
          id="4-stars"
          type="radio"
          disabled={isReviewSending}
          onChange={handleInputChange}
        />
        <label
          htmlFor="4-stars"
          className="reviews__rating-label form__rating-label"
          title="good"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value={reviewFormData.rating}
          id="3-stars"
          type="radio"
          disabled={isReviewSending}
          onChange={handleInputChange}
        />
        <label
          htmlFor="3-stars"
          className="reviews__rating-label form__rating-label"
          title="not bad"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value={reviewFormData.rating}
          id="2-stars"
          type="radio"
          disabled={isReviewSending}
          onChange={handleInputChange}
        />
        <label
          htmlFor="2-stars"
          className="reviews__rating-label form__rating-label"
          title="badly"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value={reviewFormData.rating}
          id="1-star"
          type="radio"
          disabled={isReviewSending}
          onChange={handleInputChange}
        />
        <label
          htmlFor="1-star"
          className="reviews__rating-label form__rating-label"
          title="terribly"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        minLength={50}
        maxLength={300}
        disabled={isReviewSending}
        value={reviewFormData.review}
        onChange={handleInputChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your
          stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled = {isSubmittingDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
