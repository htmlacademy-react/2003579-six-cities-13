import {NameSpace} from '../../const';
import {State} from '../../types/state';
import { ReviewItemType } from '../../types/review-item';

export const getReviewsList = (state: State): ReviewItemType[] => state[NameSpace.Reviews].reviewsList;
export const getReviewsLoadingStatus = (state: State): boolean => state[NameSpace.Reviews].isReviewsListLoading;
export const getReviewsFetchingErrorStatus = (state: State): boolean => state[NameSpace.Reviews].hasReviewsListFetchingError;
export const getUserReviewSendingStatus = (state: State): boolean => state[NameSpace.Reviews].isReviewSending;
export const getUserReviewSendingErrorStatus = (state: State): boolean => state[NameSpace.Reviews].hasReviewSendingError;
