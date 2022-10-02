import { createAction, props } from '@ngrx/store';

export const setLogin = createAction(
  '[Login Page] set Login',
  props<{ email: string; password: string }>()
);

export const login = createAction('[Login Page] getLogin');
