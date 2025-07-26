import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

// Load cart from localStorage
const loadCartFromStorage = () => {
  try {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : { items: [], total: 0 };
  } catch (err) {
    console.error('Failed to load cart:', err);
    return { items: [], total: 0 };
  }
};

// Save cart to localStorage
const saveCartToStorage = (items) => {
  const total = calculateTotal(items);
  localStorage.setItem('cart', JSON.stringify({ items, total }));
  return total;
};

// Utility to calculate total
const calculateTotal = (items) =>
  items.reduce((sum, item) => sum + item.price * item.quantity, 0);

const cartSlice = createSlice({
  name: 'cart',
  initialState: loadCartFromStorage(),
  reducers: {
    addToCart: (state, action) => {
      const existing = state.items.find(item => item.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
        toast.info(`${action.payload.name} quantity increased`);
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
        toast.success(`${action.payload.name} added to cart`);
      }
      state.total = saveCartToStorage(state.items);
    },

    removeFromCart: (state, action) => {
      const removedItem = state.items.find(item => item.id === action.payload);
      state.items = state.items.filter(item => item.id !== action.payload);
      if (removedItem) {
        toast.error(`${removedItem.name} removed from cart`);
      }
      state.total = saveCartToStorage(state.items);
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item && quantity > 0) {
        item.quantity = quantity;
        toast.info(`${item.name} quantity updated`);
      }
      state.total = saveCartToStorage(state.items);
    },

    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      localStorage.removeItem('cart');
      toast.warn('Cart has been cleared');
    }
  }
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
