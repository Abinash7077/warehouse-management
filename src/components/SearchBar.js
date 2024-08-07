import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearch } from '../store/warehouseSlice';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search warehouses..."
      className="border p-2 mb-4 w-full"
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
