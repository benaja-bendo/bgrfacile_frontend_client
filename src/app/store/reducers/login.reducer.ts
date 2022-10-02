import {Action, createReducer, on} from "@ngrx/store";
import {login,setLogin} from "../actions/login-page.actions";

export interface State{
  username?:string;
  password?:string;
}

export const initialState : State = {
};

export const loginReducer = createReducer(
  initialState,
  on(setLogin,(state,user)=> ({username:user.email, password:user.password})),
  on(login,(state)=> state)
);
