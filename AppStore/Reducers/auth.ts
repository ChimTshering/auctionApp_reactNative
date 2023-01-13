import { API_STATUS, FireBaseUser, SignInRes, userInitialState } from "./../../constent/users.constent";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, UserCredential} from 'firebase/auth'
import axios from "axios";
import { SignUp } from "../../constent/users.constent";
import {auth} from'../../firebaseConfig'


export const signUp = createAsyncThunk<UserCredential, SignUp>(
  "user/signUp",
  async (payload: SignUp) => {
    const res = await createUserWithEmailAndPassword(
      auth,
      payload.email,
      payload.password
    );
    return res;
  }
);

export const signUserIn = createAsyncThunk(
  "user/signIn",
  async (payload: SignUp) => {
    const res = await signInWithEmailAndPassword(
      auth,
      payload.email,
      payload.password
    );
    return res;
  }
);
const initialState: userInitialState = {
  user: undefined,
  user_id: undefined,
  userStatus: undefined,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUp.pending, (state) => {
      state.userStatus = API_STATUS.LOADING
    });
    builder.addCase(signUp.fulfilled, (state,action:PayloadAction<UserCredential>) => {
      const name = action.payload.user.displayName
      const email = action.payload.user.email
      state.user = {...initialState.user, displayName:name, email:email }
      state.user_id = action.payload.user.uid
      state.userStatus = API_STATUS.FULFILLED
    });
    builder.addCase(signUp.rejected, (state) => { 
      state.userStatus = API_STATUS.REJECTED;
    });
     builder.addCase(
       signUserIn.fulfilled,
       (state, action: PayloadAction<UserCredential>) => {
         const name = action.payload.user.displayName;
         const email = action.payload.user.email;
         state.user = { ...initialState.user, displayName: name, email: email };
         state.user_id = action.payload.user.uid;
       }
     );
  },
});
export default AuthSlice.reducer;
export const {} = AuthSlice.actions;
