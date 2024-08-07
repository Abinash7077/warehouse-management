import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';
import WarehouseList from '../components/WarehouseList';
const WarehouseListPage = () => {
  return (
    <div className="p-4 pt-10 bg-slate-800">
      <SearchBar />
      <Filter />
      <WarehouseList />
    </div>
  );
};

export default WarehouseListPage;
