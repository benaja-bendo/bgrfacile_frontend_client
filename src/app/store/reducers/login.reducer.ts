import {Action, createReducer, on} from "@ngrx/store";
import {login,setLogin} from "../actions/login-page.actions";

export interface State{
  username:string;
  password:string;
}

export const initialState : State = {
  username:"",
  password:""
};

export const loginReducer = createReducer(
  initialState,
  on(setLogin,(state,user)=> ({username:user.username, password:user.password})),
  on(login,(state)=> state)
);
