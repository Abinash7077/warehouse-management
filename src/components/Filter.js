import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../store/warehouseSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const warehouse = useSelector((state) => state.warehouse.warehouse);

  const cities = [...new Set(warehouse.map((warehouse) => warehouse.city))];
  const clusters = [...new Set(warehouse.map((warehouse) => warehouse.cluster))];

  const handleFilter = (e) => {
    const { name, value } = e.target;
    dispatch(setFilter({ [name]: value }));
  };

  return (
    <div className="mb-4">
      <select name="city" onChange={handleFilter} className="border p-2 mr-2">
        <option value="">All Cities</option>
        {cities.map((city) => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>
      <select name="cluster" onChange={handleFilter} className="border p-2 mr-2">
        <option value="">All Clusters</option>
        {clusters.map((cluster) => (
          <option key={cluster} value={cluster}>{cluster}</option>
        ))}
      </select>
      <input
        type="number"
        name="spaceAvailable"
        placeholder="Space available"
        onChange={handleFilter}
        className="border p-2"
      />
    </div>
  );
};

export default Filter;
