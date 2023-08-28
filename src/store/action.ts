import {createAction} from '@reduxjs/toolkit';
import { AppRoute} from '../const';

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');

//export const handleUserMail = createAction(Action.handleUserMail, (userMail: string) => ({
//  payload: userMail,
//}));
