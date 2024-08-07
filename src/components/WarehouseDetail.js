import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { editWarehouse } from '../store/warehouseSlice';
import { useNavigate } from 'react-router-dom';
const WarehouseDetail = () => {
  const navigate=useNavigate();

  const { id } = useParams();
  const warehouse = useSelector((state) =>
    state.warehouse.warehouse.find((w) => w.id === parseInt(id))
  );

  const [formData, setFormData] = useState({ ...warehouse });
  const [customFields, setCustomFields] = useState([]);
  const [newField, setNewField] = useState('');

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData,"form")
    dispatch(editWarehouse({ ...formData, customFields }));
    navigate('/')
  };

  const handleAddField = () => {
    if (newField) {
      setCustomFields([...customFields, { name: newField, value: '' }]);
      setNewField('');
    }
  };

  const handleCustomFieldChange = (index, value) => {
    const updatedFields = [...formData.customFields];
    updatedFields[index].value = value;
    setFormData({ ...formData, customFields: updatedFields });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          type="text"
          name="cluster"
          value={formData.cluster}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          type="number"
          name="space_available"
          value={formData.space_available}
          onChange={handleChange}
          className="border p-2 w-full"
        />
       <div className="flex items-center text-white"> <label >
          Live Status:
          <input
            type="checkbox"
            name="is_live"
            checked={formData.is_live}
            onChange={(e) => setFormData({ ...formData, is_live: e.target.checked })}
            className="ml-2"
          />
        </label></div>
        {customFields.map((field, index) => (
          <input
            key={index}
            type="text"
            placeholder={field.name}
            value={field.value}
            onChange={(e) => handleCustomFieldChange(index, e.target.value)}
            className="border p-2 w-full"
          />
        ))}
        <div className="flex">
          <input
            type="text"
            value={newField}
            onChange={(e) => setNewField(e.target.value)}
            placeholder="New custom field"
            className="border p-2 w-full"
          />
          <button
            type="button"
            onClick={handleAddField}
            className="bg-green-500 text-white p-2 ml-2"
          >
            Add
          </button>
        </div>
        <div className="flex items-center justify-end"><button type="submit" className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-12 py-2 rounded-[7px] text-[18px]">
          Save
        </button></div>
      </form>
    </div>
  );
};

export default WarehouseDetail;
