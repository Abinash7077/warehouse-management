import { createSlice } from '@reduxjs/toolkit';
import warehouse from '../warehouse.json'

const initialState = {
  warehouse,
  filters: {
    city: '',
    cluster: '',
    spaceAvailable: 0,
  },
  search: '',
};

const warehouselice = createSlice({
  name: 'warehouse',
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
    setFilter(state, action) {
      state.filters = { ...state.filters, ...action.payload };
    },
    editWarehouse(state, action) {
      const index = state.warehouse.findIndex(w => w.id === action.payload.id);
      if (index !== -1) {
        state.warehouse[index] = action.payload;
      }
    },
  },
});

export const { setSearch, setFilter, editWarehouse } = warehouselice.actions;
export default warehouselice.reducer;
