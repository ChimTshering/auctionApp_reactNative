import {DocumentData} from "firebase/firestore";
import {userBio} from "./../AppStore/Reducers/userSlice";
export type UserRequest = {
  user_name:string,
  phone_number?:string,
  email:string,
  password:string
}
export type UserResponse={
  user_id:string,
  user_name:string,
  user_phone?:string,
  email:string,
}
export type ActiveUser={
  user:UserResponse,
  idToken:string
}
export type UserCred = {
  email:string,
  password:string
}
export type UserBio ={
  name:string,
  email:string,
  phone?:string
}

export type UserStore = {
  token:string | null
  user?:UserBio | DocumentData
}
export type UserEmail={
  email:string,
}
