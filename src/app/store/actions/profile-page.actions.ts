import { createAction, props } from '@ngrx/store';
import {User} from "../../models/user";

export const setProfile = createAction(
  '[profile Page] set User',
  props<User>()
);

export const profile = createAction('[Profile Page] get User');
