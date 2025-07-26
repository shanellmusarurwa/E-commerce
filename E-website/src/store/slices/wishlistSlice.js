import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    items: [],
  },
  reducers: {
    addToWishlist: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (!existingItem) {
        state.items.push(action.payload);
      }
    },
    removeFromWishlist: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearWishlist: (state) => {
      state.items = [];
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;

// Selector to get wishlist items count
export const selectWishlistItemsCount = (state) => state.wishlist.items.length;

// Selector to check if a product is in wishlist
export const selectIsInWishlist = (productId) => (state) => 
  state.wishlist.items.some(item => item.id === productId);

export default wishlistSlice.reducer;