export type userInitialState = {
  user?:FireBaseUser,
  user_id?:string,
  userStatus:API_STATUS | unknown
}

export type SignUp = {
  email:string,
  password:string,
}
export type SignUpRes = {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
};

export type SignInRes = SignUpRes & {registered:boolean} 

export enum API_STATUS {
LOADING = 'loading',
FULFILLED='fulfilled',
REJECTED='rejected'
}

export type FireBaseUser = {
    displayName: string | null;
    email: string | null;
  };