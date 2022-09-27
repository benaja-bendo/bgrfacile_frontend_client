import { createAction, props } from '@ngrx/store';

export const setLogin = createAction(
  '[Login Page] set Login',
  props<{ username: string; password: string }>()
);

export const login = createAction('[Login Page] getLogin');
