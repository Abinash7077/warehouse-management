import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const WarehouseList = () => {
  const warehouses = useSelector((state) => state.warehouse.warehouse);
  const search = useSelector((state) => state.warehouse.search);
  const filters = useSelector((state) => state.warehouse.filters);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const filteredWarehouses = warehouses.filter((warehouse) => {
    return (
      warehouse.name.toLowerCase().includes(search.toLowerCase()) &&
      (filters.city ? warehouse.city === filters.city : true) &&
      (filters.cluster ? warehouse.cluster === filters.cluster : true) &&
      warehouse.space_available >= filters.spaceAvailable
    );
  });
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentWarehouses = filteredWarehouses.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredWarehouses.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
    <div >
      {currentWarehouses.map((warehouse) => (
        <Link key={warehouse.id} to={`/warehouse/${warehouse.id}`}>
          <div className="border border-gray-400 text-white p-4 mb-2">
            <h2>{warehouse.name}</h2>
            <p>{warehouse.city}</p>
          </div>
        </Link>
      ))}
    </div>
     <div className="flex justify-between items-center mt-4">
     <button
       onClick={handlePreviousPage}
       disabled={currentPage === 1}
       className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-12 py-2 rounded-[7px] text-white rounded disabled:opacity-50"
     >
       Previous
     </button>
     <span className="text-gray-600">
       Page {currentPage} of {totalPages}
     </span>
     <button
       onClick={handleNextPage}
       disabled={currentPage === totalPages}
       className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-12 py-2 rounded-[7px] rounded disabled:opacity-50"
     >
       Next
     </button>
   </div>
   </>
  );
};

export default WarehouseList;
