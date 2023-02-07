import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  addDoc,
  collection,
  DocumentData,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import {
  UserBio,
  UserCred,
  UserEmail,
  UserStore,
} from "../../app-models/user-model";
import { auth,fireStore } from "../../firebaseConfig";


const initialState: UserStore = {
  token: null,
  user: undefined,
};
const usrCollectionRef = collection(fireStore,'user')

export const createUser = createAsyncThunk(
  "user/create",
  async ({ email, password }: UserCred) => {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const webToken = await res.user.getIdToken();
    return webToken;
  }
);
export const signIn = createAsyncThunk(
  "user/signIn",
  async ({ email, password }: UserCred) => {
    const res = await signInWithEmailAndPassword(auth, email, password);
    const webToken = await res.user.getIdToken();
    return webToken;
  }
);
export const userBio = createAsyncThunk(
  "user/userDetail",
  async (payload: UserBio) => {
    await addDoc(usrCollectionRef, payload);
  }
);
export const getUser = createAsyncThunk(
  "user/getUser",
  async ({ email }: UserEmail) => {
    const Query = query(
      usrCollectionRef,
      where("email", "==", `${"user2@gmail.com"}`)
    );
    const data = (await getDocs(Query)).docs[0].data();
    return data;
  }
);

const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      createUser.fulfilled,
      (state, action: PayloadAction<string>) => {
        state.token = action.payload;
      }
    );
    builder.addCase(
      signIn.fulfilled,
      (state, action: PayloadAction<string>) => {
        state.token = action.payload;
      }
    );
    builder.addCase(
      getUser.fulfilled,
      (state, action: PayloadAction<DocumentData>) => {
        state.user = action.payload;
      }
    );
  },
});
export default UserSlice.reducer;
