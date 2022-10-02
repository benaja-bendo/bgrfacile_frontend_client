import {Action, createReducer, on} from "@ngrx/store";
import {profile,setProfile} from "../actions/profile-page.actions";
import {User} from "../../models/user";

export interface State extends User{
}

export const initialState : State = {
};

export const profileReducer = createReducer(
  initialState,
  on(setProfile,(state,user)=> (user)),
  on(profile,(state)=> state)
);
