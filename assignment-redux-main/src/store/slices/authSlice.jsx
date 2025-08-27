import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth, db } from "../../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const handleSuccess = (msg) =>
  toast.success(msg, {
    position: "top-center",   
    autoClose: 4000,
    theme: "dark",
  });

const handleError = (msg) =>
  toast.error(msg, {
    position: "top-center",   
    autoClose: 4000,
    theme: "dark",
  });

export const signup = createAsyncThunk(
  "auth/signup",
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);

      await setDoc(doc(db, "users", user.uid), {
        name,
        email: user.email,
        uid: user.uid,
      });

      handleSuccess("SignUp has been Successfully ");
      return { email: user.email, uid: user.uid, name };
    } catch (error) {
      handleError(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      localStorage.setItem("userId", user.uid);
      const userDoc = await getDoc(doc(db, "users", user.uid));
      localStorage.setItem("userData", JSON.stringify(userDoc.data()));

      handleSuccess("Login has been Successfully");
      return { email: user.email, uid: user.uid };
    } catch (error) {
      handleError(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await signOut(auth);
  localStorage.clear();
  handleSuccess("Logout has been successfully ");
  return null;
});

export const fetchAllUsers = createAsyncThunk(
  "auth/fetchAllUsers",
  async (_, { rejectWithValue }) => {
    try {
      const snapshot = await getDocs(collection(db, "users"));
      const users = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      return users;
    } catch (error) {
      handleError(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  user: null,
  users: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetState: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(signup.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })

      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })

      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.users = [];
        state.isSuccess = false;
      })

      .addCase(fetchAllUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(fetchAllUsers.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { resetState } = authSlice.actions;
export default authSlice.reducer;
