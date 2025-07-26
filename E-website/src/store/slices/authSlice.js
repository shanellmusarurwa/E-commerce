import { createSlice } from '@reduxjs/toolkit';
import { onAuthStateChanged, signOut } from 'firebase/auth'; 
import { auth } from '../../firebase/config';

const getStoredUser = () => {
  try {
    return JSON.parse(localStorage.getItem('authUser'));
  } catch (error) {
    console.error('Failed to parse stored user data:', error);
    return null;
  }
};

const storedUser = getStoredUser();

const initialState = {
  user: storedUser || null,
  isAuthenticated: !!storedUser,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
      state.error = null;
      
      
      const userDataToStore = {
        uid: action.payload.uid,
        email: action.payload.email,
        name: action.payload.name,
        photoURL: action.payload.photoURL
      };
      localStorage.setItem('authUser', JSON.stringify(userDataToStore));
    },
    
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem('authUser');
    },
    
    updateUserProfile: (state, action) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
        localStorage.setItem('authUser', JSON.stringify(state.user));
      }
    },
    
    setAuthState: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
    },
    
    clearError: (state) => {
      state.error = null;
    }
  },
});


export const logoutUser = () => async (dispatch) => {
  try {
    await signOut(auth);
    dispatch(logout());
  } catch (error) {
    console.error('Logout error:', error);
  }
};


export const listenToAuthChanges = () => (dispatch) => {
  const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser) {
      const userData = {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        name: firebaseUser.displayName || firebaseUser.email.split('@')[0],
        photoURL: firebaseUser.photoURL
      };
      dispatch(setAuthState(userData));
      localStorage.setItem('authUser', JSON.stringify(userData));
    } else {
      dispatch(logout());
    }
  });
  
  return unsubscribe; 
};

export const { 
  loginStart,
  loginSuccess, 
  loginFailure,
  logout, 
  updateUserProfile,
  setAuthState,
  clearError
} = authSlice.actions;

export default authSlice.reducer;